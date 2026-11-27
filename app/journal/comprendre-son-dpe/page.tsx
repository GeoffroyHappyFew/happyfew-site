import type { Metadata } from 'next';
import ArticleComprendreDpePage from '@/components/pages/ArticleComprendreDpePage';

export const metadata: Metadata = {
  title: "Comprendre son DPE : les 5 points à vérifier",
  description: "Vérifier son DPE, et le contester si besoin.",
  alternates: { canonical: "/journal/comprendre-son-dpe" },
};

export default function Page() {
  return <ArticleComprendreDpePage />;
}
