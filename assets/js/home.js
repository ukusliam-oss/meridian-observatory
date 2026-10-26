// Home: the globe scrollytelling, the command-word ladder and a daily mixed quiz.
import { boot, $, $$, gsap, ScrollTrigger, reduced, QUALITY, quality } from './core.js';
import { quiz, seeded } from './ui.js';
import H from './data/history.js';
import E from './data/economics.js';
import G from './data/geography.js';

// ── globe ──
const host = $('.globe');
let globe = null;
import('./globe.js')
  .then(({ createGlobe }) => { globe = createGlobe(host, { reduced, dpr: QUALITY[quality()].dpr }); if (!globe) host.classList.add('is-fallback'); else sync(); })
  .catch(() => host.classList.add('is-fallback'));
// read progress every tick: onUpdate is skipped when a jump lands outside the trigger
const st = ScrollTrigger.create({ trigger: '.scope__content', start: 'top top', end: 'bottom bottom' });
function sync() { globe?.setProgress(st.progress * 3); }
addEventListener('meridian:quality', e => globe?.setDpr(QUALITY[e.detail].dpr));
gsap.ticker.add(sync);

// ── command-word ladder ──
const RUNGS = [
  { name: 'Recall', words: ['Identify', 'State', 'Give', 'Define'], text: 'Give a short, precise answer. No explanation is needed.', 
    ex: [['History', 'Not used in History. History questions start at "describe".'], ['Economics', 'Define opportunity cost.'], ['Geography', 'Identify the landform at X on the photograph.']] },
  { name: 'Describe', words: ['Describe', 'Compare', 'Calculate'], text: 'Say what something is like or what happened, using details and figures. Do not explain why.', 
    ex: [['History', 'Describe the terms of the Munich Agreement.'], ['Economics', 'Describe the trend in the inflation rate shown in Figure 1.'], ['Geography', 'Compare the two climate graphs.']] },
  { name: 'Explain', words: ['Explain', 'Analyse', 'Suggest'], text: 'Give reasons and show how one thing leads to another.', 
    ex: [['History', 'Why did the USA become involved in Korea in 1950?'], ['Economics', 'Analyse how a cut in interest rates could reduce unemployment.'], ['Geography', 'Explain how an oxbow lake forms.']] },
  { name: 'Evaluate', words: ['Discuss', 'Evaluate', 'Assess', 'How far…?'], text: 'Consider both sides and reach a supported conclusion.', 
    ex: [['History', '"Hitler\'s foreign policy was the main cause of war in 1939." How far do you agree?'], ['Economics', 'Discuss whether a government should subsidise public transport.'], ['Geography', 'Assess how effective hard engineering has been on a coastline you have studied.']] },
];
const ladder = $('.ladder'), detail = $('.ladder-detail');
ladder.innerHTML = RUNGS.map((r, i) => `<button class="card rung" style="--i:${i}" aria-pressed="${i === 2}" data-i="${i}">
  <span class="rung__lvl">${i + 1}</span><span class="h3">${r.name}</span><p>${r.text}</p>
  <span class="rung__words">${r.words.map(w => `<span>${w}</span>`).join('')}</span></button>`).join('');
const COLORS = { History: 'hist', Economics: 'econ', Geography: 'geo' };
const showRung = (i, animate = true) => {
  $$('.rung', ladder).forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.i === i)));
  detail.innerHTML = RUNGS[i].ex.map(([s, t]) => `<div class="card" style="--accent:var(--${COLORS[s]});--accent-deep:var(--${COLORS[s]}-deep)"><span class="tag">${s}</span><p class="serif" style="font-size:19px;line-height:1.35">${t}</p></div>`).join('');
  if (animate && !reduced) gsap.from(detail.children, { y: 18, opacity: 0, duration: 0.7, stagger: 0.07 });
};
$$('.rung', ladder).forEach(b => b.addEventListener('click', () => showRung(+b.dataset.i)));
showRung(2, false);
if (!reduced) gsap.fromTo($$('.rung', ladder), { '--fill': 0 }, { '--fill': 1, ease: 'none', stagger: 0.15, scrollTrigger: { trigger: ladder, start: 'top 90%', end: 'top 40%', scrub: 0.6 } });

// daily quiz: the same six questions for everyone today, then random sets
const tagged = (d, src) => d.quiz.map(q => ({ ...q, src }));
const pools = [tagged(H, 'History'), tagged(E, 'Economics'), tagged(G, 'Geography')];
const pickN = (rnd, n) => pools.flatMap(p => [...p].sort(() => rnd() - 0.5).slice(0, n)).sort(() => rnd() - 0.5);
const today = new Date(), seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
let first = true;
quiz($('[data-mount="daily"]'), [], {
  title: 'Daily quiz',
  sources: () => { const r = first ? seeded(seed) : Math.random; first = false; return pickN(r, 2); },
});

boot();
if (!reduced) {
  gsap.from('.hero .eyebrow, .hero .lede, .hero__cta, .hero__foot', { y: 26, opacity: 0, duration: 1.3, stagger: 0.1, delay: 0.45 });
}
