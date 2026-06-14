# Progetto Erasmus LUTE — Memoria di lavoro

> File di contesto persistente per Claude. Aggiornare quando cambiano struttura, decisioni o stato del progetto.

---

## 0. Quick Reference (tabelle valori chiave)

### 0.1 File principali

| App | File HTML | File JS | Cartella |
|-----|-----------|---------|----------|
| Home | `Home/index.html` | `Home/lang.js`, `script.js` | `Home/` |
| Unione Europea | `Unione Europea/Unione Europea.html` ⚠ spazi | `data.js`, `script.js`, `lang.js` | `Unione Europea/` |
| Workshop 1 | `Workshop 1 LUTE/Workshop LUTE Modulo 2 ITA.html` ⚠ | `lang.js`, `script.js` | `Workshop 1 LUTE/` |
| Workshop 2 | `Workshop 2 LUTE/Workshop 2 LUTE.html` ⚠ spazi | `data.js`, `lang.js`, `script.js` | `Workshop 2 LUTE/` |
| Workshop 3 | `Workshop 3 LUTE/Workshop 3 LUTE.html` ⚠ spazi | `lang.js`, `script.js` | `Workshop 3 LUTE/` |
| Simulazione | `Simularore WS 1/Simulation Game.html` | `lang.js`, `script.js` | `Simularore WS 1/` |
| Redirect root | `index.html` (refresh→`Home/index.html`) | — | `/` |

### 0.2 Sticky layout (top + z-index)

| App | Elemento | top | z-index |
|-----|----------|-----|---------|
| Tutte | `.logo-bar` (bianca) | 0 | 100 |
| Unione Europea / Workshop 2 | `.progress-bar` (4px gradiente) | 98px | 99 |
| Unione Europea / Workshop 2 | `.topbar` (banda blu, contatore «5/16» / «5/16») | 102px | 98 |
| Workshop 1 / Simulazione | `.hero` | 98px | 90 |
| Home | `.hero` | 151px | 90 |
| Home | `.site-header` (logo-bar + site-nav) | 0 | 100 |

> Home `top:151px` = logo-bar 97px + site-nav 54px

### 0.3 Hero — dimensioni (post-restyling compatto)

| App | Padding | Title font-size | Subtitle | Altezza target |
|-----|---------|-----------------|----------|----------------|
| Workshop / Simulazione | `18px 24px 20px` | `clamp(1.25rem, 2.2vw, 1.6rem)` | `0.95rem` | ~140-160px |
| Home | `18px 24px 20px` | `clamp(1.6rem, 3vw, 2.2rem)` (font-weight 800) | `0.95rem` | ~110-130px |

### 0.4 Bandiere

| Posizione | Dimensioni | Note |
|-----------|------------|------|
| Workshop/Sim hero (sinistra) | 44×66 px (mobile 38×57; <520px 32×48) | `.flag-it` con `flex-shrink:0; margin:0` |
| Home hero (sinistra, grid 2×2) | 32×48 px (mobile 28×42; <480px 24×36) | gap 8px (mobile 6, 5) |
| Home dropdown menu | 22×33 px | dentro `.dropdown-link__flag` wrapper |

### 0.5 Breakpoint mobile

```css
@media (max-width: 1024px), (pointer: coarse) { ... }
@media (max-width: 480px) { ... } /* Home solo */
@media (max-width: 520px) { ... } /* Workshop/Sim solo */
```

Su mobile (<1024px): hero diventa **non-sticky**, layout in colonna; ws-actions in riga orizzontale.

### 0.6 Sistema i18n

| Voce | Valore |
|------|--------|
| Lingue supportate | `['it', 'en', 'pl', 'de', 'lv']` (5) |
| LocalStorage key | `erasmus_lang` |
| Attributi DOM | `data-i18n` (testo) · `data-i18n-html` (HTML) · `data-i18n-aria` (aria-label) |
| Trigger ricarica slide UE | `window.reloadSlides()` (preserva idx + scroll mobile) |

### 0.7 Unione Europea — slide

| Voce | Valore |
|------|--------|
| Slide ID usati | 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 (no slide 4) |
| Tipi sezione | text, list, table, video, chips, tricolor, diagram |
| `SLIDE_IMG_SRCS` | mappa `{slideId: [src,...]}` lingua-indipendente |
| `SLIDE_CAPTIONS` | mappa `{lang: {slideId: [caption,...]}}` per-lingua |
| `window.SLIDES_DATA` | `{it, en, pl, de, lv}` |
| `window.SLIDES` | array attivo (sostituito al cambio lingua) |

### 0.8 UE — dati istituzionali (verificati)

| Istituzione | Presidente | Sede | Da |
|-------------|-----------|------|-----|
| Parlamento | Roberta Metsola (MT) | Strasburgo (uff.) · Bruxelles · Lussemburgo | gen 2022 |
| Consiglio Europeo | António Costa (PT) | Bruxelles | dic 2024 |
| Consiglio UE | Presidenza rotante TRIO 6 mesi | Bruxelles | — |
| Commissione | Ursula von der Leyen (DE) | Berlaymont, Bruxelles | — |
| CGUE | Koen Lenaerts (BE) | Lussemburgo | 2015 |
| BCE | Christine Lagarde (FR) | Francoforte | nov 2019 |
| Corte Conti | Tony Murphy (IE) | Lussemburgo | ott 2022 |

| Voce | Valore |
|------|--------|
| Stati membri | 27 (post-Brexit 2020) |
| Eurozona | 20/27 (Croazia 2023) |
| Popolazione | ~449,2M (Eurostat 2024) → testi: «quasi 450 milioni» |
| Trattato Lisbona | firmato 13 dic 2007, in vigore 1 dic 2009 |
| Sede ufficiale PE | Strasburgo (Protocollo 6 dei Trattati) — 12 plenarie/anno |
| PE — origini | 1952 (Assemblea CECA) → 1958 → 1962 (nome attuale) → 1979 (elezioni dirette) |

### 0.9 Workshop — pulsanti azione

| Pulsante | Stato | Link / Sotto-etichetta |
|----------|-------|------------------------|
| Simulazione | attivo | `../Simularore WS 1/Simulation Game.html` |
| Foto | disabilitato | «in arrivo» (chiave `ws_action_soon`) |
| Video | disabilitato | «in arrivo» |

Posizione: dentro `.hero` (top-right su desktop, riga orizzontale wrappabile su mobile). Stile: rgba bianco + backdrop-filter blur.

### 0.10 Home — sottomenù (sigla + bandiera + testo)

Ogni dropdown (Germany / Italy / Latvia / Poland) ha **6 voci**:
- 3 voci proprie del paese ospite con sua sigla+bandiera (Workshop 1/2/3)
- 3 voci degli altri paesi con loro sigla+bandiera (testo solo «Workshop»/«Warsztat»/«Seminārs»)

Classi: `.dropdown-link__code` (26px width, font-weight 700), `.dropdown-link__flag` (22×33), `.dropdown-link__text`.

### 0.11 Comandi rapidi

```bash
# Validazione JS dopo modifiche
node --check "C:/Users/Filippo/Desktop/Erasmus/Unione Europea/data.js"
node --check "C:/Users/Filippo/Desktop/Erasmus/<app>/lang.js"
```

### 0.12 Workshop 2 LUTE — slide

