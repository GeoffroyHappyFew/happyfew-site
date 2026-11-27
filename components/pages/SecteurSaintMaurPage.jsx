'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function SecteurSaintMaurPage() {
  const props = PROPS;
  const [state, setFullState] = useState({ open: 0 });
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    const qs = ['Quel est le prix au m² à Saint-Maur-des-Fossés ?', 'Combien de temps faut-il pour vendre à Saint-Maur ?', 'Quels quartiers sont les plus recherchés par les familles ?', 'Faut-il faire estimer son bien avant de le mettre en vente ?'];
    return {
      biens: [{ d: '3 pièces · 67,49 m² · Le Parc', prix: '380 000 €', img: '/images/HF0203V-01.webp', alt: 'Séjour avec balcon, Le Parc' }, { d: '4 pièces · 82,75 m² · Le Parc', prix: '455 000 €', img: '/images/HF0204V-cover.webp', alt: 'Séjour avec terrasse, Le Parc' }, { d: 'Maison 7 pièces · 186 m² · Adamville', prix: '795 000 €', img: '/images/HF0189V-cover.webp', alt: 'Salon de la maison à Adamville' }],
      quartiers: ['La Varenne-Saint-Hilaire', 'Le Parc de Saint-Maur', 'Adamville', 'Champignol', 'Saint-Maur Créteil', 'Le Vieux Saint-Maur'].map((n) => ({ n })),
      faq: qs.map((q, i) => {
        const open = state.open === i;
        return { q, open, icon: open ? '−' : '+', toggle: () => setState({ open: open ? -1 : i }) };
      })
    };
  
  })() };
  const biens = vals.biens;
  const faq = vals.faq;
  const quartiers = vals.quartiers;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "24px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter" style={{color: "#1A1F24", textDecoration: "none"}}>Acheter</Link><Link href="/vendre" style={{color: "#1A1F24", textDecoration: "none"}}>Vendre</Link><Link href="/secteurs" style={{color: "#1F3A2E", textDecoration: "none", fontWeight: "600"}}>Secteurs</Link><Link href="/journal" style={{color: "#1A1F24", textDecoration: "none"}}>Journal</Link><Link href="/agence" style={{color: "#1A1F24", textDecoration: "none"}}>L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<section className="wrap" style={{paddingTop: "40px", paddingBottom: "56px", display: "flex", flexDirection: "column", gap: "24px"}}>
