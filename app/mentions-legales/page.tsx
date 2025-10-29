import Link from "next/link";
import StarRating from "../components/ui/StartRatingFooter";
import { main_schema } from "../schema";

const title = "Mentions légales - Hostino";
const description =
  "Mentions légales: le site web Hostino.ma est édité par la société Hostino SARL AU, T200 Technopark de Tanger - Maroc";
const imageUrl =
  "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png";
const canonical_url = "https://www.hostino.ma/mentions-legales";
const og_alt = "Mentions légales";

export const metadata = {
  title: title,
  description: description,
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: canonical_url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: canonical_url,
    siteName: "Hostino",
    title: title,
    description: description,
    images: [
      {
        url: imageUrl,
        secureUrl: imageUrl,
        width: 1200,
        height: 630,
        alt: og_alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageUrl],
    creator: "@admin",
  },
};
export default async function LegalDocumentPage() {
  const articleSchema = {
      "@context": "https://schema.org",
      "@graph": [
        ...main_schema,
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.hostino.ma/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              item: {
                "@id": "https://www.hostino.ma",
                name: "Hostino - Noms de domaine et hébergement web au Maroc",
              },
            },
            {
              "@type": "ListItem",
              position: "2",
              item: {
                "@id": canonical_url,
                name: og_alt,
              },
            },
          ],
        },
        {
          "@type": "Product",
          name: title,
          url: canonical_url,
          description: description,
          brand: { "@type": "Brand", name: "Hostino" },
          offers: {
            "@type": "AggregateOffer",
            url: canonical_url,
            lowPrice: "118",
            priceCurrency: "MAD",
            availability: "InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "920",
          },
        },
      ],
    };
  
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
  
      <main>
        <section className="lg:py-[150px] bg-gray-100 py-[80px]">
          <div className="container">
            <h1 className="big-title">Mentions légales</h1>
          </div>
        </section>

        <section className="lg:my-[120px] my-[80px]">
          <div className="container">
            <div className="grid md:grid-cols-12 grid-cols-1  gap-8">
              {/* Sidebar */}
              <div className="border-1 max-h-max lg:col-span-3 md:col-span-5 col-span-1 rounded-[10px] py-[30px] px-[30px] border-gray-300">
                <h3 className="text-[22px] font-[600] text-title mb-[20px]">
                  Documents légaux
                </h3>
                <div className="w-full h-[1px] bg-gray-400 mb-[20px]"></div>

                <ul className="space-y-3">
                  <li style={{ textDecoration: "underline" }}>
                    <Link href="/conditions-generales">
                      Conditions générales
                    </Link>
                  </li>
                  <li
                    style={{
                      textDecoration: "underline",
                      textDecorationThickness: "2px",
                    }}
                  >
                    <Link className="active" href="/mentions-legales">
                      Mentions légales
                    </Link>
                  </li>
                  <li style={{ textDecoration: "underline" }}>
                    <Link href="/politique-cookies">Politique Cookies</Link>
                  </li>
                  <li style={{ textDecoration: "underline" }}>
                    <Link href="/politique-de-confidentialite">
                      Politique de confidentialité
                    </Link>
                  </li>
                  <li style={{ textDecoration: "underline" }}>
                    <Link href="/abus">Politique anti-bus</Link>
                  </li>
                </ul>
              </div>

              {/* Content */}

              <div className="lg:col-span-9 md:col-span-7 col-span-1 text-legal-documents">
                <div className="">
                  <p>
                    Dans cet espace, l’utilisateur peut consulter toutes les
                    informations relatives aux mentions légales encadrant
                    l’utilisation du site Hostino.
                  </p>

                  <p>
                    Il est essentiel, en tant qu’utilisateur, de prendre
                    connaissance de ces mentions avant de poursuivre la
                    navigation.
                  </p>

                  <h3>Hostino SARL AU</h3>

                  <div className="grid  sm:grid-cols-2 grid-cols-1 gap-y-[15px] ">
                    <div className="col-span-1">
                      <h2>Adresse du siège</h2>
                      <p>T100 Technopark, Tanger</p>
                    </div>
                    <div className="col-span-1">
                      <h2>Directeur général</h2>
                      <p>Aniss KIASSI</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-[15px]">
                    <div className="col-span-1">
                      <p style={{ marginBottom: "0 !important" }}>
                        <strong>E-mail</strong>
                        <br />
                        <a
                          style={{ textDecoration: "underline" }}
                          href="mailto:info@hostino.com"
                        >
                          info@hostino.com
                        </a>
                      </p>
                    </div>

                    <div className="col-span-1">
                      <p style={{ marginBottom: "0 !important" }}>
                        <strong>Site web</strong>
                        <br />
                        <a
                          style={{ textDecoration: "underline" }}
                          href="https://www.hostino.ma"
                        >
                          www.hostino.ma
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="my-[27px] h-[2px] bg-gray-300"></div>

                  <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-col-1 gap-4 ">
                    <p className="col-span-1">
                      <strong>R.C</strong>
                      <br />
                      123893
                    </p>
                    <p className="col-span-1">
                      <strong>Patente</strong>
                      <br />
                      50412781
                    </p>
                    <p className="col-span-1">
                      <strong>I.F</strong>
                      <br />
                      51707097
                    </p>
                    <p className="col-span-1">
                      <strong>R.I.B</strong>
                      <br />
                      164 640 21211 52330320002 28
                    </p>
                    <p className="col-span-1">
                      <strong>ICE</strong>
                      <br />
                      002984236000036
                    </p>
                  </div>

                  <div className="my-[27px] h-[2px] bg-gray-300"></div>

                  <div className="mb-[27px]">
                    <span className="text-[13px] text-title">
                      Toutes les informations sur ce site Internet sont en
                      conformité avec la loi Marocaine et internationale.
                    </span>
                  </div>

                  <h3 className="mb-[27px]">Coordonnées</h3>

                  <ul>
                    <li>
                      E-mail :{" "}
                      <a href="mailto:info@hostino.com">info@hostino.com</a>
                    </li>
                    <li>
                      Site web :{" "}
                      <a href="https://www.hostino.ma">
                        https://www.hostino.ma
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <StarRating />
      </main>
    </>
  );
}
