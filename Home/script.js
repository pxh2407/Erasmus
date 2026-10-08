// ============================================================
// Home — Erasmus LUTE
// Pulsante "torna all'inizio" + dropdown sottomenu Italia
// ============================================================

// --- Pulsante torna all'inizio ---
(function () {
    const toTop = document.getElementById('toTop');
    if (!toTop) return;

    const THRESHOLD = 400;

    const update = () => {
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        toTop.classList.toggle('is-visible', y > THRESHOLD);
    };

    toTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', update, { passive: true });
    update();
})();


// --- Toggle menu hamburger (solo mobile) ---
(function () {
    var hamburger = document.getElementById('navHamburger');
    var nav = document.getElementById('siteNav');
    if (!hamburger || !nav) return;

    function apri() {
        nav.classList.add('is-mobile-open');
        hamburger.setAttribute('aria-expanded', 'true');
    }
    function chiudi() {
        nav.classList.remove('is-mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
        // Chiude anche eventuali sottomenù aperti
        nav.querySelectorAll('.site-nav__item--has-dropdown.is-open').forEach(function (it) {
            it.classList.remove('is-open');
            var b = it.querySelector('.site-nav__link');
            if (b) b.setAttribute('aria-expanded', 'false');
        });
    }

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.contains('is-mobile-open') ? chiudi() : apri();
    });

    // Click su un LINK ATTIVO del menu → chiude il menu hamburger
    // (i pulsanti dropdown NON chiudono — devono poter aprire il sottomenù interno)
    nav.addEventListener('click', function (e) {
        var link = e.target.closest('a.site-nav__link, a.site-nav__dropdown-link');
        if (!link) return;
        // Esclude i toggler dei dropdown (es. Italy, Germany...) — hanno aria-haspopup="true"
        if (link.getAttribute('aria-haspopup') === 'true') return;
        // Esclude i link "dummy" con href="#"
        var href = link.getAttribute('href');
        if (!href || href === '#' || href === '') return;
        chiudi();
    });

    // Click fuori dalla nav → chiude
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) chiudi();
    });

    // ESC → chiude
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') chiudi();
    });
}());

// --- Comparsa morbida delle sezioni allo scroll ---
(function () {
    var elementi = document.querySelectorAll('.reveal');
    if (!elementi.length) return;

    // Se il browser non supporta IntersectionObserver o l'utente preferisce
    // niente animazioni → mostra tutto subito.
    var noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || noMotion) {
        elementi.forEach(function (el) { el.classList.add('is-visible'); });
        return;
    }

    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);   // anima una sola volta
            }
        });
    }, { threshold: 0.12 });

    elementi.forEach(function (el) { obs.observe(el); });
}());
