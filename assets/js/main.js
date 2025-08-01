document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav a");

  function showSection(id) {
    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === id) sec.classList.add("active");
    });
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      history.pushState(null, "", `#${targetId}`);
      showSection(targetId);
    });
  });

  // Mostrar la sección correcta al cargar
  const current = window.location.hash.substring(1) || "inicio";
  showSection(current);
});