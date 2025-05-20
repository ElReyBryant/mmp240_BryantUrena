
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      document.querySelectorAll('.program-card').forEach(card => {
        card.style.display = card.classList.contains(category) ? 'block' : 'none';
      });
    });
  });