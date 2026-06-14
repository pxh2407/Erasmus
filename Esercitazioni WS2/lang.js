// ============================================================
// lang.js — Esercitazioni Workshop 2 · Erasmus+ ECBL
// 4 quiz: risposta multipla, vero/falso (×2), abbinamento · 5 lingue
// ============================================================

const TRANSLATIONS = {

  // ---------------- ITALIANO ----------------
  it: {
    skip_link:"Salta al contenuto",
    page_title:"Esercitazioni — Workshop 2", hero_eyebrow:"Workshop 2", hero_title:"Esercitazioni interattive",
    hero_subtitle:"Quattro quiz per consolidare la conoscenza del processo decisionale dell'UE: fonti del diritto, atti legislativi e priorità dell'Unione.",
    hero_curated: "A cura di: <strong>Antonio Catalfamo e Mimmo Mascali</strong>",
    btn_back_aria:"Torna al Workshop 2", flag_aria:"Bandiera italiana", lang_switcher_aria:"Seleziona la lingua",
    btn_top_aria:"Torna in alto", btn_top:"Inizio", footer_text:"Progetto Erasmus+ · Workshop 2 — Esercitazioni interattive", footer_cookie: "Cookie Policy", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
    tab4_label:"Risposta multipla", tab5_label:"Vero o Falso", tab6_label:"Vero o Falso", tab7_label:"Abbinamento",
    btn_verify:"Verifica", btn_reset:"Azzera", result_label:"Risposte corrette", select_placeholder:"— Scegli una descrizione —",

    quiz4_title:"Esercitazione 4 — Quiz a risposta multipla", quiz4_intro:"Per ogni domanda scegli la risposta corretta.",
    q4_1:"Qual è la caratteristica principale di un Regolamento UE?",
    q4_1a:"Vincola lo Stato membro solo per il risultato da raggiungere.",
    q4_1b:"Deve essere recepito con legge nazionale entro 2 anni.",
    q4_1c:"È obbligatorio in tutti i suoi elementi e direttamente applicabile in ciascuno Stato membro.",
    q4_1d:"Si rivolge solo a destinatari specifici.",
    q4_2:"Quale atto legislativo non è direttamente applicabile, ma richiede un atto di recepimento nazionale?",
    q4_2a:"Decisione", q4_2b:"Direttiva", q4_2c:"Regolamento", q4_2d:"Raccomandazione",
    q4_3:"Chi ha il compito di proporre nuovi atti legislativi dell'UE (diritto di iniziativa)?",
    q4_3a:"Parlamento Europeo", q4_3b:"Consiglio dell'Unione Europea", q4_3c:"Commissione Europea", q4_3d:"Corte di Giustizia",

    quiz5_title:"Esercitazione 5 — Vero o Falso", quiz5_intro:"Indica se ogni affermazione è Vera (V) o Falsa (F).",
    q5_1:"I Regolamenti europei, prima di essere applicati, devono essere recepiti da una normativa nazionale.",
    q5_2:"Le Raccomandazioni sono vincolanti per i destinatari.",
    q5_3:"Le Decisioni dell'UE sono vincolanti per i destinatari.",
    q5_4:"I Regolamenti fanno parte del diritto primario.",
    q5_5:"I Trattati dell'UE e la Carta dei Diritti Fondamentali appartengono al diritto primario.",
    q5_6:"Le Direttive fanno parte del diritto derivato e devono essere recepite dalle leggi nazionali.",
    q5_7:"Regolamenti, Direttive e Decisioni fanno parte del diritto derivato e sono vincolanti per i destinatari.",
    q5_8:"I Pareri sono vincolanti.",
    q5_9:"Gli Accordi tra Stati membri fanno parte del diritto derivato.",
    q5_10:"Pareri e Raccomandazioni hanno effetto di legge obbligatorio.",

    quiz6_title:"Esercitazione 6 — Vero o Falso", quiz6_intro:"Indica se ogni affermazione è Vera (V) o Falsa (F).",
    q6_1:"Il Regolamento è direttamente applicabile in tutti gli Stati membri.",
    q6_2:"La Direttiva vincola lo Stato membro quanto al risultato da raggiungere, lasciando libertà su forma e mezzi.",
    q6_3:"Una Decisione UE è direttamente applicabile.",
    q6_4:"Le Raccomandazioni sono atti vincolanti.",
    q6_5:"La Commissione Europea ha il compito di proporre nuovi atti legislativi.",

    quiz7_title:"Esercitazione 7 — Abbina le priorità dell'UE", quiz7_intro:"Per ogni priorità dell'Unione, apri il menu e scegli la descrizione corretta.",
    pri_1:"Un'Europa libera e democratica", pri_2:"Un'Europa forte e prospera", pri_3:"Un'Europa neutrale dal punto di vista climatico, equa e sociale",
    q7_a:"Competitività, mercato unico, crescita economica e sicurezza comune.",
    q7_b:"Transizione verde, giustizia sociale e lotta ai cambiamenti climatici.",
    q7_c:"Stato di diritto, diritti fondamentali, valori democratici e libertà."
  },

  // ---------------- ENGLISH ----------------
  en: {
    skip_link:"Skip to content",
    page_title:"Exercises — Workshop 2", hero_eyebrow:"Workshop 2", hero_title:"Interactive exercises",
    hero_subtitle:"Four quizzes to consolidate knowledge of the EU decision-making process: sources of law, legislative acts and the Union's priorities.",
    hero_curated: "Curated by: <strong>Antonio Catalfamo and Mimmo Mascali</strong>",
    btn_back_aria:"Back to Workshop 2", flag_aria:"Italian flag", lang_switcher_aria:"Select language",
    btn_top_aria:"Back to top", btn_top:"Top", footer_text:"Erasmus+ Project · Workshop 2 — Interactive exercises", footer_cookie: "Cookie Policy", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
    tab4_label:"Multiple choice", tab5_label:"True or False", tab6_label:"True or False", tab7_label:"Matching",
    btn_verify:"Check", btn_reset:"Reset", result_label:"Correct answers", select_placeholder:"— Choose a description —",

    quiz4_title:"Exercise 4 — Multiple-choice quiz", quiz4_intro:"For each question, choose the correct answer.",
    q4_1:"What is the main feature of an EU Regulation?",
    q4_1a:"It binds the Member State only as to the result to be achieved.",
    q4_1b:"It must be transposed by national law within 2 years.",
    q4_1c:"It is binding in its entirety and directly applicable in every Member State.",
    q4_1d:"It is addressed only to specific recipients.",
    q4_2:"Which legislative act is not directly applicable but requires a national transposition act?",
    q4_2a:"Decision", q4_2b:"Directive", q4_2c:"Regulation", q4_2d:"Recommendation",
    q4_3:"Who is responsible for proposing new EU legislative acts (right of initiative)?",
    q4_3a:"European Parliament", q4_3b:"Council of the European Union", q4_3c:"European Commission", q4_3d:"Court of Justice",

    quiz5_title:"Exercise 5 — True or False", quiz5_intro:"Mark each statement as True (V) or False (F).",
    q5_1:"EU Regulations must be transposed by national legislation before they apply.",
    q5_2:"Recommendations are binding on their addressees.",
    q5_3:"EU Decisions are binding on their addressees.",
    q5_4:"Regulations are part of primary law.",
    q5_5:"The EU Treaties and the Charter of Fundamental Rights belong to primary law.",
    q5_6:"Directives are part of derived law and must be transposed into national law.",
    q5_7:"Regulations, Directives and Decisions are part of derived law and are binding on their addressees.",
    q5_8:"Opinions are binding.",
    q5_9:"Agreements between Member States are part of derived law.",
    q5_10:"Opinions and Recommendations have binding legal effect.",

    quiz6_title:"Exercise 6 — True or False", quiz6_intro:"Mark each statement as True (V) or False (F).",
    q6_1:"A Regulation is directly applicable in all Member States.",
    q6_2:"A Directive binds the Member State as to the result to be achieved, leaving freedom over form and means.",
    q6_3:"An EU Decision is directly applicable.",
    q6_4:"Recommendations are binding acts.",
    q6_5:"The European Commission is responsible for proposing new legislative acts.",

    quiz7_title:"Exercise 7 — Match the EU priorities", quiz7_intro:"For each priority of the Union, open the menu and choose the correct description.",
    pri_1:"A free and democratic Europe", pri_2:"A strong and prosperous Europe", pri_3:"A climate-neutral, fair and social Europe",
    q7_a:"Competitiveness, single market, economic growth and common security.",
    q7_b:"Green transition, social justice and the fight against climate change.",
    q7_c:"Rule of law, fundamental rights, democratic values and freedom."
  },

  // ---------------- POLSKI ----------------
  pl: {
    skip_link:"Przejdź do treści",
    page_title:"Ćwiczenia — Warsztat 2", hero_eyebrow:"Warsztat 2", hero_title:"Ćwiczenia interaktywne",
    hero_subtitle:"Cztery quizy utrwalające wiedzę o procesie decyzyjnym UE: źródła prawa, akty prawne i priorytety Unii.",
    hero_curated: "Opracowanie: <strong>Antonio Catalfamo i Mimmo Mascali</strong>",
    btn_back_aria:"Powrót do Warsztatu 2", flag_aria:"Flaga włoska", lang_switcher_aria:"Wybierz język",
    btn_top_aria:"Powrót na górę", btn_top:"Góra", footer_text:"Projekt Erasmus+ · Warsztat 2 — Ćwiczenia interaktywne", footer_cookie: "Cookie Policy", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
    tab4_label:"Wybór wielokrotny", tab5_label:"Prawda lub Fałsz", tab6_label:"Prawda lub Fałsz", tab7_label:"Dopasowanie",
    btn_verify:"Sprawdź", btn_reset:"Wyzeruj", result_label:"Poprawne odpowiedzi", select_placeholder:"— Wybierz opis —",

    quiz4_title:"Ćwiczenie 4 — Quiz wielokrotnego wyboru", quiz4_intro:"Dla każdego pytania wybierz poprawną odpowiedź.",
    q4_1:"Jaka jest główna cecha rozporządzenia UE?",
    q4_1a:"Wiąże państwo członkowskie tylko co do celu, który ma być osiągnięty.",
    q4_1b:"Musi zostać transponowane ustawą krajową w ciągu 2 lat.",
    q4_1c:"Jest wiążące w całości i bezpośrednio stosowane w każdym państwie członkowskim.",
    q4_1d:"Jest skierowane tylko do określonych adresatów.",
    q4_2:"Który akt prawny nie jest bezpośrednio stosowany, lecz wymaga krajowego aktu transpozycji?",
    q4_2a:"Decyzja", q4_2b:"Dyrektywa", q4_2c:"Rozporządzenie", q4_2d:"Zalecenie",
    q4_3:"Kto jest odpowiedzialny za proponowanie nowych aktów prawnych UE (prawo inicjatywy)?",
    q4_3a:"Parlament Europejski", q4_3b:"Rada Unii Europejskiej", q4_3c:"Komisja Europejska", q4_3d:"Trybunał Sprawiedliwości",

    quiz5_title:"Ćwiczenie 5 — Prawda lub Fałsz", quiz5_intro:"Oznacz każde stwierdzenie jako Prawdziwe (V) lub Fałszywe (F).",
    q5_1:"Rozporządzenia UE przed zastosowaniem muszą zostać transponowane przepisami krajowymi.",
    q5_2:"Zalecenia są wiążące dla adresatów.",
    q5_3:"Decyzje UE są wiążące dla adresatów.",
    q5_4:"Rozporządzenia należą do prawa pierwotnego.",
    q5_5:"Traktaty UE i Karta Praw Podstawowych należą do prawa pierwotnego.",
    q5_6:"Dyrektywy należą do prawa pochodnego i muszą zostać transponowane do prawa krajowego.",
    q5_7:"Rozporządzenia, dyrektywy i decyzje należą do prawa pochodnego i są wiążące dla adresatów.",
    q5_8:"Opinie są wiążące.",
    q5_9:"Umowy między państwami członkowskimi należą do prawa pochodnego.",
    q5_10:"Opinie i zalecenia mają wiążący skutek prawny.",

    quiz6_title:"Ćwiczenie 6 — Prawda lub Fałsz", quiz6_intro:"Oznacz każde stwierdzenie jako Prawdziwe (V) lub Fałszywe (F).",
    q6_1:"Rozporządzenie jest bezpośrednio stosowane we wszystkich państwach członkowskich.",
    q6_2:"Dyrektywa wiąże państwo członkowskie co do celu, pozostawiając swobodę co do formy i środków.",
    q6_3:"Decyzja UE jest bezpośrednio stosowana.",
    q6_4:"Zalecenia są aktami wiążącymi.",
    q6_5:"Komisja Europejska jest odpowiedzialna za proponowanie nowych aktów prawnych.",

    quiz7_title:"Ćwiczenie 7 — Dopasuj priorytety UE", quiz7_intro:"Dla każdego priorytetu Unii otwórz menu i wybierz poprawny opis.",
    pri_1:"Wolna i demokratyczna Europa", pri_2:"Silna i dobrze prosperująca Europa", pri_3:"Europa neutralna klimatycznie, sprawiedliwa i społeczna",
    q7_a:"Konkurencyjność, jednolity rynek, wzrost gospodarczy i wspólne bezpieczeństwo.",
    q7_b:"Zielona transformacja, sprawiedliwość społeczna i walka ze zmianami klimatu.",
    q7_c:"Praworządność, prawa podstawowe, wartości demokratyczne i wolność."
  },

  // ---------------- DEUTSCH ----------------
  de: {
    skip_link:"Zum Inhalt springen",
    page_title:"Übungen — Workshop 2", hero_eyebrow:"Workshop 2", hero_title:"Interaktive Übungen",
    hero_subtitle:"Vier Quiz, um das Wissen über den EU-Entscheidungsprozess zu festigen: Rechtsquellen, Rechtsakte und Prioritäten der Union.",
    hero_curated: "Erstellt von: <strong>Antonio Catalfamo und Mimmo Mascali</strong>",
    btn_back_aria:"Zurück zum Workshop 2", flag_aria:"Italienische Flagge", lang_switcher_aria:"Sprache auswählen",
    btn_top_aria:"Nach oben", btn_top:"Oben", footer_text:"Erasmus+-Projekt · Workshop 2 — Interaktive Übungen", footer_cookie: "Cookie Policy", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
    tab4_label:"Multiple Choice", tab5_label:"Richtig oder Falsch", tab6_label:"Richtig oder Falsch", tab7_label:"Zuordnung",
    btn_verify:"Prüfen", btn_reset:"Zurücksetzen", result_label:"Richtige Antworten", select_placeholder:"— Beschreibung wählen —",

    quiz4_title:"Übung 4 — Multiple-Choice-Quiz", quiz4_intro:"Wähle für jede Frage die richtige Antwort.",
    q4_1:"Was ist das Hauptmerkmal einer EU-Verordnung?",
    q4_1a:"Sie bindet den Mitgliedstaat nur hinsichtlich des zu erreichenden Ziels.",
    q4_1b:"Sie muss innerhalb von 2 Jahren durch nationales Gesetz umgesetzt werden.",
    q4_1c:"Sie ist in allen ihren Teilen verbindlich und gilt unmittelbar in jedem Mitgliedstaat.",
    q4_1d:"Sie richtet sich nur an bestimmte Adressaten.",
    q4_2:"Welcher Rechtsakt ist nicht unmittelbar anwendbar, sondern erfordert einen nationalen Umsetzungsakt?",
    q4_2a:"Beschluss", q4_2b:"Richtlinie", q4_2c:"Verordnung", q4_2d:"Empfehlung",
    q4_3:"Wer ist für den Vorschlag neuer EU-Rechtsakte zuständig (Initiativrecht)?",
    q4_3a:"Europäisches Parlament", q4_3b:"Rat der Europäischen Union", q4_3c:"Europäische Kommission", q4_3d:"Gerichtshof",

    quiz5_title:"Übung 5 — Richtig oder Falsch", quiz5_intro:"Markiere jede Aussage als Richtig (V) oder Falsch (F).",
    q5_1:"EU-Verordnungen müssen vor ihrer Anwendung durch nationale Vorschriften umgesetzt werden.",
    q5_2:"Empfehlungen sind für die Adressaten verbindlich.",
    q5_3:"EU-Beschlüsse sind für die Adressaten verbindlich.",
    q5_4:"Verordnungen gehören zum Primärrecht.",
    q5_5:"Die EU-Verträge und die Charta der Grundrechte gehören zum Primärrecht.",
    q5_6:"Richtlinien gehören zum abgeleiteten Recht und müssen in nationales Recht umgesetzt werden.",
    q5_7:"Verordnungen, Richtlinien und Beschlüsse gehören zum abgeleiteten Recht und sind für die Adressaten verbindlich.",
    q5_8:"Stellungnahmen sind verbindlich.",
    q5_9:"Vereinbarungen zwischen Mitgliedstaaten gehören zum abgeleiteten Recht.",
    q5_10:"Stellungnahmen und Empfehlungen haben verbindliche Rechtswirkung.",

    quiz6_title:"Übung 6 — Richtig oder Falsch", quiz6_intro:"Markiere jede Aussage als Richtig (V) oder Falsch (F).",
    q6_1:"Eine Verordnung ist in allen Mitgliedstaaten unmittelbar anwendbar.",
    q6_2:"Eine Richtlinie bindet den Mitgliedstaat hinsichtlich des Ziels und lässt Freiheit bei Form und Mitteln.",
    q6_3:"Ein EU-Beschluss ist unmittelbar anwendbar.",
    q6_4:"Empfehlungen sind verbindliche Rechtsakte.",
    q6_5:"Die Europäische Kommission ist für den Vorschlag neuer Rechtsakte zuständig.",

    quiz7_title:"Übung 7 — Ordne die EU-Prioritäten zu", quiz7_intro:"Öffne für jede Priorität der Union das Menü und wähle die richtige Beschreibung.",
    pri_1:"Ein freies und demokratisches Europa", pri_2:"Ein starkes und wohlhabendes Europa", pri_3:"Ein klimaneutrales, faires und soziales Europa",
    q7_a:"Wettbewerbsfähigkeit, Binnenmarkt, Wirtschaftswachstum und gemeinsame Sicherheit.",
    q7_b:"Grüner Wandel, soziale Gerechtigkeit und Kampf gegen den Klimawandel.",
    q7_c:"Rechtsstaatlichkeit, Grundrechte, demokratische Werte und Freiheit."
  },

  // ---------------- LATVIEŠU ----------------
  lv: {
    skip_link:"Pāriet uz saturu",
    page_title:"Vingrinājumi — Seminārs 2", hero_eyebrow:"Seminārs 2", hero_title:"Interaktīvi vingrinājumi",
    hero_subtitle:"Četras viktorīnas, lai nostiprinātu zināšanas par ES lēmumu pieņemšanas procesu: tiesību avoti, tiesību akti un Savienības prioritātes.",
    hero_curated: "Sagatavoja: <strong>Antonio Catalfamo un Mimmo Mascali</strong>",
    btn_back_aria:"Atpakaļ uz Semināru 2", flag_aria:"Itālijas karogs", lang_switcher_aria:"Izvēlēties valodu",
    btn_top_aria:"Uz augšu", btn_top:"Augšā", footer_text:"Erasmus+ projekts · Seminārs 2 — Interaktīvi vingrinājumi", footer_cookie: "Cookie Policy", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
    tab4_label:"Vairākizvēle", tab5_label:"Patiess vai Aplams", tab6_label:"Patiess vai Aplams", tab7_label:"Saskaņošana",
    btn_verify:"Pārbaudīt", btn_reset:"Nodzēst", result_label:"Pareizas atbildes", select_placeholder:"— Izvēlies aprakstu —",

    quiz4_title:"4. vingrinājums — Vairākizvēles viktorīna", quiz4_intro:"Katram jautājumam izvēlies pareizo atbildi.",
    q4_1:"Kāda ir ES regulas galvenā iezīme?",
    q4_1a:"Tā saista dalībvalsti tikai attiecībā uz sasniedzamo rezultātu.",
    q4_1b:"Tā 2 gadu laikā jātransponē ar valsts likumu.",
    q4_1c:"Tā ir saistoša visās savās daļās un tieši piemērojama katrā dalībvalstī.",
    q4_1d:"Tā ir adresēta tikai konkrētiem adresātiem.",
    q4_2:"Kurš tiesību akts nav tieši piemērojams, bet prasa valsts transponēšanas aktu?",
    q4_2a:"Lēmums", q4_2b:"Direktīva", q4_2c:"Regula", q4_2d:"Ieteikums",
    q4_3:"Kas ir atbildīgs par jaunu ES tiesību aktu ierosināšanu (iniciatīvas tiesības)?",
    q4_3a:"Eiropas Parlaments", q4_3b:"Eiropas Savienības Padome", q4_3c:"Eiropas Komisija", q4_3d:"Tiesa",

    quiz5_title:"5. vingrinājums — Patiess vai Aplams", quiz5_intro:"Atzīmē katru apgalvojumu kā Patiesu (V) vai Aplamu (F).",
    q5_1:"ES regulas pirms piemērošanas ir jātransponē ar valsts tiesību aktiem.",
    q5_2:"Ieteikumi ir saistoši adresātiem.",
    q5_3:"ES lēmumi ir saistoši adresātiem.",
    q5_4:"Regulas ir daļa no primārajām tiesībām.",
    q5_5:"ES līgumi un Pamattiesību harta pieder primārajām tiesībām.",
    q5_6:"Direktīvas ir daļa no atvasinātajām tiesībām un ir jātransponē valsts tiesību aktos.",
    q5_7:"Regulas, direktīvas un lēmumi ir daļa no atvasinātajām tiesībām un ir saistoši adresātiem.",
    q5_8:"Atzinumi ir saistoši.",
    q5_9:"Nolīgumi starp dalībvalstīm ir daļa no atvasinātajām tiesībām.",
    q5_10:"Atzinumiem un ieteikumiem ir saistošs juridisks spēks.",

    quiz6_title:"6. vingrinājums — Patiess vai Aplams", quiz6_intro:"Atzīmē katru apgalvojumu kā Patiesu (V) vai Aplamu (F).",
    q6_1:"Regula ir tieši piemērojama visās dalībvalstīs.",
    q6_2:"Direktīva saista dalībvalsti attiecībā uz sasniedzamo rezultātu, atstājot brīvību par formu un līdzekļiem.",
    q6_3:"ES lēmums ir tieši piemērojams.",
    q6_4:"Ieteikumi ir saistoši akti.",
    q6_5:"Eiropas Komisija ir atbildīga par jaunu tiesību aktu ierosināšanu.",

    quiz7_title:"7. vingrinājums — Saskaņo ES prioritātes", quiz7_intro:"Katrai Savienības prioritātei atver izvēlni un izvēlies pareizo aprakstu.",
    pri_1:"Brīva un demokrātiska Eiropa", pri_2:"Spēcīga un plaukstoša Eiropa", pri_3:"Klimatneitrāla, taisnīga un sociāla Eiropa",
    q7_a:"Konkurētspēja, vienotais tirgus, ekonomiskā izaugsme un kopējā drošība.",
    q7_b:"Zaļā pāreja, sociālā taisnīgums un cīņa pret klimata pārmaiņām.",
    q7_c:"Tiesiskums, pamattiesības, demokrātiskās vērtības un brīvība."
  }

};

