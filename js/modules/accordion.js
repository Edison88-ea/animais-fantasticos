export default // Função para inicializar o acordeão
function initAccordion() {
  // Seleciona todos os elementos 'dt' (títulos) com a classe 'js-accordion'
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  // Define a classe CSS para indicar o estado ativo do acordeão
  const activeClass = "ativo";
  // Função para ativar/desativar um acordeão ao clicar no título
  function activeAccordion() {
    // Alterna a classe 'ativo' no título
    this.classList.toggle(activeClass);
    // Alterna a classe 'ativo' no conteúdo correspondente
    this.nextElementSibling.classList.toggle(activeClass);
  }

  // Verifica se foram encontrados elementos de acordeão
  if (accordionList.length) {
    // Ativa o primeiro acordeão por padrão
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    // Adiciona um ouvinte de evento de clique a cada título do acordeão
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
