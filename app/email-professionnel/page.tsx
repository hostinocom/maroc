import Link from "next/link";
import StartyComparison from "../components/sectionsStartyPage/StartyComparison";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import SixCards from "../components/commonSections/SixCards";
import FAQSection from "../components/commonSections/FaqSection";
import StarRating from "../components/ui/StartRatingFooter";
import HeroHeadingPages from "../components/ui/heroHeadingPages";
import TrustedBySection from "../components/sections/TrustedBySection";
import AnimatedButton from "../components/ui/AnimatedButton";
import ContactForm from "../components/commonSections/ContactForm";
import EmailCreationSteps from "../components/sectionsEmailProfessionnelPage/EmailCreationSteps";
import PlansEmail from "../components/sectionsEmailProfessionnelPage/PlansEmail";
import ServiceProximite from "../components/commonSections/ServiceProximite";
import StarRatingYellowFooter from "../components/ui/StartsRatingYellowFooter";
import Head from "next/head";
import { main_schema } from "../schema";

const title = "Email professionnel - Solution Mail Pro rapide et chiffrée"
const description =  "Email professionnel Maroc. Créer votre email Pro avec Hostino. Solution de messagerie d&#039;entreprise nom@entreprise.ma ✉️ dès 25 DH/mois"
const imageUrl = "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png" 
const canonical_url = "https://www.hostino.ma/email-professionnel"
const og_alt = "Email professionnel"

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
    question: "Quels sont les avantages d'utiliser Maily® ?",
    answers: [
      "Une adresse email professionnelle (ex. votre.nom@votreentreprise.ma) vous permet de communiquer efficacement avec vos clients, fournisseurs et collaborateurs — aussi bien au Maroc qu’à l’étranger.",
      "Elle renforce la crédibilité de votre entreprise, inspire confiance, protège vos échanges et reflète une image sérieuse et organisée.",
    ],
  },
  {
    question:
      "Quelle est la différence entre Maily® et les adresses email fournies avec l’hébergement web ?",
    answers: [
      "Maily® est une solution Premium d’email cloud, conçue pour les entreprises qui recherchent performance, sécurité et fiabilité. Hébergée sur une infrastructure dédiée, elle respecte les normes de sécurité les plus strictes, garantit une rapidité optimale, et offre une expérience de collaboration fluide, sans problèmes d’envoi ni de réception.",
      "En revanche, les adresses email incluses dans les hébergements web classiques (comme celles via Webmail sur cPanel) sont souvent limitées en termes de performances, d’espace de stockage, de délivrabilité et de support. Elles conviennent aux usages de base, mais ne sont pas optimisées pour les besoins professionnels exigeants.",
    ],
  },
  {
    question: "Est-ce que les plans Maily® sont compatibles avec Outlook ?",
    answers: [
      "Oui. Maily® est compatible avec tous les logiciels de messagerie (Outlook, Thunderbird, Apple Mail), sur toutes les plateformes (Windows, macOS, Linux).",
    ],
  },
  {
    question: "Puis-je utiliser Maily® sur mon smartphone ?",
    answers: [
      "Oui. Maily® est compatible avec tous les principaux logiciels de messagerie sur smartphones Android et Apple, tels que Outlook, Apple Mail, BlueMail et Spark.",
    ],
  },
  {
    question: "Puis-je changer ma formule à tout moment ?",
    answers: [
      "Oui. Parce que Hostino est conscient que vos besoins évoluent, nous avons simplifié la mise à niveau de vos formules, sans interruption de service.",
      "Notre système calcule automatiquement le montant à payer au prorata et applique la mise à niveau dès la validation de votre commande.",
    ],
  },
  {
    question:
      "Quelles sont les mesures de sécurité que vous prenez pour protéger ma messagerie ?",
    answer: (
      <>
        <p className="mb-4">
          Tous les plans de messagerie Maily intègrent un système de sécurité
          multicouche, comprenant un antivirus, un antispam, un antimalware et
          une protection contre le phishing.
        </p>
        <p className="mb-4">
          En complément de ces dispositifs, nous vous proposons plusieurs
          protocoles pour renforcer la sécurité de votre messagerie et celle de
          vos collaborateurs :
        </p>
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
            <span>
              Obligation de changer le mot de passe après la première connexion
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
              Starty® pro, commencez comme un pro, prêt à passer au niveau
              supérieur.
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
            <span>Restriction d’accès par adresse IP</span>
          </li>
        </ul>
        <p>
          En cas d’activité suspecte ou abusive, notre système de protection la
          détectera automatiquement, et l’administrateur du compte en sera
          immédiatement averti.
        </p>
      </>
    ),
  },
];

