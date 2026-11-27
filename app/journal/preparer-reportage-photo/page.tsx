import type { Metadata } from 'next';
import ArticleReportagePhotoPage from '@/components/pages/ArticleReportagePhotoPage';

export const metadata: Metadata = {
  title: "Préparer le reportage photo de votre bien",
  description: "Pièce par pièce, la check-list avant le passage du photographe.",
  alternates: { canonical: "/journal/preparer-reportage-photo" },
};

export default function Page() {
  return <ArticleReportagePhotoPage />;
}
