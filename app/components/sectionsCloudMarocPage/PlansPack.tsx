"use client";

import Image from "next/image";
// src/components/sections/PlansSection.tsx
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";
import { montserrat } from "@/public/font";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";

// Define plan type

type Plan = {
  id: number;
  name: string;
  description: string;
  price: string;
  isHighlighted: boolean;
  features: (string | JSX.Element)[];
  is_most_popular: boolean;
  href: string;
};

type Props = {
  className?: string;
  title?: string;
  smallTitle?: string;
  plans?: Plan[];
};

const hostingPlans: Plan[] = [
  {
    id: 1,
    name: "Pack MA1",
    description: "Idéal pour débuter avec un petit site web.",
    price: "1399 DH",
    isHighlighted: false,
    features: [
      (<div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/flag-maroc.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            Données hébergées au Maroc
          </span>
        </>
      </div>),
      <div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/flag-maroc.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            <b>Adresse IP marocaine</b>
          </span>
        </>
      </div> ,
      "Nom de domaine <b>gratuit</b>",
      <div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/wp.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            <b>WordPress</b> pré-installé
          </span>
        </>
      </div> ,
      "<b>Certificat SSL</b> (https://)",
      "Panneau de gestion <b><i>cPanel®</i></b>",
      "<b>10 Go</b> de stockage SSD NVMe",
      "Bande Passante : <b>50 GB</b>",
      "Adresses e-mails: <b>5</b>",
      "Antivirus, Antimalware et WAF",
      "Datacenter certifié TIER III, ISO 27001",
      "Conforme PCI-DSS",
      "Conforme à la <b>loi marocaine 09-08</b>",
      "Activation instantannée",
    ],
    is_most_popular: false,
    href: "https://my.hostino.com/order.php?pid=27&language=french&currency=1&country=MA",
  },
  {
    id: 2,
    name: "Pack MA2",
    description: "Plus de performance, plus de ressources.",
    price: "2399 DH",
    isHighlighted: true,
    features: [
      <div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/flag-maroc.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            Données hébergées au Maroc
          </span>
        </>
      </div>,
      <div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/flag-maroc.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            <b>Adresse IP marocaine</b>
          </span>
        </>
      </div> ,
      "Nom de domaine <b>gratuit</b>",
      <div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/wp.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            <b>WordPress</b> pré-installé
          </span>
        </>
      </div> ,
      "<b>Certificat SSL</b> (https://)",
      "Panneau de gestion <b><i>cPanel®</i></b>",
      "<b>25 Go</b> de stockage SSD NVMe",
      "Bande Passante : <b>100 GB</b>",
      "Adresses e-mails: <b>100</b>",
      "Antivirus, Antimalware et WAF",
      "Datacenter certifié TIER III, ISO 27001",
      "Conforme PCI-DSS",
      "Conforme à la <b>loi marocaine 09-08</b>",
      "Activation instantannée",
    ],
    is_most_popular: true,
    href: "https://my.hostino.com/order.php?pid=28&language=french&currency=1&country=MA",
  },
  {
    id: 3,
    name: "Pack MA3",
    description: "Meilleur choix pour les sites corporate.",
    price: "4899 DH",
    isHighlighted: false,
    features: [
      <div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/flag-maroc.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            Données hébergées au Maroc
          </span>
        </>
      </div>,
      <div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/flag-maroc.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            <b>Adresse IP marocaine</b>
          </span>
        </>
      </div> ,
      "Nom de domaine <b>gratuit</b>",
      <div className="flex items-center lg:justify-start justify-center">
        <>
          <Image
            src="/images/cloud-maroc/wp.svg"
            alt="SEO Optimized"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-title ">
            <b>WordPress</b> pré-installé
          </span>
        </>
      </div> ,
      "<b>Certificat SSL</b> (https://)",
      "Panneau de gestion <b><i>cPanel®</i></b>",
      "<b>50 Go</b> de stockage SSD NVMe",
      "Bande Passante : <b>250 GB</b>",
      "Adresses e-mails: <b>illimitées</b>",
      "Antivirus, Antimalware et WAF avancés",
      "Datacenter certifié TIER III, ISO 27001",
      "Conforme PCI-DSS",
      "Conforme à la <b>loi marocaine 09-08</b>",
      "Activation instantannée",
    ],
    is_most_popular: false,
    href: "https://my.hostino.com/order.php?pid=29&language=french&currency=1&country=MA",
  },
];
// Star rating component
const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div className="flex items-center lg:justify-start justify-center gap-2 mb-6">
      <span className="text-sm font-bold text-gray-700 mr-2">Performances</span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={i < stars ? "#FFA500" : "none"}
            stroke="#FFA500"
            strokeWidth="2"
            className="mr-1"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.857 1.524 8.276L12 18.897l-7.46 4.542 1.524-8.276L.001 9.306l8.331-1.151z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

