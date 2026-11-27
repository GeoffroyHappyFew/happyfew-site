'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.p{margin:0;font-size:18px;line-height:1.75;color:#2E363F}\ntd,th{padding:12px 14px;border-bottom:1px solid #E7E2D8;text-align:left;font-size:16px}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function JournalArticlePage() {
  const props = PROPS;
  const [state, setFullState] = useState({});
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    return {
      rows: ['La Varenne-Saint-Hilaire', 'Le Parc de Saint-Maur', 'Adamville', 'Champignol'].map((q) => ({ q })),
      related: [
        { c: 'Vendre', t: 'Quels documents préparer pour vendre un appartement ?' },
        { c: 'Acheter', t: 'Où acheter près du RER A, de Vincennes à La Varenne ?' },
        { c: 'Expertise', t: 'Les étapes d’une vente, du mandat à l’acte' }
      ]
    };
  
  })() };
  const related = vals.related;
  const rows = vals.rows;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter">Acheter</Link><Link href="/vendre">Vendre</Link><Link href="/secteurs">Secteurs</Link><Link href="/journal" style={{color: "#1F3A2E", fontWeight: "600"}}>Journal</Link><Link href="/agence">L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<div className="wrap" style={{paddingTop: "40px", paddingBottom: "88px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-start"}}>
<article style={{flex: "999 1 620px", minWidth: "0", maxWidth: "760px", display: "flex", flexDirection: "column", gap: "24px"}}>
<nav aria-label="Fil d’Ariane" style={{fontSize: "13px", color: "#5B6470"}}>Journal › Marché local › Saint-Maur-des-Fossés</nav>
<span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#1F3A2E"}}>Marché local</span>
<h1 style={{fontSize: "44px", lineHeight: "1.1"}}>Prix au m² à Saint-Maur-des-Fossés : le point du trimestre</h1>
<div style={{display: "flex", alignItems: "center", gap: "12px"}}><div style={{width: "44px", height: "44px", flex: "0 0 44px", borderRadius: "999px", background: "#F6F1E8", display: "flex", alignItems: "center", justifyContent: "center"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "22px", width: "auto"}} /></div><div style={{fontSize: "14px", lineHeight: "1.5"}}><strong>Geoffroy</strong>, Happy Few Immobilier<br /><span style={{color: "#4A5360"}}>Mis à jour le [JJ/MM/AAAA] · 6 min de lecture</span></div></div>
<div style={{background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "14px", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "8px"}}>
<span style={{fontWeight: "600"}}>L’essentiel</span>
<span style={{fontSize: "16px", lineHeight: "1.6", color: "#3A434F"}}>[Trois phrases qui répondent directement à la question : prix médian, tendance, conseil. C’est aussi ce que les moteurs IA reprennent.]</span>
</div>
<div className="ph" style={{height: "380px", borderRadius: "16px"}}>[PHOTO ORIGINALE — rue de Saint-Maur]</div>
<h2 style={{fontSize: "28px", paddingTop: "8px"}}>Les prix par quartier</h2>
<p className="p">[Introduction factuelle.]</p>
<div style={{overflowX: "auto", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "14px"}}>
<table style={{width: "100%", borderCollapse: "collapse", minWidth: "520px"}}>
<thead><tr style={{background: "#F1EDE5"}}><th scope="col">Quartier</th><th scope="col">Appartement</th><th scope="col">Maison</th><th scope="col">12 mois</th></tr></thead>
<tbody>
{(rows || []).map((r, __i) => (<Fragment key={__i}><tr><td style={{fontWeight: "600"}}>{r.q}</td><td>[X] €/m²</td><td>[X] €/m²</td><td>[±X] %</td></tr></Fragment>))}
</tbody>
</table>
</div>
<span style={{fontSize: "13px", color: "#4A5360"}}>Source : DVF (data.gouv.fr), ventes de [période]. Calcul : médiane des prix au m².</span>
<h2 style={{fontSize: "28px", paddingTop: "8px"}}>Ce que nous observons sur le terrain</h2>
<p className="p">[L’avis de l’agence : délais constatés, biens recherchés, niveau de négociation. C’est ce qui distingue l’article d’une simple compilation de chiffres.]</p>
<div style={{background: "#1F3A2E", color: "#FFFFFF", borderRadius: "16px", padding: "28px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "space-between"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px", maxWidth: "440px"}}><span style={{font: "600 21px 'Inter Tight',sans-serif"}}>Et votre bien, combien vaut-il ?</span><span style={{fontSize: "16px", color: "#D9E6DD"}}>Estimation argumentée sous 48 h, gratuite.</span></div>
<Link href="/estimation" style={{background: "#FFFFFF", color: "#1A1F24", padding: "14px 22px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link>
</div>
<h2 style={{fontSize: "28px", paddingTop: "8px"}}>Questions fréquentes</h2>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<div><h3 style={{fontSize: "18px"}}>[Question 1 ?]</h3><p className="p" style={{fontSize: "16px"}}>[Réponse courte et précise.]</p></div>
<div><h3 style={{fontSize: "18px"}}>[Question 2 ?]</h3><p className="p" style={{fontSize: "16px"}}>[Réponse courte et précise.]</p></div>
</div>
</article>
<aside style={{flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px"}}>
<div style={{background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px"}}>
<span style={{fontWeight: "600"}}>Dans cet article</span>
<a href="#" style={{fontSize: "16px"}}>Les prix par quartier</a><a href="#" style={{fontSize: "16px"}}>Ce que nous observons</a><a href="#" style={{fontSize: "16px"}}>Questions fréquentes</a>
</div>
<div style={{background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px"}}>
<span style={{fontWeight: "600"}}>À lire aussi</span>
{(related || []).map((r, __i) => (<Fragment key={__i}><a href="#" style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexDirection: "column", gap: "2px", borderTop: "1px solid #EFEBE3", paddingTop: "10px"}}><span style={{fontSize: "12px", fontWeight: "600", color: "#1F3A2E"}}>{r.c}</span><span style={{fontSize: "16px", fontWeight: "500", lineHeight: "1.4"}}>{r.t}</span></a></Fragment>))}
</div>
<Link href="/secteurs/saint-maur-des-fosses" style={{textDecoration: "none", color: "#1A1F24", background: "#F1EDE5", borderRadius: "16px", padding: "22px", display: "flex", flexDirection: "column", gap: "6px"}}><span style={{fontSize: "12px", fontWeight: "600", color: "#1F3A2E"}}>SECTEUR</span><span style={{font: "600 18px 'Inter Tight',sans-serif"}}>Tout sur l’immobilier à Saint-Maur →</span></Link>
</aside>
</div>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
