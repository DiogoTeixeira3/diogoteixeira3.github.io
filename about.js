// ============================================================
//  about.js – expand / collapse Personal and Education cards
// ============================================================

let currentExpanded = null;
let overlay = null;
let currentOnKey = null;

function collapseBlock(block) {
    block.classList.remove('expanded');
    const btn = block.querySelector('.ver-mais');
    if (btn) btn.textContent = 'More';
    if (overlay) { overlay.remove(); overlay = null; }
    if (currentOnKey) { document.removeEventListener('keydown', currentOnKey); currentOnKey = null; }
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

    currentOnKey = (e) => { if (e.key === 'Escape') collapseBlock(block); };
    document.addEventListener('keydown', currentOnKey);

    block.style.zIndex = '2000';
    currentExpanded = block;
}

export function initAbout() {
    document.querySelectorAll('.about-col').forEach(block => {
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