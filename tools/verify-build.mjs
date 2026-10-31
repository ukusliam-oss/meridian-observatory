// Checks that every generated file in the repository is what its sources make: node tools/verify-build.mjs
// It never writes inside the repository. Bundles are rebuilt in memory; the land dots and the HTML pages are rebuilt in
// a temporary folder outside it (deleted afterwards). Nothing is downloaded. Exit code 1 on any difference.
//
// 1. bundles: every `esbuild` command in package.json's scripts (globe.js, world.js, world-paint.js), rebuilt with the
//    same options through esbuild's API and compared byte for byte; on a difference it names the source files.
// 2. land dots: tools/build-dots.mjs run in a temporary copy with the `dots` script's argument → src/land-dots.json.
// 3. pages: tools/pages.py (which runs tools/stamp.py) run in a temporary copy of the pages and of the files stamp.py
//    hashes; every HTML page must come out unchanged. A page whose stamp is old names the assets whose hash moved.
// 4. references: every file a page's import map, #preload list, <script src> or stylesheet names exists.
// 5. data that is not rebuilt here (maps, terrain, Economics and Geography data come from downloads and a large cache):
//    each JSON file parses, every terrain tile in index.json exists and every tile on disk is in it, every DEM height
//    image has its JSON.
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, realpathSync, rmSync, statSync, symlinkSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const rel = p => relative(ROOT, p).split(sep).join('/');
const sha = buf => createHash('sha1').update(buf).digest('hex');
const errors = [], warnings = [];
const fail = (stage, msg, sources = []) => errors.push({ stage, msg, sources });

// files the steps below compare against: hashed before and after, so a step that wrote into the repository is caught
const SKIP = new Set(['.git', 'node_modules', '.cache']);
function walk(dir, test, base = ROOT, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, test, base, out);
    else if (e.isFile() && test(relative(base, p).split(sep).join('/'))) out.push(p);
  }
  return out;
}

const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));

// ---- 1. bundles --------------------------------------------------------------------------------------------------
// The commands are read from package.json, so the check follows the build rather than a copy of its options.
function esbuildCommands() {
  const out = [];
  for (const [script, line] of Object.entries(pkg.scripts)) {
    for (const part of line.split('&&').map(s => s.trim()).filter(s => s.startsWith('esbuild '))) {
      const opts = { bundle: false, minify: false }, entries = [];
      for (const t of part.split(/\s+/).slice(1)) {
        const [k, v] = t.split('=');
        if (k === '--bundle') opts.bundle = true;
        else if (k === '--minify') opts.minify = true;
        else if (k === '--format' || k === '--target' || k === '--outfile') opts[k.slice(2)] = v;
        else if (!t.startsWith('-')) entries.push(t);
        else throw new Error(`verify-build does not know the esbuild option ${t} (script "${script}")`);
      }
      if (entries.length !== 1 || !opts.outfile) throw new Error(`cannot read the esbuild command in script "${script}": ${part}`);
      out.push({ script, entry: entries[0], ...opts });
    }
  }
  return out;
}

function firstDiff(a, b) {
  const n = Math.min(a.length, b.length);
  let i = 0;
  while (i < n && a[i] === b[i]) i++;
  return i === n && a.length === b.length ? -1 : i;
}
const excerpt = (buf, i) => JSON.stringify(buf.subarray(Math.max(0, i - 30), i + 50).toString('utf8'));

