'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CSS = "\nbody{margin:0;background:#FFFFFF}\na{color:#1F3A2E}a:hover{color:#132A20}\nh1,h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;margin:0;letter-spacing:0}h3{font-family:'Inter Tight',Inter,sans-serif;margin:0;letter-spacing:-0.01em}\n.ph{background:#E9E4DA;color:#5B6470;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px}\n.wrap{max-width:1200px;margin:0 auto;padding-left:24px;padding-right:24px}\n.nav a{color:#1A1F24;text-decoration:none}\n.in{display:block;width:100%;box-sizing:border-box;margin-top:6px;min-height:50px;border:1px solid #D9D3C7;border-radius:12px;padding:0 14px;font:16px Inter,sans-serif;background:#FFFFFF}\n@media (max-width:640px){h1{font-size:34px!important;line-height:1.12!important}h2{font-size:26px!important}.dnav,.hide-m{display:none!important}.burger{display:flex!important}.wrap{padding-left:16px!important;padding-right:16px!important}.gal{grid-template-columns:1fr 1fr!important;grid-template-rows:240px 110px 110px!important}.gal>div:first-child{grid-column:1 / 3;grid-row:auto!important}.mbar{display:flex!important}body{padding-bottom:84px}.heroimg{min-height:280px!important}}\n";
const PROPS = {};

