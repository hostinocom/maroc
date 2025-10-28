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
import SixCards from "./components/commonSections/SixCards";
import Head from "next/head";

const title = "Hébergement Web Maroc - Hébergeur web 100% marocain";
const description =
  "Hébergement Web Maroc. Hostino™️ Hébergeur recommandé par les développeurs, les agences web et les professionnels du numérique au Maroc";
const imageUrl =
  "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png";
const canonical_url = "https://www.hostino.ma/";
const og_alt = "Hébergement Web Maroc";

export const metadata = {
  title: title,
  description: description,
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: canonical_url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: canonical_url,
    siteName: "Hostino",
    title: title,
    description: description,
    images: [
      {
        url: imageUrl,
        secureUrl: imageUrl,
        width: 1200,
        height: 630,
        alt: og_alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageUrl],
    creator: "@admin",
  },
};
export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": "https://www.hostino.ma/#place",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "35.77594947083067",
          longitude: "-5.80348479866106",
        },
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=35.77594947083067,-5.80348479866106",
        address: {
          "@type": "PostalAddress",
          streetAddress: "T100 Technopark Tanger",
          addressLocality: "Tanger",
          addressRegion: "Tanger",
          postalCode: "90000",
          addressCountry: "Maroc",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.hostino.ma/#organization",
        name: "Hostino",
        url: "https://www.hostino.ma",
        email: "info@hostino.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "T100 Technopark Tanger",
          addressLocality: "Tanger",
          addressRegion: "Tanger",
          postalCode: "90000",
          addressCountry: "Maroc",
        },
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.hostino.ma/#logo",
          url: "https://www.hostino.ma/logo-icon-square.jpg",
          contentUrl: "https://www.hostino.ma/logo-icon-square.jpg",
          caption: "Hostino",
          inLanguage: "fr-FR",
          width: "1200",
          height: "1200",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+212531031186",
            contactType: "customer support",
          },
        ],
        location: { "@id": "https://www.hostino.ma/#place" },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hostino.ma/#website",
        url: "https://www.hostino.ma",
        name: "Hostino",
        publisher: { "@id": "https://www.hostino.ma/#organization" },
        inLanguage: "fr-FR",
      },
      {
        "@type": "ImageObject",
        "@id":
          "https://www.hostino.ma/wp-content/uploads/2025/06/google-svg.svg",
        url: "https://www.hostino.ma/wp-content/uploads/2025/06/google-svg.svg",
        width: "200",
        height: "200",
        inLanguage: "fr-FR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hostino.ma/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: "1",
            item: {
              "@id": "https://www.hostino.ma",
              name: "Hostino - Noms de domaine et hébergement web au Maroc",
            },
          },
          {
            "@type": "ListItem",
            position: "2",
            item: {
              "@id": "https://www.hostino.ma/nom-de-domaine-ma",
              name: "Nom de domaine",
            },
          },
        ],
      },
      {
        "@type": "Product",
        name: "Nom de domaine Maroc - .Ma à seulement 118 DH",
        url: "https://www.hostino.ma/nom-de-domaine-ma",
        description:
          "Nom de domaine Maroc. En quelques clics, enregistrez votre nom de domaine. Sécurisez votre .ma à 118 Dhs/an. Activation instantanée 24h/24.",
        brand: { "@type": "Brand", name: "Hostino" },
        offers: {
          "@type": "AggregateOffer",
          url: "https://www.hostino.ma/nom-de-domaine-ma",
          lowPrice: "118",
          priceCurrency: "MAD",
          availability: "InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "918",
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

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

// shema.org
