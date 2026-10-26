// A hub's opening instrument: the home loader's dial (the same ticks, track and ring of light) holding what the subject
// measures. History reads the years 1919–1991 with a needle that sweeps them and names each event it passes; Economics
// is a market whose supply and demand never quite settle, read out as a price and a quantity; Geography is a relief
// survey, contour lines under a turning sweep. On arrival the ticks light one by one and the ring of light draws round
// in the subject's colour, as the loader did. It runs on GSAP's ticker only while on screen; reduced motion: still.
import { gsap, reduced, decode } from './core.js';

const NS = 'http://www.w3.org/2000/svg';
const pt = (deg, r) => { const a = deg * Math.PI / 180; return [Math.sin(a) * r, -Math.cos(a) * r]; };
const f2 = v => v.toFixed(2);

function onScreen(el, fn) {
  let on = true;
  new IntersectionObserver(([e]) => { on = e.isIntersecting; }).observe(el);
  const tick = (t, dt) => { if (on && !document.hidden) fn(t, dt); };
  gsap.ticker.add(tick);
}

// the frame every instrument shares: ticks every 5 degrees (longer every 30), the track and the ring of light
function frame(c) {
  const ticks = Array.from({ length: 72 }, (_, k) => {
    const a = k * 5, long = a % 30 === 0, [x1, y1] = pt(a, 104), [x2, y2] = pt(a, long ? 113 : 108);
    return `<line x1="${f2(x1)}" y1="${f2(y1)}" x2="${f2(x2)}" y2="${f2(y2)}"/>`;
  }).join('');
  return `<g class="inst__ticks">${ticks}</g><circle class="inst__track" r="100"/>
    <circle class="inst__ring" r="100" pathLength="100" transform="rotate(-90)" style="--c:${c}"/>`;
}

// History: the years as a dial
function history(box, d) {
  const Y0 = 1919, Y1 = 1992, ang = y => (y - Y0) / (Y1 - Y0) * 360;
  const lanes = d.lab.lanes, events = d.lab.events.map(([y, lane, title]) => ({ y, title, c: lanes[lane - 1].c })).sort((a, b) => a.y - b.y);
  const years = Array.from({ length: Y1 - Y0 }, (_, k) => {
    const y = Y0 + k, dec = y % 10 === 0, [x1, y1] = pt(ang(y), 93), [x2, y2] = pt(ang(y), dec ? 86 : 90);
    return `<line class="${dec ? 'is-dec' : ''}" x1="${f2(x1)}" y1="${f2(y1)}" x2="${f2(x2)}" y2="${f2(y2)}"/>`;
  }).join('');
  const labels = [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990].map(y => { const [x, yy] = pt(ang(y), 78); return `<text x="${f2(x)}" y="${f2(yy + 1.6)}">${y}</text>`; }).join('');
  const dots = events.map((e, k) => { const [x, y] = pt(ang(e.y), 97); return `<circle class="inst__ev" data-k="${k}" cx="${f2(x)}" cy="${f2(y)}" r="1.5" style="--c:${e.c}"/>`; }).join('');
  box.innerHTML = `<svg class="inst__dial" viewBox="-120 -120 240 240">${frame('var(--accent)')}
      <g class="inst__in"><g class="inst__years">${years}</g><g class="inst__decades">${labels}</g>${dots}
      <g class="inst__needle"><line x1="0" y1="-50" x2="0" y2="-88"/><circle cy="-88" r="2.2"/></g></g></svg>
    <div class="inst__centre"><b class="inst__year">1919</b><span class="inst__cap mono"></span></div>`;
  const needle = box.querySelector('.inst__needle'), yearEl = box.querySelector('.inst__year'), cap = box.querySelector('.inst__cap');
  const dotEls = [...box.querySelectorAll('.inst__ev')];
  let shown = -1, yr = 1919.3;
  const set = () => {
    needle.setAttribute('transform', `rotate(${f2(ang(yr))})`);
    yearEl.textContent = Math.floor(yr);
    // the latest event the needle has reached this year or last, named as it is passed
    let k = -1; for (let i = 0; i < events.length; i++) if (events[i].y <= yr) k = i;
    const near = k >= 0 && yr - events[k].y < 1.6 ? k : -1;
    if (near !== shown) {
      shown = near;
      dotEls.forEach((el, i) => el.classList.toggle('is-on', i === near));
      if (near >= 0) { cap.style.color = events[near].c; decode(cap, events[near].title.toUpperCase(), 520); } else cap.textContent = '';
    }
  };
  onScreen(box, (t, dt) => { if (!reduced) { yr += dt / 1000 * 1.35; if (yr >= Y1) yr = Y0; } set(); });
  set();
  return { label: 'Timeline · 1919–1991', read: () => `${events.length} events` };
}

