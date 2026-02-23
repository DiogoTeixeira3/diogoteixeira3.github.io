// ============================================================
//  Theme – dark / light mode toggle
// ============================================================

export function initTheme() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        btn.textContent = document.body.classList.contains('light-mode')
            ? '🌙'
            : '🌞';
    });
}