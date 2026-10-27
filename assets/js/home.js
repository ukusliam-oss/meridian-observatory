// Home: the loader and the eclipse, the globe scrollytelling, the command-word ladder and a daily mixed quiz.
import { boot, $, $$, gsap, ScrollTrigger, reduced, QUALITY, quality, decode, lenis } from './core.js';
import { quiz, seeded } from './ui.js';
import H from './data/history.js';
import E from './data/economics.js';
import G from './data/geography.js';

// ── the loader: the observatory calibrating ──
// The page opens on a dial whose ring is the planet's rim. Its ring fills with the real loading (the fonts, the globe
// module, the globe's first frames, drawn unseen beneath so its shaders are compiled before anyone sees it) and never
// faster than a calibration should look (2.6 s the first time in a session, 0.9 s after); the meridian scans and the
// readings run. Then the ring lands exactly on the globe's rim, the night lifts off a planet in eclipse, the sun comes
// round it and the title lights up on its night side.
const root = document.documentElement, bootEl = $('[data-boot]');
const seen = (() => { try { return sessionStorage.getItem('meridian:booted'); } catch { return null; } })();
const MIN = seen ? 900 : 2600, T0 = performance.now();
let want = 0.06, shown = 0, done = false;
const gain = k => { want = Math.min(1, want + k); };
if (bootEl && !reduced) root.classList.add('is-booting'); else bootEl?.remove();
document.fonts?.ready.then(() => gain(0.24)) ?? gain(0.24);

// ── globe ──
const host = $('.globe');
let globe = null, globeReady = false;
import('./globe.js')
  .then(({ createGlobe }) => {
    gain(0.34);
    globe = createGlobe(host, { reduced, dpr: QUALITY[quality()].dpr, eclipse: true });
    if (!globe) { host.classList.add('is-fallback'); gain(0.36); return; }
    sync();
    globe.ready.then(() => { globeReady = true; gain(0.36); });
  })
  .catch(() => { host.classList.add('is-fallback'); gain(0.7); });
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

