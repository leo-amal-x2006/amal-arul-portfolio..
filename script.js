// Re// ================================
// AMAL ARUL PORTFOLIO
// SCRIPT.JS
// ================================

// Initialize AOS Animation Library
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ================================
// TYPING EFFECT
// ================================

const typingText = document.getElementById("typing-text");

const roles = [
    "Industrial Engineering Student",
    "Event Organizer",
    "CETian",
    "Problem Solver",
    "Continuous Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ================================
// NAVBAR ACTIVE LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {
            link.classList.add("active");
        }
    });
});

// ================================
// SCROLL TO TOP BUTTON
// ================================

// Create button dynamically

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Style button

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.boxShadow =
    "0 0 20px rgba(56,189,248,0.5)";

// Show button on scroll

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll to top

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================================
// HERO IMAGE FLOAT EFFECT
// ================================

const heroImage =
    document.querySelector(".hero-image img");

if (heroImage) {

    let position = 0;

    setInterval(() => {

        position =
            position === 0 ? 10 : 0;

        heroImage.style.transform =
            `translateY(${position}px)`;

    }, 2000);
}

// ================================
// CARD HOVER GLOW EFFECT
// ================================

const cards =
    document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 0 25px rgba(56,189,248,0.35)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "0 0 0 rgba(0,0,0,0)";
    });
});

// ================================
// FOOTER YEAR AUTO UPDATE
// ================================

const footer = document.querySelector("footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        `
        <p>
        © ${year} Amal Arul.
        Learning, Leading, and Growing Through Every Opportunity.
        </p>
        `;
}

// ================================
// PAGE LOADER FADE-IN
// ================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);
});

// ================================
// CONSOLE SIGNATURE
// ================================

console.log(
    "%cPortfolio Developed for Amal Arul",
    "color:#38bdf8; font-size:16px; font-weight:bold;"
);place with the full script.js generated in chat
