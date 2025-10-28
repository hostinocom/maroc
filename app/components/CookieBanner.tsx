"use client";
import { useEffect, useState } from "react";
import { updateConsent, waitForGtag } from "../lib/gtag";
import Link from "next/link";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie_consent");
    if (storedConsent !== null) {
      setCookieConsent(storedConsent === "true");
    }
  }, []);

  useEffect(() => {
    if (cookieConsent === null) return;

    const newValue = cookieConsent ? "granted" : "denied";

    waitForGtag(() => {
      updateConsent(newValue);
    });
  }, [cookieConsent]);

  const acceptCookies = () => {
    setCookieConsent(true);
    localStorage.setItem("cookie_consent", "true");
  };

  const declineCookies = () => {
    setCookieConsent(false);
    localStorage.setItem("cookie_consent", "false");
  };

  if (cookieConsent !== null) return null;

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-white rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p className="text-title">
            Nous utilisons <span className="font-bold text-primary font-bold">cookies</span> sur
            Notre site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={declineCookies}
          className="px-5 py-2 font-[400] text-title rounded-md border-gray-300 border-1"
        >
          refuser
        </button>
        <button
          onClick={acceptCookies}
          className="bg-primary font-[400] px-5 py-2 text-white rounded-lg"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
