// Scroll chapter page (History and Economics): renders the scenes of one chapter from its data file and drives the globe.
// Scroll position becomes globe progress p (scene index + fraction); the date ribbon and the pill follow it.
// The text works without WebGL: if the globe cannot start, the page is still a complete chapter.
// The page names its data file in <body data-chapter>; anything a chapter does not set falls back to KQ6's values.

import { $, $$, gsap, lenis, reduced, boot, esc } from './core.js';
import { MT, strokeBorder, aurora, animIcon, drawIn, nudge } from './glass.js';
const { default: data } = await import(document.body.dataset.chapter || './data/history/kq6.js');
const usesValues = data.scenes.some(s => (s.map && (s.map.data || s.map.spikes)) || (s.chart && (s.chart.series || []).some(sr => sr.ind)));
const CFG = {
  borders: data.borders === 'modern' ? '../assets/data/countries-modern.json' : data.borders === 'none' ? '../assets/data/geo/natural.json' : '../assets/data/borders.json',
  values: usesValues ? '../assets/data/econ.json' : null,
  hero: data.hero || { lat: 47, lon: 24, alt: 15500 },
  ribbon: data.ribbon || ['1945-01-01', '1992-01-01'],
  heroDate: data.heroDate || '1948-01-01',
  pill: data.pill || { part: 'Key question 6', date: 'Eastern Europe, 1948–<span class="lc">c.</span>1989' },
  relief: data.relief || { world: '../assets/data/relief-world.jpg', europe: '../assets/data/relief-europe.jpg', europeBox: [-15, 30, 65, 75] },
  // shaded terrain tiles for close and middle views (tools/build-terrain.mjs); a chapter can switch them off
  terrain: data.terrain === false ? null : '../assets/data/terrain/index.json',
  // Geography layers (tools/build-geo.mjs); the engine fetches only those a scene asks for
  layers: { quakes: '../assets/data/geo/quakes.json', volcanoes: '../assets/data/geo/volcanoes.json', plates: '../assets/data/geo/plates.json', dem: '../assets/data/geo/dem/', shake: '../assets/data/geo/shake/' },
  accent: data.accent || null,
  light: data.light || 'fixed',
};

// indicator values: chart series that name an indicator are drawn from them, so no figure is typed twice
const VALUES = CFG.values ? await fetch(CFG.values).then(r => r.json()).then(j => j.indicators).catch(() => null) : null;

const root = document.documentElement;
const scenes = data.scenes;
const N = scenes.length;
const srcKeys = Object.keys(data.sources);
const srcNo = k => srcKeys.indexOf(k) + 1;

// ── markup ─────────────────────────────────────────────────────────────────
const title = t => {
  const i = t.indexOf(': ');
  if (i > 0) return `<em>${esc(t.slice(0, i + 1))}</em>${esc(t.slice(i + 2))}`;
  const s = t.indexOf(' ');
  return s > 0 ? `<em>${esc(t.slice(0, s))}</em>${esc(t.slice(s + 1))}` : esc(t);
};
const parts = [];
scenes.forEach((s, i) => { if (!parts.length || parts.at(-1).name !== s.part) parts.push({ name: s.part, first: i, scenes: [] }); parts.at(-1).scenes.push(i); });
const partOf = i => parts.findIndex(p => p.scenes.includes(i));

