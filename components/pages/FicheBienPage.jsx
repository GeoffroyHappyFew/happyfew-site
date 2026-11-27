'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}\nh3{font-family:'Inter Tight',Inter,sans-serif;margin:0}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n@media (max-width:640px){h1{font-size:30px!important}h2{font-size:24px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.mbar{display:flex!important}body{padding-bottom:84px}.slide{height:280px!important}}\n";
const PROPS = {"honoraires": "charge vendeur"};

export default function FicheBienPage() {
  const props = PROPS;
  const [state, setFullState] = useState({ photo: 0, tab: 0, slot: 1 });
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    const photos = [{ img: '/images/HF0203V-01.webp', alt: 'Séjour exposé plein sud' }, { img: '/images/HF0203V-02.webp', alt: 'Séjour et coin repas' }, { img: '/images/HF0203V-03.webp', alt: 'Salon' }, { img: '/images/HF0203V-04.webp', alt: 'Balcon filant sur le jardin arboré' }, { img: '/images/HF0203V-05.webp', alt: 'Vue sur le jardin de la résidence' }, { img: '/images/HF0203V-06.webp', alt: 'Cuisine indépendante équipée' }, { img: '/images/HF0203V-07.webp', alt: 'Cuisine, vue sur les arbres' }, { img: '/images/HF0203V-08.webp', alt: 'Chambre' }, { img: '/images/HF0203V-09.webp', alt: 'Chambre parentale' }, { img: '/images/HF0203V-10.webp', alt: 'Salle de bains' }, { img: '/images/HF0203V-11.webp', alt: 'Séjour, autre vue' }];
    const total = photos.length, i = state.photo;
    const go = (n) => setState({ photo: (n + photos.length) % photos.length });
    const tabsDef = [
      { l: 'Description', h: 'Un 3 pièces traversant au cœur du Parc', d: 'Au 1er étage d’une résidence de standing, cet appartement traversant de 67,49 m² allie luminosité et calme. La pièce de vie, exposée plein sud, se prolonge par un grand balcon filant avec vue sur un jardin arboré. Il se compose d’une entrée avec dressing, d’une cuisine indépendante meublée et équipée, et d’un dégagement avec dressing desservant 2 grandes chambres et une salle de bains.' },
      { l: 'Atouts', h: 'Ce qui fait la différence', d: 'Double exposition et lumière toute la journée. Nombreux rangements. Une cave en sous-sol, un local à vélos sécurisé, et un emplacement de stationnement proposé en supplément.' },
      { l: 'Environnement', h: 'Le quartier du Parc', d: 'À proximité des écoles maternelles et primaires et du collège du Parc, à quelques minutes du Square des Lacs. Boulangeries, pharmacies, primeurs, boucherie, fromagerie et restaurants à moins de 5 minutes à pied. RER A aux stations Le Parc de Saint-Maur et Champignol.' }
    ];
    const letters = [['A','#009C6D'],['B','#52B153'],['C','#A5CC74'],['D','#F4E70F'],['E','#F0B40F'],['F','#EB8235'],['G','#D7221F']];
    return {
      chargeAcq: (props.honoraires ?? 'charge vendeur') === 'charge acquéreur',
      photo: photos[i], counter: (i + 1) + ' / ' + total,
      prev: () => go(i - 1), next: () => go(i + 1),
      thumbs: photos.map((p, k) => ({ img: p.img, label: 'Photo ' + (k + 1) + ' : ' + p.alt, pick: () => go(k), bd: k === i ? '#1F3A2E' : 'transparent' })),
      facts: [
        { v: '67,49 m²', icon: 'M4 4h16v16H4zM4 9h16M9 4v16' },
        { v: '3 pièces', icon: 'M3 21V8l9-5 9 5v13M9 21v-7h6v7' },
        { v: '2 chambres', icon: 'M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 15h18M7 10V7h4v3' },
        { v: 'Balcon filant, plein sud', icon: 'M12 3v2M5.6 5.6l1.4 1.4M3 12h2M19 12h2M17 7l1.4-1.4M8 12a4 4 0 0 1 8 0M3 17h18M6 17v4M18 17v4' },
        { v: '1er étage', icon: 'M6 3h12v18H6zM10 8l2-2 2 2M10 16l2 2 2-2' }
      ],
      tabs: tabsDef.map((t, k) => ({ l: t.l, on: k === state.tab, pick: () => setState({ tab: k }), fg: k === state.tab ? '#1A1F24' : '#5B6470', bd: k === state.tab ? '#1F3A2E' : 'transparent' })),
      tab: tabsDef[state.tab],
      dpe: letters.map(([l, c]) => { const on = l === 'E'; return { l, c, fg: ['C','D','E'].includes(l) ? '#1A1F24' : '#FFFFFF', w: on ? '64px' : '40px', h: on ? '48px' : '36px' }; }),
      ges: [['A','#A3DBFC'],['B','#8AB5D2'],['C','#7692B1'],['D','#5E708D'],['E','#4D5272'],['F','#393551'],['G','#281B35']].map(([l, c]) => { const on = false; return { l, c, fg: ['A','B'].includes(l) ? '#1A1F24' : '#FFFFFF', w: on ? '64px' : '40px', h: on ? '48px' : '36px' }; }),
      tech: [{ k: 'Charges de copropriété', v: '4 462 €/an (environ 372 €/mois)' }, { k: 'Copropriété', v: '48 lots, dont 16 lots d’habitation · procédure : [à vérifier]' }, { k: 'Taxe foncière', v: '1 556 €/an' }, { k: 'Annexes', v: 'Cave · local à vélos · parking en option' }],
      slots: ['Samedi matin', 'Samedi après-midi', 'En semaine, le soir', 'Autre'].map((l, k) => { const on = state.slot === k; return { l, pick: () => setState({ slot: k }), bg: on ? '#1F3A2E' : '#FFFFFF', fg: on ? '#FFFFFF' : '#1A1F24', bd: on ? '#1F3A2E' : '#D9D3C7' }; }),
      similar: [{ v: 'Saint-Maur · Le Parc', d: '4 pièces · 82,75 m² · terrasse', prix: '455 000 €', img: '/images/HF0204V-cover.webp', alt: 'Séjour avec terrasse' }, { v: 'Saint-Maur-des-Fossés', d: 'Maison 8 pièces · 166 m²', prix: '920 000 €', img: '/images/HF0197V-cover.webp', alt: 'Salon sur jardin' }, { v: 'Saint-Maur · Adamville', d: 'Maison 7 pièces · 186 m²', prix: '795 000 €', img: '/images/HF0189V-cover.webp', alt: 'Salon de la maison' }]
    };
  
  })() };
  const chargeAcq = vals.chargeAcq;
  const counter = vals.counter;
  const dpe = vals.dpe;
  const facts = vals.facts;
  const ges = vals.ges;
  const next = vals.next;
  const photo = vals.photo;
  const prev = vals.prev;
  const similar = vals.similar;
  const slots = vals.slots;
  const tab = vals.tab;
  const tabs = vals.tabs;
  const tech = vals.tech;
  const thumbs = vals.thumbs;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header><div className="wrap" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "16px", paddingBottom: "16px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav" aria-label="Principale" style={{display: "flex", gap: "28px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter" style={{color: "#1F3A2E", fontWeight: "600", textDecoration: "none"}}>Acheter</Link><Link href="/vendre" style={{color: "#1A1F24", textDecoration: "none"}}>Vendre</Link><Link href="/secteurs" style={{color: "#1A1F24", textDecoration: "none"}}>Secteurs</Link><Link href="/journal" style={{color: "#1A1F24", textDecoration: "none"}}>Journal</Link><Link href="/agence" style={{color: "#1A1F24", textDecoration: "none"}}>L’agence</Link></nav>
<div style={{display: "flex", alignItems: "center", gap: "8px"}}><Link href="/estimation" className="hide-m" style={{order: "2", background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "15px", textDecoration: "none"}}>Faire estimer mon bien</Link><Link href="/acheter" aria-label="Rechercher" style={{width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center"}}><svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path></svg></Link><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button></div>
</div></header>
<section className="wrap" style={{paddingTop: "8px", display: "flex", flexDirection: "column", gap: "12px"}}>
<nav aria-label="Fil d’Ariane" style={{fontSize: "13px", color: "#5B6470"}}>Accueil › Vente › Saint-Maur-des-Fossés › Appartement 3 pièces</nav>
<div className="slide" style={{position: "relative", height: "560px", borderRadius: "20px", overflow: "hidden"}}>
<img src={photo.img} alt={photo.alt} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} />
<button type="button" onClick={prev} aria-label="Photo précédente" style={{position: "absolute", left: "16px", top: "50%", marginTop: "-22px", width: "44px", height: "44px", border: "0", borderRadius: "999px", background: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.12)"}}><svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2.2" aria-hidden="true"><path d="M15 5l-7 7 7 7"></path></svg></button>
<button type="button" onClick={next} aria-label="Photo suivante" style={{position: "absolute", right: "16px", top: "50%", marginTop: "-22px", width: "44px", height: "44px", border: "0", borderRadius: "999px", background: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.12)"}}><svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2.2" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg></button>
<span style={{position: "absolute", right: "16px", bottom: "16px", background: "rgba(26,31,36,0.75)", color: "#FFFFFF", borderRadius: "999px", padding: "6px 12px", fontSize: "13px", fontWeight: "600"}}>{counter}</span>
<span className="hide-m" style={{position: "absolute", left: "16px", bottom: "16px", display: "flex", gap: "8px"}}><span style={{background: "#FFFFFF", borderRadius: "999px", padding: "8px 14px", fontSize: "13px", fontWeight: "600"}}>Plan</span><span style={{background: "#FFFFFF", borderRadius: "999px", padding: "8px 14px", fontSize: "13px", fontWeight: "600"}}>Plein écran</span></span>
</div>
<div style={{display: "flex", gap: "8px", overflow: "hidden"}}>
{(thumbs || []).map((t, __i) => (<Fragment key={__i}><button type="button" onClick={t.pick} aria-label={t.label} style={{flex: "0 0 110px", height: "72px", borderRadius: "10px", cursor: "pointer", padding: "0", border: `2px solid ${t.bd}`, background: "#E9E4DA", overflow: "hidden"}}><img src={t.img} alt="" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} /></button></Fragment>))}
</div>
</section>
<section className="wrap" style={{paddingTop: "28px", paddingBottom: "80px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start"}}>
<div style={{flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "8px 24px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><h1 style={{fontSize: "40px", lineHeight: "1.1"}}>Appartement 3 pièces avec balcon</h1><span style={{fontSize: "16px", color: "#4A5360"}}>Saint-Maur-des-Fossés · quartier du Parc · réf. HF0203</span></div>
<div style={{display: "flex", alignItems: "center", gap: "8px"}}><span style={{font: "700 30px 'Inter Tight',sans-serif"}}>380 000 €</span><button type="button" aria-label="Ajouter aux favoris" style={{width: "44px", height: "44px", border: "1px solid #ECE8E0", borderRadius: "999px", background: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"}}><svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"></path></svg></button><button type="button" aria-label="Partager" style={{width: "44px", height: "44px", border: "1px solid #ECE8E0", borderRadius: "999px", background: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"}}><svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13"></path></svg></button></div>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px 28px", padding: "18px 0", borderTop: "1px solid #ECE8E0", borderBottom: "1px solid #ECE8E0"}}>
{(facts || []).map((f, __i) => (<Fragment key={__i}>
<span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "500"}}><svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={f.icon}></path></svg>{f.v}</span>
</Fragment>))}
</div>
<div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<div role="tablist" style={{display: "flex", gap: "4px", borderBottom: "1px solid #ECE8E0"}}>
{(tabs || []).map((t, __i) => (<Fragment key={__i}><button type="button" role="tab" aria-selected={t.on} onClick={t.pick} style={{minHeight: "48px", padding: "0 18px", border: "0", background: "transparent", cursor: "pointer", font: "600 15px Inter,sans-serif", color: t.fg, borderBottom: `2px solid ${t.bd}`, marginBottom: "-1px"}}>{t.l}</button></Fragment>))}
</div>
<h3 style={{fontSize: "20px"}}>{tab.h}</h3>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#3A434F"}}>{tab.d}</p>
</div>
<div style={{background: "#F6F1E8", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "18px"}}>
<h2 style={{fontSize: "26px"}}>L’avis honnête de votre conseiller</h2>
<div style={{display: "flex", flexWrap: "wrap", gap: "24px"}}>
<div style={{flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "8px"}}><span style={{fontWeight: "600", color: "#1F6B4A"}}>Points forts</span><span style={{fontSize: "16px", lineHeight: "1.6", color: "#3A434F"}}>Traversant, séjour plein sud prolongé par un grand balcon filant sur jardin arboré, au calme, nombreux rangements, à pied des écoles du Parc et du RER A.</span></div>
<div style={{flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "8px"}}><span style={{fontWeight: "600", color: "#9A4A12"}}>Points d’attention</span><span style={{fontSize: "16px", lineHeight: "1.6", color: "#3A434F"}}>DPE en classe E. [Autres points à compléter par le conseiller : travaux votés, état de la salle de bains…]</span></div>
</div>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<h2 style={{fontSize: "26px"}}>Informations techniques</h2>
<div style={{display: "flex", gap: "4px", flexWrap: "wrap"}} role="img" aria-label="DPE classe E">
{(dpe || []).map((d, __i) => (<Fragment key={__i}><span style={{width: d.w, height: d.h, borderRadius: "6px", background: d.c, color: d.fg, display: "flex", alignItems: "center", justifyContent: "center", font: "700 15px Inter,sans-serif"}}>{d.l}</span></Fragment>))}
</div>
<span style={{fontSize: "13px", fontWeight: "600", color: "#4A5360", marginTop: "4px"}}>Émissions de gaz à effet de serre (GES)</span>
<div style={{display: "flex", gap: "4px", flexWrap: "wrap"}} role="img" aria-label="GES : classe à compléter">
{(ges || []).map((d, __i) => (<Fragment key={__i}><span style={{width: d.w, height: d.h, borderRadius: "6px", background: d.c, color: d.fg, display: "flex", alignItems: "center", justifyContent: "center", font: "700 15px Inter,sans-serif"}}>{d.l}</span></Fragment>))}
</div>
<div style={{fontSize: "14px", lineHeight: "1.6", color: "#4A5360"}}>DPE classe E · [XXX] kWh/m²/an · GES classe [à compléter] · Dépenses énergétiques estimées entre [X] € et [X] € par an (référence [AAAA])</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "1px", background: "#ECE8E0", border: "1px solid #ECE8E0", borderRadius: "12px", overflow: "hidden"}}>
{(tech || []).map((x, __i) => (<Fragment key={__i}><div style={{background: "#FFFFFF", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "2px"}}><span style={{fontSize: "12px", color: "#5B6470"}}>{x.k}</span><span style={{fontWeight: "600"}}>{x.v}</span></div></Fragment>))}
</div>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<h2 style={{fontSize: "26px"}}>Le quartier</h2>
<div className="ph" style={{height: "260px", borderRadius: "14px", background: "#E4E8E3"}}>[CARTE — position approximative, transports, écoles, commerces]</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "8px 20px", fontSize: "14px", color: "#3A434F"}}><span>RER A Le Parc de Saint-Maur · [X] min à pied</span><span>RER A Champignol · [X] min</span><span>Square des Lacs · quelques minutes</span><span>Écoles et collège du Parc</span></div>
</div>
</div>
<aside style={{flex: "1 1 340px", minWidth: "0", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 10px 30px rgba(26,31,36,0.06)"}}>
<div style={{display: "flex", flexDirection: "column", gap: "4px"}}><span style={{font: "700 28px 'Inter Tight',sans-serif"}}>380 000 €</span>{(chargeAcq) ? (<><span style={{fontSize: "14px", lineHeight: "1.55", color: "#4A5360"}}>Prix honoraires inclus. Honoraires : [X] % TTC du prix hors honoraires, soit [X] € TTC, à la charge de l’acquéreur. Prix hors honoraires : [X] €. <Link href="/bareme-honoraires">Barème</Link></span></>) : null}</div>
<div style={{height: "1px", background: "#ECE8E0"}}></div>
<div style={{display: "flex", gap: "12px", alignItems: "center"}}><img src="/images/myriam.jpg" alt="Myriam Verzeaux" style={{width: "56px", height: "56px", flex: "0 0 56px", borderRadius: "999px", objectFit: "cover", border: "2px solid #C9A86A"}} /><div><div style={{fontWeight: "600"}}>Myriam Verzeaux · <a href="tel:+33658434998" style={{color: "#1F3A2E"}}>06 58 43 49 98</a></div><div style={{fontSize: "13px", color: "#4A5360"}}>Vous recontacte pour confirmer la visite</div></div></div>
<span style={{fontSize: "13px", fontWeight: "600", color: "#4A5360"}}>Vos disponibilités pour une visite</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
{(slots || []).map((s, __i) => (<Fragment key={__i}><button type="button" onClick={s.pick} style={{minHeight: "44px", padding: "0 14px", borderRadius: "10px", cursor: "pointer", font: "500 14px Inter,sans-serif", border: `1.5px solid ${s.bd}`, background: s.bg, color: s.fg}}>{s.l}</button></Fragment>))}
</div>
<button type="button" style={{minHeight: "52px", border: "0", borderRadius: "12px", background: "#1F3A2E", color: "#FFFFFF", font: "600 16px Inter,sans-serif", cursor: "pointer"}}>Demander une visite</button>
<button type="button" style={{minHeight: "50px", border: "1.5px solid #1A1F24", borderRadius: "12px", background: "#FFFFFF", color: "#1A1F24", font: "600 15px Inter,sans-serif", cursor: "pointer"}}>Nous contacter</button>
<div style={{display: "flex", justifyContent: "center", gap: "20px", fontSize: "14px", fontWeight: "600"}}><a href="tel:+33658434998">Appeler</a><a href="mailto:myriam@happyfewimmobilier.com">E-mail</a><a href="https://wa.me/33658434998">WhatsApp</a></div>
</aside>
</section>
<section style={{background: "#FAF8F4", borderTop: "1px solid #ECE8E0"}}><div className="wrap" style={{paddingTop: "64px", paddingBottom: "88px", display: "flex", flexDirection: "column", gap: "24px"}}>
<h2 style={{fontSize: "32px"}}>Biens similaires à Saint-Maur</h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px"}}>
{(similar || []).map((b, __i) => (<Fragment key={__i}>
<Link href="/vente/saint-maur-des-fosses/appartement-3-pieces-hf0203" style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexDirection: "column", gap: "8px"}}><div style={{height: "190px", position: "relative"}}><img src={b.img} alt={b.alt} loading="lazy" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px"}} /></div><span style={{font: "700 16px 'Inter Tight',sans-serif"}}>{b.v}</span><span style={{fontSize: "14px", color: "#4A5360", marginTop: "-4px"}}>{b.d}</span><span style={{font: "700 19px 'Inter Tight',sans-serif"}}>{b.prix}</span></Link>
</Fragment>))}
</div>
</div></section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.7"}}><div style={{display: "flex", flexDirection: "column", gap: "14px"}}><div style={{display: "flex", alignItems: "center", gap: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></div><span>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</span></div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #ECE8E0", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33658434998" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "12px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><a href="#" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Demander une visite</a></div>
</div>
    </>
  );
}