// Economics: a market that never quite settles
function economics(box) {
  const grid = [-60, -40, -20, 0, 20, 40, 60].map(v => `<line x1="${v}" y1="-66" x2="${v}" y2="66"/><line x1="-66" y1="${v}" x2="66" y2="${v}"/>`).join('');
  box.innerHTML = `<svg class="inst__dial" viewBox="-120 -120 240 240">${frame('var(--accent)')}
      <defs><clipPath id="inst-clip"><circle r="99"/></clipPath></defs>
      <g class="inst__in" clip-path="url(#inst-clip)"><g class="inst__grid">${grid}</g>
      <path class="inst__ax" d="M-62 -66 V62 H66"/><path class="inst__guide" data-g/>
      <path class="inst__s" data-s/><path class="inst__d" data-d/>
      <circle class="inst__eq-ring" data-r r="3"/><circle class="inst__eq" data-o r="2.4"/>
      <text class="inst__lbl" data-ld>D</text><text class="inst__lbl" data-ls>S</text>
      <text class="inst__axl" x="-60" y="-70">PRICE</text><text class="inst__axl" x="66" y="70" text-anchor="end">QUANTITY</text></g></svg>
    <div class="inst__centre inst__centre--low"><span class="inst__cap mono" data-read></span></div>`;
  const q = s => box.querySelector(s), D = q('[data-d]'), S = q('[data-s]'), G = q('[data-g]'), O = q('[data-o]'), R = q('[data-r]'), read = q('[data-read]');
  const X = Qn => -62 + Qn * 1.25, Y = P => 62 - P * 1.25;
  const draw = t => {
    const a = 92 + Math.sin(t * 0.55) * 9 + Math.sin(t * 0.21) * 4, c = 8 + Math.sin(t * 0.37 + 1.4) * 8;
    const b = 0.82, dd = 0.78, Qe = (a - c) / (b + dd), Pe = a - b * Qe;
    D.setAttribute('d', `M${f2(X(8))} ${f2(Y(a - b * 8))} L${f2(X(98))} ${f2(Y(a - b * 98))}`);
    S.setAttribute('d', `M${f2(X(4))} ${f2(Y(c + dd * 4))} L${f2(X(100))} ${f2(Y(c + dd * 100))}`);
    G.setAttribute('d', `M-62 ${f2(Y(Pe))} H${f2(X(Qe))} V62`);
    for (const el of [O, R]) { el.setAttribute('cx', f2(X(Qe))); el.setAttribute('cy', f2(Y(Pe))); }
    const p = (t * 0.8) % 1; R.setAttribute('r', f2(3 + p * 9)); R.style.opacity = f2((1 - p) * 0.7);
    q('[data-ld]').setAttribute('x', f2(X(98) + 3)); q('[data-ld]').setAttribute('y', f2(Y(a - b * 98) + 2));
    q('[data-ls]').setAttribute('x', f2(X(100) + 3)); q('[data-ls]').setAttribute('y', f2(Y(c + dd * 100) + 2));
    read.textContent = `P* $${(Pe / 20).toFixed(2)} · Q* ${Math.round(Qe * 10)}K`;
  };
  onScreen(box, t => draw(reduced ? 0 : t));
  draw(0);
  return { label: 'Market · supply and demand' };
}