export default function VendrePage() {
  const props = PROPS;
  const [state, setFullState] = useState({ open: 0 });
  const setState = (patch) => setFullState((s) => ({ ...s, ...patch }));
  const vals = { ...PROPS, ...(function () {
    const pts = (a) => a.map((t) => ({ t }));
    const etapes = [
      { id: 'etude', n: '01', t: 'L’étude de marché', s: 'Comprendre votre projet, déterminer le bon prix', bg: '#FFFFFF', services: [
        { t: 'Comprendre votre projet', d: 'Achat-revente, investissement, succession, premier achat… : pour chaque projet, nous définissons les catégories d’acheteurs ciblées, un planning en adéquation avec votre agenda et une stratégie de vente adaptée.', pts: pts([]) },
        { t: 'Déterminer le bon prix', d: 'L’étude de marché que nous réalisons s’appuie sur différentes sources fiables de ventes réalisées, parmi lesquelles nous opérons une sélection ciblée des biens comparables au vôtre. Une étude complète vous est remise au format PDF ; elle est également stockée dans votre espace client.', pts: pts(['Étude du bien et de son environnement', 'Étude de l’environnement économique', 'Valorisation du bien']) }
      ] },
      { id: 'commercialisation', n: '02', t: 'Les moyens de commercialisation', s: 'Mettre en valeur, trouver et qualifier les acquéreurs, mener les visites', bg: '#FAF8F4', services: [
        { t: 'Mettre en valeur', d: 'Un dossier de présentation complet, avec des photos réalisées par un professionnel.', pts: pts(['Conseils sur l’état du bien et la décoration', 'Préparation avant les prises de vue', 'Photographies professionnelles']) },
        { t: 'Trouver l’acquéreur', d: 'Nous constituons et mettons à jour en permanence une base d’acquéreurs.', pts: pts(['Base de 3 000 acquéreurs, enrichie chaque jour', 'Portails de référence : SeLoger, Logic-Immo, MeilleursAgents, Jinka', 'Partenaires chasseurs et délégations aux agences du secteur', 'Réseaux sociaux et présence terrain : flyers, conseil syndical, commerçants', 'Contacts issus de notre base, vues des annonces sur les sites, prises de contact… : tout est quantifié, enregistré et disponible dans votre espace client']) },
        { t: 'Qualifier les acquéreurs', d: 'Les acquéreurs que nous vous présentons ont été interviewés, ciblés et qualifiés.', pts: pts(['Critères : zone, budget maximum, surface minimum', 'Besoin : motivation, composition du foyer, expérience d’achat', 'Financement validé par un courtier partenaire']) },
        { t: 'Gérer les visites', d: 'Vous êtes prévenu en amont de chaque visite.', pts: pts(['Nous contrôlons le bien avant chaque visite', 'Chaque visite donne lieu à une fiche de scoring de 12 critères d’analyse, pour bien formaliser l’avis des visiteurs', 'Les intentions d’offre sont vérifiées', 'Toutes ces informations sont recensées dans votre espace client']) }
      ] },
      { id: 'securite', n: '03', t: 'La sécurité et la confiance', s: 'Dossier contrôlé, offres vérifiées, suivi jusqu’à l’acte', bg: '#FFFFFF', services: [
        { t: 'Sécuriser la vente', d: 'Le dossier de vente est constitué et analysé dès la signature du mandat.', pts: pts(['Liste complète des documents nécessaires', 'Documents stockés, contrôlés et analysés', 'Blocages identifiés en amont : non-conformités, diagnostics…']) },
        { t: 'Contrôler les offres', d: 'Notre document d’offre rassemble toutes les questions structurantes.', pts: pts(['Financement précis', 'Conditions suspensives', 'Séquestre et délais']) },
        { t: 'Coordonner la vente', d: 'Nous suivons chaque étape, de l’avant-contrat à la vente finale.', pts: pts(['Transmission du dossier aux notaires', 'Suivi de la promesse et du financement', 'Visite de conformité, puis signature de l’acte']) }
      ] },
      { id: 'transparence', n: '04', t: 'La transparence', s: 'Chaque action partagée, avec vous et avec tous les acteurs', bg: '#FAF8F4', services: [
        { t: 'Notre ADN', d: 'Au-delà des points téléphoniques réguliers, nous avons la culture de l’écrit. Nos process sont structurés pour que chaque information importante soit retranscrite dans votre espace client et accessible simplement. Un groupe WhatsApp est également mis en place avec toutes les personnes concernées par le mandat.', pts: pts([]) },
        { t: 'Partager avec les vendeurs', d: 'Vous avez accès à tout ce que nous faisons pour votre vente :', pts: pts(['Toutes nos analyses', 'Les pièces du dossier', 'Les actions commerciales', 'Le scoring des visites', 'Les offres']) },
        { t: 'Partager avec les acquéreurs', d: 'Toutes les pièces du dossier requises par les notaires et par la loi SRU sont mises à disposition immédiatement. Pas de surprise, et une confiance renforcée.', pts: pts([]) },
      ] }
    ];
    const qs = [
      ['Combien de temps pour vendre ?', 'Dans un marché dynamique, un bien au juste prix se vend en général en quelques semaines. Les 30 premiers jours sont décisifs : c’est là que les acquéreurs découvrent le bien, le visitent et font leurs offres.'],
      ['Pourquoi un mandat exclusif ?', 'En tiers de confiance au service de vos intérêts, l’exclusivité nous permet de maîtriser la négociation avec les différents acquéreurs et de défendre votre prix.'],
      ['Quels documents préparer ?', 'Nous vous remettons dès le mandat la liste complète des pièces nécessaires, puis nous les contrôlons et les analysons pour éviter toute surprise.'],
      ['Que se passe-t-il si mon bien ne se vend pas ?', 'Vous ne payez rien : nos honoraires ne sont dus qu’à la signature de la vente. Nous faisons le point avec vous à partir des retours de visites, puis nous réajustons la stratégie de commercialisation ou le prix si nécessaire. Et si vous souhaitez arrêter, le mandat se résilie selon les conditions prévues au contrat.']
    ];
    return { etapes,
      conseils: [
        { t: 'Préparer le reportage photo, pièce par pièce', d: '95 % des internautes s’arrêtent sur la première photo.', href: '/journal/preparer-reportage-photo' },
        { t: 'Préparer son DPE', d: 'Les documents à réunir avant la visite du diagnostiqueur.', href: '/journal/preparer-son-dpe' },
        { t: 'Avant-contrat signé : les 6 étapes', d: 'Compromis ou promesse : ce qui se passe jusqu’à l’acte, et nos conseils.', href: '/journal/avant-contrat-signe-les-6-etapes' }
      ],
      ventes: [{ t: 'Atelier d’artiste · 76 m²', l: 'Paris 17e · septembre 2026', img: '/images/HF0185V-cover.webp' }, { t: '4 pièces avec balcon · 94 m²', l: 'Paris 14e · juillet 2026', img: '/images/HF0188V-cover.webp' }, { t: '4 pièces avec balcon · 60 m²', l: 'Saint-Maur · juillet 2026', img: '/images/HF0169V-cover.webp' }, { t: 'Maison 8 pièces à rénover', l: 'Le Plessis-Trévise · juin 2026', img: '/images/HF0173V-cover.webp' }, { t: 'Grand 2 pièces · 54,48 m²', l: 'Vincennes · mai 2026', img: '/images/HF0180V-cover.webp' }, { t: '2 pièces avec cave · 36,71 m²', l: 'Paris 12e · mai 2026', img: '/images/HF0175V-cover.webp' }],
      faq: qs.map(([q, a], i) => { const open = state.open === i; return { q, a, open, icon: open ? '−' : '+', toggle: () => setState({ open: open ? -1 : i }) }; })
    };
  
  })() };
  const conseils = vals.conseils;
  const etapes = vals.etapes;
  const faq = vals.faq;
  const ventes = vals.ventes;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{width: "100%", fontFamily: "Inter,sans-serif", color: "#1A1F24", background: "#FFFFFF"}}>