// ============================================================
// Motore i18n + selettore lingua
// ============================================================
(function () {
  'use strict';
  var LANGS = {
    it:{label:'Italiano', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/></svg>'},
    en:{label:'English', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36"><rect width="60" height="36" fill="#012169"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" stroke-width="12"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" stroke-width="4"/><rect x="0" y="13.5" width="60" height="9" fill="#fff"/><rect x="25.5" y="0" width="9" height="36" fill="#fff"/><rect x="0" y="15" width="60" height="6" fill="#C8102E"/><rect x="27" y="0" width="6" height="36" fill="#C8102E"/></svg>'},
    pl:{label:'Polski', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#DC143C"/></svg>'},
    de:{label:'Deutsch', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="6.67" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#DD0000"/><rect y="13.33" width="30" height="6.67" fill="#FFCE00"/></svg>'},
    lv:{label:'Latviešu', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="8" fill="#9E3039"/><rect y="8" width="30" height="4" fill="#fff"/><rect y="12" width="30" height="8" fill="#9E3039"/></svg>'}
  };
  var currentLang = localStorage.getItem('erasmus_lang') || 'it';
  function apply(lang){
    var t=TRANSLATIONS[lang]; if(!t) return;
    document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n'); if(t[k]!==undefined) el.textContent=t[k];});
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){var k=el.getAttribute('data-i18n-html'); if(t[k]!==undefined) el.innerHTML=t[k];});
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){var k=el.getAttribute('data-i18n-aria'); if(t[k]!==undefined) el.setAttribute('aria-label',t[k]);});
    if(t.page_title) document.title=t.page_title;
    document.documentElement.setAttribute('lang',lang);
    document.querySelectorAll('.lang-btn').forEach(function(b){var a=b.getAttribute('data-lang')===lang;b.classList.toggle('lang-btn--active',a);b.setAttribute('aria-pressed',a?'true':'false');});
    var sw=document.getElementById('langSwitcher');
    if(sw&&sw._mobileFlag){sw._mobileFlag.src='data:image/svg+xml,'+encodeURIComponent(LANGS[lang].svg);sw._mobileFlag.alt=LANGS[lang].label;}
    if(sw&&sw._dropdown) sw._dropdown.querySelectorAll('[data-lang-item]').forEach(function(i){i.classList.toggle('lang-dropdown-item--active',i.getAttribute('data-lang-item')===lang);});
    currentLang=lang; localStorage.setItem('erasmus_lang',lang);
  }
  function mkFlag(code,w,h){var img=document.createElement('img');img.src='data:image/svg+xml,'+encodeURIComponent(LANGS[code].svg);img.alt=LANGS[code].label;img.setAttribute('width',String(w));img.setAttribute('height',String(h));img.style.cssText='border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,0.15);display:block;flex-shrink:0;';return img;}
  function build(){
    var sw=document.getElementById('langSwitcher'); if(!sw) return;
    Object.keys(LANGS).forEach(function(code){var b=document.createElement('button');b.className='lang-btn';b.setAttribute('data-lang',code);b.setAttribute('aria-label',LANGS[code].label);b.setAttribute('aria-pressed','false');b.setAttribute('type','button');b.appendChild(mkFlag(code,32,22));b.addEventListener('click',function(){apply(code);});sw.appendChild(b);});
    var mb=document.createElement('button');mb.className='lang-mobile-btn';mb.id='langMobileBtn';mb.setAttribute('type','button');mb.setAttribute('aria-haspopup','true');mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Seleziona la lingua');
    var mf=document.createElement('img');mf.setAttribute('width','32');mf.setAttribute('height','22');mf.style.cssText='border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,0.15);display:block;';mb.appendChild(mf);
    var ar=document.createElement('span');ar.className='lang-mobile-arrow';ar.setAttribute('aria-hidden','true');ar.textContent='▾';mb.appendChild(ar);
    var dd=document.createElement('div');dd.className='lang-dropdown';dd.id='langDropdown';dd.setAttribute('hidden','');
    Object.keys(LANGS).forEach(function(code){var it=document.createElement('button');it.className='lang-dropdown-item';it.setAttribute('type','button');it.setAttribute('data-lang-item',code);it.appendChild(mkFlag(code,32,22));it.appendChild(document.createTextNode(' '+LANGS[code].label));it.addEventListener('click',function(e){e.stopPropagation();apply(code);cl();});dd.appendChild(it);});
    function op(){dd.removeAttribute('hidden');mb.setAttribute('aria-expanded','true');} function cl(){dd.setAttribute('hidden','');mb.setAttribute('aria-expanded','false');}
    mb.addEventListener('click',function(e){e.stopPropagation();mb.getAttribute('aria-expanded')==='true'?cl():op();});
    document.addEventListener('click',function(){cl();});
    sw.appendChild(mb);(sw.closest('.logo-bar')||document.body).appendChild(dd);
    sw._mobileFlag=mf; sw._dropdown=dd;
  }
  function init(){build();apply(currentLang);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
}());
