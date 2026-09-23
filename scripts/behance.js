// Готовит папку C:\Проэкты\behance: картинки нужного размера и текст к каждому проекту.
// Behance показывает картинки шириной 1400 px и увеличивает до 2800 — выгружаем 2800.
// Запуск: node scripts/behance.js
import { mkdir, writeFile, readdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import sharp from 'sharp';
import { WORKS } from '../content/works.js';
import { CASES } from '../content/cases.js';

const SRC = 'C:/Проэкты/portfolio-shots';
const OUT = 'C:/Проэкты/behance';
const WIDTH = 2800;

// Общие метки: их Behance использует для поиска, свои добавляем из проекта
const COMMON = ['web design', 'ui ux', 'website', 'responsive'];

// Из текста кейса делаем описание для Behance: markdown там не работает,
// поэтому убираем разметку и оставляем абзацы.
function plain(md) {
  return md
    .replace(/^##\s+(.+)$/gm, (_, t) => t.toUpperCase())
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .split('\n\n')
    .map(p => p.replace(/\n/g, ' ').trim())
    .filter(Boolean)
    .join('\n\n');
}

let images = 0;
const missing = [];

for (const work of WORKS) {
  const dir = `${OUT}/${work.slug}`;
  await mkdir(dir, { recursive: true });

  // Чистим прошлую выгрузку: после смены состава остаются файлы со старыми
  // номерами, и в Behance уедут дубли. Обложку не трогаем — её делает другой скрипт.
  for (const f of await readdir(dir)) {
    if (/^\d\d-.+\.jpg$/.test(f) && f !== '01-cover.jpg') await unlink(`${dir}/${f}`);
  }

  // Порядок важен: Behance показывает картинки одну под другой, как в рассказе
  const order = [work.hero, ...work.gallery];
  for (const [i, file] of order.entries()) {
    const from = `${SRC}/${work.shots}/${file}`;
    if (!existsSync(from)) { missing.push(from); continue; }
    const name = file.replace(/\.[a-z]+$/, '');
    const to = `${dir}/${String(i + 2).padStart(2, '0')}-${name}.jpg`;
    const meta = await sharp(from).metadata();
    await writeFile(to, await sharp(from)
      .resize({ width: Math.min(WIDTH, meta.width), withoutEnlargement: true })
      .jpeg({ quality: 88, progressive: true, chromaSubsampling: '4:4:4' })
      .toBuffer());
    images++;
  }

  const tags = [...new Set([...work.tags.map(t => t.toLowerCase()), ...COMMON])].slice(0, 10);

  const text = `# ${work.title} — ${work.kind}

## Название проекта (Project Title)

${work.title} — ${work.kind}

## Описание (Description)

Concept project. The company is invented, the problem is real.

${work.lead}

${plain(CASES[work.slug])}

${work.live ? `Live site: ${work.live}` : ''}
${work.code ? `Code: ${work.code}` : ''}
Portfolio: https://oum1d.github.io/work/${work.slug}/

## Метки (Tags) — вставлять через запятую

${tags.join(', ')}

## Порядок картинок

01-cover.jpg — обложка (Cover)
${order.map((f, i) => `${String(i + 2).padStart(2, '0')}-${f.replace(/\.[a-z]+$/, '')}.jpg`).join('\n')}
`;

  await writeFile(`${dir}/text.md`, text, 'utf8');
}

console.log(`Картинок: ${images}, проектов: ${WORKS.length} → ${OUT}`);
if (missing.length) {
  console.log('Не нашлись:');
  for (const m of missing) console.log('  ' + m);
}
