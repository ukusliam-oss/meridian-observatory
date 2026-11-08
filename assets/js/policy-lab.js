// Policy lab: five policy dials, six aim gauges, a six-year clock. Reads the model in data/economics/policy-lab.js.
// A scenario replays what governments did (2009, 2022) while the lab is on screen; nothing needs input. Moving a dial
// switches to "Your policy", and the clock runs six years from that change. Every gauge shows the economy with the
// policy (solid) against the same economy with no change in policy (dashed), so the gap is the effect of the policy.
// Reduced motion: no playback; the clock starts at the end and can be dragged.
import { reduced as reducedPref, esc } from './core.js';

const css = new URL('../css/policy-lab.css', import.meta.url).href;
let sheet = document.querySelector(`link[href="${css}"]`);
if (!sheet) document.head.append(sheet = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: css }));
// The lab is drawn once its stylesheet applies. Drawn before (it often was, on a real line), its gauges took the
// browser's default size, 361 px tall, for a frame and then shrank to 64 px: a layout shift of 0.38-0.60 on the
// deployed chapter. A stylesheet that fails to load still lets it draw.
const styled = sheet.sheet ? Promise.resolve() : new Promise(r => { sheet.addEventListener('load', r, { once: true }); sheet.addEventListener('error', r, { once: true }); });

const DT = 0.25; // quarters between samples
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const ramp = (s, [a, b]) => (s <= a ? 0 : s >= b ? 1 : (t => t * t * (3 - 2 * t))((s - a) / (b - a)));
// piecewise-linear value of [[q, v], ...] at quarter t (flat before the first and after the last point)
const along = (pts, t, before) => {
  if (!pts || !pts.length) return before;
  if (t <= pts[0][0]) return before ?? pts[0][1];
  for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) { const [q0, v0] = pts[i - 1], [q1, v1] = pts[i]; return v0 + (v1 - v0) * (t - q0) / Math.max(1e-9, q1 - q0); }
  return pts.at(-1)[1];
};
const fmt = (v, dp, signed) => `${signed && v > 0 ? '+' : ''}${v.toFixed(dp)}`.replace('-', '−');

// ── the model: paths of every aim with the policy and with no change in policy ─────────────────────
export function run(model, mode, manualDials) {
  const H = model.horizon, N = Math.round(H / DT) + 1, ts = Array.from({ length: N }, (_, i) => i * DT);
  const sc = mode === 'manual' ? null : model.scenarios.find(s => s.id === mode);
  const keys = [...model.aims.map(a => a.id), 'budget'];
  const start = sc ? sc.start : Object.fromEntries([...model.aims.map(a => [a.id, a.base]), ['budget', model.budget.base]]);
  const dial0 = sc ? sc.dials : Object.fromEntries(model.dials.map(d => [d.id, d.neutral]));
  // dial position over time: a scenario's moves, or the reader's dials set at quarter 0
  const pos = (d, t) => (sc ? along(sc.moves[d.id], t, dial0[d.id]) : (t > 0 ? manualDials[d.id] : d.neutral));
  const dialPath = Object.fromEntries(model.dials.map(d => [d.id, ts.map(t => pos(d, t))]));
  const base = {}, withP = {};
  for (const k of keys) {
    base[k] = ts.map(t => start[k] + (sc ? along(sc.shock[k], t, 0) : 0));
    withP[k] = base[k].slice();
  }
  // each small step of a dial starts its own response; the responses add up
  for (const d of model.dials) {
    const lag = model.lags[d.id], path = dialPath[d.id];
    for (const e of model.effects.filter(e => e.dial === d.id)) {
      const sr = e.sr || lag.sr, lr = e.lr || lag.lr, out = withP[e.aim];
      for (let i = 1; i < N; i++) {
        const step = (path[i] - path[i - 1]) / d.per; if (!step) continue;
        const t0 = ts[i - 1];
        for (let j = i; j < N; j++) { const s = ts[j] - t0; out[j] += step * (e.k[0] * ramp(s, sr) + (e.k[1] - e.k[0]) * ramp(s, lr)); }
      }
    }
  }
  return { ts, base, withP, dialPath, sc };
}
// how an aim moved because of the policy: +1 towards its aim, −1 away, 0 too small to count
function towards(aim, w, b) {
  const d = w - b;
  if (Math.abs(d) < aim.eps) return 0;
  if (aim.better === 'up') return Math.sign(d);
  if (aim.better === 'down') return -Math.sign(d);
  const gap = Math.abs(w - aim.better) - Math.abs(b - aim.better);
  return Math.abs(gap) < aim.eps ? 0 : -Math.sign(gap);
}

