import HeroSection from "../components/commonSections/HeroSection";
import ContactForm from "../components/commonSections/ContactForm";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import BigTitleTextButton from "../components/commonSections/BigTitleTextButton";
import SeoImpactSection from "../components/sectionsAgenceSeoMaroc/SeoImpactContent";
import SeoServiceCards from "../components/commonSections/SeoServiceCards";
import NationalCoverage from "../components/commonSections/NationalCoverage";
import FAQSection from "../components/commonSections/FaqSection";
import GooglePositioning from "../components/commonSections/GooglePositioning";
import { main_schema } from "../schema";

const title = "Agence SEO Kénitra | Référencement Google et moteurs d'IA";
const description =
  "Agence SEO Kénitra. Agence de référencement Google et moteurs de recherche IA : Ventes, trafic, notoriété. SEO Kénitra ☎️ 0663 75 09 08";
const imageUrl =
  "https://maroc-1hp.pages.dev/images/agence-seo-maroc/agence-seo-maroc.png";
const canonical_url = "https://www.hostino.ma/agence-seo-tangier";
const og_alt = "Agence SEO Kénitra";

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
      "Qu'est-ce que le SEO et pourquoi est-il important pour mon entreprise à Kénitra ?",
    answers: [
      "Le SEO (Search Engine Optimization), ou optimisation pour les moteurs de recherche, regroupe l'ensemble des stratégies et techniques — telles que la rapidité de chargement des pages, le respect des normes de sécurité, l'originalité du contenu, les relations publiques numériques (PR) ou encore l'achat de backlinks — visant à améliorer le positionnement de votre site web dans les résultats organiques des moteurs de recherche.",
      "Avec le SEO, il ne s'agit pas seulement de positionner votre entreprise dans les premières places sur Google à Kénitra. C'est aussi bénéficier d'un flux continu de publications presse autour de votre société, d'une augmentation régulière du trafic qualifié, et d'une visibilité renforcée auprès de vos clients potentiels. Et désormais, le SEO ouvre la porte à une nouvelle dimension : la présence dans les réponses des moteurs de recherche basés sur l'IA tels que ChatGPT ou Gemini, qui deviennent des canaux incontournables pour capter l'attention de vos prospects.",
    ],
  },
  {
    question:
      "Combien de temps faut-il pour voir des résultats avec une stratégie SEO à Kénitra ?",
    answers: [
      "La mise en place d'une stratégie SEO demande du temps avant de produire des résultats visibles. En général, il faut compter entre 3 et 9 mois pour commencer à observer des améliorations notables dans le positionnement et le trafic organique.",
      "Le délai varie fortement selon le niveau de concurrence dans votre secteur d'activité à Kénitra. Dans des marchés très compétitifs (immobilier, juridique, santé…), il peut falloir plus de temps pour dépasser des concurrents déjà bien établis.",
      "À l'inverse, dans des secteurs de niche ou localisés, les résultats peuvent apparaître plus rapidement, car la concurrence est moins intense.",
    ],
  },
  {
    question:
      "Quelles sont les étapes si je souhaite collaborer avec votre agence SEO à Kénitra ?",
    answer: (
      <>
        <p className="paragraph">
          Chez Hostino, le référencement SEO d'un site internet à Kénitra
          se déroule en deux étapes principales.
        </p>
        <p className="paragraph">
          <b>La première est le setup SEO :</b>
        </p>
        <ul className="flex flex-col gap-[10px] mb-[20px]">
          <li className="flex gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Si vous disposez déjà d'un site web, nous l'optimisons afin qu'il
              devienne pleinement Google-friendly : mise en place des normes de
              sécurité (intégration{" "}
              <a href="/cloudflare-maroc" target="_blank">
                Cloudflare
              </a>
              ), amélioration de la structure et du contenu, accélération du
              temps de chargement des pages, ainsi que la création de landing
              pages dédiées pour chaque service et chaque ville.
            </span>
          </li>
          <li className="flex gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Si vous n'avez pas encore de site internet, nous créons pour vous
              un site 100 % optimisé SEO dès le départ. C'est l'option la plus
              rapide pour obtenir des résultats, car améliorer le scoring et la
              visibilité d'un site déjà existant sur Google demande généralement
              plus de temps.
            </span>
          </li>
        </ul>
        <p>
          <b>
            La phase de setup est facturée une seule fois, au démarrage du
            projet.
          </b>
        </p>
        <p>
          <b>La deuxième étape</b> correspond à la mensualité SEO, sans
          engagement, avec un budget défini selon la concurrence des mots-clés
          choisis.
        </p>
      </>
    ),
  },
  {
    question:
      "Pourquoi choisir Hostino plutôt qu'une autre agence SEO à Kénitra ?",
    answers: [
      "La plus grande partie de notre clientèle est constituée <b>d'entreprises qui ont été déçues par des agences incapables de leur fournir des résultats concrets.</b> Nous connaissons parfaitement le marché du SEO marocain et nous avons les compétences pour transformer ces mauvaises expériences en succès.",
      "Chez Hostino, nous ne vendons pas de promesses, nous livrons des résultats. Chaque projet est une chance de démontrer notre supériorité.",
      "Depuis plusieurs années, nous aidons des entreprises à dominer leurs marchés et à générer une croissance exponentielle. Nos succès parlent pour nous et montrent que nous avons plusieurs longueurs d'avance sur les tendances du marché marocain.",
    ],
  },
  {
    question: "Quel est le prix d'une agence SEO à Kénitra comme Hostino ?",
    answers: [
      "Le coût d'une agence SEO à Kénitra, comme Hostino, dépend avant tout des objectifs de chaque entreprise et du niveau de concurrence dans son secteur. Il n'existe pas de tarif unique, car les besoins ne sont pas les mêmes selon qu'il s'agisse d'améliorer sa visibilité locale dans une ville ou de se positionner à l'échelle nationale, voire internationale.",
      "Chez Hostino, nous proposons des plans personnalisés et sans engagement, afin que nos clients ne paient que pour les services réellement utiles à leur croissance. Notre approche repose sur la transparence : chaque dirham investi est expliqué et justifié, et la stratégie est ajustée en fonction des résultats obtenus. Cela garantit un suivi clair et une maîtrise totale du budget.",
      "Nos prestations SEO débutent à 2900 DH H.T. par mois, incluant un accompagnement complet : audit initial, optimisation technique, création de contenu, acquisition de liens et rapports mensuels détaillés. Le tarif peut évoluer en fonction de l'ampleur du projet, de vos objectifs de visibilité et de la compétitivité de votre marché.",
    ],
  },
  {
    question:
      "J'ai déjà fait du SEO avec une agence à Kénitra, mais ça n'a pas marché. Pourquoi ?",
    answer: (
      <>
        <p className="paragraph">
          De nombreuses entreprises à Kénitra ont déjà tenté le référencement
          naturel avec une agence ou un freelance, mais sans véritable succès.
        </p>
        <p className="paragraph">
          <b>La raison est souvent la même</b> : un manque de maîtrise. Presque
          toutes les agences web prétendent faire du SEO, mais très peu en
          possèdent l'expertise réelle.
        </p>
        <p className="paragraph">
          Dans bien des cas, elles se limitent à des actions superficielles
          comme l'ajout de balises ou l'installation de plugins, sans mettre en
          place une véritable stratégie de contenu, de netlinking ou de suivi de
          performance.
        </p>
        <p className="paragraph">
          Or, un bon référencement ne s'improvise pas : il exige une méthode
          rigoureuse, adaptée à votre secteur et à vos objectifs, afin de
          générer des résultats concrets et mesurables.
        </p>
        <p className="paragraph">
          Avant de choisir une agence SEO, prenez le temps de vérifier ses
          éléments :
        </p>
        <ul className="flex flex-col gap-[10px] mb-[20px]">
          <li className="flex gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Assurez-vous que les références présentées sont bien réelles, que
              le travail cité a bien été réalisé par l'agence, et que son nom
              figure clairement sur les sites ou projets mis en avant.
            </span>
          </li>
          <li className="flex gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Vérifiez le positionnement de l'agence SEO sur Google</span>
          </li>
        </ul>
        <p className="paragraph">
          Par exemple, une agence qui se présente comme "agence SEO à Kénitra"
          doit logiquement apparaître sur des mots-clés pertinents tels que
          "agence SEO Kénitra".
        </p>
        <p className="paragraph">
          Si elle n'arrive pas à se positionner elle-même, comment pourrait-elle
          positionner efficacement votre site ?
        </p>
      </>
    ),
  },
  {
    question: "Proposez-vous du SEO local pour Google Maps à Kénitra ?",
    answers: [
      'Oui. Nous optimisons votre profil <a href="/google-my-business-maroc/" target="_blank"><b>Google Business</b></a>, gérons vos avis clients et renforçons votre visibilité locale pour que votre entreprise apparaisse parmi les premières positions sur Google Maps à Kénitra.',
    ],
  },
  {
    question:
      "Votre agence SEO peut-elle référencer mon entreprise à Kénitra dans ChatGPT et Gemini ?",
    answer: (
      <>
        <p className="paragraph">
          Oui, notre agence SEO travaille déjà sur ce qu'on appelle le
          Generative Engine Optimization (
          <a href="https://www.hostino.ma/agence-geo-maroc" target="_blank">
            <b>Agence GEO</b>
          </a>
          ), c'est-à-dire l'optimisation de la visibilité des entreprises dans
          les moteurs d'IA comme ChatGPT et Gemini. L'objectif n'est pas
          seulement d'apparaître sur Google, mais aussi d'être mentionné dans
          les réponses générées par l'intelligence artificielle.
        </p>
        <p className="paragraph">
          Nous avons déjà des références concrètes dans ce domaine. Par exemple,
          si vous demandez à ChatGPT : "<b>Une société de GPS à Kénitra</b> ?",
          la première réponse qui apparaît est <b>Sendatrack</b>, l'un de nos
          clients fidèles. Ce résultat est le fruit de plusieurs mois de travail
          sur leur site web, leur profil Google Business et leur présence dans
          des sources fiables que les moteurs d'IA consultent.
        </p>
        <p className="paragraph">
          C'est la preuve que notre approche fonctionne : en combinant SEO
          classique, notoriété en ligne, contenus de qualité et un paramétrage
          d'indexation adapté aux robots d'IA, nous augmentons significativement
          vos chances d'être cités par ChatGPT, Gemini et les autres moteurs
          d'IA.
        </p>
        <p className="paragraph">
          Avec Hostino, votre entreprise ne se limite pas à Google, elle gagne
          en visibilité sur la nouvelle génération de moteurs de recherche.
        </p>
        <div className="mt-4 w-full">
          <iframe
            src="https://www.youtube.com/embed/Bqn3SNyjsSE"
            width="1108"
            height="623"
            frameBorder="0"
          ></iframe>
        </div>
      </>
    ),
  },
];

