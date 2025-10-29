import Link from "next/link";
import HeroSection from "../components/commonSections/HeroSection";
import ContactForm from "../components/commonSections/ContactForm";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";

import NationalCoverage from "../components/commonSections/NationalCoverage";
import FAQSection from "../components/commonSections/FaqSection";
import TextLeftVideoRight from "../components/commonSections/TextLeftVideoRight";
import GmbAdvantages from "../components/commonSections/GmbAdvantage";
import HostingImpactSection from "../components/sectionsGoogleAdsMarocPage/HostingImpactSection";
import SeoServiceCards from "../components/sectionsGoogleAdsMarocPage/SeoServiceCards";
import GmbServices from "../components/commonSections/GmbServices";
import GooglePositioning from "../components/commonSections/GooglePositioning";
import ComparisonTable from "../components/commonSections/ComparisonTable";
import { main_schema } from "../schema";

const title = "Création site web Maroc | Agence web – sites optimisés SEO";
const description =
  "Création site web Maroc, Hostino crée des sites web 100 % optimisés SEO &amp; IA pour booster la visibilité de votre entreprise ☎️ 0663 75 09 08";
const imageUrl =
  "https://maroc-1hp.pages.dev/images/18/creation-site-web-maroc.png";
const canonical_url = "https://www.hostino.ma/creation-site-web-maroc";
const og_alt = "Création site web Maroc";

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
const faqData = [
  {
    question:
      "Les sites créés par votre agence web au Maroc sont-ils évolutifs ?",
    answers: [
      "Oui, nos créations de sites web au Maroc sont évolutives.",
      "Dès la conception, notre agence de création site web au Maroc met en place une architecture moderne et flexible qui permet au site de grandir avec votre entreprise.",
      "Vous pouvez commencer par un simple site vitrine et le faire évoluer vers une boutique en ligne, un espace client ou une plateforme plus complexe, sans avoir à repartir de zéro.",
      "Notre priorité est de vous offrir une solution durable, capable de s'adapter à vos besoins actuels et futurs, tout en garantissant performance et sécurité.",
    ],
  },
  {
    question:
      "Quels avantages offre une agence web basée au Maroc pour les entreprises locales ?",
    answers: [
      "Notre agence web au Maroc offre de véritables avantages pour les entreprises locales. En maîtrisant parfaitement le marché marocain et le référencement local, nous assurons une visibilité accrue et un positionnement rapide sur Google. Cela permet d'attirer un trafic ciblé et qualifié.",
      "Grâce à des stratégies digitales adaptées, notre agence web aide les entreprises à générer des leads et des prospects de qualité, favorisant leur croissance et leur réussite dans un environnement de plus en plus digitalisé.",
    ],
  },
  {
    question:
      "Offrez-vous des outils et un suivi d'analyse avec la création de site web ?",
    answers: [
      "Oui, chaque création de site web Maroc inclut l'intégration d'outils d'analyse comme <a style='text-decoration: underline;' href='https://search.google.com/search-console/about?hl=fr' rel='noopener' target='_blank'>Google Analytics</a>, Google Tag Manager et Google Search Console. Ils permettent de suivre le trafic, le comportement des visiteurs et le positionnement sur Google, afin de mesurer la performance de votre site en temps réel.",
    ],
  },
  {
    question: "Je veux que mon site soit n°1 sur Google, est-ce possible ?",
    answers: [
      "Oui, nous vous accompagnons avec une stratégie SEO complète afin d'atteindre les meilleures positions sur Google.",
      "Chez Hostino, la création de site web constitue une base solide pour un référencement réussi : un code optimisé, une vitesse de chargement conforme aux standards Google, un contenu structuré pour le SEO et une architecture technique pensée pour le long terme.",
      "En combinant ces fondations avec une stratégie SEO avancée (mots-clés, netlinking, suivi des performances), nous maximisons vos chances d'arriver au top des résultats et de générer des leads qualifiés.",
    ],
  },
  {
    question:
      "Votre agence de création de site web est basée où exactement au Maroc ?",
    answers: [
      "Notre agence de création de sites web est installée au Technopark de Tanger, à l'adresse T100, Boulevard Mohamed V, Tanger.",
      "Située à seulement quelques kilomètres de l'Europe, Tanger bénéficie d'une position géographique privilégiée qui fait de notre agence un partenaire idéal pour accompagner aussi bien les entreprises locales que les clients internationaux.",
    ],
  },
  {
    question:
      "Votre agence de création site web au Maroc assure-t-elle la sécurité ?",
    answers: [
      "Chaque site que nous développons est protégé par des solutions avancées : certificats SSL, pare-feu applicatif, détection en temps réel des malwares, protection anti-DDoS et intégration avec des outils tels que <a href='/cloudflare-maroc' style='text-decoration: underline;' rel='noopener' target='_blank'>Cloudflare</a>.",
      "Nous veillons à ce que vos données et celles de vos clients soient sécurisées, tout en respectant les normes légales de protection des données au Maroc (CNDP) et en Europe (RGPD).",
    ],
  },
  {
    question: "Proposez-vous des services de maintenance pour les sites web ?",
    answers: [
      "Oui, nous proposons des services complets de <a style='text-decoration: underline;' href='/maintenance-site-web-maroc' rel='noopener' target='_blank'>maintenance pour les sites</a> web. Notre agence assure la mise à jour régulière de votre site, la correction des éventuelles anomalies, la sauvegarde sécurisée des données ainsi qu'un suivi continu des performances.",
      "Nous veillons aussi à renforcer la sécurité et à intégrer les évolutions nécessaires afin que votre site reste rapide, fiable et conforme aux standards du web.",
    ],
  },
  {
    question:
      "Faites-vous du sponsoring après la création de site web au Maroc ?",
    answers: [
      "Oui, après la création de votre site web au Maroc, nous proposons des campagnes <a style='text-decoration: underline;' href='/google-ads-maroc' rel='noopener' target='_blank'>Google Ads</a> ciblées.",
      "Cela permet de positionner immédiatement votre site en haut des résultats de recherche, d'attirer du trafic qualifié et de générer des prospects, tout en renforçant votre visibilité en complément du SEO.",
    ],
  },
  {
    question:
      "Je suis à l'étranger, puis-je avoir un site conforme aux lois locales ?",
    answers: [
      "Oui, nous créons des sites web conformes aux réglementations locales partout dans le monde.",
      "Que vous soyez en Europe, aux États-Unis, au Canada, dans la région MENA ou ailleurs, nos sites respectent les standards internationaux : RGPD, législation nord-américaine, gestion des cookies, sécurité des données et conformité légale adaptée à chaque pays.",
    ],
  },
  {
    question:
      "J'ai créé un site avec une agence mais il n'est pas visible sur Google, que faire ?",
    answers: [
      "Si votre site n'apparaît pas sur Google, c'est généralement qu'il n'a pas été optimisé pour le référencement (SEO).",
      "Dans ce cas, une refonte complète peut être nécessaire : amélioration du code, restructuration du contenu, optimisation des mots-clés, vitesse de chargement et mise en conformité avec les standards Google.",
      "Chez Hostino, nous proposons la refonte de sites web afin de transformer une simple vitrine en un outil performant, capable de générer du trafic qualifié, des leads et d'obtenir un meilleur positionnement sur Google.",
    ],
  },
];

