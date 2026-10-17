document.addEventListener('DOMContentLoaded', () => {

  // Alternar entre as abas da página (Criados por mim, Participando, Anteriores)
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Filtro de Busca Simples nos cards
  const searchInput = document.querySelector('.search-input');
  const cards = document.querySelectorAll('.card');

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const description = card.querySelector('.description').textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });

});
