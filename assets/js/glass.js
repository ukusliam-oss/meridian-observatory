// Glass interaction pieces ported from emotion-agency.com's production bundle (read 2026-10-24), so the chapter pill
// and scene menu behave like their header button and settings dropdown:
//   strokeBorder(el)  their v-stroke-border: a 1px gradient rim whose light turns towards the pointer (angle from the
//                     viewport centre + 90deg, eased with 1 - exp(-0.95 dt)); tilt on phones without a fine pointer
//   aurora(canvas)    their CustomButton gradient: six slow violet wave layers drawn on a canvas, blurred by CSS
//   animIcon(svg, b)  their animated icons: a GSAP timeline that restarts when the closest link or button is entered
// MT is their base duration, 1/phi (about 0.618 s); every icon timing is a fraction of it.
import { gsap, reduced } from './core.js';

export const MT = 1 / ((1 + Math.sqrt(5)) / 2);
const touch = matchMedia('(hover: none)').matches;

// ── stroke border ───────────────────────────────────────────────────────────
const strokeEls = new Set();
let target = 90, cur = 90, moving = false, started = false, px = null, py = null, lx = null, ly = null;
const aim = a => { target += (((a - target) % 360) + 540) % 360 - 180; moving = true; };
function strokeTick(time, dt) {
  if (px != null && (px !== lx || py !== ly)) { lx = px; ly = py; aim(Math.atan2(py - innerHeight / 2, px - innerWidth / 2) * 180 / Math.PI + 90); }
  if (!moving) return;
  cur += (target - cur) * (1 - Math.exp(-0.95 * dt / 1000));
  if (Math.abs(target - cur) < 0.01) { cur = target; moving = false; }
  const v = `${cur.toFixed(2)}deg`;
  for (const el of strokeEls) el.style.setProperty('--btn-stroke-angle', v);
  if (!moving) cur = target = ((target % 360) + 360) % 360;
}
export function strokeBorder(el) {
  el.classList.add('stroke-border'); strokeEls.add(el); el.style.setProperty('--btn-stroke-angle', `${cur}deg`);
  if (started || reduced) return;
  started = true;
  if (matchMedia('(pointer: fine)').matches) addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; }, { passive: true });
  else addEventListener('deviceorientation', e => aim(Math.atan2(e.beta ?? 0, e.gamma ?? 0) * 180 / Math.PI + 90)); // no permission prompt
  gsap.ticker.add(strokeTick);
}

