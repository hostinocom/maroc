import Link from "next/link";
import StarRating from "../components/ui/StartRatingFooter";

const title = "Politique de confidentialité - Hostino"
const description =  "La politique de confidentialité de l&#039;hébergement web Hostino a été conçue afin de protéger les informations de nos clients."
const imageUrl = "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png" 
const canonical_url = "https://www.hostino.ma/politique-de-confidentialite"
const og_alt = "Politique de confidentialité"


export default async function LegalDocumentPage() {
  return (
    <main>
      <section className="lg:py-[150px] bg-gray-100 py-[80px]">
        <div className="container">
          <h1 className="big-title">Politique de confidentialité</h1>
        </div>
      </section>

      <section className="lg:my-[120px] my-[80px]">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1  gap-8">
            {/* Sidebar */}
            <div className="border-1 max-h-max md:col-span-5 lg:col-span-3 col-span-1 rounded-[10px] py-[30px] px-[30px] border-gray-300">
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
                  <Link href="/politique-cookies">Politique Cookies</Link>
                </li>
                <li style={{ textDecoration: "underline" }}>
                  <Link className="active" href="/politique-de-confidentialite">
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
                <h3>1. Objet :</h3>
                <p>
                  1.1. La société Hostino fournit un service d’hébergement Web
                  et/ou nom de domaine.
                  <br />
                  1.2. Le présent contrat a pour objet de définir les conditions
                  techniques et financières dans lesquelles la société Hostino
                  et le client s’engagent mutuellement.
                </p>
                <h3>2. Accès au serveur et infogérance :</h3>
                <p>
                  2.1. La société Hostino s’engage à tout mettre en œuvre pour
                  assurer la permanence, la continuité et la qualité des
                  services qu’elle propose.
                  <br />
                  2.2. La société Hostino se réserve cependant la faculté de
                  suspendre exceptionnellement et brièvement l’accessibilité aux
                  serveurs pour d’éventuelles interventions de maintenance ou
                  d’amélioration de ses services.
                  <br />
                  2.3 Infogérance pour les serveurs dédiés et VPS/Cloud:
                  <br />
                  2.3.1 L’infogérance ponctuelle est facturée à l’heure pour une
                  mission précise. En fonction de la mission que vous nous avez
                  confiée, nous vous communiquons à l’avance la durée estimée de
                  l’intervention.
                  <br />– Installation de votre serveur suivant vos besoins,
                  mise à jour du système d’exploitation…
                  <br />– Installation ou mise à jour d’un logiciel, d’un
                  serveur de messagerie, d’un serveur web, d’une application
                  métier…
                  <br />– Configuration des différents modules Apache …<br />–
                  Sécurisation de votre serveur, installation d’un Firewall…
                  <br />– Prise en charge d’un incident technique
                  <br />– Mise en place d’une politique de sauvegarde
                  <br />– Mise en place des différents comptes pour
                  l’installation de vos sites web (ftp, MySQL etc…)
                  <br />
                  2.3.2 Infogérance contrat mensuel :<br />
                  Installation du système d’exploitation et des différents
                  logiciels correspondant à vos besoins initiaux (système
                  d’exploitation au choix du partenaire)
                  <br />
                  Le monitoring de votre serveur et des différents services
                  hébergés
                  <br />
                  La mise en place des sauvegardes de votre serveur
                  <br />
                  La mise en place d’un Firewall
                  <br />
                  Interlocuteur unique : le support technique par ticket et
                  téléphone
                  <br />
                  La mise à jour régulière du système d’exploitation et des
                  différents logiciels
                  <br />
                  L’installation des correctifs de sécurité
                </p>
                <h3>3. Assistance</h3>
                <p>
                  La société Hostino met à la disposition du client une
                  assistance technique par courrier E-mail, téléphone et Live
                  Chat.
                </p>
                <h3>4. Prix des services, facturation, règlements :</h3>
                <p>
                  4.1. Les prix des prestations proposés sont ceux figurant sur
                  le site web hostino.ma, ils s’entendent hors taxes et sont
                  payables en Dhs marocains, Euro ou en $, d’avance et à
                  réception de la facture proforma, pour une période annuelle,
                  semestrielle, trimestrielle, ou mensuelle.
                  <br />
                  4.2. Les factures sont payables d’avance et à réception, pour
                  la période précisée dans la facture, le paiement des factures
                  s’effectue au choix du client, par virement bancaire, carte
                  bancaire marocaine, espèce, La Poste CCP, Wafacash ou tout
                  autre mode de paiement que propose la société Hostino.
                  <br />
                  4.3. Lors d’un retard de paiement, la société Hostino suspend
                  l’exploitation de la prestation de service et/ou résilier le
                  contrat avec effet immédiat et sans dédommagement.
                  <br />
                  4.4. Les comptes et les serveurs non réglés à échéance sont
                  considérés comme abandonnés et seront terminés.
                </p>
                <h3>5. Responsabilités :</h3>
                <p>
                  5.1. En aucun cas la société Hostino ne saurait voir sa
                  responsabilité engagée à la suite de toute action ou recours
                  de tiers, le client devra garantir la société Hostino de toute
                  condamnation éventuelle à ce titre, notamment du fait :<br />
                  d’informations, d’images, de sons, de textes, de vidéos
                  contraires aux législations et réglementations en vigueur,
                  contenus diffusés sur le ou les sites du client.
                  <br />
                  de la violation des droits de propriété intellectuelle
                  relatifs aux œuvres diffusées, en intégralité ou
                  partiellement, sur le ou les sites du client sans accord de
                  leur auteur.
                  <br />
                  de la suspension et/ou de la résiliation des comptes,
                  notamment à la suite du non-règlement des sommes dues en
                  exécution du présent contrat, et plus généralement du fait de
                  l’inexécution des obligations du client telles que fixées par
                  les présentes conditions.
                  <br />
                  5.2. En outre, du fait des caractéristiques et limites de
                  l’Internet que le client déclare parfaitement connaître, la
                  société Hostino ne saurait voir sa responsabilité engagée pour
                  notamment :<br />
                  Les difficultés d’accès au site hébergé du fait de la
                  saturation des réseaux à certaines périodes, la contamination
                  par virus des données et/ou logiciels du client, dont la
                  protection incombe à ce dernier.
                  <br />
                  Les intrusions malveillantes de tiers sur le site du client,
                  malgré les mesures raisonnables de sécurité mises en place.
                  <br />
                  Les détournements éventuels des mots de passe, codes
                  confidentiels, et plus généralement de toute information à
                  caractère sensible pour le client.
                  <br />
                  5.3. Il est contraire à la ligne de conduite que le client
                  effectue ou participe à l’une des activités suivantes :<br />
                  Envoyer des courriers électroniques en masse à des personnes
                  qui n’en ont pas fait la demande (« Junk mail » ou « Spamming
                  »). Ainsi, tout envoi massif de courrier électronique non
                  sollicité par leurs destinataires est strictement interdit.
                  <br />
                  Pénétrer ou tenter de pénétrer de manière non autorisée dans
                  un système informatique.
                  <br />
                  Héberger de sites racistes, pornographiques ou illégaux et
                  ceux ayant des liens hypertextes vers ces types de sites.
                  <br />
                  5.4. La société Hostino se réserve le droit d’interrompre, à
                  tout moment, le contrat d’hébergement, si elle vient à prendre
                  connaissance du non-respect de l’une des dispositions des
                  articles ci-dessus, ou en cas d’une mauvaise manipulation soit
                  du compte FTP, HTTP, MAIL ou bases de données, … engendrant
                  des dommages techniques de ses serveurs.
                  <br />
                  Dans ces cas, la société Hostino ne procédera à aucun
                  remboursement.
                </p>
                <h3>6. Obligations de sécurité et de confidentialité :</h3>
                <p>
                  La société Hostino, doit mettre en œuvre les mesures de
                  sécurité des locaux et des systèmes d’information pour
                  empêcher tous les risques inhérents au traitement et à la
                  nature des données à caractère personnel du Client, afin:
                </p>
                <p>
                  d’empêcher toute personne non autorisée d’avoir accès aux
                  systèmes informatiques de traitement des données à caractère
                  personnel;
                  <br />
                  d’empêcher que des supports de stockage puissent être lus,
                  copiés, modifiés ou déplacés sans autorisation;
                  <br />
                  d’empêcher toute introduction non autorisée de données dans la
                  mémoire ainsi que toute divulgation, toute modification ou
                  tout effacement non autorisés de données à caractère personnel
                  mémorisées;
                  <br />
                  d’empêcher des personnes non autorisées d’utiliser des
                  systèmes de traitement de données au moyen d’installations de
                  transmission de données;
                  <br />
                  de garantir que les utilisateurs autorisés d’un système de
                  traitement des données ne puissent accéder qu’aux données à
                  caractère personnel que leur droit d’accès leur permet de
                  consulter;
                  <br />
                  de garder une trace des données à caractère personnel qui ont
                  été communiquées, du moment où elles ont été communiquées et
                  de leur destinataire;
                  <br />
                  de garantir qu’il sera possible de vérifier a posteriori
                  quelles données à caractère personnel ont été traitées, à quel
                  moment et par quelles personnes;
                  <br />
                  de garantir que des données personnelles qui sont traitées
                  pour le compte de tiers ne peuvent l’être que de la façon
                  prévue par l’institution ou l’organe contractant;
                  <br />
                  de garantir que, lors de la communication de données à
                  caractère personnel et du transport de supports de stockage,
                  les données ne puissent être lues, copiées ou effacées sans
                  autorisation;
                  <br />
                  de concevoir sa structure organisationnelle de manière à ce
                  qu’elle réponde aux exigences de la protection des données.
                </p>
                <h3>7. Restrictions et limitations du service :</h3>
                <p>
                  La société Hostino fera son possible pour aviser les clients
                  qui utilisent des scripts utilisant un trop grand pourcentage
                  de ressources système avant de suspendre ceux-ci. Par contre,
                  si les scripts causent des problèmes aux autres clients ou que
                  ceux-ci prennent beaucoup de ressources ils pourront être
                  stoppés sans préavis.
                  <br />
                  Le client est averti que l’utilisation non conforme à ce qui
                  est indiqué ci-dessus peut être de nature à rendre
                  incompatible le fonctionnement du site sur la plate-forme
                  d’hébergement mutualisé.
                  <br />
                  La société Hostino n’est pas responsable des prétentions ou
                  des dommages qui naissent chez le client, en raison de la
                  perte de données, ou en raison de l’impossibilité d’obtenir
                  l’accès à Internet, ou d’envoyer des informations ou d’en
                  recevoir.
                  <br />
                  La société Hostino réalise des sauvegardes, qui peuvent être
                  utilisées en cas de défaillance du système. Cependant, Hostino
                  ne propose pas de services de récupération de données pour ses
                  Clients.
                  <br />
                  La société Hostino ne saurait être tenue responsable des
                  pertes de données, des corruptions de données, des difficultés
                  ou impossibilités d’accès, ou encore de la lenteur de la
                  connexion, ou tout autre problème résultant du système. La
                  société Hostino pourra, à sa seule discrétion, limiter ou
                  refuser l’accès à ses serveurs dans l’hypothèse où la société
                  Hostino considérerait que ces limitations ou refus d’accès
                  sont nécessaires pour préserver la sécurité ou l’intégrité du
                  réseau.
                </p>
                <h3>8. Durée, renouvellement et dénonciation du contrat :</h3>
                <p>
                  8.1. Le contrat est conclu pour une durée annuelle,
                  semestrielle, trimestrielle, ou mensuelle qui commence à
                  compter de la date de signature des présentes conditions.
                  <br />
                  8.2. La reconduction des abonnements n’est pas tacite, le
                  client est amené à régler sa facture pour que son service ou
                  domaine soit renouvelé.
                  <br />
                  8.3. Toute dénonciation devra être faite par E-mail, Téléphone
                  ou lettre recommandée adressée à : Hostino au plus tard un
                  mois avant la date d’anniversaire du contrat.
                </p>
                <h3>9. Obligation d’information :</h3>
                <p>
                  Le client s’engage à mettre à jour ses informations (notamment
                  changement d’adresse, tél, etc.) directement sur son compte
                  client chez Hostino.
                </p>
                <h3>10. Loi applicable – Attribution de juridiction :</h3>
                <p>
                  Le présent contrat est régi par la loi marocaine, tout litige
                  relatif à l’interprétation ou à l’exécution des présentes sera
                  de la compétence du Tribunal de Commerce ou tout autre
                  tribunal choisi par le client au Maroc.
                </p>
                <h3>
                  Conditions particulières liées à la réservation des noms de
                  domaines .ma :
                </h3>
                <p>
                  En effet, le renouvellement de noms de domaine « .ma » est
                  possible pour une période annuelle choisie (de 1 à 5 ans).
                  (Cf. article 26 de la décision de nommage).
                  https://www.anrt.ma/sites/default/files/2015-12-14-gestion-nom-domaine-ma-fr_0.pdf
                </p>
                <h3>Obligations et Droits du Demandeur/Titulaire</h3>
                <p>
                  1. Le Demandeur ou le Titulaire reconnaît qu’il a lu les
                  dispositions de la décision de nommage, qu’il accepte d’être
                  lié par l’ensemble de ses modalités, dans sa version adoptée
                  et modifiée par l’ANRT. Ladite décision est disponible sur le
                  site Web de l’ANRT. :
                  https://www.anrt.ma/sites/default/files/2015-12-14-gestion-nom-domaine-ma-fr_0.pdf
                </p>
                <p>
                  2. Le Titulaire bénéficie d’un usage exclusif et personnel du
                  nom de domaine enregistré pendant sa période de validité,
                  conformément aux dispositions réglementaires en vigueur.
                </p>
                <p>
                  3. Au moment de l’enregistrement ou du renouvellement d’un nom
                  de domaine, tout Demandeur ou Titulaire est censé avoir
                  accepté la collecte, le stockage et le traitement des données
                  le concernant par l’ANRT, ainsi que la publication des données
                  « WHOIS ».
                </p>
                <p>
                  4. Le Titulaire est censé avoir accepté que certaines données
                  le concernant soient transmises par l’ANRT aux autorités
                  compétentes, ou à une personne tierce conformément à la
                  législation en vigueur.
                </p>
                <p>
                  5. Le choix, l’utilisation et l’exploitation d’un nom de
                  domaine, ainsi que les sous domaines y afférents, relèvent de
                  la responsabilité du Titulaire. Ce dernier utilise le nom de
                  domaine enregistré et les sous domaines y afférents pour son
                  propre besoin, sans porter atteinte aux droits et aux intérêts
                  des tiers.
                </p>
                <p>
                  6. Le Titulaire est représenté par une personne physique, dite
                  contact administratif, dûment mandatée à cet effet et établie
                  au Maroc. Au cas où le Titulaire est une personne physique, il
                  peut être lui-même le contact administratif.
                </p>
                <p>
                  7. Le Titulaire reconnaît et convient que le contact
                  administratif est autorisé par ses soins à agir à titre de
                  mandataire du Titulaire dans le cadre de l’enregistrement et
                  de la gestion du nom de domaine. En cas de différend entre le
                  Titulaire et son contact administratif lors d’une opération de
                  gestion d’un nom de domaine, la position du Titulaire
                  prévaudra.
                </p>
                <p>
                  8. Le Titulaire doit fournir au Prestataire des adresses
                  postale et électronique effectives le concernant, ainsi que
                  des adresses postale et électronique effectives de son contact
                  administratif.
                </p>
                <p>
                  9. Le Titulaire doit s’assurer que tous les renseignements
                  relatifs à l’enregistrement d’un nom de domaine, communiqués à
                  son Prestataire, sont à jour, complets et exacts. Il est tenu
                  d’en assurer la mise à jour immédiate en cas de changement les
                  affectant. Le Titulaire est tenu de vérifier que les données
                  publiées sur le « WHOIS » sont complètes et exactes, et de
                  procéder sans délai aux mises à jour nécessaires auprès du
                  Prestataire.
                </p>
                <p>
                  10. Le Titulaire peut renouveler à tout moment son nom de
                  domaine conformément à la décision de nommage. A l’expiration
                  du nom de domaine, le Titulaire est tenu de renouveler son nom
                  de domaine durant la période de grâce de renouvellement s’il
                  souhaite le maintenir.
                </p>
                <p>
                  11. A l’expiration d’un nom de domaine, le Prestataire peut le
                  résilier au cas où le Titulaire ne procède pas au paiement des
                  frais de renouvellement y afférent. A la fin de la période de
                  grâce de renouvellement, le nom de domaine est supprimé par
                  l’ANRT.
                </p>
                <p>
                  12. Le Titulaire peut résilier son nom de domaine avant sa
                  date d’échéance. Le nom de domaine dispose d’une période de
                  grâce de résiliation durant laquelle le Titulaire peut
                  procéder à son réenregistrement.
                </p>
                <p>
                  13. Le Titulaire a le droit de demander le changement du
                  Prestataire à tout moment, sous réserve du respect des
                  dispositions de la décision de nommage et du présent contrat.
                </p>
                <p>
                  14. Le Titulaire a le droit de transférer son nom de domaine à
                  une autre personne, sous réserve du respect des termes de la
                  décision de nommage et du présent contrat.
                </p>
                <p>
                  15. Le Titulaire s’engage à se soumettre à la procédure
                  alternative de résolution de litiges, et à toute décision de
                  l’ANRT concernant le nom de domaine «.ma» enregistré.
                  http://www.wipo.int/amc/fr/domains/rules/cctld/ma/index.html
                </p>
                <p>Obligations et droits du Prestataire</p>
                <p>
                  1. Le Prestataire est tenu d’informer le Titulaire de
                  l’expiration de son nom de domaine trente (30) jours avant sa
                  date d’échéance, et lui permettre de renouveler son nom de
                  domaine à tout moment, avant ou durant la période de grâce de
                  renouvellement.
                </p>
                <p>
                  2. Le Prestataire doit procéder aux modifications relatives
                  aux noms de domaine et aux Titulaires sur le Registre, à
                  chaque fois que lesdites modifications lui sont communiquées
                  par le Titulaire.
                </p>
                <p>
                  3. A la résiliation du nom de domaine, le Prestataire est tenu
                  d’en informer le Titulaire, en lui précisant la période de
                  grâce de résiliation durant laquelle il peut récupérer le nom
                  de domaine résilié à tout moment.
                </p>
                <p>
                  4. Le Prestataire est tenu de mettre à la disposition des
                  Titulaires un site web comprenant impérativement ses
                  coordonnées complètes et à jour. Il doit publier, également,
                  sur ce site, toutes les modifications apportées par l’ANRT aux
                  dispositions réglementaires et aux procédures d’enregistrement
                  et de gestion des noms de domaine.
                </p>
                <p>
                  5. Le Prestataire est tenu de porter à la connaissance du
                  Titulaire toute information ou notification le concernant dès
                  sa réception de la part de l’ANRT.
                </p>
                <p>
                  6. le Prestataire doit informer sans délai le Titulaire
                  concerné de tout gel, blocage ou suppression d’un nom de
                  domaine par l’ANRT, en lui communiquant le motif tel que
                  communiqué par cette dernière.
                </p>
                <p>
                  7. A tout moment, et à la demande du Titulaire, le Prestataire
                  est tenu de lui fournir gratuitement le(s) code(s)
                  d’autorisation d’un ou de plusieurs noms de domaine, dans un
                  délai d’un (1) jour ouvrable à la réception de ladite demande.
                </p>
                <p>
                  8. Le Prestataire est tenu d’assister les Titulaires pour
                  l’enregistrement, le renouvellement, la résiliation et le
                  transfert des noms de domaine, ainsi que la mise à jour des
                  informations y afférentes. Il est tenu d’apporter tout support
                  nécessaire aux Demandeurs et Titulaires des noms de domaine en
                  vue de renseigner correctement les informations requises.
                </p>
                <p>
                  9. Le Prestataire ne doit collecter, utiliser ou communiquer
                  aucune donnée, personnelle ou autre, relative à un Titulaire,
                  à des fins autres que celles prévues par l’enregistrement et
                  la gestion des noms de domaine du Titulaire et ce,
                  conformément aux dispositions réglementaires en vigueur.
                </p>
                <p>
                  L’utilisation de ces données doit se faire en conformité avec
                  la réglementation sur la protection des personnes physiques à
                  l’égard du traitement des données à caractère personnel.
                </p>

                <span className="font-[400] text-[18px] text-gray-500 my-[30px] ">
                      Dernière mise à jour: 07 avril 2025.
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