const toYear = x => (typeof x === 'string' ? (([y, m]) => y + ((m || 1) - 1) / 12)(x.split('-').map(Number)) : x);
const SERIES = ['var(--acc)', '#9db7ff', '#ffd59a', '#ff8a7a'];
// econ.json stores an indicator's axis as a range: years [first, last] or months ['YYYY-MM', 'YYYY-MM']
function axisOf(ind) {
  if (ind.years) { const out = []; for (let y = ind.years[0]; y <= ind.years[1]; y++) out.push(y); return out; }
  const [y0, m0] = ind.months[0].split('-').map(Number), [y1, m1] = ind.months[1].split('-').map(Number), out = [];
  for (let k = 0; k <= (y1 - y0) * 12 + (m1 - m0); k++) { const t = (m0 - 1) + k; out.push(`${y0 + Math.floor(t / 12)}-${String(t % 12 + 1).padStart(2, '0')}`); }
  return out;
}
// { label, ind, iso, from, to } → points from econ.json (years, or 'YYYY-MM' for monthly series)
function resolveSeries(sr) {
  if (!sr.ind) return sr;
  const ind = VALUES && VALUES[sr.ind], row = ind && ind.values[sr.iso];
  if (!row) return { ...sr, points: [] };
  const xs = axisOf(ind), from = toYear(sr.from ?? xs[0]), to = toYear(sr.to ?? xs.at(-1));
  const points = xs.map((x, n) => [x, row[n]]).filter(([x, v]) => v != null && toYear(x) >= from && toYear(x) <= to);
  return { unit: ind.unit, ...sr, points };
}
function lineChart(c, id) {
  const W = 460, H = 220, L = 34, R = 16, T = 16, B = 24;
  c = { ...c, series: c.series.map(resolveSeries).filter(sr => sr.points.length) };
  if (!c.series.length) return '';
  const all = c.series.flatMap(sr => sr.points.map(([x, y]) => [toYear(x), y])).filter(d => d[1] != null);
  const xs = all.map(d => d[0]), ys = all.map(d => d[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  let y0 = Math.min(0, ...ys), y1 = Math.max(...ys);
  const step = [0.5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100].find(st => (y1 - y0) / st <= 5) || 200;
  y0 = Math.floor(y0 / step) * step; y1 = Math.ceil(y1 / step) * step;
  const X = x => L + (x - x0) / Math.max(1e-6, x1 - x0) * (W - L - R), Yp = y => T + (1 - (y - y0) / (y1 - y0)) * (H - T - B);
  const grid = []; for (let v = y0; v <= y1 + 1e-9; v += step) grid.push(`<line x1="${L}" x2="${W - R}" y1="${Yp(v).toFixed(1)}" y2="${Yp(v).toFixed(1)}" class="lc-grid${v === 0 ? ' is-zero' : ''}"/><text x="${L - 6}" y="${(Yp(v) + 3.5).toFixed(1)}" text-anchor="end" class="mono lc-t">${+v.toFixed(1)}</text>`);
  const yrs = []; const ys0 = Math.ceil(x0), span = Math.floor(x1) - ys0, every = span > 14 ? 5 : span > 6 ? 2 : 1;
  for (let y = ys0; y <= x1; y += every) yrs.push(`<text x="${X(y).toFixed(1)}" y="${H - 6}" text-anchor="middle" class="mono lc-t">${y}</text>`);
  const ends = c.series.map((sr, k) => { const pts = sr.points.map(([x, y]) => [toYear(x), y]).filter(d => d[1] != null); return { k, pts, y: Yp(pts.at(-1)[1]) - 7 }; });
  ends.slice().sort((a, b) => a.y - b.y).forEach((e, n, arr) => { if (n && e.y - arr[n - 1].y < 12) e.y = arr[n - 1].y + 12; });
  const lines = ends.map(({ k, pts, y }) => {
    const sr = c.series[k];
    const d = pts.map(([x, yy], n) => `${n ? 'L' : 'M'}${X(x).toFixed(1)} ${Yp(yy).toFixed(1)}`).join('');
    return `<path d="${d}" class="lc-line" style="--c:${sr.color || SERIES[k % 4]}" clip-path="url(#lc-${id})"/>`
      + `<text x="${W - 2}" y="${y.toFixed(1)}" text-anchor="end" class="mono lc-lab" fill="${sr.color || SERIES[k % 4]}">${esc(sr.label)}</text>`;
  }).join('');
  const marks = (c.marks || []).map(m => `<line x1="${X(toYear(m.x)).toFixed(1)}" x2="${X(toYear(m.x)).toFixed(1)}" y1="${T}" y2="${H - B}" class="lc-mark"/><text x="${(X(toYear(m.x)) + 4).toFixed(1)}" y="${T + 10}" class="mono lc-t">${esc(m.label)}</text>`).join('');
  const unit = c.unit || c.series[0].unit || '';
  const src = c.source ? (data.sources[c.source] ? `<a class="src mono" href="#src-${c.source}">${srcNo(c.source)}</a>` : esc(c.source)) : '';
  // the lines are revealed by a clip that follows the scroll (or the map's year), with a cursor at the edge
  const clip = `<clipPath id="lc-${id}"><rect x="0" y="0" width="${W}" height="${H}" data-clip/></clipPath>`;
  const cursor = `<g class="lc-cur" data-cursor><line y1="${T}" y2="${H - B}"/><text y="${T - 4}" text-anchor="middle" class="mono lc-t"></text></g>`;
  return `<figure class="sc__chart sc__lc" data-lc data-x0="${x0}" data-x1="${x1}" data-l="${L}" data-r="${W - R}"><figcaption class="mono">${esc(c.title || c.series.map(sr => sr.label).join(', '))}${unit ? ' · ' + esc(unit) : ''}</figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title || 'Chart')}"><defs>${clip}</defs>${grid.join('')}${yrs.join('')}${marks}${lines}${cursor}</svg>
    ${c.note || src ? `<figcaption class="mono">${esc(c.note || 'Source')} ${src}</figcaption>` : ''}</figure>`;
}
// a cross-section along the scene's section line, drawn from the same heights as the landscape once the globe has them
function section(s) {
  const x = s.map.section;
  return `<figure class="sc__chart sc__xs" data-xs="${s.id}"><figcaption class="mono">Cross-section ${esc(x.label || 'A to B')} · height in metres</figcaption>
    <svg viewBox="0 0 460 200" role="img" aria-label="Cross-section ${esc(x.label || 'A to B')}"></svg><figcaption class="mono" data-xs-note>Loading the heights</figcaption></figure>`;
}
function drawSection(fig, sec, exag) {
  const W = 460, H = 200, L = 40, R = 14, T = 14, B = 26, { prof, total } = sec;
  const hi = Math.max(...prof.map(p => p.h)), step = [100, 200, 250, 500, 1000, 2000].find(st => hi / st <= 5) || 5000, top = Math.ceil(hi / step) * step;
  const X = d => L + d / total * (W - L - R), Y = h => T + (1 - Math.max(0, h) / top) * (H - T - B);
  const grid = []; for (let v = 0; v <= top; v += step) grid.push(`<line x1="${L}" x2="${W - R}" y1="${Y(v).toFixed(1)}" y2="${Y(v).toFixed(1)}" class="lc-grid${v === 0 ? ' is-zero' : ''}"/><text x="${L - 6}" y="${(Y(v) + 3.5).toFixed(1)}" text-anchor="end" class="mono lc-t">${v}</text>`);
  const kstep = [1, 2, 5, 10, 20].find(k => total / k <= 6) || 50, ticks = [];
  for (let k = 0; k <= total + 1e-6; k += kstep) ticks.push(`<text x="${X(k).toFixed(1)}" y="${H - 8}" text-anchor="middle" class="mono lc-t">${k}${k === 0 ? '' : ''}</text>`);
  const line = prof.map((p, k) => `${k ? 'L' : 'M'}${X(p.d).toFixed(1)} ${Y(p.h).toFixed(1)}`).join('');
  const area = `${line}L${X(total).toFixed(1)} ${Y(0).toFixed(1)}L${X(0).toFixed(1)} ${Y(0).toFixed(1)}Z`;
  const peak = prof.reduce((a, b) => (b.h > a.h ? b : a));
  fig.querySelector('svg').innerHTML = `${grid.join('')}<path d="${area}" class="xs-ground"/><path d="${line}" class="lc-line" style="--c:var(--acc)"/>
    <text x="${L}" y="${T - 2}" class="mono lc-lab" fill="#fff">A</text><text x="${W - R}" y="${T - 2}" text-anchor="end" class="mono lc-lab" fill="#fff">B</text>
    <circle cx="${X(peak.d).toFixed(1)}" cy="${Y(peak.h).toFixed(1)}" r="3" fill="#fff"/><text x="${(X(peak.d) + 6).toFixed(1)}" y="${(Y(peak.h) + 4).toFixed(1)}" class="mono lc-t">${Math.round(peak.h)} m</text>${ticks.join('')}`;
  const vex = Math.round((total * 1000) / (W - L - R) / (top / (H - T - B)));
  fig.querySelector('[data-xs-note]').textContent = `Distance in km (${total.toFixed(1)} km). Vertical exaggeration about ×${vex}. Copernicus DEM GLO-30.`;
  fig.classList.add('is-drawn');
}
function chain(c) {
  return `<div class="sc__block"><span class="sc__label mono">${esc(c.title || 'Chain of analysis')}</span><ol class="chain2" data-chain>${c.steps.map((x, k) => `<li${k === c.globe ? ' class="is-globe"' : ''}><span class="mono">${k + 1}</span><span>${esc(x)}</span></li>`).join('')}</ol></div>`;
}
function chart(c, id) {
  if (c.series && c.series[0] && !Array.isArray(c.series[0])) return lineChart(c, id);
  const W = 460, H = 190, max = Math.max(...c.series.map(d => d[1]));
  const bw = W / c.series.length;
  const bars = c.series.map(([x, v], k) => {
    const h = (v / max) * (H - 28);
    const wall = x >= 1962;
    return `<rect class="bar" style="--k:${k};fill:${wall ? '#ffffff' : 'var(--acc)'}" x="${(k * bw + 3).toFixed(1)}" y="${(H - 18 - h).toFixed(1)}" width="${(bw - 6).toFixed(1)}" height="${h.toFixed(1)}" rx="2" opacity="${wall ? .55 : .9}"/>`
      + (k % 2 === 0 || wall ? `<text x="${(k * bw + bw / 2).toFixed(1)}" y="${H - 4}" text-anchor="middle" class="mono" fill="rgba(255,255,255,.55)" font-size="10">${String(x).slice(2)}</text>` : '');
  }).join('');
  const peak = c.series.reduce((a, b) => (b[1] > a[1] ? b : a));
  return `<figure class="sc__chart"><figcaption class="mono">${esc(c.title)} · ${esc(c.unit)}</figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title)}">${bars}
      <text x="${W}" y="12" text-anchor="end" class="mono" fill="#fff" font-size="10.5">Peak ${peak[0]}: ${peak[1].toLocaleString('en-GB')}</text>
      <text x="${(c.series.findIndex(d => d[0] === 1962) * bw + 3).toFixed(1)}" y="${H - 58}" class="mono" fill="#fff" font-size="10">Wall built</text>
      <path d="M${(c.series.findIndex(d => d[0] === 1962) * bw + bw / 2).toFixed(1)} ${H - 52}v14" stroke="#fff" stroke-width="1"/></svg>
    <figcaption class="mono">${esc(c.note)} <a class="src mono" href="#src-${c.src}">${srcNo(c.src)}</a></figcaption></figure>`;
}

function compare(c) {
  return `<div class="sc__block cmp" role="table" aria-label="${esc(c.left)} compared with ${esc(c.right)}">
    <div class="cmp__head" role="row"><span role="columnheader"></span><span class="mono" role="columnheader">${esc(c.left)}</span><span class="mono" role="columnheader">${esc(c.right)}</span></div>
    ${c.rows.map((r, k) => `<div class="cmp__row" role="row" style="--k:${k}"><span class="mono" role="rowheader">${esc(r.k)}</span><span role="cell">${esc(r.l)}</span><span role="cell">${esc(r.r)}</span></div>`).join('')}</div>`;
}
function cascade(list) {
  return `<ol class="sc__block cascade">${list.map((c, k) => `<li style="--k:${k}"><span class="cascade__dot"></span><span class="mono">${esc(c.when)}</span><b>${esc(c.country)}</b><span>${esc(c.how)} <a class="src mono" href="#src-${c.src}">${srcNo(c.src)}</a></span></li>`).join('')}</ol>`;
}

function sceneHTML(s, i) {
  const pi = partOf(i), part = parts[pi];
  const opener = part.first === i ? `<header class="part ch-wrap" data-part="${pi}">
      <span class="tag mono">Part ${pi + 1} of ${parts.length}</span>
      <h2 class="display part__title"><em>${pi === parts.length - 1 ? 'After' : 'Part ' + (pi + 1)}</em>${esc(s.part)}</h2>
      <div class="part__fps mono">${[...new Set(part.scenes.flatMap(k => scenes[k].syllabus || []))].sort()
        .map(t => (data.focusPoints || data.syllabus || []).find(f => f.id === t)).filter(Boolean)
        .filter(f => !data.focusPoints || f.id.startsWith('FP')).map(f => `<span>${f.id} · ${esc(f.text)}</span>`).join('')}</div>
    </header>` : '';
  const judge = s.judgement ? `<div class="sc__block"><span class="sc__label mono">Judgement</span><div class="sc__judge">
      <div class="for"><span class="mono">Arguments for</span><ul>${s.judgement.for.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="against"><span class="mono">Arguments against</span><ul>${s.judgement.against.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="sc__verdict"><span class="mono">A supported judgement</span><p>${esc(s.judgement.verdict)}</p></div></div></div>` : '';
  const mis = s.misconception ? `<div class="sc__block sc__mis">
      <p class="is-wrong"><span class="mono">Common mistake</span>${esc(s.misconception.wrong)}</p>
      <p class="is-right"><span class="mono">In fact</span>${esc(s.misconception.right)}</p></div>` : '';
  return `<section class="sc" id="${s.id}" data-i="${i}">${opener}
    <div class="ch-wrap"><article class="sc__panel" data-panel>
      <p class="sc__date">${esc(s.dateLabel)}</p>
      <h2 class="display sc__title">${title(s.title)}</h2>
      <div class="sc__body">${s.body}</div>
      ${s.chart ? chart(s.chart, s.id) : ''}${s.map && s.map.section && s.map.relief3d ? section(s) : ''}${s.chain ? chain(s.chain) : ''}${s.compare ? compare(s.compare) : ''}${s.cascade ? cascade(s.cascade) : ''}
      <div class="sc__block sc__why"><span class="sc__label mono">Why it matters</span><p>${esc(s.why)}</p></div>
      ${s.evaluation && s.evaluation.length ? `<div class="sc__block"><span class="sc__label mono">It depends on</span><ul class="sc__eval">${s.evaluation.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
      ${mis}${judge}
      <div class="sc__block"><button class="sc__check" type="button" aria-expanded="false"><span class="mono"><span>Check yourself</span><span>Tap to reveal</span></span>
        <span class="q">${esc(s.check.q)}</span><span class="a">${esc(s.check.a)}</span></button></div>
      <details class="sc__block sc__facts"><summary class="mono">Facts and sources (${s.facts.length})</summary>
        <ol>${s.facts.map(f => `<li>${esc(f.text)}<a class="src mono" href="#src-${f.src}" title="${esc(data.sources[f.src].title)}">${srcNo(f.src)}</a></li>`).join('')}</ol></details>
    </article></div></section>`;
}

$('[data-scenes]').innerHTML = scenes.map(sceneHTML).join('');
// a draft says so under the chapter title; a reviewed chapter shows nothing
if (data.subject && data.status === 'draft' && $('.ch-hero .ch-wrap')) $('.ch-hero .ch-wrap').insertAdjacentHTML('beforeend', '<p class="mono ch-draft">Draft · not yet reviewed by a teacher</p>');

// end of chapter: one-page summary, quick checks, every source
$('[data-sum]').innerHTML = data.toolkit.summary.map(x => `<p>${x}</p>`).join('');
$('[data-checks]').innerHTML = data.toolkit.checks.map(c => `<button class="sc__check" type="button" aria-expanded="false"><span class="mono"><span>Quick check</span><span>Tap</span></span><span class="q">${esc(c.q)}</span><span class="a">${esc(c.a)}</span></button>`).join('');
// the policy lab, for chapters that name a model
const labSec = $('#lab');
if (labSec && data.lab) {
  labSec.hidden = false;
  Promise.all([import('./policy-lab.js'), import(data.lab)]).then(([{ mountPolicyLab }, { default: model }]) => mountPolicyLab($('[data-lab]'), model, { reduced }));
}
// definition bank and Section B practice, for chapters that have them
const defs = $('[data-defs]');
if (defs) { if (data.toolkit.definitions) defs.innerHTML = data.toolkit.definitions.map(d => `<dt>${esc(d.k)}</dt><dd>${esc(d.d)}</dd>`).join(''); else defs.closest('.ch-card').remove(); }
const prEl = $('[data-practice]');
if (prEl) {
  if (data.toolkit.practiceSets) {
    // the mark-scheme rules and their source note are shared with the subject page's practice sets
    Promise.all([import('./practice.js'), import(`./data/practice-${data.subject || 'economics'}.js`)]).then(([{ practice }, { default: base }]) =>
      practice(prEl, { ...base, id: data.id, sets: data.toolkit.practiceSets }));
  } else prEl.closest('.ch-card').remove();
}
$('[data-sources]').innerHTML = srcKeys.map((k, n) => {
  const s = data.sources[k];
  return `<li id="src-${k}"><span class="mono">${n + 1}</span> <b>${esc(s.title)}</b>. ${esc(s.author)}. ${esc(s.publisher)}${s.year && s.year !== 'n.d.' ? ', ' + s.year : ''}. <a href="${esc(s.url)}" rel="noopener">${esc(s.url.replace(/^https?:\/\//, ''))}</a></li>`;
}).join('');

document.addEventListener('click', e => {
  const b = e.target.closest('.sc__check'); if (!b) return;
  b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  const hint = b.querySelector('.mono span:last-child'); if (hint) hint.textContent = b.getAttribute('aria-expanded') === 'true' ? 'Hide' : 'Tap to reveal';
});

// ── scene menu and pill ───────────────────────────────────────────────────
const menu = $('[data-menu]');
const CHEV = '<svg class="chmenu__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18l6-6l-6-6"/></svg>';
menu.setAttribute('role', 'menu'); menu.tabIndex = -1;
// the wheel scrolls the list, not the page behind it (Lenis skips elements marked data-lenis-prevent, as on their menu)
menu.setAttribute('data-lenis-prevent', '');
menu.innerHTML = '<div class="chmenu__surface" aria-hidden="true"></div><div class="chmenu__items">' + parts.map((p, k) => `${k ? '<div class="chmenu__sep" role="separator"></div>' : ''}<div class="chmenu__label">Part ${k + 1} · ${esc(p.name)}</div>`
  + p.scenes.map(i => `<a class="chmenu__item" role="menuitem" tabindex="-1" href="#${scenes[i].id}" data-go="${i}"><span class="chmenu__content"><span class="chmenu__num">${String(i + 1).padStart(2, '0')}</span><span class="chmenu__text">${esc(scenes[i].title)}</span></span>${CHEV}</a>`).join('')).join('') + '</div>';
const menuBtn = $('[data-menu-btn]'), menuItems = $('.chmenu__items', menu), pill = $('.pillnav');
// the pill is emotion-agency's glass button: pointer-lit rim, aurora inside, glow below on hover
pill.insertAdjacentHTML('afterbegin', '<div class="pillnav__aurora" aria-hidden="true"><canvas></canvas></div><div class="pillnav__shadow" aria-hidden="true"></div>');
aurora($('.pillnav__aurora canvas', pill)); strokeBorder(pill);
strokeBorder(menu); menu.classList.remove('stroke-border'); // the menu's surface draws its own rim; it only takes the light angle
// their icons: the menu lines draw in, row chevrons nudge, when the pointer arrives
$('svg', menuBtn).innerHTML = '<path d="M4 9h16"/><path d="M4 15h16"/>';
$('svg', menuBtn).setAttribute('stroke-width', '2');
animIcon($('svg', menuBtn), drawIn($$('path', menuBtn)));
$$('.chmenu__item', menu).forEach(a => animIcon($('svg', a), nudge($('svg path', a))));

// Opening follows their SettingsDropdown: the pointer reaching the trigger opens it at once; once the pointer is more
// than 8px outside both the trigger and the panel it closes after 150ms, and coming back cancels that. The panel
// grows out of the trigger's own box (0.52s, back.out(1.3)) and, on close, shrinks back into it. After a close the
// trigger ignores the pointer for 320ms so it does not reopen under it. Touch screens tap; keyboards use Enter.
const touchOnly = matchMedia('(hover: none)').matches;
const boxOf = (el, e) => { const r = el.getBoundingClientRect(), PAD = 8; return e.clientX >= r.left - PAD && e.clientX <= r.right + PAD && e.clientY >= r.top - PAD && e.clientY <= r.bottom + PAD; };
let hideTimer = 0, inside = false, grow = null, releaseTimer = 0;
const cancelHide = () => { clearTimeout(hideTimer); hideTimer = 0; };
const hideSoon = () => { cancelHide(); hideTimer = setTimeout(() => setMenu(false), 150); };
function placeMenu() {
  const b = menuBtn.getBoundingClientRect(), pad = 16;
  menu.style.setProperty("--chm-max", `${Math.min(352, Math.max(160, b.bottom - pad - 16))}px`); // compact like theirs, never past the top
  const m = menu.getBoundingClientRect();
  // over its own trigger, as theirs: the panel's bottom edge sits on the trigger's bottom edge
  const left = Math.min(Math.max(pad, b.left - 6), innerWidth - pad - m.width), top = Math.max(pad, b.bottom - m.height);
  menu.style.left = `${left}px`; menu.style.top = `${top}px`;
  return { left, top, width: m.width, height: m.height, b };
}
let menuOpen = false;
function setMenu(open) {
  if (open === menuOpen) return;
  menuOpen = open; cancelHide();
  menuBtn.setAttribute('aria-expanded', open);
  pill.classList.toggle('is-open', open);
  if (open) {
    menu.hidden = false; delete menu.dataset.state; grow?.kill(); gsap.set(menu, { clearProps: 'transform' });
    const { width: W, height: H, left, top, b } = placeMenu();
    // their blob deforms a 186 x 159 px panel by percentages; the same pixels on this panel keep the motion as subtle
    const kx = 186 / W, ky = 159 / H, set = (k, v) => menu.style.setProperty(k, v.toFixed(4));
    set('--b0x', 1 - 0.18 * kx); set('--b0y', 1 + 0.18 * ky); set('--b1x', 1 + 0.06 * kx); set('--b1y', 1 - 0.06 * ky);
    set('--b2x', 1 - 0.02 * kx); set('--b2y', 1 + 0.02 * ky);
    menu.dataset.state = 'open';
    if (!reduced) {
      gsap.set(menu, { transformOrigin: '0 0', x: b.left - left, y: b.top - top, scaleX: b.width / W, scaleY: b.height / H });
      grow = gsap.to(menu, { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: 0.52, ease: 'back.out(1.3)', onComplete: () => gsap.set(menu, { clearProps: 'transform' }) });
    }
    const cur = $('[aria-current="true"]', menu);
    if (cur) menuItems.scrollTop = cur.offsetTop - menuItems.clientHeight / 2 + cur.offsetHeight / 2;
    if (!touchOnly || document.activeElement === menuBtn) (cur || $('.chmenu__item', menu)).focus({ preventScroll: true });
  } else {
    grow?.kill(); gsap.set(menu, { clearProps: 'transform' });
    if (reduced) { menu.hidden = true; delete menu.dataset.state; return; }
    const r = menu.getBoundingClientRect(), b = menuBtn.getBoundingClientRect();
    menu.style.setProperty('--mx', `${b.left - r.left}px`);
    menu.style.setProperty('--my', `${b.top - r.top}px`);
    menu.style.setProperty('--msx', b.width / r.width);
    menu.style.setProperty('--msy', b.height / r.height);
    menu.dataset.state = 'closed';
    if (!touchOnly) { menuBtn.style.pointerEvents = 'none'; clearTimeout(releaseTimer); releaseTimer = setTimeout(() => { menuBtn.style.pointerEvents = ''; }, 320); }
    // animationend can be skipped in a background tab, so a timer finishes the close too
    let timer = 0;
    const done = e => {
      if (e && e.target !== menu) return;
      menu.removeEventListener('animationend', done); clearTimeout(timer);
      if (!menuOpen) { menu.hidden = true; delete menu.dataset.state; }
    };
    menu.addEventListener('animationend', done);
    timer = setTimeout(done, 450);
  }
}
if (!touchOnly) {
  menuBtn.addEventListener('pointerenter', () => { inside = true; setMenu(true); });
  addEventListener('pointermove', e => {
    if (!menuOpen) return;
    const now = !!e.target.closest?.('.chmenu, [data-menu-btn]') || boxOf(menuBtn, e) || boxOf(menu, e);
    if (now !== inside) { inside = now; now ? cancelHide() : hideSoon(); }
  }, { passive: true });
}
menuBtn.addEventListener('click', () => { if (touchOnly || !menuOpen) setMenu(!menuOpen); });
document.addEventListener('pointerdown', e => { if (menuOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false); });
addEventListener('resize', () => { if (menuOpen) placeMenu(); });
document.addEventListener('keydown', e => {
  if (!menuOpen) return;
  if (e.key === 'Escape' || e.key === 'Tab') { e.preventDefault(); setMenu(false); menuBtn.focus(); return; }
  const items = $$('.chmenu__item', menu), k = items.indexOf(document.activeElement);
  const to = { ArrowDown: k + 1, ArrowUp: k - 1, Home: 0, End: items.length - 1 }[e.key];
  if (to != null) { e.preventDefault(); items[(to + items.length) % items.length].focus(); }
});
menu.addEventListener('click', e => {
  const a = e.target.closest('[data-go]'); if (!a) return;
  e.preventDefault(); setMenu(false); goTo(+a.dataset.go);
});

// ── scroll → progress ─────────────────────────────────────────────────────
// A scene holds (p = i exactly) while its panel fills the reading line in the middle of the screen; the
// camera flies between scenes in the gap between two panels, including the part title screens.
let holds = [], heroAnchor = 0;
const panels = $$('[data-panel]');
const sections = $$('.sc[data-i]');
function measure() {
  const y = scrollY, vh = innerHeight;
  // on narrow screens the panel covers the map, so a scene settles while its panel is still entering from below
  const narrow = innerWidth <= 900;
  holds = panels.map(p => {
    const r = p.getBoundingClientRect(), top = y + r.top, bot = top + r.height, m = Math.min(vh * 0.3, r.height * 0.3);
    const start = narrow ? top - vh * 0.32 : top + m;
    return [start, Math.max(start, bot - m)];
  });
  heroAnchor = vh * 0.5;
}
function progressAt(y) {
  const c = y + innerHeight * 0.5;
  if (c < holds[0][0]) return -1 + Math.max(0, (c - heroAnchor) / (holds[0][0] - heroAnchor));
  for (let k = 0; k < N; k++) {
    if (c <= holds[k][1]) return k;
    if (k < N - 1 && c < holds[k + 1][0]) return k + (c - holds[k][1]) / (holds[k + 1][0] - holds[k][1]);
  }
  return N - 1;
}
// engine scene space: a panel whose map spans several years holds one engine scene per year
let eScenes = [], base = [], span = [];
function engineP(y) {
  const c = y + innerHeight * 0.5;
  if (c < holds[0][0]) return progressAt(y);
  for (let k = 0; k < N; k++) {
    if (c <= holds[k][1]) {
      const u = span[k] > 1 ? Math.max(0, Math.min(1, (c - holds[k][0]) / Math.max(1, holds[k][1] - holds[k][0]))) : 0;
      return base[k] + u * (span[k] - 1);
    }
    if (k < N - 1 && c < holds[k + 1][0]) return base[k] + span[k] - 1 + (c - holds[k][1]) / (holds[k + 1][0] - holds[k][1]);
  }
  return eScenes.length - 1;
}
function goTo(i) {
  const y = holds[i][0] - innerHeight * 0.5 + 4;
  if (lenis) lenis.scrollTo(y, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) }); else scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
}

// ── date ribbon ───────────────────────────────────────────────────────────
const dayNum = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d) / 864e5; };
const T0 = dayNum(CFG.ribbon[0]), T1 = dayNum(CFG.ribbon[1]);
const ribbon = $('[data-ribbon]'), track = $('[data-track]');
track.innerHTML = scenes.map((s, i) => `<i class="ribbon__tick${parts.some(p => p.first === i) ? ' is-part' : ''}" style="left:${((dayNum(s.date) - T0) / (T1 - T0) * 100).toFixed(2)}%"></i>`).join('') + '<i class="ribbon__needle" data-needle></i>';
const needle = $('[data-needle]'), yearEl = $('[data-year]'), labelEl = $('[data-label]');
if ($('[data-ends]')) $('[data-ends]').innerHTML = `<span>${CFG.ribbon[0].slice(0, 4)}</span><span>${+CFG.ribbon[1].slice(0, 4) - 1}</span>`;
const pillPart = $('[data-pill-part]'), pillDate = $('[data-pill-date]');
const ringBar = $('[data-orb]');
// pill labels roll like their button text: the old line slides up and out as the new one comes up from below
for (const el of [pillPart, pillDate]) { el.classList.add('pillnav__roll'); el.innerHTML = `<span>${el.innerHTML}</span>`; }
function roll(el, html) {
  const old = el.lastElementChild; if (old && old.innerHTML === html) return;
  if (reduced || !old) { el.innerHTML = `<span>${html}</span>`; return; }
  [...el.children].slice(0, -1).forEach(n => n.remove());
  const nu = document.createElement('span'); nu.innerHTML = html; el.appendChild(nu);
  gsap.fromTo(old, { yPercent: 0 }, { yPercent: -120, duration: 0.5, ease: 'expo.out', onComplete: () => old.remove() });
  gsap.fromTo(nu, { yPercent: 110 }, { yPercent: 0, duration: 0.5, ease: 'expo.out' });
}
let lastShown = -2, lastFr = -1;
const navBar = $('.nav');
// the HUD: the instrument's frame over the map, under the panels (corner ticks, the scene's number, where the camera
// is, its readings running as it flies). It takes the count from the panel and the pill, so each fact is said once.
const hud = document.createElement('div');
hud.className = 'hud';
hud.setAttribute('aria-hidden', 'true');
hud.innerHTML = '<i></i><i></i><i></i><i></i><p class="hud__read mono"><span data-hud-n></span><span data-hud-cam></span></p>';
$('[data-world]').append(hud);
const hudN = $('[data-hud-n]', hud), hudCam = $('[data-hud-cam]', hud);
const deg = (v, pos, neg) => `${Math.abs(v).toFixed(2)}°${v >= 0 ? pos : neg}`;
let camText = '';
function readCamera() {
  if (!world) return;
  const c = world.camera.position, r = c.length(), lat = Math.asin(c.y / r) * 180 / Math.PI, lon = Math.atan2(c.x, c.z) * 180 / Math.PI;
  const t = `${deg(lat, 'N', 'S')}  ${deg(lon, 'E', 'W')}  ·  ALT ${Math.round((r - 1) * 6371).toLocaleString('en-GB')} KM`;
  if (t !== camText) { camText = t; hudCam.textContent = t; }
}
function updateUI(p) {
  const i = Math.max(0, Math.floor(p)), f = p - Math.floor(p);
  const near = p < 0 ? 0 : Math.min(N - 1, Math.round(p));
  const da = p < 0 ? dayNum(CFG.heroDate) : dayNum(scenes[i].date);
  const db = p < 0 ? dayNum(scenes[0].date) : dayNum(scenes[Math.min(N - 1, i + 1)].date);
  const d = da + (db - da) * (p < 0 ? Math.max(0, p + 1) : f);
  needle.style.left = `${((d - T0) / (T1 - T0) * 100).toFixed(2)}%`;
  const ep = eScenes.length ? engineP(lenis ? lenis.scroll : scrollY) : -1, es = eScenes[Math.max(0, Math.round(ep))];
  const shown = ep >= -0.5 && es && es.map && (es.map.spikes || es.map.data);
  yearEl.textContent = shown ? (shown.month ? shown.month.replace(/-(\d\d)$/, (m, mm) => ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][+mm - 1]).split(' ').reverse().join(' ') : shown.year) : new Date(d * 864e5).getUTCFullYear();
  ribbon.classList.toggle('is-on', p > -0.6 && p < N - 0.6);
  // the bar dims for study as the first screen leaves (p from -0.7 to -0.1), and comes back with it
  const st = Math.min(1, Math.max(0, (p + 0.7) / 0.6));
  navBar?.style.setProperty('--study', (st * st * (3 - 2 * st)).toFixed(3));
  const key = p < -0.5 ? -1 : near;
  if (key !== lastShown) {
    lastShown = key;
    const s = scenes[near];
    hudN.textContent = key < 0 ? `${N} SCENES` : `SCENE ${String(near + 1).padStart(2, '0')} / ${N}`;
    labelEl.textContent = s.dateLabel;
    roll(pillPart, esc(p < -0.5 ? CFG.pill.part : s.part));
    roll(pillDate, p < -0.5 ? CFG.pill.date : esc(s.dateLabel));
    $$('[data-go]', menu).forEach(a => a.setAttribute('aria-current', +a.dataset.go === near));
    sections.forEach((sec, k) => sec.classList.toggle('is-active', key >= 0 && k === near));
    // paint the neighbouring scenes while the reader is reading, so no paint lands mid-flight
    if (world) [base[near + 1], base[near] + span[near] - 1, base[near - 1], base[near + 2]].filter(k => k != null).forEach((k, n) => idle(() => world.prepare(k), n * 120));
  }
  const fr = Math.min(1, Math.max(0, (p + 1) / N));
  if (Math.abs(fr - lastFr) > 1e-4) {
    lastFr = fr;
    ringBar.style.strokeDashoffset = (1 - fr).toFixed(4); ringBar.style.opacity = fr > 0.004 ? 1 : 0; // a round cap would show a dot at 0
  }
}

