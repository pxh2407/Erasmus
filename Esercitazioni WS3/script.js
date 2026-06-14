// ============================================================
// script.js — Esercitazioni Workshop 3 (Erasmus+)
// 7 quiz: mc, vero/falso, mc, abbinamento, vero/falso, classifica, vero/falso
// ============================================================

(function () {
  'use strict';

  // Risposte corrette (in ordine di domanda) — Workshop 3, esercizi 8-14
  var ANSWERS = {
    8:  ['b', 'a', 'b', 'a'],
    9:  ['V', 'F', 'V', 'F'],
    10: ['b', 'a', 'b', 'a', 'c'],
    11: ['b', 'a', 'c', 'e', 'd'],
    12: ['F', 'V', 'V', 'F'],
    13: ['=', '1', '2', '=', '=', '=', '3'],
    14: ['F', 'F', 'V', 'F']
  };
  // Selettore del contenitore-domanda per ogni quiz
  var ITEM_SEL = {
    8:  '.mc-question',
    9:  '.vf__item',
    10: '.mc-question',
    11: '.quiz__item',
    12: '.vf__item',
    13: '.quiz__item',
    14: '.vf__item'
  };

  // ---- Tab ----
  var tabs   = document.querySelectorAll('.exer-tab');
  var panels = document.querySelectorAll('.exer-quiz');

  function showQuiz(targetId) {
    panels.forEach(function (p) {
      var m = p.id === targetId;
      p.classList.toggle('is-active', m);
      if (m) p.removeAttribute('hidden'); else p.setAttribute('hidden', '');
    });
    tabs.forEach(function (t) {
      var m = t.getAttribute('data-target') === targetId;
      t.classList.toggle('is-active', m);
      t.setAttribute('aria-selected', m ? 'true' : 'false');
    });
    var logoBar = document.querySelector('.logo-bar');
    var heroEl  = document.querySelector('.hero');
    var stickyH = (logoBar ? logoBar.offsetHeight : 0) + (heroEl ? heroEl.offsetHeight : 0);
    var anchor  = document.querySelector('.exer-tabs') || document.getElementById(targetId);
    if (anchor) {
      var rect = anchor.getBoundingClientRect();
      var offset = stickyH + 12;
      if (Math.abs(rect.top - offset) > 8) window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: 'smooth' });
    }
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { showQuiz(t.getAttribute('data-target')); }); });

  // ---- Risposta utente di un contenitore ----
  function userAnswer(item) {
    var sel = item.querySelector('select');
    if (sel) return sel.value;
    var checked = item.querySelector('input[type="radio"]:checked');
    return checked ? checked.value : null;
  }

  function verifyQuiz(num) {
    var ans = ANSWERS[num];
    var section = document.getElementById('quiz' + num);
    if (!section) return;
    var items = section.querySelectorAll(ITEM_SEL[num]);
    var correct = 0;
    items.forEach(function (item, idx) {
      var ua = userAnswer(item);
      if (ua && ua === ans[idx]) correct++;
    });
    var result = document.getElementById('result' + num);
    if (result) {
      var n = result.querySelector('.result__num');
      if (n) n.textContent = String(correct);
      result.classList.toggle('is-perfect', correct === ans.length);
    }
  }

  function resetQuiz(num) {
    var section = document.getElementById('quiz' + num);
    if (!section) return;
    section.querySelectorAll('input[type="radio"]').forEach(function (r) { r.checked = false; });
    section.querySelectorAll('select').forEach(function (s) { s.value = ''; });
    var result = document.getElementById('result' + num);
    if (result) {
      var n = result.querySelector('.result__num');
      if (n) n.textContent = '0';
      result.classList.remove('is-perfect');
    }
  }

  document.querySelectorAll('.btn-quiz').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var num = parseInt(btn.getAttribute('data-quiz'), 10);
      if (btn.getAttribute('data-action') === 'verify') verifyQuiz(num); else resetQuiz(num);
    });
  });

  // ---- Pulsante "torna in alto" ----
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
