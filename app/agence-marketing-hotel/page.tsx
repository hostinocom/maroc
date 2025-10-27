import Link from "next/link";
import HeroSection from "../components/commonSections/HeroSection";
import ContactForm from "../components/commonSections/ContactForm";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";

import NationalCoverage from "../components/commonSections/NationalCoverage";
import FAQSection from "../components/commonSections/FaqSection";
import SeoServiceCards from "../components/commonSections/SeoServiceCards";
import GmbServices from "../components/commonSections/GmbServices";
import StarRating from "../components/ui/StartRatingFooter";
import TitleParagraphButton from "../components/commonSections/TitleParagraphButton";
import StartsRatingYellowFooter from "../components/ui/StartsRatingYellowFooter";
import SeoImpactSection from "../components/sectionsAgenceSeoMaroc/SeoImpactContent";
import CaseStudyPalaisFajar from "../components/sectionsAgenceSeoMaroc/CaseDtudyPalaisFajar";

const faqData = [
  {
    question: "Pourquoi un hôtel ou un riad au Maroc a-t-il besoin d'une stratégie marketing digitale ?",
    answers: [
      "Au Maroc, la concurrence entre hôtels et riads est forte, notamment dans les médinas de Marrakech, Fès ou Essaouira. Sans stratégie marketing, même les plus beaux établissements restent invisibles aux yeux des voyageurs. Une présence optimisée sur Google, des avis clients positifs et un site qui convertit sont essentiels pour exister face aux OTA (Booking, <span style=\"text-decoration: underline\"><strong><a href=\"https://www.expedia.fr/Destinations-En-Maroc.d122.Destinations-hotels\" rel=\"noopener\">Expedia</a></strong></span>).",
      "Le marketing digital permet de transformer une simple visibilité en réservations directes, ce qui améliore la rentabilité et renforce la notoriété de l'établissement.",
    ],
  },
  {
    question: "Comment le storytelling peut valoriser un hôtel ou riad marocain ?",
    answers: [
      "Au Maroc, chaque établissement a une histoire à raconter : un riad restauré par une famille locale, une kasbah nichée dans les montagnes, un hôtel moderne avec une touche artisanale. Le storytelling transforme ces éléments en expériences émotionnelles qui séduisent les voyageurs.",
      "Une agence spécialisée peut traduire cette authenticité en articles, vidéos ou posts sociaux.",
      "Résultat : un hôtel ou un riad devient non seulement un lieu de séjour, mais une aventure marocaine en soi.",
    ],
  },
  {
    question: "Quelle est l'importance des avis clients pour un hôtel au Maroc ?",
    answers: [
      "Les avis clients influencent directement la décision des voyageurs. Un hôtel ou riad avec une note supérieure à 4,0/5 inspire confiance et attire davantage de réservations. Au Maroc, où l'hospitalité est une valeur culturelle forte, capitaliser sur la satisfaction client est un atout majeur.",
      "Une bonne gestion des avis en ligne, associée à des réponses professionnelles, permet de bâtir une e-réputation solide et de transformer chaque séjour réussi en levier marketing.",
    ],
  },
  {
    question: "Comment Hostino aide les hôtels de luxe à séduire une clientèle internationale ?",
    answers: [
      "Les hôtels de luxe marocains doivent mettre en avant bien plus que leurs chambres : spa, gastronomie marocaine raffinée, excursions exclusives. Hostino valorise ces expériences à travers des campagnes digitales premium, un référencement multilingue et des visuels de haute qualité.",
      "Cette approche attire les voyageurs à fort pouvoir d'achat et augmente la part de réservations directes, en réduisant la dépendance aux commissions des plateformes de réservation.",
    ],
  },
  {
    question: "Le marketing digital peut-il vraiment aider un petit riad ?",
    answers: [
      "Absolument. Un petit riad, avec son charme traditionnel et son hospitalité, a un énorme potentiel d'attraction, notamment auprès des voyageurs étrangers. Pourtant, beaucoup restent invisibles par manque de stratégie digitale.",
      "Avec un site web optimisé, des contenus inspirants et une présence active sur Instagram ou TikTok, un riad peut rapidement se démarquer et séduire une clientèle fidèle, tout en conservant son authenticité.",
    ],
  },
  {
    question: "Quelles stratégies pour séduire différents marchés étrangers ?",
    answers: [
      "La clientèle internationale est diverse : les voyageurs français recherchent souvent des riads authentiques, les Américains veulent une expérience immersive, et les visiteurs du Golfe privilégient les hôtels de luxe avec spa et suites. Adapter sa communication à chaque cible est donc essentiel.",
      "Hostino met en place des campagnes multilingues et segmentées : SEO en français, Google Ads ciblés sur l'Espagne, contenus en anglais ou en arabe selon le marché. Cette approche sur-mesure maximise l'attractivité de l'établissement auprès de chaque profil de voyageur.",
    ],
  },
];

