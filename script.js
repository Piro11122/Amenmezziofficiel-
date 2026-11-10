
document.addEventListener("DOMContentLoaded", function () {

  // MOBILE MENU
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  // TYPING EFFECT
  const typingElement = document.getElementById("typing");

  const words = [
    "Digital Products.",
    "AI Experiences.",
    "New Ideas.",
    "Technology."
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 45 : 90;

    if (!deleting && charIndex === currentWord.length) {
      deleting = true;
      speed = 1400;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  // CURRENT YEAR
  document.getElementById("year").textContent =
    new Date().getFullYear();

});
