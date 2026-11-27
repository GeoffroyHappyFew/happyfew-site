import type { Metadata } from 'next';
import AvisPage from '@/components/pages/AvisPage';

export const metadata: Metadata = {
  title: "Comment nous collectons les avis",
  description: "Avis Google et OpinionSystem : comment nous les recueillons, les vérifions et les publions.",
  alternates: { canonical: "/avis-clients" },
};

export default function Page() {
  return <AvisPage />;
}
