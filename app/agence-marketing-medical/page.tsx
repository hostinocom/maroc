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
    question: "Je suis médecin, est-ce possible d’être n°1 sur Google ?",
    answers: [
      'Oui, c’est possible, mais cela repose sur une stratégie SEO bien pensée et adaptée à votre <span style="text-decoration: underline"><strong><a href="https://fr.wikipedia.org/wiki/Sp%C3%A9cialit%C3%A9_m%C3%A9dicale" rel="noopener">spécialité médicale</a></strong></span>. Google ne place pas un site en première position par hasard : il analyse la qualité du contenu, la pertinence par rapport aux recherches des patients, la notoriété en ligne, et de nombreux critères techniques.',
      "Notre agence optimise votre site internet afin qu’il réponde parfaitement aux attentes de Google et surtout aux besoins des patients. Cela passe par la création de contenus médicaux de qualité, la mise en avant de vos expertises, ainsi que l’optimisation de la vitesse, du design et de la structure de votre site.",
      "Avec une stratégie bien exécutée, votre cabinet peut se positionner en haut des résultats de recherche, notamment sur des mots-clés liés à votre spécialité et à votre ville.",
    ],
  },
  {
    question:
      "Une clinique propose plusieurs spécialités, est-il possible de référencer le site sur plusieurs mots-clés ?",
    answer: (
      <>
        <p className="paragraph">
          Oui, c’est tout à fait possible. Lorsqu’une clinique propose plusieurs
          spécialités, chaque service peut être optimisé et référencé sur Google
          avec ses propres mots-clés.
        </p>

        <p className="paragraph">
          L’idée est de créer une page dédiée pour chaque spécialité ou service,
          avec un contenu clair, pertinent et adapté aux recherches des
          patients.
        </p>

        <p className="paragraph">
          Par exemple, si votre clinique à Tanger propose plusieurs services,
          vous pouvez viser :
        </p>

        <ul className="flex flex-col gap-[10px] mb-[20px]">
          <li className="flex  gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              Gynécologue Rabat » avec une page dédiée à la gynécologie
              (présentation du médecin, services, consultations, suivi de
              grossesse, etc.).
            </span>
          </li>

          <li className="flex  gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              Pédiatre Rabat » avec une page spécifique aux soins pour enfants.
            </span>
          </li>

          <li className="flex  gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              Urgence médicale Rabat » avec une page expliquant la disponibilité
              24h/24 et la rapidité de prise en charge.
            </span>
          </li>

          <li className="flex  gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              Médecin à domicile Rabat » avec une page détaillant ce service
              particulier, horaires, zones couvertes et numéro d’urgence.
            </span>
          </li>
        </ul>

        <p className="paragraph">
          De cette manière, une même clinique peut apparaître en première page
          sur Google pour plusieurs spécialités à la fois. Cela augmente non
          seulement la visibilité, mais aussi le nombre de patients qui vous
          trouvent directement pour le service dont ils ont besoin.
        </p>
      </>
    ),
  },
  {
    question:
      "Est-ce que vous gérez les pages Google My Business pour les médecins ?",
    answers: [
      'Oui, notre agence SEO médicale peut tout à fait gérer les pages Google My Business (aujourd’hui <strong><span style="text-decoration: underline"><a href="/google-my-business-maroc/">Google Business</a></span></strong> Profile) pour les médecins, cabinets et cliniques.',
    ],
  },
  {
    question:
      "Quels services marketing proposez-vous pour les médecins au Maroc ?",
    answers: [
      "Nous proposons en premier lieu le référencement Google (SEO médical) afin que votre cabinet ou clinique apparaisse parmi les premiers résultats lorsqu’un patient recherche un spécialiste dans sa ville.",
      "Grâce à une stratégie adaptée, vous pouvez être visible sur des mots-clés comme “dentiste Casablanca” ou “pédiatre Rabat”, ce qui attire directement de nouveaux patients. Nous créons également des sites web médicaux modernes et professionnels, conçus pour répondre aux besoins des praticiens.",
      "Votre site devient une véritable vitrine digitale, mettant en avant vos spécialités, vos horaires et vos coordonnées, avec la possibilité d’intégrer la prise de rendez-vous en ligne pour simplifier le parcours patient. La gestion des réseaux sociaux fait aussi partie de nos services.",
      "Nous vous aidons à communiquer efficacement sur Facebook, Instagram ou LinkedIn afin de renforcer votre notoriété, informer vos patients et fidéliser votre communauté, toujours dans le respect de la déontologie médicale.",
      "Enfin, nous optimisons et gérons vos fiches Google My Business, un outil indispensable pour améliorer votre visibilité locale. Grâce à une fiche complète et bien référencée, vos patients peuvent facilement trouver votre adresse, vos horaires, vos avis et prendre contact directement depuis Google.",
    ],
  },
  {
    question:
      "Pourquoi un médecin au Maroc a-t-il besoin du référencement Google SEO ?",
    answers: [
      "Le SEO permet à un médecin d’être visible directement sur Google lorsqu’un patient recherche une spécialité médicale.",
      "Par exemple, au lieu de dépendre uniquement du bouche-à-oreille ou des plateformes de rendez-vous, le référencement naturel place votre nom et votre cabinet au premier plan. C’est une stratégie durable qui génère un flux constant de nouveaux patients.",
    ],
  },
  {
    question:
      "Combien de temps faut-il pour qu’un médecin voie des résultats avec le SEO ?",
    answers: [
      "Le SEO médical est une stratégie progressive. Les premiers résultats peuvent apparaître après 3 à 6 mois, selon la spécialité, la ville et la concurrence locale.",
    ],
  },
];

