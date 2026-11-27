import type { Metadata } from 'next';
import MentionsLegalesPage from '@/components/pages/MentionsLegalesPage';

export const metadata: Metadata = {
  title: "Mentions légales et confidentialité",
  description: "Mentions légales et politique de confidentialité de Happy Few Immobilier.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return <MentionsLegalesPage />;
}
