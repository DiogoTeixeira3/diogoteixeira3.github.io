// ============================================================
//  language.js – EN / PT toggle
// ============================================================

const T = {
    en: {
        eyebrow:        'Based in Lisbon, Portugal · ISEL · Software Engineering',
        h1:             'Hi everyone!',
        h2:             'I\'m',
        h3:             'Diogo Teixeira.',
        desc:           'Future software engineer based in Lisbon, Portugal. Currently in my final year of a Software Engineering degree at ISEL, with a strong interest in both front-end and back-end development.',
        'photo-caption':'Available for new opportunities as a Junior Software Engineer | Frontend or Backend Developer',
        'nav-about':    'About Me',
        'nav-projects': 'My Projects',
        'nav-contact':  'Contact Me',
        'nav-resume':   'My Resume',
        'about-p-title':'Personal',
        'about-p-text': 'I am a motivated 21 years old with two great passions: technology and sports. I have been playing football since I was five and have competed at a federated level for over ten years, which has taught me the importance of teamwork, discipline, and resilience, not only in sports but in everything I do. Video games were also part of my life from an early age and played a key role in sparking my curiosity and passion for technology. Today, I am able to balance the things I enjoy most, and my current goal is to enter the job market where I can continue developing my technical skills while maintaining my dedication to football and sports, allowing me to pursue the best of both worlds.',
        'about-e-title':'Education',
        'about-e-text': 'I began my English learning at British Isles, where I completed the B2 level. I finished my secondary education at EB 2/3 D. Martinho Vaz de Castelo Branco in Science and Technology. I am currently in the last year of my BSc in Computer Science and Engineering at ISEL, where I developed skills in both software and hardware development. I am ready to contribute and apply my knowledge in the professional environment.',
        'about-s-title':'Skills & Tools',
        'contact-tag':  'Let\'s build something together.',
        'btn-send':     'Send Message',
        'ph-name':      'Name',
        'ph-email':     'Email',
        'ph-msg':       'Message',
        footer:         '© 2026 Diogo Gouveia Teixeira',
    },
    pt: {
        eyebrow:        'Lisboa, Portugal · ISEL · Engenharia Informática',
        h1:             'Olá!',
        h2:             'O meu nome é',
        h3:             'Diogo Teixeira.',
        desc:           'Futuro engenheiro de software baseado em Lisboa, Portugal. Atualmente no último ano da licenciatura em Engenharia Informática no ISEL, com forte interesse em desenvolvimento front-end e back-end.',
        'photo-caption':'Disponível para oportunidades como Junior Software Engineer | Frontend or Backend Developer',
        'nav-about':    'Sobre Mim',
        'nav-projects': 'Os Meus Projetos',
        'nav-contact':  'Contacta-me',
        'nav-resume':   'O Meu CV',
        'about-p-title':'Pessoal',
        'about-p-text': 'Sou um jovem de 21 anos motivado, com duas grandes paixões: tecnologia e desporto. Jogo futebol desde os cinco anos e sou federado há mais de dez, experiência que me fez perceber a importância do trabalho em equipa, da disciplina e da resiliência, não só no contexto desportivo, mas em tudo o que faço na minha vida. Os videojogos também fizeram parte da minha vida desde cedo e foram eles que despertaram a minha curiosidade e o meu interesse pela tecnologia. Atualmente consigo conciliar tudo aquilo de que mais gosto e tenho como objetivo entrar no mercado de trabalho para continuar a desenvolver as minhas competências técnicas, mantendo sempre a ligação ao futebol e ao desporto, e assim conseguir o melhor dos dois mundos.',
        'about-e-title':'Educação',
        'about-e-text': 'Iniciei o percurso em inglês nas British Isles onde concluí o nível B2. Realizei o meu secundário na escola EB 2/3 D. Martinho Vaz de Castelo Branco, no curso de Ciências e Tecnologias. Atualmente estou a terminar a Licenciatura em Engenharia Informática e de Computadores no ISEL, onde desenvolvi competências em desenvolvimento de software e hardware. Estou pronto para contribuir e colocar em prática os meus conhecimentos no mercado de trabalho.',
        'about-s-title':'Competências & Ferramentas',
        'contact-tag':  'Vamos construir algo juntos.',
        'btn-send':     'Enviar Mensagem',
        'ph-name':      'Nome',
        'ph-email':     'Email',
        'ph-msg':       'Mensagem',
        footer:         '© 2026 Diogo Gouveia Teixeira',
    },
};

let lang = 'en';

function applyLang(l) {
    const t = T[l];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-ph]').forEach(el => {
        const key = el.getAttribute('data-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.documentElement.lang = l === 'pt' ? 'pt-PT' : 'en';
}

export function initLanguage() {
    const btn = document.getElementById('lang-btn');
    const img = document.getElementById('flag-img');
    if (!btn) return;

    btn.addEventListener('click', () => {
        lang = lang === 'en' ? 'pt' : 'en';
        img.src = lang === 'en'
            ? 'https://flagcdn.com/w40/pt.png'
            : 'https://flagcdn.com/w40/gb.png';
        img.alt = lang === 'en' ? 'PT' : 'EN';
        applyLang(lang);
    });
}