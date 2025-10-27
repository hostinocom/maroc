'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showButton, setShowButton] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('cookieConsent');
    if (hasConsented) {
      setShowButton(false);
    }
  }, []);

  const handleAccept = () => {
    const handleAccept = async () => {
    // Call API route to set the cookie server-side
    await fetch('/api/consent', { method: 'POST' });
    setShowModal(false);
  };
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setIsHovered(false);
  };

  if (!showButton) return null;

  return (
    <>
      {/* Floating Button - Bottom Left */}
      <div className="fixed bottom-[-32px] shadow-6xl cursor-pointer transition-all duration-300  hover:bottom-0 left-6 z-50">
        <button
          onClick={handleOpenModal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-white text-[#003B5C] font-bold py-3 px-6 rounded-lg   "
        >
          Gérer le consentement  
        </button>
      </div>

      {/* Cookie Modal */}
      {showModal && (
        <div className="fixed left-1 sm:w-auto w-full bottom-1 px-4 py-4 bg-opacity-50  z-50 pt-[100px]">
          <div className="bg-white rounded-xl shadow-2xl p-6 relative animate-slideUp">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-[#003B5C] "
            >

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

           

            {/* Content */}
            <div className="mb-6">
            
              <p className="text-sm text-gray-700 leading-relaxed">
                Ce site web utilise des cookies pour améliorer votre expérience.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button
                onClick={handleAccept}
                className="flex-1 bg-[#00D563] text-white  py-2 px-4 rounded hover:bg-[#00C055] transition-colors "
              >
                Accepter
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-100 text-[#003B5C]  py-2 px-4 rounded hover:bg-gray-200 transition-colors"
              >
                En savoir plus.
              </button>
            </div>

            {/* Links */}
            <div className="flex justify-center gap-6 text-sm">
              <Link
                href="/politique-cookies/"
                className="text-blue-600 text-[12px]  underline font-medium"
              >
                Politique cookies
              </Link>
              <Link
                href="/conditions-generales/"
                className="text-blue-600 text-[12px]  underline font-medium"
              >
                Conditions générales
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
}