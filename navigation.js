// ============================================================
//  navigation.js – active nav link on scroll
// ============================================================

export function initNavigation() {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const io = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (active) active.classList.add('active');
                }
            });
        },
        { threshold: 0.35 }
    );

    sections.forEach(s => io.observe(s));
}