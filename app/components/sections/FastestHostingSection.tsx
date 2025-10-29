
// src/components/sections/FastestHostingSection.tsx
import Image from "next/image";

export default function FastestHostingSection() {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="col-span-1">
            <h2 className="title-section xl:pr-[100px] lg:pr-[50px] font-bold text-title mb-6">
              Commencez avec un hébergement web à grande vitesse
            </h2>

            <p className="paragraph mb-6">
              Dans un paysage digital en constante évolution, les entreprises
              marocaines font face au défi majeur de posséder un site web
              performant qui reflète leur image de marque et génère des
              conversions. Un site web lent ou défaillant peut nuire à la
              crédibilité et à la réputation de l’entreprise, entraînant une
              perte de clients potentiels.
            </p>
            <p className="paragraph mb-6">
              C’est pourquoi nous avons conçu des solutions d’hébergement web{" "}
              <b>haut de gamme </b> qui surpassent largement les offres low-cost
              du marché. Grâce à notre infrastructure matérielle optimisée,
              votre site web bénéficiera de{" "}
              <a className="underline" href="https://support.google.com/analytics/answer/2383341?hl=fr">
                <b>temps de réponse</b>
              </a>{" "}
              jusqu’à 50 % plus rapides que ceux de la concurrence.
             
            </p>
            <p className="paragraph">
              Appelez le +212 531-031-186 et confiez l’hébergement de votre site
              web à un prestataire de confiance au Maroc.
            </p>
          </div>
          <div className="col-span-1 flex justify-end">
            <Image
              src="/images/01/hebergement-web-maroc-cloud.svg"
              alt="Cloud Hosting in Morocco"
              width={3508}
              height={2481}
              className="xl:w-[90%] lg:w-[85%] md:[85%] h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
