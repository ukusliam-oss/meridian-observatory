// Meridian performance scenarios (M-003B). Measurements, not gates: each test records rows to .cache/perf/raw.jsonl,
// and perf/summarise.mjs turns them into perf/results/. Run alone with one worker: `npm run perf`.
// All times are page time (performance.now(), ms). Definitions (perf/README.md has the full list):
//   Chapter Ready   page start → html.is-ready and the globe's first frame, minus the test's own delay in pressing
//                   "Enter quietly" (gate: page start → that button exists, which is when the loader has finished)
//   Response        click → the first frame in which the page scrolled
//   Scene Ready     click → destination active, camera still for 3 frames, its painted textures shown
//   Terrain Ready   click → the destination's own terrain composition finished (null when it was cached or not needed)
//   Heights Ready   click → the destination's "Loading heights" line removed (scenes with a landscape only)
//   Paper 2 usable  Paper 2's page start → 6 sources, 5 parts and is-ready
import { test, expect } from '@playwright/test';
import { menuJump, settle, viewport } from '../lib/meridian.mjs';
import { instrument, netMeter, OBSERVE, when, armClick, clickTime, C, watchCamera, armCamera, record } from '../lib/perf.mjs';

const RUNS = +(process.env.PERF_RUNS || 3);
const SLOW = { latency: 150, downloadThroughput: 200 * 1024, uploadThroughput: 94 * 1024 }; // about 1.6 Mbit/s down, 150 ms
const WIDTHS = ['390x844', '1440x900'];
const env = (vp, extra = {}) => ({ vp, gpu: process.env.GPU === '0' ? 'swiftshader' : 'gpu', ...extra });
const round = v => (v == null ? null : Math.round(v));
const marks = page => page.evaluate(() => window.__perf.marks);
const sceneId = (page, k) => page.evaluate(k => document.querySelectorAll('.sc')[k].id, k);

async function setup(page, { instrumented = true, slow = false } = {}) {
  await page.addInitScript(OBSERVE);
  const net = await netMeter(page);
  if (instrumented) await instrument(page);
  if (slow) await net.emulate(SLOW);
  return net;
}

// open a chapter and enter it; Chapter Ready excludes the test's own delay in pressing the button
async function enter(page, path) {
  const quiet = page.getByRole('button', { name: 'Enter quietly' });
  await page.goto(path); await quiet.waitFor({ timeout: 120_000 });
  await armClick(page); await quiet.click();
  await when(page, C.ready, 60_000); await when(page, '(window.__meridianWorld?.stats.frames ?? 0) > 0', 60_000);
  const m = await marks(page), click = await clickTime(page);
  const ready = Math.max(m.ready ?? 0, m.firstFrame ?? 0);
  return { gate: round(m.gate), chapterReady: round(m.gate + Math.max(0, ready - click)), afterEnter: round(ready - click) };
}

// wait for the arrival at scene k (id) after page time t0, with every condition watched at once
async function arrival(page, k, id, t0, { max = 60_000 } = {}) {
  const dem = await page.locator(`#${id} [data-dem]`).count();
  let started = null;
  const [sr, tr, hr] = await Promise.all([
    when(page, `${C.active(k)} && ${C.still} && ${C.shown(id, t0)}`, max),
    when(page, C.started(id, t0), 8000).then(s => (started = s) ? when(page, C.terrain(id, t0), max) : null),
    dem ? when(page, `!document.querySelector('#${id} [data-dem]')`, max) : null,
  ]);
  const state = started ? 'composed' : await page.evaluate(id => (window.__mx.tDone.some(x => x.id === id && x.any) ? 'cached' : 'none'), id);
  return { sceneReady: round(sr && sr - t0), terrainReady: round(tr && tr - t0), terrain: state, heightsReady: round(hr && hr - t0) };
}

// a move started by a click on the scene menu
async function move(page, k) {
  const id = await sceneId(page, k);
  await watchCamera(page); await armCamera(page);
  const y0 = await page.evaluate(() => scrollY);
  await armClick(page); await menuJump(page, k);
  await when(page, 'window.__click != null', 10_000); const click = await clickTime(page);
  const [moved, a] = await Promise.all([when(page, `scrollY !== ${y0}`, 10_000), arrival(page, k, id, click)]);
  const ev = await page.evaluate(c => (window.__perf.events.filter(e => e.start >= c - 1).sort((a, b) => b.duration - a.duration)[0] || null), click);
  return { id, response: round(moved && moved - click), ...a, clickEventMs: ev && round(ev.duration) };
}

