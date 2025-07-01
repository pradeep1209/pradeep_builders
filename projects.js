// Fade-in animation on scroll
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 200);
  });
});
// Optional: You can add animations or dynamic loading here later.
console.log("Projects loaded successfully!");
