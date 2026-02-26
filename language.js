// ============================================================
//  Language – EN / PT-PT toggle
// ============================================================

const translations = {
    en: {
        // Header
        'header-title': "Hi everyone, I'm Diogo Teixeira!",
        'header-mini': 'Future software engineer from Lisbon, Portugal. Currently in the last year of Software Engineering in ISEL, passionate about front-end and back-end development.',

        // Nav
        'nav-about': 'About Me',
        'nav-projects': 'My Projects',
        'nav-contact': 'Contact Me',
        'nav-resume': 'My Resume',

        // About
        'about-title': 'About Me',
        'about-personal-title': 'Personal',
        'about-personal-text': 'I am a young and motivated person with a very strong passion for sports and technology. As a football player since childhood, I have learned the value of teamwork, discipline, and resilience, qualities that I carry into every aspect of my life. I enjoy spending time with family and friends, meeting new people, and building strong connections. From an early age, I have also been a video game fan, which sparked my curiosity and love for technology. I consider myself a communicative, hardworking, and adaptable person who thrives in collaborative environments and is always eager to learn and grow.',
        'about-education-title': 'Education',
        'about-education-text': "I started my journey in English at the British Isles, completing a comprehensive course from 2014 to 2019 and achieving a B2 level. Then I pursued my secondary education at EB 2/3 D. Martinho Vaz in Castelo Branco, following the Science and Technology course. Currently, I am in the final year of my Bachelor's degree in Computer and Informatics Engineering at ISEL, developing my skills in software development, programming, and systems engineering, preparing to contribute effectively in the tech industry.",
        'about-skills-title': 'Skills & Tools',
        'btn-more': 'More',
        'btn-close': 'Close',

        // Contact
        'contact-title': 'Contact Me',
        'placeholder-name': 'Name',
        'placeholder-email': 'Email',
        'placeholder-message': 'Message',
        'btn-send': 'Send Message',
        'btn-sending': 'Sending…',
        'social-title': 'Connect with me',

        // Footer
        'footer-text': '© 2025 Diogo Gouveia Teixeira',
    },

    pt: {
        // Header
        'header-title': 'Olá a todos, eu sou o Diogo Teixeira!',
        'header-mini': 'Futuro engenheiro de software de Lisboa, Portugal. Atualmente no último ano de Engenharia Informática e de Computadores no ISEL, apaixonado por desenvolvimento front-end e back-end.',

        // Nav
        'nav-about': 'Sobre Mim',
        'nav-projects': 'Meus Projetos',
        'nav-contact': 'Contacte-me',
        'nav-resume': 'O Meu CV',

        // About
        'about-title': 'Sobre Mim',
        'about-personal-title': 'Pessoal',
        'about-personal-text': 'Sou uma pessoa jovem e motivada, com uma grande paixão por desporto e tecnologia. Como jogador de futebol desde a infância, aprendi o valor do trabalho em equipa, disciplina e resiliência — qualidades que levo para todos os aspetos da minha vida. Gosto de passar tempo com a família e amigos, conhecer novas pessoas e construir ligações fortes. Desde cedo, também sou fã de videojogos, o que despertou a minha curiosidade e amor pela tecnologia. Considero-me uma pessoa comunicativa, trabalhadora e adaptável, que prospera em ambientes colaborativos e está sempre disposta a aprender e crescer.',
        'about-education-title': 'Educação',
        'about-education-text': 'Comecei o meu percurso em Inglês nas British Isles, concluindo um curso abrangente de 2014 a 2019 e alcançando o nível B2. Depois prossegui o ensino secundário na EB 2/3 D. Martinho Vaz em Castelo Branco, no curso de Ciências e Tecnologias. Atualmente, encontro-me no último ano da Licenciatura em Engenharia Informática e de Computadores no ISEL, desenvolvendo as minhas competências em desenvolvimento de software, programação e engenharia de sistemas, preparando-me para contribuir eficazmente na indústria tecnológica.',
        'about-skills-title': 'Competências & Ferramentas',
        'btn-more': 'Mais',
        'btn-close': 'Fechar',

        // Contact
        'contact-title': 'Contacte-me',
        'placeholder-name': 'Nome',
        'placeholder-email': 'Email',
        'placeholder-message': 'Mensagem',
        'btn-send': 'Enviar Mensagem',
        'btn-sending': 'A enviar…',
        'social-title': 'Conecte-se comigo',

        // Footer
        'footer-text': '© 2025 Diogo Gouveia Teixeira',
    },
};

let currentLang = 'en';

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Elements with data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // Elements with data-i18n-placeholder → placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // "More / Close" buttons inside about cards
    document.querySelectorAll('.ver-mais').forEach(btn => {
        const block = btn.closest('.about-personal, .about-education');
        if (block) {
            btn.textContent = block.classList.contains('expanded')
                ? t['btn-close']
                : t['btn-more'];
        }
    });

    // Submit button (only if not in "sending" state)
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    if (submitBtn && !submitBtn.disabled) {
        submitBtn.textContent = t['btn-send'];
    }

    // Update html lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
}

export function getLang() {
    return currentLang;
}

export function getTranslation(key) {
    return translations[currentLang]?.[key] ?? key;
}

export function initLanguage() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'pt' : 'en';
        const flag = currentLang === 'en'
            ? '<img src="https://flagcdn.com/w40/pt.png" alt="PT" width="24" height="16" style="border-radius:2px">'
            : '<img src="https://flagcdn.com/w40/gb.png" alt="EN" width="24" height="16" style="border-radius:2px">';
        btn.innerHTML = flag;
        btn.title = currentLang === 'en'
            ? 'Mudar para Português'
            : 'Switch to English';
        applyTranslations(currentLang);
    });
}
