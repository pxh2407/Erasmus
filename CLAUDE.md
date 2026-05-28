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

## 6. Cronologia decisioni importanti

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
