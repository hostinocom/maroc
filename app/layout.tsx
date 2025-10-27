import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/ui/CookieConsentBanner"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title : {
    default: "Hébergement Web Maroc - Hébergeur 100% marocain",
    template: "%s | Hostino®",
  },
  description: "Hostino® est un hébergeur web marocain offrant des solutions d'hébergement fiables et performantes adaptées aux besoins des entreprises et particuliers au Maroc.",
  icons: {
    icon: '/favicon.png', // This removes the favicon
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
