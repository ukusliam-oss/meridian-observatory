// Home study (unlinked): pointing at a subject (hover, focus, or the first tap on a phone) turns the needle to its arc
// and shows its world in the lens; choosing it lets the words go and opens its hub. Each row says the reader's next
// step where this device knows one (History's chapter position), and what the subject is otherwise.
// the site's store (core.js), read and written directly: core.js needs the vendored GSAP, which this study does not load
const store = {
  get(k, d) { try { const v = localStorage.getItem('meridian:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('meridian:' + k, JSON.stringify(v)); } catch { /* private mode */ } },
};

const $ = s => document.querySelector(s);
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pos = store.get('pos:kq6', null);
const SUBJECTS = [
  { id: 'history', name: 'History', code: '0470', c: 'var(--hist)', a: -96, href: '../history.html',
    line: pos != null ? `Continue the key question 6 chapter · scene ${pos + 1} of 33` : 'International relations since 1919, and a depth study', go: pos != null ? 'Continue' : 'Open' },
  { id: 'economics', name: 'Economics', code: '0455', c: 'var(--econ)', a: 0, href: '../economics.html', line: 'How consumers, firms and governments decide when resources are scarce', go: 'Open' },
  { id: 'geography', name: 'Geography', code: '0460', c: 'var(--geo)', a: 96, href: '../geography.html', line: 'Population and settlement, the natural environment, economic development', go: 'Open' },
];
$('[data-list]').innerHTML = SUBJECTS.map(s => `<a class="hs-row" href="${s.href}" data-id="${s.id}" style="--c:${s.c}">
  <span class="hs-row__code">${s.code}</span><span class="hs-row__name">${s.name}</span><span class="hs-row__go">${s.go} →</span>
  <p class="hs-row__line">${s.line}</p></a>`).join('');

// the dial's centre where a chapter's globe has its centre (40% of the height on phones, 44% on wide screens)
const place = () => { $('[data-dial]').style.top = `${((innerWidth > 900 ? 0.44 : 0.4) * innerHeight).toFixed(1)}px`; };
place(); addEventListener('resize', place);

const needle = $('[data-needle]');
let on = store.get('home:subject', 'history');
function point(id) {
  on = id; const s = SUBJECTS.find(x => x.id === id);
  needle.style.setProperty('--a', `${s.a}deg`);
  document.querySelectorAll('[data-still]').forEach(img => img.classList.toggle('is-on', img.dataset.still === id));
  document.querySelectorAll('.hs-row').forEach(r => r.classList.toggle('is-on', r.dataset.id === id));
}
point(on);
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
document.querySelectorAll('.hs-row').forEach(row => {
  row.addEventListener('pointerenter', () => { if (fine) point(row.dataset.id); });
  row.addEventListener('focus', () => point(row.dataset.id));
  row.addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    const id = row.dataset.id, turned = on !== id;
    point(id); store.set('home:subject', id);
    // the needle reaches the subject, the words leave the light, and the hub opens on the same place
    setTimeout(() => { root.classList.add('is-leaving'); document.body.classList.add('is-leaving'); }, reduced ? 0 : (turned ? 420 : 0));
    setTimeout(() => { location.href = row.href; }, reduced ? 0 : (turned ? 820 : 400));
  });
});
