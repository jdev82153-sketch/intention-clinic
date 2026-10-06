/* =====================================================
   INTENTION CLINIC
   Interactive functions
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MENU
    ================================================= */

    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll(".menu a");

    if (menuButton && menu) {

        menuButton.addEventListener("click", () => {

            menuButton.classList.toggle("active");
            menu.classList.toggle("open");
            document.body.classList.toggle("no-scroll");

        });

        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                menuButton.classList.remove("active");
                menu.classList.remove("open");
                document.body.classList.remove("no-scroll");

            });

        });
    }


    /* =================================================
       THEME
    ================================================= */

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        const savedTheme = localStorage.getItem("intention-theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
        }

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            const isLight =
                document.body.classList.contains("light-mode");

            localStorage.setItem(
                "intention-theme",
                isLight ? "light" : "dark"
            );

        });

    }


    /* =================================================
       SCROLL ANIMATIONS
    ================================================= */

    const animatedElements = document.querySelectorAll(
        ".section-number, " +
        ".philosophy-content, " +
        ".intro-content, " +
        ".service-card, " +
        ".editorial-text, " +
        ".result-image, " +
        ".notes-content, " +
        ".notes-image, " +
        ".cta-content, " +
        ".contact-left, " +
        ".contact-right"
    );

    animatedElements.forEach(element => {
        element.classList.add("fade-in");
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
            threshold: 0.12
        }
    );


    animatedElements.forEach(element => {
        observer.observe(element);
    });


    /* =================================================
       SERVICE CARDS
    ================================================= */

    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 80}ms`;

    });


    /* =================================================
       HERO PARALLAX
    ================================================= */

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        window.addEventListener(
            "scroll",
            () => {

                const scrollPosition = window.scrollY;

                if (scrollPosition < window.innerHeight) {

                    heroImage.style.transform =
                        `scale(1) translateY(${scrollPosition * 0.12}px)`;

                }

            },
            { passive: true }
        );

    }


    /* =================================================
       CURRENT YEAR
    ================================================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =================================================
       ESC CLOSE MENU
    ================================================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (menu && menu.classList.contains("open")) {

                menu.classList.remove("open");

                if (menuButton) {
                    menuButton.classList.remove("active");
                }

                document.body.classList.remove("no-scroll");

            }

        }

    });

});
