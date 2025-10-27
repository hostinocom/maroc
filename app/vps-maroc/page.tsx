import SixCards from "../components/commonSections/SixCards";
import TextLeftImageRight from "../components/commonSections/TextLeftImageRight";
import FAQSection from "../components/commonSections/FaqSection";
import TrustedBySection from "../components/sections/TrustedBySection";
import VPSQuoteForm from "../components/sectionsPageVpsMaroc/VPSQuoteForm";
import HeroHeadingPages from "../components/ui/heroHeadingPages";
import StartsRatingYellowFooter from "../components/ui/StartsRatingYellowFooter";

const hostingFeatures = [
  {
    image: "vps-maroc/souverainete-des-donnees.png",
    alt: "Souveraineté numérique",
    title: "Souveraineté <span>numérique</span>",
    description: `
      Nos serveurs <a href="https://www.hostino.ma/cloud-maroc/">Cloud</a> sont hébergés dans un datacenter situé au Maroc,
      en conformité avec les exigences de souveraineté numérique, les obligations légales d'hébergement local,
      et les normes internationales de sécurité et de fiabilité (<b>certifiés Tier III</b>).
    `,
  },
  {
    image: "cloud-maroc/adresse-ip-maroc.png",
    alt: "Adresse IP marocaine",
    title: "Adresse <span>IP marocaine</span>",
    description: `
      Notre solution de cloud souverain vous permet d'obtenir une adresse IP marocaine attribuée à un serveur hébergé
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
      Avec nos solutions d'infogérance cloud souverain au Maroc, vous bénéficiez d'une équipe Ops de proximité,
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
      En optant pour un cloud souverain marocain, vous assurez l'hébergement et la gestion de vos données critiques
      en toute conformité avec la <b>loi 09-08</b> relative à la protection des données personnelles,
      tout en respectant les recommandations de la <b>CNDP</b>.
    `,
  },
];

const faqData = [
  {
    question: "C'est quoi l'hébergement d'un site web ?",
    answers: [
      "Imaginez votre site web comme une maison. Pour qu'elle soit visible sur internet, il lui faut un terrain. C'est là qu'intervient l'hébergement web.",
      "<ul><li>L'hébergement web, c'est la location d'un espace sur un serveur puissant, connecté à internet.</li><li>C'est sur cet espace que seront stockés tous les fichiers de votre site web (textes, images, vidéos...).</li><li>L'hébergeur web, c'est le propriétaire du terrain. Il vous fournit l'espace et s'occupe de tout pour que votre site web soit accessible 24/24h et 7/7j.</li></ul>",
      "Pour que votre site web soit accessible, il vous faut un nom de domaine, que la plupart des hébergeurs web vous permettent d'acheter en même temps que votre pack d'hébergement, et ils peuvent vous aider à en choisir et à l'enregistrer si vous n'en avez pas encore."
    ]
  },
  {
    question: "Pourquoi héberger votre site au Maroc ?",
    answers: [
      "Choisir un hébergeur basé au Maroc vous offre de nombreux avantages :",
      "<ul><li><strong>Proximité et performance accrues:</strong> un interlocuteur proche pour une communication fluide et une meilleure compréhension de vos besoins.</li><li><strong>Simplicité et coût abordable :</strong> un support client entièrement marocain pour une assistance aisée et sans barrières linguistiques. Une facturation en dirhams marocains et en TTC pour faciliter vos déclarations de taxes au Maroc.</li><li>Contribution à l'économie nationale et soutien au \"<a href='https://www.madeinmorocco.org/' rel='noopener'>Made in Morocco</a>\" : Vous valorisez le savoir-faire marocain et participez à la croissance économique du pays.</li></ul>"
    ]
  },
  {
    question: "Quelle pack d'hébergement web conviendra à mon projet web ?",
    answers: [
      "Cela varie en fonction de la nature et de l'envergure de votre projet web.",
      "Pour les projets personnels et les petits sites tels que les blogs, vous pouvez opter pour l'hébergement web <strong><a href='https://www.hostino.ma/starty'>Starty</a></strong>. En revanche, pour les projets d'entreprise ou les sites recevant un trafic important, nous recommendons l'hébergement web <strong><a href='/business'>Business</a></strong> ou <strong><a href='https://www.hostino.ma/cloudy'>cloudy</a></strong>."
    ]
  },
  {
    question: "Quel est le meilleur hébergeur web ?",
    answers: [
      "Que vous soyez un particulier, une petite entreprise ou une grande organisation, Hostino™ a la solution d'hébergement web qu'il vous faut. Avec ses performances, sa fiabilité, ses fonctionnalités complètes et ses prix abordables, Hostino™ est le choix idéal pour héberger votre site web au Maroc."
    ]
  },
  {
    question: "Est-il possible de modifier le pack d'hébergement web après souscription ?",
    answers: [
      "Bien sûr ! Toutes nos offres d'hébergement sont flexibles et ajustables selon vos exigences. Vous avez la possibilité de passer de l'hébergement web Starty® à l'hébergement Business® ou à Cloudy® à tout moment via votre espace client.",
      "Cette mise à niveau s'effectue automatiquement et sans aucune interruption de service."
    ]
  },
  {
    question: "Quels sont les délais d'activation de ma commande ?",
    answers: [
      "Votre commande d'hébergement sera activée une fois votre paiement est confirmé.",
      "Dans le cas d'un paiement par carte bancaire marocaine (CMI) ou internationale (Stripe), l'activation est presque instantanée. Pour les paiements par virement bancaire, il est nécessaire d'envoyer le justificatif de votre transfert à sales@hostino.com."
    ]
  }
];

