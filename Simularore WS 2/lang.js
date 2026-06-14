// ============================================================
// lang.js — Simulation Game WS2 (sprechi alimentari) · 5 lingue
// (sg_* riusati da Workshop 2; Trilogo + Proposta tradotti)
// ============================================================

const TRANSLATIONS = {
  it: {
    skip_link: "Salta al contenuto",
    page_title: "Simulation Game — Sprechi alimentari",
    hero_eyebrow: "Workshop 2 · Simulazione",
    hero_title: "Una nuova legge UE contro gli sprechi alimentari",
    hero_subtitle: "Una simulazione del processo decisionale europeo: dall'idea alla legge, passando per il Trilogo tra Parlamento, Consiglio e Commissione.",
    hero_guide: "Guida: <strong>Pina Mastroieni</strong>",
    flag_aria: "Bandiera italiana",
    lang_switcher_aria: "Seleziona la lingua",
    footer_text: "Progetto Erasmus+ · Simulation Game — Sprechi alimentari", footer_cookie: "Cookie Policy", footer_wa: "Contatti", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
    btn_top: "Inizio",
    info_duration_label: "Durata",
    info_participants_label: "Partecipanti",
    hero_pill_audience_label: "Pubblico",
    tag_audience: "Adulti / Anziani",
    info_type_label: "Tipo",
    info_type_value: "Simulazione",
    section_scenario: "Lo scenario",
    section_objective: "Obiettivi",
    section_trilogue: "Il Trilogo",
    section_structure: "Struttura dell'attività (45 – 60 min)",
    section_roles: "Le 4 schede-ruolo",
    section_proposal: "La proposta della Commissione",
    trilogue_intro: "Il Trilogo è una procedura di negoziato informale a tre tra i rappresentanti delle tre principali istituzioni europee — Parlamento europeo, Consiglio dell'UE e Commissione europea — per raggiungere rapidamente un accordo sulle proposte legislative. Pur nato come informale, è diventato il cuore della procedura legislativa ordinaria (codecisione), per accelerare l'adozione delle norme.",
    trilogue_actors_title: "Chi partecipa: i tre attori",
    trilogue_actors: "<li><strong>Commissione europea</strong> — partecipa come mediatrice e garante del potere di iniziativa legislativa.</li><li><strong>Parlamento europeo</strong> — di norma rappresentato dal relatore (il deputato incaricato del dossier) e dai «relatori ombra» dei gruppi politici.</li><li><strong>Consiglio dell'UE</strong> — rappresentato dalla presidenza del Coreper o del gruppo di lavoro competente.</li>",
    trilogue_obj_title: "Obiettivo e funzionamento",
    trilogue_obj: "Il trilogo serve a confrontare le posizioni del Parlamento e del Consiglio sulla proposta della Commissione, cercando compromessi sugli emendamenti e sulle differenze prima dei voti formali.",
    trilogue_stages_title: "Le fasi del processo",
    trilogue_stages: "<li><strong>Apertura</strong> — dopo la presentazione della proposta legislativa da parte della Commissione.</li><li><strong>Negoziati</strong> — incontri tecnici e politici («triloghi tecnici» a livello di funzionari, «triloghi politici» a livello decisionale).</li><li><strong>Accordo</strong> (o «pacchetto di compromesso») — se il trilogo ha successo.</li><li><strong>Adozione</strong> — il testo concordato torna a Consiglio e Parlamento per l'approvazione formale.</li>",
    trilogue_note: "I triloghi sono spesso definiti la «scatola nera» del processo legislativo europeo: rendono la codecisione più rapida ed efficiente, ma sono talvolta criticati per la scarsa trasparenza, poiché decisioni cruciali si prendono in riunioni a porte chiuse.",
    proposal_intro: "<strong>Regolamento UE «Riduzione degli sprechi alimentari 2030»</strong>",
    proposal_why_title: "Perché serve questa legge?",
    proposal_why: "Ogni anno, nell'Unione Europea, milioni di tonnellate di cibo vengono sprecate. Lo spreco alimentare aumenta i rifiuti, danneggia l'ambiente, pesa su famiglie e imprese ed è affrontato in modo diverso nei vari Stati. L'UE interviene perché l'ambiente è una competenza concorrente: possono agire sia gli Stati membri sia l'Unione.",
    proposal_obj_title: "Obiettivo della legge",
    proposal_obj: "Ridurre del 30% lo spreco alimentare entro il 2030 in tutta l'UE.",
    proposal_type_title: "Tipo di atto proposto",
    proposal_type: "Regolamento europeo (direttamente applicabile in tutti gli Stati membri).",
    proposal_articles_title: "Cosa prevede la proposta",
    proposal_art1: "<strong>Articolo 1 — Supermercati</strong><ul><li>Donazione obbligatoria del cibo ancora consumabile</li><li>Sconti sui prodotti vicini alla scadenza</li><li>Pubblicazione annuale dei dati sugli sprechi</li></ul>",
    proposal_art2: "<strong>Articolo 2 — Ristoranti e mense</strong><ul><li>Possibilità per i clienti di portare a casa gli avanzi («family bag»)</li><li>Formazione del personale sulla gestione delle porzioni</li><li>Riduzione del 20% degli sprechi entro il 2028</li></ul>",
    proposal_art3: "<strong>Articolo 3 — Famiglie e consumatori</strong><ul><li>Campagne di informazione</li><li>Etichettatura più chiara («da consumarsi preferibilmente entro…»)</li><li>Sostegno ad app e piattaforme per redistribuire le eccedenze</li></ul>",
    proposal_art4: "<strong>Articolo 4 — Controlli e sanzioni</strong><ul><li>Valutazione dei progressi ogni due anni</li><li>Piani correttivi per gli Stati in ritardo</li><li>Sanzioni proporzionate in caso di inadempienza</li></ul>",
    proposal_outcomes_title: "Risultati attesi",
    proposal_outcomes: "<li>Meno spreco alimentare</li><li>Risparmio economico per famiglie e imprese</li><li>Maggiore sostenibilità ambientale</li><li>Più donazioni alle organizzazioni caritative</li>",
    proposal_points_title: "Punti di discussione nella simulazione",
    proposal_points: "<li>È più adatto un regolamento o una direttiva?</li><li>Gli obblighi per supermercati e ristoranti sono realistici?</li><li>Gli Stati membri hanno bisogno di più flessibilità?</li><li>Le misure per le famiglie sono sufficienti?</li>",
    sg_title: "Simulation Game — Una nuova legge europea contro gli sprechi alimentari",
    sg_intro: "Una simulazione del processo decisionale dell'UE — dall'idea al diritto. L'Unione vuole affrontare un problema reale: lo spreco alimentare, che incide su ambiente, economia e famiglie. I partecipanti decidono quale atto legislativo adottare e come le istituzioni dovrebbero procedere.",
    sg_obj_title: "Obiettivi",
    sg_obj_list: "<li>Comprendere il funzionamento del processo decisionale dell'UE.</li><li>Rafforzare la cittadinanza europea attiva.</li><li>Trasformare concetti astratti in competenze pratiche.</li><li>Stimolare il pensiero critico e la capacità di negoziazione.</li>",
    sg_obj_specific: "In pratica i partecipanti capiranno: <strong>come nasce una legge europea</strong>, quali istituzioni intervengono, cosa sono regolamenti, direttive e decisioni, e come si negozia un testo legislativo.",
    sg_struct_title: "Struttura dell'attività (45–60 min)",
    sg_s1_title: "Introduzione",
    sg_s1_text: "Il facilitatore presenta il problema e divide i partecipanti in 4 gruppi: le tre istituzioni del “triangolo europeo” più i cittadini/portatori di interesse. Alcune slide esemplificano la simulazione.",
    sg_s2_title: "Lavoro nei gruppi",
    sg_s2_text: "Ogni gruppo riceve la propria scheda-ruolo, riflette sulla domanda guida assegnata e prepara una breve dichiarazione sulla proposta UE contro lo spreco alimentare.",
    sg_s3_title: "Confronto",
    sg_s3_text: "Ogni gruppo espone dichiarazioni e risposte.",
    sg_s4_title: "Discussione plenaria",
    sg_s4_text: "Ordine consigliato: la <strong>Commissione</strong> rielabora e presenta la proposta → il <strong>Parlamento</strong> commenta e propone modifiche → il <strong>Consiglio</strong> valuta e negozia → i <strong>Cittadini</strong> reagiscono e fanno pressione. Il facilitatore dà la parola, tiene i tempi e stimola il confronto.",
    sg_s5_title: "Votazione finale",
    sg_s5_text: "Il facilitatore chiede: “Approvate la legge così come è stata modificata?”.",
    sg_s6_title: "Debriefing",
    sg_s6_text: "Quale istituzione ha avuto più peso? È stato facile trovare un accordo? La scelta dell'atto legislativo era adeguata? Avete riconosciuto i passaggi visti nella presentazione?",
    sg_roles_title: "Le 4 schede-ruolo",
    sg_do_label: "Cosa dovete fare",
    sg_q_label: "Domande guida",
    sg_role1_badge: "Proponente",
    sg_role1_name: "Commissione Europea",
    sg_role1_who: "È l'istituzione che propone le nuove leggi europee: il “motore iniziale”.",
    sg_role1_do: "<li>Spiegare perché l'UE deve intervenire sullo spreco alimentare.</li><li>Verificare se l'UE ha la competenza (esclusiva? concorrente?).</li><li>Presentare una proposta di legge chiara e semplice.</li><li>Difendere la proposta davanti a Parlamento e Consiglio.</li>",
    sg_role1_q: "<li>Perché il problema riguarda tutti i cittadini europei?</li><li>Perché gli Stati da soli non bastano?</li><li>Quale obiettivo principale vogliamo raggiungere?</li><li>Serve un regolamento, una direttiva o una decisione?</li>",
    sg_role2_badge: "Voce dei cittadini",
    sg_role2_name: "Parlamento Europeo",
    sg_role2_who: "È l'istituzione eletta dai cittadini: ne rappresenta interessi, diritti e bisogni.",
    sg_role2_do: "<li>Valutare la proposta della Commissione.</li><li>Proporre modifiche per renderla più efficace o più equa.</li><li>Difendere i cittadini più vulnerabili (anziani, famiglie, piccoli negozi).</li><li>Negoziare con il Consiglio per arrivare a un accordo.</li>",
    sg_role2_q: "<li>La proposta è abbastanza ambiziosa?</li><li>È chiara e comprensibile per i cittadini?</li><li>Ci sono categorie che rischiano di essere penalizzate?</li><li>Quali miglioramenti possiamo suggerire?</li>",
    sg_role3_badge: "Governi nazionali",
    sg_role3_name: "Consiglio dell'Unione Europea",
    sg_role3_who: "Sono i ministri dei 27 Stati membri: garantiscono che la legge sia realistica e applicabile nei diversi Paesi.",
    sg_role3_do: "<li>Valutare l'impatto della proposta sui vostri Stati.</li><li>Individuare resistenze o difficoltà (costi, tempi, differenze culturali).</li><li>Proporre compromessi.</li><li>Co-decidere con il Parlamento.</li>",
    sg_role3_q: "<li>Tutti gli Stati possono applicare la legge allo stesso modo?</li><li>Alcuni Paesi hanno già norme più avanzate?</li><li>Servono tempi più lunghi?</li><li>Serve flessibilità per alcuni Stati?</li>",
    sg_role4_badge: "Portatori di interesse",
    sg_role4_name: "Cittadini e Società Civile",
    sg_role4_who: "Rappresentate associazioni di consumatori, pensionati, famiglie, volontariato e ONG ambientali.",
    sg_role4_do: "<li>Esprimere preoccupazioni, bisogni e richieste dei cittadini.</li><li>Indicare problemi concreti della vita quotidiana.</li><li>Valutare se la proposta risponde davvero alle esigenze reali.</li><li>Fare pressione su Parlamento e Consiglio.</li>",
    sg_role4_q: "<li>Come incide lo spreco alimentare sulla vita delle famiglie?</li><li>Quali soluzioni pratiche vorreste vedere?</li><li>La proposta è comprensibile e utile?</li><li>Cosa manca?</li>"
  },
  en: {
    skip_link: "Skip to content",
    page_title: "Simulation Game — Food Waste",
    hero_eyebrow: "Workshop 2 · Simulation",
    hero_title: "A New EU Law to Reduce Food Waste",
    hero_subtitle: "A simulation of the EU decision-making process: from idea to law, through the Trilogue between Parliament, Council and Commission.",
    hero_guide: "Guide: <strong>Pina Mastroieni</strong>",
    flag_aria: "Italian flag",
    lang_switcher_aria: "Select language",
    footer_text: "Erasmus+ Project · Simulation Game — Food Waste", footer_cookie: "Cookie Policy", footer_wa: "Contact", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
    btn_top: "Top",
    info_duration_label: "Duration",
    info_participants_label: "Participants",
    hero_pill_audience_label: "Audience",
    tag_audience: "Adults / Seniors",
    info_type_label: "Type",
    info_type_value: "Simulation",
    section_scenario: "The scenario",
    section_objective: "Objectives",
    section_trilogue: "The Trilogue",
    section_structure: "Activity structure (45 – 60 min)",
    section_roles: "The 4 role cards",
    section_proposal: "The Commission's proposal",
    trilogue_intro: "The Trilogue is an informal, tripartite negotiation procedure involving representatives of the three main EU institutions — the European Parliament, the Council of the EU and the European Commission — to reach a swift agreement on legislative proposals. Although informal in origin, it has become the core of the ordinary legislative procedure (co-decision), speeding up the adoption of rules.",
    trilogue_actors_title: "Who takes part: the three actors",
    trilogue_actors: "<li><strong>European Commission</strong> — takes part as mediator and guarantor of the power of legislative initiative.</li><li><strong>European Parliament</strong> — usually represented by the rapporteur (the Member in charge of the dossier) and the «shadow rapporteurs» of the political groups.</li><li><strong>Council of the EU</strong> — represented by the Chair of Coreper or of the relevant working party.</li>",
    trilogue_obj_title: "Objective and operation",
    trilogue_obj: "The trilogue serves to compare the positions of Parliament and Council on the Commission's proposal, seeking compromises on amendments and differences before the formal votes.",
    trilogue_stages_title: "The stages of the process",
    trilogue_stages: "<li><strong>Opening</strong> — after the Commission presents a legislative proposal.</li><li><strong>Negotiations</strong> — technical and political meetings («technical trilogues» at official level, «political trilogues» at decision-making level).</li><li><strong>Agreement</strong> (or «compromise package») — if the trilogue is successful.</li><li><strong>Adoption</strong> — the agreed text returns to Council and Parliament for formal approval.</li>",
    trilogue_note: "Trilogues are often called the «black box» of the European legislative process: they make co-decision faster and more efficient, but are sometimes criticised for their lack of transparency, as crucial decisions are taken in closed meetings.",
    proposal_intro: "<strong>EU Regulation «Food Waste Reduction 2030»</strong>",
    proposal_why_title: "Why is this law needed?",
    proposal_why: "Every year, millions of tonnes of food are wasted in the European Union. Food waste increases waste, harms the environment, burdens families and businesses, and is addressed differently across Member States. The EU acts because the environment is a shared competence: both the Member States and the Union can act.",
    proposal_obj_title: "Objective of the law",
    proposal_obj: "Reduce food waste by 30% by 2030 across the EU.",
    proposal_type_title: "Type of act proposed",
    proposal_type: "European Regulation (directly applicable in all Member States).",
    proposal_articles_title: "What the proposal includes",
    proposal_art1: "<strong>Article 1 — Supermarkets</strong><ul><li>Mandatory donation of food still fit for consumption</li><li>Discounts on products close to expiry</li><li>Annual publication of food waste data</li></ul>",
    proposal_art2: "<strong>Article 2 — Restaurants and canteens</strong><ul><li>Possibility for customers to take leftovers home («family bag»)</li><li>Staff training on portion management</li><li>20% reduction in food waste by 2028</li></ul>",
    proposal_art3: "<strong>Article 3 — Households and consumers</strong><ul><li>Information campaigns</li><li>Clearer labelling («best before…»)</li><li>Support for apps and platforms to redistribute surplus food</li></ul>",
    proposal_art4: "<strong>Article 4 — Controls and sanctions</strong><ul><li>Progress assessment every two years</li><li>Corrective plans for Member States falling behind</li><li>Proportionate sanctions in case of non-compliance</li></ul>",
    proposal_outcomes_title: "Expected outcomes",
    proposal_outcomes: "<li>Less food waste</li><li>Economic savings for families and businesses</li><li>Greater environmental sustainability</li><li>More donations to charitable organisations</li>",
    proposal_points_title: "Points for discussion in the simulation",
    proposal_points: "<li>Is a Regulation or a Directive more appropriate?</li><li>Are the obligations for supermarkets and restaurants realistic?</li><li>Do Member States need more flexibility?</li><li>Are the measures for households sufficient?</li>",
    sg_title: "Simulation Game — A new European law against food waste",
    sg_intro: "A simulation of the EU decision-making process — from idea to law. The Union wants to tackle a real problem: food waste, which affects the environment, the economy and families. Participants decide which legislative act to adopt and how the institutions should proceed.",
    sg_obj_title: "Objectives",
    sg_obj_list: "<li>Understand how the EU decision-making process works.</li><li>Strengthen active European citizenship.</li><li>Turn abstract concepts into practical skills.</li><li>Stimulate critical thinking and negotiation skills.</li>",
    sg_obj_specific: "In practice, participants will understand: <strong>how a European law is born</strong>, which institutions are involved, what regulations, directives and decisions are, and how a legislative text is negotiated.",
    sg_struct_title: "Activity structure (45–60 min)",
    sg_s1_title: "Introduction",
    sg_s1_text: "The facilitator presents the problem and divides participants into 4 groups: the three institutions of the “European triangle” plus citizens/stakeholders. Some slides illustrate the simulation.",
    sg_s2_title: "Group work",
    sg_s2_text: "Each group receives its role card, reflects on the assigned guiding question and prepares a short statement on the EU proposal against food waste.",
    sg_s3_title: "Comparison",
    sg_s3_text: "Each group presents its statements and answers.",
    sg_s4_title: "Plenary discussion",
    sg_s4_text: "Suggested order: the <strong>Commission</strong> reworks and presents the proposal → the <strong>Parliament</strong> comments and proposes amendments → the <strong>Council</strong> assesses and negotiates → the <strong>Citizens</strong> react and apply pressure. The facilitator gives the floor, keeps time and stimulates debate.",
    sg_s5_title: "Final vote",
    sg_s5_text: "The facilitator asks: “Do you approve the law as amended?”.",
    sg_s6_title: "Debriefing",
    sg_s6_text: "Which institution had the most weight? Was it easy to reach an agreement? Was the choice of legislative act appropriate? Did you recognise the steps seen in the presentation?",
    sg_roles_title: "The 4 role cards",
    sg_do_label: "What you must do",
    sg_q_label: "Guiding questions",
    sg_role1_badge: "Proposer",
    sg_role1_name: "European Commission",
    sg_role1_who: "The institution that proposes new European laws: the “initial engine”.",
    sg_role1_do: "<li>Explain why the EU must act on food waste.</li><li>Check whether the EU has the competence (exclusive? shared?).</li><li>Present a clear and simple legislative proposal.</li><li>Defend the proposal before Parliament and Council.</li>",
    sg_role1_q: "<li>Why does the problem concern all European citizens?</li><li>Why are individual States not enough?</li><li>What main objective do we want to achieve?</li><li>Do we need a regulation, a directive or a decision?</li>",
    sg_role2_badge: "Voice of citizens",
    sg_role2_name: "European Parliament",
    sg_role2_who: "The institution elected by citizens: it represents their interests, rights and needs.",
    sg_role2_do: "<li>Assess the Commission's proposal.</li><li>Propose amendments to make it more effective or fairer.</li><li>Defend the most vulnerable citizens (seniors, families, small shops).</li><li>Negotiate with the Council to reach an agreement.</li>",
    sg_role2_q: "<li>Is the proposal ambitious enough?</li><li>Is it clear and understandable for citizens?</li><li>Are there groups at risk of being penalised?</li><li>What improvements can we suggest?</li>",
    sg_role3_badge: "National governments",
    sg_role3_name: "Council of the European Union",
    sg_role3_who: "The ministers of the 27 Member States: they ensure the law is realistic and applicable in the various countries.",
    sg_role3_do: "<li>Assess the impact of the proposal on your States.</li><li>Identify resistance or difficulties (costs, timing, cultural differences).</li><li>Propose compromises.</li><li>Co-decide with Parliament.</li>",
    sg_role3_q: "<li>Can all States apply the law in the same way?</li><li>Do some countries already have more advanced rules?</li><li>Is more time needed?</li><li>Is flexibility needed for some States?</li>",
    sg_role4_badge: "Stakeholders",
    sg_role4_name: "Citizens and Civil Society",
    sg_role4_who: "You represent consumer associations, pensioners, families, voluntary groups and environmental NGOs.",
    sg_role4_do: "<li>Express citizens' concerns, needs and requests.</li><li>Point out concrete everyday problems.</li><li>Assess whether the proposal really meets real needs.</li><li>Apply pressure on Parliament and Council.</li>",
    sg_role4_q: "<li>How does food waste affect family life?</li><li>What practical solutions would you like to see?</li><li>Is the proposal understandable and useful?</li><li>What is missing?</li>"
  },
  pl: {
    skip_link: "Przejdź do treści",
    page_title: "Gra symulacyjna — Marnowanie żywności",
    hero_eyebrow: "Warsztat 2 · Symulacja",
    hero_title: "Nowa ustawa UE przeciwko marnowaniu żywności",
    hero_subtitle: "Symulacja unijnego procesu decyzyjnego: od pomysłu do ustawy, poprzez trilog między Parlamentem, Radą i Komisją.",
    hero_guide: "Prowadząca: <strong>Pina Mastroieni</strong>",
    flag_aria: "Flaga włoska",
    lang_switcher_aria: "Wybierz język",
    footer_text: "Projekt Erasmus+ · Gra symulacyjna — Marnowanie żywności", footer_cookie: "Cookie Policy", footer_wa: "Kontakt", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
    btn_top: "Góra",
    info_duration_label: "Czas trwania",
    info_participants_label: "Uczestnicy",
    hero_pill_audience_label: "Odbiorcy",
    tag_audience: "Dorośli / Seniorzy",
    info_type_label: "Typ",
    info_type_value: "Symulacja",
    section_scenario: "Scenariusz",
    section_objective: "Cele",
    section_trilogue: "Trilog",
    section_structure: "Struktura zajęć (45 – 60 min)",
    section_roles: "4 karty ról",
    section_proposal: "Propozycja Komisji",
    trilogue_intro: "Trilog to nieformalna, trójstronna procedura negocjacyjna z udziałem przedstawicieli trzech głównych instytucji UE — Parlamentu Europejskiego, Rady UE i Komisji Europejskiej — w celu szybkiego osiągnięcia porozumienia w sprawie wniosków ustawodawczych. Choć początkowo nieformalny, stał się sercem zwykłej procedury ustawodawczej (współdecyzji), przyspieszając przyjmowanie przepisów.",
    trilogue_actors_title: "Kto bierze udział: trzej aktorzy",
    trilogue_actors: "<li><strong>Komisja Europejska</strong> — uczestniczy jako mediator i gwarant prawa inicjatywy ustawodawczej.</li><li><strong>Parlament Europejski</strong> — zwykle reprezentowany przez sprawozdawcę (posła odpowiedzialnego za dokument) oraz «kontrsprawozdawców» grup politycznych.</li><li><strong>Rada UE</strong> — reprezentowana przez przewodniczącego Coreper lub właściwej grupy roboczej.</li>",
    trilogue_obj_title: "Cel i funkcjonowanie",
    trilogue_obj: "Trilog służy porównaniu stanowisk Parlamentu i Rady w sprawie wniosku Komisji, w poszukiwaniu kompromisów dotyczących poprawek i różnic przed formalnymi głosowaniami.",
    trilogue_stages_title: "Etapy procesu",
    trilogue_stages: "<li><strong>Otwarcie</strong> — po przedstawieniu wniosku ustawodawczego przez Komisję.</li><li><strong>Negocjacje</strong> — spotkania techniczne i polityczne («trilogi techniczne» na poziomie urzędników, «trilogi polityczne» na poziomie decyzyjnym).</li><li><strong>Porozumienie</strong> (lub «pakiet kompromisowy») — jeśli trilog się powiedzie.</li><li><strong>Przyjęcie</strong> — uzgodniony tekst wraca do Rady i Parlamentu w celu formalnego zatwierdzenia.</li>",
    trilogue_note: "Trilogi są często nazywane «czarną skrzynką» europejskiego procesu legislacyjnego: przyspieszają i usprawniają współdecydowanie, ale bywają krytykowane za brak przejrzystości, ponieważ kluczowe decyzje zapadają na zamkniętych posiedzeniach.",
    proposal_intro: "<strong>Rozporządzenie UE «Redukcja marnowania żywności 2030»</strong>",
    proposal_why_title: "Dlaczego ta ustawa jest potrzebna?",
    proposal_why: "Każdego roku w Unii Europejskiej marnuje się miliony ton żywności. Marnowanie żywności zwiększa ilość odpadów, szkodzi środowisku, obciąża rodziny i firmy oraz jest różnie regulowane w poszczególnych państwach. UE działa, ponieważ środowisko to kompetencja dzielona: mogą działać zarówno państwa członkowskie, jak i Unia.",
    proposal_obj_title: "Cel ustawy",
    proposal_obj: "Zmniejszenie marnowania żywności o 30% do 2030 r. w całej UE.",
    proposal_type_title: "Proponowany rodzaj aktu",
    proposal_type: "Rozporządzenie europejskie (bezpośrednio stosowane we wszystkich państwach członkowskich).",
    proposal_articles_title: "Co przewiduje wniosek",
    proposal_art1: "<strong>Artykuł 1 — Supermarkety</strong><ul><li>Obowiązkowe przekazywanie żywności wciąż zdatnej do spożycia</li><li>Zniżki na produkty bliskie terminu przydatności</li><li>Coroczna publikacja danych o marnowaniu</li></ul>",
    proposal_art2: "<strong>Artykuł 2 — Restauracje i stołówki</strong><ul><li>Możliwość zabrania resztek do domu («family bag»)</li><li>Szkolenie personelu w zakresie zarządzania porcjami</li><li>Zmniejszenie marnowania o 20% do 2028 r.</li></ul>",
    proposal_art3: "<strong>Artykuł 3 — Gospodarstwa domowe i konsumenci</strong><ul><li>Kampanie informacyjne</li><li>Czytelniejsze etykiety («najlepiej spożyć przed…»)</li><li>Wsparcie aplikacji i platform do redystrybucji nadwyżek</li></ul>",
    proposal_art4: "<strong>Artykuł 4 — Kontrole i sankcje</strong><ul><li>Ocena postępów co dwa lata</li><li>Plany naprawcze dla opóźnionych państw</li><li>Proporcjonalne sankcje w razie nieprzestrzegania</li></ul>",
    proposal_outcomes_title: "Oczekiwane rezultaty",
    proposal_outcomes: "<li>Mniej marnowanej żywności</li><li>Oszczędności dla rodzin i firm</li><li>Większa zrównoważoność środowiskowa</li><li>Więcej darowizn dla organizacji charytatywnych</li>",
    proposal_points_title: "Punkty do dyskusji w symulacji",
    proposal_points: "<li>Czy lepsze jest rozporządzenie czy dyrektywa?</li><li>Czy obowiązki dla supermarketów i restauracji są realistyczne?</li><li>Czy państwa członkowskie potrzebują większej elastyczności?</li><li>Czy środki dla gospodarstw domowych są wystarczające?</li>",
    sg_title: "Gra symulacyjna — Nowe europejskie prawo przeciw marnotrawstwu żywności",
    sg_intro: "Symulacja procesu decyzyjnego UE — od pomysłu do prawa. Unia chce zająć się realnym problemem: marnotrawstwem żywności, które wpływa na środowisko, gospodarkę i rodziny. Uczestnicy decydują, jaki akt prawny przyjąć i jak instytucje powinny postępować.",
    sg_obj_title: "Cele",
    sg_obj_list: "<li>Zrozumieć, jak działa proces decyzyjny UE.</li><li>Wzmocnić aktywne obywatelstwo europejskie.</li><li>Przekształcić abstrakcyjne pojęcia w praktyczne umiejętności.</li><li>Stymulować krytyczne myślenie i umiejętność negocjacji.</li>",
    sg_obj_specific: "W praktyce uczestnicy zrozumieją: <strong>jak rodzi się europejskie prawo</strong>, które instytucje są zaangażowane, czym są rozporządzenia, dyrektywy i decyzje oraz jak negocjuje się tekst legislacyjny.",
    sg_struct_title: "Struktura aktywności (45–60 min)",
    sg_s1_title: "Wprowadzenie",
    sg_s1_text: "Prowadzący przedstawia problem i dzieli uczestników na 4 grupy: trzy instytucje „europejskiego trójkąta” plus obywatele/interesariusze. Kilka slajdów ilustruje symulację.",
    sg_s2_title: "Praca w grupach",
    sg_s2_text: "Każda grupa otrzymuje swoją kartę roli, zastanawia się nad przypisanym pytaniem przewodnim i przygotowuje krótkie oświadczenie w sprawie propozycji UE przeciw marnotrawstwu żywności.",
    sg_s3_title: "Porównanie",
    sg_s3_text: "Każda grupa przedstawia swoje oświadczenia i odpowiedzi.",
    sg_s4_title: "Dyskusja plenarna",
    sg_s4_text: "Sugerowana kolejność: <strong>Komisja</strong> przerabia i przedstawia propozycję → <strong>Parlament</strong> komentuje i proponuje poprawki → <strong>Rada</strong> ocenia i negocjuje → <strong>Obywatele</strong> reagują i wywierają presję. Prowadzący udziela głosu, pilnuje czasu i pobudza debatę.",
    sg_s5_title: "Głosowanie końcowe",
    sg_s5_text: "Prowadzący pyta: „Czy zatwierdzacie prawo w zmienionej formie?”.",
    sg_s6_title: "Podsumowanie",
    sg_s6_text: "Która instytucja miała największy wpływ? Czy łatwo było osiągnąć porozumienie? Czy wybór aktu prawnego był odpowiedni? Czy rozpoznaliście kroki z prezentacji?",
    sg_roles_title: "4 karty ról",
    sg_do_label: "Co macie zrobić",
    sg_q_label: "Pytania przewodnie",
    sg_role1_badge: "Wnioskodawca",
    sg_role1_name: "Komisja Europejska",
    sg_role1_who: "Instytucja, która proponuje nowe europejskie prawa: „silnik początkowy”.",
    sg_role1_do: "<li>Wyjaśnić, dlaczego UE musi działać w sprawie marnotrawstwa żywności.</li><li>Sprawdzić, czy UE ma kompetencję (wyłączną? dzieloną?).</li><li>Przedstawić jasną i prostą propozycję ustawodawczą.</li><li>Bronić propozycji przed Parlamentem i Radą.</li>",
    sg_role1_q: "<li>Dlaczego problem dotyczy wszystkich obywateli europejskich?</li><li>Dlaczego same państwa nie wystarczą?</li><li>Jaki główny cel chcemy osiągnąć?</li><li>Czy potrzebne jest rozporządzenie, dyrektywa czy decyzja?</li>",
    sg_role2_badge: "Głos obywateli",
    sg_role2_name: "Parlament Europejski",
    sg_role2_who: "Instytucja wybierana przez obywateli: reprezentuje ich interesy, prawa i potrzeby.",
    sg_role2_do: "<li>Ocenić propozycję Komisji.</li><li>Zaproponować poprawki, by była skuteczniejsza lub sprawiedliwsza.</li><li>Bronić najbardziej wrażliwych obywateli (seniorzy, rodziny, małe sklepy).</li><li>Negocjować z Radą, by osiągnąć porozumienie.</li>",
    sg_role2_q: "<li>Czy propozycja jest wystarczająco ambitna?</li><li>Czy jest jasna i zrozumiała dla obywateli?</li><li>Czy są grupy zagrożone pokrzywdzeniem?</li><li>Jakie ulepszenia możemy zasugerować?</li>",
    sg_role3_badge: "Rządy krajowe",
    sg_role3_name: "Rada Unii Europejskiej",
    sg_role3_who: "Ministrowie 27 państw członkowskich: dbają, by prawo było realistyczne i możliwe do zastosowania w różnych krajach.",
    sg_role3_do: "<li>Ocenić wpływ propozycji na wasze państwa.</li><li>Zidentyfikować opór lub trudności (koszty, czas, różnice kulturowe).</li><li>Zaproponować kompromisy.</li><li>Współdecydować z Parlamentem.</li>",
    sg_role3_q: "<li>Czy wszystkie państwa mogą stosować prawo tak samo?</li><li>Czy niektóre kraje mają już bardziej zaawansowane przepisy?</li><li>Czy potrzeba więcej czasu?</li><li>Czy potrzebna jest elastyczność dla niektórych państw?</li>",
    sg_role4_badge: "Interesariusze",
    sg_role4_name: "Obywatele i Społeczeństwo Obywatelskie",
    sg_role4_who: "Reprezentujecie stowarzyszenia konsumentów, emerytów, rodziny, wolontariat i ekologiczne NGO.",
    sg_role4_do: "<li>Wyrazić obawy, potrzeby i żądania obywateli.</li><li>Wskazać konkretne problemy codziennego życia.</li><li>Ocenić, czy propozycja naprawdę odpowiada na rzeczywiste potrzeby.</li><li>Wywierać presję na Parlament i Radę.</li>",
    sg_role4_q: "<li>Jak marnotrawstwo żywności wpływa na życie rodzin?</li><li>Jakie praktyczne rozwiązania chcielibyście zobaczyć?</li><li>Czy propozycja jest zrozumiała i użyteczna?</li><li>Czego brakuje?</li>"
  },
  de: {
    skip_link: "Zum Inhalt springen",
    page_title: "Simulationsspiel — Lebensmittelverschwendung",
    hero_eyebrow: "Workshop 2 · Simulation",
    hero_title: "Ein neues EU-Gesetz gegen Lebensmittelverschwendung",
    hero_subtitle: "Eine Simulation des EU-Entscheidungsprozesses: von der Idee zum Gesetz, über den Trilog zwischen Parlament, Rat und Kommission.",
    hero_guide: "Leitung: <strong>Pina Mastroieni</strong>",
    flag_aria: "Italienische Flagge",
    lang_switcher_aria: "Sprache auswählen",
    footer_text: "Erasmus+-Projekt · Simulationsspiel — Lebensmittelverschwendung", footer_cookie: "Cookie Policy", footer_wa: "Kontakt", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
    btn_top: "Oben",
    info_duration_label: "Dauer",
    info_participants_label: "Teilnehmende",
    hero_pill_audience_label: "Zielgruppe",
    tag_audience: "Erwachsene / Senioren",
    info_type_label: "Art",
    info_type_value: "Simulation",
    section_scenario: "Das Szenario",
    section_objective: "Ziele",
    section_trilogue: "Der Trilog",
    section_structure: "Ablauf der Aktivität (45 – 60 Min.)",
    section_roles: "Die 4 Rollenkarten",
    section_proposal: "Der Vorschlag der Kommission",
    trilogue_intro: "Der Trilog ist ein informelles, dreiseitiges Verhandlungsverfahren mit Vertretern der drei wichtigsten EU-Institutionen — Europäisches Parlament, Rat der EU und Europäische Kommission —, um rasch eine Einigung über Gesetzgebungsvorschläge zu erzielen. Obwohl ursprünglich informell, ist er zum Kern des ordentlichen Gesetzgebungsverfahrens (Mitentscheidung) geworden und beschleunigt die Annahme von Rechtsvorschriften.",
    trilogue_actors_title: "Wer teilnimmt: die drei Akteure",
    trilogue_actors: "<li><strong>Europäische Kommission</strong> — nimmt als Vermittlerin und Garantin des Initiativrechts teil.</li><li><strong>Europäisches Parlament</strong> — in der Regel vertreten durch den Berichterstatter (das für das Dossier zuständige Mitglied) und die «Schattenberichterstatter» der Fraktionen.</li><li><strong>Rat der EU</strong> — vertreten durch den Vorsitz des AStV (Coreper) oder der zuständigen Arbeitsgruppe.</li>",
    trilogue_obj_title: "Ziel und Funktionsweise",
    trilogue_obj: "Der Trilog dient dazu, die Positionen von Parlament und Rat zum Kommissionsvorschlag zu vergleichen und vor den formellen Abstimmungen Kompromisse zu Änderungen und Differenzen zu finden.",
    trilogue_stages_title: "Die Phasen des Prozesses",
    trilogue_stages: "<li><strong>Eröffnung</strong> — nachdem die Kommission einen Gesetzgebungsvorschlag vorgelegt hat.</li><li><strong>Verhandlungen</strong> — technische und politische Treffen («technische Triloge» auf Beamtenebene, «politische Triloge» auf Entscheidungsebene).</li><li><strong>Einigung</strong> (oder «Kompromisspaket») — wenn der Trilog erfolgreich ist.</li><li><strong>Annahme</strong> — der vereinbarte Text geht zur formellen Zustimmung an Rat und Parlament zurück.</li>",
    trilogue_note: "Triloge werden oft als die «Blackbox» des europäischen Gesetzgebungsprozesses bezeichnet: Sie machen die Mitentscheidung schneller und effizienter, werden aber manchmal wegen mangelnder Transparenz kritisiert, da wichtige Entscheidungen in geschlossenen Sitzungen getroffen werden.",
    proposal_intro: "<strong>EU-Verordnung «Lebensmittelverschwendung reduzieren 2030»</strong>",
    proposal_why_title: "Warum ist dieses Gesetz nötig?",
    proposal_why: "Jedes Jahr werden in der Europäischen Union Millionen Tonnen Lebensmittel verschwendet. Lebensmittelverschwendung erhöht den Abfall, schadet der Umwelt, belastet Familien und Unternehmen und wird in den Mitgliedstaaten unterschiedlich geregelt. Die EU handelt, weil die Umwelt eine geteilte Zuständigkeit ist: Sowohl die Mitgliedstaaten als auch die Union können tätig werden.",
    proposal_obj_title: "Ziel des Gesetzes",
    proposal_obj: "Reduzierung der Lebensmittelverschwendung um 30 % bis 2030 in der gesamten EU.",
    proposal_type_title: "Vorgeschlagene Art des Rechtsakts",
    proposal_type: "Europäische Verordnung (unmittelbar in allen Mitgliedstaaten anwendbar).",
    proposal_articles_title: "Was der Vorschlag vorsieht",
    proposal_art1: "<strong>Artikel 1 — Supermärkte</strong><ul><li>Verpflichtende Spende noch genießbarer Lebensmittel</li><li>Rabatte auf Produkte nahe dem Verfallsdatum</li><li>Jährliche Veröffentlichung der Daten zur Lebensmittelverschwendung</li></ul>",
    proposal_art2: "<strong>Artikel 2 — Restaurants und Kantinen</strong><ul><li>Möglichkeit für Gäste, Reste mitzunehmen («Family Bag»)</li><li>Schulung des Personals zum Portionsmanagement</li><li>20 % weniger Lebensmittelabfälle bis 2028</li></ul>",
    proposal_art3: "<strong>Artikel 3 — Haushalte und Verbraucher</strong><ul><li>Informationskampagnen</li><li>Klarere Kennzeichnung («mindestens haltbar bis…»)</li><li>Förderung von Apps und Plattformen zur Umverteilung von Überschüssen</li></ul>",
    proposal_art4: "<strong>Artikel 4 — Kontrollen und Sanktionen</strong><ul><li>Fortschrittsbewertung alle zwei Jahre</li><li>Korrekturpläne für säumige Mitgliedstaaten</li><li>Verhältnismäßige Sanktionen bei Nichteinhaltung</li></ul>",
    proposal_outcomes_title: "Erwartete Ergebnisse",
    proposal_outcomes: "<li>Weniger Lebensmittelverschwendung</li><li>Wirtschaftliche Einsparungen für Familien und Unternehmen</li><li>Mehr ökologische Nachhaltigkeit</li><li>Mehr Spenden an wohltätige Organisationen</li>",
    proposal_points_title: "Diskussionspunkte in der Simulation",
    proposal_points: "<li>Ist eine Verordnung oder eine Richtlinie angemessener?</li><li>Sind die Pflichten für Supermärkte und Restaurants realistisch?</li><li>Brauchen die Mitgliedstaaten mehr Flexibilität?</li><li>Sind die Maßnahmen für Haushalte ausreichend?</li>",
    sg_title: "Simulationsspiel — Ein neues europäisches Gesetz gegen Lebensmittelverschwendung",
    sg_intro: "Eine Simulation des EU-Entscheidungsprozesses — von der Idee zum Recht. Die Union will ein reales Problem angehen: die Lebensmittelverschwendung, die Umwelt, Wirtschaft und Familien betrifft. Die Teilnehmer entscheiden, welcher Rechtsakt angenommen werden soll und wie die Institutionen vorgehen sollten.",
    sg_obj_title: "Ziele",
    sg_obj_list: "<li>Verstehen, wie der EU-Entscheidungsprozess funktioniert.</li><li>Die aktive europäische Bürgerschaft stärken.</li><li>Abstrakte Konzepte in praktische Kompetenzen verwandeln.</li><li>Kritisches Denken und Verhandlungsfähigkeit anregen.</li>",
    sg_obj_specific: "In der Praxis werden die Teilnehmer verstehen: <strong>wie ein europäisches Gesetz entsteht</strong>, welche Institutionen beteiligt sind, was Verordnungen, Richtlinien und Beschlüsse sind und wie ein Gesetzestext verhandelt wird.",
    sg_struct_title: "Struktur der Aktivität (45–60 Min)",
    sg_s1_title: "Einleitung",
    sg_s1_text: "Der Moderator stellt das Problem vor und teilt die Teilnehmer in 4 Gruppen: die drei Institutionen des „europäischen Dreiecks” plus Bürger/Interessenträger. Einige Folien veranschaulichen die Simulation.",
    sg_s2_title: "Gruppenarbeit",
    sg_s2_text: "Jede Gruppe erhält ihre Rollenkarte, denkt über die zugewiesene Leitfrage nach und bereitet eine kurze Erklärung zum EU-Vorschlag gegen Lebensmittelverschwendung vor.",
    sg_s3_title: "Vergleich",
    sg_s3_text: "Jede Gruppe stellt ihre Erklärungen und Antworten vor.",
    sg_s4_title: "Plenardiskussion",
    sg_s4_text: "Empfohlene Reihenfolge: die <strong>Kommission</strong> überarbeitet und präsentiert den Vorschlag → das <strong>Parlament</strong> kommentiert und schlägt Änderungen vor → der <strong>Rat</strong> bewertet und verhandelt → die <strong>Bürger</strong> reagieren und üben Druck aus. Der Moderator erteilt das Wort, hält die Zeit ein und regt die Debatte an.",
    sg_s5_title: "Schlussabstimmung",
    sg_s5_text: "Der Moderator fragt: „Stimmt ihr dem Gesetz in der geänderten Fassung zu?”.",
    sg_s6_title: "Debriefing",
    sg_s6_text: "Welche Institution hatte das meiste Gewicht? War es leicht, eine Einigung zu erzielen? War die Wahl des Rechtsakts angemessen? Habt ihr die Schritte aus der Präsentation wiedererkannt?",
    sg_roles_title: "Die 4 Rollenkarten",
    sg_do_label: "Was ihr tun müsst",
    sg_q_label: "Leitfragen",
    sg_role1_badge: "Antragsteller",
    sg_role1_name: "Europäische Kommission",
    sg_role1_who: "Die Institution, die neue europäische Gesetze vorschlägt: der „Startmotor”.",
    sg_role1_do: "<li>Erklären, warum die EU bei der Lebensmittelverschwendung handeln muss.</li><li>Prüfen, ob die EU die Zuständigkeit hat (ausschließlich? geteilt?).</li><li>Einen klaren und einfachen Gesetzesvorschlag vorlegen.</li><li>Den Vorschlag vor Parlament und Rat verteidigen.</li>",
    sg_role1_q: "<li>Warum betrifft das Problem alle europäischen Bürger?</li><li>Warum reichen die Staaten allein nicht aus?</li><li>Welches Hauptziel wollen wir erreichen?</li><li>Braucht es eine Verordnung, eine Richtlinie oder einen Beschluss?</li>",
    sg_role2_badge: "Stimme der Bürger",
    sg_role2_name: "Europäisches Parlament",
    sg_role2_who: "Die von den Bürgern gewählte Institution: sie vertritt deren Interessen, Rechte und Bedürfnisse.",
    sg_role2_do: "<li>Den Vorschlag der Kommission bewerten.</li><li>Änderungen vorschlagen, um ihn wirksamer oder gerechter zu machen.</li><li>Die schwächsten Bürger verteidigen (Senioren, Familien, kleine Geschäfte).</li><li>Mit dem Rat verhandeln, um eine Einigung zu erzielen.</li>",
    sg_role2_q: "<li>Ist der Vorschlag ehrgeizig genug?</li><li>Ist er für die Bürger klar und verständlich?</li><li>Gibt es Gruppen, die benachteiligt werden könnten?</li><li>Welche Verbesserungen können wir vorschlagen?</li>",
    sg_role3_badge: "Nationale Regierungen",
    sg_role3_name: "Rat der Europäischen Union",
    sg_role3_who: "Die Minister der 27 Mitgliedstaaten: sie sorgen dafür, dass das Gesetz realistisch und in den verschiedenen Ländern anwendbar ist.",
    sg_role3_do: "<li>Die Auswirkungen des Vorschlags auf eure Staaten bewerten.</li><li>Widerstände oder Schwierigkeiten erkennen (Kosten, Zeit, kulturelle Unterschiede).</li><li>Kompromisse vorschlagen.</li><li>Mit dem Parlament mitentscheiden.</li>",
    sg_role3_q: "<li>Können alle Staaten das Gesetz auf dieselbe Weise anwenden?</li><li>Haben einige Länder bereits fortschrittlichere Regeln?</li><li>Wird mehr Zeit benötigt?</li><li>Braucht es Flexibilität für einige Staaten?</li>",
    sg_role4_badge: "Interessenträger",
    sg_role4_name: "Bürger und Zivilgesellschaft",
    sg_role4_who: "Ihr vertretet Verbraucherverbände, Rentner, Familien, Freiwilligenorganisationen und Umwelt-NGOs.",
    sg_role4_do: "<li>Sorgen, Bedürfnisse und Forderungen der Bürger äußern.</li><li>Konkrete Alltagsprobleme aufzeigen.</li><li>Bewerten, ob der Vorschlag wirklich den echten Bedürfnissen entspricht.</li><li>Druck auf Parlament und Rat ausüben.</li>",
    sg_role4_q: "<li>Wie wirkt sich Lebensmittelverschwendung auf das Familienleben aus?</li><li>Welche praktischen Lösungen möchtet ihr sehen?</li><li>Ist der Vorschlag verständlich und nützlich?</li><li>Was fehlt?</li>"
  },
  lv: {
    skip_link: "Pāriet uz saturu",
    page_title: "Simulācijas spēle — Pārtikas izšķērdēšana",
    hero_eyebrow: "2. seminārs · Simulācija",
    hero_title: "Jauns ES likums pret pārtikas izšķērdēšanu",
    hero_subtitle: "ES lēmumu pieņemšanas procesa simulācija: no idejas līdz likumam, izmantojot trialogu starp Parlamentu, Padomi un Komisiju.",
    hero_guide: "Vadītāja: <strong>Pina Mastroieni</strong>",
    flag_aria: "Itālijas karogs",
    lang_switcher_aria: "Izvēlēties valodu",
    footer_text: "Erasmus+ projekts · Simulācijas spēle — Pārtikas izšķērdēšana", footer_cookie: "Cookie Policy", footer_wa: "Kontakti", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
    btn_top: "Augšā",
    info_duration_label: "Ilgums",
    info_participants_label: "Dalībnieki",
    hero_pill_audience_label: "Auditorija",
    tag_audience: "Pieaugušie / Senjori",
    info_type_label: "Veids",
    info_type_value: "Simulācija",
    section_scenario: "Scenārijs",
    section_objective: "Mērķi",
    section_trilogue: "Trialogs",
    section_structure: "Aktivitātes struktūra (45 – 60 min)",
    section_roles: "4 lomu kartītes",
    section_proposal: "Komisijas priekšlikums",
    trilogue_intro: "Trialogs ir neformāla, trīspusēja sarunu procedūra, kurā piedalās triju galveno ES iestāžu — Eiropas Parlamenta, ES Padomes un Eiropas Komisijas — pārstāvji, lai ātri panāktu vienošanos par tiesību aktu priekšlikumiem. Lai gan sākotnēji neformāls, tas ir kļuvis par parastās likumdošanas procedūras (koplēmuma) kodolu, paātrinot noteikumu pieņemšanu.",
    trilogue_actors_title: "Kas piedalās: trīs dalībnieki",
    trilogue_actors: "<li><strong>Eiropas Komisija</strong> — piedalās kā vidutāja un likumdošanas iniciatīvas tiesību garants.</li><li><strong>Eiropas Parlaments</strong> — parasti pārstāvēts ar referentu (deputātu, kas atbild par dokumentu) un politisko grupu «ēnu referentiem».</li><li><strong>ES Padome</strong> — pārstāvēta ar Coreper vai attiecīgās darba grupas priekšsēdētāju.</li>",
    trilogue_obj_title: "Mērķis un darbība",
    trilogue_obj: "Trialoga mērķis ir salīdzināt Parlamenta un Padomes nostājas par Komisijas priekšlikumu, meklējot kompromisus par grozījumiem un atšķirībām pirms oficiālajiem balsojumiem.",
    trilogue_stages_title: "Procesa posmi",
    trilogue_stages: "<li><strong>Atklāšana</strong> — pēc tam, kad Komisija ir iesniegusi tiesību akta priekšlikumu.</li><li><strong>Sarunas</strong> — tehniskas un politiskas sanāksmes («tehniskie trialogi» ierēdņu līmenī, «politiskie trialogi» lēmumu pieņemšanas līmenī).</li><li><strong>Vienošanās</strong> (jeb «kompromisa pakete») — ja trialogs ir veiksmīgs.</li><li><strong>Pieņemšana</strong> — saskaņotais teksts atgriežas Padomē un Parlamentā oficiālai apstiprināšanai.</li>",
    trilogue_note: "Trialogus bieži dēvē par Eiropas likumdošanas procesa «melno kasti»: tie padara koplēmumu ātrāku un efektīvāku, taču dažkārt tiek kritizēti par pārredzamības trūkumu, jo svarīgi lēmumi tiek pieņemti slēgtās sanāksmēs.",
    proposal_intro: "<strong>ES Regula «Pārtikas izšķērdēšanas samazināšana 2030»</strong>",
    proposal_why_title: "Kāpēc šis likums ir vajadzīgs?",
    proposal_why: "Katru gadu Eiropas Savienībā tiek izšķērdēti miljoniem tonnu pārtikas. Pārtikas izšķērdēšana palielina atkritumu daudzumu, kaitē videi, apgrūtina ģimenes un uzņēmumus, un dažādās dalībvalstīs tā tiek risināta atšķirīgi. ES rīkojas, jo vide ir dalīta kompetence: var rīkoties gan dalībvalstis, gan Savienība.",
    proposal_obj_title: "Likuma mērķis",
    proposal_obj: "Samazināt pārtikas izšķērdēšanu par 30% līdz 2030. gadam visā ES.",
    proposal_type_title: "Ierosinātais akta veids",
    proposal_type: "Eiropas regula (tieši piemērojama visās dalībvalstīs).",
    proposal_articles_title: "Ko ietver priekšlikums",
    proposal_art1: "<strong>1. pants — Lielveikali</strong><ul><li>Obligāta vēl lietojamas pārtikas ziedošana</li><li>Atlaides produktiem, kuriem tuvojas derīguma termiņš</li><li>Ikgadēja izšķērdēšanas datu publicēšana</li></ul>",
    proposal_art2: "<strong>2. pants — Restorāni un ēdnīcas</strong><ul><li>Iespēja klientiem paņemt pārpalikumus līdzi («ģimenes maisiņš»)</li><li>Personāla apmācība par porciju pārvaldību</li><li>Izšķērdēšanas samazinājums par 20% līdz 2028. gadam</li></ul>",
    proposal_art3: "<strong>3. pants — Mājsaimniecības un patērētāji</strong><ul><li>Informācijas kampaņas</li><li>Skaidrāks marķējums («ieteicams līdz…»)</li><li>Atbalsts lietotnēm un platformām pārpalikumu pārdalei</li></ul>",
    proposal_art4: "<strong>4. pants — Kontrole un sankcijas</strong><ul><li>Progresa novērtējums ik pēc diviem gadiem</li><li>Korektīvie plāni dalībvalstīm, kas atpaliek</li><li>Samērīgas sankcijas neatbilstības gadījumā</li></ul>",
    proposal_outcomes_title: "Gaidāmie rezultāti",
    proposal_outcomes: "<li>Mazāk pārtikas izšķērdēšanas</li><li>Ekonomiski ietaupījumi ģimenēm un uzņēmumiem</li><li>Lielāka vides ilgtspēja</li><li>Vairāk ziedojumu labdarības organizācijām</li>",
    proposal_points_title: "Diskusijas punkti simulācijā",
    proposal_points: "<li>Vai piemērotāka ir regula vai direktīva?</li><li>Vai pienākumi lielveikaliem un restorāniem ir reālistiski?</li><li>Vai dalībvalstīm vajadzīga lielāka elastība?</li><li>Vai pasākumi mājsaimniecībām ir pietiekami?</li>",
    sg_title: "Simulācijas spēle — Jauns Eiropas likums pret pārtikas izšķērdēšanu",
    sg_intro: "ES lēmumu pieņemšanas procesa simulācija — no idejas līdz tiesībām. Savienība vēlas risināt reālu problēmu: pārtikas izšķērdēšanu, kas ietekmē vidi, ekonomiku un ģimenes. Dalībnieki izlemj, kuru tiesību aktu pieņemt un kā iestādēm rīkoties.",
    sg_obj_title: "Mērķi",
    sg_obj_list: "<li>Saprast, kā darbojas ES lēmumu pieņemšanas process.</li><li>Stiprināt aktīvu Eiropas pilsonību.</li><li>Pārvērst abstraktus jēdzienus praktiskās prasmēs.</li><li>Veicināt kritisko domāšanu un sarunu prasmes.</li>",
    sg_obj_specific: "Praksē dalībnieki sapratīs: <strong>kā rodas Eiropas likums</strong>, kuras iestādes ir iesaistītas, kas ir regulas, direktīvas un lēmumi, un kā tiek apspriests tiesību akta teksts.",
    sg_struct_title: "Aktivitātes struktūra (45–60 min)",
    sg_s1_title: "Ievads",
    sg_s1_text: "Vadītājs prezentē problēmu un sadala dalībniekus 4 grupās: trīs „Eiropas trijstūra” iestādes plus pilsoņi/ieinteresētās puses. Daži slaidi ilustrē simulāciju.",
    sg_s2_title: "Darbs grupās",
    sg_s2_text: "Katra grupa saņem savu lomas karti, pārdomā piešķirto pamatjautājumu un sagatavo īsu paziņojumu par ES priekšlikumu pret pārtikas izšķērdēšanu.",
    sg_s3_title: "Salīdzinājums",
    sg_s3_text: "Katra grupa prezentē savus paziņojumus un atbildes.",
    sg_s4_title: "Plenārā diskusija",
    sg_s4_text: "Ieteicamā secība: <strong>Komisija</strong> pārstrādā un prezentē priekšlikumu → <strong>Parlaments</strong> komentē un ierosina grozījumus → <strong>Padome</strong> izvērtē un risina sarunas → <strong>Pilsoņi</strong> reaģē un izdara spiedienu. Vadītājs dod vārdu, kontrolē laiku un rosina diskusiju.",
    sg_s5_title: "Galīgais balsojums",
    sg_s5_text: "Vadītājs jautā: „Vai apstiprināt likumu grozītajā redakcijā?”.",
    sg_s6_title: "Apkopojums",
    sg_s6_text: "Kurai iestādei bija vislielākā ietekme? Vai bija viegli panākt vienošanos? Vai tiesību akta izvēle bija atbilstoša? Vai atpazināt prezentācijā redzētos soļus?",
    sg_roles_title: "4 lomu kartes",
    sg_do_label: "Kas jums jādara",
    sg_q_label: "Pamatjautājumi",
    sg_role1_badge: "Ierosinātājs",
    sg_role1_name: "Eiropas Komisija",
    sg_role1_who: "Iestāde, kas ierosina jaunus Eiropas likumus: „sākotnējais dzinējs”.",
    sg_role1_do: "<li>Paskaidrot, kāpēc ES jārīkojas pārtikas izšķērdēšanas jautājumā.</li><li>Pārbaudīt, vai ES ir kompetence (ekskluzīva? dalīta?).</li><li>Iesniegt skaidru un vienkāršu tiesību akta priekšlikumu.</li><li>Aizstāvēt priekšlikumu Parlamenta un Padomes priekšā.</li>",
    sg_role1_q: "<li>Kāpēc problēma skar visus Eiropas pilsoņus?</li><li>Kāpēc valstis vienas pašas nav pietiekamas?</li><li>Kādu galveno mērķi vēlamies sasniegt?</li><li>Vai vajadzīga regula, direktīva vai lēmums?</li>",
    sg_role2_badge: "Pilsoņu balss",
    sg_role2_name: "Eiropas Parlaments",
    sg_role2_who: "Pilsoņu ievēlēta iestāde: tā pārstāv viņu intereses, tiesības un vajadzības.",
    sg_role2_do: "<li>Izvērtēt Komisijas priekšlikumu.</li><li>Ierosināt grozījumus, lai tas būtu efektīvāks vai taisnīgāks.</li><li>Aizstāvēt visneaizsargātākos pilsoņus (seniorus, ģimenes, mazos veikalus).</li><li>Risināt sarunas ar Padomi, lai panāktu vienošanos.</li>",
    sg_role2_q: "<li>Vai priekšlikums ir pietiekami vērienīgs?</li><li>Vai tas ir skaidrs un saprotams pilsoņiem?</li><li>Vai ir grupas, kas riskē tikt nelabvēlīgi ietekmētas?</li><li>Kādus uzlabojumus varam ieteikt?</li>",
    sg_role3_badge: "Valstu valdības",
    sg_role3_name: "Eiropas Savienības Padome",
    sg_role3_who: "27 dalībvalstu ministri: viņi nodrošina, ka likums ir reālistisks un piemērojams dažādās valstīs.",
    sg_role3_do: "<li>Izvērtēt priekšlikuma ietekmi uz jūsu valstīm.</li><li>Identificēt pretestību vai grūtības (izmaksas, laiks, kultūras atšķirības).</li><li>Ierosināt kompromisus.</li><li>Kopīgi lemt ar Parlamentu.</li>",
    sg_role3_q: "<li>Vai visas valstis var piemērot likumu vienādi?</li><li>Vai dažās valstīs jau ir progresīvāki noteikumi?</li><li>Vai vajadzīgs vairāk laika?</li><li>Vai dažām valstīm vajadzīga elastība?</li>",
    sg_role4_badge: "Ieinteresētās puses",
    sg_role4_name: "Pilsoņi un pilsoniskā sabiedrība",
    sg_role4_who: "Jūs pārstāvat patērētāju apvienības, pensionārus, ģimenes, brīvprātīgos un vides NVO.",
    sg_role4_do: "<li>Paust pilsoņu bažas, vajadzības un prasības.</li><li>Norādīt konkrētas ikdienas dzīves problēmas.</li><li>Izvērtēt, vai priekšlikums tiešām atbilst reālajām vajadzībām.</li><li>Izdarīt spiedienu uz Parlamentu un Padomi.</li>",
    sg_role4_q: "<li>Kā pārtikas izšķērdēšana ietekmē ģimeņu dzīvi?</li><li>Kādus praktiskus risinājumus vēlētos redzēt?</li><li>Vai priekšlikums ir saprotams un noderīgs?</li><li>Kā trūkst?</li>"
  }
};

// ============================================================
// Motore i18n + selettore lingua
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
