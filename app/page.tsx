import Link from "next/link";
import HeroSection from "./components/sections/HeroSection";
import PlansSection from "./components/sections/PlansSection";
import TrustedBySection from "./components/sections/TrustedBySection";
import WhatIsHostingSection from "./components/sections/WhatIsHostingSection";
import DomainSearchSection from "./components/sections/DomainSearchSection";
import WhyChooseSection from "./components/sections/WhyChooseSection";
import FastestHostingSection from "./components/sections/FastestHostingSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import FaqSection from "./components/sections/FaqSection";
import EasyHebergementSection from "./components/sections/EasyHebergementSection";
import BenchmarkHostingMorocco from "./components/sections/BenchmarkHostingMorocco";
import CookieConsent from "./components/ui/CookieConsentBanner";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import SixCards from "./components/commonSections/SixCards";
import { ClaimReviewJsonLd } from "next-seo";
import { generateNextSeo } from "next-seo/pages";
import Head from "next/head";

// ============================================
// HOSTINO.MA - HOME PAGE METADATA (EXTRACTED)
// ============================================

export const metadata = {
  title: 'Hébergement Web Maroc - Hébergeur web 100% marocain',
  description: 'Hébergement Web Maroc. Hostino™ Hébergeur recommandé par les développeurs, les agences web et les professionnels du numérique au Maroc',
  metadataBase: new URL('https://www.hostino.ma'),
  robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  canonical: 'https://www.hostino.ma/',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.hostino.ma/',
    siteName: 'Hostino',
    title: 'Hébergement Web Maroc - Hébergeur web 100% marocain',
    description: 'Hébergement Web Maroc. Hostino™ Hébergeur recommandé par les développeurs, les agences web et les professionnels du numérique au Maroc',
    images: [
      {
        url: 'https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png',
        secureUrl: 'https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png',
        width: 1200,
        height: 630,
        alt: 'Hébergement web',
        type: 'image/png',
      },
    ],
    updatedTime: '2025-08-03T01:16:12+00:00',
  },
  article: {
    publishedTime: '2023-09-19T19:36:54+00:00',
    modifiedTime: '2025-08-03T01:16:12+00:00',
    authors: ['admin'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hébergement Web Maroc - Hébergeur web 100% marocain',
    description: 'Hébergement Web Maroc. Hostino™ Hébergeur recommandé par les développeurs, les agences web et les professionnels du numérique au Maroc',
    image: 'https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png',
    creator: '@admin',
    labels: {
      label1: 'Écrit par',
      data1: 'admin',
      label2: 'Temps de lecture',
      data2: '7 minutes',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hostino',
    url: 'https://www.hostino.ma',
    logo: 'https://www.hostino.ma/wp-content/uploads/2024/10/icon.png',
    description: 'Hostino fournit des services d\'hébergement Web au Maroc, d\'enregistrement de noms de domaine, de certificats SSL et diverses autres solutions Web. La plateforme est compétitive en terme de prix et de qualité.',
    email: 'info@hostino.com',
    telephone: '+212531031186',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'T100 Technopark, Tanger 90000',
      addressRegion: 'Tanger',
      postalCode: '90000',
      addressCountry: 'Morocco',
    },
    sameAs: [
      'https://web.facebook.com/hostinocom/?_rdc=1&_rdr',
      'https://www.linkedin.com/company/hostino',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212531031186',
      contactType: 'customer support',
    },
  },
};

// Structured Data (JSON-LD)
export const structuredData = {
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


export default async function HomePage() {
  return (
    <>
      <ClaimReviewJsonLd
        url="/"
        author="Hostino"
        claimReviewed="Hébergement web Maroc"
        reviewRating={{
          ratingValue: "55",
          bestRating: "55",
          worstRating: "0",
          alternateName: "Excellent",
        }}
        itemReviewed={{
          author: "Hostino",
          datePublished: "2025-10-27",
        }}
      />
      <main>
        <HeroSection />
        <PlansSection />
        <TrustedBySection classNameImage="md:w-[80%]  w-[100%] mx-auto h-auto" />
        <WhatIsHostingSection />
        <DomainSearchSection id="ma" />
        <SixCards
          title={"Pourquoi choisir <br />Hébergement <i>web Maroc </i>?"}
          alignment="center"
        />
        <FastestHostingSection />
        <EasyHebergementSection />
        <BenefitsSection />
        <BenchmarkHostingMorocco />
        <FaqSection />
      </main>
    </>
  );
}
