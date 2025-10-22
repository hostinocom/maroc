'use client';
import Image from 'next/image';

const benefits = [
  {
    image: "hebergement-web-securise-1024x597.jpg",
    title: "Hébergement web sécurisé",
    text: "Choisir un hébergement web sécurisé, c'est opter pour une <b>surveillance 24h/24</b> et 7j/7, assurée par des experts qui veillent en permanence à la sécurité de vos sites web. L'intégration de technologies avancées telles que L'IA permet une détection en temps réel des attaques et des anomalies, offrant une protection renforcée contre les menaces potentielles."
  },
  {
    image: "hebergement-web-evolutive-1024x597.jpg",
    title: "Hébergement web flexible",
    text: "Avec nos packs d'hébergement web Maroc <a style='text-decoration:underline;' href='https://www.hostino.ma/starty/'>Starty</a>, <a style='text-decoration:underline;' href='https://www.hostino.ma/business/'>Business</a>, vous bénéficiez de solutions flexibles qui permettent une transition facile sans interruption de service. Commencez avec <b>Starty</b> pour une solution économique et évoluez vers <b>Business</b> à mesure que vos besoins augmentent, sans avoir à reconfigurer ou transférer vos services."
  },
  {
    image: "hebergement-web-rapide-1024x597.jpg",
    title: "Hébergement web rapide",
    text: "Un temps de réponse rapide améliore non seulement l'expérience utilisateur et la conversion, mais aussi votre classement dans les résultats des moteurs de recherche. Nos solutions d'hébergement web sont optimisées pour garantir un <b>chargement ultra rapide</b>, contribuant ainsi à un meilleur score sur des outils tels que PageSpeed Insights."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className={`flex flex-col gap-[20px] mb-8 col-span-1 `}
          >
            <div>
              <Image
                src={`/images/${benefit.image}`}
                alt={benefit.title}
                width={1024}
                height={597}
                className="rounded-lg shadow-md"
              />
            </div>
              <h3 className="text-2xl font-bold text-title lg:pr-[150px] mb-4" dangerouslySetInnerHTML={{ __html: benefit.title }} />
              <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.text }} />
          </div>
        ))}
      </div>
    </section>
  );
}