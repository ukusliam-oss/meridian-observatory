// Height patches for the History and Economics chapters' low shots (scene camera close to the ground): node
// tools/build-ground.mjs → assets/data/ground/{site}.png + .json, heights packed in RGB as whole metres + 1000, the
// same format and the same reader (layers.js loadDem) as Geography's landscapes. Unlike those, a ground patch is not
// coloured on its own: the engine raises the globe's own painted surface on it (src/world/engine.js, ground3d).
// Source: Copernicus DEM GLO-30 (© DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under
// COPERNICUS by the European Union and ESA), only each patch's window read from the 1° COGs on AWS by range requests,
// at the coarsest overview with 1.5 source pixels per output pixel, cached per patch in tools/.cache/ground/.
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { fromUrl } from 'geotiff';
import { PNG } from 'pngjs';

const CACHE = 'tools/.cache/ground', OUT = 'assets/data';
mkdirSync(CACHE, { recursive: true }); mkdirSync(`${OUT}/ground`, { recursive: true });

// center [lat, lon], half-size [lat°, lon°], output width in pixels
const SITES = {
  // KQ6 4 November 1956: from Budapest north-east along the road from the border, the Mátra and Bükk hills beyond
  hungary: { center: [47.85, 20.6], half: [1.15, 2.35], size: 1100 },
};
const ONLY = process.env.SITES ? process.env.SITES.split(',') : null;
for (const [name, s] of Object.entries(SITES).filter(([k]) => !ONLY || ONLY.includes(k))) {
  const [clat, clon] = s.center, [hl, hn] = s.half, box = [clon - hn, clat - hl, clon + hn, clat + hl];
  const W = s.size, H = Math.round(s.size * hl / (hn * Math.cos(clat * Math.PI / 180)));
  // per 1° tile only the window this site needs, read by range requests and cached per site
  const tiles = new Map();
  const tileOf = async (lat, lon) => {
    const key = `${lat}_${lon}`; if (tiles.has(key)) return tiles.get(key);
    const n = `Copernicus_DSM_COG_10_${lat < 0 ? 'S' : 'N'}${String(Math.abs(lat)).padStart(2, '0')}_00_${lon < 0 ? 'W' : 'E'}${String(Math.abs(lon)).padStart(3, '0')}_00_DEM`;
    const file = `${CACHE}/${name}_${n}.f32`;
    let t;
    if (existsSync(file)) { const b = readFileSync(file); t = { x0: b.readInt32LE(0), y0: b.readInt32LE(4), w: b.readUInt32LE(8), h: b.readUInt32LE(12), tw: b.readUInt32LE(16), th: b.readUInt32LE(20), d: new Float32Array(b.buffer.slice(b.byteOffset + 24)) }; }
    else {
      // the coarsest overview that still has at least 1.5 source pixels per output pixel: a wide site (Mauna Loa) needs
      // a quarter of the full resolution, so it downloads a sixteenth of the data
      const need = 1.5 * W / (box[2] - box[0]); // source pixels per degree of longitude
      let im = null;
      for (let k = 0; k < 4 && !im; k++) { // opening the file can fail too
        try {
          const tiff = await fromUrl(`https://copernicus-dem-30m.s3.amazonaws.com/${n}/${n}.tif`);
          im = await tiff.getImage(0);
          for (let j = 1; j < await tiff.getImageCount(); j++) { const o = await tiff.getImage(j); if (o.getWidth() >= need) im = o; else break; }
        } catch { im = null; console.log(`ground ${name}: retry opening ${k + 1}`); await new Promise(r => setTimeout(r, 3000 * (k + 1))); }
      }
      if (!im) throw new Error(`dem ${name}: ${n} could not be opened`);
      const tw = im.getWidth(), th = im.getHeight();
      const px = l => Math.floor((l - lon) * tw), py = l => Math.floor((lat + 1 - l) * th);
      const x0 = Math.max(0, px(box[0]) - 2), x1 = Math.min(tw, px(box[2]) + 3), y0 = Math.max(0, py(box[3]) - 2), y1 = Math.min(th, py(box[1]) + 3);
      let d = null;
      for (let k = 0; k < 4 && !d; k++) { // range requests from here fail now and then: try again
        try { d = Float32Array.from(await im.readRasters({ window: [x0, y0, x1, y1], interleave: true })); }
        catch (e) { console.log(`ground ${name}: retry ${k + 1}`); await new Promise(r => setTimeout(r, 3000 * (k + 1))); }
      }
      if (!d) throw new Error(`dem ${name}: ${n} failed`);
      t = { x0, y0, w: x1 - x0, h: y1 - y0, tw, th, d };
      const head = Buffer.alloc(24); [t.x0, t.y0].forEach((v, k) => head.writeInt32LE(v, k * 4)); [t.w, t.h, t.tw, t.th].forEach((v, k) => head.writeUInt32LE(v, 8 + k * 4));
      writeFileSync(file, Buffer.concat([head, Buffer.from(t.d.buffer)]));
    }
    tiles.set(key, t); return t;
  };
  const png = new PNG({ width: W, height: H });
  let lo = Infinity, hi = -Infinity;
  for (let r = 0; r < H; r++) {
    const lat = box[3] - (r + 0.5) / H * (box[3] - box[1]);
    for (let c = 0; c < W; c++) {
      const lon = box[0] + (c + 0.5) / W * (box[2] - box[0]);
      const t = await tileOf(Math.floor(lat), Math.floor(lon));
      const fx = (lon - Math.floor(lon)) * t.tw - 0.5 - t.x0, fy = (Math.floor(lat) + 1 - lat) * t.th - 0.5 - t.y0;
      const x0 = Math.max(0, Math.min(t.w - 2, Math.floor(fx))), y0 = Math.max(0, Math.min(t.h - 2, Math.floor(fy))), ax = Math.max(0, Math.min(1, fx - x0)), ay = Math.max(0, Math.min(1, fy - y0));
      const v = (x, y) => Math.max(-50, t.d[y * t.w + x]);
      const h = (v(x0, y0) * (1 - ax) + v(x0 + 1, y0) * ax) * (1 - ay) + (v(x0, y0 + 1) * (1 - ax) + v(x0 + 1, y0 + 1) * ax) * ay;
      const q = Math.round(h + 1000), o = (r * W + c) * 4;
      png.data[o] = q >> 16; png.data[o + 1] = (q >> 8) & 255; png.data[o + 2] = q & 255; png.data[o + 3] = 255;
      lo = Math.min(lo, h); hi = Math.max(hi, h);
    }
  }
  writeFileSync(`${OUT}/ground/${name}.png`, PNG.sync.write(png));
  writeFileSync(`${OUT}/ground/${name}.json`, JSON.stringify({ box: box.map(v => +v.toFixed(5)), width: W, height: H, min: Math.round(lo), max: Math.round(hi), source: 'Copernicus DEM GLO-30' }));
  console.log(`ground ${name}: ${W}x${H}, ${Math.round(lo)}–${Math.round(hi)} m`);
}
