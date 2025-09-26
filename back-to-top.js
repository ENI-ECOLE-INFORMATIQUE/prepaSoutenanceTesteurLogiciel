(function () {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  const THRESHOLD = 400; // px de scroll avant d'afficher le bouton

  function toggleButton() {
    if (window.scrollY > THRESHOLD) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      window.scrollTo(0, 0);
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Affichage conditionnel au scroll
  window.addEventListener('scroll', toggleButton, { passive: true });
  // Premier état au chargement
  toggleButton();

  // Action au clic
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToTop();
  });
})();