const engine = page => page.evaluate(() => ({ frames: window.__meridianWorld.stats.frames, mx: window.__mx && { tStart: window.__mx.tStart.length, tiles: window.__mx.tiles, paints: window.__mx.paints.length, evictions: window.__mx.evictions.length, cache: window.__mx.cache(), newMB: +(window.__mx.newBytes / 2 ** 20).toFixed(1) } }));
const delta = (a, b) => ({ frames: b.frames - a.frames, compositions: b.mx.tStart - a.mx.tStart, tiles: b.mx.tiles - a.mx.tiles, paints: b.mx.paints - a.mx.paints, evictions: b.mx.evictions - a.mx.evictions, uploadMB: +(b.mx.newMB - a.mx.newMB).toFixed(1), cacheMB: b.mx.cache.mb });
const settled = async page => expect(await settle(page, { quiet: 2000, max: 90_000 }), 'the globe settles').toBe(true);

// one worker (npm run perf); tests stay independent, so one failure does not skip the rest

for (let run = 1; run <= RUNS; run++) for (const vpName of WIDTHS) test.describe(`run ${run} at ${vpName}`, () => {
  const vp = viewport(vpName);
  test.use({ viewport: { width: vp.width, height: vp.height } });

  test('home: cold, then warm', async ({ page }) => {
    const net = await setup(page, { instrumented: false });
    for (const pass of ['cold', 'warm']) {
      const n0 = net.snapshot();
      if (pass === 'cold') await page.goto('index.html'); else await page.reload();
      const shown = await when(page, `(() => { const b = document.querySelector('[data-boot]'); if (!b) return true; const s = getComputedStyle(b); return s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0; })()`, 60_000);
      await page.waitForLoadState('load');
      const v = await page.evaluate(() => new Promise(r => { let lcp = null, cls = 0; new PerformanceObserver(l => { lcp = l.getEntries().at(-1).startTime; }).observe({ type: 'largest-contentful-paint', buffered: true }); new PerformanceObserver(l => l.getEntries().forEach(e => { if (!e.hadRecentInput) cls += e.value; })).observe({ type: 'layout-shift', buffered: true }); setTimeout(() => r({ fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? null, lcp, cls: +cls.toFixed(4) }), 300); }));
      record({ scenario: 'home', pass, ...env(vpName), run, fcp: round(v.fcp), lcp: round(v.lcp), loaderGone: round(shown), cls: v.cls, net: net.since(n0), cpu: await net.cpu() });
    }
  });

  for (const [path, k] of [['history/kq6.html', 13], ['economics/macro-policy.html', 14], ['geography/tectonics.html', 14]]) test(`${path}: entry, jump to scene ${k + 1}, idle, revisit`, async ({ page }) => {
    const net = await setup(page);
    const n0 = net.snapshot(), c0 = await net.cpu();
    const e = await enter(page, path);
    const nEntry = net.since(n0), cEntry = await net.cpu();
    record({ scenario: 'chapter-entry', page: path, ...env(vpName), run, ...e, net: nEntry, cpuTaskS: +(cEntry.TaskDuration - c0.TaskDuration).toFixed(2), heapMB: Math.round(cEntry.JSHeapUsedSize / 2 ** 20) });
    await page.waitForTimeout(3000); // the opening globe drifts and never settles: a fixed pause before the jump
    const n1 = net.snapshot(), x0 = await engine(page);
    const m = await move(page, k);
    await settled(page);
    const x1 = await engine(page);
    record({ scenario: 'jump', page: path, scene: k + 1, ...env(vpName), run, ...m, net: net.since(n1), work: delta(x0, x1) });
    const i0 = await engine(page), ci0 = await net.cpu(); await page.waitForTimeout(10_000); const i1 = await engine(page), ci1 = await net.cpu();
    record({ scenario: 'idle', page: path, scene: k + 1, ...env(vpName), run, ...delta(i0, i1), cpuTaskS: +(ci1.TaskDuration - ci0.TaskDuration).toFixed(2) });
    await menuJump(page, k - 1); await settled(page);
    const n2 = net.snapshot();
    const back = await move(page, k); await settled(page);
    record({ scenario: 'revisit', page: path, scene: k + 1, ...env(vpName), run, ...back, net: net.since(n2), memory: (await engine(page)).mx.cache });
  });

  test('Geography: link to scene 15, menu jump to 26, rapid scroll back', async ({ page }) => {
    const net = await setup(page);
    // a link straight to scene 15: the jump starts behind the gate, so this one is timed from page start
    const quiet = page.getByRole('button', { name: 'Enter quietly' });
    await page.goto('geography/tectonics.html#tq-14'); await quiet.waitFor({ timeout: 120_000 });
    await watchCamera(page); await quiet.click();
    const a = await arrival(page, 14, 'tq-14', 0);
    await settled(page);
    const done = await page.evaluate(() => Math.max(...window.__mx.tDone.map(x => x.t)));
    record({ scenario: 'link-15', ...env(vpName), run, gate: round((await marks(page)).gate), ...a, allTerrainDone: round(done), tiles: (await engine(page)).mx.tiles, net: net.snapshot() });
    const n1 = net.snapshot(); const m = await move(page, 25); await settled(page);
    record({ scenario: 'menu-26', ...env(vpName), run, ...m, net: net.since(n1) });
    // rapid scroll from 26 back to scene 4 over 3 s
    await armCamera(page);
    const n2 = net.snapshot(), t0 = await page.evaluate(() => { window.__meridianLenis.scrollTo(document.querySelectorAll('.sc')[3].querySelector('.sc__card').getBoundingClientRect().top + scrollY - innerHeight * 0.3, { duration: 3, force: true }); return performance.now(); });
    const r = await arrival(page, 3, 'tq-3', t0); await settled(page);
    record({ scenario: 'rapid-scroll', ...env(vpName), run, ...r, net: net.since(n2), tiles: (await engine(page)).mx.tiles });
  });

  test('Geography → Paper 2, right after a jump and after settling', async ({ page }) => {
    const net = await setup(page);
    for (const wait of ['immediate', 'settled']) {
      await enter(page, 'geography/tectonics.html'); await menuJump(page, 14);
      if (wait === 'immediate') await page.waitForTimeout(400); else await settled(page);
      const n0 = net.snapshot();
      await page.goto('history/kq6-paper2.html'); await when(page, C.p2, 90_000);
      const nav = await page.evaluate(() => { const n = performance.getEntriesByType('navigation')[0]; return { usable: window.__perf.marks.paper2, domInteractive: n.domInteractive, load: n.loadEventEnd }; });
      record({ scenario: 'geo-to-paper2', wait, ...env(vpName), run, usable: round(nav.usable), domInteractive: round(nav.domInteractive), load: round(nav.load), net: net.since(n0) });
    }
  });

  // the slow one: run 1 only (two widths), unless PERF_READING=all
  if (run === 1 || process.env.PERF_READING === 'all') test('Geography: sequential reading, scenes 1 to 17 at 5 s each', async ({ page }) => {
    const net = await setup(page);
    await enter(page, 'geography/tectonics.html'); await watchCamera(page);
    const rows = [];
    for (let k = 0; k <= 16; k++) {
      const id = await sceneId(page, k); await armCamera(page);
      const t0 = await page.evaluate(k => { const q = document.querySelectorAll('.sc')[k].querySelector('.sc__card'); window.__meridianLenis.scrollTo(q.getBoundingClientRect().top + scrollY - innerHeight * 0.3, { duration: 1.2, force: true }); return performance.now(); }, k);
      const sr = await when(page, `${C.active(k)} && ${C.shown(id, t0)}`, 10_000);
      await page.waitForTimeout(5000);
      const st = await page.evaluate(id => ({ tr: window.__mx.tDone.find(x => x.id === id && x.any)?.t ?? null, needed: window.__mx.tStart.some(x => x.id === id) }), id);
      rows.push({ k: k + 1, sceneReady: round(sr && sr - t0), terrainReady: st.tr == null ? null : Math.max(0, round(st.tr - t0)), terrainNeeded: st.needed });
    }
    record({ scenario: 'reading', ...env(vpName), run, scenes: rows, net: net.snapshot(), work: (await engine(page)).mx });
  });
});

