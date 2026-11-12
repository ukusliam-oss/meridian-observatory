// Shared, data-driven components. Each takes a mount element and plain data, writes its markup,
// then wires its own motion. Nothing here needs the student to type anything to be useful.
import { gsap, ScrollTrigger, Flip, reduced, $, $$, store, segmented, toggleHeight, icons } from './core.js';

const hm = min => { const h = Math.floor(min / 60), m = min % 60; return h ? (m ? `${h}h ${m}m` : `${h}h`) : `${m}m`; };
const shuffle = (a, rnd = Math.random) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const seeded = s => () => { s |= 0; s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

// ── Exam anatomy ───────────────────────────────────────────────────────────
export function examAnatomy(el, d) {
  const all = d.papers.filter(p => p.route === 'all'), alt = d.papers.filter(p => p.route === 'either');
  const mixes = ['100%', '74%', '56%'];
  const weights = all.map((p, i) => `<div class="weights__seg" style="--w:${p.weight};--mix:${mixes[i] || '50%'}"><b>${p.weight}%</b><span>${p.name} · ${p.title}</span></div>`).join('')
    + (alt.length ? `<div class="weights__seg weights__seg--alt" style="--w:${alt[0].weight}"><b>${alt[0].weight}%</b><span>${alt.map(p => p.short || p.name).join(' or ')}</span></div>` : '');

  const parts = p => {
    if (!p.parts) return '';
    const max = Math.max(...p.parts.map(x => x.m));
    return `${p.partsNote ? `<p class="parts__note">${p.partsNote}</p>` : ''}<div class="parts" aria-label="Marks per part">${p.parts.map(x => `<div><i>${x.k}</i><em style="width:${(x.m / max) * 100}%"></em><span>${x.m} · ${x.w}</span></div>`).join('')}</div>`;
  };
  const plan = p => {
    if (!p.plan) return '';
    const { read = 0, check = 0, qs } = p.plan, sum = qs.reduce((n, q) => n + q[1], 0), avail = p.time - read - check;
    const segs = [read && [`Read`, read, false], ...qs.map(([l, m]) => [l, (avail * m) / sum, true]), check && [`Check`, check, false]].filter(Boolean);
    return `<div class="plan"><div class="plan__label"><span>Suggested timing</span><span>About ${(p.time / p.marks).toFixed(1)} minutes per mark</span></div>
      <div class="plan__bar">${segs.map(([l, m, q]) => `<span class="${q ? 'is-q' : ''}" style="--m:${m}"><b>${l}</b>${Math.round(m)}m</span>`).join('')}</div></div>`;
  };
  const card = p => `
    <article class="card pad paper" data-spot data-reveal>
      <div class="paper__top"><div><p class="paper__name">${p.name}</p><h3 class="paper__title">${p.title}</h3></div>
        <span class="paper__route">${p.route === 'all' ? 'Everyone' : 'Either / or'}</span></div>
      <div class="paper__nums">
        <div><b>${p.time ? hm(p.time) : 'n/a'}</b><span>${p.time ? 'exam time' : 'no exam'}</span></div>
        <div><b data-count="${p.marks}">${p.marks}</b><span>marks</span></div>
        <div><b><span data-count="${p.weight}">${p.weight}</span>%</b><span>of total marks</span></div>
      </div>
      <ul>${p.points.map(x => `<li>${x}</li>`).join('')}</ul>
      ${parts(p)}${plan(p)}
      ${p.tip ? `<p class="paper__tip">${p.tip}</p>` : ''}
    </article>`;
  const C = 2 * Math.PI * 26;
  const aos = d.aos ? `<div class="aos">${d.aos.map(a => `
    <div class="card ao" data-reveal>
      <svg class="ao__ring" viewBox="0 0 64 64"><circle class="bg" cx="32" cy="32" r="26"/><circle class="fg" cx="32" cy="32" r="26" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - a.w / 100)}" data-off="${C * (1 - a.w / 100)}" data-c="${C}"/><text x="32" y="37" text-anchor="middle">${a.w}%</text></svg>
      <div><b>${a.id} · ${a.name}</b><p>${a.text}</p></div>
    </div>`).join('')}</div>` : '';

  el.innerHTML = `<div class="weights" data-reveal="0" role="img" aria-label="Weighting: ${d.papers.map(p => `${p.name} ${p.weight}%`).join(', ')}">${weights}</div>
    <div class="papers">${d.papers.map(card).join('')}</div>${aos}<div data-mount="finder"></div>`;

  if (!reduced) {
    gsap.from($$('.weights__seg', el), { scaleX: 0, duration: 1.4, stagger: 0.12, ease: 'm.io', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    $$('.paper', el).forEach(c => {
      const bars = $$('.parts em, .plan__bar span', c);
      if (bars.length) gsap.from(bars, { scaleX: 0, duration: 1.1, stagger: 0.06, ease: 'm.out', scrollTrigger: { trigger: c, start: 'top 80%', once: true } });
    });
    $$('.ao__ring .fg', el).forEach(r => gsap.fromTo(r, { strokeDashoffset: +r.dataset.c }, { strokeDashoffset: +r.dataset.off, duration: 1.8, ease: 'm.out', scrollTrigger: { trigger: r, start: 'top 92%', once: true } }));
  }
  if (d.finder) finder($('[data-mount="finder"]', el), d.finder);
}

function finder(el, f) {
  let opt = f.options[f.defaultOption || 1].id, series = f.series[0].id;
  el.innerHTML = `<div class="card finder" data-reveal>
    <div><p class="eyebrow">${f.eyebrow}</p><h3 class="h3">${f.title}</h3><p class="muted" style="font-size:15px">${f.text}</p>
      <div class="seg" data-opt>${f.options.map(o => `<button data-value="${o.id}" aria-selected="${o.id === opt}">${o.label}</button>`).join('')}</div>
      <div class="lab__chips" data-series>${f.series.map(s => `<button class="chip" data-value="${s.id}" aria-pressed="${s.id === series}">${s.label}</button>`).join('')}</div></div>
    <div class="finder__out" aria-live="polite"></div></div>`;
  const out = $('.finder__out', el);
  const render = (animate = true) => {
    const s = f.series.find(x => x.id === series), t = s[opt];
    out.innerHTML = `<p class="eyebrow eyebrow--plain">${s.label} · ${f.options.find(o => o.id === opt).label}</p>
      <h4 class="h3">${t}</h4><p class="muted" style="font-size:14.5px">${(f.notes && f.notes[t]) || f.note}</p>`;
    if (animate && !reduced) gsap.from(out.children, { y: 18, opacity: 0, duration: 0.8, stagger: 0.06 });
  };
  segmented($('[data-opt]', el), v => { opt = v; render(); });
  $$('[data-series] .chip', el).forEach(b => b.addEventListener('click', () => {
    series = b.dataset.value;
    $$('[data-series] .chip', el).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    render();
  }));
  render(false);
}

// ── Topic map ──────────────────────────────────────────────────────────────
export function topicMap(el, d) {
  const key = `${d.id}:conf`, conf = store.get(key, {});
  const items = d.topics.groups.flatMap(g => g.items);
  const labels = ['Not started', 'Revising', 'Confident'];
  el.innerHTML = `
    <div class="progress-line" data-reveal><div class="progress-line__bar"><i></i></div><span data-progress></span></div>
    <div style="height:28px"></div>
    ${d.topics.groups.map(g => `
      <div class="topic-group">
        <div class="topic-group__head" data-reveal><h3 class="h3">${g.title}</h3>
          <div class="topic-group__side">${g.note ? `<p>${g.note}</p>` : ''}<button class="chip topic-group__all" data-all>Expand all</button></div></div>
        <div class="topics">${g.items.map(t => `
          <article class="card topic" id="topic-${t.code}" data-code="${t.code}" data-conf="${conf[t.code] ?? ''}" data-reveal>
            <button class="topic__btn" aria-expanded="false">
              <span class="topic__code">${t.code}</span>
              <span><span class="topic__title">${t.title}</span><span class="topic__meta">${t.meta || `${t.points.length} points`}</span></span>
              <span class="topic__chev" aria-hidden="true">${icons.plus}</span>
            </button>
            <div class="topic__body"><div class="topic__inner">
              <ul>${t.points.map(p => `<li>${p}</li>`).join('')}</ul>
              <div class="confidence" role="group" aria-label="Confidence for ${t.code}"><span>Confidence:</span>
                ${labels.map((l, i) => `<button class="chip" data-v="${i}" aria-pressed="${conf[t.code] === i}">${l}</button>`).join('')}</div>
            </div></div>
          </article>`).join('')}</div>
      </div>`).join('')}`;

  const bar = $('.progress-line__bar i', el), txt = $('[data-progress]', el);
  const update = () => {
    const n = items.filter(t => conf[t.code] === 2).length, m = items.filter(t => conf[t.code] === 1).length;
    bar.style.setProperty('--p', n / items.length);
    txt.innerHTML = n || m
      ? `<b>${n}</b> of ${items.length} topics marked confident${m ? `, ${m} marked revising` : ''}. <span class="faint">Saved on this device.</span>`
      : `${items.length} topics. Open a topic and mark how confident you are. This is saved on this device.`;
  };
  update();
  // wide screens have room for every topic, so they start open; each group can expand or collapse at once
  const wide = matchMedia('(min-width: 1100px)').matches;
  // a closed topic's body is inert: its confidence chips are clipped to nothing, so they leave the Tab order with it
  const setOpen = (t, open, animate = true) => {
    if (t.classList.contains('is-open') === open) return;
    const btn = $('.topic__btn', t), body = $('.topic__body', t);
    btn.setAttribute('aria-expanded', String(open));
    t.classList.toggle('is-open', open);
    if (!open && body.contains(document.activeElement)) btn.focus();
    body.inert = !open;
    if (animate) toggleHeight(body, open);
    else body.style.height = open ? 'auto' : '';
  };
  $$('.topic-group', el).forEach(g => {
    const cards = $$('.topic', g), all = $('[data-all]', g);
    const sync = () => {
      const open = cards.every(t => t.classList.contains('is-open'));
      all.dataset.open = open;
      all.textContent = open ? 'Collapse all' : 'Expand all';
    };
    cards.forEach(t => {
      if (wide) setOpen(t, true, false); else $('.topic__body', t).inert = true;
      $('.topic__btn', t).addEventListener('click', () => { setOpen(t, !t.classList.contains('is-open')); sync(); });
    });
    all.addEventListener('click', () => { const open = all.dataset.open !== 'true'; cards.forEach(t => setOpen(t, open)); sync(); });
    sync();
  });
  $$('.topic', el).forEach(t => {
    $$('.confidence .chip', t).forEach(c => c.addEventListener('click', () => {
      const v = +c.dataset.v, code = t.dataset.code;
      if (conf[code] === v) delete conf[code]; else conf[code] = v;
      store.set(key, conf);
      t.dataset.conf = conf[code] ?? '';
      $$('.confidence .chip', t).forEach(x => x.setAttribute('aria-pressed', String(conf[code] === +x.dataset.v)));
      if (!reduced) gsap.fromTo($('.topic__code', t), { scale: 0.7 }, { scale: 1, duration: 0.6, ease: 'm.snap' });
      update();
    }));
  });
}

// ── Geography: detailed specific examples tracker ──────────────────────────
export function examplesTracker(el, list, id) {
  const key = `${id}:examples`, done = store.get(key, {});
  el.innerHTML = `<div class="progress-line" data-reveal style="margin-bottom:28px"><div class="progress-line__bar"><i></i></div><span data-progress></span></div>
    <div class="examples">${list.map(x => `
      <article class="card example ${done[x.code] ? 'is-done' : ''}" data-code="${x.code}" data-reveal>
        <div class="example__top"><span class="tag">${x.code}</span>
          <label class="check"><input type="checkbox" ${done[x.code] ? 'checked' : ''}>Covered</label></div>
        <h4>${x.title}</h4>
        <ul>${x.needs.map(n => `<li>${n}</li>`).join('')}</ul>
        <p class="example__ideas"><b>Possible examples:</b> ${x.ideas}</p>
      </article>`).join('')}</div>`;
  const bar = $('.progress-line__bar i', el), txt = $('[data-progress]', el);
  const update = () => {
    const n = list.filter(x => done[x.code]).length;
    bar.style.setProperty('--p', n / list.length);
    txt.innerHTML = `<b>${n}</b> of ${list.length} detailed specific examples covered. <span class="faint">Tick each one when your class has studied it.</span>`;
  };
  update();
  $$('.example', el).forEach(c => $('input', c).addEventListener('change', e => {
    done[c.dataset.code] = e.target.checked; if (!e.target.checked) delete done[c.dataset.code];
    store.set(key, done); c.classList.toggle('is-done', e.target.checked); update();
    if (e.target.checked && !reduced) gsap.fromTo(c, { scale: 0.98 }, { scale: 1, duration: 0.7, ease: 'm.snap' });
  }));
}

// ── Technique blocks ───────────────────────────────────────────────────────
const DIAGRAMS = {
  ppc: '<path class="c1" d="M16 16 Q 92 18 98 80"/><path class="c3" d="M16 8 Q 104 10 110 80"/>',
  dshift: '<path class="c2" d="M26 78 L102 14"/><path class="c1" d="M22 14 L92 78"/><path class="c3" d="M40 10 L112 72"/>',
  sshift: '<path class="c1" d="M22 14 L92 78"/><path class="c2" d="M30 78 L104 14"/><path class="c3" d="M18 68 L84 10"/>',
  ped: '<path class="c1" d="M52 8 L66 80"/><path class="c2" d="M16 36 L112 54"/>',
  maxp: '<path class="c1" d="M22 14 L92 78"/><path class="c2" d="M26 78 L102 14"/><path class="c3" d="M16 62 H114"/>',
  minp: '<path class="c1" d="M22 14 L92 78"/><path class="c2" d="M26 78 L102 14"/><path class="c3" d="M16 28 H114"/>',
  tax: '<path class="c1" d="M22 14 L92 78"/><path class="c2" d="M26 78 L102 14"/><path class="c3" d="M18 62 L90 2"/>',
  atc: '<path class="c1" d="M20 16 C 40 78, 78 78, 110 22"/><path class="c3" d="M64 70 V80"/>',
  wage: '<path class="c1" d="M22 14 L92 78"/><path class="c2" d="M26 78 L102 14"/><path class="c3" d="M16 30 H114"/>',
  fx: '<path class="c1" d="M22 14 L92 78"/><path class="c2" d="M26 78 L102 14"/><path class="c3" d="M38 10 L108 72"/>',
};
const diagram = k => `<svg viewBox="0 0 120 90" data-draw aria-hidden="true"><path class="ax" d="M14 4 V82 H116"/>${DIAGRAMS[k] || ''}</svg>`;

const BLOCKS = {
  parts: b => `<div class="qparts">${b.parts.map(p => `
    <div class="qpart"><div class="qpart__m"><b>${p.m}</b><span>${p.k}<br>marks</span></div>
      <div><h4>${p.title}</h4><p>${p.text}</p>${p.stem ? `<p class="stem">${p.stem}</p>` : ''}</div></div>`).join('')}</div>`,
  levels: b => `<div class="levels">${b.levels.map(l => `
    <button class="level" style="--l:${l.l}" aria-expanded="false"><b>Level ${l.l}</b><span>${l.name}</span><em>${l.marks}</em><small>${l.detail}</small></button>`).join('')}</div>
    ${b.note ? `<p class="lab__note">${b.note}</p>` : ''}`,
  plans: b => `<div class="plans">${b.plans.map(p => `
    <article class="card plan-q">
      <button class="plan-q__btn" aria-expanded="false"><span>${p.q}</span><span class="topic__chev" aria-hidden="true">${icons.plus}</span></button>
      <div class="plan-q__body"><div class="plan-q__grid">
        <div class="yes"><h5>${p.yesLabel || 'Arguments for'}</h5><ul>${p.yes.map(x => `<li>${x}</li>`).join('')}</ul></div>
        <div class="no"><h5>${p.noLabel || 'Arguments against'}</h5><ul>${p.no.map(x => `<li>${x}</li>`).join('')}</ul></div>
        <div class="judge"><h5>Judgement</h5><p>${p.judge}</p></div>
      </div></div>
    </article>`).join('')}</div>`,
  steps: b => `<ol class="steps">${b.steps.map(s => `<li><span>${s}</span></li>`).join('')}</ol>`,
  bank: b => `<div class="bank">${b.items.map(i => `<span>${i.b ? `<b>${i.b}</b>` : ''}${i.t}</span>`).join('')}</div>`,
  matrix: b => `<div class="matrix"><span class="mh"></span>${b.cols.map(c => `<span class="mh">${c}</span>`).join('')}
    ${b.rows.map((r, i) => `<span class="rh">${r}</span>${b.cells[i].map(c => `<span>${c}</span>`).join('')}`).join('')}</div>`,
  diagrams: b => `<div class="diagrams">${b.items.map(i => `<div class="diagram">${diagram(i.k)}<b>${i.name}</b><span>${i.note}</span></div>`).join('')}</div>`,
};

export function technique(el, blocks) {
  const html = [];
  let row = [];
  const flush = () => { if (row.length) { html.push(`<div class="tech__row">${row.join('')}</div>`); row = []; } };
  blocks.forEach(b => {
    const card = `<article class="card pad tblock" data-reveal data-spot>
      ${b.eyebrow ? `<p class="eyebrow">${b.eyebrow}</p>` : ''}<h3 class="h3">${b.title}</h3>${b.intro ? `<p>${b.intro}</p>` : ''}${BLOCKS[b.type](b)}</article>`;
    if (b.half) row.push(card); else { flush(); html.push(card); }
  });
  flush();
  el.innerHTML = `<div class="tech">${html.join('')}</div>`;

  $$('.level', el).forEach(l => l.addEventListener('click', () => {
    const open = l.getAttribute('aria-expanded') !== 'true';
    const state = Flip.getState($$('.level', el));
    l.setAttribute('aria-expanded', String(open));
    Flip.from(state, { duration: reduced ? 0 : 0.6, ease: 'm.out', nested: true });
  }));
  $$('.plan-q', el).forEach(p => {
    const btn = $('.plan-q__btn', p), body = $('.plan-q__body', p);
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      p.classList.toggle('is-open', open);
      toggleHeight(body, open);
    });
  });
  if (!reduced) $$('.levels', el).forEach(ls => gsap.from($$('.level', ls), {
    '--l': 0, duration: 1.2, stagger: 0.08, ease: 'm.out', scrollTrigger: { trigger: ls, start: 'top 85%', once: true },
  }));
}

