// Painting for the world engine, shared by the paint worker and the main-thread fallback.
// Two kinds of texture, both equirectangular over a lon/lat box and stored bottom-up (row 0 = the box's south edge),
// so the engine uploads them with flipY off whatever the source (canvas, ImageBitmap or typed array):
//   paintTexture: land, dated state fills, Berlin, halos and areas, antialiased (a 2D canvas)
//   rasterIds:    the index + 1 of the country under each texel, no antialiasing, so the shader can colour by data
import { geoEquirectangular, geoPath, geoArea, geoTransform } from 'd3-geo';
import { feature } from 'topojson-client';

export const DEG = Math.PI / 180;
export const dayNum = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d) / 864e5; };

// Bloc palette, fixed for the whole site (plan 4.3). `focus` is the chapter accent.
export const PALETTE = {
  land: '#2a303d', natural: '#a3adc2', soviet: '#9b2c35', bloc: '#6e3a3c', west: '#2d4a6e', neutral: '#4b5160', focus: '#a084ee',
};
// Berlin's four sectors carry the flag of the power that held each, from 1945 to 1990 (West Berlin stayed under the
// three Western Allies, East Berlin was the Soviet sector), a glaze over a dark ground, named at a hand-placed point
const FLAG_ALPHA = 0.42, SECTOR_GROUND = '#151925'; // 0.72 read as paint (the Union Flag's red at chroma 60); 0.42 is an emblem in the night
const star = (ctx, x, y, r, inner = 0.382) => { // a five-pointed star, point up
  ctx.beginPath();
  for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, q = k % 2 ? r * inner : r; ctx.lineTo(x + Math.cos(a) * q, y + Math.sin(a) * q); }
  ctx.closePath();
};
const FLAGS = {
  // Stars and Stripes: 48 stars until 4 July 1959, 49 for a year, then 50
  us: { aspect: 1.9, at: [52.455, 13.255, 0.2, 0.27], draw(ctx, x, y, w, h, date) {
    for (let k = 0; k < 13; k++) { ctx.fillStyle = k % 2 ? '#ffffff' : '#b22234'; ctx.fillRect(x, y + k * h / 13, w, h / 13 + 0.5); }
    const cw = 0.76 * h, ch = 7 * h / 13, r = 0.0308 * h;
    ctx.fillStyle = '#3c3b6e'; ctx.fillRect(x, y, cw, ch);
    ctx.fillStyle = '#ffffff';
    const rows = date < '1959-07-04' ? Array(6).fill(8) : date < '1960-07-04' ? Array(7).fill(7) : [6, 5, 6, 5, 6, 5, 6, 5, 6];
    rows.forEach((n, i) => {
      const odd = rows.length === 9 && i % 2, cols = rows.length === 9 ? 6 : n;
      for (let k = 0; k < n; k++) { star(ctx, x + cw * ((k + (odd ? 1 : 0.5)) / cols), y + ch * (i + 0.5) / rows.length, r); ctx.fill(); }
    });
  } },
  // Union Flag, 2:1 (the red saltire drawn on the centre line)
  uk: { aspect: 2, at: [52.51, 13.2, 0.5, 0.5], draw(ctx, x, y, w, h) {
    const u = h / 30;
    ctx.fillStyle = '#012169'; ctx.fillRect(x, y, w, h);
    ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip(); ctx.lineCap = 'butt';
    for (const [lw, c] of [[6 * u, '#ffffff'], [2 * u, '#c8102e']]) {
      ctx.strokeStyle = c; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + w, y + h); ctx.moveTo(x + w, y); ctx.lineTo(x, y + h); ctx.stroke();
    }
    ctx.restore();
    for (const [t, c] of [[10 * u, '#ffffff'], [6 * u, '#c8102e']]) { ctx.fillStyle = c; ctx.fillRect(x + w / 2 - t / 2, y, t, h); ctx.fillRect(x, y + h / 2 - t / 2, w, t); }
  } },
  // Tricolore, 3:2
  fr: { aspect: 1.5, at: [52.585, 13.31, 0.5, 0.5], draw(ctx, x, y, w, h) {
    ['#0055a4', '#ffffff', '#ef4135'].forEach((c, k) => { ctx.fillStyle = c; ctx.fillRect(x + k * w / 3, y, w / 3 + 0.5, h); });
  } },
  // the Soviet flag, 2:1: red with the gold hammer and sickle under a gold-edged star near the hoist
  su: { aspect: 2, at: [52.53, 13.475, 0.135, 0.3], draw(ctx, x, y, w, h) {
    ctx.fillStyle = '#cc0000'; ctx.fillRect(x, y, w, h);
    const s = 0.24 * h, cx = x + 0.27 * h, cy = y + 0.36 * h, gold = '#ffd700';
    ctx.strokeStyle = gold; ctx.lineWidth = 0.014 * h; ctx.lineJoin = 'miter'; star(ctx, cx, y + 0.12 * h, 0.065 * h); ctx.stroke();
    ctx.lineCap = 'round'; ctx.lineWidth = 0.09 * s;
    // sickle: from the handle at the lower left, round the right and over the top, the tip to the upper left
    ctx.beginPath(); ctx.arc(cx + 0.04 * s, cy - 0.04 * s, 0.4 * s, 0.75 * Math.PI, -0.8 * Math.PI, true); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - 0.24 * s, cy + 0.24 * s); ctx.lineTo(cx - 0.42 * s, cy + 0.42 * s); ctx.stroke();
    // hammer: handle from lower left to upper right, head across its top
    ctx.beginPath(); ctx.moveTo(cx - 0.36 * s, cy + 0.36 * s); ctx.lineTo(cx + 0.16 * s, cy - 0.16 * s); ctx.stroke();
    ctx.lineWidth = 0.15 * s; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(cx + 0.06 * s, cy - 0.3 * s); ctx.lineTo(cx + 0.3 * s, cy - 0.06 * s); ctx.stroke();
  } },
};
const SECTOR_NAMES = { us: [52.43, 13.36, 'AMERICAN SECTOR'], uk: [52.49, 13.19, 'BRITISH SECTOR'], fr: [52.6, 13.31, 'FRENCH SECTOR'], su: [52.47, 13.52, 'SOVIET SECTOR'] };
// how much of a state colour covers the land beneath it; the focus colour is bright, so it is the thinnest glaze
const GLAZE = { focus: 0.4, soviet: 0.82, bloc: 0.8, west: 0.85, neutral: 0.8 }; // the focus is lit by its glow and outline, its fill stays faint
// water colours, with alpha 254/255 (see paintTexture): the shallow sea, and rivers and lakes
const SHELF = 'rgba(44, 52, 70, 0.996)', WATERC = 'rgba(76, 122, 172, 0.996)';
const lighter = hex => { const n = parseInt(hex.slice(1), 16), m = c => Math.round(c + (255 - c) * 0.38); return `rgb(${m(n >> 16)},${m((n >> 8) & 255)},${m(n & 255)})`; };
export const WALL_UP = '1961-08-13', WALL_DOWN = '1989-11-09';
// West Staaken, inside the British sector, was taken over by the GDR's police on 1 February 1951
const STAAKEN_GDR = '1951-02-01';

