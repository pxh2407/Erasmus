# Linee guida — Sito Erasmus

Parametri di design, accessibilità e organizzazione da riutilizzare in tutte le pagine e applicazioni del sito Erasmus.

---

## 1. Accessibilità (regola primaria)

**Il sito è usato da persone anziane. Il testo deve essere sempre leggibile senza zoom manuali.**

- Font corpo testo: **minimo 16-18px su desktop**, proporzionalmente più grandi su mobile
- Pulsanti e controlli: **target touch ≥ 44×44px**, grandi e ben visibili
- **Contrasto alto** tra testo e sfondo
- **No gesti nascosti** (swipe, long press, pinch) come unica via a una funzione: fornire sempre un bottone visibile grande
- Evitare font sottili/light; preferire **peso normale o semi-bold**
- Se un contenuto ha testo piccolo (schema/immagine), offrire un bottone "Ingrandisci" esplicito — non affidarsi a pinch-to-zoom

---

## 2. Palette colori

| Variabile CSS      | Valore    | Uso                                 |
|--------------------|-----------|--------------------------------------|
| `--bg`             | `#f5f6f8` | Sfondo pagina                        |
| `--surface`        | `#ffffff` | Card, slide, contenitori             |
| `--border`         | `#d8dce4` | Bordi sottili neutri                 |
| `--text`           | `#1f2430` | Testo principale                     |
| `--text-muted`     | `#6a7080` | Testo secondario/didascalie          |
| `--accent`         | `#2b5cb0` | Blu primario (pulsanti, bordi slide) |
| `--accent-hover`   | `#204a93` | Stato hover del blu primario         |
| `--accent-dark`    | `#1a3f80` | Blu scuro (footer, titoli)           |
| `--gold`           | `#f2c230` | Oro (bordo header, accenti)          |
| `--disabled`       | `#c9ccd4` | Elementi disabilitati                |

Tema **chiaro e minimale**, colori sobri non decorativi.

---

## 3. Tipografia

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
```

Stack di sistema — niente font custom, caricamento zero, ottima leggibilità su ogni dispositivo.

---

## 4. Raggi, ombre, transizioni

| Variabile CSS    | Valore                                  | Uso                      |
|------------------|-----------------------------------------|--------------------------|
| `--radius`       | `10px`                                  | Raggio standard          |
| (pulsanti grandi)| `14px`                                  | Frecce laterali, CTA     |
| `--shadow-sm`    | `0 1px 3px rgba(0,0,0,0.08)`            | Ombra leggera            |
| `--shadow-md`    | `0 4px 14px rgba(0,0,0,0.12)`           | Ombra media              |
| `--shadow-lg`    | `0 6px 22px rgba(0,0,0,0.14)`           | Ombra marcata            |
| `--transition`   | `0.2s ease`                             | Transizione standard     |

**Bordo blu 2px** (colore `var(--accent)`) intorno ai contenuti principali (slide, card importanti) per staccarli visivamente dallo sfondo chiaro.

---

## 5. Pulsanti

- **Border-radius**: 14px (rettangoli morbidi)
- **Sfondo** normale: bianco con bordo blu; **hover**: blu pieno, testo bianco
- **Stato disabilitato**: grigio chiaro, cursore `not-allowed`, `opacity: 0.55` — **mai nascondere**, solo disabilitare
- **Focus-visible**: outline blu 3px con offset 3px per navigazione tastiera
- **Click**: leggero `scale(0.98)` per feedback tattile

---

## 6. Loghi e bandiera — OBBLIGATORIO su ogni pagina/applicazione

**Ogni pagina e applicazione del sito deve includere:**

### Barra loghi (in cima, sopra l'header)
```html
<div class="logo-bar" role="banner" aria-label="Loghi del progetto">
    <img class="logo-bar__img"
         src="[percorso]/image-1776928171315.jpg"
         alt="Co-funded by the European Union">
    <img class="logo-bar__img"
         src="[percorso]/image-1776928198470.png"
         alt="ECBL — Europe can be liked">
