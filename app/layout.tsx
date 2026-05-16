import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '600', '700'],
});

const siteUrl = 'https://www.reflekplus.cz';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Reflek Plus | Autopotahy a čalounění Brno od roku 1996',
    template: '%s | Reflek Plus',
  },
  description:
    'Zakázková výroba autopotahů a opravy autosedadel v Brně. Přesné střihy pro auta od 90. let. Tradice od roku 1996.',
  openGraph: {
    siteName: 'Reflek Plus',
    locale: 'cs_CZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Reflek Plus s.r.o.',
  description:
    'Zakázková výroba autopotahů a profesionální opravy autosedadel v Brně.',
  url: siteUrl,
  telephone: '+420123456789',
  email: 'info@reflekplus.cz',
  foundingDate: '1996',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gajdošova 80',
    addressLocality: 'Brno',
    postalCode: '615 00',
    addressCountry: 'CZ',
  },
  openingHours: 'Mo-Fr 07:00-17:00',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${montserrat.variable} dark`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-carbon-black text-on-surface font-body-md min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <MobileBottomNav />
        <Analytics />
      </body>
    </html>
  );
}
