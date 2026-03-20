// ============================================================
//  menu.js – mobile hamburger menu
// ============================================================

export function initMenu() {
    const btn   = document.getElementById('menu-btn');
    const menu  = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    const links = menu.querySelectorAll('.mobile-link');

    function openMenu() {
        menu.classList.add('open');
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menu.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', () => {
        menu.classList.contains('open') ? closeMenu() : openMenu();
    });

    links.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });
}