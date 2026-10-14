 // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .skill-card').forEach(el => observer.observe(el));

    // Active nav
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const navObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => navObs.observe(s));

    // Mobile menu
    const nav = document.querySelector('nav');
    const navToggle = document.getElementById('navToggle');

    const setMenu = open => {
      nav.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open);
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      navToggle.textContent = open ? '✕' : '☰';
    };

    navToggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    navLinks.forEach(a => a.addEventListener('click', () => setMenu(false)));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - 66, behavior: 'smooth' });
      });
    });
