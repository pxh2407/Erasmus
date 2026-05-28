// ============================================================
// data.js — Contenuti slide multilingue
// Progetto LUTE · Unione Europea
// Lingue: it · en · pl · de · lv
// ============================================================

(function () {
  'use strict';

  // ============================================================
  // Percorsi immagini — lingua-indipendenti
  // ============================================================
  var SLIDE_IMG_SRCS = {
    1:  ['img/eu-map-clean.png'],
    2:  ['img/ecsc-founders-1951.png', 'img/eu27-post-brexit.png'],
    3:  ['img/euro-coins-banknotes.jpg'],
    5:  ['img/eu-map-iso.png'],
    6:  ['img/eu-values.jpg'],
    8:  ['img/image15.jpeg', 'img/ep-hemicycle-brussels.jpg', 'img/image13.jpeg'],
    9:  ['img/image12.jpeg', 'img/image11.jpeg'],
    10: ['img/image16.jpeg', 'img/image17.png'],
    11: ['img/image18.jpeg', 'img/berlaymont-commission.jpg'],
    12: ['img/image19.jpeg', 'img/koen-lenaerts.jpg'],
    13: ['img/image21.jpeg', 'img/image22.jpeg'],
    14: ['img/image23.jpeg', 'img/image25.jpeg'],
    16: ['img/eu-flags-parliament.jpg']
  };

  // ============================================================
  // Didascalie tradotte per lingua  (stesso ordine di SLIDE_IMG_SRCS)
  // ============================================================
  var SLIDE_CAPTIONS = {
    it: {
      1:  ['Mappa geografica dei 27 Stati membri dell\'Unione Europea'],
      2:  ['I 6 paesi fondatori della CECA (1951): Francia, Germania, Italia, Belgio, Paesi Bassi, Lussemburgo', 'I 27 Stati membri dell\'UE dopo la Brexit (2020) — il Regno Unito (in grigio) ha lasciato l\'Unione'],
      3:  ['Banconote e monete in euro — la moneta unica adottata da 20 dei 27 Stati membri'],
      5:  ['Distribuzione geografica dei 27 Stati membri dell\'UE (codici ISO a 2 lettere)'],
      6:  ['Bandiere dell\'Unione Europea davanti al Berlaymont, sede della Commissione Europea, Bruxelles'],
      8:  ['L\'emiciclo del Parlamento Europeo a Strasburgo (sede ufficiale)', 'L\'emiciclo di Bruxelles, dove si tengono le sessioni plenarie aggiuntive e le riunioni di commissione', 'Roberta Metsola (Malta), Presidente del Parlamento Europeo'],
      9:  ['Sala riunioni del Consiglio Europeo, edificio Europa, Bruxelles', 'António Costa (Portogallo), Presidente del Consiglio Europeo'],
      10: ['Sala plenaria del Consiglio dell\'Unione Europea', 'Il sistema TRIO: presidenze a rotazione semestrale tra i 27 Stati'],
      11: ['Ursula von der Leyen (Germania), Presidente della Commissione Europea', 'Il Berlaymont, sede della Commissione Europea, Bruxelles'],
      12: ['Sede della Corte di Giustizia dell\'UE (CURIA), Lussemburgo', 'Koen Lenaerts (Belgio), Presidente della Corte di Giustizia dell\'UE'],
      13: ['Il simbolo dell\'euro davanti alla BCE, Francoforte', 'Christine Lagarde (Francia), Presidente della BCE'],
      14: ['Sede della Corte dei Conti Europea, Lussemburgo', 'Tony Murphy (Irlanda), Presidente della Corte dei Conti'],
      16: ['Bandiere dei 27 Stati membri davanti al Parlamento Europeo, Bruxelles']
    },
    en: {
      1:  ['Geographic map of the 27 EU Member States'],
      2:  ['The 6 founding members of the ECSC (1951): France, Germany, Italy, Belgium, Netherlands, Luxembourg', 'The 27 EU Member States after Brexit (2020) — the United Kingdom (in grey) has left the Union'],
      3:  ['Euro coins and banknotes — the single currency adopted by 20 of the 27 Member States'],
      5:  ['Geographic distribution of the 27 EU Member States (2-letter ISO codes)'],
      6:  ['EU flags in front of the Berlaymont, seat of the European Commission, Brussels'],
      8:  ['The European Parliament hemicycle in Strasbourg (official seat)', 'The Brussels hemicycle, where additional plenary sessions and committee meetings are held', 'Roberta Metsola (Malta), President of the European Parliament'],
      9:  ['European Council meeting room, Europa building, Brussels', 'António Costa (Portugal), President of the European Council'],
      10: ['Council of the EU plenary meeting room', 'The TRIO system: six-monthly rotating presidencies among 27 States'],
      11: ['Ursula von der Leyen (Germany), President of the European Commission', 'The Berlaymont building, seat of the European Commission, Brussels'],
      12: ['Seat of the Court of Justice of the EU (CURIA), Luxembourg', 'Koen Lenaerts (Belgium), President of the Court of Justice of the EU'],
      13: ['Euro symbol in front of the ECB, Frankfurt', 'Christine Lagarde (France), President of the ECB'],
      14: ['Seat of the European Court of Auditors, Luxembourg', 'Tony Murphy (Ireland), President of the Court of Auditors'],
      16: ['Flags of the 27 Member States in front of the European Parliament, Brussels']
    },
    pl: {
      1:  ['Mapa geograficzna 27 pa\u0144stw cz\u0142onkowskich UE'],
      2:  ['6 pa\u0144stw za\u0142o\u017cycielskich EWWiS (1951): Francja, Niemcy, W\u0142ochy, Belgia, Holandia, Luksemburg', '27 pa\u0144stw cz\u0142onkowskich UE po Brexicie (2020) \u2014 Wielka Brytania (na szaro) opu\u015bci\u0142a Uni\u0119'],
      3:  ['Monety i banknoty euro \u2014 wsp\u00f3lna waluta przyj\u0119ta przez 20 z 27 pa\u0144stw cz\u0142onkowskich'],
      5:  ['Rozmieszczenie geograficzne 27 pa\u0144stw cz\u0142onkowskich UE (dwuliterowe kody ISO)'],
      6:  ['Flagi UE przed budynkiem Berlaymont, siedzib\u0105 Komisji Europejskiej, Bruksela'],
      8:  ['Hemicykl Parlamentu Europejskiego w Strasburgu (siedziba oficjalna)', 'Hemicykl w Brukseli, gdzie odbywaj\u0105 si\u0119 dodatkowe sesje plenarne i posiedzenia komisji', 'Roberta Metsola (Malta), Przewodnicz\u0105ca Parlamentu Europejskiego'],
      9:  ['Sala posiedze\u0144 Rady Europejskiej, budynek Europa, Bruksela', 'António Costa (Portugalia), Przewodnicz\u0105cy Rady Europejskiej'],
      10: ['Sala plenarna Rady Unii Europejskiej', 'System TRIO: p\u00f3\u0142roczne rotacyjne przewodnictwa w\u015br\u00f3d 27 pa\u0144stw'],
      11: ['Ursula von der Leyen (Niemcy), Przewodnicz\u0105ca Komisji Europejskiej', 'Budynek Berlaymont, siedziba Komisji Europejskiej, Bruksela'],
      12: ['Siedziba Trybuna\u0142u Sprawiedliwo\u015bci UE (CURIA), Luksemburg', 'Koen Lenaerts (Belgia), Prezes Trybuna\u0142u Sprawiedliwo\u015bci UE'],
      13: ['Symbol euro przed siedzib\u0105 EBC we Frankfurcie', 'Christine Lagarde (Francja), Prezes EBC'],
      14: ['Siedziba Europejskiego Trybuna\u0142u Obrachunkowego, Luksemburg', 'Tony Murphy (Irlandia), Prezes Europejskiego Trybuna\u0142u Obrachunkowego'],
      16: ['Flagi 27 pa\u0144stw cz\u0142onkowskich przed Parlamentem Europejskim, Bruksela']
    },
    de: {
      1:  ['Geografische Karte der 27 EU-Mitgliedstaaten'],
      2:  ['Die 6 Gr\u00fcndungsmitglieder der EGKS (1951): Frankreich, Deutschland, Italien, Belgien, Niederlande, Luxemburg', 'Die 27 EU-Mitgliedstaaten nach dem Brexit (2020) \u2014 das Vereinigte K\u00f6nigreich (in Grau) hat die Union verlassen'],
      3:  ['Euro-M\u00fcnzen und -Banknoten \u2014 die gemeinsame W\u00e4hrung von 20 der 27 Mitgliedstaaten'],
      5:  ['Geografische Verteilung der 27 EU-Mitgliedstaaten (zweistellige ISO-Codes)'],
      6:  ['EU-Flaggen vor dem Berlaymont, Sitz der Europ\u00e4ischen Kommission, Br\u00fcssel'],
      8:  ['Das Plenum des Europ\u00e4ischen Parlaments in Stra\u00dfburg (offizieller Sitz)', 'Das Br\u00fcsseler Plenum, in dem zus\u00e4tzliche Plenartagungen und Aussch\u00fcsse stattfinden', 'Roberta Metsola (Malta), Pr\u00e4sidentin des Europ\u00e4ischen Parlaments'],
      9:  ['Sitzungssaal des Europ\u00e4ischen Rates, Europa-Geb\u00e4ude, Br\u00fcssel', 'António Costa (Portugal), Pr\u00e4sident des Europ\u00e4ischen Rates'],
      10: ['Plenarsitzungssaal des Rates der EU', 'Das TRIO-System: halbj\u00e4hrliche rotierende Ratsp\u00e4sidentschaft'],
      11: ['Ursula von der Leyen (Deutschland), Pr\u00e4sidentin der Europ\u00e4ischen Kommission', 'Das Berlaymont-Geb\u00e4ude, Sitz der Europ\u00e4ischen Kommission, Br\u00fcssel'],
      12: ['Sitz des EuGH (CURIA), Luxemburg', 'Koen Lenaerts (Belgien), Pr\u00e4sident des Gerichtshofs der EU'],
      13: ['Euro-Symbol vor dem EZB-Sitz in Frankfurt', 'Christine Lagarde (Frankreich), Pr\u00e4sidentin der EZB'],
      14: ['Sitz des Europ\u00e4ischen Rechnungshofs, Luxemburg', 'Tony Murphy (Irland), Pr\u00e4sident des Europ\u00e4ischen Rechnungshofs'],
      16: ['Flaggen der 27 Mitgliedstaaten vor dem Europ\u00e4ischen Parlament, Br\u00fcssel']
    },
    lv: {
      1:  ['27 ES dal\u012bbvalstu \u0123eogr\u0101fisk\u0101 karte'],
      2:  ['EOTK 6 dibin\u0101t\u0101jvalstis (1951): Francija, V\u0101cija, It\u0101lija, Be\u013c\u0123ija, N\u012bderlande, Luksemburga', '27 ES dal\u012bbvalstis p\u0113c Brexit (2020) \u2014 Apvienot\u0101 Karaliste (pel\u0113k\u0101) ir pamet\u0101si Savien\u012bbu'],
      3:  ['Euro mon\u0113tas un banknotes \u2014 vien\u0101 val\u016bta, ko izmanto 20 no 27 dal\u012bbvalst\u012bm'],
      5:  ['27 ES dal\u012bbvalstu \u0123eogr\u0101fiskais izvietojums (divburtu ISO kodi)'],
      6:  ['ES karogi Berlaymont \u0113kas priekš\u0101 \u2014 Eiropas Komisijas m\u012btne Brisel\u0113'],
      8:  ['Eiropas Parlamenta pusloka z\u0101le Strasb\u016br\u0101 (ofici\u0101l\u0101 m\u012btne)', 'Briseles pusloka z\u0101le, kur notiek papildu plen\u0101rs\u0113des un komiteju san\u0101ksmes', 'Roberta Metsola (Malta) \u2014 Eiropas Parlamenta priekšs\u0113d\u0113t\u0101ja'],
      9:  ['Eiropadomes s\u0113\u017eu z\u0101le, Eiropas \u0113ka, Brisele', 'Ant\u00f3nio Costa (Portug\u0101le) \u2014 Eiropadomes priekšs\u0113d\u0113t\u0101js'],
      10: ['ES Padomes plen\u0101rs\u0113\u017eu z\u0101le', 'TRIO sist\u0113ma: sešu m\u0113nešu rotej\u0101s prezident\u016bras starp 27 valst\u012bm'],
      11: ['Ursula fon der L\u0101jene (V\u0101cija) \u2014 Eiropas Komisijas priekšs\u0113d\u0113t\u0101ja', 'Berlaymont \u0113ka \u2014 Eiropas Komisijas m\u012btne Brisel\u0113'],
      12: ['Eiropas Savien\u012bbas Tiesas (CURIA) \u0113ka Luksemburg\u0101', 'Kuns Lenartss (Be\u013c\u0123ija) \u2014 Eiropas Savien\u012bbas Tiesas priekšs\u0113d\u0113t\u0101js'],
      13: ['Euro simbols pie ECB m\u012btnes Frankfurte', 'Krist\u012bne Lag\u0101rda (Francija) \u2014 Eiropas Centr\u0101l\u0101s bankas prezidente'],
      14: ['Eiropas Rev\u012bzijas pal\u0101tas m\u012btne Luksemburg\u0101', 'Tonijs M\u0113rfijs (Īrija) \u2014 Eiropas Rev\u012bzijas pal\u0101tas priekšs\u0113d\u0113t\u0101js'],
      16: ['27 dal\u012bbvalstu karogi Eiropas Parlamenta priekš\u0101, Brisele']
    }
  };

  // Chips Stati Membri per lingua
  var flags = ['🇧🇪','🇩🇪','🇫🇷','🇮🇹','🇱🇺','🇳🇱','🇩🇰','🇮🇪','🇬🇷','🇵🇹','🇪🇸','🇦🇹','🇫🇮','🇸🇪','🇨🇾','🇨🇿','🇪🇪','🇭🇺','🇱🇻','🇱🇹','🇲🇹','🇵🇱','🇸🇰','🇸🇮','🇧🇬','🇷🇴','🇭🇷'];
  var years  = ['1957','1957','1957','1957','1957','1957','1973','1973','1981','1986','1986','1995','1995','1995','2004','2004','2004','2004','2004','2004','2004','2004','2004','2004','2007','2007','2013'];

  var names = {
    it: ['Belgio','Germania','Francia','Italia','Lussemburgo','Paesi Bassi','Danimarca','Irlanda','Grecia','Portogallo','Spagna','Austria','Finlandia','Svezia','Cipro','Rep. Ceca','Estonia','Ungheria','Lettonia','Lituania','Malta','Polonia','Slovacchia','Slovenia','Bulgaria','Romania','Croazia'],
    en: ['Belgium','Germany','France','Italy','Luxembourg','Netherlands','Denmark','Ireland','Greece','Portugal','Spain','Austria','Finland','Sweden','Cyprus','Czech Republic','Estonia','Hungary','Latvia','Lithuania','Malta','Poland','Slovakia','Slovenia','Bulgaria','Romania','Croatia'],
    pl: ['Belgia','Niemcy','Francja','Włochy','Luksemburg','Holandia','Dania','Irlandia','Grecja','Portugalia','Hiszpania','Austria','Finlandia','Szwecja','Cypr','Czechy','Estonia','Węgry','Łotwa','Litwa','Malta','Polska','Słowacja','Słowenia','Bułgaria','Rumunia','Chorwacja'],
    de: ['Belgien','Deutschland','Frankreich','Italien','Luxemburg','Niederlande','Dänemark','Irland','Griechenland','Portugal','Spanien','Österreich','Finnland','Schweden','Zypern','Tschechien','Estland','Ungarn','Lettland','Litauen','Malta','Polen','Slowakei','Slowenien','Bulgarien','Rumänien','Kroatien'],
    lv: ['Beļģija','Vācija','Francija','Itālija','Luksemburga','Nīderlande','Dānija','Īrija','Grieķija','Portugāle','Spānija','Austrija','Somija','Zviedrija','Kipra','Čehija','Igaunija','Ungārija','Latvija','Lietuva','Malta','Polija','Slovākija','Slovēnija','Bulgārija','Rumānija','Horvātija']
  };

  function makeChips(lang) {
    return flags.map(function(f, i) {
      return { text: f + ' ' + names[lang][i], sub: years[i] };
    });
  }

  // ============================================================
  // ITALIANO
  // ============================================================
  var it = [
    { id:1, title:"L'Unione Europea", subtitle:"Una comunità di valori, pace e prosperità", banner:"Erasmus+ · Workshop n. 1",
      sections:[
        { heading:"Benvenuti", type:"text", body:"Questa presentazione interattiva vi guida alla scoperta dell'<strong>Unione Europea</strong>: le sue origini storiche, i valori su cui si fonda, i 27 Stati che ne fanno parte e le 7 istituzioni che la fanno funzionare." },
        { heading:"Contenuti della presentazione", type:"list", items:["Le origini e la storia dell'UE","I 27 Stati Membri","I valori fondamentali dell'Unione","Le 7 Istituzioni europee"] }
      ], images:[] },

    { id:2, title:"Le origini dell'Unione Europea", subtitle:"Dal dopoguerra ad oggi",
      sections:[
        { heading:"Un progetto di pace", type:"text", body:"Dopo la devastazione della Seconda Guerra Mondiale, i leader europei compresero che la cooperazione era l'unica via per garantire una pace duratura. Nel <strong>1951</strong>, sei paesi firmarono il <strong>Trattato di Parigi</strong>, dando vita alla <em>Comunità Europea del Carbone e dell'Acciaio (CECA)</em>: Francia, Germania, Italia, Belgio, Paesi Bassi e Lussemburgo." },
        { heading:"Le tappe fondamentali", type:"table", head:["Anno","Evento"], rows:[
          ["1951","Trattato di Parigi → nasce la CECA (6 paesi fondatori)"],
          ["1957","Trattati di Roma → nascono la CEE e l'Euratom"],
          ["1979","Prime elezioni dirette del Parlamento Europeo"],
          ["1992","Trattato di Maastricht → nasce ufficialmente l'Unione Europea"],
          ["2002","Introduzione delle banconote e monete in euro"],
          ["2007","Trattato di Lisbona → riforma istituzionale (in vigore dal 2009)"],
          ["2020","Brexit: il Regno Unito lascia l'UE → 27 Stati membri"]
        ]}
      ], images:[] },

    { id:3, title:"Cos'è l'Unione Europea oggi?",
      sections:[
        { heading:"Un progetto unico al mondo", type:"text", body:"L'UE è un'unione politica ed economica senza precedenti: <strong>27 Stati democratici</strong> che decidono insieme su temi importanti, mantenendo la propria identità nazionale. Con quasi <strong>450 milioni di abitanti</strong>, è la terza area più popolosa del mondo e tra le maggiori economie globali." },
        { heading:"Cosa offre ai cittadini", type:"list", items:["<strong>Libertà di movimento</strong> — vivere, lavorare e studiare in qualsiasi paese UE.","<strong>Moneta comune</strong> — l'euro è usato in 20 dei 27 paesi.","<strong>Protezione dei diritti</strong> — la Carta dei Diritti Fondamentali tutela ogni cittadino.","<strong>Mercato unico</strong> — libera circolazione di merci, servizi, persone e capitali.","<strong>Presenza globale</strong> — peso politico ed economico nelle relazioni internazionali."] }
      ], images:[] },

    { id:5, title:"I 27 Stati Membri dell'UE", subtitle:"Insieme per un'Europa unita",
      sections:[
        { heading:"I paesi che compongono l'Unione (con anno di adesione)", type:"chips", items:makeChips('it') },
        { heading:"Note", type:"text", body:"I <strong>6 paesi fondatori</strong> (CECA, 1951): Belgio, Germania, Francia, Italia, Lussemburgo, Paesi Bassi. Il membro <strong>più recente</strong> è la Croazia (2013)." }
      ], images:[] },

    { id:6, title:"I Valori Fondamentali dell'UE", subtitle:"Articolo 2 del Trattato sull'Unione Europea",
      sections:[
        { heading:"I valori su cui si fonda l'Unione", type:"list", items:["<strong>Dignità umana</strong> — La vita e la dignità di ogni persona sono inviolabili.","<strong>Libertà</strong> — Di movimento, di pensiero, di religione, di espressione.","<strong>Democrazia</strong> — Il potere appartiene ai cittadini attraverso elezioni libere.","<strong>Uguaglianza</strong> — Tutti i cittadini sono uguali davanti alla legge.","<strong>Stato di diritto</strong> — Nessuno è al di sopra della legge, nemmeno i governi.","<strong>Diritti umani</strong> — Rispetto della Carta dei Diritti Fondamentali dell'UE."] },
        { heading:"Il motto dell'Unione Europea", type:"text", body:"<em>«Uniti nella diversità»</em> — I paesi europei lavorano insieme per la pace e la prosperità, nel rispetto delle reciproche culture, tradizioni e lingue nazionali." }
      ], images:[] },

    { id:7, title:"Le 7 Istituzioni dell'UE", subtitle:"Come è governata l'Unione Europea", banner:"Trattato di Lisbona · in vigore dal 2009",
      sections:[
        { heading:"Le 7 istituzioni ufficiali e il loro ruolo", type:"table", head:["Istituzione","Rappresenta","Funzione chiave"], rows:[
          ["Parlamento Europeo","I cittadini europei","Approva leggi e bilancio"],
          ["Consiglio Europeo","I Capi di Stato / Governo","Indica le priorità politiche"],
          ["Consiglio dell'UE","I governi nazionali","Approva leggi e bilancio"],
          ["Commissione Europea","L'interesse dell'UE","Propone le leggi — esecutivo"],
          ["Corte di Giustizia dell'UE","Il diritto europeo","Interpreta e applica la legge"],
          ["Banca Centrale Europea","L'euro (20 paesi)","Politica monetaria"],
          ["Corte dei Conti Europea","I contribuenti europei","Controlla il bilancio UE"]
        ]}
      ], images:[] },

    { id:8, title:"Il Parlamento Europeo",
      meta:[["Sedi","Strasburgo · Bruxelles · Lussemburgo"],["Origini","1952 · Nome attuale dal 1962 · Elezioni dirette dal 1979"],["Composizione","720 deputati (MEP), eletti ogni 5 anni"],["Presidente","Roberta Metsola (Malta)"]],
      sections:[
        { heading:"Chi rappresenta", type:"text", body:"Il Parlamento è l'unica istituzione UE eletta <strong>direttamente dai cittadini</strong>. I deputati si organizzano in <strong>gruppi politici</strong> (non per nazionalità) e rappresentano quasi 450 milioni di europei." },
        { heading:"Funzioni principali", type:"list", items:["<strong>Approva le leggi europee</strong> insieme al Consiglio dell'UE.","<strong>Approva il bilancio</strong> dell'Unione Europea.","<strong>Elegge il Presidente della Commissione</strong> europea.","<strong>Controlla le altre istituzioni</strong> — può votare la sfiducia alla Commissione.","<strong>Approva accordi internazionali</strong> e l'ingresso di nuovi Stati."] }
      ], images:[] },

    { id:9, title:"Il Consiglio Europeo",
      meta:[["Sede","Bruxelles (Belgio)"],["Istituito","1975 · Istituzione ufficiale dal 2009"],["Composizione","Capi di Stato/Governo dei 27 + Presidente della Commissione"],["Presidente","António Costa (Portogallo)"]],
      sections:[
        { heading:"Il vertice politico dell'UE", type:"text", body:"Il Consiglio Europeo riunisce i <strong>leader dei 27 paesi membri</strong>. Non approva leggi, ma <strong>definisce le priorità e la direzione politica</strong> dell'UE. Si riunisce almeno <strong>4 volte l'anno</strong>." },
        { heading:"Funzioni principali", type:"list", items:["Stabilisce le <strong>priorità e gli indirizzi politici</strong> dell'Unione.","Gestisce le <strong>crisi internazionali</strong> e decide la posizione estera dell'UE.","Decide le <strong>nomine delle cariche apicali</strong> delle istituzioni europee.","Approva le modifiche ai <strong>Trattati fondativi</strong>."] }
      ], images:[] },

    { id:10, title:"Il Consiglio dell'Unione Europea",
      meta:[["Sede","Bruxelles · alcune sessioni a Lussemburgo"],["Fondato","1958"],["Composizione","Ministri competenti di ciascun paese (varia per argomento)"],["Presidenza","Rotante ogni 6 mesi — sistema TRIO"]],
      sections:[
        { heading:"La voce dei governi", type:"text", body:"Il Consiglio dell'UE (detto anche <em>Consiglio dei Ministri</em>) rappresenta i <strong>governi nazionali</strong>. A seconda del tema, si riuniscono i ministri competenti: economia, ambiente, giustizia, ecc." },
        { heading:"Funzioni principali", type:"list", items:["<strong>Approva le leggi europee</strong> insieme al Parlamento.","<strong>Coordina le politiche</strong> economiche e sociali degli Stati membri.","<strong>Firma accordi internazionali</strong> a nome dell'UE.","<strong>Approva il bilancio</strong> dell'UE insieme al Parlamento.","La presidenza ruota ogni 6 mesi: <strong>tre Stati si coordinano per 18 mesi</strong> (sistema TRIO)."] }
      ], images:[] },

    { id:11, title:"La Commissione Europea",
      meta:[["Sede","Bruxelles · anche Lussemburgo"],["Fondata","1958"],["Composizione","27 membri (uno per Stato), incluso il Presidente"],["Presidente","Ursula von der Leyen (Germania)"]],
      sections:[
        { heading:"Il governo dell'UE", type:"text", body:"La Commissione è l'organo <strong>esecutivo</strong> dell'UE, <strong>indipendente dai governi nazionali</strong>. <strong>Solo la Commissione può proporre nuove leggi europee</strong>: è un potere esclusivo." },
        { heading:"Funzioni principali", type:"list", items:["<strong>Propone le nuove leggi</strong> europee (potere esclusivo).","<strong>Custode dei Trattati</strong> — verifica che gli Stati applichino il diritto UE.","<strong>Gestisce il bilancio</strong> e i fondi europei.","<strong>Rappresenta l'UE</strong> nel commercio internazionale.","Avvia <strong>procedure di infrazione</strong> contro gli Stati inadempienti."] }
      ], images:[] },

    { id:12, title:"La Corte di Giustizia dell'UE (CGUE)",
      meta:[["Sede","Lussemburgo"],["Composta da","Corte di Giustizia + Tribunale"],["Giudici","1 per Stato membro + 11 Avvocati Generali"],["Mandato","6 anni (rinnovabile)"]],
      sections:[
        { heading:"Il supremo tribunale europeo", type:"text", body:"La Corte di Giustizia <strong>garantisce l'applicazione uniforme del diritto europeo</strong> in tutti i 27 Stati. Le sue sentenze hanno <strong>primato sul diritto nazionale</strong> nelle materie di competenza UE." },
        { heading:"Funzioni principali", type:"list", items:["Interpreta il <strong>diritto UE</strong> quando i giudici nazionali hanno dubbi su come applicarlo (<em>rinvio pregiudiziale</em>).","Giudica i <strong>ricorsi di annullamento</strong> contro atti delle istituzioni.","Condanna gli <strong>Stati inadempienti</strong> su richiesta della Commissione.","Il <strong>Tribunale</strong> giudica i ricorsi di privati e imprese.","Garantisce il rispetto della <strong>Carta dei Diritti Fondamentali</strong>."] }
      ], images:[] },

    { id:13, title:"La Banca Centrale Europea (BCE)",
      meta:[["Sede","Francoforte (Germania)"],["Fondata","1998"],["Gestisce","L'euro · moneta di 20 paesi su 27"],["Presidente","Christine Lagarde (Francia)"]],
      sections:[
        { heading:"La banca dell'euro", type:"text", body:"La BCE è la <strong>banca centrale dei paesi dell'area euro</strong>. Il suo obiettivo principale è <strong>mantenere la stabilità dei prezzi</strong>, cioè tenere l'inflazione vicina al 2%." },
        { heading:"Funzioni principali", type:"list", items:["<strong>Fissa i tassi di interesse</strong> per la zona euro.","<strong>Emette l'euro</strong> e autorizza la stampa delle banconote.","<strong>Gestisce le riserve valutarie</strong> dei paesi euro.","<strong>Vigila sulla stabilità</strong> del sistema bancario europeo.","Conduce la <strong>politica monetaria</strong> in modo indipendente dai governi."] }
      ], images:[] },

    { id:14, title:"La Corte dei Conti Europea",
      meta:[["Sede","Lussemburgo"],["Operativa","dall'ottobre 1977"],["Composizione","27 membri (uno per Stato membro)"],["Presidente","Tony Murphy (Irlanda)"]],
      sections:[
        { heading:"Il controllore del bilancio UE", type:"text", body:"La Corte dei Conti verifica che i <strong>fondi europei siano spesi correttamente</strong> e in conformità con le leggi. È <strong>l'organo che controlla i conti dell'UE dall'esterno</strong>, indipendente dalle altre istituzioni." },
        { heading:"Funzioni principali", type:"list", items:["<strong>Controlla entrate e uscite</strong> del bilancio UE.","Verifica che i fondi siano usati per <strong>gli scopi previsti</strong>.","Pubblica una <strong>relazione annuale</strong> al Parlamento e al Consiglio.","Segnala <strong>frodi e irregolarità</strong> all'OLAF (Ufficio europeo antifrode).","Fornisce <strong>pareri e raccomandazioni</strong> per migliorare la gestione finanziaria."] }
      ], images:[] },

    { id:15, title:"Come si fanno le leggi UE", subtitle:"Il triangolo istituzionale", banner:"Procedura legislativa ordinaria",
      sections:[
        { heading:"Una decisione condivisa", type:"text", body:"La maggior parte delle leggi europee nasce dal dialogo tra <strong>tre istituzioni principali</strong>: la <strong>Commissione</strong>, il <strong>Parlamento</strong> e il <strong>Consiglio dell'UE</strong>. Questo dialogo è chiamato <em>«triangolo istituzionale»</em>: il gioco a tre da cui nascono le leggi europee. Il <strong>Consiglio Europeo</strong> definisce le priorità politiche, mentre la <strong>Corte di Giustizia</strong> ne controlla l'applicazione." },
        { heading:"Il triangolo legislativo dell'UE", type:"diagram", labels:{
          aria:"Schema del processo legislativo dell'Unione Europea",
          role_council_eu:"Indirizzo politico", name_council_eu:"Consiglio Europeo", action_council_eu:"definisce le priorità",
          role_commission:"Iniziativa", name_commission:"Commissione Europea", action_commission:"propone le leggi (potere esclusivo)",
          role_parliament:"Cittadini", name_parliament:"Parlamento Europeo",
          role_council:"Governi nazionali", name_council:"Consiglio dell'UE",
          caption_codecision:"Co-decisione: approvano insieme le leggi e il bilancio",
          role_cjeu:"Controllo", name_cjeu:"Corte di Giustizia UE", action_cjeu:"interpreta e applica il diritto"
        }},
        { heading:"Punti chiave", type:"list", items:["Solo la <strong>Commissione</strong> può proporre nuove leggi (iniziativa esclusiva).","<strong>Parlamento</strong> e <strong>Consiglio dell'UE</strong> decidono insieme — è la <em>co-decisione</em>.","Il <strong>Consiglio Europeo</strong> non legifera, ma indica la rotta politica generale.","La <strong>CGUE</strong> garantisce l'uniformità del diritto in tutti i 27 Stati membri."] }
      ], images:[] },

    { id:16, title:"Riepilogo: Le 7 Istituzioni", subtitle:"Uno sguardo d'insieme",
      sections:[
        { heading:"Schema riassuntivo delle 7 istituzioni", type:"table", head:["Istituzione","Chi rappresenta","Funzione chiave"], rows:[
          ["Parlamento Europeo","I cittadini europei","Approva le leggi e il bilancio"],
          ["Consiglio Europeo","I Capi di Stato/Governo","Indica le priorità politiche"],
          ["Consiglio dell'UE","I governi nazionali","Approva le leggi e il bilancio"],
          ["Commissione Europea","L'interesse dell'UE","Propone le leggi — esecutivo"],
          ["Corte di Giustizia","Il diritto europeo","Interpreta e applica la legge"],
          ["Banca Centrale Europea","L'euro (20 paesi)","Politica monetaria"],
          ["Corte dei Conti","I contribuenti europei","Controlla il bilancio UE"]
        ]}
      ], images:[] }
  ];

  // ============================================================
  // ENGLISH
  // ============================================================
  var en = [
    { id:1, title:"The European Union", subtitle:"A community of values, peace and prosperity", banner:"Erasmus+ · Workshop n. 1",
      sections:[
        { heading:"Welcome", type:"text", body:"This interactive presentation guides you through the <strong>European Union</strong>: its historical origins, the values it is built on, the 27 Member States, and the 7 institutions that make it work." },
        { heading:"Contents", type:"list", items:["Origins and history of the EU","The 27 Member States","Fundamental values","The 7 European Institutions"] }
      ], images:[] },

    { id:2, title:"The Origins of the European Union", subtitle:"From the post-war era to today",
      sections:[
        { heading:"A peace project", type:"text", body:"After the devastation of World War II, European leaders realised that cooperation was the only way to guarantee lasting peace. In <strong>1951</strong>, six countries signed the <strong>Treaty of Paris</strong>, creating the <em>European Coal and Steel Community (ECSC)</em>: France, Germany, Italy, Belgium, the Netherlands and Luxembourg." },
        { heading:"Key milestones", type:"table", head:["Year","Event"], rows:[
          ["1951","Treaty of Paris → ECSC founded (6 founding members)"],
          ["1957","Treaties of Rome → EEC and Euratom established"],
          ["1979","First direct elections to the European Parliament"],
          ["1992","Maastricht Treaty → the European Union officially born"],
          ["2002","Euro banknotes and coins introduced"],
          ["2007","Treaty of Lisbon → institutional reform (in force from 2009)"],
          ["2020","Brexit: UK leaves the EU → 27 Member States"]
        ]}
      ], images:[] },

    { id:3, title:"What is the European Union Today?",
      sections:[
        { heading:"A unique project in the world", type:"text", body:"The EU is an unprecedented political and economic union: <strong>27 democratic states</strong> that decide together on important matters, keeping their national identity. With nearly <strong>450 million inhabitants</strong>, it is the world's third most populous area and one of the largest economies in the world." },
        { heading:"What it offers citizens", type:"list", items:["<strong>Freedom of movement</strong> — live, work and study in any EU country.","<strong>Common currency</strong> — the euro is used in 20 of the 27 countries.","<strong>Rights protection</strong> — the Charter of Fundamental Rights protects every citizen.","<strong>Single market</strong> — free movement of goods, services, people and capital.","<strong>Global presence</strong> — political and economic weight in international relations."] }
      ], images:[] },

    { id:5, title:"The 27 EU Member States", subtitle:"Together for a united Europe",
      sections:[
        { heading:"Countries that make up the Union (with year of accession)", type:"chips", items:makeChips('en') },
        { heading:"Notes", type:"text", body:"The <strong>6 founding members</strong> (ECSC, 1951): Belgium, Germany, France, Italy, Luxembourg, the Netherlands. The <strong>most recent</strong> member is Croatia (2013)." }
      ], images:[] },

    { id:6, title:"The EU's Fundamental Values", subtitle:"Article 2 of the Treaty on European Union",
      sections:[
        { heading:"The values the Union is built on", type:"list", items:["<strong>Human dignity</strong> — Every person's life and dignity are inviolable.","<strong>Freedom</strong> — Of movement, thought, religion and expression.","<strong>Democracy</strong> — Power belongs to citizens through free elections.","<strong>Equality</strong> — All citizens are equal before the law.","<strong>Rule of law</strong> — No one is above the law, not even governments.","<strong>Human rights</strong> — Respect for the EU Charter of Fundamental Rights."] },
        { heading:"The EU's motto", type:"text", body:"<em>\"United in diversity\"</em> — European countries work together for peace and prosperity, respecting each other's cultures, traditions and national languages." }
      ], images:[] },

    { id:7, title:"The 7 EU Institutions", subtitle:"How the European Union is governed", banner:"Treaty of Lisbon · in force since 2009",
      sections:[
        { heading:"The 7 official institutions and their roles", type:"table", head:["Institution","Represents","Key function"], rows:[
          ["European Parliament","European citizens","Adopts laws and budget"],
          ["European Council","Heads of State / Government","Indicates political priorities"],
          ["Council of the EU","National governments","Adopts laws and budget"],
          ["European Commission","EU interests","Proposes laws — executive"],
          ["Court of Justice of the EU","European law","Interprets and applies law"],
          ["European Central Bank","The euro (20 countries)","Monetary policy"],
          ["European Court of Auditors","European taxpayers","Audits the EU budget"]
        ]}
      ], images:[] },

    { id:8, title:"The European Parliament",
      meta:[["Headquarters","Strasbourg · Brussels · Luxembourg"],["Origins","1952 · Current name since 1962 · Direct elections since 1979"],["Composition","720 MEPs, elected every 5 years"],["President","Roberta Metsola (Malta)"]],
      sections:[
        { heading:"Who it represents", type:"text", body:"The Parliament is the only EU institution directly elected by citizens. MEPs organise into <strong>political groups</strong> (not by nationality) and represent nearly 450 million Europeans." },
        { heading:"Main functions", type:"list", items:["<strong>Adopts EU legislation</strong> together with the Council of the EU.","<strong>Approves the EU budget</strong>.","<strong>Elects the President of the Commission</strong>.","<strong>Oversees other institutions</strong> — can vote a motion of censure against the Commission.","<strong>Approves international agreements</strong> and the entry of new States."] }
      ], images:[] },

    { id:9, title:"The European Council",
      meta:[["Headquarters","Brussels (Belgium)"],["Established","1975 · Official institution since 2009"],["Composition","Heads of State/Government of 27 + President of the Commission"],["President","António Costa (Portugal)"]],
      sections:[
        { heading:"The EU's political summit", type:"text", body:"The European Council brings together the <strong>leaders of 27 Member States</strong>. It does not adopt laws, but <strong>sets the priorities and political direction</strong> of the EU. It meets at least <strong>4 times a year</strong>." },
        { heading:"Main functions", type:"list", items:["Sets the <strong>priorities and political direction</strong> of the Union.","Manages <strong>international crises</strong> and decides the EU's foreign policy stance.","Decides on <strong>appointments to top positions</strong> in EU institutions.","Approves changes to the <strong>founding Treaties</strong>."] }
      ], images:[] },

    { id:10, title:"The Council of the European Union",
      meta:[["Headquarters","Brussels · some sessions in Luxembourg"],["Founded","1958"],["Composition","Ministers from each member country (varies by topic)"],["Presidency","Rotating every 6 months — TRIO system"]],
      sections:[
        { heading:"The voice of governments", type:"text", body:"The Council of the EU (also known as the <em>Council of Ministers</em>) represents <strong>national governments</strong>. Depending on the topic, the relevant ministers meet: economy, environment, justice, etc." },
        { heading:"Main functions", type:"list", items:["<strong>Adopts EU legislation</strong> together with Parliament.","<strong>Coordinates economic and social policies</strong> of Member States.","<strong>Signs international agreements</strong> on behalf of the EU.","<strong>Approves the EU budget</strong> together with Parliament.","Presidency rotates every 6 months: <strong>three States coordinate for 18 months</strong> (TRIO system)."] }
      ], images:[] },

    { id:11, title:"The European Commission",
      meta:[["Headquarters","Brussels · also Luxembourg"],["Founded","1958"],["Composition","27 members (one per State), including the President"],["President","Ursula von der Leyen (Germany)"]],
      sections:[
        { heading:"The EU's government", type:"text", body:"The Commission is the EU's <strong>executive body</strong>, <strong>independent of national governments</strong>, acting in the interest of the Union as a whole. <strong>Only the Commission can propose new EU laws</strong>: it is an exclusive power." },
        { heading:"Main functions", type:"list", items:["<strong>Proposes new EU laws</strong> (exclusive power).","<strong>Guardian of the Treaties</strong> — ensures States apply EU law correctly.","<strong>Manages the budget</strong> and EU funds.","<strong>Represents the EU</strong> in international trade.","Initiates <strong>infringement procedures</strong> against non-compliant States."] }
      ], images:[] },

    { id:12, title:"The Court of Justice of the EU (CJEU)",
      meta:[["Headquarters","Luxembourg"],["Composed of","Court of Justice + General Court"],["Judges","1 per Member State + 11 Advocates-General"],["Term","6 years (renewable)"]],
      sections:[
        { heading:"The EU's supreme court", type:"text", body:"The Court of Justice <strong>ensures uniform application of EU law</strong> across all 27 States. Its rulings take <strong>precedence over national law</strong> in areas of EU competence." },
        { heading:"Main functions", type:"list", items:["Interprets <strong>EU law</strong> when national judges have doubts about how to apply it (<em>preliminary reference</em>).","Rules on <strong>annulment actions</strong> against acts of institutions.","Holds <strong>non-compliant States accountable</strong> at the Commission's request.","The <strong>General Court</strong> hears cases brought by individuals and companies.","Ensures respect for the <strong>Charter of Fundamental Rights</strong>."] }
      ], images:[] },

    { id:13, title:"The European Central Bank (ECB)",
      meta:[["Headquarters","Frankfurt (Germany)"],["Founded","1998"],["Manages","The euro · currency of 20 out of 27 countries"],["President","Christine Lagarde (France)"]],
      sections:[
        { heading:"The bank of the euro", type:"text", body:"The ECB is the <strong>central bank of the eurozone countries</strong>. Its main objective is to <strong>maintain price stability</strong>, that is, keeping inflation close to 2%." },
        { heading:"Main functions", type:"list", items:["<strong>Sets interest rates</strong> for the eurozone.","<strong>Issues the euro</strong> and authorises banknote printing.","<strong>Manages foreign currency reserves</strong> of euro countries.","<strong>Oversees the stability</strong> of the European banking system.","Conducts <strong>monetary policy</strong> independently of governments."] }
      ], images:[] },

    { id:14, title:"The European Court of Auditors",
      meta:[["Headquarters","Luxembourg"],["Operating since","October 1977"],["Composition","27 members (one per Member State)"],["President","Tony Murphy (Ireland)"]],
      sections:[
        { heading:"The EU budget watchdog", type:"text", body:"The Court of Auditors verifies that <strong>EU funds are spent correctly</strong> and in accordance with the law. It is <strong>the body that audits the EU's accounts from the outside</strong>, independent of other institutions." },
        { heading:"Main functions", type:"list", items:["<strong>Audits EU revenues and expenditure</strong>.","Verifies that funds are used <strong>for their intended purposes</strong>.","Publishes an <strong>annual report</strong> to Parliament and the Council.","Reports <strong>fraud and irregularities</strong> to OLAF (European Anti-Fraud Office).","Provides <strong>opinions and recommendations</strong> to improve financial management."] }
      ], images:[] },

    { id:15, title:"How EU Laws Are Made", subtitle:"The institutional triangle", banner:"Ordinary legislative procedure",
      sections:[
        { heading:"A shared decision", type:"text", body:"Most EU laws are born from a dialogue between <strong>three main institutions</strong>: the <strong>Commission</strong>, the <strong>Parliament</strong> and the <strong>Council of the EU</strong>. This dialogue is called the <em>\"institutional triangle\"</em>: the three-way play that produces EU laws. The <strong>European Council</strong> sets political priorities, while the <strong>Court of Justice</strong> oversees its application." },
        { heading:"The EU legislative triangle", type:"diagram", labels:{
          aria:"Diagram of the EU legislative process",
          role_council_eu:"Political direction", name_council_eu:"European Council", action_council_eu:"sets priorities",
          role_commission:"Initiative", name_commission:"European Commission", action_commission:"proposes laws (exclusive power)",
          role_parliament:"Citizens", name_parliament:"European Parliament",
          role_council:"National governments", name_council:"Council of the EU",
          caption_codecision:"Co-decision: jointly approve laws and budget",
          role_cjeu:"Oversight", name_cjeu:"Court of Justice of the EU", action_cjeu:"interprets and applies the law"
        }},
        { heading:"Key points", type:"list", items:["Only the <strong>Commission</strong> may propose new laws (exclusive initiative).","<strong>Parliament</strong> and <strong>Council of the EU</strong> decide together — this is <em>co-decision</em>.","The <strong>European Council</strong> does not legislate, but sets the overall political direction.","The <strong>CJEU</strong> ensures uniform application of law in all 27 Member States."] }
      ], images:[] },

    { id:16, title:"Summary: The 7 Institutions", subtitle:"An overview",
      sections:[
        { heading:"Summary of the 7 institutions", type:"table", head:["Institution","Represents","Key function"], rows:[
          ["European Parliament","European citizens","Adopts laws and budget"],
          ["European Council","Heads of State/Government","Indicates political priorities"],
          ["Council of the EU","National governments","Adopts laws and budget"],
          ["European Commission","EU interests","Proposes laws — executive"],
          ["Court of Justice","European law","Interprets and applies law"],
          ["European Central Bank","The euro (20 countries)","Monetary policy"],
          ["Court of Auditors","European taxpayers","Audits the EU budget"]
        ]}
      ], images:[] }
  ];

  // ============================================================
  // POLSKI
  // ============================================================
  var pl = [
    { id:1, title:"Unia Europejska", subtitle:"Wspólnota wartości, pokoju i dobrobytu", banner:"Erasmus+ · Warsztat nr 1",
      sections:[
        { heading:"Witamy", type:"text", body:"Ta interaktywna prezentacja wprowadzi Cię w świat <strong>Unii Europejskiej</strong>: jej historyczne korzenie, wartości, na których się opiera, 27 państw członkowskich oraz 7 instytucji, które sprawiają, że ona działa." },
        { heading:"Zawartość prezentacji", type:"list", items:["Początki i historia UE","27 państw członkowskich","Podstawowe wartości","7 instytucji europejskich"] }
      ], images:[] },

    { id:2, title:"Początki Unii Europejskiej", subtitle:"Od okresu powojennego do dziś",
      sections:[
        { heading:"Projekt pokojowy", type:"text", body:"Po zniszczeniach II wojny światowej przywódcy europejscy zrozumieli, że współpraca jest jedyną drogą do trwałego pokoju. W <strong>1951</strong> r. sześć krajów podpisało <strong>Traktat paryski</strong>, tworząc <em>Europejską Wspólnotę Węgla i Stali (EWWiS)</em>: Francja, Niemcy, Włochy, Belgia, Holandia i Luksemburg." },
        { heading:"Kluczowe daty", type:"table", head:["Rok","Wydarzenie"], rows:[
          ["1951","Traktat paryski → powstanie EWWiS (6 krajów założycielskich)"],
          ["1957","Traktaty Rzymskie → powstanie EWG i Euratomu"],
          ["1979","Pierwsze bezpośrednie wybory do Parlamentu Europejskiego"],
          ["1992","Traktat z Maastricht → oficjalne powstanie Unii Europejskiej"],
          ["2002","Wprowadzenie banknotów i monet euro"],
          ["2007","Traktat lizboński → reforma instytucjonalna (w życie od 2009)"],
          ["2020","Brexit: Wielka Brytania opuszcza UE → 27 państw członkowskich"]
        ]}
      ], images:[] },

    { id:3, title:"Czym jest Unia Europejska dziś?",
      sections:[
        { heading:"Wyjątkowy projekt na skalę światową", type:"text", body:"UE to bezprecedensowa unia polityczna i gospodarcza: <strong>27 demokratycznych państw</strong>, które wspólnie decydują o ważnych sprawach, zachowując własną tożsamość narodową. Przy prawie <strong>450 milionach mieszkańców</strong> jest trzecim co do wielkości obszarem zaludnienia na świecie i jedną z największych gospodarek świata." },
        { heading:"Co oferuje obywatelom", type:"list", items:["<strong>Swoboda przemieszczania się</strong> — życie, praca i nauka w dowolnym kraju UE.","<strong>Wspólna waluta</strong> — euro jest używane w 20 z 27 krajów.","<strong>Ochrona praw</strong> — Karta Praw Podstawowych chroni każdego obywatela.","<strong>Jednolity rynek</strong> — swobodny przepływ towarów, usług, osób i kapitału.","<strong>Obecność globalna</strong> — polityczne i gospodarcze znaczenie w stosunkach międzynarodowych."] }
      ], images:[] },

    { id:5, title:"27 państw członkowskich UE", subtitle:"Razem dla zjednoczonej Europy",
      sections:[
        { heading:"Kraje tworzące Unię (z rokiem przystąpienia)", type:"chips", items:makeChips('pl') },
        { heading:"Uwagi", type:"text", body:"<strong>6 krajów założycielskich</strong> (EWWiS, 1951): Belgia, Niemcy, Francja, Włochy, Luksemburg, Holandia. <strong>Najmłodszym</strong> członkiem jest Chorwacja (2013)." }
      ], images:[] },

    { id:6, title:"Podstawowe wartości UE", subtitle:"Artykuł 2 Traktatu o Unii Europejskiej",
      sections:[
        { heading:"Wartości, na których opiera się Unia", type:"list", items:["<strong>Godność ludzka</strong> — Życie i godność każdej osoby są nienaruszalne.","<strong>Wolność</strong> — Przemieszczania się, myśli, religii i wypowiedzi.","<strong>Demokracja</strong> — Władza należy do obywateli poprzez wolne wybory.","<strong>Równość</strong> — Wszyscy obywatele są równi wobec prawa.","<strong>Praworządność</strong> — Nikt nie stoi ponad prawem, nawet rządy.","<strong>Prawa człowieka</strong> — Poszanowanie Karty Praw Podstawowych UE."] },
        { heading:"Motto Unii Europejskiej", type:"text", body:"<em>\u201EZjednoczeni w r\u00F3\u017Cnorodno\u015Bci\u201D</em> \u2014 Kraje europejskie wsp\u00F3\u0142pracuj\u0105 na rzecz pokoju i dobrobytu, szanuj\u0105c wzajemnie swoje kultury, tradycje i j\u0119zyki narodowe." }
      ], images:[] },

    { id:7, title:"7 instytucji UE", subtitle:"Jak rządzi się Unia Europejska", banner:"Traktat lizboński · w mocy od 2009 r.",
      sections:[
        { heading:"7 oficjalnych instytucji i ich rola", type:"table", head:["Instytucja","Reprezentuje","Kluczowa funkcja"], rows:[
          ["Parlament Europejski","Obywatele europejscy","Przyjmuje prawa i budżet"],
          ["Rada Europejska","Szefowie państw / rządów","Wskazuje priorytety polityczne"],
          ["Rada UE","Rządy krajowe","Przyjmuje prawa i budżet"],
          ["Komisja Europejska","Interes UE","Proponuje prawa — władza wykonawcza"],
          ["Trybunał Sprawiedliwości UE","Prawo europejskie","Interpretuje i stosuje prawo"],
          ["Europejski Bank Centralny","Euro (20 krajów)","Polityka monetarna"],
          ["Europejski Trybunał Obrachunkowy","Podatnicy europejscy","Kontroluje budżet UE"]
        ]}
      ], images:[] },

    { id:8, title:"Parlament Europejski",
      meta:[["Siedziby","Strasburg · Bruksela · Luksemburg"],["Geneza","1952 · Obecna nazwa od 1962 · Wybory bezpośrednie od 1979"],["Skład","720 posłów (MEP), wybieranych co 5 lat"],["Przewodnicząca","Roberta Metsola (Malta)"]],
      sections:[
        { heading:"Kogo reprezentuje", type:"text", body:"Parlament jest jedyną instytucją UE wybieraną <strong>bezpośrednio przez obywateli</strong>. Posłowie organizują się w <strong>grupy polityczne</strong> (nie według narodowości) i reprezentują prawie 450 milionów Europejczyków." },
        { heading:"Główne funkcje", type:"list", items:["<strong>Przyjmuje prawo UE</strong> wspólnie z Radą UE.","<strong>Zatwierdza budżet</strong> Unii Europejskiej.","<strong>Wybiera Przewodniczącego Komisji</strong> Europejskiej.","<strong>Kontroluje inne instytucje</strong> — może uchwalić wotum nieufności wobec Komisji.","<strong>Zatwierdza umowy międzynarodowe</strong> i przystąpienie nowych państw."] }
      ], images:[] },

    { id:9, title:"Rada Europejska",
      meta:[["Siedziba","Bruksela (Belgia)"],["Ustanowiona","1975 · Oficjalna instytucja od 2009"],["Skład","Szefowie państw/rządów 27 krajów + Przewodniczący Komisji"],["Przewodniczący","António Costa (Portugalia)"]],
      sections:[
        { heading:"Polityczny szczyt UE", type:"text", body:"Rada Europejska skupia <strong>przywódców 27 państw członkowskich</strong>. Nie przyjmuje praw, lecz <strong>wyznacza priorytety i kierunek polityczny</strong> UE. Zbiera się co najmniej <strong>4 razy w roku</strong>." },
        { heading:"Główne funkcje", type:"list", items:["Wyznacza <strong>priorytety i kierunki polityczne</strong> Unii.","Zarządza <strong>kryzysami międzynarodowymi</strong> i decyduje o polityce zagranicznej UE.","Decyduje o <strong>nominacjach na kluczowe stanowiska</strong> w instytucjach europejskich.","Zatwierdza zmiany w <strong>traktatach założycielskich</strong>."] }
      ], images:[] },

    { id:10, title:"Rada Unii Europejskiej",
      meta:[["Siedziba","Bruksela · niektóre sesje w Luksemburgu"],["Założona","1958"],["Skład","Ministrowie każdego kraju (zależy od tematu)"],["Prezydencja","Rotacyjna co 6 miesięcy — system TRIO"]],
      sections:[
        { heading:"Głos rządów", type:"text", body:"Rada UE (zwana też <em>Radą Ministrów</em>) reprezentuje <strong>rządy krajowe</strong>. W zależności od tematu zbierają się właściwi ministrowie: gospodarka, środowisko, sprawiedliwość itp." },
        { heading:"Główne funkcje", type:"list", items:["<strong>Przyjmuje prawo UE</strong> wspólnie z Parlamentem.","<strong>Koordynuje polityki</strong> gospodarcze i społeczne państw członkowskich.","<strong>Podpisuje umowy międzynarodowe</strong> w imieniu UE.","<strong>Zatwierdza budżet UE</strong> wspólnie z Parlamentem.","Prezydencja rotuje co 6 miesięcy: <strong>trzy państwa koordynują działania przez 18 miesięcy</strong> (system TRIO)."] }
      ], images:[] },

    { id:11, title:"Komisja Europejska",
      meta:[["Siedziba","Bruksela · również Luksemburg"],["Założona","1958"],["Skład","27 członków (po jednym z każdego państwa), w tym Przewodnicząca"],["Przewodnicząca","Ursula von der Leyen (Niemcy)"]],
      sections:[
        { heading:"Rząd UE", type:"text", body:"Komisja jest <strong>organem wykonawczym</strong> UE, <strong>niezależnym od rządów krajowych</strong>, działającym w interesie Unii jako całości. <strong>Tylko Komisja może proponować nowe prawa europejskie</strong>: to wyłączne uprawnienie." },
        { heading:"Główne funkcje", type:"list", items:["<strong>Proponuje nowe prawa UE</strong> (wyłączne uprawnienie).","<strong>Strażnik Traktatów</strong> — sprawdza, czy państwa stosują prawo UE.","<strong>Zarządza budżetem</strong> i funduszami europejskimi.","<strong>Reprezentuje UE</strong> w handlu międzynarodowym.","Wszczyna <strong>postępowania o naruszenie</strong> wobec nieposłusznych państw."] }
      ], images:[] },

    { id:12, title:"Trybunał Sprawiedliwości UE (TSUE)",
      meta:[["Siedziba","Luksemburg"],["Składa się z","Trybunału Sprawiedliwości + Sądu"],["Sędziowie","1 na państwo członkowskie + 11 rzeczników generalnych"],["Kadencja","6 lat (odnawialna)"]],
      sections:[
        { heading:"Najwyższy sąd europejski", type:"text", body:"Trybunał Sprawiedliwości <strong>zapewnia jednolite stosowanie prawa europejskiego</strong> we wszystkich 27 państwach. Jego wyroki mają <strong>pierwszeństwo przed prawem krajowym</strong> w sprawach należących do kompetencji UE." },
        { heading:"Główne funkcje", type:"list", items:["Interpretuje <strong>prawo UE</strong>, gdy sędziowie krajowi mają wątpliwości, jak je stosować (<em>odesłanie prejudycjalne</em>).","Orzeka w sprawach <strong>skargi o stwierdzenie nieważności</strong> aktów instytucji.","Pociąga do odpowiedzialności <strong>nieposłuszne państwa</strong> na wniosek Komisji.","<strong>Sąd</strong> rozpatruje skargi osób fizycznych i prawnych.","Zapewnia poszanowanie <strong>Karty Praw Podstawowych</strong>."] }
      ], images:[] },

    { id:13, title:"Europejski Bank Centralny (EBC)",
      meta:[["Siedziba","Frankfurt (Niemcy)"],["Założony","1998"],["Zarządza","Euro · walutą 20 z 27 krajów"],["Prezes","Christine Lagarde (Francja)"]],
      sections:[
        { heading:"Bank euro", type:"text", body:"EBC jest <strong>bankiem centralnym krajów strefy euro</strong>, czyli utrzymuje <strong>stabilność cen</strong>, tzn. inflację bliską 2%." },
        { heading:"Główne funkcje", type:"list", items:["<strong>Ustala stopy procentowe</strong> dla strefy euro.","<strong>Emituje euro</strong> i autoryzuje druk banknotów.","<strong>Zarządza rezerwami walutowymi</strong> krajów strefy euro.","<strong>Nadzoruje stabilność</strong> europejskiego systemu bankowego.","Prowadzi <strong>politykę pieniężną</strong> niezależnie od rządów."] }
      ], images:[] },

    { id:14, title:"Europejski Trybunał Obrachunkowy",
      meta:[["Siedziba","Luksemburg"],["Działa od","października 1977"],["Skład","27 członków (jeden na państwo członkowskie)"],["Prezes","Tony Murphy (Irlandia)"]],
      sections:[
        { heading:"Strażnik budżetu UE", type:"text", body:"Trybunał Obrachunkowy sprawdza, czy <strong>fundusze europejskie są wydawane prawidłowo</strong> i zgodnie z prawem. Jest <strong>organem, który kontroluje rachunki UE z zewnątrz</strong>, niezależnym od innych instytucji." },
        { heading:"Główne funkcje", type:"list", items:["<strong>Kontroluje wpływy i wydatki</strong> budżetu UE.","Sprawdza, czy fundusze są używane <strong>zgodnie z przeznaczeniem</strong>.","Publikuje <strong>sprawozdanie roczne</strong> dla Parlamentu i Rady.","Zgłasza <strong>nadużycia i nieprawidłowości</strong> do OLAF.","Wydaje <strong>opinie i zalecenia</strong> dotyczące poprawy zarządzania finansami."] }
      ], images:[] },

    { id:15, title:"Jak powstają prawa UE", subtitle:"Trójkąt instytucjonalny", banner:"Zwykła procedura ustawodawcza",
      sections:[
        { heading:"Wspólna decyzja", type:"text", body:"Większość praw europejskich rodzi się z dialogu między <strong>trzema głównymi instytucjami</strong>: <strong>Komisją</strong>, <strong>Parlamentem</strong> i <strong>Radą UE</strong>. Ten dialog nazywany jest <em>„trójkątem instytucjonalnym”</em>: gra na trzech, z której rodzą się prawa europejskie. <strong>Rada Europejska</strong> wyznacza priorytety polityczne, a <strong>Trybunał Sprawiedliwości</strong> czuwa nad ich stosowaniem." },
        { heading:"Trójkąt legislacyjny UE", type:"diagram", labels:{
          aria:"Schemat procesu legislacyjnego UE",
          role_council_eu:"Kierunek polityczny", name_council_eu:"Rada Europejska", action_council_eu:"wyznacza priorytety",
          role_commission:"Inicjatywa", name_commission:"Komisja Europejska", action_commission:"proponuje prawa (wyłączna kompetencja)",
          role_parliament:"Obywatele", name_parliament:"Parlament Europejski",
          role_council:"Rządy krajowe", name_council:"Rada UE",
          caption_codecision:"Współdecydowanie: wspólnie zatwierdzają prawa i budżet",
          role_cjeu:"Kontrola", name_cjeu:"Trybunał Sprawiedliwości UE", action_cjeu:"interpretuje i stosuje prawo"
        }},
        { heading:"Najważniejsze punkty", type:"list", items:["Tylko <strong>Komisja</strong> może proponować nowe prawa (wyłączna inicjatywa).","<strong>Parlament</strong> i <strong>Rada UE</strong> decydują wspólnie — to <em>współdecydowanie</em>.","<strong>Rada Europejska</strong> nie stanowi prawa, lecz wytycza ogólny kierunek polityczny.","<strong>TSUE</strong> zapewnia jednolite stosowanie prawa we wszystkich 27 państwach członkowskich."] }
      ], images:[] },

    { id:16, title:"Podsumowanie: 7 instytucji", subtitle:"Przegląd",
      sections:[
        { heading:"Zestawienie 7 instytucji", type:"table", head:["Instytucja","Reprezentuje","Kluczowa funkcja"], rows:[
          ["Parlament Europejski","Obywatele europejscy","Przyjmuje prawa i budżet"],
          ["Rada Europejska","Szefowie państw/rządów","Wskazuje priorytety polityczne"],
          ["Rada UE","Rządy krajowe","Przyjmuje prawa i budżet"],
          ["Komisja Europejska","Interes UE","Proponuje prawa — władza wykonawcza"],
          ["Trybunał Sprawiedliwości","Prawo europejskie","Interpretuje i stosuje prawo"],
          ["Europejski Bank Centralny","Euro (20 krajów)","Polityka monetarna"],
          ["Trybunał Obrachunkowy","Podatnicy europejscy","Kontroluje budżet UE"]
        ]}
      ], images:[] }
  ];

  // ============================================================
  // DEUTSCH
  // ============================================================
  var de = [
    { id:1, title:"Die Europäische Union", subtitle:"Eine Gemeinschaft der Werte, des Friedens und des Wohlstands", banner:"Erasmus+ · Workshop Nr. 1",
      sections:[
        { heading:"Willkommen", type:"text", body:"Diese interaktive Präsentation führt Sie durch die <strong>Europäische Union</strong>: ihre historischen Ursprünge, die Werte, auf denen sie beruht, die 27 Mitgliedstaaten und die 7 Institutionen, die sie zum Funktionieren bringen." },
        { heading:"Inhalt der Präsentation", type:"list", items:["Ursprünge und Geschichte der EU","Die 27 Mitgliedstaaten","Grundwerte der Union","Die 7 europäischen Institutionen"] }
      ], images:[] },

    { id:2, title:"Die Ursprünge der Europäischen Union", subtitle:"Von der Nachkriegszeit bis heute",
      sections:[
        { heading:"Ein Friedensprojekt", type:"text", body:"Nach der Verwüstung des Zweiten Weltkriegs erkannten die europäischen Führungspersönlichkeiten, dass Zusammenarbeit der einzige Weg zu dauerhaftem Frieden war. Im Jahr <strong>1951</strong> unterzeichneten sechs Länder den <strong>Vertrag von Paris</strong> und gründeten die <em>Europäische Gemeinschaft für Kohle und Stahl (EGKS)</em>: Frankreich, Deutschland, Italien, Belgien, die Niederlande und Luxemburg." },
        { heading:"Wichtige Meilensteine", type:"table", head:["Jahr","Ereignis"], rows:[
          ["1951","Vertrag von Paris → EGKS gegründet (6 Gründungsstaaten)"],
          ["1957","Römische Verträge → EWG und Euratom gegründet"],
          ["1979","Erste Direktwahlen zum Europäischen Parlament"],
          ["1992","Maastrichter Vertrag → Europäische Union offiziell gegründet"],
          ["2002","Euro-Banknoten und -Münzen eingeführt"],
          ["2007","Vertrag von Lissabon → institutionelle Reform (in Kraft seit 2009)"],
          ["2020","Brexit: Großbritannien verlässt die EU → 27 Mitgliedstaaten"]
        ]}
      ], images:[] },

    { id:3, title:"Was ist die Europäische Union heute?",
      sections:[
        { heading:"Ein einzigartiges Projekt weltweit", type:"text", body:"Die EU ist eine beispiellose politische und wirtschaftliche Union: <strong>27 demokratische Staaten</strong>, die gemeinsam über wichtige Themen entscheiden und dabei ihre nationale Identität bewahren. Mit fast <strong>450 Millionen Einwohnern</strong> ist sie die drittgrößte Bevölkerungsregion der Welt und eine der größten Volkswirtschaften der Welt." },
        { heading:"Was sie den Bürgern bietet", type:"list", items:["<strong>Freizügigkeit</strong> — leben, arbeiten und studieren in jedem EU-Land.","<strong>Gemeinsame Währung</strong> — der Euro wird in 20 der 27 Länder verwendet.","<strong>Rechtsschutz</strong> — die Grundrechtecharta schützt jeden Bürger.","<strong>Binnenmarkt</strong> — freier Verkehr von Waren, Dienstleistungen, Personen und Kapital.","<strong>Globale Präsenz</strong> — politisches und wirtschaftliches Gewicht in den internationalen Beziehungen."] }
      ], images:[] },

    { id:5, title:"Die 27 EU-Mitgliedstaaten", subtitle:"Gemeinsam für ein vereintes Europa",
      sections:[
        { heading:"Länder der Union (mit Beitrittsjahr)", type:"chips", items:makeChips('de') },
        { heading:"Hinweise", type:"text", body:"Die <strong>6 Gründungsstaaten</strong> (EGKS, 1951): Belgien, Deutschland, Frankreich, Italien, Luxemburg, Niederlande. Das <strong>jüngste</strong> Mitglied ist Kroatien (2013)." }
      ], images:[] },

    { id:6, title:"Die Grundwerte der EU", subtitle:"Artikel 2 des Vertrags über die Europäische Union",
      sections:[
        { heading:"Die Werte, auf denen die Union beruht", type:"list", items:["<strong>Menschenwürde</strong> — Das Leben und die Würde jedes Menschen sind unverletzlich.","<strong>Freiheit</strong> — Bewegungsfreiheit, Gedanken-, Religions- und Meinungsfreiheit.","<strong>Demokratie</strong> — Die Macht gehört den Bürgern durch freie Wahlen.","<strong>Gleichheit</strong> — Alle Bürger sind vor dem Gesetz gleich.","<strong>Rechtsstaatlichkeit</strong> — Niemand steht über dem Gesetz, auch keine Regierungen.","<strong>Menschenrechte</strong> — Achtung der EU-Grundrechtecharta."] },
        { heading:"Das Motto der Europäischen Union", type:"text", body:"<em>\u201EIn Vielfalt geeint\u201D</em> \u2014 Die europ\u00E4ischen L\u00E4nder arbeiten gemeinsam f\u00FCr Frieden und Wohlstand und respektieren dabei gegenseitig ihre Kulturen, Traditionen und Nationalsprachen." }
      ], images:[] },

    { id:7, title:"Die 7 EU-Institutionen", subtitle:"Wie die Europäische Union regiert wird", banner:"Vertrag von Lissabon · in Kraft seit 2009",
      sections:[
        { heading:"Die 7 offiziellen Institutionen und ihre Rollen", type:"table", head:["Institution","Vertritt","Kernaufgabe"], rows:[
          ["Europäisches Parlament","Europäische Bürger","Verabschiedet Gesetze und Haushalt"],
          ["Europäischer Rat","Staats-/Regierungschefs","Gibt politische Prioritäten vor"],
          ["Rat der EU","Nationale Regierungen","Verabschiedet Gesetze und Haushalt"],
          ["Europäische Kommission","EU-Interessen","Schlägt Gesetze vor — Exekutive"],
          ["Gerichtshof der EU","Europäisches Recht","Legt Recht aus und wendet es an"],
          ["Europäische Zentralbank","Euro (20 Länder)","Geldpolitik"],
          ["Europäischer Rechnungshof","Europäische Steuerzahler","Prüft den EU-Haushalt"]
        ]}
      ], images:[] },

    { id:8, title:"Das Europäische Parlament",
      meta:[["Sitze","Straßburg · Brüssel · Luxemburg"],["Ursprünge","1952 · Heutiger Name seit 1962 · Direktwahlen seit 1979"],["Zusammensetzung","720 Abgeordnete (MdEP), alle 5 Jahre gewählt"],["Präsidentin","Roberta Metsola (Malta)"]],
      sections:[
        { heading:"Wen es vertritt", type:"text", body:"Das Parlament ist die einzige EU-Institution, die <strong>direkt von den Bürgern gewählt</strong> wird. Die Abgeordneten organisieren sich in <strong>Fraktionen</strong> (nicht nach Nationalität) und vertreten fast 450 Millionen Europäer." },
        { heading:"Hauptaufgaben", type:"list", items:["<strong>Verabschiedet EU-Gesetze</strong> gemeinsam mit dem Rat der EU.","<strong>Genehmigt den EU-Haushalt</strong>.","<strong>Wählt den Präsidenten der Kommission</strong>.","<strong>Kontrolliert andere Institutionen</strong> — kann ein Misstrauensvotum gegen die Kommission einleiten.","<strong>Genehmigt internationale Abkommen</strong> und den Beitritt neuer Staaten."] }
      ], images:[] },

    { id:9, title:"Der Europäische Rat",
      meta:[["Sitz","Brüssel (Belgien)"],["Eingerichtet","1975 · Offizielle Institution seit 2009"],["Zusammensetzung","Staats-/Regierungschefs der 27 + Präsident der Kommission"],["Präsident","António Costa (Portugal)"]],
      sections:[
        { heading:"Der politische Gipfel der EU", type:"text", body:"Der Europäische Rat versammelt die <strong>Führungspersönlichkeiten der 27 Mitgliedstaaten</strong>. Er verabschiedet keine Gesetze, sondern <strong>legt die Prioritäten und die politische Richtung</strong> der EU fest. Er trifft sich mindestens <strong>4 Mal pro Jahr</strong>." },
        { heading:"Hauptaufgaben", type:"list", items:["Legt <strong>Prioritäten und politische Leitlinien</strong> der Union fest.","Bewältigt <strong>internationale Krisen</strong> und entscheidet über die Außenpolitik der EU.","Entscheidet über <strong>Ernennungen zu Spitzenpositionen</strong> in EU-Institutionen.","Genehmigt Änderungen der <strong>Gründungsverträge</strong>."] }
      ], images:[] },

    { id:10, title:"Der Rat der Europäischen Union",
      meta:[["Sitz","Brüssel · einige Sitzungen in Luxemburg"],["Gegründet","1958"],["Zusammensetzung","Minister aus jedem Mitgliedstaat (je nach Thema)"],["Präsidentschaft","Rotierend alle 6 Monate — TRIO-System"]],
      sections:[
        { heading:"Die Stimme der Regierungen", type:"text", body:"Der Rat der EU (auch <em>Ministerrat</em>) vertritt die <strong>nationalen Regierungen</strong>. Je nach Thema treffen sich die zuständigen Minister: Wirtschaft, Umwelt, Justiz usw." },
        { heading:"Hauptaufgaben", type:"list", items:["<strong>Verabschiedet EU-Gesetze</strong> gemeinsam mit dem Parlament.","<strong>Koordiniert Wirtschafts- und Sozialpolitiken</strong> der Mitgliedstaaten.","<strong>Unterzeichnet internationale Abkommen</strong> im Namen der EU.","<strong>Genehmigt den EU-Haushalt</strong> gemeinsam mit dem Parlament.","Präsidentschaft rotiert alle 6 Monate: <strong>drei Staaten koordinieren sich für 18 Monate</strong> (TRIO-System)."] }
      ], images:[] },

    { id:11, title:"Die Europäische Kommission",
      meta:[["Sitz","Brüssel · auch Luxemburg"],["Gegründet","1958"],["Zusammensetzung","27 Mitglieder (eines je Staat), einschließlich der Präsidentin"],["Präsidentin","Ursula von der Leyen (Deutschland)"]],
      sections:[
        { heading:"Die Regierung der EU", type:"text", body:"Die Kommission ist der <strong>Exekutivarm</strong> der EU, <strong>unabhängig von den nationalen Regierungen</strong>, und handelt im Interesse der Union insgesamt. <strong>Nur die Kommission kann neue EU-Gesetze vorschlagen</strong>: das ist eine ausschließliche Befugnis." },
        { heading:"Hauptaufgaben", type:"list", items:["<strong>Schlägt neue EU-Gesetze vor</strong> (ausschließliche Befugnis).","<strong>Hüterin der Verträge</strong> — prüft, ob Staaten EU-Recht korrekt anwenden.","<strong>Verwaltet den Haushalt</strong> und die EU-Fonds.","<strong>Vertritt die EU</strong> im internationalen Handel.","Leitet <strong>Vertragsverletzungsverfahren</strong> gegen nicht konforme Staaten ein."] }
      ], images:[] },

    { id:12, title:"Der Gerichtshof der EU (EuGH)",
      meta:[["Sitz","Luxemburg"],["Besteht aus","Gerichtshof + Gericht"],["Richter","1 je Mitgliedstaat + 11 Generalanwälte"],["Amtszeit","6 Jahre (verlängerbar)"]],
      sections:[
        { heading:"Der oberste europäische Gerichtshof", type:"text", body:"Der Gerichtshof <strong>gewährleistet die einheitliche Anwendung des EU-Rechts</strong> in allen 27 Staaten. Seine Urteile haben <strong>Vorrang vor nationalem Recht</strong> in EU-Zuständigkeitsbereichen." },
        { heading:"Hauptaufgaben", type:"list", items:["Legt <strong>EU-Recht</strong> aus, wenn nationale Richter Zweifel haben, wie sie es anwenden sollen (<em>Vorabentscheidungsverfahren</em>).","Entscheidet über <strong>Nichtigkeitsklagen</strong> gegen Handlungen der Institutionen.","Verurteilt <strong>nicht konforme Staaten</strong> auf Antrag der Kommission.","Das <strong>Gericht</strong> entscheidet über Klagen von Privatpersonen und Unternehmen.","Gewährleistet die Achtung der <strong>Grundrechtecharta</strong>."] }
      ], images:[] },

    { id:13, title:"Die Europäische Zentralbank (EZB)",
      meta:[["Sitz","Frankfurt (Deutschland)"],["Gegründet","1998"],["Verwaltet","Euro · Währung von 20 der 27 Länder"],["Präsidentin","Christine Lagarde (Frankreich)"]],
      sections:[
        { heading:"Die Bank des Euro", type:"text", body:"Die EZB ist die <strong>Zentralbank der Eurozone-Länder</strong>. Ihr Hauptziel ist die <strong>Wahrung der Preisstabilität</strong>, d. h. die Inflation nahe bei 2% zu halten." },
        { heading:"Hauptaufgaben", type:"list", items:["<strong>Legt Zinssätze</strong> für die Eurozone fest.","<strong>Gibt den Euro heraus</strong> und genehmigt den Banknotendruck.","<strong>Verwaltet Devisenreserven</strong> der Euro-Länder.","<strong>Überwacht die Stabilität</strong> des europäischen Bankensystems.","Führt die <strong>Geldpolitik</strong> unabhängig von den Regierungen."] }
      ], images:[] },

    { id:14, title:"Der Europäische Rechnungshof",
      meta:[["Sitz","Luxemburg"],["Tätig seit","Oktober 1977"],["Zusammensetzung","27 Mitglieder (eines je Mitgliedstaat)"],["Präsident","Tony Murphy (Irland)"]],
      sections:[
        { heading:"Der EU-Haushaltsüberwacher", type:"text", body:"Der Rechnungshof prüft, ob <strong>EU-Mittel korrekt ausgegeben werden</strong> und den Vorschriften entsprechen. Er ist <strong>das Organ, das die Konten der EU von außen prüft</strong>, unabhängig von anderen Institutionen." },
        { heading:"Hauptaufgaben", type:"list", items:["<strong>Prüft EU-Einnahmen und -Ausgaben</strong>.","Überprüft, ob Mittel <strong>zweckgerecht verwendet</strong> werden.","Veröffentlicht einen <strong>Jahresbericht</strong> für Parlament und Rat.","Meldet <strong>Betrug und Unregelmäßigkeiten</strong> an OLAF.","Gibt <strong>Stellungnahmen und Empfehlungen</strong> zur Verbesserung des Finanzmanagements ab."] }
      ], images:[] },

    { id:15, title:"Wie EU-Gesetze entstehen", subtitle:"Das institutionelle Dreieck", banner:"Ordentliches Gesetzgebungsverfahren",
      sections:[
        { heading:"Eine gemeinsame Entscheidung", type:"text", body:"Die meisten EU-Gesetze entstehen aus dem Dialog zwischen <strong>drei Hauptinstitutionen</strong>: der <strong>Kommission</strong>, dem <strong>Parlament</strong> und dem <strong>Rat der EU</strong>. Dieser Dialog wird <em>„institutionelles Dreieck“</em> genannt: das Drei-Wege-Spiel, aus dem die EU-Gesetze entstehen. Der <strong>Europäische Rat</strong> setzt politische Prioritäten, während der <strong>Gerichtshof</strong> über deren Anwendung wacht." },
        { heading:"Das EU-Gesetzgebungsdreieck", type:"diagram", labels:{
          aria:"Schema des EU-Gesetzgebungsverfahrens",
          role_council_eu:"Politische Richtung", name_council_eu:"Europäischer Rat", action_council_eu:"setzt Prioritäten",
          role_commission:"Initiative", name_commission:"Europäische Kommission", action_commission:"schlägt Gesetze vor (Alleinrecht)",
          role_parliament:"Bürger", name_parliament:"Europäisches Parlament",
          role_council:"Nationale Regierungen", name_council:"Rat der EU",
          caption_codecision:"Mitentscheidung: gemeinsam beschließen Gesetze und Haushalt",
          role_cjeu:"Kontrolle", name_cjeu:"Gerichtshof der EU", action_cjeu:"legt das Recht aus und wendet es an"
        }},
        { heading:"Wichtige Punkte", type:"list", items:["Nur die <strong>Kommission</strong> darf neue Gesetze vorschlagen (Initiativmonopol).","<strong>Parlament</strong> und <strong>Rat der EU</strong> entscheiden gemeinsam — das ist die <em>Mitentscheidung</em>.","Der <strong>Europäische Rat</strong> legt nicht Gesetze fest, sondern bestimmt die politische Richtung.","Der <strong>EuGH</strong> sichert die einheitliche Rechtsanwendung in allen 27 Mitgliedstaaten."] }
      ], images:[] },

    { id:16, title:"Zusammenfassung: Die 7 Institutionen", subtitle:"Ein Überblick",
      sections:[
        { heading:"Übersicht der 7 Institutionen", type:"table", head:["Institution","Vertritt","Kernaufgabe"], rows:[
          ["Europäisches Parlament","Europäische Bürger","Verabschiedet Gesetze und Haushalt"],
          ["Europäischer Rat","Staats-/Regierungschefs","Gibt politische Prioritäten vor"],
          ["Rat der EU","Nationale Regierungen","Verabschiedet Gesetze und Haushalt"],
          ["Europäische Kommission","EU-Interessen","Schlägt Gesetze vor — Exekutive"],
          ["Gerichtshof","Europäisches Recht","Legt Recht aus und wendet es an"],
          ["Europäische Zentralbank","Euro (20 Länder)","Geldpolitik"],
          ["Rechnungshof","Europäische Steuerzahler","Prüft den EU-Haushalt"]
        ]}
      ], images:[] }
  ];

  // ============================================================
  // LATVIEŠU
  // ============================================================
  var lv = [
    { id:1, title:"Eiropas Savienība", subtitle:"Vērtību, miera un labklājības kopiena", banner:"Erasmus+ · Seminārs nr. 1",
      sections:[
        { heading:"Laipni lūgti", type:"text", body:"Šī interaktīvā prezentācija iepazīstinās jūs ar <strong>Eiropas Savienību</strong>: tās vēsturiskajiem pirmsākumiem, vērtībām, uz kurām tā balstās, 27 dalībvalstīm un 7 iestādēm, kas nodrošina tās darbību." },
        { heading:"Prezentācijas saturs", type:"list", items:["ES pirmsākumi un vēsture","27 dalībvalstis","Pamatvērtības","7 Eiropas iestādes"] }
      ], images:[] },

    { id:2, title:"Eiropas Savienības pirmsākumi", subtitle:"No pēckara laikiem līdz šodienai",
      sections:[
        { heading:"Miera projekts", type:"text", body:"Pēc Otrā pasaules kara postījumiem Eiropas līderi saprata, ka sadarbība ir vienīgais ceļš uz ilgstošu mieru. <strong>1951.</strong> gadā sešas valstis parakstīja <strong>Parīzes līgumu</strong>, izveidojot <em>Eiropas Ogļu un tērauda kopienu (EOTK)</em>: Francija, Vācija, Itālija, Beļģija, Nīderlande un Luksemburga." },
        { heading:"Galvenie pagrieziena punkti", type:"table", head:["Gads","Notikums"], rows:[
          ["1951","Parīzes līgums → EOTK dibināta (6 dibinātājvalstis)"],
          ["1957","Romas līgumi → EEK un Euratoms dibināti"],
          ["1979","Pirmās tiešās Eiropas Parlamenta vēlēšanas"],
          ["1992","Māstrihtas līgums → Eiropas Savienība oficiāli dibināta"],
          ["2002","Eiro banknotes un monētas ieviests apgrozībā"],
          ["2007","Lisabonas līgums → institucionālā reforma (spēkā no 2009)"],
          ["2020","Brexit: Lielbritānija atstāj ES → 27 dalībvalstis"]
        ]}
      ], images:[] },

    { id:3, title:"Kas ir Eiropas Savienība šodien?",
      sections:[
        { heading:"Unikāls projekts pasaulē", type:"text", body:"ES ir bezprecedenta politiskā un ekonomiskā savienība: <strong>27 demokrātiskas valstis</strong>, kas kopā lemj par svarīgiem jautājumiem, saglabājot savu nacionālo identitāti. Ar gandrīz <strong>450 miljoniem iedzīvotāju</strong> tā ir trešā lielākā apdzīvotā teritorija pasaulē un viena no lielākajām pasaules ekonomikām." },
        { heading:"Ko tā piedāvā pilsoņiem", type:"list", items:["<strong>Pārvietošanās brīvība</strong> — dzīvot, strādāt un mācīties jebkurā ES valstī.","<strong>Kopējā valūta</strong> — eiro tiek izmantots 20 no 27 valstīm.","<strong>Tiesību aizsardzība</strong> — Pamattiesību harta aizsargā katru pilsoni.","<strong>Vienotais tirgus</strong> — brīva preču, pakalpojumu, personu un kapitāla aprite.","<strong>Globāla klātbūtne</strong> — politiskais un ekonomiskais svars starptautiskajās attiecībās."] }
      ], images:[] },

    { id:5, title:"27 ES dalībvalstis", subtitle:"Kopā vienotai Eiropai",
      sections:[
        { heading:"Savienības valstis (ar pievienošanās gadu)", type:"chips", items:makeChips('lv') },
        { heading:"Piezīmes", type:"text", body:"<strong>6 dibinātājvalstis</strong> (EOTK, 1951): Beļģija, Vācija, Francija, Itālija, Luksemburga, Nīderlande. <strong>Jaunākā</strong> dalībvalsts ir Horvātija (2013)." }
      ], images:[] },

    { id:6, title:"ES pamatvērtības", subtitle:"Līguma par Eiropas Savienību 2. pants",
      sections:[
        { heading:"Vērtības, uz kurām balstās Savienība", type:"list", items:["<strong>Cilvēka cieņa</strong> — Katras personas dzīvība un cieņa ir neaizskaramas.","<strong>Brīvība</strong> — Pārvietošanās, domu, reliģijas un vārda brīvība.","<strong>Demokrātija</strong> — Vara pieder pilsoņiem caur brīvām vēlēšanām.","<strong>Vienlīdzība</strong> — Visi pilsoņi ir vienlīdzīgi likuma priekšā.","<strong>Tiesiskums</strong> — Neviens nestāv pāri likumam, pat ne valdības.","<strong>Cilvēktiesības</strong> — ES Pamattiesību hartas ievērošana."] },
        { heading:"Eiropas Savienības devīze", type:"text", body:"<em>\u201EVienoti da\u017E\u0101d\u012Bb\u0101\u201D</em> \u2014 Eiropas valstis str\u0101d\u0101 kop\u0101 miera un labkl\u0101j\u012Bbas v\u0101rd\u0101, cienot citu kult\u016Bras, trad\u012Bcijas un nacion\u0101l\u0101s valodas." }
      ], images:[] },

    { id:7, title:"7 ES iestādes", subtitle:"Kā tiek pārvaldīta Eiropas Savienība", banner:"Lisabonas līgums · spēkā kopš 2009. gada",
      sections:[
        { heading:"7 oficiālās iestādes un to lomas", type:"table", head:["Iestāde","Pārstāv","Galvenā funkcija"], rows:[
          ["Eiropas Parlaments","Eiropas pilsoņi","Pieņem likumus un budžetu"],
          ["Eiropadome","Valstu/valdību vadītāji","Norāda politiskās prioritātes"],
          ["ES Padome","Nacionālās valdības","Pieņem likumus un budžetu"],
          ["Eiropas Komisija","ES intereses","Ierosina likumus — izpildvara"],
          ["ES Tiesa","Eiropas tiesības","Interpretē un piemēro tiesības"],
          ["Eiropas Centrālā Banka","Eiro (20 valstis)","Monetārā politika"],
          ["Eiropas Revīzijas Palāta","Eiropas nodokļu maksātāji","Revidē ES budžetu"]
        ]}
      ], images:[] },

    { id:8, title:"Eiropas Parlaments",
      meta:[["Mītnes vietas","Strasbūra · Brisele · Luksemburga"],["Pirmsākumi","1952 · Pašreizējais nosaukums kopš 1962 · Tiešās vēlēšanas kopš 1979"],["Sastāvs","720 EP deputāti, ievēlēti ik 5 gadus"],["Priekšsēdētāja","Roberta Metsola (Malta)"]],
      sections:[
        { heading:"Ko tas pārstāv", type:"text", body:"Parlaments ir vienīgā ES iestāde, ko <strong>tieši ievēl pilsoņi</strong>. Deputāti organizējas <strong>politiskajās grupās</strong> (nevis pēc tautības) un pārstāv gandrīz 450 miljonus eiropiešu." },
        { heading:"Galvenās funkcijas", type:"list", items:["<strong>Pieņem ES tiesību aktus</strong> kopā ar ES Padomi.","<strong>Apstiprina ES budžetu</strong>.","<strong>Ievēl Komisijas priekšsēdētāju</strong>.","<strong>Uzrauga citas iestādes</strong> — var balsot par neuzticības izteikšanu Komisijai.","<strong>Apstiprina starptautiskus nolīgumus</strong> un jaunu valstu pievienošanos."] }
      ], images:[] },

    { id:9, title:"Eiropadome",
      meta:[["Galvenā mītne","Brisele (Beļģija)"],["Izveidota","1975 · Oficiāla iestāde kopš 2009"],["Sastāvs","27 valstu/valdību vadītāji + Komisijas priekšsēdētājs"],["Priekšsēdētājs","António Costa (Portugāle)"]],
      sections:[
        { heading:"ES politiskais samits", type:"text", body:"Eiropadome pulcē <strong>27 dalībvalstu vadītājus</strong>. Tā nepieņem likumus, bet <strong>nosaka ES prioritātes un politisko virzienu</strong>. Tā tiekas vismaz <strong>4 reizes gadā</strong>." },
        { heading:"Galvenās funkcijas", type:"list", items:["Nosaka <strong>Savienības prioritātes un politiskos virzienus</strong>.","Pārvalda <strong>starptautiskās krīzes</strong> un lemj par ES ārpolitikas nostāju.","Lemj par <strong>iecelšanu vadošajos amatos</strong> ES iestādēs.","Apstiprina grozījumus <strong>dibinātāju līgumos</strong>."] }
      ], images:[] },

    { id:10, title:"Eiropas Savienības Padome",
      meta:[["Galvenā mītne","Brisele · dažas sesijas Luksemburgā"],["Dibināta","1958"],["Sastāvs","Katras valsts atbildīgie ministri (atkarībā no temata)"],["Prezidentūra","Rotējoša ik 6 mēnešus — TRIO sistēma"]],
      sections:[
        { heading:"Valdību balss", type:"text", body:"ES Padome (saukta arī par <em>Ministru padomi</em>) pārstāv <strong>nacionālās valdības</strong>. Atkarībā no temata tiekas atbildīgie ministri: ekonomika, vide, tieslietas utt." },
        { heading:"Galvenās funkcijas", type:"list", items:["<strong>Pieņem ES tiesību aktus</strong> kopā ar Parlamentu.","<strong>Koordinē ekonomiskās un sociālās politikas</strong> starp dalībvalstīm.","<strong>Paraksta starptautiskus nolīgumus</strong> ES vārdā.","<strong>Apstiprina ES budžetu</strong> kopā ar Parlamentu.","Prezidentūra rotē ik 6 mēnešus: <strong>trīs valstis koordinē darbību 18 mēnešus</strong> (TRIO sistēma)."] }
      ], images:[] },

    { id:11, title:"Eiropas Komisija",
      meta:[["Galvenā mītne","Brisele · arī Luksemburga"],["Dibināta","1958"],["Sastāvs","27 locekļi (pa vienam no katras valsts), tostarp priekšsēdētāja"],["Priekšsēdētāja","Ursula von der Leyen (Vācija)"]],
      sections:[
        { heading:"ES valdība", type:"text", body:"Komisija ir ES <strong>izpildinstitūcija</strong>, <strong>neatkarīga no nacionālajām valdībām</strong>, kas darbojas Savienības kopējās interesēs. <strong>Tikai Komisija var ierosināt jaunus ES tiesību aktus</strong>: tas ir ekskluzīvs pilnvarojums." },
        { heading:"Galvenās funkcijas", type:"list", items:["<strong>Ierosina jaunus ES tiesību aktus</strong> (ekskluzīvas pilnvaras).","<strong>Līgumu sargs</strong> — pārbauda, vai valstis pareizi piemēro ES tiesības.","<strong>Pārvalda budžetu</strong> un ES fondus.","<strong>Pārstāv ES</strong> starptautiskajā tirdzniecībā.","Ierosina <strong>pārkāpuma procedūras</strong> pret neizpildītājām valstīm."] }
      ], images:[] },

    { id:12, title:"ES Tiesa (EST)",
      meta:[["Galvenā mītne","Luksemburga"],["Sastāv no","Tiesas + Vispārējās tiesas"],["Tiesneši","1 no katras dalībvalsts + 11 ģenerāladvokāti"],["Pilnvaru termiņš","6 gadi (atjaunojami)"]],
      sections:[
        { heading:"ES augstākā tiesa", type:"text", body:"Tiesa <strong>nodrošina ES tiesību aktu vienveidīgu piemērošanu</strong> visās 27 dalībvalstīs. Tās spriedumi <strong>ir pārāki par nacionālajiem tiesību aktiem</strong> ES kompetences jomās." },
        { heading:"Galvenās funkcijas", type:"list", items:["Interpretē <strong>ES tiesības</strong>, kad nacionālajiem tiesnešiem ir šaubas par to, kā tās piemērot (<em>prejudiciāls nolēmums</em>).","Izskata <strong>prasības par aktu atcelšanu</strong> pret iestāžu rīcību.","Soda <strong>neizpildītājas valstis</strong> pēc Komisijas pieprasījuma.","<strong>Vispārējā tiesa</strong> izskata privātpersonu un uzņēmumu prasības.","Nodrošina <strong>Pamattiesību hartas</strong> ievērošanu."] }
      ], images:[] },

    { id:13, title:"Eiropas Centrālā Banka (ECB)",
      meta:[["Galvenā mītne","Frankfurte (Vācija)"],["Dibināta","1998"],["Pārvalda","Eiro · 20 no 27 valstīm"],["Priekšsēdētāja","Christine Lagarde (Francija)"]],
      sections:[
        { heading:"Eiro banka", type:"text", body:"ECB ir <strong>eirozonas valstu centrālā banka</strong>. Tās galvenais mērķis ir <strong>uzturēt cenu stabilitāti</strong>, tas ir, saglabāt inflāciju tuvu 2% līmenim." },
        { heading:"Galvenās funkcijas", type:"list", items:["<strong>Nosaka procentu likmes</strong> eirozonas valstīm.","<strong>Emitē eiro</strong> un pilnvaro banknošu drukāšanu.","<strong>Pārvalda ārvalstu valūtas rezerves</strong> eiro valstīm.","<strong>Uzrauga Eiropas banku sistēmas stabilitāti</strong>.","Īsteno <strong>monetāro politiku</strong> neatkarīgi no valdībām."] }
      ], images:[] },

    { id:14, title:"Eiropas Revīzijas Palāta",
      meta:[["Galvenā mītne","Luksemburga"],["Darbojas kopš","1977. gada oktobra"],["Sastāvs","27 locekļi (pa vienam no katras dalībvalsts)"],["Priekšsēdētājs","Tony Murphy (Īrija)"]],
      sections:[
        { heading:"ES budžeta uzraugs", type:"text", body:"Revīzijas Palāta pārbauda, vai <strong>ES fondi tiek tērēti pareizi</strong> un saskaņā ar likumiem. Tā ir <strong>iestāde, kas pārbauda ES kontus no ārpuses</strong>, neatkarīga no citām iestādēm." },
        { heading:"Galvenās funkcijas", type:"list", items:["<strong>Revidē ES ieņēmumus un izdevumus</strong>.","Pārbauda, vai fondi tiek izmantoti <strong>paredzētajiem mērķiem</strong>.","Publicē <strong>gada ziņojumu</strong> Parlamentam un Padomei.","Ziņo par <strong>krāpšanu un pārkāpumiem</strong> OLAF birojam.","Sniedz <strong>atzinumus un ieteikumus</strong> finanšu pārvaldības uzlabošanai."] }
      ], images:[] },

    { id:15, title:"Kā tiek pieņemti ES likumi", subtitle:"Institucionālais trīsstūris", banner:"Parastā likumdošanas procedūra",
      sections:[
        { heading:"Kopīgs lēmums", type:"text", body:"Lielākā daļa ES likumu rodas dialogā starp <strong>trim galvenajām iestādēm</strong>: <strong>Komisiju</strong>, <strong>Parlamentu</strong> un <strong>ES Padomi</strong>. Šo dialogu sauc par <em>„institucionālo trīsstūri”</em>: trīspusēju spēli, no kuras dzimst ES likumi. <strong>Eiropadome</strong> nosaka politiskās prioritātes, savukārt <strong>Tiesa</strong> uzrauga to piemērošanu." },
        { heading:"ES likumdošanas trīsstūris", type:"diagram", labels:{
          aria:"ES likumdošanas procesa shēma",
          role_council_eu:"Politiskais virziens", name_council_eu:"Eiropadome", action_council_eu:"nosaka prioritātes",
          role_commission:"Iniciatīva", name_commission:"Eiropas Komisija", action_commission:"ierosina likumus (ekskluzīvas tiesības)",
          role_parliament:"Pilsoņi", name_parliament:"Eiropas Parlaments",
          role_council:"Nacionālās valdības", name_council:"ES Padome",
          caption_codecision:"Koplēmums: kopīgi pieņem likumus un budžetu",
          role_cjeu:"Uzraudzība", name_cjeu:"ES Tiesa", action_cjeu:"interpretē un piemēro tiesības"
        }},
        { heading:"Galvenie punkti", type:"list", items:["Tikai <strong>Komisija</strong> var ierosināt jaunus likumus (ekskluzīva iniciatīva).","<strong>Parlaments</strong> un <strong>ES Padome</strong> lemj kopā — tas ir <em>koplēmums</em>.","<strong>Eiropadome</strong> nepieņem likumus, bet nosaka vispārējo politisko virzienu.","<strong>EST</strong> nodrošina vienveidīgu tiesību piemērošanu visās 27 dalībvalstīs."] }
      ], images:[] },

    { id:16, title:"Kopsavilkums: 7 iestādes", subtitle:"Pārskats",
      sections:[
        { heading:"7 iestāžu kopsavilkums", type:"table", head:["Iestāde","Pārstāv","Galvenā funkcija"], rows:[
          ["Eiropas Parlaments","Eiropas pilsoņi","Pieņem likumus un budžetu"],
          ["Eiropadome","Valstu/valdību vadītāji","Norāda politiskās prioritātes"],
          ["ES Padome","Nacionālās valdības","Pieņem likumus un budžetu"],
          ["Eiropas Komisija","ES intereses","Ierosina likumus — izpildvara"],
          ["ES Tiesa","Eiropas tiesības","Interpretē un piemēro tiesības"],
          ["Eiropas Centrālā Banka","Eiro (20 valstis)","Monetārā politika"],
          ["Revīzijas Palāta","Eiropas nodokļu maksātāji","Revidē ES budžetu"]
        ]}
      ], images:[] }
  ];

  // ============================================================
  // Applica immagini + didascalie tradotte a tutte le lingue
  // ============================================================
  var LANG_CODES = ['it', 'en', 'pl', 'de', 'lv'];
  [it, en, pl, de, lv].forEach(function (langArr, li) {
    var lc = LANG_CODES[li];
    langArr.forEach(function (slide) {
      var srcs = SLIDE_IMG_SRCS[slide.id];
      if (!srcs) return;
      var caps = (SLIDE_CAPTIONS[lc] && SLIDE_CAPTIONS[lc][slide.id]) || [];
      slide.images = srcs.map(function (src, j) {
        return { src: src, caption: caps[j] || '' };
      });
    });
  });

  // ============================================================
  // Esporta
  // ============================================================
  window.SLIDES_DATA = { it: it, en: en, pl: pl, de: de, lv: lv };
  window.SLIDES = window.SLIDES_DATA.it;

}());
