'use client';


// src/components/sections/TrustedBySection.tsx
import Image from 'next/image';

export default function TrustedBySection() {
  return (
    <section className="py-12 bg-white">
      <div className="container text-center">
        <p className="text-gray-700 mb-6">
          <b>Hostino®</b>, partenaire de confiance d'un vaste réseau d'entreprises et d'institutions au Maroc.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/references-hebergement-maroc.png"
            alt="Réferences hébergement web maroc"
            width={2048}
            height={107}
            className="md:w-[80%]  w-[100%] mx-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}