const ringFix = poly => (geoArea(poly) > 2 * Math.PI ? { type: 'Polygon', coordinates: poly.coordinates.map(r => r.slice().reverse()) } : poly);
// d3 wants clockwise outer rings; simplification can leave a few the other way round, which would flood the globe
export const upright = f => {
  const g = f.geometry; if (!g) return f;
  const fix = c => (geoArea({ type: 'Polygon', coordinates: c }) > 2 * Math.PI ? c.map(r => r.slice().reverse()) : c);
  if (g.type === 'Polygon') f.geometry = { type: 'Polygon', coordinates: fix(g.coordinates) };
  else if (g.type === 'MultiPolygon') f.geometry = { type: 'MultiPolygon', coordinates: g.coordinates.map(fix) };
  return f;
};

// Features from a topology: countries in topology order (a country's id in the id texture is its index + 1), land, Berlin.
export function featuresOf(data) {
  const obj = data.objects.cshapes || data.objects.countries;
  const countries = feature(data, obj).features.map(f => upright({
    ...f, from: f.properties.from ? dayNum(f.properties.from) : -Infinity, to: f.properties.to ? dayNum(f.properties.to) : Infinity,
  }));
  const berlin = data.objects.sectors ? {
    sectors: feature(data, data.objects.sectors).features.map(upright),
    wall: feature(data, data.objects.wall).features, strip: feature(data, data.objects.strip).features.map(upright),
    staaken: data.objects.staaken ? feature(data, data.objects.staaken).features.map(upright) : [],
  } : null;
  // water (borders.json only): rivers { r: rank }, lakes { r: rank }, and sea deeper than 200 m around Europe
  const water = data.objects.rivers ? {
    rivers: feature(data, data.objects.rivers).features, lakes: feature(data, data.objects.lakes).features.map(upright),
    deep: feature(data, data.objects.deep).features.map(upright), box: data.waterBox || [-26, 33, 50, 72],
  } : null;
  return { countries, land: feature(data, data.objects.land), berlin, water };
}
export const countriesAt = (countries, date) => {
  const d = dayNum(date === 'modern' || !date ? '2000-01-01' : date);
  return countries.filter(f => f.from <= d && d < f.to);
};

