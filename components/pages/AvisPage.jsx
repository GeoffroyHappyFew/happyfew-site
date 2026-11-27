'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.in{display:block;width:100%;box-sizing:border-box;margin-top:6px;min-height:50px;border:1px solid #D9D3C7;border-radius:12px;padding:0 14px;font:16px Inter,sans-serif;background:#FFFFFF}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function AvisPage() {
  const props = PROPS;
  const [state, setFullState] = useState({});
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    return {
      steps: [
        { n: '1', t: 'Après chaque vente ou achat', d: 'Une fois l’acte signé, nous invitons chaque client, vendeur comme acquéreur, à donner son avis.' },
        { n: '2', t: 'Un contrôle indépendant', d: 'OpinionSystem, institut de sondage indépendant certifié par l’AFNOR, recueille l’avis et vérifie que son auteur est bien un client réel. Le client peut aussi publier un avis sur Google.' },
        { n: '3', t: 'Tout est publié', d: 'Nous ne trions pas : avis positifs comme négatifs sont publiés, sans modification. Nous répondons à chacun.' },
        { n: '4', t: 'Avis et ventes réunis', d: 'Un avis n’est affiché à côté de la vente correspondante (bien, prix) qu’avec l’accord écrit du client. Sinon, il apparaît sans détail sur le bien.' }
      ],
      infos: [
        { k: 'Avis OpinionSystem', v: 'Contrôlés par un institut indépendant, certifié AFNOR (ISO 9001, ISO 20252, NF Service 522 – NF ISO 20488) et audité chaque année : avis réservés aux clients réels, non modifiables, avis négatifs conformes publiés. Détails sur opinionsystem.fr.' },
        { k: 'Avis Google', v: 'Publiés directement par les internautes sur Google, sans contrôle de notre part.' },
        { k: 'Contrepartie', v: 'Aucune contrepartie n’est accordée en échange d’un avis.' },
        { k: 'Ordre d’affichage', v: 'Du plus récent au plus ancien. La date de chaque avis est indiquée.' },
        { k: 'Durée d’affichage', v: '[X] ans. [À définir]' },
        { k: 'Contestation', v: 'Un avis peut être signalé via le formulaire de contact ; il est traité sous [X] jours.' }
      ]
    };
  
  })() };
  const infos = vals.infos;
  const steps = vals.steps;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter">Acheter</Link><Link href="/vendre">Vendre</Link><Link href="/secteurs">Secteurs</Link><Link href="/journal">Journal</Link><Link href="/agence">L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<section className="wrap" style={{paddingTop: "64px", paddingBottom: "48px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end"}}>
<div style={{flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px"}}>
<nav aria-label="Fil d’Ariane" style={{fontSize: "13px", color: "#5B6470"}}>Accueil › Nos avis clients</nav>
<h1 style={{fontSize: "48px", lineHeight: "1.08"}}>Comment nous collectons les avis</h1>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F", fontSize: "18px"}}>Les avis de nos clients sont notre meilleure preuve. Voici exactement comment nous les recueillons, les vérifions et les publions.</p>
</div>
<div style={{flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px"}}>
<span style={{fontSize: "14px", color: "#4A5360"}}>139 avis clients publiés</span>
<a href="https://www.opinionsystem.fr/fr-fr/certificate/16494" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#1A1F24", background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px"}}><span style={{display: "flex", flexDirection: "column"}}><span style={{fontSize: "13px", color: "#4A5360"}}>Avis vérifiés OpinionSystem</span><span style={{font: "700 22px 'Inter Tight',sans-serif"}}><span aria-hidden="true" style={{color: "#B7791F"}}>★</span> 4,9/5 <span style={{font: "500 14px Inter,sans-serif", color: "#4A5360"}}>· 119 avis</span></span></span><span style={{fontWeight: "600", color: "#1F3A2E"}}>Voir →</span></a>
<a href="https://maps.app.goo.gl/9ZpFpfXEjrYbEqKQ9" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#1A1F24", background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px"}}><span style={{display: "flex", flexDirection: "column"}}><span style={{fontSize: "13px", color: "#4A5360"}}>Avis Google</span><span style={{font: "700 22px 'Inter Tight',sans-serif"}}><span aria-hidden="true" style={{color: "#B7791F"}}>★</span> 5/5 <span style={{font: "500 14px Inter,sans-serif", color: "#4A5360"}}>· 20 avis</span></span></span><span style={{fontWeight: "600", color: "#1F3A2E"}}>Voir →</span></a>
</div>
</section>
<section style={{background: "#FAF8F4", borderTop: "1px solid #ECE8E0", borderBottom: "1px solid #ECE8E0"}}><div className="wrap" style={{paddingTop: "72px", paddingBottom: "72px", display: "flex", flexDirection: "column", gap: "28px"}}>
<h2 style={{fontSize: "36px"}}>En quatre étapes</h2>
<ol style={{listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px"}}>
{(steps || []).map((s, __i) => (<Fragment key={__i}>
<li style={{background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px"}}>
<span style={{font: "400 34px 'DM Serif Display',Georgia,serif", color: "#1F3A2E"}}>{s.n}</span>
<h3 style={{fontSize: "19px"}}>{s.t}</h3>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F", fontSize: "15px"}}>{s.d}</p>
</li>
</Fragment>))}
</ol>
</div></section>
<section className="wrap" style={{paddingTop: "72px", paddingBottom: "72px", display: "flex", flexWrap: "wrap", gap: "40px"}}>
<div style={{flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "12px"}}><h2 style={{fontSize: "32px"}}>Informations sur les avis publiés</h2><p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F", fontSize: "15px"}}>Conformément au Code de la consommation (article L111-7-2), nous indiquons si les avis font l’objet d’un contrôle et comment.</p></div>
<div style={{flex: "2 1 520px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1px", background: "#ECE8E0", border: "1px solid #ECE8E0", borderRadius: "16px", overflow: "hidden"}}>
{(infos || []).map((i, __i) => (<Fragment key={__i}><div style={{background: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "column", gap: "6px"}}><span style={{fontSize: "13px", fontWeight: "600", color: "#4A5360"}}>{i.k}</span><span style={{fontSize: "16px", lineHeight: "1.55"}}>{i.v}</span></div></Fragment>))}
</div>
</section>
<section style={{background: "#F6F1E8"}}><div className="wrap" style={{paddingTop: "56px", paddingBottom: "56px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center"}}>
<div style={{display: "flex", flexDirection: "column", gap: "8px", maxWidth: "640px"}}><h2 style={{fontSize: "30px"}}>Vous êtes client ?</h2><p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>Votre avis aide d’autres vendeurs et acquéreurs à choisir. Merci de le partager, en toute liberté.</p></div>
<div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}><a href="https://g.page/r/CWvatVU-VP5aEBM/review" target="_blank" rel="noopener noreferrer" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "15px 22px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Laisser un avis sur Google</a><Link href="/contact" style={{border: "1.5px solid #1A1F24", color: "#1A1F24", padding: "14px 22px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Signaler un avis</Link></div>
</div></section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
