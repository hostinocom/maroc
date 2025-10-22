"use client";

import Image from "next/image";
// src/components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-title py-8">
      <div className="container mx-auto px-4">
        <div className=" md:w-[60%] sm:w-[80%] w-[100%] mx-auto  mb-16">
          <Image
            src="/images/cmi-hebergement-1024x70.jpg"
            alt="CMI Hosting"
            className="mx-auto mb-6"
            width={1024}
            height={70}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/">
              <Image
                src="/images/logo-maroc.png"
                alt="Hostino"
                width={941}
                height={159}
                className="h-10 max-w-max mb-4"
              />
            </Link>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/hostinocom/"
                aria-label="Facebook"
                className="text-title p-4 rounded bg-gray-100 hover:text-green-500 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/hostino"
                aria-label="LinkedIn"
                className="text-title p-4 rounded bg-gray-100 hover:text-green-500 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">
              <Link href="/ma-domain-name">Domains</Link>
            </h5>
            <h5 className="text-lg font-bold mb-2">Web Hosting</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/starty" className="animated-link">
                  Starty®
                </Link>
              </li>
              <li>
                <Link href="/business" className="animated-link">
                  Business®
                </Link>
              </li>
            </ul>
            <h5 className="text-lg font-bold mt-4 mb-2">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/business-email" className="animated-link">
                  @Business Email
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Useful links</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://my.hostino.com/"
                  target="_blank"
                  className="animated-link"
                >
                  Client Area
                </Link>
              </li>
              <li>
                <Link
                  href="https://my.hostino.com/submitticket.php"
                  target="_blank"
                  className="animated-link"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://webmail.hostino.com/"
                  target="_blank"
                  className="animated-link"
                >
                  Webmail
                </Link>
              </li>
              <li>
                <Link
                  href="/payments"
                  target="_blank"
                  className="animated-link"
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.whoisma.com/en"
                  target="_blank"
                  className="animated-link"
                >
                  Whois
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-6">
              <h6 className="text-gray-400 mb-2">Any questions?</h6>
              <h2 className="text-xl font-bold">+212 (05) 31 03 11 86</h2>
            </div>
            <div>
              <h6 className="text-gray-400 mb-2">Need support?</h6>
              <h2 className="text-xl font-bold border-bottom">
                info@hostino.com
              </h2>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <Link href="/terms" className="mx-2 hover:text-title">
            Terms and Conditions
          </Link>{" "}
          |
          <Link href="/legal-notice" className="mx-2 hover:text-title">
            Legal Notice
          </Link>{" "}
          |
          <Link href="/privacy" className="mx-2 hover:text-title">
            Privacy Policy
          </Link>{" "}
          |
          <Link href="/abuse" className="mx-2 hover:text-title">
            Anti-Abuse Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
