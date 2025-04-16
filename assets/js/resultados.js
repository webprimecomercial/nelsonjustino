fetch('resultados.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('resultados-section').innerHTML = html;
  })
  .catch(err => console.error('Erro ao carregar o resultados:', err));