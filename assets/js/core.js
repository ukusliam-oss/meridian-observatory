// Meridian motion core.
// Lenis smooth scroll runs on GSAP's ticker so ScrollTrigger, Lenis and every tween share one clock.
// Pages render their content first, then call boot() to wire reveals, split headlines, counters,
// magnetic buttons, card spotlights, nav tone, theme and anchor scrolling.

const { gsap, ScrollTrigger, SplitText, Flip, DrawSVGPlugin, CustomEase, Lenis } = window;
const root = document.documentElement;

// the three speeds: controls, text, the stage
export const DUR = { ui: 0.3, text: 1, stage: 2 };
export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const hover = matchMedia('(hover: hover) and (pointer: fine)').matches;
export const $ = (s, el = document) => el.querySelector(s);
export const $$ = (s, el = document) => [...el.querySelectorAll(s)];
export { gsap, ScrollTrigger, Flip };
if (reduced) root.classList.add('no-motion');

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, DrawSVGPlugin, CustomEase);
CustomEase.create('m.out', '0.16, 1, 0.3, 1');
CustomEase.create('m.io', '0.65, 0, 0.35, 1');
CustomEase.create('m.snap', '0.2, 1.3, 0.3, 1');
gsap.defaults({ ease: 'm.out', duration: 1 });
if (reduced) gsap.globalTimeline.timeScale(20);

