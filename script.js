// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// Typewriter Effect
const text = "Welcome to My Portfolio!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

// Parallax Effect
window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    document.querySelector(".parallax").style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
