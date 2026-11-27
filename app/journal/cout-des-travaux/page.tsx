import type { Metadata } from 'next';
import ArticleTravauxPage from '@/components/pages/ArticleTravauxPage';

export const metadata: Metadata = {
  title: "Anticiper le coût des travaux",
  description: "Nos fourchettes de prix par poste de travaux.",
  alternates: { canonical: "/journal/cout-des-travaux" },
};

export default function Page() {
  return <ArticleTravauxPage />;
}
