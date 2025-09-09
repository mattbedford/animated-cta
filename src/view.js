// front-end behavior; runs only when the block is present
(function(){
    const sections = document.querySelectorAll('.montage-section');
    if (!sections.length) return;

    // Apply picked accent
    sections.forEach(sec => {
        const accent = sec.getAttribute('data-accent');
        if (accent) sec.style.setProperty('--accent', accent);
    });

    // Respect reduced motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return; // no animation

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('is-animated', entry.isIntersecting);
        });
    }, { threshold: 0.3, rootMargin: '0px 0px -10% 0px' });

    sections.forEach(sec => io.observe(sec));
})();
