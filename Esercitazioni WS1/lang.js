// ============================================================
// lang.js — Esercitazioni Workshop 1 · Erasmus+ ECBL
// 3 quiz interattivi sulle istituzioni dell'UE · 5 lingue
// ============================================================

const TRANSLATIONS = {

  // ----------------------------------------------------------
  // ITALIANO (fonte)
  // ----------------------------------------------------------
  it: {
    skip_link:"Salta al contenuto",
    page_title:         "Esercitazioni — Workshop 1",
    hero_eyebrow:       "Workshop 1",
    hero_title:         "Esercitazioni interattive",
    hero_subtitle:      "Tre quiz per consolidare la conoscenza delle istituzioni dell'Unione Europea: composizione, compiti, vero/falso.",
    hero_curated: "A cura di: <strong>Antonio Catalfamo e Mimmo Mascali</strong>",
    btn_back_aria:      "Torna al Workshop 1",
    flag_aria:          "Bandiera italiana",
    lang_switcher_aria: "Seleziona la lingua",
    btn_top_aria:       "Torna in alto",
    btn_top:            "Inizio",
    footer_text:        "Progetto Erasmus+ · Workshop 1 — Esercitazioni interattive", footer_cookie: "Cookie Policy", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",

    tab1_label:  "Composizione",
    tab2_label:  "Compiti",
    tab3_label:  "Vero o Falso",

    quiz1_title: "Esercitazione 1 — Da chi sono composte le istituzioni europee?",
    quiz1_intro: "Per ogni istituzione apri il menu e scegli la risposta corretta.",
    quiz2_title: "Esercitazione 2 — Quali sono i compiti delle istituzioni europee?",
    quiz2_intro: "Per ogni istituzione apri il menu e scegli la risposta corretta.",
    quiz3_title: "Esercitazione 3 — Vero o Falso",
    quiz3_intro: "Indica se ogni affermazione è Vera (V) o Falsa (F).",

    legend_title:        "Risposte disponibili",
    select_placeholder:  "— Scegli una risposta —",
    btn_verify:          "Verifica",
    btn_reset:           "Azzera",
    result_label:        "Risposte corrette",

    inst_1:  "Consiglio Europeo",
    inst_2:  "Consiglio dell'UE",
    inst_3:  "Parlamento Europeo",
    inst_4:  "Commissione Europea",
    inst_5:  "Corte di Giustizia dell'UE",
    inst_6:  "Banca Centrale Europea",
    inst_7:  "Corte dei Conti Europea",
    inst_8:  "Banca Europea per gli Investimenti",
    inst_9:  "Comitato delle Regioni (CdR)",
    inst_10: "Comitato Economico e Sociale Europeo (CESE)",

    q1_a: "720 Deputati eletti ogni 5 anni",
    q1_b: "27 Capi di Stato o di Governo + Presidente della Commissione + Presidente del Consiglio Europeo",
    q1_c: "27 Ministri dei singoli governi nazionali",
    q1_d: "27 Commissari (uno per Stato) + Presidente",
    q1_e: "329 membri: sindacati, imprese, altri portatori di interessi",
    q1_f: "27 Giudici (uno per Stato) della Corte di Giustizia + 54 Giudici (due per Stato) del Tribunale",
    q1_g: "329 eletti tra enti locali e regionali",
    q1_h: "27 Governatori delle Banche Centrali Nazionali + Presidente e Vicepresidente",
    q1_i: "27 membri (uno per Stato membro)",
    q1_l: "Consiglio dei Governatori (ministri delle finanze dei 27 Stati)",

    q2_a: "È l'organo politico: definisce gli obiettivi politici generali",
    q2_b: "È l'organo legislativo dell'UE insieme al Consiglio dell'UE; approva il bilancio",
    q2_c: "Controlla la legittimità degli atti, assicura il rispetto dei Trattati, interpreta il diritto UE",
    q2_d: "Rappresenta gli interessi di regioni ed enti locali",
    q2_e: "Mantiene stabili i prezzi e l'inflazione bassa e prevedibile",
    q2_f: "Vigila sulla legittimità e la regolarità delle entrate e delle uscite del bilancio",
    q2_g: "È l'istituzione finanziaria dell'UE per il finanziamento degli investimenti",
    q2_h: "Rappresenta le organizzazioni della società civile",
    q2_i: "È il braccio esecutivo dell'UE: ha la competenza esclusiva di proporre nuove norme ed eseguire le decisioni del Parlamento e del Consiglio",
    q2_l: "Voce dei governi: insieme al Parlamento è il principale organo decisionale dell'UE",

    vf_1:  "La Commissione Europea approva il bilancio dell'UE.",
    vf_2:  "Il Consiglio dell'UE è composto dai ministri dei vari governi.",
    vf_3:  "Il Parlamento Europeo controlla la legittimità degli atti, assicura il rispetto dei Trattati e interpreta il diritto dell'UE.",
    vf_4:  "La Corte di Giustizia dell'UE controlla la legittimità degli atti, assicura il rispetto dei Trattati e interpreta il diritto.",
    vf_5:  "La Corte dei Conti è l'organo politico che definisce gli obiettivi politici.",
    vf_6:  "Il Consiglio Europeo è la voce dei governi.",
    vf_7:  "La Banca Centrale Europea è l'istituzione finanziaria dell'UE per il finanziamento degli investimenti.",
    vf_8:  "La Banca Europea per gli Investimenti ha il compito di mantenere stabili i prezzi e l'inflazione bassa e prevedibile.",
    vf_9:  "La Commissione Europea è il braccio esecutivo dell'UE.",
    vf_10: "Il Consiglio Europeo è l'organo politico che definisce gli obiettivi politici generali."
  },

  // ----------------------------------------------------------
  // ENGLISH
  // ----------------------------------------------------------
  en: {
    skip_link:"Skip to content",
    page_title:         "Exercises — Workshop 1",
    hero_eyebrow:       "Workshop 1",
    hero_title:         "Interactive exercises",
    hero_subtitle:      "Three quizzes to consolidate your knowledge of EU institutions: composition, tasks, true or false.",
    hero_curated: "Curated by: <strong>Antonio Catalfamo and Mimmo Mascali</strong>",
    btn_back_aria:      "Back to Workshop 1",
    flag_aria:          "Italian flag",
    lang_switcher_aria: "Select language",
    btn_top_aria:       "Back to top",
    btn_top:            "Top",
    footer_text:        "Erasmus+ Project · Workshop 1 — Interactive exercises", footer_cookie: "Cookie Policy", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",

    tab1_label:  "Composition",
    tab2_label:  "Tasks",
    tab3_label:  "True or False",

    quiz1_title: "Exercise 1 — Who are the European institutions composed of?",
    quiz1_intro: "For each institution, open the menu and pick the correct answer.",
    quiz2_title: "Exercise 2 — What are the tasks of the European institutions?",
    quiz2_intro: "For each institution, open the menu and pick the correct answer.",
    quiz3_title: "Exercise 3 — True or False",
    quiz3_intro: "Mark each statement as True (V) or False (F).",

    legend_title:        "Available answers",
    select_placeholder:  "— Pick an answer —",
    btn_verify:          "Check",
    btn_reset:           "Reset",
    result_label:        "Correct answers",

    inst_1:  "European Council",
    inst_2:  "Council of the EU",
    inst_3:  "European Parliament",
    inst_4:  "European Commission",
    inst_5:  "Court of Justice of the EU",
    inst_6:  "European Central Bank",
    inst_7:  "European Court of Auditors",
    inst_8:  "European Investment Bank",
    inst_9:  "Committee of the Regions (CoR)",
    inst_10: "European Economic and Social Committee (EESC)",

    q1_a: "720 MEPs elected every 5 years",
    q1_b: "27 Heads of State or Government + President of the Commission + President of the European Council",
    q1_c: "27 Ministers of national governments",
    q1_d: "27 Commissioners (one per State) + President",
    q1_e: "329 members: trade unions, businesses, other stakeholders",
    q1_f: "27 Judges (one per State) of the Court of Justice + 54 Judges (two per State) of the General Court",
    q1_g: "329 elected representatives of local and regional authorities",
    q1_h: "27 Governors of the National Central Banks + President and Vice-President",
    q1_i: "27 members (one per Member State)",
    q1_l: "Board of Governors (finance ministers of the 27 States)",

    q2_a: "Political body: sets the general political objectives",
    q2_b: "Legislative body of the EU together with the Council of the EU; approves the budget",
    q2_c: "Reviews the legality of acts, ensures compliance with the Treaties, interprets EU law",
    q2_d: "Represents the interests of regions and local authorities",
    q2_e: "Keeps prices stable and inflation low and predictable",
    q2_f: "Oversees the legality and regularity of EU budget revenue and expenditure",
    q2_g: "EU financial institution for financing investments",
    q2_h: "Represents civil society organisations",
    q2_i: "Executive arm of the EU: exclusive power to propose new laws and implement decisions of Parliament and Council",
    q2_l: "Voice of governments: together with Parliament, the main EU decision-making body",

    vf_1:  "The European Commission approves the EU budget.",
    vf_2:  "The Council of the EU is composed of ministers from the various national governments.",
    vf_3:  "The European Parliament reviews the legality of acts, ensures compliance with the Treaties and interprets EU law.",
    vf_4:  "The Court of Justice of the EU reviews the legality of acts, ensures compliance with the Treaties and interprets the law.",
    vf_5:  "The Court of Auditors is the political body that sets the political objectives.",
    vf_6:  "The European Council is the voice of governments.",
    vf_7:  "The European Central Bank is the EU's financial institution for financing investments.",
    vf_8:  "The European Investment Bank is responsible for keeping prices stable and inflation low and predictable.",
    vf_9:  "The European Commission is the executive arm of the EU.",
    vf_10: "The European Council is the political body that sets the general political objectives."
  },

  // ----------------------------------------------------------
  // POLSKI
  // ----------------------------------------------------------
  pl: {
    skip_link:"Przejdź do treści",
    page_title:         "Ćwiczenia — Warsztat 1",
    hero_eyebrow:       "Warsztat 1",
    hero_title:         "Ćwiczenia interaktywne",
    hero_subtitle:      "Trzy quizy utrwalające wiedzę o instytucjach Unii Europejskiej: skład, zadania, prawda/fałsz.",
    hero_curated: "Opracowanie: <strong>Antonio Catalfamo i Mimmo Mascali</strong>",
    btn_back_aria:      "Powrót do Warsztatu 1",
    flag_aria:          "Flaga włoska",
    lang_switcher_aria: "Wybierz język",
    btn_top_aria:       "Powrót na górę",
    btn_top:            "Góra",
    footer_text:        "Projekt Erasmus+ · Warsztat 1 — Ćwiczenia interaktywne", footer_cookie: "Cookie Policy", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",

    tab1_label:  "Skład",
    tab2_label:  "Zadania",
    tab3_label:  "Prawda lub Fałsz",

    quiz1_title: "Ćwiczenie 1 — Z kogo składają się instytucje europejskie?",
    quiz1_intro: "Dla każdej instytucji otwórz menu i wybierz poprawną odpowiedź.",
    quiz2_title: "Ćwiczenie 2 — Jakie są zadania instytucji europejskich?",
    quiz2_intro: "Dla każdej instytucji otwórz menu i wybierz poprawną odpowiedź.",
    quiz3_title: "Ćwiczenie 3 — Prawda lub Fałsz",
    quiz3_intro: "Oznacz każde stwierdzenie jako Prawdziwe (V) lub Fałszywe (F).",

    legend_title:        "Dostępne odpowiedzi",
    select_placeholder:  "— Wybierz odpowiedź —",
    btn_verify:          "Sprawdź",
    btn_reset:           "Wyzeruj",
    result_label:        "Poprawne odpowiedzi",

    inst_1:  "Rada Europejska",
    inst_2:  "Rada UE",
    inst_3:  "Parlament Europejski",
    inst_4:  "Komisja Europejska",
    inst_5:  "Trybunał Sprawiedliwości UE",
    inst_6:  "Europejski Bank Centralny",
    inst_7:  "Europejski Trybunał Obrachunkowy",
    inst_8:  "Europejski Bank Inwestycyjny",
    inst_9:  "Komitet Regionów (KR)",
    inst_10: "Europejski Komitet Ekonomiczno-Społeczny (EKES)",

    q1_a: "720 posłów wybieranych co 5 lat",
    q1_b: "27 szefów państw lub rządów + Przewodniczący Komisji + Przewodniczący Rady Europejskiej",
    q1_c: "27 ministrów rządów krajowych",
    q1_d: "27 komisarzy (jeden na państwo) + Przewodnicząca",
    q1_e: "329 członków: związki zawodowe, przedsiębiorstwa, inni interesariusze",
    q1_f: "27 sędziów (jeden na państwo) Trybunału Sprawiedliwości + 54 sędziów (dwóch na państwo) Sądu",
    q1_g: "329 wybranych przedstawicieli władz lokalnych i regionalnych",
    q1_h: "27 prezesów banków centralnych państw + Prezes i Wiceprezes",
    q1_i: "27 członków (po jednym z każdego państwa)",
    q1_l: "Rada Gubernatorów (ministrowie finansów 27 państw)",

    q2_a: "Organ polityczny: określa ogólne cele polityczne",
    q2_b: "Organ ustawodawczy UE wraz z Radą UE; zatwierdza budżet",
    q2_c: "Kontroluje legalność aktów, zapewnia przestrzeganie Traktatów, interpretuje prawo UE",
    q2_d: "Reprezentuje interesy regionów i władz lokalnych",
    q2_e: "Utrzymuje stabilne ceny i niską, przewidywalną inflację",
    q2_f: "Nadzoruje legalność i prawidłowość dochodów i wydatków budżetu",
    q2_g: "Instytucja finansowa UE finansująca inwestycje",
    q2_h: "Reprezentuje organizacje społeczeństwa obywatelskiego",
    q2_i: "Organ wykonawczy UE: wyłączna kompetencja do proponowania nowych przepisów i wykonywania decyzji Parlamentu i Rady",
    q2_l: "Głos rządów: wraz z Parlamentem główny organ decyzyjny UE",

    vf_1:  "Komisja Europejska zatwierdza budżet UE.",
    vf_2:  "Rada UE składa się z ministrów rządów krajowych.",
    vf_3:  "Parlament Europejski kontroluje legalność aktów, zapewnia przestrzeganie Traktatów i interpretuje prawo UE.",
    vf_4:  "Trybunał Sprawiedliwości UE kontroluje legalność aktów, zapewnia przestrzeganie Traktatów i interpretuje prawo.",
    vf_5:  "Trybunał Obrachunkowy jest organem politycznym, który określa cele polityczne.",
    vf_6:  "Rada Europejska jest głosem rządów.",
    vf_7:  "Europejski Bank Centralny jest instytucją finansową UE finansującą inwestycje.",
    vf_8:  "Europejski Bank Inwestycyjny ma za zadanie utrzymywać stabilne ceny i niską, przewidywalną inflację.",
    vf_9:  "Komisja Europejska jest organem wykonawczym UE.",
    vf_10: "Rada Europejska jest organem politycznym, który określa ogólne cele polityczne."
  },

  // ----------------------------------------------------------
  // DEUTSCH
  // ----------------------------------------------------------
  de: {
    skip_link:"Zum Inhalt springen",
    page_title:         "Übungen — Workshop 1",
    hero_eyebrow:       "Workshop 1",
    hero_title:         "Interaktive Übungen",
    hero_subtitle:      "Drei Quiz, um das Wissen über die EU-Institutionen zu festigen: Zusammensetzung, Aufgaben, richtig/falsch.",
    hero_curated: "Erstellt von: <strong>Antonio Catalfamo und Mimmo Mascali</strong>",
    btn_back_aria:      "Zurück zum Workshop 1",
    flag_aria:          "Italienische Flagge",
    lang_switcher_aria: "Sprache auswählen",
    btn_top_aria:       "Nach oben",
    btn_top:            "Oben",
    footer_text:        "Erasmus+-Projekt · Workshop 1 — Interaktive Übungen", footer_cookie: "Cookie Policy", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",

    tab1_label:  "Zusammensetzung",
    tab2_label:  "Aufgaben",
    tab3_label:  "Richtig oder Falsch",

    quiz1_title: "Übung 1 — Aus wem bestehen die europäischen Institutionen?",
    quiz1_intro: "Öffne für jede Institution das Menü und wähle die richtige Antwort.",
    quiz2_title: "Übung 2 — Was sind die Aufgaben der europäischen Institutionen?",
    quiz2_intro: "Öffne für jede Institution das Menü und wähle die richtige Antwort.",
    quiz3_title: "Übung 3 — Richtig oder Falsch",
    quiz3_intro: "Markiere jede Aussage als Richtig (V) oder Falsch (F).",

    legend_title:        "Verfügbare Antworten",
    select_placeholder:  "— Antwort wählen —",
    btn_verify:          "Prüfen",
    btn_reset:           "Zurücksetzen",
    result_label:        "Richtige Antworten",

    inst_1:  "Europäischer Rat",
    inst_2:  "Rat der EU",
    inst_3:  "Europäisches Parlament",
    inst_4:  "Europäische Kommission",
    inst_5:  "Gerichtshof der EU",
    inst_6:  "Europäische Zentralbank",
    inst_7:  "Europäischer Rechnungshof",
    inst_8:  "Europäische Investitionsbank",
    inst_9:  "Ausschuss der Regionen (AdR)",
    inst_10: "Europäischer Wirtschafts- und Sozialausschuss (EWSA)",

    q1_a: "720 alle 5 Jahre gewählte Abgeordnete",
    q1_b: "27 Staats- oder Regierungschefs + Präsidentin der Kommission + Präsident des Europäischen Rates",
    q1_c: "27 Minister der nationalen Regierungen",
    q1_d: "27 Kommissare (einer pro Staat) + Präsidentin",
    q1_e: "329 Mitglieder: Gewerkschaften, Unternehmen, andere Interessengruppen",
    q1_f: "27 Richter (einer pro Staat) des Gerichtshofs + 54 Richter (zwei pro Staat) des Gerichts",
    q1_g: "329 gewählte Vertreter lokaler und regionaler Gebietskörperschaften",
    q1_h: "27 Gouverneure der nationalen Zentralbanken + Präsidentin und Vizepräsident",
    q1_i: "27 Mitglieder (eines pro Mitgliedstaat)",
    q1_l: "Gouverneursrat (Finanzminister der 27 Staaten)",

    q2_a: "Politisches Organ: legt die allgemeinen politischen Ziele fest",
    q2_b: "Gesetzgebungsorgan der EU zusammen mit dem Rat der EU; genehmigt den Haushalt",
    q2_c: "Prüft die Rechtmäßigkeit von Rechtsakten, gewährleistet die Achtung der Verträge, legt EU-Recht aus",
    q2_d: "Vertritt die Interessen der Regionen und Gebietskörperschaften",
    q2_e: "Hält die Preise stabil und die Inflation niedrig und vorhersehbar",
    q2_f: "Überwacht die Rechtmäßigkeit und Ordnungsmäßigkeit der Einnahmen und Ausgaben des Haushalts",
    q2_g: "Finanzinstitution der EU zur Finanzierung von Investitionen",
    q2_h: "Vertritt Organisationen der Zivilgesellschaft",
    q2_i: "Exekutive der EU: ausschließliche Befugnis, neue Gesetze vorzuschlagen und Entscheidungen von Parlament und Rat umzusetzen",
    q2_l: "Stimme der Regierungen: zusammen mit dem Parlament das wichtigste Entscheidungsorgan der EU",

    vf_1:  "Die Europäische Kommission genehmigt den EU-Haushalt.",
    vf_2:  "Der Rat der EU besteht aus den Ministern der verschiedenen Regierungen.",
    vf_3:  "Das Europäische Parlament prüft die Rechtmäßigkeit von Rechtsakten, gewährleistet die Achtung der Verträge und legt EU-Recht aus.",
    vf_4:  "Der Gerichtshof der EU prüft die Rechtmäßigkeit von Rechtsakten, gewährleistet die Achtung der Verträge und legt das Recht aus.",
    vf_5:  "Der Rechnungshof ist das politische Organ, das die politischen Ziele festlegt.",
    vf_6:  "Der Europäische Rat ist die Stimme der Regierungen.",
    vf_7:  "Die Europäische Zentralbank ist die Finanzinstitution der EU zur Finanzierung von Investitionen.",
    vf_8:  "Die Europäische Investitionsbank hat die Aufgabe, die Preise stabil und die Inflation niedrig und vorhersehbar zu halten.",
    vf_9:  "Die Europäische Kommission ist die Exekutive der EU.",
    vf_10: "Der Europäische Rat ist das politische Organ, das die allgemeinen politischen Ziele festlegt."
  },

  // ----------------------------------------------------------
  // LATVIEŠU
  // ----------------------------------------------------------
  lv: {
    skip_link:"Pāriet uz saturu",
    page_title:         "Vingrinājumi — Seminārs 1",
    hero_eyebrow:       "Seminārs 1",
    hero_title:         "Interaktīvi vingrinājumi",
    hero_subtitle:      "Trīs viktorīnas, lai nostiprinātu zināšanas par ES iestādēm: sastāvs, uzdevumi, patiess/aplams.",
    hero_curated: "Sagatavoja: <strong>Antonio Catalfamo un Mimmo Mascali</strong>",
    btn_back_aria:      "Atpakaļ uz Semināru 1",
    flag_aria:          "Itālijas karogs",
    lang_switcher_aria: "Izvēlēties valodu",
    btn_top_aria:       "Uz augšu",
    btn_top:            "Augšā",
    footer_text:        "Erasmus+ projekts · Seminārs 1 — Interaktīvi vingrinājumi", footer_cookie: "Cookie Policy", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",

    tab1_label:  "Sastāvs",
    tab2_label:  "Uzdevumi",
    tab3_label:  "Patiess vai Aplams",

    quiz1_title: "1. vingrinājums — No kā sastāv Eiropas iestādes?",
    quiz1_intro: "Katrai iestādei atver izvēlni un izvēlies pareizo atbildi.",
    quiz2_title: "2. vingrinājums — Kādi ir Eiropas iestāžu uzdevumi?",
    quiz2_intro: "Katrai iestādei atver izvēlni un izvēlies pareizo atbildi.",
    quiz3_title: "3. vingrinājums — Patiess vai Aplams",
    quiz3_intro: "Atzīmē katru apgalvojumu kā Patiesu (V) vai Aplamu (F).",

    legend_title:        "Pieejamās atbildes",
    select_placeholder:  "— Izvēlies atbildi —",
    btn_verify:          "Pārbaudīt",
    btn_reset:           "Nodzēst",
    result_label:        "Pareizas atbildes",

    inst_1:  "Eiropadome",
    inst_2:  "ES Padome",
    inst_3:  "Eiropas Parlaments",
    inst_4:  "Eiropas Komisija",
    inst_5:  "ES Tiesa",
    inst_6:  "Eiropas Centrālā Banka",
    inst_7:  "Eiropas Revīzijas Palāta",
    inst_8:  "Eiropas Investīciju Banka",
    inst_9:  "Reģionu komiteja (RK)",
    inst_10: "Eiropas Ekonomikas un sociālo lietu komiteja (EESK)",

    q1_a: "720 deputāti, kas tiek ievēlēti ik 5 gadus",
    q1_b: "27 valstu vai valdību vadītāji + Komisijas priekšsēdētāja + Eiropadomes priekšsēdētājs",
    q1_c: "27 valstu valdību ministri",
    q1_d: "27 komisāri (pa vienam no katras valsts) + Priekšsēdētāja",
    q1_e: "329 locekļi: arodbiedrības, uzņēmumi, citas ieinteresētās puses",
    q1_f: "27 tiesneši (pa vienam no katras valsts) Tiesā + 54 tiesneši (pa diviem no katras valsts) Vispārējā tiesā",
    q1_g: "329 ievēlēti vietējo un reģionālo iestāžu pārstāvji",
    q1_h: "27 nacionālo centrālo banku vadītāji + Priekšsēdētāja un Vicepriekšsēdētājs",
    q1_i: "27 locekļi (pa vienam no katras dalībvalsts)",
    q1_l: "Valdes padome (27 valstu finanšu ministri)",

    q2_a: "Politiskā institūcija: nosaka vispārējos politiskos mērķus",
    q2_b: "ES likumdošanas institūcija kopā ar ES Padomi; apstiprina budžetu",
    q2_c: "Pārbauda aktu likumību, nodrošina Līgumu ievērošanu, interpretē ES tiesības",
    q2_d: "Pārstāv reģionu un vietējo iestāžu intereses",
    q2_e: "Uztur stabilas cenas un zemu, paredzamu inflāciju",
    q2_f: "Uzrauga budžeta ieņēmumu un izdevumu likumību un pareizību",
    q2_g: "ES finanšu institūcija ieguldījumu finansēšanai",
    q2_h: "Pārstāv pilsoniskās sabiedrības organizācijas",
    q2_i: "ES izpildvara: ekskluzīvas tiesības ierosināt jaunus likumus un īstenot Parlamenta un Padomes lēmumus",
    q2_l: "Valdību balss: kopā ar Parlamentu galvenā ES lēmumu pieņemšanas institūcija",

    vf_1:  "Eiropas Komisija apstiprina ES budžetu.",
    vf_2:  "ES Padome sastāv no dažādu valstu valdību ministriem.",
    vf_3:  "Eiropas Parlaments pārbauda aktu likumību, nodrošina Līgumu ievērošanu un interpretē ES tiesības.",
    vf_4:  "ES Tiesa pārbauda aktu likumību, nodrošina Līgumu ievērošanu un interpretē tiesības.",
    vf_5:  "Revīzijas Palāta ir politiskā institūcija, kas nosaka politiskos mērķus.",
    vf_6:  "Eiropadome ir valdību balss.",
    vf_7:  "Eiropas Centrālā Banka ir ES finanšu institūcija ieguldījumu finansēšanai.",
    vf_8:  "Eiropas Investīciju Bankas uzdevums ir uzturēt stabilas cenas un zemu, paredzamu inflāciju.",
    vf_9:  "Eiropas Komisija ir ES izpildvara.",
    vf_10: "Eiropadome ir politiskā institūcija, kas nosaka vispārējos politiskos mērķus."
  }
};

