// ============================================================
// lang.js — Download
// Erasmus LUTE · 5 languages: en · it · pl · de · lv
// ============================================================

(function () {

  const TRANSLATIONS = {

    // EN
    en: {
      skip_link: "Skip to content",
      lang_switcher_aria: "Select language",
      nav_menu_label: "Menu",
      nav_menu_aria: "Open navigation menu",
      nav_home: "Home",
      nav_project: "Project",
      nav_wp2: "WP2",
      nav_wp3: "WP3",
      nav_wp4: "WP4",
      nav_download: "Download",
      nav_fb: "FB",
      flag_aria: "Flag",
      btn_top_aria: "Back to top",
      footer_text: "Erasmus+ Project",
      footer_wa: "Contact",
      footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
      page_title: "Download — Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Download",
      hero_subtitle: "Project publications available for download",
      sect_pub_title: "Publications",
      pub_wp2_title: "European ABC: Educational Workshop for Seniors",
      pub_wp2_desc: "The methodological guide produced within WP2. Includes workshop scenarios, facilitators’ notes and educational materials for senior citizens.",
      pub_wp3_title: "Our European Journey: Voices from the Past. Visions for the Future",
      pub_wp3_desc: "The collection of senior citizens’ testimonies on European integration, produced within WP3.",
      pub_wp2_badge: "WP2",
      pub_wp3_badge: "WP3",
      pub_coming: "Coming soon",
      pub_coming_note: "This publication is currently being finalised. The download will be activated once the PDF is ready.",
    },

    // IT
    it: {
      skip_link: "Salta al contenuto",
      lang_switcher_aria: "Seleziona la lingua",
      nav_menu_label: "Menu",
      nav_menu_aria: "Apri il menu di navigazione",
      nav_home: "Home",
      nav_project: "Progetto",
      nav_wp2: "WP2",
      nav_wp3: "WP3",
      nav_wp4: "WP4",
      nav_download: "Download",
      nav_fb: "FB",
      flag_aria: "Bandiera",
      btn_top_aria: "Torna in cima",
      footer_text: "Progetto Erasmus+",
      footer_wa: "Contatti",
      footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
      page_title: "Download — Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Download",
      hero_subtitle: "Pubblicazioni del progetto disponibili per il download",
      sect_pub_title: "Pubblicazioni",
      pub_wp2_title: "European ABC: Educational Workshop for Seniors",
      pub_wp2_desc: "La guida metodologica prodotta nell’ambito del WP2. Include scenari di workshop, note per i facilitatori e materiali didattici per anziani.",
      pub_wp3_title: "Our European Journey: Voices from the Past. Visions for the Future",
      pub_wp3_desc: "La raccolta di testimonianze degli anziani sull’integrazione europea, prodotta nell’ambito del WP3.",
      pub_wp2_badge: "WP2",
      pub_wp3_badge: "WP3",
      pub_coming: "In arrivo",
      pub_coming_note: "Questa pubblicazione è attualmente in fase di finalizzazione. Il download sarà attivato quando il PDF sarà pronto.",
    },

    // PL
    pl: {
      skip_link: "Przejdź do treści",
      lang_switcher_aria: "Wybierz język",
      nav_menu_label: "Menu",
      nav_menu_aria: "Otwórz menu nawigacyjne",
      nav_home: "Strona główna",
      nav_project: "Projekt",
      nav_wp2: "WP2",
      nav_wp3: "WP3",
      nav_wp4: "WP4",
      nav_download: "Pobierz",
      nav_fb: "FB",
      flag_aria: "Flaga",
      btn_top_aria: "Powrót na górę",
      footer_text: "Projekt Erasmus+",
      footer_wa: "Kontakt",
      footer_credit: "Projekt strony LUTE MILAZZO — opracowanie Filippo Russo Nuccio",
      page_title: "Pobierz — Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Pobierz",
      hero_subtitle: "Publikacje projektu dostępne do pobrania",
      sect_pub_title: "Publikacje",
      pub_wp2_title: "European ABC: Educational Workshop for Seniors",
      pub_wp2_desc: "Poradnik metodologiczny stworzony w ramach WP2. Zawiera scenariusze warsztatów, notatki dla prowadzących i materiały edukacyjne dla seniorów.",
      pub_wp3_title: "Our European Journey: Voices from the Past. Visions for the Future",
      pub_wp3_desc: "Zbiór świadectw seniorów na temat integracji europejskiej, opracowany w ramach WP3.",
      pub_wp2_badge: "WP2",
      pub_wp3_badge: "WP3",
      pub_coming: "Wkrótce",
      pub_coming_note: "Ta publikacja jest w trakcie finalizacji. Pobieranie zostanie uruchomione, gdy plik PDF będzie gotowy.",
    },

    // DE
    de: {
      skip_link: "Zum Inhalt springen",
      lang_switcher_aria: "Sprache wählen",
      nav_menu_label: "Menü",
      nav_menu_aria: "Navigationssmenü öffnen",
      nav_home: "Startseite",
      nav_project: "Projekt",
      nav_wp2: "WP2",
      nav_wp3: "WP3",
      nav_wp4: "WP4",
      nav_download: "Herunterladen",
      nav_fb: "FB",
      flag_aria: "Flagge",
      btn_top_aria: "Zurück nach oben",
      footer_text: "Erasmus+-Projekt",
      footer_wa: "Kontakt",
      footer_credit: "Webprojekt LUTE MILAZZO — erstellt von Filippo Russo Nuccio",
      page_title: "Herunterladen — Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Herunterladen",
      hero_subtitle: "Projektpublikationen zum Herunterladen",
      sect_pub_title: "Veröffentlichungen",
      pub_wp2_title: "European ABC: Educational Workshop for Seniors",
      pub_wp2_desc: "Der im Rahmen von WP2 erstellte methodische Leitfaden. Enthält Workshop-Szenarien, Notizen für Moderatoren und Bildungsmaterialien für Senioren.",
      pub_wp3_title: "Our European Journey: Voices from the Past. Visions for the Future",
      pub_wp3_desc: "Die im Rahmen von WP3 erstellte Sammlung von Seniorenzeugnissen über die europäische Integration.",
      pub_wp2_badge: "WP2",
      pub_wp3_badge: "WP3",
      pub_coming: "Demnächst",
      pub_coming_note: "Diese Veröffentlichung wird derzeit fertiggestellt. Der Download wird aktiviert, sobald das PDF fertig ist.",
    },

    // LV
    lv: {
      skip_link: "Pāriet uz saturu",
      lang_switcher_aria: "Izvēlēties valodu",
      nav_menu_label: "Izvēlne",
      nav_menu_aria: "Atvērt navigācijas izvēlni",
      nav_home: "Sākums",
      nav_project: "Projekts",
      nav_wp2: "WP2",
      nav_wp3: "WP3",
      nav_wp4: "WP4",
      nav_download: "Lejupielāde",
      nav_fb: "FB",
      flag_aria: "Karogs",
      btn_top_aria: "Atpakaļ uz augšu",
      footer_text: "Erasmus+ projekts",
      footer_wa: "Kontakts",
      footer_credit: "LUTE MILAZZO tīmekļa projekts — autors Filippo Russo Nuccio",
      page_title: "Lejupielāde — Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Lejupielāde",
      hero_subtitle: "Projekta publicējumi pieejami lejupielādei",
      sect_pub_title: "Publicējumi",
      pub_wp2_title: "European ABC: Educational Workshop for Seniors",
      pub_wp2_desc: "WP2 ietvaros izstrādātā metodiskā rokasgramata. Ietver semināru scēnārijus, vadītāju piezīmes un izglītošus materīālus senioriem.",
      pub_wp3_title: "Our European Journey: Voices from the Past. Visions for the Future",
      pub_wp3_desc: "WP3 ietvaros sagatāvotā senioru liecību krājums par Eiropas integrāciju.",
      pub_wp2_badge: "WP2",
      pub_wp3_badge: "WP3",
      pub_coming: "Drīzumā",
      pub_coming_note: "Šis publīcējums pašlaik tiek finalizēts. Lejupielāde tiks aktivēta, kad PDF būs gatavs.",
    },

  };

  // ---- engine ----
  var DEFAULT_LANG = 'en';
  var LANG_ORDER = ['it','en','pl','de','lv'];
  var FLAG_SVG = {
    it:'<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ce2b37"/></svg>',
    en:'<svg viewBox="0 0 6 3" xmlns="http://www.w3.org/2000/svg"><rect width="6" height="3" fill="#012169"/><path d="M0 0l6 3M6 0L0 3" stroke="#fff" stroke-width=".6"/><path d="M0 0l6 3M6 0L0 3" stroke="#C8102E" stroke-width=".4"/><path d="M3 0v3M0 1.5h6" stroke="#fff" stroke-width="1"/><path d="M3 0v3M0 1.5h6" stroke="#C8102E" stroke-width=".6"/></svg>',
    pl:'<svg viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="1" fill="#fff"/><rect y="1" width="2" height="1" fill="#dc143c"/></svg>',
    de:'<svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="3" fill="#ffce00"/><rect width="5" height="2" fill="#dd0000"/><rect width="5" height="1" fill="#000"/></svg>',
    lv:'<svg viewBox="0 0 5 2" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="2" fill="#fff"/><rect width="5" height=".8" fill="#9e3039"/><rect y="1.2" width="5" height=".8" fill="#9e3039"/></svg>'
  };

  function getLang() {
    return localStorage.getItem('erasmus_lang') || DEFAULT_LANG;
  }
  function setLang(l) {
    localStorage.setItem('erasmus_lang', l);
    apply(l);
  }
  function apply(l) {
    var t = TRANSLATIONS[l] || TRANSLATIONS[DEFAULT_LANG];
    if (t.page_title) document.title = t.page_title;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      if (t[el.dataset.i18nHtml] !== undefined) el.innerHTML = t[el.dataset.i18nHtml];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      if (t[el.dataset.i18nAria] !== undefined) el.setAttribute('aria-label', t[el.dataset.i18nAria]);
    });
    buildSwitcher(l, t);
  }
  function buildSwitcher(active, t) {
    var nav = document.getElementById('langSwitcher');
    if (!nav) return;
    nav.innerHTML = '';
    var mobileBtnWrap = document.createElement('div');
    mobileBtnWrap.style.position = 'relative';
    var mobileBtn = document.createElement('button');
    mobileBtn.className = 'lang-mobile-btn';
    mobileBtn.setAttribute('aria-expanded','false');
    mobileBtn.setAttribute('aria-haspopup','listbox');
    mobileBtn.innerHTML = FLAG_SVG[active] + ' <span class="lang-mobile-arrow" aria-hidden="true">▾</span>';
    var mobileDD = document.createElement('div');
    mobileDD.className = 'lang-dropdown';
    mobileDD.setAttribute('hidden','');
    mobileDD.setAttribute('role','listbox');
    LANG_ORDER.forEach(function(lc) {
      var item = document.createElement('button');
      item.className = 'lang-dropdown-item' + (lc === active ? ' lang-dropdown-item--active' : '');
      item.setAttribute('role','option');
      item.setAttribute('aria-selected', lc === active ? 'true' : 'false');
      item.innerHTML = '<span style="width:28px;height:20px;display:inline-block;border-radius:2px;overflow:hidden;">' + FLAG_SVG[lc] + '</span> ' + lc.toUpperCase();
      item.addEventListener('click', function() { setLang(lc); mobileDD.setAttribute('hidden',''); mobileBtn.setAttribute('aria-expanded','false'); });
      mobileDD.appendChild(item);
    });
    mobileBtn.addEventListener('click', function() {
      var exp = mobileBtn.getAttribute('aria-expanded') === 'true';
      if (exp) { mobileDD.setAttribute('hidden',''); mobileBtn.setAttribute('aria-expanded','false'); }
      else { mobileDD.removeAttribute('hidden'); mobileBtn.setAttribute('aria-expanded','true'); }
    });
    mobileBtnWrap.appendChild(mobileBtn);
    mobileBtnWrap.appendChild(mobileDD);
    nav.appendChild(mobileBtnWrap);
    LANG_ORDER.forEach(function(lc) {
      var btn = document.createElement('button');
      btn.className = 'lang-btn' + (lc === active ? ' lang-btn--active' : '');
      btn.setAttribute('data-lang', lc);
      var label = t.flag_aria || 'Language';
      btn.setAttribute('aria-label', label + ' ' + lc.toUpperCase());
      btn.innerHTML = '<span style="width:28px;height:20px;display:inline-block;border-radius:2px;overflow:hidden;">' + FLAG_SVG[lc] + '</span>';
      btn.addEventListener('click', function() { setLang(lc); });
      nav.appendChild(btn);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    apply(getLang());
  });

}());
