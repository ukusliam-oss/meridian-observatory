# Stamps every page with the content hash of each script and stylesheet, so a browser never runs a new page with old
# cached modules (GitHub Pages lets them be cached for 10 minutes; a new index.html with the old home.js left the home's
# loader standing at 000%). Run after tools/pages.py and before every commit: python3 tools/stamp.py
#
# Each page gets an import map (right after <meta charset>) that maps every module under assets/js to itself with
# ?v=<hash>, so `import './core.js'` and every dynamic import load the current file; its <script src> and stylesheet
# hrefs carry the same ?v=. Browsers without import maps still work, with ordinary caching.
import hashlib, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = sorted(p for p in ROOT.rglob('*.html') if 'node_modules' not in p.parts and '.cache' not in p.parts)
ASSETS = sorted([*ROOT.glob('assets/js/**/*.js'), *ROOT.glob('assets/css/*.css'), *ROOT.glob('assets/vendor/*.js')])
HASH = {p.relative_to(ROOT).as_posix(): hashlib.sha1(p.read_bytes()).hexdigest()[:10] for p in ASSETS}

# Between pages (site.css): a view transition is held on the old page's picture until the new page's scripts have built
# it (core.js boot calls __mGo), then the two cross in one dimmed shift, so nothing pops in and the screen never goes
# black. Pages that open on their own dark loader (the home, the chapters) are not held. It must listen before the
# first render, so it is inline in <head>; 1.5 s at most.
ENTER = ('<script data-enter>(function(){addEventListener("pagereveal",function(e){var t=e.viewTransition;if(!t)return;'
         't.ready.then(function(){var a=document.getAnimations().filter(function(x){return x.effect&&/view-transition/.test(x.effect.pseudoElement||"")});'
         'if(window.__mBuilt||document.querySelector(".loader,[data-boot]"))return;a.forEach(function(x){x.pause()});var tm,go=function(){window.__mGo=null;clearTimeout(tm);'
         'a.forEach(function(x){if(x.playState==="paused")x.play()})};window.__mGo=go;tm=setTimeout(go,1500)},function(){})})})();</script>')

# What a visit should never wait for twice: every script, stylesheet and font of the site ("now", fetched while the
# home's loader runs, or in idle time on any other page) and the chapters' map data ("later", fetched in idle time
# after that). Terrain tiles are left to the chapters. The list goes into each page as JSON (#preload, core.js).
FONTS = sorted(p.relative_to(ROOT).as_posix() for p in ROOT.glob('assets/fonts/*.woff2'))
LATER = ['assets/data/borders.json', 'assets/data/countries-modern.json', 'assets/data/econ.json', 'assets/data/relief-world.jpg',
         'assets/data/relief-europe.jpg', 'assets/data/geo/natural.json', 'assets/data/geo/quakes.json',
         'assets/data/geo/volcanoes.json', 'assets/data/geo/plates.json']

# Speculation rules: every page's HTML is prefetched at once, and a hub or the Paper 2 room is prerendered while the
# pointer rests on a link to it (moderate), so it opens already built. The home and the chapters (WebGL, large) are
# only prefetched.
HEAVY = "a[href$='index.html'], a[href$='kq6.html'], a[href$='macro-policy.html'], a[href$='tectonics.html'], a[href*='engine-test']"
RULES = '<script type="speculationrules">' + json.dumps({
    'prefetch': [{'source': 'document', 'where': {'selector_matches': "a[href$='.html']"}, 'eagerness': 'eager'}],
    'prerender': [{'source': 'document', 'where': {'and': [{'selector_matches': "a[href$='.html']"}, {'not': {'selector_matches': HEAVY}}]}, 'eagerness': 'moderate'}],
}, separators=(',', ':')) + '</script>'

def preload(rel):
    now = [f'{rel}{k}?v={v}' for k, v in HASH.items() if not k.endswith('engine-test.js') and k != 'assets/css/practice.css' and k != 'assets/css/policy-lab.css']
    now += [f'{rel}assets/css/practice.css', f'{rel}assets/css/policy-lab.css'] + [f'{rel}{f}' for f in FONTS] # injected or used unversioned
    return f'<script type="application/json" id="preload">{json.dumps({"now": now, "later": [rel + f for f in LATER]}, separators=(",", ":"))}</script>'

def stamp(page):
    s = page.read_text()
    up = '../' * (len(page.relative_to(ROOT).parts) - 1)
    rel = up or './' # an import map's keys must look like URLs (./ or ../), or they are bare names and match nothing
    imports = {f'{rel}{k}': f'{rel}{k}?v={v}' for k, v in HASH.items() if k.startswith('assets/js/')}
    tag = f'<script type="importmap" data-stamp>{json.dumps({"imports": imports}, separators=(",", ":"))}</script>'
    s = re.sub(r'\n?<script type="importmap" data-stamp>.*?</script>', '', s, flags=re.S)
    # after the 404 page's <base> script if it has one, else right after <meta charset>
    anchor = re.search(r'document\.write\(\'<base[^\n]*</script>', s) or re.search(r'<meta charset="utf-8">', s)
    s = re.sub(r'\n?<script src="(?:\.\./)*assets/js/transitions\.js[^"]*"></script>', '', s)
    s = re.sub(r'\n?<script data-enter>.*?</script>', '', s, flags=re.S)
    s = re.sub(r'\n?<script type="application/json" id="preload">.*?</script>', '', s, flags=re.S)
    s = re.sub(r'\n?<script type="speculationrules">.*?</script>', '', s, flags=re.S)
    s = s[:anchor.end()] + '\n' + tag + '\n' + ENTER + '\n' + preload(rel) + '\n' + RULES + s[anchor.end():]
    # the entry scripts and stylesheets themselves
    def ver(m):
        path = m.group(2)
        key = path[len(up):] if path.startswith(up) else path
        return f'{m.group(1)}{path}?v={HASH[key]}{m.group(3)}' if key in HASH else m.group(0)
    s = re.sub(r'((?:src|href)=")((?:\.\./)*assets/(?:js|css|vendor)/[^"?]+)(?:\?v=[0-9a-f]+)?(")', ver, s)
    page.write_text(s)

for p in PAGES:
    stamp(p)
print(f'stamped {len(PAGES)} pages with {len(HASH)} assets')
