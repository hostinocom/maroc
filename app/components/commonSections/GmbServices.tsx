import Link from "next/link";

// Arrow Right Icon
const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface GMBService {
  title: string;
  description: string;
  link: string;
  textButton?: string;
}


const GmbServices = ({ data  , title } : { data : GMBService[], title : string}) => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container">
        <h2 className="big-title mb-[20px] text-center" dangerouslySetInnerHTML={{__html:title}} />
   
        {/* Green Divider */}
        <div className="flex justify-center mb-[60px]">
          <div className="w-[80px] h-[6px] bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 md:gap-y-16 gap-y-8">
          {data.map((service, index) => (
            <div key={index} className="flex flex-col py-[40px] px-[30px] lg:py-[10px] lg:px-[30px]">
              <h3 className="md:text-[34px] text-title md:leading-[39px] tracking-[-1.1px] font-[600] text-[24px] mb-[20px]" dangerouslySetInnerHTML={{__html : service.title}} />
              <p
                className="paragraph mb-[24px] flex-grow"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              <Link
                href={service.link}
                className="flex md:justify-start justify-center  text-[18px] items-center gap-2 text-title font-[600]  hover:text-primary transition-colors group"
              >
                <span>{service.textButton || "Contactez-nous"}</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GmbServices;