export function paintTexture(canvas, feats, map, box = [-180, -90, 180, 90], texelCss = 0) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.setTransform(1, 0, 0, -1, 0, H); // bottom-up, see the header
  // the world: d3's equirectangular (it cuts at the antimeridian); a detail box: lon and lat scaled separately, so its
  // texels can be square on the ground (see textureSize in view.js)
  const world = box[2] - box[0] >= 360;
  const k = W / ((box[2] - box[0]) * DEG), sx = W / (box[2] - box[0]), sy = H / (box[3] - box[1]);
  const proj = world ? geoEquirectangular().scale(k).translate([-k * box[0] * DEG, k * box[3] * DEG]).precision(0.1)
    : geoTransform({ point(lon, lat) { this.stream.point((lon - box[0]) * sx, (box[3] - lat) * sy); } });
  const path = geoPath(proj, ctx);
  const fill = map.fill || {};
  const date = map.borders;
  const countries = countriesAt(feats.countries, date);
  // ground size of one texel, which decides how much water detail is worth drawing; css: CSS px per texel (detail only)
  const texelKm = (box[2] - box[0]) * 111.32 * Math.cos((box[1] + box[3]) / 2 * DEG) / W, css = world ? 0 : (texelCss || 0.55);
  const wat = !world && feats.water;
  const rankMax = texelKm < 0.05 ? 11 : texelKm < 0.15 ? 9 : texelKm < 0.4 ? 7 : texelKm < 1 ? 6 : texelKm < 2.5 ? 5 : 4;
  ctx.clearRect(0, 0, W, H);
  // Water is painted opaque in its final colour but with alpha 254/255, which tells the shader it is water (lit, never
  // shaded by terrain); partly transparent paint would come out of the GPU upload multiplied by its own alpha.
  // The continental shelf: a lighter sea, then the deeper sea cut back out (only where the bathymetry covers the box).
  const wb = wat && wat.box;
  if (wat && box[0] < wb[2] && box[2] > wb[0] && box[1] < wb[3] && box[3] > wb[1]) {
    // over the part of the box the bathymetry covers, in the same coordinates as the paths (y from the north edge)
    const x0 = Math.max(0, (wb[0] - box[0]) * sx), x1 = Math.min(W, (wb[2] - box[0]) * sx);
    const y0 = Math.max(0, (box[3] - wb[3]) * sy), y1 = Math.min(H, (box[3] - wb[1]) * sy);
    ctx.fillStyle = SHELF; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    ctx.globalCompositeOperation = 'destination-out';
    for (const f of wat.deep) { ctx.beginPath(); path(f); ctx.fill('evenodd'); } // even-odd: holes stay holes, however they are wound
    ctx.globalCompositeOperation = 'source-over';
  }
  // a natural globe (no borders, Geography) has lighter land, so relief and the coast carry the map without fills
  ctx.fillStyle = date === 'none' ? PALETTE.natural : PALETTE.land;
  ctx.beginPath(); path(feats.land); ctx.fill('evenodd');
  ctx.save(); ctx.clip('evenodd'); // fills stay on the land, so the 1:10m coastline stays the edge
  // fills are a glaze over the land, not a lid: the land shows through (so the relief does), and a lighter band just
  // inside each filled state's edge says where it ends, about two screen pixels wide in a detail texture
  const edge = world ? 1.5 : 3;
  for (const f of countries) {
    const state = fill[f.properties.key];
    if (!state) continue;
    const c = PALETTE[state] || PALETTE.land;
    ctx.globalAlpha = GLAZE[state] ?? 0.8; ctx.fillStyle = c;
    ctx.beginPath(); path(f); ctx.fill();
    ctx.save(); ctx.clip(); ctx.globalAlpha = 0.5; ctx.strokeStyle = lighter(c); ctx.lineWidth = edge * 2; ctx.lineJoin = 'round'; ctx.stroke(); ctx.restore();
  }
  ctx.globalAlpha = 1;
  // Berlin at city scale: each sector a dark ground with its power's flag over it, laid before the water so the Spree
  // and the Havel lakes stay on top. Each flag is the smallest that covers the sector's bounds, slid within its slack so
  // its point `at` (the canton, the emblem, or the middle) comes as close as it can to a chosen place in the sector
  if (map.city === 'berlin' && feats.berlin) for (const f of feats.berlin.sectors) {
    const flag = FLAGS[f.properties.sector], [[x0, y0], [x1, y1]] = path.bounds(f);
    const [lat, lon, ax, ay] = flag.at, px = (lon - box[0]) * sx, py = (box[3] - lat) * sy;
    const fw = Math.max(x1 - x0, (y1 - y0) * flag.aspect), fh = fw / flag.aspect;
    const fx = Math.min(x0, Math.max(x1 - fw, px - ax * fw)), fy = Math.min(y0, Math.max(y1 - fh, py - ay * fh));
    // from February 1951 West Staaken is cut out of the British sector (even-odd: a second ring inside makes a hole)
    const cutOut = f.properties.sector === 'uk' && date >= STAAKEN_GDR ? feats.berlin.staaken : [];
    ctx.save(); ctx.beginPath(); path(f); for (const g of cutOut) path(g); ctx.clip('evenodd');
    ctx.fillStyle = SECTOR_GROUND; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    ctx.globalAlpha = FLAG_ALPHA; flag.draw(ctx, fx, fy, fw, fh, date);
    ctx.restore();
  }
  ctx.restore();
  // lakes and rivers: cut out of the land, then painted as water (alpha 254, as the shelf); a river is wider the higher
  // its rank, about 0.8–2.2 screen pixels
  if (wat) {
    const lakes = wat.lakes.filter(f => f.properties.r <= rankMax), rivers = wat.rivers.filter(f => f.properties.r <= rankMax);
    const draw = () => {
      for (const f of lakes) { ctx.beginPath(); path(f); ctx.fill('evenodd'); }
      ctx.lineJoin = ctx.lineCap = 'round';
      for (const f of rivers) { const r = f.properties.r; ctx.lineWidth = (r <= 3 ? 2.2 : r <= 6 ? 1.6 : r <= 9 ? 1.1 : 0.8) / css; ctx.beginPath(); path(f); ctx.stroke(); }
    };
    ctx.globalCompositeOperation = 'destination-out'; draw();
    ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = ctx.strokeStyle = WATERC; draw();
  }
  const focus = map.focus || [];
  if (focus.length) {
    ctx.save(); ctx.strokeStyle = PALETTE.focus; ctx.globalAlpha = 0.85; ctx.lineWidth = Math.max(1, W / 2600); ctx.lineJoin = 'round';
    for (const f of countries) if (focus.includes(f.properties.key)) { ctx.beginPath(); path(f); ctx.stroke(); }
    ctx.restore();
  }
  // Berlin, over its flags: the border strip, the sector lines and the names
  const city = map.city === 'berlin' && feats.berlin;
  if (city) {
    if (date >= WALL_UP) {
      ctx.fillStyle = 'rgba(232, 226, 255, 0.34)';
      for (const f of feats.berlin.strip) { ctx.beginPath(); path(f); ctx.fill(); }
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)'; ctx.lineWidth = Math.max(1, W / 2400);
    for (const f of feats.berlin.sectors) { ctx.beginPath(); path(f); ctx.stroke(); }
    // the names, about 12 CSS px high where the camera holds (detail textures only), smaller where a sector is too
    // narrow on screen for them (a phone at city scale): a mono capital with its spacing is ~0.72 of the size wide
    if (!world) {
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.92)'; ctx.shadowColor = 'rgba(6, 7, 12, 0.85)';
      for (const f of feats.berlin.sectors) {
        const [lat, lon, name] = SECTOR_NAMES[f.properties.sector], x = (lon - box[0]) * sx, y = (box[3] - lat) * sy;
        if (x < 0 || x > W || y < 0 || y > H) continue;
        const [[x0], [x1]] = path.bounds(f), size = Math.min(12 / css, 0.75 * (x1 - x0) / (0.72 * name.length));
        if (size * css < 6) continue; // under 6 CSS px a name is noise
        ctx.font = `500 ${size.toFixed(1)}px "Plex Mono", ui-monospace, Menlo, monospace`;
        ctx.letterSpacing = `${(size * 0.12).toFixed(1)}px`; ctx.shadowBlur = size * 0.6;
        ctx.fillText(name, x, y);
      }
      ctx.letterSpacing = '0px'; ctx.shadowBlur = 0; ctx.shadowColor = 'transparent';
    }
  } else if (box[2] - box[0] < 360) {
    // an inner glow in the focus countries so the eye lands on them; kept inside the border, so it never spills onto a
    // neighbour (detail texture only: blur is expensive)
    const glow = Math.max(4, Math.round(Math.max(W, H) / 220));
    for (const f of countries) if (fill[f.properties.key] === 'focus' || focus.includes(f.properties.key)) {
      ctx.save(); ctx.beginPath(); path(f); ctx.clip();
      ctx.globalCompositeOperation = 'lighter'; ctx.filter = `blur(${glow}px)`; ctx.globalAlpha = 0.35;
      ctx.strokeStyle = PALETTE.focus; ctx.lineWidth = glow * 2; ctx.stroke(); ctx.restore();
    }
  }
  // extra areas drawn last (an optional hand-drawn shape over everything)
  for (const a of map.areas || []) {
    const ring = a.points.map(([lat, lon]) => [lon, lat]);
    if (ring[0][0] !== ring.at(-1)[0] || ring[0][1] !== ring.at(-1)[1]) ring.push(ring[0]);
    ctx.fillStyle = PALETTE[a.fill] || PALETTE.west;
    ctx.beginPath(); path(ringFix({ type: 'Polygon', coordinates: [ring] })); ctx.fill();
  }
}

