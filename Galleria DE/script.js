// ============================================================
// script.js — Galleria fotografica (Erasmus+)
// Lightbox con navigazione precedente/successiva
// ============================================================

(function () {
  'use strict';

  var items   = Array.prototype.slice.call(document.querySelectorAll('.gallery__item'));
  var lb      = document.getElementById('lightbox');
  var lbImg   = document.getElementById('lbImg');
  var lbClose = document.getElementById('lbClose');
  var lbPrev  = document.getElementById('lbPrev');
  var lbNext  = document.getElementById('lbNext');
  if (!items.length || !lb) return;

  var sources = items.map(function (it) { return it.getAttribute('data-full'); });
  var current = 0;

  function show(i) {
    current = (i + sources.length) % sources.length;
    lbImg.src = sources[current];
    lb.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.setAttribute('hidden', '');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  items.forEach(function (it, i) {
    it.addEventListener('click', function () { show(i); });
  });
  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
  lbNext.addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });

  document.addEventListener('keydown', function (e) {
    if (lb.hasAttribute('hidden')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });

  // Pulsante "torna in alto"
  var toTop = document.getElementById('toTop');
  if (toTop) {
    var update = function () {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      toTop.classList.toggle('is-visible', y > 400);
    };
    toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
}());
