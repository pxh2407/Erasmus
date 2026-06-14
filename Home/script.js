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

// --- Dropdown sottomenu navigazione (Germania, Italia, Lettonia, Polonia) ---
(function () {
    var MENUS = [
        { btnId: 'navGermanyBtn', dropId: 'navGermanyDropdown' },
        { btnId: 'navItalyBtn',   dropId: 'navItalyDropdown'   },
        { btnId: 'navLatviaBtn',  dropId: 'navLatviaDropdown'  },
        { btnId: 'navPolandBtn',  dropId: 'navPolandDropdown'  }
    ];

    var mobileMQ = window.matchMedia('(max-width: 1024px), (pointer: coarse)');
    var isMobile = function () { return mobileMQ.matches; };

    // Costruisce gli oggetti { btn, drop, item } per ogni menu presente nella pagina
    var entries = MENUS.map(function (m) {
        var btn  = document.getElementById(m.btnId);
        var drop = document.getElementById(m.dropId);
        var item = btn && btn.closest('.site-nav__item--has-dropdown');
        return (btn && drop && item) ? { btn: btn, drop: drop, item: item } : null;
    }).filter(Boolean);

    function chiudiTutti() {
        entries.forEach(function (e) {
            e.item.classList.remove('is-open');
            e.btn.setAttribute('aria-expanded', 'false');
        });
    }

    entries.forEach(function (entry) {
        var btn  = entry.btn;
        var drop = entry.drop;
        var item = entry.item;

        function posiziona() {
            // Solo desktop: position:fixed calcolata via JS
            if (isMobile()) {
                drop.style.top  = '';
                drop.style.left = '';
                return;
            }
            var r = btn.getBoundingClientRect();
            drop.style.top  = (r.bottom + 2) + 'px';
            drop.style.left = r.left + 'px';
        }
        function open() {
            chiudiTutti();          // chiude eventuali altri dropdown aperti
            posiziona();
            item.classList.add('is-open');
            btn.setAttribute('aria-expanded', 'true');
        }
        function close() {
            item.classList.remove('is-open');
            btn.setAttribute('aria-expanded', 'false');
        }

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            item.classList.contains('is-open') ? close() : open();
        });

        window.addEventListener('resize', function () {
            if (item.classList.contains('is-open')) posiziona();
        }, { passive: true });
    });

    // Clic fuori → chiude tutto (ignora clic sul selettore lingua)
    document.addEventListener('click', function (e) {
        var langSwitcher = document.getElementById('langSwitcher');
        var langDropdown = document.getElementById('langDropdown');
        var isLangClick  = (langSwitcher && langSwitcher.contains(e.target)) ||
                           (langDropdown && langDropdown.contains(e.target));
        if (isLangClick) return;
        var inMenu = entries.some(function (en) {
            return en.item.contains(e.target) || en.drop.contains(e.target);
        });
        if (!inMenu) chiudiTutti();
    });

    // ESC → chiude tutto
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') chiudiTutti();
    });

    // Scroll → su desktop chiude tutto; su mobile non chiude (il menu è in flusso)
    window.addEventListener('scroll', function () {
        if (!isMobile()) chiudiTutti();
    }, { passive: true });

    // Cambio layout (desktop ↔ mobile) → chiude tutti i dropdown e il menu hamburger
    mobileMQ.addEventListener('change', function () {
        chiudiTutti();
        var nav = document.getElementById('siteNav');
        var hamburger = document.getElementById('navHamburger');
        if (nav) nav.classList.remove('is-mobile-open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    });
}());

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
