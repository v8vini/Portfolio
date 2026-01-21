export function initTechStack() {
const techDescriptions = {
  // Front-end
  'HTML': 'Estruturação semântica de interfaces web modernas, acessíveis e otimizadas para SEO.',
  'CSS': 'Estilização avançada com layouts responsivos, animações e design moderno.',
  'JAVASCRIPT': 'Linguagem principal para lógica, eventos, manipulação do DOM e interatividade no frontend.',
  'SASS': 'Pré-processador CSS que facilita organização, reutilização e escalabilidade dos estilos.',
  'TAILWIND': 'Framework utilitário para criação rápida de interfaces modernas e responsivas.',
  'BOOTSTRAP': 'Framework CSS para desenvolvimento ágil de layouts responsivos e componentes prontos.',

  // Back-end
  'TYPESCRIPT': 'JavaScript com tipagem estática para maior segurança, legibilidade e escalabilidade.',
  'NODE': 'Ambiente de execução JavaScript no servidor com alta performance e arquitetura assíncrona.',
  'PYTHON': 'Linguagem versátil usada para APIs, automação, ciência de dados e aplicações backend.',
  'C#': 'Linguagem robusta da plataforma .NET para aplicações corporativas e sistemas escaláveis.',
  'C++': 'Linguagem de alto desempenho utilizada em sistemas críticos, engines e aplicações embarcadas.',

  // Frameworks
  'EXPRESS': 'Framework minimalista para criação de APIs REST rápidas e eficientes em Node.js.',
  'NESTJS': 'Framework backend robusto e escalável baseado em TypeScript e arquitetura modular.',
  'ANGULAR': 'Framework completo para desenvolvimento de aplicações frontend corporativas.',
  'REACT': 'Biblioteca para criação de interfaces reativas, componentizadas e performáticas.',
  'FLASK': 'Microframework Python simples e poderoso para criação de APIs.',
  'NEXT': 'Framework React para aplicações SSR, SSG e alta performance.'
};


  const techItems = document.querySelectorAll('.tech-row span');
  const columns = document.querySelectorAll('.skill-column');

  if (!techItems.length || !columns.length) return;

  columns.forEach(col => {
    const desc = col.querySelector('.tech-desc');
    if (desc) desc.dataset.default = desc.textContent;
  });

  function updateDescription(descEl, text) {
    descEl.classList.add('fade-out');

    setTimeout(() => {
      descEl.textContent = text;
      descEl.classList.remove('fade-out');
      descEl.classList.add('fade-in');

      setTimeout(() => descEl.classList.remove('fade-in'), 250);
    }, 150);
  }

  techItems.forEach(item => {
    const column = item.closest('.skill-column');
    const descEl = column.querySelector('.tech-desc');

    item.addEventListener('mouseenter', () => {
      techItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const techName = item.textContent.trim().toUpperCase();
      if (techDescriptions[techName]) {
        updateDescription(descEl, techDescriptions[techName]);
      }
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('active');
      updateDescription(descEl, descEl.dataset.default);
    });
  });
}

// 
const statsSection = document.querySelector('.stats-container');
const statNumbers = document.querySelectorAll('.stat-number');

if (statsSection) {

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statsSection.classList.add('show');
        startStatsCounters();
        statsObserver.unobserve(statsSection);
      }
    });
  }, {
    threshold: 0.4
  });

  statsObserver.observe(statsSection);
}

/* Contadores */

// function startStatsCounters() {
//   statNumbers.forEach(counter => {
//     const target = +counter.dataset.target;
//     let current = 0;

//     const increment = Math.max(1, Math.floor(target / 60));

//     const update = () => {
//       current += increment;

//       if (current >= target) {
//         counter.textContent = target + (target > 1 ? "+" : "");
//       } else {
//         counter.textContent = current;
//         requestAnimationFrame(update);
//       }
//     };

//     update();
//   });
// }
