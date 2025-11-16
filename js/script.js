const revealCards = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('show');
    }
  });
};

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  revealCards();
});

document.addEventListener('DOMContentLoaded', revealCards);
