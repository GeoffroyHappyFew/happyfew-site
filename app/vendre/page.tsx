import type { Metadata } from 'next';
import VendrePage from '@/components/pages/VendrePage';

export const metadata: Metadata = {
  title: "Vendre avec Happy Few : notre méthode",
  description: "Étude de marché, moyens de commercialisation, sécurité et transparence : notre méthode pour vendre au bon prix.",
  alternates: { canonical: "/vendre" },
};

export default function Page() {
  return <VendrePage />;
}