<nav aria-label="Fil d’Ariane" style={{fontSize: "13px", color: "#5B6470"}}>Accueil › Secteurs › Saint-Maur-des-Fossés</nav>
<div style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end"}}>
<div style={{flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px"}}>
<h1 style={{fontSize: "52px", lineHeight: "1.05"}}>Immobilier à Saint-Maur-des-Fossés</h1>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.65", color: "#3A434F"}}>Notre agence est installée 17 avenue de Plaisance. [Depuis quand, combien de ventes ici, quels types de biens : à rédiger avec des chiffres réels.]</p>
</div>
<div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}><Link href="/estimation" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "14px 22px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien à Saint-Maur</Link><a href="#biens" style={{border: "1.5px solid #1A1F24", color: "#1A1F24", padding: "13px 20px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Voir les biens</a></div>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1px", background: "#E7E2D8", border: "1px solid #E7E2D8", borderRadius: "16px", overflow: "hidden"}}>
<div style={{background: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "column", gap: "4px"}}><span style={{fontSize: "13px", color: "#4A5360"}}>Prix médian appartement</span><span style={{font: "700 26px 'Inter Tight',sans-serif"}}>[X] €/m²</span></div>
<div style={{background: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "column", gap: "4px"}}><span style={{fontSize: "13px", color: "#4A5360"}}>Prix médian maison</span><span style={{font: "700 26px 'Inter Tight',sans-serif"}}>[X] €/m²</span></div>
<div style={{background: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "column", gap: "4px"}}><span style={{fontSize: "13px", color: "#4A5360"}}>Évolution sur 12 mois</span><span style={{font: "700 26px 'Inter Tight',sans-serif"}}>[±X] %</span></div>
<div style={{background: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "column", gap: "4px"}}><span style={{fontSize: "13px", color: "#4A5360"}}>Nos ventes ici depuis [AAAA]</span><span style={{font: "700 26px 'Inter Tight',sans-serif"}}>[N]</span></div>
</div>
<span style={{fontSize: "13px", color: "#4A5360"}}>Source : ventes réelles DVF (data.gouv.fr) et notaires du Grand Paris, données au [JJ/MM/AAAA].</span>
</section>
<section id="biens" style={{background: "#FFFFFF", borderTop: "1px solid #E7E2D8", borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{paddingTop: "64px", paddingBottom: "64px", display: "flex", flexDirection: "column", gap: "24px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "12px"}}><h2 style={{fontSize: "32px"}}>À vendre à Saint-Maur</h2><a href="#" style={{fontWeight: "600"}}>Les [N] biens →</a></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px"}}>
{(biens || []).map((b, __i) => (<Fragment key={__i}>
<Link href="/vente/saint-maur-des-fosses/appartement-3-pieces-hf0203" style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexDirection: "column", gap: "10px"}}><div style={{height: "190px", position: "relative"}}><img src={b.img} alt={b.alt} loading="lazy" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px"}} /></div><span style={{font: "700 19px 'Inter Tight',sans-serif"}}>{b.prix}</span><span style={{fontSize: "14px", color: "#4A5360", marginTop: "-6px"}}>{b.d}</span></Link>
</Fragment>))}
</div>
</div></section>
<section className="wrap" style={{paddingTop: "72px", paddingBottom: "72px", display: "flex", flexDirection: "column", gap: "24px"}}>
<h2 style={{fontSize: "32px"}}>Les quartiers de Saint-Maur</h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "16px"}}>
{(quartiers || []).map((q, __i) => (<Fragment key={__i}>
<a href="#" style={{textDecoration: "none", color: "#1A1F24", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "14px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px"}}>
<span style={{font: "600 19px 'Inter Tight',sans-serif"}}>{q.n}</span>
<span style={{fontSize: "14px", lineHeight: "1.6", color: "#4A5360"}}>[Ambiance, type de biens, gare la plus proche — à rédiger]</span>
<span style={{fontSize: "13px", fontWeight: "600", color: "#1F3A2E"}}>Prix médian [X] €/m² →</span>
</a>
</Fragment>))}
</div>
</section>
<section className="wrap" style={{paddingBottom: "72px", display: "flex", flexWrap: "wrap", gap: "24px"}}>
<div style={{flex: "1 1 460px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", overflow: "hidden", display: "flex", flexWrap: "wrap"}}>
<div className="ph" style={{flex: "1 1 180px", minHeight: "200px"}}>[PHOTO VENDU]</div>
<div style={{flex: "2 1 260px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px"}}>
<span style={{fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#1F3A2E"}}>VENDU RÉCEMMENT</span>
<span style={{font: "600 18px 'Inter Tight',sans-serif"}}>Maison 6 pièces · 137,75 m² · vendue 899 000 €</span>
<span role="img" aria-label="5 étoiles sur 5" style={{color: "#B7791F", letterSpacing: "2px"}}>★★★★★</span>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A434F"}}>« [Avis réel du vendeur] »</p>
<span style={{fontSize: "13px", color: "#4A5360"}}>[Prénom N.] · <a href="#" style={{fontWeight: "600"}}>OpinionSystem</a></span>
</div>
</div>
<div style={{flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px"}}>
<a href="#" style={{textDecoration: "none", color: "#1A1F24", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", gap: "6px", flex: "1"}}><span style={{fontSize: "12px", fontWeight: "600", color: "#1F3A2E", letterSpacing: "0.06em"}}>VENDRE À SAINT-MAUR</span><span style={{font: "600 18px 'Inter Tight',sans-serif"}}>Maison ou appartement : comment fixer le bon prix</span></a>
<a href="#" style={{textDecoration: "none", color: "#1A1F24", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", gap: "6px", flex: "1"}}><span style={{fontSize: "12px", fontWeight: "600", color: "#1F3A2E", letterSpacing: "0.06em"}}>ACHETER À SAINT-MAUR</span><span style={{font: "600 18px 'Inter Tight',sans-serif"}}>Quel quartier choisir, de La Varenne à Adamville</span></a>
</div>
</section>
<section style={{background: "#FFFFFF", borderTop: "1px solid #E7E2D8"}}><div className="wrap" style={{paddingTop: "72px", paddingBottom: "72px", display: "flex", flexWrap: "wrap", gap: "48px"}}>
<h2 style={{flex: "1 1 280px", fontSize: "32px"}}>Questions fréquentes</h2>
<div style={{flex: "2 1 560px", minWidth: "0", display: "flex", flexDirection: "column"}}>
{(faq || []).map((f, __i) => (<Fragment key={__i}>
<div style={{borderBottom: "1px solid #E7E2D8"}}>
<button type="button" onClick={f.toggle} aria-expanded={f.open} style={{width: "100%", minHeight: "60px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", border: "0", background: "transparent", textAlign: "left", cursor: "pointer", font: "600 17px 'Inter Tight',sans-serif", color: "#1A1F24", padding: "12px 0"}}><span>{f.q}</span><span aria-hidden="true" style={{fontSize: "22px", color: "#1F3A2E"}}>{f.icon}</span></button>
{(f.open) ? (<><p style={{margin: "0 0 18px", fontSize: "16px", lineHeight: "1.65", color: "#3A434F"}}>[Réponse précise, datée et sourcée.]</p></>) : null}
</div>
</Fragment>))}
</div>
</div></section>
<section style={{background: "#1F3A2E", color: "#FFFFFF"}}><div className="wrap" style={{paddingTop: "56px", paddingBottom: "56px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><h2 style={{fontSize: "30px"}}>Vous vendez à Saint-Maur ?</h2><span style={{fontSize: "16px", color: "#D9E6DD"}}>Geoffroy : 06 59 03 47 52 · Myriam : 06 58 43 49 98</span></div>
<Link href="/estimation" style={{background: "#FFFFFF", color: "#1A1F24", padding: "15px 24px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link>
</div></section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.7"}}><div style={{display: "flex", flexDirection: "column", gap: "14px"}}><div style={{display: "flex", alignItems: "center", gap: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div><span>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</span></div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
