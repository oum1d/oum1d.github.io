// Собирает сайт из данных и текстов: главная, восемь страниц работ, «обо мне».
// Страницы лежат готовыми файлами, поэтому GitHub Pages отдаёт их как есть.
// Запуск: npm run build
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import { WORKS } from '../content/works.js';
import { CASES } from '../content/cases.js';
import { SITE } from '../content/site.js';

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// sizes нужен честный: иначе браузер берёт узкий файл и растягивает его на всю ширину.
const img = (slug, file, { alt = '', loading = 'lazy', sizes = '(max-width: 54rem) 100vw, 40rem', zoom = false } = {}) => {
  const base = file.replace(/\.[a-z]+$/, '');
  const src = `/assets/img/works/${slug}/${base}`;
  // Телефонный кадр высокий и узкий — в галерее показываем его целиком, а не режем
  const cls = /mobile/.test(base) ? ' class="is-phone"' : '';
  // data-zoom — адрес крупного файла: по нему скрипт открывает снимок во весь экран
  return `<img${cls} src="${src}.webp" srcset="${src}.webp 1440w, ${src}@2x.webp 2400w"
    sizes="${sizes}" alt="${esc(alt)}" loading="${loading}" decoding="async"${zoom ? ` data-zoom="${src}@2x.webp"` : ''}>`;
};

function page({ title, description, path, body, active = '', scripts = '' }) {
  const url = SITE.origin + path;
  const nav = [['/#work', 'Work', 'work'], ['/about/', 'About', 'about'], [`mailto:${SITE.email}`, 'Contact', '']]
    .map(([href, label, key]) =>
      `<a href="${href}"${key && key === active ? ' aria-current="page"' : ''}>${label}</a>`).join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/figtree-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.origin}/assets/img/og.jpg">
<meta name="twitter:card" content="summary_large_image">
${scripts}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="head">
  <div class="page head__row">
    <a class="head__name" href="/">${esc(SITE.name)}</a>
    <nav class="head__nav" aria-label="Main">${nav}</nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="foot">
  <div class="page foot__row">
    <span>© 2026 ${esc(SITE.name)} · ${esc(SITE.city)}</span>
    <span><a href="mailto:${SITE.email}">${SITE.email}</a> · <a href="${SITE.behance}">Behance</a> · <a href="${SITE.github}">GitHub</a></span>
  </div>