export async function mountPolicyLab(el, model, opts) { await styled; return mount(el, model, opts); }
function mount(el, model, { reduced = reducedPref } = {}) {
  const H = model.horizon, aims = model.aims, byId = Object.fromEntries(aims.map(a => [a.id, a]));
  const srcKeys = Object.keys(model.sources || {});
  const modes = [...model.scenarios.map(s => ({ id: s.id, label: s.label })), { id: 'manual', label: model.manual.label }];
  const manualDials = Object.fromEntries(model.dials.map(d => [d.id, d.neutral]));
  let mode = model.scenarios[0].id, res = run(model, mode, manualDials), t = reduced ? H : 0, playing = !reduced, touched = false, onScreen = false;

  const W = 220, Hs = 64; // sparkline box
  const groups = [...new Set(model.dials.map(d => d.group))];
  el.innerHTML = `<div class="plab">
    <header class="plab__head">
      <p class="mono plab__kicker">${esc(model.kicker)}</p>
      <p class="plab__intro">${esc(model.intro)}</p>
      <details class="plab__warn"><summary class="mono">${esc(model.warning)}${model.status === 'draft' ? ' · draft, not yet reviewed by an Economics teacher' : ''}</summary><p>${esc(model.warningMore)}</p></details>
    </header>
    <div class="plab__modes" role="group" aria-label="Scenario">${modes.map(m => `<button class="plab__mode mono" type="button" data-mode="${m.id}">${esc(m.label)}</button>`).join('')}</div>
    <div class="plab__grid">
      <div class="plab__dials">${groups.map(g => `<fieldset class="plab__group"><legend class="mono">${esc(g)}</legend>
        ${model.dials.filter(d => d.group === g).map(d => `<label class="plab__dial" data-dial="${d.id}">
          <span class="plab__dl"><span>${esc(d.label)}</span><b class="mono" data-dv></b></span>
          <input type="range" min="${d.min}" max="${d.max}" step="${d.step}" value="${d.neutral}" aria-label="${esc(d.label)}">
          <span class="plab__ends mono"><span>${esc(d.low)}</span><span>${esc(d.high)}</span></span>
          <span class="plab__note">${esc(d.note)}</span></label>`).join('')}</fieldset>`).join('')}</div>
      <div class="plab__main">
        <div class="plab__clock">
          <button class="plab__play" type="button" aria-pressed="false" aria-label="Play"><svg viewBox="0 0 24 24" aria-hidden="true"><path class="i-play" d="M8 5.5v13l10.5-6.5z"/><path class="i-pause" d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg></button>
          <div class="plab__when"><b class="plab__year" aria-live="off"></b><span class="mono plab__q"></span></div>
          <div class="plab__track">
            <div class="plab__zones mono"><span style="width:${(model.readouts.short / H) * 100}%">${esc(model.zones.short)} · ${esc(model.zones.shortNote)}</span><span>${esc(model.zones.long)} · ${esc(model.zones.longNote)}</span></div>
            <input class="plab__scrub" type="range" min="0" max="${H}" step="${DT}" value="0" aria-label="Time since the policy began, in quarters">
            <div class="plab__beats"></div>
          </div>
        </div>
        <p class="plab__story" aria-live="polite"></p>
        <div class="plab__aims">${aims.map(a => `<article class="plab__aim" data-aim="${a.id}">
          <header><span class="mono">${esc(a.label)}</span><b class="plab__v"></b></header>
          <p class="plab__aimt">${esc(a.aim)} <span>· ${esc(a.measure)}</span></p>
          <svg viewBox="0 0 ${W} ${Hs}" preserveAspectRatio="none" aria-hidden="true">
            <defs><clipPath id="lab-clip-${a.id}"><rect class="plab__clip" x="0" y="0" width="0" height="${Hs}"/></clipPath></defs>
            <rect class="plab__zone"/><line class="plab__now"/><path class="plab__base"/><path class="plab__with" clip-path="url(#lab-clip-${a.id})"/><circle class="plab__dot" r="3.2"/></svg>
          <p class="plab__ro mono"></p></article>`).join('')}</div>
        <div class="plab__foot">
          <p class="plab__budget"><span class="mono">${esc(model.budget.label)}</span> <b></b> <span class="plab__bnote"></span></p>
          <div class="plab__conflict" aria-live="polite"><p class="mono plab__ct"></p><p class="plab__cx"></p></div>
        </div>
      </div>
    </div>
    <details class="plab__more"><summary class="mono">How the lab works, and its sources</summary>
      ${model.notes.map(n => `<p>${esc(n)}</p>`).join('')}
      <ol class="plab__src">${srcKeys.map((k, n) => { const s = model.sources[k]; return `<li id="lab-src-${k}"><span class="mono">${n + 1}</span> ${esc(s.title)}. ${esc(s.publisher)}. <a href="${esc(s.url)}" rel="noopener">${esc(s.url.replace(/^https?:\/\//, ''))}</a></li>`; }).join('')}</ol>
    </details>
  </div>`;

  const $ = s => el.querySelector(s), $$ = s => [...el.querySelectorAll(s)];
  const play = $('.plab__play'), scrub = $('.plab__scrub'), story = $('.plab__story');
  const cards = Object.fromEntries(aims.map(a => [a.id, el.querySelector(`[data-aim="${a.id}"]`)]));
  const dialEls = Object.fromEntries(model.dials.map(d => [d.id, el.querySelector(`[data-dial="${d.id}"]`)]));
  const X = q => (q / H) * W;

  // static parts of each sparkline for the current run: zone band, both full paths (the "with" path is clipped by t)
  function layout() {
    const sc = res.sc;
    for (const a of aims) {
      const c = cards[a.id], Y = v => Hs - 4 - (clamp((v - a.min) / (a.max - a.min)) * (Hs - 8));
      const zone = c.querySelector('.plab__zone');
      zone.setAttribute('x', 0); zone.setAttribute('width', W); zone.setAttribute('y', Y(a.zone[1]).toFixed(1)); zone.setAttribute('height', (Y(a.zone[0]) - Y(a.zone[1])).toFixed(1));
      const path = arr => arr.map((v, i) => `${i ? 'L' : 'M'}${X(res.ts[i]).toFixed(1)} ${Y(v).toFixed(1)}`).join('');
      c.querySelector('.plab__base').setAttribute('d', path(res.base[a.id]));
      c.querySelector('.plab__with').setAttribute('d', path(res.withP[a.id]));
      c._Y = Y;
      const at = q => res.withP[a.id][Math.round(q / DT)];
      c.querySelector('.plab__ro').textContent = `After 2 years ${fmt(at(model.readouts.short), a.dp)}${a.unit} · after 6 years ${fmt(at(model.readouts.long), a.dp)}${a.unit}`;
    }
    const beats = (sc ? sc.beats : model.manual.beats);
    $('.plab__beats').innerHTML = beats.map(b => `<i style="left:${(b.t / H) * 100}%"></i>`).join('');
    $$('.plab__mode').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    el.classList.toggle('is-manual', mode === 'manual');
    for (const d of model.dials) dialEls[d.id].querySelector('input').classList.toggle('is-auto', mode !== 'manual');
  }

  let lastBeat = null, lastConflict = '';
  function draw() {
    const i = Math.round(t / DT), sc = res.sc;
    scrub.value = t;
    const yr = sc ? sc.startYear + Math.floor(t / 4) : null;
    $('.plab__year').textContent = sc ? String(yr) : `Year ${Math.floor(t / 4) + 1}`;
    $('.plab__q').textContent = `Quarter ${Math.floor(t % 4) + 1} · ${t < model.readouts.short ? model.zones.short : model.zones.long}`;
    // dials follow the scenario's decisions; in your own policy they show what you chose
    for (const d of model.dials) {
      const v = mode === 'manual' ? manualDials[d.id] : res.dialPath[d.id][i], box = dialEls[d.id];
      if (mode !== 'manual') box.querySelector('input').value = v;
      box.querySelector('[data-dv]').textContent = `${fmt(v, d.dp, d.signed)}${d.unit === '%' ? '%' : ' ' + d.unit}`;
      const moved = Math.abs(v - (mode === 'manual' ? d.neutral : res.dialPath[d.id][0])) > 1e-9;
      box.classList.toggle('is-moved', moved);
    }
    for (const a of aims) {
      const c = cards[a.id], w = res.withP[a.id][i], b = res.base[a.id][i];
      c.querySelector('.plab__v').textContent = `${fmt(w, a.dp)}${a.unit}`;
      c.querySelector('.plab__clip').setAttribute('width', (X(t) + 0.5).toFixed(1)); // the policy line is drawn up to the clock
      const dot = c.querySelector('.plab__dot'); dot.setAttribute('cx', X(t).toFixed(1)); dot.setAttribute('cy', c._Y(w).toFixed(1));
      const now = c.querySelector('.plab__now'); now.setAttribute('x1', X(t).toFixed(1)); now.setAttribute('x2', X(t).toFixed(1)); now.setAttribute('y1', 0); now.setAttribute('y2', Hs);
      const dir = towards(a, w, b);
      c.classList.toggle('is-good', dir > 0); c.classList.toggle('is-bad', dir < 0);
      const inZone = w >= a.zone[0] && w <= a.zone[1]; c.classList.toggle('is-in', inZone);
    }
    const bw = res.withP.budget[i], bb = res.base.budget[i];
    $('.plab__budget b').textContent = `${fmt(bw, model.budget.dp, true)}${model.budget.unit === '% of GDP' ? '% of GDP' : ''}`;
    $('.plab__bnote').textContent = Math.abs(bw - bb) < model.budget.eps ? model.budget.note : `${fmt(bw - bb, model.budget.dp, true)} compared with no change in policy. ${model.budget.note}`;
    // narration: the latest beat at or before the clock
    const beats = sc ? sc.beats : model.manual.beats;
    const beat = [...beats].reverse().find(b => b.t <= t + 1e-9) || beats[0];
    if (beat !== lastBeat) {
      lastBeat = beat;
      story.innerHTML = esc(beat.text) + (beat.src ? ' ' + beat.src.map(k => `<a class="src mono" href="#lab-src-${k}">${srcKeys.indexOf(k) + 1}</a>`).join('') : '');
      if (!reduced) { story.classList.remove('is-new'); void story.offsetWidth; story.classList.add('is-new'); }
    }
    // conflict: the first pair where one aim moved towards its aim and the other away (the syllabus three first)
    let txt = null;
    if (t >= 1) for (const cf of model.conflicts) {
      const da = towards(byId[cf.a], res.withP[cf.a][i], res.base[cf.a][i]), db = towards(byId[cf.b], res.withP[cf.b][i], res.base[cf.b][i]);
      if (da > 0 && db < 0) { txt = [cf.title, cf.ab, cf.syllabus]; break; }
      if (da < 0 && db > 0) { txt = [cf.title, cf.ba, cf.syllabus]; break; }
    }
    if (!txt) {
      const any = aims.some(a => towards(a, res.withP[a.id][i], res.base[a.id][i]) !== 0);
      txt = [any ? 'No conflict' : 'Waiting for the policy to work', any ? model.noConflict.none : model.noConflict.still, false];
    }
    const key = txt.join('|');
    if (key !== lastConflict) {
      lastConflict = key;
      $('.plab__ct').textContent = `${txt[0]}${txt[2] ? ' · a conflict named in the syllabus' : ''}`;
      $('.plab__cx').textContent = txt[1];
      $('.plab__conflict').classList.toggle('is-on', txt[0] !== 'No conflict' && txt[0] !== 'Waiting for the policy to work');
    }
    play.setAttribute('aria-pressed', String(playing)); play.setAttribute('aria-label', playing ? 'Pause' : 'Play');
  }

  function setMode(m, keepT = false) {
    mode = m; res = run(model, mode, manualDials); lastBeat = null; lastConflict = '';
    if (!keepT) t = reduced ? H : 0;
    layout(); draw();
  }

  // playback: about 1.2 quarters a second, a pause at the end, then the next scenario while the reader has not taken over
  let last = 0, hold = 0;
  function tick(now) {
    requestAnimationFrame(tick);
    const dt = last ? Math.min(0.1, (now - last) / 1000) : 0; last = now;
    if (!playing || !onScreen || document.hidden) return;
    if (t >= H) {
      hold += dt;
      if (hold > 3.5) {
        hold = 0;
        if (touched || mode === 'manual') { playing = false; draw(); return; }
        const k = model.scenarios.findIndex(s => s.id === mode);
        setMode(model.scenarios[(k + 1) % model.scenarios.length].id);
      }
      return;
    }
    t = Math.min(H, t + dt * 1.2); draw();
  }

  $$('.plab__mode').forEach(b => b.addEventListener('click', () => { touched = true; setMode(b.dataset.mode); playing = !reduced; draw(); }));
  play.addEventListener('click', () => { touched = true; if (t >= H) t = 0; playing = !playing; draw(); });
  scrub.addEventListener('input', () => { touched = true; playing = false; t = +scrub.value; draw(); });
  for (const d of model.dials) {
    const input = dialEls[d.id].querySelector('input');
    input.addEventListener('input', () => {
      touched = true;
      if (mode !== 'manual') { for (const k of model.dials) { manualDials[k.id] = k.neutral; dialEls[k.id].querySelector('input').value = k.neutral; } }
      manualDials[d.id] = +input.value; input.value = manualDials[d.id];
      setMode('manual'); playing = !reduced; draw();
    });
  }
  new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; }, { threshold: 0.25 }).observe(el);
  setMode(mode);
  if (!reduced) requestAnimationFrame(tick);
  return { setMode, get t() { return t; }, set t(v) { t = clamp(v, 0, H); draw(); } };
}
