// ============================================================
// script.js — Presentazione interattiva Unione Europea
// Desktop: frecce laterali + transizione fade
// Mobile:  scroll verticale di tutte le card
// ============================================================

let SLIDES = window.SLIDES || [];
const FADE_MS = 220;

const $stage        = document.getElementById('stage');
const $prev         = document.getElementById('prevBtn');
const $next         = document.getElementById('nextBtn');
const $progress     = document.getElementById('progressFill');
const $counter      = document.getElementById('counter');
const $mobileScroll = document.getElementById('mobileScroll');

let idx = 0;
let isTransitioning = false;

const mobileMQ = window.matchMedia('(max-width: 1024px), (pointer: coarse)');
const isMobileLayout = () => mobileMQ.matches;

// ---------- Renderers ----------

function renderSection(s) {
  if (s.type === 'text') {
    return `<p class="section__text">${s.body}</p>`;
  }
  if (s.type === 'list') {
    return `<ul class="section__list">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  }
  if (s.type === 'table') {
    const head = s.head
      ? `<thead><tr>${s.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>`
      : '';
    // data-label = intestazione di colonna → usato su mobile per le schede impilate
    const body = `<tbody>${s.rows.map(r =>
      `<tr>${r.map((c, ci) => {
        const lbl = (s.head && s.head[ci]) ? String(s.head[ci]).replace(/"/g, '&quot;') : '';
        return `<td data-label="${lbl}">${c}</td>`;
      }).join('')}</tr>`
    ).join('')}</tbody>`;
    return `<table class="section__table">${head}${body}</table>`;
  }
  if (s.type === 'video') {
    return `<div class="section__video-wrap">
      <iframe src="${s.src}" title="${s.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>`;
  }
  if (s.type === 'chips') {
    return `<div class="section__chips">${s.items.map(c =>
      `<span class="chip">${c.text}<span class="chip__sub">${c.sub}</span></span>`
    ).join('')}</div>`;
  }
  if (s.type === 'tricolor') {
    return `<div class="tricolor">${s.blocks.map(b =>
      `<div class="tricolor__col" style="background:${b.color}">${b.label}</div>`
    ).join('')}</div>`;
  }
  if (s.type === 'diagram') {
    // Triangolo istituzionale UE — schema flow di processo legislativo
    var L = s.labels || {};
    return `
      <div class="triangle-diagram" role="img" aria-label="${L.aria || ''}">
        <div class="td-row td-row--single">
          <div class="td-card td-card--council-eu">
            <div class="td-card__role">${L.role_council_eu || ''}</div>
            <div class="td-card__name">${L.name_council_eu || ''}</div>
            <div class="td-card__action">${L.action_council_eu || ''}</div>
          </div>
        </div>
        <div class="td-arrow" aria-hidden="true">↓</div>
        <div class="td-row td-row--single">
          <div class="td-card td-card--commission">
            <div class="td-card__role">${L.role_commission || ''}</div>
            <div class="td-card__name">${L.name_commission || ''}</div>
            <div class="td-card__action">${L.action_commission || ''}</div>
          </div>
        </div>
        <div class="td-arrow" aria-hidden="true">↓</div>
        <div class="td-row td-row--double">
          <div class="td-card td-card--parliament">
            <div class="td-card__role">${L.role_parliament || ''}</div>
            <div class="td-card__name">${L.name_parliament || ''}</div>
          </div>
          <div class="td-link" aria-hidden="true">⇄</div>
          <div class="td-card td-card--council">
            <div class="td-card__role">${L.role_council || ''}</div>
            <div class="td-card__name">${L.name_council || ''}</div>
          </div>
        </div>
        <div class="td-caption">${L.caption_codecision || ''}</div>
        <div class="td-arrow" aria-hidden="true">↓</div>
        <div class="td-row td-row--single">
          <div class="td-card td-card--cjeu">
            <div class="td-card__role">${L.role_cjeu || ''}</div>
            <div class="td-card__name">${L.name_cjeu || ''}</div>
            <div class="td-card__action">${L.action_cjeu || ''}</div>
          </div>
        </div>
      </div>`;
  }
  return '';
}

function renderCard(slide) {
  const top = `
    <div class="card__top">
      <h2 class="card__title">${slide.title}</h2>
      ${slide.subtitle ? `<p class="card__subtitle">${slide.subtitle}</p>` : ''}
    </div>`;

  const banner = slide.banner
    ? `<div class="card__banner">${slide.banner}</div>`
    : '';

  const meta = slide.meta && slide.meta.length
    ? `<div class="card__meta">${slide.meta.map(([k, v]) =>
        `<span class="meta-pill">
           <span class="meta-pill__label">${k}</span>
           <span class="meta-pill__value">${v}</span>
         </span>`
      ).join('')}</div>`
    : '';

  const sections = (slide.sections || []).map(s => `
    <div class="section">
      <h3 class="section__heading">${s.heading}</h3>
      ${renderSection(s)}
    </div>`
  ).join('');

  const hasImages = slide.images && slide.images.length > 0;
  const images = hasImages
    ? `<aside class="card__images">${slide.images.map(img => {
        const src     = typeof img === 'string' ? img : img.src;
        const caption = typeof img === 'object' && img.caption ? img.caption : '';
        return `<figure class="card__figure">
          <img src="${src}" alt="${caption}" loading="lazy">
          ${caption ? `<figcaption class="card__caption">${caption}</figcaption>` : ''}
        </figure>`;
      }).join('')}</aside>`
    : '';

  const bodyClass = hasImages ? 'card__body' : 'card__body card__body--no-images';

  return `
    <article class="card" data-slide="${slide.id}">
      ${top}${banner}${meta}
      <div class="${bodyClass}">
        <div class="card__text">${sections}</div>
        ${images}
      </div>
    </article>`;
}

// ---------- Mobile: tutte le card ----------
function buildMobileScroll() {
  $mobileScroll.innerHTML = SLIDES.map(renderCard).join('');
}

// ---------- Desktop: card singola con fade ----------
function renderDesktop() {
  const slide = SLIDES[idx];
  $progress.style.width = ((idx + 1) / SLIDES.length * 100) + '%';
  $counter.textContent = `${idx + 1} / ${SLIDES.length}`;
  $prev.disabled = idx === 0;
  $next.disabled = idx === SLIDES.length - 1;

  const current = $stage.querySelector('.card');
  if (current) current.classList.add('is-fading');

  setTimeout(() => {
    $stage.innerHTML = renderCard(slide);
    // Riporta sempre la pagina all'inizio della nuova slide
    window.scrollTo(0, 0);
    const fresh = $stage.querySelector('.card');
    if (fresh) {
      fresh.classList.add('is-fading');
      requestAnimationFrame(() => requestAnimationFrame(() =>
        fresh.classList.remove('is-fading')
      ));
    }
  }, FADE_MS);
}

function goTo(newIdx) {
  if (isTransitioning) return;
  if (newIdx < 0 || newIdx >= SLIDES.length) return;
  if (newIdx === idx) return;
  isTransitioning = true;
  idx = newIdx;
  renderDesktop();
  setTimeout(() => { isTransitioning = false; }, FADE_MS + 60);
}

const prev = () => goTo(idx - 1);
const next = () => goTo(idx + 1);

// ---------- Mobile: progress dalla scroll ----------
function updateProgressFromScroll() {
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop || 0;
  const max = (doc.scrollHeight - doc.clientHeight) || 0;
  const pct = max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0;
  $progress.style.width = pct + '%';

  const cards = $mobileScroll.querySelectorAll('.card');
  const viewportCenter = window.innerHeight / 2;
  let closest = 0, closestDist = Infinity;
  cards.forEach((c, i) => {
    const rect = c.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const dist = Math.abs(center - viewportCenter);
    if (dist < closestDist) { closestDist = dist; closest = i; }
  });
  $counter.textContent = `${closest + 1} / ${SLIDES.length}`;
}

// ---------- Ricarica slide al cambio lingua ----------
window.reloadSlides = function () {
  SLIDES = window.SLIDES || [];
  // Preserva l'indice corrente; reset solo se ora fuori range
  if (idx < 0 || idx >= SLIDES.length) idx = 0;

  // Memorizza posizione scroll mobile per ripristinarla dopo il rebuild
  var prevScroll = window.scrollY || document.documentElement.scrollTop || 0;

  buildMobileScroll();
  if (isMobileLayout()) {
    // Ripristina lo scroll alla stessa posizione (la card mobile è stata ricostruita)
    window.scrollTo(0, prevScroll);
    updateProgressFromScroll();
  } else {
    renderDesktop();
  }
};

// ---------- Tastiera ----------
document.addEventListener('keydown', (e) => {
  if (isMobileLayout()) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault(); next();
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault(); prev();
  } else if (e.key === 'Home') {
    e.preventDefault(); goTo(0);
  } else if (e.key === 'End') {
    e.preventDefault(); goTo(SLIDES.length - 1);
  }
});

$prev.addEventListener('click', prev);
$next.addEventListener('click', next);

window.addEventListener('scroll', () => {
  if (isMobileLayout()) updateProgressFromScroll();
}, { passive: true });

function applyLayout() {
  if (isMobileLayout()) updateProgressFromScroll();
  else renderDesktop();
}
mobileMQ.addEventListener('change', applyLayout);
window.addEventListener('resize', () => {
  if (isMobileLayout()) updateProgressFromScroll();
});

// ---------- Init ----------
buildMobileScroll();
renderDesktop();
if (isMobileLayout()) updateProgressFromScroll();