</footer>
</body>
</html>
`;
}

const tags = list => list.length
  ? `<ul class="tags">${list.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : '';

const metrics = list => list.length
  ? `<ul class="metrics">${list.map(([n, l]) => `<li><strong>${esc(n)}</strong><span>${esc(l)}</span></li>`).join('')}</ul>` : '';

function homeCard(work, index) {
  return `<article class="work">
  <figure class="work__shot">
    <a href="/work/${work.slug}/">${img(work.slug, work.hero, {
      alt: `${work.title} — ${work.kind}`, loading: index < 2 ? 'eager' : 'lazy',
    })}</a>
  </figure>
  <div>
    <p class="work__year">${esc(work.year)}</p>
    <h3 class="work__title"><a href="/work/${work.slug}/">${esc(work.title)}</a></h3>
    <p class="work__kind">${esc(work.kind)}</p>
    <p class="work__lead">${esc(work.lead)}</p>
    ${tags(work.tags)}
    <a class="work__more" href="/work/${work.slug}/">Read the case →</a>
  </div>
</article>`;
}

async function home() {
  const body = `<section class="hero">
  <div class="page">
    <p class="hero__eyebrow">${esc(SITE.role)} · ${esc(SITE.city)}</p>
    <h1 class="hero__title">${SITE.heroTitle}</h1>
    <p class="hero__lead">${esc(SITE.heroLead)}</p>
    <div class="btn-row">
      <a class="btn" href="#work">See the work</a>
      <a class="btn btn--ghost" href="mailto:${SITE.email}">Start a project</a>
    </div>
    <p class="hero__meta"><span>${WORKS.length} projects</span><span>Two to three languages per site</span><span>Built, tested and published</span></p>
  </div>
</section>

<section class="section" id="work">
  <div class="page">
    <div class="section__head">
      <h2>Selected work</h2>
      <p class="section__count">${WORKS.length} projects · 2026</p>
    </div>
    <div class="works">${WORKS.map(homeCard).join('\n')}</div>
  </div>
</section>

<section class="about">
  <div class="page about__grid">
    <h2>How I work</h2>
    <div>
      ${SITE.aboutShort.map(p => `<p>${esc(p)}</p>`).join('\n      ')}
      <div class="btn-row"><a class="btn btn--ghost" href="/about/">More about me</a></div>
    </div>
  </div>
</section>

<section class="contact">
  <div class="page">
    <h2>Have a project in mind?</h2>
    <p>Tell me what your business does and what the site should achieve. I will reply within a day with questions, a plan and a price.</p>
    <div class="btn-row"><a class="btn" href="mailto:${SITE.email}">${SITE.email}</a></div>
  </div>
</section>`;

  await writeFile('index.html', page({
    title: `${SITE.name} — ${SITE.role} in ${SITE.city}`,
    description: SITE.heroLead,
    path: '/', body, active: 'work',
  }));
}

async function casePage(work, index) {
  const text = CASES[work.slug];
  if (!text) throw new Error(`Нет текста кейса для «${work.slug}» — добавь его в content/cases.js`);
  const next = WORKS[(index + 1) % WORKS.length];

  const links = [
    work.live && `<a class="btn" href="${work.live}" rel="noopener">Open the site</a>`,
    work.code && `<a class="btn btn--ghost" href="${work.code}" rel="noopener">View the code</a>`,
  ].filter(Boolean).join('');

  const body = `<article class="case">
  <div class="page">
    <a class="case__back" href="/#work">← All work</a>
    <h1 class="case__title">${esc(work.title)}</h1>
    <p class="case__kind">${esc(work.kind)}</p>
    <p class="case__lead">${esc(work.lead)}</p>
    ${tags(work.tags)}
    <div class="btn-row">${links}</div>
    ${metrics(work.metrics)}
    <figure class="case__hero">${img(work.slug, work.hero, {
      alt: `${work.title} — home page`, loading: 'eager', sizes: '(max-width: 54rem) 100vw, 74rem', zoom: true,
    })}</figure>
    <div class="prose">${marked.parse(text)}</div>
    <div class="gallery">
      ${work.gallery.map(f => `<figure>${img(work.slug, f, {
        alt: `${work.title} — screen`, sizes: '(max-width: 54rem) 100vw, 34rem', zoom: true,
      })}</figure>`).join('\n      ')}
    </div>
  </div>
</article>

<section class="next">
  <div class="page">
    <p class="small muted">Next project</p>
    <a href="/work/${next.slug}/">${esc(next.title)} →</a>
  </div>
</section>`;

  await mkdir(`work/${work.slug}`, { recursive: true });
  await writeFile(`work/${work.slug}/index.html`, page({
    title: `${work.title} — ${work.kind} · ${SITE.name}`,
    description: work.lead,
    path: `/work/${work.slug}/`, body, active: 'work',
    scripts: '<script src="/assets/js/lightbox.js" defer></script>',
  }));
}

async function about() {
  const text = await readFile('content/about.md', 'utf8');
  const body = `<section class="case">
  <div class="page">
    <h1 class="case__title">About</h1>
    <div class="prose">${marked.parse(text)}</div>
    <div class="btn-row"><a class="btn" href="mailto:${SITE.email}">${SITE.email}</a></div>
  </div>
</section>`;
  await mkdir('about', { recursive: true });
  await writeFile('about/index.html', page({
    title: `About — ${SITE.name}`,
    description: SITE.aboutShort[0],
    path: '/about/', body, active: 'about',
  }));
}

async function seo() {
  const urls = ['/', '/about/', ...WORKS.map(w => `/work/${w.slug}/`)];
  await writeFile('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${SITE.origin}${u}</loc></url>`).join('\n')}
</urlset>
`);
  await writeFile('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE.origin}/sitemap.xml\n`);
}

await home();
await Promise.all(WORKS.map(casePage));
await about();
await seo();
console.log(`Собрано: главная, ${WORKS.length} страниц работ, «обо мне», карта сайта`);
