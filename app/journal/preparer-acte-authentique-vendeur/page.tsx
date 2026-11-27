import type { Metadata } from 'next';
import ArticleActeVendeurPage from '@/components/pages/ArticleActeVendeurPage';

export const metadata: Metadata = {
  title: "Préparer l’acte authentique de votre vente",
  description: "La check-list du vendeur avant l’acte authentique.",
  alternates: { canonical: "/journal/preparer-acte-authentique-vendeur" },
};

export default function Page() {
  return <ArticleActeVendeurPage />;
}
