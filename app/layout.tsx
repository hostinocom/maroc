import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieBanner from "./components/CookieBanner";
import { Metadata } from "next";



// app/layout.tsx
export const dynamic = 'force-static'
export const metadata = {
  title: "Hébergement Web Maroc - Hébergeur web 100% marocain",
  description: "Hébergement Web Maroc. Hostino™️ Hébergeur recommandé par les développeurs, les agences web et les professionnels du numérique au Maroc",
  icons: {
    icon: "/favicon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-MA">
     
      <body
      >
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-5QLCSWWS`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>

        <Header />
        {children}
        <CookieBanner />
        <Footer />

        {/* <script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: 
            `(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-5QLCSWWS")`
          ,
          }}
        /> */}
      </body>
    </html>
  );
}
