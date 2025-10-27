import Image from "next/image";
import ConsultButton from "../ui/ConsultButton";

interface CaseStudyContent {
  subtitle: string;
  title: string;
  paragraphs: string[];
  trafficImage: {
    src: string;
    alt: string;

  };
  sections?: {
    heading: string;
    content: string[];
    image?: {
      src: string;
      alt: string;
    };
  }[];
}

const palaisFarajCaseStudy: CaseStudyContent = {
  subtitle: "De zéro à la première position sur Google",
  title:
    'Cas réel : comment nous avons positionné l\'hôtel "Palais Faraj" n°1 sur Google',
  paragraphs: [
    "La plupart des hôtels de luxe au Maroc, notamment ceux de Marrakech, bénéficiaient historiquement d'une visibilité en ligne bien plus forte. La ville de Fès, malgré son patrimoine exceptionnel, restait souvent en retrait dans les recherches liées à l'hôtellerie haut de gamme.",
    "Notre agence SEO a relevé le défi avec le Palais Faraj : hisser un hôtel de Fès au même niveau – voire au-dessus – des établissements de Marrakech, afin de capter l'attention des <strong>voyageurs en quête d'expériences authentiques et raffinées</strong>.",
  ],
  trafficImage: {
    src: "/images/agence-seo-maroc/etude-de-cas-agence-seo-palaisfaraj.jpg",
    alt: "Palais Faraj SEO Traffic Growth - SEMrush Analytics",
  },
  sections: [
    {
      heading: "",
      content: [
        "Pour y parvenir, notre agence SEO a déployé une stratégie complète : audit technique du site, amélioration des performances, optimisation du contenu multilingue et netlinking ciblé sur des portails spécialisés dans le luxe et le tourisme. Nous avons également renforcé la visibilité locale sur Google Maps.",
        'Cette approche a permis au site du Palais Faraj d\'apparaître en tête des résultats pour des mots-clés stratégiques tels que "<strong>Luxury hotel Morocco</strong>", "<strong>Luxury hotel Fès</strong>" et "<strong>Meilleur Restaurant Fès</strong>". Les résultats parlent d\'eux-mêmes : <strong>+230 % de trafic organique</strong> en 6 mois, +170 % de réservations directes via le site officiel, et un <strong>intérêt accru de la part des agences de voyages internationales</strong>.',
        'Grâce à ce positionnement en n°1 sur Google, le Palais Faraj a considérablement réduit sa dépendance aux plateformes OTA et renforcé son image de référence du luxe à Fès. Aujourd’hui, cette réussite dépasse le cadre de l’hôtel. N<span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">ous avons non seulement contribué au succès du </span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;"><b>Palais Faraj</b></span><span style="color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-align: inherit; text-transform: inherit;">, mais aussi à la mise en lumière de la ville de Fès sur la scène internationale. La capitale spirituelle du Maroc bénéficie désormais d’une meilleure visibilité face à <span style="text-decoration: underline;"><strong><a href="https://www.hostino.ma/agence-seo-marrakech">Marrakech</a></strong></span>.</span>'
    ],
    },
    {
      heading: "Articles SEO & contenus premium",
      content: [
        "Pour renforcer la visibilité du Palais Faraj, notre agence SEO a déployé une stratégie de rédaction d'articles optimisés SEO et de storytelling premium. L'objectif était de positionner l'hôtel comme une référence non seulement dans l'hôtellerie de luxe, mais aussi dans la valorisation culturelle et historique de Fès.",
        'Ainsi, pour des recherches telles que "<strong>Mellah Fès</strong>", un article dédié au Palais Faraj se positionne en tête des résultats Google, attirant un trafic qualifié à l\'échelle mondiale. Ce type de contenu a directement contribué à générer un flux régulier de réservations directes depuis le site officiel, en ciblant des voyageurs et agences de voyages internationales. Nous avons également travaillé sur la gastronomie marocaine en produisant des contenus à forte valeur ajoutée. Un exemple marquant est l\'article "<strong>Quand Gordon Ramsay découvrait à Fès la cuisine marocaine</strong>", que nous avons référencé en tête des résultats Google sur le mot-clé "<strong>Meilleure Cuisine Marocaine</strong>".',
      ],
      image: {
        src: "/images/agence-seo-maroc/cas-reel-agence-seo-maroc.jpg",
        alt: "Gordon Ramsay Fès cuisine article Google search results",
      },
    },
    {
      heading: "",
      content: [
        "Ce positionnement stratégique a permis d'associer le Palais Faraj à l'excellence culinaire du Maroc, tout en captant une audience passionnée de gastronomie et de culture. En multipliant ces récits inspirants liés à des événements et thématiques fortes, nous avons renforcé l'image de l'hôtel et stimulé de manière significative l'acquisition de nouveaux clients haut de gamme.",
      ],
    },
  ],
};

const CaseStudyPalaisFajar = () => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container">
        <div>
          <p className="text-title text-[30px] leading-[45px] tracking-[-1px] font-[600] mb-[20px]">{palaisFarajCaseStudy.subtitle}</p>

          <h1 className="big-title mb-[20px]">{palaisFarajCaseStudy.title}</h1>

          {palaisFarajCaseStudy.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="paragraph"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          {/* SEMrush Traffic Chart - Image 1 */}
          <div>
              <Image
                src={palaisFarajCaseStudy.trafficImage.src}
                alt={palaisFarajCaseStudy.trafficImage.alt}
                width={1200}
                height={300}
                className="lg:w-[70%] md:w-[90%] w-[100%]"
              />
             
            </div>
            
          </div>

          {palaisFarajCaseStudy.sections?.map((section, index) => (
            <div key={index} className="section">
              {section.heading && (
                <h3 className="font-[600] text-title my-[20px] text-[27px]">{section.heading}</h3>
              )}

              {section.content.map((text, idx) => (
                <p
                  key={idx}
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}

              {/* Google Search Results Image - Image 3 */}
              {section.image && (
                <div className="content-image-container my-[20px]">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={1200}
                    height={300}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          ))}

          <div className="mt-[20px]">
            <ConsultButton href={"https://www.hostino.ma/contact"} text={"Contactez-nous"} />
          </div>
      </div>
    </section>
  );
};

export default CaseStudyPalaisFajar;