const prestations = [
  {
    title: "Référencement Google SEO",
    description:
      "Nous optimisons la visibilité de votre cabinet médical ou de votre clinique afin d’assurer un positionnement durable en <b>première page de Google</b> sur des mots-clés stratégiques tels que : “<b>Gynécologue Casablanca</b>”, “<b>Dentiste Rabat</b>” ou “<b>Neurologue Tanger</b>”.<br/>Résultat : un flux constant de demandes de consultation et une augmentation significative des appels téléphoniques.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Fiches d’établissement Google",
    description:
      'Optimisez la visibilité de votre cabinet médical, clinique, parapharmacie, service d’ambulance, laboratoire d’analyses ou centre de radiologie grâce à <a href="/google-my-business-maroc/">une fiche </a><b><a href="/google-my-business-maroc/">d’établissement Google</a> parfaitement</b> optimisée. Elle facilite le partage de l’itinéraire et attire davantage de consultations et de patients.<br/><br/>En 2025, la réputation d’un médecin, d’une clinique, d’un pharmacien ou de tout autre professionnel de santé au Maroc dépend largement du volume et de la qualité des <b>avis clients sur Google</b>.',
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Création de sites web pour médecins et cliniques",
    description:
      "Nous créons des sites web modernes et optimisés pour médecins, cliniques et cabinets, conçus pour inspirer confiance et faciliter la prise de <b>rendez-vous en ligne</b>. Chaque site intègre un système de réservation de consultations, la <b>géolocalisation de votre cabinet</b>, ainsi qu’un appel téléphonique direct depuis le site.&nbsp;<br/><br/>Nous proposons également la <b>connexion à WhatsApp</b> Business pour un contact instantané avec vos patients.",
    link: "https://www.hostino.ma/contact",
    textButton: "Contactez-nous",
  },
  {
    title: "Gestion des réseaux sociaux",
    description:
      "Gestion de vos réseaux sociaux pour valoriser votre cabinet médical : contenus visuels, <b>podcasts</b>, <b>vidéos, Reels</b> et <b>conseils santé</b> adaptés à votre audience.<br/><br/>Notre objectif est de développer votre communauté, valoriser vos services (consultations, spécialités, équipements…), mettre en avant vos expertises, tout en respectant <b>l’éthique et la réglementation médicale</b> en vigueur au Maroc.",
    link: "/maintenance-site-web-maroc",
    textButton: "Lire la suite",
  },
];

