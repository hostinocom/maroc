"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";

export default function HeroSection() {
  return (
    <section className="bg-gray-200 min-h-[70vh]">
      <div className="container grid-cols-1 md:grid-cols-2 gap-x-8 py-20 md:py-20 grid items-center">
        {/* Text Content */}
        <div className="col-span-1  mb-10 md:mb-0 md:pr-10 text-center md:text-left">
          <h2 className="text-base md:text-xl font-bold text-title mb-6">
            Hébergement web Maroc
          </h2> 
          <h1 className="sm:text-5xl  text-4xl lg:text-6xl title font-semibold text-title mb-4">
            Hébergement web depuis le Maroc
          </h1>

          <div className="my-6">
            <Link
              href="#plans"
              className="inline-block text-white font-bold "
            >
              <AnimatedButton
                text="Consultez les plans"
                hoverText="Consultez les plans"
                bgColor="bg-primary"
                textColor="text-white"
                hoverBgColor="bg-title"
                className=" py-3 px-8 rounded-lg font-bold"
                //onClick={handleClick}
              />
            </Link>
          </div>
          <div className="flex flex-col md:items-start items-center ">
            <p className="text-gray-500">Consultation par Email ?</p>
            <p className="text-lg  border-bottom text-[30px] font-semibold text-title">
              info@hostino.com
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="col-span-1 flex z-10 justify-center">
          <div className="relative w-full">
            <Image
              src="/images/hebergement-web-maroc-1024x769.png"
              alt="Web Hosting in Morocco"
              width={1300}
              height={977}
              className=" w-full h-full  md:scale-100 lg:scale-100 rounded-lg "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
