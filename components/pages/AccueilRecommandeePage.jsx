'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}\nh3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n@media (max-width:640px){h1{font-size:36px!important;line-height:1.1!important}h2{font-size:28px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.mbar{display:flex!important}body{padding-bottom:84px}.hero{height:480px!important}.heropad{padding:24px!important}}\n";
const PROPS = {"accent": "#1F3A2E"};

export default function AccueilRecommandeePage() {
  const props = PROPS;
  const [state, setFullState] = useState({});
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    const accent = props.accent ?? '#1F3A2E';
    return {
      accent,
      quick: [
        { l: 'Acheter', href: '/acheter', icon: 'M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6' },
        { l: 'Vendre', href: '/vendre', icon: 'M20 12l-8 8-9-9V3h8zM7.5 7.5h.01' },
        { l: 'Estimation', href: '/estimation', icon: 'M6 3h12v18H6zM9 7h6M9 11h.01M12 11h.01M15 11h.01M9 14h.01M12 14h.01M15 14h.01M9 17h.01M12 17h.01M15 17h.01' },
        { l: 'Nos secteurs', href: '/secteurs', icon: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' }
      ],
      biens: [
        { badge: 'Nouveau', ville: 'Saint-Maur · Le Parc', desc: '3 pièces · 67,49 m² · balcon plein sud', prix: '380 000 €', img: '/images/HF0203V-01.webp', alt: 'Séjour lumineux avec balcon au Parc de Saint-Maur' },
        { badge: 'Exclusivité', ville: 'Saint-Maur-des-Fossés', desc: 'Maison 8 pièces · 166 m² · jardin', prix: '920 000 €', img: '/images/HF0197V-cover.webp', alt: 'Salon donnant sur le jardin, maison à Saint-Maur' },
        { badge: 'Coup de cœur', ville: 'Paris 12e · Michel Bizot', desc: 'Duplex 5 pièces · 99 m² · 5 caves', prix: '950 000 €', img: '/images/HF0186V-cover.webp', alt: 'Séjour du duplex, Paris 12e' }
      ],
      steps: [
        { n: '01', t: 'L’étude de marché', d: 'Votre projet compris, votre bien étudié, le bon prix déterminé à partir d’une sélection ciblée de ventes comparables.' },
        { n: '02', t: 'Les moyens de commercialisation', d: 'Photos professionnelles, base de 3 000 acquéreurs, portails et partenaires, acquéreurs qualifiés avant chaque visite.' },
        { n: '03', t: 'La sécurité et la confiance', d: 'Dossier contrôlé dès le mandat, offres vérifiées, chaque étape coordonnée jusqu’à l’acte.' },
        { n: '04', t: 'La transparence', d: 'Chaque action partagée avec vous et avec tous les acteurs de la vente, documents accessibles à tout moment.' }
      ],
      ventes: [
        { lieu: 'Vincennes', titre: 'Grand 2 pièces · 54,48 m²', prix: 'vendu 510 000 €', auteur: '[Prénom N.], vendeur', source: 'OpinionSystem' },
        { lieu: 'Saint-Maur-des-Fossés', titre: 'Maison 6 pièces · 137,75 m²', prix: 'vendu 899 000 €', auteur: '[Prénom N.], vendeurs', source: 'Google' },
        { lieu: 'Paris', titre: '2 pièces avec cave · 36,71 m²', prix: 'vendu 365 000 €', auteur: '[Prénom N.], vendeuse', source: 'OpinionSystem' }
      ],
      zones: [{ n: 'Saint-Maur-des-Fossés', href: '/secteurs/saint-maur-des-fosses' }, { n: 'La Varenne', href: '/secteurs/saint-maur-des-fosses' }, { n: 'Vincennes', href: '/secteurs' }, { n: 'Paris 12e', href: '/secteurs' }, { n: 'Nogent et Le Perreux', href: '/secteurs' }, { n: 'Montreuil', href: '/secteurs' }],
      posts: [
        { cat: 'Vendre', t: 'Préparer le reportage photo de votre bien', href: '/journal/preparer-reportage-photo' },
        { cat: 'Vendre et acheter', t: 'Avant-contrat signé : les 6 étapes jusqu’à la vente', href: '/journal/avant-contrat-signe-les-6-etapes' },
        { cat: 'Expertise', t: 'Comprendre son DPE : les 5 points à vérifier', href: '/journal/comprendre-son-dpe' },
        { cat: 'Acheter', t: 'Anticiper le coût des travaux', href: '/journal/cout-des-travaux' }
      ]
    };
  
  })() };
  const accent = vals.accent;
  const biens = vals.biens;
  const posts = vals.posts;
  const quick = vals.quick;
  const steps = vals.steps;
  const ventes = vals.ventes;
  const zones = vals.zones;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{background: "#FFFFFF"}}>
