# Site Happy Few Immobilier

Site vitrine de Happy Few Immobilier (Next.js, App Router), issu des maquettes validées dans Claude Design.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # vérification avant mise en ligne
```

## Organisation

- `app/<route>/page.tsx` : une page par adresse, avec son titre et sa description (SEO).
- `components/pages/*.jsx` : le contenu de chaque page, converti depuis les maquettes.
- `public/images`, `public/docs` : photos (sans métadonnées EXIF), logos, barème PDF.
- `app/sitemap.ts`, `app/robots.ts` : plan du site et règles pour les robots.

## Pages

| Adresse | Page |
|---|---|
| `/` | Accueil |
| `/acheter` | Biens à vendre et ventes récentes |
| `/vente/saint-maur-des-fosses/appartement-3-pieces-hf0203` | Fiche bien (modèle) |
| `/vendre`, `/estimation` | Vendre, estimation |
| `/secteurs`, `/secteurs/saint-maur-des-fosses` | Secteurs |
| `/journal`, `/journal/...` | Le Journal et ses articles |
| `/agence`, `/avis-clients`, `/bareme-honoraires`, `/contact`, `/mentions-legales` | Agence et pages légales |

## Reste à faire (V1)

- Brancher les formulaires (contact, visite, estimation, alerte) sur Supabase + envoi d'e-mail.
- Générer les fiches biens depuis une table « annonces » (aujourd'hui : données figées).
- Données structurées (RealEstateAgent, annonces, fil d'Ariane, FAQ).
- Carte (secteurs, liste des biens).
