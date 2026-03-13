// ============================================================
//  projects.js – data + card rendering
// ============================================================

const projetos = [
    {
        nome: 'Checkers',
        linguagens: ['Kotlin', 'Compose'],
        repo: 'https://github.com/DiogoTeixeira3/Checkers',
        pdf:  'files/Checkers.pdf',
        img:  'files/checkers.png',
    },
    {
        nome: 'Padel Manager Website',
        linguagens: ['Kotlin', 'SQL', 'HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/DiogoTeixeira3/Padel-Manager.git',
        pdf:  'files/Padel-Manager.pdf',
        img:  'files/padel.png',
    },
    {
        nome: 'Chelas Poker Dice Website',
        linguagens: ['React', 'Spring', 'TypeScript', 'Kotlin', 'Vite'],
        repo: 'https://github.com/DiogoTeixeira3/Chelas-Poker-Dice-Website.git',
        pdf:  'files/project-requirements.pdf',
        img:  'files/ChelasPokerDice.png',
    },
    {
        nome: 'Chelas Poker Dice App',
        linguagens: ['Kotlin', 'Android Studio', 'Ngrok'],
        repo: 'https://github.com/DiogoTeixeira3/Chelas-Poker-Dice-App.git',
        pdf:  'files/ChelasPokerDiceApp.pdf',
        img:  'files/ChelasPokerDice.png',
    },
    {
        nome: 'My Portfolio',
        linguagens: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/DiogoTeixeira3/diogoteixeira3.github.io',
        img:  'files/image.png',
    },
    {
        nome: 'Connect Four',
        linguagens: ['Kotlin'],
        repo: 'https://github.com/DiogoTeixeira3/ConnectFour.git',
        pdf:  'files/ConnectedFour.pdf',
        img:  'files/ConnectFour.png',
    },
];

export function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container) return;

    container.innerHTML = '';

    projetos.forEach((p, i) => {
        const card = document.createElement('article');
        card.className = 'proj-card reveal';
        card.style.transitionDelay = `${(i % 3) * 0.08}s`;

        const badges = p.linguagens
            .map(l => `<span class="proj-tag">${l}</span>`)
            .join('');

        const links = `
            <a href="${p.repo}" target="_blank" rel="noopener" class="proj-btn">GitHub</a>
            ${p.pdf ? `<a href="${p.pdf}" target="_blank" rel="noopener" class="proj-btn proj-btn-pdf">PDF</a>` : ''}
        `;

        card.innerHTML = `
            <div class="proj-img-wrap">
                <img src="${p.img}" alt="${p.nome}" loading="lazy"
                     onerror="this.parentElement.classList.add('no-img'); this.remove()">
                <div class="proj-img-overlay"></div>
            </div>
            <div class="proj-body">
                <h3 class="proj-name">${p.nome}</h3>
                <div class="proj-tags">${badges}</div>
                <div class="proj-links">${links}</div>
            </div>
        `;

        container.appendChild(card);
    });
}