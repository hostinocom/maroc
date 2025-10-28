import Link from "next/link";
import HeroSection from "../components/commonSections/HeroSection";
import ContactForm from "../components/commonSections/ContactForm";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import FAQSection from "../components/commonSections/FaqSection";
import TitleParagraphButton from "../components/commonSections/TitleParagraphButton";
import StartsRatingYellowFooter from "../components/ui/StartsRatingYellowFooter";
import GmbServices from "../components/commonSections/GmbServices";
import { ClaimReviewJsonLd } from "next-seo";

const title = "Agence RP Maroc | Communication presse, relations publiques"
const description =  "Agence RP Maroc. Actions RP, influence, digitales, brand content et évènementielles. Publication d’articles sur des sites médias ☎️ 0663 75 09 08"
const imageUrl = "https://maroc-1hp.pages.dev/images/agence-rp-maroc/agence-marketing-hotel-maroc.png" 
const canonical_url = "https://www.hostino.ma/agence-rp-maroc"
const og_alt = "Agence RP Maroc"

const faqData = [
  {
    question: "Qu'est-ce qu'une agence de relations presse au Maroc ?",
    answers: [
      "Une agence RP au Maroc est spécialisée dans la gestion de l'image et de la notoriété des entreprises, marques, institutions ou personnalités à travers les médias.",
      "Elle conçoit des stratégies de communication, rédige des contenus percutants et diffuse des messages ciblés dans la presse écrite, en ligne, audiovisuelle et sur les réseaux sociaux afin d'obtenir une visibilité crédible et durable.",
    ],
  },
  {
    question: "Quels types de médias sont ciblés au Maroc ?",
    answers: [
      "Une agence RP travaille avec une large variété de supports : journaux nationaux et régionaux, sites d'actualités en ligne, chaînes TV, radios locales, magazines spécialisés et influenceurs.",
      "Le choix dépend de la stratégie et des objectifs de visibilité (grand public, B2B, niche sectorielle…).",
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
    question:
      "Votre agence RP propose-t-elle un service de netlinking et d'acquisition de backlinks au Maroc ?",
    answers: [
      "Oui, notre agence RP au Maroc propose un service complet de netlinking et d'acquisition de backlinks premium, en complément de nos actions médias classiques. Grâce à notre large réseau de partenaires — médias en ligne, sites d'actualités marocains présents sur Google Actualités, blogs à forte autorité et plateformes spécialisées — nous vous aidons à obtenir des liens \"dofollow\" stratégiques qui renforcent la visibilité et l'autorité de votre site sur Google.",
      "Nous prenons en charge l'ensemble du processus : identification des opportunités les plus pertinentes, rédaction de contenus SEO optimisés, publication sur des supports fiables, et négociation personnalisée selon votre budget et votre secteur d'activité.",
      "Cette approche vous permet d'améliorer significativement votre référencement naturel au Maroc tout en bénéficiant de la crédibilité éditoriale des médias partenaires.",
    ],
  },
  {
    question: "Pourquoi faire appel à une agence RP au Maroc ?",
    answers: [
      "Faire appel à une agence RP permet de bénéficier d'une expertise locale pointue, d'un réseau solide de journalistes et de médias nationaux et régionaux, ainsi que d'une connaissance fine des codes culturels et linguistiques marocains.",
      "Cela garantit une meilleure visibilité dans les bons canaux, au bon moment, avec une crédibilité difficile à obtenir via la publicité classique.",
    ],
  },
  {
    question:
      "Proposez-vous des services de publication sur les grands médias marocains ?",
    answers: [
      "Oui. Nous collaborons avec un large réseau de médias marocains à forte audience et présents sur Google Actualités.",
      "Nous proposons la rédaction et la publication d'articles sponsorisés ou éditoriaux, avec la possibilité d'intégrer des backlinks SEO premium pour renforcer la visibilité digitale de votre marque.",
    ],
  },
  {
    question:
      "Travaillez-vous avec des entreprises étrangères ou internationales ?",
    answers: [
      "Oui. Nous accompagnons aussi bien des marques marocaines que des entreprises étrangères souhaitant pénétrer le marché marocain.",
      "Grâce à notre expertise biculturelle et multilingue (français, arabe, anglais, espagnol), nous adaptons les messages pour assurer une communication efficace auprès du public et des médias locaux.",
    ],
  },
  {
    question: "Quels secteurs d'activité peuvent bénéficier des RP au Maroc ?",
    answers: [
      "Les RP sont utiles dans presque tous les secteurs : tourisme, immobilier, santé, finance, technologie, éducation, culture, sport, institutions publiques ou start-ups.",
      "Chaque secteur a ses médias et influenceurs spécifiques ; une agence RP efficace adapte la stratégie pour atteindre les audiences les plus pertinentes.",
    ],
  },
];

const services = [
  {
    title: "Rédaction & Storytelling",
    description:
      "Notre service Rédaction & Storytelling donne une voix forte et authentique à votre marque. Nous créons des contenus éditoriaux percutants — <b>communiqués de presse</b>, <b>dossiers médias</b>, <b>articles et discours</b> — qui captent l'attention et reflètent fidèlement votre identité.<br/><br/>Chaque mot est choisi avec précision pour transmettre vos messages de manière claire, crédible et engageante.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Diffusion ciblée",
    description:
      "Notre service de diffusion Ciblée dans les médias maximise la portée de vos <b>communiqués</b>, <b>événements</b>, lancements de produits et inaugurations en les relayant aux bons interlocuteurs, au bon moment.<br/><br/>Grâce à notre connaissance approfondie du paysage médiatique marocain et à notre réseau de partenaires fiables, nous assurons une visibilité forte et cohérente sur l'ensemble du territoire.",
    link: "/maintenance-site-web-maroc",
    textButton: "Lire la suite",
  },
  {
    title: "Relations Médias & Influence",
    description:
      "Grâce à notre large <b>réseau de contacts médias</b> locaux et nationaux, couvrant une grande variété de secteurs, ainsi qu'à notre vaste communauté d'influenceurs, nous offrons à nos clients une relation directe et privilégiée avec les médias marocains.<br/><br/>Cette proximité nous permet d'amplifier efficacement vos messages, de faciliter vos prises de parole et d'obtenir des <b>retombées médiatiques</b> de qualité.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Organisation d'événements presse",
    description:
      "Notre agence assure la conception, l'organisation et la coordination intégrale de vos <b>événements presse</b>, avec pour objectif d'offrir une visibilité maximale et une couverture médiatique à forte valeur ajoutée.<br/><br/>Qu'il s'agisse d'un lancement de produit, d'une inauguration, d'une <b><a href='https://fr.wikipedia.org/wiki/Conf%C3%A9rence_de_presse' rel='noopener'><u>conférence de presse</u></a></b> ou d'une rencontre exclusive avec les médias, nous créons des formats sur mesure qui mettent en avant votre image et captent l'attention des journalistes et influenceurs.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Visibilité Google News",
    description:
      "En tant qu'agence de relations presse, nous aidons les marques, les entreprises et les personnalités à renforcer leur présence sur <b>Google News</b>, un levier stratégique pour accroître la portée, la crédibilité et la notoriété de leurs publications.<br/><br/>Grâce à notre expertise en référencement éditorial et à notre maîtrise des exigences de la plateforme, nous maximisons la visibilité de vos contenus dans les résultats d'actualités et les sections \"À la une\".<br/><br/>Nous mettons en œuvre une stratégie sur mesure combinant optimisation technique, structuration éditoriale, respect des standards journalistiques et fréquence de publication adaptée. Cette approche garantit une indexation optimale et un flux régulier de trafic organique de qualité.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Brand content",
    description:
      "La création de contenu est aujourd'hui un levier essentiel pour renforcer l'image de marque et générer de l'engagement. Le brand content consiste à créer des expériences éditoriales uniques qui reflètent l'identité et les valeurs de l'entreprise.<br/><br/>Nous produisons des articles de blog, interviews, études de cas et guides optimisés SEO pour informer, inspirer et positionner la marque comme une référence.<br/><br/>Nous concevons aussi des <b>podcasts de marque</b> et des contenus audio pour créer une relation authentique avec l'audience, ainsi que des vidéos adaptées aux réseaux sociaux, interviews filmées ou reportages pour maximiser l'impact visuel.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
];

export default async function RPAgencyPage() {
  return (
    <main>
      <ClaimReviewJsonLd
        url="https://maroc-1hp.pages.dev/agence-rp-maroc/"
        author={{ name: "Hostino" } as any}
        claimReviewed="Agence RP Maroc - Relations Publiques"
        reviewRating={
          {
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "52",
          } as any
        }
      />
      <HeroSection
        subtitle="Agence RP Maroc"
        title="Agence relations presse & influence"
        text="Notre agence RP Maroc accompagne les <strong>marques</strong>, les <strong>entreprises</strong> et les <strong>personnalités</strong> dans leur visibilité médiatique."
        emailLabel={{
          textEmail: "Consultation par Email ?",
          color: "text-primary",
        }}
        email="info@hostino.com"
        imageSrc="images/agence-rp-maroc/agence-marketing-hotel-maroc.png"
        imageAlt="Agence RP au Maroc"
      />

      <ContactForm
        title={
          <>
            RP Maroc : un conseiller <br className="lg:hidden block " />
            <span className="border-bottom">vous rappelle !</span>
          </>
        }
      />

      <TextLeftImageRight
        title="Affirmez votre présence dans les médias"
        paragraphs={[
          "Hostino est une agence RP innovante basée au Maroc, spécialisée dans la communication stratégique et éditoriale, accompagnant multinationales, marques, entreprises et personnalités pour <b>sécuriser leur visibilité médiatique</b>.",
          "Nous proposons un panel complet de services de relations presse, incluant la <b>rédaction de communiqués</b>, le <b>storytelling</b>, la <b>diffusion dans les grands médias nationaux</b>, la veille médiatique ainsi que la communication de crise.",
          "En s'appuyant sur une connaissance approfondie de la culture locale marocaine, de son paysage médiatique et de ses spécificités <b>culturelles et linguistiques</b>, Hostino conçoit des stratégies de communication authentiques, ancrées dans la réalité du terrain.",
          "Appelez le +212 663 75 09 08 et confiez votre stratégie RP à des experts reconnus au Maroc.",
        ]}
        imageSrc="images/agence-rp-maroc/agence-rp-maroc.jpg"
        imageAlt="Agence de RP au Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <TitleParagraphButton
        subtitle="Agence RP depuis le Maroc"
        title={`Nous aidons les marques à se positionner<br/>sur le marché marocain`}
        paragraphs={[
          "Notre agence RP au Maroc accompagne les marques dans leur ancrage stratégique sur un marché en pleine transformation. Nous aidons nos clients à <b>comprendre les dynamiques locales</b>, à adapter leur discours aux réalités culturelles et à bâtir une présence médiatique crédible et durable.",
          "Grâce à notre expertise, chaque prise de parole devient une <b>opportunité d'influence</b> et de notoriété. Nous concevons des campagnes RP sur mesure, mêlant communication éditoriale, relations médias et actions ciblées auprès des acteurs clés de l'écosystème marocain. Qu'il s'agisse de valoriser une identité de marque, de soutenir une croissance ou d'accompagner une implantation, nous élaborons des stratégies qui génèrent un impact réel sur l'opinion publique.",
        ]}
        buttonText="Contactez-nous"
        buttonHref="https://www.hostino.ma/contact"
      />

      <GmbServices
        data={services}
        title="Nos services relations<br/>presse au Maroc"
      />

      <TextLeftImageRight
        title="Notre agence RP garantit votre visibilité sur Google"
        paragraphs={[
          "Notre agence RP garantit votre visibilité sur Google grâce à une stratégie éditoriale ciblée et une diffusion sur des supports à forte autorité. Nous renforçons votre image et maximisons votre impact en ligne.",
          "Nous collaborons avec un large réseau de médias et de plateformes influentes pour publier des contenus à forte valeur ajoutée, rapidement indexés et bien positionnés sur Google.",
          "Chaque publication est optimisée selon les standards SEO pour assurer une visibilité accrue, une notoriété renforcée et un trafic qualifié vers votre marque.",
          "Appelez le +212 663 75 09 08 et confiez votre stratégie RP à des experts reconnus au Maroc.",
        ]}
        imageSrc="images/agence-rp-maroc/agence-seo-markeing-news.jpg"
        imageAlt="Agence SEO marketing News et médias"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <FAQSection faqData={faqData} title="FAQ - Agence RP Maroc" />
      <StartsRatingYellowFooter totalVotes={49} />
    </main>
  );
}
