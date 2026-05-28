// ============================================================
// lang.js — Sistema di traduzione multilingue
// Unione Europea · Progetto LUTE · Erasmus+
// Lingue: it · en · pl · de · lv
// ============================================================

const TRANSLATIONS = {

  it: {
    page_title:         "L'Unione Europea — Guida interattiva",
    topbar_title:       "L'Unione Europea",
    lang_switcher_aria: "Seleziona la lingua",
    btn_home_aria:      "Torna alla pagina Home",
    footer_hint:        "Usa i tasti \u2190 \u2192 per navigare"
  },
  en: {
    page_title:         "The European Union \u2014 Interactive Guide",
    topbar_title:       "The European Union",
    lang_switcher_aria: "Select language",
    btn_home_aria:      "Back to Home page",
    footer_hint:        "Use \u2190 \u2192 keys to navigate"
  },
  pl: {
    page_title:         "Unia Europejska \u2014 Przewodnik interaktywny",
    topbar_title:       "Unia Europejska",
    lang_switcher_aria: "Wybierz j\u0119zyk",
    btn_home_aria:      "Powr\u00f3t do strony g\u0142\u00f3wnej",
    footer_hint:        "U\u017cyj klawiszy \u2190 \u2192 do nawigacji"
  },
  de: {
    page_title:         "Die Europ\u00e4ische Union \u2014 Interaktiver Leitfaden",
    topbar_title:       "Die Europ\u00e4ische Union",
    lang_switcher_aria: "Sprache ausw\u00e4hlen",
    btn_home_aria:      "Zur\u00fcck zur Startseite",
    footer_hint:        "\u2190 \u2192 Tasten zum Navigieren"
  },
  lv: {
    page_title:         "Eiropas Savien\u012bba \u2014 Interakt\u012bv\u0101 rokasgrāmata",
    topbar_title:       "Eiropas Savien\u012bba",
    lang_switcher_aria: "Izv\u0113l\u0113ties valodu",
    btn_home_aria:      "Atpaka\u013c uz s\u0101kumlapu",
    footer_hint:        "Izmantojiet \u2190 \u2192 tausti\u0146us navig\u0101cijai"
  }

};

// ============================================================
// Motore di traduzione + costruzione selettore lingua
// ============================================================
(function () {
  'use strict';

  var LANGS = {
    it: {
      label: 'Italiano',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/></svg>'
    },
    en: {
      label: 'English',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36"><rect width="60" height="36" fill="#012169"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" stroke-width="12"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" stroke-width="4"/><rect x="0" y="13.5" width="60" height="9" fill="#fff"/><rect x="25.5" y="0" width="9" height="36" fill="#fff"/><rect x="0" y="15" width="60" height="6" fill="#C8102E"/><rect x="27" y="0" width="6" height="36" fill="#C8102E"/></svg>'
    },
    pl: {
      label: 'Polski',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#DC143C"/></svg>'
    },
    de: {
      label: 'Deutsch',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="6.67" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#DD0000"/><rect y="13.33" width="30" height="6.67" fill="#FFCE00"/></svg>'
    },
    lv: {
      label: 'Latvie\u0161u',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="8" fill="#9E3039"/><rect y="8" width="30" height="4" fill="#fff"/><rect y="12" width="30" height="8" fill="#9E3039"/></svg>'
    }
  };

  var currentLang = localStorage.getItem('erasmus_lang') || 'it';

  function apply(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    if (t.page_title) document.title = t.page_title;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('lang-btn--active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    var switcher = document.getElementById('langSwitcher');
    if (switcher && switcher._mobileFlag) {
      switcher._mobileFlag.src = 'data:image/svg+xml,' + encodeURIComponent(LANGS[lang].svg);
      switcher._mobileFlag.alt = LANGS[lang].label;
    }
    if (switcher && switcher._dropdown) {
      switcher._dropdown.querySelectorAll('[data-lang-item]').forEach(function (item) {
        item.classList.toggle('lang-dropdown-item--active',
          item.getAttribute('data-lang-item') === lang);
      });
    }

    // Cambia le slide nella lingua selezionata
    if (window.SLIDES_DATA) {
      window.SLIDES = window.SLIDES_DATA[lang] || window.SLIDES_DATA.it;
      if (window.reloadSlides) window.reloadSlides();
    }

    currentLang = lang;
    localStorage.setItem('erasmus_lang', lang);
  }

  function makeFlagImg(code, w, h) {
    var img = document.createElement('img');
    img.src = 'data:image/svg+xml,' + encodeURIComponent(LANGS[code].svg);
    img.alt = LANGS[code].label;
    img.setAttribute('width', String(w));
    img.setAttribute('height', String(h));
    img.style.cssText = 'border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,0.15);display:block;flex-shrink:0;';
    return img;
  }

  function buildSwitcher() {
    var switcher = document.getElementById('langSwitcher');
    if (!switcher) return;

    Object.keys(LANGS).forEach(function (code) {
      var btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.setAttribute('data-lang', code);
      btn.setAttribute('aria-label', LANGS[code].label);
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('type', 'button');
      btn.appendChild(makeFlagImg(code, 32, 22));
      btn.addEventListener('click', function () { apply(code); });
      switcher.appendChild(btn);
    });

    var mobileBtn = document.createElement('button');
    mobileBtn.className = 'lang-mobile-btn';
    mobileBtn.id = 'langMobileBtn';
    mobileBtn.setAttribute('type', 'button');
    mobileBtn.setAttribute('aria-haspopup', 'true');
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.setAttribute('aria-label', 'Seleziona la lingua');

    var mobileFlag = document.createElement('img');
    mobileFlag.setAttribute('width', '32');
    mobileFlag.setAttribute('height', '22');
    mobileFlag.style.cssText = 'border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,0.15);display:block;';
    mobileBtn.appendChild(mobileFlag);

    var arrow = document.createElement('span');
    arrow.className = 'lang-mobile-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '\u25be';
    mobileBtn.appendChild(arrow);

    var dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.id = 'langDropdown';
    dropdown.setAttribute('hidden', '');

    Object.keys(LANGS).forEach(function (code) {
      var item = document.createElement('button');
      item.className = 'lang-dropdown-item';
      item.setAttribute('type', 'button');
      item.setAttribute('data-lang-item', code);
      item.appendChild(makeFlagImg(code, 32, 22));
      item.appendChild(document.createTextNode('\u00a0' + LANGS[code].label));
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        apply(code);
        closeDropdown();
      });
      dropdown.appendChild(item);
    });

    function openDropdown()  { dropdown.removeAttribute('hidden'); mobileBtn.setAttribute('aria-expanded', 'true'); }
    function closeDropdown() { dropdown.setAttribute('hidden', ''); mobileBtn.setAttribute('aria-expanded', 'false'); }

    mobileBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      mobileBtn.getAttribute('aria-expanded') === 'true' ? closeDropdown() : openDropdown();
    });
    document.addEventListener('click', function () { closeDropdown(); });

    switcher.appendChild(mobileBtn);
    var logoBar = switcher.closest('.logo-bar') || document.body;
    logoBar.appendChild(dropdown);

    switcher._mobileFlag = mobileFlag;
    switcher._dropdown   = dropdown;
  }

  function init() {
    buildSwitcher();
    apply(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
