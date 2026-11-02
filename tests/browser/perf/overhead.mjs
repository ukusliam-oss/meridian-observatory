// Instrumentation overhead: the Geography chapter entered and jumped to scene 15 with the production engine and with
// the instrumented copy, alternating, 5 each, 1440 x 900. Compares gate, main-thread task time and Scene Ready
// (camera still and the scene active; the production engine has no texture signal, so both use the same condition).
// usage: node perf/overhead.mjs  (needs the test server: node server.mjs)
import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
import { build } from './instrument.mjs';
const B = 'http://127.0.0.1:5199/', bundle = readFileSync(build()), out = [];
for (let t = 1; t <= 5; t++) for (const v of t % 2 ? ['production', 'instrumented'] : ['instrumented', 'production']) {
  const b = await chromium.launch({ args: process.platform === 'darwin' ? ['--use-angle=metal', '--ignore-gpu-blocklist'] : [] });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } }), p = await ctx.newPage(), cdp = await ctx.newCDPSession(p);
  await cdp.send('Performance.enable');
  if (v === 'instrumented') { await cdp.send('Fetch.enable', { patterns: [{ urlPattern: '*assets/js/world.js*' }] }); cdp.on('Fetch.requestPaused', e => cdp.send('Fetch.fulfillRequest', { requestId: e.requestId, responseCode: 200, responseHeaders: [{ name: 'content-type', value: 'text/javascript' }], body: bundle.toString('base64') }).catch(() => {})); }
  await p.goto(B + 'geography/tectonics.html'); const q = p.getByRole('button', { name: 'Enter quietly' }); await q.waitFor();
  const gate = await p.evaluate(() => performance.now()); await q.click(); await p.waitForTimeout(3000);
  const task0 = (await cdp.send('Performance.getMetrics')).metrics.find(m => m.name === 'TaskDuration').value;
  await p.locator('[data-menu-btn]').hover({ force: true });
  const t0 = await p.evaluate(() => { window.__t0 = null; addEventListener('click', e => { if (e.target.closest('[data-go]')) window.__t0 = e.timeStamp; }, true); return 0; });
  await p.locator('.chmenu__item[data-go="14"]').click();
  const ready = await p.evaluate(async () => { let prev = null, same = 0, moved = false; return new Promise(r => { const tick = () => { const c = window.__meridianWorld.camera.position.toArray(); const still = prev && Math.hypot(c[0] - prev[0], c[1] - prev[1], c[2] - prev[2]) < 1e-7; if (!still && prev) moved = true; same = still ? same + 1 : 0; prev = c; if (moved && same >= 3 && document.querySelectorAll('.sc')[14].classList.contains('is-active')) r(performance.now() - window.__t0); else requestAnimationFrame(tick); }; tick(); }); });
  await p.waitForTimeout(4000);
  const task1 = (await cdp.send('Performance.getMetrics')).metrics.find(m => m.name === 'TaskDuration').value;
  out.push({ v, t, gate: Math.round(gate), sceneReady: Math.round(ready), jumpTaskS: +(task1 - task0).toFixed(3) }); console.log(JSON.stringify(out.at(-1)));
  await b.close();
}
writeFileSync(new URL('./results/overhead.json', import.meta.url), JSON.stringify(out, null, 1));
