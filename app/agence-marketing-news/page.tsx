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
import { ClaimReviewJsonLd } from "next-seo";

const faqData = [
  {
    question: "C'est quoi une agence marketing news Maroc ?",
    answers: [
      "Une Agence Marketing News Maroc est une agence spécialisée dans la visibilité en ligne des médias : sites d'actualités, radios, télévisions, magazines et plateformes digitales.",
      "Elle déploie des stratégies combinant SEO, Google Actualités & Discover et diffusion multicanal sur les réseaux sociaux afin d'augmenter le trafic organique, le trafic social, la portée des publications et la notoriété des marques média, aussi bien au Maroc qu'à l'international.",
    ],
  },
  {
    question:
      "Pourquoi externaliser notre stratégie marketing digital à votre agence ?",
    answers: [
      "Externaliser votre stratégie marketing digital vous permet de profiter d'une expertise spécialisée et d'un regard externe capable d'identifier rapidement les leviers de croissance les plus efficaces.",
      'Notre équipe suit en permanence l\'évolution des pratiques numériques et met en place des stratégies adaptées au secteur des médias pour renforcer votre présence en ligne. En collaborant avec <strong>des acteurs majeurs comme <span style="text-decoration: underline"><a href="https://www.medi1tv.com/" rel="noopener">Medi1TV</a></span></strong>, nous avons acquis une expérience concrète avec des équipes internes structurées, en intervenant comme un renfort stratégique et opérationnel.',
      "Cette collaboration nous a permis de coordonner efficacement la partie technique et la diffusion digitale, tout en respectant la ligne éditoriale et les objectifs de la rédaction.",
      "Travailler avec notre agence, c'est bénéficier de méthodes éprouvées, d'outils professionnels et d'une vision globale, tout en gardant une synergie fluide avec vos équipes internes. Nous mettons en place des actions mesurables qui augmentent votre audience, renforcent votre notoriété et assurent une croissance durable de votre média en ligne.",
    ],
  },
  {
    question:
      "Notre site d'actualité n'est pas visible sur Google, que faire ?",
    answers: [
      "Notre agence vous garantit une visibilité optimale sur Google grâce à une stratégie complète alliant audit technique, optimisation SEO et diffusion ciblée. Nous analysons en profondeur votre site pour corriger les problèmes qui bloquent son indexation, nous mettons en place toutes les bonnes pratiques exigées par Google et nous optimisons votre présence pour qu'elle soit durable.",
      "Grâce à notre expertise, votre site média ou TV bénéficie d'une meilleure position dans les résultats de recherche, d'une augmentation progressive du trafic organique, et d'une visibilité renforcée auprès de votre audience cible.",
    ],
  },
  {
    question: "Travaillez-vous uniquement avec des médias marocains ?",
    answers: [
      "Non, notre agence collabore avec des médias au Maroc, en Europe et dans plusieurs pays de la région MENA et d'Afrique. Nous accompagnons aussi bien des rédactions locales que des groupes médiatiques internationaux, en adaptant nos stratégies SEO et marketing digital aux spécificités de chaque marché.",
      "Grâce à cette expérience internationale, nous maîtrisons les différences linguistiques, culturelles et techniques, ce qui nous permet d'optimiser efficacement la visibilité de nos partenaires sur Google, quel que soit leur pays ou leur audience cible.",
    ],
  },
  {
    question:
      "Est-ce que vous proposez des services PR et de publication sur les sites médias marocains (backlinks) ?",
    answers: [
      "Oui ✅. Nous proposons des services de relations presse (PR) et de publication d'articles sponsorisés ou éditoriaux sur une large sélection de sites médias marocains reconnus, couvrant différents secteurs (actualité, économie, lifestyle, tech, régional…).",
      "Ces publications permettent d'obtenir des backlinks (Achat backlinks Maroc) puissants et naturels, de renforcer votre autorité SEO et d'augmenter votre visibilité auprès d'un public ciblé au Maroc.",
    ],
  },
  {
    question:
      "Combien de temps faut-il pour voir des résultats concrets de la stratégie marketing ?",
    answers: [
      "En général, notre stratégie marketing s'inscrit dans une démarche à moyen et long terme.",
      "Les premiers effets peuvent commencer à apparaître dès les premières semaines (notamment sur la notoriété et l'indexation), mais il faut compter en moyenne entre 3 et 4 mois pour constater une augmentation significative du trafic organique et des performances globales.",
    ],
  },
  {
    question:
      "Pourquoi un site de presse au Maroc a-t-il besoin du référencement Google (SEO) ?",
    answers: [
      "Le référencement Google (SEO) est essentiel pour générer un trafic organique régulier et durable.",
      "Contrairement à la publicité payante, le SEO permet à vos articles, vidéos et podcasts d'apparaître naturellement dans les résultats de recherche lorsque les internautes s'informent sur l'actualité.",
      "Cela augmente considérablement le nombre de lecteurs, améliore la performance globale du site et renforce votre indépendance vis-à-vis des canaux payants.",
      "En parallèle, une bonne stratégie SEO renforce la visibilité et la notoriété de votre marque média.",
      "Être bien positionné sur Google crédibilise votre site auprès des <strong>lecteurs et des annonceurs</strong>, vous distingue de la concurrence et vous permet d'occuper une place stratégique dans l'écosystème médiatique marocain.",
      "C'est un levier incontournable pour faire grandir votre audience et votre influence, au niveau national comme international.",
    ],
  },
  {
    question:
      "Est-ce que vous proposez des formations pour les équipes éditoriales ?",
    answers: [
      "Oui. Nous formons vos rédacteurs et journalistes aux bonnes pratiques SEO, à la rédaction Google-friendly et à l'optimisation de la diffusion sur les réseaux sociaux pour renforcer votre visibilité à long terme.",
    ],
  },
  {
    question:
      "Accompagnez-vous les médias dans la monétisation de leur audience ?",
    answers: [
      "Oui, nous accompagnons les médias dans la monétisation efficace de leur audience en mettant en place des stratégies digitales adaptées à leur modèle éditorial. Notre approche combine l'optimisation du trafic organique, la fidélisation des lecteurs et la mise en valeur des espaces publicitaires pour augmenter les revenus.",
      "Nous intervenons également sur des leviers avancés tels que Google Ad Manager, la publicité programmatique, les abonnements payants, le brand content et les partenariats stratégiques. L'objectif est de transformer votre audience en source de revenus durable, tout en renforçant la valeur de votre marque média sur le long terme.",
    ],
  },
  {
    question:
      "Pouvez-vous gérer nos réseaux sociaux en plus du référencement ?",
    answers: [
      "Oui. Nous proposons des plans de diffusion multicanal incluant la gestion stratégique de plateformes comme Facebook, X, LinkedIn et Threads pour augmenter le reach organique et renforcer le trafic en temps réel.",
    ],
  },
];
const prestations = [
  {
    title: "Création de sites web pour presse et médias",
    description:
      "Nous créons des sites de presse et médias modernes, rapides et sécurisés, conformes aux <b>normes techniques de Google</b> et aux bonnes pratiques du web. Ils sont optimisés pour la performance, la sécurité et le référencement afin d'offrir une expérience fluide, même <b>en cas de fort trafic</b>.<br/><br/>Nos solutions intègrent les technologies clés du secteur : flux <b>RSS automatisés</b>, <b>AMP</b> pour un chargement rapide sur mobile et configuration complète de <b>Google Search Console</b> pour une indexation optimale.<br/><br/>Nous proposons aussi l'intégration de flux vidéo et radio en streaming. Tous nos sites sont entièrement responsives et s'adaptent parfaitement aux smartphones et tablettes.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Stratégies de diffusion multicanal",
    description:
      'Nous mettons en place des stratégies de diffusion multicanal combinant <b>SEO</b> et <b>réseaux sociaux</b> pour maximiser la portée de vos contenus médiatiques. Chaque article, vidéo ou podcast est optimisé pour une diffusion efficace sur tous les canaux stratégiques, notamment <b>Google Actualités</b>, <strong><span style="text-decoration: underline;"><a href="https://developers.google.com/search/docs/appearance/google-discover?hl=fr" rel="noopener">Discover</a></span></strong> et <b>Apple News</b>, afin d\'assurer une visibilité maximale et durable.<br/><br/>Nous exploitons pleinement les plateformes sociales comme <b>Facebook</b>, <b>X</b> (Twitter), <b>LinkedIn</b>, <b>Threads</b> et d\'autres pour amplifier vos publications, attirer de nouveaux lecteurs et renforcer le trafic provenant de <b>l\'Organic Search</b> et de <b>l\'Organic Social</b>, tout en augmentant le temps passé par les utilisateurs sur votre site.',
    link: "/maintenance-site-web-maroc",
    textButton: "Lire la suite",
  },
  {
    title: "Validation Google Actualités",
    description:
      "Être présent sur Google Actualités est une opportunité majeure pour les sites <b>médias</b>, <b>les chaînes TV</b>, les radios et les <b>magazines</b> souhaitant accroître rapidement leur visibilité et leur trafic organique. Notre agence SEO News vous accompagne dans la <b>validation de votre site sur Google Actualités</b> en veillant au respect des exigences techniques et éditoriales de Google.<br/><br/>Une fois validé, votre site est considéré comme une <b>source crédible par Google</b>, ce qui renforce considérablement sa notoriété.<br/><br/>Chacun de vos articles bénéficie d'une diffusion instantanée auprès de millions d'utilisateurs et peut apparaître en tête des résultats sur <b>Google News</b>, Discover ou dans l'onglet « Actualités » du moteur de recherche.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Référencement SEO",
    description:
      "Notre service de référencement <strong>SEO pour sites de presse</strong> renforce la visibilité et l'autorité de votre média en ligne grâce à une optimisation complète. Sur le plan technique, nous améliorons les performances de votre site selon les normes <strong>PageSpeed Insights</strong> : vitesse de chargement, structure du code, sécurité HTTPS et optimisation mobile. Nous travaillons également sur l'augmentation de la Domain Authority à travers une stratégie de netlinking ciblée, en obtenant des backlinks de qualité provenant de sites fiables et thématiques.<br/><br/>En parallèle, nous mettons en place une stratégie éditoriale SEO basée sur les <strong>meilleures pratiques</strong> : choix intelligent des mots-clés, titres percutants, structuration claire des articles, liens internes optimisés et fréquence de publication régulière.",
    link: "/maintenance-site-web-maroc",
    textButton: "Lire la suite",
  },
];

