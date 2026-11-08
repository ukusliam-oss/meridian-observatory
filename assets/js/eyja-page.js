// The Eyjafjallajökull scene page (WP-04X): five steps of text over one directed scene (src/scene/eyja.js). The scroll
// chooses the shot; in the last shot the reader's pointer (or a button) traces where meltwater would run.
import { createScene } from './eyja.js';

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const phone = matchMedia('(max-width: 760px)').matches;
const steps = [...document.querySelectorAll('[data-step]')];
const SHOT = [0, 0, 1, 2, 2], DIM = [0.5, 1, 1, 1, 0.42];
const read = document.querySelector('[data-read]');
let world = null, active = 0;

// the title sharpens out of the night letter by letter (the home page's overture, here once)
const h = document.querySelector('.cs-h span');
if (h && !reduced) h.innerHTML = [...h.textContent].map((c, i) => `<i style="--d:${(0.15 + Math.random() * 0.9).toFixed(2)}s">${c}</i>`).join('');
requestAnimationFrame(() => root.classList.add('is-in'));

function onScroll() {
  const vh = innerHeight, c = scrollY + vh * 0.5;
  let k = 0; steps.forEach((s, n) => { if (s.offsetTop <= c) k = n; });
  const s = steps[k], f = Math.max(0, Math.min(1, (c - s.offsetTop) / Math.max(1, s.offsetHeight)));
  // each step holds its shot through its middle and moves to the next one in its last third
  const u = Math.max(0, Math.min(1, (f - 0.62) / 0.38));
  const a = SHOT[k], b = SHOT[Math.min(SHOT.length - 1, k + 1)];
  world?.setShot(a + (b - a) * u);
  world?.setDim(DIM[k] + (DIM[Math.min(DIM.length - 1, k + 1)] - DIM[k]) * u);
  if (k !== active) { active = k; steps.forEach((x, n) => x.classList.toggle('is-on', n === k)); root.dataset.beat = k; }
}

function report(tr) {
  if (!tr || !read) return;
  read.textContent = `From ${tr.from.toLocaleString('en-GB')} m to ${tr.to < 30 ? 'the plain' : tr.to.toLocaleString('en-GB') + ' m'}: ${tr.km.toFixed(1)} km of valley.`;
}

try {
  world = await createScene(document.querySelector('[data-stage]'), { reduced, phone });
  window.__eyja = world;
  root.classList.add('has-scene');
} catch (err) { console.warn('Scene unavailable:', err); root.classList.add('no-webgl'); }

steps[0].classList.add('is-on'); root.dataset.beat = 0;
addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();

// tracing: the pointer anywhere over the scene in the last shot (not over the buttons)
let last = 0, lx = -99, ly = -99;
addEventListener('pointermove', e => {
  if (!world || active !== 3 || e.target.closest('button, a')) return;
  const now = performance.now();
  if (now - last < 140 || Math.hypot(e.clientX - lx, e.clientY - ly) < 22) return;
  last = now; lx = e.clientX; ly = e.clientY;
  report(world.traceAt(e.clientX, e.clientY));
});
addEventListener('pointerdown', e => { if (world && active === 3 && !e.target.closest('button, a')) report(world.traceAt(e.clientX, e.clientY)); });
document.querySelectorAll('[data-from]').forEach(b => b.addEventListener('click', () => {
  if (!world) return; const [lat, lon] = b.dataset.from.split(',').map(Number); report(world.traceFrom(lat, lon));
}));
