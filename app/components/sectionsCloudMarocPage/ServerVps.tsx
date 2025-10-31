// src/components/sections/TextLeftImageRight.tsx
import Image from "next/image";
import ConsultButton from "../ui/ConsultButton";

interface TextLeftImageRightProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
  consultButtonTextExiste?: boolean;
  textButton?: string;
  href?: string;
}

// components/CloudVPSCompact.js
const CloudVPSCompact = () => {
  const features = [
    { icon: "🇲🇦", text: "Adresse IP marocaine" },
    { icon: "⚡", text: "Jusqu'à 512 vCPU" },
    { icon: "💾", text: "Jusqu'à 1024 Go de RAM" },
    { icon: "🚀", text: "Stockage NVMe SSD évolutif" },
  ];

  const specs = [
    "Datacenter certifié Tier III et ISO 27001",
    "Redondance réseau sur 2 emplacements",
    "Sauvegardes automatisées",
    "WAF avancé inclus",
    "Connectivité partagée ou dédiée",
    "Uptime garanti de 99.9%",
    "Infogérance sur mesure",
  ];

  return (
    <section id="vps" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Cloud <span className="text-blue-600">VPS Maroc</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Infrastructure performante et souveraine pour vos besoins
              critiques
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Features Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <span className="text-2xl block mb-2">{feature.icon}</span>
                    <p className="text-sm font-medium text-gray-800">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  Caractéristiques techniques
                </h3>
                <ul className="space-y-3">
                  {specs.map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {spec.includes("99.9%") ||
                      spec.includes("Infogérance") ? (
                        <strong>{spec}</strong>
                      ) : (
                        spec
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à démarrer ?</h2>
              <p className="text-blue-100 mb-6 text-lg">
                Obtenez votre devis personnalisé pour une solution Cloud VPS
                souveraine au Maroc
              </p>

              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 w-full max-w-xs mx-auto">
                Demander un devis
              </button>

              <div className="mt-6 text-blue-200 text-sm">
                <p>⚡ Activation rapide</p>
                <p>🔒 Données hébergées au Maroc</p>
                <p>📞 Support technique dédié</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ServerVps() {

  const title = "Serveur VPS Cloud situé au Maroc 🇲🇦";
  const paragraphs = [
    'La solution Cloud <a href="/vps-maroc/">VPS Maroc</a> de Hostino vous offre une infrastructure performante, <b>sécurisée et souveraine</b>, parfaitement adaptée aux exigences des institutions gouvernementales, du secteur de la santé, de l’éducation et des services publics.',
    "Que ce soit pour héberger des données sensibles, des applications critiques ou des sites à fort trafic, notre solution garantit confidentialité, <b>stabilité et conformité</b> aux standards de sécurité.",
    "Grâce à une flexibilité totale, vous pouvez ajuster vos ressources en fonction de vos besoins, tout en bénéficiant d’une haute disponibilité et d’un support technique réactif.",
  ];

  return (
    <section id="vps" className="lg:my-[150px] my-[80px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="col-span-1">
            <h2
              className="title-section xl:pr-[130px] lg:pr-[50px] font-bold text-title mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="paragraph"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
              <ConsultButton href="/vps-maroc#vps" text={"Demander un devis"} />
          </div>

          {/* Image Section */}
          <div className="col-span-1 ">
            <div className="flex flex-col lg:ml-[100px] rounded-[10px] border-1 border-primary px-[30px] py-[40px] items-center h-full gap-5 justify-center text-center">
              <h3 className="lg:text-[29px] lg:leading-[33px] md:leading-[52px] leading-[40px] md:text-[45px] text-[35px] font-[600] md:tracking-[-3px] lg:tracking-[-1.5px] tracking-[-1.2px] text-title">
                Cloud <br /> VPS Maroc
              </h3>

                <ConsultButton href="/vps-maroc#vps" text={"Demander un devis"} />

              <ul className="pl-6 space-y-2 text-title">
                <li className="text-center mx-auto"> 
                   <div className="flex mx-auto justify-center">
                     <Image
                      src="/images/03/flag-maroc.svg"
                      alt="Check"
                      width={20}
                      height={20}
                    />
                    <p><b>Adresse IP marocaine</b></p>
                   </div>
                </li>
                <li className="text-[14px]">Jusqu’à <b>512 vCPU</b></li>
                <li className="text-[14px]">Jusqu’à <b>1024 Go de RAM</b></li>
                <li className="text-[14px]">Stockage <b>NVMe SSD évolutif</b></li>
                <li className="text-[14px]">Datacenter certifié <b>Tier III et ISO 27001</b></li>
                <li className="text-[14px]">Redondance réseau sur 2 emplacements</li>
                <li className="text-[14px]">Sauvegardes automatisées</li>
                <li className="text-[14px]">WAF avancé inclus</li>
                <li className="text-[14px]">Connectivité partagée ou dédiée</li>
                <li className="text-[14px]">Uptime garanti de <b>99.9%</b></li>
                <li className="text-[14px]"><b>Infogérance sur mesure</b></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
