import HeroSection from "../components/commonSections/HeroSection";
import ContactForm from "../components/commonSections/ContactForm";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";

import NationalCoverage from "../components/commonSections/NationalCoverage";
import FAQSection from "../components/commonSections/FaqSection";
import TextLeftVideoRight from "../components/commonSections/TextLeftVideoRight";
import GmbAdvantages from "../components/commonSections/GmbAdvantage";
import HostingImpactSection from "../components/sectionsGoogleAdsMarocPage/HostingImpactSection";
import SeoServiceCards from "../components/sectionsGoogleAdsMarocPage/SeoServiceCards";
import { ClaimReviewJsonLd } from "next-seo";

const title = "Agence Google Ads Maroc | Publicité Google et Sponsoring"
const description =  "Google Ads Maroc. Hostino accompagne les professionnels et les marques dans la gestion des campagnes Google Ads au Maroc ☎️ 0663 75 09 08"
const imageUrl = "https://maroc-1hp.pages.dev/images/google-ads-maroc/google-ads-maroc.png" 
const canonical_url = "https://www.hostino.ma/google-ads-maroc"
const og_alt = "Agence Google Ads Maroc"

const faqData = [
  {
    question:
      "Comment fonctionne une campagne Google Ads pour les entreprises au Maroc ?",
    answers: [
      "Une campagne Google Ads repose sur un système d'enchères publicitaires où vos annonces apparaissent lorsque des internautes recherchent des mots-clés liés à vos produits ou services. Contrairement aux méthodes publicitaires traditionnelles, vous ne payez pas simplement pour la diffusion mais uniquement lorsqu'un utilisateur clique sur votre annonce. Cela garantit un budget mieux maîtrisé et des résultats mesurables.</p>",
      "Au Maroc, les campagnes sont adaptées aux comportements locaux : bilinguisme (arabe/français), recherche mobile en forte croissance, et importance de la géolocalisation pour toucher les clients proches.</p>",
      "Grâce à ce ciblage précis, Google Ads aide les entreprises marocaines à se positionner devant des prospects qualifiés, au moment exact où ils expriment un besoin.",
    ],
  },
  {
    question:
      "Combien de temps faut-il pour obtenir des résultats avec Google Ads ?",
    answers: [
      "L'avantage de Google Ads est sa rapidité. Dès les premiers jours, une entreprise peut commencer à recevoir des clics, des appels ou des visites sur son site.",
      "Cependant, pour obtenir des résultats solides et stables, une phase d'optimisation est nécessaire.",
      "Cette période dure généralement entre un et trois mois et consiste à analyser les mots-clés les plus performants, ajuster les annonces et tester différentes stratégies d'enchères.",
      "Au Maroc, où la concurrence varie fortement d'un secteur à l'autre (par exemple l'immobilier ou la restauration par rapport aux services de niche), cette phase d'apprentissage est essentielle pour garantir un retour sur investissement durable.",
    ],
  },
  {
    question: "Est-ce que vous gérez aussi la publicité YouTube Ads ?",
    answers: [
      "Oui, nous accompagnons nos clients dans la mise en place de campagnes vidéo sur YouTube, un canal incontournable au Maroc où la consommation de vidéos est en constante progression.",
      "YouTube Ads permettent de diffuser des vidéos publicitaires avant, pendant ou après le contenu regardé par l'internaute.",
      "Ce format est puissant pour augmenter la notoriété d'une marque, lancer un nouveau produit ou cibler des audiences spécifiques comme les jeunes connectés, les professionnels ou les familles.",
      "Nous concevons des vidéos adaptées aux habitudes locales, en tenant compte de la langue, du ton et de la culture, afin de maximiser l'impact.",
    ],
  },
  {
    question:
      "Pourquoi chaque entreprise au Maroc devrait-elle allouer un budget mensuel Google Ads ?",
    answers: [
      "Allouer un budget mensuel à Google Ads est essentiel pour assurer une visibilité continue sur un marché marocain de plus en plus digitalisé.",
      "Les consommateurs recherchent quotidiennement des produits et services sur Google, YouTube et les sites partenaires.",
      "Une présence régulière permet à votre entreprise d'apparaître en tête des résultats, d'attirer des clients qualifiés et de rester compétitive face à vos concurrents.",
      "Un budget récurrent, même modeste, permet d'éviter les coupures de campagnes, de maintenir la notoriété de votre marque et d'analyser les performances pour améliorer vos résultats mois après mois.",
      "Grâce à Google Ads, vous pouvez cibler avec précision vos prospects selon leur ville, leur langue ou leur comportement en ligne, ce qui maximise l'efficacité de chaque dirham investi.",
      "En résumé, un budget mensuel Google Ads au Maroc n'est pas une dépense mais un investissement stratégique, indispensable pour générer un flux constant de prospects et développer durablement votre activité.",
    ],
  },
  {
    question:
      "Est-ce que Google Ads est adapté aux petites et moyennes entreprises",
    answers: [
      "Absolument. Google Ads n'est pas réservé aux grandes entreprises.",
      "Les petites et moyennes structures, tout comme les autoentrepreneurs, peuvent cibler une zone géographique précise et concentrer leurs efforts sur les mots-clés les plus pertinents.",
      "Cela permet à un comptable, un médecin, un plombier, un hôtel, une agence de voyage ou tout autre professionnel d'être visible au bon moment, exactement lorsque des clients potentiels recherchent leurs services.",
      "Grâce à sa grande flexibilité, Google Ads s'adapte à toutes les tailles d'entreprise et à tous les objectifs : attirer de nouveaux clients, augmenter la visibilité locale ou développer des ventes en ligne.",
    ],
  },
  {
    question:
      "J'ai essayé de gérer moi-même Google Ads, pourquoi ça n'a pas marché ?",
    answers: [
      "Gérer Google Ads sans expérience peut rapidement devenir un véritable casse-tête. La plateforme exige une bonne maîtrise du choix des mots-clés, des enchères, du ciblage géographique, mais aussi du suivi des conversions. Beaucoup d'entreprises qui tentent de se lancer seules dépensent leur budget trop vite sur des clics peu qualifiés, sans obtenir de clients réels. Un paramétrage mal fait peut également réduire fortement la visibilité : même si vous payez, Google juge vos annonces moins pertinentes et les affiche beaucoup moins.",
      "Avec notre agence Google Ads, chaque dirham de votre budget est investi de manière stratégique.",
      "Nos experts étudient votre marché local, sélectionnent les mots-clés les plus rentables (par exemple : plombier Rabat, comptable Casablanca), et ajustent vos campagnes en continu. Résultat : plus de visibilité, plus de réservations, et surtout une clientèle régulière qui vous permet de développer votre activité de façon durable.",
    ],
  },
  {
    question: "Faites-vous du sponsoring pour ma fiche Google My Business ?",
    answers: [
      'Oui, absolument. Nous aidons les entreprises locales à promouvoir leur fiche Google My Business via des campagnes sponsorisées. Cela permet à votre établissement d\'apparaître tout en haut des résultats Google Maps, avec plus de visibilité que vos concurrents directs. Lorsqu\'un utilisateur tape "restaurant italien Rabat", votre fiche peut être mise en avant, accompagnée d\'appels à l\'action comme "Appeler" ou "Itinéraire". En complément, nous optimisons aussi votre fiche : ajout de photos attractives, gestion des avis clients, mise à jour régulière des horaires et des services. Ce travail combiné (optimisation + sponsoring) améliore considérablement votre crédibilité et attire davantage de clients potentiels directement dans votre restaurant.',
    ],
  },
  {
    question:
      "Comment faire pour que mon restaurant italien sorte numéro un à Rabat ?",
    answers: [
      "Avec Google Ads, vous pouvez apparaître en première position sur Google dès qu'un internaute recherche un mot-clé comme restaurant italien Rabat ou meilleure pizzeria à Rabat.",
      "En choisissant des mots-clés précis, en paramétrant correctement la zone géographique (par exemple uniquement Rabat et ses quartiers), vos annonces s'afficheront directement devant vos clients potentiels au moment où ils cherchent où manger.",
      "L'avantage est que vous ne payez que lorsqu'un utilisateur clique sur votre annonce. Cela vous permet de contrôler votre budget et d'obtenir des résultats mesurables rapidement : appels, réservations ou visites dans votre restaurant.",
    ],
  },
];

