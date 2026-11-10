// Entry study (unlinked): the hub's dial is an eyepiece onto the globe. "Continue" turns its needle to the day of the
// next scene; the dial comes towards the reader and the camera goes down through its lens, the Earth always filling it,
// into the night over Hungary; the scene's title card comes up in the dark, and the chapter opens on that same card
// (?arrive, the card handed over in sessionStorage), where the scene's light comes up. The shot is one function of time,
// play(t), so it can be watched, scrubbed (?t=1.2) and recorded; ?stay keeps it on this page.
import { createWorld } from '../assets/js/world.js';

const $ = s => document.querySelector(s);
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const { default: data } = await import('../assets/js/data/history/kq6.js');
const target = data.scenes.find(s => s.id === 'kq6-h4');
const STAY = new URLSearchParams(location.search).has('stay');

// ── the dial: 1919–1991 round a lens, lit by the globe's sun from the upper left ──
const Y0 = 1919, Y1 = 1991, A0 = -140, A1 = 140, R_LENS = 112;
const SUN = -50; // the sun's bearing on the dial (degrees from the top, clockwise): the globe's light comes from the upper left
const ang = y => A0 + (y - Y0) / (Y1 - Y0) * (A1 - A0);
const pol = (r, a) => [r * Math.sin(a * Math.PI / 180), -r * Math.cos(a * Math.PI / 180)];
const arc = (r, a, b) => { const [x0, y0] = pol(r, a), [x1, y1] = pol(r, b); return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${b - a > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`; };
// how much of the sun a mark at bearing a catches: full facing it, a little on the far side
const lit = a => 0.25 + 0.75 * Math.pow(Math.max(0, Math.cos((a - SUN) * Math.PI / 180)), 1.6);
const [gx, gy] = pol(1, SUN);
let svg = `<defs>
  <linearGradient id="bezel" x1="${(0.5 + gx / 2).toFixed(3)}" y1="${(0.5 + gy / 2).toFixed(3)}" x2="${(0.5 - gx / 2).toFixed(3)}" y2="${(0.5 - gy / 2).toFixed(3)}">
    <stop offset="0" stop-color="#ece7de" stop-opacity=".7"/><stop offset=".45" stop-color="#ece7de" stop-opacity=".12"/><stop offset="1" stop-color="#ece7de" stop-opacity=".05"/></linearGradient>
  <radialGradient id="glass" cx="${(0.5 + gx * 0.22).toFixed(3)}" cy="${(0.5 + gy * 0.22).toFixed(3)}" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".07"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
</defs>
<circle r="${R_LENS - 1}" fill="url(#glass)"/>
<circle r="${R_LENS}" fill="none" stroke="url(#bezel)" stroke-width="2"/>
<circle r="${R_LENS + 5}" fill="none" stroke="rgb(236 231 222 / .06)" stroke-width="8"/>
<circle r="150" fill="none" stroke="url(#bezel)" stroke-width="1"/>
<path d="${arc(150, SUN - 28, SUN + 28)}" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round"/>
<path d="${arc(133, ang(1948), ang(1989))}" fill="none" stroke="var(--acc)" stroke-opacity=".6" stroke-width="2"/>`;
for (let y = Y0; y <= Y1; y++) {
  const dec = y % 10 === 0, a = ang(y), [x0, y0] = pol(dec ? 122 : 127, a), [x1, y1] = pol(138, a);
  svg += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="#ece7de" stroke-opacity="${((dec ? 0.62 : 0.24) * lit(a)).toFixed(3)}" stroke-width="${dec ? 1.2 : .8}"/>`;
  if (dec && y > Y0) { const [tx, ty] = pol(150 + 11, a); svg += `<text x="${tx.toFixed(1)}" y="${(ty + 3).toFixed(1)}" text-anchor="middle" fill-opacity="${(0.35 + 0.5 * lit(a)).toFixed(2)}">${y}</text>`; }
}
svg += `<g data-needle><line x1="0" y1="-${R_LENS + 2}" x2="0" y2="-144" stroke="#ece7de" stroke-width="1.5"/><circle cx="0" cy="-144" r="3" fill="#ece7de"/></g>`;
$('[data-dial-svg]').innerHTML = svg;
const needle = $('[data-needle]');

// ── the globe: the page holds the camera through the dive; the scene gives the textures and the night's sky ──
const borders = await fetch('../assets/data/borders.json').then(r => r.json());
const scene = { ...target, panel: 0 };
const HERO = { lat: 44, lon: 15 }, LAND = { lat: 47.6, lon: 20.4 };
const hero = { camera: { ...HERO, alt: 46000 }, map: { ...target.map, markers: [], arrows: [], flows: [], lines: [], focus: [], ground3d: null } };
const world = await createWorld($('[data-world]'), {
  scenes: [scene], hero, data: borders, dataUrl: '../assets/data/borders.json', reduced,
  relief: { world: '../assets/data/relief-world.jpg', europe: '../assets/data/relief-europe.jpg', europeBox: [-15, 30, 65, 75] },
  terrain: '../assets/data/terrain/index.json', layers: { ground: '../assets/data/ground/' }, light: 'fixed', look: 1, dprCap: 2,
});
window.__world = world;
world.setProgress(-1);

// ── the shot ──
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const span = (t, a, b) => clamp((t - a) / (b - a));
const inOut = u => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
const out = u => 1 - Math.pow(1 - u, 3);
const YEAR_FROM = 1955.0, YEAR_TO = 1956 + 308 / 365; // the reader's place, and 4 November 1956
const END = 2.9, LEAVE = 3.3;
let W = innerWidth, H = innerHeight;
const cyOf = () => (W > 900 ? 0.44 : 0.4) * H; // where the globe's centre falls (src/world/view.js setViewport)
const lensPx = () => $('[data-dial]').getBoundingClientRect().width / 320 * R_LENS;
let lens0 = 112;
function layout() { W = innerWidth; H = innerHeight; root.style.setProperty('--cy', `${(cyOf() / H * 100).toFixed(2)}%`); lens0 = lensPx(); }
// the altitude (km) at which the Earth's disc is r px across the middle of the screen (vertical field 32°; a tall phone's
// altitudes are scaled by 1.7 in placeCamera, so the request is divided by it)
const altFor = r => { const th = Math.atan(r / (H / 2) * Math.tan(16 * Math.PI / 180)); return (1 / Math.sin(th) - 1) * 6371 / (W / H < 0.8 ? 1.7 : 1); };
const fade = (el, k) => { el.style.opacity = (1 - k).toFixed(3); el.style.filter = k > 0.001 ? `blur(${(k * 6).toFixed(2)}px)` : ''; };
const lerp = (a, b, u) => a + (b - a) * u;
function play(t) {
  // 0–0.6 s: the needle turns from the reader's place to the scene's day
  const y = YEAR_FROM + (YEAR_TO - YEAR_FROM) * inOut(span(t, 0, 0.6));
  needle.setAttribute('transform', `rotate(${ang(y).toFixed(3)})`);
  // 0.1–0.55 s: the words leave the light
  [$('.es-kicker'), $('.es-title'), $('[data-next]')].forEach(el => fade(el, out(span(t, 0.1, 0.55))));
  // 0.4–1.7 s: the dial comes towards the reader and its lens opens over the frame; the ring passes out of view
  const full = Math.hypot(W, H) / 2 * 1.12, d = inOut(span(t, 0.4, 1.7)), r = lens0 + (full - lens0) * d;
  const dial = $('[data-dial]');
  dial.style.transform = `scale(${(r / lens0).toFixed(4)})`;
  dial.style.opacity = (1 - span(t, 1.25, 1.75)).toFixed(3);
  root.style.setProperty('--r', `${r.toFixed(1)}px`);
  // the camera: while the lens opens, the Earth fills it (its disc a little inside the bezel), so the reader is always
  // looking through the lens at the planet coming closer; then down to 2,400 km over Hungary, into the night
  const a0 = altFor(lens0 * 0.97), a1 = altFor(full * 0.97);
  const alt = t < 1.7 ? (d > 0 ? altFor(r * 0.97) : a0) : Math.exp(lerp(Math.log(a1), Math.log(2400), out(span(t, 1.7, 2.6))));
  const u = inOut(span(t, 0.5, 2.5));
  world.setCamera({ lat: lerp(HERO.lat, LAND.lat, u), lon: lerp(lon0, LAND.lon, u), alt });
  // the sky goes over to the scene's (night over Hungary, 4.15 a.m.) as the camera comes round
  world.setProgress(-1 + inOut(span(t, 0.6, 2.4)));
  // 2.1–2.8 s: the frame goes down into the dark; 2.4 s: the title card comes up in it
  world.setDim(1 - 0.94 * inOut(span(t, 2.1, 2.8)));
  $('[data-card]').classList.toggle('is-on', t >= 2.4);
  root.classList.toggle('is-card', t >= 2.2); // the map's names step aside for the card
}
// at rest the globe turns slowly in the lens; the dive starts from wherever it has turned to
let lon0 = HERO.lon, idle = 0;
const turn = ts => { lon0 = HERO.lon + (reduced ? 0 : Math.sin(ts / 1000 * 0.05) * 8); play(0); idle = requestAnimationFrame(turn); };
layout(); play(0); if (!reduced) idle = requestAnimationFrame(turn);
addEventListener('resize', () => { layout(); play(now); });

// the chapter opens on the same card: it is handed over, and the chapter shows it before anything else
function leave() {
  try { sessionStorage.setItem('meridian:arrive', JSON.stringify({ id: target.id, kick: target.dateLabel, em: '4 November:', title: 'The Soviet invasion' })); } catch { /* the chapter then opens as usual */ }
  location.href = `../history/kq6.html?arrive#${target.id}`;
}
let now = 0, raf = 0;
function run() {
  cancelAnimationFrame(raf); cancelAnimationFrame(idle);
  if (reduced) { now = END; play(END); if (!STAY) leave(); else $('[data-replay]').hidden = false; return; }
  const t0 = performance.now();
  const step = ts => {
    now = Math.min(LEAVE, (ts - t0) / 1000); play(now);
    if (now < LEAVE) raf = requestAnimationFrame(step);
    else if (STAY) $('[data-replay]').hidden = false; else leave();
  };
  raf = requestAnimationFrame(step);
}
$('[data-go]').addEventListener('click', run);
$('[data-replay]').addEventListener('click', () => { $('[data-replay]').hidden = true; now = 0; play(0); if (!reduced) idle = requestAnimationFrame(turn); });
window.__entry = { play: t => { cancelAnimationFrame(idle); now = t; play(t); }, run, ready: true };
const q = new URLSearchParams(location.search).get('t');
if (q != null) { now = +q; play(now); }
