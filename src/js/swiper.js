/* Swiper */

const swiper = new Swiper('.portfolio-slider', {
  loop: true,
  spaceBetween: 24,
  speed: 600,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/* Multi-select filtering */

const buttons = document.querySelectorAll('.filter-btn');
const slides = document.querySelectorAll('.portfolio-item');

const activeFilters = {
  area: new Set(),
  tech: new Set()
};

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.filterType;
    const value = btn.dataset.value;

    if (activeFilters[type].has(value)) {
      activeFilters[type].delete(value);
      btn.classList.remove('active');
    } else {
      activeFilters[type].add(value);
      btn.classList.add('active');
    }

    applyFilters();
  });
});

function applyFilters() {
  slides.forEach(slide => {
    const area = slide.dataset.area;
    const techs = slide.dataset.tech.split(',');

    const areaMatch = activeFilters.area.size === 0 || activeFilters.area.has(area);
    const techMatch = activeFilters.tech.size === 0 || techs.some(t => activeFilters.tech.has(t));

    slide.style.display = (areaMatch && techMatch) ? 'block' : 'none';
  });

  swiper.update();
}

/* GIF Preview overlay */

const overlay = document.getElementById('gifOverlay');
const gifImg = document.getElementById('gifPreview');

document.addEventListener('click', e => {
  const btn = e.target.closest('.btn-preview');
  if (!btn) return;

  gifImg.src = btn.dataset.gif;
  overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  setTimeout(() => gifImg.src = '', 300);
});
