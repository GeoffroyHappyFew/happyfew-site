import type { Metadata } from 'next';
import BaremePage from '@/components/pages/BaremePage';

export const metadata: Metadata = {
  title: "Barème des honoraires",
  description: "Le barème des honoraires de Happy Few Immobilier.",
  alternates: { canonical: "/bareme-honoraires" },
};

export default function Page() {
  return <BaremePage />;
}
