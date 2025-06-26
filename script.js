function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('visible');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('visible');
    window.scrollTo(0, 0);
  }
}
