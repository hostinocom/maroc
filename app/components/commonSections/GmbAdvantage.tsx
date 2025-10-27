import Link from "next/link";
import React from "react";

// Check Icon SVG
const CheckIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="#00CC61" />
    <path
      d="M15 25L22 32L35 18"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface GMBAdvantage {
  title: string;
  description: string;
  highlight?: string;
}



const GmbAdvantages = ({advantages , title} : {advantages?: GMBAdvantage[] , title: string}) => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container ]">
        <h2 className="big-title font-[600] mb-[30px] text-title " dangerouslySetInnerHTML={{__html : title}} />


        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16">
          {advantages?.map((advantage, index) => (
            <div key={index} className="flex flex-col">
              {/* Check Icon */}
              <div className="md:mb-[24px] mb-[12px]">
                <CheckIcon />
              </div>

              {/* Title */}
              <h3 className="md:text-[28px] text-[22px] text-title md:leading-[36px] tracking-[-0.8px] font-[600] mb-[20px]">
                {advantage.title}
              </h3>

              {/* Description */}
              <p
                className="paragraph text-[16px] leading-[28px] text-title"
                dangerouslySetInnerHTML={{ __html: advantage.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GmbAdvantages;