const heroBits = '.hero .eyebrow, .hero .lede, .hero__cta, .hero__foot';
const title = $('#hero-h');
if (root.classList.contains('is-booting')) {
  lenis?.stop();
  gsap.set(heroBits, { opacity: 0 });
  $('.hero .eyebrow')?.setAttribute('data-decoded', ''); // it decodes with the reveal, not on load
  // the title, split into words now, waits unseen; each word will sharpen out of a blur (Cartier's)
  const words = window.SplitText.create(title, { type: 'words', wordsClass: 'hw' }).words;
  gsap.set(words, { opacity: 0, filter: 'blur(5px)' });
  const ring = $('[data-boot-ring]'), dial = $('[data-boot-dial]'), pct = $('[data-boot-pct]'), coord = $('[data-boot-coord]'), status = $('[data-boot-status]');
  const ticks = $$('.boot__ticks line', bootEl);
  const STEPS = [[0, 'Calibrating the observatory'], [0.3, 'Plotting 5,748 points of land'], [0.62, 'Charting three subjects'], [0.97, 'Ready']];
  let step = 0, skipped = false;
  // a click, a key, the wheel or a touch skips the calibration: the short reveal plays at once
  const skip = () => { if (skipped || done) return; skipped = true; want = 1; shown = 1; hint.classList.remove('is-on'); };
  for (const ev of ['pointerdown', 'keydown', 'wheel', 'touchstart']) addEventListener(ev, skip, { once: true, passive: true });
  // and says so, quietly, once the calibration has run long enough to be seen (the first visit of a session only)
  const hint = $('[data-boot-skip]');
  if (!seen) setTimeout(() => {
    if (skipped || done) return;
    hint.classList.add('is-on');
    const touch = matchMedia('(pointer: coarse), (max-width: 760px)').matches; // a phone, whatever its pointer reports
    decode(hint, touch ? 'Tap to skip' : 'Click or press any key to skip', 600);
  }, 1100);
  const pad = (v, n) => String(Math.abs(v).toFixed(2)).padStart(n, '0');
  const tick = () => {
    if (done) return;
    const t = performance.now() - T0;
    // never ahead of the work, never faster than the calibration's own pace
    const cap = skipped ? 1 : Math.min(1, t / MIN), aim = Math.min(want, cap * 1.0001);
    shown += (aim - shown) * 0.08;
    if (aim >= 1 && shown > 0.995) shown = 1;
    ring.style.strokeDasharray = `${(shown * 100).toFixed(2)} 100`;
    // light gathers in the ring as it closes
    ring.style.setProperty('--glow', (0.35 + 0.4 * Math.pow(shown, 3)).toFixed(3));
    pct.textContent = String(Math.round(shown * 100)).padStart(3, '0');
    ticks.forEach((l, i) => l.classList.toggle('is-on', i / ticks.length < shown));
    // the meridian's scan, read out as it sweeps
    const lon = ((t * 0.09) % 360) - 180, lat = Math.sin(t / 900) * 52;
    coord.textContent = `${pad(lat, 5)}°${lat >= 0 ? 'N' : 'S'} ${pad(lon, 6)}°${lon >= 0 ? 'E' : 'W'}`;
    while (step < STEPS.length - 1 && shown >= STEPS[step + 1][0]) { step++; decode(status, STEPS[step][1], 420); }
    // the dial sits where the planet is: its ring is the rim
    if (globeReady) place();
    if (shown >= 1 && (t >= MIN || skipped)) return finish();
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  setTimeout(() => { want = 1; }, 7000); // a slow network or a missing globe never keeps the page shut
  function place() {
    const d = globe.disc();
    if (d.r > 0 && Number.isFinite(d.x)) Object.assign(dial.style, { left: `${d.x}px`, top: `${d.y}px`, width: `${d.r * 2.4}px` });
  }
  // The hand-over, after Cartier's overture (the timings measured on "Le Chœur des Pierres" for the paper Meridian):
  // the dial quietly goes out; on the night the title is born at the centre of the screen, 1.5 times larger, its words
  // sharpening out of a 5 px blur in a random order (1 s each, 0.1 s apart); at 1.75 s it glides home over 2 s on a
  // curve that is almost still at first and lands slowly; only once it has left the centre does the night lift off the
  // planet in eclipse and the sun come round; then the rest of the screen sharpens in. Only transform, opacity and a
  // small blur move. A reader back within the session sees the title sharpen in place.
  function finish() {
    done = true;
    root.dataset.reveal = '1'; // the inline safety net in index.html stands down
    try { sessionStorage.setItem('meridian:booted', '1'); } catch { /* private mode */ }
    if (globeReady) place();
    const quick = !!seen || skipped;
    // the title stands above the night while it is born, then sinks back into the page
    gsap.set(title, { position: 'relative', zIndex: 301 });
    const r = title.getBoundingClientRect(), scale = Math.min(1.5, (innerWidth * 0.92) / r.width);
    const dx = innerWidth / 2 - (r.left + r.width / 2), dy = innerHeight / 2 - (r.top + r.height / 2);
    const order = gsap.utils.shuffle([...words]);
    const tl = gsap.timeline({ defaults: { ease: 'm.sine' } });
    const born = quick ? 0.15 : 0.45, glide = born + 1.75, lift = quick ? 0.1 : born + 2.6, rest = quick ? 0.7 : glide + 1.6;
    tl.to($$('.boot__ticks, .boot__read, .boot__skip, .boot__meridian, .boot__equator, .boot__track', bootEl), { opacity: 0, duration: 0.6 }, 0)
      .to(ring, { opacity: 0, duration: quick ? 0.6 : 0.9 }, 0.1);
    if (!quick) tl.set(title, { x: dx, y: dy, scale, transformOrigin: '50% 50%' }, 0);
    order.forEach((w, k) => tl.to(w, { opacity: 1, filter: 'blur(0px)', duration: quick ? 0.6 : 1, ease: 'none', clearProps: 'filter' }, born + k * (quick ? 0.05 : 0.1)));
    if (!quick) tl.to(title, { x: 0, y: 0, scale: 1, duration: 2, ease: 'm.smooth', clearProps: 'transform' }, glide);
    tl.call(() => { globe?.sunrise(quick ? 1800 : 3000); root.classList.remove('is-booting'); root.classList.add('is-booted'); dispatchEvent(new Event('meridian:booted')); }, null, lift)
      .to(bootEl, { opacity: 0, duration: quick ? 0.8 : 1.6, ease: 'm.smooth' }, lift)
      .call(() => decode($('.hero .eyebrow'), $('.hero .eyebrow').textContent, 700), null, rest)
      .fromTo(heroBits, { opacity: 0, filter: 'blur(5px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, stagger: 0.12, clearProps: 'filter' }, rest)
      .call(() => { lenis?.start(); gsap.set(title, { clearProps: 'position,zIndex' }); }, null, rest)
      .call(() => { bootEl.remove(); ScrollTrigger.refresh(); }, null, rest + 1);
  }
}