const prestations = [
  {
    title: "Création site web professionnel - SEO-friendly",
    description:
      "Notre agence de création de sites web est spécialisée dans le développement de sites <b>100 % optimisés pour le SEO</b> et les nouveaux moteurs d’IA.",
    link: "https://www.hostino.ma/contact/",
    textButton: "Contactez-nous",
  },
  {
    title: "Création site web e-commerce - SEO-friendly",
    description: `Notre agence web est spécialisée dans la création de site e<b>-commerce SEO-Friendly</b> avec WordPress et <strong><span style="text-decoration: underline;"><a href="https://woocommerce.com/fr/" rel="noopener">Woocommerce</a></span></strong>.`,
    link: "https://www.hostino.ma/contact/",
    textButton: "Contactez-nous",
  },
  {
    title: "Refonte site web",
    description:
      "L’agence web Hostino offre des services de refonte de design, d’optimisation technique, de création de contenus originaux, d’amélioration de la <strong>rapidité de chargement</strong>, de mise en conformité avec les normes de sécurité et de <strong>validation GDPR</strong>.",
    textButton: "Contactez-nous",
    link: "https://www.hostino.ma/contact/",
  },
  {
    title: "Maintenance site web",
    description:
      "Notre service de maintenance de sites web a pour objectif de corriger les anomalies et dysfonctionnements rencontrés sur votre site, tout en garantissant une <b>sécurité</b> <b>renforcée</b> et un <b>suivi continu</b> de ses performances.",
    textButton: "Lire la suite",
    link: "/maintenance-site-web-maroc",
  },
];

