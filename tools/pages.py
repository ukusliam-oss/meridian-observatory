# Writes the four HTML pages from one shared shell. Run: python3 tools/pages.py
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent

ICON = {
  'home': '<path d="M3.5 10.5 12 4l8.5 6.5V19a1 1 0 0 1-1 1H15v-5.5H9V20H4.5a1 1 0 0 1-1-1z"/>',
  'history': '<path d="M3 9.2 12 4l9 5.2M5.5 10v8M10 10v8M14 10v8M18.5 10v8M3 20.5h18"/>',
  'economics': '<path d="M4 4.5c4 0 6 15 16 15M4 19.5c6-1 10-14 16-15"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>',
  'geography': '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c3 3.4 3 13.6 0 17M12 3.5c-3 3.4-3 13.6 0 17"/>',
}
svg = lambda k, w=20: f'<svg viewBox="0 0 24 24" width="{w}" height="{w}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{ICON[k]}</svg>'
LOGO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9.2"/><ellipse cx="12" cy="12" rx="3.8" ry="9.2" style="stroke:var(--accent, currentColor)"/><path d="M2.8 12h18.4" opacity=".5"/></svg>'
FAV = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f0b45a' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='9.5'/%3E%3Cellipse cx='12' cy='12' rx='4' ry='9.5'/%3E%3C/svg%3E"
SUBJ = [('history', 'History', 'hist'), ('economics', 'Economics', 'econ'), ('geography', 'Geography', 'geo')]

def shell(page, title, desc, main, script, subject='', head=''):
    links = ''.join(f'<a class="nav__link" href="{k}.html" style="--c:var(--{c})"{" aria-current=\"page\"" if page == k else ""}>{n}</a>' for k, n, c in SUBJ)
    tabs = ''.join(f'<a href="{h}" style="--c:var(--{c})"{" aria-current=\"page\"" if page == k else ""}>{svg(k)}<span>{n}</span></a>'
                   for k, h, n, c in [('home', 'index.html', 'Home', 'text')] + [(k, f'{k}.html', n[:4] + '.' if n == 'Economics' else n[:4] + '.' if n == 'Geography' else n, c) for k, n, c in SUBJ])
    vendor = ''.join(f'<script src="assets/vendor/{f}" defer></script>' for f in ['gsap.min.js', 'ScrollTrigger.min.js', 'SplitText.min.js', 'Flip.min.js', 'DrawSVGPlugin.min.js', 'CustomEase.min.js', 'lenis.min.js'])
    return f'''<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">{head}
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#07080b">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Meridian">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="https://ukusliam-oss.github.io/meridian-observatory/assets/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="{FAV}">
<link rel="preload" href="assets/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/site.css">
<script>(function(){{var d=document.documentElement,t;d.classList.add('js');try{{t=JSON.parse(localStorage.getItem('meridian:theme'))}}catch(e){{}}d.dataset.theme=t||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');window.__mFallback=setTimeout(function(){{d.classList.add('reveal-fallback')}},3000)}})();</script>
</head>
<body{f' data-subject="{subject}"' if subject else ''}>
<a class="skip" href="#content">Skip to content</a>
<header class="nav"><div class="nav__bar">
  <a class="brand" href="index.html" aria-label="Meridian home">{LOGO}<span>Meridian</span><small>I&amp;S revision</small></a>
  <nav class="nav__links" aria-label="Subjects">{links}</nav>
  <button class="icon-btn" data-theme-toggle aria-label="Switch light or dark theme">
    <svg class="theme-ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>
    <svg class="theme-ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>
  </button>
  <span class="nav__progress" aria-hidden="true"></span>
</div></header>
<nav class="tabbar" aria-label="Pages">{tabs}</nav>
<main id="content">
{main}
</main>
<footer class="footer"><div class="wrap">
  <div class="footer__grid">
    <div><a class="brand" href="index.html" style="margin-bottom:14px">{LOGO}<span>Meridian</span></a>
      <p>Revision help for Cambridge IGCSE History, Economics and Geography, made by your Individuals &amp; Societies prefect. The notes are written in our own words. Information about the exams has been checked against the official Cambridge syllabuses.</p></div>
    <div><h4>Subjects</h4><ul>{''.join(f'<li><a href="{k}.html">{n}</a></li>' for k, n, c in SUBJ)}</ul></div>
    <div><h4>Official syllabuses</h4><ul>
      <li><a href="https://www.cambridgeinternational.org/Images/721327-2027-2028-syllabus.pdf" rel="noopener">History 0470 (2027–2028)</a></li>
      <li><a href="https://www.cambridgeinternational.org/Images/718148-2027-2029-syllabus.pdf" rel="noopener">Economics 0455 (2027–2029)</a></li>
      <li><a href="https://www.cambridgeinternational.org/Images/718150-2027-2029-syllabus.pdf" rel="noopener">Geography 0460 (2027–2029)</a></li></ul></div>
  </div>
  <div class="footer__base"><span>Not affiliated with or endorsed by Cambridge University Press &amp; Assessment.</span><span>Always follow your teacher's guidance.</span></div>
</div></footer>
{vendor}
<script type="module" src="assets/js/{script}"></script>
</body>
</html>
'''

