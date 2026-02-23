// ============================================================
//  About – expand / collapse "Personal" and "Education" cards
// ============================================================

let currentExpanded = null;
let overlay = null;

function expandBlock(block) {
    if (currentExpanded && currentExpanded !== block) {
        collapseBlock(currentExpanded);
    }

    block.classList.add('expanded');

    const btn = block.querySelector('.ver-mais');
    if (btn) btn.textContent = 'Close';

    overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        inset: '0',
        background: 'rgba(0,0,0,0.6)',
        zIndex: '1990',
    });
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    overlay.addEventListener('click', () => collapseBlock(block), { once: true });

    block.style.zIndex = '2000';
    currentExpanded = block;
}

function collapseBlock(block) {
    block.classList.remove('expanded');

    const btn = block.querySelector('.ver-mais');
    if (btn) btn.textContent = 'More';

    if (overlay) {
        overlay.remove();
        overlay = null;
    }

    document.body.style.overflow = '';
    block.style.zIndex = '';
    currentExpanded = null;
}

export function initAbout() {
    const blocks = Array.from(
        document.querySelectorAll('.about-personal, .about-education')
    );

    blocks.forEach(block => {
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