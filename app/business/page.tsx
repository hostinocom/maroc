import StartyComparison from "../components/sectionsStartyPage/StartyComparison";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import SixCards from "../components/commonSections/SixCards";
import FAQSection from "../components/commonSections/FaqSection";
import StarRating from "../components/ui/StartRatingFooter";
import Plans from "../components/commonSections/Plans";
import HeroHeadingPages from "../components/ui/heroHeadingPages";
import TrustedBySection from "../components/sections/TrustedBySection";
import PromoBanner from "../components/ui/PromoBanner";
import { text } from "stream/consumers";
import { ClaimReviewJsonLd } from "next-seo";

const hostingPlans = [
  {
    id: 1,
    name: "Business",
    subtext: "",
    price_original: "1199 DH/an",
    price_discounted: "999 DH/an",
    save: "20%",
    price_ttc: "Pour 1 an, vous payez <b>1198,8 DH TTC.</b>",
    performance_stars: 4,
    more_performance: {
      text: "Plus de performances ?",
      href: "dd",
      exists: false,
    },
    order: {
      text: "Commander",
      href: "https://my.hostino.com/order.php?pid=79&language=french&country=MA",
    },
    features: {
      seo_optimized: true,
      free_domain: true,
      wordpress_preinstalled: true,
      control_panel: "cPanel®",
      ssl: "Gratuit et illimité",
      disk_space: "50 GB NVMe",
      bandwidth: "Illimitée",
      databases: "Illimitées",
      email_accounts: 10,
      subdomains: 10,
      backups: "JetBackup",
    },
    most_popular: {
      text: "Le plus vendu",
      is_most_popular: true,
    },
  },
  {
    id: 2,
    name: "Business Plus",
    subtext: "",
    price_original: "",
    price_discounted: "1800 DH/an",
    price_ttc: "Pour 1 an, vous payez <b>2160 DH TTC.</b>",
    save: "",
    performance_stars: 5,
    more_performance: {
      text: "Plus de performances ?",
      href: "dd",
      exists: false,
    },
    order: {
      text: "Commander",
      href: "https://my.hostino.com/order.php?pid=80&language=french&country=MA",
    },
    features: {
      seo_optimized: true,
      free_domain: true,
      wordpress_preinstalled: true,
      control_panel: "cPanel®",
      ssl: "Gratuit et illimité",
      disk_space: "100 GB NVMe",
      bandwidth: "Illimitée",
      databases: "Illimitées",
      email_accounts: 50,
      subdomains: 50,
      backups: "JetBackup",
    },
    most_popular: {
      text: "",
      is_most_popular: false,
    },
  },
  {
    id: 3,
    name: "Business <i>Pro</i>",
    subtext: "",
    price_original: "",
    price_discounted: "3000 DH/an",
    price_ttc: "Pour 1 an, vous payez <b>3600 DH TTC.</b>",
    performance_stars: 5,
    save: "",
    more_performance: {
      text: "Plus de performances ?",
      href: "dd",
      exists: false,
    },
    order: {
      text: "Commander",
      href: "https://my.hostino.com/order.php?pid=81&language=french&country=MA",
    },
    features: {
      seo_optimized: true,
      free_domain: true,
      wordpress_preinstalled: true,
      control_panel: "cPanel®",
      ssl: "Gratuit et illimité",
      disk_space: "200 GB NVMe",
      bandwidth: "Illimitée",
      databases: "Illimitées",
      email_accounts: "Illimitées",
      subdomains: "Illimitées",
      backups: "JetBackup",
    },
    most_popular: {
      text: "",
      is_most_popular: false,
    },
  },
];

const faqData = [
  {
    question: "Est-ce que l’hébergement web Business répond à mes besoins ?",
    answers: [
      "Nos packs Business sont spécialement conçus pour les sites d’entreprises, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.",
      "L’hébergement Business offre à votre site web sécurité, fiabilité, ainsi qu’une flexibilité totale.",
      "Vous pouvez évoluer à tout moment, sans interruption de service : passez facilement de Business à Business Plus, puis à Business Pro, au rythme du développement de votre activité.",
    ],
  },
  {
    question: "Quel délai pour activer mon compte hébergement web Business® ?",
    answers: [
      "Votre commande de l’hébergement web Business sera activée une fois votre paiement est confirmé.",
      "Dans le cas d'un paiement par carte bancaire marocaine (CMI) ou internationale, l’activation est presque instantanée. Pour les paiements par virement bancaire, il est nécessaire d'envoyer le justificatif de votre transfert à sales@hostino.com.",
    ],
  },
  {
    question: "Mes envois d’emails sont-ils limités ?",
    answers: [
      "Afin de prévenir toute utilisation abusive du mass-mailing, le nombre d’e-mails envoyés par heure est limité en fonction de la quantité d’e-mails incluse dans votre formule.",
    ],
  },
  {
    question: "Est-il possible de changer le domaine de mon hébergement ?",
    answers: [
      "Le changement de domaine est permis dans les 30 jours qui suivent votre achat. Au delà de cette date le changement n’est pas possible.",
    ],
  },
  {
    question:
      "Mon hébergement Business® a expiré, est-ce que mes données sont perdues ?",
    answers: [
      "Vos données restent disponibles sur nos serveurs pendant une période de 30 jours après l’expiration de votre service.",
      "Elles peuvent être récupérées instantanément une fois que les frais de renouvellement sont réglés.",
      "Après cette première période de 30 jours, vos données restent uniquement sur nos serveurs de sauvegarde pendant une durée supplémentaire de 30 jours. Pour les restaurer, des frais de restauration de 499 DH HT sont exigés.",
      "Au-delà de cette période totale de 60 jours après l’expiration du service, aucune récupération n’est possible, et les données sont définitivement supprimées.",
    ],
  },
  {
    question: "Puis-je changer mon offre d’hébergement à tout moment ?",
    answers: [
      "Vous pouvez faire l’augmentation ou la baisse de formule à tout moment. Cela implique de payer uniquement le prorata en cas d’augmentation.",
    ],
  },
];

export default async function StartyPage() {
  return (
    <main>
      <ClaimReviewJsonLd
        url="https://maroc-1hp.pages.dev/business/"
        author={{ name: "Hostino" } as any}
        claimReviewed="Business - Solutions Professionnelles"
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
        smallTitle="Hébergement web business"
        bigTitle="Business®, Hébergement web pour les professionnels"
      />
      <Plans
        title="Starty®, Hébergement web pas cher"
        smallTitle="Hébergement web pas cher"
        plans={hostingPlans}
        heroHeading={true}
        namePlaneBold={true}
      />
      <PromoBanner
        icon="⚠️"
        text="Lancez votre site à petit prix avec nos offres d’hébergement web <b><i>Starty</i></b>. Quand votre activité grandit, passez aux packs <b><a style={{textDecoration:'underline'}} href='/business/'>Business</a></b> pour des performances pro."
      />
      <TrustedBySection classNameImage="md:w-[65%]  w-[100%] mx-auto h-auto" />

      <StartyComparison />
      <TextLeftImageRight
        title="Découvrez Maily®,
la révolution de la messagerie <i>pro</i>"
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

      <FAQSection
        faqData={faqData}
        title={"FAQ sur l'hébergement web Business"}
      />
      <StarRating />
    </main>
  );
}
