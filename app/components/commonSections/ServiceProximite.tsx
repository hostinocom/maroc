import Link from "next/link";

export default function ServiceProximite({ page }: { page: string }) {
  const moroccanCities = [
    "Tanger",
    "Tétouan",
    "Larache",
    "Asilah",
    "Chefchaouen",
    "Ksar El Kébir",
    "Ouezzane",
    "Al Hoceïma",
    "Fès",
    "Meknès",
    "Séfrou",
    "Taza",
    "Taounate",
    "Khémisset",
    "Rabat",
    "Kénitra",
    "Sidi Kacem",
    "Sidi Slimane",
    "Casablanca",
    "Mohammédia",
    "El Jadida",
    "Khénifra",
    "Béni Mellal",
    "Khouribga",
    "Ifrane",
    "Marrakech",
    "Essaouira",
    "Benguerir",
  ];

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-title mb-8 text-center md:text-left">
          Service
          <br />
          de proximité
        </h2>

        {/* Cities Grid */}
        <div className="flex flex-wrap gap-1">
          {moroccanCities.map((city) => {
            const formattedCity = city.toUpperCase().replace(/\s+/g, "-");
            return (
              <Link
                key={city}
                href={`https://www.hostino.ma/${page}-${formattedCity}`}
                className="py-[2.5px] px-[4px] border border-gray-400 text-[16px] text-title"
              >
                {city}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