def chip(k, n, c, code):
    return f'<a class="code-chip" href="{k}.html" style="--c:var(--{c})"><b>{n}</b>{code}</a>'

LENSES = [
  ('history', 'hist', '01', 'History 0470', 'International relations <em>since 1919</em>',
   'Six Core key questions, from the Treaty of Versailles to the collapse of Soviet control in Eastern Europe, plus one depth study.',
   [('6', 'Core key questions'), ('5', 'depth studies'), ('3', 'components')]),
  ('economics', 'econ', '02', 'Economics 0455', 'Markets, government <em>and trade</em>',
   'Six topics, from the basic economic problem to international trade and globalisation. Includes an interactive supply and demand diagram.',
   [('6', 'topics'), ('40', 'questions in Paper 1'), ('80', 'marks in Paper 2')]),
  ('geography', 'geo', '03', 'Geography 0460', 'Physical and <em>human geography</em>',
   'Ten topics, from river environments to resource provision, and the 16 detailed specific examples you need for the exam.',
   [('10', 'topics'), ('16', 'specific examples'), ('2', 'written papers')]),
]
lens_html = ''.join(f'''
    <section class="lens" id="lens-{k}" aria-labelledby="lens-{k}-h">
      <div class="wrap"><article class="lens__card" style="--c:var(--{c})" data-reveal>
        <p class="lens__num"><b>{num}</b>{label}</p>
        <h2 class="h2" id="lens-{k}-h">{h}</h2>
        <ul class="lens__stats">{''.join(f'<li><b data-count="{n}">{n}</b>{t}</li>' for n, t in stats)}</ul>
        <a class="btn btn--accent" href="{k}.html" style="justify-self:start">Go to {label.split()[0]} <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg></a>
      </article></div>
    </section>''' for k, c, num, label, h, p, stats in LENSES)

def change(k, name, code, level, items, foot):
    lis = ''.join(f'<li><b>{t}</b><span>{v}</span></li>' for t, v in items)
    return f'''<article class="card pad change" data-reveal data-spot style="--accent:var(--{k});--accent-deep:var(--{k}-deep)">
      <div class="change__head"><h3 class="h3">{name} <small>{code}</small></h3><span class="change__level">{level}</span></div>
      <ul>{lis}</ul><p class="change__foot">{foot}</p></article>'''
