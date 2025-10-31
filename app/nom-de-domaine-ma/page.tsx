import FAQSection from "../components/commonSections/FaqSection";
import ServiceProximite from "../components/commonSections/ServiceProximite";
import SixCards from "../components/commonSections/SixCards";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import TitleParagraphButton from "../components/commonSections/TitleParagraphButton";
import DomainSearchSection from "../components/sections/DomainSearchSection";
import TrustedBySection from "../components/sections/TrustedBySection";
import DomainPricingSection from "../components/sectionsNomDeDomaineMa/DomainPricingSection";
import HeroHeadingPages from "../components/ui/heroHeadingPages";
import StartsRatingYellowFooter from "../components/ui/StartsRatingYellowFooter";
import { main_schema } from "../schema";

const title = "Nom de domaine Maroc - .Ma à seulement 118 DH";
const description =
  "Nom de domaine Maroc. En quelques clics, enregistrez votre nom de domaine. Sécurisez votre .ma à 118 Dhs/an. Activation instantanée 24h/24.";
const imageUrl =
  "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png";
const canonical_url = "https://www.hostino.ma/nom-de-domaine-ma";
const og_alt = "Nom de domaine Maroc";

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
    question: "L'activation de mon nom de domaine Maroc est-elle instantanée ?",
    answers: [
      "L'enregistrement de votre nom de domaine .ma est effectué instantanément après votre paiement. Un email de confirmation vous est automatiquement envoyé pour valider l'opération.",
      "L'activation se fait généralement en quelques minutes, sauf si le nom de domaine .ma contient un terme réservé, auquel cas une validation manuelle par l'ANRT est nécessaire.",
    ],
  },
  {
    question:
      "Est-il possible de modifier ou d'annuler un nom de domaine après le paiement ?",
    answers: [
      "Comme chez tous nos confrères locaux et internationaux, il est impossible de modifier ou d'annuler l'enregistrement d'un nom de domaine.",
      "Une fois enregistré, le nom de domaine reste actif jusqu'à sa date d'expiration. Si vous ne le renouvelez pas, il sera automatiquement supprimé à la fin de cette période.",
      "De plus, le montant payé pour l'enregistrement n'est pas remboursable.",
    ],
  },
  {
    question: "Comment acheter un nom de domaine Maroc ?",
    answers: [
      "La réservation d'un nom de domaine .MA est ouverte aussi bien aux particuliers qu'aux entreprises du monde entier. En enregistrant un nom de domaine .MA, vous acceptez les conditions générales de l'ANRT relatives à la réglementation en vigueur pour les noms de domaine .ma.",
    ],
  },
  {
    question: "Comment renouveler mon nom de domaine ?",
    answers: [
      "Vous pouvez générer directement une facture de renouvellement de votre nom de domaine .ma depuis votre espace client Hostino.",
    ],
  },
  {
    question: "Puis-je gérer le DNS de mon nom de domaine ?",
    answers: [
      'Oui, vous pouvez gérer le DNS à tout moment depuis votre espace client Hostino, dans la rubrique "Manage DNS", ou directement depuis votre compte cPanel si un hébergement est associé à votre nom de domaine.',
    ],
  },
  {
    question: "Pourquoi réserver plusieurs extensions en plus du .ma ?",
    answers: [
      "Réserver plusieurs extensions de votre nom de domaine (comme .com, .net, .org, etc.) en plus du .ma vous permet de protéger votre marque, éviter les imitations ou le cybersquatting, et renforcer votre présence en ligne à l'international.",
      "Cela garantit que vos visiteurs vous trouvent facilement, quel que soit l'extension qu'ils tapent, tout en sécurisant votre identité numérique sur différents marchés.",
    ],
  },
];