// ── globe ─────────────────────────────────────────────────────────────────
const idle = (f, delay = 0) => setTimeout(() => (window.requestIdleCallback ? requestIdleCallback(f, { timeout: 1200 }) : f()), delay);
let world = null;
let hero = null;
const loader = $('[data-loader]'), pct = $('[data-pct]'), bar = $('[data-bar]');
const setPct = v => { const n = Math.round(v * 100); pct.textContent = String(n).padStart(3, '0') + '%'; bar.style.width = n + '%'; };

async function loadBorders() {
  const res = await fetch(CFG.borders);
  if (!res.ok || !res.body) throw new Error('borders');
  const total = +res.headers.get('content-length') || 660000;
  const reader = res.body.getReader(); const chunks = []; let got = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); got += value.length; setPct(Math.min(0.92, got / Math.max(total, got) * 0.92)); }
  return JSON.parse(new TextDecoder().decode(await new Blob(chunks).arrayBuffer()));
}

// one engine scene per year of a multi-year map, all with the same `panel`; arrows and lines only on the last year
function buildEngineScenes() {
  eScenes = []; base = []; span = [];
  scenes.forEach((s, k) => {
    const spec = s.map.spikes || s.map.data;
    const steps = spec && Array.isArray(spec.years) && spec.years.length > 1 ? spec.years : [spec ? (spec.years ? spec.years[0] : spec.year ?? spec.month) : null];
    base.push(eScenes.length); span.push(steps.length);
    steps.forEach((y, n) => {
      const when = y == null ? {} : (String(y).includes('-') ? { month: y, year: +String(y).slice(0, 4) } : { year: y });
      const map = { ...s.map };
      if (map.data) map.data = { ...map.data, year: when.year ?? map.data.year };
      if (map.spikes) map.spikes = { ...map.spikes, ...when };
      if (n < steps.length - 1) { map.arrows = []; map.flows = []; map.lines = []; }
      eScenes.push({ ...s, map, panel: k });
    });
  });
  const h = data.hero && data.hero.camera ? data.hero : { camera: CFG.hero };
  hero = { camera: h.camera, map: { ...eScenes[0].map, markers: [], arrows: [], flows: [], lines: [], focus: [] } };
}
// the map's year inside panel k at engine progress ep, blended like the engine blends the colours
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const yearOfE = e => { const sp = e && (e.map.data || e.map.spikes); return sp ? (sp.month ? toYear(sp.month) : sp.year) : null; };
function mapYear(k, ep) {
  const u = Math.max(0, Math.min(span[k] - 1, ep - base[k])), n = Math.floor(u), f = u - n;
  const a = yearOfE(eScenes[base[k] + n]), b = yearOfE(eScenes[base[k] + Math.min(span[k] - 1, n + 1)]);
  return a == null ? null : a + (b - a) * (reduced ? (f < 0.5 ? 0 : 1) : smooth(0.1, 0.9, f));
}

