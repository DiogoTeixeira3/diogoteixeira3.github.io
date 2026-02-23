// ============================================================
//  Entry point – imports each feature module and initialises
//  everything once the DOM is ready.
// ============================================================

import { renderProjects  } from './src/js/projects.js';
import { initNavigation  } from './src/js/navigation.js';
import { initAbout       } from './src/js/about.js';
import { initTheme       } from './src/js/theme.js';
import { initContactForm } from './src/js/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initNavigation();
    initAbout();
    initTheme();
    initContactForm();
});