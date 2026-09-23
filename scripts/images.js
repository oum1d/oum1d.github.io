// Снимки экранов из portfolio-shots → лёгкие webp рядом с сайтом.
// Запуск: npm run images
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import sharp from 'sharp';
import { WORKS } from '../content/works.js';

const SRC = 'C:/Проэкты/portfolio-shots';
const OUT = 'assets/img/works';

// Две ширины: карточка на главной обходится узкой, страница проекта берёт широкую.
const SIZES = [{ w: 760, suffix: '' }, { w: 1440, suffix: '@2x' }];

let made = 0;
const missing = [];

for (const work of WORKS) {
  await mkdir(`${OUT}/${work.slug}`, { recursive: true });
  for (const file of [work.hero, ...work.gallery]) {
    const from = `${SRC}/${work.shots}/${file}`;
    if (!existsSync(from)) { missing.push(from); continue; }
    const base = file.replace(/\.[a-z]+$/, '');
    for (const { w, suffix } of SIZES) {
      const to = `${OUT}/${work.slug}/${base}${suffix}.webp`;
      const img = sharp(from);
      const meta = await img.metadata();
      await writeFile(to, await img
        .resize({ width: Math.min(w, meta.width), withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer());
      made++;
    }
  }
}

console.log(`Готово: ${made} файлов`);
if (missing.length) {
  console.log(`\nНе нашлись (поправь content/works.js):`);
  for (const m of missing) console.log('  ' + m);
}
