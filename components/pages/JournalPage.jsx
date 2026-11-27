'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.in{display:block;width:100%;box-sizing:border-box;margin-top:6px;min-height:50px;border:1px solid #D9D3C7;border-radius:12px;padding:0 14px;font:16px Inter,sans-serif;background:#FFFFFF}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function JournalPage() {
  const props = PROPS;
  const [state, setFullState] = useState({ cat: 'Tous' });
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    const all = [
      { cat: 'Vendre', t: 'Préparer le reportage photo de votre bien, pièce par pièce', d: 'Salon, cuisine, chambres, salle de bains, extérieur : la check-list avant le passage du photographe.', by: 'Par Myriam', href: '/journal/preparer-reportage-photo' },
      { cat: 'Vendre', t: 'Préparer son DPE : les documents à réunir', d: 'Acte de propriété, factures, contrats d’entretien : poste par poste, ce qui améliore la justesse de votre DPE.', by: 'Par Myriam', href: '/journal/preparer-son-dpe' },
      { cat: 'Vendre', t: 'Préparer l’acte authentique de votre vente : la check-list', d: 'Factures, clés, déménagement, visite de conformité : vos dernières actions.', by: 'Par Geoffroy', href: '/journal/preparer-acte-authentique-vendeur' },
      { cat: 'Acheter', t: 'Préparer l’acte authentique de votre achat : la check-list', d: 'Fonds, assurance habitation, visite de conformité, documents du jour J.', by: 'Par Myriam', href: '/journal/preparer-acte-authentique-acquereur' },
      { cat: 'Acheter', t: 'Anticiper le coût des travaux : nos fourchettes de prix', d: 'Mur porteur, électricité, cuisine, salle de bains : les prix par poste de notre partenaire Hemea.', by: 'Par Geoffroy', href: '/journal/cout-des-travaux' },
      { cat: 'Expertise', t: 'Comprendre son DPE : les 5 points à vérifier', d: 'Numéro, surface, énergies, équipements : vérifier son DPE, et le contester si besoin.', by: 'Par Geoffroy', href: '/journal/comprendre-son-dpe' },
      { cat: 'Marché local', t: 'Prix au m² à Saint-Maur-des-Fossés : le point du trimestre', d: 'Quartier par quartier, d’après les ventes réelles. [à rédiger]', by: 'Par Geoffroy', href: '/journal/prix-m2-saint-maur' },
      { cat: 'Marché local', t: 'Vincennes : ce que nous observons sur le terrain', d: 'Délais de vente, biens recherchés, niveau de négociation. [à rédiger]', by: 'Par Myriam', href: '/journal/prix-m2-saint-maur' }
    ];
    const c = state.cat;
    const cats = ['Tous', 'Vendre', 'Acheter', 'Marché local', 'Expertise'].map((l) => { const on = l === c; return { l, pick: () => setState({ cat: l }), bd: on ? '#1A1F24' : '#D9D3C7', bg: on ? '#1A1F24' : '#FFFFFF', fg: on ? '#FFFFFF' : '#1A1F24' }; });
    return { cats, posts: all.filter((p) => c === 'Tous' || p.cat === c) };
  
  })() };
  const cats = vals.cats;
  const posts = vals.posts;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter">Acheter</Link><Link href="/vendre">Vendre</Link><Link href="/secteurs">Secteurs</Link><Link href="/journal" style={{color: "#1F3A2E", fontWeight: "600"}}>Journal</Link><Link href="/agence">L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<section className="wrap" style={{paddingTop: "64px", paddingBottom: "32px", display: "flex", flexDirection: "column", gap: "16px"}}>
<h1 style={{fontSize: "52px", lineHeight: "1.06"}}>Le Journal</h1>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F", fontSize: "18px", maxWidth: "680px"}}>Conseils pour vendre et acheter, analyses du marché et guides de quartier, rédigés par Myriam et Geoffroy.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "8px"}}>
{(cats || []).map((c, __i) => (<Fragment key={__i}><button type="button" onClick={c.pick} style={{minHeight: "44px", padding: "0 18px", borderRadius: "999px", cursor: "pointer", font: "600 14px Inter,sans-serif", border: `1.5px solid ${c.bd}`, background: c.bg, color: c.fg}}>{c.l}</button></Fragment>))}
</div>
</section>
<section className="wrap" style={{paddingBottom: "48px"}}>
<Link href="/journal/avant-contrat-signe-les-6-etapes" style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexWrap: "wrap", background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", overflow: "hidden"}}>
<div style={{flex: "1.2 1 420px", minHeight: "340px", position: "relative"}}><img src="/images/hero-marne.webp" alt="Les bords de Marne" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} /></div>
<div style={{flex: "1 1 380px", minWidth: "0", padding: "40px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center"}}>
<span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F3A2E"}}>À la une · Vendre et acheter</span>
<h2 style={{fontSize: "34px", lineHeight: "1.15"}}>Avant-contrat signé : les 6 étapes jusqu’à la vente</h2>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>Compromis ou promesse : trois mois expliqués étape par étape, avec nos conseils aux vendeurs et aux acquéreurs.</p>
<span style={{fontSize: "14px", color: "#4A5360"}}>Par Myriam · mis à jour le [JJ/MM/AAAA] · 7 min</span>
</div>
</Link>
</section>
<section className="wrap" style={{paddingBottom: "88px"}}>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "32px 28px"}}>
{(posts || []).map((p, __i) => (<Fragment key={__i}>
<a href={p.href} style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexDirection: "column", gap: "10px", borderTop: "1.5px solid #1A1F24", paddingTop: "16px"}}>
<span style={{fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F3A2E"}}>{p.cat}</span>
<span style={{font: "400 24px/1.25 'DM Serif Display',Georgia,serif"}}>{p.t}</span>
<span style={{fontSize: "15px", lineHeight: "1.55", color: "#4A5360"}}>{p.d}</span>
<span style={{fontSize: "13px", color: "#4A5360"}}>{p.by}</span>
</a>
</Fragment>))}
</div>
</section>
<section style={{background: "#F6F1E8"}}><div className="wrap" style={{paddingTop: "56px", paddingBottom: "56px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center"}}>
<div style={{display: "flex", flexDirection: "column", gap: "8px", maxWidth: "620px"}}><h2 style={{fontSize: "30px"}}>Une question sur votre projet ?</h2><p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>Nos articles ne remplacent pas un échange : parlons-en.</p></div>
<Link href="/contact" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "15px 24px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Nous contacter</Link>
</div></section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
