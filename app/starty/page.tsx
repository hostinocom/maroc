import Link from "next/link";
import PlansSection, { Plan } from "../components/sections/PlansSection";
import StartyComparison from "../components/sectionsStartyPage/StartyComparison";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import SixCards from "../components/commonSections/SixCards";
import FAQSection from "../components/commonSections/FaqSection";
import StarRating from "../components/ui/StartRatingFooter";
import Plans from "../components/commonSections/Plans";
import HeroHeadingPages from "../components/ui/heroHeadingPages";
import TrustedBySection from "../components/sections/TrustedBySection";
import PromoBanner from "../components/ui/PromoBanner";
import { ClaimReviewJsonLd } from "next-seo";

const hostingPlans: Plan[] = [
  {
    id: 1,
    name: "Hébergement <br/>web <i>Eco</i>",
    subtext:
      "Offre d’hébergement web économique pour sites personnels et blogs.",
    price_original: "299 DH/an",
    price_discounted: "199 DH/an",
    save: "33%",
    price_ttc: "Pour 1 an, vous payez <b> 238,8 DH TTC.</b>",
    performance_stars: 1,
    more_performance: {
      text: "Plus de performances ?",
      href: "/business/",
      exists: true,
    },
    order: {
      text: "Commander",
      href: "https://my.hostino.com/order.php?pid=70&amp;language=french&amp;country=MA&amp;promocode=UI12E&amp;1=USD",
    },
    features: {
      seo_optimized: false,
      free_domain: false,
      wordpress_preinstalled: true,
      control_panel: "cPanel®",
      ssl: "Gratuit et illimité",
      disk_space: "10 GB NVMe",
      bandwidth: "100 GB",
      databases: 1,
      email_accounts: 1,
      subdomains: 1,
      backups: "JetBackup",
    },
    most_popular: {
      text: "Le plus populaire",
      is_most_popular: false,
    },
  },
  {
    id: 2,
    name: "Hébergement <br/>web <i>Starty</i>",
    subtext:
      "Hébergement idéal pour les petits sites à faible consommation de ressources.",
    price_original: "499 DH/an",
    price_discounted: "399 DH/an",
    price_ttc: "Pour 1 an, vous payez <b>478,8 DH TTC.</b>",
    save: "20%",
    performance_stars: 4,
    more_performance: {
      text: "Plus de performances ?",
      href: "https://www.hostino.ma/business/",
      exists: true,
    },
    order: {
      text: "Commander",
      href: "https://my.hostino.com/order.php?pid=36&amp;language=french&amp;country=MA&amp;promocode=UI12S&amp;1=USD",
    },
    features: {
      seo_optimized: false,
      free_domain: true,
      wordpress_preinstalled: true,
      control_panel: "cPanel®",
      ssl: "Gratuit et illimité",
      disk_space: "25 GB NVMe",
      bandwidth: "250 GB",
      databases: 5,
      email_accounts: 5,
      subdomains: 5,
      backups: "JetBackup",
    },
    most_popular: {
      text: "Le plus populaire",
      is_most_popular: true,
    },
  },
];



export default async function StartyPage() {
  return (
    <>
      <main>
        <ClaimReviewJsonLd
          url="https://maroc-1hp.pages.dev/starty"
          author={{ name: "Hostino" } as any}
          claimReviewed="Starty - Hébergement Web Maroc"
          reviewRating={
            {
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "55",
            } as any
          }
        />
        
        <HeroHeadingPages
          smallTitle="Hébergement web pas cher"
          bigTitle="Starty®, Hébergement web pas cher"
        />
        <Plans
          title="Starty®, Hébergement web pas cher"
          smallTitle="Hébergement web pas cher"
          plans={hostingPlans}
          heroHeading={true}
        />
        <PromoBanner
          icon="⚠️"
          text="Lancez votre site à petit prix avec nos offres d’hébergement web <b><i>Starty</i></b>. Quand votre activité grandit, passez aux packs <b><a style={{textDecoration:'underline'}} href='https://www.hostino.ma/business/'>Business</a></b> pour des performances pro."
        />
        <TrustedBySection classNameImage="md:w-[65%]  w-[100%] mx-auto h-auto" />

        <StartyComparison />
        <TextLeftImageRight
          title="Découvrez Maily®, la révolution de la messagerie <i>pro</i>"
          paragraphs={[
            "Sécurisez vos échanges professionnels avec Maily®, la messagerie cloud la plus fiable du marché, conçue par Hostino®.",
            "Oubliez les problèmes d’envoi et de réception liés aux solutions mail traditionnelles intégrées au cPanel (webmail de Roundcube). Maily® est bien plus qu’une simple boîte mail : c’est la solution qui allie sécurité, productivité et efficacité pour une expérience collaborative inégalée.",
            "Notre équipe d’experts est à votre écoute pour vous accompagner dans la mise en place, la configuration et l’utilisation de Maily®. Appelez-nous dès maintenant au +212 (05) 31 03 11 86.",
          ]}
          imageSrc="/images/starty/email-professionnel-maroc.jpg"
          imageAlt="Maily - Messagerie professionnelle"
        />
        <SixCards
          title={
            "Pourquoi faire confiance à Hostino pour l'hébergement de votre site web ?"
          }
          alignment="left"
        />

        <FAQSection title={"FAQ sur l'hébergement web Starty"} />
        <StarRating />
      </main>
    </>
  );
}
