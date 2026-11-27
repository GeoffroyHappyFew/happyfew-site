import type { Metadata } from 'next';
import ArticleActeAcquereurPage from '@/components/pages/ArticleActeAcquereurPage';

export const metadata: Metadata = {
  title: "Préparer l’acte authentique de votre achat",
  description: "La check-list de l’acquéreur avant l’acte authentique.",
  alternates: { canonical: "/journal/preparer-acte-authentique-acquereur" },
};

export default function Page() {
  return <ArticleActeAcquereurPage />;
}
