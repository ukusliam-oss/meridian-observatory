// Entry study (unlinked): the hub's dial is an eyepiece onto the night globe. "Continue" turns its needle to the day
// of the next scene; the camera dives through the lens into that scene (KQ6, 4 November 1956) and its title card comes
// up. The whole shot is one function of time, play(t), so it can be watched, scrubbed (?t=1.2) and recorded.
import { createWorld } from '../assets/js/world.js';

const $ = s => document.querySelector(s);
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const { default: data } = await import('../assets/js/data/history/kq6.js');
const target = data.scenes.find(s => s.id === 'kq6-h4');

// ── the dial: 1919–1991 round a lens, the needle at the reader's place ──
const Y0 = 1919, Y1 = 1991, A0 = -140, A1 = 140, R_LENS = 112;
const ang = y => A0 + (y - Y0) / (Y1 - Y0) * (A1 - A0);
const pol = (r, a) => [r * Math.sin(a * Math.PI / 180), -r * Math.cos(a * Math.PI / 180)];
const arc = (r, a, b) => { const [x0, y0] = pol(r, a), [x1, y1] = pol(r, b); return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${b - a > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`; };
let svg = `<defs>
  <radialGradient id="rim" cx="-.35" cy="-.45" r="1.2"><stop offset="0" stop-color="#ece7de" stop-opacity=".55"/><stop offset=".55" stop-color="#ece7de" stop-opacity=".08"/><stop offset="1" stop-color="#ece7de" stop-opacity=".02"/></radialGradient>
</defs>
<circle r="${R_LENS}" fill="none" stroke="url(#rim)" stroke-width="1.5"/>
<circle r="150" fill="none" stroke="rgb(236 231 222 / .1)" stroke-width="1"/>
<path d="${arc(133, ang(1948), ang(1989))}" fill="none" stroke="var(--acc)" stroke-opacity=".55" stroke-width="2"/>`;
for (let y = Y0; y <= Y1; y++) {
  const dec = y % 10 === 0, [x0, y0] = pol(dec ? 122 : 127, ang(y)), [x1, y1] = pol(138, ang(y));
  svg += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="rgb(236 231 222 / ${dec ? .5 : .18})" stroke-width="${dec ? 1.2 : .8}"/>`;
  if (dec && y > Y0) { const [tx, ty] = pol(150, ang(y)); svg += `<text x="${tx.toFixed(1)}" y="${(ty + 3).toFixed(1)}" text-anchor="middle">${y}</text>`; }
}
svg += `<g data-needle><line x1="0" y1="-${R_LENS + 2}" x2="0" y2="-144" stroke="#ece7de" stroke-width="1.5"/><circle cx="0" cy="-144" r="3" fill="#ece7de"/></g>`;
$('[data-dial-svg]').innerHTML = svg;
const needle = $('[data-needle]');

// ── the globe: high above Europe (so it fits the lens), then the scene ──
const borders = await fetch('../assets/data/borders.json').then(r => r.json());
const scene = { ...target, panel: 0 };
const hero = { camera: { lat: 44, lon: 15, alt: 46000 }, map: { ...target.map, markers: [], arrows: [], flows: [], lines: [], focus: [], ground3d: null } };
const world = await createWorld($('[data-world]'), {
  scenes: [scene], hero, data: borders, dataUrl: '../assets/data/borders.json', reduced,
  relief: { world: '../assets/data/relief-world.jpg', europe: '../assets/data/relief-europe.jpg', europeBox: [-15, 30, 65, 75] },
  terrain: '../assets/data/terrain/index.json', layers: { ground: '../assets/data/ground/' }, light: 'fixed', look: 1, dprCap: 2,
});
window.__world = world;
world.setProgress(-1);
// the scene's textures, terrain and ground are fetched now, so the dive lands on a finished picture
world.prepare(0); world.heights(0);

// ── the shot ──
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const span = (t, a, b) => clamp((t - a) / (b - a));
const inOut = u => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
const out = u => 1 - Math.pow(1 - u, 3);
const YEAR_FROM = 1955.0, YEAR_TO = 1956 + 308 / 365; // the reader's place, and 4 November 1956
const END = 2.5;
let W = innerWidth, H = innerHeight;
const cyOf = () => (W > 900 ? 0.44 : 0.4) * H; // where the globe's centre falls (src/world/view.js setViewport)
const lensPx = () => $('[data-dial]').getBoundingClientRect().width / 320 * R_LENS;
let lens0 = 112;
function layout() { W = innerWidth; H = innerHeight; root.style.setProperty('--cy', `${(cyOf() / H * 100).toFixed(2)}%`); lens0 = lensPx(); }
const fade = (el, k) => { el.style.opacity = (1 - k).toFixed(3); el.style.filter = k > 0.001 ? `blur(${(k * 6).toFixed(2)}px)` : ''; };
function play(t) {
  // 0–0.6 s: the needle turns from the reader's place to the scene's day
  const y = YEAR_FROM + (YEAR_TO - YEAR_FROM) * inOut(span(t, 0, 0.6));
  needle.setAttribute('transform', `rotate(${ang(y).toFixed(3)})`);
  // 0.1–0.55 s: the words leave the light
  const k = out(span(t, 0.1, 0.55));
  [$('.es-kicker'), $('.es-title'), $('[data-next]')].forEach(el => fade(el, k));
  // 0.4–1.6 s: the dial comes towards the reader and its lens opens over the whole frame; the ring passes out of view
  const d = inOut(span(t, 0.4, 1.6)), scale = 1 + d * (Math.hypot(W, H) / lens0 * 1.08 - 1);
  const dial = $('[data-dial]');
  dial.style.transform = `scale(${scale.toFixed(4)})`;
  dial.style.opacity = (1 - span(t, 1.05, 1.55)).toFixed(3);
  root.style.setProperty('--r', `${(lens0 * scale).toFixed(1)}px`);
  // 0.2–2.3 s: the camera flies from high over Europe down into the scene; the middle of the dive goes soft, as a fast
  // move does (and the heights between the two pictures have no texture made for them)
  const f = span(t, 0.2, 2.3);
  world.setProgress(-1 + f);
  world.setSoft(Math.pow(Math.sin(Math.PI * clamp((f - 0.12) / 0.8)), 1.5) * 0.9);
  // 2.0 s: the title card comes up out of a blur, as the chapter's cards do
  $('[data-card]').classList.toggle('is-on', t >= 2.0);
  root.classList.toggle('is-card', t >= 1.9 && t < END + 1); // the map's names wait while the title card stands
}
layout(); play(0);
addEventListener('resize', () => { layout(); play(now); });

let now = 0, raf = 0;
function run() {
  cancelAnimationFrame(raf);
  if (reduced) { now = END; play(END); $('[data-replay]').hidden = false; return; }
  const t0 = performance.now();
  const step = ts => { now = Math.min(END, (ts - t0) / 1000); play(now); if (now < END) raf = requestAnimationFrame(step); else $('[data-replay]').hidden = false; };
  raf = requestAnimationFrame(step);
}
$('[data-go]').addEventListener('click', run);
$('[data-replay]').addEventListener('click', () => { $('[data-replay]').hidden = true; now = 0; play(0); });
window.__entry = { play, run, ready: true };
const q = new URLSearchParams(location.search).get('t');
if (q != null) { now = +q; play(now); }