</div>
```
- Logo EU → **sinistra**
- Logo ECBL → **destra**
- Percorso immagini: `../` per applicazioni in sottocartella, percorso diretto per `index.html`

### Bandiera italiana (dentro l'header, centrata in alto)
```html
<div class="flag-it" aria-label="Bandiera italiana" role="img">
    <div class="flag-it__band flag-it__band--green"></div>
    <div class="flag-it__band flag-it__band--white"></div>
    <div class="flag-it__band flag-it__band--red"></div>
</div>
```

### CSS necessario (aggiungere in ogni style.css o nel `<style>` inline)
```css
.logo-bar {
    background: #ffffff;
    border-bottom: 2px solid var(--border);
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo-bar__img { height: 64px; width: auto; display: block; }

.flag-it {
    height: 72px; width: 108px;
    display: flex;
    border-radius: 4px; overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    margin: 0 auto 24px;
}
.flag-it__band { flex: 1; }
.flag-it__band--green { background: #009246; }
.flag-it__band--white { background: #ffffff; }
.flag-it__band--red   { background: #ce2b37; }

@media (max-width: 1024px), (pointer: coarse) {
    .logo-bar { padding: 14px 20px; }
    .logo-bar__img { height: 50px; }
    .flag-it { height: 58px; width: 87px; }
}
@media (max-width: 480px) {
    .logo-bar__img { height: 40px; }
    .flag-it { height: 48px; width: 72px; }
}
```

---

## 7. Presentazioni PowerPoint → HTML

### Layout
- **Proporzioni 4:3 mantenute**, no stretching no crop
- Slide alla **massima dimensione possibile** sia desktop che mobile
- Niente sidebar miniature, niente barra del titolo, niente note relatore, niente zoom, niente contatore numerico, niente full-screen dedicato
- **Solo navigazione avanti/indietro** + tastiera + scroll mobile
- **Transizione dissolvenza** tra slide (solo desktop; su mobile scroll naturale)

### Controlli
- **Desktop**: due pulsanti freccia grandi ai lati della slide, rettangolari arrotondati, **solo simboli ◄ ►**, vicini alla slide con pochi px di margine. Una slide alla volta con dissolvenza.
- **Mobile**: **nessuna freccia, nessun pulsante**. Tutte le slide impilate in verticale, navigazione con **scroll nativo** del browser. Margine ~12px tra slide.
- **Tastiera desktop**: ← → per navigare.

### Barra di avanzamento
Sottile (4px), fissa in alto, colore accent.
- Desktop: si riempie in base all'indice slide corrente
- Mobile: si riempie in base alla **percentuale di scroll**

### Struttura file per una presentazione
Ogni presentazione in una **sottocartella dedicata** dentro `Erasmus/`, nominata col titolo:

```
Erasmus/
  Istituzioni Unione europea/
    Istituzioni Unione europea.html   ← HTML rinominato col titolo (non index.html)
    style.css
    script.js                          ← dati slide hardcoded nell'array SLIDES
    images/
      slide-01.png
      slide-02.png
      ...
  Istituzioni Unione europea.pptx     ← sorgente, resta nella radice
```

---

## 8. Responsive — breakpoint

```css
@media (max-width: 1024px), (pointer: coarse) {
    /* Mobile / tablet / touch device */
}
```

Usare sia la larghezza che `pointer: coarse` per intercettare anche i dispositivi touch con schermo grande.

---

## 9. Preview locale

`Erasmus/.claude/launch.json` con Python http.server sulla porta 8765 che serve la cartella Erasmus.

URL di una presentazione: `http://localhost:8765/<Titolo>/<Titolo>.html`

---

## 10. Checklist per una nuova pagina/sezione

- [ ] Palette colori applicata via variabili CSS `:root`
- [ ] Font stack di sistema
- [ ] Testo corpo ≥ 16-18px
- [ ] Tutti i pulsanti ≥ 44×44px
- [ ] Nessun gesto come unica via a una funzione
- [ ] Contrasto alto verificato
- [ ] Responsive testato su mobile (< 1024px) e desktop
- [ ] Testi disabilitati non nascosti, solo grigi
- [ ] **Barra loghi presente** (EU sinistra, ECBL destra)
- [ ] **Bandiera italiana** nell'header centrata
- [ ] Se presentazione: sottocartella dedicata + HTML rinominato col titolo
