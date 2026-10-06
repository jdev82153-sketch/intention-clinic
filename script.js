/* =========================================
   INTENTION CLINIC
   INTERACTIONS
========================================= */


/* =========================================
   HEADER ON SCROLL
========================================= */

const header = document.getElementById("header");

function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    nav.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        nav.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("intention-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "intention-theme",
        isDark ? "dark" : "light"
    );

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,

            rootMargin: "0px 0px -50px 0px"
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   SMOOTH ANCHOR
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* =========================================
   PARALLAX HERO
========================================= */

const heroBackground =
    document.querySelector(".hero-background");


window.addEventListener("scroll", () => {

    if (!heroBackground) return;

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        heroBackground.style.transform =
            `scale(1.04) translateY(${scroll * 0.12}px)`;

    }

});


/* =========================================
   CURSOR EFFECT — DESKTOP
========================================= */

if (window.innerWidth > 1000) {

    const buttons =
        document.querySelectorAll(
            ".button, .header-book, .contact-button, .text-link"
        );


    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            document.body.classList.add("hovering");

        });


        button.addEventListener("mouseleave", () => {

            document.body.classList.remove("hovering");

        });

    });

}


/* =========================================
   YEAR AUTOMATIC
========================================= */

const footerYear =
    document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} INTENTION Clinic`;

}


/* =========================================
   INTRO CLEANUP
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const intro =
            document.getElementById("intro");

        if (intro) {

            intro.remove();

        }

    }, 3500);

});
