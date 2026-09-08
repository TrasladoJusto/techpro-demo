import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GSAPAnimations from '@/components/GSAPAnimations';
import { Analytics } from '@/components/Analytics';
import { Geist, Geist_Mono, Newsreader } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a2540',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: 'TechPro | Tecnología láser dental de precisión',
    template: '%s | TechPro',
  },
  description:
    'Distribuidor autorizado de equipos láser odontológicos. Asesoría por especialistas, capacitación y servicio técnico.',
  metadataBase: new URL('https://techpro-demo.com'),
  authors: [{ name: 'TechPro' }],
  creator: 'TechPro',
  publisher: 'TechPro',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://techpro-demo.com',
    siteName: 'TechPro',
    title: 'TechPro | Tecnología láser dental de precisión',
    description:
      'Distribuidor autorizado de equipos láser odontológicos. Asesoría por especialistas, capacitación y servicio técnico.',
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'TechPro — Tecnología láser dental de precisión',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechPro | Tecnología láser dental',
    description:
      'Distribuidor autorizado de equipos láser odontológicos.',
    images: ['/og-default.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://techpro-demo.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TechPro',
    url: 'https://techpro-demo.com',
    description:
      'Distribuidor autorizado de equipos láser odontológicos.',
    inLanguage: 'es',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://techpro-demo.com/equipos?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans flex flex-col min-h-[100dvh]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-blue)] focus:text-white focus:px-4 focus:py-2 focus:outline-none">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="flex-1 relative overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <GSAPAnimations />
        <Analytics />
      </body>
    </html>
  );
}
