import type { Metadata } from 'next';
import SecteursPage from '@/components/pages/SecteursPage';

export const metadata: Metadata = {
  title: "Nos secteurs",
  description: "Saint-Maur-des-Fossés, Vincennes, Paris, Nogent, Le Perreux, Montreuil, Fontenay : les secteurs où nous vendons.",
  alternates: { canonical: "/secteurs" },
};

export default function Page() {
  return <SecteursPage />;
}