const rankingsData = [
  {
    url: "serrurierpro.ma",
    country: "Maroc",
    keywords: [
      { term: "Serrurier Maroc", position: 1 },
      { term: "Ouverture Coffre-fort rabat", position: 1 },
      { term: "Serrurier Tanger", position: 1 },
      { term: "Serrurier Tétouan", position: 1 },
    ],
  },
  {
    url: "sendatrack.ma",
    country: "Maroc",
    keywords: [
      { term: "GPS Tanger", position: 1 },
      { term: "Société de GPS Tanger", position: 1 },
      { term: "Installation GPS Tanger", position: 1 },
      { term: "Société de Géolocalisation Tanger", position: 1 },
    ],
  },
  {
    url: "medilpodcast.com",
    country: "Maroc",
    keywords: [
      { term: "Podcast", position: 2 },
      { term: "Podcast Maroc", position: 2 },
      { term: "Plateforme Podcast Maroc", position: 1 },
      { term: "بودكاست المغرب", position: 1 },
    ],
  },
];

const advantages = [
  {
    title: "Création site web optimisé pour Google et l'IA",
    description: `
      Chaque création site web est pensée pour obtenir les meilleures 
      <strong>positions sur Google</strong> et s'adapter aux recherches assistées par 
      <strong>l'intelligence artificielle</strong>. Nous mettons en place une structure technique solide 
      et un contenu optimisé afin d'attirer un trafic qualifié et durable.
    `,
  },
  {
    title: "Création site web meilleur que celui de vos concurrents",
    description: `
      Notre mission est de vous aider à <strong>dépasser vos concurrents</strong>. 
      Chaque création site web est réalisée après une analyse comparative, afin de proposer un design plus moderne, 
      une navigation plus fluide et une performance supérieure qui vous donne un avantage stratégique.
    `,
  },
  {
    title: "Création site web qui maximise vos conversions (CTA optimisés)",
    description: `
      Un site doit convaincre et transformer vos visiteurs en clients. 
      Chaque création site web réalisée par Hostino intègre des <strong>Call-To-Action</strong> (CTA) 
      stratégiquement placés et optimisés afin de générer un maximum de conversions : 
      <strong>demande de devis</strong>, <strong>inscription</strong>, achat, contact direct ou 
      <strong>appel téléphonique</strong>.
    `,
  },
  {
    title: "Création site internet rapide et fluide",
    description: `
      La vitesse est un critère essentiel pour Google… mais aussi pour vos utilisateurs. 
      Chez Hostino, chaque création site web repose sur une optimisation avancée de la rapidité de chargement, 
      conforme aux standards de performance définis par <strong>Google PageSpeed Insights</strong> (LCP, FID, CLS).
    `,
  },
  {
    title: "Avoir une site web sites web avec des normes de sécurité élevées",
    description: `
      Chaque création site web Hostino est protégée par des intégrations comme 
      <strong><a href="https://www.cloudflare.com/fr-fr/" style="text-decoration: underline;" rel="noopener" target="_blank">Cloudflare</a></strong>, 
      offrant un pare-feu intelligent, une protection anti-DDoS et un réseau mondial performant.<br/><br/>
      Ajoutez à cela une détection en temps réel des malwares, et votre site reste sécurisé contre toutes les menaces.
    `,
  },
  {
    title: "Création de sites web basés sur les dernières technologies",
    description: `
      Responsive design, compatibilité multi-supports et évolutivité : nos sites reposent sur des technologies modernes, 
      prêtes à accompagner votre croissance et à s'adapter aux innovations futures.
    `,
  },
];

