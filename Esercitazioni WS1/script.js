// ============================================================
// script.js — Esercitazioni Workshop 1 (Erasmus+)
// Tre quiz interattivi: composizione, compiti, vero/falso
// ============================================================

(function () {
  'use strict';

  // ---- Risposte corrette (con le correzioni fattuali applicate) ----
  // Quiz 1 (composizione): Q7 (Corte dei Conti) = i, Q8 (BEI) = l
  // Quiz 2 (compiti): nessuna correzione
  // Quiz 3 (vero/falso): Q10 (Consiglio Europeo organo politico) = V
  var ANSWERS = {
    1: ['b','c','a','d','f','h','i','l','g','e'],
    2: ['a','l','b','i','c','e','f','g','d','h'],
    3: ['F','V','F','V','F','F','F','F','V','V']
  };

  // ---- Tab di navigazione tra i 3 quiz ----
  var tabs   = document.querySelectorAll('.exer-tab');
  var panels = document.querySelectorAll('.exer-quiz');

  function showQuiz(targetId) {
    panels.forEach(function (p) {
      var match = p.id === targetId;
      p.classList.toggle('is-active', match);
      if (match) p.removeAttribute('hidden');
      else p.setAttribute('hidden', '');
    });
    tabs.forEach(function (t) {
      var match = t.getAttribute('data-target') === targetId;
      t.classList.toggle('is-active', match);
      t.setAttribute('aria-selected', match ? 'true' : 'false');
    });
    // Porta in vista l'inizio del quiz: allineo la barra delle schede appena
    // sotto l'header fisso (logo-bar + hero sono sticky), così si vede subito la 1ª domanda
    var logoBar = document.querySelector('.logo-bar');
    var heroEl  = document.querySelector('.hero');
    var stickyH = (logoBar ? logoBar.offsetHeight : 0) + (heroEl ? heroEl.offsetHeight : 0);
    var anchor  = document.querySelector('.exer-tabs') || document.getElementById(targetId);
    if (anchor) {
      var rect = anchor.getBoundingClientRect();
      var offset = stickyH + 12;
      if (Math.abs(rect.top - offset) > 8) {
        window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: 'smooth' });
      }
    }
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () { showQuiz(t.getAttribute('data-target')); });
  });

  // ---- Verifica / Reset ----
  function verifyQuiz(num) {
    var ans = ANSWERS[num];
    var section = document.getElementById('quiz' + num);
    if (!section) return;

    var correct = 0;
    var items = section.querySelectorAll('.quiz__item, .vf__item');
    items.forEach(function (item, idx) {
      var userAnswer = null;
      if (num === 3) {
        var radios = item.querySelectorAll('input[type="radio"]');
        radios.forEach(function (r) { if (r.checked) userAnswer = r.value; });
      } else {
        var sel = item.querySelector('select');
        if (sel) userAnswer = sel.value;
      }
      if (userAnswer && userAnswer === ans[idx]) correct++;
    });

    var result = document.getElementById('result' + num);
    if (result) {
      var numEl = result.querySelector('.result__num');
      if (numEl) numEl.textContent = String(correct);
      result.classList.toggle('is-perfect', correct === 10);
    }
  }

  function resetQuiz(num) {
    var section = document.getElementById('quiz' + num);
    if (!section) return;

    if (num === 3) {
      section.querySelectorAll('input[type="radio"]').forEach(function (r) { r.checked = false; });
    } else {
      section.querySelectorAll('select').forEach(function (s) { s.value = ''; });
    }

    var result = document.getElementById('result' + num);
    if (result) {
      var numEl = result.querySelector('.result__num');
      if (numEl) numEl.textContent = '0';
      result.classList.remove('is-perfect');
    }
  }

  document.querySelectorAll('.btn-quiz').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var num = parseInt(btn.getAttribute('data-quiz'), 10);
      var action = btn.getAttribute('data-action');
      if (action === 'verify') verifyQuiz(num);
      else if (action === 'reset') resetQuiz(num);
    });
  });

  // ---- Aggiunge il prefisso "a — ", "b — ", ecc. al testo delle option ----
  function refreshSelectOptions() {
    document.querySelectorAll('.quiz__select option[value]').forEach(function (opt) {
      var val = opt.value;
      if (!val) return;
      var text = (opt.textContent || '').replace(/^[a-l]\s*—\s*/, '');
      opt.textContent = val + ' — ' + text;
    });
  }
  // All'apertura della pagina (dopo che lang.js ha applicato la lingua)
  setTimeout(refreshSelectOptions, 60);
  // Quando l'utente cambia lingua, riapplica il prefisso
  document.addEventListener('click', function (e) {
    if (e.target.closest('.lang-btn, .lang-dropdown-item')) {
      setTimeout(refreshSelectOptions, 80);
    }
  }, true);

  // ---- Pulsante "torna in alto" ----
  var toTop = document.getElementById('toTop');
  if (toTop) {
    var THRESHOLD = 400;
    var update = function () {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      toTop.classList.toggle('is-visible', y > THRESHOLD);
    };
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

}());
