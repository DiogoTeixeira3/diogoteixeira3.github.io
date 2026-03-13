// ============================================================
//  about.js – expand / collapse Personal and Education cards
// ============================================================

let currentExpanded = null;
let overlay = null;

function collapseBlock(block) {
    block.classList.remove('expanded');
    const btn = block.querySelector('.ver-mais');
    if (btn) btn.textContent = 'More';
    if (overlay) { overlay.remove(); overlay = null; }
    document.body.style.overflow = '';
    block.style.zIndex = '';
    currentExpanded = null;
}

function expandBlock(block) {
    if (currentExpanded && currentExpanded !== block) {
        collapseBlock(currentExpanded);
    }

    block.classList.add('expanded');
    const btn = block.querySelector('.ver-mais');
    if (btn) btn.textContent = 'Close';

    overlay = document.createElement('div');
    overlay.className = 'card-overlay';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    overlay.addEventListener('click', () => collapseBlock(block), { once: true });

    // Close on Escape
    const onKey = (e) => {
        if (e.key === 'Escape') { collapseBlock(block); document.removeEventListener('keydown', onKey); }
    };
    document.addEventListener('keydown', onKey);

    block.style.zIndex = '2000';
    currentExpanded = block;
}

export function initAbout() {
    document.querySelectorAll('.about-personal, .about-education').forEach(block => {
        // Add ver-mais button if not already in HTML
        let btn = block.querySelector('.ver-mais');
        if (!btn) {
            btn = document.createElement('button');
            btn.className = 'ver-mais';
            btn.textContent = 'More';
            block.appendChild(btn);
        }
        btn.type = 'button';
        btn.addEventListener('click', () => {
            if (block.classList.contains('expanded')) {
                collapseBlock(block);
            } else {
                expandBlock(block);
            }
        });
    });
}