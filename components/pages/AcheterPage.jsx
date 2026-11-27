'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1280px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.sel{display:block;width:100%;margin-top:4px;min-height:44px;border:1px solid #D9D3C7;border-radius:10px;padding:0 10px;font:15px Inter,sans-serif;background:#FFFFFF}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function AcheterPage() {
  const props = PROPS;
  const [state, setFullState] = useState({ view: 0, zone: 'tous', statut: 'vente' });
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    const all = [
      { zone: 'saintmaur', lieu: 'Saint-Maur · Le Parc', titre: 'Appartement 3 pièces avec balcon', carac: '67,49 m² · 2 chambres · 1er étage · plein sud', dpe: 'E', dpeBg: '#F0B40F', img: '/images/HF0203V-01.webp', alt: 'Séjour lumineux avec balcon, appartement 3 pièces au Parc de Saint-Maur', prix: '380 000 €' },
      { zone: 'saintmaur', lieu: 'Saint-Maur · Le Parc', titre: 'Appartement 4 pièces avec terrasse', carac: '82,75 m² · 3 chambres · rez-de-chaussée · jardin', dpe: 'F', dpeBg: '#EB8235', img: '/images/HF0204V-cover.webp', alt: 'Séjour avec terrasse sur jardin, appartement 4 pièces à Saint-Maur', prix: '455 000 €' },
      { zone: 'saintmaur', lieu: 'Saint-Maur-des-Fossés', titre: 'Maison familiale 8 pièces', carac: '166,29 m² · 5 chambres · jardin de 382 m²', dpe: 'E', dpeBg: '#F0B40F', img: '/images/HF0197V-cover.webp', alt: 'Salon donnant sur le jardin, maison familiale à Saint-Maur', prix: '920 000 €' },
      { zone: 'saintmaur', lieu: 'Saint-Maur · Adamville', titre: 'Maison 7 pièces avec dépendance', carac: '186,2 m² · 5 chambres · jardin ouest · garage', dpe: 'E', dpeBg: '#F0B40F', img: '/images/HF0189V-cover.webp', alt: 'Salon de la maison 7 pièces à Adamville', prix: '795 000 €' },
      { zone: 'paris', lieu: 'Paris 12e · Michel Bizot', titre: 'Duplex 5 pièces et 5 caves', carac: '99,26 m² · 4 chambres · traversant', dpe: 'E', dpeBg: '#F0B40F', img: '/images/HF0186V-cover.webp', alt: 'Séjour du duplex 5 pièces, Paris 12e', prix: '950 000 €' },
      { zone: 'paris', lieu: 'Paris 9e · Cité de Trévise', titre: 'Loft avec verrière', carac: '175 m² dont 40 m² en souplex', dpe: 'E', dpeBg: '#F0B40F', img: '/images/HF0179V-cover.webp', alt: 'Espace sous verrière du loft, Paris 9e', prix: '1 250 000 €' },
      { zone: 'est', lieu: 'Montreuil · Mairie', titre: 'Appartement 2-3 pièces, dernier étage', carac: '51,3 m² · 8e étage · 2 balcons', dpe: 'E', dpeBg: '#F0B40F', img: '/images/HF0202V-cover.webp', alt: 'Séjour ouvert sur balcon, Montreuil', prix: '400 000 €' },
      { zone: 'est', lieu: 'Fontenay · limite Vincennes', titre: 'Studio à 300 m du bois', carac: '19,2 m² · 1er étage · cuisine séparée', dpe: 'G', dpeBg: '#D7221F', img: '/images/HF0205V-cover.webp', alt: 'Pièce principale du studio, Fontenay-sous-Bois', prix: '134 400 €' },
      { zone: 'est', lieu: 'Vincennes', titre: 'Appartement 4 pièces', carac: '78,04 m² · 2 chambres · 1er étage', dpe: 'D', dpeBg: '#F4E70F', img: '/images/HF0153V-cover.webp', alt: 'Salon de l’appartement 4 pièces à Vincennes', prix: '870 000 €', badge: 'SOUS OFFRE' },
      { zone: 'saintmaur', lieu: 'Saint-Maur · Adamville', titre: 'Appartement familial 4 pièces', carac: '92,39 m² · traversant · parfait état', dpe: 'D', dpeBg: '#F4E70F', img: '/images/HF0200V-cover.webp', alt: 'Séjour de l’appartement familial 4 pièces à Saint-Maur', prix: '470 000 €', badge: 'SOUS COMPROMIS' },
      { zone: 'est', lieu: 'Vincennes · limite Saint-Mandé', titre: 'Appartement 2-3 pièces', carac: '63,17 m² · 1er étage · ascenseur', dpe: 'D', dpeBg: '#F4E70F', img: '/images/HF0201V-cover.webp', alt: 'Séjour de l’appartement 2-3 pièces à Vincennes', prix: '580 000 €', badge: 'SOUS OFFRE' }
    ];
    const vendus = [
      { zone: 'paris', lieu: 'Paris 17e', titre: 'Atelier d’artiste à rénover', carac: '76 m² · vendu en septembre 2026', dpe: 'B', dpeBg: '#51B748', img: '/images/HF0185V-cover.webp', alt: 'Atelier d’artiste vendu, Paris 17e' },
      { zone: 'paris', lieu: 'Paris 14e · Denfert-Rochereau', titre: 'Appartement 4 pièces avec balcon', carac: '94 m² · 5e étage · vendu en juillet 2026', dpe: 'E', dpeBg: '#F0B40F', img: '/images/HF0188V-cover.webp', alt: 'Appartement 4 pièces vendu, Paris 14e' },
      { zone: 'saintmaur', lieu: 'Saint-Maur · Vieux Saint-Maur', titre: 'Appartement 4 pièces avec balcon', carac: '60 m² · 2 chambres et un bureau · vendu en juillet 2026', dpe: 'D', dpeBg: '#F4E70F', img: '/images/HF0169V-cover.webp', alt: 'Appartement 4 pièces vendu à Saint-Maur' },
      { zone: 'est', lieu: 'Le Plessis-Trévise · Val Roger', titre: 'Maison 8 pièces à rénover', carac: 'Parcelle de 635 m² · vendue en juin 2026', dpe: 'F', dpeBg: '#EB8235', img: '/images/HF0173V-cover.webp', alt: 'Maison 8 pièces vendue au Plessis-Trévise' },
      { zone: 'est', lieu: 'Vincennes · Carré magique', titre: 'Grand 2 pièces avec cave', carac: '54,48 m² · vendu en mai 2026', dpe: 'C', dpeBg: '#A5CC74', img: '/images/HF0180V-cover.webp', alt: 'Appartement 2 pièces vendu à Vincennes' },
      { zone: 'paris', lieu: 'Paris 12e · Cité du Rendez-vous', titre: '2 pièces avec cave', carac: '36,71 m² · vendu en mai 2026', dpe: 'F', dpeBg: '#EB8235', img: '/images/HF0175V-cover.webp', alt: 'Appartement 2 pièces vendu, Paris 12e' },
      { zone: 'saintmaur', lieu: 'Saint-Maur · La Varenne', titre: 'Appartement 3-4 pièces avec terrasse', carac: '82 m² · vendu en décembre 2025', dpe: 'D', dpeBg: '#F4E70F', img: '/images/HF0141V-cover.webp', alt: 'Appartement avec terrasse vendu à Saint-Maur' }
    ];
    vendus.forEach((b) => { b.sold = true; b.prix = 'Vendu'; b.badge = 'VENDU'; });
    const showSold = state.statut === 'vendus';
    const base = showSold ? vendus : all;
    base.forEach((b) => { b.prix = b.prix || '[PRIX] €'; b.sold = !!b.sold && !b.img; b.badge = b.badge || ''; b.hasBadge = !!b.badge; b.hasImg = !!b.img; });
    const z = state.zone;
    const defs = [['tous', 'Tous les secteurs'], ['saintmaur', 'Saint-Maur'], ['est', 'Vincennes, Montreuil, Fontenay'], ['paris', 'Paris']];
    const zones = defs.map(([id, l]) => { const on = id === z; return { l, pick: () => setState({ zone: id }), bd: on ? '#1A1F24' : '#D9D3C7', bg: on ? '#1A1F24' : '#FFFFFF', fg: on ? '#FFFFFF' : '#1A1F24' }; });
    const views = ['Liste', 'Carte'].map((l, i) => { const on = state.view === i; return { l, pick: () => setState({ view: i }), bg: on ? '#1A1F24' : 'transparent', fg: on ? '#FFFFFF' : '#1A1F24' }; });
    const listings = base.filter((b) => z === 'tous' || b.zone === z);
    const pins = listings.map((b, k) => ({ x: ['20%','30%','38%','46%','54%','62%','70%','78%','26%','58%'][k % 10], y: ['62%','70%','56%','76%','30%','24%','36%','44%','48%','40%'][k % 10], l: b.prix }));
    const statuts = [['vente', 'À vendre (' + all.length + ')'], ['vendus', 'Vendus récemment (' + vendus.length + ')']].map(([id, l]) => { const on = id === state.statut; return { l, pick: () => setState({ statut: id }), bg: on ? '#1F3A2E' : 'transparent', fg: on ? '#FFFFFF' : '#1A1F24' }; });
    return { statuts, h1: showSold ? 'Nos ventes récentes' : 'Biens à vendre', sub: showSold ? ' biens vendus · Paris Est et bords de Marne' : ' biens · Paris Est et bords de Marne', zones, views, listings, pins, count: listings.length, isList: state.view === 0, isMap: state.view === 1 };
  
  })() };
  const count = vals.count;
  const h1 = vals.h1;
  const isList = vals.isList;
  const isMap = vals.isMap;
  const listings = vals.listings;
  const pins = vals.pins;
  const statuts = vals.statuts;
  const sub = vals.sub;
  const views = vals.views;
  const zones = vals.zones;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter" style={{color: "#1F3A2E", fontWeight: "600"}}>Acheter</Link><Link href="/vendre">Vendre</Link><Link href="/secteurs">Secteurs</Link><Link href="/journal">Journal</Link><Link href="/agence">L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<section className="wrap" style={{paddingTop: "32px", display: "flex", flexDirection: "column", gap: "20px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "12px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><h1 style={{fontSize: "40px"}}>{h1}</h1><span style={{fontSize: "16px", color: "#4A5360"}}>{count}{sub}</span><div role="tablist" style={{display: "inline-flex", alignSelf: "flex-start", border: "1.5px solid #1F3A2E", borderRadius: "12px", padding: "3px", marginTop: "6px"}}>{(statuts || []).map((t, __i) => (<Fragment key={__i}><button type="button" role="tab" onClick={t.pick} style={{minHeight: "40px", padding: "0 16px", border: "0", borderRadius: "9px", cursor: "pointer", font: "600 14px Inter,sans-serif", background: t.bg, color: t.fg}}>{t.l}</button></Fragment>))}</div></div>
