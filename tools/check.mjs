// Every check the repository has, in one command: npm run check
// Runs each stage in its own process from the repository root, keeps going after a failure so one run shows them all,
// names the stages that failed and exits 1 if any did. Nothing here writes to the website's files or uses the network;
// the last stage makes sure of the first: git's view of the working tree must be the same after the checks as before.
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const node = (...args) => [process.execPath, args];

// chapters: every page that runs chapter.js, with the data file its <body data-chapter> names (KQ6's when none)
const chapters = ['history', 'economics', 'geography'].flatMap(d => readdirSync(join(ROOT, d)).filter(f => f.endsWith('.html')).map(f => `${d}/${f}`))
  .map(p => [p, readFileSync(join(ROOT, p), 'utf8')])
  .filter(([, s]) => /<script type="module" src="(?:\.\.\/)*assets\/js\/chapter\.js/.test(s))
  .map(([p, s]) => [p, 'assets/js/' + (/data-chapter="\.\/([^"]+)"/.exec(s)?.[1] ?? 'data/history/kq6.js')]);

const STAGES = [
  ['check-econ', node('tools/check-econ.mjs')],
  ['check-lab', node('tools/check-lab.mjs')],
  ['check-geo', node('tools/check-geo.mjs')],
  ...chapters.map(([page, file]) => [`check-texels ${page}`, node('tools/check-texels.mjs', file)]),
  ['verify-build', node('tools/verify-build.mjs')],
];

// git's view of the tree: status (tracked changes and untracked files) and the content of every changed file
function tree() {
  const st = spawnSync('git', ['status', '--porcelain=v1', '-z', '--untracked-files=all'], { cwd: ROOT });
  if (st.status !== 0) return null;
  const h = createHash('sha1').update(st.stdout);
  for (const entry of st.stdout.toString().split('\0').filter(Boolean)) {
    try { h.update(readFileSync(join(ROOT, entry.slice(3)))); } catch { h.update('-'); }
  }
  return h.digest('hex');
}

const before = tree();
const failed = [];
for (const [name, [cmd, args]] of STAGES) {
  console.log(`\n── ${name}`);
  const t = Date.now();
  const r = spawnSync(cmd, args, { cwd: ROOT, stdio: 'inherit' });
  const ok = !r.error && r.status === 0;
  if (!ok) failed.push(name);
  console.log(`── ${name}: ${ok ? 'PASS' : `FAIL${r.error ? ` (${r.error.message})` : ` (exit ${r.status ?? r.signal})`}`} in ${((Date.now() - t) / 1000).toFixed(1)} s`);
}

console.log('\n── working tree unchanged');
const after = tree(), same = before !== null && before === after;
if (!same) failed.push('working tree unchanged');
console.log(`── working tree unchanged: ${same ? 'PASS' : before === null || after === null ? 'FAIL (git status failed)' : 'FAIL: a check changed files (see git status)'}`);

console.log(failed.length ? `\ncheck: FAILED ${failed.length} of ${STAGES.length + 1} stages: ${failed.join(', ')}` : `\ncheck: all ${STAGES.length + 1} stages passed`);
process.exit(failed.length ? 1 : 0);
