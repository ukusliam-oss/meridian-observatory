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

def stamp(page):
    s = page.read_text()
    up = '../' * (len(page.relative_to(ROOT).parts) - 1)
    rel = up or './' # an import map's keys must look like URLs (./ or ../), or they are bare names and match nothing
    imports = {f'{rel}{k}': f'{rel}{k}?v={v}' for k, v in HASH.items() if k.startswith('assets/js/')}
    tag = f'<script type="importmap" data-stamp>{json.dumps({"imports": imports}, separators=(",", ":"))}</script>'
    s = re.sub(r'\n?<script type="importmap" data-stamp>.*?</script>', '', s, flags=re.S)
    # after the 404 page's <base> script if it has one, else right after <meta charset>
    anchor = re.search(r'document\.write\(\'<base[^\n]*</script>', s) or re.search(r'<meta charset="utf-8">', s)
    s = s[:anchor.end()] + '\n' + tag + s[anchor.end():]
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
