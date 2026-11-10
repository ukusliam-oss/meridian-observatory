// Town lights for the chapters' night side: node tools/build-towns.mjs → assets/data/towns.json
// Source: Natural Earth 1:10m populated places (simple), public domain, in tools/.cache/ne/ (from naciscdn.org).
// Kept: places of at least 50,000 people today (pop_max), as [lon, lat, people in thousands], rounded. The lights are a
// representation of where towns are, sized by today's populations, not a record of the lights of any past year: a
// chapter that shows them at night says so in its note.
import { writeFileSync } from 'node:fs';
import { open } from 'shapefile';

const src = await open('tools/.cache/ne/ne_10m_populated_places_simple/ne_10m_populated_places_simple.shp');
const out = [];
for (let r = await src.read(); !r.done; r = await src.read()) {
  const p = r.value.properties, [lon, lat] = r.value.geometry.coordinates;
  if (p.pop_max >= 50000) out.push([+lon.toFixed(3), +lat.toFixed(3), Math.round(p.pop_max / 1000)]);
}
out.sort((a, b) => b[2] - a[2]);
writeFileSync('assets/data/towns.json', JSON.stringify(out));
console.log(`towns.json: ${out.length} places, ${(JSON.stringify(out).length / 1024).toFixed(0)} KB`);