const hostingFeatures = [
  {
    image: "05/05-outlook.jpg",
    alt: "Compatible tout logiciel",
    title: "Compatible tout <span>logiciel</span>",
    description: `
      La solution Maily® est compatible avec tous les logiciels de messagerie,
      tels qu'<b>Outlook</b> ou <b>Thunderbird</b>, avec une configuration facile et rapide.
    `,
  },
  {
    image: "05/email-pro-compatible-apple.jpg",
    alt: "Compatible tout appareil",
    title: "Compatible tout <span>appareil</span>",
    description: `
      Configurez facilement votre e-mail professionnel sur tous les types de mobiles
      (<b>Android, iPhone iOS</b>, Huawei ou tout autre appareil et système).
    `,
  },
  {
    image: "05/hebergeur-marocain.jpg",
    alt: "Email Pro @entreprise.ma",
    title: "Email Pro <span>@entreprise.ma</span>",
    description: `
      Créez des adresses email professionnelles pour votre <b>entreprise marocaine</b>
      en utilisant un <b>nom de domaine .ma</b>.
    `,
  },
  {
    image: "05/email-professionnel-stockage.jpg",
    alt: "Adresse mail pro jusqu'à 100GB",
    title: "Adresse mail pro <span>Jusqu'à 100GB</span>",
    description: `
      Le stockage sécurisé de la solution Maily® est évolutif et hautement adaptable,
      allant de <b>8 à 100 Go par compte</b>.
    `,
  },
  {
    image: "05/email-professionnel-securite.jpg",
    alt: "Anti-virus Anti-spam",
    title: "Anti-virus <span>Anti-spam</span>",
    description: `
      Maily® dispose d'un système de sécurité avancé avec surveillance continue
      et détection en <b>temps réel des spams et virus</b>.
    `,
  },
  {
    image: "05/support-maroc.jpg",
    alt: "Assistance Experte",
    title: "Assistance <span>Experte</span>",
    description: `
      Un service de support technique et commercial disponible 24h/24,
      par téléphone, e-mail et <b>ticket de support</b>.
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

export default async function EmailProfessionnelPage() {
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
          smallTitle="Email professionnel Maroc"
          bigTitle="Adresse email professionnelle pour votre entreprise"
          lineGreen={true}
        />
        <div className="bg-gray-200 md:pb-[100px] pb-[80px]">
          <div className="container">
            <div className=" text-center">
              <p className="paragraph">
                Créez votre Email Professionnel Maroc, associés à votre nom de
                domaine, <b>à partir de 25 DH/mois.</b>
              </p>
              <Link href={"#offres"} className="">
                <AnimatedButton
                  text={"Voir nos offres"}
                  hoverText="Voir nos offres"
                  bgColor={"bg-transparent"}
                  textColor={"text-title"}
                  hoverBgColor={"bg-transparent"}
                  className="text-title border-3 border-primary rounded-sm px-[40px] text-[18px] font-[600] py-[10px] "
                  arrowButton={true}
                  colorArrow={"#022545"}
                />
              </Link>
            </div>
          </div>
        </div>

        <ContactForm
          title={
            <>
              {" "}
              Remplissez vos infos, <br className="lg:hidden block " />
              <span className="border-bottom">on s'occupe du reste !</span>
            </>
          }
        />

        <TextLeftImageRight
          title="Maily®, la révolution de la messagerie Pro au Maroc"
          paragraphs={[
            "Hébergez votre messagerie professionnelle sur un service <b>Cloud sécurisé et chiffré</b>, garantissant la confidentialité de vos informations et une communication rapide et fiable.",
            'Cette solution garantit que vos données restent sous la juridiction marocaine, tout en assurant une conformité totale avec la <span style="text-decoration: underline;"><a href="https://www.dgssi.gov.ma/fr/loi-09-08-relative-la-protection-des-personnes-physiques-legard-du-traitement-des" rel="noopener"><b>loi 09-08</b></a></span> relative à la protection des données personnelles, la <span style="text-decoration: underline;"><a href="https://www.dgssi.gov.ma/fr/loi-ndeg-0520-relative-la-cybersecurite" rel="noopener"><b>loi 05-20</b></a></span> sur la cybersécurité, ainsi qu’avec les recommandations de la CNDP.',
            "Appelez le +212 531-031-186 et confiez l’hébergement de vos données sensibles à un prestataire de confiance basé au Maroc.",
          ]}
          imageSrc="images/email-professionnel/email-professionnel-maroc.jpg"
          imageAlt="Email professionnel Maroc"
          consultButtonTextExiste={false}
        />
        <TrustedBySection classNameImage="md:w-[65%]  w-[100%] mx-auto h-auto" />

        <EmailCreationSteps />

        <PlansEmail
          titleExiste={true}
          title="Choisissez votre plan email professionnel Maroc"
          id="plans"
        />

        <SixCards
          title={
            "Pourquoi choisir Maily® pour votre<br /> adresse email professionnelle ?"
          }
          alignment="left"
          features={hostingFeatures}
        />

        <TextLeftImageRight
          title="Email Pro au Maroc"
          paragraphs={[
            "Créez des adresses e-mail professionnelles pour vos collaborateurs à Tétouan, <b>facilement et en quelques clics</b> avec Hostino®.",
            "Maily est la solution de messagerie premium pensée pour les entreprises exigeantes, en quête d’un service fiable, sécurisé et hautement performant pour accompagner leur développement. Grâce à notre <b>infrastructure Cloud</b>, vous bénéficiez d’une sécurité avancée, d’une productivité optimisée et d’outils collaboratifs puissants pour une communication interne et externe fluide et efficace.",
            "Notre équipe est à votre écoute du lundi au vendredi de 9h à 18h pour répondre à toutes vos questions et vous aider à configurer votre messagerie professionnelle au Maroc. Appelez-nous au +212 (05) 31 03 11 86.",
          ]}
          imageSrc="/images/05/email-pro-maroc.jpg"
          imageAlt="Email Pro au Maroc"
          consultButtonTextExiste={false}
        />

        <TextLeftImageRight
          title="Sécurité et confidentialité incomparables"
          paragraphs={[
            "La solution Maily, conçue par Hostino, est le choix idéal pour les entreprises marocaines en quête d’une plateforme de collaboration <b>conforme aux normes</b>, dotée de mesures de sécurité avancées et facile à utiliser.",
            'De plus, nous mettons en place des protocoles d’authentification reconnus comme <span style="text-decoration: underline;"><a href="https://www.cloudflare.com/fr-fr/learning/dns/dns-records/dns-dkim-record/" rel="noopener">DKIM</a></span>, SPF et DMARC.&nbsp;<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Ces technologies permettent de protéger l’identité de votre domaine, d’éviter l’usurpation d’adresse email, et d’assurer une meilleure </span><b style="font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">délivrabilité de vos emails.</b>',
            "Nous proposons également plusieurs options avancées pour renforcer davantage la sécurité de vos comptes email, notamment :",
            <ul className="pl-[30px] flex flex-col gap-5">
              <li>
                L’activation obligatoire de l’authentification à deux facteurs
                (2FA)
              </li>
              <li>
                La restriction d’accès par adresse IP, permettant par exemple de
                limiter l’accès aux boîtes mail uniquement depuis les locaux de
                l’entreprise.
              </li>
            </ul>,
          ]}
          imageSrc="/images/email-professionnel/email-professionnel-securise.jpg"
          imageAlt="Email professionnel Hostino sécurisé au Maroc"
          consultButtonTextExiste={false}
        />

        <TextLeftImageRight
          title="Email Professionnel Maroc : Qu'est-ce que c'est ?"
          paragraphs={[
            `Un email professionnel est une adresse électronique personnalisée utilisant le nom de domaine d’une entreprise — par exemple, <b>contact@votreentreprise.ma</b> — au lieu d’un service gratuit comme Gmail, <span style="text-decoration: underline;"><a href="https://signup.live.com/?lic=1" rel="noopener">Hotmail</a></span> ou Yahoo. Cela renforce la crédibilité de l’entreprise auprès des clients et partenaires, tout en véhiculant une image plus sérieuse et professionnelle.`,
            `<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Aujourd’hui, au Maroc comme ailleurs, disposer d’un email professionnel est devenu un standard incontournable pour les entreprises souhaitant </span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"><b>communiquer de manière professionnelle</b></span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"> avec leurs clients, partenaires et collaborateurs, tant au niveau national qu’international.</span>`,
            `Les offres low-cost proposées par certains confrères peuvent présenter des risques : failles de sécurité, <b>mauvaise délivrabilité</b> ou perte de données. <b>Prenez le temps d’évaluer</b> les options disponibles et optez pour une solution de messagerie professionnelle à la hauteur des enjeux de votre entreprise.`,
          ]}
          imageSrc="/images/email-professionnel/messagerie-professionnelle.jpg"
          imageAlt="Adresse e-mail professionnelle"
          consultButtonTextExiste={false}
        />

        <FAQSection
          faqData={faqData}
          title={"FAQ - Email Professionnel Maroc"}
        />

        <ServiceProximite page="email-professionel" />

        <StarRatingYellowFooter totalVotes={34} />
      </main>
    </>
  );
}
