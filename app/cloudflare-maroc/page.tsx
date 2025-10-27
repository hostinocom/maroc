import Link from "next/link";
import HeroSection from "../components/commonSections/HeroSection";
import ContactForm from "../components/commonSections/ContactForm";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import FAQSection from "../components/commonSections/FaqSection";
import TitleParagraphButton from "../components/commonSections/TitleParagraphButton";
import StartsRatingYellowFooter from "../components/ui/StartsRatingYellowFooter";
import GmbServices from "../components/commonSections/GmbServices";

// FAQ Data extracted from Cloudflare Maroc HTML
const faqData = [
  {
    question: "C'est quoi Cloudflare au Maroc ?",
    answers: [
      "Cloudflare est une solution mondiale de sécurité et de performance web adoptée par de nombreuses entreprises marocaines.",
      "Elle protège et accélère les sites internet grâce à son réseau international, permettant aux visiteurs au Maroc comme à l'étranger d'accéder à vos pages plus rapidement et en toute sécurité.",
    ],
  },
  {
    question: "Est-ce que je peux cacher les DNS de mon serveur au Maroc avec Cloudflare ?",
    answers: [
      "Oui. Cloudflare masque l'adresse IP réelle de vos serveurs au Maroc et à l'international.",
      "Cela empêche les pirates de cibler directement vos infrastructures, offrant ainsi une meilleure confidentialité et une sécurité renforcée.",
    ],
  },
  {
    question: "Comment Cloudflare peut améliorer la visibilité SEO de mon site au Maroc ?",
    answers: [
      "Google privilégie les sites rapides et stables. En utilisant Cloudflare, votre site marocain bénéficie d'un CDN mondial, d'une optimisation du temps de chargement et d'une meilleure expérience utilisateur, ce qui renforce directement son référencement naturel et sa visibilité sur Google au Maroc et à l'international.",
    ],
  },
  {
    question: "Est-ce que Cloudflare est obligatoire ?",
    answers: [
      "Cloudflare n'est pas obligatoire, mais il devient essentiel dans un marché numérique en forte croissance comme le Maroc.",
      "Les entreprises marocaines qui veulent garantir la sécurité, la rapidité et la disponibilité de leur site web choisissent Cloudflare pour rester compétitives.",
    ],
  },
  {
    question: "Cloudflare peut-il sécuriser le site web de notre entreprise au Maroc ?",
    answers: [
      "Oui. Cloudflare offre une protection avancée contre les attaques DDoS, un pare-feu applicatif (WAF) et une gestion SSL/TLS.",
      "Au Maroc, où les cyberattaques ciblant les entreprises sont en augmentation, ces outils sont indispensables pour protéger vos données et assurer la continuité de vos services.",
    ],
  },
  {
    question: "Mon site est très lent, Cloudflare peut-il régler cela au Maroc ?",
    answers: [
      "Oui. Cloudflare met en cache vos contenus sur des serveurs stratégiques et utilise des technologies comme Argo Smart Routing. Résultat : vos visiteurs au Maroc accèdent à un site beaucoup plus rapide, même en cas de pics de trafic.",
    ],
  },
];

// Services data extracted from Cloudflare Maroc HTML
const services = [
  {
    title: "Intégration Cloudflare",
    description:
      "Nous vous accompagnons dans le déploiement et la mise en <b>place complète de Cloudflare</b> pour sécuriser et optimiser vos sites web dès le premier jour.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Gestion DNS Cloudflare",
    description:
      "Notre équipe prend en charge la configuration et la gestion de vos <b>enregistrements DNS sur Cloudflare</b>, garantissant une disponibilité maximale et une meilleure protection de votre <span style=\"text-decoration: underline;\"><a href=\"https://www.hostino.ma/nom-de-domaine-ma\"><strong>domaine</strong></a></span>.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Optimisation de la Performance",
    description:
      "Grâce à la configuration avancée du <b>cache intelligent</b>, à l'activation de <b>Rocket Loader</b> et à l'utilisation d'Argo Smart Routing, nous garantissons une vitesse de chargement optimale et une expérience utilisateur fluide, quel que soit l'endroit où se trouvent vos visiteurs.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Surveillance proactive",
    description:
      "Notre agence surveille en continu le trafic de votre site web et intervient en temps réel dès qu'une menace est détectée. Grâce au mode <b>Under Attack de Cloudflare</b>, nous activons une protection d'urgence qui filtre immédiatement le trafic suspect, bloque les attaques DDoS et maintient l'accès sécurisé pour vos vrais visiteurs.",
    link: "/maintenance-site-web-maroc",
    textButton: "Lire la suite",
  },
];