// ── scroll-linked panel effects: chain steps, chart reveal and cursor, the flows a chain sends ─────
const fx = scenes.map((s, k) => {
  const sec = sections[k];
  const chainEl = sec.querySelector('[data-chain]'), lc = sec.querySelector('[data-lc]');
  return {
    steps: chainEl ? [...chainEl.children] : [], globe: s.chain && s.chain.globe != null ? s.chain.globe : null,
    lc: lc && { el: lc, x0: +lc.dataset.x0, x1: +lc.dataset.x1, l: +lc.dataset.l, r: +lc.dataset.r, clip: lc.querySelector('[data-clip]'), cur: lc.querySelector('[data-cursor]'), last: '' },
  };
});
// panel progress: 0 when the panel reaches the reading line, 1 when it leaves; negative while it approaches
function panelT(k, y) { const c = y + innerHeight * 0.5; return (c - holds[k][0]) / Math.max(1, holds[k][1] - holds[k][0]); }
const stepAt = (n, count) => -0.3 + n * (0.65 / Math.max(1, count));
function updatePanels(y, ep, near) {
  for (let k = Math.max(0, near - 1); k <= Math.min(N - 1, near + 1); k++) {
    const e = fx[k], t = panelT(k, y);
    e.steps.forEach((li, n) => li.classList.toggle('is-on', reduced || t >= stepAt(n, e.steps.length)));
    if (e.globe != null && world) world.setGate(k, reduced ? (t >= stepAt(e.globe, e.steps.length) ? 1 : 0) : smooth(stepAt(e.globe, e.steps.length), stepAt(e.globe, e.steps.length) + 0.18, t));
    if (e.lc) {
      // a chart beside a map that steps through years follows the map; any other chart draws as its panel arrives
      const yr = span[k] > 1 ? mapYear(k, ep) : null;
      const x = reduced ? e.lc.x1 : yr != null ? Math.min(e.lc.x1, Math.max(e.lc.x0, yr)) : e.lc.x0 + (e.lc.x1 - e.lc.x0) * smooth(-0.35, 0.25, t);
      const px = e.lc.l + (x - e.lc.x0) / Math.max(1e-6, e.lc.x1 - e.lc.x0) * (e.lc.r - e.lc.l);
      const key = px.toFixed(1); if (key === e.lc.last) continue; e.lc.last = key;
      e.lc.clip.setAttribute('width', (px + 1).toFixed(1));
      const done = x >= e.lc.x1 - 1e-6;
      e.lc.el.classList.toggle('is-done', done);
      e.lc.cur.style.opacity = yr != null && !done ? 1 : 0;
      e.lc.cur.setAttribute('transform', `translate(${px.toFixed(1)} 0)`);
      if (yr != null) e.lc.cur.querySelector('text').textContent = String(Math.round(yr));
    }
  }
}

