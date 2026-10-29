// ============================================================
// Workshop LUTE — Modulo 2 ITA
// Comportamenti minimi: pulsante "torna all'inizio"
// ============================================================

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
