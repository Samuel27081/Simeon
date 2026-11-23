// Mobile navigation + progressive enhancement for GSAP scroll animations.
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

// Close the mobile menu when moving back to desktop layout.
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

if (window.gsap && window.ScrollTrigger &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-copy > *', {
    y: 22, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    delay: .15
  });
  gsap.from('.hero-visual', {
    y: 35, opacity: 0, duration: 1, ease: 'power3.out', delay: .35
  });

  gsap.utils.toArray('.reveal').forEach((element) => {
    if (element.closest('.hero')) return;
    gsap.from(element, {
      y: 28, opacity: 0, duration: .75, ease: 'power2.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true }
    });
  });

  gsap.utils.toArray('.feature-row').forEach((row, index) => {
    gsap.from(row, {
      x: -16, opacity: 0, duration: .45, delay: index * .045,
      scrollTrigger: { trigger: '.feature-list', start: 'top 82%', once: true }
    });
  });
}
