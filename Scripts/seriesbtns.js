console.log('%c[Серии] episodes.js загружен', 'color:#e0a43b;font-weight:bold');

// Диагностика: ловим ВСЕ клики на странице и показываем, куда они попали
document.addEventListener('click', e => {
  const btn = e.target.closest('.ep-list button');
  if (!btn) {
    console.log('[Серии] Клик мимо кнопок, попал в:', e.target);
  }
}, true);

function initEpisodes() {
  const list = document.querySelector('.ep-list');
  const panels = Array.from(document.querySelectorAll('.ep-panel'));
  const tabs = list ? Array.from(list.querySelectorAll('button')) : [];

  console.log(`[Серии] Найдено кнопок: ${tabs.length}, описаний: ${panels.length}`);
  if (!list) return console.error('[Серии] Не найден элемент .ep-list');
  if (!tabs.length) return console.error('[Серии] Внутри .ep-list нет <button>');
  if (!panels.length) return console.error('[Серии] Не найдены элементы .ep-panel