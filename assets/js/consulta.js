fetch('consulta.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('consulta-section').innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar o consulta:', err));