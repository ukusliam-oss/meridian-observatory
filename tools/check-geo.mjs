// Checks a Geography scroll chapter before it is committed:
//   node tools/check-geo.mjs [assets/js/data/geography/tectonics.js]
// - every scene has the fields the page renders, and ids are unique
// - every fact and scene source is listed in `sources`, and every listed source is cited
// - every layer a scene asks for exists in assets/data/geo (points, plates, isolines, landscape heights), sections lie
//   inside their landscape, and markers on a landscape lie inside it too
// - every syllabus point the chapter lists is covered by a scene, and the topic is complete
// - the toolkit has a summary, 20 quick checks, definitions and practice sets in the 2027 Paper 1/2 format
// - no em dashes in any text (house style)
import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const file = process.argv[2] || 'assets/js/data/geography/tectonics.js';
const { default: ch } = await import(pathToFileURL(file).href);
// syllabus points of each topic in the 0460 syllabus for 2027–2029 (Geography plan §1.1)
const TOPICS = {
  tectonics: ['4.1.1', '4.1.2', '4.1.3', '4.2.1', '4.2.2', '4.2.3', '4.2.4', '4.2.5', '4.2.6', '4.3.1', '4.3.2', '4.3.3', '4.3.4', '4.4.1', '4.4.2', '4.4.3', '4.4.4'],
};
const GEO = 'assets/data/geo';
const POINT_IDS = ['quakes', 'volcanoes'], PLATE_KINDS = ['divergent', 'convergent', 'collision', 'transform'];

const errors = [], warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`), warn = (where, msg) => warnings.push(`${where}: ${msg}`);
const src = ch.sources || {};
const hasSrc = k => Object.prototype.hasOwnProperty.call(src, k);
const dem = site => (existsSync(`${GEO}/dem/${site}.json`) ? JSON.parse(readFileSync(`${GEO}/dem/${site}.json`, 'utf8')) : null);
const inside = ([lat, lon], [w, s, e, n]) => lon >= w && lon <= e && lat >= s && lat <= n;

const ids = new Set(), covered = new Set();
(ch.scenes || []).forEach((s, i) => {
  const at = `scene ${i + 1} (${s.id})`;
  if (ids.has(s.id)) err(at, 'duplicate id'); ids.add(s.id);
  for (const f of ['part', 'date', 'dateLabel', 'title', 'body', 'why']) if (!s[f]) err(at, `missing ${f}`);
  if (!s.camera || [s.camera.lat, s.camera.lon, s.camera.alt].some(v => typeof v !== 'number')) err(at, 'camera needs lat, lon, alt');
  if (!s.check || !s.check.q || !s.check.a) err(at, 'check needs q and a');
  if (!(s.facts || []).length) err(at, 'no facts');
  for (const f of s.facts || []) if (!hasSrc(f.src)) err(at, `fact source "${f.src}" is not in sources`);
  for (const k of s.sources || []) if (!hasSrc(k)) err(at, `scene source "${k}" is not in sources`);
  if (!(s.syllabus || []).length) err(at, 'no syllabus points'); else s.syllabus.forEach(t => covered.add(t));
  const m = s.map || {};
  if (!s.map) err(at, 'missing map');
  if (ch.borders === 'none' && m.borders !== 'none') warn(at, `map.borders is ${m.borders}, the chapter's globe is natural`);
  for (const q of m.points || []) {
    if (!POINT_IDS.includes(q.id)) err(at, `points layer ${q.id} is unknown`);
    else if (!existsSync(`${GEO}/${q.id}.json`)) err(at, `${GEO}/${q.id}.json is missing: run tools/build-geo.mjs`);
    if (q.years && (q.years[0] < 2000 || q.years[1] > 2025)) err(at, `quakes years ${q.years} are outside the catalogue (2000–2025)`);
  }
  if (m.plates) {
    if (!existsSync(`${GEO}/plates.json`)) err(at, 'plates.json is missing');
    if (Array.isArray(m.plates)) for (const k of m.plates) if (!PLATE_KINDS.includes(k)) err(at, `plate kind ${k} is unknown`);
  }
  if (m.isolines && !existsSync(`${GEO}/shake/${m.isolines.id}.json`)) err(at, `isolines ${m.isolines.id} are missing: add the event to tools/build-geo.mjs`);
  const r = m.relief3d;
  if (r) {
    const d = dem(r.site);
    if (!d) err(at, `landscape ${r.site} is missing: add it to SITES in tools/build-geo.mjs`);
    else {
      if (m.section) for (const p of [m.section.from, m.section.to]) if (!inside(p, d.box)) err(at, `section end ${p} is outside the ${r.site} landscape`);
      for (const mk of m.markers || []) if (!inside(mk.at, d.box)) warn(at, `marker "${mk.label}" is outside the ${r.site} landscape, so it stays at sea level`);
      if (!inside([s.camera.lat, s.camera.lon], d.box)) warn(at, `the camera target is outside the ${r.site} landscape`);
    }
    if ((r.exag || 1) !== 1 && !/(times|twice|raised).*height|height.*(times|twice|raised)|not exaggerated/i.test(s.body)) warn(at, `heights are raised ×${r.exag}: say so in the text`);
  } else if (m.section) err(at, 'a section needs a relief3d landscape');
  // a ground patch (assets/data/ground, tools/build-ground.mjs) raises the globe itself: it must exist, and the text says so
  const g = m.ground3d;
  if (g) {
    if (!existsSync(`assets/data/ground/${g.site}.json`)) err(at, `ground ${g.site} is missing: add it to SITES in tools/build-ground.mjs`);
    if ((g.exag || 1) !== 1 && !/(times|twice|raised).*height|height.*(times|twice|raised)|not exaggerated/i.test(s.body)) warn(at, `the ground's heights are raised ×${g.exag}: say so in the text`);
  }
  if (m.cutaway && typeof m.cutaway.lon !== 'number') err(at, 'cutaway needs lon');
  if (s.compare && !(s.compare.rows || []).length) err(at, 'compare has no rows');
  if (s.chain && !(s.chain.steps || []).length) err(at, 'chain has no steps');
  if (s.judgement && !(s.judgement.for?.length && s.judgement.against?.length && s.judgement.verdict)) err(at, 'judgement needs for, against and verdict');
});

