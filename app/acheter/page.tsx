import type { Metadata } from 'next';
import AcheterPage from '@/components/pages/AcheterPage';

export const metadata: Metadata = {
  title: "Biens à vendre et ventes récentes",
  description: "Appartements et maisons à vendre à Saint-Maur, Vincennes, Paris et dans l’Est parisien, et nos ventes récentes.",
  alternates: { canonical: "/acheter" },
};

export default function Page() {
  return <AcheterPage />;
}
