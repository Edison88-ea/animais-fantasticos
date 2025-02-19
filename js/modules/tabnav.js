export default function initTabnav() {
  // Seleciona todos os elementos 'li' com a classe 'js-tabmenu' (itens do menu)
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');

  // Seleciona todos os elementos 'section' com a classe 'js-tabcontent' (conteúdos das abas)
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  // 1° Função para ativar uma aba específica pelo índice
  function activeTab(index) {
    // Remove a classe 'ativo' de todos os conteúdos
    tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });

    // Adiciona a classe 'ativo' ao conteúdo correspondente ao índice
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  // Verifica se foram encontrados elementos para ambos o menu e o conteúdo
  if (tabMenu.length && tabContent.length) {
    // Ativa a primeira aba por padrão
    tabContent[0].classList.add("ativo");

    // Adiciona um ouvinte de evento de clique a cada item do menu
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        // Chama a função 'activeTab' com o índice do item clicado
        activeTab(index);
      });
    });
  }
}
