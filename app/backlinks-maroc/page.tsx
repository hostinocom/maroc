import HeroSection from "../components/commonSections/HeroSection";
import ContactForm from "../components/commonSections/ContactForm";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import FAQSection from "../components/commonSections/FaqSection";
import TitleParagraphButton from "../components/commonSections/TitleParagraphButton";
import StartsRatingYellowFooter from "../components/ui/StartsRatingYellowFooter";
import GmbServices from "../components/commonSections/GmbServices";
import { ClaimReviewJsonLd } from "next-seo";

const faqData = [
  {
    question: "C'est quoi un backlink Maroc ?",
    answers: [
      "Un backlink est un lien hypertexte placé sur un autre site web qui pointe vers le vôtre. Au Maroc, les backlinks sont souvent placés sur des sites médias locaux, des blogs spécialisés ou des annuaires professionnels, afin d'améliorer la visibilité de votre site dans les moteurs de recherche.",
      "Un bon backlink marocain renforce votre autorité locale sur Google et améliore votre positionnement sur des requêtes ciblées au niveau national ou régional.",
    ],
  },
  {
    question: "Pourquoi faut-il éviter les backlinks low cost et toxiques ?",
    answers: [
      "Les backlinks à bas prix ou provenant de réseaux douteux peuvent faire plus de mal que de bien. Google détecte facilement les liens de mauvaise qualité (sites spammés, fermes de liens, contenus dupliqués…) et peut pénaliser votre site.",
      "Ces liens « toxiques » peuvent entraîner une baisse de classement, voire une désindexation partielle. Il est donc essentiel de privilégier des backlinks de qualité, placés sur des sites fiables, pertinents et bien référencés au Maroc.",
    ],
  },
  {
    question:
      "Pouvez-vous publier des articles sur de grands sites médias au Maroc ?",
    answers: [
      "Oui ✅. Grâce à notre réseau exclusif de partenaires médias marocains, nous pouvons publier des articles avec des liens « dofollow » sur des grands sites à forte autorité.",
      "Cela inclut des portails d'actualités nationaux, des magazines en ligne, ainsi que des plateformes sectorielles bien établies.",
      "Ces publications renforcent votre notoriété de marque tout en envoyant un signal SEO puissant à Google.",
    ],
  },
  {
    question: "Est-ce que vous rédigez les articles SEO pour les backlinks ?",
    answers: [
      "Oui. Notre équipe prend en charge la rédaction d'articles SEO optimisés, adaptés à votre activité et aux critères éditoriaux des plateformes partenaires.",
      "Chaque contenu est rédigé avec soin : titres optimisés, mots-clés ciblés, structure claire, ton naturel et storytelling pour maximiser l'impact sur le référencement et l'engagement des lecteurs.",
    ],
  },
  {
    question: "Quel est le prix d'un backlink Maroc ?",
    answers: [
      "Le prix d'un backlink au Maroc dépend de plusieurs facteurs : l'autorité du site (DA/DR), le type de média (local ou national), le nombre de liens insérés dans l'article, la durée de publication et la présence du média sur Google Actualités.",
      "En général, les tarifs varient entre 2000 MAD et 9 000 MAD par lien pour les blogs et sites spécialisés, et peuvent dépasser 20 000 MAD pour les grands médias nationaux.",
      "Chaque campagne est personnalisée selon votre budget et vos objectifs SEO.",
    ],
  },
  {
    question:
      "Gérez-vous des campagnes PR de publication sur les sites médias marocains ?",
    answers: [
      "Oui, nous prenons entièrement en charge la gestion de campagnes PR de publication sur les sites médias marocains.",
      "Cela comprend la rédaction ou l'adaptation de vos articles pour les rendre à la fois éditorialement pertinents et optimisés pour le référencement, la sélection stratégique des médias les plus adaptés à votre secteur, ainsi que la négociation et la publication effective sur des portails d'actualités nationaux, des magazines en ligne ou des plateformes sectorielles reconnues.",
      "Nous veillons à ce que chaque publication inclue des backlinks positionnés de manière naturelle, afin de renforcer votre crédibilité et votre visibilité SEO.",
    ],
  },
  {
    question: "Négociez-vous avec les médias pour obtenir des backlinks ?",
    answers: [
      "Oui, nous négocions directement avec les médias marocains pour vous obtenir des backlinks de qualité, publiés dans des contextes éditoriaux pertinents.",
      "Grâce à nos relations établies avec de grands portails d'actualités, des magazines en ligne et des plateformes spécialisées, nous pouvons négocier les meilleures conditions pour la publication de vos articles.",
    ],
  },
  {
    question:
      "Les backlinks marocains sont-ils utiles pour une entreprise étrangère qui cible le marché local ?",
    answers: [
      "Oui ✅. Même si votre entreprise est basée à l'étranger, les backlinks marocains jouent un rôle clé pour améliorer votre visibilité locale auprès des internautes marocains.",
      "En obtenant des liens depuis des sites marocains à forte autorité (médias, blogs locaux, annuaires professionnels…), vous envoyez à Google un signal clair sur votre pertinence géographique.",
      "Cela vous aide à mieux vous positionner dans les résultats de recherche marocains et à toucher une audience locale ciblée, que vous soyez dans le tourisme, le e-commerce, la restauration ou tout autre secteur.",
    ],
  },
];

