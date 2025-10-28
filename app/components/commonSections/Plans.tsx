import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";
import { montserrat } from "@/public/font";
import HeroHeadingPages from "../ui/heroHeadingPages";


interface more_performance {
  text : string;
  href? : string;
  exists : boolean
}

// Define plan type
export type Plan = {
  id: number;
  name: string;
  subtext?: string;
  price_original: string;
  price_discounted: string;
  save: string;
  price_ttc: string;
  performance_stars: number;
  more_performance: more_performance;
  order: {
    text: string;
    href: string;
  };
  features: {
    seo_optimized: boolean;
    free_domain: boolean;
    wordpress_preinstalled: boolean;
    control_panel: string;
    ssl: string;
    disk_space: string | number;
    bandwidth: string;
    databases: number | string;
    email_accounts: number |string;
    subdomains: number | string;
    backups: string | number;
  };
  most_popular: {
    text: string;
    is_most_popular: boolean;
  };
};



type Props = {
  className?: string;
  title?: string;
  smallTitle?: string;
  plans?: Plan[];
  heroHeading?: boolean;
  bigTitle?: string;
  namePlaneBold?: boolean;
  titleExiste?: boolean;
};

const hostingPlans: Plan[] = [
  {
    id: 1,
    name: "Hébergement <br/>web <i>Eco</i>",
    subtext:
      "Offre d'hébergement web économique pour sites personnels et blogs.",
    price_original: "299 DH/an",
    price_discounted: "199 DH/an",
    save: "33%",
    price_ttc: "Pour 1 an, vous payez <b> 238,8 DH TTC.</b>",
    performance_stars: 1,
    more_performance: {
      text: "Plus de performances ?",
      href: "/business/",
      exists : false
    },
    order: {
      text: "Commander",
      href: "https://my.hostino.com/order.php?pid=70&amp;language=french&amp;country=MA&amp;promocode=UI12E&amp;1=USD",
    },
    features: {
      seo_optimized: false,
      free_domain: false,
      wordpress_preinstalled: true,
      control_panel: "cPanel®",
      ssl: "Gratuit et illimité",
      disk_space: "10 GB NVMe",
      bandwidth: "100 GB",
      databases: 1,
      email_accounts: 1,
      subdomains: 1,
      backups: "JetBackup",
    },
    most_popular: {
      text: "Le plus populaire",
      is_most_popular: false,
    },
  },

  {
    id: 2,
    name: "Hébergement <br/>web <i>Starty</i>",
    subtext:
      "Hébergement idéal pour les petits sites à faible consommation de ressources.",
    price_original: "499 DH/an",
    price_discounted: "399 DH/an",
    price_ttc: "Pour 1 an, vous payez <b>478,8 DH TTC.</b>",
    save: "20%",
    performance_stars: 4,
    more_performance: {
      text: "Plus de performances ?",
      href: "/business/",
      exists : false
    },
    order: {
      text: "Commander",
      href: "https://my.hostino.com/order.php?pid=36&amp;language=french&amp;country=MA&amp;promocode=UI12S&amp;1=USD",
    },
    features: {
      seo_optimized: false,
      free_domain: true,
      wordpress_preinstalled: true,
      control_panel: "cPanel®",
      ssl: "Gratuit et illimité",
      disk_space: "25 GB NVMe",
      bandwidth: "250 GB",
      databases: 5,
      email_accounts: 5,
      subdomains: 5,
      backups: "JetBackup",
    },
    most_popular: {
      text: "Le plus populaire",
      is_most_popular: true,
    },
  },

  {
    id: 3,
    name: "Hébergement <br/>web <i>Business</i>",
    subtext:
      "Spécialement conçu pour répondre aux besoins des sites web d'entreprise.",
    price_original: "1199 DH/an",
    price_discounted: "999 DH/an",
    save: "20%",
    price_ttc: "Pour 1 an, vous payez <b>1198,8 DH TTC.</b>",
    performance_stars: 5,
    more_performance: {
      text: "Plus de performances ?",
      href: "/business/",
      exists : false
    },
    order: {
      text: "Commander",
      href: "https://my.hostino.com/order.php?pid=42&amp;language=french&amp;country=MA&amp;promocode=UI12B&amp;1=USD",
    },
    features: {
      seo_optimized: true,
      free_domain: true,
      wordpress_preinstalled: true,
      control_panel: "cPanel®",
      ssl: "Gratuit et illimité",
      disk_space: "50 GB NVMe",
      bandwidth: "Illimitée",
      databases: "Illimitées",
      email_accounts: 10,
      subdomains: 10,
      backups: "JetBackup",
    },
    most_popular: {
      text: "Le plus populaire",
      is_most_popular: false,
    },
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
const PlanCard = ({
  plan,
  totalPlans,
  namePlaneBold,
}: {
  plan: Plan;
  totalPlans: number;
  namePlaneBold?: boolean;
}) => {
  const getWidthClass = () => {
    if (totalPlans === 2) {
      return "w-full md:w-[100%] lg:mx-[0] md:mx-[150px] lg:mb-[35px] md:mb-[50px] mb-[35px] lg:w-[38%]";
    }
    return "w-full  md:w-[100%] lg:mx-[0] md:mx-[150px] lg:mb-[35px] md:mb-[50px] mb-[35px] lg:w-[32%] ";
  };

  return (
    <div
      className={`${
        plan.most_popular.is_most_popular && "border-3 border-primary"
      } bg-white relative lg:text-left text-center rounded-[10px] 
      ${getWidthClass()}
       md:pt-[55px] md:px-[50px] md:pb-[50px] lg:pt-[50px] lg:pb-[40px] lg:px-[40px] pt-[45px] px-[25px] pb-[35px] border shadow_main h-full`}
    >
      {plan.most_popular.is_most_popular && (
        <div className="absolute py-[8px] bg-primary px-[20px] text-[16px] sm:left-1/3 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-white text-center font-[500] inline-block">
          <AnimatedButton
            text={plan.most_popular.text.toUpperCase()}
            hoverText={plan.most_popular.text.toUpperCase()}
            bgColor="bg-primary"
            textColor="text-white"
          />
        </div>
      )}

      {namePlaneBold ? (
        <h3
          className="lg:text-[34px] md:text-left text-center md:text-[31px] text-[28px] text-title font-[600] md:leading-[33px] leading-[1.3em] mb-4"
          dangerouslySetInnerHTML={{ __html: plan.name }}
        />
      ) : (
        <h3
          className="lg:text-[26px] md:text-left text-center md:text-[30px] text-[28px] text-title font-[600] md:leading-[33px] leading-[1.3em] mb-4"
          dangerouslySetInnerHTML={{ __html: plan.name }}
        />
      )}

      {plan.subtext && (
        <p className="text-[#022545BD] md:text-left text-center text-[14px] font-[400] leading-[21px] tracking-[0.3px]">
          {plan.subtext}
        </p>
      )}

      <div className="border-t py-[15px] border-gray-200 my-4"></div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="h-[40px]">
          {plan.price_original && (
            <div className="flex items-center lg:justify-start justify-center gap-2 mb-2">
              <span
                className={`${montserrat.className} text-primary font-medium line-through text-lg`}
              >
                {plan.price_original}
              </span>
              <span
                className={`${montserrat.className} bg-primary py-[8px] text-white text-[15px] font-[600] px-[10px] rounded-[8px]`}
              >
                Economisez {plan.save}
              </span>
            </div>
          )}
        </div>
        <p className="text-base text-title font-semibold mb-1">À seulement</p>
        <p
          className={`${montserrat.className} text-[45px] font-bold leading-[54px] text-[#14213D]`}
        >
          {plan.price_discounted}
        </p>
      </div>

      <Link
        href={plan.order.href}
        className={`w-full ${
          plan.most_popular.is_most_popular
            ? "bg-primary"
            : "bg-title hover:bg-primary transition"
        } text-white flex items-center mt-[18px] gap-3 justify-center font-bold py-[16px] rounded-[10px] text-center mb-4 transition`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {plan.order.text}
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="size-3 font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>

      <p
        className="text-sm text-gray-600 mb-4"
        dangerouslySetInnerHTML={{ __html: plan.price_ttc }}
      />

      <div className="border-t border-gray-200 my-4"></div>

      <StarRating stars={plan.performance_stars} />

      <ul className="text-gray-700 text-sm space-y-2 flex-grow">
        <li className="flex items-center lg:justify-start justify-center">
          {plan.features.seo_optimized ? (
            <>
              <Image
                src="/images/google-svg.svg"
                alt="SEO Optimized"
                width={16}
                height={16}
                className="mr-1"
              />
              <span className="text-title ">
                Optimisé <b>SEO</b>
              </span>
            </>
          ) : (
            <>
              <Image
                src="/images/google-svg-dark.svg"
                alt="SEO Optimized"
                width={16}
                height={16}
                className="mr-1"
              />
              <span className="text-shadow-gray-200 opacity-20">
                Optimisé SEO
              </span>
            </>
          )}
        </li>
        <li>
          {plan.features.free_domain ? (
            <p>
              Nom de domaine <b>gratuit</b>
            </p>
          ) : (
            <p className="text-shadow-gray-200 opacity-20">
              Nom de domaine gratuit
            </p>
          )}
        </li>
        <li>
          {plan.features.wordpress_preinstalled ? (
            <div className="flex items-center gap-1 lg:justify-start justify-center gap-2">
              <Image
                src="/images/wp.svg"
                alt="WordPress préinstallé"
                width={16}
                height={16}
                className="mr-1"
              />
              <p>
                WordPress <b>préinstallé</b>
              </p>
            </div>
          ) : (
            <p className="text-shadow-gray-200 opacity-20">
              WordPress préinstallé
            </p>
          )}
        </li>
        <li>
          Panneau de contrôle{" "}
          <b>
            <i>{plan.features.control_panel}</i>
          </b>
        </li>
        <li>
          SSL : <b>{plan.features.ssl}</b>
        </li>
        <li>
          Espace disque : <b>{plan.features.disk_space}</b>
        </li>
        <li>
          Bande passante : <b>{plan.features.bandwidth}</b>
        </li>
        <li>
          Bases de données : <b>{plan.features.databases}</b>
        </li>
        <li>
          Comptes email : <b>{plan.features.email_accounts}</b>
        </li>
        <li>
          Sous-domaines : <b>{plan.features.subdomains}</b>
        </li>
        <li>
          Sauvegardes : <b>{plan.features.backups}</b>
        </li>
      </ul>

      {typeof plan.more_performance == "object" && (
        <>
          {plan.more_performance && plan.more_performance.href && (
            <div className="mt-6">
              <Link
                href={plan.more_performance.href}
                className="text-title text-base font-semibold underline inline-flex items-center"
              >
                {plan.more_performance.text}
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default function PlansSection({
  className,
  title,
  heroHeading,
  plans = hostingPlans,
  namePlaneBold,
  titleExiste = false,
}: Props) {
  return (
    <section
      id="plans"
      className={`${className} overflow-hidden plans-section relative`}
    >
      <div className="container">
        {!heroHeading && (
          <div className="text-center">
            <h2 className="title-section text-title">{title}</h2>
          </div>
        )}

        <div
          className={`${
            hostingPlans.length > 2
              ? "lg:gap-x-[1.33%] gap-y-[1.33%]  lg:justify-self-start justify-center"
              : "gap-x-[5%] justify-center"
          } flex flex-wrap  py-[30px] w-full`}
        >
          {plans?.map((plan: Plan) => (
            <PlanCard
              namePlaneBold={namePlaneBold}
              key={plan.id}
              plan={plan}
              totalPlans={plans.length}
            />
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
            className="md:h-auto md:w-auto h-[1541px] w-[2000px]"
          >
            <path
              className="elementor-shape-fill"
              opacity="0.12"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
