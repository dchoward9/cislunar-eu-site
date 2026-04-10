const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const form = document.getElementById('contact-form');
const success = document.getElementById('success-msg');

let navTicking = false;
const updateNav = () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  navTicking = false;
};
window.addEventListener('scroll', () => {
  if (!navTicking) {
    window.requestAnimationFrame(updateNav);
    navTicking = true;
  }
}, { passive: true });
updateNav();

if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
} else {
  document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'));
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (mobileMenu?.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    }
  });
});

hamburger?.addEventListener('click', () => {
  const open = mobileMenu?.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

const sent = new URLSearchParams(window.location.search).get('sent');
if (sent === '1' && form && success) {
  form.style.display = 'none';
  success.style.display = 'block';
  window.setTimeout(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
  history.replaceState(null, '', window.location.pathname + window.location.hash);
}
