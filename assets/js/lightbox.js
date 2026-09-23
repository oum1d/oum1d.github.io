// Увеличение снимков: клик по картинке открывает её крупно поверх страницы.
// Стрелки и Esc работают с клавиатуры, фокус возвращается на ту же картинку.
(() => {
  const shots = [...document.querySelectorAll('[data-zoom]')];
  if (!shots.length) return;

  let index = 0;
  let opener = null;

  const box = document.createElement('div');
  box.className = 'zoom';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = `
    <button class="zoom__close" type="button" aria-label="Close">&times;</button>
    <button class="zoom__nav zoom__nav--prev" type="button" aria-label="Previous">&#8249;</button>
    <img class="zoom__img" alt="">
    <button class="zoom__nav zoom__nav--next" type="button" aria-label="Next">&#8250;</button>
    <p class="zoom__count" aria-live="polite"></p>`;
  document.body.append(box);

  const pic = box.querySelector('.zoom__img');
  const count = box.querySelector('.zoom__count');
  const closeBtn = box.querySelector('.zoom__close');

  function show(i) {
    index = (i + shots.length) % shots.length;
    const from = shots[index];
    pic.src = from.dataset.zoom;
    pic.alt = from.alt || '';
    count.textContent = `${index + 1} / ${shots.length}`;
    box.querySelectorAll('.zoom__nav').forEach(b => { b.hidden = shots.length < 2; });
  }

  function open(i, trigger) {
    opener = trigger;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    show(i);
    closeBtn.focus();
  }

  function close() {
    box.hidden = true;
    document.body.style.overflow = '';
    pic.removeAttribute('src');
    opener?.focus();
  }

  shots.forEach((el, i) => {
    el.addEventListener('click', () => open(i, el));
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i, el); }
    });
  });

  closeBtn.addEventListener('click', close);
  box.querySelector('.zoom__nav--prev').addEventListener('click', () => show(index - 1));
  box.querySelector('.zoom__nav--next').addEventListener('click', () => show(index + 1));
  // Клик мимо картинки и кнопок закрывает окно
  box.addEventListener('click', e => { if (e.target === box) close(); });

  document.addEventListener('keydown', e => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
    // Не выпускаем фокус из окна, пока оно открыто
    if (e.key === 'Tab' && !box.contains(document.activeElement)) { e.preventDefault(); closeBtn.focus(); }
  });
})();
