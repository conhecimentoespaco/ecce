document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu');
  const nav = document.querySelector('#main-nav');
  const year = document.querySelector('#year');

  // Menu de navegação para dispositivos móveis
  if (button && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menu');
      button.textContent = '☰';
    };

    button.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');

      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute(
        'aria-label',
        isOpen ? 'Fechar menu' : 'Abrir menu'
      );
      button.textContent = isOpen ? '×' : '☰';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Fecha o menu ao premir a tecla Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        button.focus();
      }
    });

    // Fecha o menu quando se regressa a um ecrã de computador
    window.addEventListener('resize', () => {
      if (window.innerWidth > 850) {
        closeMenu();
      }
    });
  }

  // Atualiza automaticamente o ano do rodapé
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