export let lenis = null;
if (!reduced && Lenis) {
  lenis = new Lenis({ lerp: 0.105, smoothWheel: true, wheelMultiplier: 0.95, syncTouch: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

// ── storage (per-viewer conveniences only; every read/write may throw) ──────
export const store = {
  get(k, d) { try { const v = localStorage.getItem('meridian:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('meridian:' + k, JSON.stringify(v)); } catch { /* private mode */ } },
};

export const navOffset = () => (parseFloat(getComputedStyle(root).getPropertyValue('--nav-h')) || 64) + 56;
export function scrollToEl(el, offset = navOffset()) {
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -offset, duration: 1.4, easing: t => 1 - Math.pow(1 - t, 4) });
  else window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - offset, behavior: reduced ? 'auto' : 'smooth' });
}

// ── reveals ────────────────────────────────────────────────────────────────
export function reveal(scope = document) {
  const els = $$('[data-reveal]:not([data-revealed])', scope);
  els.forEach(el => el.setAttribute('data-revealed', ''));
  if (reduced) { gsap.set(els, { opacity: 1 }); return; }
  ScrollTrigger.batch(els, {
    start: 'top 92%', once: true,
    // a block lights up rather than rising: its brightness comes up from 40% as it settles the last 6 px, at the
    // text speed; headlines keep their own, slower rise (splitHeads), so the two do not move to one beat
    onEnter: batch => gsap.fromTo(batch,
      { opacity: 0, y: (i, el) => +(el.dataset.reveal || 6), filter: 'brightness(.4)' },
      { opacity: 1, y: 0, filter: 'brightness(1)', duration: DUR.text, ease: 'm.out', stagger: 0.07, overwrite: true, clearProps: 'transform,filter' }),
  });
  // anything already scrolled past (reload mid-page) shows at once
  requestAnimationFrame(() => els.forEach(el => { if (el.getBoundingClientRect().bottom < 0) gsap.set(el, { opacity: 1 }); }));
}

export function splitHeads(scope = document) {
  $$('[data-split]:not(.is-split)', scope).forEach(el => {
    el.classList.add('is-split');
    if (reduced) return;
    const now = el.dataset.split === 'now';
    SplitText.create(el, {
      type: 'lines,words', mask: 'lines', linesClass: 'line', autoSplit: true,
      onSplit: self => gsap.from(self.lines, {
        yPercent: 112, rotate: 2.5, transformOrigin: '0% 0%', duration: 1.35, stagger: 0.09,
        delay: now ? 0.15 : 0,
        scrollTrigger: now ? undefined : { trigger: el, start: 'top 88%', once: true },
      }),
    });
  });
}

export function counters(scope = document) {
  $$('[data-count]:not([data-counted])', scope).forEach(el => {
    el.setAttribute('data-counted', '');
    const raw = el.dataset.count, end = parseFloat(raw), dec = (raw.split('.')[1] || '').length;
    const fmt = v => v.toFixed(dec);
    if (reduced) { el.textContent = fmt(end); return; }
    const o = { v: 0 };
    el.textContent = fmt(0);
    ScrollTrigger.create({
      trigger: el, start: 'top 94%', once: true,
      onEnter: () => gsap.to(o, { v: end, duration: 1.8, ease: 'm.out', onUpdate: () => { el.textContent = fmt(o.v); } }),
    });
  });
}

export function magnetic(scope = document) {
  if (reduced || !hover) return;
  $$('.btn:not([data-mag]), [data-magnetic]:not([data-mag])', scope).forEach(el => {
    el.setAttribute('data-mag', '');
    const s = +(el.dataset.magnetic || 0.25);
    const xTo = gsap.quickTo(el, 'x', { duration: 0.7, ease: 'm.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'm.out' });
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * s);
      yTo((e.clientY - r.top - r.height / 2) * s * 1.3);
    });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
}

// draw-on for SVG strokes marked data-draw
export function draws(scope = document) {
  $$('[data-draw]:not([data-drawn])', scope).forEach(svg => {
    svg.setAttribute('data-drawn', '');
    const paths = $$('path, line, polyline', svg);
    if (reduced) return;
    gsap.from(paths, { drawSVG: '0%', duration: 1.6, stagger: 0.12, ease: 'm.io', scrollTrigger: { trigger: svg, start: 'top 90%', once: true } });
  });
}

// ── segmented control with a sliding pill ─────────────────────────────────
export function segmented(el, onChange) {
  const btns = $$('button', el);
  let pill = $('.seg__pill', el);
  if (!pill) { pill = document.createElement('span'); pill.className = 'seg__pill'; el.prepend(pill); }
  const place = (b, animate = true) => {
    const x = b.offsetLeft, w = b.offsetWidth;
    if (animate && !reduced) gsap.to(pill, { x, width: w, duration: 0.6, ease: 'm.out' });
    else gsap.set(pill, { x, width: w });
  };
  const select = (b, fire = true, animate = true) => {
    btns.forEach(x => x.setAttribute('aria-selected', String(x === b)));
    place(b, animate);
    if (fire) onChange?.(b.dataset.value, b);
  };
  btns.forEach(b => {
    b.setAttribute('role', 'tab');
    b.addEventListener('click', () => select(b));
  });
  el.setAttribute('role', 'tablist');
  const start = btns.find(b => b.getAttribute('aria-selected') === 'true') || btns[0];
  requestAnimationFrame(() => select(start, false, false));
  new ResizeObserver(() => { const on = btns.find(b => b.getAttribute('aria-selected') === 'true'); if (on) place(on, false); }).observe(el);
  return { select: v => { const b = btns.find(x => x.dataset.value === v); if (b) select(b); } };
}

// height:auto accordions; "Expand all" opens many at once, so their refreshes collapse into one
let refreshTimer = 0;
const refreshSoon = () => { clearTimeout(refreshTimer); refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 60); };
export function toggleHeight(body, open, onDone) {
  if (reduced) { body.style.height = open ? 'auto' : '0px'; refreshSoon(); onDone?.(); return; }
  gsap.to(body, { height: open ? 'auto' : 0, duration: open ? 0.75 : 0.5, ease: open ? 'm.out' : 'm.io', onComplete: () => { refreshSoon(); onDone?.(); } });
  if (open) gsap.fromTo(body.firstElementChild, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.08 });
}

// ── chrome ─────────────────────────────────────────────────────────────────
function navTone() {
  const nav = $('.nav'), tabbar = $('.tabbar');
  if (!nav) return;
  const zones = $$('[data-tone="dark"]').filter(z => !z.closest('.nav'));
  const live = new Set();
  const apply = () => {
    const dark = live.size > 0;
    [nav, tabbar].forEach(n => { if (!n) return; if (dark) n.setAttribute('data-tone', 'dark'); else n.removeAttribute('data-tone'); });
  };
  zones.forEach(z => ScrollTrigger.create({
    trigger: z, start: 'top 32px', end: 'bottom 32px',
    onToggle: s => { s.isActive ? live.add(z) : live.delete(z); apply(); },
  }));
  const bar = $('.nav__progress');
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: s => {
    if (bar) gsap.set(bar, { scaleX: s.progress });
    nav.classList.toggle('is-scrolled', s.scroll() > 8);
  } });
  // tab bar tucks away while scrolling down, returns on scroll up
  if (tabbar && !reduced) {
    let shown = true;
    ScrollTrigger.create({
      start: 0, end: 'max',
      onUpdate: s => {
        const want = s.direction < 0 || s.scroll() < 200 || s.progress > 0.98;
        if (want !== shown) { shown = want; gsap.to(tabbar, { yPercent: want ? 0 : 160, duration: 0.6, ease: 'm.out' }); }
      },
    });
  }
}

