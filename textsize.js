// ============================================================
// textsize.js — Controllo dimensione testo (accessibilità anziani)
// Componente condiviso: pulsanti A− / A+ fissi in basso a sinistra.
// Ingrandisce tutta la pagina (zoom) e ricorda la scelta.
// Incluso in tutte le pagine con: <script src="../textsize.js" defer></script>
// ============================================================
(function () {
  'use strict';

  var KEY = 'erasmus_textsize';
  var MIN = 1.0, MAX = 1.6, STEP = 0.1;

  // Etichette localizzate (per aria-label / title; il testo dei pulsanti è "A−"/"A+")
  var L = {
    it: { dec: 'Riduci la dimensione del testo', inc: 'Aumenta la dimensione del testo', grp: 'Dimensione del testo' },
    en: { dec: 'Decrease text size',             inc: 'Increase text size',              grp: 'Text size' },
    pl: { dec: 'Zmniejsz rozmiar tekstu',        inc: 'Zwiększ rozmiar tekstu',          grp: 'Rozmiar tekstu' },
    de: { dec: 'Schrift verkleinern',            inc: 'Schrift vergrößern',              grp: 'Schriftgröße' },
    lv: { dec: 'Samazināt teksta izmēru',        inc: 'Palielināt teksta izmēru',        grp: 'Teksta izmērs' }
  };
  function curLang() {
    try { var l = localStorage.getItem('erasmus_lang'); return L[l] ? l : 'it'; }
    catch (e) { return 'it'; }
  }

  function getZoom() {
    var v = parseFloat(localStorage.getItem(KEY));
    return (v && v >= MIN && v <= MAX) ? v : 1.0;
  }
  function clamp(z) { return Math.max(MIN, Math.min(MAX, Math.round(z * 10) / 10)); }
  function apply(z) {
    document.documentElement.style.zoom = z;
    try { localStorage.setItem(KEY, String(z)); } catch (e) {}
  }

  function addStyle() {
    var css =
      '.ts-widget{position:fixed;left:16px;bottom:16px;z-index:1500;display:flex;gap:6px;' +
      'background:rgba(255,255,255,.96);border:2px solid #2b5cb0;border-radius:12px;padding:6px;' +
      'box-shadow:0 4px 14px rgba(0,0,0,.18);}' +
      '.ts-widget .ts-btn{min-width:46px;min-height:46px;border:none;background:transparent;' +
      'color:#1a3f80;font-weight:800;cursor:pointer;border-radius:8px;line-height:1;font-family:inherit;}' +
      '.ts-widget .ts-minus{font-size:16px;}.ts-widget .ts-plus{font-size:24px;}' +
      '.ts-widget .ts-btn:hover{background:#eef1f7;}' +
      '.ts-widget .ts-btn:focus-visible{outline:3px solid #2b5cb0;outline-offset:2px;}' +
      '@media print{.ts-widget{display:none;}}';
    var s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);
  }

  function build() {
    var t = L[curLang()];
    var w = document.createElement('div');
    w.className = 'ts-widget';
    w.setAttribute('role', 'group');
    w.setAttribute('aria-label', t.grp);

    var minus = document.createElement('button');
    minus.type = 'button';
    minus.className = 'ts-btn ts-minus';
    minus.textContent = 'A−';            // A−
    minus.setAttribute('aria-label', t.dec);
    minus.title = t.dec;

    var plus = document.createElement('button');
    plus.type = 'button';
    plus.className = 'ts-btn ts-plus';
    plus.textContent = 'A+';
    plus.setAttribute('aria-label', t.inc);
    plus.title = t.inc;

    minus.addEventListener('click', function () { apply(clamp(getZoom() - STEP)); });
    plus.addEventListener('click', function () { apply(clamp(getZoom() + STEP)); });

    w.appendChild(minus);
    w.appendChild(plus);
    document.body.appendChild(w);
  }

  function init() {
    apply(getZoom());   // ripristina la scelta salvata
    addStyle();
    build();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
}());