W = lambda a, b: f'<span class="was">{a}</span> → <span class="now">{b}</span>'
changes = ''.join([
  change('hist', 'History', '0470', 'Minor update', [
    ('Content and papers', 'No significant changes to teaching for 2027 and 2028.'),
    ('Paper 2, June 2027 (Option B)', '<span class="now">How secure was the USSR\'s control over Eastern Europe, 1948–c.1989?</span>'),
    ('Paper 2, November 2027 (Option B)', '<span class="now">Was the Treaty of Versailles fair?</span>'),
    ('Paper 4', '1 hour, 40 marks. One question in two parts: (a) an account and (b) importance.'),
  ], 'The Paper 2 topics for each exam series are listed on the <a href="history.html#exam">History page</a>.'),
  change('econ', 'Economics', '0455', 'Revised', [
    ('Paper 1', W('30 questions, 45 minutes', '40 questions, 1 hour')),
    ('Paper 2', W('90 marks, 2 hours 15 minutes', '80 marks, 2 hours')),
    ('Paper 2 Section A', W('30 marks', '20 marks, parts (a) to (f)')),
    ('Assessment objectives', 'The weighting of AO3 Evaluation has decreased to 10%. AO1 and AO2 have increased.'),
    ('New content', 'Includes changes in globalisation, recession, national minimum wage diagrams, ATC diagrams and types of merger.'),
  ], 'New content is labelled topic by topic on the <a href="economics.html#topics">Economics page</a>.'),
  change('geo', 'Geography', '0460', 'Revised', [
    ('Structure', W('3 themes', '10 topics: 5 physical and 5 human')),
    ('Paper 1', W('Geographical Themes', 'Physical Geography, 1 hour 45 minutes, 75 marks')),
    ('Paper 2', W('Geographical Skills, 1 hour 30 minutes, 60 marks', 'Human Geography, 1 hour 45 minutes, 75 marks')),
    ('Topics', 'Climate change is a new topic. Settlement, water and weather have been removed.'),
    ('Terminology', W('MEDC and LEDC', 'HIC, MIC and LIC')),
    ('Examples', W('case studies', '16 detailed specific examples')),
  ], 'All 16 detailed specific examples are listed on the <a href="geography.html#examples">Geography page</a>.'),
])
doors = ''.join(f'''<a class="card door" href="{k}.html" data-spot data-reveal style="--c:var(--{c})">
      <div class="door__top"><span class="door__code">IGCSE {code}</span><span class="door__glyph">{svg(k, 64)}</span></div>
      <div><h3 class="h2">{n}</h3><p>{p}</p></div>
      <span class="door__go">Start revising <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg></span></a>'''
  for k, n, c, code, p in [
    ('history', 'History', 'hist', '0470', 'Core key questions, depth studies, an interactive timeline from 1919 to 1991 and model answer plans.'),
    ('economics', 'Economics', 'econ', '0455', 'All six topics, an interactive supply and demand diagram, and guidance on analysis and evaluation.'),
    ('geography', 'Geography', 'geo', '0460', 'All ten topics, an interactive demographic transition model and the 16 detailed specific examples.')])

# The home's loader is the observatory calibrating (home.js): a dial whose ring is the planet's rim fills with the real
# loading (fonts, the globe and its first frames), the meridian scans, readings run; then the ring lands on the globe,
# the night lifts and the sun comes round the planet. The ticks are drawn here, every 5 degrees, longer every 30.
import math
TICKS = ''.join(f'<line x1="{math.sin(math.radians(a))*(104):.2f}" y1="{-math.cos(math.radians(a))*(104):.2f}" x2="{math.sin(math.radians(a))*(104 + (9 if a % 30 == 0 else 4)):.2f}" y2="{-math.cos(math.radians(a))*(104 + (9 if a % 30 == 0 else 4)):.2f}" style="--a:{a}"/>' for a in range(0, 360, 5))
BOOT = f'''<div class="boot" data-boot aria-hidden="true">
  <svg class="boot__dial" data-boot-dial viewBox="-120 -120 240 240">
    <g class="boot__ticks">{TICKS}</g>
    <circle class="boot__track" r="100"/>
    <circle class="boot__ring" data-boot-ring r="100" pathLength="100" transform="rotate(-90)"/>
    <ellipse class="boot__meridian" rx="38" ry="100"/>
    <line class="boot__equator" x1="-100" x2="100" y1="0" y2="0"/>
  </svg>
  <div class="boot__read boot__read--l"><span class="boot__brand">Meridian</span><span data-boot-status>Calibrating the observatory</span></div>
  <div class="boot__read boot__read--r"><span data-boot-coord>00.00°N 000.00°E</span><span><b data-boot-pct>000</b>%</span></div>
</div>
<script>/* the loader's safety net: if its reveal has not begun within 10 s (a script failed, or an old cached one ran), the
   page opens at once */ setTimeout(function(){{var d=document.documentElement;if(d.dataset.reveal||d.classList.contains('is-booted'))return;var b=document.querySelector('[data-boot]');if(b)b.remove();d.classList.remove('is-booting');d.classList.add('is-booted');[].forEach.call(document.querySelectorAll('#hero-h .hw, .hero .eyebrow, .hero .lede, .hero__cta, .hero__foot'),function(e){{e.style.opacity='1';e.style.filter='none';e.style.transform='none'}});try{{window.__meridianLenis&&window.__meridianLenis.start()}}catch(e){{}}}},10000);</script>'''
