'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\nbody{margin:0;background:#FFFFFF}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}}\n";
const PROPS = {};

export default function EstimationPage() {
  const props = PROPS;
  const [state, setFullState] = useState({ step: 1, type: 0, slot: 0 });
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    const s = state.step;
    return {
      n: s, s1: s === 1, s2: s === 2, s3: s === 3, s4: s === 4, notDone: s < 4, canBack: s > 1 && s < 4,
      stepLabel: s < 4 ? 'Étape ' + s + ' sur 3' : 'Votre résultat',
      slots: ['Cette semaine', 'Samedi matin', 'En semaine, le soir'].map((l, i) => ({ l, pick: () => setState({ slot: i }), bd: state.slot === i ? '#1F3A2E' : '#D9D3C7', bg: state.slot === i ? '#E8EFEA' : '#FFFFFF' })),
      cta: s === 3 ? 'Voir mon estimation' : 'Continuer',
      next: () => setState({ step: s < 4 ? s + 1 : 4 }),
      back: () => setState({ step: s > 1 ? s - 1 : 1 }),
      bars: [1, 2, 3].map((i) => ({ c: i <= s ? '#1F3A2E' : '#E7E2D8' })),
      types: ['Appartement', 'Maison', 'Local commercial'].map((l, i) => ({ l, pick: () => setState({ type: i }), bd: state.type === i ? '#1F3A2E' : '#D9D3C7', bg: state.type === i ? '#E8EFEA' : '#FFFFFF' }))
    };
  
  })() };
  const back = vals.back;
  const bars = vals.bars;
  const canBack = vals.canBack;
  const cta = vals.cta;
  const next = vals.next;
  const notDone = vals.notDone;
  const s1 = vals.s1;
  const s2 = vals.s2;
  const s3 = vals.s3;
  const s4 = vals.s4;
  const slots = vals.slots;
  const stepLabel = vals.stepLabel;
  const types = vals.types;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", minHeight: "1000px", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div style={{maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap"}}><Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link><span style={{fontSize: "14px", color: "#4A5360"}}>Une question ? <a href="tel:+33659034752" style={{color: "#1F3A2E", fontWeight: "600"}}>06 59 03 47 52</a></span></div></header>
