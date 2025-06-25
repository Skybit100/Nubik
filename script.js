// Cambia fondo del header al hacer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) header.classList.replace('transparent','solid');
  else header.classList.replace('solid','transparent');
});

// Observer para animar secciones al entrar en viewport
const faders = document.querySelectorAll('.fade-in-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));
