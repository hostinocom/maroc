
// src/components/sections/WhatIsHostingSection.tsx
import Image from "next/image";

export default function WhatIsHostingSection() {
  return (
    <section className=" lg:my-[150px] my-[80px] bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 items-center">
          <div className="col-span-1">
            <h2 className="title-section xl:pr-[100px] lg:pr-[50px] px-0">
              Hébergement web : qu'est-ce que c'est ?
            </h2>
            <div className="prose flex flex-col gap-7  prose-gray max-w-none">
              <p className="paragraph">
                L’hébergement web est un élément essentiel pour rendre votre
                site web accessible sur Internet. C’est le service qui permet de
                stocker Les fichiers et les bases de données associés de votre
                projet en ligne.
              </p>
              <p className="paragraph">
                Le choix de votre hébergement est stratégique, car il impacte
                directement l’expérience utilisateur. Un hébergement performant
                garantit une navigation fluide, tandis qu’un hébergement
                sécurisé protège vos données{" "}
                <b>
                  contre les{" "}
                  <a
                    href="https://about.google/intl/ALL_fr/stories/notin-interview/"
                    rel="noopener"
                  >
                    cyberattaques.
                  </a>
                </b>
              </p>
              <p className="paragraph">
                Le service d’hébergement web, offert par des entreprises
                spécialisées appelées ‘hébergeurs web’, consiste à mettre
                l’infrastructure nécessaire pour rendre votre site accessible en
                ligne.
              </p>
            </div>
          </div>
          <div className="col-span-1  flex justify-end">
            <Image
              src="/images/01/hebergement-web.jpg"
              alt="What is Web Hosting?"
              width={1484}
              height={1243}
              className="rounded-lg  lg:max-w-full sm:w-[89%] w-[100%] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
