const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.card').length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });

  // Show/hide buttons based on currentIndex
  leftBtn.classList.toggle('hidden', currentIndex === 0);
  rightBtn.classList.toggle('hidden', currentIndex === totalItems - 1);
}

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

rightBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}, 4000); // Auto-scroll every 4 seconds

updateCarousel();