// ============================================================
// Motore i18n + selettore lingua con bandiere
// ============================================================
(function () {
  'use strict';

  var LANGS = {
    it: { label: 'Italiano',  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/></svg>' },
    en: { label: 'English',   svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36"><rect width="60" height="36" fill="#012169"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" stroke-width="12"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" stroke-width="4"/><rect x="0" y="13.5" width="60" height="9" fill="#fff"/><rect x="25.5" y="0" width="9" height="36" fill="#fff"/><rect x="0" y="15" width="60" height="6" fill="#C8102E"/><rect x="27" y="0" width="6" height="36" fill="#C8102E"/></svg>' },
    pl: { label: 'Polski',    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#DC143C"/></svg>' },
    de: { label: 'Deutsch',   svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="6.67" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#DD0000"/><rect y="13.33" width="30" height="6.67" fill="#FFCE00"/></svg>' },
    lv: { label: 'Latviešu',  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="8" fill="#9E3039"/><rect y="8" width="30" height="4" fill="#fff"/><rect y="12" width="30" height="8" fill="#9E3039"/></svg>' }
  };

  var currentLang = localStorage.getItem('erasmus_lang') || 'it';

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
    mobileBtn.setAttribute('aria-label', 'Seleziona la lingua');

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
      item.appendChild(document.createTextNode(' ' + LANGS[code].label));
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        apply(code);
        closeDropdown();
      });
      dropdown.appendChild(item);
    });

    function openDropdown()  { dropdown.removeAttribute('hidden'); mobileBtn.setAttribute('aria-expanded', 'true'); }
    function closeDropdown() { dropdown.setAttribute('hidden', '');  mobileBtn.setAttribute('aria-expanded', 'false'); }

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
