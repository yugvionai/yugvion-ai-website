// ================= PARTICLES =================
// ✅ Disable particles on mobile for smooth performance
if (document.getElementById("particles-js") && window.innerWidth > 768) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#14b8a6" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#3b82f6",
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" }
      },
      modes: { repulse: { distance: 100 } }
    },
    retina_detect: true
  });
}

// ================= FADE ANIMATION =================
const elements = document.querySelectorAll('.fade-up');

// ✅ Optimized scroll (less lag)
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// ================= COUNTER =================
const counters = document.querySelectorAll('.counter');
let started = false;

window.addEventListener('scroll', () => {
  const section = document.querySelector('.stats');
  if (!section) return;

  if (window.scrollY + window.innerHeight > section.offsetTop && !started) {
    counters.forEach(counter => {
      let target = +counter.getAttribute('data-target');
      let count = 0;

      let update = () => {
        if (count < target) {
          count += target / 60; // ✅ faster & smoother
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(update); // ✅ better than setTimeout
        } else {
          counter.innerText = target + "+";
        }
      };

      update();
    });

    started = true;
  }
});

// ================= MOBILE MENU =================
function openMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.add("active");
}

function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.remove("active");
}

// ================= NAVBAR SCROLL =================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ================= TYPING EFFECT =================
const typingElement = document.querySelector(".typing-text");

if (typingElement) {
  const text = "Founder Story - Preetham C";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 50);
    }
  }

  typeEffect();
}

// ================= POPUP AUTO =================
window.addEventListener("load", function () {
  const popup = document.getElementById("story-popup");
  if (!popup) return;

  if (!localStorage.getItem("popupShown")) {
    setTimeout(() => {
      popup.style.display = "flex";
      localStorage.setItem("popupShown", "true");
    }, 2000);
  }
});

// ================= POPUP FUNCTIONS =================
function openStory() {
  const popup = document.getElementById("story-popup");
  if (popup) popup.style.display = "flex";
}

function closeStory() {
  const popup = document.getElementById("story-popup");
  if (popup) popup.style.display = "none";
}