const tableData = [
  {
    criteria: "Objectif principal",
    leadGen: "Attirer des prospects qualifiés et convertir en clients",
    lowCost: "Présence basique sans réelle stratégie",
  },
  {
    criteria: "SEO",
    leadGen: "Optimisation technique et contenu original",
    lowCost: "Peu ou pas optimisé, contenu générique",
  },
  {
    criteria: "Design & UX",
    leadGen: "Expérience fluide, CTA stratégiques",
    lowCost: "Design basique, faible impact",
  },
  {
    criteria: "Vitesse",
    leadGen: "Chargement rapide conforme PageSpeed",
    lowCost: "Lent, pénalisé par Google",
  },
  {
    criteria: "Sécurité",
    leadGen: "SSL, protection avancée, Anti DDOS, Zero Trust",
    lowCost: "Sécurité minimale",
  },
  {
    criteria: "ROI",
    leadGen: "Investissement rentable à long terme",
    lowCost: "Faible retour sur investissement",
  },
];

export default async function HomePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      ...main_schema,
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
              "@id": canonical_url,
              name: og_alt,
            },
          },
        ],
      },
      {
        "@type": "Product",
        name: title,
        url: canonical_url,
        description: description,
        brand: { "@type": "Brand", name: "Hostino" },
        offers: {
          "@type": "AggregateOffer",
          url: canonical_url,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main>
        <HeroSection
          subtitle="Création site web Maroc"
          title="Création site web 100 % optimisé SEO"
          text="Agence de création site web Maroc, optimisés pour le <b>SEO</b> et <b>les moteurs d’IA..</b>"
          emailLabel={{
            textEmail: "CONSULTATION PAR EMAIL ?",
            color: "text-primary",
          }}
          email="info@hostino.com"
          imageSrc="/images/18/creation-site-web-maroc.png"
          imageAlt="Google My Business au Maroc"
        />

        <ContactForm
          title={
            <>
              Création de site web : un conseiller{" "}
              <br className="lg:hidden block " />
              <span className="border-bottom">vous rappelle !</span>
            </>
          }
        />

        <TextLeftImageRight
          title="Agence de création site web Maroc"
          paragraphs={[
            "Hostino® est une agence web spécialisée dans la création de sites web au Maroc. Nous accompagnons tous les professionnels — auto-entrepreneurs, PME/PMI, professions libérales, grandes entreprises, institutions et associations — dans la <b>création ou la refonte</b> de leur site internet.",
            "Notre service va bien au-delà du simple design et des fonctionnalités : chaque site est pensé pour être <b>100 % Google Friendly</b>, garantissant ainsi une indexation rapide et efficace.",
            "Nous accordons une attention particulière à l’optimisation des <b>appels à l’action</b>, au <b>respect des normes de sécurité</b> et à la <b>rapidité</b> de chargement, afin d’offrir à vos visiteurs une expérience fluide, engageante et orientée vers la conversion.",
            "Appelez le +212 663 75 09 08 et confiez la création de votre site web à des experts reconnus dans le domaine du SEO au Maroc.",
          ]}
          imageSrc="/images/18/creation-site-web-maroc.jpg"
          imageAlt="Création de site web au Maroc"
          consultButtonTextExiste={true}
          textButton={"Contactez-nous"}
          href={"https://www.hostino.ma/contact"}
        />

        <TextLeftImageRight
          title={
            <>
              Création de site web :{" "}
              <span style={{ textDecoration: "underline" }}>
                l'erreur à ne pas commettre{" "}
              </span>
              ⚠️
            </>
          }
          paragraphs={[
            "Aujourd’hui, créer un site web est devenu extrêmement simple grâce aux <b>plateformes no code</b>, aux éditeurs drag & drop, aux <b>générateurs de sites IA</b>, mais aussi aux agences web qui proposent des sites low-cost (<strong><span style='color: #ff0000;'>parfois à moins de 999 DH</span></strong>).",
            "Bien que beaucoup de gens l’ignorent au départ, ces sites n’atteindront <b>jamais un bon classement sur Google</b>. Ils ne généreront donc ni trafic, ni prospects, ni visibilité, et ne serviront au mieux que de simple vitrine, <b>à mentionner sur une carte de visite</b> <img width='20px' height='20px' role='img' draggable='false' src='/images/18/1f923.svg' alt='🤣'>.",
            "Contrairement à ces solutions, chaque site que nous développons est conçu dès le départ pour une <b>visibilité maximale</b>. Nous l’optimisons méticuleusement pour le <a href='/agence-seo-maroc/'><span style='text-decoration: underline;'><strong>référencement naturel (SEO)</strong></span></a>, ce qui garantit non seulement un excellent classement sur Google, mais aussi une visibilité accrue sur les <b>nouvelles plateformes d’IA</b>.",
            "Appelez le +212 663 75 09 08 et confiez la création de votre site internet à des experts reconnus dans le domaine.",
          ]}
          imageSrc="/images/18/erreur-creation-site-web-maroc.jpg"
          imageAlt="Pourquoi le site web low-cost est une erreur"
          consultButtonTextExiste={true}
          textButton={"Contactez-nous"}
          href={"https://www.hostino.ma/contact"}
        />

        <GmbServices
          data={prestations}
          title="Découvrez l’ensemble de nos services de création site web Maroc"
        />

        <GooglePositioning
          rankingsData={rankingsData}
          title="Création site web <br/> et positionnement Google"
          subtitle="Hostino™ a aidé de nombreux clients au Maroc et à l’étranger à améliorer leur positionnement Google. <b>Découvrez nos succès</b> et imaginez ce que nous pourrions faire pour votre entreprise."
        />

        <TextLeftImageRight
          title="Sites web conformes CNDP au Maroc et au RGPD en Europe"
          paragraphs={[
            `Notre agence de création de sites web au Maroc s’engage à garantir la conformité de votre site, tant avec le Règlement Général sur la Protection des Données <b>(RGPD) en Europe</b> qu’avec le cadre juridique marocain, sous l’égide de la Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel <b>(<span style="text-decoration: underline;"><a href="https://www.cndp.ma/wp-content/uploads/2023/01/CNDP-guide-conformite-sites-web-fr.pdf" rel="noopener">CNDP</a></span>)</b>.`,
            "Chaque site que nous concevons est pensé et développé pour intégrer les normes les plus strictes de confidentialité et de sécurité, tout en respectant les <b>exigences légales spécifiques à chaque pays.</b>",
            "Ces normes, que la plupart des agences web n'appliquent malheureusement pas, ne sont pas à prendre à la légère. Dans <b>l'Union européenne</b>, le non-respect du RGPD peut entraîner <b>des amendes</b> allant de quelques milliers d'euros à plusieurs dizaines de millions.",
          ]}
          imageSrc="images/18/creation-site-web-gdpr.jpg"
          imageAlt="Création site web GDPR et ANRT au Maroc"
          consultButtonTextExiste={true}
          textButton="Contactez-nous"
          href="https://www.hostino.ma/contact"
        />

        <GmbAdvantages
          advantages={advantages}
          title="Pourquoi choisir Hostino pour la<br/> création site web Maroc ?"
        />

        <TextLeftImageRight
          title="Création de site web orientée génération de leads"
          paragraphs={[
            "Créer un site internet <b>optimisé pour la génération de leads</b>&nbsp;ne se limite pas à des compétences techniques de base. Cela implique une véritable expertise en développement web, une parfaite maîtrise des standards Google et l’accompagnement de chefs de projet ainsi que de professionnels expérimentés.",
            "Que vous souhaitiez mettre en place un site web corporate conçu pour <b>générer des leads qualifiés</b> ou développer une boutique en ligne <b>optimisée pour la conversion</b>, notre agence web Maroc vous accompagne à chaque étape — de la conception à la mise en ligne — afin de garantir un site performant, durable et compétitif.",
            "Appelez le +212 663 75 09 08 et confiez la création de votre site web à une agence LeadGen réputée au Maroc.",
          ]}
          imageSrc="images/18/creation-site-web-lead-generation.jpg"
          imageAlt="creation-site-web-lead-generation.jpg"
          consultButtonTextExiste={false}
          className="lg:mt-[150px] mb-[20px] mt-[80px]"
        />
        <ComparisonTable tableData={tableData} />

        <NationalCoverage
          title="Création site web partout au Maroc"
          topic={"Création site web "}
        />

        <FAQSection faqData={faqData} title="FAQ - Création site web Maroc" />
      </main>
    </>
  );
}
