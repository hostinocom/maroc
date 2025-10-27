import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";

interface SEOServiceCard {
  title: string;
  paragraphs: (string | React.ReactNode) [];
  buttonText: string;
  buttonLink: string;
  bgColor: string;
}

interface City {
  name: string;
  href: string;
}

const seoServiceCardsData: SEOServiceCard[] = [
  {
    title:
      "Agence SEO pour médecins,<br />cabinets médicaux et<br />laboratoires",
    paragraphs: [
      "Le digital est aujourd'hui un levier essentiel pour les professionnels de santé au Maroc. Notre agence SEO accompagne les <strong>médecins, cabinets médicaux, laboratoires</strong> et l'ensemble des acteurs du secteur de la santé afin de renforcer leur visibilité sur Google ainsi que dans les moteurs de recherche IA.",
      `<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Nous mettons en place des stratégies de référencement local et organique, conçues dans </span><b style="font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">les règles de l’art et en parfaite conformité avec les <u>régulations marocaines</u></b><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">.&nbsp;</span>`,
      "Imaginez l'impact d'avoir votre <strong>site web</strong> en première position sur des recherches comme « <strong>Gynécologue Rabat</strong> » ou « <strong>Cabinet dentaire Casablanca</strong> ». Ces mots-clés peuvent générer chaque mois des centaines de demandes de consultations et de rendez-vous.",
      "De plus, les usages évoluent rapidement. Demain, un patient posera directement sa question à ChatGPT : « <strong>Quel est le meilleur dentiste à Rabat ?</strong> » Notre mission est de faire en sorte que votre cabinet soit la réponse.",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "/agence-seo-medical",
    bgColor: "bg-[#FEF6F3]",
  },
  {
    title: "Agence SEO pour sites<br />d'actualités, radios et<br />chaînes TV",
    paragraphs: [
      "Nous accompagnons les radios, magazines, journaux en ligne et <strong>chaînes de télévision</strong> dans l'optimisation de leur <strong>visibilité sur Google</strong>, afin de générer un maximum de trafic organique aussi bien au niveau <strong>local qu'international</strong>.",
      `Nous proposons des <b>formations dédiées aux journalistes</b> afin de leur transmettre les meilleures pratiques <b>éditoriales orientées SEO</b>. Nous mettons l’accent sur la rédaction de contenus optimisés pour Google et les réseaux sociaux, la structuration des articles avec des éléments enrichis, ainsi que l’adaptation des stratégies de diffusion afin de garantir leur validation <span style="text-decoration: underline;"><a href="https://support.google.com/news/publisher-center/answer/10598355?hl=fr" rel="noopener"><b>Google Actualités</b></a></span> et leur visibilité sur <b>Google Discover</b>`,
      "Déjà, plusieurs médias de référence nous font confiance, tels que <strong>Medi1TV, Medi1News</strong> et <strong>Maroc24.com</strong>. Ces collaborations constituent pour nous de véritables success stories, démontrant notre capacité à accompagner efficacement les acteurs médiatiques de toute taille, et à transformer leur présence digitale en un puissant levier de croissance et d'influence.",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "/agence-seo-news",
    bgColor: "bg-[#0C10DA0D]",
  },
  {
    title: "Agence SEO BTP et Promotion<br />Immobilière",
    paragraphs: [
      "Hostino est l'agence SEO qui accompagne les entreprises du BTP — <strong>bureaux d'études, architectes</strong>, notaires, agences immobilières et <strong>promoteurs</strong> — dans leur visibilité sur Google et les moteurs de recherche IA. Grâce à des stratégies SEO locales et ciblées, nous positionnons votre entreprise sur les <strong>premiers résultats</strong> pour des recherches stratégiques telles que « <strong>Architecte d'intérieur Rabat</strong> », « <strong>Appartement à vendre</strong> Rabat » ou « notaire Tanger ».",
      "En retour, vous recevez des <strong>consultations</strong> et des <strong>appels téléphoniques</strong> de prospects qualifiés, réellement intéressés par vos services et déjà <strong>prêts à acheter</strong>.",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "/agence-seo-immobilier",
    bgColor: "bg-[#E7F3ED]",
  },
  {
    title: "Agence SEO pour hôtels, riads<br />et palaces",
    paragraphs: [
      "Dépasser les grandes plateformes de réservation sur des mots-clés stratégiques comme « <strong>Riad Marrakech</strong> », « <strong>Luxury Riad Fez</strong> » ou « <strong>Luxury Hotel Morocco</strong> » est possible avec notre agence SEO.",
      "Grâce à une stratégie de référencement avancée, nous <strong>positionnons votre établissement</strong> sur Google et sur les moteurs IA afin d'attirer directement les voyageurs sur votre site web et de générer des <strong>réservations directes</strong>. Vous devenez visible face aux grandes agences de voyages internationales pour les <strong>réservations de groupes</strong>, tout en réduisant votre dépendance aux commissions des OTA (Booking, Expedia, etc.).",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "/agence-seo-hotel",
    bgColor: "bg-[#00B9FF1F]",
  },
  {
    title:
      "Agence SEO pour comptables,<br />cabinets de recrutement, de<br />conseil et de certification",
    paragraphs: [
      "Un cabinet bien positionné en N°1 sur Google au Maroc peut recevoir chaque jour une dizaine d'appels : des clients à la recherche d'un accompagnement fiscal, de la <strong>création d'entreprise</strong>, d'une <strong>formation professionnelle</strong>, d'une société cherchant une agence de <strong>recrutement</strong>, ou encore d'un accompagnement pour la <strong>certification ISO 9001</strong>.",
      "Tous ces exemples peuvent être le vôtre. L'agence SEO Hostino vous aide à <strong>dominer votre secteur d'activité</strong> grâce à des stratégies de référencement locales et ciblées, qui vous placent en <strong>première ligne face à vos concurrents</strong> et transforment chaque recherche sur Google en nouvelle opportunité pour votre cabinet.",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "",
    bgColor: "bg-[#FAE0E0]",
  },
  {
    title:
      "Agence SEO pour écoles,<br />universités et centres de<br />formation",
    paragraphs: [
      "Imaginez qu'une <strong>crèche</strong> apparaisse en première position sur Google lorsqu'un parent recherche « <strong>Crèche Rabat</strong> ».",
      "De la même façon, une <strong>école primaire</strong> à Casablanca peut apparaître en tête des résultats pour « <strong>Meilleure école privée Casablanca</strong> » et générer en continu de nouvelles demandes d'inscription.",
      "Plus haut encore dans le parcours académique, notre agence SEO peut positionner le site d'une université en tête des résultats pour des requêtes telles que « <strong>Executive MBA Maroc</strong> » ou « <strong>École de Management Casablanca</strong> ».",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "",
    bgColor: "bg-[#D3D3D345]",
  },
  {
    title:
      "Agence SEO pour prestataires<br />de services (plombiers,<br />électriciens et serruriers ...)",
    paragraphs: [
      "Pour un <strong>plombier</strong>, un <strong>chauffagiste</strong>, un <strong>électricien</strong> ou un <strong>serrurier</strong>, être visible sur Google est devenu indispensable. Lorsqu'un client a besoin d'une intervention en urgence, il ne perd pas de temps : il choisit l'un des premiers résultats.",
      "<strong>Se positionner en tête</strong>, c'est donc s'assurer davantage d'appels, de demandes de devis et de chantiers chaque jour, sans dépendre uniquement du bouche-à-oreille ou du marketing traditionnel.",
      "Grâce à des stratégies sur mesure — <strong>mots-clés locaux</strong>, optimisation du profil Google Business Profile, création de contenu pertinent — notre agence vous aide à devancer vos concurrents et à transformer les recherches en <strong>nouveaux clients réguliers</strong>.",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "",
    bgColor: "bg-[#EDFF2829]",
  },
  {
    title:
      "Agence SEO pour agences de<br />voyages, guides et transport<br />touristique",
    paragraphs: [
      "Dans le secteur du tourisme, être bien référencé sur Google est essentiel pour attirer davantage de voyageurs. Qu'il s'agisse d'une <strong>agence de voyages</strong>, d'un <strong>guide local</strong> ou d'une <strong>société de transport</strong> touristique, la recherche des clients commence presque toujours en ligne.",
      "Être visible en première page permet non seulement de générer plus de réservations, mais aussi d'accroître sa notoriété et de se démarquer de la concurrence.",
      "Notre agence SEO vous aide à positionner votre site en première page sur des mots-clés stratégiques tels que « <strong>Transfer airport Marrakech</strong> », « <strong>Location de voiture Tanger</strong> » ou encore « <strong>Private tours Fez</strong> », afin de transformer les recherches en réservations concrètes.",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "",
    bgColor: "bg-[#FE56FF26]",
  },
  {
    title: "Agence SEO pour marques et<br />e-commerce",
    paragraphs: [
      "Pour <strong>une marque</strong> ou une <strong>boutique en ligne</strong>, apparaître en première page de Google est une opportunité en or pour attirer des clients qualifiés. Dans le secteur du e-commerce, une simple recherche peut se transformer en vente. Imaginez ces scénarios où le référencement est crucial :",
      <ul className="paragraph space-y-2 list-disc pl-[30px]">
        <li>
          Un professionnel à Rabat a besoin d'un{" "}
          <strong>toner en urgence</strong>.
        </li>
        <li>
          Quelqu'un souhaite faire livrer un <strong>bouquet de fleurs</strong>.
          Un invité de mariage cherche un <strong>cadeau original</strong>.
        </li>
        <li>Un passionné de décoration est en quête d'un tableau unique.</li>
      </ul>,
      "Pour ces entreprises, être bien référencé, c'est l'assurance d'être trouvé au moment précis où le client est prêt à acheter.",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "",
    bgColor: "bg-[#005CEE30]",
  },
  {
    title: "Agence SEO pour startups et<br />SaaS",
    paragraphs: [
      "Une startup ou un SaaS doit être visible non seulement auprès des clients, mais aussi des investisseurs pour réussir sa croissance et ses levées de fonds. Être en première page de Google <strong>accélère l'acquisition d'utilisateurs</strong>, renforce la crédibilité et ouvre des opportunités stratégiques lors des <strong>levées de fonds</strong>.",
      "Notre agence SEO accompagne les startups et SaaS avec des stratégies sur mesure pour attirer des utilisateurs, <strong>convaincre les investisseurs</strong> et transformer cette visibilité en croissance durable.",
      "Qu'il s'agisse de SaaS B2B, de solutions <strong>FinTech</strong>, de plateformes <strong>EdTech</strong>, de startups en <strong>GreenTech</strong> ou encore de projets HealthTech, Hostino est là pour assurer la visibilité de votre solution sur <strong>Google et les moteurs de recherche IA</strong>.",
    ],
    buttonText: "Plus d'informations",
    buttonLink: "",
    bgColor: "bg-[#46FF0426]",
  },
];

const SeoServiceCards = () => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container">
        <h2 className="big-title mb-[40px] text-center">
          Secteurs accompagnés
          <br />
          par notre agence SEO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seoServiceCardsData.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} rounded-[36px] p-[50px] flex flex-col justify-between`}
            >
              <div>
                <h3
                  className="md:text-[34px] text-title md:leading-[39px] tracking-[-1.1px] font-[600] text-[24px] mb-[20px]"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />

                {card.paragraphs.map((paragraph, idx) => (
                  <div key={idx}>
                    {typeof paragraph === "string" ? (
                       <p
                    key={idx}
                    className="paragraph"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                    ) : (
                      <>{paragraph as any}</>
                    )}
                  </div>
                ))}
              </div>

              {card.buttonLink && (
                <Link
                  href={card.buttonLink}
                  className="inline-block  text-white font-semibold rounded-lg transition-colors mt-6 "
                >
                  <AnimatedButton
                    text={card.buttonText}
                    hoverText={"Plus d'informations"}
                    bgColor={"bg-primary"}
                    hoverBgColor="bg-title"
                    className="btn-10-40"
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoServiceCards;