// syllabus
const listed = (ch.syllabus || []).map(t => t.id);
for (const t of listed) if (!covered.has(t)) err('syllabus', `${t} is listed but no scene covers it`);
for (const t of covered) if (!listed.includes(t)) warn('syllabus', `${t} is used by a scene but not listed in syllabus`);
for (const t of TOPICS[ch.id] || []) if (!covered.has(t)) err('syllabus', `${t} is not covered`);

// toolkit
const tk = ch.toolkit || {};
if (!(tk.summary || []).length) err('toolkit', 'no summary');
if (ch.id !== 'engine-test') {
  if ((tk.checks || []).length < 20) err('toolkit', `${(tk.checks || []).length} quick checks, the plan asks for 20`);
  if (!(tk.definitions || []).length) warn('toolkit', 'no definition bank');
  const sets = tk.practiceSets || [];
  if (sets.some(x => !x)) err('toolkit', 'a practice set is missing (a set taken from practice-geography.js was not found)');
  for (const set of sets.filter(Boolean)) {
    for (const p of set.parts || []) {
      if (!p.ms) err(`practice ${set.short}`, `${p.k} has no mark scheme`);
      if (p.m === 7 && !(p.answers || []).length) warn(`practice ${set.short}`, `${p.k} (7 marks) has no example answers`);
    }
    const marks = (set.parts || []).reduce((a, p) => a + p.m, 0);
    if (marks > 25) err(`practice ${set.short}`, `${marks} marks, a question is worth 25`);
  }
}

// sources: cited at least once, each with a title and a url
const used = new Set();
JSON.stringify(ch, (k, v) => { if ((k === 'src' || k === 'source') && typeof v === 'string') used.add(v); if (k === 'sources' && Array.isArray(v)) v.forEach(x => used.add(x)); return v; });
for (const k of Object.keys(src)) {
  if (!used.has(k)) warn('sources', `${k} is never cited`);
  const s = src[k]; if (!s.title || !s.url) err('sources', `${k} needs a title and a url`);
}

// house style: no em dashes anywhere in the chapter's text
JSON.stringify(ch, (k, v) => { if (typeof v === 'string' && v.includes('—')) err('style', `em dash in "${v.slice(Math.max(0, v.indexOf('—') - 30), v.indexOf('—') + 30)}"`); return v; });

for (const w of warnings) console.log('warn  ' + w);
for (const e of errors) console.log('ERROR ' + e);
console.log(`${file}: ${(ch.scenes || []).length} scenes, ${covered.size} syllabus points, ${Object.keys(src).length} sources · ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
