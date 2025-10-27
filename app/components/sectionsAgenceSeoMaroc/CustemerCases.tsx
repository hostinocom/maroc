import React from 'react';

// Types
interface Keyword {
  term: string;
  position: number;
}

interface RankingCardProps {
  url: string;
  country: string;
  countryFlag?: string;
  keywords: Keyword[];
}

interface CustomerCasesProps {
  data: RankingCardProps[];
}

// Icons
const ExternalLinkIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GoogleIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// RankingCard Component
const RankingCard: React.FC<RankingCardProps> = ({ url, country, keywords }) => {
  return (
    <div className="bg-white rounded-[10px] border-3 border-gray-200 p-6  ">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <a 
          href={`#`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
        >
          <ExternalLinkIcon />
          <span className="font-medium">{url}</span>
        </a>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">{country}</span>
          <GoogleIcon />
        </div>
      </div>

      {/* Keywords Section */}
      <div className="space-y-3">
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Mots-clés</h3>
          <h3 className="font-bold text-gray-900">Position</h3>
        </div>

        {keywords.map((keyword, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-700">{keyword.term}</span>
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white font-bold text-sm">
              {keyword.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main CustomerCases Component
export const Cases: React.FC<CustomerCasesProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <RankingCard key={index} {...item} />
      ))}
    </div>
  );
};

// Demo with sample data
export default function CustomerCases() {
  const rankingsData: RankingCardProps[] = [
    {
      url: "serrurierpro.ma",
      country: "Maroc",
      keywords: [
        { term: "Serrurier Maroc", position: 1 },
        { term: "Ouverture Coffre-fort rabat", position: 1 },
        { term: "Serrurier Tanger", position: 1 },
        { term: "Serrurier Tétouan", position: 1 }
      ]
    },
    {
      url: "sendatrack.ma",
      country: "Maroc",
      keywords: [
        { term: "GPS Tanger", position: 1 },
        { term: "Société de GPS Tanger", position: 1 },
        { term: "Installation GPS Tanger", position: 1 },
        { term: "Société de Géolocalisation Tanger", position: 1 }
      ]
    },
    {
      url: "medilpodcast.com",
      country: "Maroc",
      keywords: [
        { term: "Podcast", position: 2 },
        { term: "Podcast Maroc", position: 2 },
        { term: "Plateforme Podcast Maroc", position: 1 },
        { term: "بودكاست المغرب", position: 1 }
      ]
    },
    {
      url: "lyonparebrise.fr",
      country: "France",
      keywords: [
        { term: "Réparation Pare Brise Lyon", position: 1 },
        { term: "Remplacement Pare Brise Lyon", position: 2 },
        { term: "Changement Pare Brise Lyon", position: 2 },
        { term: "Pare Brise Lyon", position: 3 }
      ]
    },
    {
      url: "pcreparatieamsterdam.nl",
      country: "Pays-Bas",
      keywords: [
        { term: "PC reparatie Amsterdam", position: 1 },
        { term: "Laptopreparatie Amsterdam", position: 2 },
        { term: "Laptop reparatie Amstedam", position: 1 },
        { term: "Computer reparatie Amsterdam", position: 1 }
      ]
    },
    {
      url: "prestigecolor.be",
      country: "Belgique",
      keywords: [
        { term: "Peintre Arlon", position: 1 },
        { term: "Peinture résidentielle Arlon", position: 1 },
        { term: "Peinture en Batiment à Arlon", position: 1 },
        { term: "Expert Peintre Arlon", position: 2 }
      ]
    }
  ];

  return (
   <section className='lg:my-[150px] mt-[80px]'>
     <div className="container">
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col mb-[30px] gap-5 items-center text-center justify-center'>
            <h1 className="big-title">Cas clients de <br/>notre agence SEO Maroc</h1>
            <p className='paragraph'>Marre de payer des agences&nbsp;<b>sans résultats ? </b>Il est temps de passer à une <b>solution qui fonctionne</b>.</p>

        </div>
        <Cases data={rankingsData} />
      </div>
    </div>
   </section>
  );
}