import React from "react";
import AnimatedButton from "../ui/AnimatedButton";
import Link from "next/link";

const comparisonData = [
  {
    feature: "Nombre de comptes email",
    starty: "5",
    startyPlus: "10",
    bgTransparent: false,
    title_bold: false,
    starty_bold: true,
    startyPlus_bold: true,
  },
  {
    feature: "Espace de stockage par adresse",
    starty: "1 Go",
    startyPlus: "5 Go",
    bgTransparent: false,
    title_bold: false,
    starty_bold: true,
    startyPlus_bold: true,
  },
  {
    feature: "Limite d'envoi par heure",
    starty: "50",
    startyPlus: "100",
    bgTransparent: false,
    title_bold: false,
    starty_bold: true,
    startyPlus_bold: true,
  },
  {
    feature: "Redirecteur d'emails",
    starty: "check",
    startyPlus: "check",
    bgTransparent: true,
    title_bold: false,
    starty_bold: false,
    startyPlus_bold: false,
  },
  {
    feature: "Répondeur automatique",
    starty: "check",
    startyPlus: "check",
    bgTransparent: true,
    title_bold: false,
    starty_bold: false,
    startyPlus_bold: false,
  },
  {
    feature: "CPU Limit",
    starty: "100%",
    startyPlus: "100%",
    bgTransparent: true,
    title_bold: true,
    starty_bold: false,
    startyPlus_bold: false,
  },
  {
    feature: "I/O Limit(IO)",
    starty: "2MB/s",
    startyPlus: "3MB/s",
    bgTransparent: true,
    title_bold: true,
    starty_bold: false,
    startyPlus_bold: false,
  },
  {
    feature: "Memory Limit",
    starty: "512 MB",
    startyPlus: "1 Go",
    bgTransparent: true,
    title_bold: true,
    starty_bold: false,
    startyPlus_bold: false,
  },
  {
    feature: "Processus simultanés",
    starty: "20",
    startyPlus: "50",
    bgTransparent: true,
    title_bold: true,
    starty_bold: false,
    startyPlus_bold: false,
  },
];

export default function StartyComparison() {
  return (
    <section className="my-[80px] relative md:my-[150px]">
      <div className="container mx-auto px-4">
        <div className="flex py-[20px] gap-[10px] border-t-2 border-gray-200 sticky top-0 bg-white items-center">
          {" "}
          {/* Titles column */}
          <div className="lg:w-[40%]  md:w-[37%] w-[55%] flex flex-col gap-y-[8px] ">
            <h3
              className="font-[600] lg:text-[49px] md:text-[39px] lg:trancking-[-2.1px] tracking-[-0.9px] lg:leading-[57px] md:leading-[46px] leading-[41px] text-[35px] md:pr-[50px] mb-0 text-title "
              style={{ marginBottom: "0 !important" }}
            >
              Comparer les plans Starty®
            </h3>
            <p className="paragraph text-title">
              Tarification transparente pour chaque étape.
            </p>
          </div>
          {/* Plan titles */}
          <div className="text-center lg:w-[25%] md:md:w-[21%] w-[22%]">
            <h3 className="font-[600] lg:text-[34px] sm:text-[31px] text-[15px] sm:leading-[1.3em] leading-[1.2em] lg:leading-[35px] text-title italic">
              Starty
            </h3>
          </div>
          <div className="text-center lg:w-[25%] md:md:w-[21%] w-[22%]">
            <h3 className="font-[600] lg:text-[34px] sm:text-[31px] text-[15px] sm:leading-[1.4em] leading-[1.2em] lg:leading-[35px] text-title">
              Starty Plus
            </h3>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className={`flex items-center p-4 gap-[10px] ${
                row.bgTransparent ? "bg-transparent" : "bg-gray-100"
              }`}
            >
              <div className="lg:w-[40%]  md:w-[37%] w-[55%] p-[10px]">
                <h5
                  className={`${row.title_bold ? "title-15-bold" : "title-15"}`}
                >
                  {row.feature}
                </h5>
              </div>

              <div className="text-center md:text-[18px] font-[600] lg:w-[25%] md:md:w-[21%] w-[22%] text-title">
                {row.starty === "check" ? (
                  <div className="flex justify-center">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  <span
                    className={`${
                      row.starty_bold ? "title-15-bold" : "title-15"
                    }`}
                  >
                    {row.starty}
                  </span>
                )}
              </div>

              <div className="text-center lg:w-[25%] md:md:w-[21%] w-[22%] text-title">
                {row.startyPlus === "check" ? (
                  <div className="flex justify-center">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  <span
                    className={`${
                      row.startyPlus_bold ? "title-15-bold" : "title-15"
                    }`}
                  >
                    {row.startyPlus}
                  </span>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-[10px] w-full">
            <div className="lg:w-[40%]  md:w-[37%] w-[0%]"></div>
            <Link
              href="https://my.hostino.com/order.php?pid=37&language=french&country=MA"
              className="text-white lg:w-[25%] md:md:w-[21%] w-[48%]"
            >
              <AnimatedButton
                text="Starty®"
                hoverText="Starty®"
                bgColor="bg-primary"
                hoverBgColor="bg-title"
                textColor="text-white"
                className="btn-10-20 w-full"
              />
            </Link>
            <Link
              href="https://my.hostino.com/order.php?pid=36&language=french&country=MA&promocode=UI12S"
              className="  text-white lg:w-[25%] md:md:w-[21%] w-[48%]"
            >
              <AnimatedButton
                text="Starty® Plus"
                hoverText="Starty® Plus"
                bgColor="bg-title"
                textColor="text-white"
                className="btn-10-20 w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