async function bundles() {
  const req = createRequire(join(ROOT, 'package.json'));
  let esbuild;
  try { esbuild = await import(pathToFileURL(req.resolve('esbuild')).href); }
  catch { fail('bundles', 'esbuild is not installed: node_modules is missing or incomplete (see docs/ARCHITECTURE.md, Dependencies)'); return; }
  const want = pkg.devDependencies.esbuild;
  if (esbuild.version !== want) fail('bundles', `esbuild ${esbuild.version} is installed, package.json pins ${want}: bundles would differ`);
  for (const c of esbuildCommands()) {
    const out = join(ROOT, c.outfile);
    if (!existsSync(join(ROOT, c.entry))) { fail('bundles', `${c.entry} (source of ${c.outfile}) is missing`); continue; }
    const r = await esbuild.build({
      entryPoints: [join(ROOT, c.entry)], bundle: c.bundle, minify: c.minify, format: c.format, target: c.target,
      outfile: out, absWorkingDir: ROOT, write: false, metafile: true, logLevel: 'silent',
    });
    const made = Buffer.from(r.outputFiles[0].contents);
    const inputs = Object.keys(r.metafile.inputs);
    const own = inputs.filter(p => !p.includes('node_modules/'));
    const label = `${c.outfile} ← npm run ${c.script}`;
    if (!existsSync(out)) { fail('bundles', `${c.outfile} is missing (${label})`, own); continue; }
    const have = readFileSync(out), at = firstDiff(made, have);
    if (at < 0) { console.log(`  ok  ${c.outfile}  ${made.length} bytes from ${own.length} source files + ${inputs.length - own.length} in node_modules`); continue; }
    fail('bundles', `${c.outfile} is not what its sources build (${label}): committed ${have.length} bytes, rebuilt ${made.length}; ` +
      `first difference at byte ${at}: committed ${excerpt(have, at)} vs rebuilt ${excerpt(made, at)}`, own);
  }
}

// ---- temporary workspace -----------------------------------------------------------------------------------------
const TMP = mkdtempSync(join(tmpdir(), 'meridian-verify-'));
const copy = (p, base) => { const to = join(base, rel(p)); mkdirSync(dirname(to), { recursive: true }); cpSync(p, to); };
function run(cmd, args, cwd, stage) {
  const r = spawnSync(cmd, args, { cwd, encoding: 'utf8', env: { ...process.env, PYTHONDONTWRITEBYTECODE: '1' } });
  if (r.error || r.status !== 0) {
    fail(stage, `${cmd} ${args.join(' ')} failed${r.error ? `: ${r.error.message}` : ` (exit ${r.status})`}\n${(r.stderr || '').trim().split('\n').slice(-8).join('\n')}`);
    return false;
  }
  return true;
}

// ---- 2. land dots ------------------------------------------------------------------------------------------------
function landDots() {
  const m = /node tools\/build-dots\.mjs\s+(\d+)/.exec(pkg.scripts.dots || '');
  if (!m) { fail('land dots', 'package.json has no "dots" script of the form `node tools/build-dots.mjs N`'); return; }
  const base = join(TMP, 'dots');
  copy(join(ROOT, 'tools/build-dots.mjs'), base);
  mkdirSync(join(base, 'src'), { recursive: true });
  try { symlinkSync(realpathSync(join(ROOT, 'node_modules')), join(base, 'node_modules')); }
  catch { fail('land dots', 'node_modules is missing'); return; }
  if (!run(process.execPath, ['tools/build-dots.mjs', m[1]], base, 'land dots')) return;
  const made = readFileSync(join(base, 'src/land-dots.json')), out = join(ROOT, 'src/land-dots.json');
  if (!existsSync(out)) return fail('land dots', 'src/land-dots.json is missing (npm run dots)', ['tools/build-dots.mjs']);
  const have = readFileSync(out);
  if (made.equals(have)) return console.log(`  ok  src/land-dots.json  ${JSON.parse(made).length / 2} dots`);
  fail('land dots', `src/land-dots.json is not what tools/build-dots.mjs ${m[1]} makes (committed ${have.length} bytes, rebuilt ${made.length}; ` +
    `first difference at byte ${firstDiff(made, have)}): run npm run build`, ['tools/build-dots.mjs', 'node_modules/world-atlas/land-110m.json']);
}

// ---- 3. pages ----------------------------------------------------------------------------------------------------
// The same files stamp.py reads (its PAGES and ASSETS globs, and the fonts its preload lists), taken from the working
// tree as they are, so the check says what `python3 tools/pages.py` would do now.
const isPage = p => p.endsWith('.html');
const isStamped = p => /^assets\/js\/.+\.js$/.test(p) || /^assets\/css\/[^/]+\.css$/.test(p) || /^assets\/vendor\/[^/]+\.js$/.test(p) || /^assets\/fonts\/[^/]+\.woff2$/.test(p);
const STAMP_BLOCKS = [/\n?<script type="importmap" data-stamp>.*?<\/script>/gs, /\n?<script data-enter>.*?<\/script>/gs,
  /\n?<script type="application\/json" id="preload">.*?<\/script>/gs, /\n?<script type="speculationrules">.*?<\/script>/gs, /\?v=[0-9a-f]+/g];
