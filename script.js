// ============================================================
//  Entry point – imports each feature module and initialises
//  everything once the DOM is ready.
// ============================================================

import { renderProjects  } from './projects.js';
import { initNavigation  } from './navigation.js';
import { initAbout       } from './about.js';
import { initTheme       } from './theme.js';
import { initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initNavigation();
    initAbout();
    initTheme();
    initContactForm();
});