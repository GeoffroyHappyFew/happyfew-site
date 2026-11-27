import type { Metadata } from 'next';
import JournalArticlePage from '@/components/pages/JournalArticlePage';

export const metadata: Metadata = {
  title: "Prix au m² à Saint-Maur-des-Fossés",
  description: "Le point du trimestre sur les prix au m² à Saint-Maur-des-Fossés.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/journal/prix-m2-saint-maur" },
};

export default function Page() {
  return <JournalArticlePage />;
}
