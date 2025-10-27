// components/EmailCreationSteps.js

import React from "react";
import AnimatedButton from "../ui/AnimatedButton";
import Link from "next/link";

const EmailCreationSteps = () => {
  // Définition des données pour chaque étape pour une meilleure maintenabilité
  const steps = [
    {
      number: "01",
      title: (
        <>
          Choisir un plan
          <br className="lg:block hidden" />{" "}
          <span className="border-bottom">Maily®</span>
        </>
      ),
      content: (
        <>
          La première étape consiste à{" "}
          <strong className="font-semibold text-[#0d1b32]">
            choisir l'offre
          </strong>{" "}
          la plus adaptée à vos besoins en matière de stockage, de nombre
          d'utilisateurs, etc.
        </>
      ),
      button: {
        text: "Voir nos offres",
        href: "#offers",
      },
    },
    {
      number: "02",
      title: (
        <>
          Passer au
          <br className="lg:block hidden" />{" "}
          <span className="border-bottom">paiement</span>
        </>
      ),
      content: (
        <>
          Sélectionnez le{" "}
          <strong className="font-semibold text-[#0d1b32]">
            nombre d'utilisateurs
          </strong>{" "}
          Maily®. Une fois le paiement effectué, vous pouvez gérer vos emails
          depuis la gestion de votre compte Maily®.
        </>
      ),
    },
    {
      icon: (
        <div>
          <svg
            className="w-9 h-9 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={10}
            height={10}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
      ),
      title: (
        <>
          Configuration <br className="lg:block hidden" />
          <span className="border-bottom">des emails</span>
        </>
      ),
      content: (
        <>
          Enfin, c'est très simple : <b>nous prenons en charge</b> la
          configuration des paramètres de vos e-mails et vous communiquons les{" "}
          <b>identifiants</b> ainsi que les <b>instructions</b>.
        </>
      ),
    },
  ];

  type StepButton = {
    text: string;
    href: string;
  };

  interface StepCardProps {
    number?: string;
    icon?: React.ReactNode;
    title: string;
    content: React.ReactNode;
    button?: StepButton;
  }

  const StepCard: React.FC<StepCardProps> = ({
    number,
    icon,
    title,
    content,
    button,
  }) => (
    <div className="flex-1 ">
      {/* Step Number/Icon */}
      <div
        className={`
         font-[600] lg:mb-[20px]
        ${number ? "text-primary text-[58px] font-[600]" : ""}
        ${
          icon
            ? "bg-primary rounded-full py-[10px]  mb-[20px] w-12 h-12 flex items-center justify-center"
            : ""
        }
      `}
      >
        {number || icon}
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[27px] font-[600] text-title lg:mb-[15px] mb-[5px] inline-block ">
        {title}
      </h3>

      {/* Content */}
      <p className="paragraph-16 mt-4 ">{content}</p>

      {/* Button (only for step 01) */}
      {button && (
        <Link href={"#offres"} className="">
          <AnimatedButton
            text={"Voir nos offres"}
            hoverText="Voir nos offres"
            bgColor={"bg-transparent"}
            textColor={"text-title"}
            hoverBgColor={"bg-transparent"}
            className="text-title border-3 border-primary rounded-sm px-[40px] font-[600] py-[10px] "
            arrowButton={true}
            colorArrow={"#022545"}
          />
        </Link>
      )}
    </div>
  );

  return (
    <section className="lg:my-[150px]  my-[80px]">
      <div className="container">
        {/* Section Header */}
        <h2 className="font-[600] sm:text-left text-center title-section">
          Quelques clics suffisent pour créer
          <br className="md:block hidden" /> vos emails nom@entreprise.ma
        </h2>

        {/* Steps Container - Responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              content={step.content}
              button={step.button}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailCreationSteps;
