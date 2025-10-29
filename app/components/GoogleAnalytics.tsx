// "use client";
// import { useEffect, useState } from "react";
// import { updateConsent, waitForGtag } from "../lib/gtag";
// import Link from "next/link";

// export default function CookieBanner() {
//   const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

//   useEffect(() => {
//     const storedConsent = localStorage.getItem("cookie_consent");
//     if (storedConsent !== null) {
//       setCookieConsent(storedConsent === "true");
//     }
//   }, []);

//   useEffect(() => {
//     if (cookieConsent === null) return;

//     const newValue = cookieConsent ? "granted" : "denied";

//     waitForGtag(() => {
//       updateConsent(newValue);
//     });
//   }, [cookieConsent]);

//   const acceptCookies = () => {
//     setCookieConsent(true);
//     localStorage.setItem("cookie_consent", "true");
//   };

//   const declineCookies = () => {
//     setCookieConsent(false);
//     localStorage.setItem("cookie_consent", "false");
//   };

//   if (cookieConsent !== null) return null;

//   return (
//     <div
//       className={` bg-white mx-auto lg:w-[45%] sm:w-[80%] w-[90%] z-[111]
//                         fixed bottom-[10px] left-0 right-0 
//                         flex px-3 md:px-4 py-3 justify-between  items-center flex-col sm:flex-row gap-4  
//                           rounded-lg shadow_main`}
//     >
//       <div className="text-center z-2">
//         <p className="text-title sm:text-left text-center text-[14px] sm:px-[0] px-[25px]">
//           Ce site web utilise des cookies pour améliorer votre expérience.
//         </p>
//       </div>

//       <div className="flex gap-2">
//         <button
//           onClick={declineCookies}
//           className="px-5 py-2 text-title font-[400] text-[14px] rounded-md border-gray-300 border-1"
//         >
//           Refuser
//         </button>
//         <button
//           onClick={acceptCookies}
//           className="bg-primary font-[400] px-5 py-2 text-[14px] text-white rounded-lg"
//         >
//           Accepter
//         </button>
//       </div>
//     </div>
//   );
// }