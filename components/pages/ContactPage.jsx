'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.in{display:block;width:100%;box-sizing:border-box;margin-top:6px;min-height:50px;border:1px solid #D9D3C7;border-radius:12px;padding:0 14px;font:16px Inter,sans-serif;background:#FFFFFF}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function ContactPage() {
  const props = PROPS;
  const [state, setFullState] = useState({ motif: 0 });
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    return {
      motifs: ['Vendre', 'Acheter', 'Un bien précis', 'Autre'].map((l, i) => { const on = state.motif === i; return { l, pick: () => setState({ motif: i }), bd: on ? '#1F3A2E' : '#D9D3C7', bg: on ? '#E8EFEA' : '#FFFFFF' }; }),
      agences: [
        { nom: 'Paris 12e — Bercy Village', adr: '8 rue des Pirogues, 75012 Paris' },
        { nom: 'Saint-Maur-des-Fossés', adr: '17 avenue de Plaisance, 94100 Saint-Maur-des-Fossés' }
      ]
    };
  
  })() };
  const motifs = vals.motifs;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter">Acheter</Link><Link href="/vendre">Vendre</Link><Link href="/secteurs">Secteurs</Link><Link href="/journal">Journal</Link><Link href="/agence">L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<div className="wrap" style={{paddingTop: "56px", paddingBottom: "88px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start"}}>
<section style={{flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px"}}>
<h1 style={{fontSize: "44px"}}>Nous contacter</h1>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#4A5360"}}>Un conseiller vous répond personnellement, par téléphone ou par écrit selon votre préférence.</p>
<span style={{fontSize: "14px", fontWeight: "600"}}>Votre demande concerne</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
{(motifs || []).map((m, __i) => (<Fragment key={__i}><button type="button" onClick={m.pick} style={{minHeight: "48px", padding: "0 20px", borderRadius: "12px", cursor: "pointer", font: "600 15px Inter,sans-serif", border: `1.5px solid ${m.bd}`, background: m.bg, color: "#1A1F24"}}>{m.l}</button></Fragment>))}
</div>
<form style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
<label style={{flex: "1 1 240px", fontSize: "14px", fontWeight: "600"}}>Prénom et nom<input type="text" className="in" /></label>
<label style={{flex: "1 1 240px", fontSize: "14px", fontWeight: "600"}}>E-mail<input type="email" className="in" /></label>
</div>
<label style={{fontSize: "14px", fontWeight: "600"}}>Téléphone (facultatif)<input type="tel" className="in" /></label>
<label style={{fontSize: "14px", fontWeight: "600"}}>Votre message<textarea rows="5" className="in" style={{padding: "12px 14px", resize: "vertical"}}></textarea></label>
<span style={{fontSize: "13px", lineHeight: "1.5", color: "#4A5360"}}>Vos données servent uniquement à traiter votre demande. <Link href="/mentions-legales#confidentialite">Politique de confidentialité</Link></span>
<button type="button" style={{alignSelf: "flex-start", minHeight: "52px", padding: "0 30px", border: "0", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", font: "600 16px Inter,sans-serif", cursor: "pointer"}}>Envoyer</button>
</form>
</section>
<aside style={{flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px"}}>
<div style={{background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", padding: "20px", display: "flex", gap: "16px", alignItems: "center"}}><img src="/images/geoffroy.jpg" alt="Geoffroy Verzeaux" style={{width: "72px", height: "72px", flex: "0 0 72px", borderRadius: "999px", objectFit: "cover", border: "2px solid #C9A86A"}} /><div style={{display: "flex", flexDirection: "column", gap: "4px"}}><span style={{font: "600 18px 'Inter Tight',sans-serif"}}>Geoffroy Verzeaux</span><span style={{fontSize: "14px", color: "#4A5360"}}>Cofondateur</span><a href="tel:+33659034752" style={{fontSize: "17px", fontWeight: "600", color: "#1F3A2E", textDecoration: "none"}}>06 59 03 47 52</a><div style={{display: "flex", gap: "16px"}}><a href="tel:+33659034752" style={{fontWeight: "600", fontSize: "14px"}}>Appeler</a><a href="https://wa.me/33659034752" style={{fontWeight: "600", fontSize: "14px"}}>WhatsApp</a></div></div></div>
<div style={{background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", padding: "20px", display: "flex", gap: "16px", alignItems: "center"}}><img src="/images/myriam.jpg" alt="Myriam Verzeaux" style={{width: "72px", height: "72px", flex: "0 0 72px", borderRadius: "999px", objectFit: "cover", border: "2px solid #C9A86A"}} /><div style={{display: "flex", flexDirection: "column", gap: "4px"}}><span style={{font: "600 18px 'Inter Tight',sans-serif"}}>Myriam Verzeaux</span><span style={{fontSize: "14px", color: "#4A5360"}}>Cofondatrice</span><a href="tel:+33658434998" style={{fontSize: "17px", fontWeight: "600", color: "#1F3A2E", textDecoration: "none"}}>06 58 43 49 98</a><div style={{display: "flex", gap: "16px"}}><a href="tel:+33658434998" style={{fontWeight: "600", fontSize: "14px"}}>Appeler</a><a href="https://wa.me/33658434998" style={{fontWeight: "600", fontSize: "14px"}}>WhatsApp</a></div></div></div>
</aside>
</div>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
