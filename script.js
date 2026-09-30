(() => {
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
