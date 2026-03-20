// ============================================================
//  script.js – entry point, imports all modules
// ============================================================

import { initLoader    } from './loader.js';
import { initTheme     } from './theme.js';
import { initLanguage  } from './language.js';
import { initAbout     } from './about.js';
import { renderProjects} from './projects.js';
import { initReveal    } from './reveal.js';
import { initNavigation} from './navigation.js';
import { initContact   } from './contact.js';
import { initMenu      } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initTheme();
    initLanguage();
    initAbout();
    renderProjects();
    initReveal();
    initNavigation();
    initContact();
    initMenu();
});