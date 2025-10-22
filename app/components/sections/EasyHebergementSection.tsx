import Image from 'next/image';

export default function EasyHebergementSection() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2  items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="title-section">
              Votre hébergement web en toute facilité
            </h2>

            <h3 className="text-2xl lg:text-3xl font-semibold text-[#022545]">
              Votre meilleur choix d'hébergement web au Maroc
            </h3>

            <div className="space-y-6 text-[#022545]">
              {/* Feature 1 */}
              <div>
                <p className="paragraph">
                  – Des<b className="font-bold"> performances inégalées :</b> Nos serveurs ultra-rapides 
                  garantissent des temps de chargement jusqu'à 3 fois plus rapides 
                  que la concurrence.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <p className="paragraph">
                  <b className="font-bold">– La sécurité au cœur de nos préoccupations :</b> Nous mettons en 
                  place des mesures de sécurité robustes pour protéger vos données 
                  et celles de vos utilisateurs.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <p className="paragraph">
                  – Notre <b className="font-bold">connaissance approfondie</b> de l'écosystème digital au 
                  Maroc nous permet de soutenir le développement rapide de 
                  l'économie numérique, de faciliter la transformation digitale des 
                  entreprises, et d'améliorer leur compétitivité, notamment celle des 
                  TPE/PME, auto-entrepreneurs, et startups.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              
              {/* Placeholder for actual image - replace with your image path */}
              <div className='flex justify-end'>
                {/* Replace this div with actual Image component */}
                <Image 
                  src="/images/hebergement-web-facile-1024x924.jpg" 
                  alt="Hébergement web Maroc"
                   width={3508}
                  height={2481}
                  className="xl:w-[90%] lg:w-[95%] h-auto rounded-lg"
            
                />
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}