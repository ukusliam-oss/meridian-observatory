// The Berlin, 9 November 1989 scene page (WP-04X): five steps of text over one directed scene (src/scene/berlin.js).
// The scroll chooses the shot; in the last shot the reader's pointer (or a button) asks which side a place was on.
import { createScene, PLACES } from './berlin.js';

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const phone = matchMedia('(max-width: 760px)').matches;
const steps = [...document.querySelectorAll('.cs-step')];
const SHOT = [0, 0, 1, 2, 2], DIM = [0.5, 1, 1, 1, 0.42];
const read = document.querySelector('[data-read]');
const NAME = { us: 'West Berlin · the American sector', uk: 'West Berlin · the British sector', fr: 'West Berlin · the French sector', su: 'East Berlin · the Soviet sector' };
let world = null, active = 0;

const h = document.querySelector('.cs-h span');
if (h && !reduced) h.innerHTML = [...h.textContent].map(c => c === ' ' ? ' ' : `<i style="--d:${(0.15 + Math.random() * 0.9).toFixed(2)}s">${c}</i>`).join('');
requestAnimationFrame(() => root.classList.add('is-in'));

function onScroll() {
  const vh = innerHeight, c = scrollY + vh * 0.5;
  let k = 0; steps.forEach((s, n) => { if (s.offsetTop <= c) k = n; });
  const s = steps[k], f = Math.max(0, Math.min(1, (c - s.offsetTop) / Math.max(1, s.offsetHeight)));
  const u = Math.max(0, Math.min(1, (f - 0.62) / 0.38));
  const a = SHOT[k], b = SHOT[Math.min(SHOT.length - 1, k + 1)];
  world?.setShot(a + (b - a) * u);
  world?.setDim(DIM[k] + (DIM[Math.min(DIM.length - 1, k + 1)] - DIM[k]) * u);
  world?.setCrossing(k >= 2);
  if (k !== active) { active = k; steps.forEach((x, n) => x.classList.toggle('is-on', n === k)); root.dataset.beat = k; }
}
function report(r) {
  if (!r || !read) return;
  const where = r.sector ? NAME[r.sector] : 'East Germany, outside Berlin';
  const d = r.km < 1 ? `${Math.round(r.km * 100) * 10} m` : `${r.km.toFixed(1)} km`;
  read.textContent = `${where} · ${d} from the Wall`;
}

try {
  world = await createScene(document.querySelector('[data-stage]'), { reduced, phone });
  window.__berlin = world; root.classList.add('has-scene');
} catch (err) { console.warn('Scene unavailable:', err); root.classList.add('no-webgl'); }

steps[0].classList.add('is-on'); root.dataset.beat = 0;
addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();

let last = 0, lx = -99, ly = -99;
addEventListener('pointermove', e => {
  if (!world || active !== 3 || e.target.closest('button, a')) return;
  const now = performance.now();
  if (now - last < 90 || Math.hypot(e.clientX - lx, e.clientY - ly) < 10) return;
  last = now; lx = e.clientX; ly = e.clientY; report(world.askAt(e.clientX, e.clientY));
});
addEventListener('pointerdown', e => { if (world && active === 3 && !e.target.closest('button, a')) report(world.askAt(e.clientX, e.clientY)); });
document.querySelectorAll('[data-place]').forEach(b => b.addEventListener('click', () => { if (world) report(world.askPlace(...PLACES[b.dataset.place])); }));