const domainOptions = [
  ".ma",
  ".com",
  ".net",
  ".info",
  ".org",
  ".co.ma",
  ".org.ma",
  ".net.ma",
  ".edu.ma",
  ".press.ma",
  ".gov.ma",
  ".ac.ma",
  ".us",
  ".es",
  ".fr",
  ".be",
  ".nl",
  ".it",
  ".de",
  ".ch",
  ".eu",
  ".ca",
  ".uk",
  ".co.uk",
  ".tv",
  ".biz",
  ".co",
  ".tech",
  ".cloud",
  ".store",
  ".shop",
  ".ai",
];

const domains = [
  {
    extension: "ma",
    oldPrice: "139 DH/an",
    newPrice: "118 DH/an",
  },
  {
    extension: "com",
    oldPrice: "139 DH/an",
    newPrice: "118 DH/an",
  },
  {
    extension: "net",
    oldPrice: "180 DH/an",
    newPrice: "150 DH/an",
  },
];

const hostingFeatures = [
  {
    image: "08/lancer-domaine.png",
    title: "Nom de domaine pour lancer un <span>site web</span>",
    description: `Un nom de domaine .ma, c’est l’assurance d’une identité locale forte pour votre site web. Gagnez la confiance des internautes marocains et renforcez votre crédibilité. Sélectionnez un <b>pack <span style="text-decoration: underline;"><a href="https://www.hostino.ma/">d’hébergement web</a></span></b> et publiez votre site dès <b>maintenant</b> !`,
  },
  {
    image: "08/email-domaine.png",
    title:
      "Nom de domaine <br>pour créer des<br> <span><span>e-mails Pro</span></span>",
    description: `Boostez votre crédibilité et votre communication avec des adresses emails personnalisées <b>@votreentreprise.ma</b>. <span style="text-decoration: underline;"><a href="/email-professionnel/#plans">Sélectionnez le pack</a></span> adapté, confirmez votre domaine .ma et profitez d’une messagerie professionnelle pour votre entreprise.`,
  },
  {
    image: "08/shopify.png",
    title:
      "Nom de domaine <br>pour <span><span>Shopify</span></span>, Youcan etc.",
    description: `Donnez une identité unique à votre boutique en ligne ! Achetez votre nom de domaine et connectez-le à Shopify, Youcan ou toute autre plateforme en quelques clics grâce à notre service <b>DNS gratuit</b>.
Démarrez votre e-commerce dès maintenant !`,
  },
];

