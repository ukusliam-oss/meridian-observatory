// Lighthouse lab baseline (M-003B): eight pages, mobile and desktop, repeated, each run in a fresh browser.
// usage: node perf/lighthouse.mjs [deployed|local] [runs]       (default: deployed 3)
// Chrome is Playwright's pinned Chromium 156 (headless shell), started by Playwright with a debugging port; Lighthouse
// 13.6.0 attaches to it. Mobile = Lighthouse's default (Moto G Power class screen, simulated slow 4G, 4x CPU slowdown);
// desktop = its desktop preset (1350 x 940, simulated 10 Mbit/s, no CPU slowdown). Throttling is simulated (Lantern)
// from the observed trace, so the machine's own line matters less, but not nothing: the run records it.
// Compact results go to perf/results/lighthouse-<target>.json; full reports to .cache/lighthouse/.
import { chromium } from '@playwright/test';
import lighthouse from 'lighthouse';
import desktop from 'lighthouse/core/config/desktop-config.js';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const TARGET = process.argv[2] || 'deployed', RUNS = +(process.argv[3] || 3);
const BASE = TARGET === 'local' ? 'http://127.0.0.1:5199/' : 'https://ukusliam-oss.github.io/meridian-observatory/';
const PAGES = process.env.PAGES ? process.env.PAGES.split(',') : ['index.html', 'history.html', 'economics.html', 'geography.html', 'history/kq6.html', 'economics/macro-policy.html', 'geography/tectonics.html', 'history/kq6-paper2.html'];
const GPU = process.platform === 'darwin' ? ['--use-angle=metal', '--ignore-gpu-blocklist'] : [];
mkdirSync(join(HERE, '../.cache/lighthouse'), { recursive: true }); mkdirSync(join(HERE, 'results'), { recursive: true });

const server = TARGET === 'local' ? spawn(process.execPath, [join(HERE, '../server.mjs'), '5199'], { stdio: 'ignore' }) : null;
if (server) await new Promise(r => setTimeout(r, 800));

const pick = lhr => {
  const a = lhr.audits, n = id => a[id]?.numericValue ?? null;
  const lcpEl = a['largest-contentful-paint-element']?.details?.items?.[0]?.items?.[0]?.node?.snippet ?? null;
  const blocking = (a['render-blocking-insight'] ?? a['render-blocking-resources'])?.details?.items?.map(i => (i.url || '').split('/').slice(-2).join('/')).slice(0, 6) ?? [];
  const reqs = a['network-requests']?.details?.items ?? [];
  const work = Object.fromEntries((a['mainthread-work-breakdown']?.details?.items ?? []).map(i => [i.group, Math.round(i.duration)]));
  return {
    score: lhr.categories.performance.score, fcp: n('first-contentful-paint'), lcp: n('largest-contentful-paint'), cls: n('cumulative-layout-shift'),
    tbt: n('total-blocking-time'), si: n('speed-index'), tti: n('interactive'), bytes: n('total-byte-weight'), requests: reqs.length,
    mainThreadMs: n('mainthread-work-breakdown'), bootupMs: n('bootup-time'), work, lcpElement: lcpEl && lcpEl.slice(0, 120), blocking,
    warnings: lhr.runWarnings?.map(w => String(w).slice(0, 160)) ?? [], runtimeError: lhr.runtimeError?.code ?? null,
  };
};

const out = { target: TARGET, base: BASE, lighthouse: JSON.parse(readFileSync(join(HERE, '../node_modules/lighthouse/package.json'), 'utf8')).version, chrome: null, platform: `${process.platform} ${process.arch}`, runs: [] };
const PORT = 9333;
for (let run = 1; run <= RUNS; run++) for (const ff of ['mobile', 'desktop']) for (const page of PAGES) {
  const browser = await chromium.launch({ args: [`--remote-debugging-port=${PORT}`, ...GPU] });
  out.chrome ??= browser.version();
  const t0 = Date.now();
  try {
    const res = await lighthouse(BASE + page, { port: PORT, output: 'json', logLevel: 'error', onlyCategories: ['performance'] }, ff === 'desktop' ? desktop : undefined);
    const r = { page, formFactor: ff, run, ms: Date.now() - t0, ...pick(res.lhr), throttling: res.lhr.configSettings.throttling, screen: res.lhr.configSettings.screenEmulation };
    out.runs.push(r);
    writeFileSync(join(HERE, `../.cache/lighthouse/${TARGET}-${ff}-${page.replace(/\//g, '_')}-${run}.json`), res.report);
    console.log(`${ff} ${page} #${run}: score ${r.score} FCP ${Math.round(r.fcp)} LCP ${Math.round(r.lcp)} CLS ${r.cls?.toFixed(3)} TBT ${Math.round(r.tbt)} SI ${Math.round(r.si)} KB ${Math.round(r.bytes / 1024)} ${r.runtimeError || ''}`);
  } catch (e) { out.runs.push({ page, formFactor: ff, run, error: String(e).slice(0, 200) }); console.log(`${ff} ${page} #${run}: ERROR ${String(e).slice(0, 120)}`); }
  await browser.close();
  writeFileSync(join(HERE, `results/lighthouse-${TARGET}.json`), JSON.stringify(out, null, 1));
}
if (server) server.kill();