const advantages = [
  {
    title: "Générez plus de trafic",
    description: `
      En choisissant les bons mots-clés et en diffusant vos annonces auprès d’un public pertinent, 
      vous augmentez non seulement le nombre de visites, mais aussi vos chances de 
      <strong>transformer ces visiteurs en clients</strong>.<br/><br/>
      Notre rôle est de minimiser vos coûts, 
      <strong>adapter les enchères</strong> et maximiser votre retour sur investissement (ROI).
    `,
  },
  {
    title: "Augmentez vos ventes",
    description: `
      Grâce à un ciblage précis et des annonces optimisées, Google Ads vous aide à transformer vos 
      <strong>visites en ventes</strong>.<br/><br/>
      Faites passer votre entreprise au niveau supérieur en attirant des clients réellement 
      <strong>intéressés par vos produits et services</strong>, que ce soit au niveau local ou national.
    `,
  },
  {
    title: "Acquisition de clients",
    description: `
      L’acquisition de clients avec Google Ads au Maroc repose sur une 
      <strong>analyse du marché</strong> et de la <strong>concurrence</strong>, 
      permettant d’identifier les meilleures opportunités et de sélectionner les mots-clés les plus performants 
      afin d’attirer des visites qualifiées et de transformer ces visiteurs en clients réels pour votre entreprise.
    `,
  },
  {
    title: "Présence de marque",
    description: `
      La présence de votre entreprise avec Google Ads est essentielle pour vous positionner dans 
      <strong>l’esprit des clients potentiels</strong> qui recherchent vos produits ou services.<br/><br/>
      Grâce à des campagnes sur Google, <strong>YouTube</strong> et les applications mobiles, 
      votre entreprise peut rester visible auprès des personnes réellement intéressées par ce que vous proposez.
    `,
  },
];