<div className="wrap" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "16px", paddingBottom: "16px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "28px", fontSize: "16px", fontWeight: "500"}}>
<Link href="/acheter" style={{color: "#1A1F24", textDecoration: "none"}}>Acheter</Link><Link href="/vendre" style={{color: "#1A1F24", textDecoration: "none"}}>Vendre</Link><Link href="/secteurs" style={{color: "#1A1F24", textDecoration: "none"}}>Secteurs</Link><Link href="/journal" style={{color: "#1A1F24", textDecoration: "none"}}>Journal</Link><Link href="/agence" style={{color: "#1A1F24", textDecoration: "none"}}>L’agence</Link>
</nav>
<div style={{display: "flex", gap: "8px", alignItems: "center"}}>
<Link href="/acheter" aria-label="Rechercher" style={{width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center"}}><svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path></svg></Link>
<Link href="/estimation" className="hide-m" style={{background: accent, color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
<button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
</div>
</div>
</header>
<section className="wrap">
<div className="hero" style={{position: "relative", height: "620px", borderRadius: "24px", overflow: "hidden"}}>
<img src="/images/hero-marne.webp" alt="La Marne entre Saint-Maur-des-Fossés et Joinville-le-Pont, bordée d’arbres" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%"}} />
<div style={{position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,0.5) 100%)"}}></div>
<div className="heropad" style={{position: "absolute", left: "0", right: "0", bottom: "0", padding: "48px", display: "flex", flexDirection: "column", gap: "18px", color: "#FFFFFF"}}>
<h1 style={{fontSize: "68px", lineHeight: "1.04", maxWidth: "760px"}}>Votre agence immobilière au cœur de Paris et de l’Est parisien</h1>
<span style={{fontSize: "17px", fontWeight: "500", letterSpacing: "0.02em"}}>Achat · Vente · Estimation · Conseil</span>
<form role="search" style={{display: "flex", alignItems: "center", gap: "8px", background: "#FFFFFF", borderRadius: "999px", padding: "6px 6px 6px 22px", maxWidth: "620px"}}>
<label style={{flex: "1", minWidth: "0"}}><span style={{position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)"}}>Rechercher</span><input type="text" placeholder="Rechercher un bien, une ville, un quartier…" style={{width: "100%", border: "0", outline: "0", font: "16px Inter,sans-serif", color: "#1A1F24", minHeight: "44px", background: "transparent"}} /></label>
<Link href="/acheter" aria-label="Lancer la recherche" style={{width: "48px", height: "48px", flex: "0 0 48px", borderRadius: "999px", background: accent, display: "flex", alignItems: "center", justifyContent: "center"}}><svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path></svg></Link>
</form>
</div>
</div>
</section>
<section className="wrap" style={{paddingTop: "28px", paddingBottom: "20px"}}>
<div style={{display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "8px", borderBottom: "1px solid #ECE8E0", paddingBottom: "28px"}}>
{(quick || []).map((q, __i) => (<Fragment key={__i}>
<a href={q.href} style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "12px 4px", borderRadius: "14px"}}>
<svg width="30" height="30" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={q.icon}></path></svg>
<span style={{fontSize: "14px", fontWeight: "500", textAlign: "center"}}>{q.l}</span>
</a>
</Fragment>))}
</div>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 24px", paddingTop: "18px", fontSize: "14px", color: "#4A5360"}}>
<span>✓ Honoraires affichés</span><span>✓ Google 5/5 · OpinionSystem 4,9/5</span><span>✓ Retour écrit après chaque visite</span>
</div>
</section>
<section className="wrap" style={{paddingTop: "56px", paddingBottom: "80px", display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "12px"}}><h2 style={{fontSize: "40px"}}>Sélection du moment</h2><Link href="/acheter" style={{fontWeight: "600"}}>Tous nos biens →</Link></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px"}}>
{(biens || []).map((b, __i) => (<Fragment key={__i}>
<Link href="/vente/saint-maur-des-fosses/appartement-3-pieces-hf0203" style={{display: "flex", flexDirection: "column", gap: "12px", textDecoration: "none", color: "#1A1F24"}}>
<div style={{position: "relative", height: "250px"}}><img src={b.img} alt={b.alt} loading="lazy" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px"}} /><span style={{position: "absolute", top: "12px", left: "12px", background: "#FFFFFF", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", fontWeight: "600"}}>{b.badge}</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "2px"}}><span style={{font: "700 17px 'Inter Tight',sans-serif"}}>{b.ville}</span><span style={{fontSize: "14px", color: "#4A5360"}}>{b.desc}</span></div>
<span style={{font: "700 22px 'Inter Tight',sans-serif"}}>{b.prix}</span>
</Link>
</Fragment>))}
</div>
</section>
<section className="wrap" style={{paddingBottom: "80px"}}>
<div style={{background: "#F6F1E8", borderRadius: "24px", overflow: "hidden", display: "flex", flexWrap: "wrap", alignItems: "stretch"}}>
<div style={{flex: "1 1 380px", minHeight: "340px", position: "relative"}}><img src="/images/agence.webp" alt="Espace d’accueil de l’agence Happy Few" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} /></div>
<div className="heropad" style={{flex: "1.2 1 420px", minWidth: "0", padding: "48px", display: "flex", flexDirection: "column", gap: "18px", justifyContent: "center"}}>
<h2 style={{fontSize: "42px", lineHeight: "1.1"}}>Une agence engagée à vos côtés</h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#3A434F"}}>Le service clients et l’accompagnement sont dans notre ADN. Les avis clients parlent d’eux-mêmes :</p>
<p style={{margin: "0", paddingLeft: "18px", borderLeft: "3px solid #1F3A2E", fontFamily: "'DM Serif Display',serif", fontSize: "20px", lineHeight: "1.45", color: "#1F3A2E"}}>« L’établissement affiche une note moyenne très élevée, les clients soulignant régulièrement la réactivité, le professionnalisme et la transparence du suivi. »<span style={{display: "block", marginTop: "8px", fontFamily: "Inter,sans-serif", fontSize: "14px", color: "#4A5360"}}>Synthèse des avis Google · 5/5 sur Google (20 avis), 4,9/5 sur OpinionSystem (119 avis) · <a href="https://maps.app.goo.gl/9ZpFpfXEjrYbEqKQ9" target="_blank" rel="noopener noreferrer" style={{color: "#4A5360"}}>voir les avis</a></span></p>
<Link href="/agence" style={{alignSelf: "flex-start", border: "1.5px solid #1A1F24", color: "#1A1F24", padding: "13px 22px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Découvrir l’agence →</Link>
</div>
</div>
</section>
<section style={{background: "#FAF8F4", borderTop: "1px solid #ECE8E0", borderBottom: "1px solid #ECE8E0"}}>
<div className="wrap" style={{paddingTop: "80px", paddingBottom: "80px", display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-end"}}>
<div style={{maxWidth: "620px", display: "flex", flexDirection: "column", gap: "12px"}}><h2 style={{fontSize: "40px"}}>Vendre avec Happy Few</h2><p style={{margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#4A5360"}}>Quatre points : l’étude de marché, les moyens de commercialisation, la sécurité et la confiance, la transparence.</p></div>
<div style={{border: `1.5px solid ${accent}`, borderRadius: "14px", padding: "16px 20px", fontSize: "16px", lineHeight: "1.5", background: "#FFFFFF"}}><Link href="/bareme-honoraires" style={{fontWeight: "600", color: "#1A1F24"}}>Voir le barème des honoraires →</Link></div>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "20px"}}>
{(steps || []).map((s, __i) => (<Fragment key={__i}>
<div style={{display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px", borderTop: "2px solid #1A1F24"}}>
<span style={{font: "400 26px 'DM Serif Display',Georgia,serif", color: accent}}>{s.n}</span>
<h3 style={{fontSize: "19px"}}>{s.t}</h3>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#4A5360"}}>{s.d}</p>
</div>
</Fragment>))}
</div>
<Link href="/vendre" style={{alignSelf: "flex-start", fontWeight: "600"}}>Notre méthode en détail →</Link>
</div>
</section>
<section className="wrap" style={{paddingTop: "80px", paddingBottom: "80px", display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "flex-end"}}>
<div style={{maxWidth: "620px", display: "flex", flexDirection: "column", gap: "12px"}}><h2 style={{fontSize: "40px"}}>Ils ont vendu avec nous</h2><p style={{margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#4A5360"}}>Chaque vente, avec le prix obtenu et l’avis du vendeur, tel qu’il l’a publié.</p></div>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
<a href="https://maps.app.goo.gl/9ZpFpfXEjrYbEqKQ9" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#1A1F24", border: "1px solid #ECE8E0", borderRadius: "14px", padding: "14px 18px", display: "flex", flexDirection: "column", gap: "2px", minWidth: "190px"}}><span style={{fontSize: "13px", color: "#4A5360"}}>Avis Google</span><span style={{font: "700 20px 'Inter Tight',sans-serif"}}><span aria-hidden="true" style={{color: "#B7791F"}}>★</span> 5/5 <span style={{font: "500 14px Inter,sans-serif", color: "#4A5360"}}>· 20 avis</span></span><span style={{fontSize: "13px", fontWeight: "600", color: accent}}>Voir sur Google →</span></a>
<a href="https://www.opinionsystem.fr/fr-fr/certificate/16494" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#1A1F24", border: "1px solid #ECE8E0", borderRadius: "14px", padding: "14px 18px", display: "flex", flexDirection: "column", gap: "2px", minWidth: "190px"}}><span style={{fontSize: "13px", color: "#4A5360"}}>Avis vérifiés OpinionSystem</span><span style={{font: "700 20px 'Inter Tight',sans-serif"}}><span aria-hidden="true" style={{color: "#B7791F"}}>★</span> 4,9/5 <span style={{font: "500 14px Inter,sans-serif", color: "#4A5360"}}>· 119 avis</span></span><span style={{fontSize: "13px", fontWeight: "600", color: accent}}>Voir sur OpinionSystem →</span></a>
</div>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px"}}>
{(ventes || []).map((v, __i) => (<Fragment key={__i}>
<article style={{border: "1px solid #ECE8E0", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column"}}>
<div style={{position: "relative", height: "180px"}}><div className="ph" style={{position: "absolute", inset: "0"}}>[PHOTO DU BIEN VENDU]</div><span style={{position: "absolute", top: "12px", left: "12px", background: "#1A1F24", color: "#FFFFFF", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em"}}>VENDU</span></div>
<div style={{padding: "20px", display: "flex", flexDirection: "column", gap: "12px", flex: "1"}}>
<div style={{display: "flex", flexDirection: "column", gap: "3px"}}><span style={{font: "700 16px 'Inter Tight',sans-serif"}}>{v.lieu}</span><span style={{fontSize: "14px", color: "#4A5360"}}>{v.titre} · {v.prix}</span></div>
<span role="img" aria-label="5 étoiles sur 5" style={{color: "#B7791F", fontSize: "16px", letterSpacing: "2px"}}>★★★★★</span>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A434F"}}>« [Avis réel du vendeur, repris tel quel] »</p>
<span style={{fontSize: "13px", color: "#4A5360"}}>{v.auteur} · <a href={v.source === "OpinionSystem" ? "https://www.opinionsystem.fr/fr-fr/certificate/16494" : "https://maps.app.goo.gl/9ZpFpfXEjrYbEqKQ9"} target="_blank" rel="noopener noreferrer" style={{fontWeight: "600"}}>{v.source}</a></span>
</div>
</article>
</Fragment>))}
</div>
<span style={{fontSize: "13px", color: "#4A5360"}}>Avis publiés sans modification ni tri, avec l’accord de leurs auteurs. <Link href="/avis-clients">Comment nous collectons les avis</Link></span>
</section>
<section className="wrap" style={{paddingBottom: "80px", display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "12px"}}><h2 style={{fontSize: "40px"}}>Nos secteurs</h2><Link href="/secteurs" style={{fontWeight: "600"}}>Tous nos secteurs →</Link></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "16px"}}>
{(zones || []).map((z, __i) => (<Fragment key={__i}>
<a href={z.href} style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexDirection: "column", gap: "10px"}}>
<div className="ph" style={{height: "170px", borderRadius: "14px", fontSize: "12px"}}>[PHOTO]</div>
<span style={{font: "600 16px 'Inter Tight',sans-serif"}}>{z.n}</span>
</a>
</Fragment>))}
</div>
</section>
<section style={{background: "#FAF8F4", borderTop: "1px solid #ECE8E0"}}>
<div className="wrap" style={{paddingTop: "80px", paddingBottom: "80px", display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "12px"}}><h2 style={{fontSize: "40px"}}>Le Journal</h2><Link href="/journal" style={{fontWeight: "600"}}>Tous les articles →</Link></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px"}}>
{(posts || []).map((p, __i) => (<Fragment key={__i}>
<a href={p.href} style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexDirection: "column", gap: "10px", borderTop: "1.5px solid #1A1F24", paddingTop: "14px"}}>
<span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: accent}}>{p.cat}</span>
<span style={{font: "400 22px/1.25 'DM Serif Display',Georgia,serif"}}>{p.t}</span>
<span style={{fontSize: "13px", color: "#4A5360"}}>Mis à jour le [JJ/MM/AAAA]</span>
</a>
</Fragment>))}
</div>
</div>
</section>
<section style={{background: accent, color: "#FFFFFF"}}>
<div className="wrap" style={{paddingTop: "72px", paddingBottom: "72px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between"}}>
<div style={{display: "flex", flexDirection: "column", gap: "10px", maxWidth: "620px"}}><h2 style={{fontSize: "40px"}}>Combien vaut votre bien ?</h2><p style={{margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D9E6DD"}}>Une estimation argumentée sous 48 h, à partir des ventes réelles de votre rue. Gratuite, sans engagement.</p></div>
<Link href="/estimation" style={{background: "#FFFFFF", color: "#1A1F24", padding: "16px 26px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link>
</div>
</section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}>
<div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.7"}}>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}><div style={{display: "flex", alignItems: "center", gap: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></div><span>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</span></div>
<div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div>
</div>
</footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #ECE8E0", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: accent, color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
