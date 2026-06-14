// ============================================================
// lang.js — Workshop 3 (Polonia) · Europe Under Pressure
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
      hero_eyebrow: "Poland · Workshop 3",
      hero_title: "Should the EU Create a Common Army?",
      page_title: "Should the EU Create a Common Army?",
      hero_subtitle: "A decision-making game workshop on European security — seniors explore EU defence cooperation, analyse consequences and develop civic dialogue skills.",
      hero_authors: "Author: <strong>Maja Huminiłowicz</strong> · Fundacja &bdquo;Aktywni XXI&rdquo;",
      info_duration_label: "Duration",
      info_participants_label: "Participants",
      info_participants_value: "10–25 people",
      hero_pill_audience_label: "Audience",
      info_audience_value: "Seniors 60+",
      sec_about: "About the Workshop",
      about_text: "\"The aim of this workshop is not to persuade participants to adopt a single opinion, but to jointly reflect on the possible consequences of different decisions concerning Europe's future.\" Participants increase their knowledge of contemporary security challenges, develop civic competencies and strengthen a culture of dialogue on public issues.",
      sec_objectives: "Workshop Objectives",
      obj_gen_label: "General Objectives",
      obj1: "Increase knowledge of contemporary security challenges in Europe.",
      obj2: "Develop civic competencies through analysis of possible directions for defence cooperation in the EU.",
      obj3: "Support a culture of dialogue and constructive discussion on public issues.",
      obj_spec_label: "Specific Objectives",
      spec1: "Understand the basic principles of defence cooperation in the European Union.",
      spec2: "Identify potential benefits and risks associated with creating a common EU army.",
      spec3: "Analyse the impact of security decisions on citizens' daily lives.",
      spec4: "Develop argumentation skills and the ability to recognise different perspectives.",
      spec5: "Strengthen the sense of agency and competence in public debate.",
      sec_target: "Who Is This Workshop For?",
      target_text: "People aged 60+ with diverse educational and professional backgrounds, interested in social, civic and European issues. No specialist knowledge of politics, security or the EU is required. The workshop is designed to be inclusive, accessible and grounded in participants' life experiences.",
      sec_methods: "Working Methods",
      met1: "Interactive mini-lecture",
      met2: "Moderated discussion",
      met3: "Brainstorming",
      met4: "Group work",
      met5: "Decision-making game (without role-playing)",
      met6: "Individual and group reflection",
      sec_agenda: "How the Workshop Unfolds (approx. 135 min)",
      ag1_title: "Introduction",
      ag1_text: "Welcome participants, explain the purpose and ground rules. Opening question: \"What gives you a sense of security in Europe today?\" Collect responses on the board.",
      ag1_time: "10 min",
      ag2_title: "Activity 1 — Security: What Does It Mean Today?",
      ag2_text: "Moderated discussion on the broad meaning of security. Questions: What does \"security\" mean today? Is security only about the military? Are countries safer together or separately?",
      ag2_time: "20 min",
      ag3_title: "Activity 2 — Introduction to the Idea of a Common EU Army",
      ag3_text: "Short interactive mini-lecture on EU defence cooperation: what it is, what a common army could look like, and the four main dilemmas — Security, Costs, Sovereignty, Decisions.",
      ag3_time: "15 min",
      ag4_title: "Activity 3 — Decision-Making Game \"Europe Under Pressure\"",
      ag4_text: "Participants work in groups of 3–5 and make decisions based on 5 game rounds (see below). After each round, groups present their choices. At the end, each group answers YES / NO / YES, BUT… and completes the sentence: \"A common EU army would make sense only if…\"",
      ag4_time: "40 min",
      ag5_title: "Activity 4 — Reflective Discussion",
      ag5_text: "What was most difficult? What was most important — security, costs or independence? Optional final vote: more in favour / more against / undecided.",
      ag5_time: "20 min",
      ag6_title: "Summary and Closing",
      ag6_text: "Key conclusions: there is no single simple answer; different interests must be balanced; cooperation and trust are important. Final exercise: \"For Europe's security, the most important thing is…\"",
      ag6_time: "10 min",
      sec_game: "The Decision-Making Game — \"Europe Under Pressure\"",
      game_lead: "5 rounds. In each round, groups discuss a scenario and choose one of the options. After all rounds, each group completes the final sentence.",
      r1_title: "Round 1 — Europe Feels Less Secure",
      r1_scenario: "Tensions are rising along the borders of the European Union. Many people are beginning to wonder whether Europe can ensure its own security.",
      r1_a: "A. Countries act separately",
      r1_b: "B. Greater cooperation between countries",
      r1_c: "C. A common EU army",
      r2_title: "Round 2 — The Cost of Security",
      r2_scenario: "Experts report that creating a common EU army would be very costly and would take many years.",
      r2_a: "A. Security is the top priority — it is worth investing in",
      r2_b: "B. Yes, but only if pensions, healthcare and social services are not affected",
      r2_c: "C. Each country should decide on its own spending",
      r3_title: "Round 3 — Who Decides?",
      r3_scenario: "Countries cannot agree on who should command the common army.",
      r3_a: "A. Each country retains control over its military",
      r3_b: "B. Joint decisions, but with national oversight",
      r3_c: "C. One common EU command",
      r4_title: "Round 4 — Citizens' Concerns",
      r4_scenario: "Some citizens fear losing independence and taking on new obligations.",
      r4_a: "A. A common army for defence only",
      r4_b: "B. Only with the consent of all member states",
      r4_c: "C. Gradual cooperation instead of a single army",
      r5_title: "Round 5 — Final Decision",
      r5_scenario: "The European Union must make a decision.",
      r5_a: "YES",
      r5_b: "NO",
      r5_c: "YES, BUT…",
      r5_task: "Complete the sentence: \"A common EU army would make sense only if…\"",
      game_questions: "Discussion questions for each round",
      gq1: "Why did you choose this option?",
      gq2: "What are its advantages?",
      gq3: "What are the risks?",
      sec_downloads: "Materials to Download",
      dl_lead: "All materials for Workshop 3 (Poland), print-ready. Files exist in English (EN) only — these are the originals from the Polish team.",
      dl_note: "Note: the files are the Polish team's originals and exist only in English (EN). The page itself is translated into all languages.",
      dl_g_guide: "For the facilitator",
      dl_g_game: "For the game",
      dl_scenario: "Workshop Scenario (full plan)",
      dl_scenario_d: "Complete step-by-step guide for the workshop facilitator, including all activities.",
      dl_notes: "Facilitator Notes (extended)",
      dl_notes_d: "Detailed instructions for each activity with suggested prompts and step-by-step guidance.",
      dl_cards: "Game Cards — \"Europe Under Pressure\"",
      dl_cards_d: "The 5 game rounds, print-ready for groups of 3–5 participants.",
      footer_text: "Erasmus+ Project · Workshop 3 (Poland) — Should the EU Create a Common Army?",
      footer_wa: "Contact", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
    },
    it: {
      skip_link: "Salta al contenuto",
      btn_home_aria: "Torna alla Home",
      lang_switcher_aria: "Seleziona lingua",
      flag_aria: "Bandiera polacca",
      btn_top: "Su",
      btn_top_aria: "Torna in cima",
      hero_eyebrow: "Polonia · Workshop 3",
      hero_title: "L'UE dovrebbe creare un esercito comune?",
      page_title: "L'UE dovrebbe creare un esercito comune?",
      hero_subtitle: "Un workshop di gioco decisionale sulla sicurezza europea — i senior esplorano la cooperazione in materia di difesa dell'UE, analizzano le conseguenze e sviluppano capacità di dialogo civico.",
      hero_authors: "Autrice: <strong>Maja Huminiłowicz</strong> · Fundacja &bdquo;Aktywni XXI&rdquo;",
      info_duration_label: "Durata",
      info_participants_label: "Partecipanti",
      info_participants_value: "10–25 persone",
      hero_pill_audience_label: "Pubblico",
      info_audience_value: "Senior 60+",
      sec_about: "Il Workshop",
      about_text: "«L'obiettivo di questo workshop non è convincere i partecipanti ad adottare una singola opinione, ma riflettere insieme sulle possibili conseguenze di diverse decisioni riguardanti il futuro dell'Europa.» I partecipanti aumentano la loro conoscenza delle sfide di sicurezza contemporanee, sviluppano competenze civiche e rafforzano una cultura del dialogo.",
      sec_objectives: "Obiettivi del Workshop",
      obj_gen_label: "Obiettivi generali",
      obj1: "Aumentare la conoscenza delle sfide di sicurezza contemporanee in Europa.",
      obj2: "Sviluppare competenze civiche attraverso l'analisi delle possibili direzioni per la cooperazione nella difesa nell'UE.",
      obj3: "Sostenere una cultura del dialogo e della discussione costruttiva su questioni di interesse pubblico.",
      obj_spec_label: "Obiettivi specifici",
      spec1: "Comprendere i principi fondamentali della cooperazione nella difesa nell'Unione Europea.",
      spec2: "Identificare potenziali vantaggi e rischi associati alla creazione di un esercito UE comune.",
      spec3: "Analizzare l'impatto delle decisioni in materia di sicurezza sulla vita quotidiana dei cittadini.",
      spec4: "Sviluppare capacità argomentative e la capacità di riconoscere diverse prospettive.",
      spec5: "Rafforzare il senso di agentività e competenza nel dibattito pubblico.",
      sec_target: "A chi è rivolto?",
      target_text: "Persone dai 60 anni in su con diversi background educativi e professionali, interessate a questioni sociali, civiche ed europee. Non è richiesta alcuna conoscenza specialistica. Il workshop è progettato per essere inclusivo e accessibile.",
      sec_methods: "Metodi di lavoro",
      met1: "Mini-lezione interattiva",
      met2: "Discussione moderata",
      met3: "Brainstorming",
      met4: "Lavoro di gruppo",
      met5: "Gioco decisionale (senza gioco di ruolo)",
      met6: "Riflessione individuale e di gruppo",
      sec_agenda: "Svolgimento del workshop (circa 135 min)",
      ag1_title: "Introduzione",
      ag1_text: "Benvenuto ai partecipanti, spiegazione dello scopo e delle regole. Domanda di apertura: «Cosa ti dà un senso di sicurezza in Europa oggi?» Raccogliere le risposte sulla lavagna.",
      ag1_time: "10 min",
      ag2_title: "Attività 1 — Sicurezza: cosa significa oggi?",
      ag2_text: "Discussione moderata sul significato ampio di sicurezza. Domande: Cosa significa «sicurezza» oggi? La sicurezza riguarda solo l'esercito? I paesi sono più al sicuro insieme o separatamente?",
      ag2_time: "20 min",
      ag3_title: "Attività 2 — Introduzione all'idea di un esercito UE comune",
      ag3_text: "Breve mini-lezione interattiva sulla cooperazione nella difesa dell'UE: cos'è, come potrebbe essere un esercito comune, e i quattro dilemmi principali — Sicurezza, Costi, Sovranità, Decisioni.",
      ag3_time: "15 min",
      ag4_title: "Attività 3 — Gioco decisionale «L'Europa sotto pressione»",
      ag4_text: "I partecipanti lavorano in gruppi di 3–5 e prendono decisioni su 5 round di gioco. Dopo ogni round i gruppi presentano le loro scelte. Alla fine ogni gruppo risponde SÌ / NO / SÌ, MA… e completa la frase: «Un esercito UE comune avrebbe senso solo se…»",
      ag4_time: "40 min",
      ag5_title: "Attività 4 — Discussione riflessiva",
      ag5_text: "Cosa è stato più difficile? Cosa era più importante — sicurezza, costi o indipendenza? Voto finale facoltativo: più favorevoli / più contrari / indecisi.",
      ag5_time: "20 min",
      ag6_title: "Sintesi e chiusura",
      ag6_text: "Conclusioni chiave: non esiste un'unica risposta semplice; è necessario bilanciare interessi diversi; la cooperazione e la fiducia sono importanti. Esercizio finale: «Per la sicurezza dell'Europa, la cosa più importante è…»",
      ag6_time: "10 min",
      sec_game: "Il gioco decisionale — «L'Europa sotto pressione»",
      game_lead: "5 round. In ogni round i gruppi discutono uno scenario e scelgono una delle opzioni. Dopo tutti i round, ogni gruppo completa la frase finale.",
      r1_title: "Round 1 — L'Europa si sente meno sicura",
      r1_scenario: "Le tensioni stanno aumentando lungo i confini dell'Unione Europea. Molte persone cominciano a chiedersi se l'Europa possa garantire la propria sicurezza.",
      r1_a: "A. I paesi agiscono separatamente",
      r1_b: "B. Maggiore cooperazione tra i paesi",
      r1_c: "C. Un esercito UE comune",
      r2_title: "Round 2 — Il costo della sicurezza",
      r2_scenario: "Gli esperti riferiscono che la creazione di un esercito UE comune sarebbe molto costosa e richiederebbe molti anni.",
      r2_a: "A. La sicurezza è la priorità assoluta — vale la pena investire",
      r2_b: "B. Sì, ma solo se pensioni, sanità e servizi sociali non ne risentono",
      r2_c: "C. Ogni paese dovrebbe decidere autonomamente le proprie spese",
      r3_title: "Round 3 — Chi decide?",
      r3_scenario: "I paesi non riescono a concordare chi dovrebbe comandare l'esercito comune.",
      r3_a: "A. Ogni paese mantiene il controllo sul proprio esercito",
      r3_b: "B. Decisioni congiunte, ma con supervisione nazionale",
      r3_c: "C. Un unico comando UE comune",
      r4_title: "Round 4 — Le preoccupazioni dei cittadini",
      r4_scenario: "Alcuni cittadini temono di perdere l'indipendenza e di assumere nuovi obblighi.",
      r4_a: "A. Un esercito comune solo per la difesa",
      r4_b: "B. Solo con il consenso di tutti gli Stati membri",
      r4_c: "C. Cooperazione graduale invece di un unico esercito",
      r5_title: "Round 5 — La decisione finale",
      r5_scenario: "L'Unione Europea deve prendere una decisione.",
      r5_a: "SÌ",
      r5_b: "NO",
      r5_c: "SÌ, MA…",
      r5_task: "Completa la frase: «Un esercito UE comune avrebbe senso solo se…»",
      game_questions: "Domande di discussione per ogni round",
      gq1: "Perché hai scelto questa opzione?",
      gq2: "Quali sono i vantaggi?",
      gq3: "Quali sono i rischi?",
      sec_downloads: "Materiali da Scaricare",
      dl_lead: "Tutti i materiali del Workshop 3 Polonia, pronti per la stampa. I file esistono solo in inglese (EN).",
      dl_note: "Nota: i file sono gli originali del team polacco e disponibili solo in inglese (EN). La pagina è tradotta in tutte le lingue.",
      dl_g_guide: "Per il facilitatore",
      dl_g_game: "Per il gioco",
      dl_scenario: "Scenario del Workshop (piano completo)",
      dl_scenario_d: "Guida passo-passo completa per il facilitatore, con tutte le attività.",
      dl_notes: "Note per il facilitatore (versione estesa)",
      dl_notes_d: "Istruzioni dettagliate per ogni attività con suggerimenti e guida passo-passo.",
      dl_cards: "Carte del gioco «L'Europa sotto pressione»",
      dl_cards_d: "I 5 round del gioco, pronti per la stampa per gruppi di 3–5 partecipanti.",
      footer_text: "Progetto Erasmus+ · Workshop 3 (Polonia) — L'UE dovrebbe creare un esercito comune?",
      footer_wa: "Contatti", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
    },
    pl: {
      skip_link: "Przejdź do treści",
      btn_home_aria: "Powrót do strony głównej",
      lang_switcher_aria: "Wybierz język",
      flag_aria: "Flaga polska",
      btn_top: "Góra",
      btn_top_aria: "Powrót na górę",
      hero_eyebrow: "Polska · Warsztat 3",
      hero_title: "Czy UE powinna stworzyć wspólną armię?",
      page_title: "Czy UE powinna stworzyć wspólną armię?",
      hero_subtitle: "Warsztat gry decyzyjnej na temat bezpieczeństwa europejskiego — seniorzy poznają współpracę obronną UE, analizują konsekwencje i rozwijają umiejętności dialogu obywatelskiego.",
      hero_authors: "Autorka: <strong>Maja Huminiłowicz</strong> · Fundacja &bdquo;Aktywni XXI&rdquo;",
      info_duration_label: "Czas trwania",
      info_participants_label: "Uczestnicy",
      info_participants_value: "10–25 osób",
      hero_pill_audience_label: "Odbiorcy",
      info_audience_value: "Seniorzy 60+",
      sec_about: "O warsztacie",
      about_text: "„Celem tego warsztatu nie jest przekonanie uczestników do jednej opinii, lecz wspólna refleksja nad możliwymi konsekwencjami różnych decyzji dotyczących przyszłości Europy.\" Uczestnicy poszerzają wiedzę na temat współczesnych wyzwań w zakresie bezpieczeństwa i rozwijają kompetencje obywatelskie.",
      sec_objectives: "Cele warsztatu",
      obj_gen_label: "Cele ogólne",
      obj1: "Zwiększenie wiedzy uczestników na temat współczesnych wyzwań bezpieczeństwa w Europie.",
      obj2: "Rozwijanie kompetencji obywatelskich poprzez analizę możliwych kierunków współpracy obronnej w UE.",
      obj3: "Wspieranie kultury dialogu i konstruktywnej dyskusji na temat spraw publicznych.",
      obj_spec_label: "Cele szczegółowe",
      spec1: "Zrozumienie podstawowych zasad współpracy obronnej w Unii Europejskiej.",
      spec2: "Identyfikacja potencjalnych korzyści i ryzyk związanych z tworzeniem wspólnej armii UE.",
      spec3: "Analiza wpływu decyzji dotyczących bezpieczeństwa na codzienne życie obywateli.",
      spec4: "Rozwijanie umiejętności argumentacji i zdolności do rozpoznawania różnych perspektyw.",
      spec5: "Wzmacnianie poczucia sprawczości i kompetencji w debacie publicznej.",
      sec_target: "Dla kogo jest ten warsztat?",
      target_text: "Osoby w wieku 60+ o zróżnicowanym wykształceniu i doświadczeniu zawodowym, zainteresowane sprawami społecznymi, obywatelskimi i europejskimi. Nie jest wymagana specjalistyczna wiedza. Warsztat jest inkluzywny i dostępny.",
      sec_methods: "Metody pracy",
      met1: "Interaktywny mini-wykład",
      met2: "Dyskusja moderowana",
      met3: "Burza mózgów",
      met4: "Praca w grupach",
      met5: "Gra decyzyjna (bez odgrywania ról)",
      met6: "Indywidualna i grupowa refleksja",
      sec_agenda: "Przebieg warsztatu (ok. 135 min)",
      ag1_title: "Wprowadzenie",
      ag1_text: "Powitanie uczestników, wyjaśnienie celu i zasad. Pytanie otwierające: «Co daje ci poczucie bezpieczeństwa w Europie?» Zbieranie odpowiedzi na tablicy.",
      ag1_time: "10 min",
      ag2_title: "Aktywność 1 — Bezpieczeństwo: co to oznacza dziś?",
      ag2_text: "Moderowana dyskusja na temat szerokiego rozumienia bezpieczeństwa. Pytania: Co oznacza dziś «bezpieczeństwo»? Czy bezpieczeństwo to tylko kwestia wojskowa? Czy kraje są bezpieczniejsze razem czy osobno?",
      ag2_time: "20 min",
      ag3_title: "Aktywność 2 — Wprowadzenie do idei wspólnej armii UE",
      ag3_text: "Krótki interaktywny mini-wykład na temat współpracy obronnej UE: czym jest, jak mogłaby wyglądać wspólna armia i cztery główne dylematy — Bezpieczeństwo, Koszty, Suwerenność, Decyzje.",
      ag3_time: "15 min",
      ag4_title: "Aktywność 3 — Gra decyzyjna «Europa pod presją»",
      ag4_text: "Uczestnicy pracują w grupach 3–5 osób i podejmują decyzje w oparciu o 5 rund gry. Po każdej rundzie grupy prezentują swoje wybory. Na koniec każda grupa odpowiada TAK / NIE / TAK, ALE… i uzupełnia zdanie: «Wspólna armia UE miałaby sens tylko wtedy, gdy…»",
      ag4_time: "40 min",
      ag5_title: "Aktywność 4 — Dyskusja refleksyjna",
      ag5_text: "Co było najtrudniejsze? Co było najważniejsze — bezpieczeństwo, koszty czy niezależność? Opcjonalne głosowanie końcowe: więcej za / więcej przeciw / niezdecydowani.",
      ag5_time: "20 min",
      ag6_title: "Podsumowanie i zamknięcie",
      ag6_text: "Kluczowe wnioski: nie ma jednej prostej odpowiedzi; należy balansować różne interesy; współpraca i zaufanie są ważne. Ćwiczenie końcowe: «Dla bezpieczeństwa Europy najważniejsze jest…»",
      ag6_time: "10 min",
      sec_game: "Gra decyzyjna — «Europa pod presją»",
      game_lead: "5 rund. W każdej rundzie grupy omawiają scenariusz i wybierają jedną z opcji. Po wszystkich rundach każda grupa uzupełnia zdanie końcowe.",
      r1_title: "Runda 1 — Europa czuje się mniej bezpieczna",
      r1_scenario: "Napięcia rosną wzdłuż granic Unii Europejskiej. Wiele osób zaczyna się zastanawiać, czy Europa może zapewnić sobie bezpieczeństwo.",
      r1_a: "A. Kraje działają osobno",
      r1_b: "B. Większa współpraca między krajami",
      r1_c: "C. Wspólna armia UE",
      r2_title: "Runda 2 — Koszt bezpieczeństwa",
      r2_scenario: "Eksperci donoszą, że stworzenie wspólnej armii UE byłoby bardzo kosztowne i zajęłoby wiele lat.",
      r2_a: "A. Bezpieczeństwo jest priorytetem — warto inwestować",
      r2_b: "B. Tak, ale tylko jeśli nie ucierpi na tym system emerytalny, ochrona zdrowia i usługi społeczne",
      r2_c: "C. Każdy kraj powinien sam decydować o swoich wydatkach",
      r3_title: "Runda 3 — Kto decyduje?",
      r3_scenario: "Kraje nie mogą uzgodnić, kto powinien dowodzić wspólną armią.",
      r3_a: "A. Każdy kraj zachowuje kontrolę nad swoją armią",
      r3_b: "B. Wspólne decyzje, ale z nadzorem narodowym",
      r3_c: "C. Jedno wspólne dowództwo UE",
      r4_title: "Runda 4 — Obawy obywateli",
      r4_scenario: "Część obywateli obawia się utraty niezależności i przyjęcia nowych zobowiązań.",
      r4_a: "A. Wspólna armia tylko do obrony",
      r4_b: "B. Tylko za zgodą wszystkich państw członkowskich",
      r4_c: "C. Stopniowa współpraca zamiast jednej armii",
      r5_title: "Runda 5 — Ostateczna decyzja",
      r5_scenario: "Unia Europejska musi podjąć decyzję.",
      r5_a: "TAK",
      r5_b: "NIE",
      r5_c: "TAK, ALE…",
      r5_task: "Uzupełnij zdanie: „Wspólna armia UE miałaby sens tylko wtedy, gdy…\"",
      game_questions: "Pytania do dyskusji po każdej rundzie",
      gq1: "Dlaczego wybrałeś/aś tę opcję?",
      gq2: "Jakie są jej zalety?",
      gq3: "Jakie są ryzyka?",
      sec_downloads: "Materiały do pobrania",
      dl_lead: "Wszystkie materiały do Warsztatu 3 (Polska), gotowe do druku. Pliki dostępne tylko w języku angielskim (EN).",
      dl_note: "Uwaga: pliki są oryginałami polskiego zespołu i dostępne tylko w języku angielskim (EN). Strona jest przetłumaczona na wszystkie języki.",
      dl_g_guide: "Dla prowadzącego",
      dl_g_game: "Do gry",
      dl_scenario: "Scenariusz warsztatu (pełny plan)",
      dl_scenario_d: "Pełny przewodnik krok po kroku dla prowadzącego, ze wszystkimi aktywnościami.",
      dl_notes: "Notatki dla prowadzącego (wersja rozszerzona)",
      dl_notes_d: "Szczegółowe instrukcje dla każdej aktywności z sugerowanymi pytaniami i wskazówkami.",
      dl_cards: "Karty gry «Europa pod presją»",
      dl_cards_d: "5 rund gry, gotowe do druku dla grup 3–5 uczestników.",
      footer_text: "Projekt Erasmus+ · Warsztat 3 (Polska) — Czy UE powinna stworzyć wspólną armię?",
      footer_wa: "Kontakt", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
    },
    de: {
      skip_link: "Zum Inhalt springen",
      btn_home_aria: "Zurück zur Startseite",
      lang_switcher_aria: "Sprache wählen",
      flag_aria: "Polnische Flagge",
      btn_top: "Oben",
      btn_top_aria: "Zurück nach oben",
      hero_eyebrow: "Polen · Workshop 3",
      hero_title: "Sollte die EU eine gemeinsame Armee schaffen?",
      page_title: "Sollte die EU eine gemeinsame Armee schaffen?",
      hero_subtitle: "Ein Entscheidungsspiel-Workshop zur europäischen Sicherheit — Ältere erkunden die Verteidigungskooperation der EU, analysieren Konsequenzen und entwickeln zivilen Dialogkompetenz.",
      hero_authors: "Autorin: <strong>Maja Huminiłowicz</strong> · Fundacja &bdquo;Aktywni XXI&rdquo;",
      info_duration_label: "Dauer",
      info_participants_label: "Teilnehmende",
      info_participants_value: "10–25 Personen",
      hero_pill_audience_label: "Zielgruppe",
      info_audience_value: "Ältere 60+",
      sec_about: "Über den Workshop",
      about_text: "„Das Ziel dieses Workshops ist nicht, Teilnehmende von einer einzigen Meinung zu überzeugen, sondern gemeinsam über mögliche Konsequenzen verschiedener Entscheidungen für Europas Zukunft nachzudenken.\" Teilnehmende erweitern ihr Wissen über aktuelle Sicherheitsherausforderungen und entwickeln Bürgerkompetenz.",
      sec_objectives: "Ziele des Workshops",
      obj_gen_label: "Allgemeine Ziele",
      obj1: "Wissen über aktuelle Sicherheitsherausforderungen in Europa erweitern.",
      obj2: "Bürgerkompetenz durch Analyse möglicher Richtungen der Verteidigungskooperation in der EU entwickeln.",
      obj3: "Eine Kultur des Dialogs und konstruktiver Diskussionen über öffentliche Angelegenheiten fördern.",
      obj_spec_label: "Spezifische Ziele",
      spec1: "Grundprinzipien der Verteidigungskooperation in der EU verstehen.",
      spec2: "Potenzielle Vorteile und Risiken einer gemeinsamen EU-Armee identifizieren.",
      spec3: "Den Einfluss von Sicherheitsentscheidungen auf das Alltagsleben der Bürger analysieren.",
      spec4: "Argumentationskompetenz und die Fähigkeit zur Perspektivenvielfalt entwickeln.",
      spec5: "Das Gefühl von Handlungsfähigkeit und Kompetenz im öffentlichen Diskurs stärken.",
      sec_target: "Für wen ist dieser Workshop?",
      target_text: "Menschen ab 60 Jahren mit unterschiedlichem Bildungs- und Berufshintergrund, die sich für gesellschaftliche, bürgerliche und europäische Fragen interessieren. Fachwissen ist nicht erforderlich.",
      sec_methods: "Arbeitsmethoden",
      met1: "Interaktiver Mini-Vortrag",
      met2: "Moderierte Diskussion",
      met3: "Brainstorming",
      met4: "Gruppenarbeit",
      met5: "Entscheidungsspiel (ohne Rollenspiel)",
      met6: "Einzel- und Gruppenreflexion",
      sec_agenda: "Ablauf des Workshops (ca. 135 Min.)",
      ag1_title: "Einleitung",
      ag1_text: "Begrüßung, Zweck und Grundregeln erklären. Einstiegsfrage: „Was gibt Ihnen heute ein Sicherheitsgefühl in Europa?\" Antworten auf der Tafel sammeln.",
      ag1_time: "10 Min.",
      ag2_title: "Aktivität 1 — Sicherheit: Was bedeutet das heute?",
      ag2_text: "Moderierte Diskussion über das breite Verständnis von Sicherheit. Fragen: Was bedeutet „Sicherheit\" heute? Ist Sicherheit nur eine militärische Frage? Sind Länder gemeinsam sicherer als getrennt?",
      ag2_time: "20 Min.",
      ag3_title: "Aktivität 2 — Einführung in die Idee einer gemeinsamen EU-Armee",
      ag3_text: "Kurzer interaktiver Mini-Vortrag über EU-Verteidigungskooperation und die vier Hauptdilemmas — Sicherheit, Kosten, Souveränität, Entscheidungen.",
      ag3_time: "15 Min.",
      ag4_title: "Aktivität 3 — Entscheidungsspiel «Europa unter Druck»",
      ag4_text: "Teilnehmende arbeiten in Gruppen à 3–5 Personen und treffen in 5 Runden Entscheidungen. Nach jeder Runde präsentieren die Gruppen ihre Wahl. Am Ende antwortet jede Gruppe JA / NEIN / JA, ABER… und vervollständigt den Satz.",
      ag4_time: "40 Min.",
      ag5_title: "Aktivität 4 — Reflexionsgespräch",
      ag5_text: "Was war am schwierigsten? Was war am wichtigsten — Sicherheit, Kosten oder Unabhängigkeit? Optionale Abstimmung: mehrheitlich dafür / mehrheitlich dagegen / unentschlossen.",
      ag5_time: "20 Min.",
      ag6_title: "Zusammenfassung und Abschluss",
      ag6_text: "Haupterkenntnisse: Es gibt keine einfache Antwort; verschiedene Interessen müssen abgewogen werden; Kooperation und Vertrauen sind wichtig. Schlussübung: „Für Europas Sicherheit ist das Wichtigste…\"",
      ag6_time: "10 Min.",
      sec_game: "Das Entscheidungsspiel — «Europa unter Druck»",
      game_lead: "5 Runden. In jeder Runde besprechen die Gruppen ein Szenario und wählen eine Option. Nach allen Runden vervollständigt jede Gruppe den Abschlusssatz.",
      r1_title: "Runde 1 — Europa fühlt sich weniger sicher",
      r1_scenario: "Entlang der EU-Grenzen nehmen Spannungen zu. Viele fragen sich, ob Europa seine eigene Sicherheit gewährleisten kann.",
      r1_a: "A. Länder handeln getrennt",
      r1_b: "B. Stärkere Zusammenarbeit zwischen den Ländern",
      r1_c: "C. Eine gemeinsame EU-Armee",
      r2_title: "Runde 2 — Die Kosten der Sicherheit",
      r2_scenario: "Experten berichten, dass eine gemeinsame EU-Armee sehr teuer wäre und viele Jahre brauchen würde.",
      r2_a: "A. Sicherheit hat höchste Priorität — es lohnt sich zu investieren",
      r2_b: "B. Ja, aber nur wenn Renten, Gesundheit und Sozialleistungen nicht beeinträchtigt werden",
      r2_c: "C. Jedes Land sollte über seine eigenen Ausgaben entscheiden",
      r3_title: "Runde 3 — Wer entscheidet?",
      r3_scenario: "Die Länder können sich nicht einigen, wer die gemeinsame Armee befehligen soll.",
      r3_a: "A. Jedes Land behält die Kontrolle über sein Militär",
      r3_b: "B. Gemeinsame Entscheidungen, aber mit nationaler Aufsicht",
      r3_c: "C. Ein gemeinsames EU-Kommando",
      r4_title: "Runde 4 — Bedenken der Bürger",
      r4_scenario: "Einige Bürger befürchten den Verlust der Unabhängigkeit und neue Verpflichtungen.",
      r4_a: "A. Eine gemeinsame Armee nur zur Verteidigung",
      r4_b: "B. Nur mit Zustimmung aller Mitgliedstaaten",
      r4_c: "C. Schrittweise Zusammenarbeit statt einer einzigen Armee",
      r5_title: "Runde 5 — Die endgültige Entscheidung",
      r5_scenario: "Die Europäische Union muss eine Entscheidung treffen.",
      r5_a: "JA",
      r5_b: "NEIN",
      r5_c: "JA, ABER…",
      r5_task: "Vervollständigen Sie den Satz: „Eine gemeinsame EU-Armee würde nur Sinn machen, wenn…\"",
      game_questions: "Diskussionsfragen für jede Runde",
      gq1: "Warum haben Sie diese Option gewählt?",
      gq2: "Was sind die Vorteile?",
      gq3: "Was sind die Risiken?",
      sec_downloads: "Materialien zum Herunterladen",
      dl_lead: "Alle Materialien für Workshop 3 (Polen), druckfertig. Dateien nur auf Englisch (EN).",
      dl_note: "Hinweis: Die Dateien sind die Originale des polnischen Teams und nur auf Englisch (EN) verfügbar. Die Seite selbst ist in alle Sprachen übersetzt.",
      dl_g_guide: "Für die Moderation",
      dl_g_game: "Für das Spiel",
      dl_scenario: "Workshop-Szenario (vollständiger Plan)",
      dl_scenario_d: "Vollständiger Schritt-für-Schritt-Leitfaden für die Moderation mit allen Aktivitäten.",
      dl_notes: "Moderationshinweise (erweiterte Version)",
      dl_notes_d: "Detaillierte Anweisungen für jede Aktivität mit Impulsfragen und Schritt-für-Schritt-Anleitung.",
      dl_cards: "Spielkarten «Europa unter Druck»",
      dl_cards_d: "Die 5 Spielrunden, druckfertig für Gruppen von 3–5 Personen.",
      footer_text: "Erasmus+-Projekt · Workshop 3 (Polen) — Sollte die EU eine gemeinsame Armee schaffen?",
      footer_wa: "Kontakt", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
    },
    lv: {
      skip_link: "Pāriet uz saturu",
      btn_home_aria: "Atpakaļ uz sākumu",
      lang_switcher_aria: "Izvēlieties valodu",
      flag_aria: "Poļu karogs",
      btn_top: "Augšā",
      btn_top_aria: "Atpakaļ uz augšu",
      hero_eyebrow: "Polija · 3. seminārs",
      hero_title: "Vai ES vajadzētu izveidot kopēju armiju?",
      page_title: "Vai ES vajadzētu izveidot kopēju armiju?",
      hero_subtitle: "Lēmumu pieņemšanas spēles seminārs par Eiropas drošību — senjori pēta ES aizsardzības sadarbību, analizē sekas un attīsta pilsoniskā dialoga prasmes.",
      hero_authors: "Autore: <strong>Maja Huminiłowicz</strong> · Fundacja &bdquo;Aktywni XXI&rdquo;",
      info_duration_label: "Ilgums",
      info_participants_label: "Dalybnieki",
      info_participants_value: "10–25 cilvēki",
      hero_pill_audience_label: "Auditorija",
      info_audience_value: "Senjori 60+",
      sec_about: "Par semināru",
      about_text: "„Šī semināra mērķis nav pārliecināt dalībniekus pieņemt vienu viedokli, bet kopīgi pārdomāt iespējamās dažādu lēmumu par Eiropas nākotni sekas.\" Dalybnieki papildina zināšanas par mūsdienu drošības izaicinājumiem un attīsta pilsoniskās kompetences.",
      sec_objectives: "Semināra mērķi",
      obj_gen_label: "Vispārīgie mērķi",
      obj1: "Palielināt zināšanas par mūsdienu drošības izaicinājumiem Eiropā.",
      obj2: "Attīstīt pilsoniskās kompetences, analizējot iespējamos ES aizsardzības sadarbības virzienus.",
      obj3: "Atbalstīt dialoga kultūru un konstruktīvu diskusiju par sabiedriskajiem jautājumiem.",
      obj_spec_label: "Specifiskie mērķi",
      spec1: "Izprast ES aizsardzības sadarbības pamatprincipus.",
      spec2: "Identificēt kopējas ES armijas izveidošanas potenciālās priekšrocības un riskus.",
      spec3: "Analizēt drošības lēmumu ietekmi uz pilsoņu ikdienas dzīvi.",
      spec4: "Attīstīt argumentācijas prasmes un spēju atpazīt dažādas perspektīvas.",
      spec5: "Stiprināt pārliecību un kompetenci publiskajā debatē.",
      sec_target: "Kam piemērots šis seminārs?",
      target_text: "Cilvēki vecumā no 60 gadiem ar dažādu izglītību un profesionālo pieredzi, kas interesējas par sociāliem, pilsoniskiem un Eiropas jautājumiem. Speciālas zināšanas nav nepieciešamas.",
      sec_methods: "Darba metodes",
      met1: "Interaktīvs mini-lekcija",
      met2: "Moderēta diskusija",
      met3: "Prāta vētra",
      met4: "Grupu darbs",
      met5: "Lēmumu pieņemšanas spēle (bez lomu spēles)",
      met6: "Individuāla un grupas pārdomas",
      sec_agenda: "Semināra gaita (ap 135 min)",
      ag1_title: "Ievads",
      ag1_text: "Dalybnieku sagaidīšana, mērķa un noteikumu skaidrošana. Atklājošais jautājums: „Kas jums šodien sniedz drošības sajūtu Eiropā?\" Atbildes rakstīt uz tāfeles.",
      ag1_time: "10 min",
      ag2_title: "Aktivitāte 1 — Drošība: ko tas nozīmē šodien?",
      ag2_text: "Moderēta diskusija par drošības plašo nozīmi. Jautājumi: Ko nozīmē „drošība\" šodien? Vai drošība ir tikai militāra lieta? Vai valstis ir drošākas kopā vai atsevišķi?",
      ag2_time: "20 min",
      ag3_title: "Aktivitāte 2 — Ievads kopējas ES armijas idejai",
      ag3_text: "Īsa interaktīva mini-lekcija par ES aizsardzības sadarbību un četriem galvenajiem dilemmām — Drošība, Izmaksas, Suverenitāte, Lēmumi.",
      ag3_time: "15 min",
      ag4_title: "Aktivitāte 3 — Lēmumu pieņemšanas spēle «Eiropa zem spiediena»",
      ag4_text: "Dalybnieki strādā grupās pa 3–5 un pieņem lēmumus 5 spēles kārtās. Pēc katras kārtas grupas prezentē savas izvēles. Beigās katra grupa atbild JĀ / NĒ / JĀ, BET… un pabeidz teikumu.",
      ag4_time: "40 min",
      ag5_title: "Aktivitāte 4 — Pārdomu diskusija",
      ag5_text: "Kas bija grūtākais? Kas bija svarīgākais — drošība, izmaksas vai neatkarība? Pēc izvēles balsojums: vairāk atbalstītāju / vairāk pretinieku / neskaidri.",
      ag5_time: "20 min",
      ag6_title: "Nobeigums",
      ag6_text: "Galvenie secinājumi: nav vienkāršas atbildes; dažādas intereses jālīdzsvaro; sadarbība un uzticēšanās ir svarīgas. Nobeiguma uzdevums: „Eiropas drošībai vissvarīgākais ir…\"",
      ag6_time: "10 min",
      sec_game: "Lēmumu pieņemšanas spēle — «Eiropa zem spiediena»",
      game_lead: "5 kārtas. Katrā kārtā grupas apspriež scenāriju un izvēlas vienu no variantiem. Pēc visām kārtām katra grupa pabeidz nobeiguma teikumu.",
      r1_title: "1. kārta — Eiropa jūtas mazāk drošā",
      r1_scenario: "Spriedze pieaug gar Eiropas Savienības robežām. Daudzi sāk jautāt, vai Eiropa var nodrošināt savu drošību.",
      r1_a: "A. Valstis rīkojas atsevišķi",
      r1_b: "B. Lielāka sadarbība starp valstīm",
      r1_c: "C. Kopēja ES armija",
      r2_title: "2. kārta — Drošības izmaksas",
      r2_scenario: "Eksperti ziņo, ka kopējas ES armijas izveidošana būtu ļoti dārga un prasītu daudzus gadus.",
      r2_a: "A. Drošība ir galvenā prioritāte — vērts ieguldīt",
      r2_b: "B. Jā, bet tikai tad, ja necieš pensijas, veselības aprūpe un sociālie pakalpojumi",
      r2_c: "C. Katrai valstij pašai jāizlemj par saviem izdevumiem",
      r3_title: "3. kārta — Kas izlemj?",
      r3_scenario: "Valstis nevar vienoties par to, kam vajadzētu vadīt kopējo armiju.",
      r3_a: "A. Katra valsts saglabā kontroli pār savu militāro spēku",
      r3_b: "B. Kopīgi lēmumi, bet ar nacionālu uzraudzību",
      r3_c: "C. Viens kopējs ES komandments",
      r4_title: "4. kārta — Pilsoņu bažas",
      r4_scenario: "Daži pilsoņi baidās zaudēt neatkarību un uzņemties jaunas saistības.",
      r4_a: "A. Kopēja armija tikai aizsardzībai",
      r4_b: "B. Tikai ar visu dalībvalstu piekrišanu",
      r4_c: "C. Pakāpeniska sadarbība, nevis viena armija",
      r5_title: "5. kārta — Galīgais lēmums",
      r5_scenario: "Eiropas Savienībai jāpieņem lēmums.",
      r5_a: "JĀ",
      r5_b: "NĒ",
      r5_c: "JĀ, BET…",
      r5_task: "Pabeidz teikumu: „Kopēja ES armija būtu jēgpilna tikai tad, ja…\"",
      game_questions: "Diskusijas jautājumi katrai kārtai",
      gq1: "Kāpēc izvēlējāties šo variantu?",
      gq2: "Kādas ir tā priekšrocības?",
      gq3: "Kādi ir riski?",
      sec_downloads: "Materīāli lejupielādei",
      dl_lead: "Visi 3. semināra (Polija) materīāli, gatavi drukāšanai. Faili pieejami tikai angliski (EN).",
      dl_note: "Piezīme: faili ir poļu komandas origināli un pieejami tikai angliski (EN). Lapa ir tulkota visās valodās.",
      dl_g_guide: "Veicinātājam",
      dl_g_game: "Spēlei",
      dl_scenario: "Semināra scenārijs (pilņs plāns)",
      dl_scenario_d: "Pilns soli-pa-solim ceļvedis veicinātājam ar visām aktivitātēm.",
      dl_notes: "Veicinātāja piezīmes (paplašinātā versija)",
      dl_notes_d: "Detalizētas instrukcijas katrai aktivitātei ar ieteiktajiem jautājumiem.",
      dl_cards: "Spēles kartes «Eiropa zem spiediena»",
      dl_cards_d: "5 spēles kārtas, gatavas drukāšanai grupām pa 3–5 cilvēkiem.",
      footer_text: "Erasmus+ projekts · 3. seminārs (Polija) — Vai ES vajadzētu izveidot kopēju armiju?",
      footer_wa: "Kontakti", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
    },
  };

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
      item.appendChild(document.createTextNode(' ' + LANGS[code].label));
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