export default async function HomePage() {
  return (
    <main>
      <ClaimReviewJsonLd
        url="https://maroc-1hp.pages.dev/agence-marketing-news/"
        author={{ name: "Hostino" } as any}
        claimReviewed="Agence Marketing News - Référencement Presse"
        reviewRating={
          {
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "50",
          } as any
        }
      />
      <HeroSection
        subtitle="Agence Marketing News Maroc"
        title="Agence marketing news & médias"
        text="Agence de <b>visibilité Google</b> & marketing digital pour sites d’actualités, radios et chaînes TV."
        emailLabel={{
          textEmail: "Consultation par Email ?",
          color: "text-primary",
        }}
        email="info@hostino.com"
        imageSrc="images/agence-marketing-news/agence-marketing-news.png"
        imageAlt="Agence Marketing News et SEO"
      />

      <ContactForm
        title={
          <>
            Agence marketing News : un conseiller{" "}
            <br className="lg:hidden block " />
            <span className="border-bottom">vous rappelle !</span>
          </>
        }
      />

      <TextLeftImageRight
        title="Agence SEO & marketing digital pour sites d'actualités"
        paragraphs={[
          "Hostino, agence de marketing digital expérimentée au Maroc, accompagne les <b>sites d'actualités</b>, les <b>radios</b> et les <b>chaînes TV</b> en leur offrant un éventail complet de services destinés à renforcer leur visibilité digitale et à accroître leur audience en ligne.",
          "Nous mettons à votre disposition une équipe d'experts prête à vous guider dans la conception, l'exécution, le suivi et l'optimisation de votre stratégie digitale, afin de générer <b>plus de trafic organique</b> et fidéliser vos lecteurs et auditeurs.",
          "En complément du SEO News, notre agence de marketing média vous accompagne dans la validation et l'optimisation de votre visibilité sur <b>Google Actualités</b> et <b>Discover</b>, tout en renforçant la portée de vos <b>publications sur les réseaux sociaux</b>.",
          "Appelez le +212 663 75 09 08 et confiez votre marketing digital à des experts en médias et consultants au Maroc.",
        ]}
        imageSrc="/wp-content/uploads/2025/10/agence-seo-markeing-news-1024x969.jpg"
        imageAlt="Agence SEO marketing News et médias"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <TitleParagraphButton
        title={`Boostez l'audience de votre site d'actualités grâce à Google et réseaux sociaux`}
        paragraphs={[
          <h3 className="text-title text-[27px] font-[600] mb-[20px] tracking-[-0.8px]">
            Optimisation de la visibilité sur Google
          </h3>,
          `Nous vous aidons à bien classer vos articles, vidéos et podcasts dans les résultats de recherche Google afin de <b>générer un trafic organique constant</b> et qualifié. Grâce à un accompagnement complet, nous mettons en place des stratégies SEO adaptées au secteur média, incluant <b>Google Actualités</b> et Google Discover, pour que vos contenus atteignent un maximum de lecteurs.`,
          <h3 className="text-title text-[27px] font-[600] mb-[20px] tracking-[-0.8px]">
            Amélioration technique de votre site média
          </h3>,
          `La partie technique est essentielle pour répondre aux normes de Google. Nos experts optimisent la rapidité de votre site, renforcent sa sécurité et corrigent les points bloquants pour <b>garantir une indexation optimale</b>. Un site rapide et conforme aux exigences techniques de Google augmente vos chances d'obtenir plus de visibilité et donc plus de trafic.`,
          <h3 className="text-title text-[27px] font-[600] mb-[20px] tracking-[-0.8px]">
            Formation éditoriale de vos rédacteurs
          </h3>,
          `Nos consultants <b>accompagnent vos équipes rédactionnelles</b> pour adopter les meilleures pratiques de rédaction "Google friendly". Nous les formons à écrire des titres accrocheurs, des contenus structurés et optimisés SEO, <b>tout en respectant l'identité éditoriale</b> de votre média. L'objectif est de produire des articles qui plaisent autant aux lecteurs qu'aux algorithmes de Google.`,
          <h3 className="text-title text-[27px] font-[600] mb-[20px] tracking-[-0.8px]">
            Maximisation de la portée sur les réseaux sociaux
          </h3>,
          `Publier ne suffit pas : encore faut-il toucher son audience. Nous vous formons aux techniques de publication sur les réseaux sociaux pour <b>démultiplier le reach de vos posts</b>. Par exemple, certains médias disposent de plus de 2 millions d'abonnés, mais leurs publications ne touchent que 1 à 3 % de cette audience. Nous vous aidons à dépasser cette limite et à maximiser la portée de vos contenus.`,
        ]}
        buttonText="Contactez-nous"
        buttonHref="https://www.hostino.ma/contact"
      />

      <GmbServices
        data={prestations}
        title="Prestations de notre <br />Agence Marketing News Maroc"
      />

      <TitleParagraphButton
        title={`Formation SEO pour<br/>équipes éditoriales et journalistes`}
        paragraphs={[
          `Notre formation SEO est conçue pour aider vos <b>équipes éditoriales et journalistes</b> à maîtriser les <b>bonnes pratiques</b> qui permettent d'améliorer la visibilité de chaque article publié. Nous abordons les fondamentaux du référencement éditorial : structuration du contenu, hiérarchisation des titres, optimisation des balises, fréquence de publication et respect des standards techniques SEO.`,
          `<img loading="lazy" src="https://www.hostino.ma/wp-content/uploads/2025/10/formation-seo-news-maroc.jpg" alt="Formation SEO pour équipes éditoriales et journalistes au Maroc" width="2458" height="809" style="max-width: 100%; height: auto;" />`,
          `L'objectif est de donner à vos équipes les bons réflexes pour que chaque publication contribue efficacement au positionnement global de votre média. Une partie essentielle de la formation est dédiée à l'art du choix des titres. Nous expliquons comment créer des titres percutants, à la fois optimisés pour les moteurs de recherche et attractifs pour les lecteurs. Vos journalistes apprendront à combiner mots-clés stratégiques et clarté rédactionnelle pour maximiser le taux de clic et le référencement naturel.`,
          `Nous formons également vos équipes sur <b>l'optimisation des images</b> : choix des formats, poids adaptés pour améliorer la vitesse de chargement, balises ALT descriptives pour le SEO, et bonnes pratiques de placement dans les articles. Une gestion efficace des visuels contribue non seulement au référencement, mais aussi à une meilleure expérience utilisateur. Enfin, nous abordons la définition et le respect de la <b>ligne éditoriale</b>, un élément clé pour garantir la cohérence et la crédibilité de votre média.`,
          `Vos équipes apprendront à aligner chaque contenu avec votre identité éditoriale, à définir les thématiques prioritaires, le ton rédactionnel et la structure globale des publications. Nous traitons aussi l'intégration des liens internes (tags) et externes, deux leviers majeurs du référencement : création d'une architecture cohérente, valorisation du contenu existant et sélection de sources externes fiables.`,
          `La formation est proposée en <b>présentiel ou à distance</b>, selon les besoins et la disponibilité de vos équipes.`,
        ]}
        buttonText="Contactez-nous"
        buttonHref="https://www.hostino.ma/contact"
      />

      <SeoServiceCards />

      <FAQSection faqData={faqData} title="FAQ - Agence Marketing News Maroc" />
      <StartsRatingYellowFooter />
    </main>
  );
}
