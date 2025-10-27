import Image from "next/image";
import ConsultButton from "../ui/ConsultButton";

interface HeroSectionProps {
  subtitle: string;
  title: string;
  emailLabel: {
    textEmail : string;
    color : string;
  };
  email: string;
  imageSrc: string;
  imageAlt: string;
  buttonHref?: string;
  sectionBg?: string;
  text?: string;
}

export default function HeroSection({
  subtitle,
  title,
  emailLabel,
  email,
  imageSrc,
  imageAlt,
  text = "",
  sectionBg = "bg-gray-200", // default background
}: HeroSectionProps) {
  return (
    <section className={sectionBg}>
      <div className="container grid-cols-1 md:py-[150px] py-[80px] px-5 mx-auto max-w-screen-xl md:grid-cols-2 gap-x-8 grid items-center">
        {/* Text Content */}
        <div className="col-span-1 flex flex-col custom-row-gap gap-y-[20px] md:mb-0 md:pr-10 text-center md:text-left">
          <h1 className="md:text-[19px] text-[18px] font-[600] tracking-[-0.5px] text-title">
            {subtitle}
          </h1>

          <h2 className="big-title title font-semibold text-title">
            {title}
          </h2>

          <p className="paragraph" style={{marginBottom:"0 !important"}} dangerouslySetInnerHTML={{__html : text}}/>


          <div className="flex flex-col md:items-start items-center">
            <p className={`${emailLabel.color ? emailLabel.color : 'text-title '} text-[13px] font-[500] py-[5px] mb-[10px] tracking-[1.2px]`}>
              {emailLabel.textEmail}
            </p>
            <p className="border-bottom text-[31px] font-[600] text-title">
              {email}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="col-span-1 flex z-10 justify-center">
          <div className="relative w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1300}
              height={977}
              className="w-full h-full md:p-[20px] p-[25px] md:scale-100 lg:scale-100 rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
