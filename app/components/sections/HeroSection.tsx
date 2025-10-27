import Image from "next/image";
import ConsultButton from "../ui/ConsultButton";
export default function HeroSection() {
  return (
    <section className="bg-gray-200">
      <div className="container grid-cols-1 md:py-[150px]  py-[80px] px-5 mx-auto max-w-screen-xl] md:grid-cols-2 gap-x-8 grid items-center">
        {/* Text Content */}
        <div className="col-span-1 flex flex-col custom-row-gap mb-10 md:mb-0 md:pr-10 text-center md:text-left">
          <h1 className="md:text-[19px] text-[18px]  font-[600] tracking-[-0.5px] text-title ">
            Hébergement web Maroc
          </h1> 
          <h1 className="big-title title font-semibold text-title">
            Hébergement web depuis le Maroc
          </h1>

          <ConsultButton href="#plans" />
          <div className="flex flex-col md:items-start items-center">
            <p className="text-title text-[13px] font-[500] py-[5px] mb-[10px] tracking-[1.2px]">CONSULTATION PAR EMAIL ?</p>
            <p className=" border-bottom text-[31px] font-[600] text-title">
              info@hostino.com
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="col-span-1 flex z-10 justify-center">
          <div className="relative w-full">
            <Image
              src="/images/home/hebergement-web-maroc.png"
              alt="Web Hosting in Morocco"
              width={1300}
              height={977}
              className=" w-full h-full md:p-[20px] p-[25px] md:scale-100 lg:scale-100 rounded-lg "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
