// The nav as words floating on the night (site.css explains the look) with one piece of glass at its right end: the
// chapter pill's glass (glass.js) in black and white, a faint white aurora drifting slowly inside, the rim whose light
// turns towards the pointer, a soft glow beneath on hover. The pill goes to the page's next thing to do: the daily quiz
// on the home, written practice on a hub, the toolkit in a chapter. Labels roll up on hover like the pill's, and one
// hairline glides to the link under the pointer and back to the current page's. Outside the chapters the nav leaves on
// the way down and comes back on the way up; inside them it stays and steps back for study (chapter.js sets --study).
import { gsap, ScrollTrigger, reduced, $, $$, esc } from './core.js';
import { MT, strokeBorder, aurora } from './glass.js';

const ARROW = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 3v5.5A2.5 2.5 0 0 0 6.5 11H13M10 8l3 3-3 3"/></svg>';
const NEXT = [['toolkit', 'Toolkit'], ['practice', 'Practise'], ['daily', 'Daily quiz']];

export function bar() {
  const nav = $('.nav'), el = $('.nav__bar');
  if (!el || el.dataset.glass) return;
  el.dataset.glass = '1';

  // the buttons go to the right end, then the pill
  const end = document.createElement('div');
  end.className = 'nav__end';
  [...el.children].filter(c => c.matches('.icon-btn')).forEach(c => end.append(c));
  const next = NEXT.find(([id]) => document.getElementById(id));
  if (next) {
    end.insertAdjacentHTML('beforeend', `<a class="nav__cta" href="#${next[0]}"><span class="nav__aurora" aria-hidden="true"><canvas></canvas></span><span class="nav__glow" aria-hidden="true"></span><span class="nav__roll"><span>${next[1]}</span><span aria-hidden="true">${next[1]}</span></span><i>${ARROW}</i></a>`);
    const cta = $('.nav__cta', end);
    aurora($('canvas', cta), { white: true, speed: 0.45 });
    strokeBorder(cta);
  }
  el.append(end);

  for (const a of $$('.nav__link, .nav__sub a', el)) {
    const t = esc(a.textContent.trim());
    a.innerHTML = `<span class="nav__roll"><span>${t}</span><span aria-hidden="true">${t}</span></span>`;
  }

  // the hairline under the current page's link, under its label rather than its dot
  const box = $('.nav__links', el);
  if (box) {
    box.insertAdjacentHTML('beforeend', '<span class="nav__hl" aria-hidden="true"></span>');
    const hl = $('.nav__hl', box), links = $$('.nav__link', box), here = links.find(a => a.hasAttribute('aria-current'));
    const to = (a, now) => {
      if (!a) return gsap.to(hl, { opacity: 0, duration: reduced ? 0 : MT * 0.5, ease: 'm.out' });
      const r = $('.nav__roll', a);
      gsap.to(hl, { x: a.offsetLeft + r.offsetLeft, width: r.offsetWidth, opacity: 1, duration: now || reduced ? 0 : MT, ease: 'm.out' });
    };
    to(here, true);
    links.forEach(a => { a.addEventListener('pointerenter', () => to(a)); a.addEventListener('focus', () => to(a)); });
    box.addEventListener('pointerleave', () => to(here));
    box.addEventListener('focusout', e => { if (!box.contains(e.relatedTarget)) to(here); });
    document.fonts?.ready.then(() => to(here, true));
    new ResizeObserver(() => to(here, true)).observe(box);
  }

  // outside the chapters: away on the way down, back on the way up or when a key reaches it
  if (!$('.ch') && !reduced) {
    let shown = true;
    const show = want => { if (want === shown) return; shown = want; gsap.to(nav, { yPercent: want ? 0 : -130, duration: want ? MT : MT * 0.8, ease: 'm.out' }); };
    ScrollTrigger.create({ start: 0, end: 'max', onUpdate: s => show(s.direction < 0 || s.scroll() < 240) });
    nav.addEventListener('focusin', () => show(true));
  }
}
