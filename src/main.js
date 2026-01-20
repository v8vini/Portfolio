import './styles/main.scss';

import { initMenu } from './js/menu';
import { initTechStack } from './js/techStack';
import { initScrollAnimation } from './js/scrollAnimation';
import { initIcons } from './js/icons';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initTechStack();
  initScrollAnimation();
  initIcons();
});
