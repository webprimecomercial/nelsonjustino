
fetch('planos.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('planos-section').innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar o hero:', err));
