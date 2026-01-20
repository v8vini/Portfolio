export function initMenu() {
  const items = document.querySelectorAll('.nav-item');
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('overlay');

  if (!items.length || !nav || !toggle || !overlay) return;

  items.forEach(item => {
    const btn = item.querySelector('.nav-button');

    btn.addEventListener('click', e => {
      e.stopPropagation();
      items.forEach(i => i !== item && i.classList.remove('open'));
      item.classList.toggle('open');
    });
  });

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('open');
    overlay.classList.remove('show');
  });
}
