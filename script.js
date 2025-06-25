document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('data-section');
    document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('visible'));
    document.getElementById(sectionId).classList.add('visible');
  });
});
