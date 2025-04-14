
fetch('sobre.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('sobre-section').innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar o hero:', err));
