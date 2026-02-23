// ============================================================
//  Entry point – imports each feature module and initialises
//  everything once the DOM is ready.
// ============================================================

import { renderProjects  } from './js/projects.js';
import { initNavigation  } from './js/navigation.js';
import { initAbout       } from './js/about.js';
import { initTheme       } from './js/theme.js';
import { initContactForm } from './js/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initNavigation();
    initAbout();
    initTheme();
    initContactForm();
});