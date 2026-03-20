// ================= NAVIGATION LOGIC =================
// File: js/modules/navigation.js

const header = document.getElementById('header');
const links = document.querySelectorAll('.header__link');
const sections = document.querySelectorAll('section');

/* ================= SMOOTH SCROLL ================= */
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/* ================= HEADER SCROLL STATE ================= */
/* Adds background after scrolling */

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


/* ================= ACTIVE LINK ================= */
/* Detects which section is in viewport */

window.addEventListener('scroll', () => {

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Offset for header height
    if (window.scrollY >= sectionTop - 120) {
      currentSection = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });

});