<div style={{display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap"}}><button type="button" style={{minHeight: "44px", padding: "0 16px", border: "1.5px solid #1A1F24", borderRadius: "12px", background: "#FFFFFF", font: "600 14px Inter,sans-serif", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px"}}><svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4"></path></svg>Créer une alerte</button><div role="tablist" style={{display: "flex", gap: "4px", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "12px", padding: "4px"}}>
{(views || []).map((v, __i) => (<Fragment key={__i}><button type="button" role="tab" onClick={v.pick} style={{minHeight: "40px", padding: "0 18px", border: "0", borderRadius: "9px", cursor: "pointer", font: "600 14px Inter,sans-serif", background: v.bg, color: v.fg}}>{v.l}</button></Fragment>))}
</div>
</div>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
{(zones || []).map((z, __i) => (<Fragment key={__i}><button type="button" onClick={z.pick} style={{minHeight: "44px", padding: "0 16px", borderRadius: "999px", cursor: "pointer", font: "600 14px Inter,sans-serif", border: `1.5px solid ${z.bd}`, background: z.bg, color: z.fg}}>{z.l}</button></Fragment>))}
</div>
<form style={{display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "flex-end", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "14px", padding: "14px"}}>
<label style={{flex: "1 1 150px", fontSize: "12px", fontWeight: "600", color: "#4A5360"}}>Type<select className="sel"><option>Tous</option><option>Appartement</option><option>Maison</option><option>Terrain</option></select></label>
<label style={{flex: "1 1 150px", fontSize: "12px", fontWeight: "600", color: "#4A5360"}}>Budget max<select className="sel"><option>Indifférent</option><option>400 000 €</option><option>600 000 €</option><option>800 000 €</option><option>1 000 000 €</option></select></label>
<label style={{flex: "1 1 150px", fontSize: "12px", fontWeight: "600", color: "#4A5360"}}>Pièces<select className="sel"><option>Indifférent</option><option>2 et +</option><option>3 et +</option><option>4 et +</option><option>5 et +</option></select></label>
<label style={{flex: "1 1 150px", fontSize: "12px", fontWeight: "600", color: "#4A5360"}}>Trier par<select className="sel"><option>Plus récents</option><option>Prix croissant</option><option>Prix décroissant</option><option>Surface</option></select></label>
<button type="button" style={{minHeight: "44px", padding: "0 16px", border: "1.5px solid #1A1F24", borderRadius: "10px", background: "#FFFFFF", font: "600 14px Inter,sans-serif", cursor: "pointer"}}>Plus de filtres</button>
</form>
</section>
{(isList) ? (<>
<section className="wrap" style={{paddingTop: "28px", paddingBottom: "56px"}}>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "28px 24px"}}>
{(listings || []).map((b, __i) => (<Fragment key={__i}>
<Link href="/vente/saint-maur-des-fosses/appartement-3-pieces-hf0203" style={{textDecoration: "none", color: "#1A1F24", display: "flex", flexDirection: "column", gap: "10px"}}>
<div style={{position: "relative", height: "230px"}}>{(b.hasImg) ? (<><img src={b.img} alt={b.alt} loading="lazy" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px"}} /></>) : null}{(b.sold) ? (<><div className="ph" style={{position: "absolute", inset: "0", borderRadius: "14px"}}>[PHOTO DU BIEN VENDU]</div></>) : null}<span style={{position: "absolute", top: "12px", left: "12px", background: "#FFFFFF", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", fontWeight: "600"}}>{b.lieu}</span>{(b.hasBadge) ? (<><span style={{position: "absolute", top: "12px", right: "12px", background: "#1F3A2E", color: "#FFFFFF", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em"}}>{b.badge}</span></>) : null}{(b.sold) ? (<><span style={{position: "absolute", top: "12px", right: "12px", background: "#1A1F24", color: "#FFFFFF", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em"}}>VENDU</span></>) : null}</div>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px"}}><span style={{font: "700 21px 'Inter Tight',sans-serif"}}>{b.prix}</span><span style={{fontSize: "12px", fontWeight: "700", padding: "3px 8px", borderRadius: "6px", background: b.dpeBg, color: "#1A1F24"}}>DPE {b.dpe}</span></div>
<span style={{font: "600 16px 'Inter Tight',sans-serif", marginTop: "-4px"}}>{b.titre}</span>
<span style={{fontSize: "14px", lineHeight: "1.5", color: "#4A5360", marginTop: "-4px"}}>{b.carac}</span>
</Link>
</Fragment>))}
</div>
</section>
</>) : null}
{(isMap) ? (<>
<section className="wrap" style={{paddingTop: "28px", paddingBottom: "56px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start"}}>
<div style={{flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px", maxHeight: "720px", overflow: "auto"}}>
{(listings || []).map((b, __i) => (<Fragment key={__i}>
<Link href="/vente/saint-maur-des-fosses/appartement-3-pieces-hf0203" style={{textDecoration: "none", color: "#1A1F24", display: "flex", gap: "14px", background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "12px", padding: "10px"}}>
<div style={{flex: "0 0 130px", height: "100px", position: "relative"}}>{(b.hasImg) ? (<><img src={b.img} alt={b.alt} loading="lazy" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px"}} /></>) : null}</div>
<div style={{display: "flex", flexDirection: "column", gap: "4px", minWidth: "0"}}><span style={{font: "700 17px 'Inter Tight',sans-serif"}}>{b.prix}</span><span style={{fontSize: "14px", fontWeight: "600"}}>{b.titre}</span><span style={{fontSize: "13px", color: "#4A5360"}}>{b.lieu}</span></div>
</Link>
</Fragment>))}
</div>
<div style={{flex: "1.4 1 520px", minWidth: "0", height: "720px", borderRadius: "16px", position: "relative", overflow: "hidden"}} role="img" aria-label="Carte des biens">
<div className="ph" style={{position: "absolute", inset: "0", background: "#E4E8E3"}}>[CARTE — fond de plan sobre, Paris Est → Marne]</div>
{(pins || []).map((p, __i) => (<Fragment key={__i}><span style={{position: "absolute", left: p.x, top: p.y, background: "#1A1F24", color: "#FFFFFF", borderRadius: "999px", padding: "6px 10px", font: "600 13px Inter,sans-serif", boxShadow: "0 4px 10px rgba(26,31,36,0.2)"}}>{p.l}</span></Fragment>))}
</div>
</section>
</>) : null}
<section className="wrap" style={{paddingBottom: "88px"}}>
<div style={{background: "#FFFFFF", border: "1px solid #E7E2D8", borderRadius: "16px", padding: "28px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px", maxWidth: "640px"}}><h2 style={{fontSize: "24px"}}>Vous ne trouvez pas le bien qu’il vous faut ?</h2><span style={{fontSize: "16px", lineHeight: "1.6", color: "#4A5360"}}>Décrivez-nous votre recherche : certains biens sont vendus avant d’être publiés.</span></div>
<Link href="/contact" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "15px 24px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Confier ma recherche</Link>
</div>
</section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
