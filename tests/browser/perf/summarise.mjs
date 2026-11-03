// Turns the raw measurements into the committed baseline: perf/results/meridian.json (every run's values, plus
// median and range per scenario, width and metric) and perf/results/lighthouse-summary.json (the same for Lighthouse).
// usage: node perf/summarise.mjs   (reads .cache/perf/raw.jsonl and perf/results/lighthouse-*.json)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const stat = a => { const v = a.filter(x => typeof x === 'number' && Number.isFinite(x)).sort((p, q) => p - q); if (!v.length) return null; const m = v.length % 2 ? v[v.length >> 1] : (v[v.length / 2 - 1] + v[v.length / 2]) / 2; return { n: v.length, median: +m.toFixed(3), min: v[0], max: v.at(-1), values: a }; };
const group = (rows, key) => rows.reduce((g, r) => ((g[key(r)] ??= []).push(r), g), {});

const raw = join(HERE, '../.cache/perf/raw.jsonl');
if (existsSync(raw)) {
  const rows = readFileSync(raw, 'utf8').trim().split('\n').map(l => JSON.parse(l));
  const flat = r => { const o = {}; const walk = (x, p) => { for (const [k, v] of Object.entries(x)) { if (['at', 'scenario', 'page', 'vp', 'gpu', 'run', 'pass', 'wait', 'line', 'scene', 'terrain', 'scenes'].includes(k) && !p) continue; const n = p ? `${p}.${k}` : k; if (v && typeof v === 'object' && !Array.isArray(v)) walk(v, n); else if (typeof v === 'number') o[n] = v; } }; walk(r, ''); return o; };
  const key = r => [r.scenario, r.page, r.scene && `scene ${r.scene}`, r.pass, r.wait, r.line, r.vp].filter(Boolean).join(' | ');
  const out = {};
  for (const [k, g] of Object.entries(group(rows, key))) {
    const metrics = {}; const fl = g.map(flat);
    for (const m of new Set(fl.flatMap(Object.keys))) metrics[m] = stat(fl.map(f => f[m] ?? null));
    out[k] = { runs: g.length, terrainStates: [...new Set(g.map(r => r.terrain).filter(Boolean))], metrics };
    // sequential reading: per scene
    if (g[0].scenes) out[k].perScene = Object.fromEntries(g[0].scenes.map((s, i) => [s.k, { sceneReady: stat(g.map(r => r.scenes[i]?.sceneReady ?? null)), terrainReady: stat(g.map(r => r.scenes[i]?.terrainReady ?? null)), terrainNeeded: s.terrainNeeded }]));
  }
  writeFileSync(join(HERE, 'results/meridian.json'), JSON.stringify({ made: new Date().toISOString().slice(0, 10), rows: rows.length, groups: out }, null, 1));
  console.log('meridian:', rows.length, 'rows,', Object.keys(out).length, 'groups');
}

const lh = {};
for (const t of ['deployed', 'local']) {
  const f = join(HERE, `results/lighthouse-${t}.json`); if (!existsSync(f)) continue;
  const j = JSON.parse(readFileSync(f, 'utf8'));
  lh[t] = { lighthouse: j.lighthouse, chrome: j.chrome, platform: j.platform, base: j.base, pages: {} };
  for (const [k, g] of Object.entries(group(j.runs.filter(r => !r.error), r => `${r.formFactor} | ${r.page}`)))
    lh[t].pages[k] = Object.fromEntries(['score', 'fcp', 'lcp', 'cls', 'tbt', 'si', 'tti', 'bytes', 'requests', 'mainThreadMs', 'bootupMs'].map(m => [m, stat(g.map(r => r[m]))]));
  lh[t].errors = j.runs.filter(r => r.error).length;
}
writeFileSync(join(HERE, 'results/lighthouse-summary.json'), JSON.stringify(lh, null, 1));
console.log('lighthouse:', Object.entries(lh).map(([t, v]) => `${t} ${Object.keys(v.pages).length} page/form pairs, ${v.errors} errors`).join('; '));
