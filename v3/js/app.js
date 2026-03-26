/**
 * NUBIK COMMAND CENTER
 * Logic & Interactions v2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Reveal Elements on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Simple Form Handling (Log only for Prototype)
    const form = document.getElementById('diagnostico-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('DIAGNOSTICO_REQUEST: Enrutando a departamento de Ingeniería...');
            alert('Solicitud enviada al Protocolo de Ingeniería Nubik.');
        });
    }

    // 4. Header Scroll Effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    console.log('NUBIK_CORE: Protocolo de Interfaz Activo.');
});