| Voce | Valore |
|------|--------|
| Slide ID usati | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 (tutti consecutivi) |
| Tipi sezione | text, list, table, tricolor (no chips/video/diagram) |
| Slide con immagine | solo slide 1 (`img/slide-01.png` — cittadini UE sotto l'ombrello) |
| Esercitazioni (banner gialli) | slide 2 (1a·1b), slide 7 (2a·2b·2c), slide 15 (3a·3b) |
| `SLIDE_IMG_SRCS` | `{1: ["img/slide-01.png"]}` |
| `window.SLIDES_DATA` | `{it, en, pl, de, lv}` — stesso schema di Unione Europea |

### 0.13 Home — menu hamburger mobile (2026-05-12)

| Voce | Valore |
|------|--------|
| Trigger | `@media (max-width: 1024px), (pointer: coarse)` |
| HTML | `<button id="navHamburger" aria-controls="siteNavList">` con `aria-haspopup` su dropdown |
| Classe nav aperto | `.site-nav.is-mobile-open` (toggla `display: flex` su `.site-nav__list`) |
| Animazione bars→×| 3 bar che diventano croce quando `aria-expanded="true"` |
| Separatori verticali | `border-bottom: 1px solid var(--border)` su `.site-nav__list > li` |
| Dropdown su mobile | `position: static`, in flusso, indent `padding-left: 38px` (sfondo `--surface-alt`) |
| Chiusura automatica | click su link reale (non toggler con `aria-haspopup`), ESC, click fuori, resize layout |
| i18n | chiavi `nav_menu_label` e `nav_menu_aria` in 5 lingue |

### 0.14 Vincoli operativi

- `data.js` >40k token → leggere con `offset/limit`, MAI integrale
- File HTML con spazi nel nome → quotare i path nei comandi shell
- Modifiche multilingue: SEMPRE applicare in tutte e 5 le lingue
- Polacco/lettone in `data.js` usano `\uXXXX` → OK lasciare
- Tedesco usa caratteri diretti (ü, ö, ß) → OK
- Niente emoji nei file generati salvo richiesta esplicita
- Quando aggiungo immagine, **leggerla** per verificare contenuto vs didascalia
- Non posso scaricare file → fornire link Wikimedia all'utente per download manuale
- Cartella `Workshop 1 LUTE/` e file omonimo NON rinominati (rompe `href`); LUTE rimosso solo dal testo visibile

---

## 1. Contesto generale

- **Cliente**: utente italiano, comunica in italiano, è anziano e fa riferimento a sé come tale.
- **Pubblico**: il sito sarà **presentato all'Unione Europea** → tono formale, accuratezza fattuale obbligatoria, attenzione diplomatica al lessico.
- **Linee guida vincolanti**: `C:/Users/Filippo/Desktop/Erasmus/LINEE-GUIDA.md` (palette CSS, font di sistema, accessibilità per anziani, ≥18px corpo, focus-visible blu 3px, border-radius 14px).
- **Stile di interazione preferito**:
  - L'utente si fida di me («tu sei più bravo di me, decidi tu»). Quando chiede «cosa mi suggerisci?» rispondere con raccomandazione netta + motivazione.
  - Prima di cambiamenti complessi conferma sempre la comprensione («dimmi se hai capito»).
  - Niente emoji nei file generati salvo richiesta esplicita; OK negli output di chat per chiarezza.

---

## 2. Struttura cartelle

```
C:/Users/Filippo/Desktop/Erasmus/
├── index.html                    ← redirect a Home/index.html
├── LINEE-GUIDA.md                ← design system del progetto
├── CLAUDE.md                     ← QUESTO FILE
├── image-1776928171315.jpg       ← logo «Co-funded by EU»
├── image-1776928198470.png       ← logo ECBL
├── Home/                         ← hub di navigazione
│   ├── index.html                (con header fisso, dropdown nav per paesi)
│   ├── style.css
│   ├── lang.js                   (i18n condiviso)
│   └── script.js
├── Unione Europea/               ← APP PRINCIPALE in lavorazione
│   ├── Unione Europea.html       (NON «index.html»)
│   ├── data.js                   (contenuti 16 slide × 5 lingue)
│   ├── lang.js                   (motore i18n)
│   ├── script.js                 (rendering slide)
│   ├── style.css
│   └── img/                      (immagini slide)
├── Workshop 1 LUTE/              ← workshop italiano #1 (testo + timeline)
│   ├── Workshop LUTE Modulo 2 ITA.html
│   └── style.css, script.js, lang.js
├── Workshop 2 LUTE/              ← workshop italiano #2 (slide-based, come UE)
│   ├── Workshop 2 LUTE.html      (16 slide × 5 lingue)
│   ├── data.js                   (contenuti slide)
│   ├── style.css, script.js, lang.js
│   └── img/                      (slide-01.png — cittadini UE)
├── Workshop 3 LUTE/              ← workshop italiano #3 (testo+timeline, come WS1) — COMPLETO (lezione 75 min + Simulation Game)
│   ├── Workshop 3 LUTE.html      (Bilancio UE e impatto sui cittadini + Simulation Game)
│   └── style.css, script.js, lang.js
├── Esercitazioni WS1/            ← 3 quiz interattivi del Workshop 1 (composizione, compiti, vero/falso)
│   ├── Esercitazioni WS1.html    (tab + 3 quiz)
│   └── style.css, script.js, lang.js
├── Europa/                       ← cartella per download immagini (gestita dall'utente, NON in repo)
└── Simularore WS 1/              ← simulatore (separato)
```

---

## 3. App «Unione Europea» — architettura

### File `data.js`
- `window.SLIDES_DATA = { it, en, pl, de, lv }` — array slide per lingua
- `window.SLIDES` — lingua attiva (sostituita da `lang.js` al cambio lingua)
- `SLIDE_IMG_SRCS` — mappa **lingua-indipendente** `{ slideId: [src, ...] }`
- `SLIDE_CAPTIONS` — mappa **per-lingua** `{ lang: { slideId: [caption, ...] } }`
- Loop finale (riga ~803) applica immagini+didascalie in tutte le lingue
- **Slide ID usati**: 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 (la 4 non esiste)
- `makeChips(lang)` → array chip Stati membri (flag emoji + nome + anno adesione)
- `LANG_CODES = ['it', 'en', 'pl', 'de', 'lv']`

### Tipi di sezione in `script.js` (`renderSection`)
- `text` — `body` HTML
- `list` — `items[]`
- `table` — `head[]` + `rows[][]`
- `video` — `src` (iframe YouTube) + `title`
- `chips` — `items[]` con `{text, sub}`
- `tricolor` — `blocks[]` con `{color, label}`
- `diagram` — `labels{}` (triangolo istituzionale UE, 100% HTML/CSS, lingua-indipendente)

### Struttura card
- `top` (title + subtitle obbligatorio se presente)
- `banner` (opzionale, banda colorata sotto il titolo)
- `meta` (array `[chiave, valore]` → meta-pills)
- `body` → `card__text` (sections) + `card__images` (aside con immagini)

### Layout CSS principale (in alto, in ordine)
1. `.logo-bar` (bianca, sticky top:0, z-index:100, ~98px alta)
2. `.progress-bar` (4px gradiente blu→oro, sticky top:98px, z-index:99)
3. `.topbar` (banda blu accent, sticky **top:102px, z-index:98**) — titolo + contatore «5/16»
4. `.viewer` (desktop) o `.mobile-scroll` (mobile)

### Frecce navigazione
- `.nav-btn` desktop: `position: fixed`, top:50%, 64×64px circolari, left:24px / right:24px
- Su mobile sono nascoste (le card scorrono verticalmente)

### Breakpoint mobile
- `@media (max-width: 1024px), (pointer: coarse)` → mobile-scroll, topbar nascosta, viewer nascosto

### Sistema i18n (`lang.js`)
- Attributi DOM: `data-i18n` (testo), `data-i18n-html` (HTML), `data-i18n-aria` (aria-label)
- Lingua salvata in `localStorage.erasmus_lang`
- Cambio lingua → `window.reloadSlides()` (preserva indice slide corrente, ripristina scroll mobile)

---

## 4. Stato istituzioni UE (verificato — aggiornare se cambiano)

| Istituzione | Presidente attuale | Sede |
|-------------|--------------------|------|
| Parlamento Europeo | Roberta Metsola (Malta) | Strasburgo (uff.) · Bruxelles · Lussemburgo |
| Consiglio Europeo | António Costa (Portogallo) — da dic. 2024 | Bruxelles |
| Consiglio dell'UE | Presidenza rotante TRIO 6 mesi | Bruxelles |
| Commissione Europea | Ursula von der Leyen (Germania) | Berlaymont, Bruxelles |
| Corte di Giustizia UE | Koen Lenaerts (Belgio) — dal 2015 | Lussemburgo |
| Banca Centrale Europea | Christine Lagarde (Francia) — da nov. 2019 | Francoforte |
| Corte dei Conti Europea | Tony Murphy (Irlanda) — da ott. 2022 | Lussemburgo |

- **Stati membri**: 27 (post-Brexit 2020)
- **Eurozona**: 20/27 (Croazia entrata 2023)
- **Popolazione UE**: ~449,2 milioni (Eurostat 2024) → testi dicono «quasi 450 milioni»
- **Trattato di Lisbona**: firmato 13 dic. 2007, in vigore dal 1° dic. 2009
- **Strasburgo = sede ufficiale del PE** per Protocollo 6 dei Trattati (12 sessioni plenarie/anno); Bruxelles = sessioni aggiuntive + commissioni; Lussemburgo = Segretariato Generale
- **PE — origini**: 1952 Assemblea Comune CECA → 1958 Assemblea Parlamentare → **1962 nome attuale** → **1979 prime elezioni dirette**

---

## 5. Workflow per modifiche

### Modifiche multilingue
- **Sempre applicare le modifiche in tutte e 5 le lingue** (it, en, pl, de, lv)
- Polacco e lettone usano `\uXXXX` per caratteri Unicode in `data.js` (è OK lasciarlo così)
- Tedesco usa caratteri diretti (ü, ö, ß) — anche OK
- Validare con: `node --check "C:/Users/Filippo/Desktop/Erasmus/Unione Europea/data.js"`

### Download immagini
- **Non posso scaricare file** in questa sessione → fornire link Wikimedia diretti all'utente
- L'utente scarica manualmente nella cartella `Europa/` (poi sposto io in `Unione Europea/img/`)
- Preferire licenze: PD, CC0, CC BY, CC BY-SA, GFDL

### Conferma immagine vs didascalia
- Quando aggiungo/cambio un'immagine, **leggerla** (Read tool su `.jpg/.png`) per verificare che il contenuto corrisponda alla didascalia
- Esempio passato: `eu-values.jpg` mostrava bandiere UE, non bandiere Stati membri → didascalia errata, corretta

---

## 5bis. Roadmap / Lavori futuri (aggiornato 2026-05-29)

Stato attuale: online su GitHub Pages → `https://pxh2407.github.io/Erasmus/` (repo `pxh2407/Erasmus`, deve contenere `.nojekyll`; i file vanno nella ROOT, NON in sottocartella).

**Da fare in futuro:**
- **Workshop degli altri 3 Paesi partner** — in attesa che inviino i contenuti:
  - 🇩🇪 Germania (Seniorenbüro Hamburg)
  - 🇱🇻 Lettonia (Preiļu novada Izglītības pārvalde)
  - 🇵🇱 Polonia (Fundacja "Aktywni XXI" — capofila)
  - Nella Home i dropdown di questi Paesi hanno già le voci Workshop predisposte (ora disabilitate)
- **Contenuti multimediali (foto e video)** — da inserire nei workshop:
  - Nel Workshop 1 i pulsanti «Foto» e «Video» esistono già, disabilitati con etichetta «in arrivo» (chiavi `ws_action_photos`, `ws_action_videos`, `ws_action_soon`)
  - Valutare gallerie immagini e/o embed video (YouTube) coerenti con lo stile esistente

## 6. Cronologia decisioni importanti

### Sessione 2026-06-14 (j) — Home: card partner con loghi, temi affidati e layout 1 colonna

- Le 4 card «The Four Partners» nella Home ora mostrano: **logo dell'organizzazione** (box bianco in alto) + **bandiera piccola** a fianco (`.partner-card__head` / `.partner-card__logo` / `.partner-card__flag` ridotta a 44×30), e la **descrizione = tema affidato** a ciascun partner (titolo `.partner-card__theme` + elenco `.partner-card__topics` di 4 punti). Sostituite le vecchie descrizioni «ruolo» (le chiavi `partner_*_role` ora contengono il **titolo del tema**; aggiunte 80 chiavi `partner_*_t1..t4` = 4 punti × 4 partner × 5 lingue). Fonte: `Desktop/Loghi sito/Descrizione.docx`.
- **Temi**: Polonia (Aktywni XXI) = «Il futuro dell'UE»; Italia (LUTE) = «Le istituzioni e il funzionamento dell'UE»; Germania (Seniorenbüro) = «L'UE: dall'idea alla realtà»; Lettonia (Preiļi) = «L'UE e la vita quotidiana». Tradotti in 5 lingue.
- **Refusi corretti** dal docx: «dall'idea all'IMMOBILIARE» → «dall'idea alla realtà»; «UNIVERSITA'PERLA LA» → reso come titolo corretto.
- **Layout**: `.partners-grid` da 2 colonne → **1 colonna** (una card per riga), su richiesta utente.
- **Loghi** in `Home/loghi/` (`polonia.jpg`, `italia.png`, `germania.jpg`, `lettonia.png`); il logo Germania (2500px) ridimensionato a 800px (PIL). Cache-bust Home: `style.css?v=2`, `lang.js?v=2`. Verificato in preview (4 loghi caricati, 1 colonna, 0 errori).
- **Riga «affidato a» (2026-06-14)**: aggiunta in fondo a ogni card la riga «Questo argomento è stato affidato a: **[ente], [paese]**» (etichetta `partner_assigned` tradotta in 5 lingue; classe `.partner-card__assigned`). Il **nome esteso dell'ente + paese** è in **rosso #EE0000** (`.partner-card__assigned-org`, come evidenziato nel docx) ma in **capitalizzazione normale** (non maiuscolo): «LUTE Libera Università per la Terza Età, Italia», «Fondazione Aktywni XXI, Polonia», «Seniorenbüro Hamburg e.V., Germania», «Consiglio Istruzionale Municipale di Preiļi, Lettonia». Il nome ente è fisso, il paese usa `country_*` già tradotto. Cache-bust → `style.css?v=3`, `lang.js?v=3`.

### Sessione 2026-06-14 (i) — Home: voci cross-country agganciate al WS1 di ogni paese

- Nei 4 menu della Home, le voci cross-country (il «Workshop» generico di ciascun ALTRO paese) ora puntano al **Workshop 1** di quel paese, non più alla pagina `Partner` «in arrivo». Agganciate 9 voci: DE→`Workshop 1 DE`, LV→`Workshop 1 LV`, PL→`Workshop 1 PL` (IT→`Workshop 1 LUTE` era già fatto). Tolto `--soon`. Via 3 Edit `replace_all` (un blocco per paese, ciascuno presente in 3 menu).
- **Restano `--soon`** (corretto): **WS3 Germania** (workshop tedesco mai fornito — lo zip aveva di nuovo le foto del WS3 italiano), **Foto LV** e **Foto PL** (gallerie non pronte). Verificato in preview gli href di tutti e 4 i dropdown.

### Sessione 2026-06-14 (h) — Fix pulsante WhatsApp WS3 PL (effetto collaterale dello script virgolette)

- Il pulsante WhatsApp nel footer di **WS3 PL** mostrava testo alterato («Contact", footer_credit: "LUTE MILAZZO…»). **Causa**: lo script Python che corresse le virgolette in `Workshop 3 PL/lang.js` (sessione f) operava riga-per-riga ed escapava TUTTE le `"` interne; sulla riga che conteneva **due** chiavi (`footer_wa: "…", footer_credit: "…"`) ha trasformato le virgolette di separazione in `\"`, fondendo le due chiavi in un unico valore `footer_wa` e perdendo `footer_credit`. **Fix**: ripristinate le due chiavi separate in tutte e 5 le lingue (sostituito `\", footer_credit: \"` → `", footer_credit: "`). Verificato in preview: pulsante = «Contact», credito regolare. Solo WS3 PL era interessato (gli altri lang.js non hanno subito quello script). **Lezione**: lo script di escape virgolette NON va usato su righe con più proprietà JS; preferire Edit mirati o caporali «».
- **⚠ Cache busting**: dopo il fix in locale, su GitHub Pages l'errore PERMANEVA perché l'HTML includeva `lang.js?v=1` invariato → browser/CDN servivano il vecchio lang.js dalla cache. Risolto incrementando a **`lang.js?v=2`** e **`style.css?v=2`** in `Workshop 3 PL.html`. **Regola** (cfr. [[project_imposta_soggiorno]]): a ogni modifica di lang.js/style.css di una pagina già pubblicata, **incrementare il `?v=N`** nell'HTML, altrimenti la cache nasconde la correzione.

### Sessione 2026-06-14 (g) — Workshop LETTONIA (in corso, uno alla volta)

- La Lettonia ha inviato 3 workshop **«European ABC»** in `Desktop/WS Lettonia/` (3 zip `NR_1/NR_2/NR_3`, ciascuno con docx in **EN + LV**). Inserimento **uno alla volta** su richiesta utente.
- **✅ WS1 LV — «The EU's Four Freedoms» (Le quattro libertà dell'UE)**, autore **Guntars Ratenieks**. Sessione 1: libera circolazione di persone/merci/servizi/capitali; gioco di simulazione «Life in Europe: How Do EU Freedoms Help Me?», 4 situazioni di ruolo, ~80–100 min, senior 60+, 4 gruppi. Creata cartella **`Workshop 1 LV/`** (clone CSS/JS da `Workshop 1 DE`, lang.js col **motore bandierine**, materiali EN+LV in PDF). Sezioni: about, obiettivi (1 principale + 2 specifici), target, metodi (6), **le 4 libertà** (`.wiw-grid` 2-col), agenda (4 fasi `.timeline`), **gioco di simulazione** (4 situazioni `.acc-grid`/`.acc-wave`), esiti attesi, download (1 piano, pulsanti EN+LV). Home: dropdown **Latvia → Workshop 1** attivato (rimosso `--soon`). Verificato in preview (bandiera LV 3 bande, 5 bandierine lingua, 0 chiavi non tradotte).
- **Bandiera lettone** (`.flag-lv`): 3 bande orizzontali rosso scuro (#9e3039) / bianco / rosso scuro, proporzioni **2:1:2** (banda bianca più sottile). CSS in coda a `Workshop 1 LV/style.css`.
- **Nota lingue file**: i materiali LV esistono in **EN + LV** (a differenza dei PL solo-EN) → `dl_note` adattata, pulsanti download EN+LV.
- **✅ WS2 LV — «International Cooperation and the EU's Role in the World»**, autrice **Nora Šņepste**, 120–150 min, 12–25 persone, senior. Sessione 2: cooperazione internazionale e ruolo UE nel mondo. Cartella **`Workshop 2 LV/`** (CSS/JS clonati da `Workshop 1 LV`, già con `.flag-lv`; lang.js motore bandierine; materiali EN+LV PDF). Sezioni: about, obiettivi (3 gen + 4 spec), target, metodi (4), agenda (5 step `.timeline__step`), **direzioni del futuro UE** (`.wiw-grid` 5 schede: sicurezza/difesa, autonomia strategica, green deal, digitale, allargamento), **UE come gestore di crisi** (lista 5 crisi), **5 priorità cooperazione allo sviluppo** (`.wiw-grid` 3-col: People/Prosperity/Planet/Peace/Partnerships), conclusione (raccomandazioni senior, `sect--callout`), download EN+LV. Home: dropdown **Latvia → Workshop 2** attivato. Verificato in preview (timeline corretta, bandiera, 5 lingue, 0 chiavi non tradotte).
- **✅ WS3 LV — «Regional Policy and EU Funds»** (Politica regionale e fondi UE), autrice **Nora Šņepste**, 120–150 min, 12–25 persone, senior. Sessione 3: politica di coesione e fondi UE. Cartella **`Workshop 3 LV/`** (CSS/JS da `Workshop 1 LV`; lang.js motore bandierine). Sezioni: about, obiettivi (3+4), target, metodi (5, incl. «Living Library»), agenda (5 step), **i 4 fondi UE** (`.wiw-grid`: ERDF/FESR, CF/FC, ESF+/FSE+, JTF; lead con €392 mld 2021–2027), **cosa sostiene la coesione** (lista 6 voci), **priorità chiave + focus territoriale** (`.wiw-grid` 4 schede: 3 priorità / focus territoriale / coesione e solidarietà / base giuridica artt. 174–178 TFUE), conclusione (callout), download. **Materiali (3)**: piano sessione EN+LV (PDF) + **presentazione EN** (pptx `Fully_Translated_Presentation_EN.pptx` convertita in PDF via PowerPoint COM `SaveAs(...,32)`). Home: dropdown **Latvia → Workshop 3** attivato. Verificato in preview (timeline ok, 5 lingue, 0 chiavi mancanti).
- **✅ LETTONIA COMPLETATA**: tutti e 3 i workshop LV inseriti, pubblicati e collegati nella Home. Restano su `Partner` solo: **DE WS3** e le voci «Foto» di DE/PL/LV (gallerie non ancora pronte).
- **🐛 FIX timeline (linea verticale che tagliava il testo)**: la sezione agenda di **WS1 LV** e **WS3 PL** era stata scritta con `<li class="timeline__item"><div class="timeline__content">…` — classi NON previste dal CSS, quindi senza il `padding-left` che scosta il contenuto dalla linea verticale (`.timeline::before` a `left:28px`) → la linea tagliava il testo. **Struttura corretta** (richiesta dal CSS clonato da WS1 DE/LUTE): `<li class="timeline__step"><div class="timeline__head"><span class="timeline__num">N</span><span class="timeline__time" data-i18n="agN_time">…</span></div><div class="timeline__body"><h4 data-i18n="agN_title">…</h4><p data-i18n="agN_text">…</p></div></li>`. WS1 e WS2 PL erano già corretti. Per il LV ho anche rimosso il prefisso «N · » dai titoli `agN_title` (il numero sta nel cerchio `.timeline__num`). **Regola**: per le timeline usare SEMPRE `timeline__step`/`__head`/`__num`/`__time`/`__body`, mai `timeline__item`/`__content`.

### Sessione 2026-06-14 (f) — Workshop POLONIA (3 pagine interattive, 5 lingue)

- La Polonia (capofila, **Fundacja „Aktywni XXI"**) ha inviato i materiali dei suoi 3 workshop (`Desktop/WS Polonia/`, file .docx). Su scelta utente: **3 pagine interattive complete** come i workshop tedeschi, NON semplici download. Create 3 cartelle: **`Workshop 1 PL/`**, **`Workshop 2 PL/`**, **`Workshop 3 PL/`**, ognuna con `Workshop N PL.html` + `style.css`/`script.js` (clonati da **Workshop 1 DE**) + `lang.js` (5 lingue) + `materiali/` (docx + pdf).
  - **WS1 PL** — «Europe at a Crossroads», autrice **Barbara Janic**, dramma/role-play, 120–150 min, 12–25 persone. Sezioni: about, obiettivi, target, metodi, agenda (5 step `.timeline`), **6 Role Cards** (`.acc-grid`/`.acc-wave`), **5 Problem Cards** (`.wiw-grid` 3-col), download (guida + carte). Materiali PDF: Role Cards, Problem Cards, Module.
  - **WS2 PL** — «Should Poland Adopt the Euro?», autrice **Danuta Sadownik**, dibattito Oxford sull'euro, 120 min, 12–20 persone. Sezione **mozione** (box con bordo accent), spiegazione dibattito Oxford (`.wiw-grid` 4 schede), agenda 4 step. Materiali PDF: Module, Oxford Debate Rules, Participant Card, Evaluation Form.
  - **WS3 PL** — «Should the EU Create a Common Army?» (Europe Under Pressure), autrice **Maja Huminiłowicz**, gioco decisionale (no role-play) sulla difesa UE, 135 min, 10–25 persone. Sezioni: about, obiettivi (3+5), target, metodi (6), agenda (6 step), **gioco decisionale** = 5 round (`.acc-grid`/`.acc-wave`, marcati R1–R5, ciascuno scenario + 3 opzioni A/B/C) + 3 domande di discussione (`.wiw-grid`). Materiali PDF: Workshop Scenario, Facilitator Notes, Game Cards.
- **Bandiera polacca** (`.flag-pl`): 2 bande orizzontali — bianco (#FFFFFF) sopra + rosso (#DC143C) sotto; CSS in coda ai 3 `style.css` (44×66px; mobile 38×57; <480px 32×48).
- **⚠ TRAPPOLA VIRGOLETTE nei lang.js**: i file PL contengono molte `"` ASCII *dentro* stringhe JS delimitate da `"` (mozioni, titoli «Europe Under Pressure», caporali polacche/tedesche `„…"`). Questo **rompe `node --check`**. Soluzione applicata: escape `\"` per le virgolette interne, o entità HTML `&bdquo;`/`&rdquo;` nelle chiavi `data-i18n-html` (es. `hero_authors`). Per WS3 ho usato uno script Python che fa l'escape automatico delle `"` non-escaped riga per riga (poi rimosso). **Se si rigenera un lang.js con virgolette: preferire le caporali «» o le entità HTML, MAI `"` ASCII grezze dentro stringhe `"`.**
- **Nota lingue file**: i PDF scaricabili sono **solo in EN** (originali del team polacco); chiave `dl_note` lo chiarisce, la pagina è tradotta in tutte e 5 le lingue (come per i workshop DE).
- **🐛 FIX selettore lingua (2026-06-14)**: i 3 lang.js PL erano stati scritti con un motore i18n **testuale** (sigle `IT/EN/PL/DE/LV` via `btn.textContent`), mentre gli altri WS usano un motore con **bandierine SVG**. Sostituito il motore (da `var LANGS = {...svg...}` fino a `}());`) con quello **identico a `Workshop 1 DE/lang.js`** (bandierine desktop in fila + selettore mobile a discesa `.lang-mobile-btn`/`.lang-dropdown`). Gli stili CSS erano già presenti (clonati da WS1 DE). **Regola**: per nuove pagine clonare SEMPRE il motore lang.js da `Workshop 1 DE` (ha le bandierine), non scriverne uno testuale.
- **Home**: dropdown **Poland** → Workshop 1/2/3 ora puntano alle pagine reali (`../Workshop N PL/Workshop N PL.html`, rimosso `--soon`). Restano su `Partner`: DE WS3, LV (tutti), e le voci «Foto» PL/DE-non-IT.
- Tutti e 3 i `lang.js` validati `node --check`. **Ancora da fare** (futuro): galleria foto PL (servono VERE foto dei workshop), e i workshop della **Lettonia**.
- **⚠️⚠️ ATTENZIONE GRAVE — passaporti (cartella `Photos-3-001`)**: la cartella `Photos-3-001` era stata inserita per errore in WS Polonia e le sue immagini erano finite in `Galleria PL/img/` (`p-1.jpg`…`p-8.jpg`). **NON sono foto di workshop: sono SCANSIONI DI PASSAPORTI** (Federazione Russa e Lituania) con dati personali completi di persone reali (nomi, date di nascita, n. documento, fototessere). **NON DEVONO MAI essere pubblicate online** (privacy/GDPR). **Già sistemato il 2026-06-14**: le 8 scansioni sono state **spostate** in `C:\Users\Filippo\Desktop\Photos-3-001 (DATI PERSONALI - passaporti, non pubblicare)` (FUORI dal sito), e la cartella `Galleria PL/` è stata **rimossa** dal progetto. `Galleria PL/` resta in `.gitignore` come protezione (regola inerte ma innocua). La voce «Foto» PL nella Home resta su `Partner` con `--soon`. Se in futuro arrivano VERE foto dei workshop polacchi: creare `Galleria PL/` (clone di `Galleria DE`), mettere le foto reali, attivare il link nella Home, e togliere la riga dal `.gitignore`.

### Sessione 2026-06-14 (e) — Pulsante WhatsApp nel footer (tutte le pagine)

- Aggiunto un **pulsante verde WhatsApp** nel footer di **tutte le 16 pagine** (prima di `</footer>`), per farsi contattare dai partner. Link **`whatsapp://send?phone=393880775449&amp;text=...`** (apre DIRETTAMENTE l'app, come la pagina Partner; scelto rispetto a `wa.me` che su PC apriva WhatsApp Web — preferenza utente, cfr. cronologia). Messaggio precompilato EN «Hello, I am writing about the Erasmus+ ECBL website». `target="_blank"`, stile **inline** (#25D366) → nessuna modifica ai 12 style.css separati. ⚠ Su un PC SENZA app WhatsApp il link `whatsapp://` può non aprirsi (sui telefoni funziona sempre).
- Etichetta `footer_wa` tradotta in 5 lingue — **IT «Contatti», EN «Contact», PL «Kontakt», DE «Kontakt», LV «Kontakti»** (semplificata su richiesta utente da «Contatta il referente»), inserita in tutti i 16 lang.js **prima di `footer_credit`** (lingua rilevata dal valore di footer_credit). 80 voci. Tutti validati `node --check`.
- Numero: **+39 388 077 5449**. Per cambiarlo: sostituire `393880775449` negli HTML.

### Sessione 2026-06-14 (d) — Galleria fotografica Germania

- Da `Desktop/Foto WS1 Germania/` (7 foto) creata una **galleria tedesca**: nuova cartella **`Galleria DE/`** (clone di `Galleria IT`: `style.css`+`script.js`+`lang.js`+`img/`). Foto ottimizzate 1400px → `img/ws1-1…7.jpg`.
- `lang.js` adattato (5 lingue): hero «Germania», `ws1_title` = «L'Unione Europea: un viaggio nel tempo», sottotitolo «Workshop 1 tedesco», flag_aria/footer tedeschi. CSS `.flag-de` aggiunto a `Galleria DE/style.css`. Una sola sezione WS1 (7 foto) — estendibile a WS2/WS3 quando arriveranno foto tedesche.
- Home: voce **Germania → Foto** ora → `../Galleria DE/Galleria DE.html` (tolta `--soon`). Verificato: 7 foto OK, lightbox OK, link Home 200.
- NB: lo zip `Desktop/WS3 Germania.zip` conteneva per errore le foto del WS3 **italiano** (non materiali tedeschi) → in attesa del vero WS3 Germania.

### Sessione 2026-06-14 (b) — Download materiali: aprire invece di scaricare

- Nei pulsanti `.dl-btn` di **Workshop 1 DE** e **Workshop 2 DE** rimosso l'attributo `download` (forzava il salvataggio) e aggiunto `target="_blank" rel="noopener"`: i file si **aprono in una nuova scheda** (visualizzazione + stampa). I PDF/immagini si vedono nel browser; .docx/.pptx no.
- **(c) WS2 materiali convertiti in PDF**: poiché i materiali WS2 erano .docx/.pptx (il browser li scaricava), sono stati **convertiti in PDF** via COM Word/PowerPoint (Office 2010, `win32com`; Word `ExportAsFixedFormat(dst,17)`, PowerPoint `SaveAs(dst,32)`). Originali .docx/.pptx **rimossi** da `materiali/` (backup nello zip su Desktop). Link HTML aggiornati a `.pdf`. La cartella `materiali` è scesa da ~58 MB a **~16 MB** (le pptx da 21 MB → pdf ~0,7 MB). Ora tutti i materiali WS2 si aprono in anteprima come WS1 (resta solo `quote-cards-EN.png`, comunque visualizzabile).

### Sessione 2026-06-14 — Workshop 2 GERMANIA (pagina interattiva, 5 lingue)

- La Germania ha inviato il **WS2 «Power for you! The Treaties of the EU»** (`Desktop/WS2 Germania.zip`, 58 MB, 16 file DE+EN): PowerPoint (~21 MB l'una), tabellone di gioco (PDF), carte azione/conoscenza/regalo, buste, quote cards, scenario. È un workshop sui **trattati UE** con **quiz «Treaty or Fiction?»** + **gioco da tavolo**.
- Stessa impostazione del WS1 Germania (scelta utente «A»): nuova cartella **`Workshop 2 DE/`** con `Workshop 2 DE.html` + `style.css`/`script.js` (clonati da Workshop 1 DE) + `lang.js` (**97 chiavi ×5 = 485 voci**) + `materiali/` (16 file, ~58 MB).
- Sezioni: hero (bandiera DE), presentazione, svolgimento (5 step: quiz→input1→gioco→input2→discussione), **linea del tempo dei 7 trattati** (`.eu-tl`, Maastricht+Lisbona evidenziati), diritto primario/secondario + TUE/TFUE/Carta (`.bolk-grid` 5 schede), principi e maggioranze (5 schede), il gioco (3 schede + nota quiz), **materiali da scaricare** (`.dl-grid`, 8 voci con descrizione, gruppi conduttori/gioco).
- Home: voce **Germania → Workshop 2** ora → `../Workshop 2 DE/Workshop 2 DE.html` (tolta `--soon`). Restano su `Partner`: DE WS3, e LV/PL.
- Verificato in 5 lingue (7 trattati, 5+5+3 schede, 8 download, file 200 OK). NB: per le pagine DE riusare SEMPRE `style.css` di `Workshop 1 DE` (ha `.eu-tl/.bolk-grid/.dl-grid/.flag-de`) e il motore lang.js da lì.

### Sessione 2026-06-13 (k) — Simulazione WS3 spostata in pagina dedicata

- La simulazione del **Workshop 3 ITA** («Costruiamo il Bilancio UE») era **dentro** la pagina WS3 (sezione `#simulation-game`); spostata in una **pagina separata** come WS1/WS2.
- Nuova cartella **`Simularore WS 3/`** con `Simulation Game 3.html` + `style.css` + `script.js` + `lang.js` (clonati da WS3 LUTE; nel lang.js della pagina sim adattati `hero_eyebrow`→«Workshop 3 · Simulazione» e `page_title`, in 5 lingue). Contenuto: 3 attività (brainstorming, costruzione bilancio, mini-gioco fondi) + 21 schede progetto (7 rubriche) + copione di negoziazione + conclusione. Hero: bandiera IT, titolo `sg_title`, coordinatrici/tutor, pill (~80 min · 20–25 · Adulti/Senior).
- **WS3 LUTE**: rimossa la sezione `#simulation-game`; aggiunto il pulsante **«Simulazione»** nella nav `.ws-actions` (prima di «Esercitazioni»), → `../Simularore WS 3/Simulation Game 3.html`. Chiave `ws_action_simulation` aggiunta al lang.js di WS3 (5 lingue). Le chiavi `sg_*` restano nel lang.js di WS3 (ora inutilizzate lì, usate dalla pagina sim). La sezione «Sintesi» resta in WS3.
- ⚠ Lo script di build usava `%s` su una stringa con `%` (favicon/`width:34%`) → errore; la pagina HTML è stata poi scritta direttamente. Per future pagine: NON usare `%`-formatting su HTML con data-URI/percentuali.

### Sessione 2026-06-13 (f) — Workshop 1 GERMANIA (pagina interattiva, 5 lingue)

- La Germania ha inviato il **WS1 «The European Union – a Journey through Time»** (zip su `Desktop/Workshop Germania.zip`, 64 MB, 48 file DE+EN: script, linea del tempo, 21 carte-evento, 8 tappe, bandiere/adesioni, «Who is Who», istituzioni, mappa, 2 memory game ~15 MB l'uno). Autori: Barbara Petersen, Renate Kronemann, Sabine Perisic, Achim Kolbe-Dierks.
- Su scelta utente è stata creata una **pagina interattiva completa** (non semplici download): nuova cartella **`Workshop 1 DE/`** con `Workshop 1 DE.html` + `style.css` (clonato da WS1 LUTE + CSS nuovi: `.flag-de`, `.eu-tl`, `.acc-grid`, `.wiw-grid`) + `script.js` (copiato) + `lang.js` (motore clonato da WS1 LUTE + **128 chiavi × 5 lingue = 640 voci**).
- Contenuti: hero (bandiera tedesca, autori, pill 90–120 min/fino a 19/Over 50), obiettivi, svolgimento (6 attività), **linea del tempo interattiva** (8 tappe `--m` evidenziate + 21 eventi = 29 voci, anno hard-coded nell'HTML), 8 ondate di adesione, «Chi è chi» (3 schede). Tutto tradotto IT/EN/PL/DE/LV; validato `node --check`.
- Home: la voce **Germania → Workshop 1** ora punta a `../Workshop 1 DE/Workshop 1 DE.html` (tolta la classe `--soon`). DE WS2/WS3 e LV/PL restano sulla pagina `Partner`.
- **Sezione «Materiali da scaricare e giochi» aggiunta** (2026-06-13 g): cartella `Workshop 1 DE/materiali/` con **21 file (~62 MB)** rinominati ASCII (script, carte-evento con/senza anno, cronologia/soluzione, tappe, bandiere/adesioni, istituzioni, chi-è-chi, mappa + **4 memory PDF**). HTML: sezione `#downloads` con `.dl-grid/.dl-card/.dl-btn`, 12 schede in 4 gruppi (conduttori / attività timeline / memory / illustrativi), pulsanti DE·EN per file. 18 chiavi `dl_*`/`sec_downloads` ×5 lingue. NB: compressione memory inutile (immagini già ottimizzate: 14.8→14.5 MB con pypdf); tenuti a piena qualità per la stampa.
- **Resa più comprensibile (2026-06-13 i)**: ogni scheda download ha ora una **descrizione esplicativa** (chiave `dl_*_d`, 12×5 lingue), `dl_lead` riscritto per spiegare i pulsanti, layout schede a colonna (`.dl-card` flex-column) + freccia `↓` sui `.dl-btn` (CSS `::before`).
- **Nota lingue file (2026-06-13 j)**: aggiunta `dl_note` (5 lingue, `.dl-note`) che chiarisce che i **file scaricabili esistono solo in DE/EN** (originali della Germania), mentre la pagina è tradotta in tutte le lingue. Scelta utente: NON tradurre i documenti (restano gli originali DE/EN). Cache-bust → `style.css?v=3`, `lang.js?v=3`.
- ⚠ **Giochi/esercizi/simulazioni nel pacchetto DE**: ci sono 2 GIOCHI (memory bandiere/monumenti) e un'ATTIVITÀ cartacea (costruzione timeline con carte-evento: «senza anno»=compito, «con anno»/cronologia=soluzione). NESSUNA simulazione (non è un gioco di ruolo). I 48 file originali restano in `Desktop/Workshop Germania.zip`.

### Sessione 2026-06-13 (e) — Footer: «LUTE» → «LUTE MILAZZO»

- Nel **credito del footer** (`footer_credit`) «LUTE» è diventato «**LUTE MILAZZO**» (es. IT «Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio»; EN/PL/DE/LV adeguati). Aggiornati **60 valori nei 12 lang.js** + **12 default HTML**, via script idempotente (`LUTE(?! MILAZZO)`) limitato al solo `footer_credit` (NON toccati gli altri «LUTE» del sito: titoli «Workshop … LUTE», «Gruppo LUTE», nomi cartelle). Tutti i lang.js validati `node --check`.

### Sessione 2026-06-13 (d) — Coordinatrici/Tutor anche in WS3 (erano stati dimenticati)

- Aggiunte le 2 righe `hero__coord` (`hero_coordinators` + `hero_tutor`, data-i18n-html) all'hero di **Workshop 3 LUTE**, identiche a WS1/WS2: «Coordinatrici: **Lilla Trischitta** e **Pina Mastroieni**» / «Tutor: **Antonio Catalfamo**». Chiavi nei 5 blocchi del lang.js (ordine en,it,pl,de,lv) + CSS `.hero__coord` copiato da WS1. Ora **tutti e 3 i workshop** le hanno.

### Sessione 2026-06-13 (c) — «A cura di» nell'hero delle Esercitazioni

- Aggiunta riga `<p class="hero__coord" data-i18n-html="hero_curated">` sotto il sottotitolo nell'hero delle **3 esercitazioni** (WS1/WS2/WS3): «A cura di: **Antonio Catalfamo e Mimmo Mascali**» (nomi invariati; solo etichetta + congiunzione tradotte: EN «Curated by/and», PL «Opracowanie/i», DE «Erstellt von/und», LV «Sagatavoja/un»).
- Chiave `hero_curated` inserita nei 3 `lang.js` ×5 lingue (ordine blocchi: it,en,pl,de,lv; via script, dopo ogni `hero_subtitle`, validato `node --check`).
- CSS `.hero__coord` aggiunto ai 3 `style.css` (testo bianco su hero scuro, come nelle simulazioni). Verificato in anteprima nelle 5 lingue.

### Sessione 2026-06-13 (b) — Approfondimento «Direttiva Bolkestein» nella Simulazione WS1

- Dalla presentazione `Desktop/Bolkestein directive.pptx` (13 slide, testo estratto via zipfile+regex) è stata creata una **nuova sezione `#bolkestein`** nella `Simularore WS 1/Simulation Game.html`, inserita **subito dopo l'introduzione** e prima di «Obiettivo generale».
- Struttura: `h2.sect__title` (`bolk_section`) + `p.prose` (`bolk_lead`) + `.bolk-grid` con **6 schede `.bolk-card`** (Cos'è · Perché introdotta · Cosa chiede · Le spiagge=`--gold` · Ruolo Commissione · Caso Italia). Le ultime due hanno una `.bolk-note` (corsivo, sfondo azzurrino). Liste con `.bullets`, grassetti via `data-i18n-html`.
- **33 chiavi `bolk_*` × 5 lingue = 165 voci** aggiunte a `Simularore WS 1/lang.js` (script `_add_bolk.py`, poi rimosso; inserite prima di ogni `flag_aria`, validato con `node --check`). Virgolette caporali «» per evitare escaping.
- CSS `.bolk-grid/.bolk-card/.bolk-card__title/.bolk-card--gold/.bolk-note` in coda a `style.css` (token esistenti; 2 colonne → 1 sotto 720px). Cache-busting CSS portato a **`style.css?v=3`**.
- Verificato in anteprima nelle 5 lingue (titoli tradotti, grassetto reso, layout 2 colonne su desktop).

### Sessione 2026-06-10 — Fruibilità (anziani): testo, quiz, bandiera + bugfix CSS

- **Controllo dimensione testo** (`textsize.js`, componente condiviso in root): pulsanti `A−`/`A+` fissi in basso a sinistra, ingrandiscono la pagina via `document.documentElement.style.zoom` (range 1.0–1.6, step 0.1), scelta salvata in `localStorage['erasmus_textsize']`, etichette aria in 5 lingue. Incluso in tutte le 10 pagine con `<script src="../textsize.js" defer></script>` prima di `</body>`.
- **⚑ REGOLA BANDIERE (definitiva, 2026-06-11)**: la bandiera della pagina indica il **PAESE** (non la lingua, non l'UE), ed è **fissa**:
  - **Workshop di un paese** (e relative esercitazioni/galleria/simulazione) → bandiera di quel paese. I workshop attuali sono **italiani** → bandiera italiana fissa (`.flag-it` tricolore nell'hero). I futuri workshop di DE/LV/PL useranno la loro bandiera.
  - **"L'Unione Europea"** (presentazione generale, non workshop di un paese) → **bandiera europea** (`.flag-eu-mini` nella topbar: SVG rect blu #003399 + 12 stelle oro #FFCC00).
  - La **lingua** si cambia solo dal selettore in alto; la bandiera del paese NON cambia.
  - ⚠ Tentativo "bandiera = lingua selezionata" (script `langflag.js`) fatto il 2026-06-10 e **annullato** l'11: script eliminato e tag rimossi da tutte le pagine. NON reintrodurlo.
  - **Home**: le `.flag-it`/`.flag-de`/ecc. nei menu indicano le NAZIONI dei workshop — restano fisse.

### Sessione 2026-06-11 (g) — credito autore nei footer (Cookie Policy RIMOSSA il 2026-06-13)

- **Footer di tutte le 12 pagine** (le 11 standard + Unione Europea; root index escluso): blocco `.footer__sub` (stile inline) con il **credito** «Progetto web LUTE — curato da Filippo Russo Nuccio». Chiave `footer_credit` (tradotto) nei 12 lang.js, **inline dopo footer_text**.
- ⚠ NB se si rifà: inserire footer_credit INLINE dopo `footer_text`, non a capo, perché in vari lang.js footer_text è l'ultima chiave (senza virgola) o è su una riga con altre chiavi.
- **Cookie Policy RIMOSSA (2026-06-13)** su richiesta utente: tolto il link «Cookie Policy» + il separatore `·` da tutti i 12 footer (resta solo il credito); la cartella `Cookie Policy/` è stata spostata in `Desktop/Claude/Backup Cookie Policy (rimossa)`. La chiave `footer_cookie` resta nei lang.js ma è **inutilizzata** (innocua). Per ripristinare: rimettere il link prima di `footer_credit` e riportare la cartella in `Erasmus/`.

### Sessione 2026-06-11 (f) — Coordinatrici e Tutor nell'hero di WS1 e WS2

- Aggiunte 2 righe nell'hero (sotto il sottotitolo) di **Workshop 1** e **Workshop 2**: «**Coordinatrici:** Lilla Trischitta e Pina Mastroieni» e «**Tutor:** Antonio Catalfamo». Classe `.hero__coord`, chiavi `hero_coordinators` e `hero_tutor` (data-i18n-html) tradotte nelle 5 lingue (solo etichetta + congiunzione; nomi invariati; LV «Koordinatores»/«Tutors»). CSS in WS1/WS2 style.css.

### Sessione 2026-06-11 (e) — Nuova simulazione WS2 «Sprechi alimentari»

- Creata cartella **`Simularore WS 2/`** (`Simulation Game 2.html` + `style.css` + `script.js` + `lang.js`): pagina di simulazione interattiva per il **WS2**, dai 3 file in `Desktop/Simulazione 2/` (Food waste.pptx, Trilogue.pptx, Simulation Game 2_complete.docx). Stile = copiato dalla Spiaggia (`Simularore WS 1`).
- Contenuto in **5 lingue**: scenario, obiettivi, **Il Trilogo** (nuovo), struttura 6 fasi, 4 schede-ruolo (Commissione/Parlamento/Consiglio/Cittadini), **proposta di legge** «Food Waste Reduction 2030» (4 articoli) + risultati e punti di discussione (nuovi).
- **Traduzioni**: le chiavi `sg_*` (scenario/fasi/schede) sono state **riusate da `Workshop 2 LUTE/lang.js`** (già tradotte); Trilogo + Proposta tradotti ex novo nelle 5 lingue. `lang.js` costruito via script Node (poi rimosso).
- **Pulsante «Simulazione»** aggiunto nel WS2 (→ `../Simularore WS 2/Simulation Game 2.html`), accanto a «Esercitazioni».
- ⚠ **2 BUG risolti in costruzione** (da ricordare se si ricrea una pagina simulazione): (1) il motore i18n NON va copiato da `Simularore WS 1/lang.js` perché lì `(function` precede `const TRANSLATIONS` → lo slice include tutto e contamina; usare il motore di `Partner/lang.js` (TRANSLATIONS in testa, IIFE dopo). (2) Il motore di Partner NON gestiva `data-i18n-html`: aggiungere il loop `[data-i18n-html] → el.innerHTML` in `apply()`.

### Sessione 2026-06-11 (d) — Simulazione «La Spiaggia di Europa» RIPORTATA in WS1

- ⚠ **ANNULLA lo spostamento del 2026-06-04 (d)**: su richiesta utente, la simulazione interattiva «La Spiaggia di Europa» (app `Simularore WS 1`) torna al **Workshop 1** (non più WS2).
  - **WS1** (`Workshop 1 LUTE`): aggiunto pulsante «Simulazione» (prima di «Esercitazioni») → `../Simularore WS 1/Simulation Game.html`. Chiave `ws_action_simulation` già presente in WS1/lang.js (5 lingue).
  - **WS2**: rimosso il pulsante «Simulazione» (resta solo «Esercitazioni»).
  - **App Simularore WS 1**: link «←» (statico + JS `workshopUrl`) e aria-label riportati da Workshop 2 → **Workshop 1** (`Workshop LUTE Modulo 2 ITA.html`).
  - **Opzione A** scelta dall'utente: il TESTO «Esercitazione 4 — La Spiaggia di Europa» resta nel piano di WS2 (non spostato); si è mosso solo il pulsante/simulazione interattiva.

### Sessione 2026-06-11 (c) — Pagina PROVVISORIA "Paesi partner — in arrivo"

- Nuova cartella **`Partner/`** (`Partner.html` + `style.css` + `lang.js`): pagina temporanea con l'**invito ai paesi partner** a inviare i contenuti dei loro workshop (PDF o altro). **Tradotta in tutte e 5 le lingue** (IT/EN/PL/DE/LV) col solito motore i18n. Bandiera **europea** nell'hero. **Banner giallo "PAGINA PROVVISORIA"** in cima + avviso che verrà rimossa al completamento del sito. `<meta robots noindex>`.
- **Collegamento**: nella Home le 21 voci workshop dei paesi non-italiani (prima `site-nav__dropdown-link--disabled`) sono diventate **link** a `../Partner/Partner.html` con classe `site-nav__dropdown-link--soon` (attenuate ma cliccabili; CSS in `Home/style.css`).
- Contenuti richiesti ai partner: data, foto, **eventuali video**. Aggiunta **nota** che i contenuti verranno impaginati/formattati secondo lo stile del sito. **Pulsante WhatsApp** verde (`.wa-btn`, link `whatsapp://send?phone=393880775449`) per l'invio dei contenuti — apre direttamente l'app WhatsApp (il vecchio `wa.me` apriva WhatsApp Web che si bloccava sul PC dell'utente). Tutto tradotto nelle 5 lingue.
- **⚑ COME RIMUOVERLA a sito completato**: (1) per ogni paese che invia i contenuti, sostituire i suoi link `--soon` con i link alle sue pagine reali; (2) quando non serve più, eliminare la cartella `Partner/` e riportare le voci residue a `--disabled` (o ai workshop veri). La pagina è isolata: rimuoverla non tocca il resto.

### Sessione 2026-06-11 (b) — Testo slide più compatto su mobile (Unione Europea)

- Su cellulare il testo delle slide appariva "diluito". Compattato **solo su mobile** (dentro `@media (max-width:1024px),(pointer:coarse)` in `Unione Europea/style.css`). **Desktop invariato**, corpo del testo NON ridotto (leggibilità):
  - Testo/elenchi: `.section` margin-bottom 24→14px, `.section__heading` margin 10→6px, `.section__text`/`.section__list` line-height 1.7→1.45, `li` 6→3px.
  - **Tabelle-schede** (es. "Le tappe fondamentali"): etichetta `data-label` (ANNO/EVENTO) resa **in linea** col valore (era `display:block` su riga a parte → ora `display:inline` + `margin-right:8px`); `td` padding 10×16→6×14px; `tr` margin-bottom 14→8px. Risultato: ~6-7 tappe visibili invece di ~3-4.

### Sessione 2026-06-10 (b) — Feedback quiz semplificato (richiesta utente)

- L'utente ha trovato le esercitazioni "troppo confusionarie". 
- **Tentativo (poi annullato)**: trasformare gli abbinamenti (tendine lunghe) in "elenco risposte in alto + tendina con sola lettera". Mostrato come prova su WS1 es.1, ma l'utente **preferisce il menu a tendina completo** → ripristinato lo stato originale (opzioni con testo intero, prefisso "a — ").
- **Adottato**: dopo "Verifica" si mostra **solo il punteggio** (X/N). Rimossi i colori verde/rosso per-domanda e la rivelazione ✓ (le funzioni `revealCorrect`/`clearReveal` e le classi `.is-answer`/`.quiz__hint` eliminate da WS1/WS2/WS3, sia JS che CSS). `verifyQuiz` ora conta soltanto; `resetQuiz` azzera input/select. NB: tolte anche le marcature `is-correct`/`is-wrong` (non più aggiunte da verifyQuiz; il CSS originale resta inerte).
- **🐛 BUGFIX importante**: 4 file (`Esercitazioni WS1/WS2/WS3`, `Galleria IT` style.css) avevano una **`}` di troppo** (graffe sbilanciate, riga ~1403, preesistente). Conseguenza: la regola base `.skip-link` veniva fusa col selettore e **scartata** → lo skip-link appariva come link visibile fisso in alto invece che nascosto. Rimossa la graffa extra → ora `.skip-link` è `position:absolute; top:-56px` (nascosto, visibile solo al focus). Verificato nel CSSOM del browser.
- Server preview: aggiunto config **`erasmus`** (porta 8098) in `Desktop/CLAUDE/.claude/launch.json`.

### Sessione 2026-06-05 (c) — Open Graph + skip-link (accessibilità)

- **Open Graph / Twitter Card** su tutte le pagine → anteprima elegante quando si condivide un link (titolo, descrizione, immagine, sito). Tag: og:type/site_name/locale/title/description/url/image + twitter:card.
  - ⚠ **IMPORTANTE**: i tag OG vanno anche sulla **root `index.html`** (pagina di redirect): è il link corto `https://pxh2407.github.io/Erasmus/` che si condivide di solito. Senza OG sulla root, la card NON appare. Aggiunti il 2026-06-05 (titolo «Europe Can Be Liked — Erasmus+»). Nella root: `charset` per primo, poi description/OG (accenti e «» altrimenti illeggibili).
  - `og:image` = **card social dedicata** `https://pxh2407.github.io/Erasmus/og-cover.jpg` (1200×630, creata con PIL: gradiente blu + 12 stelle UE oro + titolo «Europe Can Be Liked» + loghi ufficiali EU/ECBL in basso). Tag width/height/alt aggiunti. ⚠ Se cambia username/repo GitHub, aggiornare l'URL base in `og:image` e `og:url`. Per rigenerarla, lo script PIL è nella cronologia chat.
- **Skip-link "Salta al contenuto"** (accessibilità tastiera/screen reader): `<a href="#main" class="skip-link" data-i18n="skip_link">` subito dopo `<body>`; `id="main"` sul contenuto principale (`<main class="container">`, o `.viewer` per Unione Europea). CSS `.skip-link` (nascosto fuori schermo, visibile su `:focus`) aggiunto a tutti i 10 `style.css`. Tradotto in 5 lingue (chiave `skip_link` nei 10 `lang.js`, validati con node --check).

### Sessione 2026-06-05 (b) — Audit front-end e ottimizzazioni

- **🔍 Audit completo del sito** → criticità rilevate e risolte:
  - **Nessuna favicon** su tutte le pagine → aggiunta **favicon SVG inline** (data-URI: quadrato blu #1a3f80 + stella oro #f2c230) in tutte le 11 pagine
  - **Nessuna meta description** → aggiunta **description** (in italiano, specifica per pagina) a tutte le 11 pagine
  - Aggiunto **`theme-color` #2b5cb0** (barra browser mobile) a tutte le pagine
  - **Immagini troppo pesanti** ottimizzate (originali in `Desktop\Claude\Backup immagini originali\`):
    - `eu-values.jpg`: 3,4 MB (4608×3456) → **391 KB** (1600px, JPEG q82) -89%
    - `ecsc-founders-1951.png`: 1,7 MB → **139 KB** (1280px, palette 256) -92%
    - 10 foto Galleria IT: 4 MB → **1,6 MB** (max 1400px, JPEG q82) -60%
  - **Risparmio totale ~7 MB** sul peso del sito (immagini totali ora ~4,7 MB)
  - Iniezione head fatta via script Python (idempotente: salta se description già presente); nomi file immagine invariati → nessun riferimento rotto in data.js
  - Tutte le pagine verificate: description + favicon presenti; JS validati

### Sessione 2026-06-05 — Galleria fotografica

- **🆕 Creata «Galleria IT»** (galleria fotografica dell'Italia) da `Desktop\Foto Erasmus\` (3 zip: Foto WS1, Foto WS2, WS3)
  - Cartella `Galleria IT/` (HTML + CSS + JS + lang.js + img/), **10 foto** organizzate in 3 sezioni: WS1 (4), WS2 (5), WS3 (1)
  - Foto rinominate pulite: `img/ws1-1..4.jpg`, `ws2-1..5.jpg`, `ws3-1.jpg`
  - **Lightbox** con navigazione ←/→, ESC, clic fuori per chiudere; griglia thumbnail responsive
  - **5 lingue** (IT/EN/PL/DE/LV)
  - **Foto reali sostituite (2026-06-13 h)**: tutte le foto della galleria sostituite con le **vere foto dei workshop italiani** dalla cartella `Desktop/Foto ws italia/` (3 zip: WS1/WS2/WS3). Ora: **WS1 = 5 foto** (ws1-1…5), **WS2 = 6 foto** (ws2-1…6), **WS3 = 8 foto** (ws3-1…8) — tutte ottimizzate 1400px q82. La **sezione WS3 è stata RI-AGGIUNTA** (ora ci sono foto vere; usa le chiavi `ws3_title`/`ws3_caption` già presenti). Le vecchie foto WS1/WS2 (e i precedenti duplicati WS3) sono in `Backup immagini originali/galleria/`. Lightbox verificato OK.
- **🔗 Voce «Foto» aggiunta nei dropdown della Home** per **tutte e 4 le nazioni** (un'unica voce per nazione che apre la galleria di quella nazione):
  - 🇮🇹 Italia: **attiva** → `../Galleria IT/Galleria IT.html`
  - 🇩🇪🇱🇻🇵🇱 Germania/Lettonia/Polonia: **disattivate** (placeholder, niente foto ancora)
  - Posizionata come ultima voce di ogni dropdown; chiave i18n `nav_photos` in Home/lang.js (5 lingue: Foto/Photos/Zdjęcia/Fotos/Fotoattēli)
  - Foto sorgente originali restano in `Desktop\Foto Erasmus\` (non nel repo)

### Sessione 2026-06-04 (d) — Simulazione spostata da WS1 a WS2

- La simulazione **«La Spiaggia di Europa»** (app `Simularore WS 1`) è stata **spostata da Workshop 1 a Workshop 2** (più coerente: tema Bolkestein/concorrenza = atti legislativi, affine a WS2; WS2 la cita già come Esercitazione 4 nel piano)
  - **WS1**: rimosso il pulsante «Simulazione» → ora ha solo «Esercitazioni»
  - **WS2**: aggiunto pulsante «Simulazione» (prima di «Esercitazioni»); chiave `ws_action_simulation` aggiunta in WS2/lang.js (5 lingue)
  - **App Simularore WS 1**: link «indietro» (←) e aria-label aggiornati da Workshop 1 → Workshop 2 (cartella NON rinominata, resta `Simularore WS 1`)

### Sessione 2026-06-04 (c) — Esercitazioni WS3

- **🆕 Creata app «Esercitazioni WS3»** (da `ws3.zip` in `Desktop\Nuova cartella\`: 7 file Excel VBA esercizio 8-14)
  - Cartella `Esercitazioni WS3/` (HTML + CSS + JS + lang.js), stile/engine come Esercitazioni WS2
  - **7 quiz a tab**: es8 risposta multipla (4, priorità UE 2024-2029), es9 vero/falso (4), es10 risposta multipla (5, finalità UE), es11 abbinamento fonti bilancio (5), es12 vero/falso (4), es13 **classifica top-3 voci di spesa** (7, nuovo tipo — select 1ª/2ª/3ª/Non tra le prime tre), es14 vero/falso (4)
  - Risposte: es8 b/a/b/a · es9 V/F/V/F · es10 b/a/b/a/c · es11 b/a/c/e/d · es12 F/V/V/F · es13 (=,1,2,=,=,=,3) → top3: Coesione 1ª, Risorse naturali 2ª, Mercato unico 3ª · es14 F/F/V/F
  - **Nessun errore fattuale** nel materiale (verificato: QFP 7 anni, Agenda 2024-2029, fonti del bilancio, top-3 voci di spesa)
  - script.js engine già da WS2 gestisce mc/vero-falso/select; il tipo «classifica» riusa il meccanismo select
  - **5 lingue** (IT/EN/PL/DE/LV)
  - **Pulsante «Esercitazioni»** aggiunto nell'hero del Workshop 3 (`ws-actions`, stile WS1) → `../Esercitazioni WS3/Esercitazioni WS3.html`; chiave `ws_action_exercises` in WS3/lang.js (5 lingue)
  - Validato `node --check`

### Sessione 2026-06-04 (b) — Esercitazioni WS2

- **🆕 Creata app «Esercitazioni WS2»** (da `WS2.zip` in `Desktop\Nuova cartella\`: 4 file Excel VBA esercizio 4/5/6/7)
  - Cartella `Esercitazioni WS2/` (HTML + CSS + JS + lang.js), stile coerente con Esercitazioni WS1
  - **4 quiz a tab**: es4 risposta multipla (3 dom, risposte c/b/c), es5 vero/falso (10), es6 vero/falso (5), es7 abbinamento priorità UE (3)
  - **Nuovo tipo "risposta multipla"**: classi CSS `.mc-question`, `.mc-option` (radio); engine in script.js gestisce radio-by-name, vero/falso e select via `ITEM_SEL`+`ANSWERS`
  - **Correzione fattuale** (autorizzata): es5 domanda 4 «I Regolamenti fanno parte del diritto primario» → risposta corretta **Falso** (erano segnati Vero; i regolamenti sono diritto derivato)
  - **Es7 — opzioni A/B/C integrate da me** (non recuperabili dal file): priorità UE 2024-2029 → 1=C (libera/democratica=Stato di diritto), 2=A (forte/prospera=competitività), 3=B (climaticamente neutra=transizione verde)
  - **5 lingue** (IT/EN/PL/DE/LV)
  - **Pulsante «Esercitazioni»** aggiunto nell'hero del Workshop 2 (`ws-actions`, stile WS1) → link a `../Esercitazioni WS2/Esercitazioni WS2.html`; chiave `ws_action_exercises` aggiunta in WS2/lang.js (5 lingue)
  - Validato `node --check`

### Sessione 2026-06-04

- **🔄 Workshop 2 RICOSTRUITO come piano del workshop** (prima era una presentazione di 16 slide stile «Unione Europea»):
  - Gli autori hanno inviato `Workshop 2 LUTE_ITA.docx` (in `Desktop\WES\`): è il **piano metodologico** del workshop, stesso formato di WS1 e WS3, NON le slide
  - Su scelta dell'utente: **sostituzione totale** → Workshop 2 ora è un piano (hero + obiettivi + metodi + svolgimento/timeline + simulazioni), coerente con WS1/WS3
  - **Slide vecchie salvate in backup** in `C:\Users\Filippo\Desktop\Claude\Backup Workshop 2 slide\` (fuori dal sito); rimossi `data.js` e `img/` dalla cartella di lavoro
  - `style.css` e `script.js` ora copiati da WS3 (stile metodologia, non più slide-viewer)
  - **Contenuti**: 5 obiettivi generali, 5 specifici, target, 5 metodi, 6 materiali, svolgimento con Esercitazioni 1/2(a-b-c)/3 (primo incontro 75 min), nota indagine cittadini
  - **Simulation Game 1**: «Una nuova legge europea contro gli sprechi alimentari» — struttura 6 fasi + **4 schede-ruolo** (Commissione, Parlamento, Consiglio, Cittadini) con "Cosa dovete fare" + "Domande guida"
  - **Esercitazione 4**: «La Spiaggia di Europa» (Direttiva Bolkestein) — obiettivo, competenze, 3 fasi, debriefing
  - Sintesi finale: tempo complessivo 150 min
  - **5 lingue** (IT/EN/PL/DE/LV), ~70 chiavi i18n × 5
  - **CSS nuovo**: `.role-grid`, `.role-card` (+ varianti colore --commission/--parliament/--council/--citizens), `.role-card__badge/__name/__who/__do-label/__q-label`
  - Refusi del docx corretti: «effettuate»→«effettuata», «stimolala»→«stimola la», «i facilitatore»→«il facilitatore»
  - Link Home → Workshop 2 invariato (stesso nome file `Workshop 2 LUTE.html`)
  - NB: il file `ULT Il processo decisionale nell'UE.pptx` resta la fonte delle SLIDE (ora in backup), il docx è il PIANO



### Sessione 2026-05-29

- **🆕 Creata nuova app «Esercitazioni WS1»** — 3 quiz interattivi del Workshop 1 (Organi UE):
  - Origine: 3 file Excel `.xls` (esercizio 1/2/3) con macro VBA + UserForm, ricevuti in `Esercitazioni WS1.zip` sul Desktop dell'utente (sottocartella `Mascali`)
  - Estratti con `oletools/olevba`: la logica VBA è semplice (10 ComboBox/Radio + pulsante Verifica/Reset + contatore)
  - **Convertiti in app web pura** in `Esercitazioni WS1/`: HTML + CSS + JS + lang.js (5 lingue come tutto il sito)
  - **Struttura HTML**: pagina unica con **3 tab** in alto (Composizione · Compiti · Vero o Falso). Ogni quiz: 10 righe domanda + select (o radio V/F), legenda risposte a fianco, bottoni Verifica/Reset, contatore "X / 10"
  - **Logica `script.js`**: tab switching, verifica con confronto risposte, evidenziazione card (verde/rosso) per ogni riga giusta/sbagliata, reset
  - **Stile elegante**: classi `.exer-tabs`, `.exer-tab`, `.exer-quiz`, `.quiz__layout` (grid 1fr/320px), `.quiz__items`, `.quiz__legend` (sticky a destra su desktop, in cima su mobile <900px), `.vf__choice`, `.btn-quiz`
  - **5 lingue** (IT/EN/PL/DE/LV) con ~50 chiavi × 5 = 250 traduzioni
  - **4 correzioni fattuali applicate** rispetto al materiale originale:
    - Es 1, risposta corretta per **Corte dei Conti**: `h` (BCE) → `i` (27 membri, uno per Stato)
    - Es 1, risposta corretta per **BEI**: `i` → `l` (Consiglio dei Governatori, ministri finanze)
    - Es 2, refuso d1: «QCONSIGLIO EUROPEO» → «CONSIGLIO EUROPEO»
    - Es 3, risposta corretta r10 («Consiglio Europeo organo politico definisce obiettivi politici»): `F` → `V` (è VERO)
- **🔄 Aggiornato Workshop 1 LUTE**:
  - **Rimossi** i 2 pulsanti azione «Foto» e «Video» (erano disabilitati con etichetta "in arrivo")
  - **Aggiunto** pulsante attivo «Esercitazioni» che linka a `../Esercitazioni WS1/Esercitazioni WS1.html`
  - Nuova chiave i18n `ws_action_exercises` aggiunta in tutte e 5 le lingue (Esercitazioni · Exercises · Ćwiczenia · Übungen · Vingrinājumi)
  - Chiavi morte `ws_action_photos`, `ws_action_videos`, `ws_action_soon` lasciate nel `lang.js` (innocue, dead code)

### Sessione 2026-05-15

- **✅ Workshop 3 LUTE COMPLETATO con la Simulation Game** (prima era solo il primo incontro, 75 min):
  - Ricevuto dagli autori il `Workshop 3 IT.docx` completo → estratta e inserita tutta la seconda parte
  - Aggiunta sezione `#simulation-game` nell'HTML con: intro + **3 attività** (Brainstorming fonti del bilancio · Gioco "Costruiamo il Bilancio UE" con 7 rubriche/100 gettoni · Mini-gioco "Quale fondo finanzia cosa?" con 5 fondi strutturali) + **21 schede progetto** (3 per ognuna delle 7 rubriche) + **copione di negoziazione integrale** (Presidente + 7 gruppi + proposta/accordo/debriefing) + conclusione modulo
  - **Le 7 rubriche con percentuali** rese con barre visive: Coesione 34% · Risorse naturali 30% · Mercato unico 15% · Vicinato 9% · Amministrazione 7% · Migrazione 3% · Sicurezza 2% (= 100%)
  - **5 fondi**: ESF+, ERDF, EAFRD, EMFAF, CF (codici lasciati in versione internazionale, descrizioni localizzate)
  - Sintesi finale aggiornata: tempo totale 120-150 min, Parte 1 (75 min) + Parte 2 (~80 min); rimossa la nota "documento incompleto"
  - **~60 nuove chiavi i18n × 5 lingue = 300 nuove traduzioni** (prefisso `sg_`) in `Workshop 3 LUTE/lang.js`; usato `data-i18n-html` per liste e grassetti
  - **CSS nuovo** in `Workshop 3 LUTE/style.css`: `.sim-activity`, `.rubric`/`.rubric__fill` (barre %), `.fund-card`, `.project-grid`/`.project-card`, `.nego`/`.nego__line`/`.nego__block` (copione), responsive mobile
  - Correzioni dal docx: «Workshop 2» → 3, frase incompleta e typo già corretti nella sessione precedente
  - Validato `node --check` su lang.js e script.js

### Sessione 2026-05-14

- **🆕 Creata nuova app «Workshop 3 LUTE — Il bilancio dell'UE e il suo impatto sulla vita dei cittadini»**:
  - Cartella `Workshop 3 LUTE/` con 4 file: `Workshop 3 LUTE.html` + `style.css` e `script.js` (copiati 1:1 da Workshop 1) + `lang.js`
  - **Stile identico a Workshop 1** (logo-bar, hero con bandiera+pillole, sezioni con timeline a 7 step, footer, to-top)
  - **5 lingue** (IT/EN/PL/DE/LV), come tutte le altre app
  - Contenuti estratti dal file `Workshop 3 IT.docx` sul Desktop dell'utente — **documento INCOMPLETO**: si interrompe a "Durata Primo incontro: 75 minuti" su 120-150 min previsti
  - Sezioni create: 4 Obiettivi Generali, 4 Obiettivi Specifici, Target Group, 5 Metodi, 6 Materiali, Timeline a 7 step (Esercitazione 0 + 6 step + 3 esercitazioni numerate), Sintesi parziale
  - **Nota visibile** in fondo: "Questo documento copre il primo incontro (75 min). La seconda parte sarà aggiunta non appena disponibile dagli autori."
  - Correzioni applicate al docx: «Workshop **2**» → «Workshop 3», frase incompleta «La presentazione **delle** viene illustrata» riscritta, typo «**i** facilitatore» → «**il** facilitatore», linguaggio burocratico ripulito
  - Link Home → Workshop 3 attivato (dropdown «Italy»: voce Workshop 3 da `<span>` disabilitato → `<a href="../Workshop 3 LUTE/Workshop 3 LUTE.html">`)

- **🏠 Home — sostituita sezione «Coming Soon» con vera descrizione del Progetto ECBL**:
  - Fonte: `Progetto.pdf` sul Desktop dell'utente (54 pagine, application form ufficiale Erasmus+ KA220-ADU **ECBL "Europe Can Be Liked"**)
  - Lette pagine 1-5, 16-20 (Context, Project Summary, Relevance, Impact, Partnership) — il resto sono dettagli amministrativi non rilevanti per il pubblico
  - **5 nuove sezioni nella Home** sostituiscono `.coming-soon`:
    1. **About the ECBL Project** — descrizione + 3 card meta (Durata 2025-2027 · 24 mesi · Azione Erasmus+ KA220-ADU · Priorità "Common values, civic engagement")
    2. **Project Objectives** — 5 obiettivi con icona ✓ blu
    3. **The Four Partners** — 4 card 2×2 con bandiera+nome+città+ruolo (Aktywni XXI capofila evidenziata)
    4. **What We Do** — 4 attività (Workshop Guide, Workshops "European ABC", Voices from the Past, Study Visits)
    5. **Expected Results** — 5 risultati attesi con icona ★ oro
  - **Budget escluso** su richiesta utente (anche se nel PDF compare 120.000 €)
  - **Linguaggio ripulito dal burocratese** (es. "combat Euroscepticism" → "contrastare l'euroscetticismo"; "feed Erasmus+ Project Results Platform" → eliminato)
  - **i18n**: aggiunte ~40 nuove chiavi × 5 lingue = **200 nuove traduzioni** in `Home/lang.js`
  - Chiavi `coming_title`/`coming_text` lasciate nel `lang.js` come fallback (codice morto ma innocuo)
  - **CSS** (`Home/style.css`):
    - Nuove classi: `.project-intro`, `.project-section`, `.project__title`, `.project__lead`, `.project-meta`, `.project-meta__item`, `.project-goals` (lista con ✓ blu), `.project-goals--impact` (con ★ oro), `.partners-grid`, `.partner-card`, `.partner-card--lead` (capofila con badge), `.partner-card__badge`, `.partner-card__flag`, `.partner-card__name`, `.partner-card__city`, `.partner-card__role`, `.activities-grid`, `.activity-card`
    - **Griglia partner**: `grid-template-columns: repeat(2, 1fr)` per **2×2 su desktop** (richiesta esplicita utente, ora non più auto-fit che dava 3+1)
    - **Mobile (<720px)**: griglie a 1 colonna, padding ridotto

- **📂 Cartelle locali** (struttura conferma post-rinomina):
  - `C:\Users\Filippo\Desktop\Claude\Erasmus\` — **cartella di lavoro principale** (77 file, contiene Workshop 3 LUTE)
  - `C:\Users\Filippo\Desktop\Claude\Erasmus_old\` — backup pre-pulizia (84 file, contiene pptx sorgente, Bilancio Familiare, ecc.)

- **📄 Generato file `Erasmus_struttura.pdf`** (sessione precedente, riportato qui per completezza): mappa di tutti gli elementi strutturali delle pagine, in `C:\Users\Filippo\Desktop\Claude\`

### Sessione 2026-05-12

- **🆕 Creata nuova app «Workshop 2 LUTE — Il processo decisionale nell'UE»**:
  - Cartella `Workshop 2 LUTE/` con 5 file codice (HTML, CSS, JS, data, lang) + `img/slide-01.png`
  - Stile **identico all'app «Unione Europea»** (logo-bar, lang-switcher, progress-bar, topbar contatore, viewer/mobile-scroll, footer-hint) — `style.css` e `script.js` **copiati 1:1** da UE
  - **16 slide × 5 lingue** = 80 blocchi di contenuto, tutte in `data.js`
  - Contenuti rielaborati dal `.pptx` sorgente (`ULT Il processo decisionale nell'UE.pptx`):
    - Slide 1: copertina con immagine «cittadini UE sotto l'ombrello»
    - Slide 2-8: L'Europa dei 27, fonti del diritto, competenze (esclusive UE / concorrenti / esclusive Stati)
    - Slide 9-15: Trattati, diritto secondario, Regolamenti (AI Act 2024/1689, GDPR), Direttive (plastica 2019/904), Decisioni (Croazia/Google), Pareri, Raccomandazioni
    - Slide 16: «Dall'idea al diritto» — sintesi finale narrativa
  - **Esercitazioni** preservate come banner gialli: 1a·1b (slide 2), 2a·2b·2c (slide 7), 3a·3b (slide 15)
  - **Riferimenti normativi verificati**: AI Act = Regolamento (UE) 2024/1689 + legge IT 132/2025; GDPR = Reg (UE) 2016/679; Direttiva plastica monouso = (UE) 2019/904; D.Lgs IT 196/2021
  - **Linguaggio ripulito dal burocratese** (es. «E' il caso della politica…» → «Riguarda ad esempio la politica…»)
  - **Riduzione 17→16 slide**: fusi slide 3+4 originali (titolo intro + schema), arricchita slide 2 (era solo «L'Europa dei 27»), trasformata slide 17 (era solo titolo) in vera sintesi finale

- **🔗 Home → Workshop 2 attivato**:
  - In `Home/index.html`, dropdown «Italy» voce Workshop 2: `<span>` disabilitato → `<a href="../Workshop 2 LUTE/Workshop 2 LUTE.html">`
  - Chiave i18n `nav_ws2` già esistente in tutte le 5 lingue → nessuna modifica `lang.js`
  - Workshop 3 IT resta disabilitato (in attesa di sviluppo futuro)

- **🍔 Menu hamburger Home (mobile)**:
  - **Problema risolto**: su mobile la `site-nav` scorreva orizzontalmente → sostituito con menu hamburger ☰ verticale a discesa
  - **HTML** (`Home/index.html`): aggiunto `<button id="navHamburger" aria-controls="siteNavList">` dentro `.site-nav`, con 3 `<span class="site-nav__hamburger-bar">` animate
  - **CSS** (`Home/style.css`):
    - Desktop: hamburger `display: none`
    - Mobile (≤1024px): hamburger `display: inline-flex`, `.site-nav__list` nascosto finché `.site-nav.is-mobile-open` non attivata → diventa `display: flex; flex-direction: column`
    - **Linee separatrici** verticali: `border-bottom: 1px solid var(--border)` su ogni `.site-nav__list > li`
    - Dropdown su mobile: `position: static` (non più fixed), `padding-left: 38px` per indentazione gerarchica, sfondo `--surface-alt`
    - Animazione bars → croce ✕ quando `aria-expanded="true"` (rotate 45°/-45° + opacity 0 sul bar centrale)
  - **JS** (`Home/script.js`):
    - Aggiunto IIFE per toggle hamburger
    - `mobileMQ.addEventListener('change', ...)` chiude tutto quando si passa da mobile a desktop
    - `posiziona()` dei dropdown: ritorna subito se `isMobile()` (i dropdown su mobile sono in flusso)
    - Listener "click su link chiude menu": **esclude** i toggler con `aria-haspopup="true"` (cioè Germany/Italy/Latvia/Poland) e i link con `href="#"` → bug fix critico: senza questo, cliccando «Italy» il sottomenù si apriva e veniva chiuso subito
  - **i18n** (`Home/lang.js`): aggiunte chiavi `nav_menu_label` («Menu» / «Menu» / «Menu» / «Menü» / «Izvēlne») e `nav_menu_aria` in tutte e 5 le lingue
  - **Accessibilità**: pulsante 48×48 px, `aria-controls`, `aria-expanded`, chiusura ESC, click fuori, focus-visible

- **📝 Revisione testi «Unione Europea» — ripulitura burocratese in 5 lingue (67 modifiche)**:
  - **4 correzioni fattuali**:
    - Slide 3: «seconda economia globale» (errato: l'UE è 3° per PIL dopo USA/Cina) → «tra le maggiori economie globali»
    - Slide 5 Note: «I 6 paesi fondatori (1957)» → «(CECA, 1951)» per coerenza con slide 2
    - Slide 11: «27 Commissari (uno per paese) + Presidente» (contava Presidente due volte) → «27 membri (uno per Stato), incluso il Presidente»
    - Slide 14: «Operativa dal ottobre 1977» → «Operativa dall'ottobre 1977» (apostrofo)
  - **9+ alleggerimenti di linguaggio**:
    - Slide 1: «ne governano il funzionamento» → «la fanno funzionare»
    - Slide 3: «condividono sovranità in settori chiave» → «decidono insieme su temi importanti»
    - Slide 7 (tabella) + Slide 16 (riepilogo): «Definisce gli indirizzi politici» / «Indirizzi politici generali» → uniformi a «Indica le priorità politiche»
    - Slide 8: «Ratifica accordi internazionali e nuovi allargamenti» → «Approva accordi internazionali e l'ingresso di nuovi Stati»
    - Slide 9: «definisce le priorità politiche e l'orientamento strategico» → «definisce le priorità e la direzione politica»
    - Slide 10: «sistema TRIO» (tecnicismo) → «tre Stati si coordinano per 18 mesi (sistema TRIO)»
    - Slide 11: «monopolio dell'iniziativa legislativa» → «Solo la Commissione può proporre nuove leggi europee: è un potere esclusivo»
    - Slide 12: «su richiesta dei tribunali nazionali (rinvio pregiudiziale)» → «quando i giudici nazionali hanno dubbi su come applicarlo»
    - Slide 13: «contenere l'inflazione intorno al 2%» → «tenere l'inflazione vicina al 2%»
    - Slide 14: «audit esterno» (tecnicismo) → «l'organo che controlla i conti dell'UE dall'esterno»
    - Slide 15: aggiunta apposizione al «triangolo istituzionale» → «: il gioco a tre da cui nascono le leggi europee»
  - **Approccio**: 2 fasi — prima italiano (con conferma utente), poi propagazione fedele alle altre 4 lingue (en/pl/de/lv)
  - Validato con `node --check` su tutto `data.js`

- **🗂️ Riorganizzazione cartelle locali (preparazione GitHub)**:
  - Creata `C:\Users\Filippo\Desktop\Claude\Erasmus_pulita\` con **76 file** (solo quelli usati dal sito)
  - Originale `Erasmus\` (83 file) mantenuta come backup
  - **File esclusi** dal repo: `ULT Il processo decisionale nell'UE.pptx` (sorgente), `slide 1.png` (duplicato già in Workshop 2/img), `Immagine Europa.jpg` (orfana), cartella `Europa/` (4 file di altri progetti utente)
  - Procedura concordata: dopo upload GitHub e verifica funzionamento → rinominare `Erasmus` → `Erasmus_OLD` (backup), `Erasmus_pulita` → `Erasmus` (cartella di lavoro definitiva)

- **📄 Generato PDF struttura applicazione**:
  - `Erasmus_struttura.pdf` in `Desktop\Claude\` — mappa completa di tutti gli elementi strutturali di ogni pagina (header, footer, sezioni, slide)
  - Generato con `reportlab` + Platypus (tabelle, stili coerenti con palette del sito)

### Sessione 2026-04-26
- **Home — voci sottomenù riformattate come pulsanti SIGLA + bandiera + testo**:
  - Ogni voce dei 4 dropdown (Germany/Italy/Latvia/Poland) è ora un pulsante con: sigla a 2 lettere (IT/DE/LV/PL, font-weight 700, width 26px) + bandiera 22×33 px (riusa `.flag-de/it/lv/pl` ridimensionate via wrapper `.dropdown-link__flag`) + testo (workshop name senza nome paese)
  - Sotto ogni dropdown: 3 voci proprie del paese ospite con la sua sigla+bandiera (Workshop 1/2/3) + 3 voci degli altri paesi con le loro sigle+bandiere (testo «Workshop»/«Warsztat»/«Seminārs» a seconda della lingua)
  - i18n: chiavi `nav_ws_de/it/lv/pl` aggiornate da «Workshop Germany/Italy/etc.» a solo «Workshop» (o «Warsztat»/«Seminārs» nelle lingue locali) in tutte e 5 le lingue
  - CSS: `.site-nav__dropdown-link` ora `display: flex` con `gap: 12px`, padding ridotto a `9px 14px`, min-height 44px (touch-friendly)
  - Nuove classi: `.dropdown-link__code`, `.dropdown-link__flag`, `.dropdown-link__text`
- **Unione Europea — bug fix scroll su cambio slide**: in `script.js` dentro `renderDesktop()` aggiunto `window.scrollTo(0, 0)` subito dopo il replace di `$stage.innerHTML`. Prima, premendo le frecce ←/→ su slide lunghe, la nuova slide partiva dalla stessa scrollY della precedente (quindi tagliata). Ora ogni nuova slide parte sempre dall'alto. Mobile non toccato (lì lo scroll è continuo e la posizione viene preservata al cambio lingua tramite `prevScroll`).
- **Unione Europea — slide 1**: rimossa l'ultima voce «Video di approfondimento» dalla sezione «Contenuti della presentazione» in tutte e 5 le lingue (IT «Video di approfondimento», EN «Video resources», PL «Filmy uzupełniające», DE «Vertiefungsvideos», LV «Padziļinošie video»). L'elenco passa da 5 a 4 voci.
- **TUTTE LE APP — rimossa ogni occorrenza di «LUTE» dal testo visibile**:
  - **Home**: footer «Erasmus+ Project · LUTE Group» → «Erasmus+ Project» (5 langs); page_title «Home — Erasmus LUTE» → «Home — Erasmus+» (5 langs); chiavi `hero_title` aggiornate a «Progetto Erasmus+» / «Erasmus+ Project» / etc. in tutte le 5 lingue
  - **Workshop**: pill AUTORE rimossa dall'hero; footer «Erasmus Project · LUTE Group · Workshop 1 — …» → «Erasmus+ Project · Workshop 1 — …» (5 langs)
  - **Simulazione**: footer «… · LUTE Group · …» → «Erasmus+ Project · Simulation Game — …» (5 langs)
  - **Unione Europea**: banner slide 1 «Progetto LUTE · Erasmus+ · Workshop n. 1» → «Erasmus+ · Workshop n. 1» (5 langs)
  - **index.html root**: titolo redirect «LUTE Project — Erasmus+» → «Erasmus+ Project»
  - **NON toccati** (file system / paths): cartella `Workshop 1 LUTE/`, file `Workshop LUTE Modulo 2 ITA.html`, gli `href` che vi puntano. Se l'utente in futuro vuole rinominare anche cartella/file → operazione mass-rename con aggiornamento di tutti gli `href`
  - **Chiavi i18n morte ma lasciate**: `tag_group`, `info_author_value` in Workshop e Simulation lang.js (non più usate nel rendering, ma il valore contiene ancora «LUTE Group / Gruppo LUTE / etc.» — si possono pulire se servirà)
  - Validato con `node --check` su 4 file JS — tutti OK
- **Home — titolo unificato**: rimosso `<h1>Progetto LUTE</h1>` e l'eyebrow `<span>`; ora c'è un solo `<h1 data-i18n="hero_eyebrow">` che mostra «Progetto Erasmus+» in grassetto (font-weight 800, font-size clamp(1.6rem, 3vw, 2.2rem)).
- **Home — restyling hero compatto + bandiere 2×2 a sinistra + sticky**:
  - Hero compattato: padding `72/88px` → `18/20px`, titolo `clamp(2.2rem, 5vw, 3.5rem)` → `clamp(1.4rem, 2.6vw, 1.8rem)`, sottotitolo `1.05-1.25rem` → `0.95rem`
  - Eyebrow «PROGETTO ERASMUS+» più piccolo (`0.72rem`)
  - **Bandiere DE · IT · LV · PL** spostate da `.flags-row` (orizzontali, centrate, 72×108px) a `.flags-column` (CSS Grid 2×2 a sinistra, **32×48px**, gap 8px sia H sia V) — primo iter era stato colonna verticale singola, ma sembrava una striscia
  - Layout hero: flex orizzontale → bandiere a sinistra (flex-shrink:0) + hero__main al centro
  - Decorazione `::before` con la stella rimossa
  - Hero **sticky** sotto site-header (`position: sticky; top: 151px; z-index: 90`) — `top: 151px` perché site-header = logo-bar 97 + site-nav 54
  - Mobile (<1024px): hero non sticky, bandiere 28×42 con gap 6px
  - Mobile (<480px): bandiere 24×36 con gap 5px
  - Nome classe `.flags-column` mantenuto (anche se ora è una grid 2×2), riusato per non ricreare HTML
- **Workshop 1 LUTE + Simulazione — restyling hero compatto + sticky**:
  - Eliminate le 3 card `.info-grid` (DURATA / PARTECIPANTI / AUTORE/TIPO) e il loro CSS
  - Hero riorganizzato: layout flex orizzontale → **bandiera italiana 44×66px a sinistra**, hero__main al centro (eyebrow + titolo inline, sottotitolo singola riga, **4 pillole** `.hero-pill`), su Workshop anche `.ws-actions` a destra
  - Pillole Workshop: Durata · Partecipanti · Pubblico · Autore
  - Pillole Simulazione: Durata · Partecipanti · Pubblico · Tipo
  - Hero ora **sticky** sotto la logo-bar (`position: sticky; top: 98px; z-index: 90`)
  - Padding hero da `72/88px` a `18/20px` → altezza ridotta da ~440px a ~140-160px (-65%)
  - Titolo da `clamp(2.2rem, 5vw, 3.5rem)` a `clamp(1.25rem, 2.2vw, 1.6rem)`
  - Stella decorativa `::before` rimossa
  - Su mobile (<1024px) hero **non sticky**, layout in colonna, ws-actions in riga orizzontale
  - Nuova chiave i18n: `hero_pill_audience_label` (Pubblico/Audience/Odbiorcy/Zielgruppe/Auditorija) aggiunta in **entrambe** le app
  - **Bandiera IT**: dimensioni passate da 72×108 (centrata con margin auto) a 44×66 a sinistra (flex-shrink:0, margin:0). Mobile: 38×57; <520px: 32×48
- **Workshop 1 LUTE — pulsanti azione `.ws-action`** («Simulazione» · «Foto» · «Video»).
  - **Posizione finale**: dentro `<header class="hero">`, in **colonna verticale** in alto-destra (position:absolute su `.hero__inner`).
  - **Stile**: piccoli, vetrosi (rgba bianco con backdrop-filter blur), bordo bianco semitrasparente; hover «Simulazione» = sfondo bianco pieno con testo blu accent-dark. I disabilitati sono più sbiaditi.
  - «Simulazione» → link a `../Simularore WS 1/Simulation Game.html`
  - «Foto» e «Video» disattivati con sotto-etichetta «in arrivo»
  - i18n: chiavi `ws_action_simulation`, `ws_action_photos`, `ws_action_videos`, `ws_action_soon` in tutte e 5 le lingue
  - **Mobile**: il position:absolute viene rimosso; i pulsanti tornano in flusso, su una riga orizzontale wrappabile, sotto i tag hero
  - Niente emoji (preferenza utente).
  - **Iter di design**: prima tentativo era una barra full-width tra hero e info-grid → utente l'ha rifiutato («non mi piace la disposizione e le dimensioni, li metterei nell'header, più piccoli, in verticale»).

### Sessione 2026-04-25
- **Slide 7**: rimossa immagine `lisbon-treaty-signing.jpg` (mostrava prevalentemente leader polacchi, non rappresentativa). Slide ora solo con tabella delle 7 istituzioni.
- **Slide 6**: didascalia corretta — l'immagine `eu-values.jpg` mostra bandiere UE davanti al Berlaymont, non bandiere Stati membri.
- **Slide 8**: «sede secondaria» / «secondary seat» sostituito con formula diplomatica conforme al Protocollo 6 («Strasburgo sede ufficiale» / «Bruxelles sessioni aggiuntive»).
- **Slide 7 banner**: «Trattato di Lisbona, 2009» → «in vigore dal 2009» (chiarezza firma vs entrata in vigore).
- **Slide 8 meta**: «Fondato 1962» → «Origini: 1952 · Nome attuale dal 1962 · Elezioni dirette dal 1979».
- **Slide 3 + 8 body**: popolazione «oltre 440 milioni» → «quasi 450 milioni» (Eurostat 2024).
- **CSS `.topbar`**: aggiunto `position: sticky; top: 102px; z-index: 98` → la banda blu con contatore slide ora resta in alto.
- **Bug fix precedente**: `reloadSlides()` preserva `idx` invece di resettare a 0 al cambio lingua.
- **Bug fix precedente**: frecce navigazione → `position: fixed` 64×64px circolari (prima troppo piccole e scrollavano).

---

## 7. Note operative per Claude

- File `data.js` è **>40k token** → leggere con `offset/limit`, mai integrale
- File `style.css` è grande → usare Grep per trovare classi specifiche
- Il file HTML principale è **`Unione Europea.html`** (con spazio nel nome — quotare sempre)
- `node --check` disponibile su questo sistema → usare per validare JS dopo modifiche
- Bash su Windows: shell tipo Git Bash, supporta `mv`, `ls`, ecc.
- Quando l'utente usa termini tecnici imprecisi («markup» per intendere commento HTML, «numero della slide» per intendere counter), interpretare con buon senso ma confermare se ambiguo
