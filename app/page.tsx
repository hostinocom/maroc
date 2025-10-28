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
import { ProductJsonLd } from "next-seo";
import { generateNextSeo } from "next-seo/pages";


const title = "Hébergement Web Maroc - Hébergeur web 100% marocain"
const description =  "Hébergement Web Maroc. Hostino™️ Hébergeur recommandé par les développeurs, les agences web et les professionnels du numérique au Maroc"
const imageUrl = "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png" 
const canonical_url = "https://www.hostino.ma/"
const og_alt = "Hébergement Web Maroc"

export const metadata  = {
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
    description:
      description,
    images: [
      {
        url: imageUrl,
        secureUrl:
          imageUrl,
        width: 1200,
        height: 630,
        alt: og_alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:title,
    description:
      description,
    images: [
      imageUrl,
    ],
    creator: "@admin",
  },
};
export default async function HomePage() {
  return (
    <>
<ProductJsonLd
        productName="Nom de domaine Maroc"
        description="Nom de domaine au Maroc. En quelques clics, enregistrez votre nom de domaine. Sécurisez votre .ma à 118 Dhs/an. Activation instantanée 24h/24"
        brand="Hostino"
        images={["https://www.hostino.ma/wp-content/uploads/2025/03/nom-de-domaine-maroc.jpg"]}
        aggregateRating={{ ratingValue: "5", reviewCount: "818" }}
        offers={[
          {
            price: "119",
            priceCurrency: "MAD",
            url: "https://www.hostino.ma/nom-de-domaine-ma",
            availability: "InStock",
            seller: { name: "Hostino" },
          },
        ]}
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
