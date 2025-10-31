import HeroSection from "../components/commonSections/HeroSection";
import ContactForm from "../components/commonSections/ContactForm";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import NationalCoverage from "../components/commonSections/NationalCoverage";
import FAQSection from "../components/commonSections/FaqSection";
import GmbServices from "../components/commonSections/GmbServices";
import TextLeftVideoRight from "../components/commonSections/TextLeftVideoRight";
import GmbAdvantages from "../components/commonSections/GmbAdvantage";
import StarRating from "../components/ui/StartRatingFooter";
import { main_schema } from "../schema";

const title = "Agence Google My Business Tanger | Référencement Maps"
const description =  "Google My Business Tanger, Création et gestion des fiches Google Business (GMB) pour entreprises et marques à Tanger ☎️ 0663 75 09 08"
const imageUrl = "https://maroc-1hp.pages.dev/images/agence-my-business-Tange/google-my-business-maroc.png" 
const canonical_url = "https://www.hostino.ma/google-my-business-maroc"
const og_alt = "Agence Google My Business Maroc"

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
      "Je veux créer une fiche Google My Business pour mon entreprise, comment faire ?",
    answers: [
      "Créer une fiche Google My Business nécessite de respecter les règles et conditions imposées par Google. Vous devez fournir des informations précises : nom de l'entreprise, adresse, numéro de téléphone, catégorie d'activité, site web, ainsi que des photos de qualité. Ensuite, Google demande une validation, généralement par courrier (code PIN envoyé à votre adresse) ou parfois par téléphone ou email.",
      "Notre agence vous accompagne dans chaque étape : nous préparons correctement vos informations, choisissons les catégories les plus pertinentes et gérons la procédure de validation afin d'assurer que votre fiche soit approuvée rapidement et correctement.",
    ],
  },
  {
    question:
      "J'ai essayé de créer une fiche mais elle a été suspendue, que faire ?",
    answers: [
      'Une suspension intervient souvent quand Google détecte une incohérence (adresse incomplète, faux numéro, catégorie incorrecte) ou un non-respect de ses <a style={{ textDecoration: "underline" }} href="https://support.google.com/business/answer/7667250?hl=fr" target="_blank">politiques</a>.',
      "Cela peut aussi arriver si l'entreprise est jugée « service-area business » (se déplaçant chez les clients) sans adresse physique valide.",
      "Dans ce cas, il est essentiel d'analyser la raison précise de la suspension. Notre agence prend en charge le diagnostic et les démarches de réactivation.",
      "Nous fournissons les justificatifs nécessaires (factures, registre de commerce, preuves d'adresse) et argumentons auprès de Google pour débloquer votre fiche. Sans expertise, une suspension peut durer des mois, alors qu'avec un accompagnement professionnel, le délai de rétablissement est considérablement réduit.",
    ],
  },
  {
    question:
      "Combien de temps faut-il pour créer une fiche Google My Business à Tanger ?",
    answers: [
      "En général, la création d'une fiche Google My Business prend seulement quelques minutes, mais c'est l'étape de validation qui demande le plus de temps.",
      "à Tanger, la vérification par courrier peut durer 2 à 3 semaines, parfois plus selon la localisation. En revanche, certaines méthodes comme la validation par téléphone ou par vidéo permettent d'accélérer le processus et d'obtenir une validation en seulement 1 à 5 jours.",
      "Avec notre agence, nous préparons minutieusement votre demande dès le départ afin d'éviter les rejets et les suspensions. Cela réduit considérablement les délais et maximise vos chances d'une validation rapide.",
      "La durée finale dépend donc principalement de la conformité des informations fournies et du type de validation que Google propose pour votre entreprise.",
    ],
  },
  {
    question:
      "Je veux faire du sponsoring de ma fiche Google My Business, comment ça marche ?",
    answers: [
      'Le sponsoring d\'une fiche Google My Business se fait via <a style={{ textDecoration: "underline !important" }} href="/google-ads-maroc" target="_blank">Google Ads</a>. Concrètement, cela permet de mettre en avant votre fiche directement dans les résultats de recherche et sur Google Maps, devant celles de vos concurrents.',
      'Ainsi, lorsque des clients recherchent vos services ou vos produits, votre fiche apparaît en première position avec un label "sponsorisé".',
      "Notre agence gère pour vous la mise en place des campagnes Google Ads liées à votre fiche GMB : choix des bons mots-clés, ciblage géographique (par ville ou quartier), paramétrage du budget et suivi des performances.",
      "L'avantage est que vous pouvez capter immédiatement des appels, des demandes d'itinéraires et des visites sur votre site web.",
      "En optimisant simultanément votre fiche et vos campagnes, nous créons une véritable synergie : votre présence organique est renforcée, et le sponsoring vous permet d'accélérer la visibilité afin de générer rapidement plus de clients.",
    ],
  },
  {
    question: "Je veux dépasser un concurrent, vous pouvez m'aider ?",
    answers: [
      "Absolument ! Nos experts en Google My Business et en SEO local analysent d'abord la stratégie de vos concurrents : choix des catégories, nombre et qualité des avis, optimisation des photos, mots-clés utilisés sur leur site, etc.",
      "Ensuite, nous mettons en place un plan d'action sur mesure pour améliorer votre visibilité : optimisation complète de votre fiche, génération, contenu régulier et référencement naturel de votre fiche.",
      "Cependant, il est important de comprendre que ce n'est pas une solution miracle en quelques jours.",
      "Dépasser vos concurrents demande parfois un suivi régulier sur plusieurs mois, le temps que Google prenne en compte les optimisations et que votre présence gagne en crédibilité. Avec un accompagnement continu, vous pouvez non seulement atteindre vos concurrents mais aussi les dépasser durablement.",
    ],
  },
  {
    question:
      "Ma fiche Google My Business est déjà créée mais je n'ai pas accès, comment la récupérer ?",
    answers: [
      "Il arrive souvent qu'une fiche Google My Business soit déjà créée par un ancien employé, un prestataire, ou automatiquement par Google grâce aux informations trouvées en ligne.",
      'Dans ce cas, vous pouvez demander le transfert de propriété. La démarche consiste à cliquer sur "Revendiquer cette fiche" directement depuis Google Maps ou Google Search. Google vous proposera de demander l\'accès au propriétaire actuel.',
      "Celui-ci dispose alors de 3 à 7 jours pour répondre. Si vous n'obtenez pas de réponse, vous pouvez suivre les étapes indiquées par Google (preuve d'adresse, factures, documents légaux) afin de récupérer la propriété de votre fiche.",
      "Notre agence peut vous accompagner dans cette procédure : nous préparons les justificatifs nécessaires et faisons le suivi auprès de Google afin que vous récupériez rapidement la gestion complète de votre fiche.",
    ],
  },
  {
    question: "Faites-vous du sponsoring pour ma fiche Google My Business ?",
    answer: (
      <p>
        Oui, absolument. Nous aidons les entreprises locales à promouvoir leur
        fiche{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="/google-my-business-maroc/"
          target="_blank"
        >
          <b>Google My Business</b>
        </a>{" "}
        via des campagnes sponsorisées. Cela permet à votre établissement
        d'apparaître tout en haut des résultats Google Maps, avec plus de
        visibilité que vos concurrents directs. Lorsqu'un utilisateur tape
        "restaurant italien Rabat", votre fiche peut être mise en avant,
        accompagnée d'appels à l'action comme "Appeler" ou "Itinéraire". En
        complément, nous optimisons aussi votre fiche : ajout de photos
        attractives, gestion des avis clients, mise à jour régulière des
        horaires et des services. Ce travail combiné (optimisation + sponsoring)
        améliore considérablement votre crédibilité et attire davantage de
        clients potentiels directement dans votre restaurant.
      </p>
    ),
  },
  {
    question:
      "Pouvez-vous gérer plusieurs fiches Google My Business à la fois ?",
    answers: [
      "Oui, notre agence peut gérer plusieurs fiches Google My Business en même temps, qu'il s'agisse d'entreprises multi-sites (plusieurs agences, boutiques, showrooms, restaurants, etc.) ou de réseaux de franchises. La gestion centralisée permet d'assurer la cohérence des informations (nom, adresse, téléphone, horaires, catégories), mais aussi de publier du contenu et de répondre aux avis clients de manière homogène sur l'ensemble de vos fiches.",
      "Chaque localisation est travaillée individuellement (photos, horaires, avis clients) mais reste reliée à votre marque principale pour renforcer votre crédibilité. Grâce à notre accompagnement, vos points de vente ou agences apparaissent correctement dans chaque ville ciblée, avec des informations fiables et optimisées.",
    ],
  },
];

