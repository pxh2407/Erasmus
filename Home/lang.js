// Lingua dall'indirizzo (es. ?lang=pl): ha la precedenza su quella salvata nel browser
(function () {
  var m = location.search.match(/[?&]lang=(en|it|pl|de|lv)(?![a-z])/);
  if (m) {
    try { localStorage.setItem('erasmus_lang', m[1]); } catch (e) {}
    document.documentElement.lang = m[1];
  }
})();

// ============================================================
// lang.js — Sistema di traduzione multilingue
// Erasmus LUTE · Home
// Lingue: en · it · pl · de · lv
// ============================================================

(function () {

  const TRANSLATIONS = {

    // ----------------------------------------------------------
    // ENGLISH
    // ----------------------------------------------------------
    en: {
    skip_link:"Skip to content",
      page_title:        "Europe Can Be Liked (ECBL) — Erasmus+ project on the European Union",
      hero_eyebrow:      "Erasmus+ Project",
      hero_title:        "Erasmus+ Project",
      hero_subtitle:     "An Erasmus+ project on European citizenship involving Italy, Germany, Latvia and Poland.",
      nav_home:          "Home",
      nav_project:       "Project",
      nav_wp2:           "WP2",
      nav_wp3:           "WP3",
      nav_wp4:           "WP4",
      nav_download:      "Download",
      nav_fb:            "FB",
      coming_title:      "Content Being Prepared",
      coming_text:       "The content of this page is currently being prepared. Please check back soon.",
      news_title:        "News",
      news_lead:         "Updates on project activities will be published here.",
      news_cat1:         "Meetings",
      news_cat2:         "Workshops",
      news_cat3:         "Project Activities",
      news_cat4:         "Dissemination",
      news_coming:       "Content coming soon",

      project_intro_title:    "About the ECBL Project",
      project_intro_lead:     "“Europe Can Be Liked” (ECBL) is an Erasmus+ cooperation project for adult education. It contrasts Euroscepticism — especially among the younger generation — by drawing on the memories and experience of senior citizens.",
      project_intro_lead2:    "By combining historical knowledge with modern teaching methods, the project promotes awareness of the European Union and strengthens a shared European identity through workshops, publications, public debates and study visits.",
      project_meta_duration:        "Duration",
      project_meta_duration_note:   "24 months",
      project_meta_action:          "Action",
      project_meta_action_note:     "Adult Education Partnership",
      project_meta_priority:        "Priority",
      project_meta_priority_value:  "Common values",
      project_meta_priority_note:   "Civic engagement & participation",

      project_goals_title:    "Project Objectives",
      project_goal_1:         "Strengthen a sense of European identity among senior citizens and other participants.",
      project_goal_2:         "Encourage seniors' social activation and participation in public life.",
      project_goal_3:         "Develop innovative educational materials about the European Union.",
      project_goal_4:         "Collect and publish seniors' memories of their countries' entry into the EU.",
      project_goal_5:         "Promote dialogue between generations through public debates and workshops.",

      project_partners_title: "The Four Partners",
      project_partners_lead:  "The project unites four organisations active in adult education and senior engagement across Europe.",
      partner_lead_badge:     "Lead partner",
      partner_code_label:     "Erasmus+ code (OID)",
      partner_type_label:     "Type of organisation",
      partner_web_label:      "Website",
      partner_type_foundation:"Non-profit foundation",
      partner_type_association:"Non-profit association",
      partner_type_public:    "Local public body",
      partner_more:           "Read more",
      partner_less:           "Show less",
      partner_auto_tr:        "(automatic translation)",
      partner_aktywni_profile:"Fundacja “Aktywni XXI” is a non-governmental, non-profit organisation based in Jelenia Góra, in the Lower Silesia region (Dolnośląskie). Founded on 6 December 2010, it has worked in adult education for more than ten years, promoting lifelong learning and active participation in social life.",
      partner_aktywni_desc:   "<p>The Foundation was set up to support the creative development of children, young people and adults, with a special focus on older people. It runs the Jelenia Góra Academy of the Third Age, which offers lectures, meetings with interesting people and trips.</p><p>Older people are the main target group of the Foundation's educational activities, which also include intergenerational projects. For several years “Aktywni XXI” has worked with the Jelenia Góra branch of the OHP (Ochotnicze Hufce Pracy, Voluntary Labour Corps), organising cultural workshops, Christmas meetings and social initiatives.</p><p>The Foundation's mission is to spread the idea of lifelong learning among older people. This called for an attractive educational offer that would draw in new participants and involve them actively. Thanks to the trainers and educators who work with the Foundation, new courses have been created, widening the range of subjects on offer.</p><p>The trainers' participation in the course “Theatre in Education: a Holistic Approach to Teaching through Drama Techniques” led to theatre workshops, which are very popular and have been held regularly since February 2022, and to the partnership project “Using Drama Techniques in Adult Education”. Through the project “Social Skills – New Challenges” the trainers attended three courses on social skills; this led to the “Active Citizen” workshops and the courses “A Senior's Life in Harmony Is a Miracle”, on dealing with difficult situations, building relationships and communicating with others. The trainers also designed a board game to develop social and civic skills, which is used in many of the Foundation's activities.</p><p>The new teaching methods have increased participation in the Jelenia Góra Academy of the Third Age: the new programmes and more attractive activities have drawn more senior students, as shown by the rise in enrolments in the following semesters.</p>",
      partner_lute_profile:   "LUTE Milazzo (Free University for the Third Age) is a non-governmental, non-profit association based in Milazzo, Sicily, working in adult education. For many years it has promoted educational, cultural and social activities for the local community, with a special focus on senior citizens.",
      partner_lute_desc:      "<p>LUTE is a grassroots branch of the national association AUSER: it works in social promotion and is committed to fostering active ageing and strengthening the role of older people in society.</p><p>Although it was created mainly for older people, LUTE is open to people of all ages and pays particular attention to dialogue between generations, nationalities and cultures. It is an association where each person plays a leading role and is a resource for themselves and for others, at any age.</p><p>It operates through ten branches in the province of Messina and has about 1,000 members and around a hundred volunteers, who teach courses on subjects ranging from the area's cultural traditions to personal well-being, as well as science and the arts.</p><p>LUTE pays great attention to the European dimension of learning and takes part in Erasmus+ projects that link local cultural and craft traditions with European history, using both digital tools and written sources, such as local libraries and the historical memories of its members.</p><p>It has taken part in the Erasmus+ projects CCH (Common Cultural Heritage), with Spain and Poland (2019–2022), and CAT (Communication Arts), with Romania and Poland (2022–2024). Its members have repeatedly taken part in European cultural experiences, both individually and as a group.</p>",
      partner_hamburg_profile:"Seniorenbüro Hamburg e.V. is an independent, non-profit association based in Hamburg. For many years it has involved senior citizens through volunteering and social participation: it trains volunteers, builds local support networks and runs projects that make the most of older people's skills and experience.",
      partner_hamburg_desc:   "<p>The work of Seniorenbüro is based on the motto “Ageing actively together” and is aimed at people aged 50 and over, whatever their social or cultural background. Because its activities take place in many parts of Hamburg, participants are very diverse; most are between 60 and 85. The association encourages them to play an active part in social life, projects and programmes.</p><p>Group activities and courses are easy to join and are designed specifically for people with limited financial means: they are free or low-cost, so everyone can benefit from a wide range of activities.</p><p>The main areas of activity:</p><ol><li><strong>Promoting volunteering among older people.</strong> In courses and one-to-one advice sessions, interested people find out how they can contribute to social and cultural life; volunteers then take part in many projects and programmes.</li><li><strong>Open activities for older people.</strong> In 5 meeting places and 40 groups across all Hamburg districts, people experience community and active ageing.</li><li><strong>Promoting lifelong learning.</strong> The meeting places host courses on digital, social and health topics, as well as courses on volunteering. Volunteers receive training on topics related to their work, and specialist events are organised with partners in Hamburg, for example on empowerment and social diversity.</li></ol><p>For 25 years Seniorenbüro has supported Hamburg's “Contemporary Witnesses” (Zeitzeugen): a non-partisan group of women and men volunteers who meet regularly to talk about their own experiences and record them in the “Zeitzeugenmagazin”. Their stories deal with historical and social events that are already history for younger generations. Some can still talk about the National Socialist era and how the dictatorship shaped everyday life; others describe the post-war years, divided Germany, social change and technological progress.</p><p>The main aim of the contemporary witnesses is to promote peace in a democratic, constitutional state. That is why they talk with young people: they regularly visit schools in Hamburg, share their experiences using photos and documents from the time, and answer pupils' questions. They do not see themselves as historians, but as witnesses who make history understandable and tangible, helping young people understand their country's past so they can make sense of the present and help shape the future responsibly.</p>",
      partner_preili_profile: "Preiļu novada Izglītības pārvalde (Preiļi Municipality Education Board) is the local public body that manages education in the Preiļi area, in the Latgale region of Latvia. It coordinates and supports educational development in the municipality, ensuring quality, access and innovation, and works with national and European partners to strengthen adults' skills.",
      partner_preili_desc:    "<p>The Board promotes general education and lifelong learning, giving access to all citizens regardless of age, gender, previous education, place of residence, income, ethnic origin or disability. It offers adults high-quality learning that provides useful skills for work, civic participation and personal growth, helping to build a competitive knowledge economy and a democratic society.</p><p>The Board runs the Senior Academy, which brings together older people from the municipality to learn new knowledge and skills together, preserve traditions and culture, and promote well-being and a healthy lifestyle. Its main aim is to involve older people actively in cooperation and in the development of the community.</p><p>The Board employs 23 people in strategic roles and 25 contract staff. About 350–400 people attend its lifelong learning programmes and about 70 attend the Senior Academy.</p><p>The Board has experience in many projects for adults and young people. Its Erasmus+ adult education mobility project “Networking of adult educators and learners in the municipality to improve the quality of teaching and learning through digital learning tools” was named Latvia's best adult education project and was presented at the Lifelong Learning Conference in Brussels (17–18 April 2024). A further project focuses on a sustainable, green lifestyle, shared democratic responsibility and understanding EU values.</p>",
      country_pl:             "Poland",
      country_it:             "Italy",
      country_de:             "Germany",
      country_lv:             "Latvia",

      project_activities_title: "What We Do",
      activity_1_title:       "Workshop Guide",
      activity_1_text:        "A methodological guide with workshop scenarios on the EU, designed for trainers and educators working with seniors.",
      activity_2_title:       "Workshops “European ABC”",
      activity_2_text:        "Educational workshops for senior citizens, covering the history, institutions, values and daily impact of the European Union.",
      activity_3_title:       "Voices from the Past",
      activity_3_text:        "A collection of senior citizens' memoirs about their countries' entry into the EU, to share knowledge between generations.",
      activity_4_title:       "Study Visits",
      activity_4_text:        "Visits to EU institutions in Brussels and Strasbourg, to experience first-hand where European decisions are made.",

      project_impact_title:   "Expected Results",
      project_impact_1:       "Greater awareness of the European Union and its values.",
      project_impact_2:       "A stronger sense of shared European identity among senior citizens.",
      project_impact_3:       "Increased civic participation and trust in European institutions.",
      project_impact_4:       "Reduction of Euroscepticism through evidence-based education.",
      project_impact_5:       "High-quality educational materials reusable by other organisations.",

      footer_text:       "Erasmus+ Project", footer_cookie: "Cookie Policy", footer_wa: "Contact", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
      btn_top_aria:      "Back to top",
      lang_switcher_aria:"Select language",
      flag_aria:         "Italian flag",
      nav_menu_label:    "Menu",
      nav_menu_aria:     "Open navigation menu",
    },

    // ----------------------------------------------------------
    // ITALIANO
    // ----------------------------------------------------------
    it: {
    skip_link:"Salta al contenuto",
      page_title:        "Europe Can Be Liked (ECBL) — Progetto Erasmus+ sull'Unione Europea",
      hero_eyebrow:      "Progetto Erasmus+",
      hero_title:        "Progetto Erasmus+",
      hero_subtitle:     "Un progetto Erasmus+ sulla cittadinanza europea che coinvolge Italia, Germania, Lettonia e Polonia.",
      nav_home:          "Home",
      nav_project:       "Progetto",
      nav_wp2:           "WP2",
      nav_wp3:           "WP3",
      nav_wp4:           "WP4",
      nav_download:      "Download",
      nav_fb:            "FB",
      coming_title:      "Contenuto in Fase di Preparazione",
      coming_text:       "Il contenuto di questa pagina \u00e8 attualmente in fase di preparazione. Torna a visitarci presto.",

      news_title:        "Notizie",
      news_lead:         "Aggiornamenti sulle attività del progetto saranno pubblicati qui.",
      news_cat1:         "Riunioni",
      news_cat2:         "Workshop",
      news_cat3:         "Attività del progetto",
      news_cat4:         "Diffusione",
      news_coming:       "In arrivo",

      project_intro_title:    "Il progetto ECBL",
      project_intro_lead:     "\u201cEurope Can Be Liked\u201d (ECBL) \u00e8 un progetto di cooperazione europea Erasmus+ per l'educazione degli adulti. Contrasta l'euroscetticismo \u2014 in particolare tra le giovani generazioni \u2014 valorizzando i ricordi e l'esperienza dei cittadini anziani.",
      project_intro_lead2:    "Unendo la conoscenza storica a metodi didattici moderni, il progetto promuove la consapevolezza dell'Unione Europea e rafforza un'identit\u00e0 europea condivisa attraverso workshop, pubblicazioni, dibattiti pubblici e visite di studio.",
      project_meta_duration:        "Durata",
      project_meta_duration_note:   "24 mesi",
      project_meta_action:          "Azione",
      project_meta_action_note:     "Partenariato per l'educazione degli adulti",
      project_meta_priority:        "Priorit\u00e0",
      project_meta_priority_value:  "Valori comuni",
      project_meta_priority_note:   "Cittadinanza attiva e partecipazione",

      project_goals_title:    "Obiettivi del progetto",
      project_goal_1:         "Rafforzare il senso di identit\u00e0 europea tra gli anziani e gli altri partecipanti.",
      project_goal_2:         "Favorire l'attivazione sociale degli anziani e la loro partecipazione alla vita pubblica.",
      project_goal_3:         "Sviluppare materiali educativi innovativi sull'Unione Europea.",
      project_goal_4:         "Raccogliere e pubblicare i ricordi degli anziani sull'ingresso del loro Paese nell'UE.",
      project_goal_5:         "Promuovere il dialogo tra generazioni attraverso dibattiti pubblici e workshop.",

      project_partners_title: "I quattro partner",
      project_partners_lead:  "Il progetto riunisce quattro organizzazioni attive nell'educazione degli adulti e nel coinvolgimento dei senior in tutta Europa.",
      partner_lead_badge:     "Capofila",
      partner_code_label:     "Codice Erasmus+ (OID)",
      partner_type_label:     "Tipo di ente",
      partner_web_label:      "Sito web",
      partner_type_foundation:"Fondazione non-profit",
      partner_type_association:"Associazione non-profit",
      partner_type_public:    "Ente pubblico locale",
      partner_more:           "Leggi di più",
      partner_less:           "Mostra meno",
      partner_auto_tr:        "(traduzione automatica)",
      partner_aktywni_profile:"La Fundacja “Aktywni XXI” è un'organizzazione non governativa e non-profit con sede a Jelenia Góra, nella regione della Bassa Slesia (Dolnośląskie). Fondata il 6 dicembre 2010, da oltre dieci anni lavora nell'educazione degli adulti, promuovendo l'apprendimento permanente e la partecipazione attiva alla vita sociale.",
      partner_aktywni_desc:   "<p>La Fondazione è nata per sostenere lo sviluppo creativo di bambini, giovani e adulti, con particolare attenzione agli anziani. Gestisce l'Accademia della Terza Età di Jelenia Góra, che propone conferenze, incontri con personalità interessanti e gite.</p><p>Gli anziani sono il pubblico principale delle attività educative della Fondazione, che realizza anche attività intergenerazionali. Da diversi anni “Aktywni XXI” collabora con la sezione di Jelenia Góra dell'OHP (Ochotnicze Hufce Pracy, Corpi volontari del lavoro), organizzando laboratori culturali, incontri natalizi e iniziative sociali.</p><p>La missione della Fondazione è diffondere tra gli anziani l'idea dell'apprendimento permanente. Per questo serviva un'offerta educativa attraente, capace di avvicinare nuovi partecipanti e di coinvolgerli attivamente. Grazie ai formatori e agli educatori che collaborano con la Fondazione sono nati nuovi corsi, che hanno ampliato i temi dell'offerta formativa.</p><p>La partecipazione dei formatori al corso “Teatro nell'educazione: un approccio olistico all'insegnamento attraverso le tecniche teatrali” ha portato ai laboratori di teatro, molto apprezzati e svolti regolarmente da febbraio 2022, e al progetto di collaborazione “Uso delle tecniche teatrali nell'educazione degli adulti”. Con il progetto “Abilità sociali – nuove sfide” i formatori hanno seguito tre corsi sulle abilità sociali; ne sono nati i laboratori “Cittadino attivo” e i corsi “La vita del senior in armonia è un miracolo”, dedicati ad affrontare le situazioni difficili, costruire relazioni e comunicare con gli altri. I formatori hanno anche ideato un gioco da tavolo per sviluppare le competenze sociali e civiche, usato in molte attività della Fondazione.</p><p>I nuovi metodi educativi hanno fatto crescere i partecipanti dell'Accademia della Terza Età di Jelenia Góra: i nuovi programmi e le proposte più attraenti hanno attirato più studenti senior, come mostra l'aumento delle iscrizioni nei semestri successivi.</p>",
      partner_lute_profile:   "LUTE Milazzo (Libera Università per la Terza Età) è un'associazione non governativa e non-profit con sede a Milazzo, in Sicilia, attiva nell'educazione degli adulti. Da anni promuove attività formative, culturali e sociali per la comunità locale, con particolare attenzione ai cittadini senior.",
      partner_lute_desc:      "<p>La LUTE è una struttura di base dell'AUSER nazionale: opera nella promozione sociale ed è impegnata a favorire l'invecchiamento attivo degli anziani e a rafforzarne il ruolo nella società.</p><p>Nata soprattutto per gli anziani, la LUTE è aperta a persone di tutte le età e cura in modo particolare il dialogo tra generazioni, nazionalità e culture diverse. È un'associazione in cui la persona è protagonista ed è una risorsa per sé e per gli altri, a ogni età.</p><p>Opera attraverso dieci sedi in provincia di Messina e conta circa 1.000 soci e un centinaio di volontari, che tengono corsi su temi che vanno dalle tradizioni culturali del territorio al benessere personale, fino ad argomenti scientifici e artistici.</p><p>La LUTE dedica grande attenzione alla dimensione europea dell'apprendimento e partecipa a progetti Erasmus+ che collegano le tradizioni culturali e artigianali locali alla storia europea, usando sia strumenti digitali sia fonti scritte, come le biblioteche locali e la memoria storica dei soci.</p><p>Ha partecipato ai progetti Erasmus+ CCH (Patrimonio culturale comune), con Spagna e Polonia (2019–2022), e CAT (Arti della comunicazione), con Romania e Polonia (2022–2024). I soci hanno partecipato più volte a esperienze culturali europee, sia a titolo personale che come gruppo.</p>",
      partner_hamburg_profile:"Seniorenbüro Hamburg e.V. è un'associazione indipendente e non-profit con sede ad Amburgo. Da anni coinvolge i cittadini senior attraverso il volontariato e la partecipazione sociale: forma i volontari, crea reti di sostegno nei quartieri e realizza progetti che valorizzano le competenze e l'esperienza delle persone anziane.",
      partner_hamburg_desc:   "<p>Il lavoro del Seniorenbüro si basa sul motto “Invecchiare attivamente insieme” ed è rivolto alle persone dai 50 anni in su, di qualsiasi provenienza sociale o culturale. Poiché le attività si svolgono in molte zone di Amburgo, i partecipanti sono molto diversi tra loro; la maggior parte ha tra i 60 e gli 85 anni. L'associazione li incoraggia a partecipare attivamente alla vita sociale, ai progetti e ai programmi.</p><p>Le attività di gruppo e i corsi sono facilmente accessibili e pensati espressamente per chi ha poche risorse economiche: sono gratuiti o a basso costo, così tutti possono beneficiare di un'ampia offerta.</p><p>Le principali aree di attività:</p><ol><li><strong>Promuovere il volontariato tra gli anziani.</strong> In corsi e colloqui individuali le persone interessate scoprono come contribuire alla vita sociale e culturale; i volontari partecipano poi a numerosi progetti e programmi.</li><li><strong>Attività aperte per gli anziani.</strong> In 5 luoghi d'incontro e 40 gruppi in tutti i distretti di Amburgo si vive la comunità e si promuove l'invecchiamento attivo.</li><li><strong>Promuovere l'apprendimento permanente.</strong> Nei luoghi d'incontro si tengono corsi su temi digitali, sociali e sanitari, oltre a corsi sul volontariato. I volontari ricevono una formazione sui temi della loro attività, e con partner di Amburgo si organizzano incontri specialistici, per esempio su empowerment e diversità sociale.</li></ol><p>Da 25 anni il Seniorenbüro sostiene i “Testimoni del tempo” di Amburgo (Zeitzeugen): un gruppo apartitico di donne e uomini volontari che si incontrano regolarmente per raccontare le proprie esperienze e raccoglierle nello “Zeitzeugenmagazin”. I loro racconti riguardano fatti storici e sociali che per le nuove generazioni sono già storia. Alcuni possono ancora parlare dell'epoca nazionalsocialista e di come la dittatura influenzava la vita quotidiana; altri raccontano il dopoguerra, la Germania divisa, i cambiamenti sociali e lo sviluppo tecnologico.</p><p>L'obiettivo principale dei testimoni del tempo è promuovere la pace in uno Stato democratico e costituzionale. Per questo dialogano con i giovani: visitano regolarmente le scuole di Amburgo, raccontano le loro esperienze con foto e documenti dell'epoca e rispondono alle domande degli studenti. Non si considerano storici, ma testimoni che rendono la storia comprensibile e concreta, aiutando i giovani a capire il passato del loro Paese per comprendere il presente e contribuire a costruire il futuro in modo responsabile.</p>",
      partner_preili_profile: "Preiļu novada Izglītības pārvalde (Ufficio istruzione del comune di Preiļi) è l'ente pubblico locale che gestisce l'istruzione nel territorio di Preiļi, nella regione lettone della Latgale. Coordina e sostiene lo sviluppo educativo del comune, garantendo qualità, accesso e innovazione, e collabora con partner nazionali ed europei per rafforzare le competenze degli adulti.",
      partner_preili_desc:    "<p>L'Ufficio promuove l'istruzione generale e l'apprendimento permanente, garantendone l'accesso a tutti i cittadini indipendentemente da età, genere, istruzione precedente, luogo di residenza, reddito, origine etnica o disabilità. Offre agli adulti percorsi di qualità che forniscono competenze utili per il lavoro, la partecipazione civica e la crescita personale, contribuendo a un'economia della conoscenza competitiva e a una società democratica.</p><p>L'Ufficio gestisce l'Accademia Senior, che riunisce gli anziani del comune per imparare insieme nuove conoscenze e abilità, conservare tradizioni e cultura e promuovere il benessere e uno stile di vita sano. L'obiettivo principale è coinvolgere attivamente gli anziani nella collaborazione e nello sviluppo della comunità.</p><p>L'ente impiega 23 persone con ruoli strategici e 25 collaboratori a contratto. Circa 350–400 persone frequentano i programmi di apprendimento permanente e circa 70 l'Accademia Senior.</p><p>L'ente ha esperienza in diversi progetti per adulti e giovani. Il suo progetto Erasmus+ di mobilità per l'educazione degli adulti “Rete di educatori e discenti adulti del comune per migliorare la qualità dell'insegnamento e dell'apprendimento con strumenti digitali” è stato nominato miglior progetto di educazione degli adulti della Lettonia ed è stato presentato alla Lifelong Learning Conference di Bruxelles (17–18 aprile 2024). Un progetto successivo è dedicato allo stile di vita sostenibile e green, alla corresponsabilità democratica e alla comprensione dei valori dell'UE.</p>",
      country_pl:             "Polonia",
      country_it:             "Italia",
      country_de:             "Germania",
      country_lv:             "Lettonia",

      project_activities_title: "Cosa facciamo",
      activity_1_title:       "Guida ai workshop",
      activity_1_text:        "Una guida metodologica con scenari di workshop sull'UE, pensata per formatori ed educatori che lavorano con gli anziani.",
      activity_2_title:       "Workshop \u201cAbbecedario Europeo\u201d",
      activity_2_text:        "Workshop educativi per anziani su storia, istituzioni, valori e impatto quotidiano dell'Unione Europea.",
      activity_3_title:       "Voci dal passato",
      activity_3_text:        "Una raccolta di memorie degli anziani sull'ingresso del proprio Paese nell'UE, per trasmettere conoscenza tra generazioni.",
      activity_4_title:       "Visite di studio",
      activity_4_text:        "Visite alle istituzioni UE a Bruxelles e Strasburgo, per toccare con mano dove si prendono le decisioni europee.",

      project_impact_title:   "Risultati attesi",
      project_impact_1:       "Maggiore consapevolezza dell'Unione Europea e dei suoi valori.",
      project_impact_2:       "Un pi\u00f9 forte senso di identit\u00e0 europea condivisa tra gli anziani.",
      project_impact_3:       "Maggiore partecipazione civica e fiducia nelle istituzioni europee.",
      project_impact_4:       "Riduzione dell'euroscetticismo attraverso un'educazione basata sui fatti.",
      project_impact_5:       "Materiali educativi di qualit\u00e0 riutilizzabili da altre organizzazioni.",

      footer_text:       "Progetto Erasmus+", footer_cookie: "Cookie Policy", footer_wa: "Contatti", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
      btn_top_aria:      "Torna all\u2019inizio",
      lang_switcher_aria:"Seleziona lingua",
      flag_aria:         "Bandiera italiana",
      nav_menu_label:    "Menu",
      nav_menu_aria:     "Apri il menu di navigazione",
    },

    // ----------------------------------------------------------
    // POLSKI
    // ----------------------------------------------------------
    pl: {
    skip_link:"Przejdź do treści",
      page_title:        "Europe Can Be Liked (ECBL) — projekt Erasmus+ o Unii Europejskiej",
      hero_eyebrow:      "Projekt Erasmus+",
      hero_title:        "Projekt Erasmus+",
      hero_subtitle:     "Projekt Erasmus+ dotycz\u0105cy obywatelstwa europejskiego, obejmuj\u0105cy W\u0142ochy, Niemcy, \u0141otw\u0119 i Polsk\u0119.",
      nav_home:          "Strona G\u0142\u00f3wna",
      nav_project:       "Projekt",
      nav_wp2:           "WP2",
      nav_wp3:           "WP3",
      nav_wp4:           "WP4",
      nav_download:      "Download",
      nav_fb:            "FB",
      coming_title:      "Tre\u015b\u0107 w Przygotowaniu",
      coming_text:       "Tre\u015b\u0107 tej strony jest aktualnie w przygotowaniu. Zapraszamy wkr\u00f3tce.",

      news_title:        "Aktualności",
      news_lead:         "Tutaj będą publikowane informacje o działaniach projektu.",
      news_cat1:         "Spotkania",
      news_cat2:         "Warsztaty",
      news_cat3:         "Działania projektowe",
      news_cat4:         "Upowszechnianie",
      news_coming:       "Wkrótce",

      project_intro_title:    "O projekcie ECBL",
      project_intro_lead:     "\u201eEurope Can Be Liked\u201d (ECBL) to projekt wsp\u00f3\u0142pracy Erasmus+ w zakresie edukacji doros\u0142ych. Przeciwdzia\u0142a eurosceptycyzmowi \u2014 zw\u0142aszcza w\u015br\u00f3d m\u0142odszego pokolenia \u2014 si\u0119gaj\u0105c do wspomnie\u0144 i do\u015bwiadcze\u0144 senior\u00f3w.",
      project_intro_lead2:    "\u0141\u0105cz\u0105c wiedz\u0119 historyczn\u0105 z nowoczesnymi metodami nauczania, projekt promuje \u015bwiadomo\u015b\u0107 Unii Europejskiej i wzmacnia wsp\u00f3ln\u0105 europejsk\u0105 to\u017csamo\u015b\u0107 poprzez warsztaty, publikacje, debaty publiczne i wizyty studyjne.",
      project_meta_duration:        "Czas trwania",
      project_meta_duration_note:   "24 miesi\u0105ce",
      project_meta_action:          "Akcja",
      project_meta_action_note:     "Partnerstwo w edukacji doros\u0142ych",
      project_meta_priority:        "Priorytet",
      project_meta_priority_value:  "Wsp\u00f3lne warto\u015bci",
      project_meta_priority_note:   "Aktywno\u015b\u0107 obywatelska i uczestnictwo",

      project_goals_title:    "Cele projektu",
      project_goal_1:         "Wzmacnianie poczucia to\u017csamo\u015bci europejskiej w\u015br\u00f3d senior\u00f3w i innych uczestnik\u00f3w.",
      project_goal_2:         "Aktywizacja spo\u0142eczna senior\u00f3w i ich udzia\u0142 w \u017cyciu publicznym.",
      project_goal_3:         "Opracowanie innowacyjnych materia\u0142\u00f3w edukacyjnych o Unii Europejskiej.",
      project_goal_4:         "Zebranie i opublikowanie wspomnie\u0144 senior\u00f3w o wej\u015bciu ich kraju do UE.",
      project_goal_5:         "Promowanie dialogu mi\u0119dzypokoleniowego poprzez debaty publiczne i warsztaty.",

      project_partners_title: "Czterech partner\u00f3w",
      project_partners_lead:  "Projekt \u0142\u0105czy cztery organizacje aktywne w edukacji doros\u0142ych i anga\u017cowaniu senior\u00f3w w ca\u0142ej Europie.",
      partner_lead_badge:     "Koordynator",
      partner_code_label:     "Kod Erasmus+ (OID)",
      partner_type_label:     "Rodzaj organizacji",
      partner_web_label:      "Strona internetowa",
      partner_type_foundation:"Fundacja non-profit",
      partner_type_association:"Stowarzyszenie non-profit",
      partner_type_public:    "Lokalna instytucja publiczna",
      partner_more:           "Czytaj więcej",
      partner_less:           "Pokaż mniej",
      partner_auto_tr:        "(tłumaczenie automatyczne)",
      partner_aktywni_profile:"Fundacja „Aktywni XXI” to pozarządowa organizacja non-profit z siedzibą w Jeleniej Górze, w województwie dolnośląskim. Założona 6 grudnia 2010 roku, od ponad dziesięciu lat działa w obszarze edukacji dorosłych, promując uczenie się przez całe życie i aktywny udział w życiu społecznym.",
      partner_aktywni_desc:   "<p>Fundacja powstała, aby wspierać twórczy rozwój dzieci, młodzieży i dorosłych, ze szczególnym uwzględnieniem seniorów. Prowadzi Jeleniogórską Akademię Trzeciego Wieku, która oferuje wykłady, spotkania z ciekawymi ludźmi i wycieczki.</p><p>Seniorzy są główną grupą odbiorców działań edukacyjnych Fundacji, która realizuje także działania międzypokoleniowe. Od kilku lat „Aktywni XXI” współpracuje z jeleniogórskim oddziałem OHP (Ochotnicze Hufce Pracy), organizując wspólne warsztaty kulturalne, spotkania świąteczne i akcje społeczne.</p><p>Misją Fundacji jest upowszechnianie wśród seniorów idei uczenia się przez całe życie. Wymagało to atrakcyjnej oferty edukacyjnej, która przyciągnie nowych uczestników i zachęci ich do aktywnego udziału. Dzięki trenerom i edukatorom współpracującym z Fundacją powstały nowe zajęcia, które poszerzyły tematykę oferty edukacyjnej.</p><p>Udział trenerów w kursie „Teatr w edukacji: holistyczne podejście do nauczania za pomocą technik teatralnych” zaowocował warsztatami teatralnymi, bardzo popularnymi i prowadzonymi regularnie od lutego 2022 roku, a także projektem partnerskim „Wykorzystanie technik teatralnych w edukacji dorosłych”. W ramach projektu „Umiejętności społeczne – nowe wyzwania” trenerzy ukończyli trzy kursy z zakresu umiejętności społecznych; dzięki temu powstały warsztaty „Aktywny obywatel” oraz zajęcia „Życie seniora w harmonii to cud”, poświęcone radzeniu sobie w trudnych sytuacjach, budowaniu relacji i komunikacji z innymi. Trenerzy opracowali również grę planszową rozwijającą umiejętności społeczne i obywatelskie, wykorzystywaną w wielu działaniach Fundacji.</p><p>Nowe metody edukacyjne przyczyniły się do wzrostu liczby słuchaczy Jeleniogórskiej Akademii Trzeciego Wieku: nowe programy i atrakcyjne formy zajęć przyciągnęły więcej seniorów, co widać po rosnącej liczbie zapisów w kolejnych semestrach.</p>",
      partner_lute_profile:   "LUTE Milazzo (Wolny Uniwersytet Trzeciego Wieku) to pozarządowe stowarzyszenie non-profit z siedzibą w Milazzo na Sycylii, działające w obszarze edukacji dorosłych. Od lat prowadzi działania edukacyjne, kulturalne i społeczne dla lokalnej społeczności, ze szczególnym uwzględnieniem seniorów.",
      partner_lute_desc:      "<p>LUTE jest lokalną strukturą ogólnokrajowego stowarzyszenia AUSER: działa na rzecz rozwoju społecznego i angażuje się we wspieranie aktywnego starzenia się oraz wzmacnianie roli osób starszych w społeczeństwie.</p><p>Choć powstało głównie z myślą o seniorach, LUTE jest otwarte dla osób w każdym wieku i szczególnie dba o dialog między pokoleniami, narodowościami i kulturami. To stowarzyszenie, w którym człowiek jest w centrum i stanowi zasób dla siebie i innych – w każdym wieku.</p><p>Działa w dziesięciu oddziałach w prowincji Mesyna i liczy około 1000 członków oraz około stu wolontariuszy, którzy prowadzą zajęcia na tematy od tradycji kulturowych regionu, przez dobre samopoczucie, po naukę i sztukę.</p><p>LUTE przywiązuje dużą wagę do europejskiego wymiaru uczenia się i uczestniczy w projektach Erasmus+, które łączą lokalne tradycje kulturowe i rzemieślnicze z historią Europy, korzystając zarówno z narzędzi cyfrowych, jak i ze źródeł pisanych, takich jak lokalne biblioteki i wspomnienia członków.</p><p>Uczestniczyło w projektach Erasmus+ CCH (Wspólne dziedzictwo kulturowe) z Hiszpanią i Polską (2019–2022) oraz CAT (Sztuki komunikacji) z Rumunią i Polską (2022–2024). Członkowie stowarzyszenia wielokrotnie brali udział w europejskich doświadczeniach kulturalnych, zarówno indywidualnie, jak i grupowo.</p>",
      partner_hamburg_profile:"Seniorenbüro Hamburg e.V. to niezależne stowarzyszenie non-profit z siedzibą w Hamburgu. Od lat angażuje seniorów poprzez wolontariat i udział w życiu społecznym: szkoli wolontariuszy, tworzy lokalne sieci wsparcia i realizuje projekty, które wykorzystują umiejętności i doświadczenie osób starszych.",
      partner_hamburg_desc:   "<p>Praca Seniorenbüro opiera się na haśle „Aktywnie starzeć się razem” i jest skierowana do osób w wieku 50+, niezależnie od ich pochodzenia społecznego i kulturowego. Ponieważ zajęcia odbywają się w wielu dzielnicach Hamburga, uczestnicy są bardzo różnorodni; większość ma od 60 do 85 lat. Stowarzyszenie zachęca ich do aktywnego udziału w życiu społecznym, projektach i programach.</p><p>Zajęcia grupowe i kursy są łatwo dostępne i przeznaczone przede wszystkim dla osób o ograniczonych środkach finansowych: są bezpłatne lub tanie, dzięki czemu każdy może skorzystać z bogatej oferty.</p><p>Główne obszary działalności:</p><ol><li><strong>Promowanie wolontariatu wśród seniorów.</strong> Podczas kursów i indywidualnych konsultacji zainteresowani dowiadują się, jak mogą przyczynić się do życia społecznego i kulturalnego; wolontariusze biorą następnie udział w wielu projektach i programach.</li><li><strong>Otwarta praca z seniorami.</strong> W 5 miejscach spotkań i 40 grupach we wszystkich dzielnicach Hamburga uczestnicy doświadczają wspólnoty i aktywnego starzenia się.</li><li><strong>Promowanie uczenia się przez całe życie.</strong> W miejscach spotkań odbywają się kursy na tematy cyfrowe, społeczne i zdrowotne, a także kursy o wolontariacie. Wolontariusze przechodzą szkolenia z tematów związanych z ich pracą, a z partnerami z Hamburga organizowane są spotkania specjalistyczne, np. o wzmacnianiu pozycji (empowerment) i różnorodności społecznej.</li></ol><p>Od 25 lat Seniorenbüro wspiera hamburskich „Świadków historii” (Zeitzeugen): bezpartyjną grupę wolontariuszek i wolontariuszy, którzy regularnie spotykają się, aby opowiadać o swoich doświadczeniach i spisywać je w „Zeitzeugenmagazin”. Ich wspomnienia dotyczą wydarzeń historycznych i społecznych, które dla młodszych pokoleń są już historią. Niektórzy wciąż mogą opowiadać o czasach narodowego socjalizmu i o tym, jak dyktatura wpływała na codzienne życie; inni o okresie powojennym, podzielonych Niemczech, przemianach społecznych i rozwoju techniki.</p><p>Głównym celem świadków historii jest promowanie pokoju w demokratycznym państwie prawa. Dlatego rozmawiają z młodzieżą: regularnie odwiedzają hamburskie szkoły, opowiadają o swoich przeżyciach, pokazując zdjęcia i dokumenty z epoki, i odpowiadają na pytania uczniów. Nie uważają się za historyków, lecz za świadków, którzy sprawiają, że historia staje się zrozumiała i namacalna – pomagając młodym zrozumieć przeszłość ich kraju, aby lepiej rozumieć teraźniejszość i odpowiedzialnie współtworzyć przyszłość.</p>",
      partner_preili_profile: "Preiļu novada Izglītības pārvalde (Zarząd Oświaty Gminy Preiļi) to lokalna instytucja publiczna zarządzająca edukacją na terenie Preiļi, w regionie Łatgalii na Łotwie. Koordynuje i wspiera rozwój edukacji w gminie, dbając o jakość, dostępność i innowacyjność, oraz współpracuje z partnerami krajowymi i europejskimi, aby rozwijać kompetencje dorosłych.",
      partner_preili_desc:    "<p>Zarząd promuje kształcenie ogólne i uczenie się przez całe życie, zapewniając do nich dostęp wszystkim mieszkańcom bez względu na wiek, płeć, wcześniejsze wykształcenie, miejsce zamieszkania, dochody, pochodzenie etniczne czy niepełnosprawność. Oferuje dorosłym kształcenie wysokiej jakości, które daje przydatne umiejętności w pracy, życiu obywatelskim i rozwoju osobistym, przyczyniając się do budowy konkurencyjnej gospodarki opartej na wiedzy i demokratycznego społeczeństwa.</p><p>Zarząd prowadzi Akademię Seniora, która gromadzi seniorów z gminy, aby wspólnie zdobywali nową wiedzę i umiejętności, pielęgnowali tradycje i kulturę oraz dbali o dobre samopoczucie i zdrowy styl życia. Jej głównym celem jest aktywne włączanie seniorów we współpracę i rozwój społeczności.</p><p>Instytucja zatrudnia 23 osoby na stanowiskach strategicznych oraz 25 pracowników na umowach. W programach uczenia się przez całe życie uczestniczy około 350–400 osób, a w Akademii Seniora około 70.</p><p>Instytucja ma doświadczenie w wielu projektach dla dorosłych i młodzieży. Jej projekt mobilności Erasmus+ w edukacji dorosłych „Sieć edukatorów i słuchaczy dorosłych w gminie na rzecz poprawy jakości nauczania i uczenia się za pomocą cyfrowych narzędzi edukacyjnych” został uznany za najlepszy projekt edukacji dorosłych na Łotwie i zaprezentowany na Lifelong Learning Conference w Brukseli (17–18 kwietnia 2024). Kolejny projekt poświęcony jest zrównoważonemu, ekologicznemu stylowi życia, demokratycznej współodpowiedzialności i rozumieniu wartości UE.</p>",
      country_pl:             "Polska",
      country_it:             "W\u0142ochy",
      country_de:             "Niemcy",
      country_lv:             "\u0141otwa",

      project_activities_title: "Co robimy",
      activity_1_title:       "Przewodnik po warsztatach",
      activity_1_text:        "Przewodnik metodyczny ze scenariuszami warsztat\u00f3w o UE, zaprojektowany dla trener\u00f3w i edukator\u00f3w pracuj\u0105cych z seniorami.",
      activity_2_title:       "Warsztaty \u201eEuropejskie ABC\u201d",
      activity_2_text:        "Warsztaty edukacyjne dla senior\u00f3w, obejmuj\u0105ce histori\u0119, instytucje, warto\u015bci i codzienny wp\u0142yw Unii Europejskiej.",
      activity_3_title:       "G\u0142osy z przesz\u0142o\u015bci",
      activity_3_text:        "Zbi\u00f3r wspomnie\u0144 senior\u00f3w o wej\u015bciu ich kraju do UE, aby dzieli\u0107 si\u0119 wiedz\u0105 mi\u0119dzy pokoleniami.",
      activity_4_title:       "Wizyty studyjne",
      activity_4_text:        "Wizyty w instytucjach UE w Brukseli i Strasburgu, aby z pierwszej r\u0119ki do\u015bwiadczy\u0107, gdzie podejmowane s\u0105 europejskie decyzje.",

      project_impact_title:   "Oczekiwane rezultaty",
      project_impact_1:       "Wi\u0119ksza \u015bwiadomo\u015b\u0107 Unii Europejskiej i jej warto\u015bci.",
      project_impact_2:       "Silniejsze poczucie wsp\u00f3lnej europejskiej to\u017csamo\u015bci w\u015br\u00f3d senior\u00f3w.",
      project_impact_3:       "Wi\u0119ksza aktywno\u015b\u0107 obywatelska i zaufanie do instytucji europejskich.",
      project_impact_4:       "Zmniejszenie eurosceptycyzmu poprzez edukacj\u0119 opart\u0105 na faktach.",
      project_impact_5:       "Wysokiej jako\u015bci materia\u0142y edukacyjne do ponownego u\u017cycia przez inne organizacje.",

      footer_text:       "Projekt Erasmus+", footer_cookie: "Cookie Policy", footer_wa: "Kontakt", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
      btn_top_aria:      "Powr\u00f3t na g\u00f3r\u0119",
      lang_switcher_aria:"Wybierz j\u0119zyk",
      flag_aria:         "Flaga w\u0142oska",
      nav_menu_label:    "Menu",
      nav_menu_aria:     "Otw\u00f3rz menu nawigacji",
    },

    // ----------------------------------------------------------
    // DEUTSCH
    // ----------------------------------------------------------
    de: {
    skip_link:"Zum Inhalt springen",
      page_title:        "Europe Can Be Liked (ECBL) — Erasmus+-Projekt über die Europäische Union",
      hero_eyebrow:      "Erasmus+-Projekt",
      hero_title:        "Erasmus+-Projekt",
      hero_subtitle:     "Ein Erasmus+-Projekt zur europ\u00e4ischen B\u00fcrgerschaft mit Italien, Deutschland, Lettland und Polen.",
      nav_home:          "Startseite",
      nav_project:       "Projekt",
      nav_wp2:           "WP2",
      nav_wp3:           "WP3",
      nav_wp4:           "WP4",
      nav_download:      "Download",
      nav_fb:            "FB",
      coming_title:      "Inhalt wird vorbereitet",
      coming_text:       "Der Inhalt dieser Seite wird gerade vorbereitet. Bitte schauen Sie bald wieder vorbei.",

      news_title:        "Neuigkeiten",
      news_lead:         "Hier werden Aktualisierungen zu den Projektaktivitäten veröffentlicht.",
      news_cat1:         "Treffen",
      news_cat2:         "Workshops",
      news_cat3:         "Projektaktivitäten",
      news_cat4:         "Verbreitung",
      news_coming:       "Demnächst",

      project_intro_title:    "Das ECBL-Projekt",
      project_intro_lead:     "\u201eEurope Can Be Liked\u201c (ECBL) ist ein Erasmus+-Kooperationsprojekt f\u00fcr die Erwachsenenbildung. Es wirkt der Euroskepsis entgegen \u2014 besonders unter der j\u00fcngeren Generation \u2014 indem es auf Erinnerungen und Erfahrungen der Senioren zur\u00fcckgreift.",
      project_intro_lead2:    "Durch die Verbindung von historischem Wissen mit modernen Lehrmethoden f\u00f6rdert das Projekt das Bewusstsein f\u00fcr die Europ\u00e4ische Union und st\u00e4rkt eine gemeinsame europ\u00e4ische Identit\u00e4t durch Workshops, Publikationen, \u00f6ffentliche Debatten und Studienbesuche.",
      project_meta_duration:        "Dauer",
      project_meta_duration_note:   "24 Monate",
      project_meta_action:          "Aktion",
      project_meta_action_note:     "Partnerschaft Erwachsenenbildung",
      project_meta_priority:        "Priorit\u00e4t",
      project_meta_priority_value:  "Gemeinsame Werte",
      project_meta_priority_note:   "B\u00fcrgerschaftliches Engagement und Teilhabe",

      project_goals_title:    "Projektziele",
      project_goal_1:         "Das Gef\u00fchl der europ\u00e4ischen Identit\u00e4t bei Senioren und anderen Teilnehmern st\u00e4rken.",
      project_goal_2:         "Die soziale Aktivierung von Senioren und ihre Teilnahme am \u00f6ffentlichen Leben f\u00f6rdern.",
      project_goal_3:         "Innovative Bildungsmaterialien \u00fcber die Europ\u00e4ische Union entwickeln.",
      project_goal_4:         "Erinnerungen der Senioren an den EU-Beitritt ihres Landes sammeln und ver\u00f6ffentlichen.",
      project_goal_5:         "Den Dialog zwischen den Generationen durch \u00f6ffentliche Debatten und Workshops f\u00f6rdern.",

      project_partners_title: "Die vier Partner",
      project_partners_lead:  "Das Projekt vereint vier Organisationen, die in der Erwachsenenbildung und Senioreneinbindung in ganz Europa aktiv sind.",
      partner_lead_badge:     "Koordinator",
      partner_code_label:     "Erasmus+-Code (OID)",
      partner_type_label:     "Art der Organisation",
      partner_web_label:      "Website",
      partner_type_foundation:"Gemeinnützige Stiftung",
      partner_type_association:"Gemeinnütziger Verein",
      partner_type_public:    "Lokale öffentliche Einrichtung",
      partner_more:           "Weiterlesen",
      partner_less:           "Weniger anzeigen",
      partner_auto_tr:        "(automatische Übersetzung)",
      partner_aktywni_profile:"Die Fundacja „Aktywni XXI“ ist eine gemeinnützige Nichtregierungsorganisation mit Sitz in Jelenia Góra in der Woiwodschaft Niederschlesien (Dolnośląskie). Die am 6. Dezember 2010 gegründete Stiftung ist seit über zehn Jahren in der Erwachsenenbildung tätig und fördert lebenslanges Lernen und die aktive Teilnahme am gesellschaftlichen Leben.",
      partner_aktywni_desc:   "<p>Die Stiftung wurde gegründet, um die kreative Entwicklung von Kindern, Jugendlichen und Erwachsenen zu fördern, mit besonderem Augenmerk auf ältere Menschen. Sie betreibt die Akademie des Dritten Lebensalters in Jelenia Góra, die Vorträge, Begegnungen mit interessanten Persönlichkeiten und Ausflüge anbietet.</p><p>Ältere Menschen sind die wichtigste Zielgruppe der Bildungsangebote der Stiftung, die auch generationenübergreifende Aktivitäten durchführt. Seit mehreren Jahren arbeitet „Aktywni XXI“ mit der Zweigstelle Jelenia Góra der OHP (Ochotnicze Hufce Pracy, Freiwillige Arbeitskorps) zusammen und organisiert gemeinsame Kulturworkshops, Weihnachtstreffen und soziale Aktionen.</p><p>Die Mission der Stiftung ist es, die Idee des lebenslangen Lernens unter älteren Menschen zu verbreiten. Dafür brauchte es ein attraktives Bildungsangebot, das neue Teilnehmende anzieht und zur aktiven Mitwirkung ermutigt. Dank der Trainerinnen, Trainer und Lehrkräfte, die mit der Stiftung zusammenarbeiten, sind neue Kurse entstanden, die das Themenspektrum erweitert haben.</p><p>Die Teilnahme der Trainer am Kurs „Theater in der Bildung: ein ganzheitlicher Ansatz für das Lehren mit Theatertechniken“ führte zu Theaterworkshops, die sehr beliebt sind und seit Februar 2022 regelmäßig stattfinden, sowie zum Kooperationsprojekt „Einsatz von Theatertechniken in der Erwachsenenbildung“. Im Projekt „Soziale Kompetenzen – neue Herausforderungen“ besuchten die Trainer drei Kurse zu sozialen Kompetenzen; daraus entstanden die Workshops „Aktiver Bürger“ und die Kurse „Das Leben eines Seniors in Harmonie ist ein Wunder“ zum Umgang mit schwierigen Situationen, zum Aufbau von Beziehungen und zur Kommunikation mit anderen. Außerdem entwickelten die Trainer ein Brettspiel zur Förderung sozialer und bürgerschaftlicher Kompetenzen, das in vielen Aktivitäten der Stiftung eingesetzt wird.</p><p>Die neuen Bildungsmethoden haben die Teilnehmerzahl der Akademie des Dritten Lebensalters in Jelenia Góra erhöht: Die neuen Programme und attraktiveren Angebote haben mehr ältere Studierende angezogen, wie die steigenden Anmeldungen in den folgenden Semestern zeigen.</p>",
      partner_lute_profile:   "LUTE Milazzo (Freie Universität für das Dritte Lebensalter) ist ein gemeinnütziger Verein und eine Nichtregierungsorganisation mit Sitz in Milazzo auf Sizilien, die in der Erwachsenenbildung tätig ist. Seit vielen Jahren fördert die LUTE Bildungs-, Kultur- und Sozialangebote für die örtliche Gemeinschaft, mit besonderem Augenmerk auf Seniorinnen und Senioren.",
      partner_lute_desc:      "<p>Die LUTE ist eine Basisorganisation des nationalen Verbands AUSER: Sie engagiert sich in der sozialen Förderung, für aktives Altern und für eine stärkere Rolle älterer Menschen in der Gesellschaft.</p><p>Ursprünglich vor allem für ältere Menschen gedacht, steht die LUTE Menschen jeden Alters offen und legt besonderen Wert auf den Dialog zwischen Generationen, Nationalitäten und Kulturen. In diesem Verein steht der Mensch im Mittelpunkt – als Bereicherung für sich selbst und für andere, in jedem Alter.</p><p>Sie ist an zehn Standorten in der Provinz Messina tätig und hat rund 1.000 Mitglieder und etwa hundert Ehrenamtliche, die Kurse zu Themen von den kulturellen Traditionen der Region über persönliches Wohlbefinden bis hin zu Wissenschaft und Kunst anbieten.</p><p>Die LUTE legt großen Wert auf die europäische Dimension des Lernens und beteiligt sich an Erasmus+-Projekten, die lokale Kultur- und Handwerkstraditionen mit der europäischen Geschichte verbinden – mit digitalen Werkzeugen ebenso wie mit schriftlichen Quellen, etwa lokalen Bibliotheken und den Erinnerungen der Mitglieder.</p><p>Sie hat an den Erasmus+-Projekten CCH (Gemeinsames Kulturerbe) mit Spanien und Polen (2019–2022) und CAT (Kommunikationskünste) mit Rumänien und Polen (2022–2024) teilgenommen. Die Mitglieder haben mehrfach an europäischen Kulturerfahrungen teilgenommen, sowohl einzeln als auch als Gruppe.</p>",
      partner_hamburg_profile:"Das Seniorenbüro Hamburg e.V. ist ein unabhängiger, gemeinnütziger Verein mit Sitz in Hamburg. Seit vielen Jahren bindet es ältere Menschen durch Ehrenamt und gesellschaftliche Teilhabe ein: Es qualifiziert Ehrenamtliche, baut Unterstützungsnetzwerke in den Stadtteilen auf und setzt Projekte um, die die Fähigkeiten und Erfahrungen älterer Menschen nutzen.",
      partner_hamburg_desc:   "<p>Die Arbeit des Seniorenbüros steht unter dem Motto „Gemeinsam aktiv älter werden“ und richtet sich an Menschen ab 50 Jahren, unabhängig von ihrem sozialen oder kulturellen Hintergrund. Da die Angebote in vielen Stadtteilen Hamburgs stattfinden, sind die Teilnehmenden sehr vielfältig; die meisten sind zwischen 60 und 85 Jahre alt. Der Verein ermutigt sie, sich aktiv am gesellschaftlichen Leben, an Projekten und Programmen zu beteiligen.</p><p>Die Gruppenangebote und Kurse sind niedrigschwellig und richten sich ausdrücklich an Menschen mit geringen finanziellen Mitteln: Sie sind kostenlos oder günstig, sodass alle von einem breiten Angebot profitieren können.</p><p>Die wichtigsten Arbeitsbereiche:</p><ol><li><strong>Förderung des Ehrenamts älterer Menschen.</strong> In Kursen und Einzelberatungen erfahren Interessierte, wie sie das soziale und kulturelle Leben mitgestalten können; die Ehrenamtlichen wirken anschließend in zahlreichen Projekten und Programmen mit.</li><li><strong>Offene Seniorenarbeit.</strong> In 5 Treffpunkten und 40 Gruppen in allen Hamburger Bezirken wird Gemeinschaft gelebt und aktives Altern gefördert.</li><li><strong>Förderung des lebenslangen Lernens.</strong> In den Treffpunkten finden Kurse zu digitalen, sozialen und gesundheitlichen Themen statt, außerdem Kurse rund um das Ehrenamt. Die Ehrenamtlichen werden zu Themen ihrer Tätigkeit geschult, und mit Kooperationspartnern in Hamburg werden Fachveranstaltungen organisiert, etwa zu Empowerment oder sozialer Vielfalt.</li></ol><p>Seit 25 Jahren unterstützt das Seniorenbüro die Hamburger Zeitzeugenbörse: eine überparteiliche Gruppe ehrenamtlicher Frauen und Männer, die sich regelmäßig treffen, um über ihre Erlebnisse zu sprechen und sie im „Zeitzeugenmagazin“ festzuhalten. Ihre Berichte handeln von gesellschaftlich bedeutsamen Ereignissen, die für die jüngeren Generationen bereits Geschichte sind. Einige können noch von der Zeit des Nationalsozialismus erzählen und davon, wie die Diktatur den Alltag prägte; andere berichten von der Nachkriegszeit, dem geteilten Deutschland, dem gesellschaftlichen Wandel und der technischen Entwicklung.</p><p>Das wichtigste Anliegen der Zeitzeuginnen und Zeitzeugen ist es, den Frieden in einem demokratischen Rechtsstaat zu fördern. Deshalb suchen sie das Gespräch mit jungen Menschen: Sie besuchen regelmäßig Hamburger Schulen, erzählen anhand von Fotos und Zeitdokumenten von früher und beantworten die Fragen der Schülerinnen und Schüler. Sie verstehen sich nicht als Historiker, sondern als Zeitzeugen, die Geschichte verständlich und greifbar machen – damit junge Menschen die Vergangenheit ihres Landes besser verstehen, die Gegenwart einordnen und die Zukunft verantwortungsvoll mitgestalten können.</p>",
      partner_preili_profile: "Die Preiļu novada Izglītības pārvalde (Bildungsverwaltung des Bezirks Preiļi) ist die lokale öffentliche Einrichtung, die das Bildungswesen im Gebiet Preiļi in der lettischen Region Lettgallen verwaltet. Sie koordiniert und unterstützt die Bildungsentwicklung im Bezirk, sorgt für Qualität, Zugang und Innovation und arbeitet mit nationalen und europäischen Partnern zusammen, um die Kompetenzen Erwachsener zu stärken.",
      partner_preili_desc:    "<p>Die Bildungsverwaltung fördert die allgemeine Bildung und das lebenslange Lernen und sichert allen Bürgerinnen und Bürgern den Zugang – unabhängig von Alter, Geschlecht, Vorbildung, Wohnort, Einkommen, ethnischer Herkunft oder Behinderung. Sie bietet Erwachsenen hochwertige Bildung, die nützliche Kompetenzen für Beruf, bürgerschaftliches Engagement und persönliche Entwicklung vermittelt, und trägt so zu einer wettbewerbsfähigen Wissenswirtschaft und einer demokratischen Gesellschaft bei.</p><p>Die Bildungsverwaltung betreibt die Seniorenakademie, in der ältere Menschen aus dem Bezirk gemeinsam Neues lernen, Traditionen und Kultur bewahren und Wohlbefinden und eine gesunde Lebensweise fördern. Ihr wichtigstes Ziel ist es, ältere Menschen aktiv an der Zusammenarbeit und an der Entwicklung der Gemeinschaft zu beteiligen.</p><p>Die Einrichtung beschäftigt 23 Personen in strategischen Funktionen und 25 Vertragsmitarbeitende. Rund 350–400 Personen nehmen an den Programmen des lebenslangen Lernens teil, etwa 70 an der Seniorenakademie.</p><p>Die Einrichtung verfügt über Erfahrung mit zahlreichen Projekten für Erwachsene und Jugendliche. Ihr Erasmus+-Mobilitätsprojekt in der Erwachsenenbildung „Vernetzung von Erwachsenenbildnern und Lernenden im Bezirk zur Verbesserung der Lehr- und Lernqualität durch digitale Lernwerkzeuge“ wurde als bestes Erwachsenenbildungsprojekt Lettlands ausgezeichnet und auf der Lifelong Learning Conference in Brüssel (17.–18. April 2024) vorgestellt. Ein weiteres Projekt widmet sich einem nachhaltigen, grünen Lebensstil, der demokratischen Mitverantwortung und dem Verständnis der Werte der EU.</p>",
      country_pl:             "Polen",
      country_it:             "Italien",
      country_de:             "Deutschland",
      country_lv:             "Lettland",

      project_activities_title: "Was wir tun",
      activity_1_title:       "Workshop-Leitfaden",
      activity_1_text:        "Ein methodischer Leitfaden mit Workshop-Szenarien zur EU, konzipiert f\u00fcr Trainer und P\u00e4dagogen, die mit Senioren arbeiten.",
      activity_2_title:       "Workshops \u201eEurop\u00e4isches ABC\u201c",
      activity_2_text:        "Bildungsworkshops f\u00fcr Senioren \u00fcber Geschichte, Institutionen, Werte und allt\u00e4gliche Auswirkungen der Europ\u00e4ischen Union.",
      activity_3_title:       "Stimmen aus der Vergangenheit",
      activity_3_text:        "Eine Sammlung von Erinnerungen der Senioren \u00fcber den EU-Beitritt ihres Landes, um Wissen zwischen Generationen zu teilen.",
      activity_4_title:       "Studienbesuche",
      activity_4_text:        "Besuche der EU-Institutionen in Br\u00fcssel und Stra\u00dfburg, um hautnah zu erleben, wo europ\u00e4ische Entscheidungen getroffen werden.",

      project_impact_title:   "Erwartete Ergebnisse",
      project_impact_1:       "Gr\u00f6\u00dferes Bewusstsein f\u00fcr die Europ\u00e4ische Union und ihre Werte.",
      project_impact_2:       "Ein st\u00e4rkeres Gef\u00fchl gemeinsamer europ\u00e4ischer Identit\u00e4t unter Senioren.",
      project_impact_3:       "Mehr b\u00fcrgerschaftliche Beteiligung und Vertrauen in europ\u00e4ische Institutionen.",
      project_impact_4:       "Verringerung der Euroskepsis durch faktenbasierte Bildung.",
      project_impact_5:       "Hochwertige Bildungsmaterialien zur Wiederverwendung durch andere Organisationen.",

      footer_text:       "Erasmus+-Projekt", footer_cookie: "Cookie Policy", footer_wa: "Kontakt", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
      btn_top_aria:      "Nach oben",
      lang_switcher_aria:"Sprache w\u00e4hlen",
      flag_aria:         "Italienische Flagge",
      nav_menu_label:    "Men\u00fc",
      nav_menu_aria:     "Navigationsmen\u00fc \u00f6ffnen",
    },

    // ----------------------------------------------------------
    // LATVIEŠU
    // ----------------------------------------------------------
    lv: {
    skip_link:"Pāriet uz saturu",
      page_title:        "Europe Can Be Liked (ECBL) — Erasmus+ projekts par Eiropas Savienību",
      hero_eyebrow:      "Erasmus+ projekts",
      hero_title:        "Erasmus+ projekts",
      hero_subtitle:     "Erasmus+ projekts par Eiropas pilson\u012bbu, iesaistot It\u0101liju, V\u0101ciju, Latviju un Poliju.",
      nav_home:          "S\u0101kums",
      nav_project:       "Projekts",
      nav_wp2:           "WP2",
      nav_wp3:           "WP3",
      nav_wp4:           "WP4",
      nav_download:      "Download",
      nav_fb:            "FB",
      coming_title:      "Saturs tiek sagatavotas",
      coming_text:       "\u0160\u012bs lapas saturs pa\u0161laik tiek sagatavotas. L\u016bdzu, apmekl\u0113jiet m\u016bs dr\u012bz.",

      news_title:        "Jaunumi",
      news_lead:         "Šeit tiks publicēti atjauninājumi par projekta aktivitātēm.",
      news_cat1:         "Sapulces",
      news_cat2:         "Semināri",
      news_cat3:         "Projekta aktivitātes",
      news_cat4:         "Izplatīšana",
      news_coming:       "Drīzumā",

      project_intro_title:    "Par ECBL projektu",
      project_intro_lead:     "\u201eEurope Can Be Liked\u201d (ECBL) ir Erasmus+ sadarb\u012bbas projekts pieaugu\u0161o izgl\u012bt\u012bb\u0101. Tas pretojas eiroskepticismam \u2014 \u012bpa\u0161i jaun\u0101k\u0101s paaudzes vid\u016b \u2014 izmantojot senioru atmi\u0146as un pieredzi.",
      project_intro_lead2:    "Apvienojot v\u0113sturisk\u0101s zin\u0101\u0161anas ar m\u016bsdien\u012bg\u0101m m\u0101c\u012bbu metod\u0113m, projekts veicina inform\u0113t\u012bbu par Eiropas Savien\u012bbu un stiprina kop\u012bgu Eiropas identit\u0101ti caur darbn\u012bc\u0101m, publik\u0101cij\u0101m, publisk\u0101m debat\u0113m un m\u0101c\u012bbu viz\u012bt\u0113m.",
      project_meta_duration:        "Ilgums",
      project_meta_duration_note:   "24 m\u0113ne\u0161i",
      project_meta_action:          "Darb\u012bba",
      project_meta_action_note:     "Pieaugu\u0161o izgl\u012bt\u012bbas partner\u012bba",
      project_meta_priority:        "Priorit\u0101te",
      project_meta_priority_value:  "Kop\u012bgas v\u0113rt\u012bbas",
      project_meta_priority_note:   "Pilsonisk\u0101 l\u012bdzdal\u012bba un iesaist\u012b\u0161an\u0101s",

      project_goals_title:    "Projekta m\u0113r\u0137i",
      project_goal_1:         "Stiprin\u0101t Eiropas identit\u0101tes izj\u016btu senioru un citu dal\u012bbnieku vid\u016b.",
      project_goal_2:         "Veicin\u0101t senioru soci\u0101lo aktiviz\u0113\u0161anu un dal\u012bbu sabiedriskaj\u0101 dz\u012bv\u0113.",
      project_goal_3:         "Izstr\u0101d\u0101t inovat\u012bvus izgl\u012bt\u012bbas materi\u0101lus par Eiropas Savien\u012bbu.",
      project_goal_4:         "Apkopot un public\u0113t senioru atmi\u0146as par vi\u0146u valstu pievieno\u0161anos ES.",
      project_goal_5:         "Veicin\u0101t dialogu starp paaudz\u0113m caur publisk\u0101m debat\u0113m un darbn\u012bc\u0101m.",

      project_partners_title: "\u010cetri partneri",
      project_partners_lead:  "Projekts apvieno \u010detras organiz\u0101cijas, kas akt\u012bvi darbojas pieaugu\u0161o izgl\u012bt\u012bb\u0101 un senioru iesaist\u012b\u0161an\u0101 vis\u0101 Eirop\u0101.",
      partner_lead_badge:     "Koordinators",
      partner_code_label:     "Erasmus+ kods (OID)",
      partner_type_label:     "Organizācijas veids",
      partner_web_label:      "Tīmekļa vietne",
      partner_type_foundation:"Bezpeļņas nodibinājums",
      partner_type_association:"Bezpeļņas biedrība",
      partner_type_public:    "Vietējā publiskā iestāde",
      partner_more:           "Lasīt vairāk",
      partner_less:           "Rādīt mazāk",
      partner_auto_tr:        "(automātiskais tulkojums)",
      partner_aktywni_profile:"Fundacja “Aktywni XXI” ir nevalstiska bezpeļņas organizācija, kuras mītne atrodas Jeleņa Gurā, Lejassilēzijas vojevodistē (Dolnośląskie). Fonds dibināts 2010. gada 6. decembrī un jau vairāk nekā desmit gadus darbojas pieaugušo izglītībā, veicinot mūžizglītību un aktīvu līdzdalību sabiedrības dzīvē.",
      partner_aktywni_desc:   "<p>Fonds tika izveidots, lai atbalstītu bērnu, jauniešu un pieaugušo radošo attīstību, īpašu uzmanību pievēršot senioriem. Tas vada Jeleņa Guras Trešā vecuma akadēmiju, kas piedāvā lekcijas, tikšanās ar interesantām personibām un ekskursijas.</p><p>Seniori ir fonda izglītības aktivitāšu galvenā mērķgrupa, taču tiek īstenotas arī starppaaudžu aktivitātes. Jau vairākus gadus “Aktywni XXI” sadarbojas ar OHP (Ochotnicze Hufce Pracy, Brīvprātīgo darba vienības) Jeleņa Guras nodaļu, rīkojot kopīgas kultūras darbnīcas, Ziemassvētku tikšanās un sociālas akcijas.</p><p>Fonda misija ir izplatīt mūžizglītības ideju senioru vidū. Tam bija nepieciešams pievilcīgs izglītības piedāvājums, kas piesaistītu jaunus dalībniekus un mudinātu viņus aktīvi iesaistīties. Pateicoties pasniedzējiem un izglītotājiem, kas sadarbojas ar fondu, ir izveidoti jauni kursi, kas paplašinājuši piedāvājuma tematiku.</p><p>Pasniedzēju dalība kursā “Teātris izglītībā: holistiska pieeja mācīšanai ar teātra metodēm” ļāva ieviest teātra darbnīcas, kas ir ļoti populāras un notiek regulāri kopš 2022. gada februāra, kā arī rosināja sadarbības projektu “Teātra metožu izmantošana pieaugušo izglītībā”. Projektā “Sociālās prasmes – jauni izaicinājumi” pasniedzēji apguva trīs kursus par sociālajām prasmēm; tā rezultātā tapa darbnīcas “Aktīvs pilsonis” un kursi “Seniora dzīve harmonijā ir brīnums” par rīcību sarežģītās situācijās, attiecību veidošanu un saskarsmi. Pasniedzēji izstrādāja arī galda spēli sociālo un pilsonisko prasmju attīstīšanai, ko izmanto daudzās fonda aktivitātēs.</p><p>Jaunās izglītības metodes palielināja Jeleņa Guras Trešā vecuma akadēmijas dalībnieku skaitu: jaunās programmas un pievilcīgākas nodarbību formas piesaistīja vairāk senioru, ko apliecina reģistrāciju pieaugums nākamajos semestros.</p>",
      partner_lute_profile:   "LUTE Milazzo (Brīvā Trešā vecuma universitāte) ir nevalstiska bezpeļņas biedrība, kuras mītne atrodas Milaco Sicīlijā un kas darbojas pieaugušo izglītības jomā. Jau daudzus gadus tā īsteno izglītības, kultūras un sociālas aktivitātes vietējai kopienai, īpašu uzmanību pievēršot senioriem.",
      partner_lute_desc:      "<p>LUTE ir valsts mēroga apvienības AUSER pamatstruktūra: tā darbojas sociālās veicināšanas jomā un atbalsta aktīvu novecošanu un senioru lomas stiprināšanu sabiedrībā.</p><p>Lai gan sākotnēji LUTE bija paredzēta galvenokārt senioriem, tā ir atvērta visu vecumu cilvēkiem un īpaši rūpējas par dialogu starp paaudzēm, tautībām un kultūrām. Tā ir biedrība, kurā cilvēks ir galvenais un ir resurss sev un citiem jebkurā vecumā.</p><p>Tā darbojas desmit filiālēs Mesīnas provincē, un tajā ir aptuveni 1000 biedru un ap simts brīvprātīgo, kas vada kursus par tēmām no novada kultūras tradīcijām un personīgās labsajūtas līdz zinātnei un mākslai.</p><p>LUTE pievērš lielu uzmanību mācību Eiropas dimensijai un piedalās Erasmus+ projektos, kas saista vietējās kultūras un amatniecības tradīcijas ar Eiropas vēsturi, izmantojot gan digitālos rīkus, gan rakstītus avotus, piemēram, vietējās bibliotēkas un biedru atmiņas.</p><p>Tā ir piedalījusies Erasmus+ projektos CCH (Kopējais kultūras mantojums) kopā ar Spāniju un Poliju (2019–2022) un CAT (Komunikācijas māksla) kopā ar Rumāniju un Poliju (2022–2024). Biedri vairākkārt ir piedalījušies Eiropas kultūras pieredzēs gan individuāli, gan kā grupa.</p>",
      partner_hamburg_profile:"Seniorenbüro Hamburg e.V. ir neatkarīga bezpeļņas biedrība Hamburgā. Jau daudzus gadus tā iesaista seniorus ar brīvprātīgā darba un sabiedriskās līdzdalības palīdzību: apmāca brīvprātīgos, veido vietējos atbalsta tīlus un īsteno projektus, kas izmanto senioru prasmes un pieredzi.",
      partner_hamburg_desc:   "<p>Seniorenbüro darbs balstās uz devīzi “Aktīvi novecot kopā”, un tas ir paredzēts cilvēkiem no 50 gadu vecuma neatkarīgi no viņu sociālās vai kultūras izcelsmes. Tā kā aktivitātes notiek daudzās Hamburgas daļās, dalībnieki ir ļoti dažādi; lielākā daļa ir 60–85 gadus veci. Biedrība mudina viņus aktīvi piedalīties sabiedrības dzīvē, projektos un programmās.</p><p>Grupu nodarbības un kursi ir viegli pieejami un īpaši paredzēti cilvēkiem ar ierobežotiem finanšu līdzekļiem: tie ir bezmaksas vai lēti, tāpēc ikviens var izmantot plašo piedāvājumu.</p><p>Galvenās darbības jomas:</p><ol><li><strong>Brīvprātīgā darba veicināšana senioru vidū.</strong> Kursos un individuālās konsultācijās interesenti uzzina, kā var dot ieguldījumu sabiedrības un kultūras dzīvē; pēc tam brīvprātīgie piedalās daudzos projektos un programmās.</li><li><strong>Atvērts darbs ar senioriem.</strong> 5 tikšanās vietās un 40 grupās visos Hamburgas rajonos dalībnieki piedzīvo kopienu un aktīvu novecošanu.</li><li><strong>Mūžizglītības veicināšana.</strong> Tikšanās vietās notiek kursi par digitālām, sociālām un veselības tēmām, kā arī kursi par brīvprātīgo darbu. Brīvprātīgie tiek apmācīti par tēmām, kas saistītas ar viņu darbu, un kopā ar Hamburgas partneriem tiek rīkoti speciāli pasākumi, piemēram, par iespēcināšanu un sociālo daudzveidību.</li></ol><p>Jau 25 gadus Seniorenbüro atbalsta Hamburgas “Laikmeta lieciniekus” (Zeitzeugen): nepartejisku brīvprātīgo sieviešu un vīriešu grupu, kas regulāri tiekas, lai stāstītu par savu pieredzi un pierakstītu to žurnālā “Zeitzeugenmagazin”. Viņu stāsti ir par vēsturiskiem un sabiedriskiem notikumiem, kas jaunākajām paaudzēm jau ir vēsture. Daži vēl var pastāstīt par nacionālsociālisma laiku un to, kā diktatūra ietekmēja ikdienas dzīvi; citi – par pēckara gadiem, sadalīto Vāciju, sabiedrības pārmaiņām un tehnikas attīstību.</p><p>Laikmeta liecinieku galvenais mērķis ir veicināt mieru demokrātiskā tiesiskā valstī. Tāpēc viņi runā ar jauniešiem: regulāri apmeklē Hamburgas skolas, stāsta par savu pieredzi, izmantojot tā laika fotogrāfijas un dokumentus, un atbild uz skolēnu jautājumiem. Viņi sevi neuzskata par vēsturniekiem, bet par lieciniekiem, kas padara vēsturi saprotamu un taustāmu, palīdzot jauniešiem izprast savas valsts pagātni, lai saprastu tagadni un atbildīgi veidotu nākotni.</p>",
      partner_preili_profile: "Preiļu novada Izglītības pārvalde ir vietējā publiskā iestāde, kas pārvalda izglītību Preiļu novadā Latgalē. Tā koordinē un atbalsta izglītības attīstību novadā, nodrošinot kvalitāti, pieejamību un inovāciju, un sadarbojas ar nacionāliem un Eiropas partneriem, lai stiprinātu pieaugušo prasmes.",
      partner_preili_desc:    "<p>Pārvalde veicina vispārējo izglītību un mūžizglītību, nodrošinot tās pieejamību visiem iedzīvotājiem neatkarīgi no vecuma, dzimuma, iepriekšējās izglītības, dzīvesvietas, ienākumu līmeņa, etniskās izcelsmes vai funkcionāliem traucējumiem. Tā piedāvā pieaugušajiem kvalitatīvu izglītību, kas sniedz noderīgas prasmes darbam, pilsoniskai līdzdalībai un personības izaugsmei, un veicina konkurētspējīgu zināšanu ekonomiku un demokrātisku sabiedrību.</p><p>Pārvalde vada Senioru akadēmiju, kas apvieno novada seniorus, lai kopā apgūtu jaunas zināšanas un prasmes, saglabātu tradīcijas un kultūru un veicinātu labsajūtu un veselīgu dzīvesveidu. Tās galvenais mērķis ir aktīvi iesaistīt seniorus sadarbībā un kopienas attīstībā.</p><p>Iestādē strādā 23 darbinieki stratēģiskos amatos un 25 darbinieki uz līguma pamata. Mūžizglītības programmās piedalās aptuveni 350–400 cilvēku, bet Senioru akadēmijā – aptuveni 70.</p><p>Iestādei ir pieredze daudzos projektos pieaugušajiem un jauniešiem. Tās Erasmus+ pieaugušo izglītības mobilitātes projekts “Pieaugušo izglītotāju un izglītojamo tīlošanās novadā, lai uzlabotu mācīšanas un mācīšanās kvalitāti ar digitālo mācību rīku palīdzību” tika atzīts par labāko pieaugušo izglītības projektu Latvijā un prezentēts Mūžizglītības konferencē Briselē (2024. gada 17.–18. aprīlī). Vēl viens projekts ir veltīts ilgtspējīgam, zaļam dzīvesveidam, demokrātiskai līdzatbildībai un ES vērtību izpratnei.</p>",
      country_pl:             "Polija",
      country_it:             "It\u0101lija",
      country_de:             "V\u0101cija",
      country_lv:             "Latvija",

      project_activities_title: "Ko m\u0113s dar\u0101m",
      activity_1_title:       "Darbn\u012bcu rokasgr\u0101mata",
      activity_1_text:        "Metodiska rokasgr\u0101mata ar darbn\u012bcu scen\u0101rijiem par ES, izstr\u0101d\u0101ta treneriem un izgl\u012bt\u012bbas darbiniekiem, kas str\u0101d\u0101 ar senioriem.",
      activity_2_title:       "Darbn\u012bcas \u201eEiropas ABC\u201d",
      activity_2_text:        "Izgl\u012bt\u012bbas darbn\u012bcas senioriem par Eiropas Savien\u012bbas v\u0113sturi, instit\u016bcij\u0101m, v\u0113rt\u012bb\u0101m un ikdienas ietekmi.",
      activity_3_title:       "Balsis no pag\u0101tnes",
      activity_3_text:        "Senioru atmi\u0146u kr\u0101jums par vi\u0146u valstu pievieno\u0161anos ES, lai dal\u012btos zin\u0101\u0161an\u0101s starp paaudz\u0113m.",
      activity_4_title:       "M\u0101c\u012bbu viz\u012btes",
      activity_4_text:        "Viz\u012btes ES iest\u0101d\u0113s Brisel\u0113 un Strasb\u016br\u0101, lai person\u012bgi pieredz\u0113tu, kur tiek pie\u0146emti Eiropas l\u0113mumi.",

      project_impact_title:   "Sagaid\u0101mie rezult\u0101ti",
      project_impact_1:       "Liel\u0101ka inform\u0113t\u012bba par Eiropas Savien\u012bbu un t\u0101s v\u0113rt\u012bb\u0101m.",
      project_impact_2:       "Sp\u0113c\u012bg\u0101ka kop\u012bgas Eiropas identit\u0101tes izj\u016bta senioru vid\u016b.",
      project_impact_3:       "Liel\u0101ka pilsonisk\u0101 l\u012bdzdal\u012bba un uztic\u012bba Eiropas iest\u0101d\u0113m.",
      project_impact_4:       "Eiroskepticisma samazin\u0101\u0161ana caur uz faktiem balst\u012btu izgl\u012bt\u012bbu.",
      project_impact_5:       "Augstas kvalit\u0101tes izgl\u012bt\u012bbas materi\u0101li citu organiz\u0101ciju atk\u0101rtotai izmanto\u0161anai.",

      footer_text:       "Erasmus+ projekts", footer_cookie: "Cookie Policy", footer_wa: "Kontakti", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
      btn_top_aria:      "Uz aug\u0161u",
      lang_switcher_aria:"Izv\u0113l\u0113ties valodu",
      flag_aria:         "It\u0101lijas karogs",
      nav_menu_label:    "Izv\u0113lne",
      nav_menu_aria:     "Atv\u0113rt navig\u0101cijas izv\u0113lni",
    },

  };

  // ============================================================
  // MOTORE DI TRADUZIONE
  // ============================================================
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

  // Siti dei partner nella lingua scelta: se il sito è in un'altra lingua si apre tradotto da Google Traduttore;
  // Facebook mostra menu e pulsanti nella lingua scelta (i post hanno già "Visualizza traduzione")
  var FB_LOCALE = { en: 'en_GB', it: 'it_IT', pl: 'pl_PL', de: 'de_DE', lv: 'lv_LV' };
  function linkPartner(lang) {
    document.querySelectorAll('a[data-site-lang]').forEach(function (a) {
      var url = a.getAttribute('data-site-url');
      var orig = a.getAttribute('data-site-lang');
      var nota = a.parentNode.querySelector('.partner-card__auto');
      var tradotto = false;
      if (orig === 'fb') {
        a.href = url + '?locale=' + FB_LOCALE[lang];
      } else if (orig === lang) {
        a.href = url;
      } else {
        var u = new URL(url);
        var host = u.hostname.replace(/-/g, '--').replace(/\./g, '-') + '.translate.goog';
        a.href = 'https://' + host + u.pathname + '?_x_tr_sl=' + orig + '&_x_tr_tl=' + lang + '&_x_tr_hl=' + lang;
        tradotto = true;
      }
      if (nota) nota.hidden = !tradotto;
    });
  }

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
    linkPartner(lang);

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

    // Desktop: bandierine singole
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

    // Mobile: pulsante singolo + dropdown
    var mobileBtn = document.createElement('button');
    mobileBtn.className = 'lang-mobile-btn';
    mobileBtn.id = 'langMobileBtn';
    mobileBtn.setAttribute('type', 'button');
    mobileBtn.setAttribute('aria-haspopup', 'true');
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.setAttribute('aria-label', 'Select language');

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
