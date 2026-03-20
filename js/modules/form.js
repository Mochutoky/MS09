// ================= CONTACT FORM JS =================
// File: js/modules/form.js

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const contact = form.contact.value.trim();
  const message = form.message.value.trim();

  // Basic validation
  if (!name || !contact || !message) {
    alert('(Пожалуйста, заполните все поля)');
    return;
  }

  // Simple success feedback (no backend)
  alert('(Заявка отправлена)');

  // Reset form
  form.reset();
});