const gmbServicesData = [
  {
    title: "Création fiches Google My Business",
    description:
      "Service de création de fiches d'établissement sur Google : nous vous accompagnons dans tout le processus de <strong>validation de votre établissement</strong>.",
    link: "https://www.hostino.ma/contact/",
  },
  {
    title: "Gestion fiches Google My Business",
    description:
      "Gestion des fiches Google My Business : mise à jour et optimisation des informations, publication régulière de contenus, suivi et <strong>réponse aux avis clients</strong>.",
    link: "https://www.hostino.ma/contact/",
  },
  {
    title: "Positionnement des fiches Google My Business",
    description:
      "Notre agence améliore votre classement local sur Google en veillant à la cohérence de vos informations (NAP : Nom, Adresse, Téléphone), en choisissant des catégories précises, en ajoutant des photos de qualité et en développant des <strong>citations locales</strong>.",
    link: "https://www.hostino.ma/contact/",
  },
  {
    title: "Récupération des fiches suspendues",
    description: `Confronté à une <a style={{ textDecoration: 'underline' }} href='https://support.google.com/business/answer/13597551?hl=fr'><strong>suspension de votre fiche Google My Business</strong></a>? Nous vous accompagnons à chaque étape : nos spécialistes identifient la cause du problème et mettent en œuvre les actions nécessaires pour rétablir votre fiche dans les meilleurs délais.`,
    link: "https://www.hostino.ma/contact/",
  },
];

