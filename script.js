window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
      const distanceToTop = element.getBoundingClientRect().top;
      if (distanceToTop < window.innerHeight) {
        element.classList.add('show');
      }
    });
  });