const whyChooseNomDomaineHostino = [
  {
    image: "08/local.png",
    title: "100% <span>Marocain</span>",
    description: "Prestataire local, qui facture en MAD (dirham marocain).",
  },
  {
    image: "08/price.png",
    title: "Tarifs <span>compétitifs</span>",
    description:
      "Économisez jusqu'à 50 % comparé à nos compétiteurs internationaux.",
  },
  {
    image: "08/secure.png",
    title: "Paiement <span>sécurisé</span>",
    description:
      "Paiement sécurisé par carte bancaire pour une mise en service immédiate.",
  },
  {
    image: "08/accredited.png",
    title: "Entreprise <span>réputée</span>",
    description: "Accréditée par l'ANRT, avec 5,000+ domaines sous gestion.",
  },
  {
    image: "08/dns.png",
    title: "Gestion <span>simple</span>",
    description:
      "Interface sécurisée, intuitive et facile pour la gestion de vos domaines.",
  },
  {
    image: "08/fast-icon.png",
    title: "Activation <span>instantanée</span>",
    description:
      "Enregistrement rapide, avec une <b>activation instantanée.</b>",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "https://www.hostino.ma/#place",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "35.77594947083067",
        longitude: "-5.80348479866106",
      },
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=35.77594947083067,-5.80348479866106",
      address: {
        "@type": "PostalAddress",
        streetAddress: "T100 Technopark Tanger",
        addressLocality: "Tanger",
        addressRegion: "Tanger",
        postalCode: "90000",
        addressCountry: "Maroc",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.hostino.ma/#organization",
      name: "Hostino",
      url: "https://www.hostino.ma",
      email: "info@hostino.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "T100 Technopark Tanger",
        addressLocality: "Tanger",
        addressRegion: "Tanger",
        postalCode: "90000",
        addressCountry: "Maroc",
      },
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.hostino.ma/#logo",
        url: "https://www.hostino.ma/logo-icon-square.jpg",
        contentUrl: "https://www.hostino.ma/logo-icon-square.jpg",
        caption: "Hostino",
        inLanguage: "fr-FR",
        width: "1200",
        height: "1200",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+212531031186",
          contactType: "customer support",
        },
      ],
      location: { "@id": "https://www.hostino.ma/#place" },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hostino.ma/#website",
      url: "https://www.hostino.ma",
      name: "Hostino",
      publisher: { "@id": "https://www.hostino.ma/#organization" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.hostino.ma/wp-content/uploads/2025/06/google-svg.svg",
      url: "https://www.hostino.ma/wp-content/uploads/2025/06/google-svg.svg",
      width: "200",
      height: "200",
      inLanguage: "fr-FR",
    },
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
            "@id": "https://www.hostino.ma/nom-de-domaine-ma",
            name: "Nom de domaine",
          },
        },
      ],
    },
    {
      "@type": "Product",
      name: "Nom de domaine Maroc - .Ma à seulement 118 DH",
      url: "canonical_url",
      description: "description",
      brand: { "@type": "Brand", name: "Hostino" },
      offers: {
        "@type": "AggregateOffer",
        url: "canonical_url",
        lowPrice: "118",
        priceCurrency: "MAD",
        availability: "InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "987",
      },
    },
  ],
};
const NomDeDomaineMaPage = () => {
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
        <HeroHeadingPages
          smallTitle="Nom de domaine Maroc"
          bigTitle="Réservez votre <br /> nom de domaine"
          lineGreen={false}
        />

        <section className="bg-gray-200 pb-[80px]">
          <div className="container flex flex-col items-center text-center justify-center">
            <p className="mb-[20px] paragraph-white ">
              Un nom de domaine Maroc (.MA) indique que votre entreprise est{" "}
              <b>fièrement marocaine.</b>
            </p>

            <form
              //onSubmit={}
              className=" lg:w-[60%] md:w-[90%] w-[100%] bg-gray-100"
            >
              <div className="flex rounded-lg bg-white  overflow-hidden sm:border-0 border-1 border-primary  flex-col sm:flex-row">
                <input
                  type="text"
                  //value={domain}
                  //onChange={(e) => setDomain(e.target.value)}
                  placeholder="Entrer un nom de domaine"
                  className="flex-1 px-8 sm:py-6 py-8 text-title font-[20px] rounded-l-lg focus:outline-none"
                  required
                />

                <div className="mr-[20px] flex items-center">
                  <select
                    name="domain_tld"
                    defaultValue=".ma"
                    className="sm:block hidden  text-right text-[20px] text-title font-[600]"
                  >
                    {domainOptions.map((domain) => (
                      <option key={domain} className="font-bold" value={domain}>
                        {domain}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-primary sm:py-0 py-6 text-white font-bold px-8 sm:text-lg text-xl   transition whitespace-nowrap"
                >
                  Rechercher
                </button>
              </div>
            </form>

            <div className="grid mt-[10px] grid-cols-4 lg:gap-22 md:gap-20 gap-10 items-center">
              {/* Domain pricing cards */}
              {domains.map((domain, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start gap-[8px] border border-gray-200 rounded-lg  text-center"
                >
                  <h3 className="text-title text-[27px] font-[600]">
                    <span className="text-primary md:text-[27px] text-[22px]  font-[600]">
                      .
                    </span>
                    {domain.extension}
                  </h3>
                  <p className="text-gray-400 md:text-[15px] line-through text-[10px]">
                    {domain.oldPrice}
                  </p>
                  <p className="text-title sm:text-[17px] text-[13px] font-[600]">
                    {domain.newPrice}
                  </p>
                </div>
              ))}

              {/* +400 TLDs card */}
              <div className=" border border-gray-200 rounded-lg text-center ">
                <div className="text-primary font-[600] md:text-[29px] text-[22px] mb-2">
                  +400
                </div>
                <div className="text-primary text-[23px] font-[600]">
                  TLDs...
                </div>
              </div>
            </div>
          </div>
        </section>

        <TextLeftImageRight
          title="Nom de domaine au Maroc"
          paragraphs={[
            `Hostino™ conseille et accompagne ses clients institutionnels, <b>entreprises et particuliers</b>, au <b>Maroc et à l’international</b>, dans l’enregistrement et la gestion sécurisée de leurs noms de domaine .ma.`,
            `En tant que bureau d’enregistrement accrédité par l’ANRT, Hostino™ met à votre disposition une équipe d’experts, un <b>service client réactif</b> et une plateforme intuitive, facile à utiliser, vous permettant de gérer tous les aspects de vos noms de domaine en toute simplicité et à tout moment`,
            `En complément, nous mettons à votre disposition une gamme complète de services associés à votre nom de domaine, incluant la <span style="text-decoration: underline;"><a href="http://www.hostino.ma/email-professionnel">messagerie professionnelle</a></span>, l’<a href="http://www.hostino.ma">hébergement web</a> et l’infogérance.`,
            `Appelez le (+212) 531 031 186 et confiez la réservation de votre nom de domaine à un prestataire agréé au Maroc`,
          ]}
          imageSrc="/images/starty/email-professionnel-maroc.jpg"
          imageAlt="Maily - Messagerie professionnelle"
          consultButtonTextExiste={true}
          textButton="Commencer maintenant"
          href="/nom-de-domaine-ma/#ma"
          arrowButton={true}
        />

        <TrustedBySection classNameImage="md:w-[65%] w-[100%]" />

        <SixCards
          features={hostingFeatures}
          title="Que pouvez-vous faire avec un nom <br /> de domaine  Maroc ?"
          classNameTitleCard="xl:pr-[120px] lg:pr-[40px]"
        />

        <DomainSearchSection id="ma" />

        <TextLeftImageRight
          title="Qu'est-ce qu'un nom de domaine Maroc ?"
          paragraphs={[
            `<span style="color: #022545;">Le .MA est l’extension géographique du Maroc. Elle est l’extension officielle du Royaume du Maroc, un pays considéré comme un pont <b>d’opportunités entre l’Europe et l’Afrique</b>. Les noms de domaine .ma sont administrés et gérés par l’organisme public l’ANRT.`,
            `<span style="color: #022545;">Un domaine <strong>.MA (<span style="text-decoration: underline;"><a href="https://www.hostino.ma/en/ma-domain-name/">.ma domain name</a></span>)</strong> indique immédiatement à vos clients que votre entreprise est implantée au Maroc et engagée dans son économie locale. Il inspire confiance en montrant que vous êtes un acteur du marché marocain, que vous respectez les réglementations locales et que vous facilitez les transactions en dirhams.</span>`,
            `<span style="color: #022545; font-weight: var(--e-global-typography-text-font-weight); letter-spacing: 0.2px; text-align: inherit;">Appelez-nous au (+212) 531 031 186 : l’un de nos conseillers vous répondra à toutes vos questions.</span>`,
          ]}
          imageSrc="/images/08/nom-de-domaine-maroc-quoi.jpg"
          imageAlt="Maily - Messagerie professionnelle"
          textButton="Commancer maintenant"
          arrowButton={true}
          href="#ma"
        />

        <SixCards
          features={whyChooseNomDomaineHostino}
          title="Pourquoi acheter un nom de <br />domaine chez Hostino ?"
          classNameTitleCard="lg:pr-[180px] "
        />

        <TextLeftImageRight
          title="Nom de domaine à terme réservé"
          paragraphs={[
            `<span style="color: #022545;">La réservation de noms de domaine .MA incluant des mots ou expressions réservés, tels que ‘maroc’, ‘morocco’, ‘gov’ (ou leurs traductions), des noms de villes, communes, pays, des acronymes d’organismes publics, des termes techniques spécifiques, etc., ou des noms de domaine sous les extensions restrictives .AC.MA, .PRESS.MA et .GOV.MA, est soumise à des conditions particulières concernant l’identité et les droits du demandeur.</span>`,
            `<span style="color: #022545;">Vous pouvez consulter à la&nbsp;<span style="text-decoration: underline;"><a style="color: #022545; text-decoration: underline;" href="https://www.registre.ma/wp-content/themes/domaine/pdf/Liste_terme_reserves.pdf" rel="noopener"><b>liste des termes</b></a></span> non exhaustive des termes réservés définis par l’agence nationale de réglementation des télécommunications (ANRT).</span>`,
          ]}
          imageSrc="/images/08/nom-de-domaine-maroc-terme.jpg"
          imageAlt="Nom de domaine Maroc à Statut réservé"
          textButton="Commencer maintenant"
          href="#ma"
          arrowButton={true}
        />

        <TextLeftImageRight
          title="Procédure d'enregistrement de noms avec termes réservés"
          paragraphs={[
            `<span style="color: #022545;">Pour finaliser l’enregistrement d’un nom de domaine Maroc contenant un terme réservé, merci de nous transmettre les informations suivants en ouvrant un <span style="text-decoration: underline;"><a style="color: #022545; text-decoration: underline;" href="https://my.hostino.com/submitticket.php" rel="noopener"><b>ticket de support</b></a></span> :</span>`,
            <ul className="list-disc flex mt-[30px] mb-[40px] flex-col gap-y-4 pl-[30px]">
              <li>
                <span>
                  Nom de l’entreprise ou organisme pour lequel ce nom de domaine
                  va être réservé
                </span>
              </li>
              <li>
                <span>
                  Email, adresse postale et N° de téléphone de l’entreprise
                </span>
              </li>
              <li>
                <span>
                  La raison pour laquelle ce domaine sera enregistré (avec tous
                  les détails possibles pour convaincre l’ANRT de vous
                  enregistrer ce domaine)
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <a
                      style={{ textDecoration: "underline", color: "#022545" }}
                      href="https://www.hostino.ma/Examen_Prealable_nom_de_domaine_maroc.pdf"
                    >
                      Formulaire
                    </a>
                  </span>{" "}
                  rempli, signé et cacheté, disponible sur via ce{" "}
                  <a
                    style={{ textDecoration: "underline", color: "#022545" }}
                    href="https://www.hostino.ma/Examen_Prealable_nom_de_domaine_maroc.pdf"
                  >
                    <u>lien</u>
                  </a>
                  .
                </span>
              </li>
            </ul>,
          ]}
          imageSrc="/images/08/nom-de-domaine-anrt.jpg"
          imageAlt="Nom de domaine Maroc à Statut réservé"
          textButton="Commencer maintenant"
          href="#ma"
          arrowButton={true}
        />

        <TextLeftImageRight
          title="Résolution des litiges des Noms de domaine Maroc"
          paragraphs={[
            "La gestion des noms de domaine au Maroc repose sur un cadre réglementaire strict, notamment pour les extensions en .ma et .المغرب. ",
            "Pour garantir une protection efficace des droits de propriété intellectuelle, l’Agence Nationale de Réglementation des Télécommunications (ANRT), en collaboration avec , <b>l’Organisation Mondiale de la Propriété Intellectuelle</b> (OMPI), a mis en place une Procédure Alternative de Résolution de Litiges (PARL).",
            "Cette procédure permet de traiter les conflits liés à l’enregistrement abusif de noms de domaine correspondant à des marques protégées, des dénominations sociales, ainsi que des indications géographiques ou appellations d’origine au Maroc.",
          ]}
          imageSrc="/images/08/nom-de-domaine-ompi-anrt.jpg"
          className="lg:mt-[150px] mt-[80px] mb-[0]"
          consultButtonTextExiste={false}
        />

        <section>
          <div className="container">
            <p className="paragraph">
              Dans le but de renforcer la protection des entreprises et des
              détenteurs de droits, l’ANRT a récemment procédé à une révision du
              règlement de la PARL. Désormais, cette procédure couvre un
              éventail plus large de litiges, incluant les conflits relatifs aux
              noms de domaine enregistrés sous l’extension .المغرب en arabe.
              Cette extension bénéficie ainsi du même niveau de protection que
              les domaines en .ma, garantissant une meilleure{" "}
              <b>sécurité juridique aux entreprises</b> et aux titulaires de
              droits.
            </p>
            <p className="paragraph">
              Le nouveau règlement entrera en vigueur le 15 février 2025, et
              offrira aux requérants des recours plus adaptés pour défendre
              leurs intérêts. Toute personne ou entreprise confrontée à un
              litige lié à un nom de domaine au Maroc peut consulter les détails
              de cette procédure et soumettre une requête via le Centre
              d’Arbitrage de l’OMPI.&nbsp;
            </p>
            <p className="paragraph">
              Pour en savoir plus, consultez le règlement complet sur le site
              officiel de l’OMPI :{" "}
              <span>
                <a
                  href="https://www.wipo.int/amc/fr/domains/cctld/ma/index.html"
                  target="_new"
                  rel="noopener"
                  data-start="1723"
                  data-end="1804"
                >
                  Lien vers le règlement.
                </a>
              </span>
            </p>
          </div>
        </section>

        <DomainPricingSection />

        <TitleParagraphButton
          title="Nom de domaine .ma gratuit"
          paragraphs={[
            `<span style="color: #022545;">Pour finaliser l’enregistrement d’un nom de domaine Maroc contenant un terme réservé, merci de nous transmettre les informations suivants en ouvrant un <span style="text-decoration: underline;"><a style="color: #022545; text-decoration: underline;" href="https://my.hostino.com/submitticket.php" rel="noopener"><b>ticket de support</b></a></span> :</span>`,
            <ul className="list-disc flex flex-col gap-y-4 mb-[40px] md:pl-[50px] pl-[30px]">
              <li>
                <span>
                  Nom de l’entreprise ou organisme pour lequel ce nom de domaine
                  va être réservé
                </span>
              </li>
              <li>
                <span>
                  Email, adresse postale et N° de téléphone de l’entreprise
                </span>
              </li>
              <li>
                <span>
                  La raison pour laquelle ce domaine sera enregistré (avec tous
                  les détails possibles pour convaincre l’ANRT de vous
                  enregistrer ce domaine)
                </span>
              </li>
              <li>
                <span>
                  <span style={{ textDecoration: "underline;" }}>
                    <a
                      style={{ textDecoration: "underline" }}
                      href="https://www.hostino.ma/Examen_Prealable_nom_de_domaine_maroc.pdf"
                    >
                      Formulaire
                    </a>
                  </span>{" "}
                  rempli, signé et cacheté, disponible sur via ce{" "}
                  <a href="https://www.hostino.ma/Examen_Prealable_nom_de_domaine_maroc.pdf">
                    <u>lien</u>
                  </a>
                  .
                </span>
              </li>
            </ul>,
          ]}
          buttonText="Commencer maintenant"
          arrowButton={true}
          buttonHref="#ma"
        />

        <FAQSection faqData={faqData} title="FAQ - Nom de domaine Maroc" />
        <ServiceProximite page="nom-de-domaine" />
        <StartsRatingYellowFooter totalVotes={323} />
      </main>
    </>
  );
};

export default NomDeDomaineMaPage;
