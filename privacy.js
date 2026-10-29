// ============================================================
// privacy.js — Link «Privacy» nel footer (componente condiviso)
// Aggiunge «· Privacy» accanto al credito del footer, nella lingua della pagina
// (lingua salvata in erasmus_lang; segue i cambi di lingua guardando <html lang>).
// Incluso in tutte le pagine con: <script src="../privacy.js" defer></script>
// ============================================================
(function () {
  'use strict';

  var L = { it: 'Privacy', en: 'Privacy', pl: 'Prywatność', de: 'Datenschutz', lv: 'Privātums' };
  var script = document.currentScript;

  function init() {
    var sub = document.querySelector('.footer .footer__sub');
    if (!sub || sub.querySelector('.footer__privacy')) return;
    var link = document.createElement('a');
    link.className = 'footer__privacy';
    link.href = new URL('Privacy/Privacy.html', script.src).href;
    link.style.color = 'inherit';
    sub.appendChild(document.createTextNode(' · '));
    sub.appendChild(link);

    function label() {
      var l = document.documentElement.lang;
      try { l = localStorage.getItem('erasmus_lang') || l; } catch (e) {}
      link.textContent = L[l] || L.en;
    }
    label();
    new MutationObserver(label).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
