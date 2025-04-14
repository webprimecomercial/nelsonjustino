  const toggleBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('closeMenu');
  const menu = document.getElementById('mobileMenu');
  const links = menu.querySelectorAll('a');

  toggleBtn.addEventListener('click', () => {
    menu.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('show');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });

