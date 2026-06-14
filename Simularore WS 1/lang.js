// ============================================================
// lang.js — Sistema di traduzione multilingue
// Erasmus LUTE · Simulation Game — La Spiaggia di Europa
// Lingue: en · it · pl · de · lv
// ============================================================

(function () {

  const TRANSLATIONS = {

    // ----------------------------------------------------------
    // ENGLISH
    // ----------------------------------------------------------
    en: {
    skip_link:"Skip to content",
      page_title:             "Simulation Game — The Beach of Europe",
      hero_eyebrow:           "Workshop 1 · Simulation",
      hero_title:             "The Beach of Europe",
      hero_subtitle:          "A simulation on free competition in services and the role of the European Commission as Guardian of the Treaties.",
      hero_guide: "Guide: <strong>Pina Mastroieni</strong>",
      tag_group:              "LUTE Group",
      tag_audience:           "Adults / Seniors",
      tag_duration:           "45 – 60 minutes",

      info_duration_label:    "Duration",
      info_duration_note:     "minutes",
      info_participants_label:"Participants",
      info_participants_note: "6 roles",
      info_type_label:        "Type",
      info_type_value:        "Simulation",
      hero_pill_audience_label: "Audience",

      section_intro:     "About the Game",
      intro_html:        "A simulation game for people over 60 at their first experience should be <strong>very simple</strong>, concrete, with clear roles and recognisable situations. The aim is to help understand the Bolkestein Directive and, more generally, <strong>how free competition in services works</strong> and the role of the Commission as <em>Guardian of the Treaties</em>.",

      section_objective: "General Objective",
      objective_text:    "To allow participants to experience, in a light and guided way, how the EU intervenes when a State does not respect the common rules on competition in services \u2014 as in the case of beach concessions.",

      section_scenario:  "Base Scenario",
      scenario_html:     "An imaginary municipality, <strong>\u00abMarina Serena\u00bb</strong>, must decide how to manage beach concessions. The Bolkestein Directive requires <strong>transparent and competitive tendering procedures</strong>. Some operators want to keep their historical concessions, others want to participate in new tenders. Citizens demand more free beaches. Meanwhile, the <strong>European Commission</strong> observes and intervenes if the State does not correctly apply the rules.",

      section_structure: "Game Structure (45 \u2013 60 min)",

      step1_title: "Introduction",
      step1_intro: "The facilitator explains:",
      step1_li1:   "What the <strong>Bolkestein Directive</strong> is (in simple terms)",
      step1_li2:   "What <em>free competition in services</em> means",
      step1_li3:   "The role of the Commission as <strong>Guardian of the Treaties</strong>",

      step2_title: "Role Assignment",
      step2_text:  "Each participant receives a brief character card (see below).",

      step3_title: "Phase 1 \u2014 The Requests",
      step3_intro: "Each role presents their interests:",
      step3_li1:   "who wants to keep the concession",
      step3_li2:   "who wants to participate in the tender",
      step3_li3:   "who wants more free beaches",
      step3_li4:   "who must enforce EU rules",

      step4_title: "Phase 2 \u2014 The Municipality\u2019s Decision",
      step4_intro: "The \u201cMunicipality\u201d group proposes a solution:",
      step4_li1:   "hold a public tender?",
      step4_li2:   "extend the existing concessions?",
      step4_li3:   "increase free beaches?",
      step4_li4:   "find a compromise?",

      step5_title: "Phase 3 \u2014 The Commission\u2019s Intervention",
      step5_intro: "The \u201cEuropean Commission\u201d group assesses whether the decision respects EU rules. It can:",
      step5_li1:   "approve",
      step5_li2:   "request modifications",
      step5_li3:   "initiate an infringement procedure (in a simplified, non-technical form)",

      step6_title: "Final Debriefing",
      step6_intro: "Guided discussion:",
      step6_li1:   "What rights came into conflict?",
      step6_li2:   "Is it easy to balance enterprise and public interest?",
      step6_li3:   "Why does the EU intervene?",
      step6_li4:   "What have we learned about competition?",

      section_skills: "Skills the Game Develops",
      skill_1:        "Understand the role of the Commission as Guardian of the Treaties.",
      skill_2:        "Understand why the EU requires transparent tendering.",
      skill_3_html:   "Recognise conflicts between rights: <em>right to enterprise</em> and <em>citizens\u2019 right of access to the sea</em>.",
      skill_4:        "Develop critical thinking and mediation skills.",

      section_roles:        "Role Cards",
      roles_obj_title:      "Objectives",
      roles_mot_title:      "Motivations",
      roles_phrases_title:  "Useful Phrases",

      role1_badge: "Role 1 \u2014 Historical Operator",
      role1_name:  "Giovanni Rinaldi",
      role1_meta:  "62 years \u00b7 Beach concession operator for over 30 years",
      role1_obj1:  "Keep the concession without a new tender.",
      role1_obj2:  "Defend investments made over the years.",
      role1_obj3:  "Convince the Municipality that continuity guarantees quality and safety.",
      role1_mot1:  "\u201cI have always worked well and respected the rules.\u201d",
      role1_mot2:  "\u201cIf a big company from outside comes, I cannot compete.\u201d",
      role1_mot3:  "\u201cMy family lives from this work.\u201d",
      role1_p1:    "\u201cYou cannot cancel thirty years of experience.\u201d",
      role1_p2:    "\u201cCompetition is fine, but it must be fair.\u201d",
      role1_p3:    "\u201cWe need to protect those who have invested in the territory.\u201d",

      role2_badge: "Role 2 \u2014 New Entrepreneur",
      role2_name:  "Sara Conti",
      role2_meta:  "35 years \u00b7 Young local entrepreneur (or European company)",
      role2_obj1:  "Obtain a real opportunity to participate in the tender.",
      role2_obj2:  "Promote transparency and competition.",
      role2_obj3:  "Show that new operators can bring innovation.",
      role2_mot1:  "\u201cEuropean rules are there to avoid favouritism.\u201d",
      role2_mot2:  "\u201cCompetition can improve services and lower prices.\u201d",
      role2_mot3:  "\u201cEveryone must have the same opportunities.\u201d",
      role2_p1:    "\u201cA public tender is a right, not a threat.\u201d",
      role2_p2:    "\u201cAn open market benefits citizens.\u201d",
      role2_p3:    "\u201cI don\u2019t want to take anything from anyone \u2014 just have a chance.\u201d",

      role3_badge: "Role 3 \u2014 Citizen / Environmentalist",
      role3_name:  "Maria Leone",
      role3_meta:  "58 years \u00b7 Spokesperson for residents and beachgoers",
      role3_obj1:  "Increase free beaches.",
      role3_obj2:  "Guarantee access to the sea for everyone.",
      role3_obj3:  "Prevent the coastline from becoming purely a commercial affair.",
      role3_mot1:  "\u201cThe sea is a common good.\u201d",
      role3_mot2:  "\u201cToo many concessions limit citizens\u2019 freedom.\u201d",
      role3_mot3:  "\u201cThere must be a balance between enterprise and public interest.\u201d",
      role3_p1:    "\u201cWe cannot privatise everything.\u201d",
      role3_p2:    "\u201cFamilies must be able to go to the beach without paying.\u201d",
      role3_p3:    "\u201cNature must be protected.\u201d",

      role4_badge: "Role 4 \u2014 Municipality of Marina Serena",
      role4_name:  "Councillor Luca Ferri",
      role4_meta:  "55 years \u00b7 Head of concessions and local decisions",
      role4_obj1:  "Find a compromise between operators, citizens and EU rules.",
      role4_obj2:  "Avoid conflicts and protests.",
      role4_obj3:  "Avoid triggering an infringement procedure.",
      role4_mot1:  "\u201cWe must respect both national and European law.\u201d",
      role4_mot2:  "\u201cThe Municipality must guarantee services and public access.\u201d",
      role4_mot3:  "\u201cWe cannot disappoint everyone.\u201d",
      role4_p1:    "\u201cLet us look for a shared solution.\u201d",
      role4_p2:    "\u201cEuropean regulations are not optional.\u201d",
      role4_p3:    "\u201cWe need a balance between different rights.\u201d",

      role5_badge: "Role 5 \u2014 European Commission",
      role5_name:  "Isabelle Moreau",
      role5_meta:  "48 years \u00b7 Official of the Directorate-General for Internal Market",
      role5_obj1:  "Verify that the State correctly applies the Bolkestein Directive.",
      role5_obj2:  "Guarantee competition and transparency.",
      role5_obj3:  "Intervene if the rules are not respected.",
      role5_mot1:  "\u201cThe Commission is the Guardian of the Treaties.\u201d",
      role5_mot2:  "\u201cThe rules apply to all Member States.\u201d",
      role5_mot3:  "\u201cCompetition protects consumers.\u201d",
      role5_p1:    "\u201cIs your decision in line with European standards?\u201d",
      role5_p2:    "\u201cWe may ask for clarification or open a procedure.\u201d",
      role5_p3:    "\u201cThe goal is not to punish, but to enforce the common rules.\u201d",

      role6_badge: "Role 6 \u2014 European Tourist",
      role6_name:  "Peter Schneider",
      role6_meta:  "60 years \u00b7 German tourist who often visits Italy",
      role6_obj1:  "Enjoy quality services at fair prices.",
      role6_obj2:  "Find accessible beaches.",
      role6_obj3:  "Understand why there are differences between countries.",
      role6_mot1:  "\u201cIn other European countries access to the sea is freer.\u201d",
      role6_mot2:  "\u201cCompetition can improve the offer.\u201d",
      role6_mot3:  "\u201cI am a European consumer, not just a tourist.\u201d",
      role6_p1:    "\u201cI would like more price transparency.\u201d",
      role6_p2:    "\u201cWhy are some beaches entirely private?\u201d",
      role6_p3:    "\u201cI care about quality, not who manages it.\u201d",

      footer_text:       "Erasmus+ Project \u00b7 Simulation Game \u2014 The Beach of Europe", footer_cookie: "Cookie Policy", footer_wa: "Contact", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
      btn_top:           "\u2191 Top",
      lang_switcher_aria:"Select language",
      // --- Approfondimento: Direttiva Bolkestein ---
      bolk_section: "The Bolkestein Directive — In Depth",
      bolk_lead: "This is the European rule at the heart of the game. Below, in simple terms: what it is, what it requires and why it also concerns Italy's beaches.",
      bolk_what_title: "What it is",
      bolk_what_p: "<strong>Directive 2006/123/EC</strong>, approved in 2006, is a European law that regulates the free movement of services within the EU internal market. It establishes that:",
      bolk_what_li1: "service providers (businesses, professionals, operators) can work throughout the EU without unjustified obstacles;",
      bolk_what_li2: "States must guarantee transparency, fair competition and no discrimination between national and foreign operators.",
      bolk_why_title: "Why it was introduced",
      bolk_why_p: "Before the directive, many countries had different and often restrictive rules that prevented companies from operating freely. The aim is to simplify and make the services market — about 70% of the European economy — more competitive.",
      bolk_aim_title: "What it requires of States",
      bolk_aim_intro: "Member States must:",
      bolk_aim_li1: "remove unnecessary barriers to access to economic activities;",
      bolk_aim_li2: "make the procedures for obtaining authorisations transparent;",
      bolk_aim_li3: "ensure impartial public tenders when a resource is limited (such as beaches);",
      bolk_aim_li4: "avoid automatic extensions of public concessions.",
      bolk_beach_title: "Beaches: a limited resource",
      bolk_beach_p: "Beaches are a limited natural resource: they cannot be assigned «forever» to the same operators without an open and transparent tender. According to the EU:",
      bolk_beach_li1: "all operators must have the chance to take part in a tender;",
      bolk_beach_li2: "citizens must be able to enjoy free beaches and quality services.",
      bolk_comm_title: "The role of the European Commission",
      bolk_comm_p: "The Commission is the <strong>Guardian of the Treaties</strong>: it checks that States respect the common rules. If a State does not apply a directive correctly, it can:",
      bolk_comm_li1: "send a reminder letter;",
      bolk_comm_li2: "ask for changes to the national law;",
      bolk_comm_li3: "bring the State before the Court of Justice.",
      bolk_comm_note: "This process is not punitive: it serves to ensure that all European citizens have the same rights.",
      bolk_italy_title: "The case of Italy",
      bolk_italy_p: "In Italy, for many years concessions were automatically extended without tenders. The Commission challenged this practice because it breaches the directive and the principles of competition, and opened an infringement procedure against Italy.",
      bolk_italy_gov: "<strong>The thesis of the Italian government:</strong> «67% of the Italian coasts are free, so there is no scarcity: Bolkestein does not apply to existing concessions».",
      bolk_italy_reply_intro: "This claim does not hold up legally, because:",
      bolk_italy_li1: "the EU Court of Justice assesses scarcity at the local level, not the national one;",
      bolk_italy_li2: "many tourist municipalities have 80–90% of beaches under concession → a scarce resource;",
      bolk_italy_li3: "the «free» 67% also includes stretches that are rocky, protected or not suitable for bathing;",
      bolk_italy_li4: "the EU Court has already ruled that automatic renewals are unlawful.",
      bolk_concl: "In practice: scarcity is measured municipality by municipality, not on the national average. So even with 67% of «free» beaches, the Bolkestein Directive applies, and concessions must be awarded through transparent and competitive procedures.",
      flag_aria:         "Italian flag",
    },

    // ----------------------------------------------------------
    // ITALIANO
    // ----------------------------------------------------------
    it: {
    skip_link:"Salta al contenuto",
      page_title:             "Gioco di Simulazione \u2014 La Spiaggia di Europa",
      hero_eyebrow:           "Workshop 1 · Simulazione",
      hero_title:             "La Spiaggia di Europa",
      hero_subtitle:          "Una simulazione sulla libera concorrenza nei servizi e il ruolo della Commissione Europea come Guardiana dei Trattati.",
      hero_guide: "Guida: <strong>Pina Mastroieni</strong>",
      tag_group:              "Gruppo LUTE",
      tag_audience:           "Adulti / Senior",
      tag_duration:           "45 \u2013 60 minuti",

      info_duration_label:    "Durata",
      info_duration_note:     "minuti",
      info_participants_label:"Partecipanti",
      info_participants_note: "6 ruoli",
      info_type_label:        "Tipo",
      info_type_value:        "Simulazione",
      hero_pill_audience_label: "Pubblico",

      section_intro:     "Presentazione del Gioco",
      intro_html:        "Un gioco di simulazione per persone over 60 alla loro prima esperienza deve essere <strong>molto semplice</strong>, concreto, con ruoli chiari e situazioni riconoscibili. L\u2019obiettivo \u00e8 far capire la Direttiva Bolkestein e, pi\u00f9 in generale, <strong>come funziona la libera concorrenza nei servizi</strong> e il ruolo della Commissione come <em>Guardiana dei Trattati</em>.",

      section_objective: "Obiettivo Generale",
      objective_text:    "Permettere ai partecipanti di sperimentare, in modo leggero e guidato, come l\u2019UE interviene quando uno Stato non rispetta le regole comuni sulla concorrenza nei servizi \u2014 come nel caso delle concessioni balneari.",

      section_scenario:  "Scenario di Base",
      scenario_html:     "Un Comune immaginario, <strong>\u00abMarina Serena\u00bb</strong>, deve decidere come gestire le concessioni delle spiagge. La Direttiva Bolkestein richiede <strong>procedure trasparenti e concorrenziali</strong>. Alcuni operatori vogliono mantenere le concessioni storiche, altri vogliono partecipare a nuove gare. I cittadini chiedono pi\u00f9 spiagge libere. Nel frattempo, la <strong>Commissione Europea</strong> osserva e interviene se lo Stato non applica correttamente le regole.",

      section_structure: "Struttura del Gioco (45 \u2013 60 min)",

      step1_title: "Introduzione",
      step1_intro: "Il facilitatore spiega:",
      step1_li1:   "Cos\u2019\u00e8 la <strong>Direttiva Bolkestein</strong> (in parole semplici)",
      step1_li2:   "Cosa significa <em>libera concorrenza nei servizi</em>",
      step1_li3:   "Il ruolo della Commissione come <strong>Guardiana dei Trattati</strong>",

      step2_title: "Assegnazione dei Ruoli",
      step2_text:  "Ogni partecipante riceve una scheda-personaggio molto breve (vedi sotto).",

      step3_title: "Fase 1 \u2014 Le Richieste",
      step3_intro: "Ogni ruolo presenta i propri interessi:",
      step3_li1:   "chi vuole mantenere la concessione",
      step3_li2:   "chi vuole partecipare alla gara",
      step3_li3:   "chi vuole pi\u00f9 spiagge libere",
      step3_li4:   "chi deve far rispettare le regole UE",

      step4_title: "Fase 2 \u2014 La Decisione del Comune",
      step4_intro: "Il gruppo \u201cComune\u201d propone una soluzione:",
      step4_li1:   "fare una gara pubblica?",
      step4_li2:   "prorogare le concessioni esistenti?",
      step4_li3:   "aumentare le spiagge libere?",
      step4_li4:   "trovare un compromesso?",

      step5_title: "Fase 3 \u2014 L\u2019Intervento della Commissione",
      step5_intro: "Il gruppo \u201cCommissione Europea\u201d valuta se la decisione rispetta le regole UE. Pu\u00f2:",
      step5_li1:   "approvare",
      step5_li2:   "chiedere modifiche",
      step5_li3:   "avviare una procedura d\u2019infrazione (in forma semplificata e non tecnica)",

      step6_title: "Debriefing Finale",
      step6_intro: "Discussione guidata:",
      step6_li1:   "Quali diritti sono entrati in conflitto?",
      step6_li2:   "\u00c8 facile bilanciare impresa e interesse pubblico?",
      step6_li3:   "Perch\u00e9 l\u2019UE interviene?",
      step6_li4:   "Cosa abbiamo imparato sulla concorrenza?",

      section_skills: "Competenze che il Gioco Sviluppa",
      skill_1:        "Comprendere il ruolo della Commissione come Guardiana dei Trattati.",
      skill_2:        "Capire perch\u00e9 l\u2019UE chiede gare trasparenti.",
      skill_3_html:   "Riconoscere i conflitti tra diritti: <em>diritto all\u2019impresa</em> e <em>diritto dei cittadini all\u2019accesso al mare</em>.",
      skill_4:        "Sviluppare pensiero critico e capacit\u00e0 di mediazione.",

      section_roles:        "Schede Personaggio",
      roles_obj_title:      "Obiettivi",
      roles_mot_title:      "Motivazioni",
      roles_phrases_title:  "Frasi Utili",

      role1_badge: "Ruolo 1 \u2014 Operatore Storico",
      role1_name:  "Giovanni Rinaldi",
      role1_meta:  "62 anni \u00b7 Gestore di stabilimento balneare da oltre 30 anni",
      role1_obj1:  "Mantenere la concessione senza dover partecipare a una nuova gara.",
      role1_obj2:  "Difendere gli investimenti fatti negli anni.",
      role1_obj3:  "Convincere il Comune che la continuit\u00e0 garantisce qualit\u00e0 e sicurezza.",
      role1_mot1:  "\u201cHo sempre lavorato bene e rispettato le regole.\u201d",
      role1_mot2:  "\u201cSe arriva una grande azienda da fuori, io non posso competere.\u201d",
      role1_mot3:  "\u201cLa mia famiglia vive di questo lavoro.\u201d",
      role1_p1:    "\u201cNon potete cancellare trent\u2019anni di esperienza.\u201d",
      role1_p2:    "\u201cLa concorrenza va bene, ma deve essere equa.\u201d",
      role1_p3:    "\u201cServe tutelare chi ha investito nel territorio.\u201d",

      role2_badge: "Ruolo 2 \u2014 Nuovo Imprenditore",
      role2_name:  "Sara Conti",
      role2_meta:  "35 anni \u00b7 Giovane imprenditrice locale (o azienda europea)",
      role2_obj1:  "Ottenere una possibilit\u00e0 reale di partecipare alla gara.",
      role2_obj2:  "Promuovere trasparenza e concorrenza.",
      role2_obj3:  "Mostrare che nuovi operatori possono portare innovazione.",
      role2_mot1:  "\u201cLe regole europee servono a evitare favoritismi.\u201d",
      role2_mot2:  "\u201cLa concorrenza pu\u00f2 migliorare i servizi e abbassare i prezzi.\u201d",
      role2_mot3:  "\u201cTutti devono avere le stesse opportunit\u00e0.\u201d",
      role2_p1:    "\u201cUna gara pubblica \u00e8 un diritto, non una minaccia.\u201d",
      role2_p2:    "\u201cIl mercato aperto porta benefici ai cittadini.\u201d",
      role2_p3:    "\u201cNon voglio togliere nulla a nessuno, ma avere una chance.\u201d",

      role3_badge: "Ruolo 3 \u2014 Cittadino / Ambientalista",
      role3_name:  "Maria Leone",
      role3_meta:  "58 anni \u00b7 Portavoce dei residenti e dei frequentatori della spiaggia",
      role3_obj1:  "Aumentare le spiagge libere.",
      role3_obj2:  "Garantire accesso al mare per tutti.",
      role3_obj3:  "Evitare che la costa diventi solo un affare economico.",
      role3_mot1:  "\u201cIl mare \u00e8 un bene comune.\u201d",
      role3_mot2:  "\u201cTroppi stabilimenti limitano la libert\u00e0 dei cittadini.\u201d",
      role3_mot3:  "\u201cServe equilibrio tra impresa e interesse pubblico.\u201d",
      role3_p1:    "\u201cNon possiamo privatizzare tutto.\u201d",
      role3_p2:    "\u201cLe famiglie devono poter andare al mare senza pagare.\u201d",
      role3_p3:    "\u201cLa natura va protetta.\u201d",

      role4_badge: "Ruolo 4 \u2014 Comune di Marina Serena",
      role4_name:  "Assessore Luca Ferri",
      role4_meta:  "55 anni \u00b7 Responsabile delle concessioni e delle decisioni locali",
      role4_obj1:  "Trovare un compromesso tra operatori, cittadini e regole UE.",
      role4_obj2:  "Evitare conflitti e proteste.",
      role4_obj3:  "Non incorrere in una procedura d\u2019infrazione.",
      role4_mot1:  "\u201cDobbiamo rispettare la legge nazionale ed europea.\u201d",
      role4_mot2:  "\u201cIl Comune deve garantire servizi e accesso pubblico.\u201d",
      role4_mot3:  "\u201cNon possiamo scontentare tutti.\u201d",
      role4_p1:    "\u201cCerchiamo una soluzione condivisa.\u201d",
      role4_p2:    "\u201cLa normativa europea non \u00e8 opzionale.\u201d",
      role4_p3:    "\u201cServe equilibrio tra diritti diversi.\u201d",

      role5_badge: "Ruolo 5 \u2014 Commissione Europea",
      role5_name:  "Isabelle Moreau",
      role5_meta:  "48 anni \u00b7 Funzionaria della Direzione Mercato Interno",
      role5_obj1:  "Verificare che lo Stato applichi correttamente la Direttiva Bolkestein.",
      role5_obj2:  "Garantire concorrenza e trasparenza.",
      role5_obj3:  "Intervenire se le regole non vengono rispettate.",
      role5_mot1:  "\u201cLa Commissione \u00e8 la Guardiana dei Trattati.\u201d",
      role5_mot2:  "\u201cLe regole valgono per tutti gli Stati membri.\u201d",
      role5_mot3:  "\u201cLa concorrenza protegge i consumatori.\u201d",
      role5_p1:    "\u201cLa vostra decisione \u00e8 conforme alle norme europee?\u201d",
      role5_p2:    "\u201cPossiamo chiedere chiarimenti o avviare una procedura.\u201d",
      role5_p3:    "\u201cL\u2019obiettivo non \u00e8 punire, ma far rispettare le regole comuni.\u201d",

      role6_badge: "Ruolo 6 \u2014 Turista Europeo",
      role6_name:  "Peter Schneider",
      role6_meta:  "60 anni \u00b7 Turista tedesco che visita spesso l\u2019Italia",
      role6_obj1:  "Avere servizi di qualit\u00e0 a prezzi equi.",
      role6_obj2:  "Trovare spiagge accessibili.",
      role6_obj3:  "Capire perch\u00e9 ci sono differenze tra Paesi.",
      role6_mot1:  "\u201cIn altri Paesi europei l\u2019accesso al mare \u00e8 pi\u00f9 libero.\u201d",
      role6_mot2:  "\u201cLa concorrenza pu\u00f2 migliorare l\u2019offerta.\u201d",
      role6_mot3:  "\u201cSono un consumatore europeo, non solo un turista.\u201d",
      role6_p1:    "\u201cVorrei pi\u00f9 trasparenza nei prezzi.\u201d",
      role6_p2:    "\u201cPerch\u00e9 alcune spiagge sono tutte private?\u201d",
      role6_p3:    "\u201cMi interessa la qualit\u00e0, non chi gestisce.\u201d",

      footer_text:       "Progetto Erasmus+ \u00b7 Gioco di Simulazione \u2014 La Spiaggia di Europa", footer_cookie: "Cookie Policy", footer_wa: "Contatti", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
      btn_top:           "\u2191 Su",
      lang_switcher_aria:"Seleziona lingua",
      // --- Approfondimento: Direttiva Bolkestein ---
      bolk_section: "La Direttiva Bolkestein — Approfondimento",
      bolk_lead: "È la regola europea al centro del gioco. Qui, in parole semplici: cos'è, cosa chiede e perché riguarda anche le spiagge italiane.",
      bolk_what_title: "Cos'è",
      bolk_what_p: "La <strong>Direttiva 2006/123/CE</strong>, approvata nel 2006, è una legge europea che regola la libera circolazione dei servizi nel mercato interno dell'UE. Stabilisce che:",
      bolk_what_li1: "i prestatori di servizi (imprese, professionisti, operatori) possono lavorare in tutta l'UE senza ostacoli ingiustificati;",
      bolk_what_li2: "gli Stati devono garantire trasparenza, concorrenza leale e nessuna discriminazione tra operatori nazionali ed esteri.",
      bolk_why_title: "Perché è stata introdotta",
      bolk_why_p: "Prima della direttiva, molti Paesi avevano regole diverse e spesso restrittive, che impedivano alle imprese di operare liberamente. L'obiettivo è semplificare e rendere più concorrenziale il mercato dei servizi, che rappresenta circa il 70% dell'economia europea.",
      bolk_aim_title: "Cosa chiede agli Stati",
      bolk_aim_intro: "Gli Stati membri devono:",
      bolk_aim_li1: "eliminare le barriere inutili all'accesso alle attività economiche;",
      bolk_aim_li2: "rendere trasparenti le procedure per ottenere le autorizzazioni;",
      bolk_aim_li3: "garantire gare pubbliche imparziali quando una risorsa è limitata (come le spiagge);",
      bolk_aim_li4: "evitare le proroghe automatiche delle concessioni pubbliche.",
      bolk_beach_title: "Le spiagge: una risorsa limitata",
      bolk_beach_p: "Le spiagge sono una risorsa naturale limitata: non possono essere assegnate «per sempre» agli stessi operatori senza una gara aperta e trasparente. Secondo l'UE:",
      bolk_beach_li1: "tutti gli operatori devono poter partecipare a una gara;",
      bolk_beach_li2: "i cittadini devono poter godere di spiagge libere e servizi di qualità.",
      bolk_comm_title: "Il ruolo della Commissione Europea",
      bolk_comm_p: "La Commissione è la <strong>Guardiana dei Trattati</strong>: verifica che gli Stati rispettino le regole comuni. Se uno Stato non applica correttamente una direttiva, può:",
      bolk_comm_li1: "inviare una lettera di richiamo;",
      bolk_comm_li2: "chiedere modifiche alla legge nazionale;",
      bolk_comm_li3: "portare lo Stato davanti alla Corte di Giustizia.",
      bolk_comm_note: "Questo processo non è punitivo: serve a garantire che tutti i cittadini europei abbiano gli stessi diritti.",
      bolk_italy_title: "Il caso dell'Italia",
      bolk_italy_p: "In Italia, per molti anni le concessioni sono state prorogate automaticamente, senza gare. La Commissione ha contestato questa prassi perché viola la direttiva e i principi di concorrenza, e ha aperto una procedura d'infrazione contro l'Italia.",
      bolk_italy_gov: "<strong>La tesi del governo italiano:</strong> «Il 67% delle coste italiane è libero, quindi non c'è scarsità: la Bolkestein non si applica alle concessioni esistenti».",
      bolk_italy_reply_intro: "Questa affermazione non regge sul piano giuridico, perché:",
      bolk_italy_li1: "la Corte di Giustizia UE valuta la scarsità a livello locale, non nazionale;",
      bolk_italy_li2: "molti comuni turistici hanno l'80–90% di spiagge in concessione → risorsa scarsa;",
      bolk_italy_li3: "il 67% «libero» comprende anche tratti rocciosi, protetti o non balneabili;",
      bolk_italy_li4: "la Corte UE ha già stabilito che i rinnovi automatici sono illegittimi.",
      bolk_concl: "In pratica: la scarsità si misura comune per comune, non sulla media nazionale. Perciò, anche con il 67% di spiagge «libere», la Direttiva Bolkestein si applica e le concessioni devono essere assegnate con procedure trasparenti e concorrenziali.",
      flag_aria:         "Bandiera italiana",
    },

    // ----------------------------------------------------------
    // POLSKI
    // ----------------------------------------------------------
    pl: {
    skip_link:"Przejdź do treści",
      page_title:             "Gra symulacyjna \u2014 Pla\u017ca Europy",
      hero_eyebrow:           "Warsztat 1 · Symulacja",
      hero_title:             "Pla\u017ca Europy",
      hero_subtitle:          "Symulacja dotycz\u0105ca wolnej konkurencji w us\u0142ugach i roli Komisji Europejskiej jako Str\u00f3\u017ca Traktat\u00f3w.",
      hero_guide: "Prowadząca: <strong>Pina Mastroieni</strong>",
      tag_group:              "Grupa LUTE",
      tag_audience:           "Doro\u015bli / Seniorzy",
      tag_duration:           "45 \u2013 60 minut",

      info_duration_label:    "Czas trwania",
      info_duration_note:     "minut",
      info_participants_label:"Uczestnicy",
      info_participants_note: "6 r\u00f3l",
      info_type_label:        "Typ",
      info_type_value:        "Symulacja",
      hero_pill_audience_label: "Odbiorcy",

      section_intro:     "O Grze",
      intro_html:        "Gra symulacyjna dla os\u00f3b po 60. roku \u017cycia przy pierwszym do\u015bwiadczeniu powinna by\u0107 <strong>bardzo prosta</strong>, konkretna, z wyra\u017anymi rolami i rozpoznawalnymi sytuacjami. Celem jest pomoc w zrozumieniu Dyrektywy Bolkesteina i, og\u00f3lniej, <strong>jak dzia\u0142a wolna konkurencja w us\u0142ugach</strong> oraz rola Komisji jako <em>Str\u00f3\u017ca Traktat\u00f3w</em>.",

      section_objective: "Cel G\u0142\u00f3wny",
      objective_text:    "Umo\u017cliwienie uczestnikom do\u015bwiadczenia, w spos\u00f3b lekki i prowadzony, jak UE interweniuje, gdy pa\u0144stwo nie przestrzega wsp\u00f3lnych zasad konkurencji w us\u0142ugach \u2014 jak w przypadku koncesji na pla\u017ce.",

      section_scenario:  "Scenariusz Podstawowy",
      scenario_html:     "Wyobra\u017cone miasto, <strong>\u00abMarina Serena\u00bb</strong>, musi zdecydowa\u0107, jak zarz\u0105dza\u0107 koncesjami na pla\u017ce. Dyrektywa Bolkesteina wymaga <strong>przejrzystych i konkurencyjnych procedur przetargowych</strong>. Niekt\u00f3rzy operatorzy chc\u0105 zachowa\u0107 historyczne koncesje, inni chc\u0105 uczestniczy\u0107 w nowych przetargach. Obywatele domagaj\u0105 si\u0119 wi\u0119cej wolnych pla\u017c. Tymczasem <strong>Komisja Europejska</strong> obserwuje i interweniuje, je\u015bli pa\u0144stwo nie stosuje prawid\u0142owo zasad.",

      section_structure: "Struktura Gry (45 \u2013 60 min)",

      step1_title: "Wprowadzenie",
      step1_intro: "Facylitator wyja\u015bnia:",
      step1_li1:   "Czym jest <strong>Dyrektywa Bolkesteina</strong> (prostymi s\u0142owami)",
      step1_li2:   "Co oznacza <em>wolna konkurencja w us\u0142ugach</em>",
      step1_li3:   "Rol\u0119 Komisji jako <strong>Str\u00f3\u017ca Traktat\u00f3w</strong>",

      step2_title: "Przydzia\u0142 R\u00f3l",
      step2_text:  "Ka\u017cdy uczestnik otrzymuje kr\u00f3tk\u0105 kart\u0119 postaci (patrz ni\u017cej).",

      step3_title: "Faza 1 \u2014 \u017b\u0105dania",
      step3_intro: "Ka\u017cda rola przedstawia swoje interesy:",
      step3_li1:   "kto chce zachowa\u0107 koncesj\u0119",
      step3_li2:   "kto chce uczestniczy\u0107 w przetargu",
      step3_li3:   "kto chce wi\u0119cej wolnych pla\u017c",
      step3_li4:   "kto musi egzekwowa\u0107 przepisy UE",

      step4_title: "Faza 2 \u2014 Decyzja Gminy",
      step4_intro: "Grupa \u201eGmina\u201f proponuje rozwi\u0105zanie:",
      step4_li1:   "przeprowadzi\u0107 publiczny przetarg?",
      step4_li2:   "przed\u0142u\u017cy\u0107 istniej\u0105ce koncesje?",
      step4_li3:   "zwi\u0119kszy\u0107 liczb\u0119 wolnych pla\u017c?",
      step4_li4:   "znale\u017a\u0107 kompromis?",

      step5_title: "Faza 3 \u2014 Interwencja Komisji",
      step5_intro: "Grupa \u201eKomisja Europejska\u201f ocenia, czy decyzja jest zgodna z przepisami UE. Mo\u017ce:",
      step5_li1:   "zatwierdzi\u0107",
      step5_li2:   "za\u017c\u0105da\u0107 zmian",
      step5_li3:   "wszcz\u0105\u0107 post\u0119powanie w sprawie naruszenia (w uproszczonej formie)",

      step6_title: "Ko\u0144cowy Debriefing",
      step6_intro: "Dyskusja z przewodnikiem:",
      step6_li1:   "Jakie prawa wst\u0105pi\u0142y w konflikt?",
      step6_li2:   "Czy \u0142atwo jest pogodzi\u0107 dzia\u0142alno\u015b\u0107 gospodarcz\u0105 z interesem publicznym?",
      step6_li3:   "Dlaczego UE interweniuje?",
      step6_li4:   "Czego nauczyli\u015bmy si\u0119 o konkurencji?",

      section_skills: "Umiej\u0119tno\u015bci Rozwijane przez Gr\u0119",
      skill_1:        "Zrozumienie roli Komisji jako Str\u00f3\u017ca Traktat\u00f3w.",
      skill_2:        "Zrozumienie, dlaczego UE wymaga przejrzystych przetarg\u00f3w.",
      skill_3_html:   "Rozpoznanie konflikt\u00f3w mi\u0119dzy prawami: <em>prawo do prowadzenia dzia\u0142alno\u015bci</em> i <em>prawo obywateli do dost\u0119pu do morza</em>.",
      skill_4:        "Rozwijanie krytycznego my\u015blenia i zdolno\u015bci mediacyjnych.",

      section_roles:        "Karty R\u00f3l",
      roles_obj_title:      "Cele",
      roles_mot_title:      "Motywacje",
      roles_phrases_title:  "Przydatne Zwroty",

      role1_badge: "Rola 1 \u2014 Historyczny Operator",
      role1_name:  "Giovanni Rinaldi",
      role1_meta:  "62 lata \u00b7 Zarz\u0105dzaj\u0105cy pla\u017c\u0105 od ponad 30 lat",
      role1_obj1:  "Zachowa\u0107 koncesj\u0119 bez nowego przetargu.",
      role1_obj2:  "Obroni\u0107 inwestycje poczynione przez lata.",
      role1_obj3:  "Przekona\u0107 Gmin\u0119, \u017ce ci\u0105g\u0142o\u015b\u0107 gwarantuje jako\u015b\u0107 i bezpiecze\u0144stwo.",
      role1_mot1:  "\u201eZawsze pracowa\u0142em dobrze i przestrzega\u0142em zasad.\u201f",
      role1_mot2:  "\u201eJe\u015bli przyjdzie du\u017ca firma z zewn\u0105trz, nie b\u0119d\u0119 m\u00f3g\u0142 konkurowa\u0107.\u201f",
      role1_mot3:  "\u201eMoja rodzina \u017cyje z tej pracy.\u201f",
      role1_p1:    "\u201eNie mo\u017cna przekre\u015bli\u0107 trzydzie\u015btu lat do\u015bwiadczenia.\u201f",
      role1_p2:    "\u201eKonkurencja jest w porz\u0105dku, ale musi by\u0107 uczciwa.\u201f",
      role1_p3:    "\u201eNale\u017cy chroni\u0107 tych, kt\u00f3rzy zainwestowali w regionie.\u201f",

      role2_badge: "Rola 2 \u2014 Nowy Przedsi\u0119biorca",
      role2_name:  "Sara Conti",
      role2_meta:  "35 lat \u00b7 M\u0142oda lokalna przedsi\u0119biorca (lub firma europejska)",
      role2_obj1:  "Uzyska\u0107 realn\u0105 szans\u0119 na udzia\u0142 w przetargu.",
      role2_obj2:  "Promowa\u0107 przejrzysto\u015b\u0107 i konkurencj\u0119.",
      role2_obj3:  "Pokaza\u0107, \u017ce nowi operatorzy mog\u0105 wprowadza\u0107 innowacje.",
      role2_mot1:  "\u201eEuropejskie przepisy s\u0142u\u017c\u0105 unikaniu faworyzowania.\u201f",
      role2_mot2:  "\u201eKonkurencja mo\u017ce poprawi\u0107 us\u0142ugi i obni\u017cy\u0107 ceny.\u201f",
      role2_mot3:  "\u201eWszyscy musz\u0105 mie\u0107 takie same mo\u017cliwo\u015bci.\u201f",
      role2_p1:    "\u201ePubliczny przetarg to prawo, nie zagro\u017cenie.\u201f",
      role2_p2:    "\u201eOtwarty rynek przynosi korzy\u015bci obywatelom.\u201f",
      role2_p3:    "\u201eNie chc\u0119 niczego nikomu zabiera\u0107 \u2014 chc\u0119 tylko szansy.\u201f",

      role3_badge: "Rola 3 \u2014 Obywatel / Ekolog",
      role3_name:  "Maria Leone",
      role3_meta:  "58 lat \u00b7 Rzeczniczka mieszka\u0144c\u00f3w i pla\u017cowicz\u00f3w",
      role3_obj1:  "Zwi\u0119kszy\u0107 liczb\u0119 wolnych pla\u017c.",
      role3_obj2:  "Zagwarantowa\u0107 dost\u0119p do morza dla wszystkich.",
      role3_obj3:  "Zapobiec przekszta\u0142ceniu wybrze\u017ca wy\u0142\u0105cznie w spraw\u0119 komercyjn\u0105.",
      role3_mot1:  "\u201eMorze jest dobrem wsp\u00f3lnym.\u201f",
      role3_mot2:  "\u201eZbyt wiele koncesji ogranicza wolno\u015b\u0107 obywateli.\u201f",
      role3_mot3:  "\u201ePotrzebna jest r\u00f3wnowaga mi\u0119dzy dzia\u0142alno\u015bci\u0105 gospodarcz\u0105 a interesem publicznym.\u201f",
      role3_p1:    "\u201eNie mo\u017cemy prywatyzowa\u0107 wszystkiego.\u201f",
      role3_p2:    "\u201eRodziny powinny m\u00f3c chodzi\u0107 na pla\u017c\u0119 bez p\u0142acenia.\u201f",
      role3_p3:    "\u201eNatur\u0119 nale\u017cy chroni\u0107.\u201f",

      role4_badge: "Rola 4 \u2014 Gmina Marina Serena",
      role4_name:  "Radny Luca Ferri",
      role4_meta:  "55 lat \u00b7 Odpowiedzialny za koncesje i decyzje lokalne",
      role4_obj1:  "Znale\u017a\u0107 kompromis mi\u0119dzy operatorami, obywatelami i przepisami UE.",
      role4_obj2:  "Unikn\u0105\u0107 konflikt\u00f3w i protest\u00f3w.",
      role4_obj3:  "Nie doprowadzi\u0107 do wszcz\u0119cia post\u0119powania w sprawie naruszenia.",
      role4_mot1:  "\u201eMusimy przestrzega\u0107 zar\u00f3wno prawa krajowego, jak i europejskiego.\u201f",
      role4_mot2:  "\u201eGmina musi zapewni\u0107 us\u0142ugi i dost\u0119p publiczny.\u201f",
      role4_mot3:  "\u201eNie mo\u017cemy rozczarowa\u0107 wszystkich.\u201f",
      role4_p1:    "\u201eSzukajmy wsp\u00f3lnego rozwi\u0105zania.\u201f",
      role4_p2:    "\u201eEuropejskie przepisy nie s\u0105 opcjonalne.\u201f",
      role4_p3:    "\u201ePotrzebna jest r\u00f3wnowaga mi\u0119dzy r\u00f3\u017cnymi prawami.\u201f",

      role5_badge: "Rola 5 \u2014 Komisja Europejska",
      role5_name:  "Isabelle Moreau",
      role5_meta:  "48 lat \u00b7 Urz\u0119dniczka Dyrekcji ds. Rynku Wewn\u0119trznego",
      role5_obj1:  "Sprawdzi\u0107, czy pa\u0144stwo prawid\u0142owo stosuje Dyrektyw\u0119 Bolkesteina.",
      role5_obj2:  "Zagwarantowa\u0107 konkurencj\u0119 i przejrzysto\u015b\u0107.",
      role5_obj3:  "Interweniowa\u0107, je\u015bli zasady nie s\u0105 przestrzegane.",
      role5_mot1:  "\u201eKomisja jest Str\u00f3\u017cem Traktat\u00f3w.\u201f",
      role5_mot2:  "\u201eZasady obowi\u0105zuj\u0105 wszystkie pa\u0144stwa cz\u0142onkowskie.\u201f",
      role5_mot3:  "\u201eKonkurencja chroni konsument\u00f3w.\u201f",
      role5_p1:    "\u201eCzy Wasza decyzja jest zgodna z normami europejskimi?\u201f",
      role5_p2:    "\u201eMo\u017cemy za\u017c\u0105da\u0107 wyja\u015bnie\u0144 lub wszcz\u0105\u0107 procedur\u0119.\u201f",
      role5_p3:    "\u201eCelem nie jest karanie, lecz egzekwowanie wsp\u00f3lnych zasad.\u201f",

      role6_badge: "Rola 6 \u2014 Turystka Europejska",
      role6_name:  "Peter Schneider",
      role6_meta:  "60 lat \u00b7 Turystka niemiecka cz\u0119sto odwiedzaj\u0105ca W\u0142ochy",
      role6_obj1:  "Korzysta\u0107 z us\u0142ug wysokiej jako\u015bci w uczciwy cenach.",
      role6_obj2:  "Znajdowa\u0107 dost\u0119pne pla\u017ce.",
      role6_obj3:  "Zrozumie\u0107, dlaczego mi\u0119dzy krajami istniej\u0105 r\u00f3\u017cnice.",
      role6_mot1:  "\u201eW innych krajach europejskich dost\u0119p do morza jest swobodniejszy.\u201f",
      role6_mot2:  "\u201eKonkurencja mo\u017ce poprawi\u0107 ofert\u0119.\u201f",
      role6_mot3:  "\u201eJestem europejskim konsumentem, a nie tylko turyst\u0105.\u201f",
      role6_p1:    "\u201eChcia\u0142bym wi\u0119cej przejrzysto\u015bci cenowej.\u201f",
      role6_p2:    "\u201eDlaczego niekt\u00f3re pla\u017ce s\u0105 ca\u0142kowicie prywatne?\u201f",
      role6_p3:    "\u201eZale\u017cy mi na jako\u015bci, a nie na tym, kto zarz\u0105dza.\u201f",

      footer_text:       "Projekt Erasmus+ \u00b7 Gra Symulacyjna \u2014 Pla\u017ca Europy", footer_cookie: "Cookie Policy", footer_wa: "Kontakt", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
      btn_top:           "\u2191 G\u00f3ra",
      lang_switcher_aria:"Wybierz j\u0119zyk",
      // --- Approfondimento: Direttiva Bolkestein ---
      bolk_section: "Dyrektywa Bolkesteina — Pogłębienie",
      bolk_lead: "To europejski przepis, który jest sercem gry. Poniżej, prostymi słowami: czym jest, czego wymaga i dlaczego dotyczy także włoskich plaż.",
      bolk_what_title: "Czym jest",
      bolk_what_p: "<strong>Dyrektywa 2006/123/WE</strong>, przyjęta w 2006 r., to europejskie prawo regulujące swobodny przepływ usług na rynku wewnętrznym UE. Stanowi ona, że:",
      bolk_what_li1: "usługodawcy (firmy, specjaliści, operatorzy) mogą działać w całej UE bez nieuzasadnionych przeszkód;",
      bolk_what_li2: "państwa muszą zapewnić przejrzystość, uczciwą konkurencję i brak dyskryminacji między operatorami krajowymi a zagranicznymi.",
      bolk_why_title: "Dlaczego ją wprowadzono",
      bolk_why_p: "Przed dyrektywą wiele krajów miało odmienne i często restrykcyjne przepisy, które uniemożliwiały firmom swobodne działanie. Celem jest uproszczenie i zwiększenie konkurencyjności rynku usług, który stanowi około 70% gospodarki europejskiej.",
      bolk_aim_title: "Czego wymaga od państw",
      bolk_aim_intro: "Państwa członkowskie muszą:",
      bolk_aim_li1: "usunąć zbędne bariery w dostępie do działalności gospodarczej;",
      bolk_aim_li2: "uczynić przejrzystymi procedury uzyskiwania zezwoleń;",
      bolk_aim_li3: "zapewnić bezstronne przetargi publiczne, gdy zasób jest ograniczony (jak plaże);",
      bolk_aim_li4: "unikać automatycznego przedłużania koncesji publicznych.",
      bolk_beach_title: "Plaże: zasób ograniczony",
      bolk_beach_p: "Plaże są ograniczonym zasobem naturalnym: nie można ich przydzielać «na zawsze» tym samym operatorom bez otwartego i przejrzystego przetargu. Według UE:",
      bolk_beach_li1: "wszyscy operatorzy muszą mieć możliwość udziału w przetargu;",
      bolk_beach_li2: "obywatele muszą móc korzystać z wolnych plaż i usług wysokiej jakości.",
      bolk_comm_title: "Rola Komisji Europejskiej",
      bolk_comm_p: "Komisja jest <strong>Strażniczką Traktatów</strong>: sprawdza, czy państwa przestrzegają wspólnych zasad. Jeśli państwo nie stosuje dyrektywy prawidłowo, może:",
      bolk_comm_li1: "wysłać pismo z wezwaniem;",
      bolk_comm_li2: "zażądać zmian w prawie krajowym;",
      bolk_comm_li3: "skierować państwo do Trybunału Sprawiedliwości.",
      bolk_comm_note: "Ten proces nie jest karą: służy zapewnieniu, by wszyscy obywatele europejscy mieli takie same prawa.",
      bolk_italy_title: "Przypadek Włoch",
      bolk_italy_p: "We Włoszech przez wiele lat koncesje były automatycznie przedłużane, bez przetargów. Komisja zakwestionowała tę praktykę, ponieważ narusza ona dyrektywę i zasady konkurencji, i wszczęła wobec Włoch postępowanie w sprawie naruszenia.",
      bolk_italy_gov: "<strong>Teza rządu włoskiego:</strong> «67% włoskich wybrzeży jest wolne, więc nie ma niedoboru: Bolkestein nie dotyczy istniejących koncesji».",
      bolk_italy_reply_intro: "To twierdzenie nie wytrzymuje krytyki prawnej, ponieważ:",
      bolk_italy_li1: "Trybunał Sprawiedliwości UE ocenia niedobór na poziomie lokalnym, a nie krajowym;",
      bolk_italy_li2: "wiele gmin turystycznych ma 80–90% plaż w koncesji → zasób ograniczony;",
      bolk_italy_li3: "«wolne» 67% obejmuje też odcinki skaliste, chronione lub nienadające się do kąpieli;",
      bolk_italy_li4: "Trybunał UE już orzekł, że automatyczne odnowienia są niezgodne z prawem.",
      bolk_concl: "W praktyce: niedobór mierzy się gmina po gminie, a nie według średniej krajowej. Dlatego nawet przy 67% «wolnych» plaż Dyrektywa Bolkesteina obowiązuje, a koncesje muszą być przyznawane w drodze przejrzystych i konkurencyjnych procedur.",
      flag_aria:         "Flaga w\u0142oska",
    },

    // ----------------------------------------------------------
    // DEUTSCH
    // ----------------------------------------------------------
    de: {
    skip_link:"Zum Inhalt springen",
      page_title:             "Simulationsspiel \u2014 Der Strand Europas",
      hero_eyebrow:           "Workshop 1 · Simulation",
      hero_title:             "Der Strand Europas",
      hero_subtitle:          "Eine Simulation zum freien Dienstleistungswettbewerb und zur Rolle der Europ\u00e4ischen Kommission als H\u00fcterin der Vertr\u00e4ge.",
      hero_guide: "Leitung: <strong>Pina Mastroieni</strong>",
      tag_group:              "LUTE-Gruppe",
      tag_audience:           "Erwachsene / Senioren",
      tag_duration:           "45 \u2013 60 Minuten",

      info_duration_label:    "Dauer",
      info_duration_note:     "Minuten",
      info_participants_label:"Teilnehmer",
      info_participants_note: "6 Rollen",
      info_type_label:        "Art",
      info_type_value:        "Simulation",
      hero_pill_audience_label: "Zielgruppe",

      section_intro:     "\u00dcber das Spiel",
      intro_html:        "Ein Simulationsspiel f\u00fcr Personen \u00fcber 60 bei ihrer ersten Erfahrung sollte <strong>sehr einfach</strong>, konkret, mit klaren Rollen und erkennbaren Situationen sein. Ziel ist es, die Bolkestein-Richtlinie und allgemeiner <strong>den freien Dienstleistungswettbewerb</strong> sowie die Rolle der Kommission als <em>H\u00fcterin der Vertr\u00e4ge</em> zu verstehen.",

      section_objective: "Allgemeines Ziel",
      objective_text:    "Den Teilnehmern zu erm\u00f6glichen, auf leichte und gef\u00fchrte Weise zu erleben, wie die EU eingreift, wenn ein Staat die gemeinsamen Wettbewerbsregeln im Dienstleistungsbereich nicht einhält \u2014 wie im Fall der Strandkonzessionen.",

      section_scenario:  "Grundszenario",
      scenario_html:     "Eine imagin\u00e4re Gemeinde, <strong>\u00abMarina Serena\u00bb</strong>, muss entscheiden, wie sie Strandkonzessionen verwaltet. Die Bolkestein-Richtlinie verlangt <strong>transparente und wettbewerbsorientierte Ausschreibungsverfahren</strong>. Einige Betreiber wollen ihre historischen Konzessionen behalten, andere wollen an neuen Ausschreibungen teilnehmen. Die B\u00fcrger fordern mehr freie Str\u00e4nde. Unterdessen beobachtet die <strong>Europ\u00e4ische Kommission</strong> die Situation und greift ein, wenn der Staat die Regeln nicht korrekt anwendet.",

      section_structure: "Spielstruktur (45 \u2013 60 Min.)",

      step1_title: "Einf\u00fchrung",
      step1_intro: "Der Moderator erkl\u00e4rt:",
      step1_li1:   "Was die <strong>Bolkestein-Richtlinie</strong> ist (in einfachen Worten)",
      step1_li2:   "Was <em>freier Dienstleistungswettbewerb</em> bedeutet",
      step1_li3:   "Die Rolle der Kommission als <strong>H\u00fcterin der Vertr\u00e4ge</strong>",

      step2_title: "Rollenzuweisung",
      step2_text:  "Jeder Teilnehmer erh\u00e4lt eine kurze Charakterkarte (siehe unten).",

      step3_title: "Phase 1 \u2014 Die Forderungen",
      step3_intro: "Jede Rolle stellt ihre Interessen vor:",
      step3_li1:   "wer die Konzession behalten m\u00f6chte",
      step3_li2:   "wer an der Ausschreibung teilnehmen m\u00f6chte",
      step3_li3:   "wer mehr freie Str\u00e4nde m\u00f6chte",
      step3_li4:   "wer die EU-Vorschriften durchsetzen muss",

      step4_title: "Phase 2 \u2014 Die Entscheidung der Gemeinde",
      step4_intro: "Die Gruppe \u201eGemeinde\u201c schl\u00e4gt eine L\u00f6sung vor:",
      step4_li1:   "eine \u00f6ffentliche Ausschreibung durchf\u00fchren?",
      step4_li2:   "die bestehenden Konzessionen verl\u00e4ngern?",
      step4_li3:   "mehr freie Str\u00e4nde schaffen?",
      step4_li4:   "einen Kompromiss finden?",

      step5_title: "Phase 3 \u2014 Das Eingreifen der Kommission",
      step5_intro: "Die Gruppe \u201eEurop\u00e4ische Kommission\u201c bewertet, ob die Entscheidung den EU-Vorschriften entspricht. Sie kann:",
      step5_li1:   "genehmigen",
      step5_li2:   "\u00c4nderungen verlangen",
      step5_li3:   "ein Vertragsverletzungsverfahren einleiten (in vereinfachter Form)",

      step6_title: "Abschlussdebriefing",
      step6_intro: "Moderierte Diskussion:",
      step6_li1:   "Welche Rechte gerieten in Konflikt?",
      step6_li2:   "Ist es einfach, Unternehmensinteressen und \u00f6ffentliche Interessen zu balancieren?",
      step6_li3:   "Warum greift die EU ein?",
      step6_li4:   "Was haben wir \u00fcber den Wettbewerb gelernt?",

      section_skills: "F\u00e4higkeiten, die das Spiel F\u00f6rdert",
      skill_1:        "Die Rolle der Kommission als H\u00fcterin der Vertr\u00e4ge verstehen.",
      skill_2:        "Verstehen, warum die EU transparente Ausschreibungen fordert.",
      skill_3_html:   "Konflikte zwischen Rechten erkennen: <em>Unternehmensfreiheit</em> und <em>Recht der B\u00fcrger auf Zugang zum Meer</em>.",
      skill_4:        "Kritisches Denken und Mediationsf\u00e4higkeiten entwickeln.",

      section_roles:        "Rollenkarten",
      roles_obj_title:      "Ziele",
      roles_mot_title:      "Motivation",
      roles_phrases_title:  "N\u00fctzliche S\u00e4tze",

      role1_badge: "Rolle 1 \u2014 Historischer Betreiber",
      role1_name:  "Giovanni Rinaldi",
      role1_meta:  "62 Jahre \u00b7 Strandbadbetreiber seit \u00fcber 30 Jahren",
      role1_obj1:  "Die Konzession ohne neue Ausschreibung behalten.",
      role1_obj2:  "Die \u00fcber Jahre get\u00e4tigten Investitionen verteidigen.",
      role1_obj3:  "Die Gemeinde \u00fcberzeugen, dass Kontinuit\u00e4t Qualit\u00e4t und Sicherheit gew\u00e4hrleistet.",
      role1_mot1:  "\u201eIch habe immer gut gearbeitet und die Regeln eingehalten.\u201c",
      role1_mot2:  "\u201eWenn ein gro\u00dfes Unternehmen von au\u00dfen kommt, kann ich nicht mithalten.\u201c",
      role1_mot3:  "\u201eMeine Familie lebt von dieser Arbeit.\u201c",
      role1_p1:    "\u201eSie k\u00f6nnen drei\u00dfig Jahre Erfahrung nicht einfach streichen.\u201c",
      role1_p2:    "\u201eWettbewerb ist in Ordnung, aber er muss fair sein.\u201c",
      role1_p3:    "\u201eDiejenigen, die in die Region investiert haben, m\u00fcssen gesch\u00fctzt werden.\u201c",

      role2_badge: "Rolle 2 \u2014 Neuer Unternehmer",
      role2_name:  "Sara Conti",
      role2_meta:  "35 Jahre \u00b7 Junge lokale Unternehmerin (oder europ\u00e4isches Unternehmen)",
      role2_obj1:  "Eine echte M\u00f6glichkeit zur Teilnahme an der Ausschreibung erhalten.",
      role2_obj2:  "Transparenz und Wettbewerb f\u00f6rdern.",
      role2_obj3:  "Zeigen, dass neue Betreiber Innovationen einbringen k\u00f6nnen.",
      role2_mot1:  "\u201eEurop\u00e4ische Regeln dienen dazu, Vetternwirtschaft zu vermeiden.\u201c",
      role2_mot2:  "\u201eWettbewerb kann Dienstleistungen verbessern und Preise senken.\u201c",
      role2_mot3:  "\u201eJeder muss die gleichen Chancen haben.\u201c",
      role2_p1:    "\u201eEine \u00f6ffentliche Ausschreibung ist ein Recht, keine Bedrohung.\u201c",
      role2_p2:    "\u201eEin offener Markt kommt den B\u00fcrgern zugute.\u201c",
      role2_p3:    "\u201eIch will niemandem etwas wegnehmen \u2014 nur eine Chance haben.\u201c",

      role3_badge: "Rolle 3 \u2014 B\u00fcrgerin / Umweltschutz",
      role3_name:  "Maria Leone",
      role3_meta:  "58 Jahre \u00b7 Sprecherin der Anwohner und Strandbesucher",
      role3_obj1:  "Mehr freie Str\u00e4nde schaffen.",
      role3_obj2:  "Den Zugang zum Meer f\u00fcr alle gew\u00e4hrleisten.",
      role3_obj3:  "Verhindern, dass die K\u00fcste zu einer rein kommerziellen Angelegenheit wird.",
      role3_mot1:  "\u201eDas Meer ist ein Gemeinschaftsgut.\u201c",
      role3_mot2:  "\u201eZu viele Konzessionen schr\u00e4nken die Freiheit der B\u00fcrger ein.\u201c",
      role3_mot3:  "\u201eEs muss eine Balance zwischen Gesch\u00e4ftsinteressen und \u00f6ffentlichem Interesse geben.\u201c",
      role3_p1:    "\u201eWir k\u00f6nnen nicht alles privatisieren.\u201c",
      role3_p2:    "\u201eFamilien m\u00fcssen kostenlos an den Strand gehen k\u00f6nnen.\u201c",
      role3_p3:    "\u201eDie Natur muss gesch\u00fctzt werden.\u201c",

      role4_badge: "Rolle 4 \u2014 Gemeinde Marina Serena",
      role4_name:  "Stadtrat Luca Ferri",
      role4_meta:  "55 Jahre \u00b7 Verantwortlicher f\u00fcr Konzessionen und lokale Entscheidungen",
      role4_obj1:  "Einen Kompromiss zwischen Betreibern, B\u00fcrgern und EU-Regeln finden.",
      role4_obj2:  "Konflikte und Proteste vermeiden.",
      role4_obj3:  "Ein Vertragsverletzungsverfahren verhindern.",
      role4_mot1:  "\u201eWir m\u00fcssen sowohl nationales als auch europ\u00e4isches Recht einhalten.\u201c",
      role4_mot2:  "\u201eDie Gemeinde muss Dienstleistungen und \u00f6ffentlichen Zugang gew\u00e4hrleisten.\u201c",
      role4_mot3:  "\u201eWir k\u00f6nnen nicht alle entt\u00e4uschen.\u201c",
      role4_p1:    "\u201eLassen Sie uns eine gemeinsame L\u00f6sung suchen.\u201c",
      role4_p2:    "\u201eEurop\u00e4ische Vorschriften sind keine Option.\u201c",
      role4_p3:    "\u201eWir brauchen eine Balance zwischen verschiedenen Rechten.\u201c",

      role5_badge: "Rolle 5 \u2014 Europ\u00e4ische Kommission",
      role5_name:  "Isabelle Moreau",
      role5_meta:  "48 Jahre \u00b7 Beamtin der Generaldirektion Binnenmarkt",
      role5_obj1:  "\u00dcberpr\u00fcfen, ob der Staat die Bolkestein-Richtlinie korrekt anwendet.",
      role5_obj2:  "Wettbewerb und Transparenz gew\u00e4hrleisten.",
      role5_obj3:  "Eingreifen, wenn die Regeln nicht eingehalten werden.",
      role5_mot1:  "\u201eDie Kommission ist die H\u00fcterin der Vertr\u00e4ge.\u201c",
      role5_mot2:  "\u201eDie Regeln gelten f\u00fcr alle Mitgliedstaaten.\u201c",
      role5_mot3:  "\u201eWettbewerb sch\u00fctzt die Verbraucher.\u201c",
      role5_p1:    "\u201eEntspricht Ihre Entscheidung den europ\u00e4ischen Normen?\u201c",
      role5_p2:    "\u201eWir k\u00f6nnen um Kl\u00e4rung bitten oder ein Verfahren einleiten.\u201c",
      role5_p3:    "\u201eDas Ziel ist nicht zu bestrafen, sondern die gemeinsamen Regeln durchzusetzen.\u201c",

      role6_badge: "Rolle 6 \u2014 Europ\u00e4ischer Tourist",
      role6_name:  "Peter Schneider",
      role6_meta:  "60 Jahre \u00b7 Deutscher Tourist, der Italien h\u00e4ufig besucht",
      role6_obj1:  "Qualitativ hochwertige Dienstleistungen zu fairen Preisen genie\u00dfen.",
      role6_obj2:  "Zug\u00e4ngliche Str\u00e4nde finden.",
      role6_obj3:  "Verstehen, warum es Unterschiede zwischen den L\u00e4ndern gibt.",
      role6_mot1:  "\u201eIn anderen europ\u00e4ischen L\u00e4ndern ist der Zugang zum Meer freier.\u201c",
      role6_mot2:  "\u201eWettbewerb kann das Angebot verbessern.\u201c",
      role6_mot3:  "\u201eIch bin ein europ\u00e4ischer Verbraucher, nicht nur ein Tourist.\u201c",
      role6_p1:    "\u201eIch w\u00fcnschte mir mehr Preistransparenz.\u201c",
      role6_p2:    "\u201eWarum sind manche Str\u00e4nde vollst\u00e4ndig privat?\u201c",
      role6_p3:    "\u201eMir kommt es auf die Qualit\u00e4t an, nicht darauf, wer verwaltet.\u201c",

      footer_text:       "Erasmus+-Projekt \u00b7 Simulationsspiel \u2014 Der Strand Europas", footer_cookie: "Cookie Policy", footer_wa: "Kontakt", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
      btn_top:           "\u2191 Nach oben",
      lang_switcher_aria:"Sprache w\u00e4hlen",
      // --- Approfondimento: Direttiva Bolkestein ---
      bolk_section: "Die Bolkestein-Richtlinie — Vertiefung",
      bolk_lead: "Dies ist die europäische Regel im Zentrum des Spiels. Hier in einfachen Worten: was sie ist, was sie verlangt und warum sie auch Italiens Strände betrifft.",
      bolk_what_title: "Was sie ist",
      bolk_what_p: "Die <strong>Richtlinie 2006/123/EG</strong>, angenommen 2006, ist ein europäisches Gesetz, das den freien Dienstleistungsverkehr im EU-Binnenmarkt regelt. Sie legt fest, dass:",
      bolk_what_li1: "Dienstleister (Unternehmen, Fachleute, Betreiber) in der gesamten EU ohne ungerechtfertigte Hindernisse tätig sein können;",
      bolk_what_li2: "die Staaten Transparenz, fairen Wettbewerb und keine Diskriminierung zwischen inländischen und ausländischen Betreibern gewährleisten müssen.",
      bolk_why_title: "Warum sie eingeführt wurde",
      bolk_why_p: "Vor der Richtlinie hatten viele Länder unterschiedliche und oft restriktive Regeln, die Unternehmen am freien Tätigwerden hinderten. Ziel ist es, den Dienstleistungsmarkt — etwa 70% der europäischen Wirtschaft — zu vereinfachen und wettbewerbsfähiger zu machen.",
      bolk_aim_title: "Was sie von den Staaten verlangt",
      bolk_aim_intro: "Die Mitgliedstaaten müssen:",
      bolk_aim_li1: "unnötige Hindernisse beim Zugang zu wirtschaftlichen Tätigkeiten beseitigen;",
      bolk_aim_li2: "die Verfahren zur Erteilung von Genehmigungen transparent gestalten;",
      bolk_aim_li3: "unparteiische öffentliche Ausschreibungen sicherstellen, wenn eine Ressource begrenzt ist (wie Strände);",
      bolk_aim_li4: "automatische Verlängerungen öffentlicher Konzessionen vermeiden.",
      bolk_beach_title: "Strände: eine begrenzte Ressource",
      bolk_beach_p: "Strände sind eine begrenzte natürliche Ressource: Sie können nicht «für immer» denselben Betreibern ohne offene und transparente Ausschreibung zugewiesen werden. Laut EU:",
      bolk_beach_li1: "müssen alle Betreiber die Möglichkeit haben, an einer Ausschreibung teilzunehmen;",
      bolk_beach_li2: "müssen die Bürger freie Strände und hochwertige Dienstleistungen genießen können.",
      bolk_comm_title: "Die Rolle der Europäischen Kommission",
      bolk_comm_p: "Die Kommission ist die <strong>Hüterin der Verträge</strong>: Sie prüft, ob die Staaten die gemeinsamen Regeln einhalten. Wenn ein Staat eine Richtlinie nicht korrekt anwendet, kann sie:",
      bolk_comm_li1: "ein Mahnschreiben senden;",
      bolk_comm_li2: "Änderungen am nationalen Recht verlangen;",
      bolk_comm_li3: "den Staat vor den Gerichtshof bringen.",
      bolk_comm_note: "Dieses Verfahren ist nicht strafend: Es soll sicherstellen, dass alle europäischen Bürger die gleichen Rechte haben.",
      bolk_italy_title: "Der Fall Italien",
      bolk_italy_p: "In Italien wurden Konzessionen viele Jahre lang automatisch verlängert, ohne Ausschreibungen. Die Kommission hat diese Praxis beanstandet, weil sie gegen die Richtlinie und die Wettbewerbsgrundsätze verstößt, und ein Vertragsverletzungsverfahren gegen Italien eingeleitet.",
      bolk_italy_gov: "<strong>Die These der italienischen Regierung:</strong> «67% der italienischen Küsten sind frei, also gibt es keine Knappheit: Bolkestein gilt nicht für bestehende Konzessionen».",
      bolk_italy_reply_intro: "Diese Behauptung hält rechtlich nicht stand, weil:",
      bolk_italy_li1: "der EU-Gerichtshof die Knappheit auf lokaler, nicht nationaler Ebene bewertet;",
      bolk_italy_li2: "viele Tourismusgemeinden 80–90% der Strände in Konzession haben → knappe Ressource;",
      bolk_italy_li3: "die «freien» 67% auch felsige, geschützte oder nicht zum Baden geeignete Abschnitte umfassen;",
      bolk_italy_li4: "der EU-Gerichtshof bereits entschieden hat, dass automatische Verlängerungen rechtswidrig sind.",
      bolk_concl: "In der Praxis: Die Knappheit wird Gemeinde für Gemeinde gemessen, nicht nach dem nationalen Durchschnitt. Daher gilt die Bolkestein-Richtlinie auch bei 67% «freien» Stränden, und Konzessionen müssen über transparente und wettbewerbsorientierte Verfahren vergeben werden.",
      flag_aria:         "Italienische Flagge",
    },

    // ----------------------------------------------------------
    // LATVIEŠU
    // ----------------------------------------------------------
    lv: {
    skip_link:"Pāriet uz saturu",
      page_title:             "Sim\u0101ci\u0101s sp\u0113le \u2014 Eiropas pludmale",
      hero_eyebrow:           "1. seminārs · Simulācija",
      hero_title:             "Eiropas Pludmale",
      hero_subtitle:          "Sim\u0101cija par br\u012bvo konkurenci pakalpojumos un Eiropas Komisijas lomu k\u0101 L\u012bgumu sarg\u0101tājai.",
      hero_guide: "Vadītāja: <strong>Pina Mastroieni</strong>",
      tag_group:              "LUTE Grupa",
      tag_audience:           "Pieaugu\u0161ie / Senjori",
      tag_duration:           "45 \u2013 60 min\u016btes",

      info_duration_label:    "Ilgums",
      info_duration_note:     "min\u016btes",
      info_participants_label:"Dalībnieki",
      info_participants_note: "6 lomas",
      info_type_label:        "Tips",
      info_type_value:        "Sim\u0101cija",
      hero_pill_audience_label: "Auditorija",

      section_intro:     "Par Sp\u0113li",
      intro_html:        "Sim\u0101ci\u0101s sp\u0113lei cilv\u0113kiem p\u0101r 60 gadiem to pirm\u0101 piem\u0113ro\u0161an\u0101 jāb\u016bt <strong>\u013aoti vienk\u0101r\u0161ai</strong>, konkr\u0113tai, ar skaidr\u0101m lom\u0101m un atpazīstam\u0101m situ\u0101cij\u0101m. M\u0113r\u0137is ir pal\u012bdzēt saprast Bolke\u0161teina direkt\u012bvu un kopum\u0101 <strong>k\u0101 darbojas br\u012bv\u0101 konkurence pakalpojumos</strong> un Komisijas loma k\u0101 <em>L\u012bgumu sarg\u0101tājai</em>.",

      section_objective: "Visp\u0101r\u0113jais M\u0113r\u0137is",
      objective_text:    "Dod iespēju dalībniekiem viegla veid\u0101 pieredzēt, k\u0101 ES iejaucas, kad valsts neievēro kop\u012bg\u0101s konkurences noteikumus pakalpojumu jom\u0101 \u2014 k\u0101 pludma\u013eu koncesu gadījum\u0101.",

      section_scenario:  "Pam atscer\u0101rijs",
      scenario_html:     "Izdom\u0101ta pa\u0161valdība, <strong>\u00abMarina Serena\u00bb</strong>, j\u0101izlemj, k\u0101 p\u0101rvald\u012bt pludma\u013eu konses\u012bjas. Bolke\u0161teina direkt\u012bva prasa <strong>caursp\u012bd\u012bgas un konkurētspēj\u012bgas iepirkumu proced\u016bras</strong>. Da\u013ei oper\u0101tori vēlas saglab\u0101t v\u0113sturisk\u0101s konses\u012bjas, citi vēlas piedalīties jaunos konkursos. Iedz\u012bvot\u0101ji pieprasa vair\u0101k br\u012bvu pludma\u013eu. Tikmēr <strong>Eiropas Komisija</strong> vēro un iejaucas, ja valsts nepiemēro noteikumus pareizi.",

      section_structure: "Sp\u0113les Strukt\u016bra (45 \u2013 60 min.)",

      step1_title: "Ievads",
      step1_intro: "Fasilitatora skaidrojums:",
      step1_li1:   "Kas ir <strong>Bolke\u0161teina direkt\u012bva</strong> (vienkār\u0161os vārdos)",
      step1_li2:   "Ko noz\u012bm\u0113 <em>br\u012bv\u0101 konkurence pakalpojumos</em>",
      step1_li3:   "Komisijas loma k\u0101 <strong>L\u012bgumu sarg\u0101tājai</strong>",

      step2_title: "Lomu Sadale",
      step2_text:  "Katrs dalībnieks sa\u0146em \u012bsu rakstzīmes karti (sk. zemāk).",

      step3_title: "1. Fāze \u2014 Pras\u012bbas",
      step3_intro: "Katra loma izsaka savas intereses:",
      step3_li1:   "kurš vēlas saglab\u0101t konses\u012bju",
      step3_li2:   "kurš vēlas piedalīties konkurs\u0101",
      step3_li3:   "kurš vēlas vair\u0101k br\u012bvu pludma\u013eu",
      step3_li4:   "kurš j\u0101izpilda ES noteikumi",

      step4_title: "2. Fāze \u2014 Pa\u0161valdības L\u0113mums",
      step4_intro: "Grupa \u201ePa\u0161valdība\u201c iesaka risin\u0101jumu:",
      step4_li1:   "r\u012bkot publisku konkursu?",
      step4_li2:   "pagarin\u0101t eso\u0161\u0101s konses\u012bjas?",
      step4_li3:   "palielin\u0101t br\u012bvo pludma\u013eu skaitu?",
      step4_li4:   "rast kompromisu?",

      step5_title: "3. Fāze \u2014 Komisijas Iejaukšanās",
      step5_intro: "Grupa \u201eEiropas Komisija\u201c v\u0113rt\u0113, vai l\u0113mums atbilst ES noteikumiem. T\u0101 var:",
      step5_li1:   "apstiprin\u0101t",
      step5_li2:   "piepras\u012bt izmaiņas",
      step5_li3:   "uzsākt p\u0101rk\u0101puma procedu\u0101ru (vienkār\u0161ot\u0101 veid\u0101)",

      step6_title: "Nobeiguma Debrifings",
      step6_intro: "Vad\u012bt\u0101 diskusija:",
      step6_li1:   "K\u0101das ties\u012bbas nonāca konflikt\u0101?",
      step6_li2:   "Vai ir viegli l\u012bdzsvaro uzņēm\u0113jdarb\u012bbu un sabiedrisko intere\u0161u?",
      step6_li3:   "K\u0101pēc ES iejaucas?",
      step6_li4:   "Ko m\u0113s \u012bm\u0101c\u012bj\u0101mies par konkurenci?",

      section_skills: "Sp\u0113les Att\u012bst\u012bt\u0101s Prasmes",
      skill_1:        "Saprast Komisijas lomu k\u0101 L\u012bgumu sarg\u0101tājai.",
      skill_2:        "Saprast, k\u0101pēc ES pieprasa caursp\u012bd\u012bgus konkursus.",
      skill_3_html:   "Atpaz\u012bt ties\u012bbu konfliktus: <em>ties\u012bbas uz uzņēm\u0113jdarb\u012bbu</em> un <em>pilso\u0146u ties\u012bbas uz pieeju j\u016brai</em>.",
      skill_4:        "Att\u012bst\u012bt krit\u012bsko domā\u0161anu un mediācijas prasmes.",

      section_roles:        "Lomu Kartes",
      roles_obj_title:      "M\u0113r\u0137i",
      roles_mot_title:      "Motiv\u0101cija",
      roles_phrases_title:  "Noder\u012bgas Frāzes",

      role1_badge: "1. Loma \u2014 V\u0113sturiskais Oper\u0101tors",
      role1_name:  "Giovanni Rinaldi",
      role1_meta:  "62 gadi \u00b7 Pludma\u013eu konses\u012bjas \u012bpa\u0161nieks vair\u0101k nek\u0101 30 gadus",
      role1_obj1:  "Saglab\u0101t konses\u012bju bez jauna konkursa.",
      role1_obj2:  "Aizst\u0101v\u0113t gadu gait\u0101 veiktās investīcijas.",
      role1_obj3:  "P\u0101rliecin\u0101t pa\u0161valdību, ka nepārtaukum\u012bb\u012bna nodro\u0161ina kvalitāti un dro\u0161\u012bbu.",
      role1_mot1:  "\u201eEs vienmēr esmu labi strādājis un iev\u0113rojis noteikumus.\u201c",
      role1_mot2:  "\u201eJa no \u0101rpuses ieradie lielie uz\u0146ēmumi, es nesp\u0113\u0161u konkurēt.\u201c",
      role1_mot3:  "\u201eMan\u0101 \u0123imene dz\u012bvo no \u0161\u012b darba.\u201c",
      role1_p1:    "\u201eJ\u016bs nevarat izdzēst tri\u0146desmit gadus pieredzes.\u201c",
      role1_p2:    "\u201eKonkurencene ir laba, bet tai j\u0101b\u016bt taisna.\u201c",
      role1_p3:    "\u201eJ\u0101aizsarg\u0101 tie, kuri ir ieguldīju\u0161i re\u0123ion\u0101.\u201c",

      role2_badge: "2. Loma \u2014 Jauns Uzņēmējs",
      role2_name:  "Sara Conti",
      role2_meta:  "35 gadi \u00b7 Jauna viet\u0113j\u0101 uzņēmēja (vai Eiropas uz\u0146ēmums)",
      role2_obj1:  "Ieg\u016bt re\u0101lu iespēju piedalīties konkurs\u0101.",
      role2_obj2:  "Veicin\u0101t caursp\u012bd\u012bbas un konkurenci.",
      role2_obj3:  "Par\u0101d\u012bt, ka jaunie oper\u0101tori var ieviest jaunn\u0101cijas.",
      role2_mot1:  "\u201eEiropas noteikumi pal\u012bdz izvair\u012bties no favorītisma.\u201c",
      role2_mot2:  "\u201eKonkurencene var uzlabot pakalpojumus un sam\u0101zin\u0101t cenas.\u201c",
      role2_mot3:  "\u201eVisiem j\u0101but vien\u0101d\u0101m iespēj\u0101m.\u201c",
      role2_p1:    "\u201ePublisks konkurss ir ties\u012bbas, nevis draudi.\u201c",
      role2_p2:    "\u201eAtv\u0113rts tirgus sniedz ieg\u016bumu pilsoņiem.\u201c",
      role2_p3:    "\u201eEs nevēlos ne kō atņemt \u2014 tikai grib\u0113tu sa\u0146emt iespēju.\u201c",

      role3_badge: "3. Loma \u2014 Pilsonis / Vides Aizst\u0101vis",
      role3_name:  "Maria Leone",
      role3_meta:  "58 gadi \u00b7 Iedz\u012bvot\u0101ju un pludma\u013eu apmekl\u0113t\u0101ju pārstāve",
      role3_obj1:  "Palielin\u0101t br\u012bvo pludma\u013eu skaitu.",
      role3_obj2:  "Nodro\u0161in\u0101t pieeju j\u016brai visiem.",
      role3_obj3:  "Nov\u0113rst, ka piekraste k\u013c\u016bst tikai komerciel\u0101 jaut\u0101jums.",
      role3_mot1:  "\u201eJ\u016bra ir kop\u012bgais labums.\u201c",
      role3_mot2:  "\u201ePārāk daudz konses\u012bju ierobežo pilso\u0146u brīvību.\u201c",
      role3_mot3:  "\u201eJ\u0101b\u016bt l\u012bdzsvaram starp uzņēm\u0113jdarb\u012bbu un sabiedrisko intere\u0161u.\u201c",
      role3_p1:    "\u201eMēs nevaram privatizēt visu.\u201c",
      role3_p2:    "\u201e\u0122imenēm j\u0101var braukt uz pludmali bez maksas.\u201c",
      role3_p3:    "\u201eDaba j\u0101aizsarg\u0101.\u201c",

      role4_badge: "4. Loma \u2014 Marina Serena Pa\u0161valdība",
      role4_name:  "Padomnieks Luca Ferri",
      role4_meta:  "55 gadi \u00b7 Atbild\u012bgais par konses\u012bj\u0101m un viet\u0113jiem l\u0113mumiem",
      role4_obj1:  "Rast kompromisu starp oper\u0101toriem, pilsoņiem un ES noteikumiem.",
      role4_obj2:  "Izvair\u012bties no konfliktiem un protesta akcij\u0101m.",
      role4_obj3:  "Nepie\u013eaut p\u0101rk\u0101puma proced\u016bras uzsāk\u0161anu.",
      role4_mot1:  "\u201eM\u0113ms j\u0101iev\u0113ro gan nacion\u0101l\u0101s, gan Eiropas tiesības.\u201c",
      role4_mot2:  "\u201ePa\u0161valdībai j\u0101nodro\u0161ina pakalpojumi un publisku piekļuve.\u201c",
      role4_mot3:  "\u201eMēs nevaram visus vilšināt.\u201c",
      role4_p1:    "\u201eAtrod\u0101sim kop\u012bgu risin\u0101jumu.\u201c",
      role4_p2:    "\u201eEiropas regulas nav izvēles jaut\u0101jums.\u201c",
      role4_p3:    "\u201eNepiecieša ms l\u012bdzsvars starp da\u017e\u0101d\u0101m ties\u012bb\u0101m.\u201c",

      role5_badge: "5. Loma \u2014 Eiropas Komisija",
      role5_name:  "Isabelle Moreau",
      role5_meta:  "48 gadi \u00b7 Iek\u0161\u0113j\u0101 tirgus ģener\u0101ldirekci\u013eas amatpersona",
      role5_obj1:  "P\u0101rbaud\u012bt, vai valsts pareizi piemēro Bolke\u0161teina direkt\u012bvu.",
      role5_obj2:  "Nodro\u0161in\u0101t konkurenci un caursp\u012bd\u012bbas.",
      role5_obj3:  "Iejaukties, ja noteikumi netiek iev\u0113roti.",
      role5_mot1:  "\u201eKomisija ir L\u012bgumu sarg\u0101tāja.\u201c",
      role5_mot2:  "\u201eNoteikumi attiecas uz vis\u0101m dalībvalst\u012bm.\u201c",
      role5_mot3:  "\u201eKonkurencene aizsarg\u0101 pat\u0113r\u0113t\u0101jus.\u201c",
      role5_p1:    "\u201eVai J\u016bsu l\u0113mums atbilst Eiropas standartiem?\u201c",
      role5_p2:    "\u201eMēs varam piepras\u012bt skaidrojumus vai uzsākt proced\u016bru.\u201c",
      role5_p3:    "\u201eMēr\u0137is nav sod\u012bt, bet izpild\u012bt kop\u012bg\u0101s noteikumus.\u201c",

      role6_badge: "6. Loma \u2014 Eiropas T\u016brists",
      role6_name:  "Peter Schneider",
      role6_meta:  "60 gadi \u00b7 V\u0101cu t\u016brists, kas bieži apmekl\u0113 Itāliju",
      role6_obj1:  "Baudīt kvalitatīvus pakalpojumus par godīgām cenām.",
      role6_obj2:  "Atrast pieejamas pludmales.",
      role6_obj3:  "Saprast, k\u0101pēc starp valstīm ir atšķirības.",
      role6_mot1:  "\u201eCit\u0101s Eiropas valst\u012bs piekļuve j\u016brai ir br\u012bv\u0101ka.\u201c",
      role6_mot2:  "\u201eKonkurencene var uzlabot pied\u0101v\u0101jumu.\u201c",
      role6_mot3:  "\u201eEs esmu Eiropas patērētājs, ne tikai t\u016brists.\u201c",
      role6_p1:    "\u201eVēlētos liel\u0101ku cenu caursp\u012bd\u012bbas.\u201c",
      role6_p2:    "\u201ek\u0101pēc da\u017eas pludmales ir pilnīgi priv\u0101tas?\u201c",
      role6_p3:    "\u201eMan r\u016bp\u0113jas kvalitāte, nevis tas, kurš p\u0101rvalda.\u201c",

      footer_text:       "Erasmus+ projekts \u00b7 Sim\u0101ci\u0101s Sp\u0113le \u2014 Eiropas Pludmale", footer_cookie: "Cookie Policy", footer_wa: "Kontakti", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
      btn_top:           "\u2191 Uz aug\u0161u",
      lang_switcher_aria:"Izvēlēties valodu",
      // --- Approfondimento: Direttiva Bolkestein ---
      bolk_section: "Bolkešteina direktīva — Padziļināti",
      bolk_lead: "Šis ir Eiropas noteikums spēles centrā. Šeit vienkāršos vārdos: kas tas ir, ko tas prasa un kāpēc tas skar arī Itālijas pludmales.",
      bolk_what_title: "Kas tas ir",
      bolk_what_p: "<strong>Direktīva 2006/123/EK</strong>, pieņemta 2006. gadā, ir Eiropas likums, kas regulē brīvu pakalpojumu apriti ES iekšējā tirgū. Tā nosaka, ka:",
      bolk_what_li1: "pakalpojumu sniedzēji (uzņēmumi, profesionāļi, operatori) var darboties visā ES bez nepamatotiem šķēršļiem;",
      bolk_what_li2: "valstīm jānodrošina caurspīdīgums, godīga konkurence un nediskriminācija starp vietējiem un ārvalstu operatoriem.",
      bolk_why_title: "Kāpēc tā tika ieviesta",
      bolk_why_p: "Pirms direktīvas daudzās valstīs bija atšķirīgi un bieži ierobežojoši noteikumi, kas liedza uzņēmumiem brīvi darboties. Mērķis ir vienkāršot un padarīt konkurētspējīgāku pakalpojumu tirgu, kas veido aptuveni 70% no Eiropas ekonomikas.",
      bolk_aim_title: "Ko tā prasa no valstīm",
      bolk_aim_intro: "Dalībvalstīm:",
      bolk_aim_li1: "jānovērš nevajadzīgi šķēršļi piekļuvei saimnieciskajai darbībai;",
      bolk_aim_li2: "jāpadara caurspīdīgas atļauju saņemšanas procedūras;",
      bolk_aim_li3: "jānodrošina objektīvi publiski konkursi, kad resurss ir ierobežots (piemēram, pludmales);",
      bolk_aim_li4: "jāizvairās no publisko koncesiju automātiskas pagarināšanas.",
      bolk_beach_title: "Pludmales: ierobežots resurss",
      bolk_beach_p: "Pludmales ir ierobežots dabas resurss: tās nevar piešķirt «uz mūžu» vieniem un tiem pašiem operatoriem bez atklāta un caurspīdīga konkursa. Saskaņā ar ES:",
      bolk_beach_li1: "visiem operatoriem jābūt iespējai piedalīties konkursā;",
      bolk_beach_li2: "iedzīvotājiem jāvar izmantot brīvas pludmales un kvalitatīvus pakalpojumus.",
      bolk_comm_title: "Eiropas Komisijas loma",
      bolk_comm_p: "Komisija ir <strong>Līgumu sargātāja</strong>: tā pārbauda, vai valstis ievēro kopīgos noteikumus. Ja valsts direktīvu nepiemēro pareizi, tā var:",
      bolk_comm_li1: "nosūtīt brīdinājuma vēstuli;",
      bolk_comm_li2: "pieprasīt izmaiņas valsts likumā;",
      bolk_comm_li3: "iesniegt lietu pret valsti Tiesā.",
      bolk_comm_note: "Šis process nav sodošs: tas nodrošina, ka visiem Eiropas iedzīvotājiem ir vienādas tiesības.",
      bolk_italy_title: "Itālijas gadījums",
      bolk_italy_p: "Itālijā koncesijas daudzus gadus tika automātiski pagarinātas bez konkursiem. Komisija apstrīdēja šo praksi, jo tā pārkāpj direktīvu un konkurences principus, un uzsāka pārkāpuma procedūru pret Itāliju.",
      bolk_italy_gov: "<strong>Itālijas valdības tēze:</strong> «67% Itālijas krastu ir brīvi, tāpēc nav trūkuma: Bolkešteins neattiecas uz esošajām koncesijām».",
      bolk_italy_reply_intro: "Šis apgalvojums juridiski nav pamatots, jo:",
      bolk_italy_li1: "ES Tiesa vērtē trūkumu vietējā, nevis valsts līmenī;",
      bolk_italy_li2: "daudzās tūrisma pašvaldībās 80–90% pludmaļu ir koncesijā → ierobežots resurss;",
      bolk_italy_li3: "«brīvie» 67% ietver arī akmeņainus, aizsargājamus vai peldēšanai nepiemērotus posmus;",
      bolk_italy_li4: "ES Tiesa jau ir nospriedusi, ka automātiska atjaunošana ir nelikumīga.",
      bolk_concl: "Praksē: trūkumu mēra pašvaldību pa pašvaldībai, nevis pēc valsts vidējā rādītāja. Tāpēc pat ar 67% «brīvu» pludmaļu Bolkešteina direktīva ir spēkā, un koncesijas jāpiešķir caurspīdīgās un konkurētspējīgās procedūrās.",
      flag_aria:         "It\u0101lijas karogs",
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

}());
