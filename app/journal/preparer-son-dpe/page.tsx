import type { Metadata } from 'next';
import ArticlePreparerDpePage from '@/components/pages/ArticlePreparerDpePage';

export const metadata: Metadata = {
  title: "Préparer son DPE : les documents à réunir",
  description: "Les documents qui améliorent la justesse de votre DPE.",
  alternates: { canonical: "/journal/preparer-son-dpe" },
};

export default function Page() {
  return <ArticlePreparerDpePage />;
}