// Geography: a relief survey, contour lines under a turning sweep
function geography(box) {
  box.innerHTML = `<svg class="inst__dial" viewBox="-120 -120 240 240">${frame('var(--accent)')}</svg>
    <div class="inst__field"><canvas></canvas><i class="inst__sweep"></i></div>
    <div class="inst__centre inst__centre--low"><span class="inst__cap mono" data-read></span></div>`;
  const field = box.querySelector('.inst__field'), cv = field.querySelector('canvas'), ctx = cv.getContext('2d'), read = box.querySelector('[data-read]');
  const P = new Uint8Array(512), perm = [...Array(256).keys()];
  for (let i = 255; i > 0; i--) { const j = (Math.sin(i * 91.7) * 43758.5453 % 1 + 1) % 1 * (i + 1) | 0; [perm[i], perm[j]] = [perm[j], perm[i]]; }
  for (let i = 0; i < 512; i++) P[i] = perm[i & 255];
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10), lerp = (a, b, t) => a + (b - a) * t;
  const grad = (h, x, y, z) => { const u = h < 8 ? x : y, v = h < 4 ? y : h === 12 || h === 14 ? x : z; return ((h & 1) ? -u : u) + ((h & 2) ? -v : v); };
  const noise = (x, y, z) => {
    const Xi = Math.floor(x) & 255, Yi = Math.floor(y) & 255, Zi = Math.floor(z) & 255;
    x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
    const u = fade(x), v = fade(y), w = fade(z);
    const A = P[Xi] + Yi, AA = P[A] + Zi, AB = P[A + 1] + Zi, B = P[Xi + 1] + Yi, BA = P[B] + Zi, BB = P[B + 1] + Zi;
    return lerp(lerp(lerp(grad(P[AA] & 15, x, y, z), grad(P[BA] & 15, x - 1, y, z), u), lerp(grad(P[AB] & 15, x, y - 1, z), grad(P[BB] & 15, x - 1, y - 1, z), u), v),
      lerp(lerp(grad(P[AA + 1] & 15, x, y, z - 1), grad(P[BA + 1] & 15, x - 1, y, z - 1), u), lerp(grad(P[AB + 1] & 15, x, y - 1, z - 1), grad(P[BB + 1] & 15, x - 1, y - 1, z - 1), u), v), w);
  };
  const color = getComputedStyle(box).getPropertyValue('--accent').trim() || '#5fb0ff';
  let W = 0, H = 0, cols = 0, rows = 0, cell = 10, vals = null, z = 3.7, n = 0;
  const LEVELS = Array.from({ length: 14 }, (_, i) => -0.65 + i * 0.1);
  const draw = () => {
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const x = i * cell / 170, y = j * cell / 170;
      vals[j * cols + i] = noise(x, y, z) * 0.85 + noise(x * 2.3, y * 2.3, z * 1.4 + 9) * 0.3;
    }
    ctx.clearRect(0, 0, W, H);
    LEVELS.forEach((L, li) => {
      ctx.beginPath();
      for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
        const a = vals[j * cols + i], b = vals[j * cols + i + 1], c = vals[(j + 1) * cols + i + 1], d = vals[(j + 1) * cols + i];
        const k = (a > L ? 8 : 0) | (b > L ? 4 : 0) | (c > L ? 2 : 0) | (d > L ? 1 : 0);
        if (k === 0 || k === 15) continue;
        const x = i * cell, y = j * cell;
        const top = [x + cell * (L - a) / (b - a), y], right = [x + cell, y + cell * (L - b) / (c - b)];
        const bot = [x + cell * (L - d) / (c - d), y + cell], left = [x, y + cell * (L - a) / (d - a)];
        const segs = { 1: [left, bot], 2: [bot, right], 3: [left, right], 4: [top, right], 5: [left, top, bot, right], 6: [top, bot], 7: [left, top],
          8: [left, top], 9: [top, bot], 10: [left, bot, top, right], 11: [top, right], 12: [left, right], 13: [bot, right], 14: [left, bot] }[k];
        for (let s = 0; s < segs.length; s += 2) { ctx.moveTo(segs[s][0], segs[s][1]); ctx.lineTo(segs[s + 1][0], segs[s + 1][1]); }
      }
      const index = li % 4 === 0;
      ctx.strokeStyle = color; ctx.globalAlpha = index ? 0.7 : 0.28; ctx.lineWidth = index ? 1.2 : 0.7;
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
    // the reading under the sweep's tip: the field's height there, as metres
    const sweep = ((performance.now() / 1000) * 360 / 9) % 360, [sx, sy] = pt(sweep, 0.6);
    const i = Math.round((0.5 + sx / 2) * (cols - 1)), j = Math.round((0.5 + sy / 2) * (rows - 1));
    read.textContent = `ELEV ${Math.round(400 + vals[j * cols + i] * 1400).toLocaleString('en-GB')} M · CONTOUR 100 M`;
  };
  const size = () => {
    const r = field.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(W / cell) + 1; rows = Math.ceil(H / cell) + 1; vals = new Float32Array(cols * rows);
    draw();
  };
  new ResizeObserver(size).observe(field);
  onScreen(box, (t, dt) => { if (reduced) return; z += dt * 0.00005; if (++n % 2 === 0) draw(); });
  return { label: 'Relief · contour survey' };
}

export function instrument(box, id, data) {
  if (!box) return;
  const inst = ({ history, economics, geography })[id]?.(box, data);
  if (!inst) return;
  box.insertAdjacentHTML('beforeend', `<p class="inst__label mono">${inst.label}</p>`);
  // arrival: the ticks light one by one and the ring of light draws round, as the home's loader did
  const ticks = [...box.querySelectorAll('.inst__ticks line')], ring = box.querySelector('.inst__ring');
  if (reduced) { ticks.forEach(l => l.classList.add('is-on')); ring.style.strokeDasharray = '100 100'; return; }
  const p = { v: 0 };
  gsap.timeline({ delay: 0.4 })
    .to(p, { v: 1, duration: 1.6, ease: 'm.smooth', onUpdate: () => {
      ring.style.strokeDasharray = `${f2(p.v * 100)} 100`;
      const n = Math.round(p.v * ticks.length);
      for (let k = 0; k < ticks.length; k++) ticks[k].classList.toggle('is-on', k < n);
    } })
    .fromTo(box.querySelectorAll('.inst__in, .inst__field, .inst__centre'), { opacity: 0, filter: 'blur(5px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'm.sine', stagger: 0.1, clearProps: 'filter' }, 0.5)
    .call(() => { const l = box.querySelector('.inst__label'); decode(l, l.textContent, 600); }, null, 0.3);
}
