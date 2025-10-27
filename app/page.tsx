import Link from "next/link"
import HeroSection from "./components/sections/HeroSection"
import PlansSection from "./components/sections/PlansSection"
import TrustedBySection from "./components/sections/TrustedBySection"
import WhatIsHostingSection from "./components/sections/WhatIsHostingSection"
import DomainSearchSection from "./components/sections/DomainSearchSection"
import WhyChooseSection from "./components/sections/WhyChooseSection"
import FastestHostingSection from "./components/sections/FastestHostingSection"
import BenefitsSection from "./components/sections/BenefitsSection"
import FaqSection from "./components/sections/FaqSection"
import EasyHebergementSection from "./components/sections/EasyHebergementSection"
import BenchmarkHostingMorocco from "./components/sections/BenchmarkHostingMorocco"
import CookieConsent from "./components/ui/CookieConsentBanner"
import WhatsAppFloat from "./components/ui/WhatsAppFloat"
import SixCards from "./components/commonSections/SixCards"

export default async function HomePage(){

  return (
      <main>
         <HeroSection />
         <PlansSection  />
         <TrustedBySection classNameImage="md:w-[80%]  w-[100%] mx-auto h-auto"/>
         <WhatIsHostingSection />
         <DomainSearchSection />
         <SixCards title={"Pourquoi choisir <br />Hébergement <i>web Maroc </i>?"} alignment="center" />
         <FastestHostingSection />
         <EasyHebergementSection />
         <BenefitsSection />
         <BenchmarkHostingMorocco />
         <FaqSection />
      </main>
  )
}