export default async function AgenceMarketingMedicalPage() {
  return (
    <main>
      <ClaimReviewJsonLd
        url="https://maroc-1hp.pages.dev/agence-marketing-medical/"
        author={{ name: "Hostino" } as any}
        claimReviewed="Agence Marketing Médical Maroc"
        reviewRating={
          {
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "55",
          } as any
        }
      />

      <HeroSection
        subtitle="Agence Marketing Médical Maroc"
        title="Agence marketing digital santé"
        text="Agence de visibilité Google et de marketing digital pour <b>médecins</b>, <b>cliniques</b>, <b>laboratoires</b> et <b>parapharmacies</b> au Maroc."
        emailLabel={{
          textEmail: "Consultation par Email ?",
          color: "text-primary",
        }}
        email="info@hostino.com"
        imageSrc="images/agence-marketing-medical/agence-marketing-medical-maroc.png"
        imageAlt="Agence Marketing Médical au Maroc"
      />

      <ContactForm
        title={
          <>
            Marketing Médical : un conseiller{" "}
            <br className="lg:hidden block " />
            <span className="border-bottom">vous rappelle !</span>
          </>
        }
      />

      <TextLeftImageRight
        title="Référencement Google pour articles de presse"
        paragraphs={[
          "Le référencement Google pour articles de presse est aujourd’hui indispensable. Il permet aux <b>sites médias</b>, aux <b>chaînes de télévision</b> et aux <b>radios</b>, qu’elles soient <b>publiques ou privées</b>, d’optimiser leur stratégie de génération de trafic afin que leurs dépêches, articles, podcasts et vidéos ressortent davantage sur Google.",
          "L’objectif est clair : <b>générer un trafic organique</b> régulier et renforcer la visibilité de votre site web sur le moteur de recherche.",
          "Avec Hostino, vous bénéficiez d’un <b>suivi complet</b> : optimisation technique (vitesse du site, sécurité, structure) et accompagnement rédactionnel pour écrire selon les critères de Google. Résultat : vos articles gardent leur visibilité plus longtemps et continuent à attirer régulièrement des lecteurs.",
          "Appelez le +212 663 75 09 08 et confiez le marketing digital de votre site média à l’agence SEO n°1 au Maroc.",
        ]}
        imageSrc="images/agence-marketing-news/referencement-seo-articles-google-maroc.jpg"
        imageAlt="Référencement Google pour articles de presse au Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <TitleParagraphButton
        title={`Référencement Google <br/><span style="font-weight: 400">vs</span> plateforme de prise de rendez-vous en ligne`}
        paragraphs={[
          `Lorsqu’un médecin souhaite renforcer sa visibilité, il pense souvent d’abord aux réseaux sociaux ou aux plateformes de prise de rendez-vous en ligne. Ces solutions semblent simples et rapides à mettre en place, mais elles restent limitées : <span><b>tout le monde peut le faire</b></span>, et au final, cela ne permet pas de réellement se différencier.`,
          `En réalité, lorsqu’on parle de plateformes de prise de rendez-vous, elles mettent souvent en avant l’argument selon lequel votre cabinet serait « <span style="font-weight: bold;">référencé sur Google</span> ». Mais en vérité, ce n’est pas le médecin qui est mis en avant, <span style="font-weight: bold;">c’est la plateforme elle-même</span>.`,
          `Votre nom se retrouve alors intégré dans une <span style="font-weight: bold;">longue liste de confrères</span> sur leur site, au lieu de mettre en avant votre cabinet directement et en première ligne sur Google, capable même de <b>dépasser ces plateformes</b>.`,
          `<img loading="lazy" src="images/agence-marketing-medical/marketing-medecin-maroc-google-scaled-e1759336272263.jpg" alt="Marketing médical pour médecins au Maroc" width="2560" height="940" />`,
          `Notre approche est différente : nous <span style="text-decoration: underline;"><strong><a href="/creation-site-web-maroc/">créons pour vous un site</a></strong></span> web Google-friendly, conçu pour être positionné en haut des résultats Google sur des mots-clés très concurrentiels liés à votre spécialité et votre ville.`,
          `Cette stratégie vous permet de générer des consultations directes, de développer la notoriété de votre cabinet et d’installer une image forte et indépendante auprès de vos patients.`,
        ]}
        buttonText="Contactez-nous"
        buttonHref="https://www.hostino.ma/contact"
      />

      <TextLeftImageRight
        title="Référencement Google pour médecins et cliniques"
        paragraphs={[
          "Le <a href='/agence-seo-maroc/' style='text-decoration: underline;' target='_blank'><strong>référencement SEO</strong></a> pour votre cabinet médical ou clinique est un levier incontournable pour attirer plus de patients et développer votre notoriété en ligne.",
          "Grâce à une stratégie SEO adaptée, votre établissement peut apparaître <b>parmi les premiers résultats</b> lorsqu'un patient potentiel recherche un médecin, une spécialité ou une clinique dans votre ville.",
          "Cela passe par l'optimisation technique de votre site, la création de contenus de santé pertinents, et une gestion efficace de votre fiche <a href='/google-my-business-maroc/' style='text-decoration: underline;' target='_blank'><strong>Google Business</strong></a> afin de renforcer votre <b>visibilité locale</b>. Être bien référencé vous permet également d'inspirer confiance et de faciliter la prise de rendez-vous, un atout majeur pour fidéliser vos patients.",
          "Contactez-nous au +212 663 75 09 08 et confiez le référencement SEO de votre cabinet à des experts reconnus en marketing santé au Maroc.",
        ]}
        imageSrc="images/agence-marketing-medical/marketing-google-medecins-maroc.png"
        imageAlt="Marketing Google pour médecins et cliniques au Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <GmbServices
        data={prestations}
        title="Prestations de notre <br/> agence de marketing médical"
      />

      <TitleParagraphButton
        title="Référencement Google<br/>pour médecins au Maroc"
        paragraphs={[
          "Aujourd’hui, la majorité des marocains cherchent un médecin en ligne avant de prendre rendez-vous. Être bien positionné sur Google permet à un <b>cabinet médical</b> ou à une <b>clinique</b> d’apparaître parmi les premiers résultats lorsqu’un patient recherche un médecin dans sa ville ou pour une spécialité précise. Sans visibilité, même un cabinet compétent peut passer inaperçu face à d’autres <b>confrères plus présents sur Google</b>.",
          "Le référencement en ligne ne consiste pas seulement à apparaître en haut des résultats de recherche, mais aussi à offrir une information claire, fiable et accessible aux patients. Pour un médecin, c’est un investissement qui doit toujours respecter <strong><span style='text-decoration: underline;'><a href='https://www.wma.net/wp-content/uploads/2016/11/Ethics_manual_3rd_Nov2015_fr.pdf' rel='noopener'>l’éthique médicale</a></span></strong> : transparence, véracité des informations et mise en avant de la qualité des soins <b>plutôt que de simples arguments commerciaux</b>.",
          "Ainsi, le référencement Google devient un véritable levier au service de la médecine elle-même : il facilite la recherche de spécialités et de services médicaux par les patients, en leur offrant la possibilité de <b>trouver rapidement le médecin</b> ou la clinique qui répond le mieux à leurs besoins de santé.",
        ]}
        buttonText="Contactez-nous"
        buttonHref="https://www.hostino.ma/contact"
      />

      <SeoServiceCards />

      <NationalCoverage
        title="Agence marketing médical, une couverture nationale"
        text="Chez Hostino™, nous accompagnons les cliniques, médecins, centres de santé et professionnels du secteur médical dans la mise en place de stratégies marketing et SEO ciblées."
        topic={"Marketing Médical "}
      />

      <FAQSection
        faqData={faqData}
        title="FAQ - Agence Marketing Médical Maroc"
      />
      <StartsRatingYellowFooter />
    </main>
  );
}
