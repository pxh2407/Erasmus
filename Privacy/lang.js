// Lingua dall'indirizzo (es. ?lang=pl): ha la precedenza su quella salvata nel browser
(function () {
  var m = location.search.match(/[?&]lang=(en|it|pl|de|lv)(?![a-z])/);
  if (m) {
    try { localStorage.setItem('erasmus_lang', m[1]); } catch (e) {}
    document.documentElement.lang = m[1];
  }
})();

// ============================================================
// lang.js — Privacy
// Erasmus LUTE · 5 languages: en · it · pl · de · lv
// ============================================================

(function () {

  var GH = '<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">';
  var GARANTE = '<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">Garante per la protezione dei dati personali</a>';

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
      footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
      page_title: "Privacy — ECBL Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Privacy notice",
      hero_subtitle: "How this website handles your data · GDPR (Regulation (EU) 2016/679)",
      intro: "This website only presents the Erasmus+ project “Europe Can Be Liked” (ECBL). It has no forms, no registration and no cookies, and it does not collect visitors’ names, e-mail addresses or other personal data.",
      s1_title: "1. Data controller",
      country: "Italy",
      tax_code: "Tax code",
      s2_title: "2. Hosting and technical data",
      s2_text: "The website is hosted on GitHub Pages (GitHub, Inc.). When you open a page, GitHub automatically records your IP address for security purposes and to keep the service running. We do not have access to this data. More information: " + GH + "GitHub Privacy Statement</a>.",
      s3_title: "3. Cookies and browser memory",
      s3_text: "The website uses no cookies and no statistics or advertising tools. It only stores two preferences in your browser, so you do not have to choose them again: the language and the text size. They never leave your device and you can delete them by clearing your browser data.",
      s4_title: "4. Links to other websites",
      s4_text: "The website contains links to Facebook, to the partners’ websites and to Google Translate. These websites open only if you click on them and have their own privacy policies.",
      s5_title: "5. Photos and testimonies",
      s5_text: "Photos of the workshops and the testimonies of the participants are published only with the consent of the people concerned. If you appear in a photo or a text and want it removed, write to lutemilazzo@gmail.com: we will remove it as soon as possible.",
      s6_title: "6. Your rights",
      s6_text: "Under the GDPR you can ask to access, correct or delete your data and object to its use, by writing to lutemilazzo@gmail.com.",
      s6_complaint: "You can also lodge a complaint with the data protection authority of your country (in Italy: " + GARANTE + ").",
      updated: "Last updated: 29 October 2026",
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
      footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
      page_title: "Privacy — ECBL Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Informativa sulla privacy",
      hero_subtitle: "Come questo sito tratta i tuoi dati · GDPR (Regolamento (UE) 2016/679)",
      intro: "Questo sito presenta soltanto il progetto Erasmus+ «Europe Can Be Liked» (ECBL). Non ha moduli, registrazioni né cookie e non raccoglie nomi, indirizzi e-mail o altri dati personali dei visitatori.",
      s1_title: "1. Titolare del trattamento",
      country: "Italia",
      tax_code: "Codice fiscale",
      s2_title: "2. Ospitalità del sito e dati tecnici",
      s2_text: "Il sito è ospitato su GitHub Pages (GitHub, Inc.). Quando apri una pagina, GitHub registra automaticamente il tuo indirizzo IP per motivi di sicurezza e per il funzionamento del servizio. Noi non abbiamo accesso a questi dati. Maggiori informazioni: " + GH + "informativa privacy di GitHub</a>.",
      s3_title: "3. Cookie e memoria del browser",
      s3_text: "Il sito non usa cookie né strumenti di statistica o di pubblicità. Salva nel tuo browser soltanto due preferenze, per non doverle scegliere ogni volta: la lingua e la grandezza del testo. Non escono mai dal tuo dispositivo e puoi cancellarle svuotando i dati del browser.",
      s4_title: "4. Link ad altri siti",
      s4_text: "Il sito contiene link a Facebook, ai siti dei partner e a Google Traduttore. Questi siti si aprono solo se ci clicchi e hanno le loro informative sulla privacy.",
      s5_title: "5. Foto e testimonianze",
      s5_text: "Le foto dei workshop e le testimonianze dei partecipanti sono pubblicate solo con il consenso delle persone interessate. Se compari in una foto o in un testo e vuoi che venga tolto, scrivi a lutemilazzo@gmail.com: lo toglieremo al più presto.",
      s6_title: "6. I tuoi diritti",
      s6_text: "In base al GDPR puoi chiedere di accedere ai tuoi dati, correggerli o cancellarli e opporti al loro utilizzo, scrivendo a lutemilazzo@gmail.com.",
      s6_complaint: "Puoi anche presentare reclamo all'autorità per la protezione dei dati del tuo Paese (in Italia: " + GARANTE + ").",
      updated: "Ultimo aggiornamento: 29 ottobre 2026",
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
      footer_credit: "Projekt strony LUTE MILAZZO — opracowanie Filippo Russo Nuccio",
      page_title: "Prywatność — ECBL Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Polityka prywatności",
      hero_subtitle: "Jak ta strona przetwarza Twoje dane · RODO (Rozporządzenie (UE) 2016/679)",
      intro: "Ta strona służy wyłącznie do prezentacji projektu Erasmus+ „Europe Can Be Liked” (ECBL). Nie ma formularzy, rejestracji ani plików cookie i nie zbiera imion, adresów e-mail ani innych danych osobowych odwiedzających.",
      s1_title: "1. Administrator danych",
      country: "Włochy",
      tax_code: "Numer identyfikacji podatkowej",
      s2_title: "2. Hosting i dane techniczne",
      s2_text: "Strona jest hostowana w serwisie GitHub Pages (GitHub, Inc.). Gdy otwierasz stronę, GitHub automatycznie zapisuje Twój adres IP ze względów bezpieczeństwa i w celu działania usługi. Nie mamy dostępu do tych danych. Więcej informacji: " + GH + "polityka prywatności GitHub</a>.",
      s3_title: "3. Pliki cookie i pamięć przeglądarki",
      s3_text: "Strona nie używa plików cookie ani narzędzi statystycznych czy reklamowych. Zapisuje w Twojej przeglądarce tylko dwie preferencje, abyś nie musiał(a) wybierać ich za każdym razem: język i wielkość tekstu. Nigdy nie opuszczają Twojego urządzenia i możesz je usunąć, czyszcząc dane przeglądarki.",
      s4_title: "4. Linki do innych stron",
      s4_text: "Strona zawiera linki do Facebooka, stron partnerów i Tłumacza Google. Strony te otwierają się tylko po kliknięciu i mają własne polityki prywatności.",
      s5_title: "5. Zdjęcia i świadectwa",
      s5_text: "Zdjęcia z warsztatów i świadectwa uczestników są publikowane wyłącznie za zgodą zainteresowanych osób. Jeśli jesteś na zdjęciu lub w tekście i chcesz, aby zostały usunięte, napisz na adres lutemilazzo@gmail.com: usuniemy je jak najszybciej.",
      s6_title: "6. Twoje prawa",
      s6_text: "Zgodnie z RODO możesz zażądać dostępu do swoich danych, ich sprostowania lub usunięcia oraz wnieść sprzeciw wobec ich wykorzystania, pisząc na adres lutemilazzo@gmail.com.",
      s6_complaint: "Możesz również złożyć skargę do organu ochrony danych w swoim kraju (w Polsce: Prezes Urzędu Ochrony Danych Osobowych; we Włoszech: " + GARANTE + ").",
      updated: "Ostatnia aktualizacja: 29 października 2026",
    },

    // DE
    de: {
      skip_link: "Zum Inhalt springen",
      lang_switcher_aria: "Sprache wählen",
      nav_menu_label: "Menü",
      nav_menu_aria: "Navigationsmenü öffnen",
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
      footer_credit: "Webprojekt LUTE MILAZZO — erstellt von Filippo Russo Nuccio",
      page_title: "Datenschutz — ECBL Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Datenschutzerklärung",
      hero_subtitle: "Wie diese Website mit Ihren Daten umgeht · DSGVO (Verordnung (EU) 2016/679)",
      intro: "Diese Website stellt ausschließlich das Erasmus+-Projekt „Europe Can Be Liked“ (ECBL) vor. Sie hat keine Formulare, keine Registrierung und keine Cookies und erhebt keine Namen, E-Mail-Adressen oder sonstigen personenbezogenen Daten der Besucher.",
      s1_title: "1. Verantwortliche Stelle",
      country: "Italien",
      tax_code: "Steuernummer",
      s2_title: "2. Hosting und technische Daten",
      s2_text: "Die Website wird bei GitHub Pages (GitHub, Inc.) gehostet. Wenn Sie eine Seite öffnen, speichert GitHub automatisch Ihre IP-Adresse aus Sicherheitsgründen und für den Betrieb des Dienstes. Wir haben keinen Zugriff auf diese Daten. Weitere Informationen: " + GH + "Datenschutzerklärung von GitHub</a>.",
      s3_title: "3. Cookies und Browserspeicher",
      s3_text: "Die Website verwendet keine Cookies und keine Statistik- oder Werbewerkzeuge. Sie speichert in Ihrem Browser nur zwei Einstellungen, damit Sie sie nicht jedes Mal neu wählen müssen: die Sprache und die Textgröße. Sie verlassen nie Ihr Gerät und Sie können sie löschen, indem Sie die Browserdaten löschen.",
      s4_title: "4. Links zu anderen Websites",
      s4_text: "Die Website enthält Links zu Facebook, zu den Websites der Partner und zu Google Übersetzer. Diese Websites öffnen sich nur, wenn Sie darauf klicken, und haben eigene Datenschutzerklärungen.",
      s5_title: "5. Fotos und Zeitzeugenberichte",
      s5_text: "Fotos der Workshops und Berichte der Teilnehmenden werden nur mit Einwilligung der betroffenen Personen veröffentlicht. Wenn Sie auf einem Foto oder in einem Text vorkommen und die Entfernung wünschen, schreiben Sie an lutemilazzo@gmail.com: Wir entfernen es so schnell wie möglich.",
      s6_title: "6. Ihre Rechte",
      s6_text: "Nach der DSGVO können Sie Auskunft über Ihre Daten, deren Berichtigung oder Löschung verlangen und der Verwendung widersprechen, indem Sie an lutemilazzo@gmail.com schreiben.",
      s6_complaint: "Sie können sich außerdem bei der Datenschutzaufsichtsbehörde Ihres Landes beschweren (in Italien: " + GARANTE + ").",
      updated: "Letzte Aktualisierung: 29. Oktober 2026",
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
      footer_credit: "LUTE MILAZZO tīmekļa projekts — autors Filippo Russo Nuccio",
      page_title: "Privātums — ECBL Erasmus+",
      hero_eyebrow: "Europe Can Be Liked · ECBL",
      hero_title: "Privātuma politika",
      hero_subtitle: "Kā šī vietne apstrādā jūsu datus · VDAR (Regula (ES) 2016/679)",
      intro: "Šī vietne tikai iepazīstina ar Erasmus+ projektu “Europe Can Be Liked” (ECBL). Tajā nav veidlapu, reģistrācijas un sīkdatņu, un tā nevāc apmeklētāju vārdus, e-pasta adreses vai citus personas datus.",
      s1_title: "1. Pārzinis",
      country: "Itālija",
      tax_code: "Nodokļu maksātāja kods",
      s2_title: "2. Mitināšana un tehniskie dati",
      s2_text: "Vietne tiek mitināta GitHub Pages (GitHub, Inc.). Kad atverat lapu, GitHub drošības nolūkos un pakalpojuma darbībai automātiski reģistrē jūsu IP adresi. Mums nav piekļuves šiem datiem. Vairāk informācijas: " + GH + "GitHub privātuma paziņojums</a>.",
      s3_title: "3. Sīkdatnes un pārlūka atmiņa",
      s3_text: "Vietne neizmanto sīkdatnes, statistikas vai reklāmas rīkus. Tā jūsu pārlūkā saglabā tikai divus iestatījumus, lai jums tie nebūtu jāizvēlas katru reizi: valodu un teksta lielumu. Tie nekad neatstāj jūsu ierīci, un tos var izdzēst, notīrot pārlūka datus.",
      s4_title: "4. Saites uz citām vietnēm",
      s4_text: "Vietnē ir saites uz Facebook, partneru vietnēm un Google tulkotāju. Šīs vietnes atveras tikai tad, ja uz tām noklikšķināt, un tām ir savas privātuma politikas.",
      s5_title: "5. Fotogrāfijas un liecības",
      s5_text: "Semināru fotogrāfijas un dalībnieku liecības tiek publicētas tikai ar attiecīgo personu piekrišanu. Ja esat fotogrāfijā vai tekstā un vēlaties, lai to noņem, rakstiet uz lutemilazzo@gmail.com: mēs to noņemsim pēc iespējas ātrāk.",
      s6_title: "6. Jūsu tiesības",
      s6_text: "Saskaņā ar VDAR jūs varat pieprasīt piekļuvi saviem datiem, to labošanu vai dzēšanu un iebilst pret to izmantošanu, rakstot uz lutemilazzo@gmail.com.",
      s6_complaint: "Jūs varat arī iesniegt sūdzību savas valsts datu aizsardzības iestādē (Latvijā: Datu valsts inspekcija; Itālijā: " + GARANTE + ").",
      updated: "Pēdējo reizi atjaunināts: 2026. gada 29. oktobrī",
    }
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
    localStorage.setItem('erasmus_lang', l); if (/[?&]lang=/.test(location.search)) history.replaceState(null, '', location.pathname + location.search.replace(/([?&]lang=)[a-z]+/, '$1' + l) + location.hash); document.documentElement.lang = l;
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
