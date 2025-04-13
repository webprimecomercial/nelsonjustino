
fetch('hero.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('hero-section').innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar o hero:', err));

  //MOBILE
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const close = document.getElementById("closeMenu");

  toggle.addEventListener("click", () => {
    menu.classList.add("show");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("show");
  });

  // fecha ao clicar fora do menu
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("show");
    }
  });