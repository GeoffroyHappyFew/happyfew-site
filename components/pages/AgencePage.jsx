'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.in{display:block;width:100%;box-sizing:border-box;margin-top:6px;min-height:50px;border:1px solid #D9D3C7;border-radius:12px;padding:0 14px;font:16px Inter,sans-serif;background:#FFFFFF}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function AgencePage() {
  const props = PROPS;
  const [state, setFullState] = useState({});
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    return { temps: [
      { n: '1', t: 'L’étude de marché', d: 'Votre projet compris, votre bien étudié, le bon prix déterminé à partir d’une sélection ciblée de ventes comparables.' },
      { n: '2', t: 'Les moyens de commercialisation', d: 'Photos professionnelles, base de 3 000 acquéreurs, portails et partenaires, acquéreurs qualifiés avant chaque visite.' },
      { n: '3', t: 'La sécurité et la confiance', d: 'Dossier contrôlé dès le mandat, offres vérifiées, chaque étape coordonnée jusqu’à l’acte.' },
      { n: '4', t: 'La transparence', d: 'Chaque action partagée avec vous et avec tous les acteurs de la vente, documents accessibles à tout moment.' }
    ] };
  
  })() };
  const temps = vals.temps;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter">Acheter</Link><Link href="/vendre">Vendre</Link><Link href="/secteurs">Secteurs</Link><Link href="/journal">Journal</Link><Link href="/agence" style={{color: "#1F3A2E", fontWeight: "600"}}>L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<section className="wrap" style={{paddingTop: "64px", paddingBottom: "56px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center"}}>
<div style={{flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px"}}>
<span style={{fontSize: "14px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F3A2E"}}>Découvrir l’agence</span>
<h1 style={{fontSize: "52px", lineHeight: "1.06"}}>L’accompagnement que nous aurions aimé avoir.</h1>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F", fontSize: "18px"}}>Issus de secteurs où la qualité de service client est une exigence, nous avons créé Happy Few Immobilier en 2018 pour offrir aux vendeurs et aux acquéreurs l’accompagnement que nous aurions aimé recevoir lors de nos propres achats et ventes.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}><Link href="/vendre" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "15px 24px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Notre méthode</Link><Link href="/contact" style={{border: "1.5px solid #1A1F24", color: "#1A1F24", padding: "14px 22px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Nous rencontrer</Link></div>
</div>
<div style={{flex: "1 1 460px", minWidth: "0", height: "420px", position: "relative"}}><img src="/images/agence.webp" alt="Espace d’accueil de l’agence Happy Few" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px"}} /></div>
</section>
<section style={{background: "#1F3A2E", color: "#FFFFFF"}}><div className="wrap" style={{paddingTop: "44px", paddingBottom: "44px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "24px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "4px"}}><span style={{font: "400 44px 'DM Serif Display',Georgia,serif"}}>2018</span><span style={{fontSize: "15px", color: "#D9E6DD"}}>création de l’agence</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "4px"}}><span style={{font: "400 44px 'DM Serif Display',Georgia,serif"}}>3 000</span><span style={{fontSize: "15px", color: "#D9E6DD"}}>acquéreurs dans notre base, enrichie chaque jour</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "4px"}}><span style={{font: "400 44px 'DM Serif Display',Georgia,serif"}}>+ de 200</span><span style={{fontSize: "15px", color: "#D9E6DD"}}>biens vendus depuis 2018</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "4px"}}><span style={{font: "400 44px 'DM Serif Display',Georgia,serif"}}>5/5</span><span style={{fontSize: "15px", color: "#D9E6DD"}}>sur Google (20 avis) · 4,9/5 sur OpinionSystem (119 avis)</span></div>
</div></section>
<section className="wrap" style={{paddingTop: "88px", paddingBottom: "88px", display: "flex", flexDirection: "column", gap: "32px"}}>
<h2 style={{fontSize: "40px"}}>Les fondateurs</h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "24px"}}>
<article style={{background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "32px", display: "flex", flexDirection: "column", gap: "16px"}}>
<div style={{display: "flex", alignItems: "center", gap: "18px"}}><img src="/images/myriam.jpg" alt="Myriam Verzeaux" style={{width: "88px", height: "88px", flex: "0 0 88px", borderRadius: "999px", objectFit: "cover", border: "2px solid #C9A86A"}} /><div><h3 style={{fontSize: "22px"}}>Myriam Verzeaux</h3><span style={{fontSize: "14px", color: "#4A5360"}}>Cofondatrice</span><br /><a href="tel:+33658434998" style={{fontSize: "15px", fontWeight: "600", color: "#1F3A2E"}}>06 58 43 49 98</a></div></div>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>18 ans d’expérience comme responsable commerciale dans des groupes comme Le Figaro, Solocal (ex-PagesJaunes) ou SmartFocus.</p>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>En 2015, elle crée sa structure et développe un algorithme dédié aux réseaux et promoteurs immobiliers. Elle enseigne également en école de commerce les techniques de négociation, la réglementation immobilière et le marketing digital.</p>
</article>
<article style={{background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "32px", display: "flex", flexDirection: "column", gap: "16px"}}>
<div style={{display: "flex", alignItems: "center", gap: "18px"}}><img src="/images/geoffroy.jpg" alt="Geoffroy Verzeaux" style={{width: "88px", height: "88px", flex: "0 0 88px", borderRadius: "999px", objectFit: "cover", border: "2px solid #C9A86A"}} /><div><h3 style={{fontSize: "22px"}}>Geoffroy Verzeaux</h3><span style={{fontSize: "14px", color: "#4A5360"}}>Cofondateur</span><br /><a href="tel:+33659034752" style={{fontSize: "15px", fontWeight: "600", color: "#1F3A2E"}}>06 59 03 47 52</a></div></div>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>Formé à la qualité de service client par un MBA aux États-Unis, l’ESC Reims et un master de gestion à la Sorbonne, il a fait ses armes chez Danone et A.T. Kearney (conseil en stratégie).</p>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>Entrepreneur depuis 2008, il crée plusieurs sociétés dans des secteurs où le service au client final pouvait progresser. La dernière, Greenwishes, spécialisée dans le recyclage, a convaincu Microsoft, Danone, Coca-Cola, Yves Rocher ou BNP.</p>
</article>
</div>
</section>
<section style={{background: "#F6F1E8"}}><div className="wrap" style={{paddingTop: "88px", paddingBottom: "88px", display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px"}}><h2 style={{fontSize: "40px"}}>Notre méthode en quatre points</h2><Link href="/vendre" style={{fontWeight: "600"}}>La méthode en détail →</Link></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px"}}>
{(temps || []).map((t, __i) => (<Fragment key={__i}>
<div style={{background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px"}}>
<span style={{font: "400 34px 'DM Serif Display',Georgia,serif", color: "#1F3A2E"}}>{t.n}</span>
<h3 style={{fontSize: "21px"}}>{t.t}</h3>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>{t.d}</p>
</div>
</Fragment>))}
</div>
</div></section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