for (let run = 1; run <= RUNS; run++) test.describe(`run ${run} stress`, () => {
  for (const vpName of ['360x780', '390x844']) test(`Economics scenes 14–16 at ${vpName}: switching and idle`, async ({ page }) => {
    const vp = viewport(vpName); await page.setViewportSize({ width: vp.width, height: vp.height });
    await setup(page); await enter(page, 'economics/macro-policy.html'); await page.waitForTimeout(3000);
    for (const k of [13, 14, 15, 14]) {
      const m = await move(page, k); await settled(page);
      const i0 = await engine(page); await page.waitForTimeout(10_000); const i1 = await engine(page);
      record({ scenario: 'econ-switch', ...env(vpName), run, scene: k + 1, ...m, idle: delta(i0, i1), cacheMB: i1.mx.cache.mb, evictionsSoFar: i1.mx.evictions });
    }
  });

  test('slow line (about 1.6 Mbit/s, 150 ms) at 390: Geography entry, jump to 15, Paper 2', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const net = await setup(page, { slow: true });
    const e = await enter(page, 'geography/tectonics.html');
    record({ scenario: 'slow-entry', ...env('390x844', { line: 'slow' }), run, ...e, net: net.snapshot() });
    await page.waitForTimeout(3000);
    const n1 = net.snapshot(); const m = await move(page, 14); await settle(page, { quiet: 2000, max: 120_000 });
    record({ scenario: 'slow-jump-15', ...env('390x844', { line: 'slow' }), run, ...m, net: net.since(n1) });
    const n2 = net.snapshot(); await page.goto('history/kq6-paper2.html'); await when(page, C.p2, 120_000);
    record({ scenario: 'slow-paper2', ...env('390x844', { line: 'slow' }), run, usable: round((await marks(page)).paper2), net: net.since(n2) });
  });
});