home_main = BOOT + f'''
<div class="scope" data-tone="dark" data-globe-scope>
  <div class="scope__stage"><div class="globe" aria-hidden="true"></div><div class="grain"></div></div>
  <div class="scope__content">
    <section class="hero" aria-labelledby="hero-h">
      <div class="wrap"><div class="hero__copy">
        <p class="eyebrow">Cambridge IGCSE · Individuals and Societies</p>
        <h1 class="display" id="hero-h" data-split="boot">History, Economics <em>and Geography</em></h1>
        <p class="lede">Revision notes, interactive diagrams and exam technique for Cambridge IGCSE History (0470), Economics (0455) and Geography (0460). Updated for the syllabuses examined from 2027.</p>
        <div class="hero__cta">
          <a class="btn btn--primary" href="#subjects">Choose a subject <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg></a>
          <a class="btn btn--ghost" href="#changes">Syllabus changes for 2027</a>
        </div>
      </div></div>
      <div class="hero__foot"><div class="wrap">
        <div class="codes">{chip('history', 'History', 'hist', '0470')}{chip('economics', 'Economics', 'econ', '0455')}{chip('geography', 'Geography', 'geo', '0460')}</div>
        <span class="scroll-cue"><span></span>Scroll</span>
      </div></div>
    </section>{lens_html}
  </div>
</div>

<section class="section" id="subjects"><div class="wrap">
  <header class="section-head"><p class="eyebrow">Subjects</p><h2 class="h2" data-split><em>Choose</em>a subject</h2></header>
  <div class="doors">{doors}</div>
</div></section>

<section class="section" id="changes" style="background:var(--bg-2)"><div class="wrap">
  <header class="section-head section-head--split"><div style="display:grid;gap:20px"><p class="eyebrow">Syllabus changes</p><h2 class="h2" data-split><em>What has changed</em>for 2027</h2></div>
    <p class="lede" data-reveal>Economics and Geography have revised syllabuses for exams from 2027, with changes to the papers. History has been updated, but the content and papers are mostly the same. Check that your revision materials match the syllabus you are taking.</p></header>
  <div class="changes">{changes}</div>
</div></section>

<section class="section" id="ladder"><div class="wrap">
  <header class="section-head section-head--split"><div style="display:grid;gap:20px"><p class="eyebrow">Exam technique</p><h2 class="h2" data-split><em>Command</em>words</h2></div>
    <p class="lede" data-reveal>The command word tells you what kind of answer to give. In all three subjects, questions range from recalling knowledge to making a judgement. Select a level to see example questions.</p></header>
  <div class="ladder" data-reveal></div>
  <div class="ladder-detail" aria-live="polite"></div>
</div></section>

<section class="section" id="daily" style="background:var(--bg-2)"><div class="wrap">
  <header class="section-head section-head--split"><div style="display:grid;gap:20px"><p class="eyebrow">Daily quiz</p><h2 class="h2" data-split><em>Today's</em>six questions</h2></div>
    <p class="lede" data-reveal>Two questions from each subject. Everyone gets the same six questions today, so you can compare scores with your classmates. After that, each set is chosen at random.</p></header>
  <div data-mount="daily" data-reveal></div>
</div></section>'''

