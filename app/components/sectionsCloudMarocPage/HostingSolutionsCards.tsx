import React from "react";
import AnimatedButton from "../ui/AnimatedButton";
import Link from "next/link";
import Image from "next/image";

const HostingSolutionsCards = () => {
  return (
    <div className="flex w-full relative lg:mt-[150px] mt-[60px] mb-[20px]">
      <div className="container flex md:flex-row flex-col">
        <div className="md:w-[50%] w-[100%]  bg-white border-1 border-gray-300 flex flex-col justify-center text-center rounded-[10px] lg:ml-[160px] mr-[15px] py-[40px] px-[30px]">
          <h3 className="md:text-[29px] sm:text-[33px] text-[35px] text-title mb-[20px] font-[600] sm:leading-[33px] tracking-[-1.8px] sm:tracking-[-1.5px]">
            Cloud
            <br /> VPS Maroc
          </h3>
          <p className="paragraph-15 mb-[20px]">
            Solution de <b>Cloud VPS souverain,</b> ultra-performante et
            évolutive, pour héberger vos données, sites, applications et autres
            systèmes nécessitant des ressources importantes.
          </p>
          <Link href={"#vps"} className="text-white bg-title ">
            <AnimatedButton
              text={"Découvrir nos offres"}
              hoverText="Découvrir nos offres"
              bgColor={"bg-title"}
              hoverBgColor="bg-title"
              textColor={"text-white"}
              className="py-[12px] w-full text-[17px] font-[600]"
            />
          </Link>
        </div>
        <div className="md:w-[50%] w-[100%] bg-white flex flex-col justify-center text-center border-1 border-primary rounded-[10px] lg:mr-[160px] ml-[15px] py-[40px] px-[30px]">
          <h3 className="md:text-[29px] sm:text-[33px] text-[35px] text-title mb-[20px] font-[600] sm:leading-[33px] tracking-[-1.8px] sm:tracking-[-1.5px]">
            Hébergement
            <br /> Mutualisé Maroc
          </h3>
          <p className="paragraph-15 mb-[20px]">
            Solution <b>économique</b> pour héberger votre site web sur un
            serveur mutualisé <b>dans un datacenter au Maroc</b>, garantissant
            la souveraineté et la confidentialité des données sensibles.
          </p>
          <Link href={"#plans"} className="text-white bg-primary ">
            <AnimatedButton
              text={"Découvrir nos offres"}
              hoverText={"Découvrir nos offres"}
              bgColor={"bg-primary"}
              hoverBgColor="bg-title"
              textColor={"text-white"}
              className="py-[12px] w-full text-[17px] font-[600]"
            />
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default HostingSolutionsCards;
