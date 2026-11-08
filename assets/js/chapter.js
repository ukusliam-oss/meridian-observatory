// Scroll chapter page (History and Economics): renders the scenes of one chapter from its data file and drives the globe.
// Scroll position becomes globe progress p (scene index + fraction); the date ribbon and the pill follow it.
// The text works without WebGL: if the globe cannot start, the page is still a complete chapter.
// The page names its data file in <body data-chapter>; anything a chapter does not set falls back to KQ6's values.

import { $, $$, gsap, lenis, reduced, boot, esc, QUALITY, quality, navOffset } from './core.js';
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
const phone = matchMedia('(max-width: 760px)').matches;
const scenes = data.scenes;
const N = scenes.length;
const srcKeys = Object.keys(data.sources);
const srcNo = k => srcKeys.indexOf(k) + 1;

// ── markup ─────────────────────────────────────────────────────────────────
// a scene's title as plain words (its markup and the em's line break gone), for the pill
const plain = t => String(t).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
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
const demLine = s => `<p class="mono sc__dem" data-dem="${s.map.relief3d.site}">Loading heights. Flat relief for now.</p>`;
// a cross-section along the scene's section line, drawn from the same heights as the landscape once the globe has them
function section(s) {
  const x = s.map.section;
  return `<figure class="sc__chart sc__xs" data-xs="${s.id}"><figcaption class="mono">Cross-section ${esc(x.label || 'A to B')} · height in metres</figcaption>
    <div class="xs-plot"><svg viewBox="0 0 460 200" role="img" aria-label="Cross-section ${esc(x.label || 'A to B')}"></svg>${demLine(s)}</div><figcaption class="mono" data-xs-note><span aria-hidden="true">Distance in km (00.0 km). Vertical exaggeration about ×00. Copernicus DEM GLO-30.</span></figcaption></figure>`;
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
  return `<div class="sc__block"><span class="sc__label">${esc(c.title || 'Chain of analysis')}</span><ol class="chain2" data-chain>${c.steps.map((x, k) => `<li${k === c.globe ? ' class="is-globe"' : ''}><span class="mono">${k + 1}</span><span>${esc(x)}</span></li>`).join('')}</ol></div>`;
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

// ── the scene as a film (WP-04X) ─────────────────────────────────────────
// Every scene is shot like the directed scenes: a title card, then its text as captions that hold at the foot of the
// frame while the shot holds, then its notes (charts, chains, judgement, checks, facts) running over the dimmed frame
// like a film's credits. A paragraph is cut at its sentence ends into captions of about the same length, each a few
// seconds' reading (at most ~46 words), so no caption is a wall of text and none is a stray half-line.
const words = t => plain(t).split(' ').filter(Boolean).length;
function captions(html) {
  const out = [];
  for (const p of html.match(/<p>[\s\S]*?<\/p>/g) || [html]) {
    const sents = p.replace(/^<p>|<\/p>$/g, '').trim().split(/(?<=[.!?]["”’)]?)\s+(?=[A-Z"“‘(<])/);
    const total = sents.reduce((n, t) => n + words(t), 0), each = total / Math.ceil(total / 46);
    let cur = [], n = 0;
    for (const t of sents) { const w = words(t); if (cur.length && n + w / 2 > each) { out.push(cur.join(' ')); cur = []; n = 0; } cur.push(t); n += w; }
    if (cur.length) out.push(cur.join(' '));
  }
  return out;
}
// a title card: a lead before a colon stands above in italic, the rest in capitals
const cardTitle = t => { const i = t.indexOf(': '); return i > 0 ? `<em>${esc(t.slice(0, i + 1))}</em><span>${esc(t.slice(i + 2))}</span>` : `<span>${esc(t)}</span>`; };
const step = (inner, cls = '') => `<div class="sc__step${cls}"><div class="sc__fix">${inner}</div></div>`;
// a directed scene's own question to the reader: the pointer (or a button) asks the scene, the answer is read out
const askStep = x => step(`${x.hint ? `<p class="sc__hint">${esc(x.hint)}</p>` : ''}
  <div class="sc__keys" role="group" aria-label="${esc(x.keysLabel || 'Ask the scene')}">${x.keys.map(k => `<button type="button" data-key="${esc(k.v)}">${esc(k.label)}</button>`).join('')}</div>
  <p class="sc__read" data-read aria-live="polite"></p>`, ' sc__ask');
function sceneHTML(s, i) {
  const pi = partOf(i), part = parts[pi];
  const opener = part.first === i ? `<header class="part" data-part="${pi}"><div class="part__in">
      <p class="sc__kick">Part ${pi + 1} of ${parts.length}</p>
      <h2 class="part__title"><em>${pi === parts.length - 1 ? 'After' : 'Part ' + (pi + 1)}</em><span>${esc(s.part)}</span></h2>
      <div class="part__fps">${[...new Set(part.scenes.flatMap(k => scenes[k].syllabus || []))].sort()
        .map(t => (data.focusPoints || data.syllabus || []).find(f => f.id === t)).filter(Boolean)
        .filter(f => !data.focusPoints || f.id.startsWith('FP')).map(f => `<span>${f.id} · ${esc(f.text)}</span>`).join('')}</div>
    </div></header>` : '';
  const judge = s.judgement ? `<div class="sc__block"><span class="sc__label">Judgement</span><div class="sc__judge">
      <div class="for"><span class="sc__label">Arguments for</span><ul>${s.judgement.for.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="against"><span class="sc__label">Arguments against</span><ul>${s.judgement.against.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="sc__verdict"><span class="sc__label">A supported judgement</span><p>${esc(s.judgement.verdict)}</p></div></div></div>` : '';
  const mis = s.misconception ? `<div class="sc__block sc__mis">
      <p class="is-wrong"><span class="sc__label">Common mistake</span>${esc(s.misconception.wrong)}</p>
      <p class="is-right"><span class="sc__label">In fact</span>${esc(s.misconception.right)}</p></div>` : '';
  return `<section class="sc" id="${s.id}" data-i="${i}">${opener}
    <div class="sc__film" data-panel>
      <div class="sc__fly" aria-hidden="true"></div>
      ${step(`<p class="sc__kick sc__date">${esc(s.dateLabel)}</p><h2 class="sc__title">${cardTitle(s.title)}</h2>`, ' sc__card')}
      <div class="sc__body">${captions(s.body).map(c => step(`<p class="sc__cap">${c}</p>`)).join('')}</div>
      ${s.scene && s.scene.keys ? askStep(s.scene) : ''}
      <div class="sc__notes">
        ${s.map && s.map.relief3d && !s.map.section ? demLine(s) : ''}
        ${s.chart ? chart(s.chart, s.id) : ''}${s.map && s.map.section && s.map.relief3d ? section(s) : ''}${s.chain ? chain(s.chain) : ''}${s.compare ? compare(s.compare) : ''}${s.cascade ? cascade(s.cascade) : ''}
        <div class="sc__block sc__why"><span class="sc__label">Why it matters</span><p>${esc(s.why)}</p></div>
        ${s.evaluation && s.evaluation.length ? `<div class="sc__block"><span class="sc__label">It depends on</span><ul class="sc__eval">${s.evaluation.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
        ${mis}${judge}
        <div class="sc__block"><button class="sc__check" type="button" aria-expanded="false"><span class="sc__label"><span>Check yourself</span><span>Tap to reveal</span></span>
          <span class="q">${esc(s.check.q)}</span><span class="a">${esc(s.check.a)}</span></button></div>
        <details class="sc__block sc__facts"><summary class="sc__label">Facts and sources (${s.facts.length})</summary>
          <ol>${s.facts.map(f => `<li>${esc(f.text)}<a class="src mono" href="#src-${f.src}" title="${esc(data.sources[f.src].title)}">${srcNo(f.src)}</a></li>`).join('')}</ol></details>
      </div>
    </div></section>`;
}

$('[data-scenes]').innerHTML = scenes.map(sceneHTML).join('');
glossary();
// a draft says so under the chapter title; a reviewed chapter shows nothing
if (data.subject && data.status === 'draft' && $('.ch-hero .ch-wrap')) $('.ch-hero .ch-wrap').insertAdjacentHTML('beforeend', '<p class="mono ch-draft">Draft · not yet reviewed by a teacher</p>');

// end of chapter: one-page summary, quick checks, every source
$('[data-sum]').innerHTML = data.toolkit.summary.map(x => `<p>${x}</p>`).join('');
$('[data-checks]').innerHTML = data.toolkit.checks.map(c => `<button class="sc__check" type="button" aria-expanded="false"><span class="mono"><span>Quick check</span><span>Tap</span></span><span class="q">${esc(c.q)}</span><span class="a">${esc(c.a)}</span></button>`).join('');
// Glossary chips (after the inline notes of awarded long reads): a key term the chapter has already introduced is, in
// a later scene, a chip that opens its definition on the glass, so the reader can recall it without leaving the scene.
// The definitions are the chapter's own (toolkit) and the subject's flashcards. A term's first scene is left alone (it
// is usually where the term is explained), then its first mention in each later scene becomes a chip, at most three
// chips a scene.
async function glossary() {
  const subject = document.body.dataset.subject;
  let cards = [];
  try { cards = subject ? (await import(`./data/${subject}.js`)).default.cards || [] : []; } catch { /* the chips are a convenience */ }
  const norm = t => t.toLowerCase().replace(/[’']/g, '').replace(/[–-]/g, ' ').replace(/s$/, '').trim();
  const terms = new Map();
  // a bare "demand" or "supply" in a macro chapter usually means the economy's total, not a market's: no chip for them
  for (const c of cards) if (!/^(demand|supply)$/i.test(c.t)) terms.set(norm(c.t), { k: c.t, d: c.d });
  for (const d of data.toolkit?.definitions || []) terms.set(norm(d.k), d);
  if (!terms.size) return;
  const names = [...terms.values()].map(t => t.k).sort((a, b) => b.length - a.length).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/[–-]/g, '[–-]').replace(/s?$/, 's?'));
  const re = new RegExp(`\\b(${names.join('|')})\\b`, 'i');
  const met = new Set();
  $$('.sc').forEach(sc => {
    const body = $('.sc__body', sc); if (!body) return;
    const here = new Set();
    // the scene's text nodes, outside links and chips, in reading order
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, { acceptNode: n => (n.parentElement.closest('a, .gl') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    const seenBefore = new Set(met);
    for (const node of nodes) {
      let m; let rest = node;
      while (rest && (m = re.exec(rest.textContent))) {
        const key = norm(m[1]), t = terms.get(key) || terms.get(norm(m[1] + 's'));
        if (!t) break;
        met.add(key);
        // "total demand" is aggregate demand, not the market's demand of the flashcard: such a qualified term is left alone
        const qualified = /\b(total|aggregate)\s+$/i.test(rest.textContent.slice(0, m.index));
        if (qualified || !seenBefore.has(key) || here.has(key) || here.size >= 3) { rest = rest.splitText(m.index + m[1].length); continue; }
        here.add(key);
        const word = rest.splitText(m.index); rest = word.splitText(m[1].length);
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'gl'; b.dataset.k = t.k; b.dataset.d = t.d; b.setAttribute('aria-expanded', 'false');
        b.innerHTML = `${esc(word.textContent)}<i aria-hidden="true"></i>`;
        // inside a bold run the chip keeps the weight
        word.replaceWith(b);
      }
    }
  });
  const card = document.createElement('div');
  card.className = 'gl-card'; card.id = 'gl-card'; card.setAttribute('role', 'note'); card.hidden = true;
  document.body.append(card);
  let open = null, hoverT = 0;
  const show = b => {
    if (open === b) return; hide();
    open = b; b.setAttribute('aria-expanded', 'true'); b.setAttribute('aria-describedby', 'gl-card');
    card.innerHTML = `<span class="gl-card__k">${esc(b.dataset.k)}</span><span class="gl-card__d">${esc(b.dataset.d)}</span>`;
    card.hidden = false;
    const r = b.getBoundingClientRect(), w = Math.min(320, innerWidth - 32), left = Math.max(16, Math.min(innerWidth - w - 16, r.left + r.width / 2 - w / 2));
    card.style.width = `${w}px`; card.style.left = `${left}px`;
    const below = r.bottom + 10 + card.offsetHeight < innerHeight - 90;
    card.style.top = `${below ? r.bottom + 10 : r.top - 10 - card.offsetHeight}px`;
    if (!reduced) gsap.fromTo(card, { opacity: 0, y: below ? -4 : 4, filter: 'brightness(.4)' }, { opacity: 1, y: 0, filter: 'brightness(1)', duration: 0.45, ease: 'm.out', clearProps: 'filter' });
  };
  const hide = () => { if (!open) return; open.setAttribute('aria-expanded', 'false'); open.removeAttribute('aria-describedby'); open = null; card.hidden = true; };
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  document.addEventListener('click', e => { const b = e.target.closest('.gl'); if (b) { open === b ? hide() : show(b); } else if (!card.contains(e.target)) hide(); });
  if (fine) {
    document.addEventListener('pointerover', e => { const b = e.target.closest('.gl'); if (!b) return; clearTimeout(hoverT); hoverT = setTimeout(() => show(b), 140); });
    document.addEventListener('pointerout', e => { if (e.target.closest('.gl') && !e.relatedTarget?.closest?.('.gl')) { clearTimeout(hoverT); hoverT = setTimeout(hide, 160); } });
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
  addEventListener('scroll', hide, { passive: true });
  addEventListener('wheel', hide, { passive: true });
}

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
  // the pill only opens on hover where it floats clear of the text (a wide window); on a narrow one it moves with the
  // tab bar and could slide under a resting pointer, so there it opens on a click
  menuBtn.addEventListener('pointerenter', () => { if (innerWidth <= 760) return; inside = true; setMenu(true); });
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
// The items are links to #scene, so the site's anchor handler (core.js) also takes a click and scrolls, after goTo, to
// where the scene's section begins. For most scenes that is inside the scene's hold, with its title in view; for a scene
// that opens a part it is the part's title screen, short of the scene (the first scene: still the hero). A pointer
// choice keeps that landing where it shows the scene, and is otherwise reached by goTo alone, at its hold as a deep
// link is. A keyboard choice (a click with no pointer) always goes by goTo alone, and focus goes to the scene's title.
menu.addEventListener('click', e => {
  const a = e.target.closest('[data-go]'); if (!a) return;
  const i = +a.dataset.go, keys = e.detail === 0, shows = keys || anchorShows(i);
  e.preventDefault(); setMenu(false); goTo(i);
  if (!keys && shows) return;
  e.stopPropagation(); history.replaceState(null, '', a.getAttribute('href'));
  if (keys) focusHeading(sceneHeading(i));
});
// whether the anchor handler's landing (the section's top under the nav, as scrollToEl puts it) makes scene i the
// active one (on wide screens it stops a few pixels short of the hold, with the camera already there) with its title
// on screen
function anchorShows(i) {
  const s = $(`.sc[data-i="${i}"]`), t = sceneHeading(i).getBoundingClientRect();
  const y = Math.min(Math.max(0, s.getBoundingClientRect().top + scrollY - navOffset()), document.documentElement.scrollHeight - innerHeight);
  const top = t.top + scrollY - y;
  return Math.round(progressAt(y)) === i && top >= 0 && top + t.height <= innerHeight;
}
// "Skip to scenes", the second skip link on a chapter page, puts focus on the menu's button itself; the site's anchor
// handler (core.js) is kept out, as it would scroll the page towards the fixed pill
$('[data-skip-scenes]')?.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); menuBtn.focus(); });

// Headings take focus from a script without becoming Tab stops, and without scrolling: a focus scroll moves the page
// before Lenis sees it. At a scene's hold its panel is on the reading line, so its title is the heading in view.
function focusHeading(h) { if (!h) return; h.tabIndex = -1; h.focus({ preventScroll: true }); }
function sceneHeading(i) { return $(`.sc[data-i="${i}"] .sc__title`); }

// ── scroll → progress ─────────────────────────────────────────────────────
// A scene holds (p = i exactly) from its title card to the end of its notes; the camera flies in the empty length of
// scroll before each title card (and over a part's title). As on the directed pages, a step is lit while it is under
// the middle of the screen.
let holds = [], heroAnchor = 0, capsEnd = [], stepsAt = [], notesAt = [];
const panels = $$('[data-panel]');
const sections = $$('.sc[data-i]');
const stepEls = panels.map(p => $$('.sc__step', p));
const CAP_LINE = 0.5;
function measure() {
  const y = scrollY, vh = innerHeight, abs = el => { const r = el.getBoundingClientRect(); return [y + r.top, y + r.bottom]; };
  stepsAt = stepEls.map(list => list.map(abs));
  notesAt = panels.map(p => abs($('.sc__notes', p)));
  holds = panels.map((p, k) => { const start = stepsAt[k][0][0] - vh * (CAP_LINE - 0.5); return [start, Math.max(start + 1, notesAt[k][1] - vh * 0.2)]; });
  // a map that steps through years moves through them while the captions are read, and rests on the last under the notes
  capsEnd = panels.map((p, k) => Math.max(holds[k][0] + 1, notesAt[k][0] - vh * 0.5));
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
      const u = span[k] > 1 ? Math.max(0, Math.min(1, (c - holds[k][0]) / (capsEnd[k] - holds[k][0]))) : 0;
      return base[k] + u * (span[k] - 1);
    }
    if (k < N - 1 && c < holds[k + 1][0]) return base[k] + span[k] - 1 + (c - holds[k][1]) / (holds[k + 1][0] - holds[k][1]);
  }
  return eScenes.length - 1;
}
// the step of scene k under the caption line, and how far through it (null outside the scene's steps)
function stepOf(k, y) {
  const A = y + innerHeight * CAP_LINE, list = stepsAt[k] || [];
  for (let n = 0; n < list.length; n++) if (A >= list[n][0] && A < list[n][1]) return { n, f: (A - list[n][0]) / Math.max(1, list[n][1] - list[n][0]), count: list.length };
  return null;
}
let litEl = null;
function lightSteps(y, near) {
  let el = null;
  for (let k = Math.max(0, near - 1); k <= Math.min(N - 1, near + 1) && !el; k++) { const st = stepOf(k, y); if (st) el = stepEls[k][st.n]; }
  if (el === litEl) return;
  litEl?.classList.remove('is-on'); litEl = el; el?.classList.add('is-on');
  // a title card stands alone on the frame: the map's place names wait for the first caption
  root.classList.toggle('is-card', !!el?.classList.contains('sc__card'));
}
// the frame darkens while the notes run over it, and clears again before the camera flies on
function dimAt(k, y) {
  const vh = innerHeight, top = notesAt[k][0] - y, bot = notesAt[k][1] - y;
  return 1 - 0.68 * smooth(vh * 0.95, vh * 0.45, top) * (1 - smooth(vh * 0.6, vh * 0.15, bot));
}
function goTo(i) {
  // to the scene's title card at rest
  const y = holds[i][0] - innerHeight * 0.5 + innerHeight * 0.3;
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
let lastShown = -2, lastFr = -1, heightsAt = 0;
const navBar = $('.nav');
function updateUI(p) {
  const i = Math.max(0, Math.floor(p)), f = p - Math.floor(p);
  const near = p < 0 ? 0 : Math.min(N - 1, Math.round(p));
  const da = p < 0 ? dayNum(CFG.heroDate) : dayNum(scenes[i].date);
  const db = p < 0 ? dayNum(scenes[0].date) : dayNum(scenes[Math.min(N - 1, i + 1)].date);
  const d = da + (db - da) * (p < 0 ? Math.max(0, p + 1) : f);
  needle.style.left = `${((d - T0) / (T1 - T0) * 100).toFixed(2)}%`;
  const ep = eScenes.length ? engineP(lenis ? lenis.scroll : scrollY) : -1, es = eScenes[Math.max(0, Math.round(ep))];
  const shown = ep >= -0.5 && es && es.map && (es.map.spikes || es.map.data);
  const film = films.get(near);
  if (film && film.o > 0.5 && film.year != null) yearEl.textContent = film.year;
  else yearEl.textContent = shown ? (shown.month ? shown.month.replace(/-(\d\d)$/, (m, mm) => ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][+mm - 1]).split(' ').reverse().join(' ') : shown.year) : new Date(d * 864e5).getUTCFullYear();
  ribbon.classList.toggle('is-on', p > -0.6 && p < N - 0.6);
  // the bar dims for study as the first screen leaves (p from -0.7 to -0.1), and comes back with it
  const st = Math.min(1, Math.max(0, (p + 0.7) / 0.6));
  navBar?.style.setProperty('--study', (st * st * (3 - 2 * st)).toFixed(3));
  const key = p < -0.5 ? -1 : near;
  if (key !== lastShown) {
    lastShown = key;
    const s = scenes[near];
    // the scene's date is said once, on its panel: the ribbon reads the year, the pill names the part and the scene
    labelEl.textContent = '';
    roll(pillPart, esc(p < -0.5 ? CFG.pill.part : s.part));
    roll(pillDate, p < -0.5 ? CFG.pill.date : esc(plain(s.title)));
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
let lastY = NaN;
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
// how far an element of the notes has come up through the caption line: 0 as its top reaches it, 1 as its foot does
function riseOf(el, y) { const r = el.getBoundingClientRect(); return (innerHeight * 0.75 - r.top) / Math.max(1, r.height); }
const stepAt = (n, count) => -0.1 + n * (0.8 / Math.max(1, count));
function updatePanels(y, ep, near) {
  for (let k = Math.max(0, near - 1); k <= Math.min(N - 1, near + 1); k++) {
    const e = fx[k];
    if (e.steps.length) {
      const t = riseOf(e.steps[0].parentElement, y);
      e.steps.forEach((li, n) => li.classList.toggle('is-on', reduced || t >= stepAt(n, e.steps.length)));
      if (e.globe != null && world) world.setGate(k, reduced ? (t >= stepAt(e.globe, e.steps.length) ? 1 : 0) : smooth(stepAt(e.globe, e.steps.length), stepAt(e.globe, e.steps.length) + 0.18, t));
    }
    if (e.lc) {
      // a chart beside a map that steps through years follows the map; any other chart draws as it comes up
      const yr = span[k] > 1 ? mapYear(k, ep) : null;
      const x = reduced ? e.lc.x1 : yr != null ? Math.min(e.lc.x1, Math.max(e.lc.x0, yr)) : e.lc.x0 + (e.lc.x1 - e.lc.x0) * smooth(-0.1, 0.7, riseOf(e.lc.el, y));
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

// ── directed scenes (WP-04X) ───────────────────────────────────────────────
// A scene that has been directed on its own (src/scene/*) takes the frame from the globe where the chapter reaches it:
// the camera flies to the place on the globe, and as it lands the scene's own film comes up over it. The scene's steps
// choose its shots (each held through a step and moved in the step's last third, as on the directed pages); its last
// step asks the reader to point.
const FILMS = {
  eyja: { src: './eyja.js', ask: (w, x, y) => w.traceAt(x, y), key: (w, v) => w.traceFrom(...v.split(',').map(Number)),
    say: t => `From ${t.from.toLocaleString('en-GB')} m to ${t.to < 30 ? 'the plain' : t.to.toLocaleString('en-GB') + ' m'}: ${t.km.toFixed(1)} km of valley.` },
  berlin: { src: './berlin.js', ask: (w, x, y) => w.askAt(x, y), key: (w, v, m) => w.askPlace(...m.PLACES[v]),
    step: (w, n, count) => w.setCrossing(n >= count - 2),
    say: r => `${r.sector ? { us: 'West Berlin · the American sector', uk: 'West Berlin · the British sector', fr: 'West Berlin · the French sector', su: 'East Berlin · the Soviet sector' }[r.sector] : 'East Germany, outside Berlin'} · ${r.km < 1 ? Math.round(r.km * 100) * 10 + ' m' : r.km.toFixed(1) + ' km'} from the Wall` },
  prices: { src: './prices.js', ask: (w, x, y) => w.countryAt(x, y), key: (w, v) => w.country(v),
    step: (w, n) => w.setTarget(n >= 1),
    say: c => `${c.name} · 2019 ${c.at(2019).toFixed(1)}% · 2022 ${c.at(2022).toFixed(1)}% · 2024 ${c.at(2024).toFixed(1)}%` },
};
const films = new Map();
async function loadFilm(k) {
  const spec = scenes[k].scene, kind = FILMS[spec.film], el = document.createElement('div');
  el.className = 'film'; el.style.opacity = 0; el.style.visibility = 'hidden';
  $('[data-world]').append(el);
  const f = { el, spec, kind, w: null, mod: null, o: 0 };
  films.set(k, f);
  try {
    f.mod = await import(kind.src);
    f.w = await f.mod.createScene(el, { reduced, phone });
    if (f.w.onYear) f.w.onYear(v => { f.year = Math.round(v); if (f.o > 0.5) yearEl.textContent = f.year; });
    lastY = NaN;
  } catch (err) { console.warn('Scene unavailable:', err); el.remove(); }
}
// heights, terrain and directed scenes only once the reader has stopped near a scene: a scene's text is long now, so a
// jump or a fast scroll spends a while in the scenes it passes, and must fetch nothing for them
function stopped(near) {
  clearTimeout(heightsAt);
  heightsAt = setTimeout(() => {
    if (!world) return;
    [base[near], base[near + 1], base[near] + span[near] - 1, base[near - 1], base[near + 2]].forEach(k => k != null && world.heights(k));
    scenes.forEach((s, k) => { if (s.scene && s.scene.film && !films.has(k) && Math.abs(near - k) <= 2) loadFilm(k); });
  }, 250);
}
function updateFilms(p, y) {
  let held = false;
  for (const [k, f] of films) {
    const d = Math.abs(p - k), o = reduced ? (d < 0.5 ? 1 : 0) : 1 - smooth(0.02, 0.3, d);
    held ||= o > 0.5;
    if (o !== f.o) { f.o = o; f.el.style.opacity = o.toFixed(3); f.el.style.visibility = o > 0 ? 'visible' : 'hidden'; }
    if (!f.w || o <= 0) continue;
    const st = stepOf(k, y), count = stepsAt[k].length;
    // through a step its shot holds; in the step's last third it moves to the next step's (the first two hold the first)
    const n = st ? st.n : (y + innerHeight * CAP_LINE < stepsAt[k][0][0] ? 0 : count - 1), u = st ? smooth(0.62, 1, st.f) : 0;
    const at = (list, m) => list[Math.min(list.length - 1, m)];
    const shots = f.spec.shots || [0], nx = Math.min(count - 1, n + 1);
    f.w.setShot(at(shots, n) + (at(shots, nx) - at(shots, n)) * (n === count - 1 ? 0 : u));
    if (f.spec.years && f.w.setYear) f.w.setYear(at(f.spec.years, n) + (at(f.spec.years, nx) - at(f.spec.years, n)) * (n === count - 1 ? 0 : u));
    f.w.setDim(dimAt(k, y));
    f.kind.step?.(f.w, n, count);
  }
  // while a directed scene holds the frame, the globe's legend and place names are not its: they step aside
  root.classList.toggle('has-film', held);
}
// the reader's question to the scene on screen: the pointer anywhere over it (not over the text's buttons and links)
let askT = 0, askX = -99, askY = -99;
function askFilm() { const st = litEl?.classList.contains('sc__ask') && litEl.closest('.sc'); if (!st) return null; const f = films.get(+st.dataset.i); return f && f.w && f.o > 0.9 ? { f, read: $('[data-read]', litEl) } : null; }
function asked(a, r) { if (a && r) a.read.textContent = a.f.kind.say(r); }
addEventListener('pointermove', e => {
  const a = askFilm(); if (!a || e.target.closest('button, a')) return;
  const now = performance.now();
  if (now - askT < 120 || Math.hypot(e.clientX - askX, e.clientY - askY) < 12) return;
  askT = now; askX = e.clientX; askY = e.clientY;
  asked(a, a.f.kind.ask(a.f.w, e.clientX, e.clientY));
}, { passive: true });
addEventListener('pointerdown', e => { const a = askFilm(); if (a && !e.target.closest('button, a')) asked(a, a.f.kind.ask(a.f.w, e.clientX, e.clientY)); });
document.addEventListener('click', e => {
  const b = e.target.closest('[data-key]'); if (!b) return;
  const f = films.get(+b.closest('.sc').dataset.i); if (!f || !f.w) return;
  $('[data-read]', b.closest('.sc__ask')).textContent = f.kind.say(f.kind.key(f.w, b.dataset.key, f.mod));
});

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
    // entered from the keyboard: once the loader has faded, focus goes to the heading in view (the chapter's title, or
    // a deep link's scene) instead of staying on the hidden button
    if (e.detail === 0) afterLoader(() => { const p = progressAt(lenis ? lenis.scroll : scrollY); focusHeading(p < -0.5 ? $('.ch-hero__title') : sceneHeading(Math.max(0, Math.round(p)))); });
  });
}
// the loader fades (.9s); a timer finishes the wait too, as transitionend is skipped without transitions or in a hidden tab
function afterLoader(fn) {
  let timer = 0;
  const done = e => {
    if (e && (e.target !== loader || e.propertyName !== 'opacity')) return;
    loader.removeEventListener('transitionend', done); clearTimeout(timer); fn();
  };
  loader.addEventListener('transitionend', done);
  timer = setTimeout(done, 1200);
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
      // the settings menu's quality (?look= overrides the light: 1 its shaders, 2 adds post.js, 0 neither)
      look: +(new URLSearchParams(location.search).get('look') ?? QUALITY[quality()].look), dprCap: QUALITY[quality()].dpr[phone ? 0 : 1] });
    addEventListener('meridian:quality', e => { const Q = QUALITY[e.detail]; world?.setQuality({ dpr: Q.dpr[phone ? 0 : 1], look: Q.look }); });
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
  // the scene's text speaks of its landscape: until the heights are in, or if they cannot come, this line says so, in the
  // empty chart where the scene has one; without WebGL the chart is gone, so the line moves under the text
  $$('[data-dem]').forEach(el => {
    if (!world) {
      const fig = el.closest('[data-xs]');
      el.textContent = `3D terrain${fig ? ' and cross-section' : ''} unavailable in this mode.`;
      if (fig) $('.sc__body', el.closest('.sc')).after(el);
    } else world.heightsReady(el.dataset.dem).then(ok => { if (ok) el.remove(); else el.textContent = 'Heights unavailable. Flat relief shown.'; });
  });
  setPct(1);
  measure();
  // keyed on the scroll position, not the scene: inside a held panel the scene stays the same while years and steps move
  gsap.ticker.add(() => {
    const y = lenis ? lenis.scroll : scrollY;
    if (y === lastY) return; lastY = y;
    const p = progressAt(y), ep = engineP(y), near = p < 0 ? 0 : Math.min(N - 1, Math.round(p));
    // past the last scene (lab, toolkit): the map's ribbon, legend and labels step aside
    root.classList.toggle('is-past', y + innerHeight * 0.5 > holds[N - 1][1] + innerHeight * 0.35);
    const dim = p < 0 ? 1 : dimAt(near, y);
    if (world) { world.setProgress(ep); world.setDim(dim); }
    root.classList.toggle('is-notes', dim < 0.7);
    updateUI(p);
    lightSteps(y, near);
    stopped(near);
    updatePanels(y, ep, near);
    updateFilms(p, y);
  });
  addEventListener('resize', () => { measure(); lastY = NaN; });
  document.fonts?.ready.then(() => { measure(); lastY = NaN; });
  new ResizeObserver(() => { measure(); lastY = NaN; }).observe($('[data-scenes]'));
  const enter = () => requestAnimationFrame(() => { loader.classList.add('is-done'); root.classList.add('is-ready'); });
  if (snd) gate(enter); else enter();
  boot();
  if (location.hash) { const k = scenes.findIndex(s => '#' + s.id === location.hash); if (k >= 0) setTimeout(() => goTo(k), 400); }
}
start();
