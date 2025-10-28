import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/ui/CookieConsentBanner"
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

         <Header />
             {children}
             <CookieConsent />
          <Footer />
      </body>
    </html>
  );
}