// ── aurora ──────────────────────────────────────────────────────────────────
const LAYERS = [
  { amplitude: 0.25, frequency: 1.2, speed: 0.95, phase: 0, color: [155, 100, 255], opacity: 0.4, yOffset: 0.35, direction: 1 },
  { amplitude: 0.3, frequency: 0.9, speed: 0.7, phase: 1.8, color: [120, 150, 255], opacity: 0.35, yOffset: 0.5, direction: -1 },
  { amplitude: 0.2, frequency: 1.5, speed: 0.9, phase: 3.2, color: [80, 70, 180], opacity: 0.3, yOffset: 0.55, direction: 1 },
  { amplitude: 0.28, frequency: 1, speed: 0.65, phase: 4.8, color: [210, 185, 255], opacity: 0.35, yOffset: 0.4, direction: -1 },
  { amplitude: 0.22, frequency: 1.4, speed: 0.7, phase: 2.5, color: [175, 130, 255], opacity: 0.3, yOffset: 0.6, direction: 1 },
  { amplitude: 0.18, frequency: 1.7, speed: 0.9, phase: 5.5, color: [200, 160, 255], opacity: 0.25, yOffset: 0.45, direction: -1 },
];
// { white, speed }: the top bar's version, the same waves in white light (each layer's own brightness) and slower
export function aurora(canvas, { white = false, speed = 1 } = {}) {
  const layers = white ? LAYERS.map(L => { const v = Math.round((L.color[0] + L.color[1] + L.color[2]) / 3 * 0.35 + 255 * 0.65); return { ...L, color: [v, v, v], speed: L.speed * speed }; })
    : LAYERS.map(L => ({ ...L, speed: L.speed * speed }));
  const ctx = canvas.getContext('2d', { alpha: true }); if (!ctx) return;
  let w = 0, h = 0, on = false, live = false;
  const t0 = performance.now();
  const size = () => {
    const box = canvas.parentElement, dpr = Math.min(devicePixelRatio || 1, 2);
    w = box.clientWidth; h = box.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr; canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduced) draw(0);
  };
  const yAt = (x, L, t) => {
    const { frequency: fq, speed: sp, phase: ph, amplitude: am, yOffset: yo } = L;
    const a = Math.sin(t * sp * 1.008 + ph) * 3, b = Math.cos(t * sp * 0.72 + ph + 1.5) * 2.5, c = Math.sin(t * sp * 1.296 + ph + 3) * 2;
    const amp = am * (1 + Math.sin(t * sp * 0.576 + ph + 0.7) * 0.3), drift = Math.sin(t * sp * 0.432 + ph + 2) * h * 0.08;
    return yo * h + drift + Math.sin(x * Math.PI * 2 * fq + a + ph) * h * amp + Math.sin(x * Math.PI * 2 * fq * 2.1 + b + ph + 2) * h * amp * 0.35
      + Math.cos(x * Math.PI * 2 * fq * 3.3 + c + ph + 5) * h * amp * 0.15;
  };
  const layer = (L, t) => {
    const [r, g, b] = L.color, dir = L.direction;
    ctx.beginPath(); ctx.moveTo(0, yAt(0, L, t));
    for (let k = 1; k <= 64; k++) ctx.lineTo(k / 64 * w, yAt(k / 64, L, t));
    if (dir === 1) { ctx.lineTo(w, h + 20); ctx.lineTo(0, h + 20); } else { ctx.lineTo(w, -20); ctx.lineTo(0, -20); }
    ctx.closePath();
    let edge = dir === 1 ? Infinity : -Infinity;
    for (let k = 0; k < 8; k++) { const y = yAt(k / 7, L, t); edge = dir === 1 ? Math.min(edge, y) : Math.max(edge, y); }
    const grad = ctx.createLinearGradient(0, edge, 0, dir === 1 ? edge + h * 0.6 : edge - h * 0.6);
    grad.addColorStop(0, `rgba(${r},${g},${b},${L.opacity})`); grad.addColorStop(0.4, `rgba(${r},${g},${b},${L.opacity * 0.6})`); grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad; ctx.fill();
  };
  const draw = t => { ctx.clearRect(0, 0, w, h); for (const L of layers) layer(L, t); };
  const tick = () => draw((performance.now() - t0) / 1000);
  const sync = () => { const want = on && !reduced && !document.hidden; if (want !== live) { live = want; want ? gsap.ticker.add(tick) : gsap.ticker.remove(tick); } };
  new ResizeObserver(size).observe(canvas.parentElement); size();
  new IntersectionObserver(([e]) => { on = e.isIntersecting; sync(); }).observe(canvas);
  document.addEventListener('visibilitychange', sync);
}

// ── animated icons ─────────────────────────────────────────────────────────
export function animIcon(svg, build) {
  if (!svg || reduced) return;
  let tl = null;
  const host = svg.closest('a, button, [data-icon-hover]'); if (!host) return;
  host.addEventListener(touch ? 'pointerdown' : 'mouseenter', () => {
    if (host.closest('[disabled], [aria-disabled="true"]')) return;
    (tl ??= build(svg)).restart();
  });
}
// two strokes that draw in, one after the other (their Volume waves)
export const drawIn = paths => () => gsap.timeline({ paused: true })
  .fromTo(paths, { drawSVG: '0% 0%' }, { drawSVG: '0% 100%', duration: MT * 0.5, stagger: MT * 0.15, ease: 'power1.inOut' });
// a chevron that nudges forward and settles (their ChevronRight)
export const nudge = path => () => gsap.timeline({ paused: true })
  .fromTo(path, { x: 0 }, { x: 2, duration: MT * 0.35 }).to(path, { x: 0, duration: MT * 0.65, ease: 'power2.inOut' });
