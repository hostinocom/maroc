import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/ui/CookieConsentBanner"
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title : {
    default: "Hébergement Web Maroc - Hébergeur 100% marocain",
    template: "%s | Hostino®",
  },
  description: "Hébergement Web Maroc. Hostino™ Hébergeur recommandé par les développeurs, les agences web et les professionnels du numérique au Maroc",
  icons: {
    icon: '/favicon.png', // This removes the favicon
  }
};

// Structured Data (JSON-LD)
export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Place',
      '@id': 'https://www.hostino.ma/#place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'T100 Technopark, Tanger 90000',
        addressRegion: 'Tanger',
        postalCode: '90000',
        addressCountry: 'Morocco',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.hostino.ma/#organization',
      name: 'Hostino',
      url: 'https://www.hostino.ma',
      sameAs: [
        'https://web.facebook.com/hostinocom/?_rdc=1&_rdr',
        'https://www.linkedin.com/company/hostino',
      ],
      email: 'info@hostino.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'T100 Technopark, Tanger 90000',
        addressRegion: 'Tanger',
        postalCode: '90000',
        addressCountry: 'Morocco',
      },
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.hostino.ma/#logo',
        url: 'https://www.hostino.ma/wp-content/uploads/2024/10/icon.png',
        contentUrl: 'https://www.hostino.ma/wp-content/uploads/2024/10/icon.png',
        caption: 'Hostino',
        inLanguage: 'fr-FR',
        width: '112',
        height: '112',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+212531031186',
          contactType: 'customer support',
        },
      ],
      description:
        "Hostino fournit des services d'hébergement Web au Maroc, d'enregistrement de noms de domaine, de certificats SSL et diverses autres solutions Web. La plateforme est compétitive en terme de prix et de qualité. Hebernow fournit un service client disponible 7j/7 et 24h/24.",
      location: {
        '@id': 'https://www.hostino.ma/#place',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.hostino.ma/#website',
      url: 'https://www.hostino.ma',
      name: 'Hostino',
      alternateName: 'Hostino',
      publisher: {
        '@id': 'https://www.hostino.ma/#organization',
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.hostino.ma/starty/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://www.hostino.ma',
            name: 'Accueil',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': 'https://www.hostino.ma/starty/',
            name: 'Starty®',
          },
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.hostino.ma/starty/#webpage',
      url: 'https://www.hostino.ma/starty/',
      name: 'Hébergement web pas cher au Maroc | Hostino',
      datePublished: '2024-07-21T21:19:22+00:00',
      dateModified: '2025-08-02T20:52:29+00:00',
      isPartOf: {
        '@id': 'https://www.hostino.ma/#website',
      },
      inLanguage: 'fr-FR',
      breadcrumb: {
        '@id': 'https://www.hostino.ma/starty/#breadcrumb',
      },
    },
    {
      '@type': 'Article',
      headline: 'Hébergement web pas cher au Maroc | Hostino',
      keywords: 'Hébergement web pas cher',
      datePublished: '2024-07-21T21:19:22+00:00',
      dateModified: '2025-08-02T20:52:29+00:00',
      author: {
        '@type': 'Person',
        name: 'admin',
        url: 'https://www.hostino.ma/author/admin/',
      },
      publisher: {
        '@id': 'https://www.hostino.ma/#organization',
      },
      description:
        "Hébergement web pas cher Maroc. Starty® vous permet d'héberger vos sites web à petit prix pour débuter votre activité en ligne",
      name: 'Hébergement web pas cher au Maroc | Hostino',
      '@id': 'https://www.hostino.ma/starty/#richSnippet',
      isPartOf: {
        '@id': 'https://www.hostino.ma/starty/#webpage',
      },
      inLanguage: 'fr-FR',
      mainEntityOfPage: {
        '@id': 'https://www.hostino.ma/starty/#webpage',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">

      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Header />
             {children}
             <CookieConsent />
          <Footer />
      </body>
    </html>
  );
}
