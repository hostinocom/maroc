import React from 'react';
import Link from 'next/link';

interface HostingImpactRow {
  factor: string;
  impact: string;
  consequence: string;
}

const hostingImpactData: HostingImpactRow[] = [
  {
    factor: "Temps de chargement < 2s",
    impact: "+30% conversions",
    consequence: "Meilleur Quality Score, CPC plus bas",
  },
  {
    factor: "Temps de chargement > 5s",
    impact: "-40% conversions",
    consequence: "Hausse du taux de rebond, ROI en baisse",
  },
  {
    factor: "Disponibilité (Uptime 99,9%)",
    impact: "Pertes < 0,1%",
    consequence: "Investissement publicitaire sécurisé",
  },
  {
    factor: "Disponibilité (Uptime < 98%)",
    impact: "2% budget gaspillé",
    consequence: "Clics vers un site inaccessible",
  },
  {
    factor: "Site sécurisé (HTTPS)",
    impact: "+20% leads",
    consequence: "Meilleure crédibilité, conversions accrues",
  },
  {
    factor: "Site non sécurisé (HTTP)",
    impact: "-30% clics",
    consequence: "Perte de confiance, baisse de performance",
  },
  {
    factor: "Hébergement optimisé mobile",
    impact: "+25% conversions",
    consequence: "Navigation fluide, meilleure UX",
  },
  {
    factor: "Hébergement lent sur mobile",
    impact: "+50% abandons",
    consequence: "Perte de prospects malgré annonces ciblées",
  },
];

const HostingImpactSection = () => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container mx-auto px-4">
        <h2 className="big-title mb-[20px]">
          Impact de l'hébergement sur vos
          <br />
          campagnes Google Ads
        </h2>

        <p className="paragraph mb-[20px]">
          L'hébergement de votre site web a un impact direct et souvent sous-estimé sur la performance de vos campagnes Google Ads.
        </p>

        <p className="paragraph mb-[60px]">
          Même si vos annonces sont parfaitement ciblées et génèrent un volume élevé de clics, un site lent ou instable risque de faire fuir vos visiteurs avant qu'ils ne deviennent clients. La <strong>vitesse de chargement</strong> est essentielle, car Google intègre ce critère dans le Quality Score : plus votre site est rapide, <strong>plus vos coûts par clic diminuent</strong> et vos chances de conversion augmentent.
        </p>

        {/* Table */}
        <div className="overflow-x-auto mb-[60px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-[600] text-[16px] border border-gray-300">
                  Facteur lié à l'hébergement
                </th>
                <th className="text-left p-4 font-[600] text-[16px] border border-gray-300">
                  Impact mesuré sur Google Ads
                </th>
                <th className="text-left p-4 font-[600] text-[16px] border border-gray-300">
                  Conséquence directe sur les campagnes
                </th>
              </tr>
            </thead>
            <tbody>
              {hostingImpactData.map((row, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-4 text-[16px] border border-gray-300">
                    {row.factor}
                  </td>
                  <td className="p-4 text-[16px] border border-gray-300">
                    {row.impact}
                  </td>
                  <td className="p-4 text-[16px] border border-gray-300">
                    {row.consequence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="paragraph">
          C'est dans cette logique que Hostino, prestataire{' '}
          <Link 
            href="/hebergement-web/"
            className="font-[600] text-[#0A2540] underline hover:text-[#10B981] transition-colors"
          >
            d'hébergement web
          </Link>
          , a lancé des offres optimisées SEO, accessibles à tous. Que vous soyez client SEO/SEA ou non, vous pouvez bénéficier d'un hébergement rapide, sécurisé et spécialement conçu pour améliorer la visibilité et les performances de votre site sur Google.
        </p>
      </div>
    </section>
  );
};

export default HostingImpactSection;