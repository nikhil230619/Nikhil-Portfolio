const reveals = document.querySelectorAll(".reveal");
const bars = document.querySelectorAll(".progress-bar");

function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

function animateBars() {
  bars.forEach(bar => {
    bar.style.width = bar.getAttribute("data-width");
  });
}

// ABOUT TYPING
const aboutText = `I am a passionate developer with strong skills in Java,
Data Science, Machine Learning, and Web Development.

I enjoy building clean, scalable, and impactful solutions that solve
real-world problems and deliver value.`;

const aboutEl = document.getElementById("about-typing");
let i = 0, started = false;

function typeAbout() {
  if (i < aboutText.length) {
    aboutEl.textContent += aboutText.charAt(i++);
    setTimeout(typeAbout, 35);
  }
}

window.addEventListener("scroll", () => {
  revealOnScroll();
  animateBars();

  if (!started && document.getElementById("about").getBoundingClientRect().top < window.innerHeight - 150) {
    started = true;
    typeAbout();
  }
});

window.onload = revealOnScroll;
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when link clicked (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});