fetch('footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer-section').innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar o consulta:', err));