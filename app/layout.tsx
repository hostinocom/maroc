import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieBanner from "./components/CookieBanner";


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
    <html lang="fr-MA">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

         <Header />
             {children}
             <CookieBanner />
          <Footer />
      </body>
    </html>
  );
}
