# oum1d.github.io — сайт-портфолио Omid Naghavi

Статический сайт: главная с восемью работами, страница на каждую работу, «обо мне».
Собирается скриптом и лежит готовыми файлами, поэтому GitHub Pages отдаёт его как есть —
ничего собирать на их стороне не нужно.

## Что где лежит

- `content/site.js` — имя, роль, почта, ссылки, тексты первого экрана. **Правится здесь.**
- `content/works.js` — восемь работ: заголовок, описание, метки, ссылки, какие снимки показывать.
- `content/cases.js` — тексты кейсов на английском.
- `content/about.md` — страница «обо мне».
- `assets/css/site.css` — все стили.
- `scripts/build.js` — собирает `index.html`, `work/<имя>/`, `about/`, `sitemap.xml`, `robots.txt`.
- `scripts/images.js` — берёт снимки из `C:/Проэкты/portfolio-shots` и делает лёгкие webp.
- `scripts/og.js` — картинка для ссылок в мессенджерах.

## Работа с сайтом

```bash
npm install          # один раз
npm run images       # если поменялись снимки экранов
npm run build        # пересобрать страницы
npm run dev          # посмотреть на http://localhost:4321
```

После `npm run build` изменения надо отправить на GitHub — сайт обновится сам за минуту.

## Добавить новую работу

1. Положить снимки в `C:/Проэкты/portfolio-shots/<имя>/`.
2. Добавить запись в `content/works.js` и текст в `content/cases.js`.
3. `npm run images && npm run build`.

## Проверки

```bash
node C:/Проэкты/studio-kit/qa/overflow.js --base http://localhost:4321/ --dir . --skip index.html --widths 360,390,768 --extra "./,about/,work/widnia/"
node C:/Проэкты/studio-kit/qa/contrast.js --base http://localhost:4321/ --dir . --schemes light,dark --pages "./,about/,work/widnia/"
```
