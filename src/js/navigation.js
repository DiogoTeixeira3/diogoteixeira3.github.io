// ============================================================
//  Navigation – smooth scroll + section arrows
// ============================================================

const SECTIONS = ['header', 'About', 'Projects', 'Contact'];

function getElement(id) {
    return id === 'header'
        ? document.querySelector('header')
        : document.getElementById(id);
}

function getCurrentSection() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    let current = 'header';
    SECTIONS.forEach(sec => {
        const el = getElement(sec);
        if (el && el.offsetTop <= scrollPos) current = sec;
    });
    return current;
}

function updateArrows(arrowUp, arrowDown) {
    const current = getCurrentSection();

    if (current === 'header') {
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'none';
        document.body.classList.add('header-view');
        return;
    }

    document.body.classList.remove('header-view');

    const idx = SECTIONS.indexOf(current);

    arrowUp.style.display = idx <= 0 ? 'none' : 'block';
    if (idx > 0) arrowUp.dataset.target = SECTIONS[idx - 1];

    arrowDown.style.display = idx >= SECTIONS.length - 1 ? 'none' : 'block';
    if (idx < SECTIONS.length - 1) arrowDown.dataset.target = SECTIONS[idx + 1];
}

export function initNavigation() {
    const arrowUp   = document.querySelector('.seta-cima');
    const arrowDown = document.querySelector('.seta-baixo');

    // Smooth scroll for nav links
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => updateArrows(arrowUp, arrowDown), 450);
        });
    });

    // Arrow click handlers
    [arrowUp, arrowDown].forEach(arrow => {
        arrow.addEventListener('click', () => {
            const target = getElement(arrow.dataset.target);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update arrows on scroll
    window.addEventListener('scroll', () => updateArrows(arrowUp, arrowDown));
    updateArrows(arrowUp, arrowDown);
}
