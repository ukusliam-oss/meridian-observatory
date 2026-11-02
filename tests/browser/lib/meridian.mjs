// Helpers shared by the specs: the routes, the seven viewports, opening a page past its loader, moving to a chapter
// scene and waiting until the globe has settled there, and collecting what went wrong on the page.
import { expect } from '@playwright/test';

export const VIEWPORTS = [
  { name: '360x780', width: 360, height: 780 },
  { name: '375x667', width: 375, height: 667 },
  { name: '390x844', width: 390, height: 844 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '1024x600', width: 1024, height: 600 },
  { name: '1440x900', width: 1440, height: 900 },
  { name: '1920x1080', width: 1920, height: 1080 },
];
export const viewport = name => VIEWPORTS.find(v => v.name === name);

// every page of the site with its kind: hubs and the home run core.js, chapters run chapter.js and the globe
export const ROUTES = [
  { path: 'index.html', name: 'home', kind: 'home', title: /Meridian/ },
  { path: 'history.html', name: 'history-hub', kind: 'hub', title: /History/ },
  { path: 'economics.html', name: 'economics-hub', kind: 'hub', title: /Economics/ },
  { path: 'geography.html', name: 'geography-hub', kind: 'hub', title: /Geography/ },
  { path: 'history/kq6.html', name: 'history-kq6', kind: 'chapter', title: /./ },
  { path: 'history/kq6-paper2.html', name: 'history-paper2', kind: 'paper2', title: /Paper 2/ },
  { path: 'economics/macro-policy.html', name: 'economics-chapter', kind: 'chapter', title: /./ },
  { path: 'geography/tectonics.html', name: 'geography-chapter', kind: 'chapter', title: /./ },
];

// page exceptions and console errors, minus the ones that are known and harmless (listed in README, Known issues)
const KNOWN = [/Transition was skipped/];
export function watch(page) {
  const errors = [], failed = [];
  page.on('pageerror', e => { if (!KNOWN.some(k => k.test(String(e)))) errors.push(String(e).slice(0, 200)); });
  page.on('console', m => { if (m.type() === 'error' && !KNOWN.some(k => k.test(m.text()))) errors.push(`${m.text().slice(0, 160)} @ ${m.location()?.url || ''}`); });
  page.on('requestfailed', r => { const t = r.failure()?.errorText || ''; if (!/ERR_ABORTED/.test(t)) failed.push(`${r.url()} ${t}`); });
  return { errors, failed };
}

// terrain tiles and heights requested by the page, in order
export function countTerrain(page) {
  const tiles = [], dem = [];
  page.on('request', r => { const u = r.url(); if (/assets\/data\/terrain\/\d/.test(u)) tiles.push(u.split('terrain/')[1]); else if (/assets\/data\/geo\/dem\//.test(u)) dem.push(u.split('dem/')[1]); });
  return { tiles, dem };
}

// terrain tiles and heights that came over the network (not from the HTTP cache), counted per address, from the
// browser's own network events (CDP); no request is intercepted, so the cache behaves as it does for a reader
export async function networkTerrain(page) {
  const cdp = await page.context().newCDPSession(page); await cdp.send('Network.enable');
  const url = new Map(), net = new Map();
  cdp.on('Network.requestWillBeSent', e => url.set(e.requestId, e.request.url));
  cdp.on('Network.responseReceived', e => {
    const u = url.get(e.requestId) || ''; if (!/assets\/data\/(terrain\/\d|geo\/dem\/)/.test(u) || e.response.fromDiskCache || e.response.fromMemoryCache) return;
    const k = u.split('/assets/data/')[1].split('?')[0]; net.set(k, (net.get(k) || 0) + 1);
  });
  return net;
}

// open a page and get past what stands in front of it: a chapter's sound choice ("Enter quietly"), the home's loader
export async function open(page, path) {
  const res = await page.goto(path);
  const kind = ROUTES.find(r => r.path === path.split('#')[0])?.kind;
  if (kind === 'chapter') {
    const quiet = page.getByRole('button', { name: 'Enter quietly' });
    await expect(quiet.or(page.locator('html.is-ready'))).toBeVisible({ timeout: 60_000 });
    if (await quiet.isVisible()) await quiet.click();
    await expect(page.locator('html')).toHaveClass(/is-ready/, { timeout: 30_000 });
  } else if (kind === 'home') {
    await expect(page.locator('[data-boot]')).toBeHidden({ timeout: 30_000 });
  } else {
    await page.waitForLoadState('load');
  }
  return res;
}

export const noHorizontalOverflow = page => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
export const activeScene = page => page.evaluate(() => [...document.querySelectorAll('.sc')].findIndex(s => s.classList.contains('is-active')));

// open the chapter's scene menu and choose scene k (0-based), as a reader does
// (above 760 px the menu opens when the pointer reaches the pill and then covers it; narrower, it opens on a click)
export async function menuJump(page, k) {
  const btn = page.locator('[data-menu-btn]');
  if ((page.viewportSize()?.width ?? 0) > 760) { if ((await btn.getAttribute('aria-expanded')) !== 'true') await btn.hover({ force: true }); }
  else await btn.click();
  const item = page.locator(`.chmenu__item[data-go="${k}"]`);
  await expect(item).toBeVisible();
  await item.click();
}

// the scroll position at which scene k's camera holds still: step down from its panel's top until the camera stops
export async function holdOf(page, k) {
  return page.evaluate(async k => {
    const panel = document.querySelectorAll('.sc')[k].querySelector('.sc__panel');
    const top = panel.getBoundingClientRect().top + scrollY - innerHeight / 2, L = window.__meridianLenis;
    const cam = () => window.__meridianWorld.camera.position.toArray();
    const raf = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    let prev = null;
    for (let d = 0; d < 2400; d += 40) {
      if (L) L.scrollTo(top + d, { immediate: true, force: true }); else scrollTo(0, top + d); await raf(); // no Lenis with reduced motion
      const c = cam(); if (prev && Math.hypot(c[0] - prev[0], c[1] - prev[1], c[2] - prev[2]) < 1e-7) return top + d;
      prev = c;
    }
    return top;
  }, k);
}

// settled: the engine has drawn nothing new for `quiet` ms and no terrain or heights request is open, within `max` ms.
// Uses the counters the chapter already exposes (window.__meridianWorld.stats). Returns false if it never settles.
export async function settle(page, { quiet = 1500, max = 45_000 } = {}) {
  const open = new Set();
  const on = r => { if (/assets\/data\/(terrain\/\d|geo\/dem\/)/.test(r.url())) open.add(r); };
  const off = r => open.delete(r);
  page.on('request', on); page.on('requestfinished', off); page.on('requestfailed', off);
  try {
    const t0 = Date.now(); let last = -1, since = Date.now();
    while (Date.now() - t0 < max) {
      const n = await page.evaluate(() => window.__meridianWorld?.stats.frames ?? 0);
      if (n !== last || open.size) { last = n; since = Date.now(); }
      else if (Date.now() - since >= quiet) return true;
      await page.waitForTimeout(250);
    }
    return false;
  } finally { page.off('request', on); page.off('requestfinished', off); page.off('requestfailed', off); }
}

// go to scene k's hold the way a deep reader would (an immediate scroll), and wait until it has settled
export async function toScene(page, k) {
  const y = await holdOf(page, k);
  await page.evaluate(y => (window.__meridianLenis ? window.__meridianLenis.scrollTo(y, { immediate: true, force: true }) : scrollTo(0, y)), y);
  await expect.poll(() => activeScene(page)).toBe(k);
  return settle(page);
}
