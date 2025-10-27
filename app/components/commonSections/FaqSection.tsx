"use client";
import { useState } from "react";

type Props = {
  faqData?: any[];
  title: string;
};

const questionsAnswers = [
  {
    question: "Est‑ce que l’hébergement web Starty répond à mes besoins ?",
    answer: (
      <>
        <p className="mb-4">
          Si vous débutez votre présence en ligne ou si vous gérez un site
          personnel avec un trafic faible ou moyen, l’hébergement web Starty®
          répond parfaitement à votre besoin par trois formules différentes :
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Starty®, pour un démarrage à petit prix.</span>
          </li>
          <li className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Starty® pro, commencez comme un pro, prêt à passer au niveau
              supérieur.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Quel délai pour activer mon compte hébergement web Starty® ?",
    answers: [
      "Votre commande de l’hébergement web Starty sera activée une fois votre paiement est confirmé",
      "Dans le cas d’un paiement par carte bancaire marocaine (CMI) ou internationale (Stripe), l’activation est presque instantanée. Pour les paiements par virement bancaire, il est nécessaire d’envoyer le justificatif de votre transfert.",
    ],
  },
  {
    question: "Mes envois d’emails sont‑ils limités ?",
    answers: [
      "Afin de prévenir toute utilisation abusive du mass‑mailing, le nombre d’e‑mails envoyés par heure est limité en fonction de la quantité d’e‑mails incluse dans votre formule.",
    ],
  },
  {
    question: "Est‑il possible de changer le domaine de mon hébergement ?",
    answers: [
      "Le changement de domaine est permis dans les 30 jours qui suivent votre achat. Au‑delà de cette date le changement n’est pas possible.",
    ],
  },
  {
    question:
      "Mon hébergement Starty® a expiré, est‑ce que mes données sont perdues ?",
    answers: [
      "Vos données restent disponibles sur nos serveurs pendant une période de 30 jours après l’expiration de votre service.",
      "Elles peuvent être récupérées instantanément une fois que les frais de renouvellement sont réglés.",
      "Après cette première période de 30 jours, vos données restent uniquement sur nos serveurs de sauvegarde pendant une durée supplémentaire de 30 jours. Pour les restaurer, des frais de restauration de 499 DH HT sont exigés.",
      "Au‑delà de cette période totale de 60 jours après l’expiration du service, aucune récupération n’est possible, et les données sont définitivement supprimées.",
    ],
  },
  {
    question: "Puis‑je changer mon offre d’hébergement à tout moment ?",
    answers: [
      "Vous pouvez faire l’augmentation ou la baisse de formule à tout moment. Cela implique de payer uniquement le prorata en cas d’augmentation.",
    ],
  },
];

export default function FAQSection({
  faqData = questionsAnswers,
  title,
}: Props) {
  const [openItems, setOpenItems] = useState<number[]>([-1]); // First item open by default

  const toggleItem = (index: number) => {
    // Accordion mode: only one item open at a time
    setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
  };

  const renderAnswer = (item: any) => {
    if (item.answer) {
      // Single answer
      return typeof item.answer === "string" ? (
        <p dangerouslySetInnerHTML={{ __html: item.answer }} />
      ) : (
        <>{item.answer}</>
      );
    } else if (item.answers && Array.isArray(item.answers)) {
      // Multiple answers with mb-6 spacing
      return (
        <>
          {item.answers.map((phrase: string, idx: number) => (
            <p
              key={idx}
              className={
                idx < item.answers.length - 1 ? "paragraph" : "paragraph"
              }
              dangerouslySetInnerHTML={{ __html: phrase }}
            />
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <section className="bg-gray-100 py-[150px]">
      <div className="container">
        <h2 className="title-section">{title}</h2>

        <div className="flex md:flex-row flex-col gap-6 mt-[50px]">
          <div className="flex-1 md:max-w-[48%] flex flex-col gap-6">
            {faqData
              .slice(0, Math.ceil(faqData.length / 2))
              .map((item: any, index: number) => (
                <div
                  key={index}
                  className="w-full transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full bg-white rounded-lg px-6 py-5 flex items-center justify-between text-left group"
                    aria-expanded={openItems.includes(index)}
                  >
                    <span className="text-lg font-semibold text-[#14213D] pr-4 transition-colors duration-300">
                      {item.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-500 ease-in-out ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openItems.includes(index)
                        ? "max-h-[2000px] pt-10 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`px-6 pb-6 text-[#022545] leading-relaxed transform transition-all duration-500 ${
                        openItems.includes(index)
                          ? "translate-y-0"
                          : "-translate-y-4"
                      }`}
                    >
                      {renderAnswer(item)}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex-1 flex flex-col md:max-w-[48%]  gap-6">
            {faqData
              .slice(Math.ceil(faqData.length / 2), faqData.length + 1)
              .map((item: any, index: number) => (
                <div key={index + 3} className="transition-shadow duration-300">
                  <button
                    onClick={() => toggleItem(index + 3)}
                    className="w-full bg-white rounded-lg px-6 py-5 flex items-center justify-between text-left group"
                    aria-expanded={openItems.includes(index + 3)}
                  >
                    <span className="text-lg font-semibold text-[#14213D] pr-4 transition-colors duration-300">
                      {item.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-500 ease-in-out ${
                        openItems.includes(index + 3) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openItems.includes(index + 3)
                        ? "max-h-[2000px] pt-10 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`px-6 pb-6 text-[#022545] leading-relaxed transform transition-all duration-500 ${
                        openItems.includes(index + 3)
                          ? "translate-y-0"
                          : "-translate-y-4"
                      }`}
                    >
                      {renderAnswer(item)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
