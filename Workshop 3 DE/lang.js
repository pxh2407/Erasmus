// Lingua dall'indirizzo (es. ?lang=pl): ha la precedenza su quella salvata nel browser
(function () {
  var m = location.search.match(/[?&]lang=(en|it|pl|de|lv)(?![a-z])/);
  if (m) {
    try { localStorage.setItem('erasmus_lang', m[1]); } catch (e) {}
    document.documentElement.lang = m[1];
  }
})();

// lang.js — Workshop 3 (Germania) · We in Europe – The EU's Goals and Values in Turbulent Times
// Lingue: en · it · pl · de · lv

(function () {

  const TRANSLATIONS = {
    en: {
      skip_link: "Skip to content",
      btn_home_aria: "Back to Home",
      lang_switcher_aria: "Select language",
      flag_aria: "German flag",
      btn_top: "Top",
      page_title: "We in Europe — The EU's Goals and Values in Turbulent Times · ECBL Erasmus+",
      hero_eyebrow: "Germany · Workshop 3",
      hero_title: "We in Europe — The EU's Goals and Values in Turbulent Times",
      hero_subtitle: "A «values café»: participants discover the values and goals of the EU and relate them to their own lives — with a video, discussion rounds and the board game «Goal Game».",
      hero_authors: "Authors: <strong>Corinna Benthack, Tabea Lotz, Christiane Meyer, Carmen Ripper</strong>",
      hero_pill_audience_label: "Audience",
      info_audience_value: "Ages 50+",
      info_duration_label: "Duration",
      info_duration_value: "90 minutes",
      info_type_label: "Type",
      info_type_value: "Workshop + board game",
      sec_about: "About the Workshop",
      about_text: "Participants get to know the fundamental values and the goals of the European Union and understand what they mean in everyday life. They also discover that these goals can conflict with one another and that the Member States do not always see them the same way.",
      sec_agenda: "How the Workshop Unfolds",
      ag1_title: "Welcome",
      ag1_text: "Introduction to the project «Europe Can Be Liked» and why values and goals matter.",
      ag1_time: "5 min",
      ag2_title: "Take a position",
      ag2_text: "Three statements about the EU are read out; participants stand along an imaginary line in the room, from «I agree» to «I disagree». Then they count off from 1 to 6 to form six groups.",
      st1: "«The EU has little / a lot to do with my life.»",
      st2: "«Solidarity within the EU is important — but it comes at a high cost.»",
      st3: "«The EU must prioritise its own interests more.»",
      ag2_time: "10 min",
      ag3_title: "Video: the values of the EU",
      ag3_text: "A short video introduces the core values of the European Union.",
      ag3_time: "3 min",
      ag4_title: "Discussion rounds on the values",
      ag4_text: "Each of the six groups receives a value card with a guiding question and talks about it for 3–4 minutes; then the cards move on clockwise, until every group has discussed all six values. A final reflection follows in plenary.",
      ag4_time: "about 25 min",
      ag5_title: "Presentation: the goals of the EU",
      ag5_text: "A short presentation explains the EU's goals in six thematic areas.",
      ag5_time: "10 min",
      ag6_title: "Board game «Goal Game»",
      ag6_text: "In groups of 4–5, participants answer knowledge questions and discuss open questions, moving the pieces of the six EU goals forward.",
      ag6_time: "30 min",
      ag7_title: "Closing round",
      ag7_text: "One question for everyone, with a short answer and no discussion: «What have you learnt?»",
      ag7_time: "5 min",
      sec_video: "Video: the Values of the EU",
      video_lead: "The video shown in the workshop to introduce the values of the European Union.",
      video_lang: "The video is available in German and English: it plays in German if the page is in German, otherwise in English.",
      sec_values: "The Six Values (Value Cards)",
      values_lead: "The six cards discussed by the groups in the «values café».",
      v1_t: "Human dignity",
      v1_d: "The dignity of every human being is inviolable.",
      v2_t: "Freedom",
      v2_d: "Freedom of expression, freedom of movement, personal autonomy and protection against arbitrary state action.",
      v3_t: "Democracy",
      v3_d: "Political decisions are based on elections, participation in decision-making and a diversity of opinion.",
      v4_t: "Equality",
      v4_d: "All people are equal before the law. Discrimination is prohibited.",
      v5_t: "Rule of law",
      v5_d: "Government action is bound by law. Independent courts protect civil liberties.",
      v6_t: "Human rights",
      v6_d: "Protection of a person's fundamental rights: the right to life, freedom of expression, freedom of religion, protection from persecution.",
      values_question: "Guiding question for every card: «How and where do we actually encounter this value in our everyday lives?»",
      sec_goals: "The Six Goals of the EU",
      goals_lead: "The six thematic areas of the presentation — they are also the six coloured paths of the board game.",
      g1_t: "Protecting freedom and human rights",
      g1_d: "Human rights are universal: freedom from discrimination, protection of minorities, freedom of speech, religion, artistic expression and occupation.",
      g2_t: "Strengthening democracy",
      g2_d: "EU citizens can express their opinions freely, elect their representatives and have a say in their future. The «Defence of Democracy» package protects democratic life and promotes citizen participation.",
      g3_t: "Living in solidarity",
      g3_d: "Economic, social and territorial cohesion among Member States. Examples from the four partner countries: Latvia sheltered 43,000 people from Ukraine; Poland received EU funds after floods in the Carpathian foothills; Italy contributes to the structural funds for poorer regions; Germany is the largest net contributor.",
      g4_t: "Climate protection and sustainability",
      g4_d: "Meeting today's needs without compromising future generations: climate neutrality by 2050, environmental protection, organic farming and renewable energy.",
      g5_t: "Promoting peace and security",
      g5_d: "«The EU is a peace project»: in 2012 it received the Nobel Peace Prize for peace and reconciliation, democracy and human rights.",
      g6_t: "Economy and the single market",
      g6_d: "Free movement of goods, people, services and capital; a competitive, stable and innovative economy; better living conditions, fewer inequalities and stronger workers' rights.",
      sec_game: "The Board Game «Goal Game»",
      game_lead: "In groups of 4–5. Each group has a board with the six EU goals, one coloured piece per goal and a pile of cards. One card is drawn per round.",
      game1_t: "Knowledge cards (29)",
      game1_d: "The group answers the question together; the answer is printed in small type at the bottom of the card. If it is correct, the piece of that goal moves forward one step. Some questions are light-hearted, to liven up the game.",
      game2_t: "Discussion cards (13)",
      game2_d: "The group discusses the topic for 2 minutes, timed with an hourglass or a stopwatch, then reads the input at the bottom of the card. The piece moves forward one step.",
      game3_t: "End of the game",
      game3_d: "The game ends after 30 minutes, or as soon as all six goals have reached the last step.",
      sec_photos: "The Materials in Pictures",
      photos_lead: "The original materials made by the German team (in German). Tap a photo to enlarge it.",
      ph1: "The six value cards with the guiding question",
      ph2: "The «Goal Game» board, the cards and the hourglass",
      ph3: "Game cards: one colour for each goal",
      sec_downloads: "Materials to Download",
      dl_lead: "The original materials prepared by the German team, ready to print and use. For each item, use the buttons to open the file in German (DE) or English (EN).",
      dl_note: "Note: the files are the German team's originals, so they exist only in German (DE) and English (EN). The page itself is translated into all languages.",
      dl_g_facilitators: "For facilitators",
      dl_scenario: "Scenario template",
      dl_scenario_d: "The complete outline of the workshop: objectives, activities and timing.",
      dl_presentation: "Presentation «Goals of the EU»",
      dl_presentation_d: "The slides on the six goals of the EU.",
      dl_questions: "Card with the three statements",
      dl_questions_d: "The statements for the opening activity «Take a position».",
      dl_values: "Value cards",
      dl_values_d: "The six value cards and the guiding question, to print.",
      dl_video: "Video «Values of the EU»",
      dl_video_d: "The video to show during the workshop (MP4).",
      dl_g_game: "The game «Goal Game»",
      dl_board: "Game board",
      dl_board_d: "The board with the six coloured paths of the EU goals.",
      dl_rules: "Game instructions",
      dl_rules_d: "Preparation, how to play and end of the game.",
      dl_cards: "Knowledge and discussion cards",
      dl_cards_d: "All the cards of the six goals in one file: freedom and human rights, democracy, solidarity, climate, peace and security, economy.",
      footer_text: "Erasmus+ Project · Workshop 3 (Germany) — We in Europe: the EU's Goals and Values in Turbulent Times",
      footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
    },
    it: {
      skip_link: "Salta al contenuto",
      btn_home_aria: "Torna alla Home",
      lang_switcher_aria: "Seleziona lingua",
      flag_aria: "Bandiera tedesca",
      btn_top: "Su",
      page_title: "Noi in Europa — Obiettivi e valori dell’UE in tempi turbolenti · ECBL Erasmus+",
      hero_eyebrow: "Germania · Workshop 3",
      hero_title: "Noi in Europa — Obiettivi e valori dell’UE in tempi turbolenti",
      hero_subtitle: "Un «caffè dei valori»: i partecipanti scoprono i valori e gli obiettivi dell’UE e li collegano alla propria vita, con un video, giri di discussione e il gioco da tavolo «Goal Game».",
      hero_authors: "Autrici: <strong>Corinna Benthack, Tabea Lotz, Christiane Meyer, Carmen Ripper</strong>",
      hero_pill_audience_label: "Pubblico",
      info_audience_value: "Over 50",
      info_duration_label: "Durata",
      info_duration_value: "90 minuti",
      info_type_label: "Tipo",
      info_type_value: "Laboratorio + gioco da tavolo",
      sec_about: "Presentazione",
      about_text: "I partecipanti conoscono i valori fondamentali e gli obiettivi dell’Unione Europea e capiscono che cosa significano nella vita di tutti i giorni. Scoprono anche che questi obiettivi possono entrare in conflitto tra loro e che gli Stati membri non li vedono sempre allo stesso modo.",
      sec_agenda: "Come si svolge il laboratorio",
      ag1_title: "Benvenuto",
      ag1_text: "Presentazione del progetto «Europe Can Be Liked» e del perché valori e obiettivi sono importanti.",
      ag1_time: "5 min",
      ag2_title: "Prendi posizione",
      ag2_text: "Si leggono tre affermazioni sull’UE; i partecipanti si dispongono lungo una linea immaginaria nella stanza, da «sono d’accordo» a «non sono d’accordo». Poi si contano da 1 a 6 per formare sei gruppi.",
      st1: "«L’UE ha poco / molto a che fare con la mia vita.»",
      st2: "«La solidarietà nell’UE è importante, ma costa molto.»",
      st3: "«L’UE deve mettere di più al primo posto i propri interessi.»",
      ag2_time: "10 min",
      ag3_title: "Video: i valori dell’UE",
      ag3_text: "Un breve video presenta i valori fondamentali dell’Unione Europea.",
      ag3_time: "3 min",
      ag4_title: "Giri di discussione sui valori",
      ag4_text: "Ognuno dei sei gruppi riceve una carta con un valore e una domanda guida e ne parla per 3–4 minuti; poi le carte passano al gruppo successivo in senso orario, finché ogni gruppo ha discusso tutti e sei i valori. Segue una riflessione finale tutti insieme.",
      ag4_time: "circa 25 min",
      ag5_title: "Presentazione: gli obiettivi dell’UE",
      ag5_text: "Una breve presentazione spiega gli obiettivi dell’UE in sei aree tematiche.",
      ag5_time: "10 min",
      ag6_title: "Gioco da tavolo «Goal Game»",
      ag6_text: "In gruppi di 4–5 persone, i partecipanti rispondono a domande di conoscenza e discutono domande aperte, facendo avanzare le pedine dei sei obiettivi dell’UE.",
      ag6_time: "30 min",
      ag7_title: "Giro conclusivo",
      ag7_text: "Una domanda per tutti, con una risposta breve e senza discussione: «Che cosa hai imparato?»",
      ag7_time: "5 min",
      sec_video: "Video: i valori dell’UE",
      video_lead: "Il video mostrato nel laboratorio per presentare i valori dell’Unione Europea.",
      video_lang: "Il video esiste in tedesco e in inglese: si vede in tedesco se la pagina è in tedesco, altrimenti in inglese.",
      sec_values: "I sei valori (carte dei valori)",
      values_lead: "Le sei carte discusse dai gruppi nel «caffè dei valori».",
      v1_t: "Dignità umana",
      v1_d: "La dignità di ogni essere umano è inviolabile.",
      v2_t: "Libertà",
      v2_d: "Libertà di espressione, libertà di movimento, autodeterminazione personale e protezione contro l’arbitrio dello Stato.",
      v3_t: "Democrazia",
      v3_d: "Le decisioni politiche si basano su elezioni, partecipazione alle decisioni e pluralità di opinioni.",
      v4_t: "Uguaglianza",
      v4_d: "Tutte le persone sono uguali davanti alla legge. La discriminazione è vietata.",
      v5_t: "Stato di diritto",
      v5_d: "L’azione dello Stato è vincolata dalla legge. Tribunali indipendenti proteggono i diritti dei cittadini.",
      v6_t: "Diritti umani",
      v6_d: "Protezione dei diritti fondamentali della persona: diritto alla vita, libertà di espressione, libertà religiosa, protezione dalla persecuzione.",
      values_question: "Domanda guida per ogni carta: «Come e dove incontriamo concretamente questo valore nella nostra vita quotidiana?»",
      sec_goals: "I sei obiettivi dell’UE",
      goals_lead: "Le sei aree tematiche della presentazione: sono anche i sei percorsi colorati del gioco da tavolo.",
      g1_t: "Proteggere la libertà e i diritti umani",
      g1_d: "I diritti umani sono universali: libertà dalla discriminazione, tutela delle minoranze, libertà di parola, di religione, di espressione artistica e di professione.",
      g2_t: "Rafforzare la democrazia",
      g2_d: "I cittadini dell’UE possono esprimere liberamente le proprie opinioni, eleggere i propri rappresentanti e decidere del proprio futuro. Il «Pacchetto per la difesa della democrazia» protegge la vita democratica e favorisce la partecipazione dei cittadini.",
      g3_t: "Vivere la solidarietà",
      g3_d: "Coesione economica, sociale e territoriale tra gli Stati membri. Esempi dai quattro paesi partner: la Lettonia ha accolto 43.000 persone dall’Ucraina; la Polonia ha ricevuto fondi UE dopo le alluvioni ai piedi dei Carpazi; l’Italia contribuisce ai fondi strutturali per le regioni più povere; la Germania è il maggiore contribuente netto.",
      g4_t: "Proteggere il clima e agire in modo sostenibile",
      g4_d: "Soddisfare i bisogni di oggi senza togliere nulla alle generazioni future: neutralità climatica entro il 2050, tutela dell’ambiente, agricoltura biologica ed energie rinnovabili.",
      g5_t: "Promuovere la pace e la sicurezza",
      g5_d: "«L’UE è un progetto di pace»: nel 2012 ha ricevuto il Premio Nobel per la pace per la pace e la riconciliazione, la democrazia e i diritti umani.",
      g6_t: "Economia e mercato unico",
      g6_d: "Libera circolazione di merci, persone, servizi e capitali; un’economia competitiva, stabile e innovativa; migliori condizioni di vita, meno disuguaglianze e più diritti per i lavoratori.",
      sec_game: "Il gioco da tavolo «Goal Game»",
      game_lead: "In gruppi di 4–5 persone. Ogni gruppo ha un tabellone con i sei obiettivi dell’UE, una pedina colorata per ogni obiettivo e un mazzo di carte. A ogni turno si pesca una carta.",
      game1_t: "Carte di conoscenza (29)",
      game1_d: "Il gruppo risponde insieme alla domanda; la risposta è scritta in piccolo in fondo alla carta. Se è giusta, la pedina di quell’obiettivo avanza di un passo. Alcune domande sono scherzose, per rendere il gioco più vivace.",
      game2_t: "Carte di discussione (13)",
      game2_d: "Il gruppo discute l’argomento per 2 minuti, misurati con una clessidra o un cronometro, poi legge lo spunto in fondo alla carta. La pedina avanza di un passo.",
      game3_t: "Fine del gioco",
      game3_d: "Il gioco finisce dopo 30 minuti, oppure quando tutti e sei gli obiettivi sono arrivati all’ultimo passo.",
      sec_photos: "I materiali in foto",
      photos_lead: "I materiali originali realizzati dal team tedesco (in tedesco). Tocca una foto per ingrandirla.",
      ph1: "Le sei carte dei valori con la domanda guida",
      ph2: "Il tabellone del «Goal Game», le carte e la clessidra",
      ph3: "Le carte del gioco: un colore per ogni obiettivo",
      sec_downloads: "Materiali da scaricare",
      dl_lead: "I materiali originali preparati dal team tedesco, pronti da stampare e usare. Per ogni voce, usa i pulsanti per aprire il file in tedesco (DE) o in inglese (EN).",
      dl_note: "Nota: i file sono gli originali del team tedesco, quindi esistono solo in tedesco (DE) e inglese (EN). La pagina, invece, è tradotta in tutte le lingue.",
      dl_g_facilitators: "Per i conduttori",
      dl_scenario: "Scenario del laboratorio",
      dl_scenario_d: "Lo schema completo del laboratorio: obiettivi, attività e tempi.",
      dl_presentation: "Presentazione «Obiettivi dell’UE»",
      dl_presentation_d: "Le diapositive sui sei obiettivi dell’UE.",
      dl_questions: "Carta con le tre affermazioni",
      dl_questions_d: "Le affermazioni per l’attività iniziale «Prendi posizione».",
      dl_values: "Carte dei valori",
      dl_values_d: "Le sei carte dei valori e la domanda guida, da stampare.",
      dl_video: "Video «I valori dell’UE»",
      dl_video_d: "Il video da mostrare durante il laboratorio (MP4).",
      dl_g_game: "Il gioco «Goal Game»",
      dl_board: "Tabellone",
      dl_board_d: "Il tabellone con i sei percorsi colorati degli obiettivi dell’UE.",
      dl_rules: "Istruzioni del gioco",
      dl_rules_d: "Preparazione, come si gioca e fine del gioco.",
      dl_cards: "Carte di conoscenza e di discussione",
      dl_cards_d: "Tutte le carte dei sei obiettivi in un unico file: libertà e diritti umani, democrazia, solidarietà, clima, pace e sicurezza, economia.",
      footer_text: "Progetto Erasmus+ · Workshop 3 (Germania) — Noi in Europa: obiettivi e valori dell’UE in tempi turbolenti",
      footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
    },
    pl: {
      skip_link: "Przejdź do treści",
      btn_home_aria: "Powrót do strony głównej",
      lang_switcher_aria: "Wybierz język",
      flag_aria: "Flaga Niemiec",
      btn_top: "Góra",
      page_title: "My w Europie — cele i wartości UE w burzliwych czasach · ECBL Erasmus+",
      hero_eyebrow: "Niemcy · Warsztat 3",
      hero_title: "My w Europie — cele i wartości UE w burzliwych czasach",
      hero_subtitle: "«Kawiarnia wartości»: uczestnicy poznają wartości i cele UE i odnoszą je do własnego życia — dzięki filmowi, rundom dyskusji i grze planszowej «Goal Game».",
      hero_authors: "Autorki: <strong>Corinna Benthack, Tabea Lotz, Christiane Meyer, Carmen Ripper</strong>",
      hero_pill_audience_label: "Odbiorcy",
      info_audience_value: "50+",
      info_duration_label: "Czas trwania",
      info_duration_value: "90 minut",
      info_type_label: "Typ",
      info_type_value: "Warsztat + gra planszowa",
      sec_about: "O warsztacie",
      about_text: "Uczestnicy poznają podstawowe wartości i cele Unii Europejskiej oraz rozumieją, co oznaczają one w codziennym życiu. Odkrywają też, że cele te mogą być ze sobą sprzeczne, a państwa członkowskie nie zawsze postrzegają je tak samo.",
      sec_agenda: "Jak przebiega warsztat",
      ag1_title: "Powitanie",
      ag1_text: "Przedstawienie projektu «Europe Can Be Liked» i wyjaśnienie, dlaczego wartości i cele są ważne.",
      ag1_time: "5 min",
      ag2_title: "Zajmij stanowisko",
      ag2_text: "Odczytuje się trzy stwierdzenia o UE; uczestnicy ustawiają się wzdłuż wyobrażonej linii w sali, od «zgadzam się» do «nie zgadzam się». Następnie odliczają od 1 do 6, tworząc sześć grup.",
      st1: "«UE ma niewiele / wiele wspólnego z moim życiem.»",
      st2: "«Solidarność w UE jest ważna — ale dużo kosztuje.»",
      st3: "«UE musi bardziej stawiać na pierwszym miejscu własne interesy.»",
      ag2_time: "10 min",
      ag3_title: "Film: wartości UE",
      ag3_text: "Krótki film przedstawia podstawowe wartości Unii Europejskiej.",
      ag3_time: "3 min",
      ag4_title: "Rundy dyskusji o wartościach",
      ag4_text: "Każda z sześciu grup otrzymuje kartę z wartością i pytaniem przewodnim i rozmawia o niej przez 3–4 minuty; potem karty przechodzą zgodnie z ruchem wskazówek zegara, aż każda grupa omówi wszystkie sześć wartości. Na koniec wspólna refleksja.",
      ag4_time: "ok. 25 min",
      ag5_title: "Prezentacja: cele UE",
      ag5_text: "Krótka prezentacja wyjaśnia cele UE w sześciu obszarach tematycznych.",
      ag5_time: "10 min",
      ag6_title: "Gra planszowa «Goal Game»",
      ag6_text: "W grupach 4–5 osób uczestnicy odpowiadają na pytania sprawdzające wiedzę i dyskutują o pytaniach otwartych, przesuwając pionki sześciu celów UE.",
      ag6_time: "30 min",
      ag7_title: "Runda końcowa",
      ag7_text: "Jedno pytanie do wszystkich, krótka odpowiedź bez dyskusji: «Czego się nauczyłeś/nauczyłaś?»",
      ag7_time: "5 min",
      sec_video: "Film: wartości UE",
      video_lead: "Film pokazywany podczas warsztatu, przedstawiający wartości Unii Europejskiej.",
      video_lang: "Film jest dostępny po niemiecku i angielsku: odtwarza się po niemiecku, jeśli strona jest po niemiecku, w przeciwnym razie po angielsku.",
      sec_values: "Sześć wartości (karty wartości)",
      values_lead: "Sześć kart omawianych przez grupy w «kawiarni wartości».",
      v1_t: "Godność człowieka",
      v1_d: "Godność każdego człowieka jest nienaruszalna.",
      v2_t: "Wolność",
      v2_d: "Wolność wypowiedzi, swoboda przemieszczania się, autonomia osobista i ochrona przed samowolą państwa.",
      v3_t: "Demokracja",
      v3_d: "Decyzje polityczne opierają się na wyborach, współdecydowaniu i różnorodności opinii.",
      v4_t: "Równość",
      v4_d: "Wszyscy ludzie są równi wobec prawa. Dyskryminacja jest zakazana.",
      v5_t: "Praworządność",
      v5_d: "Działania państwa są związane prawem. Niezależne sądy chronią prawa obywatelskie.",
      v6_t: "Prawa człowieka",
      v6_d: "Ochrona podstawowych praw człowieka: prawo do życia, wolność wypowiedzi, wolność wyznania, ochrona przed prześladowaniem.",
      values_question: "Pytanie przewodnie do każdej karty: «Jak i gdzie konkretnie spotykamy tę wartość w naszym codziennym życiu?»",
      sec_goals: "Sześć celów UE",
      goals_lead: "Sześć obszarów tematycznych prezentacji — to także sześć kolorowych ścieżek gry planszowej.",
      g1_t: "Ochrona wolności i praw człowieka",
      g1_d: "Prawa człowieka są uniwersalne: wolność od dyskryminacji, ochrona mniejszości, wolność słowa, wyznania, twórczości artystycznej i wykonywania zawodu.",
      g2_t: "Wzmacnianie demokracji",
      g2_d: "Obywatele UE mogą swobodnie wyrażać opinie, wybierać swoich przedstawicieli i współdecydować o przyszłości. «Pakiet na rzecz obrony demokracji» chroni życie demokratyczne i wspiera udział obywateli.",
      g3_t: "Życie w solidarności",
      g3_d: "Spójność gospodarcza, społeczna i terytorialna między państwami członkowskimi. Przykłady z czterech krajów partnerskich: Łotwa przyjęła 43 000 osób z Ukrainy; Polska otrzymała fundusze UE po powodzi na Pogórzu Karpackim; Włochy wpłacają do funduszy strukturalnych dla biedniejszych regionów; Niemcy są największym płatnikiem netto.",
      g4_t: "Ochrona klimatu i zrównoważone działanie",
      g4_d: "Zaspokajanie dzisiejszych potrzeb bez szkody dla przyszłych pokoleń: neutralność klimatyczna do 2050 r., ochrona środowiska, rolnictwo ekologiczne i energia odnawialna.",
      g5_t: "Wspieranie pokoju i bezpieczeństwa",
      g5_d: "«UE to projekt pokojowy»: w 2012 r. otrzymała Pokojową Nagrodę Nobla za pokój i pojednanie, demokrację i prawa człowieka.",
      g6_t: "Gospodarka i jednolity rynek",
      g6_d: "Swobodny przepływ towarów, osób, usług i kapitału; konkurencyjna, stabilna i innowacyjna gospodarka; lepsze warunki życia, mniej nierówności i silniejsze prawa pracowników.",
      sec_game: "Gra planszowa «Goal Game»",
      game_lead: "W grupach 4–5 osób. Każda grupa ma planszę z sześcioma celami UE, jeden kolorowy pionek na każdy cel i stos kart. W każdej rundzie ciągnie się jedną kartę.",
      game1_t: "Karty wiedzy (29)",
      game1_d: "Grupa wspólnie odpowiada na pytanie; odpowiedź jest wydrukowana małym drukiem na dole karty. Jeśli jest poprawna, pionek danego celu przesuwa się o jedno pole. Niektóre pytania są żartobliwe, aby ożywić grę.",
      game2_t: "Karty dyskusji (13)",
      game2_d: "Grupa dyskutuje na dany temat przez 2 minuty, mierzone klepsydrą lub stoperem, a potem czyta wskazówkę na dole karty. Pionek przesuwa się o jedno pole.",
      game3_t: "Koniec gry",
      game3_d: "Gra kończy się po 30 minutach albo gdy wszystkie sześć celów dotrze do ostatniego pola.",
      sec_photos: "Materiały na zdjęciach",
      photos_lead: "Oryginalne materiały przygotowane przez zespół niemiecki (po niemiecku). Dotknij zdjęcia, aby je powiększyć.",
      ph1: "Sześć kart wartości z pytaniem przewodnim",
      ph2: "Plansza «Goal Game», karty i klepsydra",
      ph3: "Karty gry: jeden kolor dla każdego celu",
      sec_downloads: "Materiały do pobrania",
      dl_lead: "Oryginalne materiały przygotowane przez zespół niemiecki, gotowe do druku i użycia. Przy każdej pozycji użyj przycisków, aby otworzyć plik po niemiecku (DE) lub angielsku (EN).",
      dl_note: "Uwaga: pliki to oryginały zespołu niemieckiego, dlatego istnieją tylko po niemiecku (DE) i angielsku (EN). Sama strona jest przetłumaczona na wszystkie języki.",
      dl_g_facilitators: "Dla prowadzących",
      dl_scenario: "Scenariusz warsztatu",
      dl_scenario_d: "Pełny plan warsztatu: cele, działania i czas.",
      dl_presentation: "Prezentacja «Cele UE»",
      dl_presentation_d: "Slajdy o sześciu celach UE.",
      dl_questions: "Karta z trzema stwierdzeniami",
      dl_questions_d: "Stwierdzenia do ćwiczenia otwierającego «Zajmij stanowisko».",
      dl_values: "Karty wartości",
      dl_values_d: "Sześć kart wartości i pytanie przewodnie, do wydruku.",
      dl_video: "Film «Wartości UE»",
      dl_video_d: "Film do pokazania podczas warsztatu (MP4).",
      dl_g_game: "Gra «Goal Game»",
      dl_board: "Plansza",
      dl_board_d: "Plansza z sześcioma kolorowymi ścieżkami celów UE.",
      dl_rules: "Instrukcja gry",
      dl_rules_d: "Przygotowanie, przebieg i koniec gry.",
      dl_cards: "Karty wiedzy i dyskusji",
      dl_cards_d: "Wszystkie karty sześciu celów w jednym pliku: wolność i prawa człowieka, demokracja, solidarność, klimat, pokój i bezpieczeństwo, gospodarka.",
      footer_text: "Projekt Erasmus+ · Warsztat 3 (Niemcy) — My w Europie: cele i wartości UE w burzliwych czasach",
      footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
    },
    de: {
      skip_link: "Zum Inhalt springen",
      btn_home_aria: "Zurück zur Startseite",
      lang_switcher_aria: "Sprache wählen",
      flag_aria: "Deutsche Flagge",
      btn_top: "Nach oben",
      page_title: "Wir in Europa — Ziele und Werte der EU in bewegten Zeiten · ECBL Erasmus+",
      hero_eyebrow: "Deutschland · Workshop 3",
      hero_title: "Wir in Europa — Ziele und Werte der EU in bewegten Zeiten",
      hero_subtitle: "Ein «Wertecafé»: Die Teilnehmenden lernen die Werte und Ziele der EU kennen und stellen einen persönlichen Bezug dazu her — mit einem Video, Gesprächsrunden und dem Brettspiel «Ziel-Spiel».",
      hero_authors: "Autorinnen: <strong>Corinna Benthack, Tabea Lotz, Christiane Meyer, Carmen Ripper</strong>",
      hero_pill_audience_label: "Zielgruppe",
      info_audience_value: "Ab 50 Jahren",
      info_duration_label: "Dauer",
      info_duration_value: "90 Minuten",
      info_type_label: "Art",
      info_type_value: "Workshop + Brettspiel",
      sec_about: "Über den Workshop",
      about_text: "Die Teilnehmenden lernen die grundlegenden Werte und die Ziele der Europäischen Union kennen und verstehen, was sie im Alltag bedeuten. Sie erfahren auch, dass diese Ziele miteinander in Konflikt geraten können und dass die Mitgliedstaaten sie nicht immer gleich sehen.",
      sec_agenda: "Ablauf des Workshops",
      ag1_title: "Begrüßung",
      ag1_text: "Vorstellung des Projekts «Europe Can Be Liked» und warum Werte und Ziele wichtig sind.",
      ag1_time: "5 Min.",
      ag2_title: "Position beziehen",
      ag2_text: "Drei Aussagen über die EU werden vorgelesen; die Teilnehmenden stellen sich entlang einer gedachten Linie im Raum auf, von «stimme zu» bis «stimme nicht zu». Danach wird von 1 bis 6 abgezählt, um sechs Gruppen zu bilden.",
      st1: "«Die EU hat wenig / viel mit meinem Leben zu tun.»",
      st2: "«Solidarität in der EU ist wichtig – kostet aber viel.»",
      st3: "«Die EU muss die eigenen Interessen mehr in den Vordergrund stellen.»",
      ag2_time: "10 Min.",
      ag3_title: "Video: die Werte der EU",
      ag3_text: "Ein kurzes Video stellt die Grundwerte der Europäischen Union vor.",
      ag3_time: "3 Min.",
      ag4_title: "Gesprächsrunden zu den Werten",
      ag4_text: "Jede der sechs Gruppen erhält eine Wertekarte mit einer Leitfrage und spricht 3–4 Minuten darüber; dann wandern die Karten im Uhrzeigersinn weiter, bis jede Gruppe alle sechs Werte besprochen hat. Zum Schluss gemeinsame Reflexion im Plenum.",
      ag4_time: "ca. 25 Min.",
      ag5_title: "Präsentation: die Ziele der EU",
      ag5_text: "Eine kurze Präsentation erklärt die Ziele der EU in sechs Themenbereichen.",
      ag5_time: "10 Min.",
      ag6_title: "Brettspiel «Ziel-Spiel»",
      ag6_text: "In Gruppen von 4–5 Personen beantworten die Teilnehmenden Wissensfragen und diskutieren offene Fragen; dabei rücken die Spielfiguren der sechs EU-Ziele vor.",
      ag6_time: "30 Min.",
      ag7_title: "Abschlussrunde",
      ag7_text: "Eine Frage an alle, kurze Antwort ohne Diskussion: «Was habe ich gelernt?»",
      ag7_time: "5 Min.",
      sec_video: "Video: die Werte der EU",
      video_lead: "Das Video, das im Workshop zur Einführung in die Werte der Europäischen Union gezeigt wird.",
      video_lang: "Das Video gibt es auf Deutsch und Englisch: Es läuft auf Deutsch, wenn die Seite auf Deutsch ist, sonst auf Englisch.",
      sec_values: "Die sechs Werte (Wertekarten)",
      values_lead: "Die sechs Karten, über die die Gruppen im «Wertecafé» sprechen.",
      v1_t: "Menschenwürde",
      v1_d: "Die Würde jedes Menschen ist unantastbar.",
      v2_t: "Freiheit",
      v2_d: "Meinungsfreiheit, Reisefreiheit, persönliche Selbstbestimmung und Schutz vor staatlicher Willkür.",
      v3_t: "Demokratie",
      v3_d: "Politische Entscheidungen beruhen auf Wahlen, Mitbestimmung und Meinungsvielfalt.",
      v4_t: "Gleichheit",
      v4_d: "Alle Menschen sind vor dem Gesetz gleich. Diskriminierung ist verboten.",
      v5_t: "Rechtsstaatlichkeit",
      v5_d: "Staatliches Handeln ist an Gesetze gebunden. Unabhängige Gerichte schützen Bürgerrechte.",
      v6_t: "Menschenrechte",
      v6_d: "Schutz grundlegender Rechte eines Menschen: Recht auf Leben, Meinungsfreiheit, Glaubensfreiheit, Schutz vor Verfolgung.",
      values_question: "Leitfrage zu jeder Karte: «Wie und wo begegnet uns der Wert konkret in unserem Alltag?»",
      sec_goals: "Die sechs Ziele der EU",
      goals_lead: "Die sechs Themenbereiche der Präsentation — sie sind zugleich die sechs farbigen Wege des Brettspiels.",
      g1_t: "Freiheit und Menschenrechte schützen",
      g1_d: "Menschenrechte sind universell: Leben frei von Diskriminierung, Schutz von Minderheiten, Meinungs-, Religions-, Kunst- und Berufsfreiheit.",
      g2_t: "Demokratie stärken",
      g2_d: "Bürgerinnen und Bürger der EU dürfen ihre Meinung frei äußern, ihre politische Vertretung wählen und über ihre Zukunft mitentscheiden. Das «Paket zur Verteidigung der Demokratie» schützt das demokratische Leben und fördert die Beteiligung.",
      g3_t: "Solidarität leben",
      g3_d: "Wirtschaftlicher, sozialer und territorialer Zusammenhalt der Mitgliedstaaten. Beispiele aus den vier Partnerländern: Lettland nahm 43.000 Menschen aus der Ukraine auf; Polen erhielt nach den Überschwemmungen im Karpatenvorland EU-Mittel; Italien zahlt in die Strukturfonds für ärmere Regionen ein; Deutschland ist das größte Geberland.",
      g4_t: "Klimaschutz und nachhaltig handeln",
      g4_d: "Bedürfnisse der Gegenwart nicht auf Kosten zukünftiger Generationen befriedigen: Treibhausgasneutralität bis 2050, Umweltschutz, ökologische Landwirtschaft und erneuerbare Energien.",
      g5_t: "Frieden und Sicherheit fördern",
      g5_d: "«Die EU ist ein Friedensprojekt»: 2012 erhielt sie den Friedensnobelpreis für Frieden und Versöhnung, Demokratie und Menschenrechte.",
      g6_t: "Wirtschaft und Binnenmarkt fördern",
      g6_d: "Freier Verkehr von Waren, Personen, Dienstleistungen und Kapital; eine wettbewerbsfähige, stabile und innovative Wirtschaft; bessere Lebensbedingungen, weniger Ungleichheit und stärkere Arbeitnehmerrechte.",
      sec_game: "Das Brettspiel «Ziel-Spiel»",
      game_lead: "In Gruppen von 4–5 Personen. Jede Gruppe hat ein Spielbrett mit den sechs EU-Zielen, eine farbige Spielfigur pro Ziel und einen Kartenstapel. In jeder Runde wird eine Karte gezogen.",
      game1_t: "Wissenskarten (29)",
      game1_d: "Die Gruppe beantwortet die Frage gemeinsam; die Antwort steht klein unten auf der Karte. Ist sie richtig, rückt die Figur dieses Ziels ein Feld vor. Einige Fragen sind bewusst humorvoll und lockern das Spiel auf.",
      game2_t: "Austauschkarten (13)",
      game2_d: "Die Gruppe diskutiert das Thema 2 Minuten lang, gemessen mit Sanduhr oder Stoppuhr, und liest danach den Impuls unten auf der Karte. Die Figur rückt ein Feld vor.",
      game3_t: "Spielende",
      game3_d: "Das Spiel endet nach 30 Minuten oder sobald alle sechs Ziele das letzte Feld erreicht haben.",
      sec_photos: "Die Materialien im Bild",
      photos_lead: "Die Originalmaterialien des deutschen Teams. Tippen Sie auf ein Foto, um es zu vergrößern.",
      ph1: "Die sechs Wertekarten mit der Leitfrage",
      ph2: "Das Spielbrett des «Ziel-Spiels», die Karten und die Sanduhr",
      ph3: "Spielkarten: eine Farbe für jedes Ziel",
      sec_downloads: "Materialien zum Herunterladen",
      dl_lead: "Die vom deutschen Team erstellten Originalmaterialien, druck- und einsatzbereit. Bei jedem Eintrag öffnen Sie die Datei über die Schaltflächen auf Deutsch (DE) oder Englisch (EN).",
      dl_note: "Hinweis: Die Dateien sind die Originale des deutschen Teams und liegen daher nur auf Deutsch (DE) und Englisch (EN) vor. Die Seite selbst ist in alle Sprachen übersetzt.",
      dl_g_facilitators: "Für die Moderation",
      dl_scenario: "Szenario-Vorlage",
      dl_scenario_d: "Der vollständige Ablaufplan des Workshops: Ziele, Aktivitäten und Zeiten.",
      dl_presentation: "Präsentation «Ziele der EU»",
      dl_presentation_d: "Die Folien zu den sechs Zielen der EU.",
      dl_questions: "Karte mit den drei Aussagen",
      dl_questions_d: "Die Aussagen für die Einstiegsübung «Position beziehen».",
      dl_values: "Wertekarten",
      dl_values_d: "Die sechs Wertekarten und die Leitfrage, zum Ausdrucken.",
      dl_video: "Video «Werte der EU»",
      dl_video_d: "Das Video für den Workshop (MP4).",
      dl_g_game: "Das «Ziel-Spiel»",
      dl_board: "Spielbrett",
      dl_board_d: "Das Spielbrett mit den sechs farbigen Wegen der EU-Ziele.",
      dl_rules: "Spielanleitung",
      dl_rules_d: "Vorbereitung, Spielablauf und Spielende.",
      dl_cards: "Wissens- und Austauschkarten",
      dl_cards_d: "Alle Karten der sechs Ziele in einer Datei: Freiheit und Menschenrechte, Demokratie, Solidarität, Klima, Frieden und Sicherheit, Wirtschaft.",
      footer_text: "Erasmus+-Projekt · Workshop 3 (Deutschland) — Wir in Europa: Ziele und Werte der EU in bewegten Zeiten",
      footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
    },
    lv: {
      skip_link: "Pāriet uz saturu",
      btn_home_aria: "Atpakaļ uz sākumlapu",
      lang_switcher_aria: "Izvēlēties valodu",
      flag_aria: "Vācijas karogs",
      btn_top: "Uz augšu",
      page_title: "Mēs Eiropā — ES mērķi un vērtības nemierīgos laikos · ECBL Erasmus+",
      hero_eyebrow: "Vācija · 3. seminārs",
      hero_title: "Mēs Eiropā — ES mērķi un vērtības nemierīgos laikos",
      hero_subtitle: "«Vērtību kafejnīca»: dalībnieki iepazīst ES vērtības un mērķus un saista tos ar savu dzīvi — ar video, diskusiju kārtām un galda spēli «Goal Game».",
      hero_authors: "Autores: <strong>Corinna Benthack, Tabea Lotz, Christiane Meyer, Carmen Ripper</strong>",
      hero_pill_audience_label: "Auditorija",
      info_audience_value: "50+",
      info_duration_label: "Ilgums",
      info_duration_value: "90 minūtes",
      info_type_label: "Tips",
      info_type_value: "Seminārs + galda spēle",
      sec_about: "Par semināru",
      about_text: "Dalībnieki iepazīst Eiropas Savienības pamatvērtības un mērķus un saprot, ko tie nozīmē ikdienas dzīvē. Viņi arī uzzina, ka šie mērķi var būt pretrunā cits citam un ka dalībvalstis tos ne vienmēr redz vienādi.",
      sec_agenda: "Kā norisinās seminārs",
      ag1_title: "Sveiciens",
      ag1_text: "Projekta «Europe Can Be Liked» iepazīšana un skaidrojums, kāpēc vērtības un mērķi ir svarīgi.",
      ag1_time: "5 min",
      ag2_title: "Ieņem nostāju",
      ag2_text: "Tiek nolasīti trīs apgalvojumi par ES; dalībnieki nostājas pa iedomātu līniju telpā — no «piekrītu» līdz «nepiekrītu». Pēc tam viņi izskaitās no 1 līdz 6, izveidojot sešas grupas.",
      st1: "«ES maz / daudz saistīta ar manu dzīvi.»",
      st2: "«Solidaritāte ES ir svarīga, taču tā daudz maksā.»",
      st3: "«ES vairāk jāliek priekšplānā savas intereses.»",
      ag2_time: "10 min",
      ag3_title: "Video: ES vērtības",
      ag3_text: "Īss video iepazīstina ar Eiropas Savienības pamatvērtībām.",
      ag3_time: "3 min",
      ag4_title: "Diskusiju kārtas par vērtībām",
      ag4_text: "Katra no sešām grupām saņem vērtības kartīti ar vadošo jautājumu un 3–4 minūtes par to runā; tad kartītes pulksteņrādītāja virzienā pāriet nākamajai grupai, līdz katra grupa ir apspriedusi visas sešas vērtības. Noslēgumā kopīgas pārdomas.",
      ag4_time: "ap 25 min",
      ag5_title: "Prezentācija: ES mērķi",
      ag5_text: "Īsa prezentācija izskaidro ES mērķus sešās tematiskajās jomās.",
      ag5_time: "10 min",
      ag6_title: "Galda spēle «Goal Game»",
      ag6_text: "Grupās pa 4–5 cilvēkiem dalībnieki atbild uz zināšanu jautājumiem un apspriež atvērtus jautājumus, virzot uz priekšu sešu ES mērķu spēles kauliņus.",
      ag6_time: "30 min",
      ag7_title: "Noslēguma kārta",
      ag7_text: "Viens jautājums visiem, īsa atbilde bez diskusijas: «Ko jūs uzzinājāt?»",
      ag7_time: "5 min",
      sec_video: "Video: ES vērtības",
      video_lead: "Video, kas tiek rādīts seminārā, lai iepazīstinātu ar Eiropas Savienības vērtībām.",
      video_lang: "Video ir pieejams vācu un angļu valodā: tas tiek rādīts vāciski, ja lapa ir vācu valodā, citādi — angliski.",
      sec_values: "Sešas vērtības (vērtību kartītes)",
      values_lead: "Sešas kartītes, ko grupas apspriež «vērtību kafejnīcā».",
      v1_t: "Cilvēka cieņa",
      v1_d: "Ikviena cilvēka cieņa ir neaizskarama.",
      v2_t: "Brīvība",
      v2_d: "Vārda brīvība, pārvietošanās brīvība, personiskā pašnoteikšanās un aizsardzība pret valsts patvaļu.",
      v3_t: "Demokrātija",
      v3_d: "Politiskie lēmumi balstās uz vēlēšanām, līdzdalību lēmumu pieņemšanā un viedokļu daudzveidību.",
      v4_t: "Vienlīdzība",
      v4_d: "Visi cilvēki ir vienlīdzīgi likuma priekšā. Diskriminācija ir aizliegta.",
      v5_t: "Tiesiskums",
      v5_d: "Valsts rīcību ierobežo likums. Neatkarīgas tiesas aizsargā pilsoņu tiesības.",
      v6_t: "Cilvēktiesības",
      v6_d: "Cilvēka pamattiesību aizsardzība: tiesības uz dzīvību, vārda brīvība, reliģijas brīvība, aizsardzība pret vajāšanu.",
      values_question: "Vadošais jautājums katrai kartītei: «Kā un kur mēs konkrēti sastopam šo vērtību savā ikdienas dzīvē?»",
      sec_goals: "Seši ES mērķi",
      goals_lead: "Sešas prezentācijas tematiskās jomas — tās ir arī sešas krāsainās galda spēles takas.",
      g1_t: "Brīvības un cilvēktiesību aizsardzība",
      g1_d: "Cilvēktiesības ir universālas: brīvība no diskriminācijas, minoritāšu aizsardzība, vārda, reliģijas, mākslinieciskās izpausmes un nodarbošanās brīvība.",
      g2_t: "Demokrātijas stiprināšana",
      g2_d: "ES pilsoņi var brīvi paust savu viedokli, ievēlēt savus pārstāvjus un līdzlemt par savu nākotni. «Demokrātijas aizsardzības pakete» aizsargā demokrātisko dzīvi un veicina pilsoņu līdzdalību.",
      g3_t: "Dzīvot solidāri",
      g3_d: "Dalībvalstu ekonomiskā, sociālā un teritoriālā kohēzija. Piemēri no četrām partnervalstīm: Latvija uzņēma 43 000 cilvēku no Ukrainas; Polija pēc plūdiem Karpatu priekškalnē saņēma ES līdzekļus; Itālija iemaksā struktūrfondos nabadzīgāku reģionu labā; Vācija ir lielākā neto maksātāja.",
      g4_t: "Klimata aizsardzība un ilgtspējīga rīcība",
      g4_d: "Apmierināt šodienas vajadzības, nekaitējot nākamajām paaudzēm: klimatneitralitāte līdz 2050. gadam, vides aizsardzība, bioloģiskā lauksaimniecība un atjaunojamā enerģija.",
      g5_t: "Miera un drošības veicināšana",
      g5_d: "«ES ir miera projekts»: 2012. gadā tā saņēma Nobela Miera prēmiju par mieru un samierināšanos, demokrātiju un cilvēktiesībām.",
      g6_t: "Ekonomika un vienotais tirgus",
      g6_d: "Preču, personu, pakalpojumu un kapitāla brīva aprite; konkurētspējīga, stabila un inovatīva ekonomika; labāki dzīves apstākļi, mazāka nevienlīdzība un stiprākas darba ņēmēju tiesības.",
      sec_game: "Galda spēle «Goal Game»",
      game_lead: "Grupās pa 4–5 cilvēkiem. Katrai grupai ir spēles laukums ar sešiem ES mērķiem, viens krāsains kauliņš katram mērķim un kāršu kaudze. Katrā kārtā tiek izvilkta viena kārts.",
      game1_t: "Zināšanu kārtis (29)",
      game1_d: "Grupa kopā atbild uz jautājumu; atbilde ir uzdrukāta sīkā drukā kārts apakšā. Ja tā ir pareiza, attiecīgā mērķa kauliņš pavirzās par vienu soli. Daži jautājumi ir jautri, lai atdzīvinātu spēli.",
      game2_t: "Diskusiju kārtis (13)",
      game2_d: "Grupa 2 minūtes apspriež tēmu, laiku mērot ar smilšu pulksteni vai hronometru, un pēc tam izlasa ierosmi kārts apakšā. Kauliņš pavirzās par vienu soli.",
      game3_t: "Spēles beigas",
      game3_d: "Spēle beidzas pēc 30 minūtēm vai tiklīdz visi seši mērķi sasnieguši pēdējo soli.",
      sec_photos: "Materiāli fotogrāfijās",
      photos_lead: "Vācu komandas izgatavotie oriģinālmateriāli (vācu valodā). Pieskarieties fotogrāfijai, lai to palielinātu.",
      ph1: "Sešas vērtību kartītes ar vadošo jautājumu",
      ph2: "«Goal Game» spēles laukums, kārtis un smilšu pulkstenis",
      ph3: "Spēles kārtis: katram mērķim sava krāsa",
      sec_downloads: "Lejupielādējamie materiāli",
      dl_lead: "Vācu komandas sagatavotie oriģinālmateriāli, gatavi drukāšanai un lietošanai. Katram ierakstam izmantojiet pogas, lai atvērtu failu vāciski (DE) vai angliski (EN).",
      dl_note: "Piezīme: faili ir vācu komandas oriģināli, tāpēc tie pieejami tikai vāciski (DE) un angliski (EN). Pati lapa ir tulkota visās valodās.",
      dl_g_facilitators: "Vadītājiem",
      dl_scenario: "Semināra scenārijs",
      dl_scenario_d: "Pilns semināra plāns: mērķi, aktivitātes un laiks.",
      dl_presentation: "Prezentācija «ES mērķi»",
      dl_presentation_d: "Slaidi par sešiem ES mērķiem.",
      dl_questions: "Kartīte ar trim apgalvojumiem",
      dl_questions_d: "Apgalvojumi ievada aktivitātei «Ieņem nostāju».",
      dl_values: "Vērtību kartītes",
      dl_values_d: "Sešas vērtību kartītes un vadošais jautājums, drukāšanai.",
      dl_video: "Video «ES vērtības»",
      dl_video_d: "Video, ko rādīt semināra laikā (MP4).",
      dl_g_game: "Spēle «Goal Game»",
      dl_board: "Spēles laukums",
      dl_board_d: "Spēles laukums ar sešām krāsainām ES mērķu takām.",
      dl_rules: "Spēles noteikumi",
      dl_rules_d: "Sagatavošanās, spēles gaita un spēles beigas.",
      dl_cards: "Zināšanu un diskusiju kārtis",
      dl_cards_d: "Visas sešu mērķu kārtis vienā failā: brīvība un cilvēktiesības, demokrātija, solidaritāte, klimats, miers un drošība, ekonomika.",
      footer_text: "Erasmus+ projekts · 3. seminārs (Vācija) — Mēs Eiropā: ES mērķi un vērtības nemierīgos laikos",
      footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
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
      label: 'Latvie\u0161u',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="8" fill="#9E3039"/><rect y="8" width="30" height="4" fill="#fff"/><rect y="12" width="30" height="8" fill="#9E3039"/></svg>'
    }
  };

  var currentLang = localStorage.getItem('erasmus_lang') || 'en';

  function apply(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;

    // Testo semplice
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // Testo con HTML interno (grassetto, corsivo…)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // aria-label dinamici
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    // Titolo pagina
    if (t.page_title) document.title = t.page_title;

    // Attributo lang sull'HTML
    document.documentElement.setAttribute('lang', lang);

    // Stato pulsanti desktop
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('lang-btn--active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    // Pulsante mobile: aggiorna bandiera e stato voci dropdown
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
    localStorage.setItem('erasmus_lang', lang); if (/[?&]lang=/.test(location.search)) history.replaceState(null, '', location.pathname + location.search.replace(/([?&]lang=)[a-z]+/, '$1' + lang) + location.hash); document.documentElement.lang = lang;
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

    // ---- DESKTOP: una bandierina per ogni lingua ----
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

    // ---- MOBILE: pulsante singolo + menu a discesa ----
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
    arrow.textContent = '\u25be';   // ▾
    mobileBtn.appendChild(arrow);

    // Pannello a discesa
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

    // Chiude se si tocca fuori
    document.addEventListener('click', function () { closeDropdown(); });

    switcher.appendChild(mobileBtn);

    // Il dropdown va nel logo-bar (che ha position:sticky/relative)
    var logoBar = switcher.closest('.logo-bar') || document.body;
    logoBar.appendChild(dropdown);

    // Salva riferimenti per aggiornare flag e stato attivo
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

}());
