// ============================================================
// lang.js — Galleria fotografica Germania · Erasmus+ ECBL · 5 lingue
// ============================================================

const TRANSLATIONS = {
  it: {
    skip_link:"Salta al contenuto",
    page_title:"Galleria fotografica — Germania", hero_eyebrow:"Germania", hero_title:"Galleria fotografica",
    hero_subtitle:"Immagini del Workshop 1 tedesco nell'ambito del progetto Erasmus+ ECBL.",
    ws1_title:"Workshop 1 — L'Unione Europea: un viaggio nel tempo",
    ws1_caption:"Foto del Workshop 1",
    lightbox_aria:"Immagine ingrandita", footer_text:"Progetto Erasmus+ · Galleria fotografica — Germania", footer_credit: "Progetto web LUTE MILAZZO — curato da Filippo Russo Nuccio",
    btn_home_aria:"Torna alla pagina Home", lang_switcher_aria:"Seleziona la lingua", flag_aria:"Bandiera tedesca",
    btn_top_aria:"Torna in alto", btn_top:"Inizio"
  },
  en: {
    skip_link:"Skip to content",
    page_title:"Photo gallery — Germany", hero_eyebrow:"Germany", hero_title:"Photo gallery",
    hero_subtitle:"Pictures from the German Workshop 1, part of the Erasmus+ ECBL project.",
    ws1_title:"Workshop 1 — The European Union: a Journey through Time",
    ws1_caption:"Workshop 1 photo",
    lightbox_aria:"Enlarged image", footer_text:"Erasmus+ Project · Photo gallery — Germany", footer_credit: "LUTE MILAZZO web project — by Filippo Russo Nuccio",
    btn_home_aria:"Back to Home page", lang_switcher_aria:"Select language", flag_aria:"German flag",
    btn_top_aria:"Back to top", btn_top:"Top"
  },
  pl: {
    skip_link:"Przejdź do treści",
    page_title:"Galeria zdjęć — Niemcy", hero_eyebrow:"Niemcy", hero_title:"Galeria zdjęć",
    hero_subtitle:"Zdjęcia z niemieckiego Warsztatu 1 w ramach projektu Erasmus+ ECBL.",
    ws1_title:"Warsztat 1 — Unia Europejska: podróż w czasie",
    ws1_caption:"Zdjęcie z Warsztatu 1",
    lightbox_aria:"Powiększony obraz", footer_text:"Projekt Erasmus+ · Galeria zdjęć — Niemcy", footer_credit: "Projekt strony LUTE MILAZZO — wykonał Filippo Russo Nuccio",
    btn_home_aria:"Powrót do strony głównej", lang_switcher_aria:"Wybierz język", flag_aria:"Flaga niemiecka",
    btn_top_aria:"Powrót na górę", btn_top:"Góra"
  },
  de: {
    skip_link:"Zum Inhalt springen",
    page_title:"Fotogalerie — Deutschland", hero_eyebrow:"Deutschland", hero_title:"Fotogalerie",
    hero_subtitle:"Bilder vom deutschen Workshop 1 im Rahmen des Erasmus+-Projekts ECBL.",
    ws1_title:"Workshop 1 — Die Europäische Union: eine Reise durch die Zeit",
    ws1_caption:"Foto vom Workshop 1",
    lightbox_aria:"Vergrößertes Bild", footer_text:"Erasmus+-Projekt · Fotogalerie — Deutschland", footer_credit: "LUTE MILAZZO-Webprojekt — von Filippo Russo Nuccio",
    btn_home_aria:"Zurück zur Startseite", lang_switcher_aria:"Sprache auswählen", flag_aria:"Deutsche Flagge",
    btn_top_aria:"Nach oben", btn_top:"Oben"
  },
  lv: {
    skip_link:"Pāriet uz saturu",
    page_title:"Fotogalerija — Vācija", hero_eyebrow:"Vācija", hero_title:"Fotogalerija",
    hero_subtitle:"Attēli no vācu 1. semināra Erasmus+ projekta ECBL ietvaros.",
    ws1_title:"1. seminārs — Eiropas Savienība: ceļojums laikā",
    ws1_caption:"Semināra 1 foto",
    lightbox_aria:"Palielināts attēls", footer_text:"Erasmus+ projekts · Fotogalerija — Vācija", footer_credit: "LUTE MILAZZO tīmekļa projekts — veidoja Filippo Russo Nuccio",
    btn_home_aria:"Atpakaļ uz sākumlapu", lang_switcher_aria:"Izvēlēties valodu", flag_aria:"Vācijas karogs",
    btn_top_aria:"Uz augšu", btn_top:"Augšā"
  }
};

