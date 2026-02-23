// ============================================================
//  Projects – data array + DOM rendering
// ============================================================

const projetos = [
    {
        nome: 'Checkers',
        linguagens: ['Kotlin', 'Compose'],
        repo: 'https://github.com/DiogoTeixeira3/Checkers',
        pdf: 'files/Checkers.pdf',
        img: 'files/checkers.png',
    },
    {
        nome: 'Padel Manager Website',
        linguagens: ['Kotlin', 'SQL', 'HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/DiogoTeixeira3/Padel-Manager.git',
        pdf: 'files/Padel-Manager.pdf',
        img: 'files/padel.png',
    },
    {
        nome: 'Chelas Poker Dice Website',
        linguagens: ['React', 'Spring', 'TypeScript', 'Kotlin', 'Vite', 'CSS'],
        repo: 'https://github.com/DiogoTeixeira3/Chelas-Poker-Dice-Website.git',
        pdf: 'files/project-requirements.pdf',
        img: 'files/ChelasPokerDice.png',
    },
    {
        nome: 'Chelas Poker Dice Android App',
        linguagens: ['Kotlin', 'Ngrok', 'Android Studio'],
        repo: 'https://github.com/DiogoTeixeira3/Chelas-Poker-Dice-App.git',
        pdf: 'files/ChelasPokerDiceApp.pdf',
        img: 'files/ChelasPokerDice.png',
    },
    {
        nome: 'My Portfolio',
        linguagens: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/DiogoTeixeira3/diogoteixeira3.github.io',
        img: 'files/image.png',
    },
    {
        nome: 'Connect Four',
        linguagens: ['Kotlin'],
        repo: 'https://github.com/DiogoTeixeira3/ConnectFour.git',
        pdf: 'files/ConnectedFour.pdf',
        img: 'files/ConnectFour.png',
    },
];

export function renderProjects() {
    const container = document.getElementById('projetos-container');
    if (!container) return;

    container.innerHTML = '';
    container.setAttribute('role', 'list');

    projetos.forEach(p => {
        const div = document.createElement('div');
        div.classList.add('projeto');
        div.setAttribute('role', 'listitem');

        const fallbackImg = `https://via.placeholder.com/280x150.png?text=${encodeURIComponent(p.nome)}`;
        const badges = p.linguagens
            .map(l => `<span class="linguagem">${l}</span>`)
            .join('');

        div.innerHTML = `
            <img src="${p.img || fallbackImg}" alt="${p.nome}">
            <div class="projeto-content">
                <h3>${p.nome}</h3>
                <div class="linguagens">${badges}</div>
                <div class="projeto-buttons">
                    <a href="${p.repo}" target="_blank">GitHub</a>
                    ${p.pdf ? `<a href="${p.pdf}" target="_blank" class="pdf">PDF</a>` : ''}
                </div>
            </div>
        `;

        container.appendChild(div);
    });

    container.setAttribute('aria-busy', 'false');
}