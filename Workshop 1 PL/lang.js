// ============================================================
// lang.js — Workshop 1 (Polonia) · Europe at a Crossroads
// Lingue: en · it · pl · de · lv
// ============================================================

(function () {

  const TRANSLATIONS = {
    en: {
      skip_link: "Skip to content",
      btn_home_aria: "Back to Home",
      lang_switcher_aria: "Select language",
      flag_aria: "Polish flag",
      btn_top: "Top",
      btn_top_aria: "Back to top",
      hero_eyebrow: "Poland · Workshop 1",
      hero_title: "Europe at a Crossroads",
      page_title: "Europe at a Crossroads",
      hero_subtitle: "A drama and role-play workshop exploring EU challenges and decisions, designed for seniors to reflect on European integration from multiple perspectives.",
      hero_authors: "Author: <strong>Barbara Janic</strong> · Fundacja “Aktywni XXI”",
      info_duration_label: "Duration",
      info_participants_label: "Participants",
      info_participants_value: "12–25 people",
      hero_pill_audience_label: "Audience",
      info_audience_value: "Seniors",
      sec_about: "About the Workshop",
      about_text: "Participants explore the European Union through personal memories, perspective-taking and drama. By stepping into different roles—citizen, politician, migrant, EU candidate country, sceptic—they discover the complexity of EU decision-making and strengthen their sense of civic agency.",
      sec_objectives: "Workshop Objectives",
      obj_gen_label: "General Objectives",
      obj1: "Develop civic awareness of how the European Union functions.",
      obj2: "Build the ability to look at EU challenges from multiple perspectives.",
      obj3: "Encourage reflection on the future of European integration.",
      obj_spec_label: "Specific Objectives",
      spec1: "Understand that the EU is a process of negotiations, compromises and choices.",
      spec2: "Learn about different viewpoints: citizen, politician, migrant, Member State, candidate country.",
      spec3: "Develop argumentation and opinion-forming skills.",
      spec4: "Strengthen empathy and dialogue skills.",
      sec_target: "Who Is This Workshop For?",
      target_text: "The workshop is designed for adults, especially seniors, interested in the European Union and civic affairs. No specialist knowledge is required — what matters is life experience and a willingness to engage in drama work.",
      sec_methods: "Working Methods",
      met1: "Drama / role play",
      met2: "Moderated discussion",
      met3: "Group work",
      met4: "Brainstorming",
      met5: "Elements of interactive lecture",
      sec_agenda: "How the Workshop Unfolds (120–150 min)",
      ag1_title: "Introduction",
      ag1_text: "Welcome participants, present the workshop objective and ground rules (respect, no “right” or “wrong” answers, right to change one’s mind). Brief introduction to the drama method.",
      ag1_time: "10 min",
      ag2_title: "Activity 1 — “The Europe I Remember”",
      ag2_text: "Participants work in pairs, sharing memories and reflections on the EU: when did they first hear about the EU? How has it changed their life? Willing pairs share a short statement with the group.",
      ag2_time: "15 min",
      ag3_title: "Activity 2 — Drama: “EU Future Summit”",
      ag3_text: "Participants draw roles (Polish citizen, citizen of the “old EU”, EU politician, migrant, candidate country representative, EU sceptic) and debate three key challenges: migration, EU enlargement and Brexit as a lesson. The facilitator moderates a simulated EU summit.",
      ag3_time: "60 min",
      ag4_title: "Activity 3 — Discussion and Reflection",
      ag4_text: "Group discussion after the drama: What was most difficult in my role? Did I change my mind? Can the EU please everyone?",
      ag4_time: "20 min",
      ag5_title: "Summary — “Seniors’ Declaration”",
      ag5_text: "Together the group writes the “Seniors’ Declaration on the Future of the European Union” — a 1–2 page document with the participants’ most important conclusions, values and demands.",
      ag5_time: "30 min",
      sec_roles: "Role Cards",
      roles_lead: "Each participant (or small group) draws one card. They do not need to “act”—they simply speak from that role’s perspective. Print on A5 or A4, preferably on coloured paper.",
      role1_title: "Polish Citizen (Senior)",
      role1_who: "You are a senior living in Poland. You remember the times before EU accession and the changes after 2004.",
      role1_matters: "Security · Stability · Preserving national identity · Support for regions and seniors",
      role1_q: "Will the EU continue to help Poland? | Will new EU countries weaken our position? | How will the EU handle migration?",
      role2_title: "Citizen of the “Old EU”",
      role2_who: "You are a senior from a country that has been in the EU from the very beginning (e.g. Germany, France).",
      role2_matters: "Economic stability · Common rules · Responsibility of all countries",
      role2_q: "Is the EU expanding too quickly? | Do all countries follow the same rules? | Who will pay for any crises?",
      role3_title: "European Union Politician",
      role3_who: "You must think about the interests of the entire EU, not just those of a single country.",
      role3_matters: "Seeking compromises · Mitigating conflicts · Thinking long-term",
      role3_q: "Migration — solidarity or national interest? | Brexit — punishment or warning? | Climate change — quick decisions or caution?",
      role4_title: "Migrant",
      role4_who: "You came to Europe from a country affected by war, crisis or climate change.",
      role4_matters: "Safety · Work · Respect",
      role4_q: "Is Europe solidary? | Does everyone have the same rights? | How can we integrate without losing our identity?",
      role5_title: "Representative of a Candidate Country",
      role5_who: "You represent a country that wants to join the European Union.",
      role5_matters: "The EU stands for peace and development · Shared values · A better future for young people",
      role5_q: "Is the EU still open? | Will we be treated worse?",
      role6_title: "EU Sceptic",
      role6_who: "You believe the EU has too much influence on the lives of countries.",
      role6_matters: "Too many regulations · Loss of sovereignty · Brexit as an example",
      role6_q: "Is the EU really necessary? | Can’t countries manage on their own?",
      sec_problems: "Problem Cards",
      problems_lead: "The facilitator draws 2–4 cards during the drama, depending on the pace of the debate. Each card introduces a new challenge for the group to discuss.",
      prob1: "“A large number of migrants are arriving in Europe.”",
      prob2: "“One country is considering leaving the EU.”",
      prob3: "“Climate change is causing a food crisis.”",
      prob4: "“A new country wants to join the EU.”",
      prob5: "“Citizens are losing trust in EU institutions.”",
      sec_downloads: "Materials to Download",
      dl_lead: "All materials for Workshop 1 (Poland), print-ready. Files exist in English (EN) only — these are the originals from the Polish team.",
      dl_note: "Note: the files are the Polish team’s originals and exist only in English (EN). The page itself is translated into all languages.",
      dl_g_guide: "For the facilitator",
      dl_g_cards: "For participants",
      dl_module: "Workshop Guide (full plan)",
      dl_module_d: "Complete step-by-step guide for the workshop facilitator.",
      dl_roles: "Role Cards (6 roles)",
      dl_roles_d: "Print one card per participant (or small group). Coloured paper recommended.",
      dl_problems: "Problem Cards (5 scenarios)",
      dl_problems_d: "Drawn by the facilitator during the drama to introduce new challenges.",
      footer_text: "Erasmus+ Project · Workshop 1 (Poland) — Europe at a Crossroads",
      footer_wa: "Contact", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
    },
    it: {
      skip_link: "Salta al contenuto",
      btn_home_aria: "Torna alla Home",
      lang_switcher_aria: "Seleziona lingua",
      flag_aria: "Bandiera polacca",
      btn_top: "Su",
      btn_top_aria: "Torna in cima",
      hero_eyebrow: "Polonia · Workshop 1",
      hero_title: "L’Europa a un bivio",
      page_title: "L’Europa a un bivio",
      hero_subtitle: "Un workshop di drama e gioco di ruolo sulle sfide e le decisioni dell’UE, pensato per far riflettere i senior sull’integrazione europea da più prospettive.",
      hero_authors: "Autrice: <strong>Barbara Janic</strong> · Fundacja „Aktywni XXI”",
      info_duration_label: "Durata",
      info_participants_label: "Partecipanti",
      info_participants_value: "12–25 persone",
      hero_pill_audience_label: "Pubblico",
      info_audience_value: "Senior",
      sec_about: "Il Workshop",
      about_text: "I partecipanti esplorano l’Unione Europea attraverso ricordi personali, il cambio di prospettiva e il drama. Interpretando ruoli diversi — cittadino, politico, migrante, paese candidato, euroscettico — scoprono la complessità del processo decisionale UE e rafforzano il senso di partecipazione civica.",
      sec_objectives: "Obiettivi del Workshop",
      obj_gen_label: "Obiettivi generali",
      obj1: "Sviluppare la consapevolezza civica sul funzionamento dell’Unione Europea.",
      obj2: "Costruire la capacità di guardare alle sfide UE da più prospettive.",
      obj3: "Incoraggiare la riflessione sul futuro dell’integrazione europea.",
      obj_spec_label: "Obiettivi specifici",
      spec1: "Capire che l’UE è un processo di negoziazioni, compromessi e scelte.",
      spec2: "Conoscere punti di vista diversi: cittadino, politico, migrante, Stato membro, paese candidato.",
      spec3: "Sviluppare abilità argomentative e di formazione del pensiero critico.",
      spec4: "Rafforzare l’empatia e le capacità di dialogo.",
      sec_target: "A chi è rivolto?",
      target_text: "Il workshop è destinato ad adulti, in particolare senior, interessati all’Unione Europea e alle questioni civiche. Non è richiesta alcuna conoscenza specialistica: contano l’esperienza di vita e la disponibilità a partecipare al drama.",
      sec_methods: "Metodi di lavoro",
      met1: "Drama / gioco di ruolo",
      met2: "Discussione moderata",
      met3: "Lavoro di gruppo",
      met4: "Brainstorming",
      met5: "Elementi di lezione interattiva",
      sec_agenda: "Svolgimento del workshop (120–150 min)",
      ag1_title: "Introduzione",
      ag1_text: "Benvenuto ai partecipanti, presentazione degli obiettivi e delle regole (rispetto, nessuna risposta “giusta” o “sbagliata”, diritto di cambiare idea). Breve introduzione al metodo drama.",
      ag1_time: "10 min",
      ag2_title: "Attività 1 — “L’Europa che ricordo”",
      ag2_text: "I partecipanti lavorano in coppie condividendo ricordi e riflessioni sull’UE: quando hanno sentito parlare per la prima volta dell’UE? Come ha cambiato la loro vita? Chi vuole condivide una breve dichiarazione con il gruppo.",
      ag2_time: "15 min",
      ag3_title: "Attività 2 — Drama: “Vertice sul futuro dell’UE”",
      ag3_text: "I partecipanti estraggono i ruoli (cittadino polacco, cittadino dell’“UE storica”, politico UE, migrante, rappresentante di paese candidato, euroscettico) e dibattono tre sfide chiave: migrazione, allargamento UE e Brexit come lezione. Il facilitatore modera un vertice UE simulato.",
      ag3_time: "60 min",
      ag4_title: "Attività 3 — Discussione e riflessione",
      ag4_text: "Discussione di gruppo dopo il drama: cosa è stato più difficile nel mio ruolo? Ho cambiato idea? Può l’UE accontentare tutti?",
      ag4_time: "20 min",
      ag5_title: "Sintesi — “Dichiarazione dei Senior”",
      ag5_text: "Il gruppo redige insieme la “Dichiarazione dei Senior sul Futuro dell’Unione Europea” — un documento di 1–2 pagine con le conclusioni, i valori e le richieste dei partecipanti.",
      ag5_time: "30 min",
      sec_roles: "Schede Ruolo",
      roles_lead: "Ogni partecipante (o piccolo gruppo) estrae una scheda. Non è necessario “recitare”: basta parlare dalla prospettiva del proprio ruolo. Stampare su A5 o A4, preferibilmente su carta colorata.",
      role1_title: "Cittadino polacco (Senior)",
      role1_who: "Sei un senior che vive in Polonia. Ricordi i tempi prima dell’adesione all’UE e i cambiamenti dopo il 2004.",
      role1_matters: "Sicurezza · Stabilità · Preservare l’identità nazionale · Sostegno alle regioni e ai senior",
      role1_q: "L’UE continuerà ad aiutare la Polonia? | I nuovi paesi UE indeboliranno la nostra posizione? | Come gestirà l’UE la migrazione?",
      role2_title: "Cittadino dell’“UE storica”",
      role2_who: "Sei un senior di un paese che fa parte dell’UE fin dall’inizio (es. Germania, Francia).",
      role2_matters: "Stabilità economica · Regole comuni · Responsabilità di tutti i paesi",
      role2_q: "L’UE si sta allargando troppo in fretta? | Tutti i paesi rispettano le stesse regole? | Chi pagerà per le eventuali crisi?",
      role3_title: "Politico dell’Unione Europea",
      role3_who: "Devi pensare agli interessi dell’intera UE, non di un solo paese.",
      role3_matters: "Ricercare compromessi · Attenuare i conflitti · Pensare a lungo termine",
      role3_q: "Migrazione — solidarietà o interesse nazionale? | Brexit — punizione o avvertimento? | Clima — decisioni rapide o cautela?",
      role4_title: "Migrante",
      role4_who: "Sei arrivato in Europa da un paese colpito da guerre, crisi o cambiamenti climatici.",
      role4_matters: "Sicurezza · Lavoro · Rispetto",
      role4_q: "L’Europa è solidale? | Tutti hanno gli stessi diritti? | Come integrarsi senza perdere la propria identità?",
      role5_title: "Rappresentante di un Paese Candidato",
      role5_who: "Rappresenti un paese che vuole aderire all’Unione Europea.",
      role5_matters: "L’UE rappresenta pace e sviluppo · Valori condivisi · Un futuro migliore per i giovani",
      role5_q: "L’UE è ancora aperta? | Saremo trattati peggio?",
      role6_title: "Euroscettico",
      role6_who: "Credi che l’UE abbia troppa influenza sulla vita dei paesi.",
      role6_matters: "Troppe regolamentazioni · Perdita di sovranità · Brexit come esempio",
      role6_q: "L’UE è davvero necessaria? | I paesi non possono farcela da soli?",
      sec_problems: "Carte Problema",
      problems_lead: "Il facilitatore estrae 2–4 carte durante il drama, a seconda del ritmo del dibattito. Ogni carta introduce una nuova sfida su cui il gruppo si confronta.",
      prob1: "“Un gran numero di migranti sta arrivando in Europa.”",
      prob2: "“Un paese sta valutando di uscire dall’UE.”",
      prob3: "“I cambiamenti climatici stanno causando una crisi alimentare.”",
      prob4: "“Un nuovo paese vuole aderire all’UE.”",
      prob5: "“I cittadini stanno perdendo fiducia nelle istituzioni UE.”",
      sec_downloads: "Materiali da Scaricare",
      dl_lead: "Tutti i materiali del Workshop 1 Polonia, pronti per la stampa. I file esistono solo in inglese (EN) — sono gli originali del team polacco.",
      dl_note: "Nota: i file sono gli originali del team polacco e sono disponibili solo in inglese (EN). La pagina è tradotta in tutte le lingue.",
      dl_g_guide: "Per il facilitatore",
      dl_g_cards: "Per i partecipanti",
      dl_module: "Guida del Workshop (piano completo)",
      dl_module_d: "Guida passo-passo completa per il facilitatore.",
      dl_roles: "Schede Ruolo (6 ruoli)",
      dl_roles_d: "Stampare una scheda per partecipante (o piccolo gruppo). Consigliata carta colorata.",
      dl_problems: "Carte Problema (5 scenari)",
      dl_problems_d: "Estratte dal facilitatore durante il drama per introdurre nuove sfide.",
      footer_text: "Progetto Erasmus+ · Workshop 1 (Polonia) — L’Europa a un bivio",
      footer_wa: "Contatti", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
    },
    pl: {
      skip_link: "Przejdź do treści",
      btn_home_aria: "Powrót do strony głównej",
      lang_switcher_aria: "Wybierz język",
      flag_aria: "Flaga polska",
      btn_top: "Góra",
      btn_top_aria: "Powrót na górę",
      hero_eyebrow: "Polska · Warsztat 1",
      hero_title: "Europa na rozdrożu",
      page_title: "Europa na rozdrożu",
      hero_subtitle: "Warsztat dramatyczny i role play dotyczący wyzwań i decyzji UE, przeznaczony dla seniorów do refleksji nad integracją europejską z różnych perspektyw.",
      hero_authors: "Autorka: <strong>Barbara Janic</strong> · Fundacja „Aktywni XXI”",
      info_duration_label: "Czas trwania",
      info_participants_label: "Uczestnicy",
      info_participants_value: "12–25 osób",
      hero_pill_audience_label: "Odbiorcy",
      info_audience_value: "Seniorzy",
      sec_about: "O warsztacie",
      about_text: "Uczestnicy poznają Unię Europejską poprzez osobiste wspomnienia, zmianę perspektywy i drama. Wchodząc w różne role — obywatel, polityk, migrant, kraj kandydujący, sceptyk — odkrywają złożoność procesu decyzyjnego UE i wzmacniają poczucie obywatelskiej sprawczości.",
      sec_objectives: "Cele warsztatu",
      obj_gen_label: "Cele ogólne",
      obj1: "Rozwijanie świadomości obywatelskiej na temat funkcjonowania Unii Europejskiej.",
      obj2: "Budowanie umiejętności patrzenia na problemy UE z różnych perspektyw.",
      obj3: "Zachęcanie do refleksji nad przyszłością integracji europejskiej.",
      obj_spec_label: "Cele szczegółowe",
      spec1: "Zrozumienie, że UE jest procesem negocjacji, kompromisów i wyborów.",
      spec2: "Poznanie różnych punktów widzenia: obywatel, polityk, migrant, państwo członkowskie, kraj kandydujący.",
      spec3: "Rozwijanie umiejętności argumentacji i wyrabiania opinii.",
      spec4: "Wzmacnianie empatii i umiejętności dialogu.",
      sec_target: "Dla kogo jest ten warsztat?",
      target_text: "Warsztat jest przeznaczony dla dorosłych, zwłaszcza seniorów zainteresowanych Unią Europejską i sprawami obywatelskimi. Nie jest wymagana żadna specjalistyczna wiedza — liczą się doświadczenie życiowe i chęć uczestnictwa w pracy metodą dramy.",
      sec_methods: "Metody pracy",
      met1: "Drama / odgrywanie ról",
      met2: "Dyskusja moderowana",
      met3: "Praca w grupach",
      met4: "Burza mózgów",
      met5: "Elementy wykładu interaktywnego",
      sec_agenda: "Przebieg warsztatu (120–150 min)",
      ag1_title: "Wprowadzenie",
      ag1_text: "Powitanie uczestników, przedstawienie celów i zasad (szacunek, brak „prawidłowych” lub „błędnych” odpowiedzi, prawo do zmiany zdania). Krótkie wprowadzenie do metody dramy.",
      ag1_time: "10 min",
      ag2_title: "Aktywność 1 — „Europa, którą pamiętam”",
      ag2_text: "Uczestnicy pracują w parach, dzieląc się wspomnieniami i refleksjami na temat UE: kiedy po raz pierwszy usłyszeli o UE? Jak zmieniła ich życie? Chętni dzielą się krótką wypowiedzią z grupą.",
      ag2_time: "15 min",
      ag3_title: "Aktywność 2 — Drama: „Szczyt w sprawie przyszłości UE”",
      ag3_text: "Uczestnicy losują role (obywatel polski, obywatel „starej UE”, polityk UE, migrant, przedstawiciel kraju kandydującego, eurosceptyk) i debatują nad trzema kluczowymi wyzwaniami: migracją, rozszerzeniem UE i Brexitem jako lekcją. Prowadzący moderuje symulowany szczyt UE.",
      ag3_time: "60 min",
      ag4_title: "Aktywność 3 — Dyskusja i refleksja",
      ag4_text: "Dyskusja grupowa po dramie: co było najtrudniejsze w mojej roli? Czy zmieniłem/-am zdanie? Czy UE może zadowolić wszystkich?",
      ag4_time: "20 min",
      ag5_title: "Podsumowanie — „Deklaracja Seniorów”",
      ag5_text: "Grupa wspólnie redaguje „Deklarację Seniorów w sprawie przyszłości Unii Europejskiej” — dokument 1–2 stron z najważniejszymi wnioskami, wartościami i postulatami uczestników.",
      ag5_time: "30 min",
      sec_roles: "Karty ról",
      roles_lead: "Każdy uczestnik (lub mała grupa) losuje jedną kartę. Nie trzeba „grawać” — wystarczy mówić z perspektywy swojej roli. Drukować na A5 lub A4, najlepiej na kolorowym papierze.",
      role1_title: "Polski obywatel (Senior)",
      role1_who: "Jesteś seniorem mieszkającym w Polsce. Pamiętasz czasy sprzed akcesji do UE i zmiany po 2004 roku.",
      role1_matters: "Bezpieczeństwo · Stabilność · Zachowanie tożsamości narodowej · Wsparcie dla regionów i seniorów",
      role1_q: "Czy UE będzie nadal pomagać Polsce? | Czy nowe kraje UE osłabią naszą pozycję? | Jak UE poradzi sobie z migracją?",
      role2_title: "Obywatel „starej UE”",
      role2_who: "Jesteś seniorem z kraju, który należy do UE od samego początku (np. Niemcy, Francja).",
      role2_matters: "Stabilność gospodarcza · Wspólne zasady · Odpowiedzialność wszystkich krajów",
      role2_q: "Czy UE rozszerza się zbyt szybko? | Czy wszystkie kraje przestrzegają tych samych zasad? | Kto zapłaci za kryzysy?",
      role3_title: "Polityk Unii Europejskiej",
      role3_who: "Musisz myśleć o interesach całej UE, a nie tylko jednego kraju.",
      role3_matters: "Szukanie kompromisów · Łagodzenie konfliktów · Myślenie długoterminowe",
      role3_q: "Migracja — solidarność czy interes narodowy? | Brexit — kara czy ostrzeżenie? | Klimat — szybkie decyzje czy ostrożność?",
      role4_title: "Migrant",
      role4_who: "Przybyłeś/łaś do Europy z kraju dotkniętego wojną, kryzysem lub zmianami klimatycznymi.",
      role4_matters: "Bezpieczeństwo · Praca · Szacunek",
      role4_q: "Czy Europa jest solidarna? | Czy wszyscy mają te same prawa? | Jak integrować się bez utraty tożsamości?",
      role5_title: "Przedstawiciel kraju kandydującego",
      role5_who: "Reprezentujesz kraj, który chce przystąpić do Unii Europejskiej.",
      role5_matters: "UE oznacza pokój i rozwój · Wspólne wartości · Lepsza przyszłość dla młodych",
      role5_q: "Czy UE jest nadal otwarta? | Czy będziemy traktowani gorzej?",
      role6_title: "Eurosceptyk",
      role6_who: "Uważasz, że UE ma zbyt duży wpływ na życie krajów.",
      role6_matters: "Za dużo przepisów · Utrata suwerenności · Brexit jako przykład",
      role6_q: "Czy UE jest naprawdę potrzebna? | Czy kraje nie mogą radzić sobie samodzielnie?",
      sec_problems: "Karty problemów",
      problems_lead: "Prowadzący losuje 2–4 karty podczas dramy, w zależności od tempa debaty. Każda karta wprowadza nowe wyzwanie do omówienia przez grupę.",
      prob1: "„Do Europy przybywa duża liczba migrantów.”",
      prob2: "„Jeden z krajów rozważa opuszczenie UE.”",
      prob3: "„Zmiany klimatyczne powodują kryzys żywnociowy.”",
      prob4: "„Nowy kraj chce wstąpić do UE.”",
      prob5: "„Obywatele tracą zaufanie do instytucji UE.”",
      sec_downloads: "Materiały do pobrania",
      dl_lead: "Wszystkie materiały do Warsztatu 1 (Polska), gotowe do druku. Pliki dostępne tylko w języku angielskim (EN) — są to oryginały polskiego zespołu.",
      dl_note: "Uwaga: pliki są oryginałami polskiego zespołu i dostępne tylko w języku angielskim (EN). Strona jest przetłumaczona na wszystkie języki.",
      dl_g_guide: "Dla prowadzącego",
      dl_g_cards: "Dla uczestników",
      dl_module: "Przewodnik po warsztacie (pełny plan)",
      dl_module_d: "Pełny przewodnik krok po kroku dla prowadzącego.",
      dl_roles: "Karty ról (6 ról)",
      dl_roles_d: "Drukować jedną kartę na uczestnika (lub małą grupę). Zalecany kolorowy papier.",
      dl_problems: "Karty problemów (5 scenariuszy)",
      dl_problems_d: "Losowane przez prowadzącego podczas dramy w celu wprowadzenia nowych wyzwań.",
      footer_text: "Projekt Erasmus+ · Warsztat 1 (Polska) — Europa na rozdrożu",
      footer_wa: "Kontakt", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
    },
    de: {
      skip_link: "Zum Inhalt springen",
      btn_home_aria: "Zurück zur Startseite",
      lang_switcher_aria: "Sprache wählen",
      flag_aria: "Polnische Flagge",
      btn_top: "Oben",
      btn_top_aria: "Zurück nach oben",
      hero_eyebrow: "Polen · Workshop 1",
      hero_title: "Europa am Scheideweg",
      page_title: "Europa am Scheideweg",
      hero_subtitle: "Ein Drama- und Rollenspiel-Workshop über EU-Herausforderungen und Entscheidungen — für Ältere, die die europäische Integration aus verschiedenen Perspektiven reflektieren.",
      hero_authors: "Autorin: <strong>Barbara Janic</strong> · Fundacja „Aktywni XXI”",
      info_duration_label: "Dauer",
      info_participants_label: "Teilnehmende",
      info_participants_value: "12–25 Personen",
      hero_pill_audience_label: "Zielgruppe",
      info_audience_value: "Ältere",
      sec_about: "Über den Workshop",
      about_text: "Die Teilnehmenden erkunden die Europäische Union durch persönliche Erinnerungen, Perspektivwechsel und Drama. Indem sie in verschiedene Rollen schlüpfen — Bürger, Politiker, Migrant, Kandidatenland, Skeptiker — entdecken sie die Komplexität des EU-Entscheidungsprozesses und stärken ihr Bürgerbewusstsein.",
      sec_objectives: "Ziele des Workshops",
      obj_gen_label: "Allgemeine Ziele",
      obj1: "Stärkung des Bürgerbewusstseins für die Funktionsweise der Europäischen Union.",
      obj2: "Aufbau der Fähigkeit, EU-Herausforderungen aus verschiedenen Blickwinkeln zu betrachten.",
      obj3: "Anregung zur Reflexion über die Zukunft der europäischen Integration.",
      obj_spec_label: "Spezifische Ziele",
      spec1: "Verstehen, dass die EU ein Prozess von Verhandlungen, Kompromissen und Entscheidungen ist.",
      spec2: "Verschiedene Standpunkte kennenlernen: Bürger, Politiker, Migrant, Mitgliedstaat, Kandidatenland.",
      spec3: "Argumentations- und Meinungsbildungskompetenz entwickeln.",
      spec4: "Empathie und Dialogfähigkeiten stärken.",
      sec_target: "Für wen ist dieser Workshop?",
      target_text: "Der Workshop richtet sich an Erwachsene, insbesondere Ältere, die sich für die Europäische Union und Bürgerangelegenheiten interessieren. Fachwissen ist nicht erforderlich — Lebenserfahrung und die Bereitschaft zur Dramaarbeit stehen im Vordergrund.",
      sec_methods: "Arbeitsmethoden",
      met1: "Drama / Rollenspiel",
      met2: "Moderierte Diskussion",
      met3: "Gruppenarbeit",
      met4: "Brainstorming",
      met5: "Elemente einer interaktiven Lektion",
      sec_agenda: "Ablauf des Workshops (120–150 Min.)",
      ag1_title: "Einleitung",
      ag1_text: "Begrüßung der Teilnehmenden, Vorstellung der Ziele und Regeln (Respekt, keine „richtigen“ oder „falsche“ Antworten, Recht auf Meinungänderung). Kurze Einführung in die Dramapedagogik.",
      ag1_time: "10 Min.",
      ag2_title: "Aktivität 1 — „Das Europa, das ich kenne“",
      ag2_text: "Die Teilnehmenden arbeiten paarweise und teilen Erinnerungen und Gedanken zur EU: Wann hörten sie erstmals von der EU? Wie hat sie ihr Leben verändert? Wer möchte, teilt eine kurze Aussage mit der Gruppe.",
      ag2_time: "15 Min.",
      ag3_title: "Aktivität 2 — Drama: „EU-Zukunftsgipfel“",
      ag3_text: "Die Teilnehmenden ziehen Rollen (polnischer Bürger, Bürger der „alten EU“, EU-Politiker, Migrant, Vertreter eines Kandidatenlandes, EU-Skeptiker) und debattieren drei Schlüsselthemen: Migration, EU-Erweiterung und Brexit als Lektion. Der Moderator leitet einen simulierten EU-Gipfel.",
      ag3_time: "60 Min.",
      ag4_title: "Aktivität 3 — Diskussion und Reflexion",
      ag4_text: "Gruppengespräch nach dem Drama: Was war in meiner Rolle am schwierigsten? Habe ich meine Meinung geändert? Kann die EU alle zufriedenstellen?",
      ag4_time: "20 Min.",
      ag5_title: "Zusammenfassung — „Seniorenererklärung“",
      ag5_text: "Die Gruppe verfasst gemeinsam die „Erklärung der Senioren über die Zukunft der Europäischen Union“ — ein 1–2-seitiges Dokument mit den wichtigsten Schlussfolgerungen, Werten und Forderungen der Teilnehmenden.",
      ag5_time: "30 Min.",
      sec_roles: "Rollenkarten",
      roles_lead: "Jede/r Teilnehmende (oder Kleingruppe) zieht eine Karte. Man muss nicht „spielen“ — man spricht einfach aus der Perspektive der eigenen Rolle. A5 oder A4 drucken, vorzugsweise auf farbigem Papier.",
      role1_title: "Polnische/r Bürger/in (Senior)",
      role1_who: "Sie sind ein älterer Mensch aus Polen. Sie erinnern sich an die Zeit vor dem EU-Beitritt und die Veränderungen nach 2004.",
      role1_matters: "Sicherheit · Stabilität · Bewahrung der nationalen Identität · Unterstützung für Regionen und Ältere",
      role1_q: "Wird die EU Polen weiterhin helfen? | Werden neue EU-Länder unsere Position schwächen? | Wie wird die EU mit Migration umgehen?",
      role2_title: "Bürger/in der „alten EU“",
      role2_who: "Sie sind älter und kommen aus einem Land, das von Anfang an in der EU war (z. B. Deutschland, Frankreich).",
      role2_matters: "Wirtschaftliche Stabilität · Gemeinsame Regeln · Verantwortung aller Länder",
      role2_q: "Expandiert die EU zu schnell? | Halten alle Länder dieselben Regeln ein? | Wer wird für Krisen bezahlen?",
      role3_title: "EU-Politiker/in",
      role3_who: "Sie müssen an die Interessen der gesamten EU denken, nicht nur eines einzelnen Landes.",
      role3_matters: "Kompromisse suchen · Konflikte abmildern · Langfristig denken",
      role3_q: "Migration — Solidarität oder nationales Interesse? | Brexit — Strafe oder Warnung? | Klima — schnelle Entscheidungen oder Vorsicht?",
      role4_title: "Migrant/in",
      role4_who: "Sie sind aus einem Land, das von Krieg, Krise oder Klimawandel betroffen ist, nach Europa gekommen.",
      role4_matters: "Sicherheit · Arbeit · Respekt",
      role4_q: "Ist Europa solidarisch? | Haben alle dieselben Rechte? | Wie kann man sich integrieren, ohne die eigene Identität zu verlieren?",
      role5_title: "Vertreter/in eines Kandidatenlandes",
      role5_who: "Sie vertreten ein Land, das der Europäischen Union beitreten möchte.",
      role5_matters: "Die EU steht für Frieden und Entwicklung · Gemeinsame Werte · Eine bessere Zukunft für junge Menschen",
      role5_q: "Ist die EU noch offen? | Werden wir schlechter behandelt?",
      role6_title: "EU-Skeptiker/in",
      role6_who: "Sie sind der Meinung, dass die EU zu viel Einfluss auf das Leben der Länder hat.",
      role6_matters: "Zu viele Vorschriften · Souveränitätsverlust · Brexit als Beispiel",
      role6_q: "Ist die EU wirklich notwendig? | Können Länder nicht alleine auskommen?",
      sec_problems: "Problemkarten",
      problems_lead: "Der Moderator zieht 2–4 Karten während des Dramas, je nach Tempo der Debatte. Jede Karte bringt eine neue Herausforderung für die Gruppe.",
      prob1: "„Eine große Zahl von Migranten kommt nach Europa.“",
      prob2: "„Ein Land erwägt, die EU zu verlassen.“",
      prob3: "„Der Klimawandel verursacht eine Nahrungsmittelkrise.“",
      prob4: "„Ein neues Land möchte der EU beitreten.“",
      prob5: "„Die Bürger verlieren das Vertrauen in die EU-Institutionen.“",
      sec_downloads: "Materialien zum Herunterladen",
      dl_lead: "Alle Materialien für Workshop 1 (Polen), druckfertig. Dateien nur auf Englisch (EN) — Originale des polnischen Teams.",
      dl_note: "Hinweis: Die Dateien sind die Originale des polnischen Teams und nur auf Englisch (EN) verfügbar. Die Seite selbst ist in alle Sprachen übersetzt.",
      dl_g_guide: "Für die Moderation",
      dl_g_cards: "Für die Teilnehmenden",
      dl_module: "Workshop-Leitfaden (vollständiger Plan)",
      dl_module_d: "Vollständige Schritt-für-Schritt-Anleitung für die Moderation.",
      dl_roles: "Rollenkarten (6 Rollen)",
      dl_roles_d: "Eine Karte pro Teilnehmende/r (oder Kleingruppe). Farbiges Papier empfohlen.",
      dl_problems: "Problemkarten (5 Szenarien)",
      dl_problems_d: "Werden vom Moderator während des Dramas gezogen, um neue Herausforderungen einzuführen.",
      footer_text: "Erasmus+-Projekt · Workshop 1 (Polen) — Europa am Scheideweg",
      footer_wa: "Kontakt", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
    },
    lv: {
      skip_link: "Pāriet uz saturu",
      btn_home_aria: "Atpakaļ uz sākumu",
      lang_switcher_aria: "Izvēlieties valodu",
      flag_aria: "Poļu karogs",
      btn_top: "Augšā",
      btn_top_aria: "Atpakaļ uz augšu",
      hero_eyebrow: "Polija · 1. seminārs",
      hero_title: "Eiropa kryžučcelēs",
      page_title: "Eiropa kryžučcelēs",
      hero_subtitle: "Dramas un lomu spēles seminārs par ES izaicinājumiem un lēmumiem, piemērots senioriem, lai pārdomātu Eiropas integrāciju no dažādām perspektīvām.",
      hero_authors: "Autore: <strong>Barbara Janic</strong> · Fundacja „Aktywni XXI”",
      info_duration_label: "Ilgums",
      info_participants_label: "Dalybnieki",
      info_participants_value: "12–25 cilvēki",
      hero_pill_audience_label: "Auditorija",
      info_audience_value: "Senjori",
      sec_about: "Par semināru",
      about_text: "Dalybnieki iepazīst Eiropas Savienību, izmantojot personiskās atmiņas, perspektīvas maiņu un dramu. Iestājoties dažādās lomās — pilsonis, politikis, migrants, kandidatvalsts, skeptikis — viņi atklaj ES lēmumu pieņemšanas sarežgītību un stiprina savu pilsonisko pārliecību.",
      sec_objectives: "Semināra mērķi",
      obj_gen_label: "Vispārīgie mērķi",
      obj1: "Attīstīt pilsonisko apziņu par Eiropas Savienības darbību.",
      obj2: "Veidot spēju aplūkot ES problēmas no dažādām perspektīvām.",
      obj3: "Veicināt pārdomas par Eiropas integrācijas nākotni.",
      obj_spec_label: "Specifiskie mērķi",
      spec1: "Saprast, ka ES ir sarunu, kompromisu un izvēļu process.",
      spec2: "Iepazīties ar dažādiem viedokļīm: pilsonis, politikis, migrants, dalībvalsts, kandidatvalsts.",
      spec3: "Attīstīt argumentācijas un viedokļa veidošanas prasmes.",
      spec4: "Stiprināt empātiju un dialoga prasmes.",
      sec_target: "Kam piemērots šis seminārs?",
      target_text: "Seminārs paredzēts pieaugušajiem, īpaši senioriem, kuri interesējas par Eiropas Savienību un pilsoniskām lietām. Speciālas zināšanas nav nepieciešamas — svarīga ir dzīves pieredze un vēlme iesaistīties.",
      sec_methods: "Darba metodes",
      met1: "Drama / lomu spēle",
      met2: "Moderēta diskusija",
      met3: "Grupu darbs",
      met4: "Prāta vētra",
      met5: "Interaktīvas lekcijas elementi",
      sec_agenda: "Semināra gaita (120–150 min)",
      ag1_title: "Ievads",
      ag1_text: "Dalībnieku sagaidīšana, mērķu un noteikumu prezentēšana (cieµa, nav „pareizo” vai „klūdaino” atbilžu, tiesības mainīt viedokli). Ĭsa ievadīšana dramas metodē.",
      ag1_time: "10 min",
      ag2_title: "Aktivitāte 1 — „Eiropa, ko es atceros”",
      ag2_text: "Dalībnieki strādā pāros, dalydamies atmiņās un pārdomās par ES: kad viņi pirmo reizi dzirdēja par ES? Kā tā ir mainījusi viņu dzīvi? Brīvprātīgie dalys ar grupu savā īsajā teikumā.",
      ag2_time: "15 min",
      ag3_title: "Aktivitāte 2 — Drama: „ES nākotnes samits”",
      ag3_text: "Dalībnieki izlozē lomas (poļu pilsonis, „vecās ES” pilsonis, ES politikis, migrants, kandidatvalsts pārstāvis, ES skeptikis) un diskutē par trim galvenajiem jautājumiem: migrācija, ES paplašināšanās un Brexit kā mācība. Veicinātājs vada simulētu ES samitu.",
      ag3_time: "60 min",
      ag4_title: "Aktivitāte 3 — Diskusija un pārdomas",
      ag4_text: "Grupu diskusija pēc dramas: kas mana lomā bija grūtākāis? Vai es mainīju savu viedokli? Vai ES var izpatikt visiem?",
      ag4_time: "20 min",
      ag5_title: "Nobeigums — „Senioru deklarācija”",
      ag5_text: "Grupa kopīgi saraksta „Senioru deklarāciju par Eiropas Savienības nākotni” — 1–2 lappuses garu dokumentu ar dalībnieku svarīgākajiem secinajumiem, vērtībām un prasībām.",
      ag5_time: "30 min",
      sec_roles: "Lomu kartes",
      roles_lead: "Katrs dalībnieks (vai maza grupa) izlozē vienu karti. Nav jāspēlē — jārunā no savas lomas perspektīvas. Drukāt uz A5 vai A4, vislabak uz krāsainas papīra.",
      role1_title: "Poļu pilsonis (Seniors)",
      role1_who: "Jūs esat seniors, kas dzīvo Polijā. Jūs atceraties laiku pirms pievienošanās ES un izmaiņas pēc 2004. gada.",
      role1_matters: "Drošība · Stabilitāte · Nacionālās identitātes saglabāšana · Atbalsts regiņiem un senioriem",
      role1_q: "Vai ES turpinās palīdzēt Polijai? | Vai jaunās ES valstis vājinās mūsu pozīciju? | Kā ES risīnās migrāciju?",
      role2_title: "„Vecās ES” pilsonis",
      role2_who: "Jūs esat seniors no valsts, kas bijā ES no paša sākuma (piem., Vācija, Francija).",
      role2_matters: "Ekonomiskā stabilitāte · Kopīgie noteikumi · Visu valstu atbildība",
      role2_q: "Vai ES paplašinās pārāk ātri? | Vai visas valstis ievēro vienos un tos pašus noteikumus? | Kas maksās par krīzēm?",
      role3_title: "ES politikis",
      role3_who: "Jūs jādomā par visas ES interesēm, nevis tikai vienas valsts interesēm.",
      role3_matters: "Kompromisu meklēšana · Konfliktu mazināšana · Ilgtermiņa domāšana",
      role3_q: "Migrācija — solidaritāte vai nacionālās intereses? | Brexit — sods vai brīdinājums? | Klimats — ātri lēmumi vai piesardzība?",
      role4_title: "Migrants",
      role4_who: "Jūs esat ieradies Eiropā no valsts, ko skāruši karš, krīze vai klimata pārmaiņas.",
      role4_matters: "Drošība · Darbs · Cieµa",
      role4_q: "Vai Eiropa ir solidāra? | Vai visiem ir vienas un tās pašas tiesības? | Kā integrēties, nezaudējot identitāti?",
      role5_title: "Kandidatvalsts pārstāvis",
      role5_who: "Jūs pārstāvat valsti, kas vēlas pievienoties Eiropas Savienībai.",
      role5_matters: "ES nozīmē mieru un attīstību · Kopīgas vērtības · Labāka nākotne jauniešiem",
      role5_q: "Vai ES joprojām ir atvērta? | Vai pret mums izturēs sliktāk?",
      role6_title: "ES skeptikis",
      role6_who: "Jūs uzskater, ka ES pārāk lielu ietekmi uz valstu dzīvi.",
      role6_matters: "Pārāk daudz noteikumu · Suverenitātes zaudēšana · Brexit kā piemērs",
      role6_q: "Vai ES tiešām ir nepieciešama? | Vai valstis nevar tikt galā pašas?",
      sec_problems: "Problēmu kartes",
      problems_lead: "Veicinātājs izlozē 2–4 kartes dramas laikā, atkarībā no debates tempа. Katra karte ievieš jaunu izaicinājumu grupas apspriešanai.",
      prob1: "„Eiropā ierodas liels migrantu skaits.”",
      prob2: "„Viena valsts apsvēr izstāšanos no ES.”",
      prob3: "„Klimat pārmaiņas izraisa pārtikas krīzi.”",
      prob4: "„Jauna valsts vēlas pievienoties ES.”",
      prob5: "„Iedzīvotāji zaudē uzticēšanos ES institūcijām.”",
      sec_downloads: "Materīāli lejupielādei",
      dl_lead: "Visi 1. semināra (Polija) materīāli, gatavi drukāšanai. Faili pieejami tikai angliski (EN) — tie ir poļu komandas origināli.",
      dl_note: "Piezīme: faili ir poļu komandas origināli un pieejami tikai angliski (EN). Lapa ir tulkota visās valodās.",
      dl_g_guide: "Veicinātājam",
      dl_g_cards: "Dalybniekiem",
      dl_module: "Semināra ceļvedis (pilņs plāns)",
      dl_module_d: "Pilņs soli-pa-solim ceļvedis semināra veicinātājam.",
      dl_roles: "Lomu kartes (6 lomas)",
      dl_roles_d: "Drukāt vienu karti katram dalībniekam (vai mazai grupai). Ieteicams krāsains papīrs.",
      dl_problems: "Problēmu kartes (5 scenāriji)",
      dl_problems_d: "Izlozē veicinātājs dramas laikā, lai ieviestu jaunus izaicinājumus.",
      footer_text: "Erasmus+ projekts · 1. seminārs (Polija) — Eiropa kryžučcelēs",
      footer_wa: "Kontakti", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
    },
  };

  // ── Motore i18n ──────────────────────────────────────────────
  var LANGS = {
    en: {
      label: 'English',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36"><rect width="60" height="36" fill="#012169"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" stroke-width="12"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" stroke-width="4"/><rect x="0" y="13.5" width="60" height="9" fill="#fff"/><rect x="25.5" y="0" width="9" height="36" fill="#fff"/><rect x="0" y="15" width="60" height="6" fill="#C8102E"/><rect x="27" y="0" width="6" height="36" fill="#C8102E"/></svg>'
    },
    it: {
      label: 'Italiano',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/></svg>'
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
      label: 'Latviešu',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="8" fill="#9E3039"/><rect y="8" width="30" height="4" fill="#fff"/><rect y="12" width="30" height="8" fill="#9E3039"/></svg>'
    }
  };

  var currentLang = localStorage.getItem('erasmus_lang') || 'en';

  function apply(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
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
    mobileBtn.setAttribute('aria-label', 'Seleziona lingua');

    var mobileFlag = document.createElement('img');
    mobileFlag.setAttribute('width', '32');
    mobileFlag.setAttribute('height', '22');
    mobileFlag.style.cssText = 'border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,0.15);display:block;';
    mobileBtn.appendChild(mobileFlag);

    var arrow = document.createElement('span');
    arrow.className = 'lang-mobile-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '▾';
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
      item.appendChild(document.createTextNode(' ' + LANGS[code].label));
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        apply(code);
        closeDropdown();
      });
      dropdown.appendChild(item);
    });

    function openDropdown() {
      dropdown.removeAttribute('hidden');
      mobileBtn.setAttribute('aria-expanded', 'true');
    }
    function closeDropdown() {
      dropdown.setAttribute('hidden', '');
      mobileBtn.setAttribute('aria-expanded', 'false');
    }

    mobileBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (mobileBtn.getAttribute('aria-expanded') === 'true') {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    document.addEventListener('click', function () { closeDropdown(); });

    switcher.appendChild(mobileBtn);

    var logoBar = switcher.closest('.logo-bar') || document.body;
    logoBar.appendChild(dropdown);

    switcher._mobileFlag = mobileFlag;
    switcher._dropdown = dropdown;
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

})();
