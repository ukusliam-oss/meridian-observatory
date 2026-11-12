// A hub's schedule: the syllabus topics in the syllabus's own order, one row each, the way a film catalogue lists its
// episodes (code, title, what it is, where the reader stands). The topic that has a film is open: its parts are rows of
// their own, each going straight to its first scene, with a tick per scene for what this device has seen and rated,
// and the chapter's companion (Paper 2 room, policy lab, exam practice) as one more row. The other topics go to their
// notes further down the page. Nothing here moves; the reader's place is shown, not animated.
import { store, esc } from './core.js';
import { EYE } from './eyepiece.js';

const range = ds => { const ys = ds.map(d => +d.slice(0, 4)); const a = Math.min(...ys), b = Math.max(...ys); return a === b ? `${a}` : `${a}–${b}`; };
// the film's question as the chapters' opening sets it: its first words a lead in italic, the rest in capitals
const lead = (q, n) => { const w = q.split(' '); return `<em>${esc(w.slice(0, n).join(' '))}</em> ${esc(w.slice(n).join(' ')).replace('c.', '<span class="lc">c.</span>')}`; };

const SPEC = {
  history: { group: 0, film: 'KQ6', label: 'Key questions', sub: 'Option B · Paper 1 Section A for every key question; KQ6 is the June 2027 Paper 2 topic',
    years: true, exam: 'Paper 2 · June 2027 · Option B', lead: 3,
    side: { n: 'P2', name: 'Paper 2 sources room', meta: 'Hungary, 1956 · 6 sources · 40 marks', href: 'history/kq6-paper2.html' },
    more: 'Option A and the five depth studies are in <a href="#topics">the content</a> below.' },
  economics: { group: null, film: '4', label: 'Topics', sub: 'Six topics, all examined in Papers 1 and 2',
    years: false, exam: 'Topics 4.1–4.4 · reviewed by an Economics teacher', lead: 3,
    side: { n: 'Lab', name: 'Policy lab', meta: 'Five tools, six aims · the 2009 recession and the 2022 inflation', href: 'economics/macro-policy.html#lab' } },
  geography: { group: null, film: '4', label: 'Topics', sub: 'Five physical topics in Paper 1, five human topics in Paper 2',
    years: false, exam: 'Topics 4.1–4.4 · Paper 1 · draft, not yet reviewed by a teacher', lead: 4,
    side: { n: 'Exam', name: 'Exam practice', meta: 'Earthquakes and volcanoes · mark schemes and example answers', href: 'geography/tectonics.html#toolkit' } },
};
const CONF = ['', 'Revising', 'Confident'];

export async function schedule(el, d, subject) {
  const S = SPEC[subject], E = EYE[subject], chapter = E.file.split('/')[1];
  const { default: film } = await import(`./data/${E.file}.js`);
  const scenes = film.scenes, N = scenes.length;
  const pos = store.get(`pos:${chapter}`, null), rec = store.get(`recall:${chapter}`, {}), conf = store.get(`${d.id}:conf`, {});
  const parts = [];
  scenes.forEach((s, k) => { const p = parts.at(-1); if (!p || p.name !== s.part) parts.push({ name: s.part, ks: [k] }); else p.ks.push(k); });
  const groups = S.group == null ? d.topics.groups.filter(g => !/Option A|Depth/.test(g.title)) : [d.topics.groups[S.group]];
  const items = groups.flatMap(g => g.items);

  const partRow = (p, i) => {
    const seen = p.ks.filter(k => pos != null && k <= pos).length, again = p.ks.filter(k => rec[scenes[k].id] === 0).length;
    const here = pos != null && p.ks.includes(pos), mins = Math.max(1, Math.round(E.mins * p.ks.length / N));
    const mine = [seen ? `${seen} of ${p.ks.length} seen` : '', again ? `${again} to revisit` : ''].filter(Boolean).join(', ');
    return `<li class="sched__part${here ? ' is-here' : ''}"><a href="${E.file}.html#${scenes[p.ks[0]].id}">
      <span class="sched__n">${String(i + 1).padStart(2, '0')}</span>
      <span class="sched__name">${esc(p.name)}${here ? '<span class="sched__here">You are here</span>' : ''}</span>
      <span class="sched__meta">${S.years ? `${range(p.ks.map(k => scenes[k].date))} · ` : ''}${p.ks.length}&nbsp;${p.ks.length === 1 ? 'scene' : 'scenes'} · ${mins}&nbsp;min</span>
      <span class="sched__ticks" aria-hidden="true">${p.ks.map(k => `<i class="${[pos != null && k <= pos ? 'is-seen' : '', rec[scenes[k].id] === 1 ? 'is-known' : '', rec[scenes[k].id] === 0 ? 'is-again' : ''].join(' ').trim()}"></i>`).join('')}</span>
      ${mine ? `<span class="sr-only">${mine}</span>` : ''}
    </a></li>`;
  };
  const filmRow = t => `<li class="sched__row sched__row--film">
      <a class="sched__film" href="${E.file}.html${pos != null ? `#${scenes[pos].id}` : ''}">
        <span class="sched__code">${esc(t.code)}</span>
        <span class="sched__title">${lead(film.question, S.lead)}</span>
        <span class="sched__facts">${film.question !== t.title ? `<span>${esc(t.title)}</span>` : ''}<span>Film · ${parts.length} parts · ${N} scenes · about ${E.mins} min</span><span>${esc(S.exam)}</span></span>
      </a>
      <ol class="sched__parts">${parts.map(partRow).join('')}
        <li class="sched__part sched__part--side"><a href="${S.side.href}"><span class="sched__n">${S.side.n}</span><span class="sched__name">${esc(S.side.name)}</span><span class="sched__meta">${esc(S.side.meta)}</span><span class="sched__go" aria-hidden="true">→</span></a></li>
      </ol>
    </li>`;
  const row = t => t.code === S.film ? filmRow(t) : `<li class="sched__row"><a href="#topic-${esc(t.code)}" data-topic="${esc(t.code)}">
      <span class="sched__code">${esc(t.code)}</span>
      <span class="sched__q">${esc(t.title)}</span>
      <span class="sched__kind">Notes${t.meta ? ` · ${esc(t.meta)}` : ''}</span>
      <span class="sched__mine">${CONF[conf[t.code]] || ''}</span>
    </a></li>`;

  el.innerHTML = `<div class="wrap">
    <header class="sched__head"><h2 class="sched__h" id="sched-h">${S.label}<sup>${items.length}</sup></h2><p class="sched__sub">${esc(S.sub)}</p></header>
    ${groups.map(g => `${groups.length > 1 ? `<h3 class="sched__group">${esc(g.title)}</h3>` : ''}<ol class="sched__list">${g.items.map(row).join('')}</ol>`).join('')}
    ${S.more ? `<p class="sched__more">${S.more}</p>` : ''}
  </div>`;
  el.setAttribute('aria-labelledby', 'sched-h');
  // a topic row opens its notes as the page arrives there
  el.addEventListener('click', e => {
    const a = e.target.closest('[data-topic]'); if (!a) return;
    const t = document.getElementById(`topic-${a.dataset.topic}`);
    const btn = t?.querySelector('.topic__btn');
    if (btn && btn.getAttribute('aria-expanded') !== 'true') btn.click();
  });
}
