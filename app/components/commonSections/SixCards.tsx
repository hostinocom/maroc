"use client";

// src/components/sections/WhyChooseSection.tsx
import Image from "next/image";

const hostingFeatures = [
  {
    image: "hebergeur-marocain.jpg",
    alt: "Hébergeur web Marocain",
    title: "Hébergeur 100% <span>Marocain</span>",
    description: `Hostino®, hébergeur web de référence au Maroc, avec une présence locale à
    <a style='text-decoration:underline;' href="https://www.hostino.ma/hebergement-web-tanger/" underline>Tanger</a> 
    , <a style='text-decoration:underline;' href="https://www.hostino.ma/hebergement-web-rabat/" underline>Rabat</a> et
     <a style='text-decoration:underline;' href="https://www.hostino.ma/hebergement-web-casablanca/" underline>Casablanca</a> . Nos serveurs performants sont <b>situés au Maroc</b>, en Espagne, aux Pays-Bas et aux États-Unis.`,
  },
  {
    image: "securite.jpg",
    alt: "Sécurité de premier plan",
    title: "<span >Sécurité</span> de premier plan ",
    description:
      "Sécurité de premier plan avec <b>détection de malwares par IA</b>, Anti-DDoS, Zero Trust intégré et partenariats agréés avec des solutions de sécurité internationales (<b>Cloudflare</b> et imunify).",
  },
  {
    image: "accelerateur-web.jpg",
    alt: "Accélérateur web",
    title: "<span >Accélérateur</span> web",
    description:
      "Nos packs d'hébergement web sont conçus pour un <b>chargement ultra-rapide des pages</b>, conformes aux normes de performance de Google PageSpeed Insights : LCP (Largest Contentful Paint) ≤ 2,5 secondes.",
  },
  {
    image: "wordpress.jpg",
    alt: "Hébergement optimisé pour WordPress",
    title: "WordPress en <span>1-clic</span>",
    description:
      "Avec Hostino, créez votre site <b>WordPress en quelques clics</b>, sans tracas d'installation ni besoin de compétences techniques.",
  },
  {
    image: "migration-hostino.jpg",
    alt: "Migration hébergement web Hostino",
    title: "Migration <span>gratuite</span>",
    description:
      "Basculez vers Hostino® en toute sécurité grâce à une migration fluide, sans <b>aucune interruption de service</b>.",
  },
  {
    image: "support-maroc.jpg",
    alt: "Assistance experte",
    title: "Assistance <span>Experte</span>",
    description: `Un service de support technique et commercial disponible 24h/24, par téléphone, e-mail et <b><a style='text-decoration:underline;' href="https://my.hostino.com/submitticket.php">ticket de support</a></b>.`,
  },
];

type Props = {
  className?: string;
  title?: string;
  alignment?: string;
  features?: any[];
  classNameTitleCard?: string;
  classNameImageCard?: string;
};

export default function SixCards({
  className = "",
  title,
  alignment = "center",
  features = hostingFeatures,
  classNameTitleCard,
  classNameImageCard
}: Props) {
  return (
    <section className="my-[80px] lg:my-[150px] bg-white">
      <div className="container ">
        <h2
          className={`${className} ${
            alignment === "left" && "md:pr-[180px] lg:pr-[250px]"
          } text-${alignment}  title-section text-center mb-16`}
          dangerouslySetInnerHTML={{ __html: title as string }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 mb-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border-1 border-gray-100 px-6 py-8 rounded-xl"
            >
                <Image
                src={`/images/${feature.image}`}
                alt={feature.alt}
                width={63}
                height={65}
                className={`${classNameImageCard ? classNameImageCard : "w-[22%]"}  mb-[20px]   rounded-lg`}
              />
              <h3
                style={{ letterSpacing: "-0.6px" }}
                className={`${classNameTitleCard ? classNameTitleCard : "lg:pr-[150px] md:pr-[120px]"} leading-[33px] mb-[22px] font-[600]  titles-whyChoose text-[27px]  text-title`}
                dangerouslySetInnerHTML={{ __html: feature.title }}
              />
              
              <p
                className="paragraph-16"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
