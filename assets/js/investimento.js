fetch('investimento.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('investimento-section').innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar o hero:', err));