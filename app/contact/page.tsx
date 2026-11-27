import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';

export const metadata: Metadata = {
  title: "Nous contacter",
  description: "Contactez Geoffroy ou Myriam Verzeaux.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
