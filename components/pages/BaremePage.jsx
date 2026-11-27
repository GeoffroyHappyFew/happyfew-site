'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.in{display:block;width:100%;box-sizing:border-box;margin-top:6px;min-height:50px;border:1px solid #D9D3C7;border-radius:12px;padding:0 14px;font:16px Inter,sans-serif;background:#FFFFFF}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function BaremePage() {
  const props = PROPS;
  const [state, setFullState] = useState({});
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () { return {}; 
  })() };
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter">Acheter</Link><Link href="/vendre">Vendre</Link><Link href="/secteurs">Secteurs</Link><Link href="/journal">Journal</Link><Link href="/agence">L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<div className="wrap" style={{paddingTop: "56px", paddingBottom: "88px", display: "flex", flexDirection: "column", gap: "28px"}}>
<nav aria-label="Fil d’Ariane" style={{fontSize: "13px", color: "#5B6470"}}>Accueil › Barème des honoraires</nav>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}><h1 style={{fontSize: "48px"}}>Barème des honoraires</h1><span style={{fontSize: "16px", color: "#4A5360"}}>Montants TTC (TVA à 20 %) · tarifs applicables à compter du 1er juin 2024</span></div>
<a href="/docs/bareme-honoraires-happy-few.pdf" style={{border: "1.5px solid #1A1F24", color: "#1A1F24", padding: "13px 20px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Télécharger le barème (PDF)</a>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start"}}>
<section style={{flex: "1 1 460px", minWidth: "0", background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column"}}>
<h2 style={{margin: "0", background: "#1F3A2E", color: "#FFFFFF", padding: "18px 24px", font: "400 26px 'DM Serif Display',Georgia,serif"}}>Transaction</h2>
<div style={{padding: "24px", display: "flex", flexDirection: "column", gap: "20px"}}>
<table style={{width: "100%", borderCollapse: "collapse", fontSize: "16px"}}>
<thead><tr style={{background: "#F6F1E8"}}><th scope="col" style={{textAlign: "left", padding: "14px 16px"}}>Prix de vente</th><th scope="col" style={{textAlign: "left", padding: "14px 16px"}}>Honoraires TTC</th></tr></thead>
<tbody><tr><td style={{padding: "16px", borderBottom: "1px solid #ECE8E0"}}>De 0 à 100 000 €</td><td style={{padding: "16px", borderBottom: "1px solid #ECE8E0", fontWeight: "600"}}>10 000 € maximum</td></tr>
<tr><td style={{padding: "16px"}}>Au-delà de 100 000 €</td><td style={{padding: "16px", fontWeight: "600"}}>10 % maximum</td></tr></tbody>
</table>
<div style={{display: "flex", flexDirection: "column", gap: "10px", fontSize: "16px", lineHeight: "1.6", color: "#3A434F"}}>
<span><strong style={{color: "#1A1F24"}}>Prix de vente :</strong> prix affiché dans l’annonce, honoraires inclus.</span>
<span><strong style={{color: "#1A1F24"}}>Calcul des honoraires :</strong> toujours en pourcentage du prix de vente.</span>
<span><strong style={{color: "#1A1F24"}}>Charge des honoraires :</strong></span>
<ul style={{margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px"}}><li>le vendeur, dans le cadre d’un mandat de vente ;</li><li>l’acquéreur, pour un mandat de vente avec convention spécifique et particulière (par exemple une succession) ;</li><li>l’acquéreur, dans le cadre d’un mandat de recherche.</li></ul>
</div>
</div>
</section>
<section style={{flex: "1 1 460px", minWidth: "0", background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column"}}>
<h2 style={{margin: "0", background: "#1F3A2E", color: "#FFFFFF", padding: "18px 24px", font: "400 26px 'DM Serif Display',Georgia,serif"}}>Location</h2>
<div style={{padding: "24px", display: "flex", flexDirection: "column", gap: "22px", fontSize: "16px", lineHeight: "1.6", color: "#3A434F"}}>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}><h3 style={{fontSize: "18px", color: "#1A1F24"}}>À la charge du locataire <span style={{font: "400 14px Inter,sans-serif", color: "#5B6470"}}>(conformément à la loi ALUR)</span></h3>
<ul style={{margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px"}}><li>Visite, constitution du dossier du locataire et rédaction du bail : 12 €/m² en zone très tendue, 10 €/m² en zone tendue ;</li><li>État des lieux : 3 €/m².</li></ul></div>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}><h3 style={{fontSize: "18px", color: "#1A1F24"}}>À la charge du propriétaire <span style={{font: "400 14px Inter,sans-serif", color: "#5B6470"}}>(conformément à la loi ALUR)</span></h3>
<ul style={{margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px"}}><li>1 mois de loyer hors charges, incluant les visites, la constitution du dossier du locataire, la rédaction du bail et de l’état des lieux selon les tarifs ALUR au m², ainsi que l’entremise et la négociation en complément pour atteindre un mois de loyer ;</li><li>Établissement d’un inventaire (sur demande) : 150 €.</li></ul></div>
</div>
</section>
</div>
</div>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
