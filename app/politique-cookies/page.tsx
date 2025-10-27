import Link from "next/link";
import StarRating from "../components/ui/StartRatingFooter";



export default async function LegalDocumentPage() {
  return (
    <main>
      <section className="lg:py-[150px] bg-gray-100 py-[80px]">
        <div className="container">
          <h1 className="big-title">Politique cookies</h1>
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
                  <Link href="/conditions-generales">Conditions générales</Link>
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
                  <Link className="active" href="/politique-cookies">Politique Cookies</Link>
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
              <div>
                <h3>Définition d’un cookie</h3>
                <p>
                  Un cookie est un fichier d’information que le serveur des
                  sites web de Hostino envoie à l’appareil (ordinateur,
                  smartphone, tablette, etc.) de l’utilisateur qui accède aux
                  pages, afin de stocker et récupérer des informations
                  concernant sa navigation depuis cet appareil. Il existe de
                  nombreuses ressources expliquant ce que sont les cookies et à
                  quoi ils servent.
                </p>
                <p>
                  De notre côté, nous allons vous expliquer comment les cookies
                  affectent les sites web de Hostino. Toutefois, si vous
                  souhaitez en savoir plus, vous pouvez consulter la
                  documentation publiée par la Commission Nationale de Contrôle
                  de la Protection des Données à Caractère Personnel (CNDP) sur
                  leur{" "}
                  <a
                    href="https://www.cndp.ma/wp-content/uploads/2023/01/CNDP-guide-conformite-sites-web-fr.pdf"
                    rel="noopener"
                    style={{textDecoration : "underline !important"}}
                  >
                    site officiel
                  </a>
                  .
                </p>

                <h3>Portée de cette politique</h3>
                <p>
                  Cette politique de cookies s’applique à hostino.ma, ainsi
                  qu’aux autres domaines et sous-domaines de Hostino, qui sont
                  les suivants :
                </p>
                <ul>
                  <li>www.hostino.ma</li>
                  <li>www.hostino.ma/en</li>
                  <li>www.hostino.com</li>
                  <li>my.hostino.com</li>
                  <li>webmail.hostino.com</li>
                </ul>

                <h3>Types de cookies</h3>
                <p>
                  Il existe différents types de cookies qui peuvent être classés
                  selon les critères suivants : (i) selon l’entité qui les gère,
                  (ii) selon leur finalité, et (iii) selon la durée pendant
                  laquelle elles restent actives.
                </p>
                <p>
                  Selon l’entité qui les gère, les cookies peuvent être internes
                  (cookies propres), c’est-à-dire enregistrées sur le terminal
                  de l’utilisateur depuis Hostino, ou de tiers, enregistrées
                  depuis un domaine ou site web différent de Hostino, comme par
                  exemple Google, YouTube, etc., qui traitent les données
                  personnelles selon leur propre politique de cookies et
                  politique de confidentialité.
                </p>
                <p>
                  En fonction de leur finalité, elles peuvent être : (i) des
                  cookies strictement nécessaires ou techniques, indispensables
                  à la navigation de l’utilisateur (par exemple, activer les
                  fonctions et services, contrôler le trafic, etc.) ; (ii) des
                  cookies analytiques, qui permettent le suivi et l’analyse du
                  comportement des utilisateurs pour mesurer l’activité du site
                  web ; et (iii) des cookies de préférences ou de
                  personnalisation, permettant de mémoriser des informations
                  pour offrir à l’utilisateur une expérience personnalisée.
                </p>
                <p>
                  Enfin, selon la durée de conservation, elles peuvent être : de
                  session, collectant et stockant des données uniquement pendant
                  la session utilisateur ; ou persistantes, où les données
                  restent stockées sur le terminal et peuvent être consultées et
                  traitées pendant une période définie par le responsable du
                  cookie, allant de quelques minutes à plusieurs années.
                </p>

                <h3>Utilisation des cookies</h3>
                <p>
                  Hostino SARL AU, dont le siège est situé T100 Technopark
                  Tanger (MAROC) et avec <b>ICE 002984236000036</b> (ci-après,
                  Hostino), utilise différents types de cookies détaillés
                  ci-dessous à des fins fonctionnelles et statistiques, pour
                  détecter les activités frauduleuses, et pour mesurer
                  l’efficacité des campagnes publicitaires et des services.
                </p>
                <p>
                  <b>Cookies techniques ou nécessaires</b>
                  <br />
                  Ces cookies sont essentiels au bon fonctionnement du site web
                  et ne peuvent pas être désactivés dans nos systèmes.
                </p>
                <p>
                  <b>Cookies analytiques</b>
                  <br />
                  Ces cookies permettent le suivi et l’analyse du comportement
                  des utilisateurs des sites web associés, y compris la mesure
                  de l’impact des publicités.
                </p>
                <p>
                  <b>Cookies publicitaires</b>
                  <br />
                  Ces cookies sont liés à la publicité affichée à l’utilisateur
                  et collectent des informations sur son comportement de
                  navigation afin d’afficher des annonces pertinentes.
                </p>
                <p>
                  La classification correspondante est présentée ci-dessous :
                </p>

                <table>
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Détails</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_gcl_aw</td>
                      <td>
                        Domaine : Google Ads
                        <br />
                        Description : Activer la diffusion ou le reciblage des
                        publicités
                        <br />
                        Propriétaire : Google
                        <br />
                        Durée : 90 jours
                      </td>
                    </tr>
                    <tr>
                      <td>ads/ga-audiences</td>
                      <td>
                        Domaine : Google Ads
                        <br />
                        Description :<br />
                        Propriétaire : Google
                        <br />
                        Durée :
                      </td>
                    </tr>
                    <tr>
                      <td>usprivacy</td>
                      <td>
                        Domaine : IAB TCF
                        <br />
                        Description : Stocker les préférences de confidentialité
                        <br />
                        Propriétaire : IAB
                        <br />
                        Durée : divers
                      </td>
                    </tr>
                    <tr>
                      <td>crisp-clientsocket*</td>
                      <td>
                        Domaine : Crisp Live Chat
                        <br />
                        Description : Stocker l’état du chat
                        <br />
                        Propriétaire : Crisp
                        <br />
                        Durée : 6 mois
                      </td>
                    </tr>
                    <tr>
                      <td>_grecaptcha</td>
                      <td>
                        Domaine : Google reCAPTCHA
                        <br />
                        Description : Offrir une protection contre le spam
                        <br />
                        Propriétaire : Google
                        <br />
                        Durée : 6 mois
                      </td>
                    </tr>
                    <tr>
                      <td>rc::c</td>
                      <td>
                        Domaine : Google reCAPTCHA
                        <br />
                        Description :<br />
                        Propriétaire : Google
                        <br />
                        Durée :
                      </td>
                    </tr>
                    <tr>
                      <td>mirage_cache_manifest</td>
                      <td>
                        Domaine : Cloudflare
                        <br />
                        Description :<br />
                        Propriétaire : Cloudflare
                        <br />
                        Durée : persistante
                      </td>
                    </tr>
                    <tr>
                      <td>cmplz_functional</td>
                      <td>
                        Domaine : Complianz
                        <br />
                        Description : Stocker les préférences de consentement
                        aux cookies
                        <br />
                        Propriétaire : Complianz
                        <br />
                        Durée : 365 jours
                      </td>
                    </tr>
                    <tr>
                      <td>Google Maps API</td>
                      <td>
                        Domaine : Google Maps
                        <br />
                        Description : Demander l’adresse IP de l’utilisateur
                        <br />
                        Propriétaire : Google
                        <br />
                        Durée : aucune
                      </td>
                    </tr>
                    <tr>
                      <td>elementor</td>
                      <td>
                        Domaine : Elementor
                        <br />
                        Description : Stocker les actions effectuées par les
                        utilisateurs sur le site web
                        <br />
                        Propriétaire : Elementor
                        <br />
                        Durée : persistante
                      </td>
                    </tr>
                    <tr>
                      <td>wpEmojiSettingsSupports</td>
                      <td>
                        Domaine : WordPress
                        <br />
                        Description : Stocker les informations du navigateur
                        <br />
                        Propriétaire : WordPress
                        <br />
                        Durée : session
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3>Gestion des cookies via le navigateur</h3>
                <p>
                  L’utilisateur peut – à tout moment – choisir les cookies qu’il
                  souhaite autoriser sur ce site web, également via les
                  paramètres de son navigateur, par exemple :
                </p>
                <ul>
                  <li>
                    Chrome, en suivant{" "}
                    <a
                      href="http://support.google.com/chrome/bin/answer.py?hl=es&amp;answer=95647"
                      target="_blank"
                      rel="noopener"
                      style={{textDecoration : "underline"}}

                    >
                      ces instructions
                    </a>
                    .
                  </li>
                  <li>
                    Explorer, en suivant{" "}
                    <a
                      href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                      target="_blank"
                      rel="noopener"
                      style={{textDecoration : "underline"}}

                    >
                      ces instructions
                    </a>
                    .
                  </li>
                  <li>
                    Firefox, en suivant{" "}
                    <a
                      href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                      target="_blank"
                      rel="noopener"
                      style={{textDecoration : "underline"}}

                    >
                      ces instructions
                    </a>
                    .
                  </li>
                  <li>
                    Safari, en suivant{" "}
                    <a
                      href="https://support.apple.com/kb/PH19214?viewlocale=es_ES&amp;locale=en_US"
                      target="_blank"
                      rel="noopener"
                      style={{textDecoration : "underline"}}

                    >
                      ces instructions
                    </a>
                    .
                  </li>
                  <li>
                    Opera, en suivant{" "}
                    <a
                      href="https://help.opera.com/en/latest/web-preferences/#cookies"
                      target="_blank"
                      rel="noopener"
                       style={{textDecoration : "underline"}}

                    >
                      ces instructions
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  Les navigateurs web sont les outils responsables du stockage
                  des cookies. C’est depuis ces navigateurs que l’utilisateur
                  peut exercer son droit de suppression ou de désactivation des
                  cookies.
                </p>
                <p>
                  Ni ce site web ni ses représentants légaux ne peuvent garantir
                  la bonne ou mauvaise gestion des cookies par les navigateurs
                  mentionnés.
                </p>
                <p>
                  Dans certains cas, il est nécessaire d’installer des cookies
                  pour que le navigateur n’oublie pas la décision de
                  l’utilisateur de ne pas les accepter.
                </p>

                <h3>Acceptation de la politique de cookies</h3>
                <p>
                  L’acceptation de la présente politique de cookies implique que
                  l’utilisateur a été informé de manière claire et complète sur
                  l’utilisation des dispositifs de stockage et de récupération
                  de données (cookies), et que Hostino dispose de son
                  consentement pour leur utilisation, conformément aux
                  dispositions applicables en matière de protection des données
                  au Maroc.
                </p>
                <p>
                  Dans ce dernier cas, l’utilisateur peut retirer son
                  consentement à tout moment en ajustant ses préférences
                  relatives aux cookies via le panneau de gestion des cookies.
                </p>

                <h3>Questions ou demandes</h3>
                <p>
                  Pour toute question ou demande concernant cette politique de
                  cookies, l’utilisateur peut contacter Hostino via l’adresse{" "}
                  <a href="mailto:info@hostino.com">info@hostino.com</a>.
                </p>
                <span className="font-[400] text-[18px] text-gray-500 my-[30px] ">
                Dernière mise à jour: 11 avril 2025.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StarRating />
    </main>
  );
}
