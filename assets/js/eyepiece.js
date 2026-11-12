// A hub's first screen: its dial an eyepiece onto the globe (assets/img/eyepiece-{subject}.svg round a still of the
// chapter's opening view, assets/img/eyepiece-{chapter}.jpg), the needle at the reader's place, and one "next" panel.
// "Continue" lets the words go and opens the chapter on the same eyepiece (?dive#scene), where the dive goes on: the
// needle's angle is handed over in sessionStorage. The reader's place is the chapter's own record of where they
// stopped (store 'pos:<chapter>'); a first visit starts at the first scene. History's dial reads years (1919–1991),
// Economics' and Geography's read their chapter itself, a tick per scene (tools/build-eyepiece.mjs).
import { store, esc } from './core.js';

const yearOf = d => { const [y, m = 1, dd = 1] = d.split('-').map(Number); return y + ((m - 1) + (dd - 1) / 31) / 12; };
const byYear = (s) => -140 + (yearOf(s.date) - 1919) / 72 * 280;
const byScene = (s, k, n) => -140 + (k + 0.5) / n * 280;
export const EYE = {
  history: { file: 'history/kq6', why: 'Next · Paper 2 · June 2027', code: 'KQ6', mins: 50, ang: byYear,
    alt: ['Paper 2 sources', 'history/kq6-paper2.html'] },
  economics: { file: 'economics/macro-policy', why: 'Next · Topic 4 · Papers 1 and 2', code: 'Topic 4', mins: 60, ang: byScene,
    alt: ['Policy lab', 'economics/macro-policy.html#lab'] },
  geography: { file: 'geography/tectonics', why: 'Next · Topic 4 · Paper 1 · Draft', code: 'Topic 4', mins: 45, ang: byScene,
    alt: ['Exam practice', 'geography/tectonics.html#toolkit'] },
};
// a title as the chapter's cards set it: a lead before a colon in italic, the rest in capitals
const cardTitle = t => { const i = t.indexOf(': '); return i > 0 ? `<em>${esc(t.slice(0, i + 1))}</em>${esc(t.slice(i + 2))}` : esc(t); };

export async function eyepiece(hero, subject) {
  const E = EYE[subject], chapter = E.file.split('/')[1];
  const { default: data } = await import(`./data/${E.file}.js`);
  const scenes = data.scenes, N = scenes.length;
  const saved = store.get(`pos:${chapter}`, null), k = Math.max(0, Math.min(N - 1, saved ?? 0));
  const s = scenes[k], parts = [...new Set(scenes.map(x => x.part))], pi = parts.indexOf(s.part);
  const href = `${E.file}.html?dive#${s.id}`, a = E.ang(s, k, N);
  const mins = Math.max(1, Math.round(E.mins * (N - k) / N));
  hero.classList.add('s-hero--eye');
  hero.insertAdjacentHTML('beforeend', `
    <div class="m-dial" aria-hidden="true" data-eye><img class="m-dial__still" src="assets/img/eyepiece-${chapter}.jpg" alt="" width="224" height="224"><img class="m-dial__ring" src="assets/img/eyepiece-${subject}.svg" alt="" width="320" height="320"><i class="m-dial__needle" style="--a:${a.toFixed(2)}deg"></i></div>
    <section class="eye-next" aria-labelledby="eye-next-t" data-eye-next>
      <p class="eye-next__why">${esc(E.why)}</p>
      <p class="eye-next__where">${esc(E.code)} · Part ${pi + 1} of ${parts.length} · ${esc(s.part)}</p>
      <h2 class="eye-next__what" id="eye-next-t">${cardTitle(s.title)}</h2>
      <p class="eye-next__left">${saved == null ? `${N} scenes · about ${E.mins} minutes` : `Scene ${k + 1} of ${N} · about ${mins} minutes left`}</p>
      <div class="eye-next__bar" aria-hidden="true"><i style="width:${(k / N * 100).toFixed(1)}%"></i></div>
      <div class="eye-next__go"><a class="eye-next__btn" href="${href}" data-eye-go>${saved == null ? 'Start' : 'Continue'} <span aria-hidden="true">→</span></a><a class="eye-next__alt" href="${E.alt[1]}">${esc(E.alt[0])}</a></div>
    </section>`);
  const dial = hero.querySelector('[data-eye]');
  // the dial's centre is where the chapter's globe has its centre on the screen (src/world/view.js setViewport), at
  // the top of the page, so the chapter can open on the very same frame
  const place = () => { dial.style.top = `${((innerWidth > 900 ? 0.44 : 0.4) * innerHeight).toFixed(1)}px`; };
  place(); addEventListener('resize', place);
  hero.querySelector('[data-eye-go]').addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    try { sessionStorage.setItem('meridian:dive', JSON.stringify({ a })); } catch { /* the chapter's needle then points at the ring's start */ }
    // the words leave the light; the eyepiece stays where it is for the chapter to take over
    scrollTo(0, 0);
    hero.classList.add('is-leaving');
    setTimeout(() => { location.href = href; }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 420);
  });
  return { data, k, saved };
}
