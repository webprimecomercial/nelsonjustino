document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.depoimentos-container');
  const bolinhas = document.querySelectorAll('.bolinha');
  const depoimentos = document.querySelectorAll('.depoimento');
  let isDragging = false;
  let startX, scrollLeft;

  // Função para atualizar bolinhas
  function updateBolinhas() {
    const scrollPosition = container.scrollLeft + (container.offsetWidth / 2);
    
    depoimentos.forEach((depoimento, index) => {
      if (depoimento.offsetLeft <= scrollPosition && 
          depoimento.offsetLeft + depoimento.offsetWidth > scrollPosition) {
        bolinhas.forEach(b => b.classList.remove('ativa'));
        bolinhas[index].classList.add('ativa');
      }
    });
  }

  // Navegação por bolinhas
  bolinhas.forEach(bolinha => {
    bolinha.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      container.scrollTo({
        left: depoimentos[index].offsetLeft,
        behavior: 'smooth'
      });
    });
  });

  // Controle de arraste para desktop e mobile
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  }, { passive: true });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
    updateBolinhas();
  });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
    updateBolinhas();
  }, { passive: true });

  container.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
    container.style.userSelect = '';
  });

  container.addEventListener('touchend', () => {
    isDragging = false;
  });

  container.addEventListener('scroll', updateBolinhas);

  // Inicializa
  updateBolinhas();
});