const prestations = [
  {
    title: "Référencement<br>Google (SEO)",
    description:
      "Nous optimisons votre site hôtelier pour un positionnement durable en première page de Google sur des mots-clés tels que : \"Meilleur hôtel à Rabat\", \"Riad Marrakech\", ou <b>\"Luxury Hotel Morocco\"</b>.<br/><br/>Résultat : <b>plus de trafic qualifié</b> et davantage de <b>réservations directes</b>.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Fiches<br>d'établissement Google",
    description:
      "Optimisez la fiche <b>Google My Business</b> de votre hôtel pour renforcer la réputation, stimuler les ventes et accroître la notoriété. Elle facilite le <b>partage de l'itinéraire</b> et attire davantage de clients.<br/><br/>En 2025, la réputation d'un hôtel au Maroc dépend largement du volume et de la qualité des avis. Votre établissement doit maintenir une <b>note supérieure à 4,0/5</b> — et nous vous aidons à atteindre et préserver ce niveau.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Sponsoring & campagnes<br>Google Ads Hotels",
    description:
      "Boostez la <b>visibilité de votre hôtel sur Google</b> avec des campagnes ciblées sur vos mots-clés stratégiques. Attirez plus de voyageurs, réduisez votre <b>dépendance aux <span style=\"text-decoration: underline;\"><a href=\"https://fr.wikipedia.org/wiki/Channel_manager\" rel=\"noopener\">OTA</a></span></b> et augmentez vos réservations directes.<br/><br/>Notre agence gère vos annonces <span style=\"text-decoration: underline;\"><a href=\"https://www.hostino.ma/google-ads-maroc/\"><strong>Google Ads</strong></a></span> de A à Z : choix des mots-clés, création des campagnes, suivi et optimisation continue pour garantir le <b>meilleur retour sur investissement</b>.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Storytelling et rédaction<br>de contenus",
    description:
      "Nous créons des contenus uniques et engageants qui racontent <b>l'histoire de votre hôtel</b> tout en valorisant l'expérience locale.<br/><br/>Articles sur la culture, mise en avant des meilleurs restaurants de la ville, suggestions de lieux à visiter… nous produisons <b>des textes qui inspirent vos clients</b> et leur donnent envie de réserver.",
    link: "/maintenance-site-web-maroc",
    textButton: "Lire la suite",
  },
  {
    title: "Création de sites web et<br>d'applications mobiles",
    description:
      "Nous <strong><span style=\"text-decoration: underline;\"><a href=\"https://www.hostino.ma/creation-site-web-maroc/\">créons des sites web</a></span></strong> modernes et optimisés pour les hôtels, riads et palaces, multilingues et adaptés aux besoins du marché international. Chaque site intègre un <b>module de réservation en ligne</b> ainsi que la connexion à votre channel manager (ex. <b>HotelRunner</b>), afin de synchroniser vos disponibilités et tarifs.<br/><br/>En complément, nous développons des applications mobiles intuitives qui permettent à vos clients de réserver en quelques clics et de découvrir les meilleures expériences autour de votre établissement.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Gestion des<br>réseaux sociaux",
    description:
      "Nous gérons vos réseaux sociaux pour faire rayonner l'image de votre hôtel auprès d'une audience ciblée et qualifiée. Création de contenus visuels attractifs, <b>rédaction de publications engageantes</b>, planification et animation quotidienne : nous transformons vos comptes en véritables vitrines digitales.<br/><br/>Notre objectif est de développer votre communauté, <b>valoriser vos services</b> (chambres, restaurant, spa…), mettre en avant la culture locale et générer plus de réservations directes grâce à une présence sociale cohérente et professionnelle.",
    link: "/maintenance-site-web-maroc",
    textButton: "Lire la suite",
  },
];

