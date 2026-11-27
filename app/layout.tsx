import type { Metadata } from 'next';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.happyfewimmobilier.com'),
  title: { default: 'Happy Few Immobilier', template: '%s | Happy Few Immobilier' },
  description: 'Agence immobilière à Paris et dans l’Est parisien : achat, vente, estimation.',
  openGraph: { siteName: 'Happy Few Immobilier', locale: 'fr_FR', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