(ROOT / 'index.html').write_text(shell('home', 'Meridian | IGCSE I&S revision', 'Revision notes, interactive diagrams and exam technique for Cambridge IGCSE History 0470, Economics 0455 and Geography 0460, for exams from 2027.', home_main, 'home.js'))

HEROES = {
  'history': ('History', '0470', '2027–2028 syllabus', 'The twentieth century: international relations since 1919, and one depth study.', [('6', 'Core key questions'), ('60', 'marks in Paper 1'), ('3', 'components')]),
  'economics': ('Economics', '0455', '2027–2029 syllabus', 'How consumers, firms and governments make decisions when resources are scarce.', [('6', 'topics'), ('40', 'questions in Paper 1'), ('70', '% of total marks in Paper 2')]),
  'geography': ('Geography', '0460', '2027–2029 syllabus', 'Five physical and five human topics. Each topic includes how people manage the environment sustainably.', [('10', 'topics'), ('16', 'detailed specific examples'), ('75', 'marks in each written paper')]),
}
# History chapters told as scroll journeys over the globe (history/kq*.html), shown under the History hero
CHAPTERS = '''
<section class="chapters" data-tone="dark"><div class="wrap">
  <p class="eyebrow">Scroll chapters · start here for the June 2027 Paper 2 topic</p>
  <div class="chapters__grid">
    <a class="chapter-card" href="history/kq6.html" data-reveal>
      <span class="chapter-card__tag">Key question 6 · 33 scenes · about 50 minutes</span>
      <span class="chapter-card__title"><em>How secure was</em>the USSR's control over Eastern Europe, 1948–<span class="lc">c.</span>1989?</span>
      <span class="chapter-card__text">Travel across a globe with the real borders of each date, from the iron curtain in 1948 to the fall of the Berlin Wall.</span>
      <span class="chapter-card__go">Open the chapter →</span>
    </a>
    <a class="chapter-card chapter-card--paper" href="history/kq6-paper2.html" data-reveal>
      <span class="chapter-card__tag">Paper 2 practice · 6 sources · 40 marks</span>
      <span class="chapter-card__title"><em>Hungary, 1956:</em>how secure was Soviet control?</span>
      <span class="chapter-card__text">Five source questions in the Paper 2 format, with a mark scheme and two example answers for every part.</span>
      <span class="chapter-card__go">Practise with sources →</span>
    </a>
  </div>
</div></section>'''

# Economics chapter (economics/macro-policy.html), shown under the Economics hero
ECON_CHAPTERS = '''
<section class="chapters" data-tone="dark"><div class="wrap">
  <p class="eyebrow">Scroll chapter · Topic 4.1–4.4</p>
  <div class="chapters__grid">
    <a class="chapter-card" href="economics/macro-policy.html" data-reveal>
      <span class="chapter-card__tag">Government and the macroeconomy · 41 scenes · about 60 minutes</span>
      <span class="chapter-card__title"><em>How do governments</em>manage the whole economy?</span>
      <span class="chapter-card__text">The six aims, the conflicts between them, and fiscal, monetary and supply-side policy, on a globe coloured with real IMF data.</span>
      <span class="chapter-card__go">Open the chapter →</span>
    </a>
    <a class="chapter-card chapter-card--paper" href="economics/macro-policy.html#lab" data-reveal>
      <span class="chapter-card__tag">Policy lab · 5 tools · 6 aims</span>
      <span class="chapter-card__title"><em>Try it:</em>move the policies, watch the aims</span>
      <span class="chapter-card__text">Replay the 2009 recession and the 2022 inflation, or test your own policy. A simplified model for learning, not a forecast.</span>
      <span class="chapter-card__go">Open the lab →</span>
    </a>
  </div>
</div></section>'''
GEO_CHAPTERS = '''
<section class="chapters" data-tone="dark"><div class="wrap">
  <p class="eyebrow">Scroll chapter · Topic 4 · draft, not yet reviewed by a teacher</p>
  <div class="chapters__grid">
    <a class="chapter-card" href="geography/tectonics.html" data-reveal>
      <span class="chapter-card__tag">Tectonic hazards · 26 scenes · about 45 minutes</span>
      <span class="chapter-card__title"><em>Why does the ground</em>shake and burn?</span>
      <span class="chapter-card__text">Plates and boundaries, earthquakes and volcanoes, why people live with the risk, and how the impacts are managed, on a globe drawn from real earthquake, volcano and elevation data.</span>
      <span class="chapter-card__go">Open the chapter →</span>
    </a>
    <a class="chapter-card chapter-card--paper" href="geography/tectonics.html#toolkit" data-reveal>
      <span class="chapter-card__tag">Paper 1 practice · 2 questions · 7-mark answers</span>
      <span class="chapter-card__title"><em>Then try:</em>earthquakes and volcanoes, exam style</span>
      <span class="chapter-card__text">Resource questions, a 5-mark evaluation and a 7-mark answer on a named example, with mark schemes and Level 2 and Level 3 answers to compare.</span>
      <span class="chapter-card__go">Open the practice →</span>
    </a>
  </div>
</div></section>'''
SUBJECT_CHAPTERS = {'history': CHAPTERS, 'economics': ECON_CHAPTERS, 'geography': GEO_CHAPTERS}

