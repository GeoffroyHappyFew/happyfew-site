import type { Metadata } from 'next';
import JournalPage from '@/components/pages/JournalPage';

export const metadata: Metadata = {
  title: "Le Journal : nos conseils",
  description: "Conseils pour vendre et acheter : avant-contrat, acte authentique, DPE, reportage photo, travaux.",
  alternates: { canonical: "/journal" },
};

export default function Page() {
  return <JournalPage />;
}
