// ============================================================
//  language.js – EN / PT toggle
// ============================================================

const T = {
    en: {
        eyebrow:        'Based in Lisbon, Portugal · ISEL · Software Engineering',
        h1:             'Future',
        h2:             'Software',
        h3:             'Engineer.',
        desc:           'Future software engineer from Lisbon, Portugal. Currently in the last year of Software Engineering in ISEL, passionate about front-end and back-end development.',
        'photo-caption':'Available for opportunities',
        'nav-about':    'About Me',
        'nav-projects': 'My Projects',
        'nav-contact':  'Contact Me',
        'nav-resume':   'My Resume ↗',
        'about-p-title':'Personal',
        'about-p-text': 'I am a young and motivated person with a very strong passion for sports and technology. As a football player since childhood, I have learned the value of teamwork, discipline, and resilience — qualities I carry into every aspect of my life. I enjoy spending time with family and friends, meeting new people, and building strong connections. From an early age, I have been a video game fan, which sparked my curiosity and love for technology. Communicative, hardworking, adaptable — always eager to learn.',
        'about-e-title':'Education',
        'about-e-text': 'Started my English journey at British Isles (2014–2019, B2 level). Secondary education at EB 2/3 D. Martinho Vaz in Castelo Branco, Science & Technology stream. Currently finishing my Bachelor\'s in Computer and Informatics Engineering at ISEL — developing skills in software development, programming, and systems engineering.',
        'about-s-title':'Skills & Tools',
        'contact-tag':  'Let\'s build something together.',
        'btn-send':     'Send Message',
        'ph-name':      'Name',
        'ph-email':     'Email',
        'ph-msg':       'Message',
        footer:         '© 2025 Diogo Gouveia Teixeira',
    },
    pt: {
        eyebrow:        'Lisboa, Portugal · ISEL · Engenharia Informática',
        h1:             'Futuro',
        h2:             'Engenheiro',
        h3:             'de Software.',
        desc:           'Último ano no ISEL, a construir para a web e mobile. Apaixonado por código limpo, bom design e por lançar produtos que funcionam.',
        'photo-caption':'Disponível para oportunidades',
        'nav-about':    'Sobre Mim',
        'nav-projects': 'Os Meus Projetos',
        'nav-contact':  'Contacta-me',
        'nav-resume':   'O Meu CV ↗',
        'about-p-title':'Pessoal',
        'about-p-text': 'Sou um jovem motivado com uma grande paixão pelo desporto e pela tecnologia. Desde criança que sou jogador de futebol, e isso ensinou-me o valor do trabalho em equipa, disciplina e resiliência. Adoro conviver com família e amigos, conhecer pessoas novas e construir relações fortes. Os videojogos entraram cedo na minha vida e despertaram a minha curiosidade pela tecnologia. Comunicativo, trabalhador e adaptável — sempre pronto a aprender.',
        'about-e-title':'Educação',
        'about-e-text': 'Iniciei o percurso em inglês nas British Isles (2014–2019, nível B2). Ensino secundário na EB 2/3 D. Martinho Vaz em Castelo Branco, curso de Ciências e Tecnologias. Atualmente a terminar a Licenciatura em Engenharia Informática e de Computadores no ISEL — a desenvolver competências em desenvolvimento de software, programação e sistemas.',
        'about-s-title':'Competências & Ferramentas',
        'contact-tag':  'Vamos construir algo juntos.',
        'btn-send':     'Enviar Mensagem',
        'ph-name':      'Nome',
        'ph-email':     'Email',
        'ph-msg':       'Mensagem',
        footer:         '© 2025 Diogo Gouveia Teixeira',
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