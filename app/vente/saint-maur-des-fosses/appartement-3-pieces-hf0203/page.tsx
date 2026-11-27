import type { Metadata } from 'next';
import FicheBienPage from '@/components/pages/FicheBienPage';

export const metadata: Metadata = {
  title: "Appartement 3 pièces avec balcon — Saint-Maur, Le Parc — 380 000 €",
  description: "Appartement 3 pièces de 67,49 m² avec balcon au Parc de Saint-Maur-des-Fossés. 2 chambres, plein sud.",
  alternates: { canonical: "/vente/saint-maur-des-fosses/appartement-3-pieces-hf0203" },
};

export default function Page() {
  return <FicheBienPage />;
}