export default async function HomePage() {
  return (
    <main>
      <ClaimReviewJsonLd
        url="https://maroc-1hp.pages.dev/google-ads-maroc/"
        author={{ name: "Hostino" } as any}
        claimReviewed="Google Ads Maroc - Campagnes Publicitaires"
        reviewRating={
          {
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "62",
          } as any
        }
      />
      <HeroSection
        subtitle="Agence Google Ads Maroc"
        title="Agence de publicité Google Ads"
        text="Agence Google Ads Maroc qui vous aide à générer <b>instantanément</b> des appels et des clients."
        emailLabel={{
          textEmail: "CONSULTATION PAR EMAIL ? ?",
          color: "text-primary",
        }}
        email="info@hostino.com"
        imageSrc="/images/google-ads-maroc/google-ads-maroc.png"
        imageAlt="Google My Business au Maroc"
      />

      <ContactForm
        title={
          <>
            Votre stratégie Google Ads <br className="lg:hidden block " />
            <span className="border-bottom">commence ici !</span>
          </>
        }
      />

      <TextLeftImageRight
        title="Agence Google Ads au Maroc"
        paragraphs={[
          "Hostino est une agence Google Ads au Maroc qui accompagne les <b>entreprises de toutes tailles</b> et de tous <b>secteurs</b> dans la gestion et l’optimisation de leurs campagnes sur le Réseau de recherche, YouTube et Display, afin que chaque dirham investi génère des résultats concrets.",
          `<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Nous aidons les </span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"><b>entreprises de toutes tailles</b></span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"> à gagner en visibilité, générer des appels, attirer un trafic qualifié et transformer chaque clic en opportunité de croissance.&nbsp;</span>`,
          "Notre force réside dans notre parfaite compréhension du <b>marché marocain</b> : ses langues, sa culture, ses zones géographiques et ses habitudes de consommation.",
          "Appelez-nous dès maintenant au +212 663 75 09 08 et confiez vos campagnes publicitaires à des experts Google Ads reconnus.",
        ]}
        imageSrc="/images/google-ads-maroc/agence-google-ads.jpg"
        imageAlt="Google My Business au Maroc"
        consultButtonTextExiste={true}
        textButton={"Contactez-nous"}
        href={"https://www.hostino.ma/contact"}
      />

      <SeoServiceCards />

      <TextLeftImageRight
        title="Qu’est-ce qu’une agence Google Ads ?"
        paragraphs={[
          "Une agence Google Ads est une entreprise spécialisée dans la création, la gestion et l’optimisation de campagnes publicitaires sur la plateforme Google Ads.",
          "Son rôle couvre la sélection de mots-clés, la rédaction d’annonces percutantes, la mise en place d’une segmentation précise, le suivi des conversions, ainsi que l’amélioration continue des performances grâce à des ajustements des <b>enchères</b>, de la qualité des annonces et de <b>l’expérience utilisateur sur le site web de l’annonceur</b>.",
          "Notre agence spécialisée en Google Ads se distingue par son professionnalisme dans la création de campagnes rentables pour votre entreprise, aussi bien au niveau local qu’au niveau national partout au Maroc.",
          "Nous combinons expérience, outils avancés et connaissance approfondie du marché marocain afin de garantir des résultats mesurables et durables.",
        ]}
        imageSrc="images/google-ads-maroc/quoi-agence-google-ads-maroc.jpg"
        imageAlt="Qu’est-ce qu’une agence Google Ads Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <section className="lg:mt-[150px] mt-[80px]">
        <div className="container">
          <h2 className="title-section mb-[20px]">
            Comment fonctionne <br />
            Google Ads au Maroc ?
          </h2>

          <p className="paragraph">
            Google Ads au Maroc repose sur un système d’enchères au coût par
            clic (CPC) où les entreprises choisissent leurs mots-clés,
            définissent un budget et diffusent des <b>annonces sur Google</b>,
            YouTube ou le réseau Display. Avec près de 97 % de parts de marché
            pour Google, la plateforme est incontournable pour capter
            l’attention des <b>internautes marocains</b>.
          </p>

          <p className="paragraph">
            Un atout majeur du marché marocain réside dans le prix : le{" "}
            <b>coût par clic est beaucoup plus bas</b> que dans les{" "}
            <b>marchés européens</b>, américains et ceux des pays du Golfe, où
            la concurrence est plus intense et les budgets souvent plus élevés.
            On estime ainsi que le{" "}
            <a
              href="https://support.google.com/google-ads/answer/14074?hl=fr"
              rel="noopener"
            >
              CPC moyen
            </a>{" "}
            au Maroc est jusqu’à 78 % inférieur à celui des États-Unis, ce qui
            permet aux entreprises locales d’obtenir une visibilité importante à
            moindre coût.
          </p>
        </div>
      </section>

      <TextLeftVideoRight
        paragraphs={[
          "L’efficacité dépend toutefois d’une bonne stratégie : choix judicieux des mots-clés, annonces attractives, optimisation des pages d’atterrissage et <b>suivi des conversions</b>. Les secteurs compétitifs comme le tourisme ou l’immobilier voient leurs coûts grimper, tandis que d’autres segments restent largement sous-exploités, offrant un fort potentiel aux annonceurs agiles.",
          "Le marché de la publicité digitale connaît par ailleurs une forte dynamique, avec une croissance estimée à 20 % en 2023 par rapport à 2022, preuve que de plus en plus d’entreprises marocaines intègrent Google Ads dans leur stratégie marketing. Dans un pays où l’usage du mobile domine, ce levier s’impose comme un outil incontournable pour développer rapidement visibilité et ventes en ligne.",
        ]}
        videoUrl="https://www.youtube.com/c3146b9d-8d55-4e9e-99e8-78785347c52c"
        className="mt-[10px] lg:mb-[150px] mb-[80px]"
      />

      <TextLeftImageRight
        title="Consultant expert Google Ads au Maroc"
        paragraphs={[
          "Chez Hostino, nos experts Google Ads au Maroc pilotent depuis <b>plus de 20 ans</b> des campagnes publicitaires performantes sur Google Ads et YouTube Ads.&nbsp;",
          "En tant que <b>consultants seniors</b>, nous mettons à profit une expertise approfondie pour éviter les pièges courants et maximiser le retour sur investissement de vos campagnes. Notre objectif est clair : transformer chaque budget investi en résultats concrets et mesurables pour votre entreprise.",
          "Grâce à une solide expérience dans des secteurs variés, nos experts Google Ads savent exactement quelle méthodologie adopter selon les spécificités de votre entreprise. Nous avons accompagné avec succès de grandes marques de l’agroalimentaire, des <b>compagnies aériennes</b>, des <b>banques</b>, des <b>assureurs</b> ainsi que de nombreux <b>prestataires de services</b>.",
          "Appelez-nous dès maintenant au +212 663 75 09 08 et confiez vos campagnes publicitaires à des experts Google Ads reconnus.",
        ]}
        imageSrc="images/google-ads-maroc/expert-google-ads-maroc.jpg"
        imageAlt="Expert Google Ads au Maroc"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <HostingImpactSection />

      <GmbAdvantages
        advantages={advantages}
        title="Avantages de la fiche
          <br />
          Google My Business"
      />

      <TextLeftImageRight
        title="Maximiser vos résultats grâce à la synergie Google Ads & SEO"
        paragraphs={[
          "La synergie entre Google Ads et le SEO permet de combiner <strong>visibilité immédiate</strong> et positionnement durable. Les annonces Google Ads assurent une présence instantanée, tandis que le SEO consolide la notoriété à long terme dans les résultats naturels.",
          "Les deux leviers se complètent : les données issues des campagnes Ads aident à cibler les bons mots-clés pour le <strong>SEO</strong>, et un site bien optimisé améliore le Quality Score, réduisant ainsi le <strong>coût par clic</strong>.",
          "Résultat : plus de visibilité, un trafic qualifié et des conversions accrues. L’association <strong>Google Ads + SEO</strong> offre un impact rapide et une croissance pérenne.",
        ]}
        imageSrc="/images/google-ads-maroc/seo-google-ads-maroc.jpg"
        imageAlt="Synergie entre Google Ads et SEO"
        consultButtonTextExiste={true}
        textButton="Contactez-nous"
        href="https://www.hostino.ma/contact"
      />

      <NationalCoverage
        title="Une agence Google Ads à vos côtés partout au Maroc"
        topic={"Google Ads "}
      />

      <FAQSection faqData={faqData} title="FAQ - Agence Google Ads Maroc" />
    </main>
  );
}