const gmbAdvantagesData = [
  {
    title: "Facilité d'envoyer des itinéraires aux clients",
    description:
      "Grâce à l'intégration directe avec Google Maps, vos clients peuvent obtenir en un clic l'<strong>itinéraire exact</strong> pour se rendre dans vos locaux, ce qui simplifie considérablement leur déplacement.",
  },
  {
    title: "Appel téléphonique direct à vos services",
    description:
      "La fiche affiche votre <strong>numéro de téléphone</strong> avec une fonction Click-to-Call, permettant aux clients de vous joindre immédiatement sans avoir besoin de chercher ailleurs.",
  },
  {
    title: "Génération de visites sur votre site web",
    description:
      "En incluant un lien vers votre site, vous augmentez le trafic qualifié et captez des prospects intéressés par vos services ou produits.",
  },
  {
    title: "Notoriété et présence de la marque",
    description:
      "Être visible sur Google Search et Google Maps améliore votre image professionnelle, renforce la confiance et augmente la reconnaissance de votre marque auprès du public marocain.",
  },
];

export default async function GoogleMyBusniessPage() {
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
                name: "Hostino - Noms de domaine et hébergement web à Tanger",
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
        subtitle="Google My Business Tanger"
        title="Agence Google My Business Tanger"
        text="Création, <b>référencement et sponsoring </b> des fiches Google My Business Tanger."
        emailLabel={{
          textEmail: "CONSULTATION PAR EMAIL ?",
          color: "text-primary",
        }}
        email="info@hostino.com"
        imageSrc="/images/agence-my-business-maroc/google-my-business-maroc.png"
        imageAlt="Google My Business à Tanger"
      />

      <ContactForm
        title={
          <>
            VCréation de site web : un conseiller{" "}
            <br className="lg:hidden block " />
            <span className="border-bottom">vous rappelle !</span>
          </>
        }
      />

      <TextLeftImageRight
        title="Agence Google My Business à Tanger"
        paragraphs={[
          "Hostino est une agence spécialisée dans Google My Business à Tanger. Nous accompagnons les entreprises, qu’elles soient implantées à Tanger ou à l’étranger, à renforcer leur <b>présence locale</b> sur <b>Google et Google Maps</b>, ainsi que sur les services de localisation proposés par d’autres plateformes comme Instagram, Snapchat et <b>Waze</b>.",
          "Que ce soit pour la création de fiches de localisation destinées à des <b>hôtels</b>, boutiques, magasins, showrooms, bureaux, <b>restaurants</b>, <b>médecins</b>, avocats, écoles ou <b>institutions</b>, ou encore pour la gestion de fiches multi-sites dans plusieurs villes, Hostino prend en charge l’ensemble du processus de A à Z.",
          "Appelez-nous dès maintenant au +212 663 75 09 08 et confiez la gestion de votre fiche Google My Business à des experts certifiés Google.",
        ]}
        imageSrc="images/04/google-my-business-maroc.jpg"
        imageAlt="C'est quoi une agence Google My Business Maroc ?"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <GmbServices
        data={gmbServicesData}
        title="Les prestations de notre agence <br/> Google My Business"
      />

      <section className="lg:mt-[150px] mt-[80px]">
        <div className="container">
          <h2 className="title-section mb-[20px]">
            Validation de fiches <br />
            Google My Business
          </h2>

          <p className="paragraph">
            Créer une fiche Google My Business à Tanger peut sembler simple,
            mais en réalité, si vous n’avez pas l’expérience nécessaire ou si
            vous ne maîtrisez pas les conditions et les{" "}
            <b>normes imposées par Google</b>, la validation devient souvent
            compliquée.
          </p>

          <p className="paragraph">
            Beaucoup d’entreprises se retrouvent avec une{" "}
            <b>fiche refusée ou suspendue</b> à cause d’adresses imprécises, de
            catégories mal choisies ou d’informations non conformes. Sans une
            bonne compréhension des règles, votre fiche risque de ne jamais
            apparaître correctement dans Google Search et Google Maps, ce qui
            limite fortement votre visibilité locale.
          </p>
        </div>
      </section>

      <TextLeftVideoRight
        paragraphs={[
          "C’est pour éviter ces obstacles que notre agence spécialisée en Google My Business vous accompagne de A à Z. Nous gérons pour vous la création, <b>la validation</b> et l’optimisation de vos fiches afin de garantir leur <b>conformité avec les standards de Google</b>.&nbsp;",
          "Grâce à notre expertise, nous assurons que votre établissement soit <b>bien positionné</b>, gagne en crédibilité grâce aux avis clients, et attire de nouveaux prospects. Avec Hostino, votre fiche est non seulement validée, mais aussi optimisée pour offrir un maximum de résultats à votre entreprise.",
          "Appelez-nous dès maintenant au +212 663 75 09 08 et confiez la gestion de votre fiche Google My Business à des experts certifiés Google.",
        ]}
        videoUrl="https://www.youtube.com/embed/MfPuOG0LVuI"
        className="mt-[10px] lg:mb-[150px] mb-[80px]"
      />

      <TextLeftImageRight
        title="Avis cinq étoiles Google My Business"
        paragraphs={[
          "En plus de nos services de création, de gestion et d’optimisation des fiches Google My Business à Tanger, nous mettons à la disposition de nos clients <b>divers outils efficaces</b> qui facilitent et incitent leurs propres clients à laisser des avis sur leur profil Google My Business (GMB):",
          `<ul><li><span style="text-align: inherit;">Intégration web : Nous ajoutons des boutons d’évaluation sur votre site, vos e-mails et vos réseaux sociaux.</span></li><li><span style="text-align: inherit;"><span style="letter-spacing: -0.1px;">Autocollants QR :&nbsp;</span></span><b>Impression de stickers QR</b> : Nous créons des autocollants avec code QR redirigeant directement vers la page de <b>publication d’avis</b> de votre profil GMB.</li><li><b>Carte NFC</b> permettent à vos clients de donner facilement des avis sur Google en toute simplicité et d’un simple clic depuis leur téléphone.</li></ul>`,
          "Appelez-nous dès maintenant au +212 663 75 09 08 et confiez la gestion de votre fiche Google My Business à des experts certifiés Google.",
        ]}
        imageSrc="images/04/avis-google-my-business-maroc.jpg"
        imageAlt="Avis Google My Business à Tanger"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <GmbAdvantages
        advantages={gmbAdvantagesData}
        title="Avantages de la fiche <br /> Google My Business"
      />

      <TextLeftImageRight
        title="Maximiser vos résultats grâce à la synergie Google My Business & SEO"
        paragraphs={[
          "Avoir une fiche Google My Business est essentiel à Tanger, mais son impact est bien plus fort lorsqu’elle est combinée à un <b>site web bien référencé</b>. En effet, si Maps attire les clients localement, la plupart <b>préfèrent visiter le site</b> pour comparer, réserver ou acheter.&nbsp;",
          'La synergie est claire : la fiche capte l’attention et le <span style="text-decoration: underline;"><strong><a href="/agence-seo-maroc/">référencement SEO</a></strong></span> transforme cette visibilité en prospects réels.&nbsp;',
          "Par exemple, un internaute cherchant “restaurant italien à Rabat” clique sur la fiche, puis réserve via le site optimisé avec menu et formulaire.&nbsp;",
          "En occupant à la fois Google Maps et les premiers résultats de recherche, votre entreprise domine la visibilité en ligne, attire plus de clics et <b>s’impose comme référence</b> dans son secteur.",
        ]}
        imageSrc="images/04/seo-google-my-business-maroc.jpg"
        imageAlt="Agence SEO Google My Business Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <NationalCoverage
        topic="Google My Business"
        title="Une agence Google My Business à vos côtés partout à Tanger"
      />

      <FAQSection
        faqData={faqData}
        title="FAQ - Agence Google My Business Maroc"
      />

      <StarRating />
    </main>
    </>
  );
}