function theme() {
  $$('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    const swap = () => { root.dataset.theme = next; store.set('theme', next); ScrollTrigger.refresh(); };
    if (!document.startViewTransition || reduced) return swap();
    const r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.classList.add('theme-vt');
    const t = document.startViewTransition(swap);
    t.ready.then(() => root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
      { duration: 820, easing: 'cubic-bezier(.16,1,.3,1)', pseudoElement: '::view-transition-new(root)' },
    ));
    t.finished.finally(() => root.classList.remove('theme-vt'));
  }));
}

function anchors() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    e.preventDefault();
    scrollToEl(el, el.dataset.offset != null ? +el.dataset.offset : navOffset());
    history.replaceState(null, '', '#' + id);
  });
}

function spotlight() {
  if (!hover) return;
  document.addEventListener('pointermove', e => {
    const c = e.target.closest?.('[data-spot]');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${e.clientX - r.left}px`);
    c.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
}

// a hub's sections in the bar, with a scroll-spy pill: they take the subjects' place once the page passes `from`
export function subnav(el, from) {
  if (!el) return;
  const nav = $('.nav');
  if (from) ScrollTrigger.create({ trigger: from, start: () => `top ${nav.offsetHeight}px`, end: 'max', onToggle: s => nav.classList.toggle('has-sub', s.isActive) });
  const links = $$('a', el), seg = $('.seg', el);
  const pill = document.createElement('span');
  pill.className = 'seg__pill';
  seg.prepend(pill);
  let current = null;
  const setActive = a => {
    if (a === current) return;
    current = a;
    links.forEach(l => l.classList.toggle('is-active', l === a));
    gsap.to(pill, { x: a.offsetLeft, width: a.offsetWidth, opacity: 1, duration: reduced ? 0 : 0.6, ease: 'm.out' });
    if (seg.scrollWidth > seg.clientWidth) seg.scrollTo({ left: a.offsetLeft - seg.clientWidth / 2 + a.offsetWidth / 2, behavior: reduced ? 'auto' : 'smooth' });
  };
  gsap.set(pill, { opacity: 0 });
  links.forEach(a => {
    const sec = document.getElementById(a.getAttribute('href').slice(1));
    if (!sec) return;
    ScrollTrigger.create({ trigger: sec, start: 'top 45%', end: 'bottom 45%', onToggle: s => s.isActive && setActive(a) });
  });
}

let booted = false;
export function boot(scope = document) {
  splitHeads(scope);
  reveal(scope);
  counters(scope);
  magnetic(scope);
  draws(scope);
  if (!booted) {
    booted = true;
    navTone(); theme(); anchors(); spotlight();
    import('./bar.js').then(m => m.bar()); // after this module: bar.js imports it
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    addEventListener('load', () => ScrollTrigger.refresh());
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => scrollToEl(el), 300);
    }
  }
  root.classList.remove('reveal-fallback');
  clearTimeout(window.__mFallback);
}

export const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const icons = {
  arrow: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>',
  plus: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>',
  up: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V3M4 7l4-4 4 4"/></svg>',
  down: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v10M4 9l4 4 4-4"/></svg>',
  flat: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 8h10"/></svg>',
  check: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5l4 4 8-9"/></svg>',
  shuffle: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h3l8 8h3M3 14h3l2-2M12 8l2-2h3M15 4l2 2-2 2M15 12l2 2-2 2"/></svg>',
  reset: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10a6 6 0 1 0 2-4.5M4 4v3h3"/></svg>',
  play: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M6 4.5v11l9-5.5z"/></svg>',
  pause: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 4h3v12h-3zM11.5 4h3v12h-3z"/></svg>',
};
