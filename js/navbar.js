const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {
navLinks.classList.toggle('open');
hamburger.classList.toggle('active');
});