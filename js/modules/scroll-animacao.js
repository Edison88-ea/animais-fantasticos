export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  let windowMetade; // Declara windowMetade no escopo global (ou do módulo)

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0; // Usa windowMetade aqui
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
  }

  // Inicializa windowMetade e adiciona o evento de scroll *dentro* do if
  if (sections.length) {
    windowMetade = window.innerHeight * 0.6; // Atribui o valor *depois* da declaração
    window.addEventListener("scroll", animaScroll);
  }

  animaScroll(); // Chamada inicial para exibir elementos já visíveis
}
