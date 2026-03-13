// ============================================================
//  reveal.js – scroll-triggered animations (IntersectionObserver)
// ============================================================

export function initReveal() {
    const io = new IntersectionObserver(
        entries => entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all static .reveal elements
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Project cards are injected dynamically — watch for them
    const container = document.getElementById('projects-list');
    if (!container) return;

    const mo = new MutationObserver(() => {
        container.querySelectorAll('.proj-card:not([data-observed])').forEach(card => {
            card.setAttribute('data-observed', '1');
            io.observe(card);
        });
    });
    mo.observe(container, { childList: true });
}