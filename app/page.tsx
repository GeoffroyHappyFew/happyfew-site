import type { Metadata } from 'next';
import AccueilRecommandeePage from '@/components/pages/AccueilRecommandeePage';

export const metadata: Metadata = {
  title: "Happy Few Immobilier — agence immobilière à Paris et dans l’Est parisien",
  description: "Achat, vente et estimation à Paris, Saint-Maur-des-Fossés, Vincennes et dans l’Est parisien. Deux fondateurs, une méthode transparente.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <AccueilRecommandeePage />;
}
