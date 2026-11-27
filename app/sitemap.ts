import type { MetadataRoute } from 'next';

const BASE = 'https://www.happyfewimmobilier.com';
const ROUTES = ["/", "/acheter", "/agence", "/avis-clients", "/bareme-honoraires", "/contact", "/estimation", "/journal", "/journal/avant-contrat-signe-les-6-etapes", "/journal/comprendre-son-dpe", "/journal/cout-des-travaux", "/journal/preparer-acte-authentique-acquereur", "/journal/preparer-acte-authentique-vendeur", "/journal/preparer-reportage-photo", "/journal/preparer-son-dpe", "/mentions-legales", "/secteurs", "/secteurs/saint-maur-des-fosses", "/vendre", "/vente/saint-maur-des-fosses/appartement-3-pieces-hf0203"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({ url: BASE + (r === '/' ? '' : r), changeFrequency: 'weekly', priority: r === '/' ? 1 : 0.7 }));
}
