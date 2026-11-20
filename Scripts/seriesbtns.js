window.__epLoaded = true;
console.log('episodes.js загружен');

function initEpisodes() {
const list = document.querySelector('.ep-list');
const panels = Array.from(document.querySelectorAll('.ep-panel'));
if (!list || !panels.length) {
    console.warn('episodes.js: не найден .ep-list или .ep-panel');
    return;
}
const tabs = Array.from(list.querySelectorAll('button'));

function select(index) {
    tabs.forEach((t, i) => t.setAttribute('aria-selected', i === index ? 'true' : 'false'));
    panels.forEach((p, i) => {
    p.hidden = i !== index;
    p.style.display = i === index ? '' : 'none'; // на случай, если CSS перебивает hidden
    });
}

tabs.forEach((tab, i) => {
    tab.type = 'button'; // чтобы кнопка не отправляла форму и не перезагружала страницу
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', e => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const next = (i + (e.key === 'ArrowDown' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    select(next);
    });
});

select(0);
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initEpisodes);
} else {
initEpisodes();
}