// ============================================================
//  loader.js – intro screen with staggered name reveal
// ============================================================

export function initLoader() {
    const loader = document.getElementById('loader');

    // No loader element → reveal page immediately
    if (!loader) {
        document.body.classList.add('ready');
        return;
    }

    // Animate words in
    loader.querySelectorAll('[data-word]').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 80 + i * 180);
    });

    // Kick off progress bar (CSS @keyframes loaderBar)
    const fill = loader.querySelector('.loader-fill');
    if (fill) fill.style.animation = 'loaderBar 1.4s var(--ease) forwards';

    // Exit: add .out (triggers CSS opacity/transform transition),
    // reveal page at same time, then hard-remove loader from DOM
    setTimeout(() => {
        loader.classList.add('out');
        document.body.classList.add('ready');
        setTimeout(() => loader.remove(), 600);
    }, 1700);
}