// Картинка для ссылок в мессенджерах: четыре работы на бумажном фоне.
// Без текста — значит не зависит от шрифтов, установленных на машине.
// Запуск: node scripts/og.js
import sharp from 'sharp';
import { WORKS } from '../content/works.js';

const W = 1200, H = 630, GAP = 16, PAD = 24;
const cellW = Math.round((W - PAD * 2 - GAP) / 2);
const cellH = Math.round((H - PAD * 2 - GAP) / 2);

const picked = ['widnia', 'roy', 'takt', 'zatvor']
  .map(slug => WORKS.find(w => w.slug === slug))
  .filter(Boolean);

const tiles = await Promise.all(picked.map(async (work, i) => {
  const base = work.hero.replace(/\.[a-z]+$/, '');
  const buf = await sharp(`assets/img/works/${work.slug}/${base}@2x.webp`)
    .resize(cellW, cellH, { fit: 'cover', position: 'top' })
    .toBuffer();
  return {
    input: buf,
    left: PAD + (i % 2) * (cellW + GAP),
    top: PAD + Math.floor(i / 2) * (cellH + GAP),
  };
}));

await sharp({ create: { width: W, height: H, channels: 3, background: '#f5f2ec' } })
  .composite(tiles)
  .jpeg({ quality: 84, progressive: true })
  .toFile('assets/img/og.jpg');

console.log('assets/img/og.jpg — 1200×630');