export default async function HotelMarketingPage() {
  return (
    <main>
      <HeroSection
        subtitle="Agence Marketing Hôtel Maroc"
        title="Agence marketing hôtelier au Maroc"
        text="Boostez vos réservations directes <strong>depuis votre site web</strong> avec notre agence marketing hôtelier !"
        emailLabel={{
          textEmail: "Consultation par Email ?",
          color: "text-primary",
        }}
        email="info@hostino.com"
        imageSrc="images/agence-marketing-hotel/agence-marketing-hotel-maroc.png"
        imageAlt="Agence Marketing Hotel au Maroc"
      />

      <ContactForm
        title={
          <>
            Marketing hôtelier : un conseiller{" "}
            <br className="lg:hidden block " />
            <span className="border-bottom">vous rappelle !</span>
          </>
        }
      />

      <TextLeftImageRight
        title="Agence marketing dédiée à l'hôtellerie"
        paragraphs={[
          "Hostino, agence de marketing hôtelier au Maroc, accompagne les riads, <b>les chaînes hôtelières</b>, les <b>groupements d'hôtels</b> et les <b>établissements de luxe</b> en leur offrant un éventail complet de services destinés à renforcer la visibilité de leur marque et à accroître leurs <b>revenus directs</b>.",
          "Nous aidons les professionnels de l'hôtellerie au Maroc à maîtriser leur stratégie digitale. Notre expertise couvre <b>l'intégralité du parcours client</b>, de l'accroissement de la visibilité de leur marque à l'optimisation de leurs réservations directes.",
          "Nous mettons à votre disposition une équipe d'experts prête à vous guider dans la <b>conception, l'exécution, le suivi et l'optimisation</b> de votre stratégie de marketing digital.",
          "Appelez le +212 663 75 09 08 et confiez votre marketing hôtelier à des experts reconnus au Maroc.",
        ]}
        imageSrc="images/agence-marketing-hotel/agence-marketing-hotel-maroc.jpg"
        imageAlt="Agence Marketing pour les hôtels au Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <GmbServices
        data={prestations}
        title="Prestations de notre agence<br />de marketing hôtelier"
      />

      <TextLeftImageRight
        title="Référencement Google pour votre Hôtel au Maroc"
        paragraphs={[
          "Le référencement Google pour votre hôtel au Maroc est un levier incontournable pour <b>attirer plus de voyageurs</b> et augmenter vos réservations directes. Grâce à une stratégie SEO adaptée, votre établissement peut apparaître parmi les premiers résultats lorsqu'un client potentiel recherche un hôtel à Marrakech, Casablanca, Tanger ou toute autre ville touristique du pays.",
          "Cela passe par l'optimisation technique de votre site, la création de contenus pertinents, et une gestion efficace de votre fiche d'établissement Google afin de renforcer la visibilité locale. Être bien référencé vous permet également d'être plus <b>visible auprès des agences de voyages</b>, un atout majeur pour capter des réservations de groupe.",
          "Appelez le +212 663 75 09 08 et confiez le référencement SEO de votre hôtel ou riad à des experts reconnus au Maroc.",
        ]}
        imageSrc="images/agence-marketing-hotel/agence-seo-hotel-maroc.jpg"
        imageAlt="Agence de référencement SEO Hôtel au Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <CaseStudyPalaisFajar />


      <SeoServiceCards />

      <NationalCoverage
        title="FAQ - Agence Marketing Hôtel Maroc"
        topic={"Marketing hôtelier "}
      />
      <FAQSection faqData={faqData} title="FAQ - Agence Marketing Hôtel Maroc" />
      <StartsRatingYellowFooter />
    </main>
  );
}