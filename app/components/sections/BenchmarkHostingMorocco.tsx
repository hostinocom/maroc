import Image from "next/image";

export default function BenchmarkHostingMorocco() {
  return (
    <section className="bg-white lg:my-[150px] my-[80px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="title-section">
              La référence de l'hébergement web au Maroc
            </h2>

            <div className="space-y-4 text-[#022545] text-lg">
              <p className="paragraph">
                Chez Hostino®, nous sommes fiers d'être la référence de
                l'hébergement web au Maroc, en offrant une qualité de service
                irréprochable, une sécurité renforcée, un accompagnement
                personnalisé et un support technique réactif à chaque étape.
              </p>

              <p className="paragraph">
                Alignés sur la{" "}
                <span className="font-bold">stratégie nationale</span>{" "}
                <a
                  href="#"
                  className="underline"
                >
                  "Digital Morocco 2030"
                </a>{" "}
                initiée par le Ministère de la Transition Numérique et de la
                Réforme de l'Administration, qui vise à positionner le Maroc en
                tant que hub numérique régional, nous sommes là pour vous
                accompagner dans l'exploitation des opportunités offertes par ce
                secteur en pleine croissance.
              </p>

              <p className="paragraph">
                Hostino®, c'est aussi une vision claire pour la souveraineté
                numérique, avec un{" "}
                <a
                  href="#"
                  className="underline"
                >
                  Cloud 100 % marocain
                </a>{" "}
                et des{" "}
                <a
                  href="#"
                  className="underline"
                >
                  VPS
                </a>{" "}
                hébergés au Maroc, conçus pour garantir que vos données restent
                sur le territoire national, tout en respectant les standards
                internationaux de confidentialité, de sécurité et de
                performance.
              </p>

              <p className="  paragraph">
                Rejoignez la communauté des entreprises marocaines qui font
                confiance à Hostino® pour accélérer leur croissance numérique.
              </p>
            </div>
          </div>

          {/* Right Map Section */}
          <div className="relative">
            {/* Morocco Map */}
            <Image
              src="/images/home/hebergeur-web-maroc.jpg"
              alt="Hébergeur web au Maroc"
              width={900}
              height={600}
              className="lg:w-[88%] ml-auto"
            />
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style> */}
    </section>
  );
}
