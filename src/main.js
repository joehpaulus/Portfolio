/**
 * Nav: highlight current page
 * Works with static HTML (index.html, work.html, about.html, contact.html)
 */
function setActiveNav() {
  const path = window.location.pathname;
  const page = path.endsWith('/') || path.endsWith('index.html') || path === ''
    ? 'index'
    : path.replace(/\.html$/, '').split('/').pop();

  document.querySelectorAll('.nav a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const linkPage = href === 'index.html' || href === '/' ? 'index' : href.replace(/\.html$/, '');
    a.classList.toggle('nav-active', linkPage === page);
  });
}

/**
 * Optional: subtle reveal on scroll for project cards and sections
 */
function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.project-card, .about-content, .contact-links').forEach((el) => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  setupReveal();
  setupMobileNav();
});

/**
 * Mobile nav: toggle dropdown when hamburger is clicked, close on link click or outside click
 */
function setupMobileNav() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!header || !toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (header.classList.contains('nav-open') && !header.contains(e.target)) {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}
