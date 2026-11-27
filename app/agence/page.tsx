import type { Metadata } from 'next';
import AgencePage from '@/components/pages/AgencePage';

export const metadata: Metadata = {
  title: "Découvrir l’agence et ses fondateurs",
  description: "Happy Few Immobilier, créée en 2018 par Myriam et Geoffroy Verzeaux.",
  alternates: { canonical: "/agence" },
};

export default function Page() {
  return <AgencePage />;
}
