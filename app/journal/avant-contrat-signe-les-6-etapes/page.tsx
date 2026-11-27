import type { Metadata } from 'next';
import ArticleAvantContratPage from '@/components/pages/ArticleAvantContratPage';

export const metadata: Metadata = {
  title: "Avant-contrat signé : les 6 étapes jusqu’à la vente",
  description: "Compromis ou promesse : les six étapes jusqu’à l’acte authentique, avec nos conseils aux vendeurs et aux acquéreurs.",
  alternates: { canonical: "/journal/avant-contrat-signe-les-6-etapes" },
};

export default function Page() {
  return <ArticleAvantContratPage />;
}