<div style={{maxWidth: "1200px", margin: "0 auto", padding: "56px 24px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start"}}>
<div style={{flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<span style={{fontSize: "14px", fontWeight: "600", color: "#1F3A2E"}}>{stepLabel}</span>
<div style={{display: "flex", gap: "6px"}} aria-hidden="true">
{(bars || []).map((b, __i) => (<Fragment key={__i}><span style={{flex: "1", height: "6px", borderRadius: "3px", background: b.c}}></span></Fragment>))}
</div>
</div>
{(s1) ? (<>
<div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<h1 style={{fontSize: "36px"}}>Où se trouve votre bien ?</h1>
<label style={{fontSize: "14px", fontWeight: "600"}}>Adresse<input type="text" placeholder="12 rue de Fontenay, 94300 Vincennes" style={{display: "block", width: "100%", boxSizing: "border-box", marginTop: "6px", minHeight: "52px", border: "1px solid #D9D3C7", borderRadius: "12px", padding: "0 14px", font: "17px Inter,sans-serif", background: "#FFFFFF"}} /></label>
<span style={{fontSize: "14px", fontWeight: "600"}}>Type de bien</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
{(types || []).map((t, __i) => (<Fragment key={__i}><button type="button" onClick={t.pick} style={{minHeight: "52px", padding: "0 24px", borderRadius: "12px", cursor: "pointer", font: "600 15px Inter,sans-serif", border: `1.5px solid ${t.bd}`, background: t.bg, color: "#1A1F24"}}>{t.l}</button></Fragment>))}
</div>
</div>
</>) : null}
{(s2) ? (<>
<div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<h1 style={{fontSize: "36px"}}>Parlez-moi de votre bien</h1>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
<label style={{flex: "1 1 160px", fontSize: "14px", fontWeight: "600"}}>Surface (m²)<input type="number" placeholder="85" style={{display: "block", width: "100%", boxSizing: "border-box", marginTop: "6px", minHeight: "52px", border: "1px solid #D9D3C7", borderRadius: "12px", padding: "0 14px", font: "17px Inter,sans-serif"}} /></label>
<label style={{flex: "1 1 160px", fontSize: "14px", fontWeight: "600"}}>Pièces<input type="number" placeholder="4" style={{display: "block", width: "100%", boxSizing: "border-box", marginTop: "6px", minHeight: "52px", border: "1px solid #D9D3C7", borderRadius: "12px", padding: "0 14px", font: "17px Inter,sans-serif"}} /></label>
<label style={{flex: "1 1 160px", fontSize: "14px", fontWeight: "600"}}>Étage<input type="text" placeholder="3e avec ascenseur" style={{display: "block", width: "100%", boxSizing: "border-box", marginTop: "6px", minHeight: "52px", border: "1px solid #D9D3C7", borderRadius: "12px", padding: "0 14px", font: "17px Inter,sans-serif"}} /></label>
</div>
<span style={{fontSize: "14px", fontWeight: "600"}}>État général</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}><span style={{minHeight: "48px", display: "inline-flex", alignItems: "center", padding: "0 18px", borderRadius: "12px", border: "1.5px solid #D9D3C7", background: "#FFFFFF"}}>À rénover</span><span style={{minHeight: "48px", display: "inline-flex", alignItems: "center", padding: "0 18px", borderRadius: "12px", border: "1.5px solid #1F3A2E", background: "#E8EFEA"}}>Bon état</span><span style={{minHeight: "48px", display: "inline-flex", alignItems: "center", padding: "0 18px", borderRadius: "12px", border: "1.5px solid #D9D3C7", background: "#FFFFFF"}}>Refait à neuf</span></div>
</div>
</>) : null}
{(s3) ? (<>
<div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<h1 style={{fontSize: "36px"}}>Où vous envoyer l’estimation ?</h1>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
<label style={{flex: "1 1 240px", fontSize: "14px", fontWeight: "600"}}>Prénom et nom<input type="text" style={{display: "block", width: "100%", boxSizing: "border-box", marginTop: "6px", minHeight: "52px", border: "1px solid #D9D3C7", borderRadius: "12px", padding: "0 14px", font: "17px Inter,sans-serif"}} /></label>
<label style={{flex: "1 1 240px", fontSize: "14px", fontWeight: "600"}}>E-mail<input type="email" style={{display: "block", width: "100%", boxSizing: "border-box", marginTop: "6px", minHeight: "52px", border: "1px solid #D9D3C7", borderRadius: "12px", padding: "0 14px", font: "17px Inter,sans-serif"}} /></label>
</div>
<label style={{fontSize: "14px", fontWeight: "600"}}>Téléphone (facultatif)<input type="tel" style={{display: "block", width: "100%", boxSizing: "border-box", marginTop: "6px", minHeight: "52px", border: "1px solid #D9D3C7", borderRadius: "12px", padding: "0 14px", font: "17px Inter,sans-serif"}} /></label>
<span style={{fontSize: "13px", color: "#4A5360"}}>Vos coordonnées servent uniquement à vous envoyer l’estimation. Aucun démarchage.</span>
</div>
</>) : null}
{(s4) ? (<>
<div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<h1 style={{fontSize: "36px"}}>Votre estimation indicative</h1>
<div style={{background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "8px"}}><span style={{fontSize: "14px", color: "#4A5360"}}>Fourchette de prix pour votre bien</span><span style={{font: "700 36px 'Inter Tight',sans-serif"}}>[X] € – [Y] €</span><span style={{fontSize: "16px", lineHeight: "1.6", color: "#4A5360"}}>Calculée à partir des ventes récentes comparables de votre secteur. Elle reste indicative : seule une visite permet un avis de valeur précis.</span></div>
<h2 style={{fontSize: "26px", paddingTop: "8px"}}>Affinons ensemble, chez vous</h2>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A434F"}}>Votre conseiller vient voir le bien et vous remet un avis de valeur écrit sous 48 h. Gratuit et sans engagement.</p>
<span style={{fontSize: "14px", fontWeight: "600"}}>Vos disponibilités</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>{(slots || []).map((t, __i) => (<Fragment key={__i}><button type="button" onClick={t.pick} style={{minHeight: "48px", padding: "0 18px", borderRadius: "12px", cursor: "pointer", font: "600 15px Inter,sans-serif", border: `1.5px solid ${t.bd}`, background: t.bg, color: "#1A1F24"}}>{t.l}</button></Fragment>))}</div>
<button type="button" style={{alignSelf: "flex-start", minHeight: "52px", padding: "0 32px", border: "0", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", font: "600 16px Inter,sans-serif", cursor: "pointer"}}>Prendre rendez-vous</button>
</div>
</>) : null}
{(notDone) ? (<>
<div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
{(canBack) ? (<><button type="button" onClick={back} style={{minHeight: "52px", padding: "0 24px", border: "1.5px solid #1A1F24", borderRadius: "999px", background: "transparent", font: "600 16px Inter,sans-serif", cursor: "pointer"}}>Retour</button></>) : null}
<button type="button" onClick={next} style={{minHeight: "52px", padding: "0 32px", border: "0", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", font: "600 16px Inter,sans-serif", cursor: "pointer"}}>{cta}</button>
</div>
</>) : null}
</div>
<aside style={{flex: "1 1 320px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px"}}>
<h2 style={{fontSize: "20px"}}>Ce que vous recevrez</h2>
<div style={{display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.5", color: "#3A434F"}}>
<span>✓ Une fourchette de prix argumentée, sous 48 h</span>
<span>✓ Les ventes comparables de votre secteur</span>
<span>✓ Mon avis sur les atouts et les freins de votre bien</span>
<span>✓ Sans engagement, sans relance insistante</span>
</div>
<div style={{height: "1px", background: "#E7E2D8"}}></div>
<div style={{display: "flex", gap: "12px", alignItems: "center"}}><div style={{width: "48px", height: "48px", flex: "0 0 48px", borderRadius: "999px", background: "#F6F1E8", display: "flex", alignItems: "center", justifyContent: "center"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "24px", width: "auto"}} /></div><span style={{fontSize: "14px", lineHeight: "1.5", color: "#3A434F"}}>Votre conseiller étudie votre bien lui-même. Pas un algorithme.</span></div>
</aside>
</div>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.7"}}><div style={{display: "flex", flexDirection: "column", gap: "14px"}}><div style={{display: "flex", alignItems: "center", gap: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div><span>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</span></div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
</div>
    </>
  );
}