export default async function CloudflarePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        subtitle="Cloudflare Maroc"
        title="Cloudflare, sécurité et performance"
        text="Hostino, <b>agence partenaire Cloudflare</b> au Maroc pour une présence en ligne sécurisée et efficace."
        emailLabel={{
          textEmail: "Consultation par Email ?",
          color: "text-primary",
        }}
        email="info@hostino.com"
        imageSrc="images/cloudflare-maroc/cloudflare-maroc.png"
        imageAlt="Agence Cloudflare au Maroc"
      />

      {/* Contact Form */}
      <ContactForm
        title={
          <>
            Intégration Cloudflare : un conseiller{" "}
            <span className="border-bottom">vous rappelle !</span>
          </>
        }
      />

      {/* First TextLeftImageRight Section */}
      <TextLeftImageRight
        title="Hostino, agence partenaire de Cloudflare au Maroc"
        paragraphs={[
          "Hostino, agence partenaire intégrateur de Cloudflare au Maroc, accompagne les entreprises dans la mise en place de solutions de sécurité et de performance web issues des <b>dernières innovations technologiques</b>.",
          "En tant que leader mondial, Cloudflare offre une protection DDoS avancée, des solutions <b>Zero Trust</b>, un cache<b> intelligent</b>, Rocket Loader… et bien plus encore pour des sites ultra-rapides et sécurisés.",
          "Ces technologies permettent aux organisations de mieux protéger leurs données, de renforcer leur présence en ligne et d'assurer la sécurité de leurs collaborateurs.",
          "Appelez le +212 663 75 09 08&nbsp;et confiez l'intégration Cloudflare à des experts reconnus dans le domaine de la cybersécurité au Maroc.",
        ]}
        imageSrc="images/cloudflare-maroc/agence-cloudflare-maroc.jpg"
        imageAlt="Agence Cloudflare Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      {/* Services Section */}
      <GmbServices
        data={services}
        title="Découvrez l'ensemble de<br>nos services Cloudflare au Maroc"
      />

      {/* TextLeftImageRight with image on right */}
      <TextLeftImageRight
        title="Pourquoi utiliser Cloudflare dans une stratégie SEO"
        paragraphs={[
          "Dans une stratégie SEO efficace, la vitesse et la disponibilité d'un site web sont essentielles. Notre <span style=\"text-decoration: underline;\"><strong><a href=\"/agence-seo-maroc/\">agence SEO au Maroc</a></strong></span> intègre Cloudflare pour optimiser les temps de chargement grâce à son CDN mondial et offrir une navigation fluide.&nbsp;Un site rapide améliore directement le taux de conversion et le positionnement sur Google, surtout dans un marché compétitif comme le Maroc.",
          "Un site performant doit aussi répondre aux standards de Google PageSpeed Insights, l'outil de référence pour mesurer la qualité technique et la rapidité d'un site web. Grâce à l'intégration de Cloudflare, il est possible d'améliorer <b>significativement les scores PageSpeed</b> en exploitant le cache intelligent, Rocket Loader et l'optimisation avancée des ressources.",
          "Appelez le +212 663 75 09 08 et confiez l'intégration Cloudflare à des experts reconnus au Maroc.",
        ]}
        imageSrc="images/cloudflare-maroc/agence-seo-cloudflare.jpg"
        imageAlt="Agence SEO Cloudflare au Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      {/* TitleParagraphButton Section */}
      <TitleParagraphButton
        title="Pourquoi Cloudflare est indispensable pour toute entreprise au Maroc"
        paragraphs={[
          "Le portail <b>officiel du Maroc, maroc.ma</b>, utilise déjà Cloudflare, preuve de l'importance stratégique de cette technologie pour le pays. Selon <span style=\"text-decoration: underline;\"><a href=\"https://trends.builtwith.com/fr/websitelist/Cloudflare-DNS/Morocco\" rel=\"noopener\"><strong>BuiltWith</strong></a></span>, 9 436 sites marocains reposent sur Cloudflare DNS, ce qui en fait l'un des services les plus adoptés dans le domaine du web au Maroc.",
          "Cloudflare apporte une double valeur : sécurité et performance. Il protège contre les attaques DDoS, intègre un pare-feu applicatif (WAF), sécurise les DNS et optimise la vitesse grâce au cache avancé et au routage intelligent. Concrètement, les sites qui l'utilisent peuvent réduire <b>jusqu'à 50 % leur temps de chargement</b> et économiser jusqu'à <b>70 % de bande passante</b>, ce qui améliore à la fois l'expérience utilisateur et les coûts d'infrastructure.",
          `<img loading="lazy" src="images/cloudflare-maroc/sites-maroc-cloudflare-scaled.jpg" alt="Marketing médical pour médecins au Maroc" width="2560" height="940" />`,
          "De grands acteurs marocains s'appuient déjà sur Cloudflare, notamment <b>Attijariwafa Bank</b>, <b>Sanlam</b>, <b>Marjanmall</b> ou encore la MAP (Maghreb Arabe Presse). Ces entreprises traitent chaque jour des millions de connexions et de données sensibles, et la protection offerte par Cloudflare est devenue essentielle pour garantir la continuité des services et maintenir la confiance numérique.",
          "Dans un marché en pleine digitalisation, Cloudflare n'est plus une option mais <b>une nécessité stratégique</b> pour toute entreprise souhaitant sécuriser sa présence en ligne et renforcer sa compétitivité au Maroc comme à l'international.",
        ]}
        buttonText="Contactez-nous"
        buttonHref="https://www.hostino.ma/contact"
      />

      {/* FAQ Section */}
      <FAQSection faqData={faqData} title="FAQ - Cloudflare Maroc" />

      {/* Star Rating Footer */}
      <StartsRatingYellowFooter totalVotes={22} />
    </main>
  );
}