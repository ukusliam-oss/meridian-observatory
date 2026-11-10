// The History hub's first screen (lab/entry-study.html, e69a1a8, built in): its year dial an eyepiece onto the globe
// (assets/img/eyepiece-history.svg round a still of the chapter's opening view), the needle at the reader's place, and
// one "next" panel. "Continue" lets the words go and opens the chapter on the same eyepiece (kq6.html?dive#scene),
// where the dive goes on: the needle's angle is handed over in sessionStorage. The reader's place is the chapter's own
// record of where they stopped (store 'pos:kq6'); a first visit starts at the first scene.
import { store, esc } from './core.js';

const ang = y => -140 + (y - 1919) / 72 * 280;
const yearOf = d => { const [y, m = 1, dd = 1] = d.split('-').map(Number); return y + ((m - 1) + (dd - 1) / 31) / 12; };
// a title as the chapter's cards set it: a lead before a colon in italic, the rest in capitals
const cardTitle = t => { const i = t.indexOf(': '); return i > 0 ? `<em>${esc(t.slice(0, i + 1))}</em>${esc(t.slice(i + 2))}` : esc(t); };

export async function eyepiece(hero) {
  const { default: kq6 } = await import('./data/history/kq6.js');
  const scenes = kq6.scenes, N = scenes.length;
  const saved = store.get('pos:kq6', null), k = Math.max(0, Math.min(N - 1, saved ?? 0));
  const s = scenes[k], parts = [...new Set(scenes.map(x => x.part))], pi = parts.indexOf(s.part);
  const href = `history/kq6.html?dive#${s.id}`, a = ang(yearOf(s.date));
  const mins = Math.max(1, Math.round(50 * (N - k) / N));
  hero.classList.add('s-hero--eye');
  hero.insertAdjacentHTML('beforeend', `
    <div class="m-dial" aria-hidden="true" data-eye><img class="m-dial__still" src="assets/img/eyepiece-kq6.jpg" alt="" width="224" height="224"><img class="m-dial__ring" src="assets/img/eyepiece-history.svg" alt="" width="344" height="344"><i class="m-dial__needle" style="--a:${a.toFixed(2)}deg"></i></div>
    <section class="eye-next" aria-labelledby="eye-next-t" data-eye-next>
      <p class="eye-next__why">Next · Paper 2 · June 2027</p>
      <p class="eye-next__where">KQ6 · Part ${pi + 1} of ${parts.length} · ${esc(s.part)}</p>
      <h2 class="eye-next__what" id="eye-next-t">${cardTitle(s.title)}</h2>
      <p class="eye-next__left">${saved == null ? `${N} scenes · about 50 minutes` : `Scene ${k + 1} of ${N} · about ${mins} minutes left`}</p>
      <div class="eye-next__bar" aria-hidden="true"><i style="width:${(k / N * 100).toFixed(1)}%"></i></div>
      <div class="eye-next__go"><a class="eye-next__btn" href="${href}" data-eye-go>${saved == null ? 'Start' : 'Continue'} <span aria-hidden="true">→</span></a><a class="eye-next__alt" href="history/kq6-paper2.html">Paper 2 sources</a></div>
    </section>`);
  const dial = hero.querySelector('[data-eye]');
  // the dial's centre is where the chapter's globe has its centre on the screen (src/world/view.js setViewport), at
  // the top of the page, so the chapter can open on the very same frame
  const place = () => { dial.style.top = `${((innerWidth > 900 ? 0.44 : 0.4) * innerHeight).toFixed(1)}px`; };
  place(); addEventListener('resize', place);
  hero.querySelector('[data-eye-go]').addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    try { sessionStorage.setItem('meridian:dive', JSON.stringify({ a })); } catch { /* the chapter's needle then points at 1919 */ }
    // the words leave the light; the eyepiece stays where it is for the chapter to take over
    scrollTo(0, 0);
    hero.classList.add('is-leaving');
    setTimeout(() => { location.href = href; }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 420);
  });
}