// Single Plan Card
const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <div
      className={`${
        plan.is_most_popular && "border-3 border-primary"
      } bg-white relative  lg:text-left text-center rounded-[10px] lg:w-full md:w-[70vw] w-full mx-auto mb-4 md:pt-[55px] md:px-[50px] md:pb-[50px] lg:pt-[50px] lg:pb-[40px] lg:px-[40px] pt-[45px] px-[25px] pb-[35px]  border border-gray-300  h-full`}
    >
      <h3
        className="lg:text-[34px] md:text-left text-center md:text-[31px] text-[28px] text-title font-[600] md:leading-[33px] leading-[1.3em] mb-4"
        dangerouslySetInnerHTML={{ __html: plan.name }}
      />
      <p className="text-[#022545BD] md:text-left text-center text-[14px] font-[400] leading-[21px] tracking-[0.3px]">
        {plan.description}
      </p>

      <div className="border-t-3 py-[15px] border-gray-200 my-4"></div>

      {/* Pricing */}
      <div className="mb-6">
        <p
          className={`${montserrat.className} text-[45px] font-bold leading-[54px] text-[#14213D]`}
        >
          {plan.price}
        </p>
      </div>

      <Link href={plan.href} className="">
        <AnimatedButton
          text={"Commender"}
          hoverText="Commander"
          bgColor={plan.is_most_popular ? "bg-primary" : "bg-title"}
          textColor={"text-white"}
          hoverBgColor={plan.is_most_popular ? "hover:bg-title" : ""}
          className="text-white px-[40px] font-[600] py-[10px] rounded-[10px]"
          arrowButton={true}
        />
      </Link>

      <div className="border-t border-gray-200 my-4"></div>

      <div>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start">
            
            {typeof feature === "object" ? (
              <>
                {
                  <p
                    className="text-[14px] text-title font-[400] leading-[1.8em]" 
                  >
                    {feature as any}
                  </p>
                }
              </>
            ): 
            (
            <p
              className="text-[14px] text-title font-[400] leading-[1.8em]"
              dangerouslySetInnerHTML={{ __html: feature }}
            />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-title text-[14px] font-[400] inline-flex items-center">
          Activation instantannée
        </p>
      </div>
    </div>
  );
};

export default function PlansPack({
  className,
  title,
  smallTitle,
  plans = hostingPlans,
}: Props) {
  return (
    <section
      id="plans"
      className={`${className} overflow-hidden  plans-section  relative`}
    >
      <div className="container">
        <div
          className={`${
            plans.length >= 3
              ? "grid grid-cols-1 py-[30px]  lg:grid-cols-3 lg:gap-6 gap-8  w-full"
              : "flex lg:flex-row flex-col justify-center py-[30px] lg:gap-6 gap-8  w-full"
          } `}
        >
          {plans?.map((plan: Plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        <div
          className="elementor-shape elementor-shape-bottom"
          aria-hidden="true"
          data-negative="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className=" md:h-auto md:w-auto h-[1541px] w-[2000px]"
          >
            <path
              className="elementor-shape-fill"
              opacity="0.12"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
          </svg>{" "}
        </div>
      </div>
    </section>
  );
}