// ── Command words ──────────────────────────────────────────────────────────
export function commandWords(el, words) {
  el.innerHTML = `<div class="words">${words.map(w => `
    <article class="card word" data-reveal data-spot>
      <div class="word__top"><h4>${w.w}</h4><span class="depth" aria-label="Depth ${w.depth} of 5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= w.depth ? 'on' : ''}"></i>`).join('')}</span></div>
      <p>${w.means}</p><p class="do"><b>How to answer:</b> ${w.do}</p>
    </article>`).join('')}</div>`;
}

// ── Flashcards ─────────────────────────────────────────────────────────────
export function flashcards(el, cards, id) {
  const key = `${id}:known`;
  let known = new Set(store.get(key, []));
  let order = [], pos = 0, flipped = false, busy = false, onlyUnknown = false;

  el.innerHTML = `<div class="deck">
    <div class="deck__stage" tabindex="0" aria-label="Flashcards. Press Space to turn a card over, the right arrow if you know it, or the left arrow to see it again."></div>
    <div class="card deck__side">
      <div class="deck__count"><b data-left>0</b><span data-left-label>cards left in this set</span></div>
      <div style="display:grid;gap:8px"><div class="deck__meter"><i data-meter></i></div><span class="faint" style="font-size:13px" data-known></span></div>
      <div class="deck__btns"><button class="btn btn--ghost" data-again>${icons.reset} Still learning</button><button class="btn btn--accent" data-got>I know this ${icons.check}</button></div>
      <div class="deck__tools">
        <button class="chip" data-mode aria-pressed="false">Show unknown cards only</button>
        <button class="chip" data-shuffle>${icons.shuffle.replace('<svg', '<svg width="15" height="15"')} Shuffle</button>
        <button class="chip" data-clear>Reset progress</button>
      </div>
      <p class="faint" style="font-size:13px;display:flex;gap:6px;flex-wrap:wrap;align-items:center"><span class="kbd">Space</span> turn over <span class="kbd">←</span> still learning <span class="kbd">→</span> I know this. You can also drag the card.</p>
    </div></div>`;
  const stage = $('.deck__stage', el);

  const build = (shuf = true) => {
    const pool = cards.map((c, i) => i).filter(i => !onlyUnknown || !known.has(cards[i].t));
    order = shuf ? shuffle(pool) : pool;
    pos = 0;
    render();
  };
  const faceHTML = i => {
    const c = cards[i];
    return `<div class="fc__face"><span class="fc__hint">Key term${known.has(c.t) ? ' (known)' : ''}</span><div class="fc__term">${c.t}</div><span class="fc__hint">Tap to turn over</span></div>
      <div class="fc__face fc__face--back"><span class="fc__hint">${c.t}</span><p class="fc__def">${c.d}</p></div>
      <span class="fc__stamp fc__stamp--yes">Got it</span><span class="fc__stamp fc__stamp--no">Again</span>`;
  };
  const stats = () => {
    $('[data-left]', el).textContent = Math.max(0, order.length - pos);
    const k = cards.filter(c => known.has(c.t)).length;
    $('[data-meter]', el).style.width = `${(k / cards.length) * 100}%`;
    $('[data-known]', el).textContent = `${k} of ${cards.length} known (saved on this device)`;
  };
  function render() {
    stage.innerHTML = '';
    flipped = false;
    stats();
    if (pos >= order.length) {
      const left = cards.filter(c => !known.has(c.t)).length;
      stage.innerHTML = `<div class="deck__done"><p class="eyebrow eyebrow--plain">Set complete</p>
        <p class="h3">${left ? `${left} card${left > 1 ? 's' : ''} still to learn.` : 'You know all the cards in this set.'}</p>
        <button class="btn btn--accent btn--sm" data-restart>${left ? 'Review the remaining cards' : 'Start again'}</button></div>`;
      $('[data-restart]', stage).addEventListener('click', () => { onlyUnknown = !!left; $('[data-mode]', el).setAttribute('aria-pressed', String(onlyUnknown)); build(); });
      if (!reduced) gsap.from(stage.firstElementChild, { scale: 0.94, opacity: 0, duration: 0.8 });
      return;
    }
    if (pos + 1 < order.length) {
      const under = document.createElement('div');
      under.className = 'fc fc--under';
      under.innerHTML = faceHTML(order[pos + 1]);
      gsap.set(under, { scale: 0.94, y: 18, opacity: 0.6 });
      stage.append(under);
    }
    const top = document.createElement('div');
    top.className = 'fc';
    top.innerHTML = faceHTML(order[pos]);
    stage.append(top);
    if (!reduced) gsap.from(top, { scale: 0.94, y: 18, opacity: 0.6, duration: 0.55, ease: 'm.out' });
    drag(top);
  }
  const flip = () => {
    const top = $('.fc:not(.fc--under)', stage);
    if (!top || busy) return;
    flipped = !flipped;
    gsap.to(top, { rotationY: flipped ? 180 : 0, duration: reduced ? 0 : 0.8, ease: 'm.snap' });
  };
  const next = ok => {
    const top = $('.fc:not(.fc--under)', stage);
    if (!top || busy) return;
    busy = true;
    const c = cards[order[pos]];
    if (ok) known.add(c.t); else { known.delete(c.t); if (!onlyUnknown) order.push(order[pos]); }
    store.set(key, [...known]);
    const under = $('.fc--under', stage);
    if (under) gsap.to(under, { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'm.out' });
    gsap.to($(ok ? '.fc__stamp--yes' : '.fc__stamp--no', top), { opacity: 1, duration: 0.15 });
    gsap.to(top, {
      x: (ok ? 1 : -1) * (stage.offsetWidth + 200), rotation: ok ? 18 : -18, opacity: 0,
      duration: reduced ? 0 : 0.55, ease: 'power2.in',
      onComplete: () => { pos++; busy = false; render(); },
    });
  };
  function drag(card) {
    let sx = 0, sy = 0, dx = 0, moving = false, id = null;
    const yes = $('.fc__stamp--yes', card), no = $('.fc__stamp--no', card);
    card.addEventListener('pointerdown', e => { if (busy) return; id = e.pointerId; sx = e.clientX; sy = e.clientY; dx = 0; moving = false; card.setPointerCapture(id); });
    card.addEventListener('pointermove', e => {
      if (e.pointerId !== id) return;
      dx = e.clientX - sx;
      if (!moving && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(e.clientY - sy)) moving = true;
      if (!moving) return;
      gsap.set(card, { x: dx, rotation: dx / 18 });
      gsap.set(yes, { opacity: Math.max(0, dx / 120) });
      gsap.set(no, { opacity: Math.max(0, -dx / 120) });
    });
    const end = e => {
      if (e.pointerId !== id) return;
      id = null;
      if (!moving) { flip(); return; }
      if (Math.abs(dx) > 110) next(dx > 0);
      else { gsap.to(card, { x: 0, rotation: 0, duration: 0.7, ease: 'm.snap' }); gsap.to([yes, no], { opacity: 0, duration: 0.3 }); }
    };
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', end);
  }

  $('[data-again]', el).addEventListener('click', () => next(false));
  $('[data-got]', el).addEventListener('click', () => next(true));
  $('[data-shuffle]', el).addEventListener('click', () => build(true));
  $('[data-mode]', el).addEventListener('click', e => { onlyUnknown = !onlyUnknown; e.currentTarget.setAttribute('aria-pressed', String(onlyUnknown)); build(); });
  $('[data-clear]', el).addEventListener('click', () => { known = new Set(); store.set(key, []); build(); });

  let inView = false;
  ScrollTrigger.create({ trigger: el, start: 'top 70%', end: 'bottom 30%', onToggle: s => { inView = s.isActive; } });
  addEventListener('keydown', e => {
    if (!inView || e.target.closest('input, textarea, select, button, a') && e.target !== stage) return;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
    else if (e.key === 'ArrowRight') next(true);
    else if (e.key === 'ArrowLeft') next(false);
  });
  build();
}

// ── Quiz ───────────────────────────────────────────────────────────────────
export function quiz(el, questions, { title = 'Quick check', sources } = {}) {
  let qs = [], i = 0, score = 0, results = [];
  const C = 2 * Math.PI * 52;
  el.innerHTML = `<div class="card quiz">
    <aside class="quiz__side">
      <svg class="ring" viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="52"/><circle class="fg" cx="60" cy="60" r="52" stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
        <text x="60" y="62" text-anchor="middle" data-score>0</text><text class="sub" x="60" y="80" text-anchor="middle">correct</text></svg>
      <div style="display:grid;gap:12px"><p class="eyebrow eyebrow--plain">${title}</p><div class="quiz__dots"></div></div>
    </aside>
    <div class="quiz__main" aria-live="polite"></div></div>`;
  const main = $('.quiz__main', el), dots = $('.quiz__dots', el), ring = $('.ring .fg', el), sc = $('[data-score]', el);
  const letters = 'ABCD';

  const start = list => {
    qs = list.map(q => ({ ...q, opts: shuffle(q.a.map((t, k) => ({ t, ok: k === q.c }))) }));
    i = 0; score = 0; results = [];
    dots.innerHTML = qs.map(() => '<i></i>').join('');
    setRing();
    show();
  };
  const setRing = () => {
    sc.textContent = score;
    gsap.to(ring, { strokeDashoffset: C * (1 - (qs.length ? score / qs.length : 0)), duration: reduced ? 0 : 1, ease: 'm.out' });
  };
  function show() {
    $$('i', dots).forEach((d, k) => d.classList.toggle('is-now', k === i));
    if (i >= qs.length) return summary();
    const q = qs[i];
    main.innerHTML = `<div style="display:flex;justify-content:space-between;gap:12px"><span class="quiz__src">${q.src ? q.src + ' · ' : ''}Question ${i + 1} of ${qs.length}</span></div>
      <h3 class="quiz__q">${q.q}</h3>
      <div class="quiz__opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}"><i>${letters[k]}</i><span>${o.t}</span>${icons.check}</button>`).join('')}</div>
      <div class="quiz__why" hidden></div>
      <div class="quiz__foot"><span class="faint" style="font-size:13px">Choose an answer</span><button class="btn btn--primary btn--sm" data-next hidden>${i + 1 < qs.length ? 'Next question' : 'See your score'} ${icons.arrow}</button></div>`;
    if (!reduced) gsap.from(main.children, { y: 22, opacity: 0, duration: 0.7, stagger: 0.05 });
    $$('.opt', main).forEach(b => b.addEventListener('click', () => answer(+b.dataset.k)));
    $('[data-next]', main).addEventListener('click', () => { i++; show(); });
  }
  function answer(k) {
    const q = qs[i], ok = q.opts[k].ok, btns = $$('.opt', main);
    btns.forEach((b, j) => { b.disabled = true; if (q.opts[j].ok) b.classList.add('ok'); });
    if (!ok) {
      btns[k].classList.add('no');
      if (!reduced) gsap.fromTo(btns[k], { x: 0 }, { keyframes: { x: [-8, 7, -5, 3, 0] }, duration: 0.45, ease: 'none' });
    } else {
      score++;
      if (!reduced) gsap.fromTo(btns[k], { scale: 0.97 }, { scale: 1, duration: 0.6, ease: 'm.snap' });
    }
    results[i] = ok;
    $$('i', dots)[i].classList.add(ok ? 'ok' : 'no');
    setRing();
    const why = $('.quiz__why', main);
    why.hidden = false;
    why.innerHTML = `<b>${ok ? 'Correct.' : 'Incorrect.'}</b> ${q.why}`;
    if (!reduced) gsap.from(why, { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0, duration: 0.6 });
    $('.quiz__foot .faint', main).textContent = ok ? 'Well done.' : 'Read the explanation before you move on.';
    const nx = $('[data-next]', main); nx.hidden = false; nx.focus({ preventScroll: true });
  }
  function summary() {
    const wrong = qs.filter((q, k) => !results[k]);
    const pct = Math.round((score / qs.length) * 100);
    main.innerHTML = `<span class="quiz__src">Your score</span>
      <h3 class="quiz__q">You scored ${score} out of ${qs.length}. ${pct >= 90 ? 'You know this content well.' : pct >= 60 ? 'Review the topics below.' : 'Review these topics and try again.'}</h3>
      ${wrong.length ? `<div class="quiz__why"><b>Topics to review:</b> ${wrong.map(q => q.topic || q.q).join('; ')}</div>` : ''}
      <div class="quiz__foot"><span></span><div style="display:flex;gap:8px;flex-wrap:wrap">
        ${wrong.length ? `<button class="btn btn--ghost btn--sm" data-wrong>Try the ${wrong.length} incorrect question${wrong.length > 1 ? 's' : ''} again</button>` : ''}
        <button class="btn btn--primary btn--sm" data-again>New set of questions ${icons.arrow}</button></div></div>`;
    if (!reduced) gsap.from(main.children, { y: 22, opacity: 0, duration: 0.7, stagger: 0.06 });
    $('[data-again]', main).addEventListener('click', () => start(pick()));
    $('[data-wrong]', main)?.addEventListener('click', () => start(wrong));
  }
  const pick = () => (sources ? sources() : shuffle(questions).slice(0, Math.min(10, questions.length)));
  start(pick());
}
