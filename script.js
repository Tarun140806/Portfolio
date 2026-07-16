// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const tabs = document.querySelector('.tabs');
  if (toggle && tabs) {
    toggle.addEventListener('click', () => tabs.classList.toggle('open'));
  }

  // Hero terminal typing animation (index page only)
  const typeTargets = document.querySelectorAll('[data-type]');
  if (typeTargets.length === 0) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  typeTargets.forEach((el, i) => {
    const full = el.getAttribute('data-type');
    if (reduceMotion) {
      el.textContent = full;
      return;
    }
    el.textContent = '';
    const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
    setTimeout(() => {
      let idx = 0;
      const speed = 28;
      const interval = setInterval(() => {
        el.textContent = full.slice(0, idx + 1);
        idx++;
        if (idx >= full.length) {
          clearInterval(interval);
          const next = el.closest('.terminal-line')?.nextElementSibling;
          if (next) next.style.opacity = '1';
        }
      }, speed);
    }, delay);
  });
});
