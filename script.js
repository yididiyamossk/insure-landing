const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('primary-nav');

function closeNav() {
  nav.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function openNav() {
  nav.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.contains('is-open');
  isOpen ? closeNav() : openNav();
});

// Close the mobile nav after selecting a link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNav);
});

// Close the mobile nav on resize up to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) closeNav();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});