const unstamp = s => STAMP_BLOCKS.reduce((t, re) => t.replace(re, ''), s);
// every stamped asset a page names (import map, <script src>, stylesheet href) → its ?v= hash
const versions = s => Object.fromEntries([...s.matchAll(/(?:\.\.?\/)*(assets\/[^"?]+)\?v=([0-9a-f]+)/g)].map(m => [m[1], m[2]]));
const importMap = s => { try { return JSON.parse(/<script type="importmap" data-stamp>(.*?)<\/script>/s.exec(s)[1]).imports; } catch { return {}; } };

function lineDiff(a, b, max = 6) {
  const A = a.split('\n'), B = b.split('\n');
  let i = 0;
  while (i < A.length && i < B.length && A[i] === B[i]) i++;
  let ja = A.length - 1, jb = B.length - 1;
  while (ja >= i && jb >= i && A[ja] === B[jb]) { ja--; jb--; }
  const cut = l => (l.length > 160 ? l.slice(0, 160) + '…' : l);
  const out = [`line ${i + 1}:`];
  A.slice(i, Math.min(ja + 1, i + max)).forEach(l => out.push(`    - ${cut(l)}`));
  B.slice(i, Math.min(jb + 1, i + max)).forEach(l => out.push(`    + ${cut(l)}`));
  return out.join('\n');
}

function pages(pageFiles) {
  const base = join(TMP, 'pages');
  for (const p of ['tools/pages.py', 'tools/stamp.py']) copy(join(ROOT, p), base);
  for (const p of pageFiles) copy(p, base);
  for (const p of walk(join(ROOT, 'assets'), isStamped)) copy(p, base);
  if (!run('python3', ['-I', 'tools/pages.py'], base, 'pages')) return;
  const made = walk(base, isPage, base).map(p => relative(base, p).split(sep).join('/'));
  const stale = new Map(); // assets whose hash moved → pages that still carry the old one
  for (const p of made) {
    const ours = join(ROOT, p), theirs = readFileSync(join(base, p), 'utf8');
    if (!existsSync(ours)) { fail('pages', `${p} is missing: tools/pages.py writes it`, ['tools/pages.py']); continue; }
    const have = readFileSync(ours, 'utf8');
    if (have === theirs) continue;
    if (unstamp(have) === unstamp(theirs)) {
      const a = versions(have), b = versions(theirs);
      const moved = [...new Set([...Object.keys(a), ...Object.keys(b)])].filter(k => a[k] !== b[k]).sort().join(', ');
      stale.set(moved, [...(stale.get(moved) || []), p]);
    } else {
      fail('pages', `${p} differs from what tools/pages.py and tools/stamp.py write, ${lineDiff(unstamp(have), unstamp(theirs))}`, ['tools/pages.py']);
    }
  }
  for (const [moved, ps] of stale) fail('pages', `${ps.length} of ${made.length} pages carry an old stamp${moved ? ` (changed since: ${moved})` : ''}: ${ps.join(', ')}; run python3 tools/stamp.py`, ['tools/stamp.py', ...(moved ? moved.split(', ') : [])]);
  console.log(`  ok  ${made.length} pages reproduced${errors.some(e => e.stage === 'pages') ? ' (with differences, below)' : ' byte for byte'}`);
}

// ---- 4. references -----------------------------------------------------------------------------------------------
function references(pageFiles) {
  let n = 0;
  for (const page of pageFiles) {
    const s = readFileSync(page, 'utf8'), dir = dirname(page), urls = new Set();
    Object.values(importMap(s)).forEach(u => urls.add(u));
    try { const pre = JSON.parse(/<script type="application\/json" id="preload">(.*?)<\/script>/s.exec(s)[1]); [...pre.now, ...pre.later].forEach(u => urls.add(u)); } catch {}
    for (const m of s.matchAll(/(?:src|href)="((?:\.\.\/)*assets\/[^"#]+)"/g)) urls.add(m[1]);
    for (const u of urls) {
      const target = resolve(dir, u.split('?')[0]);
      n++;
      if (!existsSync(target)) fail('references', `${rel(page)} names ${u}, which does not exist`, [rel(page)]);
    }
  }
  console.log(`  ok  ${n} references from ${pageFiles.length} pages checked`);
}

// ---- 5. data that is not rebuilt here ------------------------------------------------------------------------------
function data() {
  const json = walk(join(ROOT, 'assets/data'), p => p.endsWith('.json'));
  for (const p of json) { try { JSON.parse(readFileSync(p, 'utf8')); } catch (e) { fail('data', `${rel(p)} is not valid JSON: ${e.message}`); } }
  const T = join(ROOT, 'assets/data/terrain');
  let tiles = 0;
  if (existsSync(join(T, 'index.json'))) {
    const idx = JSON.parse(readFileSync(join(T, 'index.json'), 'utf8'));
    for (const l of idx.levels) {
      const listed = new Set(l.tiles), dir = join(T, String(l.z));
      const onDisk = new Set(existsSync(dir) ? readdirSync(dir).filter(f => f.endsWith('.jpg')).map(f => f.slice(0, -4)) : []);
      for (const t of listed) if (!onDisk.has(t)) fail('data', `terrain tile ${l.z}/${t}.jpg is in index.json but missing`, ['tools/build-terrain.mjs']);
      for (const t of onDisk) if (!listed.has(t)) fail('data', `terrain tile ${l.z}/${t}.jpg is not in index.json (stale)`, ['tools/build-terrain.mjs']);
      for (const t of listed) if (onDisk.has(t) && statSync(join(dir, t + '.jpg')).size === 0) fail('data', `terrain tile ${l.z}/${t}.jpg is empty`, ['tools/build-terrain.mjs']);
      tiles += listed.size;
    }
  } else fail('data', 'assets/data/terrain/index.json is missing', ['tools/build-terrain.mjs']);
  const D = join(ROOT, 'assets/data/geo/dem');
  const dem = existsSync(D) ? readdirSync(D) : [];
  for (const f of dem.filter(f => f.endsWith('.png'))) if (!dem.includes(f.replace(/\.png$/, '.json'))) fail('data', `assets/data/geo/dem/${f} has no JSON beside it`, ['tools/build-geo.mjs']);
  console.log(`  ok  ${json.length} JSON files parse, ${tiles} terrain tiles indexed, ${dem.length / 2} DEM sites`);
}

// ---- run -----------------------------------------------------------------------------------------------------------
const pageFiles = walk(ROOT, isPage);
const watched = [...pageFiles, join(ROOT, 'src/land-dots.json'), ...esbuildCommands().map(c => join(ROOT, c.outfile))].filter(existsSync);
const snapshot = () => watched.map(p => sha(readFileSync(p))).join();
const before = snapshot();

// files stamp.py would hash that git does not track: the committed pages would then name files the site lacks
const untracked = spawnSync('git', ['ls-files', '--others', '--exclude-standard', '--', 'assets'], { cwd: ROOT, encoding: 'utf8' });
if (untracked.status === 0) for (const p of untracked.stdout.split('\n').filter(p => p && (isStamped(p) || isPage(p)))) warnings.push(`${p} is not tracked by git, but stamp.py hashes it into every page`);

try {
  console.log('bundles');
  await bundles();
  console.log('land dots');
  landDots();
  console.log('pages');
  pages(pageFiles);
  console.log('references');
  references(pageFiles);
  console.log('data');
  data();
} catch (e) {
  fail('verify-build', e.stack || String(e));
} finally {
  rmSync(TMP, { recursive: true, force: true });
}
if (snapshot() !== before) fail('verify-build', 'a generated file in the repository changed while it was being checked');

for (const w of warnings) console.log(`warning: ${w}`);
for (const e of errors) {
  console.log(`\nFAIL [${e.stage}] ${e.msg}`);
  if (e.sources.length) console.log(`  sources: ${e.sources.slice(0, 12).join(', ')}${e.sources.length > 12 ? ` and ${e.sources.length - 12} more` : ''}`);
}
console.log(`\nverify-build: ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
