"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerButton from "../ui/BurgerButton";
import AnimatedButton from "../ui/AnimatedButton";

export default function Header() {
  const [hebergementOpen, setHebergementOpen] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHebergementOpen, setMobileHebergementOpen] = useState(false);
  const [mobileSeoOpen, setMobileSeoOpen] = useState(false);

  return (
    <header className="bg-white  py-[20px] shadow-sm top-0 z-70">
      <div className="h-[70px] flex items-center justify-between container">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-maroc.png"
              alt="Hostino"
              width={234}
              height={39}
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center sm:gap-[12px] xl:gap-[20px]">
            {/* Hébergement web Dropdown */}
            <div className="relative">
              <button
                onClick={() => setHebergementOpen(!hebergementOpen)}
                onMouseEnter={() => setHebergementOpen(true)}
                className="font-poppins animated-link text-[17px] flex items-center gap-2 font-semibold border-none p-0"
              >
                Hébergement web
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    hebergementOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {hebergementOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  onMouseLeave={() => setHebergementOpen(false)}
                >
                  <Link
                    href="/starty"
                    className="block animated-link px-6 py-3 text-title font-[600]  "
                  >
                    Starty
                  </Link>
                  <Link
                    href="/business"
                    className="block animated-link px-6 py-3 text-title font-[600]  "
                  >
                    Business
                  </Link>
                  <Link
                    href="/cloud-maroc"
                    className="block animated-link px-6 py-3 text-title font-[600]  "
                  >
                    Cloud Maroc
                  </Link>
                </div>
              )}
            </div>

            {/* @Email Pro */}
            <Link
              href="/email-professionnel/"
              className="font-poppins animated-link text-[17px] flex items-center gap-2 text-title font-[600] border-none p-0"
            >
              @Email Pro
            </Link>

            {/* Nom de domaine */}
            <Link
              href="/nom-de-domaine-ma"
              className="text-[#14213D] animated-link font-[600] hover:text-primary transition-colors"
            >
              Nom de domaine
            </Link>

            {/* SEO/SEA Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSeoOpen(!seoOpen)}
                onMouseEnter={() => setSeoOpen(true)}
                className="flex items-center animated-link gap-2 text-[#14213D] font-[600] hover:text-primary transition-colors"
              >
                <Image
                  src="/images/google-svg.svg"
                  alt="Hostino"
                  width={20}
                  height={20}
                />
                SEO/SEA
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    seoOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {seoOpen && (
                <div
                  className="absolute z-50 top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  onMouseLeave={() => setSeoOpen(false)}
                >
                  <Link
                    href="/agence-seo-maroc/"
                    className="block font-[600] px-6 py-3 animated-link text-title hover:text-primary transition-colors"
                  >
                    Agence SEO
                  </Link>
                  <Link
                    href="/google-my-business-maroc/"
                    className="block font-[600] px-6 py-3 animated-link text-title  hover:text-primary transition-colors"
                  >
                    Agence GMB
                  </Link>
                  <Link
                    href="/google-ads-maroc/"
                    className="block font-[600] px-6 py-3 animated-link text-title hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    Google Ads
                  </Link>
                  <Link
                    href="/creation-site-web-maroc/"
                    className="block font-[600] px-6 py-3 animated-link text-[#14213D] hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    Site web
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Connexion Button */}
            <Link href="https://my.hostino.com/index.php?rp=/login" className="hidden sm:block text-title" >
              <AnimatedButton
                text="Connexion"
                hoverText="Connexion"
                bgColor="bg-gray-100"
                hoverBgColor="bg-title"
                textColor="text-white"
                className="btn-10-20 text-title  lg:block hidden transition-colors"
              />
            </Link>

            {/* Language Selector */}
            <AnimatedButton
              text="EN"
              hoverText="EN"
              bgColor="bg-primary"
              hoverBgColor="bg-title"
              textColor="text-white"
              className="hidden lg:block  text-white bg-primary font-bold px-2 py-1 "
            />

            {/* Mobile Menu Button */}
            <div className="lg:hidden text-[#14213D]" aria-label="Toggle menu">
              <BurgerButton
                isOpen={mobileMenuOpen}
                onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-6 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Hébergement web Mobile */}
            <div>
              <button
                onClick={() => setMobileHebergementOpen(!mobileHebergementOpen)}
                className="w-full hover:text-primary cursor-pointer flex items-center justify-between py-2 text-[#14213D] font-[600] "
              >
                Hébergement web
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileHebergementOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {mobileHebergementOpen && (
                <div className="pl-4  space-y-2 mt-2">
                  <Link
                    href="/starty"
                    className="block py-2 text-title font-[600]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Starty
                  </Link>
                  <Link
                    href="/business"
                    className="block py-2 text-title font-[600] "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Business
                  </Link>
                  <Link
                    href="/cloud-maroc/"
                    className="block py-2 text-title font-[600] "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cloud Maroc
                  </Link>
                </div>
              )}
            </div>

            {/* @Email Pro */}
            <Link
              href="/email-professionnel/"
              className="block   text-[#14213D] cursor-pointer hover:text-primary py-2 font-[600] "
              onClick={() => setMobileMenuOpen(false)}
            >
              @Email Pro
            </Link>

            {/* Nom de domaine */}
            <Link
              href="/nom-de-domaine-ma"
              className="block text-[#14213D] cursor-pointer hover:text-primary font-[600] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nom de domaine
            </Link>

            {/* SEO/SEA Mobile */}
            <div>
              <button
                onClick={() => setMobileSeoOpen(!mobileSeoOpen)}
                className=" flex items-center justify-between w-full py-2 hover:text-primary text-[#14213D] font-[600] "
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/google-svg.svg"
                    alt="Hostino"
                    width={20}
                    height={20}
                  />
                  SEO/SEA
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileSeoOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {mobileSeoOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/agence-seo-maroc/"
                    className="block max-w-max py-2 text-title font-[600] animated-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Agence SEO
                  </Link>
                  <Link
                    href="/google-my-business-maroc/"
                    className="block max-w-max py-2 text-title font-[600] animated-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Agence GMB
                  </Link>
                  <Link
                    href="/google-ads-maroc/"
                    className="block  max-w-max py-2 text-title font-[600] animated-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Google Ads
                  </Link>
                  <Link
                    href="/creation-site-web-maroc/"
                    className="block   max-w-max py-2 text-title font-[600] animated-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Site web
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Link
                href="https://my.hostino.com/index.php?rp=/login"
                className="block w-full py-3 text-center text-[#14213D] font-[600] hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion
              </Link>
              <button className="w-full bg-primary text-white font-[600] px-4 py-3 rounded-lg hover:bg-[#00a84e] transition-colors">
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
