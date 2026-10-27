// Subject page: the hero is static HTML; everything below it is rendered from the data file.
import { boot, subnav, $, icons } from './core.js';
import { examAnatomy, topicMap, technique, commandWords, flashcards, quiz, examplesTracker } from './ui.js';
import { instrument } from './instrument.js';
import { practice } from './practice.js';
import { bar } from './bar.js';

// What the first screen shows (the instrument, the nav and its pill) is drawn as soon as the two data files are in;
// the lab, far down the page, is fetched alongside and mounted last, so the hub never opens with pieces missing.
const id = document.body.dataset.subject;
const [{ default: d }, { default: pr }] = await Promise.all([import(`./data/${id}.js`), import(`./data/practice-${id}.js`)]);
const labModule = import(`./labs/${d.lab.kind}.js`);
const NEXT = { history: ['economics', 'Economics', 'econ', '0455'], economics: ['geography', 'Geography', 'geo', '0460'], geography: ['history', 'History', 'hist', '0470'] };

const head = (eyebrow, h, lede) => `<header class="section-head section-head--split">
  <div style="display:grid;gap:20px"><p class="eyebrow">${eyebrow}</p><h2 class="h2" data-split>${h}</h2></div>
  <p class="lede" data-reveal>${lede}</p></header>`;

// The page is a path in four steps. Each section's label says which step it belongs to, the sub-nav groups its links
// by step, and the last section of a step points on to the next one.
const LAB = { timeline: 'an interactive timeline, 1919–1991', 'supply-demand': 'an interactive supply and demand diagram', dtm: 'an interactive demographic transition model' };
const STEPS = [
  { em: 'Know', rest: 'the exam', text: 'How the papers work, what each one is worth and how long you have.',
    secs: [['exam', 'Assessment', 'Assessment overview', d.examHead, d.examLede]] },
  { em: 'Learn', rest: 'the content', text: `Every topic in the syllabus${d.examples ? `, the ${d.examples.length} detailed examples` : ''} and ${LAB[d.lab.kind] || 'an interactive diagram'}.`,
    secs: [['topics', 'Content', 'Subject content', d.topicsHead, d.topicsLede],
      ...(d.examples ? [['examples', 'Examples', 'Detailed specific examples', d.examplesHead, d.examplesLede]] : []),
      ['lab', d.lab.nav || 'Interactive', 'Interactive', d.lab.head, d.lab.lede]] },
  { em: 'Answer', rest: 'questions', text: `What examiners reward, the ${d.words.length} command words and ${pr.sets.length} sets of exam-style questions with mark schemes.`,
    secs: [['technique', 'Exam technique', 'How to answer questions', d.techHead, d.techLede],
      ['words', 'Command words', 'Key skills', d.wordsHead, d.wordsLede],
      ['practice', 'Practice', 'Written practice', pr.head, pr.lede]] },
  { em: 'Test', rest: 'yourself', text: `${d.cards.length} flashcards for key terms and a quick quiz with an explanation for every answer.`,
    secs: [['cards', 'Flashcards', 'Flashcards', '<em>Key</em>terms', `${d.cards.length} key terms. Try to recall the definition before you turn the card over. Swipe right if you know it and left if you are still learning it. Your progress is saved on this device.`],
      ['quiz', 'Quiz', 'Practice questions', '<em>Quick</em>quiz', 'Ten multiple-choice questions on this subject. Each answer comes with an explanation. A new set of questions is chosen each time.']] },
];
const num = k => String(k + 1).padStart(2, '0');
const nextLink = k => STEPS[k + 1] ? `<a class="path__next" href="#${STEPS[k + 1].secs[0][0]}" data-reveal><span class="mono">Next · step ${num(k + 1)}</span><b><em>${STEPS[k + 1].em}</em> ${STEPS[k + 1].rest}</b>${icons.arrow}</a>` : '';
const section = ([sid, , eyebrow, h, lede], k, last) => `<section class="section" id="${sid}"><div class="wrap">${head(`Step ${num(k)} · ${eyebrow}`, h, lede)}<div data-mount="${sid}"></div>${last ? nextLink(k) : ''}</div></section>`;
const [nid, nname, ncolor, ncode] = NEXT[id];

$('#content').insertAdjacentHTML('beforeend', `
  <section class="path"><div class="wrap">
    <p class="eyebrow">Revise in four steps</p>
    <ol class="path__steps">${STEPS.map((st, k) => `<li><a class="card path__step" href="#${st.secs[0][0]}" data-spot data-reveal>
      <span class="path__n">${num(k)}</span><span class="path__t"><em>${st.em}</em> ${st.rest}</span>
      <span class="path__d">${st.text}</span><span class="path__in mono">${st.secs.map(x => x[1]).join(' · ')}</span></a></li>`).join('')}</ol>
  </div></section>
  <div class="subnav-at" aria-hidden="true"></div>
  ${STEPS.map((st, k) => st.secs.map((sec, j) => section(sec, k, j === st.secs.length - 1)).join('')).join('')}
  <section class="section section--tight"><div class="wrap">
    <a class="card next" href="${nid}.html" data-spot data-reveal style="--accent:var(--${ncolor})">
      <div style="display:grid;gap:14px"><p class="eyebrow">Next subject: ${ncode}</p><h2 class="h1">${nname}</h2></div>
      <span class="next__arrow" aria-hidden="true">${icons.arrow}</span>
    </a></div></section>`);

const m = k => $(`[data-mount="${k}"]`);
examAnatomy(m('exam'), d);
topicMap(m('topics'), d);
if (d.examples) examplesTracker(m('examples'), d.examples, d.id);
technique(m('technique'), d.technique);
practice(m('practice'), pr);
commandWords(m('words'), d.words);
flashcards(m('cards'), d.cards, d.id);
quiz(m('quiz'), d.quiz.map(q => ({ ...q })), { title: `${d.name} ${d.code}` });

instrument($('[data-inst]'), id, d);
$('.nav__links').insertAdjacentHTML('afterend', `<nav class="nav__sub subnav" aria-label="On this page"><div class="seg">${STEPS.map(st => st.secs.map(([h, l]) => `<a href="#${h}">${l}</a>`).join('')).join('<i class="seg__sep" aria-hidden="true"></i>')}</div></nav>`);
bar();
boot();
subnav($('.nav__sub'), $('.subnav-at'));
(await labModule).mount(m('lab'), d.lab);
boot(m('lab'));
// no opening of its own: between pages the whole page comes up out of the dark (site.css), as one piece
