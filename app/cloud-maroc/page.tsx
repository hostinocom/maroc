import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import SixCards from "../components/commonSections/SixCards";
import FAQSection from "../components/commonSections/FaqSection";
import StarRating from "../components/ui/StartRatingFooter";
import HeroHeadingPages from "../components/ui/heroHeadingPages";
import TrustedBySection from "../components/sections/TrustedBySection";
import PromoBanner from "../components/ui/PromoBanner";
import HostingSolutionsCards from "../components/sectionsCloudMarocPage/HostingSolutionsCards";
import ServerVps from "../components/sectionsCloudMarocPage/ServerVps";
import PlansPack from "../components/sectionsCloudMarocPage/PlansPack";
import ContactForm from "../components/commonSections/ContactForm";

const title = "Cloud Maroc | Sécurité et souveraineté des données"
const description =  "Cloud Maroc. Solution Cloud de souveraineté numérique, conforme aux obligations légales d’hébergement des données sur le Cloud au Maroc."
const imageUrl = "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png" 
const canonical_url = "https://www.hostino.ma/cloud-maroc/"
const og_alt = "Cloud Maroc"

const faqData = [
  {
    question: "Qu’est-ce qu’un cloud souverain au Maroc ?",
    answers: [
      "Un Cloud souverain au Maroc désigne l’hébergement des données dans un datacenter situé sur le territoire national, garantissant que ces données restent sous le contrôle des juridictions marocaines, en parfaite conformité avec la loi 09-08 sur la protection des données personnelles ainsi qu’avec les recommandations de la CNDP.",
    ],
  },
  {
    question: "À qui s’adresse l’hébergement Cloud souverain au Maroc ?",
    answers: [
      "Le Cloud souverain s’adresse à <b>toute entité manipulant des données sensibles ou critiques au Maroc</b>, qu’il s’agisse d’organismes publics ou d’entreprises privées. Dans des secteurs allant du gouvernement à la santé, en passant par la finance, les télécoms, l’éducation, l’industrie ou la justice, la souveraineté des données apporte des garanties indispensables : conformité à la législation marocaine, protection renforcée contre les menaces et ingérences externes, et conservation de la maîtrise sur les informations stratégiques.",
      "Chaque domaine y trouve un intérêt particulier – protection de la vie privée des citoyens, sécurité nationale, confidentialité des affaires ou encore avantage compétitif – illustrant pourquoi le Cloud souverain est aujourd’hui un pilier de la stratégie numérique du Royaume.",
    ],
  },
  {
    question: "Quels sont les avantages du cloud souverain au Maroc ?",
    answer: (
      <>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-2">
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
            <span>Conformité réglementaire nationale</span>
          </li>
          <li className="flex items-start gap-2">
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
            <span>Accès à des services numériques sécurisés localement</span>
          </li>
          <li className="flex items-start gap-2">
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
              Protection contre les cybermenaces avec accompagnement de
              l’Autorité nationale
            </span>
          </li>
          <li className="flex items-start gap-2">
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
              Opportunités pour les acteurs du secteur numérique local (audit,
              cybersécurité, infrastructure)
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "C'est quoi la différence entre un hébergement mutualisé et un Cloud VPS?",
    answers: [
      "Notre solution de Cloud mutualisé repose sur le partage des ressources système (CPU, RAM, etc.) entre plusieurs sites hébergés sur le même serveur.",
      "En revanche, avec le VPS Cloud, vous bénéficiez de ressources dédiées, garanties et isolées. Sur la plateforme mutualisée, nous prenons en charge l’ensemble de la configuration, notamment la sécurité et l’environnement d’hébergement. En revanche, les utilisateurs d’un VPS Cloud sont responsables de ces aspects techniques, sauf s’ils choisissent de les déléguer à nos experts.",
    ],
  },
  {
    question: "Quel est le délai de livraison de mon pack mutualisé ?",
    answers: [
      "Il n’y a aucun retard dans la livraison de votre pack d’hébergement Cloud Maroc.",
      "Le délai dépend principalement du moyen de paiement utilisé. Par exemple, un paiement par carte bancaire permet une activation instantanée de votre pack.",
    ],
  },
  {
    question: "Quel est le délai de livraison de mon serveur Cloud VPS ?",
    answers: [
      "Les offres de serveurs VPS Cloud Maroc sont configurées sur mesure afin de répondre aux besoins spécifiques de chaque client. Leur délai de livraison dépend à la fois du moyen de paiement utilisé et de la rapidité avec laquelle vous communiquez les détails de votre demande à discuter préalablement avec notre équipe commerciale.",
    ],
  },
];

const hostingFeatures = [
  {
    image: "cloud-maroc/hebergeur-marocain.jpg",
    alt: "Souveraineté numérique",
    title: "Souveraineté <span>numérique</span>",
    description: `
      Nos serveurs Cloud sont hébergés dans un datacenter situé au Maroc,
      en conformité avec les exigences de souveraineté numérique, les obligations légales d’hébergement local,
      et les normes internationales de sécurité et de fiabilité (<b>certifiés Tier III</b>).
    `,
  },
  {
    image: "cloud-maroc/adresse-ip-maroc.png",
    alt: "Adresse IP marocaine",
    title: "Adresse <span>IP marocaine</span>",
    description: `
      Notre solution de cloud souverain vous permet d’obtenir une adresse IP marocaine attribuée à un serveur hébergé
      dans un datacenter <b>situé sur le territoire marocain</b>, avec un temps de réponse très court
      et une conformité aux normes de la CNDP.
    `,
  },
  {
    image: "cloud-maroc/coonectivite-haut-debit.png",
    alt: "Connectivité Haut-Débit",
    title: "Connectivité <span>Haut-Débit</span>",
    description: `
      Grâce à nos partenariats avec les <b>opérateurs télécoms</b> locaux au Maroc,
      nous pouvons proposer une connexion Internet haut débit, avec une faible latence
      et un débit personnalisable allant de 1 Mbps à 100 Mbps.
    `,
  },
  {
    image: "cloud-maroc/services-manages.png",
    alt: "Services managés",
    title: "Services <span>Managés</span>",
    description: `
      Avec nos solutions d’infogérance cloud souverain au Maroc, vous bénéficiez d’une équipe Ops de proximité,
      <b>experte en technologies Cloud et DevOps</b>, pour assurer la gestion opérationnelle
      de vos serveurs cloud localisés au Maroc.
    `,
  },
  {
    image: "cloud-maroc/securite-monitoring.png",
    alt: "Monitoring et sécurité",
    title: "Monitoring et <span>Sécurité</span>",
    description: `
      Notre service de sécurité cloud Maroc offre une protection complète contre les menaces internes et externes,
      assure une gestion rigoureuse des accès, renforce la gouvernance et la conformité des données,
      tout en garantissant <b>une reprise rapide en cas de sinistre</b>.
    `,
  },
  {
    image: "cloud-maroc/conformite-anrt.png",
    alt: "Conformité réglementaire",
    title: "Conformité <span>réglementaire</span>",
    description: `
      En optant pour un cloud souverain marocain, vous assurez l’hébergement et la gestion de vos données critiques
      en toute conformité avec la <b>loi 09-08</b> relative à la protection des données personnelles,
      tout en respectant les recommandations de la <b>CNDP</b>.
    `,
  },
];

// const hostingPlans = [
//   {
//     id: 1,
//     name: "Business",
//     subtext:
//       "",
//     price_original: "1199 DH/an",
//     price_discounted: "999 DH/an",
//     save: "20%",
//     price_ttc: "Pour 1 an, vous payez <b>1198,8 DH TTC.</b>",
//     performance_stars: 4,
//     more_performance:false,
//     order: {
//       text: "Commander",
//       href: "https://my.hostino.com/order.php?pid=79&language=french&country=MA",
//     },
//     features: {
//       seo_optimized: true,
//       free_domain: true,
//       wordpress_preinstalled: true,
//       control_panel: "cPanel®",
//       ssl: "Gratuit et illimité",
//       disk_space: "50 GB NVMe",
//       bandwidth: "Illimitée",
//       databases: "Illimitées",
//       email_accounts: 10,
//       subdomains: 10,
//       backups: "JetBackup",
//     },
//     most_popular: {
//       text: "Le plus vendu",
//       is_most_popular: true,
//     },
//   },
//   {
//     id: 2,
//     name: "Business Plus",
//     subtext: "",
//     price_discounted: "1800 DH/an",
//     price_ttc: "Pour 1 an, vous payez <b>2160 DH TTC.</b>",
//     performance_stars: 5,
//     more_performance: false,
//     order: {
//       text: "Commander",
//       href: "https://my.hostino.com/order.php?pid=80&language=french&country=MA",
//     },
//     features: {
//       seo_optimized: true,
//       free_domain: true,
//       wordpress_preinstalled: true,
//       control_panel: "cPanel®",
//       ssl: "Gratuit et illimité",
//       disk_space: "100 GB NVMe",
//       bandwidth: "Illimitée",
//       databases: "Illimitées",
//       email_accounts: 50,
//       subdomains: 50,
//       backups: "JetBackup",
//     },
//     most_popular: {
//       text: "",
//       is_most_popular: false,
//     },
//   },
//   {
//     id: 3,
//     name: "Business <i>Pro</i>",
//     subtext:
//       "",
//     price_discounted: "3000 DH/an",
//     price_ttc: "Pour 1 an, vous payez <b>3600 DH TTC.</b>",
//     performance_stars: 5,
//     more_performance: false,
//     order: {
//       text: "Commander",
//       href: "https://my.hostino.com/order.php?pid=81&language=french&country=MA",
//     },
//     features: {
//       seo_optimized: true,
//       free_domain: true,
//       wordpress_preinstalled: true,
//       control_panel: "cPanel®",
//       ssl: "Gratuit et illimité",
//       disk_space: "200 GB NVMe",
//       bandwidth: "Illimitée",
//       databases: "Illimitées",
//       email_accounts: "Illimitées",
//       subdomains: "Illimitées",
//       backups: "JetBackup",
//     },
//     most_popular: {
//       text: "",
//       is_most_popular: false,
//     },
//   },
// ];

export default async function CloudMarocPage() {
  return (
    <main>
      
      <HeroHeadingPages
        smallTitle="Cloud Maroc"
        bigTitle="Commander un Cloud souverain au Maroc"
      />

      <div className="bg-gray-200 lg:pb-[100px] pb-[80px]">
        <div className="container">
          <div className="md:px-[220px]  text-center">
            <p className="paragraph">
              Hébergez vos données sensibles, e-mails, sites web et applications
              dans <b>un datacenter au Maroc </b>🇲🇦. Avec Hostino®, profitez de
              l’offre de
              <b>Cloud souverain</b> la plus accessible et avantageuse du
              Royaume.
            </p>
          </div>
        </div>
      </div>

      <ContactForm
        title={
          <>
            Remplissez vos infos, <br className="lg:hidden block " />
            <span className="border-bottom">on s’occupe du reste !</span>
          </>
        }
      />

      <HostingSolutionsCards />

      <PromoBanner
        icon="⚠️"
        text='Nos offres Cloud Maroc sont destinées aux clients qui souhaitent que leurs données <b>soient hébergées sur le territoire marocain</b>. Si vous ne faites pas partie de cette catégorie, découvrez nos offres <span style="text-decoration: underline;"><a href="https://www.hostino.ma/">d’hébergement web</a></span> situées dans des <b>datacenters internationaux</b>.'
        className="lg:w-[70%]"
      />

      <TextLeftImageRight
        title="Hébergez vos données sensibles au Maroc"
        paragraphs={[
          "Que vous soyez une entreprise du secteur financier, de la santé, de <b>l’administration publique</b>, ou toute organisation traitant des données sensibles ou soumise à des régulations strictes, choisir un serveur Cloud hébergé au Maroc vous offre une solution conforme aux réglementations locales et permet de réduire significativement les risques liés à la <b>souveraineté des données.</b>",
          'Cette solution garantit que vos données restent sous la juridiction marocaine, tout en assurant une conformité totale avec la <span style="text-decoration: underline;"><a href="https://www.dgssi.gov.ma/fr/loi-09-08-relative-la-protection-des-personnes-physiques-legard-du-traitement-des" rel="noopener"><b>loi 09-08</b></a></span> relative à la protection des données personnelles, la <span style="text-decoration: underline;"><a href="https://www.dgssi.gov.ma/fr/loi-ndeg-0520-relative-la-cybersecurite" rel="noopener"><b>loi 05-20</b></a></span> sur la cybersécurité, ainsi qu’avec les recommandations de la CNDP.',
          "Appelez le +212 531-031-186 et confiez l’hébergement de vos données sensibles à un prestataire de confiance basé au Maroc.",
        ]}
        imageSrc="/images/cloud-maroc/cloud-maroc.jpg"
        imageAlt="Cloud au Maroc"
        consultButtonTextExiste={false}
      />
      <TrustedBySection classNameImage="md:w-[65%]  w-[100%] mx-auto h-auto" />

      <SixCards
        title={"Avantages de l'hébergement <br/> Cloud Maroc"}
        alignment="center"
        features={hostingFeatures}
      />

      <div className="lg:pt-[120px]  bg-gray-200 pt-[50px] pb-[30px]">
        <div className="container text-center flex flex-col gap-7 items-center">
          <h2 className="max-big-title leading-[65px] mb-[20px] tracking-[-3.1px]">
            Hébergement <br className="md:block hidden" />
            <span className="border-bottom">Mutualisé</span> au Maroc
          </h2>
          <p className="paragraph lg:px-[200px] pr-[0]">
            L’hébergement mutualisé de Hostino est une solution économique et
            performante pour héberger vos sites web en toute simplicité sur un
            cloud souverain. En partageant les ressources du serveur, vous
            optimisez vos coûts tout en garantissant la{" "}
            <b>conformité avec la réglementation </b> en vigueur dans le
            Royaume.
          </p>
        </div>
      </div>

      <PlansPack />

      <TextLeftImageRight
        title="Qu’est-ce que le Cloud Maroc ?"
        paragraphs={[
          'Le Cloud Maroc (<span style="text-decoration: underline;"><a href="https://www.hostino.ma/en/cloud-morocco/">Cloud Morocco</a></span>) désigne l’ensemble des infrastructures, services et solutions de stockage et de traitement de données numériques opérés localement dans des data centers situés au Maroc. Il répond à une ambition stratégique du pays : renforcer sa <span style="text-decoration: underline;"><a href="https://www.ires.ma/iip/souverainete-numerique/" rel="noopener"><b>souveraineté numérique</b></a></span> en développant des capacités technologiques nationales et en réduisant la dépendance vis-à-vis des solutions étrangères.',
          "Ce modèle localisé permet une meilleure maîtrise des données sensibles, qu’elles soient <b>d’ordre gouvernemental</b>, industriel ou personnel. Grâce à une approche rigoureuse de la gouvernance des données, les flux numériques sont encadrés de manière transparente, conforme aux exigences de traçabilité, de confidentialité et d’intégrité. Le Cloud Maroc contribue ainsi à renforcer la cybersécurité du pays, en intégrant des protocoles stricts de <b>surveillance et de défense contre les menaces</b> numériques, tout en développant des compétences locales en sécurité informatique.",
        ]}
        imageSrc="images/10/cloud-souverain-maroc.jpg"
        imageAlt="Cloud souverain au Maroc"
        consultButtonTextExiste={false}
      />

      <ServerVps />

      <FAQSection faqData={faqData} title={"FAQ - Cloud Maroc"} />
      <StarRating />
    </main>
  );
}
