import type { Metadata } from 'next';
import SecteurSaintMaurPage from '@/components/pages/SecteurSaintMaurPage';

export const metadata: Metadata = {
  title: "Vendre ou acheter à Saint-Maur-des-Fossés",
  description: "Le marché immobilier de Saint-Maur-des-Fossés quartier par quartier, nos ventes et nos biens à vendre.",
  alternates: { canonical: "/secteurs/saint-maur-des-fosses" },
};

export default function Page() {
  return <SecteurSaintMaurPage />;
}