const rankingsData = [
  {
    url: "serrurierpro.ma",
    country: "Maroc",
    keywords: [
      { term: "Serrurier Maroc", position: 1 },
      { term: "Ouverture Coffre-fort rabat", position: 1 },
      { term: "Serrurier Kénitra", position: 1 },
      { term: "Serrurier Tétouan", position: 1 },
    ],
  },
  {
    url: "sendatrack.ma",
    country: "Maroc",
    keywords: [
      { term: "GPS Kénitra", position: 1 },
      { term: "Société de GPS Kénitra", position: 1 },
      { term: "Installation GPS Kénitra", position: 1 },
      { term: "Société de Géolocalisation Kénitra", position: 1 },
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
  {
    url: "lyonparebrise.fr",
    country: "France",
    keywords: [
      { term: "Réparation Pare Brise Lyon", position: 1 },
      { term: "Remplacement Pare Brise Lyon", position: 2 },
      { term: "Changement Pare Brise Lyon", position: 2 },
      { term: "Pare Brise Lyon", position: 3 },
    ],
  },
  {
    url: "pcreparatieamsterdam.nl",
    country: "Pays-Bas",
    keywords: [
      { term: "PC reparatie Amsterdam", position: 1 },
      { term: "Laptopreparatie Amsterdam", position: 2 },
      { term: "Laptop reparatie Amstedam", position: 1 },
      { term: "Computer reparatie Amsterdam", position: 1 },
    ],
  },
  {
    url: "prestigecolor.be",
    country: "Belgique",
    keywords: [
      { term: "Peintre Arlon", position: 1 },
      { term: "Peinture résidentielle Arlon", position: 1 },
      { term: "Peinture en Batiment à Arlon", position: 1 },
      { term: "Expert Peintre Arlon", position: 2 },
    ],
  },
];

export default async function KénitraPage() {
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
          subtitle="Agence SEO Kénitra"
          title="Agence SEO à Kénitra"
          text="Votre agence SEO Agadir pour une visibilité maximale sur Google et les moteurs d’IA."
          emailLabel={{
            textEmail: "Support 24/7 et stratégies réellement efficaces",
            color: "text-primary",
          }}
          email="info@hostino.com"
          imageSrc="/images/06/agence-seo-maroc.png"
          imageAlt="Agence SEO à Kénitra"
        />
        <ContactForm
          title={
            <>
              Votre stratégie SEO , <br className="lg:hidden block " />
              <span className="border-bottom">commence ici !</span>
            </>
          }
        />

        <TextLeftImageRight
          title="Agence de référencement SEO Kénitra"
          paragraphs={[
            "Hostino™ est une agence SEO à Kénitra dont l'objectif est de booster la visibilité en ligne des professionnels et des entreprises, quels que soient leur taille ou leur secteur, en positionnant leurs sites web parmi les <b>premiers résultats sur Google</b>",
            "Nous déployons des stratégies SEO avancées pour vous aider à atteindre vos objectifs commerciaux — <b>trafic, leads et ventes</b> — tout en consolidant durablement votre notoriété.",
            "En plus du SEO classique, notre agence vous accompagne également dans le référencement sur les nouveaux <b>moteurs d'IA</b> (ChatGPT, Gemini, etc.), afin de vous aider à profiter pleinement de ce nouveau canal d'acquisition.",
            '<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Appelez le +212 663 75 09 08 et confiez votre stratégie SEO à des experts reconnus dans le domaine.</span>',
          ]}
          imageSrc="/images/06/agence-seo-maroc.jpg"
          imageAlt="Vendez plus grâce à l'agence SEO Kénitra"
          consultButtonTextExiste={true}
          textButton={"Contactez-nous"}
          href={"https://www.hostino.ma/contact"}
        />

        <GooglePositioning
          title="Cas clients de <br/>notre agence SEO Kénitra"
          rankingsData={rankingsData}
          subtitle="Marre de payer des agences&nbsp;<b>sans résultats ? </b>Il est temps de passer à une <b>solution qui fonctionne</b>."
        />

        <TextLeftImageRight
          title="Agence SEO Kénitra : qu'est-ce que c'est ?"
          paragraphs={[
            "Une agence SEO est une société spécialisée dont la mission est d'accompagner les startups, les PME/PMI, les marques, les médias, ainsi que les ONG et les institutions publiques dans l'amélioration du classement de leurs sites web, que ce soit au <b> niveau local, national ou international.</b>",
            "La nouveauté aujourd'hui est que les agences SEO ne se limitent plus aux moteurs de recherche traditionnels. Elles interviennent désormais aussi sur les nouveaux moteurs d'intelligence artificielle. C'est ce que l'on appelle une Agence GEO <b>(Generative Engine Optimization)</b>, une évolution du SEO qui représente une opportunité unique pour exploiter des canaux encore peu saturés, renforcer sa présence digitale et toucher un public beaucoup plus large.",
            "Appelez le +212 663 75 09 08et confiez votre stratégie de visibilité SEO et GEO à une <b>agence innovante</b>, toujours à la pointe des tendances technologiques internationales.",
          ]}
          imageSrc="images/06/quoi-agence-seo-maroc.jpg"
          imageAlt="Agence SEO Kénitra"
          consultButtonTextExiste={true}
          textButton="Contactez-nous"
          href="https://www.hostino.ma/contact"
        />
        <BigTitleTextButton />

        <TextLeftImageRight
          title="Une agence SEO qui vous aide à être trouvé sur ChatGPT à Kénitra"
          paragraphs={[
            "Le SEO évolue rapidement, et aujourd'hui il ne se limite plus à Google. Les moteurs de recherche basés sur l'intelligence artificielle, comme ChatGPT ou Gemini, ouvrent un <b>nouveau canal d'acquisition</b> encore très peu exploité à Kénitra. En vous positionnant dès maintenant, vous profitez d'une avance stratégique pour capter l'attention de vos futurs clients.",
            "<b>Être visible sur ChatGPT</b>, c'est apparaître directement dans les réponses que les utilisateurs consultent chaque jour. Là où vos concurrents n'ont pas encore investi, vous pouvez placer vos services et vos solutions au cœur des recommandations de l'IA et ainsi créer un avantage compétitif décisif.",
            'Notre agence SEO vous accompagne dans cette transition. Grâce à une méthodologie avancée — analyse des requêtes, optimisation des contenus et intégration des <b>signaux adaptés à l\'IA</b> — nous transformons cette opportunité en croissance durable. Selon nos experts seniors, ChatGPT deviendra le nouveau SEO d\'ici les deux prochaines années.&nbsp;<b style="font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Agir dès aujourd\'hui, c\'est s\'assurer une place de leader demain.</b>',
          ]}
          imageSrc="images/06/agence-seo-chatgpt.jpg"
          imageAlt="Agence SEO Chatgpt Kénitra"
          consultButtonTextExiste={true}
          textButton="Contactez-nous"
          href="https://www.hostino.ma/contact"
        />

       <TextLeftImageRight
          title="Expert SEO Maroc : Le meilleur en 2026 ! 🏆"
          paragraphs={[
            "Nos experts SEO, piliers de notre agence, maîtrisent tous les aspects du référencement — optimisation de contenu, technique, <b>relations presse (PR)</b>, stratégie de <b>netlinking</b>, IA et automatisation — afin de mettre leur expertise au service de votre visibilité digitale.",
            'L\'agence Hostino est la seule au Maroc à avoir mis en place une cellule de <b>recherche et développement (R&amp;D)</b> dédiée exclusivement au SEO, afin de rester à l’avant-garde des innovations et des futures mises à jour de Google.&nbsp;<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Grâce à cette veille proactive, nous optimisons en continu nos performances et garantissons à nos clients la stabilité de leurs positions, tout en restant pleinement conformes aux normes et recommandations de Google.</span>',
            '<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Ce groupe de consultants SEO est dirigé par&nbsp;<span style="text-decoration: underline;"><strong><a href="https://www.linkedin.com/in/aniss-kiassi" rel="noopener">Aniss Kiassi</a></strong></span>, CEO – expert international réputé en SEO, lauréat du prestigieux programme d’innovation <span style="text-decoration: underline;"><strong><a href="https://www.investinspain.org/content/icex-invest/en/rising-up-in-spain.html" rel="noopener">Rising UP Spain</a></strong></span> et vainqueur de plusieurs prix nationaux et internationaux.</span>',
          ]}
          imageSrc="images/06/expert-seo-maroc.jpg"
          imageAlt="Expert SEO au Maroc"
          consultButtonTextExiste={true}
          textButton="Contactez-nous"
          href="https://www.hostino.ma/contact"
        />

        <SeoServiceCards />

        <NationalCoverage
          topic="Agence SEO"
          text="Chez Hostino™, nous accompagnons des clients de tous niveaux et de tous secteurs d'activité, partout au Maroc, dans leur stratégie de référencement Google et IA."
          title="Agence SEO, une <br /> couverture nationale"
        />

        <FAQSection faqData={faqData} title="FAQ - Agence SEO Kénitra" />
      </main>
    </>
  );
}
