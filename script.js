(() => {
  // Prevent browser scroll restoration from reopening the landing page near the bottom.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  const resetToTop = () => {
    if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  window.addEventListener('load', resetToTop, { once: true });
  window.addEventListener('pageshow', (event) => {
    if (event.persisted || !location.hash) requestAnimationFrame(resetToTop);
  });


  // Discourage ordinary copying of visible site text.
  document.addEventListener('copy', (event) => event.preventDefault());
  document.addEventListener('cut', (event) => event.preventDefault());
  document.addEventListener('selectstart', (event) => event.preventDefault());

  const items = [...document.querySelectorAll('.faq-item')];
  items.forEach((item) => {
    const button = item.querySelector('.faq-question');
    button.addEventListener('click', () => {
      const willOpen = !item.classList.contains('open');
      items.forEach((other) => {
        other.classList.remove('open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
