// The stable prices scene page (WP-04X): six steps of text over one directed scene (src/scene/prices.js). The scroll
// chooses the shot and the year; in the last shot the reader's pointer (or a button) reads a country's inflation.
import { createScene } from './prices.js';

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const phone = matchMedia('(max-width: 760px)').matches;
const steps = [...document.querySelectorAll('.cs-step')];
const SHOT = [0, 0, 1, 2, 3, 3], YEAR = [2019, 2019, 2022, 2024, 2022, 2022], DIM = [0.5, 1, 1, 1, 1, 0.42];
const read = document.querySelector('[data-read]'), yearEl = document.querySelector('[data-year]');
let world = null, active = 0;

const h = document.querySelector('.cs-h span');
if (h && !reduced) h.innerHTML = [...h.textContent].map(c => c === ' ' ? ' ' : `<i style="--d:${(0.15 + Math.random() * 0.9).toFixed(2)}s">${c}</i>`).join('');
requestAnimationFrame(() => root.classList.add('is-in'));

function onScroll() {
  const c = scrollY + innerHeight * 0.5;
  let k = 0; steps.forEach((s, n) => { if (s.offsetTop <= c) k = n; });
  const s = steps[k], f = Math.max(0, Math.min(1, (c - s.offsetTop) / Math.max(1, s.offsetHeight)));
  const u = Math.max(0, Math.min(1, (f - 0.62) / 0.38)), nx = Math.min(steps.length - 1, k + 1);
  world?.setShot(SHOT[k] + (SHOT[nx] - SHOT[k]) * u);
  world?.setYear(YEAR[k] + (YEAR[nx] - YEAR[k]) * u);
  world?.setDim(DIM[k] + (DIM[nx] - DIM[k]) * u);
  world?.setTarget(k >= 1 && k <= 4);
  if (k !== active) { active = k; steps.forEach((x, n) => x.classList.toggle('is-on', n === k)); root.dataset.beat = k; }
}
const pct = v => `${v.toFixed(1)}%`;
function report(c) {
  if (!c || !read) return;
  read.textContent = `${c.name} · 2019 ${pct(c.at(2019))} · 2022 ${pct(c.at(2022))} · 2024 ${pct(c.at(2024))}`;
}

try {
  world = await createScene(document.querySelector('[data-stage]'), { reduced, phone });
  window.__prices = world; root.classList.add('has-scene');
  world.onYear(y => { if (yearEl) { const t = String(Math.round(y)); if (yearEl.textContent !== t) yearEl.textContent = t; } });
} catch (err) { console.warn('Scene unavailable:', err); root.classList.add('no-webgl'); }

steps[0].classList.add('is-on'); root.dataset.beat = 0;
addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();

let last = 0, lx = -99, ly = -99;
addEventListener('pointermove', e => {
  if (!world || active !== 4 || e.target.closest('button, a')) return;
  const now = performance.now();
  if (now - last < 90 || Math.hypot(e.clientX - lx, e.clientY - ly) < 8) return;
  last = now; lx = e.clientX; ly = e.clientY; report(world.countryAt(e.clientX, e.clientY));
});
addEventListener('pointerdown', e => { if (world && active === 4 && !e.target.closest('button, a')) report(world.countryAt(e.clientX, e.clientY)); });
document.querySelectorAll('[data-country]').forEach(b => b.addEventListener('click', () => { if (world) report(world.country(b.dataset.country)); }));
