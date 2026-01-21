export function initScrollAnimation() {
  const elements = document.querySelectorAll('.skill-column');

  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

// 
const projectCards = document.querySelectorAll('.project-card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      cardObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

projectCards.forEach(card => cardObserver.observe(card));

// about

const aboutSection = document.querySelector('.about');

if (aboutSection) {
  aboutSection.classList.add('hidden');

  const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('show');
        aboutObserver.unobserve(aboutSection);
      }
    });
  }, {
    threshold: 0.35
  });

  aboutObserver.observe(aboutSection);
}
  