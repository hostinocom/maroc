import Link from "next/link";

interface City {
  name: string;
  href: string;
}

const moroccanCities: City[] = [
  { name: "Tanger", href: "https://www.hostino.ma/agence-seo-tanger/" },
  { name: "Rabat", href: "https://www.hostino.ma/agence-seo-rabat/" },
  { name: "Kénitra", href: "https://www.hostino.ma/agence-seo-kenitra/" },
  { name: "Tétouan", href: "https://www.hostino.ma/agence-seo-tetouan/" },
  { name: "Larache", href: "https://www.hostino.ma/agence-seo-larache/" },
  { name: "Asilah", href: "https://www.hostino.ma/agence-seo-asilah/" },
  {
    name: "Chefchaouen",
    href: "https://www.hostino.ma/agence-seo-chefchaouen/",
  },
  { name: "Al hoceima", href: "https://www.hostino.ma/agence-seo-al-hoceima/" },
  { name: "Nador", href: "https://www.hostino.ma/agence-seo-nador/" },
  { name: "Casablanca", href: "https://www.hostino.ma/agence-seo-casablanca/" },
  { name: "Khouribga", href: "https://www.hostino.ma/agence-seo-khouribga/" },
  { name: "Fes", href: "https://www.hostino.ma/agence-seo-fes/" },
  { name: "Meknès", href: "https://www.hostino.ma/agence-seo-meknes/" },
  { name: "Ifrane", href: "https://www.hostino.ma/agence-seo-ifrane/" },
  { name: "Marrakech", href: "https://www.hostino.ma/agence-seo-marrakech/" },
  { name: "Essaouira", href: "https://www.hostino.ma/agence-seo-essaouira/" },
  { name: "Benguerir", href: "https://www.hostino.ma/agence-seo-benguerir/" },
  { name: "Agadir", href: "https://www.hostino.ma/agence-seo-agadir/" },
  { name: "Laayoune", href: "https://www.hostino.ma/agence-seo-laayoune/" },
  { name: "Dakhla", href: "https://www.hostino.ma/agence-seo-dakhla/" },
];

const NationalCoverage = ({ title , text , topic}: { title: string | undefined | TrustedHTML  , text?: string | undefined , topic?: string}) => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Cities List */}
          <div className=" gap-4">
            <h2 className="big-title mb-[40px] "  dangerouslySetInnerHTML={{ __html : title as string}}/>

           {
            text && (
                 <p className="paragraph  mb-[40px]">
                        {text}
                 </p>
            )
           }

            <div className="grid md:grid-cols-2 grid-cols-1">
              {moroccanCities.map((city, index) => (
                <Link
                  key={index}
                  href={city.href}
                  className="text-title mb-[5px] transition-colors font-medium"
                >
                  {topic} {city.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441728.5579234385!2d-9.998168768750002!3d31.791702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b265f3c7b1ab5%3A0x99f83ab3e9b22e25!2sMorocco!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalCoverage;