// ── sound (chapters with `sound: true`): one tap on the loader starts it, the nav toggle switches it ─────────
// Browsers let audio start only from a tap, so the loader waits with two buttons: with sound (the default) or quietly.
let snd = null;
const SPEAKER = on => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/>${on ? '<path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/>' : '<path d="m16 9.5 5 5M21 9.5l-5 5"/>'}</svg>`;
function gate(enter) {
  const box = document.createElement('div');
  box.className = 'loader__gate';
  box.innerHTML = `<button class="loader__go is-primary" type="button" data-sound="1">${SPEAKER(true)}<span>Enter with sound</span></button>
    <button class="loader__go" type="button" data-sound="0"><span>Enter quietly</span></button>
    <p class="mono loader__hint">Best with headphones. Sound can be turned off at any time.</p>`;
  loader.classList.add('is-gate'); loader.appendChild(box);
  const def = box.querySelector(snd.sound.enabled ? '[data-sound="1"]' : '[data-sound="0"]');
  def.classList.add('is-primary'); box.querySelectorAll('.loader__go').forEach(b => b !== def && b.classList.remove('is-primary'));
  requestAnimationFrame(() => def.focus({ preventScroll: true }));
  box.addEventListener('click', e => {
    const b = e.target.closest('[data-sound]'); if (!b) return;
    const on = b.dataset.sound === '1';
    snd.start(on);
    if (world && world.replay) world.replay();
    enter();
  });
}
function soundToggle() {
  const bar = $('.nav__bar'); if (!bar) return;
  const b = document.createElement('button');
  b.className = 'icon-btn sound-btn'; b.type = 'button';
  const show = on => { b.innerHTML = SPEAKER(on); b.setAttribute('aria-label', on ? 'Turn sound off' : 'Turn sound on'); b.setAttribute('aria-pressed', String(on)); };
  show(snd.sound.enabled);
  b.addEventListener('click', () => snd.toggle());
  snd.sound.onChange(show);
  $('[data-theme-toggle]', bar).before(b);
}

async function start() {
  setPct(0.02);
  if (data.sound) {
    try { snd = await import('./sound.js'); soundToggle(); snd.bindUI(); } catch (err) { console.warn('Sound unavailable:', err); snd = null; }
  }
  try {
    const [{ createWorld }, borders] = await Promise.all([import('./world.js'), loadBorders()]);
    buildEngineScenes();
    setPct(0.96);
    world = await createWorld($('[data-world]'), { scenes: eScenes, hero, data: borders, dataUrl: CFG.borders, values: VALUES, accent: CFG.accent, reduced, relief: CFG.relief, terrain: CFG.terrain, layers: CFG.layers, light: CFG.light,
      look: +(new URLSearchParams(location.search).get('look') ?? 1) }); // 1: the light's shaders; ?look=2 adds post.js, ?look=0 neither
    window.__meridianWorld = world; // stats for checks in the preview
    if (world) for (const s of scenes) if (s.map && s.map.section && s.map.relief3d) {
      const fig = $(`[data-xs="${s.id}"]`), x = s.map.section;
      world.profile(s.map.relief3d.site, x.from, x.to).then(sec => { if (fig && sec) drawSection(fig, sec); });
    }
    if (!world) root.classList.add('no-webgl');
  } catch (err) {
    if (!eScenes.length) { base = scenes.map((_, k) => k); span = scenes.map(() => 1); eScenes = scenes; }
    console.warn('Globe unavailable:', err);
    root.classList.add('no-webgl');
  }
  setPct(1);
  measure();
  // keyed on the scroll position, not the scene: inside a held panel the scene stays the same while years and steps move
  let lastY = NaN;
  gsap.ticker.add(() => {
    const y = lenis ? lenis.scroll : scrollY;
    if (y === lastY) return; lastY = y;
    const p = progressAt(y), ep = engineP(y);
    // past the last scene (lab, toolkit): the map's ribbon, legend and labels step aside
    root.classList.toggle('is-past', y + innerHeight * 0.5 > holds[N - 1][1] + innerHeight * 0.35);
    if (world) world.setProgress(ep);
    updateUI(p);
    updatePanels(y, ep, p < 0 ? 0 : Math.min(N - 1, Math.round(p)));
  });
  gsap.ticker.add(readCamera); // the camera also drifts on the hero, so its reading is taken every frame
  addEventListener('resize', () => { measure(); lastY = NaN; });
  document.fonts?.ready.then(() => { measure(); lastY = NaN; });
  new ResizeObserver(() => { measure(); lastY = NaN; }).observe($('[data-scenes]'));
  const enter = () => requestAnimationFrame(() => { loader.classList.add('is-done'); root.classList.add('is-ready'); });
  if (snd) gate(enter); else enter();
  boot();
  if (location.hash) { const k = scenes.findIndex(s => '#' + s.id === location.hash); if (k >= 0) setTimeout(() => goTo(k), 400); }
}
start();
