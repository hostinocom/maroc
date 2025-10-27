import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";
import React from "react";

interface SEOServiceCard {
  title: string;
  paragraphs: (string | React.ReactNode) [];
  buttonText: string;
  buttonLink: string;
}

interface City {
  name: string;
  href: string;
}

const seoServiceCardsData: SEOServiceCard[] = [
  {
    title: "Publicité sur le moteur de recherche",
    paragraphs: [
      "La publicité sur les moteurs de recherche vous permet d’afficher vos annonces exactement au moment où les utilisateurs <b>recherchent vos produits ou services</b> sur Google. Vous atteignez ainsi des personnes réellement intéressées par ce que vous proposez, au moment clé de leur décision.&nbsp;",
      "Avec une stratégie bien optimisée, vous pouvez augmenter les <b>appels</b>, les <b>clics</b> et les <b>ventes</b> sans gaspiller de budget. Le ciblage par ville, par mots-clés et par horaires garantit que vos annonces ne sont vues que par de vrais clients potentiels.&nbsp;",
      "Dans un marché compétitif, apparaître parmi les <b>premiers résultats</b> est essentiel. La publicité sur les moteurs de recherche vous offre une visibilité immédiate et transforme les recherches en clients prêts à acheter.",
    ],
    buttonText: "Contacte-nous",
    buttonLink: "https://www.hostino.ma/contact/",
  },
  {
    title: "Sponsoring Google My Business",
    paragraphs: [
      `Vos clients recherchent chaque jour des entreprises comme la vôtre sur Google Maps et dans les recherches locales.&nbsp;<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Avec Google Ads pour les </span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"><b>fiches Google My Business</b></span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">, vous pouvez mettre en avant votre profil et apparaître avant la concurrence, au moment précis où un client est prêt à appeler, </span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"><b>demander un itinéraire</b></span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"> ou visiter votre site web.</span>`,
      "Ce type de campagnes relie votre fiche Google Business Profile à des annonces payantes, ce qui génère davantage de clics sur “<b>Appeler</b>”, “<b>Itinéraire</b>” ou “<b>Visiter le site web</b>”",
      "Ainsi, vous transformez les recherches locales en clients réels et augmentez la visibilité de votre entreprise dans votre zone.",
    ],
    buttonText: "Contacte-nous",
    buttonLink: "https://www.hostino.ma/contact/",
  },
  {
    title: "Publicité sur le réseau display de Google Ads",
    paragraphs: [
      "Avec le Réseau Display de Google Ads, votre entreprise peut apparaître sur des <b>millions de sites web</b>, <b>d’applications</b> et de vidéos YouTube où vos clients potentiels passent leur temps.",
      "Il ne s’agit pas seulement de recherche, mais d’être présent de manière stratégique pendant que les utilisateurs naviguent, lisent des actualités ou consomment du contenu lié à <b>vos produits ou services</b>.",
      "Les annonces peuvent être au format image, responsive, vidéo, texte, shopping (produits avec photo, prix et lien vers votre boutique) ou <b>rich media</b> (formats dynamiques et interactifs qui génèrent plus d’engagement).",
      "De cette façon, votre entreprise bénéficie d’une visibilité stratégique et se connecte avec des clients au moment parfait.",
    ],
    buttonText: "Contacte-nous",
    buttonLink: "https://www.hostino.ma/contact/",
  },
  {
    title: "Campagnes vidéo avec YouTube Ads",
    paragraphs: [
      `Avec YouTube Ads, votre entreprise apparaît exactement là où vos clients regardent du contenu chaque jour.&nbsp;`,
      `<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">Types </span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"><b>d’annonces sur YouTube</b></span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"> :</span>`,
      <ul  className="list-disc ml-6">
        <li >
          <b>In-Stream skippables</b> : l’annonce peut être ignorée après 5
          secondes.
        </li>
        <li >
          In-Stream non skippables : 15 à 20 secondes d’impact garanti.
        </li>
        <li >Bumper Ads : vidéos courtes de 6 secondes.</li>
        <li >
          Discovery Ads : apparaissent dans les résultats de recherche et les{" "}
          <b>vidéos associées</b>.
        </li>
        <li >
          Masthead : visibilité maximale sur la page d’accueil de YouTube.
        </li>
      </ul>,
      `Transformez chaque vue en une <b>opportunité commerciale</b> avec des campagnes vidéo bien optimisées.`,
    ],

    buttonText: "Contacte-nous",
    buttonLink: "https://www.hostino.ma/contact/",
  },
];

const SeoServiceCards = () => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container">
        <h2 className="big-title mb-[40px] text-center">
          Les prestations de notre
          <br />
          agence Google Ads au Maroc
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seoServiceCardsData.map((card, index) => (
            <div
              key={index}
              className={` rounded-3xl p-8 flex flex-col justify-between`}
            >
              <div>
                <h3
                  className="md:text-[34px] text-title md:leading-[39px] tracking-[-1.1px] font-[600] text-[24px] mb-[20px]"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />

                {card.paragraphs.map((paragraph, idx) =>
                  // If the paragraph is a string, render it as plain HTML
                  typeof paragraph === 'string' ? (
                    <p
                      key={idx}
                      className="paragraph"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ) : (
                    // Otherwise, wrap the JSX element so we can provide a key and a consistent container
                    <div key={idx} className="paragraph">
                      {paragraph}
                    </div>
                  )
                )}
              </div>

              {card.buttonLink && (
                <Link
                  href={card.buttonLink}
                  className="inline-block  text-white font-semibold rounded-lg transition-colors mt-6 "
                >
                  <AnimatedButton
                    text={card.buttonText}
                    hoverText={"Contactez-nous"}
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
