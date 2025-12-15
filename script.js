/* ===============================
   TYPING TEXT ANIMATION
================================ */

const texts = [
  "Computer Science Student",
  "Aspiring Software Engineer",
  "Java | Python | Web Developer",
  "Cyber Security Enthusiast"
];

let index = 0;       // Current text index
let charIndex = 0;   // Current character index

const typingSpeed = 80;     // Typing speed (ms)
const eraseSpeed = 30;      // Erasing speed (ms)
const delayBetween = 1500;  // Pause before erase

const typingElement = document.getElementById("typing");


function typeText() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;

    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetween);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent =
      texts[index].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseText, eraseSpeed);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, typingSpeed);
  }
}


/* ===============================
   INITIALIZE TYPING
================================ */

document.addEventListener("DOMContentLoaded", () => {
  typeText();
});


/* ===============================
   INTRO SCREEN REMOVAL
================================ */

setTimeout(() => {
  const intro = document.getElementById("intro");
  if (intro) {
    intro.style.display = "none";
  }
}, 3600);
