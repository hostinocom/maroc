import Link from "next/link";
import StarRating from "../components/ui/StartRatingFooter";
import { main_schema } from "../schema";


const title = "Politique anti-abus - Hostino";
const description ="Politique anti-abus concernant un site Internet ou un nom de domaine géré ou hébergé par Hostino."
const imageUrl =
  "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png";
const canonical_url = "https://www.hostino.ma/abus/";
const og_alt = "Politique anti-abus - Hostino";

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
            <h1 className="big-title">Politique anti-abus</h1>
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
                    <Link href="/mentions-legales">Mentions légales</Link>
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
                    <Link className="active" href="/abus">
                      Politique anti-bus
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Content */}
              <div className="lg:col-span-9 md:col-span-7 col-span-1 text-legal-documents">
                <div>
                  <p style={{ marginBottom: "0px !important" }}>
                    Les infractions concernant un site Internet ou un nom de
                    domaine géré ou hébergé par Hostino doivent être signalées :
                    Par email à : info@hostino.com Par téléphone au : +212 (05)
                    31 03 11 86
                  </p>
                  <h3>Introduction</h3>
                  <p>
                    La sécurité et le bien-être de nos utilisateurs sont des
                    priorités pour nous. C’est pourquoi nous avons mis en place
                    cette Politique anti-abus afin de protéger nos utilisateurs
                    et de garantir un environnement en ligne sûr et respectueux.
                    Cette politique s’applique à toutes les interactions sur
                    notre site web et nos services, y compris les commentaires,
                    les espaces de discussion, les messages privés et les
                    publications sur les réseaux sociaux associés à notre site.
                  </p>
                  <h3>Comportements interdits</h3>
                  <p>
                    Les comportements suivants sont strictement interdits sur
                    notre site web et nos services :
                  </p>
                  <ul>
                    <li>
                      Spam : l’envoi de messages non sollicités, en masse ou
                      répétitifs, à des fins commerciales ou autres, est
                      interdit.
                    </li>
                    <li>
                      Harcèlement et intimidation : le harcèlement,
                      l’intimidation ou la menace d’autres utilisateurs, que ce
                      soit par des commentaires, des messages privés ou d’autres
                      moyens, sont interdits.
                    </li>
                    <li>
                      Discours de haine, discrimination et violence : les propos
                      incitant à la haine, la discrimination, la violence ou
                      promouvant des idéologies extrémistes sont interdits.
                    </li>
                    <li>
                      Contenu illégal ou inapproprié : la publication ou la
                      promotion de contenu illégal, pornographique, violent ou
                      autrement inapproprié est interdite.
                    </li>
                    <li>
                      Fraude et usurpation d’identité : l’utilisation de fausses
                      identités, l’usurpation de l’identité d’autres
                      utilisateurs ou la tentative de tromper les autres
                      utilisateurs par des moyens frauduleux sont interdites.
                    </li>
                    <li>
                      Attaques informatiques : les tentatives de piratage,
                      d’intrusion ou de déni de service visant notre site web,
                      nos services ou les comptes d’autres utilisateurs sont
                      interdites.
                    </li>
                  </ul>
                  <h3>Signalement des abus</h3>
                  <p>
                    Si vous rencontrez un contenu ou un comportement qui
                    enfreint cette Politique anti-abus, veuillez nous le
                    signaler immédiatement en nous contactant à l’adresse e-mail
                    suivante : info@hostino.com ou en nous appelant au +212 (05)
                    31 03 11 86. Veuillez inclure autant d’informations que
                    possible pour nous aider à évaluer et à traiter le problème
                    rapidement et efficacement.
                  </p>
                  <h3>Mesures prises en cas d’abus</h3>
                  <p>
                    Nous prendrons toutes les mesures nécessaires pour remédier
                    aux situations d’abus signalées, y compris, mais sans s’y
                    limiter :
                  </p>
                  <ul>
                    <li>
                      Avertissements : les utilisateurs qui enfreignent cette
                      Politique anti-abus peuvent recevoir un avertissement
                      officiel.
                    </li>
                    <li>
                      Suspension ou résiliation de compte : en cas d’infractions
                      répétées ou graves, nous nous réservons le droit de
                      suspendre ou de résilier le compte de l’utilisateur
                      concerné.
                    </li>
                    <li>
                      Signalement aux autorités : si nous suspectons qu’un
                      comportement illégal a été commis, nous nous réservons le
                      droit de signaler l’incident aux autorités compétentes.
                    </li>
                  </ul>
                  <h3>Révision de la politique</h3>
                  <p>
                    Nous nous réservons le droit de réviser et de mettre à jour
                    cette Politique anti-abus à tout moment. Les modifications
                    prendront effet immédiatement après leur publication sur
                    notre site web.
                  </p>
                  <h3>Responsabilités des utilisateurs</h3>
                  <p>
                    En tant qu’utilisateur de notre site web et de nos services,
                    vous avez la responsabilité de :
                  </p>
                  <ul>
                    <li>
                      Respecter cette Politique anti-abus ainsi que nos autres
                      politiques et conditions d’utilisation.
                    </li>
                    <li>
                      Signaler tout comportement ou contenu suspect ou
                      inapproprié en utilisant les moyens mis à votre
                      disposition.
                    </li>
                    <li>
                      Agir de manière responsable et respectueuse envers les
                      autres utilisateurs et notre personnel.
                    </li>
                  </ul>
                  <h3>Coopération avec les autorités et les tiers</h3>
                  <p>
                    Nous coopérerons avec les autorités compétentes, les
                    fournisseurs de services Internet et les autres tiers pour
                    enquêter et traiter les cas d’abus signalés. Cela peut
                    inclure la fourniture d’informations sur les utilisateurs
                    concernés, dans la mesure permise par notre Politique de
                    confidentialité et la législation applicable.
                  </p>
                  <h3>Recours en cas de litige</h3>
                  <p>
                    Si vous estimez que vos droits ont été violés ou que vous
                    avez subi un préjudice en raison du non-respect de cette
                    Politique anti-abus par un autre utilisateur, nous vous
                    encourageons à explorer les voies de recours légales
                    disponibles dans votre juridiction. Nous sommes prêts à
                    coopérer avec les autorités compétentes et à fournir toute
                    assistance nécessaire dans le cadre de ces procédures.
                  </p>
                  <h3>Nous contacter</h3>
                  <p>
                    Si vous avez des questions ou des préoccupations concernant
                    cette Politique anti-abus ou si vous souhaitez signaler un
                    abus, veuillez nous contacter à l’adresse e-mail suivante :
                    info@hostino.com
                  </p>
                  <p>
                    Ensemble, nous pouvons créer un environnement en ligne sûr
                    et respectueux pour tous les utilisateurs de notre site web
                    et de nos services. Merci de votre coopération et de votre
                    engagement à respecter cette Politique anti-abus.
                  </p>
                  <h3>Conclusion</h3>
                  <p>
                    Nous nous engageons à créer et à maintenir un environnement
                    en ligne sûr et respectueux pour tous nos utilisateurs.
                    <br />
                    <br />
                    En respectant cette Politique anti-abus, vous contribuez à
                    cet objectif et aidez à garantir que notre communauté reste
                    un espace accueillant et positif pour tous.
                  </p>

                  <span className="text-[18px] text-[#808080] font-[400]">
                    Dernière mise à jour : 02 avril 2025.
                  </span>
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