const VpsMarocPage = () => {
  return (
    <main>
      <HeroHeadingPages
        smallTitle="VPS Maroc"
        bigTitle="Location de serveur <br/> Cloud VPS Maroc"
        className="pb-[80px]"
        lineGreen={true}
      />

      <TextLeftImageRight
        title="Hébergement Cloud VPS Maroc"
        paragraphs={[
          "Que vous soyez une entreprise du secteur financier, de la santé, de l'administration publique ou toute autre organisation traitant des données sensibles ou soumise à des <b>exigences de souveraineté</b> des données, opter pour un VPS au Maroc représente une solution stratégique.",
          "Ce choix vous permet de respecter les réglementations marocaines tout en réduisant considérablement les risques liés à l'hébergement de données à l'étranger. En hébergeant votre infrastructure sur un serveur VPS au Maroc, vos données restent sous le contrôle des juridictions marocaines, assurant ainsi une conformité totale avec la <strong><a href='https://www.dgssi.gov.ma/fr/loi-09-08-relative-la-protection-des-personnes-physiques-legard-du-traitement-des' rel='noopener'>loi 09-08</a></strong> relative à la protection des données personnelles, la <strong><a href='https://www.dgssi.gov.ma/fr/loi-ndeg-0520-relative-la-cybersecurite' rel='noopener'>loi 05-20 sur la cybersécurité</a></strong>, ainsi qu'avec les recommandations de la CNDP.",
          "Appelez le +212 531-031-186 et confiez l'hébergement de vos données sensibles à un fournisseur VPS de confiance, avec une <b>équipe 100 % marocaine</b> à votre service."
        ]}
        imageSrc="images/vps-maroc/vps-maroc.jpg"
        imageAlt="VPS au Maroc"
        consultButtonTextExiste={false}
      />

      <TrustedBySection classNameImage="lg:w-[60%] w-[100%] "/>

      <VPSQuoteForm />

      <SixCards
        title={"Pourquoi choisir un<br /> hébergement VPS Maroc"}
        alignment="left"
        features={hostingFeatures}
      />

      <TextLeftImageRight
        title="Qu'est-ce qu'un VPS Maroc ?"
        paragraphs={[
          "Un VPS Maroc (serveur privé virtuel hébergé localement) est une solution d'hébergement qui repose sur des infrastructures Cloud situées au Maroc. Il s'agit d'un environnement serveur isolé, offrant les mêmes fonctionnalités qu'un serveur dédié, tout en étant hébergé dans un <b>data center marocain</b>. Cette solution permet aux entreprises de bénéficier de performances élevées, de flexibilité et surtout, d'une maîtrise totale de leurs données critiques.",
          "Le Cloud VPS englobe l'ensemble des infrastructures, services et solutions de traitement et de stockage des données opérés localement. Il s'inscrit dans une démarche stratégique visant à renforcer la <b>souveraineté numérique du Royaume</b>, en réduisant la dépendance aux fournisseurs étrangers et en développant des capacités technologiques nationales."
        ]}
        imageSrc="images/vps-maroc/cloud-souverain-maroc.jpg"
        imageAlt="Cloud souverain au Maroc"
        consultButtonTextExiste={true}
        textButton="Consultez les plans et tarifs"
        href="#vps"
      />


      <FAQSection faqData={faqData} title="FAQ - VPS Maroc" />

      <StartsRatingYellowFooter totalVotes={3} />

    </main>
  );
};

export default VpsMarocPage;