for k, (name, code, eyebrow, lede, stats) in HEROES.items():
    main = f'''
<section class="s-hero" data-tone="dark">
  <div class="inst" data-inst aria-hidden="true"></div>
  <div class="grain"></div>
  <div class="wrap">
    <p class="eyebrow">Cambridge IGCSE · {eyebrow}</p>
    <div class="s-hero__title"><h1 class="h1">{name}</h1><span class="s-hero__code">{code}</span></div>
    <div class="s-hero__row"><p class="lede">{lede}</p>
      <div class="s-hero__stats">{''.join(f'<div><b data-count="{n}">{n}</b><span>{t}</span></div>' for n, t in stats)}</div></div>
  </div>
</section>''' + SUBJECT_CHAPTERS.get(k, '')
    (ROOT / f'{k}.html').write_text(shell(k, f'{name} {code} | Meridian', f'Cambridge IGCSE {name} {code} revision: assessment overview, syllabus content, an interactive diagram, exam technique, command words, flashcards and a quiz.', main, 'subject.js', k))
# a page for an address that is not on the site (GitHub Pages serves /404.html for any of them, at any depth): it
# sets its <base> from the address first, so its relative links and assets work wherever it is shown
BASE = "\n<script>(function(){var s=location.pathname.split('/')[1],b=/github\\.io$/.test(location.hostname)&&s?'/'+s+'/':'/';document.write('<base href=\"'+b+'\">')})();</script>"
lost = f'''
<section class="lost" data-tone="dark">
  <div class="grain"></div>
  <svg class="lost__globe" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="96"/><ellipse class="lost__m" cx="100" cy="100" rx="40" ry="96"/><ellipse class="lost__m lost__m--2" cx="100" cy="100" rx="40" ry="96"/><path d="M4 100h192M14 58h172M14 142h172"/><circle class="lost__dot" cx="100" cy="100" r="2.5"/></svg>
  <div class="wrap">
    <p class="eyebrow">Signal lost · 404</p>
    <h1 class="display" data-split="now"><em>Off</em>the map</h1>
    <p class="lede">This page is not on Meridian. It may have moved, or the address may be mistyped. The subjects are all here.</p>
    <div class="lost__go">{''.join(f'<a class="btn btn--accent" href="{k}.html" style="--accent:var(--{c})">{n}</a>' for k, n, c in SUBJ)}<a class="btn btn--primary" href="index.html">Home</a></div>
  </div>
</section>'''
(ROOT / '404.html').write_text(shell('lost', 'Off the map | Meridian', 'This page is not on Meridian.', lost, 'lost.js', head=BASE))
print('wrote 5 pages')
import runpy; runpy.run_path(str(ROOT / 'tools' / 'stamp.py')) # every page carries the current version of each file
