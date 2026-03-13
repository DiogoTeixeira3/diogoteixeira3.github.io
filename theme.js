// ============================================================
//  theme.js – dark / light mode toggle
// ============================================================

const MOON_SVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.5 10A6 6 0 0 1 6 2.5a6 6 0 1 0 7.5 7.5z"
        stroke="currentColor" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

const SUN_SVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="8" cy="8" r="3.2" stroke="currentColor" stroke-width="1.4"/>
  <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.42 1.42M11.53 11.53l1.42 1.42
           M11.53 4.47l1.42-1.42M3.05 12.95l1.42-1.42"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
</svg>`;

export function initTheme() {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;

    // Restore saved preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        btn.innerHTML = MOON_SVG;
    }

    btn.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light');
        btn.innerHTML = isLight ? MOON_SVG : SUN_SVG;
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}