// ============================================================
// Motore i18n + selettore lingua
// ============================================================
(function () {
  'use strict';
  var LANGS = {
    it:{label:'Italiano', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/></svg>'},
    en:{label:'English', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36"><rect width="60" height="36" fill="#012169"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" stroke-width="12"/><path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" stroke-width="4"/><rect x="0" y="13.5" width="60" height="9" fill="#fff"/><rect x="25.5" y="0" width="9" height="36" fill="#fff"/><rect x="0" y="15" width="60" height="6" fill="#C8102E"/><rect x="27" y="0" width="6" height="36" fill="#C8102E"/></svg>'},
    pl:{label:'Polski', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#DC143C"/></svg>'},
    de:{label:'Deutsch', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="6.67" fill="#000"/><rect y="6.67" width="30" height="6.67" fill="#DD0000"/><rect y="13.33" width="30" height="6.67" fill="#FFCE00"/></svg>'},
    lv:{label:'Latviešu', svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="8" fill="#9E3039"/><rect y="8" width="30" height="4" fill="#fff"/><rect y="12" width="30" height="8" fill="#9E3039"/></svg>'}
  };
  var currentLang = localStorage.getItem('erasmus_lang') || 'it';
  function apply(lang){
    var t=TRANSLATIONS[lang]; if(!t) return;
    document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n'); if(t[k]!==undefined) el.textContent=t[k];});
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){var k=el.getAttribute('data-i18n-html'); if(t[k]!==undefined) el.innerHTML=t[k];});
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){var k=el.getAttribute('data-i18n-aria'); if(t[k]!==undefined) el.setAttribute('aria-label',t[k]);});
    if(t.page_title) document.title=t.page_title;
    document.documentElement.setAttribute('lang',lang);
    document.querySelectorAll('.lang-btn').forEach(function(b){var a=b.getAttribute('data-lang')===lang;b.classList.toggle('lang-btn--active',a);b.setAttribute('aria-pressed',a?'true':'false');});
    var sw=document.getElementById('langSwitcher');
    if(sw&&sw._mobileFlag){sw._mobileFlag.src='data:image/svg+xml,'+encodeURIComponent(LANGS[lang].svg);sw._mobileFlag.alt=LANGS[lang].label;}
    if(sw&&sw._dropdown) sw._dropdown.querySelectorAll('[data-lang-item]').forEach(function(i){i.classList.toggle('lang-dropdown-item--active',i.getAttribute('data-lang-item')===lang);});
    currentLang=lang; localStorage.setItem('erasmus_lang',lang);
  }
  function mkFlag(code,w,h){var img=document.createElement('img');img.src='data:image/svg+xml,'+encodeURIComponent(LANGS[code].svg);img.alt=LANGS[code].label;img.setAttribute('width',String(w));img.setAttribute('height',String(h));img.style.cssText='border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,0.15);display:block;flex-shrink:0;';return img;}
  function build(){
    var sw=document.getElementById('langSwitcher'); if(!sw) return;
    Object.keys(LANGS).forEach(function(code){var b=document.createElement('button');b.className='lang-btn';b.setAttribute('data-lang',code);b.setAttribute('aria-label',LANGS[code].label);b.setAttribute('aria-pressed','false');b.setAttribute('type','button');b.appendChild(mkFlag(code,32,22));b.addEventListener('click',function(){apply(code);});sw.appendChild(b);});
    var mb=document.createElement('button');mb.className='lang-mobile-btn';mb.id='langMobileBtn';mb.setAttribute('type','button');mb.setAttribute('aria-haspopup','true');mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Seleziona la lingua');
    var mf=document.createElement('img');mf.setAttribute('width','32');mf.setAttribute('height','22');mf.style.cssText='border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,0.15);display:block;';mb.appendChild(mf);
    var ar=document.createElement('span');ar.className='lang-mobile-arrow';ar.setAttribute('aria-hidden','true');ar.textContent='▾';mb.appendChild(ar);
    var dd=document.createElement('div');dd.className='lang-dropdown';dd.id='langDropdown';dd.setAttribute('hidden','');
    Object.keys(LANGS).forEach(function(code){var it=document.createElement('button');it.className='lang-dropdown-item';it.setAttribute('type','button');it.setAttribute('data-lang-item',code);it.appendChild(mkFlag(code,32,22));it.appendChild(document.createTextNode(' '+LANGS[code].label));it.addEventListener('click',function(e){e.stopPropagation();apply(code);cl();});dd.appendChild(it);});
    function op(){dd.removeAttribute('hidden');mb.setAttribute('aria-expanded','true');} function cl(){dd.setAttribute('hidden','');mb.setAttribute('aria-expanded','false');}
    mb.addEventListener('click',function(e){e.stopPropagation();mb.getAttribute('aria-expanded')==='true'?cl():op();});
    document.addEventListener('click',function(){cl();});
    sw.appendChild(mb);(sw.closest('.logo-bar')||document.body).appendChild(dd);
    sw._mobileFlag=mf; sw._dropdown=dd;
  }
  function init(){build();apply(currentLang);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
}());
