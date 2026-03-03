// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("in");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Smooth anchor
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (ev) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    ev.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Checklist modal
const modal = document.getElementById("checklistModal");
const openBtn = document.getElementById("openChecklist");
const closeBtn = document.getElementById("closeChecklist");
const copyBtn = document.getElementById("copyChecklist");
const goContact = document.getElementById("goContact");

if (openBtn && modal) openBtn.addEventListener("click", () => modal.showModal());
if (closeBtn && modal) closeBtn.addEventListener("click", () => modal.close());
if (goContact && modal) goContact.addEventListener("click", () => {
  modal.close();
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
});

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const items = [...document.querySelectorAll("#checklistContent li")].map(li => `- ${li.textContent.trim()}`);
    const text = `Checklist TI (Nubik)\n${items.join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copiado";
      setTimeout(() => copyBtn.textContent = "Copiar", 1200);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
  });
}

// Contact form -> mailto
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const v = (id) => document.getElementById(id)?.value?.trim() || "";

    const subject = encodeURIComponent("Diagnóstico estratégico - Nubik");
    const body = encodeURIComponent(
      `Nombre: ${v("nombre")}\nEmpresa: ${v("empresa")}\nRol: ${v("rol")}\nEmail: ${v("email")}\nTeléfono: ${v("telefono")}\n\nMensaje:\n${v("mensaje")}\n`
    );

    window.location.href = `mailto:contacto@nubik.mx?subject=${subject}&body=${body}`;
  });
}
