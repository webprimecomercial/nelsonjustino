
  const toggleBtn = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

