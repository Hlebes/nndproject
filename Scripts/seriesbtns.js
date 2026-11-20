document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelector('.ep-list');
    if (!list) return;

    const tabs = Array.from(list.querySelectorAll('[aria-controls]'));

    function select(tab) {
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        const p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) p.hidden = true;
      });
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = false;
    }

    // Клик по любой кнопке списка
    list.addEventListener('click', e => {
      const tab = e.target.closest('[aria-controls]');
      if (tab) select(tab);
    });

    // Переключение стрелками ↑/↓
    list.addEventListener('keydown', e => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      const i = tabs.indexOf(document.activeElement);
      if (i === -1) return;
      e.preventDefault();
      const next = tabs[(i + (e.key === 'ArrowDown' ? 1 : -1) + tabs.length) % tabs.length];
      next.focus();
      select(next);
    });
});