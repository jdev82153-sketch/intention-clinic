/* =====================================================
   INTENTION CLINIC
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const loader = document.getElementById("pageLoader");
    const header = document.getElementById("header");

    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    const languageButton = document.getElementById("languageButton");
    const languageMenu = document.getElementById("languageMenu");
    const currentLanguage = document.getElementById("currentLanguage");

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.querySelector(".theme-icon");

    const loaderText = document.getElementById("loaderText");

    const year = document.getElementById("year");


    /* =================================================
       ANO
    ================================================= */

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =================================================
       TRADUÇÕES
    ================================================= */

    const translations = {

        "pt-BR": {

            loader: "Sua experiência começa aqui.",

            "nav.home": "Início",
            "nav.philosophy": "Filosofia",
            "nav.specialties": "Especialidades",
            "nav.results": "Resultados",
            "nav.contacts": "Contato",

            "hero.title1": "Cuidar de você",
            "hero.title2": "com intenção.",
            "hero.description": "Estética avançada, cuidado personalizado e uma experiência pensada para você.",
            "hero.button": "Agendar consulta",

            "philosophy.label": "Filosofia",
            "philosophy.title1": "Beleza",
            "philosophy.title2": "com propósito.",
            "philosophy.text1": "Acreditamos em uma estética que respeita a individualidade, valoriza a naturalidade e coloca o cuidado no centro de cada decisão.",
            "philosophy.text2": "Cada pessoa é diferente. Por isso, cada tratamento é pensado de forma personalizada, com atenção aos detalhes e uma abordagem verdadeiramente humana.",
            "philosophy.link": "Descobrir nossa abordagem",

            "intro.title": "Um espaço criado para cuidar de você.",
            "intro.text": "Mais do que procedimentos, criamos experiências. Um ambiente reservado, sofisticado e pensado para que cada visita seja um momento exclusivamente seu.",

            "services.label": "Especialidades",
            "services.title": "Expertise que se sente.",
            "services.description": "Uma seleção de serviços orientados para resultados naturais e uma experiência de excelência.",

            "service1.title": "Laser & Skin",
            "service1.text": "Tecnologia e cuidado para uma pele mais saudável e luminosa.",

            "service2.title": "Estética Avançada",
            "service2.text": "Tratamentos personalizados para realçar sua beleza natural.",

            "service3.title": "Tattoo Studio",
            "service3.text": "Arte, precisão e expressão individual.",

            "service4.title": "Barbershop",
            "service4.text": "Cuidado masculino com identidade e detalhe.",

            "editorial.title": "O detalhe transforma a experiência.",
            "editorial.text": "Desde o primeiro contato até o acompanhamento, cada detalhe é pensado para tornar sua experiência mais tranquila, personalizada e especial.",

            "results.label": "Resultados",
            "results.title": "Resultados que respeitam quem você é.",
            "results.text": "Nosso objetivo não é transformar quem você é. É valorizar aquilo que já existe, com equilíbrio, precisão e naturalidade.",
            "results.link": "Falar com a clínica",

            "cta.title1": "Comece",
            "cta.title2": "por você.",
            "cta.text": "Estamos em Aveiro para cuidar de você com intenção.",
            "cta.button": "Agendar consulta",

            "contacts.label": "Contato",
            "contacts.address": "Endereço",
            "contacts.phone": "Telefone",

            "footer.description": "Estética avançada com intenção.",
            "footer.rights": "Todos os direitos reservados."

        },


        "pt-PT": {

            loader: "A sua experiência começa aqui.",

            "nav.home": "Início",
            "nav.philosophy": "Filosofia",
            "nav.specialties": "Especialidades",
            "nav.results": "Resultados",
            "nav.contacts": "Contactos",

            "hero.title1": "Cuidar de si",
            "hero.title2": "com intenção.",
            "hero.description": "Estética avançada, cuidado personalizado e uma experiência pensada para si.",
            "hero.button": "Marcar consulta",

            "philosophy.label": "Filosofia",
            "philosophy.title1": "Beleza",
            "philosophy.title2": "com propósito.",
            "philosophy.text1": "Acreditamos numa estética que respeita a individualidade, valoriza a naturalidade e coloca o cuidado no centro de cada decisão.",
            "philosophy.text2": "Cada pessoa é diferente. Por isso, cada tratamento é pensado de forma personalizada, com atenção ao detalhe e uma abordagem verdadeiramente humana.",
            "philosophy.link": "Descobrir a nossa abordagem",

            "intro.title": "Um espaço criado para cuidar de si.",
            "intro.text": "Mais do que procedimentos, criamos experiências. Um ambiente reservado, sofisticado e pensado para que cada visita seja um momento exclusivamente seu.",

            "services.label": "Especialidades",
            "services.title": "Experiência que se sente.",
            "services.description": "Uma seleção de serviços orientados para resultados naturais e uma experiência de excelência.",

            "service1.title": "Laser & Skin",
            "service1.text": "Tecnologia e cuidado para uma pele mais saudável e luminosa.",

            "service2.title": "Estética Avançada",
            "service2.text": "Tratamentos personalizados para realçar a sua beleza natural.",

            "service3.title": "Tattoo Studio",
            "service3.text": "Arte, precisão e expressão individual.",

            "service4.title": "Barbershop",
            "service4.text": "Cuidado masculino com identidade e detalhe.",

            "editorial.title": "O detalhe transforma a experiência.",
            "editorial.text": "Desde o primeiro contacto até ao acompanhamento, cada detalhe é pensado para tornar a sua experiência mais tranquila, personalizada e especial.",

            "results.label": "Resultados",
            "results.title": "Resultados que respeitam quem é.",
            "results.text": "O nosso objetivo não é transformar quem é. É valorizar aquilo que já existe, com equilíbrio, precisão e naturalidade.",
            "results.link": "Falar com a clínica",

            "cta.title1": "Comece",
            "cta.title2": "por si.",
            "cta.text": "Estamos em Aveiro para cuidar de si com intenção.",
            "cta.button": "Marcar consulta",

            "contacts.label": "Contactos",
            "contacts.address": "Morada",
            "contacts.phone": "Telefone",

            "footer.description": "Estética avançada com intenção.",
            "footer.rights": "Todos os direitos reservados."

        },


        "en": {

            loader: "Your experience begins here.",

            "nav.home": "Home",
            "nav.philosophy": "Philosophy",
            "nav.specialties": "Specialties",
            "nav.results": "Results",
            "nav.contacts": "Contact",

            "hero.title1": "Care for yourself",
            "hero.title2": "with intention.",
            "hero.description": "Advanced aesthetics, personalised care and an experience designed around you.",
            "hero.button": "Book a consultation",

            "philosophy.label": "Philosophy",
            "philosophy.title1": "Beauty",
            "philosophy.title2": "with purpose.",
            "philosophy.text1": "We believe in an approach to aesthetics that respects individuality, values natural beauty and places care at the centre of every decision.",
            "philosophy.text2": "Every person is different. That is why every treatment is personalised, with attention to detail and a genuinely human approach.",
            "philosophy.link": "Discover our approach",

            "intro.title": "A space created to care for you.",
            "intro.text": "More than procedures, we create experiences. A private, sophisticated environment designed to make every visit a moment entirely your own.",

            "services.label": "Specialties",
            "services.title": "Expertise you can feel.",
            "services.description": "A selection of services focused on natural results and an exceptional experience.",

            "service1.title": "Laser & Skin",
            "service1.text": "Technology and care for healthier, more radiant skin.",

            "service2.title": "Advanced Aesthetics",
            "service2.text": "Personalised treatments designed to enhance your natural beauty.",

            "service3.title": "Tattoo Studio",
            "service3.text": "Art, precision and individual expression.",

            "service4.title": "Barbershop",
            "service4.text": "Men's grooming with identity and attention to detail.",

            "editorial.title": "Details transform the experience.",
            "editorial.text": "From the first contact to ongoing care, every detail is designed to make your experience calmer, more personal and more memorable.",

            "results.label": "Results",
            "results.title": "Results that respect who you are.",
            "results.text": "Our goal is not to transform who you are. It is to enhance what is already there, with balance, precision and natural results.",
            "results.link": "Talk to the clinic",

            "cta.title1": "Begin",
            "cta.title2": "with yourself.",
            "cta.text": "We are in Aveiro, ready to care for you with intention.",
            "cta.button": "Book a consultation",

            "contacts.label": "Contact",
            "contacts.address": "Address",
            "contacts.phone": "Phone",

            "footer.description": "Advanced aesthetics with intention.",
            "footer.rights": "All rights reserved."

        }

    };


    /* =================================================
       FONTES POR IDIOMA
    ================================================= */

    const languageFonts = {

        "pt-BR": {
            serif: '"Cormorant Garamond", serif',
            sans: '"DM Sans", sans-serif'
        },

        "pt-PT": {
            serif: '"Cormorant Garamond", serif',
            sans: '"Manrope", sans-serif'
        },

        "en": {
            serif: '"Cormorant Garamond", serif',
            sans: '"Manrope", sans-serif'
        }

    };


    /* =================================================
       TROCAR IDIOMA
    ================================================= */

    function changeLanguage(language, showLoader = true) {

        if (!translations[language]) {
            return;
        }

        const dictionary = translations[language];


        if (showLoader) {

            loader.classList.remove("hide");

            loaderText.textContent = dictionary.loader;

            setTimeout(() => {
                applyLanguage(language);
            }, 550);

            setTimeout(() => {
                loader.classList.add("hide");
            }, 1200);

        } else {

            applyLanguage(language);

        }

    }


    function applyLanguage(language) {

        const dictionary = translations[language];

        document.documentElement.lang = language;

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (dictionary[key]) {
                element.textContent = dictionary[key];
            }

        });


        currentLanguage.textContent = language.toUpperCase();


        /* FONTES */

        const fonts = languageFonts[language];

        document.documentElement.style.setProperty(
            "--serif",
            fonts.serif
        );

        document.documentElement.style.setProperty(
            "--sans",
            fonts.sans
        );


        /* SALVAR */

        localStorage.setItem(
            "intention-language",
            language
        );

    }


    /* =================================================
       LANGUAGE MENU
    ================================================= */

    languageButton.addEventListener("click", (event) => {

        event.stopPropagation();

        languageMenu.classList.toggle("open");

    });


    languageMenu.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", () => {

            const language = button.dataset.language;

            languageMenu.classList.remove("open");

            changeLanguage(language, true);

        });

    });


    document.addEventListener("click", () => {
        languageMenu.classList.remove("open");
    });


    /* =================================================
       MENU
    ================================================= */

    function openMenu() {

        mobileMenu.classList.add("open");
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");

        body.classList.add("menu-open");

    }


    function closeMobileMenu() {

        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

        body.classList.remove("menu-open");

    }


    menuToggle.addEventListener("click", () => {

        if (mobileMenu.classList.contains("open")) {
            closeMobileMenu();
        } else {
            openMenu();
        }

    });


    closeMenu.addEventListener("click", closeMobileMenu);


    document.querySelectorAll("[data-menu-link]").forEach(link => {

        link.addEventListener("click", closeMobileMenu);

    });


    /* ESC */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeMobileMenu();

            languageMenu.classList.remove("open");

        }

    });


    /* =================================================
       HEADER SCROLL
    ================================================= */

    function handleScroll() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    );


    /* =================================================
       TEMA
    ================================================= */

    const savedTheme =
        localStorage.getItem("intention-theme");

    if (savedTheme === "light") {

        body.classList.add("light");

        themeIcon.textContent = "☀";

    }


    themeToggle.addEventListener("click", () => {

        body.classList.toggle("light");

        const isLight =
            body.classList.contains("light");

        themeIcon.textContent =
            isLight ? "☀" : "☾";

        localStorage.setItem(
            "intention-theme",
            isLight ? "light" : "dark"
        );

    });


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".section, .editorial, .cta, .contacts, .service-item"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: .12
        }
    );


    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* =================================================
       LOADER INICIAL
    ================================================= */

    const savedLanguage =
        localStorage.getItem("intention-language");

    const browserLanguage =
        navigator.language || "pt-BR";

    let initialLanguage = "pt-BR";

    if (savedLanguage && translations[savedLanguage]) {

        initialLanguage = savedLanguage;

    } else if (browserLanguage.toLowerCase().startsWith("pt-pt")) {

        initialLanguage = "pt-PT";

    } else if (browserLanguage.toLowerCase().startsWith("en")) {

        initialLanguage = "en";

    }


    applyLanguage(initialLanguage);


    setTimeout(() => {

        loader.classList.add("hide");

    }, 1700);

});
