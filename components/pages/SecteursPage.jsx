'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.in{display:block;width:100%;box-sizing:border-box;margin-top:6px;min-height:50px;border:1px solid #D9D3C7;border-radius:12px;padding:0 14px;font:16px Inter,sans-serif;background:#FFFFFF}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function SecteursPage() {
  const props = PROPS;
  const [state, setFullState] = useState({});
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    const secteurs = [
      { n: 'Saint-Maur-des-Fossés', vendus: 28, enVente: 4, href: '/secteurs/saint-maur-des-fosses', cta: 'Découvrir Saint-Maur →', d: 'Notre agence de l’avenue de Plaisance. Le Parc, Adamville, La Varenne, Champignol : notre premier secteur.' },
      { n: 'Vincennes', vendus: 9, enVente: 1, href: '#', cta: 'Découvrir Vincennes →', d: 'Du carré magique aux abords du bois, appartements familiaux et anciens de caractère.' },
      { n: 'Paris', vendus: 11, enVente: 2, href: '#', cta: 'Découvrir Paris →', d: 'Depuis Bercy Village : 12e, 11e, 20e et l’Est parisien en priorité.' },
      { n: 'Le Plessis-Trévise', vendus: 13, enVente: 0, href: '#', cta: 'Découvrir Le Plessis-Trévise →', d: 'Maisons et terrains à bâtir, dont plusieurs divisions de parcelles.' },
      { n: 'Nogent-sur-Marne et Le Perreux', vendus: 3, enVente: 0, href: '#', cta: 'Découvrir Nogent et Le Perreux →', d: 'Les bords de Marne, entre maisons de caractère et appartements avec vue.' },
      { n: 'Montreuil et Fontenay-sous-Bois', vendus: 1, enVente: 2, href: '#', cta: 'Découvrir Montreuil et Fontenay →', d: 'Aux portes de Vincennes, des biens plus accessibles près du métro et du RER.' }
    ];
    const pos = { 'Saint-Maur-des-Fossés': ['58%','70%'], 'Vincennes': ['40%','36%'], 'Paris': ['14%','30%'], 'Le Plessis-Trévise': ['80%','66%'], 'Nogent-sur-Marne et Le Perreux': ['62%','40%'], 'Montreuil et Fontenay-sous-Bois': ['46%','16%'] };
    return { secteurs, pins: secteurs.map((s) => ({ x: pos[s.n][0], y: pos[s.n][1], l: s.n.split(' et ')[0] + ' · ' + s.vendus + ' ventes' })) };
  
  })() };
  const pins = vals.pins;
  const secteurs = vals.secteurs;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter">Acheter</Link><Link href="/vendre">Vendre</Link><Link href="/secteurs" style={{color: "#1F3A2E", fontWeight: "600"}}>Secteurs</Link><Link href="/journal">Journal</Link><Link href="/agence">L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<section className="wrap" style={{paddingTop: "64px", paddingBottom: "40px", display: "flex", flexDirection: "column", gap: "18px", maxWidth: "900px", marginLeft: "0"}}>
<nav aria-label="Fil d’Ariane" style={{fontSize: "13px", color: "#5B6470"}}>Accueil › Nos secteurs</nav>
<h1 style={{fontSize: "52px", lineHeight: "1.06"}}>Nos secteurs</h1>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F", fontSize: "18px"}}>Saint-Maur, Vincennes, Paris et les bords de Marne : les villes où nous vendons, avec nos chiffres réels.</p>
</section>
<section className="wrap" style={{paddingBottom: "56px"}}>
<div style={{position: "relative", height: "420px", borderRadius: "20px", overflow: "hidden"}} role="img" aria-label="Carte des secteurs couverts par Happy Few">
<div className="ph" style={{position: "absolute", inset: "0", background: "#E4E8E3"}}>[CARTE — Paris Est et Val-de-Marne, secteurs surlignés]</div>
{(pins || []).map((p, __i) => (<Fragment key={__i}><span style={{position: "absolute", left: p.x, top: p.y, background: "#1F3A2E", color: "#FFFFFF", borderRadius: "999px", padding: "7px 12px", font: "600 13px Inter,sans-serif", boxShadow: "0 4px 10px rgba(0,0,0,0.15)"}}>{p.l}</span></Fragment>))}
</div>
</section>
<section className="wrap" style={{paddingBottom: "88px", display: "flex", flexDirection: "column", gap: "24px"}}>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "20px"}}>
{(secteurs || []).map((s, __i) => (<Fragment key={__i}>
<a href={s.href} style={{textDecoration: "none", color: "#1A1F24", background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px"}}>
<h2 style={{fontSize: "28px"}}>{s.n}</h2>
<div style={{display: "flex", gap: "28px", flexWrap: "wrap"}}>
<span style={{display: "flex", flexDirection: "column"}}><span style={{font: "700 30px 'Inter Tight',sans-serif", color: "#1F3A2E"}}>{s.vendus}</span><span style={{fontSize: "13px", color: "#4A5360"}}>ventes réalisées</span></span>
<span style={{display: "flex", flexDirection: "column"}}><span style={{font: "700 30px 'Inter Tight',sans-serif"}}>{s.enVente}</span><span style={{fontSize: "13px", color: "#4A5360"}}>biens en vente</span></span>
</div>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>{s.d}</p>
<span style={{fontWeight: "600", color: "#1F3A2E"}}>{s.cta}</span>
</a>
</Fragment>))}
</div>
<span style={{fontSize: "13px", color: "#4A5360"}}>Ventes enregistrées dans notre outil de suivi des mandats, au 27/11/2026.</span>
</section>
<section style={{background: "#F6F1E8"}}><div className="wrap" style={{paddingTop: "64px", paddingBottom: "64px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center"}}>
<div style={{display: "flex", flexDirection: "column", gap: "8px", maxWidth: "640px"}}><h2 style={{fontSize: "32px"}}>Votre ville n’est pas dans la liste ?</h2><p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>Nous intervenons dans tout l’Est parisien. Parlons de votre projet.</p></div>
<Link href="/estimation" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "15px 24px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Faire estimer mon bien</Link>
</div></section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
