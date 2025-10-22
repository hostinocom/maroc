'use client';


// src/components/sections/TrustedBySection.tsx
import Image from 'next/image';

export default function TrustedBySection() {
  return (
    <section className=" bg-white">
      <div className="container text-center">
        <p className="text-title font-[400] text-[17px] mb-[20px]">
          <b>Hostino®</b>, partenaire de confiance d'un vaste réseau d'entreprises et d'institutions au Maroc.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/home/references-hebergement-maroc.png"
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