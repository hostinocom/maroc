// components/ContactForm.js

import React from 'react';

const ContactForm = ({title} : {title : string | React.ReactNode}) => {
  return (

    <div className="py-[80px] flex items-center justify-center bg-title p-4">
      <div className="container text-center">
        {/* Title */}
        <h1 className="text-white lg:text-[40px]  md:text-[40px] font-[600] text-[29px]  mb-6 pb-2 leading-relaxed">
          {title}
        </h1>
          

        {/* Form Container */}
        <form className="mt-10 lg:w-[80%] sm:w-[95%] w-[100%] mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* Input: Nom complet */}
            <input
              type="text"
              placeholder="Nom complet"
              className="bg-transparent rounded-[26px] text-white placeholder-gray-400 border border-primary focus:border-gray-500 focus:ring-gray-500  py-3 px-4 w-full md:w-1/3 transition duration-300 ease-in-out focus:outline-none"
              aria-label="Nom complet"
              required
            />

            {/* Input: Numéro de téléphone */}
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              className="bg-transparent rounded-[26px] text-white placeholder-gray-400 border border-primary focus:border-gray-500 focus:ring-gray-500  py-3 px-4 w-full md:w-1/3 transition duration-300 ease-in-out focus:outline-none"
              aria-label="Numéro de téléphone"
              required
            />

            {/* Input: Adresse email */}
            <input
              type="email"
              placeholder="Adresse email"
              className="bg-transparent rounded-[26px] text-white placeholder-gray-400 border border-primary focus:border-gray-500 focus:ring-gray-500  py-3 px-4 w-full md:w-1/3 transition duration-300 ease-in-out focus:outline-none"
              aria-label="Adresse email"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white rounded-[26px] sm:px-[150px] mt-12  sm:w-auto w-full  font-bold py-3 text-center "
          >
            Envoyer
          </button>
        </form>

        {/* Legal Text */}
        <p className="text-gray-400 text-sm mt-8">
          En cliquant sur "Envoyer", vous acceptez notre{' '}
          <a href="/politique-de-confidentialite/" className="underline hover:text-green-500 transition duration-300">
            politique de confidentialité.
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;