const services = [
  {
    title: "Analyse de votre site web",
    description:
      "Notre agence de netlinking commence par une analyse approfondie de votre situation : <b>cœur de métier, objectifs</b>, spécificités de votre activité et budget alloué à la campagne.<br/><br/>Que vous ayez déjà une stratégie de netlinking définie ou non, nous évaluons votre site en détail afin d'identifier les meilleures opportunités de liens entrants.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Recherche de backlinks",
    description:
      "Une fois la stratégie de backlinking validée et selon le budget alloué, nous <b>cherchons</b> et <b>négocions</b> pour vous les meilleurs spots possibles afin d'obtenir des liens de haute qualité.<br/><br/>Grâce à notre réseau de <b>partenaires média</b>, de blogs et de sites clients en échange stratégique, nous sélectionnons des backlinks à forte autorité, parfaitement alignés avec vos objectifs SEO.",
    link: "/maintenance-site-web-maroc",
    textButton: "Lire la suite",
  },
  {
    title: "Suivi et optimisations",
    description:
      "À l'aide de divers <b>outils SEO</b> (Semrush, <strong><span style=\"text-decoration: underline;\"><a href=\"https://moz.com/\" rel=\"noopener\">Moz</a></span></strong>, Ahrefs…), nous vérifions l'impact de la stratégie sur votre référencement ainsi que sur les caractéristiques techniques de votre site. Cela nous permet <b>d'évaluer précisément</b> l'efficacité de votre stratégie de netlinking. Les points forts sont mis en avant et les axes d'amélioration sont clairement identifiés afin d'optimiser au mieux vos performances SEO.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
];

export default async function BacklinksPage() {
  return (
    <main>
      <ClaimReviewJsonLd
        url="https://maroc-1hp.pages.dev/backlinks-maroc/"
        author={{ name: "Hostino" } as any}
        claimReviewed="Backlinks Maroc - Service de Création de Liens"
        reviewRating={
          {
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "48",
          } as any
        }
      />
      <HeroSection
        subtitle="Agence de Backlinks Maroc"
        title="Agence de backlinks au Maroc"
        text="Agence Netlinking offre un service premium <b>d'acquisition de backlinks</b> pour optimiser votre SEO au Maroc."
        emailLabel={{
          textEmail: "Consultation par Email ?",
          color: "text-primary",
        }}
        email="info@hostino.com"
        imageSrc="images/backlinks-maroc/backlinks-maroc.png"
        imageAlt="Backlinks Maroc"
      />

      <ContactForm
        title={
          <>
            Backlinks Maroc : un conseiller <br className="lg:hidden block " />
            <span className="border-bottom">vous rappelle !</span>
          </>
        }
      />

      <TextLeftImageRight
        title="Agence d'acquisition de backlinks au Maroc"
        paragraphs={[
          "Notre agence accompagne les marques et les entreprises dans l'acquisition de backlinks locaux au Maroc.",
          'Nous disposons d\'un <b>réseau stratégique de plus de 200 sites web</b> à forte autorité (DA) répartis dans différents secteurs d\'activité. Grâce à ces partenariats solides, nous vous aidons à renforcer votre visibilité sur Google et à améliorer durablement votre positionnement <strong><span style="text-decoration: underline;"><a href="/backlinks-maroc/">SEO</a></span></strong>.',
          "En plus de la mise à disposition de backlinks de qualité, nous proposons un service complet <b>d'acquisition et de négociation</b> personnalisée. Nous identifions les opportunités les plus pertinentes en fonction de votre secteur d'activité, de vos objectifs stratégiques et de votre budget.",
          "Appelez le +212 663 75 09 08 et confiez l'acquisition de backlinks à une agence SEO experte au Maroc.",
        ]}
        imageSrc="images/backlinks-maroc/backlinks-maroc.jpg"
        imageAlt="Agence Backlinks Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <TitleParagraphButton
        title={`Netlinking et rédaction<br/>de contenu au Maroc`}
        paragraphs={[
          `Le netlinking est aujourd'hui l'un des leviers les plus puissants du référencement naturel au Maroc pour toute <b>marque, entreprise</b> ou institution. Il repose sur l'acquisition de liens entrants de qualité, provenant de sites fiables, bien positionnés et pertinents dans votre domaine. Ces backlinks renforcent <b>l'autorité et la crédibilité de votre site</b> aux yeux de Google et des moteurs de recherche IA, ce qui se traduit par une meilleure visibilité, un positionnement durable et une augmentation significative du trafic organique.`,
          `Dans le contexte marocain, le netlinking repose à la fois sur des partenariats avec des <b>sites médias locaux</b> à forte audience et sur des publications ciblées sur des blogs bien référencés. Cette approche locale permet de maximiser la pertinence des liens obtenus et d'ancrer votre visibilité dans l'écosystème numérique marocain.`,
          `En parallèle, la rédaction de contenu joue un rôle clé dans toute stratégie de netlinking. Notre agence prend en charge la rédaction d'articles et de contenus optimisés pour votre marque ou votre entreprise, en <span style="font-weight: bold;"><b>combinant SEO et storytelling</b></span> pour captiver votre audience. Nous rédigeons des textes structurés, pertinents et engageants, qui racontent une véritable histoire autour de votre activité, de vos valeurs et de votre expertise. Cette approche permet non seulement d'améliorer votre visibilité sur Google, mais aussi de créer un lien émotionnel fort avec vos lecteurs, <span style="font-weight: bold;"><b>renforçant ainsi la crédibilité et l'impact de chaque backlink obtenu</b></span>.`,
        ]}
        buttonText="Contactez-nous"
        buttonHref="https://www.hostino.ma/contact"
      />

      <TextLeftImageRight
        title="Achat backlinks Maroc"
        paragraphs={[
          "Chez Hostino, nous vous proposons une <b>sélection exclusive</b> de backlinks stratégiques, conçus pour propulser le site web de votre marque ou de votre entreprise vers les premières positions des moteurs de recherche.",
          'Imaginez un article publié sur Maroc24.com ou un autre grand média local, mettant en avant votre société tout en intégrant un backlink "<span style="text-decoration: underline;"><strong><a href="https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=fr" rel="noopener">dofollow</a></strong></span>" vers votre site. Cette action renforce considérablement votre autorité en ligne, améliore votre référencement naturel et vous permet de <b>dépasser efficacement vos concurrents</b>.',
          "Boostez vos positions sur Google et atteignez de nouveaux sommets grâce à nos solutions de <b>backlinking de qualité supérieure</b>, proposées à des prix très compétitifs.",
        ]}
        imageSrc="images/backlinks-maroc/achat-backlinks-maroc.jpg"
        imageAlt="Achat backlinks au Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <GmbServices
        data={services}
        title="Notre service<br />de netlinking au Maroc"
      />

      <FAQSection faqData={faqData} title="FAQ - Backlinks Maroc" />
      <StartsRatingYellowFooter totalVotes={49} />
    </main>
  );
}
