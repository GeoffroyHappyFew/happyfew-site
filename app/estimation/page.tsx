import type { Metadata } from 'next';
import EstimationPage from '@/components/pages/EstimationPage';

export const metadata: Metadata = {
  title: "Estimer mon bien",
  description: "Demandez une estimation argumentée de votre bien, gratuite, sous 48 h.",
  alternates: { canonical: "/estimation" },
};

export default function Page() {
  return <EstimationPage />;
}
