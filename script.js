/* =====================================================
   INTENTION CLINIC
   INTERACTIONS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================== */

    const loader = document.querySelector(".page-loader");

    setTimeout(() => {
        loader.classList.add("hidden");

        document.body.classList.add("page-loaded");

    }, 1200);


    /* =========================
       HEADER SCROLL
    ========================== */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =========================
       MOBILE MENU
    ========================== */

    const menuButton = document.querySelector("#menuButton");
    const mobileMenu = document.querySelector("#mobileMenu");
    const mobileLinks = document.querySelectorAll(
        ".mobile-menu a"
    );

    function toggleMenu() {

        const isOpen =
            mobileMenu.classList.contains("open");

        mobileMenu.classList.toggle(
            "open",
            !isOpen
        );

        menuButton.classList.toggle(
            "active",
            !isOpen
        );

        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        document.body.classList.toggle(
            "menu-open",
            !isOpen
        );

    }

    menuButton.addEventListener(
        "click",
        toggleMenu
    );


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =========================
       THEME
    ========================== */

    const themeButton =
        document.querySelector("#themeButton");

    const savedTheme =
        localStorage.getItem(
            "intention-theme"
        );

    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        themeButton.textContent = "☀";

    }


    themeButton.addEventListener(
        "click",
        () => {

            const isLight =
                document.body.classList.toggle(
                    "light-mode"
                );

            themeButton.textContent =
                isLight ? "☀" : "☾";

            localStorage.setItem(
                "intention-theme",
                isLight ? "light" : "dark"
            );

        }
    );


    /* =========================
       SMOOTH ANCHOR
    ========================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        targetId === "#" ||
                        !document.querySelector(
                            targetId
                        )
                    ) {
                        return;
                    }

                    event.preventDefault();

                    document
                        .querySelector(targetId)
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        });


    /* =========================
       HERO PARALLAX
    ========================== */

    const heroBackground =
        document.querySelector(
            ".hero-background"
        );

    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;

            if (scroll < window.innerHeight) {

                heroBackground.style.transform =
                    `translateY(${scroll * 0.18}px) scale(1.02)`;

            }

        },
        {
            passive: true
        }
    );


    /* =========================
       CURSOR EFFECT — DESKTOP
    ========================== */

    if (window.innerWidth > 900) {

        const interactiveElements =
            document.querySelectorAll(
                "a, button"
            );

        interactiveElements.forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {
                    element.style.transition =
                        "transform .3s ease";
                }
            );

        });

    }

});
