// Builds the committed audit results from .cache/a11y/raw.jsonl: a11y/results/audit.json (axe by rule, page and state;
// keyboard walks; targets; reflow; contrast; motion; semantics; known issues). usage: node a11y/summarise.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const rows = readFileSync(join(HERE, '../.cache/a11y/raw.jsonl'), 'utf8').trim().split('\n').map(l => JSON.parse(l));
const by = (k, f) => rows.filter(r => r.check === k).map(f);

// axe: one entry per rule, with every page and state where it fired
const axeRows = rows.filter(r => r.check === 'axe');
const rules = {};
for (const r of axeRows) for (const kind of ['violations', 'incomplete']) for (const v of r[kind]) {
  const x = (rules[`${kind}:${v.id}`] ??= { kind, id: v.id, impact: v.impact, sc: v.sc, bestPractice: v.bestPractice, help: v.help, where: [], examples: v.examples });
  x.where.push(`${r.page} | ${r.state} | ${r.vp} | ${v.nodes}`);
}
const tab = by('tab', r => {
  const f = r.forward.filter(s => !s.body);
  return { page: r.page, vp: r.vp, stops: f.length, reachedEnd: r.forward.some(s => s.body), noIndicator: f.filter(s => !s.indicator).map(s => `${s.tag}.${s.cls} "${s.label}"`).slice(0, 8), noIndicatorCount: f.filter(s => !s.indicator).length, outOfView: f.filter(s => !s.inView).length, fullyCovered: f.filter(s => s.fully).map(s => `${s.tag}.${s.cls} "${s.label}" by ${s.coveredBy}`).slice(0, 6), partlyCovered: f.filter(s => s.coveredPoints && !s.fully).length, first: f.slice(0, 4).map(s => `${s.tag}.${s.cls} "${s.label}"`), backwardStops: r.backward.filter(s => !s.body).length };
});
const out = {
  made: new Date().toISOString().slice(0, 10), axeVersion: axeRows[0]?.axe, scans: axeRows.length,
  axe: Object.values(rules).sort((a, b) => (a.kind > b.kind ? -1 : 1) || b.where.length - a.where.length),
  passesSeen: [...new Set(axeRows.flatMap(r => r.passes))].sort(), inapplicableEverywhere: [...new Set(axeRows.flatMap(r => r.inapplicable))].filter(id => axeRows.every(r => r.inapplicable.includes(id))).sort(),
  semantics: by('semantics', r => ({ page: r.page, lang: r.lang, h1: r.headings.filter(h => h[0] === 1).length, headings: r.headings.length, skipLink: r.skipLink, landmarks: r.landmarks, imagesNoAlt: r.imagesNoAlt, canvases: r.canvases, svgs: r.svgs, live: r.live, tables: r.tables })),
  sceneText: by('scene-text', r => ({ page: r.page, scene: r.scene, panelWords: r.panelWords, figures: r.figures, worldHidden: r.worldHidden, hud: r.hud })),
  controls: by('controls', r => ({ page: r.page, lab: r.lab, quizOptsAreButtons: r.quizOptsAreButtons })),
  keyboardTab: tab,
  keyboardChapter: by('keyboard-chapter', r => { const o = { ...r }; delete o.at; delete o.check; return o; }),
  keyboardPaper2: by('keyboard-paper2', r => { const o = { ...r }; delete o.at; delete o.check; return o; }),
  targets: by('targets', r => ({ page: r.page, state: r.state, vp: r.vp, total: r.total, small: r.small, smallInline: r.smallInline, smallSpaced: r.smallSpaced, failing: r.smallFailing.length, examples: r.smallFailing.slice(0, 6) })),
  reflow: by('reflow', r => ({ page: r.page, vp: r.vp, mode: r.mode, overflowPx: r.overflowPx, wide: r.wide.slice(0, 3), clipped: r.clipped.slice(0, 4) })),
  contrast: by('contrast', r => ({ page: r.page, theme: r.theme, applied: r.appliedTheme, checked: r.checked, fails: r.fails, list: r.list.slice(0, 8) })),
  motion: by('motion', r => ({ page: r.page, reducedMotion: r.reducedMotion, running: r.running, infinite: r.infinite, lenis: r.lenis, homeLoaderVisibleAtStart: r.homeLoaderVisibleAtStart })),
  known: rows.filter(r => /kq6-360|reload-deep/.test(r.check)).map(r => { const o = { ...r }; delete o.at; return o; }),
};
mkdirSync(join(HERE, 'results'), { recursive: true });
writeFileSync(join(HERE, 'results/audit.json'), JSON.stringify(out, null, 1));
console.log(`a11y: ${rows.length} rows, ${out.scans} axe scans, ${out.axe.filter(r => r.kind === 'violations').length} rules violated, ${out.axe.filter(r => r.kind === 'incomplete').length} needing review`);
