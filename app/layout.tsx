import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const articleSchema = {
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
      "@id": "https://www.hostino.ma/wp-content/uploads/2025/06/google-svg.svg",
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
      url: "canonical_url",
      description: "description",
      brand: { "@type": "Brand", name: "Hostino" },
      offers: {
        "@type": "AggregateOffer",
        url: "canonical_url",
        lowPrice: "118",
        priceCurrency: "MAD",
        availability: "InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "920",
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
    <html lang="fr-MA">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <CookieBanner />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </body>
    </html>
  );
}
