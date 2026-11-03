// Builds an instrumented copy of the chapter engine for the performance scenarios: the production source of
// src/world/engine.js with counters added at six places, bundled exactly as `npm run world` bundles it. The page gets
// it in place of assets/js/world.js through CDP Fetch (not page.route, which turns the HTTP cache off), so every other
// file loads as it does for a reader. Counters live in window.__mx:
//   tStart / tDone   terrain composition per scene id (start, finish, whether it drew anything)
//   tiles            tile fetch() calls made by the engine
//   paints           painted textures made (kind, ms in the painter)
//   evictions        textures evicted (kind, MB)
//   shown            the frame in which the scene under the camera (the nearer of the pair being drawn) first has
//                    its painted textures, once per arrival
//   cache()          the texture cache now: entries and MB (painted + terrain, mipmaps included)
// Each replacement must match the source exactly once; if the engine changes, the build stops instead of measuring
// something else. Output: .cache/world-instrumented.js
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url)), ROOT = join(HERE, '../../..'), TMP = join(HERE, '../.cache/instrument');
export const OUT = join(HERE, '../.cache/world-instrumented.js');

export function build() {
  rmSync(TMP, { recursive: true, force: true }); mkdirSync(join(TMP, 'src/world'), { recursive: true });
  cpSync(join(ROOT, 'src/world'), join(TMP, 'src/world'), { recursive: true });
  const f = join(TMP, 'src/world/engine.js'); let s = readFileSync(f, 'utf8');
  const rep = (a, b) => { if (s.split(a).length !== 2) throw new Error(`instrument: expected exactly one match for: ${a.slice(0, 80)}`); s = s.replace(a, b); };
  rep('  const texCache = new Map(); // key → { tex, used, bytes }', `  const texCache = new Map(); // key → { tex, used, bytes }
  const __mx = window.__mx = { tStart: [], tDone: [], tiles: 0, paints: [], evictions: [], shown: [], newBytes: 0,
    cache: () => { let b = 0; for (const v of texCache.values()) b += v.bytes; return { n: texCache.size, mb: +(b / 2 ** 20).toFixed(1) }; } };
  const __now = () => performance.now(), __kind = k => k.split('|')[0]; let __shownId = null;`);
  rep('    texCache.set(job.key, { tex: toTex(job, out), used: performance.now(), bytes: job.W * job.H * 4 * (out.ids ? 1 : 4 / 3) });',
    '    texCache.set(job.key, { tex: toTex(job, out), used: performance.now(), bytes: job.W * job.H * 4 * (out.ids ? 1 : 4 / 3) }); __mx.paints.push({ t: __now(), kind: __kind(job.key), ms: Math.round(ms) }); __mx.newBytes += job.W * job.H * 4;');
  rep('      v.tex.dispose(); texCache.delete(k); total -= v.bytes;', '      __mx.evictions.push({ t: __now(), kind: __kind(k), mb: +(v.bytes / 2 ** 20).toFixed(1) }); v.tex.dispose(); texCache.delete(k); total -= v.bytes;');
  rep('    texCache.set(key, { tex: t, used: performance.now(), bytes: W * H * 4 * 4 / 3 });', '    texCache.set(key, { tex: t, used: performance.now(), bytes: W * H * 4 * 4 / 3 }); __mx.newBytes += W * H * 4;');
  rep('const imgs = await Promise.all(jobs.map(([x, y]) => fetch(', 'const imgs = await Promise.all(jobs.map(([x, y]) => (__mx.tiles++, fetch)(');
  rep('composeTiles(tIndex.base, levels, [w, so, e, n], W, H, () => stopped.has(i)).then(canvas => {',
    '__mx.tStart.push({ t: __now(), id: s.id }); composeTiles(tIndex.base, levels, [w, so, e, n], W, H, () => stopped.has(i)).then(canvas => { __mx.tDone.push({ t: __now(), id: s.id, any: !!canvas });');
  // shown: the frame in which the scene under the camera (engine scene i, the one being arrived at or held) first has
  // all its painted textures; recorded each time that scene changes, so a return is timed too
  // (the scene under the camera is the nearer of the pair: a menu jump comes to rest at p = k - 0.000…, i = k - 1)
  rep('lastA = A; lastB = B;', 'lastA = A; lastB = B; { const at = f >= 0.5 ? j : i; if (at >= 0 && texturesOf(at, true) && sceneOf(at).id !== __shownId) { __shownId = sceneOf(at).id; __mx.shown.push({ t: __now(), id: __shownId, f: +f.toFixed(4) }); } }');
  writeFileSync(f, s);
  execFileSync(join(ROOT, 'node_modules/.bin/esbuild'), [f, '--bundle', '--format=esm', '--minify', '--target=es2020', `--outfile=${OUT}`, '--log-level=warning']);
  return OUT;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) console.log('built', build());