<header style={{borderBottom: "1px solid #E7E2D8"}}><div className="wrap" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "18px", paddingBottom: "18px"}}>
<Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}><img src="/images/hf-monogramme.png" alt="" style={{height: "40px", width: "auto"}} /><img src="/images/hf-texte.png" alt="Happy Few Immobilier" style={{height: "30px", width: "auto"}} /></Link>
<nav className="dnav nav" aria-label="Principale" style={{display: "flex", flexWrap: "wrap", gap: "26px", fontSize: "16px", fontWeight: "500"}}><Link href="/acheter">Acheter</Link><Link href="/vendre" style={{color: "#1F3A2E", fontWeight: "600"}}>Vendre</Link><Link href="/secteurs">Secteurs</Link><Link href="/journal">Journal</Link><Link href="/agence">L’agence</Link></nav><button type="button" className="burger" aria-label="Menu" style={{display: "none", width: "44px", height: "44px", border: "0", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer"}}><svg width="22" height="22" viewbox="0 0 24 24" fill="none" stroke="#1A1F24" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<Link href="/estimation" className="hide-m" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "11px 18px", borderRadius: "999px", fontWeight: "600", fontSize: "16px", textDecoration: "none"}}>Estimer mon bien</Link>
</div></header>
<section className="wrap" style={{paddingTop: "64px", paddingBottom: "56px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center"}}>
<div style={{flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px"}}>
<span style={{fontSize: "14px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F3A2E"}}>Vendre</span>
<h1 style={{fontSize: "52px", lineHeight: "1.06"}}>Vendre au bon prix, en toute sérénité.</h1>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F", fontSize: "18px"}}>La réussite de votre vente repose sur quatre points : l’étude de marché, les moyens de commercialisation, la sécurité et la confiance, la transparence. Voici exactement ce que nous faisons, et quand.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}><Link href="/estimation" style={{background: "#1F3A2E", color: "#FFFFFF", padding: "16px 26px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Demander une estimation</Link><Link href="/contact" style={{border: "1.5px solid #1A1F24", color: "#1A1F24", padding: "15px 24px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Être rappelé</Link></div>
</div>
<div style={{flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px"}}>
{(etapes || []).map((e, __i) => (<Fragment key={__i}><a href={`#${e.id}`} style={{textDecoration: "none", color: "#1A1F24", background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "20px 22px", display: "flex", gap: "16px", alignItems: "center"}}><span style={{font: "400 32px 'DM Serif Display',Georgia,serif", color: "#1F3A2E", width: "40px"}}>{e.n}</span><span style={{display: "flex", flexDirection: "column", gap: "2px"}}><span style={{font: "600 18px 'Inter Tight',sans-serif"}}>{e.t}</span><span style={{fontSize: "14px", color: "#4A5360"}}>{e.s}</span></span></a></Fragment>))}
</div>
</section>
{(etapes || []).map((e, __i) => (<Fragment key={__i}>
<section id={e.id} style={{background: e.bg, borderTop: "1px solid #ECE8E0"}}><div className="wrap" style={{paddingTop: "72px", paddingBottom: "72px", display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap"}}><span style={{font: "400 56px 'DM Serif Display',Georgia,serif", color: "#1F3A2E"}}>{e.n}</span><h2 style={{fontSize: "38px"}}>{e.t}</h2></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "20px"}}>
{(e.services || []).map((s, __i) => (<Fragment key={__i}>
<div style={{background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px"}}>
<h3 style={{fontSize: "20px"}}>{s.t}</h3>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#3A434F"}}>{s.d}</p>
{(s.pts || []).map((p, __i) => (<Fragment key={__i}><span style={{fontSize: "15px", lineHeight: "1.5", color: "#3A434F", display: "flex", gap: "8px"}}><span aria-hidden="true" style={{color: "#1F3A2E", fontWeight: "700"}}>✓</span>{p.t}</span></Fragment>))}
</div>
</Fragment>))}
</div>
</div></section>
</Fragment>))}
<section className="wrap" style={{paddingTop: "80px", paddingBottom: "80px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "stretch"}}>
<div style={{flex: "2 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px"}}>
<h2 style={{fontSize: "36px"}}>Nos conseils pour réussir votre vente</h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px"}}>
{(conseils || []).map((c, __i) => (<Fragment key={__i}><a href={c.href} style={{textDecoration: "none", color: "#1A1F24", borderTop: "1.5px solid #1A1F24", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px"}}><span style={{font: "400 21px/1.25 'DM Serif Display',Georgia,serif"}}>{c.t}</span><span style={{fontSize: "15px", lineHeight: "1.55", color: "#4A5360"}}>{c.d}</span></a></Fragment>))}
</div>
</div>
<div style={{flex: "1 1 320px", minWidth: "0", alignSelf: "flex-start"}}><Link href="/bareme-honoraires" style={{display: "inline-block", border: "1.5px solid #1F3A2E", borderRadius: "14px", padding: "16px 20px", fontWeight: "600", color: "#1A1F24", textDecoration: "none", background: "#FFFFFF"}}>Voir le barème des honoraires →</Link></div>
</section>
<section style={{background: "#FAF8F4", borderTop: "1px solid #ECE8E0"}}><div className="wrap" style={{paddingTop: "80px", paddingBottom: "80px", display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "12px"}}><h2 style={{fontSize: "36px"}}>Nos dernières ventes</h2><span style={{display: "flex", gap: "20px", flexWrap: "wrap"}}><Link href="/acheter" style={{fontWeight: "600"}}>Toutes nos ventes →</Link><Link href="/avis-clients" style={{fontWeight: "600"}}>L’avis de nos clients →</Link></span></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px"}}>
{(ventes || []).map((v, __i) => (<Fragment key={__i}><div style={{background: "#FFFFFF", border: "1px solid #ECE8E0", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column"}}><div style={{position: "relative", height: "190px"}}><img src={v.img} alt={v.t} loading="lazy" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} /><span style={{position: "absolute", top: "12px", left: "12px", background: "#1F3A2E", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", padding: "5px 10px", borderRadius: "999px"}}>VENDU</span></div><div style={{padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px"}}><span style={{font: "600 17px 'Inter Tight',sans-serif"}}>{v.t}</span><span style={{fontSize: "14px", color: "#4A5360"}}>{v.l}</span></div></div></Fragment>))}
</div>
</div></section>
<section className="wrap" style={{paddingTop: "80px", paddingBottom: "80px", display: "flex", flexWrap: "wrap", gap: "48px"}}>
<h2 style={{flex: "1 1 280px", fontSize: "36px"}}>Questions de vendeurs</h2>
<div style={{flex: "2 1 560px", minWidth: "0", display: "flex", flexDirection: "column"}}>
{(faq || []).map((f, __i) => (<Fragment key={__i}>
<div style={{borderBottom: "1px solid #ECE8E0"}}>
<button type="button" onClick={f.toggle} aria-expanded={f.open} style={{width: "100%", minHeight: "60px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", border: "0", background: "transparent", textAlign: "left", cursor: "pointer", font: "600 17px 'Inter Tight',sans-serif", color: "#1A1F24", padding: "12px 0"}}><span>{f.q}</span><span aria-hidden="true" style={{fontSize: "22px", color: "#1F3A2E"}}>{f.icon}</span></button>
{(f.open) ? (<><p style={{margin: "0 0 18px", fontSize: "16px", lineHeight: "1.65", color: "#3A434F"}}>{f.a}</p></>) : null}
</div>
</Fragment>))}
</div>
</section>
<section style={{background: "#1F3A2E", color: "#FFFFFF"}}><div className="wrap" style={{paddingTop: "56px", paddingBottom: "56px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center"}}>
<h2 style={{fontSize: "32px"}}>Parlons de votre bien.</h2>
<Link href="/estimation" style={{background: "#FFFFFF", color: "#1A1F24", padding: "15px 24px", borderRadius: "999px", fontWeight: "600", textDecoration: "none"}}>Demander une estimation</Link>
</div></section>
<footer style={{background: "#16241C", color: "#C4CCC6"}}><div className="wrap" style={{paddingTop: "48px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", fontSize: "14px", lineHeight: "1.7"}}><div><div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}><img src="/images/hf-monogramme-blanc.png" alt="" style={{height: "36px", width: "auto"}} /><img src="/images/hf-texte-blanc.png" alt="Happy Few Immobilier" style={{height: "27px", width: "auto"}} /></div>Paris 12e · 8 rue des Pirogues, Bercy Village<br />Saint-Maur-des-Fossés · 17 avenue de Plaisance</div><div style={{maxWidth: "560px", fontSize: "14px", lineHeight: "1.7"}}>Carte professionnelle Transaction n° <a href="https://www.cci.fr/agent-immobilier/documents/Happy-Few/cartes/CPI94012022000000073?company_name=happy%20few&page=1&nombre_elements=32&nombre_pages=5&state_recherche=1" style={{color: "#C4CCC6"}}>CPI 9401 2022 000 000 073</a> délivrée par la CCI Paris Île-de-France · Non-détention de fonds : l’agence ne peut recevoir ni détenir d’autres fonds, effets ou valeurs que ceux représentatifs de sa rémunération · Responsabilité civile professionnelle : GALIAN-SMABTP, 89 rue La Boétie, 75008 Paris · Médiateur de la consommation : Immomédiateurs, 55 avenue Marceau, 75116 Paris<br /><Link href="/bareme-honoraires" style={{color: "#FFFFFF", fontWeight: "600"}}>Barème des honoraires</Link> · <Link href="/avis-clients" style={{color: "#C4CCC6"}}>Nos avis clients</Link> · <Link href="/mentions-legales" style={{color: "#C4CCC6"}}>Mentions légales</Link> · <Link href="/mentions-legales#confidentialite" style={{color: "#C4CCC6"}}>Politique de confidentialité</Link></div></div></footer>
<div className="mbar" style={{display: "none", position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "10", background: "#FFFFFF", borderTop: "1px solid #E7E2D8", padding: "10px 16px 20px", gap: "10px"}}><a href="tel:+33659034752" style={{flex: "1", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #1A1F24", borderRadius: "999px", color: "#1A1F24", fontWeight: "600", textDecoration: "none"}}>Appeler</a><Link href="/estimation" style={{flex: "1.4", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#1F3A2E", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>Estimer mon bien</Link></div>
</div>
    </>
  );
}
