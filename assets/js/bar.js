// The nav as words floating on the night (site.css explains the look) with one piece of glass at its right end: the
// chapter pill's glass (glass.js) in black and white, a faint white aurora drifting slowly inside, the rim whose light
// turns towards the pointer, a soft glow beneath on hover. The pill goes to the page's next thing to do: the daily quiz
// on the home, written practice on a hub, the toolkit in a chapter, the questions in the Paper 2 room. Labels roll up on hover like the pill's, and one
// hairline glides to the link under the pointer and back to the current page's. Outside the chapters the nav leaves on
// the way down and comes back on the way up; inside them it stays and steps back for study (chapter.js sets --study).
import { gsap, ScrollTrigger, reduced, $, $$, esc, QUALITY, quality, setQuality } from './core.js';
import { MT, strokeBorder, aurora } from './glass.js';

const ARROW = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 3v5.5A2.5 2.5 0 0 0 6.5 11H13M10 8l3 3-3 3"/></svg>';
const NEXT = [['toolkit', 'Toolkit'], ['practice', 'Practise'], ['daily', 'Daily quiz'], ['questions', 'Questions']];
// an instrument's dial: the settings
const DIAL = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.25"/><path d="M10 2.75v1.6M17.25 10h-1.6M2.75 10h1.6M4.9 4.9l1.1 1.1M15.1 4.9 14 6"/><path d="m10 10 3.2-3.6" stroke-width="1.6"/><circle cx="10" cy="10" r="1.1" fill="currentColor" stroke="none"/></svg>';
const GRADES = [['high', 'High'], ['standard', 'Standard'], ['saver', 'Saver']];

// The settings, after emotion-agency's menu: one dial at the right end opens the bar's black glass with the sound (in a
// chapter), the light theme (outside the chapters, which are always night) and the quality of the globes. The theme
// and sound buttons themselves move into the menu as its switches, so their own behaviour (the theme's circle of light,
// the sound's gate) stays theirs.
function settings(end) {
  const toggle = $('[data-theme-toggle]', end), sound = $('.sound-btn', end), chapter = document.body.classList.contains('chapter');
  end.insertAdjacentHTML('afterbegin', `<div class="nav__set"><button class="nav__dial" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="setmenu" aria-label="Settings">${DIAL}</button>
    <div class="setmenu" id="setmenu" role="group" aria-label="Settings" hidden><span class="nav__aurora" aria-hidden="true"><canvas></canvas></span>
      <p class="setmenu__label">Settings</p>
      ${sound ? '<div class="setmenu__row" data-row="sound"><span>Sound</span></div>' : ''}
      ${toggle && !chapter ? '<div class="setmenu__row" data-row="theme"><span>Light theme</span></div>' : ''}
      <div class="setmenu__row setmenu__row--q"><span id="setq">Quality</span><div class="setmenu__seg" role="radiogroup" aria-labelledby="setq">${GRADES.map(([k, n]) => `<button type="button" role="radio" data-q="${k}">${n}</button>`).join('')}</div></div>
      <p class="setmenu__note" data-qnote></p>
    </div></div>`);
  const box = $('.nav__set', end), dial = $('.nav__dial', box), menu = $('.setmenu', box);
  const NOTES = { high: 'Bloom and full sharpness. For a fast Mac.', standard: 'The globe\'s light, sharp on a Retina screen.', saver: 'Plainer light, fewer pixels. Kinder to a battery.' };
  // the original buttons become the switches
  for (const [row, btn, on] of [['sound', sound, () => sound.getAttribute('aria-label') === 'Turn sound off'], ['theme', toggle, () => document.documentElement.dataset.theme === 'light']]) {
    const r = $(`[data-row="${row}"]`, menu); if (!r || !btn) continue;
    btn.classList.add('setmenu__sw'); btn.setAttribute('role', 'switch');
    r.append(btn);
    const sync = () => btn.setAttribute('aria-checked', String(on()));
    sync();
    new MutationObserver(sync).observe(row === 'theme' ? document.documentElement : btn, { attributes: true, attributeFilter: row === 'theme' ? ['data-theme'] : ['aria-label'] });
  }
  if (toggle && chapter) toggle.remove();
  const showQ = q => { $$('[data-q]', menu).forEach(b => b.setAttribute('aria-checked', String(b.dataset.q === q))); $('[data-qnote]', menu).textContent = NOTES[q]; };
  showQ(quality());
  $$('[data-q]', menu).forEach(b => b.addEventListener('click', () => { setQuality(b.dataset.q); showQ(b.dataset.q); }));
  let auroraOn = false;
  const open = v => {
    if (v === !menu.hidden) return;
    dial.setAttribute('aria-expanded', String(v)); box.classList.toggle('is-open', v);
    if (v) {
      menu.hidden = false;
      if (!auroraOn) { auroraOn = true; aurora($('canvas', menu), { white: true, speed: 0.45 }); strokeBorder(menu); }
      if (!reduced) gsap.fromTo(menu, { opacity: 0, y: -6, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: MT * 0.6, ease: 'm.out', transformOrigin: '100% 0%' });
      ($('[aria-checked="true"][data-q]', menu) || $('button', menu)).focus({ preventScroll: true });
    } else {
      const done = () => { menu.hidden = true; };
      reduced ? done() : gsap.to(menu, { opacity: 0, y: -4, duration: MT * 0.35, ease: 'm.out', onComplete: done });
    }
  };
  dial.addEventListener('click', () => open(menu.hidden));
  document.addEventListener('pointerdown', e => { if (!box.contains(e.target)) open(false); });
  box.addEventListener('keydown', e => { if (e.key === 'Escape') { open(false); dial.focus(); } });
  box.addEventListener('focusout', e => { if (!box.contains(e.relatedTarget) && e.relatedTarget) open(false); });
}

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
  settings(end);

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

  // outside the chapters and the Paper 2 room: away on the way down, back on the way up or when a key reaches it
  if (!$('.ch, .p2') && !reduced) {
    let shown = true;
    const show = want => { if (want === shown) return; shown = want; gsap.to(nav, { yPercent: want ? 0 : -130, duration: want ? MT : MT * 0.8, ease: 'm.out' }); };
    ScrollTrigger.create({ start: 0, end: 'max', onUpdate: s => show(s.direction < 0 || s.scroll() < 240) });
    nav.addEventListener('focusin', () => show(true));
  }
}
