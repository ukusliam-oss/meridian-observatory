// Measurement helpers for the performance scenarios (M-003B). Times are taken inside the page with
// performance.now() (milliseconds from the page's own navigation start), so the test runner's own delays do not
// enter them. Requests are counted from Chromium's network events (CDP), never intercepted, except that the engine
// itself can be swapped for the instrumented copy through CDP Fetch (instrument()).
import { readFileSync, appendFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { OUT as INSTRUMENTED, build } from '../perf/instrument.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const RAW = join(HERE, '../.cache/perf/raw.jsonl');

let bundle = null;
// serve the instrumented engine in place of assets/js/world.js; everything else loads normally (HTTP cache intact)
export async function instrument(page) {
  bundle ??= readFileSync(build());
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Fetch.enable', { patterns: [{ urlPattern: '*assets/js/world.js*' }] });
  cdp.on('Fetch.requestPaused', e => cdp.send('Fetch.fulfillRequest', { requestId: e.requestId, responseCode: 200, responseHeaders: [{ name: 'content-type', value: 'text/javascript' }], body: bundle.toString('base64') }).catch(() => {}));
  return INSTRUMENTED;
}

// every response by class: requests, how many came over the network or from the HTTP cache, and bytes transferred
const CLASSES = [['terrain', /assets\/data\/terrain\/\d/], ['dem', /assets\/data\/geo\/dem\//], ['data', /assets\/data\//], ['script', /\.m?js(\?|$)/], ['style', /\.css(\?|$)/], ['font', /\.woff2/], ['image', /\.(jpg|png|svg)(\?|$)/], ['html', /\.html(\?|$|#)|\/$/]];
const classOf = u => (CLASSES.find(([, re]) => re.test(u)) || ['other'])[0];
export async function netMeter(page) {
  const cdp = await page.context().newCDPSession(page); await cdp.send('Network.enable'); await cdp.send('Performance.enable');
  const req = new Map(), tally = {};
  const t = c => (tally[c] ??= { requests: 0, network: 0, cache: 0, bytes: 0 });
  cdp.on('Network.requestWillBeSent', e => { const c = classOf(e.request.url); req.set(e.requestId, c); t(c).requests++; });
  cdp.on('Network.requestServedFromCache', e => { const c = req.get(e.requestId); if (c) t(c).cache++; });
  cdp.on('Network.responseReceived', e => { const c = req.get(e.requestId); if (!c) return; if (e.response.fromDiskCache) t(c).cache++; else if (!e.response.fromMemoryCache && e.response.status !== 304) t(c).network++; });
  cdp.on('Network.loadingFinished', e => { const c = req.get(e.requestId); if (c) t(c).bytes += e.encodedDataLength; });
  return {
    snapshot: () => JSON.parse(JSON.stringify(tally)),
    since: (a) => { const b = JSON.parse(JSON.stringify(tally)), d = {}; for (const c of Object.keys(b)) { d[c] = {}; for (const k of Object.keys(b[c])) d[c][k] = b[c][k] - (a?.[c]?.[k] ?? 0); } return d; },
    cpu: async () => Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.filter(m => ['TaskDuration', 'ScriptDuration', 'LayoutDuration', 'JSHeapUsedSize'].includes(m.name)).map(m => [m.name, m.value])),
    emulate: (o) => cdp.send('Network.emulateNetworkConditions', { offline: false, ...o }),
  };
}

// Event Timing for clicks and keys (duration = input to the next paint), and long tasks, from page start
export const OBSERVE = () => {
  const m = window.__perf = { events: [], longtasks: [], marks: {} };
  // page milestones, checked every frame from the start: the chapter's gate, is-ready, the globe's first frame, Paper 2 usable
  const mark = (k, ok) => { if (m.marks[k] == null && ok) m.marks[k] = performance.now(); };
  const watch = () => { try {
    mark('gate', !!document.querySelector('[data-sound="0"]'));
    mark('ready', document.documentElement.classList.contains('is-ready'));
    mark('firstFrame', (window.__meridianWorld?.stats.frames ?? 0) > 0);
    mark('paper2', document.querySelectorAll('.paper').length === 6 && document.querySelectorAll('.p2-part').length === 5 && document.documentElement.classList.contains('is-ready'));
  } catch {} requestAnimationFrame(watch); };
  requestAnimationFrame(watch);
  try { new PerformanceObserver(l => l.getEntries().forEach(e => { if (/click|pointer|key/.test(e.name)) m.events.push({ name: e.name, start: e.startTime, duration: e.duration, id: e.interactionId }); })).observe({ type: 'event', durationThreshold: 16, buffered: true }); } catch {}
  try { new PerformanceObserver(l => l.getEntries().forEach(e => m.longtasks.push([Math.round(e.startTime), Math.round(e.duration)]))).observe({ type: 'longtask', buffered: true }); } catch {}
};

// the page time (performance.now()) at which a condition first holds, checked every frame; null after `max` ms
export function when(page, cond, max = 60_000) {
  return page.evaluate(async ([src, max]) => {
    const f = new Function(`return (${src})`); const t0 = performance.now();
    return new Promise(res => { const tick = () => { let ok = false; try { ok = f(); } catch {} if (ok) res(performance.now()); else if (performance.now() - t0 > max) res(null); else requestAnimationFrame(tick); }; tick(); });
  }, [cond, max]);
}

// the page time of the next click that reaches the document, armed before the click is made
// (the click on a scene-menu item, or on "Enter quietly"; a click that only opens the menu on a narrow screen is not it)
export const armClick = page => page.evaluate(() => {
  window.__click = null;
  const on = e => { if (e.target.closest?.('[data-go], [data-sound]')) { window.__click = e.timeStamp; removeEventListener('click', on, true); } };
  addEventListener('click', on, true);
});
export const clickTime = page => page.evaluate(() => window.__click);

// conditions, as source text for when()
export const C = {
  active: k => `document.querySelectorAll('.sc')[${k}]?.classList.contains('is-active')`,
  // the camera has not moved for 3 frames (checked by a small rAF watcher started with watchCamera)
  still: 'window.__still === true',
  shown: (id, after = 0) => `(window.__mx?.shown || []).some(x => x.id === '${id}' && x.t > ${after})`,
  terrain: (id, after = 0) => `(window.__mx?.tDone || []).some(x => x.id === '${id}' && x.any && x.t > ${after})`,
  started: (id, after = 0) => `(window.__mx?.tStart || []).some(x => x.id === '${id}' && x.t > ${after})`,
  ready: `document.documentElement.classList.contains('is-ready') && (window.__meridianWorld?.stats.frames ?? 0) > 0`,
  p2: `document.querySelectorAll('.paper').length === 6 && document.querySelectorAll('.p2-part').length === 5 && document.documentElement.classList.contains('is-ready')`,
};
// window.__still: the camera has moved since the last armCamera() and then not moved for 3 frames
export const watchCamera = page => page.evaluate(() => {
  let prev = null, same = 0; window.__moved = false; window.__still = false;
  const tick = () => { const c = window.__meridianWorld?.camera.position.toArray(); const moving = !(c && prev && Math.hypot(c[0] - prev[0], c[1] - prev[1], c[2] - prev[2]) < 1e-7); if (moving && prev) window.__moved = true; same = moving ? 0 : same + 1; prev = c; window.__still = window.__moved && same >= 3; requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
});
export const armCamera = page => page.evaluate(() => { window.__moved = false; window.__still = false; });

export function record(row) { mkdirSync(dirname(RAW), { recursive: true }); appendFileSync(RAW, JSON.stringify({ at: new Date().toISOString(), ...row }) + '\n'); }
