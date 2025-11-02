// Анимации появления
const fadeElements = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) el.classList.add('visible');
  });
});

// Pop-up
const popup = document.getElementById('popup');
document.getElementById('open-popup').onclick = () => popup.style.display = 'flex';
document.getElementById('close-popup').onclick = () => popup.style.display = 'none';

// Бургер меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');
burger.onclick = () => nav.classList.toggle('show');
