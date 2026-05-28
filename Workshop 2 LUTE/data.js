// ============================================================
// data.js — Workshop 2 · Il processo decisionale nell'UE
// 16 slide × 5 lingue (it · en · pl · de · lv)
// Erasmus+ · LUTE
// ============================================================

// ---------- Immagini lingua-indipendenti ----------
const SLIDE_IMG_SRCS = {
  1: ["img/slide-01.png"]
};

// ---------- Didascalie per lingua ----------
const SLIDE_CAPTIONS = {
  it: { 1: ["L'Europa come spazio comune di cittadinanza e diritti"] },
  en: { 1: ["Europe as a shared space of citizenship and rights"] },
  pl: { 1: ["Europa jako wspólna przestrzeń obywatelstwa i praw"] },
  de: { 1: ["Europa als gemeinsamer Raum der Bürgerschaft und Rechte"] },
  lv: { 1: ["Eiropa kā kopīga pilsonības un tiesību telpa"] }
};

// ============================================================
// SLIDES — ITALIANO
// ============================================================
const SLIDES_IT = [
  {
    id: 1,
    title: "Il processo decisionale nell'UE",
    subtitle: "dall'idea al diritto",
    banner: "Erasmus+ · Workshop n. 2",
    sections: [
      {
        type: "text",
        heading: "Di cosa parleremo",
        body: "In questo workshop scopriremo come l'Unione Europea trasforma un'idea politica in una norma vincolante per i 27 Paesi membri. Vedremo le fonti del diritto europeo, le competenze condivise tra UE e Stati e i diversi tipi di atti che producono effetti sulla vita di tutti i giorni."
      }
    ]
  },
  {
    id: 2,
    title: "L'Europa dei 27",
    subtitle: "Un'unione di Stati che decidono insieme",
    banner: "Seguono Esercitazioni 1a · 1b",
    meta: [["STATI MEMBRI", "27"], ["POPOLAZIONE", "circa 450 milioni"]],
    sections: [
      {
        type: "text",
        heading: "L'Unione Europea oggi",
        body: "L'Unione Europea è un'organizzazione politica ed economica che riunisce 27 Stati membri intorno a regole comuni. Ogni decisione presa a Bruxelles, Strasburgo o Lussemburgo nasce da un percorso preciso che coinvolge istituzioni, governi nazionali e cittadini."
      },
      {
        type: "list",
        heading: "Cosa impareremo nel workshop",
        items: [
          "Da dove nascono le norme europee",
          "La differenza tra competenze dell'UE e dei singoli Stati",
          "I principali atti giuridici: regolamenti, direttive, decisioni, pareri, raccomandazioni",
          "Il diverso peso vincolante di ciascun atto"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Le fonti del diritto dell'Unione Europea",
    subtitle: "I cinque pilastri da cui nascono le regole",
    sections: [
      {
        type: "text",
        heading: "Cosa sono le fonti del diritto",
        body: "Le fonti del diritto sono l'insieme degli atti che producono regole giuridiche nell'Unione. Si dividono in cinque grandi categorie, ordinate per importanza gerarchica."
      },
      {
        type: "table",
        heading: "Le cinque categorie",
        head: ["#", "Fonte", "Esempi"],
        rows: [
          ["1", "Diritto primario", "Trattati UE · Carta dei diritti fondamentali"],
          ["2", "Accordi internazionali dell'UE", "Trattati commerciali · accordi di associazione"],
          ["3", "Diritto secondario (derivato)", "Regolamenti · direttive · decisioni · pareri · raccomandazioni"],
          ["4", "Principi generali del diritto", "Principi costituzionali comuni agli Stati membri"],
          ["5", "Accordi tra Stati membri", "Convenzioni e intese tra governi nazionali"]
        ]
      },
      {
        type: "text",
        heading: "In sintesi",
        body: "Il diritto primario fissa le regole fondamentali, il diritto secondario le applica e le rende operative."
      }
    ]
  },
  {
    id: 4,
    title: "Competenze esclusive dell'UE",
    subtitle: "Solo l'Unione può legiferare",
    sections: [
      {
        type: "text",
        heading: "Cosa significa",
        body: "Si parla di competenza esclusiva quando, su un determinato tema, soltanto l'Unione Europea ha il potere di adottare norme vincolanti. Gli Stati membri possono intervenire solo se autorizzati dall'UE o per dare attuazione agli atti europei."
      },
      {
        type: "list",
        heading: "Esempi principali",
        items: [
          "Politica commerciale comune verso i Paesi extra-UE",
          "Politica monetaria per i Paesi che adottano l'euro",
          "Unione doganale",
          "Conservazione delle risorse biologiche del mare",
          "Regole di concorrenza nel mercato interno"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Competenze concorrenti",
    subtitle: "UE e Stati possono agire insieme",
    sections: [
      {
        type: "text",
        heading: "Cosa significa",
        body: "Sono concorrenti le competenze in cui sia l'Unione sia gli Stati membri possono legiferare. Quando però l'UE è già intervenuta, gli Stati possono agire soltanto nei limiti lasciati dalla normativa europea (principio di sussidiarietà)."
      },
      {
        type: "list",
        heading: "Esempi principali",
        items: [
          "Politica ambientale e cambiamenti climatici",
          "Politica agricola comune",
          "Mercato interno",
          "Trasporti ed energia",
          "Protezione dei consumatori",
          "Coesione economica, sociale e territoriale"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Competenze esclusive degli Stati",
    subtitle: "L'UE coordina, ma non legifera",
    sections: [
      {
        type: "text",
        heading: "Cosa significa",
        body: "Sono ambiti in cui solo i governi nazionali possono adottare norme vincolanti. L'Unione si limita a un ruolo di coordinamento, sostegno o supporto, senza imporre obblighi legislativi."
      },
      {
        type: "list",
        heading: "Esempi principali",
        items: [
          "Istruzione e formazione professionale",
          "Politica fiscale (tasse e imposte nazionali)",
          "Politica estera e di difesa",
          "Sanità pubblica (organizzazione dei servizi)",
          "Cultura e sport"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Le competenze: un colpo d'occhio",
    subtitle: "Chi decide cosa nell'Unione Europea",
    banner: "Seguono Esercitazioni 2a · 2b · 2c",
    sections: [
      {
        type: "tricolor",
        heading: "Tre livelli di responsabilità",
        blocks: [
          { color: "#1a3f80", label: "ESCLUSIVE UE — Commercio · Moneta euro · Dogana" },
          { color: "#2b8049", label: "CONCORRENTI — Ambiente · Agricoltura · Trasporti" },
          { color: "#8a2c5b", label: "ESCLUSIVE STATI — Fisco · Istruzione · Estera" }
        ]
      },
      {
        type: "text",
        heading: "Perché è importante saperlo",
        body: "Capire chi ha la competenza su un tema aiuta a indirizzare correttamente le richieste politiche e a sapere su quale livello — europeo, nazionale o locale — è possibile intervenire."
      }
    ]
  },
  {
    id: 8,
    title: "Le fonti del diritto: il quadro completo",
    subtitle: "Dal Trattato alla raccomandazione",
    sections: [
      {
        type: "text",
        heading: "Una mappa per orientarsi",
        body: "Prima di entrare nei singoli atti, vediamo l'intera mappa del diritto europeo. Conoscere le categorie aiuta a capire quale strumento si sta usando e quale effetto produce."
      },
      {
        type: "table",
        heading: "Mappa generale",
        head: ["Livello", "Categoria", "Atti tipici"],
        rows: [
          ["Primario", "Trattati", "Trattato sull'Unione Europea (TUE) · Trattato sul Funzionamento (TFUE)"],
          ["Secondario", "Atti vincolanti", "Regolamenti · Direttive · Decisioni"],
          ["Secondario", "Atti non vincolanti", "Pareri · Raccomandazioni"],
          ["Trasversale", "Atti non legislativi", "Atti delegati · atti di esecuzione"]
        ]
      },
      {
        type: "text",
        heading: "Nei prossimi capitoli",
        body: "Esamineremo uno per uno gli atti del diritto secondario, partendo dai più vincolanti per arrivare a quelli che orientano senza obbligare."
      }
    ]
  },
  {
    id: 9,
    title: "Il diritto primario",
    subtitle: "I Trattati: la \"costituzione\" dell'Unione",
    sections: [
      {
        type: "text",
        heading: "Cosa sono i Trattati",
        body: "Il diritto primario è il fondamento giuridico dell'Unione. Stabilisce gli obiettivi, le istituzioni, le procedure decisionali e i diritti dei cittadini europei. È paragonabile a una costituzione: ogni norma successiva deve rispettarne i principi."
      },
      {
        type: "list",
        heading: "Le componenti principali",
        items: [
          "Trattato sull'Unione Europea (TUE) — Maastricht 1992",
          "Trattato sul Funzionamento dell'UE (TFUE) — già Trattato di Roma 1957, riformato a Lisbona",
          "Carta dei diritti fondamentali dell'UE — vincolante dal 2009",
          "Principi generali del diritto comuni agli Stati membri"
        ]
      },
      {
        type: "text",
        heading: "In pratica",
        body: "I Trattati si modificano solo con l'accordo unanime di tutti i 27 Stati membri e devono essere ratificati dai parlamenti nazionali."
      }
    ]
  },
  {
    id: 10,
    title: "Il diritto secondario (derivato)",
    subtitle: "Gli atti che applicano i Trattati",
    sections: [
      {
        type: "text",
        heading: "Cosa è il diritto derivato",
        body: "Il diritto secondario nasce dai Trattati e ne mette in pratica le scelte. Si articola in più categorie e produce effetti diversi su cittadini, imprese e Stati membri."
      },
      {
        type: "table",
        heading: "Le categorie principali",
        head: ["Tipo", "Atti"],
        rows: [
          ["Atti legislativi vincolanti", "Regolamenti · Direttive · Decisioni"],
          ["Atti non vincolanti", "Pareri · Raccomandazioni"],
          ["Atti convenzionali", "Accordi internazionali · accordi tra Stati membri"],
          ["Atti non legislativi", "Atti delegati · atti di esecuzione"]
        ]
      },
      {
        type: "text",
        heading: "Il viaggio continua",
        body: "Nei prossimi capitoli vedremo uno per uno i cinque atti principali: regolamenti, direttive, decisioni, pareri e raccomandazioni."
      }
    ]
  },
  {
    id: 11,
    title: "I Regolamenti",
    subtitle: "Atti vincolanti, validi subito in tutta l'UE",
    meta: [["TIPO", "Atto legislativo"], ["EFFETTO", "Direttamente applicabile"]],
    sections: [
      {
        type: "text",
        heading: "Cosa sono",
        body: "I regolamenti sono atti giuridici vincolanti, applicabili in tutti i Paesi UE non appena entrano in vigore. Non richiedono leggi nazionali di recepimento: il loro testo diventa direttamente legge in tutta l'Unione."
      },
      {
        type: "list",
        heading: "Due esempi recenti che ci toccano da vicino",
        items: [
          "<strong>Regolamento (UE) 2024/1689</strong> — la prima legge europea sull'Intelligenza Artificiale (AI Act). Si applica direttamente in tutta l'UE; in Italia la legge 132/2025 ne accompagna l'attuazione. Fissa norme basate sul rischio e mette la persona al centro.",
          "<strong>Regolamento (UE) 2016/679</strong> — il GDPR sulla protezione dei dati personali. Garantisce a ciascuno il controllo sulle proprie informazioni e armonizza le regole in tutta Europa."
        ]
      },
      {
        type: "list",
        heading: "Dove si applicano (esempi pratici)",
        items: [
          "Sanità e diagnostica",
          "Gestione delle risorse umane",
          "Marketing e profilazione",
          "Videosorveglianza",
          "Valutazione del credito",
          "Pubblica amministrazione"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Le Direttive",
    subtitle: "Obiettivi comuni, libertà di metodo",
    meta: [["TIPO", "Atto legislativo"], ["EFFETTO", "Da recepire entro una scadenza"]],
    sections: [
      {
        type: "text",
        heading: "Cosa sono",
        body: "Le direttive fissano obiettivi che tutti gli Stati membri devono raggiungere, lasciando però a ciascuno la libertà di scegliere i mezzi. Ogni direttiva contiene una scadenza entro cui i Paesi devono recepirla nel loro diritto nazionale."
      },
      {
        type: "text",
        heading: "Esempio: la plastica monouso",
        body: "La <strong>Direttiva (UE) 2019/904</strong> impone agli Stati membri di ridurre l'impatto ambientale di prodotti come piatti, posate e cannucce di plastica. L'Italia l'ha recepita con il Decreto Legislativo 196/2021."
      },
      {
        type: "text",
        heading: "Cosa succede se uno Stato non rispetta la scadenza",
        body: "Scatta la <strong>procedura d'infrazione</strong>: la Commissione Europea può portare lo Stato davanti alla Corte di Giustizia dell'UE, con possibili sanzioni economiche."
      }
    ]
  },
  {
    id: 13,
    title: "Le Decisioni",
    subtitle: "Vincolanti, ma solo per i destinatari",
    meta: [["TIPO", "Atto legislativo"], ["EFFETTO", "Direttamente applicabile ai destinatari"]],
    sections: [
      {
        type: "text",
        heading: "Cosa sono",
        body: "Una decisione è un atto vincolante e direttamente applicabile, ma soltanto per chi è espressamente indicato come destinatario: può essere uno Stato, una singola impresa o un cittadino."
      },
      {
        type: "list",
        heading: "Due esempi reali",
        items: [
          "<strong>Croazia, 1° gennaio 2023</strong> — il Consiglio adotta la decisione che autorizza il Paese ad adottare l'euro come moneta ufficiale. Riguarda solo la Croazia.",
          "<strong>Google, 2017</strong> — la Commissione Europea adotta una decisione contro l'azienda per abuso di posizione dominante e impone una multa specifica."
        ]
      }
    ]
  },
  {
    id: 14,
    title: "I Pareri",
    subtitle: "Posizioni espresse, senza obblighi",
    meta: [["TIPO", "Atto non legislativo"], ["EFFETTO", "Non vincolante"]],
    sections: [
      {
        type: "text",
        heading: "Cosa sono",
        body: "Il parere è uno strumento con cui un'istituzione europea esprime la propria valutazione su una questione, senza imporre obblighi giuridici. Serve a orientare il dibattito e a influenzare le scelte politiche."
      },
      {
        type: "list",
        heading: "Due esempi",
        items: [
          "<strong>CESE — Comitato Economico e Sociale Europeo</strong>: parere sulla strategia della Commissione per le piccole e medie imprese di nuova generazione.",
          "<strong>Comitato delle Regioni (giugno 2017)</strong>: parere favorevole sul ruolo degli enti locali e regionali nella transizione verso un'economia circolare."
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Le Raccomandazioni",
    subtitle: "Inviti a fare, non obblighi",
    meta: [["TIPO", "Atto non legislativo"], ["EFFETTO", "Non vincolante"]],
    banner: "Seguono Esercitazioni 3a · 3b",
    sections: [
      {
        type: "text",
        heading: "Cosa sono",
        body: "Le raccomandazioni sono inviti rivolti agli Stati membri, alle istituzioni o ai cittadini per orientare comportamenti su temi rilevanti, senza creare obblighi giuridici. Sono strumenti di soft law: contano per il loro peso politico e morale."
      },
      {
        type: "list",
        heading: "Due esempi",
        items: [
          "<strong>Competenze chiave</strong> — l'UE raccomanda agli Stati di promuovere l'apprendimento delle lingue e delle competenze digitali per tutta la vita.",
          "<strong>Salute pubblica (2020)</strong> — raccomandazioni sulle restrizioni di viaggio durante la pandemia di Covid-19, per coordinare le risposte nazionali."
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Dall'idea al diritto",
    subtitle: "Il percorso che abbiamo fatto insieme",
    sections: [
      {
        type: "text",
        heading: "Riepilogo del workshop",
        body: "Abbiamo seguito il viaggio di un'idea politica fino a diventare una norma vincolante: dalle 27 nazioni che decidono insieme, alle competenze condivise tra UE e Stati, fino agli atti che concretizzano le scelte europee."
      },
      {
        type: "list",
        heading: "Quattro idee da portare a casa",
        items: [
          "Le fonti del diritto UE sono ordinate gerarchicamente: i Trattati al vertice, il diritto derivato a metà",
          "Le competenze possono essere esclusive UE, concorrenti o esclusive degli Stati",
          "I regolamenti si applicano subito; le direttive vanno recepite; le decisioni colpiscono i destinatari",
          "Pareri e raccomandazioni non obbligano, ma orientano le scelte politiche"
        ]
      },
      {
        type: "text",
        heading: "Una riflessione finale",
        body: "Conoscere come si decide in Europa significa capire meglio le regole che vivono accanto a noi: dall'etichetta di un prodotto ai diritti digitali, dalla qualità dell'aria alla protezione dei nostri dati."
      }
    ]
  }
];

// ============================================================
// SLIDES — ENGLISH
// ============================================================
const SLIDES_EN = [
  {
    id: 1,
    title: "The EU decision-making process",
    subtitle: "from idea to law",
    banner: "Erasmus+ · Workshop no. 2",
    sections: [
      {
        type: "text",
        heading: "What this workshop is about",
        body: "In this workshop we will discover how the European Union turns a political idea into a binding rule for the 27 Member States. We will look at the sources of EU law, the competences shared between the EU and Member States, and the different types of acts that affect everyday life."
      }
    ]
  },
  {
    id: 2,
    title: "Europe of the 27",
    subtitle: "A union of States that decide together",
    banner: "Followed by Exercises 1a · 1b",
    meta: [["MEMBER STATES", "27"], ["POPULATION", "around 450 million"]],
    sections: [
      {
        type: "text",
        heading: "The European Union today",
        body: "The European Union is a political and economic organisation that brings together 27 Member States around common rules. Every decision taken in Brussels, Strasbourg or Luxembourg comes from a precise process involving institutions, national governments and citizens."
      },
      {
        type: "list",
        heading: "What we will learn",
        items: [
          "Where European rules come from",
          "The difference between EU and national competences",
          "The main legal acts: regulations, directives, decisions, opinions, recommendations",
          "The different binding force of each act"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Sources of European Union law",
    subtitle: "The five pillars from which the rules originate",
    sections: [
      {
        type: "text",
        heading: "What sources of law are",
        body: "Sources of law are all the acts that produce legal rules in the Union. They are divided into five major categories, ranked by hierarchical importance."
      },
      {
        type: "table",
        heading: "The five categories",
        head: ["#", "Source", "Examples"],
        rows: [
          ["1", "Primary law", "EU Treaties · Charter of Fundamental Rights"],
          ["2", "International agreements of the EU", "Trade treaties · association agreements"],
          ["3", "Secondary (derived) law", "Regulations · directives · decisions · opinions · recommendations"],
          ["4", "General principles of law", "Constitutional principles common to Member States"],
          ["5", "Agreements between Member States", "Conventions and arrangements between national governments"]
        ]
      },
      {
        type: "text",
        heading: "In short",
        body: "Primary law sets the fundamental rules; secondary law applies them and makes them operational."
      }
    ]
  },
  {
    id: 4,
    title: "Exclusive EU competences",
    subtitle: "Only the Union can legislate",
    sections: [
      {
        type: "text",
        heading: "What it means",
        body: "We speak of exclusive competence when only the European Union has the power to adopt binding rules on a given matter. Member States can act only if authorised by the EU or to implement European acts."
      },
      {
        type: "list",
        heading: "Main examples",
        items: [
          "Common commercial policy towards non-EU countries",
          "Monetary policy for the countries that adopt the euro",
          "Customs union",
          "Conservation of marine biological resources",
          "Competition rules within the internal market"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Shared competences",
    subtitle: "EU and Member States can act together",
    sections: [
      {
        type: "text",
        heading: "What it means",
        body: "Shared competences are areas where both the Union and the Member States may legislate. However, once the EU has acted, States may act only within the limits left by European legislation (subsidiarity principle)."
      },
      {
        type: "list",
        heading: "Main examples",
        items: [
          "Environmental policy and climate change",
          "Common Agricultural Policy",
          "Internal market",
          "Transport and energy",
          "Consumer protection",
          "Economic, social and territorial cohesion"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Exclusive Member State competences",
    subtitle: "The EU coordinates, but does not legislate",
    sections: [
      {
        type: "text",
        heading: "What it means",
        body: "These are areas where only national governments may adopt binding rules. The Union plays only a coordinating, supporting or supplementing role, without imposing legislative obligations."
      },
      {
        type: "list",
        heading: "Main examples",
        items: [
          "Education and vocational training",
          "Tax policy (national taxes and duties)",
          "Foreign and defence policy",
          "Public health (organisation of services)",
          "Culture and sport"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Competences at a glance",
    subtitle: "Who decides what in the European Union",
    banner: "Followed by Exercises 2a · 2b · 2c",
    sections: [
      {
        type: "tricolor",
        heading: "Three levels of responsibility",
        blocks: [
          { color: "#1a3f80", label: "EXCLUSIVE EU — Trade · Euro currency · Customs" },
          { color: "#2b8049", label: "SHARED — Environment · Agriculture · Transport" },
          { color: "#8a2c5b", label: "EXCLUSIVE STATES — Tax · Education · Foreign affairs" }
        ]
      },
      {
        type: "text",
        heading: "Why it matters",
        body: "Knowing who has competence on a given topic helps to address political requests correctly and to understand at which level — European, national or local — action can be taken."
      }
    ]
  },
  {
    id: 8,
    title: "Sources of law: the full picture",
    subtitle: "From the Treaty to the recommendation",
    sections: [
      {
        type: "text",
        heading: "A map to find your way",
        body: "Before looking at each act, let's see the full map of European law. Knowing the categories helps to understand which tool is being used and what effect it produces."
      },
      {
        type: "table",
        heading: "General map",
        head: ["Level", "Category", "Typical acts"],
        rows: [
          ["Primary", "Treaties", "Treaty on European Union (TEU) · Treaty on the Functioning of the EU (TFEU)"],
          ["Secondary", "Binding acts", "Regulations · Directives · Decisions"],
          ["Secondary", "Non-binding acts", "Opinions · Recommendations"],
          ["Cross-cutting", "Non-legislative acts", "Delegated acts · implementing acts"]
        ]
      },
      {
        type: "text",
        heading: "In the next chapters",
        body: "We will examine secondary law acts one by one, starting from the most binding and ending with those that guide without obliging."
      }
    ]
  },
  {
    id: 9,
    title: "Primary law",
    subtitle: "The Treaties: the Union's \"constitution\"",
    sections: [
      {
        type: "text",
        heading: "What the Treaties are",
        body: "Primary law is the legal foundation of the Union. It establishes objectives, institutions, decision-making procedures and the rights of European citizens. It is comparable to a constitution: every later rule must respect its principles."
      },
      {
        type: "list",
        heading: "Main components",
        items: [
          "Treaty on European Union (TEU) — Maastricht 1992",
          "Treaty on the Functioning of the EU (TFEU) — formerly the 1957 Treaty of Rome, reformed at Lisbon",
          "EU Charter of Fundamental Rights — binding since 2009",
          "General principles of law common to Member States"
        ]
      },
      {
        type: "text",
        heading: "In practice",
        body: "Treaties can only be amended with the unanimous agreement of all 27 Member States and must be ratified by national parliaments."
      }
    ]
  },
  {
    id: 10,
    title: "Secondary (derived) law",
    subtitle: "The acts that implement the Treaties",
    sections: [
      {
        type: "text",
        heading: "What derived law is",
        body: "Secondary law stems from the Treaties and puts their choices into practice. It is divided into several categories and produces different effects on citizens, businesses and Member States."
      },
      {
        type: "table",
        heading: "Main categories",
        head: ["Type", "Acts"],
        rows: [
          ["Binding legislative acts", "Regulations · Directives · Decisions"],
          ["Non-binding acts", "Opinions · Recommendations"],
          ["Conventional acts", "International agreements · agreements between Member States"],
          ["Non-legislative acts", "Delegated acts · implementing acts"]
        ]
      },
      {
        type: "text",
        heading: "The journey continues",
        body: "In the next chapters we will look one by one at the five main acts: regulations, directives, decisions, opinions and recommendations."
      }
    ]
  },
  {
    id: 11,
    title: "Regulations",
    subtitle: "Binding acts, immediately valid across the EU",
    meta: [["TYPE", "Legislative act"], ["EFFECT", "Directly applicable"]],
    sections: [
      {
        type: "text",
        heading: "What they are",
        body: "Regulations are binding legal acts, applicable in all EU countries as soon as they enter into force. They do not require national transposition laws: their text becomes law directly throughout the Union."
      },
      {
        type: "list",
        heading: "Two recent examples that affect us closely",
        items: [
          "<strong>Regulation (EU) 2024/1689</strong> — the first European law on Artificial Intelligence (AI Act). It applies directly across the EU; in Italy, Law 132/2025 supports its implementation. It sets risk-based rules and puts the person at the centre.",
          "<strong>Regulation (EU) 2016/679</strong> — the GDPR on personal data protection. It guarantees everyone control over their information and harmonises rules across Europe."
        ]
      },
      {
        type: "list",
        heading: "Where they apply (practical examples)",
        items: [
          "Healthcare and diagnostics",
          "Human resources management",
          "Marketing and profiling",
          "Video surveillance",
          "Credit scoring",
          "Public administration"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Directives",
    subtitle: "Common goals, freedom of method",
    meta: [["TYPE", "Legislative act"], ["EFFECT", "To be transposed within a deadline"]],
    sections: [
      {
        type: "text",
        heading: "What they are",
        body: "Directives set objectives that all Member States must achieve, while leaving each one free to choose the means. Every directive contains a deadline by which countries must transpose it into their national law."
      },
      {
        type: "text",
        heading: "Example: single-use plastics",
        body: "<strong>Directive (EU) 2019/904</strong> requires Member States to reduce the environmental impact of products such as plastic plates, cutlery and straws. Italy transposed it with Legislative Decree 196/2021."
      },
      {
        type: "text",
        heading: "What happens if a State misses the deadline",
        body: "An <strong>infringement procedure</strong> is triggered: the European Commission can bring the State before the Court of Justice of the EU, with possible financial penalties."
      }
    ]
  },
  {
    id: 13,
    title: "Decisions",
    subtitle: "Binding, but only for the addressees",
    meta: [["TYPE", "Legislative act"], ["EFFECT", "Directly applicable to the addressees"]],
    sections: [
      {
        type: "text",
        heading: "What they are",
        body: "A decision is a binding act, directly applicable, but only to those expressly named as addressees: it can be a State, a single company or a citizen."
      },
      {
        type: "list",
        heading: "Two real examples",
        items: [
          "<strong>Croatia, 1 January 2023</strong> — the Council adopts the decision authorising the country to adopt the euro as official currency. It concerns Croatia only.",
          "<strong>Google, 2017</strong> — the European Commission adopts a decision against the company for abuse of dominant position and imposes a specific fine."
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Opinions",
    subtitle: "Stated positions, without obligations",
    meta: [["TYPE", "Non-legislative act"], ["EFFECT", "Non-binding"]],
    sections: [
      {
        type: "text",
        heading: "What they are",
        body: "An opinion is a tool through which a European institution expresses its assessment on an issue, without imposing legal obligations. It serves to guide debate and influence political choices."
      },
      {
        type: "list",
        heading: "Two examples",
        items: [
          "<strong>EESC — European Economic and Social Committee</strong>: opinion on the Commission's strategy for next-generation small and medium-sized enterprises.",
          "<strong>Committee of the Regions (June 2017)</strong>: favourable opinion on the role of local and regional authorities in the transition to a circular economy."
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Recommendations",
    subtitle: "Invitations to act, not obligations",
    meta: [["TYPE", "Non-legislative act"], ["EFFECT", "Non-binding"]],
    banner: "Followed by Exercises 3a · 3b",
    sections: [
      {
        type: "text",
        heading: "What they are",
        body: "Recommendations are invitations addressed to Member States, institutions or citizens, to guide behaviour on relevant topics without creating legal obligations. They are soft-law instruments: they matter for their political and moral weight."
      },
      {
        type: "list",
        heading: "Two examples",
        items: [
          "<strong>Key competences</strong> — the EU recommends that States promote lifelong learning of languages and digital skills.",
          "<strong>Public health (2020)</strong> — recommendations on travel restrictions during the Covid-19 pandemic, to coordinate national responses."
        ]
      }
    ]
  },
  {
    id: 16,
    title: "From idea to law",
    subtitle: "The journey we made together",
    sections: [
      {
        type: "text",
        heading: "Workshop summary",
        body: "We have followed the journey of a political idea until it becomes a binding rule: from the 27 nations that decide together, to the competences shared between EU and States, to the acts that turn European choices into reality."
      },
      {
        type: "list",
        heading: "Four take-aways",
        items: [
          "EU sources of law are hierarchically ordered: Treaties at the top, derived law in the middle",
          "Competences can be exclusive EU, shared or exclusive State",
          "Regulations apply immediately; directives must be transposed; decisions affect their addressees",
          "Opinions and recommendations don't oblige but guide political choices"
        ]
      },
      {
        type: "text",
        heading: "A final thought",
        body: "Knowing how Europe decides means understanding the rules that live alongside us: from a product label to digital rights, from air quality to the protection of our data."
      }
    ]
  }
];

// ============================================================
// SLIDES — POLSKI
// ============================================================
const SLIDES_PL = [
  {
    id: 1,
    title: "Proces decyzyjny w UE",
    subtitle: "od pomysłu do prawa",
    banner: "Erasmus+ · Warsztat nr 2",
    sections: [
      {
        type: "text",
        heading: "O czym będzie ten warsztat",
        body: "Podczas tego warsztatu odkryjemy, jak Unia Europejska przekształca polityczny pomysł w wiążącą normę dla 27 państw członkowskich. Poznamy źródła prawa europejskiego, kompetencje dzielone między UE a państwami oraz różne rodzaje aktów wpływających na codzienne życie."
      }
    ]
  },
  {
    id: 2,
    title: "Europa 27 państw",
    subtitle: "Unia państw decydujących wspólnie",
    banner: "Następnie ćwiczenia 1a · 1b",
    meta: [["PAŃSTWA CZŁONKOWSKIE", "27"], ["LUDNOŚĆ", "około 450 milionów"]],
    sections: [
      {
        type: "text",
        heading: "Unia Europejska dzisiaj",
        body: "Unia Europejska jest organizacją polityczną i gospodarczą, która łączy 27 państw członkowskich wokół wspólnych zasad. Każda decyzja podjęta w Brukseli, Strasburgu czy Luksemburgu wynika z dokładnego procesu z udziałem instytucji, rządów krajowych i obywateli."
      },
      {
        type: "list",
        heading: "Czego się nauczymy",
        items: [
          "Skąd biorą się przepisy europejskie",
          "Różnica między kompetencjami UE a państw członkowskich",
          "Główne akty prawne: rozporządzenia, dyrektywy, decyzje, opinie, zalecenia",
          "Różna moc wiążąca każdego z aktów"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Źródła prawa Unii Europejskiej",
    subtitle: "Pięć filarów, z których powstają przepisy",
    sections: [
      {
        type: "text",
        heading: "Czym są źródła prawa",
        body: "Źródła prawa to wszystkie akty tworzące normy prawne w Unii. Dzielą się na pięć dużych kategorii uporządkowanych według ważności hierarchicznej."
      },
      {
        type: "table",
        heading: "Pięć kategorii",
        head: ["#", "Źródło", "Przykłady"],
        rows: [
          ["1", "Prawo pierwotne", "Traktaty UE · Karta Praw Podstawowych"],
          ["2", "Umowy międzynarodowe UE", "Umowy handlowe · układy o stowarzyszeniu"],
          ["3", "Prawo wtórne (pochodne)", "Rozporządzenia · dyrektywy · decyzje · opinie · zalecenia"],
          ["4", "Ogólne zasady prawa", "Zasady konstytucyjne wspólne państwom członkowskim"],
          ["5", "Umowy między państwami", "Konwencje i porozumienia między rządami"]
        ]
      },
      {
        type: "text",
        heading: "W skrócie",
        body: "Prawo pierwotne ustala podstawowe zasady, prawo wtórne je wdraża i czyni operacyjnymi."
      }
    ]
  },
  {
    id: 4,
    title: "Wyłączne kompetencje UE",
    subtitle: "Tylko Unia może stanowić prawo",
    sections: [
      {
        type: "text",
        heading: "Co to znaczy",
        body: "Mówimy o kompetencji wyłącznej, gdy w danej dziedzinie tylko Unia Europejska ma prawo przyjmować wiążące normy. Państwa członkowskie mogą działać tylko za zgodą UE lub w celu wykonania aktów europejskich."
      },
      {
        type: "list",
        heading: "Główne przykłady",
        items: [
          "Wspólna polityka handlowa wobec krajów spoza UE",
          "Polityka pieniężna dla krajów strefy euro",
          "Unia celna",
          "Ochrona morskich zasobów biologicznych",
          "Reguły konkurencji na rynku wewnętrznym"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Kompetencje dzielone",
    subtitle: "UE i państwa mogą działać wspólnie",
    sections: [
      {
        type: "text",
        heading: "Co to znaczy",
        body: "Kompetencje dzielone to dziedziny, w których zarówno Unia, jak i państwa członkowskie mogą stanowić prawo. Jednak gdy UE już działała, państwa mogą działać tylko w granicach pozostawionych przez prawodawstwo europejskie (zasada pomocniczości)."
      },
      {
        type: "list",
        heading: "Główne przykłady",
        items: [
          "Polityka środowiskowa i zmiany klimatu",
          "Wspólna polityka rolna",
          "Rynek wewnętrzny",
          "Transport i energia",
          "Ochrona konsumentów",
          "Spójność gospodarcza, społeczna i terytorialna"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Wyłączne kompetencje państw",
    subtitle: "UE koordynuje, ale nie stanowi prawa",
    sections: [
      {
        type: "text",
        heading: "Co to znaczy",
        body: "Są to dziedziny, w których tylko rządy krajowe mogą przyjmować wiążące normy. Unia ogranicza się do roli koordynującej, wspierającej lub uzupełniającej, bez nakładania obowiązków prawnych."
      },
      {
        type: "list",
        heading: "Główne przykłady",
        items: [
          "Edukacja i kształcenie zawodowe",
          "Polityka podatkowa (krajowe podatki i opłaty)",
          "Polityka zagraniczna i obronna",
          "Zdrowie publiczne (organizacja usług)",
          "Kultura i sport"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Kompetencje w skrócie",
    subtitle: "Kto decyduje o czym w Unii Europejskiej",
    banner: "Następnie ćwiczenia 2a · 2b · 2c",
    sections: [
      {
        type: "tricolor",
        heading: "Trzy poziomy odpowiedzialności",
        blocks: [
          { color: "#1a3f80", label: "WYŁĄCZNE UE — Handel · Euro · Cło" },
          { color: "#2b8049", label: "DZIELONE — Środowisko · Rolnictwo · Transport" },
          { color: "#8a2c5b", label: "WYŁĄCZNE PAŃSTW — Podatki · Edukacja · Polityka zagraniczna" }
        ]
      },
      {
        type: "text",
        heading: "Dlaczego to ważne",
        body: "Wiedza o tym, kto ma kompetencje w danej sprawie, pomaga prawidłowo kierować postulaty polityczne i rozumieć, na jakim poziomie — europejskim, krajowym czy lokalnym — można działać."
      }
    ]
  },
  {
    id: 8,
    title: "Źródła prawa: pełny obraz",
    subtitle: "Od traktatu do zalecenia",
    sections: [
      {
        type: "text",
        heading: "Mapa orientacyjna",
        body: "Zanim przejdziemy do poszczególnych aktów, zobaczmy całą mapę prawa europejskiego. Znajomość kategorii pomaga zrozumieć, jakiego narzędzia używamy i jaki skutek wywołuje."
      },
      {
        type: "table",
        heading: "Mapa ogólna",
        head: ["Poziom", "Kategoria", "Typowe akty"],
        rows: [
          ["Pierwotny", "Traktaty", "Traktat o Unii Europejskiej (TUE) · Traktat o funkcjonowaniu UE (TFUE)"],
          ["Wtórny", "Akty wiążące", "Rozporządzenia · Dyrektywy · Decyzje"],
          ["Wtórny", "Akty niewiążące", "Opinie · Zalecenia"],
          ["Przekrojowy", "Akty nieustawodawcze", "Akty delegowane · akty wykonawcze"]
        ]
      },
      {
        type: "text",
        heading: "W kolejnych rozdziałach",
        body: "Przeanalizujemy kolejno akty prawa wtórnego, zaczynając od najbardziej wiążących, kończąc na tych, które kierują, ale nie zobowiązują."
      }
    ]
  },
  {
    id: 9,
    title: "Prawo pierwotne",
    subtitle: "Traktaty: \"konstytucja\" Unii",
    sections: [
      {
        type: "text",
        heading: "Czym są traktaty",
        body: "Prawo pierwotne to fundament prawny Unii. Określa cele, instytucje, procedury decyzyjne i prawa obywateli europejskich. Można je porównać do konstytucji: każda kolejna norma musi przestrzegać jego zasad."
      },
      {
        type: "list",
        heading: "Główne elementy",
        items: [
          "Traktat o Unii Europejskiej (TUE) — Maastricht 1992",
          "Traktat o funkcjonowaniu UE (TFUE) — wcześniej Traktat Rzymski 1957, zreformowany w Lizbonie",
          "Karta Praw Podstawowych UE — wiążąca od 2009 r.",
          "Ogólne zasady prawa wspólne państwom członkowskim"
        ]
      },
      {
        type: "text",
        heading: "W praktyce",
        body: "Traktaty można zmienić tylko za jednomyślną zgodą wszystkich 27 państw członkowskich i muszą być ratyfikowane przez parlamenty krajowe."
      }
    ]
  },
  {
    id: 10,
    title: "Prawo wtórne (pochodne)",
    subtitle: "Akty wykonujące traktaty",
    sections: [
      {
        type: "text",
        heading: "Czym jest prawo pochodne",
        body: "Prawo wtórne wywodzi się z traktatów i wprowadza ich rozwiązania w życie. Dzieli się na kilka kategorii i wywołuje różne skutki dla obywateli, przedsiębiorstw i państw członkowskich."
      },
      {
        type: "table",
        heading: "Główne kategorie",
        head: ["Rodzaj", "Akty"],
        rows: [
          ["Wiążące akty ustawodawcze", "Rozporządzenia · Dyrektywy · Decyzje"],
          ["Akty niewiążące", "Opinie · Zalecenia"],
          ["Akty konwencjonalne", "Umowy międzynarodowe · umowy między państwami członkowskimi"],
          ["Akty nieustawodawcze", "Akty delegowane · akty wykonawcze"]
        ]
      },
      {
        type: "text",
        heading: "Podróż trwa",
        body: "W kolejnych rozdziałach przyjrzymy się pięciu głównym aktom: rozporządzeniom, dyrektywom, decyzjom, opiniom i zaleceniom."
      }
    ]
  },
  {
    id: 11,
    title: "Rozporządzenia",
    subtitle: "Akty wiążące, natychmiast obowiązujące w całej UE",
    meta: [["RODZAJ", "Akt ustawodawczy"], ["SKUTEK", "Bezpośrednio stosowany"]],
    sections: [
      {
        type: "text",
        heading: "Czym są",
        body: "Rozporządzenia to wiążące akty prawne, stosowane we wszystkich krajach UE od chwili wejścia w życie. Nie wymagają krajowych ustaw transponujących: ich tekst staje się prawem bezpośrednio w całej Unii."
      },
      {
        type: "list",
        heading: "Dwa niedawne przykłady, które dotyczą nas bezpośrednio",
        items: [
          "<strong>Rozporządzenie (UE) 2024/1689</strong> — pierwsze europejskie prawo o sztucznej inteligencji (AI Act). Obowiązuje bezpośrednio w całej UE; we Włoszech ustawa 132/2025 wspiera jego wdrażanie. Ustanawia normy oparte na ryzyku i stawia człowieka w centrum.",
          "<strong>Rozporządzenie (UE) 2016/679</strong> — RODO o ochronie danych osobowych. Gwarantuje każdemu kontrolę nad swoimi informacjami i harmonizuje przepisy w całej Europie."
        ]
      },
      {
        type: "list",
        heading: "Gdzie są stosowane (przykłady praktyczne)",
        items: [
          "Zdrowie i diagnostyka",
          "Zarządzanie zasobami ludzkimi",
          "Marketing i profilowanie",
          "Monitoring wideo",
          "Ocena zdolności kredytowej",
          "Administracja publiczna"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Dyrektywy",
    subtitle: "Wspólne cele, swoboda metody",
    meta: [["RODZAJ", "Akt ustawodawczy"], ["SKUTEK", "Wymaga transpozycji w terminie"]],
    sections: [
      {
        type: "text",
        heading: "Czym są",
        body: "Dyrektywy ustalają cele, które wszystkie państwa członkowskie muszą osiągnąć, pozostawiając jednak każdemu swobodę wyboru środków. Każda dyrektywa zawiera termin, w którym kraje muszą ją transponować do swojego prawa krajowego."
      },
      {
        type: "text",
        heading: "Przykład: plastik jednorazowego użytku",
        body: "<strong>Dyrektywa (UE) 2019/904</strong> wymaga od państw członkowskich zmniejszenia wpływu na środowisko produktów takich jak talerze, sztućce i słomki z plastiku. Włochy wdrożyły ją Dekretem Ustawodawczym 196/2021."
      },
      {
        type: "text",
        heading: "Co się dzieje, gdy państwo nie dotrzyma terminu",
        body: "Uruchamiana jest <strong>procedura naruszenia</strong>: Komisja Europejska może pozwać państwo przed Trybunał Sprawiedliwości UE, z możliwymi karami finansowymi."
      }
    ]
  },
  {
    id: 13,
    title: "Decyzje",
    subtitle: "Wiążące, ale tylko dla adresatów",
    meta: [["RODZAJ", "Akt ustawodawczy"], ["SKUTEK", "Bezpośrednio stosowany do adresatów"]],
    sections: [
      {
        type: "text",
        heading: "Czym są",
        body: "Decyzja jest aktem wiążącym i bezpośrednio stosowanym, ale tylko wobec wyraźnie wskazanego adresata: może to być państwo, pojedyncze przedsiębiorstwo lub obywatel."
      },
      {
        type: "list",
        heading: "Dwa rzeczywiste przykłady",
        items: [
          "<strong>Chorwacja, 1 stycznia 2023 r.</strong> — Rada przyjmuje decyzję upoważniającą kraj do przyjęcia euro jako waluty oficjalnej. Dotyczy tylko Chorwacji.",
          "<strong>Google, 2017 r.</strong> — Komisja Europejska przyjmuje decyzję przeciwko firmie za nadużycie pozycji dominującej i nakłada konkretną karę pieniężną."
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Opinie",
    subtitle: "Wyrażone stanowiska, bez zobowiązań",
    meta: [["RODZAJ", "Akt nieustawodawczy"], ["SKUTEK", "Niewiążący"]],
    sections: [
      {
        type: "text",
        heading: "Czym są",
        body: "Opinia to narzędzie, za pomocą którego instytucja europejska wyraża swoją ocenę danego zagadnienia, bez nakładania obowiązków prawnych. Służy ukierunkowaniu debaty i wpływaniu na wybory polityczne."
      },
      {
        type: "list",
        heading: "Dwa przykłady",
        items: [
          "<strong>EKES — Europejski Komitet Ekonomiczno-Społeczny</strong>: opinia w sprawie strategii Komisji dla małych i średnich przedsiębiorstw nowej generacji.",
          "<strong>Komitet Regionów (czerwiec 2017 r.)</strong>: pozytywna opinia w sprawie roli władz lokalnych i regionalnych w przejściu do gospodarki o obiegu zamkniętym."
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Zalecenia",
    subtitle: "Zaproszenia do działania, nie obowiązki",
    meta: [["RODZAJ", "Akt nieustawodawczy"], ["SKUTEK", "Niewiążący"]],
    banner: "Następnie ćwiczenia 3a · 3b",
    sections: [
      {
        type: "text",
        heading: "Czym są",
        body: "Zalecenia to zaproszenia kierowane do państw członkowskich, instytucji lub obywateli, mające ukierunkować zachowania w istotnych kwestiach, bez tworzenia obowiązków prawnych. Są instrumentami soft law: liczą się ze względu na swoją wagę polityczną i moralną."
      },
      {
        type: "list",
        heading: "Dwa przykłady",
        items: [
          "<strong>Kompetencje kluczowe</strong> — UE zaleca państwom promowanie uczenia się języków i umiejętności cyfrowych przez całe życie.",
          "<strong>Zdrowie publiczne (2020)</strong> — zalecenia dotyczące ograniczeń podróży podczas pandemii Covid-19, w celu skoordynowania działań krajowych."
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Od pomysłu do prawa",
    subtitle: "Wspólnie przebyta droga",
    sections: [
      {
        type: "text",
        heading: "Podsumowanie warsztatu",
        body: "Prześledziliśmy podróż politycznego pomysłu aż do stania się wiążącą normą: od 27 narodów decydujących wspólnie, po kompetencje dzielone między UE a państwami, aż po akty, które urzeczywistniają wybory europejskie."
      },
      {
        type: "list",
        heading: "Cztery rzeczy do zapamiętania",
        items: [
          "Źródła prawa UE są uporządkowane hierarchicznie: traktaty na szczycie, prawo pochodne pośrodku",
          "Kompetencje mogą być wyłączne UE, dzielone lub wyłączne państw",
          "Rozporządzenia stosuje się natychmiast; dyrektywy trzeba transponować; decyzje dotyczą adresatów",
          "Opinie i zalecenia nie zobowiązują, ale ukierunkowują wybory polityczne"
        ]
      },
      {
        type: "text",
        heading: "Refleksja końcowa",
        body: "Wiedza o tym, jak Europa decyduje, oznacza lepsze zrozumienie zasad, które żyją obok nas: od etykiety produktu po prawa cyfrowe, od jakości powietrza po ochronę naszych danych."
      }
    ]
  }
];

// ============================================================
// SLIDES — DEUTSCH
// ============================================================
const SLIDES_DE = [
  {
    id: 1,
    title: "Der Entscheidungsprozess in der EU",
    subtitle: "von der Idee zum Recht",
    banner: "Erasmus+ · Workshop Nr. 2",
    sections: [
      {
        type: "text",
        heading: "Worum es in diesem Workshop geht",
        body: "In diesem Workshop entdecken wir, wie die Europäische Union eine politische Idee in eine verbindliche Norm für die 27 Mitgliedstaaten umwandelt. Wir betrachten die Rechtsquellen der EU, die geteilten Zuständigkeiten zwischen Union und Staaten sowie die verschiedenen Arten von Akten, die unser tägliches Leben beeinflussen."
      }
    ]
  },
  {
    id: 2,
    title: "Das Europa der 27",
    subtitle: "Eine Union von Staaten, die gemeinsam entscheiden",
    banner: "Es folgen die Übungen 1a · 1b",
    meta: [["MITGLIEDSTAATEN", "27"], ["BEVÖLKERUNG", "rund 450 Millionen"]],
    sections: [
      {
        type: "text",
        heading: "Die Europäische Union heute",
        body: "Die Europäische Union ist eine politische und wirtschaftliche Organisation, die 27 Mitgliedstaaten um gemeinsame Regeln vereint. Jede in Brüssel, Straßburg oder Luxemburg getroffene Entscheidung entsteht aus einem genauen Prozess unter Beteiligung von Institutionen, nationalen Regierungen und Bürgern."
      },
      {
        type: "list",
        heading: "Was wir lernen werden",
        items: [
          "Woher europäische Regeln kommen",
          "Der Unterschied zwischen EU- und nationalen Zuständigkeiten",
          "Die wichtigsten Rechtsakte: Verordnungen, Richtlinien, Beschlüsse, Stellungnahmen, Empfehlungen",
          "Die unterschiedliche Bindungskraft der einzelnen Akte"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Die Rechtsquellen der Europäischen Union",
    subtitle: "Die fünf Säulen, aus denen die Regeln entstehen",
    sections: [
      {
        type: "text",
        heading: "Was Rechtsquellen sind",
        body: "Rechtsquellen sind die Gesamtheit der Akte, die in der Union Rechtsregeln erzeugen. Sie werden in fünf große Kategorien unterteilt, die nach hierarchischer Bedeutung geordnet sind."
      },
      {
        type: "table",
        heading: "Die fünf Kategorien",
        head: ["#", "Quelle", "Beispiele"],
        rows: [
          ["1", "Primärrecht", "EU-Verträge · Charta der Grundrechte"],
          ["2", "Internationale Abkommen der EU", "Handelsverträge · Assoziationsabkommen"],
          ["3", "Sekundärrecht (abgeleitet)", "Verordnungen · Richtlinien · Beschlüsse · Stellungnahmen · Empfehlungen"],
          ["4", "Allgemeine Rechtsgrundsätze", "Den Mitgliedstaaten gemeinsame Verfassungsgrundsätze"],
          ["5", "Vereinbarungen zwischen Mitgliedstaaten", "Konventionen und Vereinbarungen zwischen Regierungen"]
        ]
      },
      {
        type: "text",
        heading: "Kurz gesagt",
        body: "Das Primärrecht legt die Grundregeln fest, das Sekundärrecht setzt sie um und macht sie operativ."
      }
    ]
  },
  {
    id: 4,
    title: "Ausschließliche Zuständigkeiten der EU",
    subtitle: "Nur die Union darf Gesetze erlassen",
    sections: [
      {
        type: "text",
        heading: "Was es bedeutet",
        body: "Von ausschließlicher Zuständigkeit spricht man, wenn nur die Europäische Union die Befugnis hat, in einem bestimmten Bereich verbindliche Regeln zu erlassen. Mitgliedstaaten dürfen nur tätig werden, wenn die EU sie ermächtigt oder zur Umsetzung europäischer Akte."
      },
      {
        type: "list",
        heading: "Wichtigste Beispiele",
        items: [
          "Gemeinsame Handelspolitik gegenüber Nicht-EU-Ländern",
          "Geldpolitik für die Länder der Eurozone",
          "Zollunion",
          "Erhaltung der biologischen Meeresschätze",
          "Wettbewerbsregeln im Binnenmarkt"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Geteilte Zuständigkeiten",
    subtitle: "EU und Mitgliedstaaten können gemeinsam handeln",
    sections: [
      {
        type: "text",
        heading: "Was es bedeutet",
        body: "Geteilte Zuständigkeiten sind Bereiche, in denen sowohl die Union als auch die Mitgliedstaaten Gesetze erlassen können. Sobald die EU jedoch tätig geworden ist, dürfen die Staaten nur noch im Rahmen handeln, den die europäische Gesetzgebung ihnen lässt (Subsidiaritätsprinzip)."
      },
      {
        type: "list",
        heading: "Wichtigste Beispiele",
        items: [
          "Umweltpolitik und Klimawandel",
          "Gemeinsame Agrarpolitik",
          "Binnenmarkt",
          "Verkehr und Energie",
          "Verbraucherschutz",
          "Wirtschaftlicher, sozialer und territorialer Zusammenhalt"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Ausschließliche staatliche Zuständigkeiten",
    subtitle: "Die EU koordiniert, aber erlässt keine Gesetze",
    sections: [
      {
        type: "text",
        heading: "Was es bedeutet",
        body: "Dies sind Bereiche, in denen nur die nationalen Regierungen verbindliche Regeln erlassen dürfen. Die Union beschränkt sich auf eine koordinierende, unterstützende oder ergänzende Rolle, ohne gesetzliche Verpflichtungen aufzuerlegen."
      },
      {
        type: "list",
        heading: "Wichtigste Beispiele",
        items: [
          "Bildung und berufliche Ausbildung",
          "Steuerpolitik (nationale Steuern und Abgaben)",
          "Außen- und Verteidigungspolitik",
          "Öffentliche Gesundheit (Organisation der Dienste)",
          "Kultur und Sport"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Zuständigkeiten auf einen Blick",
    subtitle: "Wer entscheidet was in der Europäischen Union",
    banner: "Es folgen die Übungen 2a · 2b · 2c",
    sections: [
      {
        type: "tricolor",
        heading: "Drei Verantwortungsebenen",
        blocks: [
          { color: "#1a3f80", label: "AUSSCHLIESSLICH EU — Handel · Euro · Zoll" },
          { color: "#2b8049", label: "GETEILT — Umwelt · Landwirtschaft · Verkehr" },
          { color: "#8a2c5b", label: "AUSSCHLIESSLICH STAATEN — Steuern · Bildung · Außenpolitik" }
        ]
      },
      {
        type: "text",
        heading: "Warum es wichtig ist",
        body: "Zu wissen, wer in einem Bereich zuständig ist, hilft, politische Anliegen richtig zu adressieren und zu verstehen, auf welcher Ebene — europäisch, national oder lokal — gehandelt werden kann."
      }
    ]
  },
  {
    id: 8,
    title: "Rechtsquellen: das Gesamtbild",
    subtitle: "Vom Vertrag bis zur Empfehlung",
    sections: [
      {
        type: "text",
        heading: "Eine Karte zur Orientierung",
        body: "Bevor wir uns die einzelnen Akte ansehen, betrachten wir die ganze Karte des europäischen Rechts. Die Kategorien zu kennen hilft zu verstehen, welches Werkzeug verwendet wird und welche Wirkung es entfaltet."
      },
      {
        type: "table",
        heading: "Allgemeine Übersicht",
        head: ["Ebene", "Kategorie", "Typische Akte"],
        rows: [
          ["Primär", "Verträge", "Vertrag über die Europäische Union (EUV) · Vertrag über die Arbeitsweise der EU (AEUV)"],
          ["Sekundär", "Verbindliche Akte", "Verordnungen · Richtlinien · Beschlüsse"],
          ["Sekundär", "Nicht verbindliche Akte", "Stellungnahmen · Empfehlungen"],
          ["Querschnitt", "Nicht-Gesetzgebungsakte", "Delegierte Rechtsakte · Durchführungsrechtsakte"]
        ]
      },
      {
        type: "text",
        heading: "In den nächsten Kapiteln",
        body: "Wir werden die Akte des Sekundärrechts einen nach dem anderen untersuchen, beginnend mit den verbindlichsten und endend mit denen, die orientieren, ohne zu verpflichten."
      }
    ]
  },
  {
    id: 9,
    title: "Das Primärrecht",
    subtitle: "Die Verträge: die \"Verfassung\" der Union",
    sections: [
      {
        type: "text",
        heading: "Was die Verträge sind",
        body: "Das Primärrecht ist das rechtliche Fundament der Union. Es legt Ziele, Institutionen, Entscheidungsverfahren und Rechte der europäischen Bürger fest. Es ist mit einer Verfassung vergleichbar: Jede spätere Norm muss seine Grundsätze achten."
      },
      {
        type: "list",
        heading: "Wichtigste Bestandteile",
        items: [
          "Vertrag über die Europäische Union (EUV) — Maastricht 1992",
          "Vertrag über die Arbeitsweise der EU (AEUV) — ehemals Vertrag von Rom 1957, in Lissabon reformiert",
          "Charta der Grundrechte der EU — verbindlich seit 2009",
          "Allgemeine Rechtsgrundsätze, die den Mitgliedstaaten gemeinsam sind"
        ]
      },
      {
        type: "text",
        heading: "In der Praxis",
        body: "Die Verträge können nur mit einstimmiger Zustimmung aller 27 Mitgliedstaaten geändert werden und müssen von den nationalen Parlamenten ratifiziert werden."
      }
    ]
  },
  {
    id: 10,
    title: "Das Sekundärrecht (abgeleitetes Recht)",
    subtitle: "Die Akte, die die Verträge umsetzen",
    sections: [
      {
        type: "text",
        heading: "Was abgeleitetes Recht ist",
        body: "Das Sekundärrecht entsteht aus den Verträgen und setzt deren Entscheidungen in die Praxis um. Es gliedert sich in mehrere Kategorien und entfaltet unterschiedliche Wirkungen auf Bürger, Unternehmen und Mitgliedstaaten."
      },
      {
        type: "table",
        heading: "Hauptkategorien",
        head: ["Art", "Akte"],
        rows: [
          ["Verbindliche Gesetzgebungsakte", "Verordnungen · Richtlinien · Beschlüsse"],
          ["Nicht verbindliche Akte", "Stellungnahmen · Empfehlungen"],
          ["Konventionelle Akte", "Internationale Abkommen · Vereinbarungen zwischen Mitgliedstaaten"],
          ["Nicht-Gesetzgebungsakte", "Delegierte Rechtsakte · Durchführungsrechtsakte"]
        ]
      },
      {
        type: "text",
        heading: "Die Reise geht weiter",
        body: "In den nächsten Kapiteln betrachten wir die fünf Hauptakte einzeln: Verordnungen, Richtlinien, Beschlüsse, Stellungnahmen und Empfehlungen."
      }
    ]
  },
  {
    id: 11,
    title: "Verordnungen",
    subtitle: "Verbindliche Akte, sofort in der ganzen EU gültig",
    meta: [["ART", "Gesetzgebungsakt"], ["WIRKUNG", "Unmittelbar anwendbar"]],
    sections: [
      {
        type: "text",
        heading: "Was sie sind",
        body: "Verordnungen sind verbindliche Rechtsakte, die in allen EU-Ländern ab Inkrafttreten anwendbar sind. Sie erfordern keine nationalen Umsetzungsgesetze: Ihr Text wird in der gesamten Union direkt zu Recht."
      },
      {
        type: "list",
        heading: "Zwei aktuelle Beispiele, die uns betreffen",
        items: [
          "<strong>Verordnung (EU) 2024/1689</strong> — das erste europäische Gesetz über künstliche Intelligenz (AI Act). Sie gilt unmittelbar in der gesamten EU; in Italien begleitet das Gesetz 132/2025 ihre Umsetzung. Sie legt risikobasierte Regeln fest und stellt den Menschen in den Mittelpunkt.",
          "<strong>Verordnung (EU) 2016/679</strong> — die DSGVO zum Schutz personenbezogener Daten. Sie garantiert jedem die Kontrolle über seine Daten und harmonisiert die Regeln in ganz Europa."
        ]
      },
      {
        type: "list",
        heading: "Anwendungsbereiche (praktische Beispiele)",
        items: [
          "Gesundheitswesen und Diagnostik",
          "Personalwesen",
          "Marketing und Profilerstellung",
          "Videoüberwachung",
          "Bonitätsprüfung",
          "Öffentliche Verwaltung"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Richtlinien",
    subtitle: "Gemeinsame Ziele, freie Wahl der Mittel",
    meta: [["ART", "Gesetzgebungsakt"], ["WIRKUNG", "Innerhalb einer Frist umzusetzen"]],
    sections: [
      {
        type: "text",
        heading: "Was sie sind",
        body: "Richtlinien legen Ziele fest, die alle Mitgliedstaaten erreichen müssen, lassen jedoch jedem die Wahl der Mittel. Jede Richtlinie enthält eine Frist, bis zu der die Länder sie in nationales Recht umsetzen müssen."
      },
      {
        type: "text",
        heading: "Beispiel: Einwegkunststoff",
        body: "Die <strong>Richtlinie (EU) 2019/904</strong> verpflichtet die Mitgliedstaaten, die Umweltauswirkungen von Produkten wie Tellern, Besteck und Strohhalmen aus Kunststoff zu verringern. Italien hat sie mit dem Gesetzesdekret 196/2021 umgesetzt."
      },
      {
        type: "text",
        heading: "Was passiert, wenn ein Staat die Frist nicht einhält",
        body: "Es wird ein <strong>Vertragsverletzungsverfahren</strong> eingeleitet: Die Europäische Kommission kann den Staat vor den Gerichtshof der EU bringen, mit möglichen finanziellen Sanktionen."
      }
    ]
  },
  {
    id: 13,
    title: "Beschlüsse",
    subtitle: "Verbindlich, aber nur für die Adressaten",
    meta: [["ART", "Gesetzgebungsakt"], ["WIRKUNG", "Unmittelbar auf die Adressaten anwendbar"]],
    sections: [
      {
        type: "text",
        heading: "Was sie sind",
        body: "Ein Beschluss ist ein verbindlicher und unmittelbar anwendbarer Akt, jedoch nur gegenüber den ausdrücklich genannten Adressaten: Es kann ein Staat, ein einzelnes Unternehmen oder ein Bürger sein."
      },
      {
        type: "list",
        heading: "Zwei reale Beispiele",
        items: [
          "<strong>Kroatien, 1. Januar 2023</strong> — der Rat erlässt den Beschluss, der dem Land die Einführung des Euro als offizielle Währung erlaubt. Betrifft nur Kroatien.",
          "<strong>Google, 2017</strong> — die Europäische Kommission erlässt einen Beschluss gegen das Unternehmen wegen Missbrauchs einer marktbeherrschenden Stellung und verhängt eine konkrete Geldbuße."
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Stellungnahmen",
    subtitle: "Geäußerte Positionen, ohne Verpflichtungen",
    meta: [["ART", "Nicht-Gesetzgebungsakt"], ["WIRKUNG", "Nicht verbindlich"]],
    sections: [
      {
        type: "text",
        heading: "Was sie sind",
        body: "Eine Stellungnahme ist ein Instrument, mit dem eine europäische Institution ihre Bewertung zu einer Frage äußert, ohne rechtliche Verpflichtungen aufzuerlegen. Sie dient dazu, die Debatte zu lenken und politische Entscheidungen zu beeinflussen."
      },
      {
        type: "list",
        heading: "Zwei Beispiele",
        items: [
          "<strong>EWSA — Europäischer Wirtschafts- und Sozialausschuss</strong>: Stellungnahme zur Strategie der Kommission für kleine und mittlere Unternehmen der nächsten Generation.",
          "<strong>Ausschuss der Regionen (Juni 2017)</strong>: befürwortende Stellungnahme zur Rolle lokaler und regionaler Behörden beim Übergang zur Kreislaufwirtschaft."
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Empfehlungen",
    subtitle: "Aufforderungen zum Handeln, keine Verpflichtungen",
    meta: [["ART", "Nicht-Gesetzgebungsakt"], ["WIRKUNG", "Nicht verbindlich"]],
    banner: "Es folgen die Übungen 3a · 3b",
    sections: [
      {
        type: "text",
        heading: "Was sie sind",
        body: "Empfehlungen sind an Mitgliedstaaten, Institutionen oder Bürger gerichtete Aufforderungen, das Verhalten in wichtigen Themen zu lenken, ohne rechtliche Verpflichtungen zu schaffen. Sie sind Soft-Law-Instrumente: Sie zählen wegen ihres politischen und moralischen Gewichts."
      },
      {
        type: "list",
        heading: "Zwei Beispiele",
        items: [
          "<strong>Schlüsselkompetenzen</strong> — die EU empfiehlt den Staaten, lebenslanges Lernen von Sprachen und digitalen Kompetenzen zu fördern.",
          "<strong>Öffentliche Gesundheit (2020)</strong> — Empfehlungen zu Reisebeschränkungen während der Covid-19-Pandemie, um nationale Maßnahmen zu koordinieren."
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Von der Idee zum Recht",
    subtitle: "Der gemeinsam beschrittene Weg",
    sections: [
      {
        type: "text",
        heading: "Zusammenfassung des Workshops",
        body: "Wir haben den Weg einer politischen Idee verfolgt, bis sie zur verbindlichen Norm wird: von den 27 Nationen, die gemeinsam entscheiden, über die zwischen EU und Staaten geteilten Zuständigkeiten, bis hin zu den Akten, die europäische Entscheidungen Wirklichkeit werden lassen."
      },
      {
        type: "list",
        heading: "Vier Erkenntnisse zum Mitnehmen",
        items: [
          "Die EU-Rechtsquellen sind hierarchisch geordnet: Verträge an der Spitze, abgeleitetes Recht in der Mitte",
          "Zuständigkeiten können ausschließlich EU, geteilt oder ausschließlich staatlich sein",
          "Verordnungen gelten sofort; Richtlinien müssen umgesetzt werden; Beschlüsse betreffen ihre Adressaten",
          "Stellungnahmen und Empfehlungen verpflichten nicht, sondern lenken politische Entscheidungen"
        ]
      },
      {
        type: "text",
        heading: "Eine abschließende Reflexion",
        body: "Zu wissen, wie Europa entscheidet, bedeutet, die Regeln besser zu verstehen, die neben uns leben: vom Produktetikett bis zu digitalen Rechten, von der Luftqualität bis zum Schutz unserer Daten."
      }
    ]
  }
];

// ============================================================
// SLIDES — LATVIEŠU
// ============================================================
const SLIDES_LV = [
  {
    id: 1,
    title: "ES lēmumu pieņemšanas process",
    subtitle: "no idejas līdz tiesībām",
    banner: "Erasmus+ · Seminārs Nr. 2",
    sections: [
      {
        type: "text",
        heading: "Par ko ir šis seminārs",
        body: "Šajā seminārā mēs uzzināsim, kā Eiropas Savienība pārvērš politisku ideju saistošā normā 27 dalībvalstīm. Mēs aplūkosim ES tiesību avotus, ES un dalībvalstu kopīgās kompetences un dažādus aktu veidus, kas ietekmē ikdienas dzīvi."
      }
    ]
  },
  {
    id: 2,
    title: "27 valstu Eiropa",
    subtitle: "Valstu savienība, kas lemj kopā",
    banner: "Sekos vingrinājumi 1a · 1b",
    meta: [["DALĪBVALSTIS", "27"], ["IEDZĪVOTĀJI", "aptuveni 450 miljoni"]],
    sections: [
      {
        type: "text",
        heading: "Eiropas Savienība šodien",
        body: "Eiropas Savienība ir politiska un ekonomiska organizācija, kas apvieno 27 dalībvalstis ap kopīgiem noteikumiem. Katrs lēmums, kas pieņemts Briselē, Strasbūrā vai Luksemburgā, izriet no precīza procesa, kurā piedalās institūcijas, valstu valdības un pilsoņi."
      },
      {
        type: "list",
        heading: "Ko mēs iemācīsimies",
        items: [
          "No kurienes nāk Eiropas noteikumi",
          "Atšķirība starp ES un valstu kompetencēm",
          "Galvenie tiesību akti: regulas, direktīvas, lēmumi, atzinumi, ieteikumi",
          "Katra akta atšķirīgais saistošais spēks"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Eiropas Savienības tiesību avoti",
    subtitle: "Pieci pīlāri, no kuriem izriet noteikumi",
    sections: [
      {
        type: "text",
        heading: "Kas ir tiesību avoti",
        body: "Tiesību avoti ir visi akti, kas Savienībā rada juridiskas normas. Tie iedalās piecās lielās kategorijās, kas sakārtotas pēc hierarhiskas nozīmes."
      },
      {
        type: "table",
        heading: "Piecas kategorijas",
        head: ["#", "Avots", "Piemēri"],
        rows: [
          ["1", "Primārās tiesības", "ES līgumi · Pamattiesību harta"],
          ["2", "ES starptautiskie nolīgumi", "Tirdzniecības līgumi · asociācijas nolīgumi"],
          ["3", "Sekundārās (atvasinātās) tiesības", "Regulas · direktīvas · lēmumi · atzinumi · ieteikumi"],
          ["4", "Vispārējie tiesību principi", "Dalībvalstīm kopīgie konstitucionālie principi"],
          ["5", "Vienošanās starp dalībvalstīm", "Konvencijas un nolīgumi starp valdībām"]
        ]
      },
      {
        type: "text",
        heading: "Īsumā",
        body: "Primārās tiesības nosaka pamatnoteikumus, sekundārās tiesības tos piemēro un padara darbojošos."
      }
    ]
  },
  {
    id: 4,
    title: "ES ekskluzīvās kompetences",
    subtitle: "Tikai Savienība var pieņemt likumus",
    sections: [
      {
        type: "text",
        heading: "Ko tas nozīmē",
        body: "Par ekskluzīvu kompetenci runā tad, kad konkrētā jomā tikai Eiropas Savienībai ir tiesības pieņemt saistošas normas. Dalībvalstis var rīkoties tikai tad, ja ES tās pilnvaro vai lai īstenotu Eiropas aktus."
      },
      {
        type: "list",
        heading: "Galvenie piemēri",
        items: [
          "Kopējā tirdzniecības politika ar valstīm ārpus ES",
          "Monetārā politika eiro zonas valstīm",
          "Muitas savienība",
          "Jūras bioloģisko resursu saglabāšana",
          "Konkurences noteikumi iekšējā tirgū"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Dalītās kompetences",
    subtitle: "ES un dalībvalstis var rīkoties kopā",
    sections: [
      {
        type: "text",
        heading: "Ko tas nozīmē",
        body: "Dalītās kompetences ir jomas, kurās gan Savienība, gan dalībvalstis var pieņemt likumus. Tomēr, ja ES jau ir rīkojusies, valstis var rīkoties tikai Eiropas tiesību aktu atstātajās robežās (subsidiaritātes princips)."
      },
      {
        type: "list",
        heading: "Galvenie piemēri",
        items: [
          "Vides politika un klimata pārmaiņas",
          "Kopējā lauksaimniecības politika",
          "Iekšējais tirgus",
          "Transports un enerģētika",
          "Patērētāju aizsardzība",
          "Ekonomiskā, sociālā un teritoriālā kohēzija"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Dalībvalstu ekskluzīvās kompetences",
    subtitle: "ES koordinē, bet nepieņem likumus",
    sections: [
      {
        type: "text",
        heading: "Ko tas nozīmē",
        body: "Šīs ir jomas, kurās tikai valstu valdības var pieņemt saistošas normas. Savienība aprobežojas ar koordinējošu, atbalsta vai papildinošu lomu, neuzliekot likumdošanas pienākumus."
      },
      {
        type: "list",
        heading: "Galvenie piemēri",
        items: [
          "Izglītība un profesionālā apmācība",
          "Nodokļu politika (valsts nodokļi un nodevas)",
          "Ārlietu un aizsardzības politika",
          "Sabiedrības veselība (pakalpojumu organizācija)",
          "Kultūra un sports"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Kompetences pārskatā",
    subtitle: "Kas un par ko lemj Eiropas Savienībā",
    banner: "Sekos vingrinājumi 2a · 2b · 2c",
    sections: [
      {
        type: "tricolor",
        heading: "Trīs atbildības līmeņi",
        blocks: [
          { color: "#1a3f80", label: "EKSKLUZĪVAS ES — Tirdzniecība · Eiro · Muita" },
          { color: "#2b8049", label: "DALĪTAS — Vide · Lauksaimniecība · Transports" },
          { color: "#8a2c5b", label: "EKSKLUZĪVAS VALSTU — Nodokļi · Izglītība · Ārlietas" }
        ]
      },
      {
        type: "text",
        heading: "Kāpēc tas ir svarīgi",
        body: "Zinot, kam ir kompetence kādā jautājumā, var pareizi adresēt politiskās prasības un saprast, kurā līmenī — Eiropas, valsts vai vietējā — ir iespējams rīkoties."
      }
    ]
  },
  {
    id: 8,
    title: "Tiesību avoti: kopējais skats",
    subtitle: "No līguma līdz ieteikumam",
    sections: [
      {
        type: "text",
        heading: "Karte orientācijai",
        body: "Pirms apskatām atsevišķus aktus, paskatīsimies visu Eiropas tiesību karti. Kategoriju pārzināšana palīdz saprast, kurš instruments tiek izmantots un kādu efektu tas rada."
      },
      {
        type: "table",
        heading: "Vispārīgā karte",
        head: ["Līmenis", "Kategorija", "Tipiskie akti"],
        rows: [
          ["Primārais", "Līgumi", "Līgums par Eiropas Savienību (LES) · Līgums par ES darbību (LESD)"],
          ["Sekundārais", "Saistoši akti", "Regulas · Direktīvas · Lēmumi"],
          ["Sekundārais", "Nesaistoši akti", "Atzinumi · Ieteikumi"],
          ["Šķērslīmeņa", "Nelikumdošanas akti", "Deleģētie akti · īstenošanas akti"]
        ]
      },
      {
        type: "text",
        heading: "Nākamajās nodaļās",
        body: "Mēs aplūkosim sekundāro tiesību aktus pa vienam, sākot no saistošākajiem un beidzot ar tiem, kas virza, neuzliekot pienākumus."
      }
    ]
  },
  {
    id: 9,
    title: "Primārās tiesības",
    subtitle: "Līgumi: Savienības \"konstitūcija\"",
    sections: [
      {
        type: "text",
        heading: "Kas ir Līgumi",
        body: "Primārās tiesības ir Savienības juridiskais pamats. Tās nosaka mērķus, institūcijas, lēmumu pieņemšanas procedūras un Eiropas pilsoņu tiesības. Tās ir salīdzināmas ar konstitūciju: katrai vēlākai normai ir jāievēro tās principi."
      },
      {
        type: "list",
        heading: "Galvenās sastāvdaļas",
        items: [
          "Līgums par Eiropas Savienību (LES) — Māstrihta 1992",
          "Līgums par ES darbību (LESD) — agrāk Romas līgums 1957, reformēts Lisabonā",
          "ES Pamattiesību harta — saistoša kopš 2009. gada",
          "Vispārējie tiesību principi, kas kopīgi dalībvalstīm"
        ]
      },
      {
        type: "text",
        heading: "Praksē",
        body: "Līgumus var grozīt tikai ar visu 27 dalībvalstu vienprātīgu piekrišanu, un tos jāratificē valstu parlamentiem."
      }
    ]
  },
  {
    id: 10,
    title: "Sekundārās tiesības (atvasinātās)",
    subtitle: "Akti, kas īsteno līgumus",
    sections: [
      {
        type: "text",
        heading: "Kas ir atvasinātās tiesības",
        body: "Sekundārās tiesības rodas no Līgumiem un to izvēles realizē praksē. Tās iedalās vairākās kategorijās un rada atšķirīgu ietekmi uz pilsoņiem, uzņēmumiem un dalībvalstīm."
      },
      {
        type: "table",
        heading: "Galvenās kategorijas",
        head: ["Veids", "Akti"],
        rows: [
          ["Saistoši likumdošanas akti", "Regulas · Direktīvas · Lēmumi"],
          ["Nesaistoši akti", "Atzinumi · Ieteikumi"],
          ["Konvencionāli akti", "Starptautiskie nolīgumi · nolīgumi starp dalībvalstīm"],
          ["Nelikumdošanas akti", "Deleģētie akti · īstenošanas akti"]
        ]
      },
      {
        type: "text",
        heading: "Ceļojums turpinās",
        body: "Nākamajās nodaļās aplūkosim piecus galvenos aktus pa vienam: regulas, direktīvas, lēmumus, atzinumus un ieteikumus."
      }
    ]
  },
  {
    id: 11,
    title: "Regulas",
    subtitle: "Saistoši akti, nekavējoties spēkā visā ES",
    meta: [["VEIDS", "Likumdošanas akts"], ["IETEKME", "Tieši piemērojama"]],
    sections: [
      {
        type: "text",
        heading: "Kas tās ir",
        body: "Regulas ir saistoši tiesību akti, piemērojami visās ES valstīs no spēkā stāšanās brīža. Tās neprasa valsts transponēšanas likumus: to teksts kļūst par likumu tieši visā Savienībā."
      },
      {
        type: "list",
        heading: "Divi nesen piemēri, kas mūs tieši skar",
        items: [
          "<strong>Regula (ES) 2024/1689</strong> — pirmais Eiropas mākslīgā intelekta likums (AI Act). Tā tieši piemērojama visā ES; Itālijā likums 132/2025 atbalsta tās ieviešanu. Tā nosaka uz risku balstītus noteikumus un cilvēku liek centrā.",
          "<strong>Regula (ES) 2016/679</strong> — VDAR par personas datu aizsardzību. Tā garantē katram kontroli pār saviem datiem un saskaņo noteikumus visā Eiropā."
        ]
      },
      {
        type: "list",
        heading: "Kur tās piemēro (praktiski piemēri)",
        items: [
          "Veselība un diagnostika",
          "Cilvēkresursu vadība",
          "Mārketings un profilēšana",
          "Videonovērošana",
          "Kredītspējas novērtēšana",
          "Valsts pārvalde"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Direktīvas",
    subtitle: "Kopīgi mērķi, brīvība metodes izvēlē",
    meta: [["VEIDS", "Likumdošanas akts"], ["IETEKME", "Jātransponē noteiktā termiņā"]],
    sections: [
      {
        type: "text",
        heading: "Kas tās ir",
        body: "Direktīvas nosaka mērķus, kas visām dalībvalstīm jāsasniedz, atstājot tomēr katrai brīvību izvēlēties līdzekļus. Katra direktīva satur termiņu, līdz kuram valstīm tā jātransponē savās valsts tiesībās."
      },
      {
        type: "text",
        heading: "Piemērs: vienreizlietojama plastmasa",
        body: "<strong>Direktīva (ES) 2019/904</strong> uzliek dalībvalstīm pienākumu samazināt produktu, piemēram, plastmasas šķīvju, galda piederumu un salmiņu, ietekmi uz vidi. Itālija to transponēja ar Likumdošanas dekrētu 196/2021."
      },
      {
        type: "text",
        heading: "Kas notiek, ja valsts neievēro termiņu",
        body: "Tiek uzsākta <strong>pārkāpuma procedūra</strong>: Eiropas Komisija var iesūdzēt valsti ES Tiesā, ar iespējamiem finansiāliem sodiem."
      }
    ]
  },
  {
    id: 13,
    title: "Lēmumi",
    subtitle: "Saistoši, bet tikai adresātiem",
    meta: [["VEIDS", "Likumdošanas akts"], ["IETEKME", "Tieši piemērojami adresātiem"]],
    sections: [
      {
        type: "text",
        heading: "Kas tie ir",
        body: "Lēmums ir saistošs un tieši piemērojams akts, taču tikai tiem, kas tieši norādīti kā adresāti: tā var būt valsts, atsevišķs uzņēmums vai pilsonis."
      },
      {
        type: "list",
        heading: "Divi reāli piemēri",
        items: [
          "<strong>Horvātija, 2023. gada 1. janvāris</strong> — Padome pieņem lēmumu, kas pilnvaro valsti pieņemt eiro kā oficiālo valūtu. Tas attiecas tikai uz Horvātiju.",
          "<strong>Google, 2017</strong> — Eiropas Komisija pieņem lēmumu pret uzņēmumu par dominējošā stāvokļa ļaunprātīgu izmantošanu un uzliek konkrētu naudas sodu."
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Atzinumi",
    subtitle: "Pausta nostāja bez pienākumiem",
    meta: [["VEIDS", "Nelikumdošanas akts"], ["IETEKME", "Nesaistošs"]],
    sections: [
      {
        type: "text",
        heading: "Kas tie ir",
        body: "Atzinums ir instruments, ar kuru Eiropas institūcija pauž savu vērtējumu par jautājumu, neuzliekot juridiskas saistības. Tas kalpo, lai virzītu debates un ietekmētu politiskās izvēles."
      },
      {
        type: "list",
        heading: "Divi piemēri",
        items: [
          "<strong>EESK — Eiropas Ekonomikas un sociālo lietu komiteja</strong>: atzinums par Komisijas stratēģiju jaunās paaudzes maziem un vidējiem uzņēmumiem.",
          "<strong>Reģionu komiteja (2017. gada jūnijs)</strong>: labvēlīgs atzinums par vietējo un reģionālo iestāžu lomu pārejā uz aprites ekonomiku."
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Ieteikumi",
    subtitle: "Aicinājumi rīkoties, nevis pienākumi",
    meta: [["VEIDS", "Nelikumdošanas akts"], ["IETEKME", "Nesaistošs"]],
    banner: "Sekos vingrinājumi 3a · 3b",
    sections: [
      {
        type: "text",
        heading: "Kas tie ir",
        body: "Ieteikumi ir aicinājumi, kas adresēti dalībvalstīm, institūcijām vai pilsoņiem, lai virzītu uzvedību svarīgos jautājumos, neradot juridiskus pienākumus. Tie ir mīkstā likuma instrumenti: tie skaitās politiskā un morālā svara dēļ."
      },
      {
        type: "list",
        heading: "Divi piemēri",
        items: [
          "<strong>Pamatkompetences</strong> — ES iesaka valstīm veicināt mūžizglītību valodās un digitālās prasmes.",
          "<strong>Sabiedrības veselība (2020)</strong> — ieteikumi par ceļošanas ierobežojumiem Covid-19 pandēmijas laikā, lai koordinētu valstu atbildes."
        ]
      }
    ]
  },
  {
    id: 16,
    title: "No idejas līdz tiesībām",
    subtitle: "Mūsu kopā veiktais ceļš",
    sections: [
      {
        type: "text",
        heading: "Semināra kopsavilkums",
        body: "Mēs sekojām politiskas idejas ceļam, līdz tā kļuva par saistošu normu: no 27 nācijām, kas lemj kopā, līdz ES un valstu dalītajām kompetencēm un aktiem, kas Eiropas izvēles padara reālas."
      },
      {
        type: "list",
        heading: "Četras atziņas līdzi paņemšanai",
        items: [
          "ES tiesību avoti ir hierarhiski sakārtoti: Līgumi virsotnē, atvasinātās tiesības vidū",
          "Kompetences var būt ekskluzīvas ES, dalītas vai ekskluzīvas valstīm",
          "Regulas piemēro nekavējoties; direktīvas jātransponē; lēmumi skar adresātus",
          "Atzinumi un ieteikumi neuzliek pienākumus, bet virza politiskās izvēles"
        ]
      },
      {
        type: "text",
        heading: "Noslēguma pārdomas",
        body: "Zināt, kā Eiropa lemj, nozīmē labāk saprast noteikumus, kas dzīvo mums blakus: no produkta etiķetes līdz digitālajām tiesībām, no gaisa kvalitātes līdz mūsu datu aizsardzībai."
      }
    ]
  }
];

// ============================================================
// Applica immagini e didascalie a tutte le lingue
// ============================================================
[ ['it', SLIDES_IT], ['en', SLIDES_EN], ['pl', SLIDES_PL], ['de', SLIDES_DE], ['lv', SLIDES_LV] ]
  .forEach(function (entry) {
    var lang = entry[0], slides = entry[1];
    slides.forEach(function (slide) {
      var srcs = SLIDE_IMG_SRCS[slide.id];
      if (!srcs) return;
      var caps = (SLIDE_CAPTIONS[lang] && SLIDE_CAPTIONS[lang][slide.id]) || [];
      slide.images = srcs.map(function (src, i) {
        return { src: src, caption: caps[i] || '' };
      });
    });
  });

// ============================================================
// Esponi i dati
// ============================================================
window.SLIDES_DATA = {
  it: SLIDES_IT,
  en: SLIDES_EN,
  pl: SLIDES_PL,
  de: SLIDES_DE,
  lv: SLIDES_LV
};

window.SLIDES = window.SLIDES_DATA[localStorage.getItem('erasmus_lang') || 'it'] || SLIDES_IT;
