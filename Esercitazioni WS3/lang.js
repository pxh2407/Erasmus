// ============================================================
// lang.js — Esercitazioni Workshop 3 · Erasmus+ ECBL
// 7 quiz (es. 8-14) · 5 lingue (it·en·pl·de·lv)
// ============================================================

const TRANSLATIONS = {

  // ===================== ITALIANO =====================
  it: {
    skip_link:"Salta al contenuto",
    page_title:"Esercitazioni — Workshop 3", hero_eyebrow:"Workshop 3", hero_title:"Esercitazioni interattive",
    hero_subtitle:"Sette quiz su priorità, finalità e bilancio dell'Unione Europea.",
    hero_curated: "A cura di: <strong>Antonio Catalfamo e Mimmo Mascali</strong>",
    btn_back_aria:"Torna al Workshop 3", flag_aria:"Bandiera italiana", lang_switcher_aria:"Seleziona la lingua",
    btn_top_aria:"Torna in alto", btn_top:"Inizio", footer_text:"Progetto Erasmus+ · Workshop 3 — Esercitazioni interattive", footer_cookie: "Cookie Policy", footer_wa: "Contatti", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
    tab8_label:"Priorità UE", tab9_label:"Vero o Falso", tab10_label:"Finalità UE", tab11_label:"Fonti bilancio", tab12_label:"Vero o Falso", tab13_label:"Voci di spesa", tab14_label:"Vero o Falso",
    btn_verify:"Verifica", btn_reset:"Azzera", result_label:"Risposte corrette",
    select_placeholder:"— Scegli una descrizione —", select_placeholder_rank:"— Scegli —",
    rank_1:"1ª voce", rank_2:"2ª voce", rank_3:"3ª voce", rank_none:"Non tra le prime tre",

    quiz8_title:"Esercitazione 8 — Le priorità dell'Unione Europea", quiz8_intro:"Per ogni domanda scegli la risposta corretta.",
    q8_1:"Quali sono i motori dell'Agenda Strategica dell'UE 2024-2029?", q8_1a:"Espansione agricola e turismo.", q8_1b:"Un'Europa forte, sicura, prospera e competitiva.", q8_1c:"Riduzione del numero di Stati membri.",
    q8_2:"Quale tema è diventato centrale nell'agenda strategica a causa delle attuali tensioni geopolitiche?", q8_2a:"Difesa e sicurezza.", q8_2b:"Esplorazione spaziale.", q8_2c:"Abolizione dell'euro.",
    q8_3:"Qual è un obiettivo chiave per la competitività europea?", q8_3a:"Aumentare la dipendenza energetica.", q8_3b:"Creare maggiore capacità industriale, sia civile che militare.", q8_3c:"Bloccare l'innovazione tecnologica.",
    q8_4:"A cosa mira il capitolo \"Europa libera e democratica\"?", q8_4a:"Al rafforzamento dello Stato di diritto.", q8_4b:"Alla sospensione delle elezioni europee.", q8_4c:"Alla gestione esclusiva dei social media.",

    quiz9_title:"Esercitazione 9 — Vero o Falso", quiz9_intro:"Indica se ogni affermazione è Vera (V) o Falsa (F).",
    q9_1:"La principale priorità dell'UE è rilanciare la crescita economica e aumentare l'occupazione, specialmente per i giovani.",
    q9_2:"L'agenda dell'UE mira esclusivamente a ridurre la spesa pubblica senza investire nell'innovazione.",
    q9_3:"L'UE si fonda su valori quali dignità umana, libertà, democrazia, uguaglianza e Stato di diritto.",
    q9_4:"L'Agenda strategica è valida per 10 anni.",

    quiz10_title:"Esercitazione 10 — Le finalità dell'Unione Europea", quiz10_intro:"Per ogni domanda scegli la risposta corretta.",
    q10_1:"Qual è l'obiettivo principale e fondante dell'UE?", q10_1a:"Creare un esercito unico europeo.", q10_1b:"Promuovere la pace, i suoi valori e il benessere dei suoi popoli.", q10_1c:"Abolire le tasse in tutti gli Stati membri.",
    q10_2:"Cosa offre l'Unione Europea ai cittadini?", q10_2a:"Uno spazio di libertà, sicurezza e giustizia senza frontiere interne.", q10_2b:"La cittadinanza mondiale.", q10_2c:"L'uso obbligatorio dell'euro.",
    q10_3:"Cosa si intende per \"sviluppo sostenibile\" nelle finalità UE?", q10_3a:"Crescita economica basata solo sull'industria pesante.", q10_3b:"Crescita economica equilibrata, stabilità dei prezzi e tutela dell'ambiente.", q10_3c:"Aumento illimitato dei consumi.",
    q10_4:"In che modo l'UE persegue la solidarietà tra gli Stati membri?", q10_4a:"Attraverso la coesione economica, sociale e territoriale.", q10_4b:"Obbligando gli Stati più ricchi a pagare i debiti di quelli poveri.", q10_4c:"Vietando la libera circolazione dei lavoratori.",
    q10_5:"Quale delle seguenti NON è una finalità principale dell'UE?", q10_5a:"La promozione della pace.", q10_5b:"Il rispetto dei diritti umani.", q10_5c:"La creazione di uno stato federale unico chiamato \"Europa\".",

    quiz11_title:"Esercitazione 11 — Le fonti del bilancio dell'UE", quiz11_intro:"Per ogni fonte di entrata apri il menu e scegli la descrizione corretta.",
    src11_1:"Risorsa IVA", src11_2:"Dazi doganali", src11_3:"Contributo basato sul RNL (Reddito Nazionale Lordo)", src11_4:"Altre entrate", src11_5:"Contributo sulla plastica non riciclata",
    q11_a:"Prelievi sulle merci importate da Paesi extra-UE.", q11_b:"Percentuale applicata alla base imponibile IVA armonizzata degli Stati membri.", q11_c:"La fonte principale, basata sulla ricchezza (RNL) di ogni Stato.", q11_d:"Contributo proporzionato al mancato riciclo di plastica e imballaggi.", q11_e:"Contributi di Paesi extra-UE, interessi di mora, multe ed eccedenze dell'esercizio precedente.",

    quiz12_title:"Esercitazione 12 — Il bilancio dell'UE (Vero o Falso)", quiz12_intro:"Indica se ogni affermazione è Vera (V) o Falsa (F).",
    q12_1:"Il Quadro Finanziario Pluriennale (QFP) copre solitamente un periodo di 5 anni.",
    q12_2:"Il bilancio a lungo termine dell'UE attualmente copre il periodo 2021-2027.",
    q12_3:"Il bilancio annuale dell'UE deve essere in pareggio (entrate = uscite).",
    q12_4:"Il bilancio pluriennale è approvato dal solo Parlamento Europeo.",

    quiz13_title:"Esercitazione 13 — Le voci di spesa del bilancio", quiz13_intro:"Indica le prime tre voci di spesa per importo (1ª, 2ª, 3ª). Per le altre scegli \"Non tra le prime tre\".",
    exp13_1:"Sicurezza e difesa", exp13_2:"Coesione, resilienza e valori (sviluppo regionale, giovani)", exp13_3:"Risorse naturali e ambiente (agricoltura, clima)", exp13_4:"Migrazione e gestione delle frontiere", exp13_5:"Vicinato e resto del mondo (aiuti umanitari)", exp13_6:"Pubblica amministrazione europea (personale, edifici)", exp13_7:"Mercato unico, innovazione e agenda digitale (ricerca, infrastrutture)",

    quiz14_title:"Esercitazione 14 — Il bilancio dell'UE (Vero o Falso)", quiz14_intro:"Indica se ogni affermazione è Vera (V) o Falsa (F).",
    q14_1:"Il bilancio dell'UE può essere in deficit (spendere più di quanto incassa) ogni anno.",
    q14_2:"La maggior parte delle entrate del bilancio UE proviene dai dazi doganali.",
    q14_3:"Il bilancio a lungo termine dell'UE si chiama Quadro Finanziario Pluriennale (QFP).",
    q14_4:"Il Parlamento europeo non ha voce in capitolo sull'approvazione del bilancio."
  },

  // ===================== ENGLISH =====================
  en: {
    skip_link:"Skip to content",
    page_title:"Exercises — Workshop 3", hero_eyebrow:"Workshop 3", hero_title:"Interactive exercises",
    hero_subtitle:"Seven quizzes on the priorities, aims and budget of the European Union.",
    hero_curated: "Curated by: <strong>Antonio Catalfamo and Mimmo Mascali</strong>",
    btn_back_aria:"Back to Workshop 3", flag_aria:"Italian flag", lang_switcher_aria:"Select language",
    btn_top_aria:"Back to top", btn_top:"Top", footer_text:"Erasmus+ Project · Workshop 3 — Interactive exercises", footer_cookie: "Cookie Policy", footer_wa: "Contact", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
    tab8_label:"EU priorities", tab9_label:"True or False", tab10_label:"EU aims", tab11_label:"Budget sources", tab12_label:"True or False", tab13_label:"Spending items", tab14_label:"True or False",
    btn_verify:"Check", btn_reset:"Reset", result_label:"Correct answers",
    select_placeholder:"— Choose a description —", select_placeholder_rank:"— Choose —",
    rank_1:"1st item", rank_2:"2nd item", rank_3:"3rd item", rank_none:"Not in the top three",

    quiz8_title:"Exercise 8 — The priorities of the European Union", quiz8_intro:"For each question, choose the correct answer.",
    q8_1:"What are the drivers of the EU Strategic Agenda 2024-2029?", q8_1a:"Agricultural expansion and tourism.", q8_1b:"A strong, secure, prosperous and competitive Europe.", q8_1c:"Reducing the number of Member States.",
    q8_2:"Which theme has become central to the strategic agenda due to current geopolitical tensions?", q8_2a:"Defence and security.", q8_2b:"Space exploration.", q8_2c:"Abolition of the euro.",
    q8_3:"What is a key objective for European competitiveness?", q8_3a:"Increasing energy dependence.", q8_3b:"Building greater industrial capacity, both civil and military.", q8_3c:"Blocking technological innovation.",
    q8_4:"What does the chapter \"A free and democratic Europe\" aim at?", q8_4a:"Strengthening the rule of law.", q8_4b:"Suspending European elections.", q8_4c:"Exclusive management of social media.",

    quiz9_title:"Exercise 9 — True or False", quiz9_intro:"Mark each statement as True (V) or False (F).",
    q9_1:"The EU's main priority is to boost economic growth and increase employment, especially for young people.",
    q9_2:"The EU agenda aims solely to cut public spending without investing in innovation.",
    q9_3:"The EU is founded on values such as human dignity, freedom, democracy, equality and the rule of law.",
    q9_4:"The Strategic Agenda is valid for 10 years.",

    quiz10_title:"Exercise 10 — The aims of the European Union", quiz10_intro:"For each question, choose the correct answer.",
    q10_1:"What is the main founding objective of the EU?", q10_1a:"To create a single European army.", q10_1b:"To promote peace, its values and the well-being of its peoples.", q10_1c:"To abolish taxes in all Member States.",
    q10_2:"What does the European Union offer its citizens?", q10_2a:"An area of freedom, security and justice without internal borders.", q10_2b:"World citizenship.", q10_2c:"Mandatory use of the euro.",
    q10_3:"What is meant by \"sustainable development\" in the EU's aims?", q10_3a:"Economic growth based only on heavy industry.", q10_3b:"Balanced economic growth, price stability and protection of the environment.", q10_3c:"Unlimited increase in consumption.",
    q10_4:"How does the EU pursue solidarity among Member States?", q10_4a:"Through economic, social and territorial cohesion.", q10_4b:"By forcing richer States to pay the debts of poorer ones.", q10_4c:"By banning the free movement of workers.",
    q10_5:"Which of the following is NOT a main aim of the EU?", q10_5a:"The promotion of peace.", q10_5b:"Respect for human rights.", q10_5c:"The creation of a single federal state called \"Europe\".",

    quiz11_title:"Exercise 11 — The sources of the EU budget", quiz11_intro:"For each source of revenue, open the menu and choose the correct description.",
    src11_1:"VAT resource", src11_2:"Customs duties", src11_3:"Contribution based on GNI (Gross National Income)", src11_4:"Other revenue", src11_5:"Contribution on non-recycled plastic",
    q11_a:"Levies on goods imported from non-EU countries.", q11_b:"A percentage applied to the harmonised VAT base of Member States.", q11_c:"The main source, based on each State's wealth (GNI).", q11_d:"Contribution proportional to non-recycled plastic and packaging.", q11_e:"Contributions from non-EU countries, default interest, fines and surpluses from the previous year.",

    quiz12_title:"Exercise 12 — The EU budget (True or False)", quiz12_intro:"Mark each statement as True (V) or False (F).",
    q12_1:"The Multiannual Financial Framework (MFF) usually covers a period of 5 years.",
    q12_2:"The EU's long-term budget currently covers the period 2021-2027.",
    q12_3:"The EU's annual budget must be balanced (revenue = expenditure).",
    q12_4:"The multiannual budget is approved by the European Parliament alone.",

    quiz13_title:"Exercise 13 — The budget spending items", quiz13_intro:"Indicate the top three spending items by amount (1st, 2nd, 3rd). For the others, choose \"Not in the top three\".",
    exp13_1:"Security and defence", exp13_2:"Cohesion, resilience and values (regional development, youth)", exp13_3:"Natural resources and environment (agriculture, climate)", exp13_4:"Migration and border management", exp13_5:"Neighbourhood and the world (humanitarian aid)", exp13_6:"European public administration (staff, buildings)", exp13_7:"Single market, innovation and digital agenda (research, infrastructure)",

    quiz14_title:"Exercise 14 — The EU budget (True or False)", quiz14_intro:"Mark each statement as True (V) or False (F).",
    q14_1:"The EU budget can run a deficit (spend more than it takes in) every year.",
    q14_2:"Most of the EU budget revenue comes from customs duties.",
    q14_3:"The EU's long-term budget is called the Multiannual Financial Framework (MFF).",
    q14_4:"The European Parliament has no say in the approval of the budget."
  },

  // ===================== POLSKI =====================
  pl: {
    skip_link:"Przejdź do treści",
    page_title:"Ćwiczenia — Warsztat 3", hero_eyebrow:"Warsztat 3", hero_title:"Ćwiczenia interaktywne",
    hero_subtitle:"Siedem quizów o priorytetach, celach i budżecie Unii Europejskiej.",
    hero_curated: "Opracowanie: <strong>Antonio Catalfamo i Mimmo Mascali</strong>",
    btn_back_aria:"Powrót do Warsztatu 3", flag_aria:"Flaga włoska", lang_switcher_aria:"Wybierz język",
    btn_top_aria:"Powrót na górę", btn_top:"Góra", footer_text:"Projekt Erasmus+ · Warsztat 3 — Ćwiczenia interaktywne", footer_cookie: "Cookie Policy", footer_wa: "Kontakt", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
    tab8_label:"Priorytety UE", tab9_label:"Prawda/Fałsz", tab10_label:"Cele UE", tab11_label:"Źródła budżetu", tab12_label:"Prawda/Fałsz", tab13_label:"Pozycje wydatków", tab14_label:"Prawda/Fałsz",
    btn_verify:"Sprawdź", btn_reset:"Wyzeruj", result_label:"Poprawne odpowiedzi",
    select_placeholder:"— Wybierz opis —", select_placeholder_rank:"— Wybierz —",
    rank_1:"1. pozycja", rank_2:"2. pozycja", rank_3:"3. pozycja", rank_none:"Poza pierwszą trójką",

    quiz8_title:"Ćwiczenie 8 — Priorytety Unii Europejskiej", quiz8_intro:"Dla każdego pytania wybierz poprawną odpowiedź.",
    q8_1:"Jakie są motory Agendy Strategicznej UE 2024-2029?", q8_1a:"Ekspansja rolnictwa i turystyka.", q8_1b:"Silna, bezpieczna, dostatnia i konkurencyjna Europa.", q8_1c:"Zmniejszenie liczby państw członkowskich.",
    q8_2:"Który temat stał się centralny w agendzie strategicznej z powodu obecnych napięć geopolitycznych?", q8_2a:"Obrona i bezpieczeństwo.", q8_2b:"Eksploracja kosmosu.", q8_2c:"Zniesienie euro.",
    q8_3:"Jaki jest kluczowy cel europejskiej konkurencyjności?", q8_3a:"Zwiększenie zależności energetycznej.", q8_3b:"Budowanie większych zdolności przemysłowych, zarówno cywilnych, jak i wojskowych.", q8_3c:"Blokowanie innowacji technologicznych.",
    q8_4:"Do czego dąży rozdział \"Wolna i demokratyczna Europa\"?", q8_4a:"Do wzmocnienia praworządności.", q8_4b:"Do zawieszenia wyborów europejskich.", q8_4c:"Do wyłącznego zarządzania mediami społecznościowymi.",

    quiz9_title:"Ćwiczenie 9 — Prawda lub Fałsz", quiz9_intro:"Oznacz każde stwierdzenie jako Prawdziwe (V) lub Fałszywe (F).",
    q9_1:"Głównym priorytetem UE jest pobudzenie wzrostu gospodarczego i zwiększenie zatrudnienia, zwłaszcza wśród młodych.",
    q9_2:"Agenda UE ma na celu wyłącznie ograniczenie wydatków publicznych bez inwestowania w innowacje.",
    q9_3:"UE opiera się na wartościach takich jak godność ludzka, wolność, demokracja, równość i praworządność.",
    q9_4:"Agenda strategiczna obowiązuje przez 10 lat.",

    quiz10_title:"Ćwiczenie 10 — Cele Unii Europejskiej", quiz10_intro:"Dla każdego pytania wybierz poprawną odpowiedź.",
    q10_1:"Jaki jest główny, założycielski cel UE?", q10_1a:"Stworzenie jednej armii europejskiej.", q10_1b:"Promowanie pokoju, swoich wartości i dobrobytu swoich narodów.", q10_1c:"Zniesienie podatków we wszystkich państwach członkowskich.",
    q10_2:"Co Unia Europejska oferuje obywatelom?", q10_2a:"Przestrzeń wolności, bezpieczeństwa i sprawiedliwości bez granic wewnętrznych.", q10_2b:"Obywatelstwo światowe.", q10_2c:"Obowiązkowe używanie euro.",
    q10_3:"Co oznacza \"zrównoważony rozwój\" w celach UE?", q10_3a:"Wzrost gospodarczy oparty tylko na przemyśle ciężkim.", q10_3b:"Zrównoważony wzrost gospodarczy, stabilność cen i ochrona środowiska.", q10_3c:"Nieograniczony wzrost konsumpcji.",
    q10_4:"W jaki sposób UE realizuje solidarność między państwami członkowskimi?", q10_4a:"Poprzez spójność gospodarczą, społeczną i terytorialną.", q10_4b:"Zmuszając bogatsze państwa do spłacania długów biedniejszych.", q10_4c:"Zakazując swobodnego przepływu pracowników.",
    q10_5:"Które z poniższych NIE jest głównym celem UE?", q10_5a:"Promowanie pokoju.", q10_5b:"Poszanowanie praw człowieka.", q10_5c:"Utworzenie jednego państwa federalnego o nazwie \"Europa\".",

    quiz11_title:"Ćwiczenie 11 — Źródła budżetu UE", quiz11_intro:"Dla każdego źródła dochodu otwórz menu i wybierz poprawny opis.",
    src11_1:"Zasób VAT", src11_2:"Cła", src11_3:"Składka oparta na DNB (Dochód Narodowy Brutto)", src11_4:"Inne dochody", src11_5:"Składka od tworzyw niepoddanych recyklingowi",
    q11_a:"Opłaty od towarów importowanych z krajów spoza UE.", q11_b:"Procent stosowany do zharmonizowanej podstawy VAT państw członkowskich.", q11_c:"Główne źródło, oparte na bogactwie (DNB) każdego państwa.", q11_d:"Składka proporcjonalna do niepoddanych recyklingowi tworzyw i opakowań.", q11_e:"Składki krajów spoza UE, odsetki za zwłokę, kary i nadwyżki z poprzedniego roku.",

    quiz12_title:"Ćwiczenie 12 — Budżet UE (Prawda lub Fałsz)", quiz12_intro:"Oznacz każde stwierdzenie jako Prawdziwe (V) lub Fałszywe (F).",
    q12_1:"Wieloletnie Ramy Finansowe (WRF) zwykle obejmują okres 5 lat.",
    q12_2:"Długoterminowy budżet UE obecnie obejmuje okres 2021-2027.",
    q12_3:"Roczny budżet UE musi być zrównoważony (dochody = wydatki).",
    q12_4:"Budżet wieloletni jest zatwierdzany wyłącznie przez Parlament Europejski.",

    quiz13_title:"Ćwiczenie 13 — Pozycje wydatków budżetu", quiz13_intro:"Wskaż trzy największe pozycje wydatków według kwoty (1., 2., 3.). Dla pozostałych wybierz \"Poza pierwszą trójką\".",
    exp13_1:"Bezpieczeństwo i obrona", exp13_2:"Spójność, odporność i wartości (rozwój regionalny, młodzież)", exp13_3:"Zasoby naturalne i środowisko (rolnictwo, klimat)", exp13_4:"Migracja i zarządzanie granicami", exp13_5:"Sąsiedztwo i reszta świata (pomoc humanitarna)", exp13_6:"Europejska administracja publiczna (personel, budynki)", exp13_7:"Jednolity rynek, innowacje i agenda cyfrowa (badania, infrastruktura)",

    quiz14_title:"Ćwiczenie 14 — Budżet UE (Prawda lub Fałsz)", quiz14_intro:"Oznacz każde stwierdzenie jako Prawdziwe (V) lub Fałszywe (F).",
    q14_1:"Budżet UE może mieć deficyt (wydawać więcej niż wpływa) każdego roku.",
    q14_2:"Większość dochodów budżetu UE pochodzi z ceł.",
    q14_3:"Długoterminowy budżet UE nazywa się Wieloletnimi Ramami Finansowymi (WRF).",
    q14_4:"Parlament Europejski nie ma nic do powiedzenia w sprawie zatwierdzenia budżetu."
  },

  // ===================== DEUTSCH =====================
  de: {
    skip_link:"Zum Inhalt springen",
    page_title:"Übungen — Workshop 3", hero_eyebrow:"Workshop 3", hero_title:"Interaktive Übungen",
    hero_subtitle:"Sieben Quiz über Prioritäten, Ziele und Haushalt der Europäischen Union.",
    hero_curated: "Erstellt von: <strong>Antonio Catalfamo und Mimmo Mascali</strong>",
    btn_back_aria:"Zurück zum Workshop 3", flag_aria:"Italienische Flagge", lang_switcher_aria:"Sprache auswählen",
    btn_top_aria:"Nach oben", btn_top:"Oben", footer_text:"Erasmus+-Projekt · Workshop 3 — Interaktive Übungen", footer_cookie: "Cookie Policy", footer_wa: "Kontakt", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
    tab8_label:"EU-Prioritäten", tab9_label:"Richtig/Falsch", tab10_label:"EU-Ziele", tab11_label:"Haushaltsquellen", tab12_label:"Richtig/Falsch", tab13_label:"Ausgabenposten", tab14_label:"Richtig/Falsch",
    btn_verify:"Prüfen", btn_reset:"Zurücksetzen", result_label:"Richtige Antworten",
    select_placeholder:"— Beschreibung wählen —", select_placeholder_rank:"— Wählen —",
    rank_1:"1. Posten", rank_2:"2. Posten", rank_3:"3. Posten", rank_none:"Nicht in den ersten drei",

    quiz8_title:"Übung 8 — Die Prioritäten der Europäischen Union", quiz8_intro:"Wähle für jede Frage die richtige Antwort.",
    q8_1:"Was sind die Treiber der Strategischen Agenda der EU 2024-2029?", q8_1a:"Landwirtschaftliche Expansion und Tourismus.", q8_1b:"Ein starkes, sicheres, wohlhabendes und wettbewerbsfähiges Europa.", q8_1c:"Verringerung der Zahl der Mitgliedstaaten.",
    q8_2:"Welches Thema ist aufgrund der aktuellen geopolitischen Spannungen zentral für die strategische Agenda geworden?", q8_2a:"Verteidigung und Sicherheit.", q8_2b:"Weltraumforschung.", q8_2c:"Abschaffung des Euro.",
    q8_3:"Was ist ein zentrales Ziel für die europäische Wettbewerbsfähigkeit?", q8_3a:"Die Energieabhängigkeit erhöhen.", q8_3b:"Mehr industrielle Kapazität schaffen, sowohl zivil als auch militärisch.", q8_3c:"Technologische Innovation blockieren.",
    q8_4:"Worauf zielt das Kapitel \"Ein freies und demokratisches Europa\" ab?", q8_4a:"Auf die Stärkung der Rechtsstaatlichkeit.", q8_4b:"Auf die Aussetzung der Europawahlen.", q8_4c:"Auf die ausschließliche Verwaltung sozialer Medien.",

    quiz9_title:"Übung 9 — Richtig oder Falsch", quiz9_intro:"Markiere jede Aussage als Richtig (V) oder Falsch (F).",
    q9_1:"Die Hauptpriorität der EU ist es, das Wirtschaftswachstum anzukurbeln und die Beschäftigung zu erhöhen, besonders für junge Menschen.",
    q9_2:"Die Agenda der EU zielt ausschließlich darauf ab, die öffentlichen Ausgaben zu senken, ohne in Innovation zu investieren.",
    q9_3:"Die EU beruht auf Werten wie Menschenwürde, Freiheit, Demokratie, Gleichheit und Rechtsstaatlichkeit.",
    q9_4:"Die Strategische Agenda gilt für 10 Jahre.",

    quiz10_title:"Übung 10 — Die Ziele der Europäischen Union", quiz10_intro:"Wähle für jede Frage die richtige Antwort.",
    q10_1:"Was ist das wichtigste Gründungsziel der EU?", q10_1a:"Eine einzige europäische Armee schaffen.", q10_1b:"Den Frieden, ihre Werte und das Wohlergehen ihrer Völker fördern.", q10_1c:"Die Steuern in allen Mitgliedstaaten abschaffen.",
    q10_2:"Was bietet die Europäische Union ihren Bürgern?", q10_2a:"Einen Raum der Freiheit, Sicherheit und des Rechts ohne Binnengrenzen.", q10_2b:"Weltbürgerschaft.", q10_2c:"Verpflichtende Nutzung des Euro.",
    q10_3:"Was versteht man unter \"nachhaltiger Entwicklung\" in den Zielen der EU?", q10_3a:"Wirtschaftswachstum allein auf Basis der Schwerindustrie.", q10_3b:"Ausgewogenes Wirtschaftswachstum, Preisstabilität und Umweltschutz.", q10_3c:"Unbegrenzte Steigerung des Konsums.",
    q10_4:"Wie verfolgt die EU die Solidarität zwischen den Mitgliedstaaten?", q10_4a:"Durch wirtschaftlichen, sozialen und territorialen Zusammenhalt.", q10_4b:"Indem sie reichere Staaten zwingt, die Schulden ärmerer zu bezahlen.", q10_4c:"Indem sie die Freizügigkeit der Arbeitnehmer verbietet.",
    q10_5:"Welches der folgenden ist KEIN Hauptziel der EU?", q10_5a:"Die Förderung des Friedens.", q10_5b:"Die Achtung der Menschenrechte.", q10_5c:"Die Schaffung eines einzigen Bundesstaates namens \"Europa\".",

    quiz11_title:"Übung 11 — Die Quellen des EU-Haushalts", quiz11_intro:"Öffne für jede Einnahmequelle das Menü und wähle die richtige Beschreibung.",
    src11_1:"Mehrwertsteuer-Eigenmittel", src11_2:"Zölle", src11_3:"Beitrag auf Basis des BNE (Bruttonationaleinkommen)", src11_4:"Sonstige Einnahmen", src11_5:"Beitrag auf nicht recycelten Kunststoff",
    q11_a:"Abgaben auf Waren, die aus Nicht-EU-Ländern eingeführt werden.", q11_b:"Ein Prozentsatz auf die harmonisierte Mehrwertsteuer-Bemessungsgrundlage der Mitgliedstaaten.", q11_c:"Die Hauptquelle, basierend auf dem Reichtum (BNE) jedes Staates.", q11_d:"Beitrag proportional zu nicht recyceltem Kunststoff und Verpackungen.", q11_e:"Beiträge von Nicht-EU-Ländern, Verzugszinsen, Geldbußen und Überschüsse des Vorjahres.",

    quiz12_title:"Übung 12 — Der EU-Haushalt (Richtig oder Falsch)", quiz12_intro:"Markiere jede Aussage als Richtig (V) oder Falsch (F).",
    q12_1:"Der Mehrjährige Finanzrahmen (MFR) deckt in der Regel einen Zeitraum von 5 Jahren ab.",
    q12_2:"Der langfristige Haushalt der EU deckt derzeit den Zeitraum 2021-2027 ab.",
    q12_3:"Der jährliche Haushalt der EU muss ausgeglichen sein (Einnahmen = Ausgaben).",
    q12_4:"Der mehrjährige Haushalt wird allein vom Europäischen Parlament genehmigt.",

    quiz13_title:"Übung 13 — Die Ausgabenposten des Haushalts", quiz13_intro:"Gib die drei größten Ausgabenposten nach Betrag an (1., 2., 3.). Für die übrigen wähle \"Nicht in den ersten drei\".",
    exp13_1:"Sicherheit und Verteidigung", exp13_2:"Kohäsion, Resilienz und Werte (regionale Entwicklung, Jugend)", exp13_3:"Natürliche Ressourcen und Umwelt (Landwirtschaft, Klima)", exp13_4:"Migration und Grenzmanagement", exp13_5:"Nachbarschaft und die Welt (humanitäre Hilfe)", exp13_6:"Europäische öffentliche Verwaltung (Personal, Gebäude)", exp13_7:"Binnenmarkt, Innovation und digitale Agenda (Forschung, Infrastruktur)",

    quiz14_title:"Übung 14 — Der EU-Haushalt (Richtig oder Falsch)", quiz14_intro:"Markiere jede Aussage als Richtig (V) oder Falsch (F).",
    q14_1:"Der EU-Haushalt kann jedes Jahr ein Defizit aufweisen (mehr ausgeben als einnehmen).",
    q14_2:"Der Großteil der Einnahmen des EU-Haushalts stammt aus Zöllen.",
    q14_3:"Der langfristige Haushalt der EU heißt Mehrjähriger Finanzrahmen (MFR).",
    q14_4:"Das Europäische Parlament hat bei der Genehmigung des Haushalts kein Mitspracherecht."
  },

  // ===================== LATVIEŠU =====================
  lv: {
    skip_link:"Pāriet uz saturu",
    page_title:"Vingrinājumi — Seminārs 3", hero_eyebrow:"Seminārs 3", hero_title:"Interaktīvi vingrinājumi",
    hero_subtitle:"Septiņas viktorīnas par Eiropas Savienības prioritātēm, mērķiem un budžetu.",
    hero_curated: "Sagatavoja: <strong>Antonio Catalfamo un Mimmo Mascali</strong>",
    btn_back_aria:"Atpakaļ uz Semināru 3", flag_aria:"Itālijas karogs", lang_switcher_aria:"Izvēlēties valodu",
    btn_top_aria:"Uz augšu", btn_top:"Augšā", footer_text:"Erasmus+ projekts · Seminārs 3 — Interaktīvi vingrinājumi", footer_cookie: "Cookie Policy", footer_wa: "Kontakti", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
    tab8_label:"ES prioritātes", tab9_label:"Patiess/Aplams", tab10_label:"ES mērķi", tab11_label:"Budžeta avoti", tab12_label:"Patiess/Aplams", tab13_label:"Izdevumu posteņi", tab14_label:"Patiess/Aplams",
    btn_verify:"Pārbaudīt", btn_reset:"Nodzēst", result_label:"Pareizas atbildes",
    select_placeholder:"— Izvēlies aprakstu —", select_placeholder_rank:"— Izvēlies —",
    rank_1:"1. postenis", rank_2:"2. postenis", rank_3:"3. postenis", rank_none:"Ne pirmajā trijniekā",

    quiz8_title:"8. vingrinājums — Eiropas Savienības prioritātes", quiz8_intro:"Katram jautājumam izvēlies pareizo atbildi.",
    q8_1:"Kādi ir ES Stratēģiskās programmas 2024-2029 dzinējspēki?", q8_1a:"Lauksaimniecības paplašināšana un tūrisms.", q8_1b:"Spēcīga, droša, plaukstoša un konkurētspējīga Eiropa.", q8_1c:"Dalībvalstu skaita samazināšana.",
    q8_2:"Kura tēma kļuvusi centrāla stratēģiskajā programmā pašreizējo ģeopolitisko spriedzes dēļ?", q8_2a:"Aizsardzība un drošība.", q8_2b:"Kosmosa izpēte.", q8_2c:"Eiro atcelšana.",
    q8_3:"Kāds ir galvenais Eiropas konkurētspējas mērķis?", q8_3a:"Palielināt energoatkarību.", q8_3b:"Veidot lielāku rūpniecisko jaudu — gan civilo, gan militāro.", q8_3c:"Bloķēt tehnoloģiskās inovācijas.",
    q8_4:"Uz ko tiecas nodaļa \"Brīva un demokrātiska Eiropa\"?", q8_4a:"Uz tiesiskuma stiprināšanu.", q8_4b:"Uz Eiropas vēlēšanu apturēšanu.", q8_4c:"Uz sociālo mediju ekskluzīvu pārvaldību.",

    quiz9_title:"9. vingrinājums — Patiess vai Aplams", quiz9_intro:"Atzīmē katru apgalvojumu kā Patiesu (V) vai Aplamu (F).",
    q9_1:"ES galvenā prioritāte ir veicināt ekonomisko izaugsmi un palielināt nodarbinātību, īpaši jauniešiem.",
    q9_2:"ES programma ir vērsta tikai uz publisko izdevumu samazināšanu, neieguldot inovācijās.",
    q9_3:"ES balstās uz vērtībām, piemēram, cilvēka cieņu, brīvību, demokrātiju, vienlīdzību un tiesiskumu.",
    q9_4:"Stratēģiskā programma ir spēkā 10 gadus.",

    quiz10_title:"10. vingrinājums — Eiropas Savienības mērķi", quiz10_intro:"Katram jautājumam izvēlies pareizo atbildi.",
    q10_1:"Kāds ir ES galvenais un pamatā esošais mērķis?", q10_1a:"Izveidot vienotu Eiropas armiju.", q10_1b:"Veicināt mieru, savas vērtības un savu tautu labklājību.", q10_1c:"Atcelt nodokļus visās dalībvalstīs.",
    q10_2:"Ko Eiropas Savienība piedāvā pilsoņiem?", q10_2a:"Brīvības, drošības un tiesiskuma telpu bez iekšējām robežām.", q10_2b:"Pasaules pilsonību.", q10_2c:"Obligātu eiro lietošanu.",
    q10_3:"Ko nozīmē \"ilgtspējīga attīstība\" ES mērķos?", q10_3a:"Ekonomisko izaugsmi, kas balstīta tikai uz smago rūpniecību.", q10_3b:"Līdzsvarotu ekonomisko izaugsmi, cenu stabilitāti un vides aizsardzību.", q10_3c:"Neierobežotu patēriņa pieaugumu.",
    q10_4:"Kā ES īsteno solidaritāti starp dalībvalstīm?", q10_4a:"Ar ekonomisko, sociālo un teritoriālo kohēziju.", q10_4b:"Liekot bagātākajām valstīm maksāt nabadzīgāko parādus.", q10_4c:"Aizliedzot darba ņēmēju brīvu pārvietošanos.",
    q10_5:"Kurš no šiem NAV ES galvenais mērķis?", q10_5a:"Miera veicināšana.", q10_5b:"Cilvēktiesību ievērošana.", q10_5c:"Vienotas federālas valsts ar nosaukumu \"Eiropa\" izveide.",

    quiz11_title:"11. vingrinājums — ES budžeta avoti", quiz11_intro:"Katram ieņēmumu avotam atver izvēlni un izvēlies pareizo aprakstu.",
    src11_1:"PVN resurss", src11_2:"Muitas nodevas", src11_3:"Iemaksa, balstīta uz NKI (Nacionālais kopienākums)", src11_4:"Citi ieņēmumi", src11_5:"Iemaksa par nepārstrādātu plastmasu",
    q11_a:"Nodevas par precēm, kas importētas no valstīm ārpus ES.", q11_b:"Procents, ko piemēro dalībvalstu harmonizētajai PVN bāzei.", q11_c:"Galvenais avots, balstīts uz katras valsts bagātību (NKI).", q11_d:"Iemaksa proporcionāli nepārstrādātai plastmasai un iepakojumam.", q11_e:"Iemaksas no valstīm ārpus ES, nokavējuma procenti, naudas sodi un iepriekšējā gada pārpalikumi.",

    quiz12_title:"12. vingrinājums — ES budžets (Patiess vai Aplams)", quiz12_intro:"Atzīmē katru apgalvojumu kā Patiesu (V) vai Aplamu (F).",
    q12_1:"Daudzgadu finanšu shēma (DFS) parasti aptver 5 gadu periodu.",
    q12_2:"ES ilgtermiņa budžets pašlaik aptver periodu no 2021. līdz 2027. gadam.",
    q12_3:"ES gada budžetam jābūt līdzsvarotam (ieņēmumi = izdevumi).",
    q12_4:"Daudzgadu budžetu apstiprina tikai Eiropas Parlaments.",

    quiz13_title:"13. vingrinājums — Budžeta izdevumu posteņi", quiz13_intro:"Norādi trīs lielākos izdevumu posteņus pēc summas (1., 2., 3.). Pārējiem izvēlies \"Ne pirmajā trijniekā\".",
    exp13_1:"Drošība un aizsardzība", exp13_2:"Kohēzija, noturība un vērtības (reģionālā attīstība, jaunatne)", exp13_3:"Dabas resursi un vide (lauksaimniecība, klimats)", exp13_4:"Migrācija un robežu pārvaldība", exp13_5:"Kaimiņattiecības un pārējā pasaule (humānā palīdzība)", exp13_6:"Eiropas publiskā pārvalde (personāls, ēkas)", exp13_7:"Vienotais tirgus, inovācijas un digitālā programma (pētniecība, infrastruktūra)",

    quiz14_title:"14. vingrinājums — ES budžets (Patiess vai Aplams)", quiz14_intro:"Atzīmē katru apgalvojumu kā Patiesu (V) vai Aplamu (F).",
    q14_1:"ES budžetam katru gadu var būt deficīts (tērēt vairāk, nekā ieņem).",
    q14_2:"Lielākā daļa ES budžeta ieņēmumu nāk no muitas nodevām.",
    q14_3:"ES ilgtermiņa budžetu sauc par Daudzgadu finanšu shēmu (DFS).",
    q14_4:"Eiropas Parlamentam nav teikšanas par budžeta apstiprināšanu."
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
