// ================= MAIN ENTRY =================
// File: js/main.js

// Import all modules (modular architecture)
import './modules/navigation.js';
import './modules/animations.js';
import './modules/form.js';

// Optional: utils (если используешь helper функции)
// import './utils/helpers.js';


/* ================= APP INITIALIZATION ================= */

document.addEventListener('DOMContentLoaded', () => {
  console.log('[App] Initialized');

  // ================= SAFETY CHECK =================
  // Проверяем, что основные секции существуют
  const sections = document.querySelectorAll('section');

  if (sections.length === 0) {
    console.warn('[App] No sections found in DOM');
  } else {
    console.log(`[App] Sections detected: ${sections.length}`);
  }


  // ================= DEBUG NAVIGATION =================
  const links = document.querySelectorAll('.header__link');

  if (links.length === 0) {
    console.warn('[App] Navigation links not found');
  }


  // ================= FALLBACK FOR ANIMATIONS =================
  // Если animations.js не сработал — показываем секции
  setTimeout(() => {
    document.querySelectorAll('section').forEach(section => {
      if (!section.classList.contains('visible')) {
        section.classList.add('visible');
      }
    });
  }, 500);


  // ================= SMOOTH SCROLL FALLBACK =================
  // Если navigation.js не работает, это гарантирует базовый scroll
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

});