// Country ids by scanline fill (even-odd per polygon, so lakes and enclaves stay holes). RGBA8: id = R + 256 G.
// Natural Earth cuts polygons at the antimeridian, so a plain lon/lat to pixel map needs no clipping.
export function rasterIds(feats, date, box, W, H) {
  const out = new Uint8Array(W * H * 4);
  const sx = W / (box[2] - box[0]), sy = H / (box[3] - box[1]);
  const d = dayNum(date === 'modern' || !date ? '2000-01-01' : date);
  feats.countries.forEach((f, n) => {
    if (!(f.from <= d && d < f.to) || !f.geometry) return;
    const id = n + 1, r = id & 255, g = id >> 8;
    const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [];
    for (const poly of polys) {
      // edges in pixel space with y0 < y1, sorted by y0; an active list sweeps the rows
      const edges = [];
      let lo = Infinity, hi = -Infinity, left = Infinity, right = -Infinity;
      for (const ring of poly) for (let i = 1; i < ring.length; i++) {
        const ax = (ring[i - 1][0] - box[0]) * sx, ay = (ring[i - 1][1] - box[1]) * sy;
        const bx = (ring[i][0] - box[0]) * sx, by = (ring[i][1] - box[1]) * sy;
        if (ax < left) left = ax; if (ax > right) right = ax;
        if (ay === by) continue;
        const e = ay < by ? [ay, by, ax, (bx - ax) / (by - ay)] : [by, ay, bx, (ax - bx) / (ay - by)];
        edges.push(e); if (e[0] < lo) lo = e[0]; if (e[1] > hi) hi = e[1];
      }
      if (!edges.length || right < 0 || left > W || hi < 0 || lo > H) continue;
      edges.sort((a, b) => a[0] - b[0]);
      const r0 = Math.max(0, Math.ceil(lo - 0.5)), r1 = Math.min(H - 1, Math.floor(hi - 0.5));
      let next = 0; const active = []; const xs = [];
      for (let row = r0; row <= r1; row++) {
        const yc = row + 0.5;
        while (next < edges.length && edges[next][0] <= yc) active.push(edges[next++]);
        xs.length = 0;
        for (let k = active.length - 1; k >= 0; k--) {
          const e = active[k];
          if (e[1] <= yc) { active[k] = active[active.length - 1]; active.pop(); continue; }
          if (e[0] <= yc) xs.push(e[2] + (yc - e[0]) * e[3]);
        }
        xs.sort((a, b) => a - b);
        const base = row * W * 4;
        for (let k = 0; k + 1 < xs.length; k += 2) {
          const x0 = Math.max(0, Math.ceil(xs[k] - 0.5)), x1 = Math.min(W - 1, Math.floor(xs[k + 1] - 0.5));
          for (let x = x0; x <= x1; x++) { const o = base + x * 4; out[o] = r; out[o + 1] = g; out[o + 3] = 255; }
        }
      }
    }
  });
  return out;
}

// One paint job, run in the worker or on the main thread: the canvas factory decides which.
export function runJob(feats, job, makeCanvas) {
  const t0 = performance.now();
  if (job.kind === 'ids') {
    const ids = rasterIds(feats, job.date, job.box, job.W, job.H);
    return { ids, ms: performance.now() - t0 };
  }
  const c = makeCanvas(job.W, job.H);
  paintTexture(c, feats, job.map, job.box, job.css);
  return { canvas: c, ms: performance.now() - t0 };
}
