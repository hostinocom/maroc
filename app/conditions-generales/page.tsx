import Link from "next/link";
import StarRating from "../components/ui/StartRatingFooter";

const title = "Conditions générales - Hostino"
const description =  "Conditions Générales Hostino: accord avec Hostino qui est lié par les conditions de service décrites dans le présent document."
const imageUrl = "https://www.hostino.ma/wp-content/uploads/2024/10/hebergement-web.png" 
const canonical_url = "https://www.hostino.ma/conditions-generales"
const og_alt = "Conditions générales"


export default async function LegalDocumentPage() {
  return (
    <main>
      <section className="lg:py-[150px] bg-gray-100 py-[80px]">
        <div className="container">
          <h1 className="big-title">Conditions générales</h1>
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
                  <Link className="active" href="/conditions-generales">Conditions générales</Link>
                </li>
                <li
                 
                >
                  <Link  href="/mentions-legales">Mentions légales</Link>
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
              <div >
                <p>
                  En achetant un hébergement, un nom de domaine ou tout autre
                  service ou produit auprès de Hostino, vous (le client)
                  concluez un accord avec&nbsp;
                  <span style={{ letterSpacing: "0.2px" }}>
                    <b>Hostino</b>
                  </span>
                  &nbsp;qui est lié par les conditions de service décrites dans
                  le présent document.
                </p>
                <p>
                  Le présent accord doit être interprété à tous égards
                  conformément aux lois du Royaume du Maroc, applicables aux
                  contrats exécutoires dans ce pays. En complétant le processus
                  de commande, vous acceptez d’avoir lu, compris et être lié par
                  ces conditions de service.
                </p>
                <h3>1. Définitions</h3>
                <p>
                  1.1 Service d’hébergement – Tout espace mutualisé, revendeur,
                  virtuel ou dédié utilisé pour stocker et diffuser du contenu
                  sur le web.
                </p>
                <p>
                  1.2 Services additionnels – Tout produit ou service considéré
                  comme un « addon » à un service d’hébergement principal, ou
                  qui couvre les frais uniques pour le travail supplémentaire
                  effectué par un membre du personnel de Hostino.
                </p>
                <p>
                  1.3 Utilisation des ressources – Toutes les ressources
                  allouées au client pour permettre le stockage et la livraison
                  du contenu web au sein d’un service d’hébergement. Cela
                  comprend, sans s’y limiter, l’espace disque, la mémoire, le
                  processus et la bande passante.
                </p>
                <p>
                  1.4 Abonnement – La durée (mensuelle, trimestrielle,
                  semestrielle, annuelle) applicable au service acheté.
                </p>
                <p>
                  1.5 Espace client – Une interface de gestion de compte pour
                  gérer la facturation de l’hébergement, des noms de domaine ou
                  des services supplémentaires achetés, y compris les factures,
                  les coordonnées et les enregistrements de domaines.
                </p>
                <p>
                  1.6 PUA – Politique d’utilisation acceptable, elle permet de
                  définir les limites d’utilisation de chaque service.
                </p>
                <h3>2. Identité</h3>
                <ul>
                  <li>
                    Société :&nbsp;<b>Hostino SARL AU</b>
                  </li>
                  <li>
                    Adresse du siège: <b>T100 Technopark Tangier, Morocco.</b>
                  </li>
                  <li>
                    Directeur général: <b>Aniss KIASSI</b>
                  </li>
                  <li>
                    RC :&nbsp;<b>123893 Tanger</b>
                  </li>
                  <li>
                    TP: <b>50412781</b>
                  </li>
                  <li>
                    IF:&nbsp;<b>51707097</b>
                  </li>
                  <li>
                    RIB :&nbsp;<b>164 640 21211 52330320002 28</b>
                  </li>
                  <li>
                    ICE :&nbsp;<b>002984236000036</b>
                  </li>
                  <li>
                    E-mail:&nbsp;<b>info@hostino.com</b>
                  </li>
                  <li>
                    Site web : <b>www.hostino.ma</b>
                  </li>
                </ul>
                <h3>3. Frais</h3>
                <p>
                  3.1 Paiement – L’activation de tout nom de domaine ou
                  hébergement ou service supplémentaire dépend de la réception
                  par Hostino du paiement des frais indiqués sur le site web ou
                  de toute autre documentation ou devis personnalisé fourni au
                  client. Les paiements ultérieurs sont dus à la date
                  anniversaire de la période d’abonnement à l’avance pour le
                  service de la période d’abonnement suivante. Tous les frais de
                  service sont indiqués dans la description du produit ou seront
                  communiqués au client avant que le paiement ne soit exigé pour
                  tout devis personnalisé ou service commandé par téléphone.
                </p>
                <p>
                  3.2 Frais d’installation – Le client accepte de payer à
                  l’avance et en totalité tout montant de nature non récurrente
                  nécessaire au déploiement initial du service d’hébergement
                  acheté. Ces frais sont indiqués comme frais d’installation
                  dans la description du service ou seront divulgués dans tout
                  devis personnalisé avant tout approvisionnement de serveur,
                  acquisition d’équipement ou d’installation par Hostino.
                </p>
                <p>
                  3.3 Frais récurrents – Tous les abonnements pour les services
                  de noms de domaine et d’hébergement fournis par Hostino sont
                  récurrents par nature et le client s’engage à payer tous les
                  frais récurrents énumérés dans la description du service à
                  l’avance à chaque date anniversaire pour confirmer le
                  renouvellement de son service.
                </p>
                <p>
                  3.4 Frais non remboursables – Certains frais payés à Hostino
                  sont considérés comme non remboursables en raison de la nature
                  du produit ou du service acheté et cela comprend, mais n’est
                  pas limité à ce qui suit :
                </p>
                <p>
                  3.4.1 Produits de tiers – Les produits fournis par Hostino où
                  Hostino agit en tant que revendeur pour un autre fournisseur
                  (par exemple, les enregistrements de domaines, les certificats
                  SSL, les licences de messagerie Google et Microsoft, les
                  licences de produits de tiers) sont fournis en tant que
                  produits non remboursables et les remboursements ne peuvent
                  pas être effectués une fois que le produit a été activé sur un
                  compte.
                </p>
                <p>
                  3.4.2 Temps d’administration avancé – Les services pour
                  lesquels un travail supplémentaire doit être effectué par le
                  personnel de Hostino ne sont pas remboursables une fois que le
                  travail supplémentaire a été effectué.
                </p>
                <p>
                  3.5 Factures et relevés – les factures sont fournies au client
                  par e-mail en utilisant l’adresse e-mail de contact attribuée
                  au client ou tout autre contact de facturation supplémentaire
                  dans le système de facturation de Hostino. Si le client
                  souhaite recevoir une copie originale de sa facture, il doit
                  formuler sa demande au support clientèle en indiquant
                  l’adresse postale à laquelle il souhaite recevoir la facture.
                </p>
                <p>
                  3.6 Relevés – Hostino ne fournit pas de relevés écrits ou
                  imprimés. Toutefois, l’historique des factures d’un compte est
                  toujours disponible pour être consulté par le client sur son
                  espace dédié.
                </p>
                <p>
                  3.7 Défaut de paiement – Hostino peut temporairement refuser
                  le service ou résilier le présent accord en cas de défaut de
                  paiement par le client des frais d’abonnement applicables aux
                  frais récurrents lorsque les frais sont en retard de 30 jours.
                  Cette résiliation ou ce refus ne libère pas le client de la
                  responsabilité du paiement de tous les frais accumulés pour
                  les services renouvelés, plus les intérêts raisonnables et les
                  frais de recouvrement. Les comptes qui ne sont pas
                  recouvrables par Hostino peuvent être remis à une agence de
                  recouvrement externe, ce qui peut entraîner des frais
                  supplémentaires ou des amendes.
                </p>
                <h3>4. Remboursements, litiges et annulations</h3>
                <p>
                  4.1 Garantie de remboursement – Hostino offre une garantie de
                  remboursement de 30 jours pour les services d’hébergement
                  mutualisé ou revendeur.
                </p>
                <p>
                  4.2 Remboursements – Tous les paiements effectués à Hostino ne
                  sont pas remboursables, sauf si la période de remboursement
                  est applicable et que la demande de remboursement est faite
                  dans les 30 jours suivant la date d’activation du service. Les
                  frais uniques d’installation et les frais supplémentaires ne
                  sont pas remboursables, sauf lorsqu’un hébergement commandé ou
                  un service supplémentaire ne peut être fourni par Hostino.
                  Lorsqu’un service commandé ne peut pas être fourni mais qu’un
                  service alternatif est fourni à sa place, tous les frais
                  d’installation uniques applicables restent dus. Les
                  remboursements ne sont pas fournis automatiquement et doivent
                  être demandés par le client dans les 30 jours suivant la
                  demande d’annulation.
                </p>
                <p>
                  Le remboursement des paiements effectués par PayPal ou carte
                  bancaire internationale sont effectués sur compte PayPal
                  émetteur ou le compte bancaire lié à la carte internationale
                  utilisée pour le paiement.
                </p>
                <p>
                  Pour tous les autres moyens de paiement (carte bancaire
                  marocaine, Tasshilat, espèces, virement bancaire et versement
                  bancaire), le remboursement est effectué sur le solde du
                  client et est consultable sur son espace client. Le solde peut
                  être utilisé pour payer de nouvelles commandes.
                </p>
                <p>
                  4.3 Litiges – Tous les litiges relatifs aux surfacturations ou
                  à la facturation doivent être signalés dans les 60 jours
                  suivant le moment où le litige est survenu. Si vous contestez
                  une charge à l’émetteur de votre carte de crédit qui, à la
                  seule discrétion de Hostino, est une charge valide en vertu
                  des dispositions des présentes conditions de service, vous
                  acceptez de payer à Hostino des « frais administratifs » d’un
                  minimum de 500 MAD et d’un maximum de 1500 MAD.
                </p>
                <p>
                  4.4 Annulation du service par le client – Hostino fournit un
                  service récurrent et continu qui restera actif jusqu’à sa date
                  d’échéance. Une facture proforma de renouvellement est générée
                  sur l’espace client quinze jours avant la date d’échéance. Si
                  le client ne procède pas au paiement, le service est
                  automatiquement suspendu. Le client peut à n’importe quel
                  moment formuler une demande d’annulation via son espace
                  client, il aura donc le choix entre l’annulation immédiate du
                  service ou à la fin de son abonnement. Dans le cas où une
                  demande d’annulation est formulée, aucune facture de
                  renouvellement n’est générée.
                </p>
                <p>
                  4.4.1 Pas de frais d’annulation – Hostino ne facture pas de
                  frais d’annulation et ne rembourse pas les frais prépayés,
                  sauf si la garantie de remboursement est applicable.
                </p>
                <p>
                  4.4.2 Pas d’accès au compte – Si le client souhaite annuler un
                  service et ne peut pas accéder à son espace client pour une
                  raison quelconque, le client doit prendre contact avec Hostino
                  par téléphone ou par ticket de support pour obtenir les
                  informations de connexion nécessaires ou les instructions pour
                  procéder à la demande d’annulation.
                </p>
                <p>
                  4.4.3 Données du client – En cas d’annulation réussie d’un
                  service d’hébergement, toutes les données stockées dans le
                  service annulé seront supprimées. Hostino&nbsp;ne fournit
                  aucune garantie que les données du client seront récupérables
                  une fois le processus d’annulation terminé.
                </p>
                <p>
                  4.5 Annulation du service par Hostino – Hostino peut annuler
                  le service d’hébergement du client pour toute violation des
                  présentes conditions de service ou les conditions
                  d’utilisation sans notification préalable. Hostino ne fournit
                  aucune garantie que les données du client seront récupérables
                  une fois le processus d’annulation terminé.
                </p>
                <h3>5. Propriété du compte</h3>
                <p>
                  5.1 Propriétaire du compte – L’email principal et les
                  coordonnées du titulaire de l’espace client est considéré
                  comme le propriétaire légal du compte. L’hébergement
                  individuel ou les services supplémentaires qui sont associés à
                  un compte sont contrôlés par le propriétaire du compte et les
                  modifications et mises à jour des informations d’un compte ne
                  peuvent être effectuées que par le propriétaire du compte ou
                  son contact supplémentaire autorisé. Le propriétaire du compte
                  est établi au moment de la création du compte. Les coordonnées
                  d’un propriétaire de compte doivent être celles d’une personne
                  réelle. Il n’est pas permis d’utiliser des noms fictifs ou «
                  faux » pour les coordonnées d’un propriétaire de compte. Les
                  comptes contenant des noms fictifs ou « faux » et des
                  coordonnées qui ne reflètent pas les coordonnées d’une
                  personne réelle peuvent être suspendus ou résiliés sans
                  préavis.
                </p>
                <p>
                  Le titulaire légal d’un nom de domaine enregistré chez Hostino
                  est le propriétaire du compte par défaut ou le contact que le
                  propriétaire du compte indique lors de l’enregistrement du nom
                  de domaine.
                </p>
                <p>
                  5.2. Informations sur le compte – Le client garantit que
                  toutes les informations fournies à Hostino sont véridiques,
                  correctes, exactes et à jour et que la personne désignée comme
                  propriétaire du compte est âgée de 18 ans ou plus et est
                  légalement habilitée à agir et à conclure le présent contrat
                  en tant que client ou au nom du client.
                </p>
                <p>
                  5.2.1 Maintien des informations du compte – Le client est
                  responsable du maintien des informations de contact
                  renseignées sur son compte et le défaut de maintien à jour des
                  informations de contact ne garantit pas l’exonération des
                  frais, des frais en retard ou des avertissements émis par
                  Hostino.
                </p>
                <p>
                  5.3 Contact supplémentaire autorisé – Le propriétaire du
                  compte peut ajouter et autoriser une ou plusieurs personnes de
                  contact supplémentaires pour agir en son nom.
                </p>
                <p>
                  Pour que tout contact supplémentaire ajouté à un compte puisse
                  demander des modifications de compte, le contact
                  supplémentaire autorisé doit être configuré comme un
                  sous-compte avec ses propres informations de connexion et
                  avoir les autorisations appropriées. Si le contact
                  supplémentaire autorisé n’est pas activé en tant que
                  sous-compte, le contact n’aura que des autorisations limitées
                  pour prendre en charge un service et ne pourra pas demander de
                  modifications de la configuration de l’hébergement ou du nom
                  de domaine.
                </p>
                <p>
                  5.4 Transfert de compte – Le rôle de propriétaire de compte
                  peut être transféré à un autre contact supplémentaire autorisé
                  ou à un client Hostino en contactant notre équipe de support.
                </p>
                <p>
                  5.5 Fermeture de compte – Un compte sera automatiquement
                  marqué comme inactif lorsqu’aucun hébergement actif ou nom de
                  domaine ou service supplémentaire n’est exploité sous le
                  compte. Le client garde l’accès à ce compte et peut l’utiliser
                  à tout moment pour consulter son historique de commandes ou de
                  services, ou pour commander un nouveau service.
                </p>
                <h3>
                  6.&nbsp;
                  <span>
                    Enregistrement, transfert et renouvellement de domaines
                  </span>
                </h3>
                <p>
                  6.1 Enregistrements de domaines – les enregistrements de noms
                  de domaine réussis qui ont terminé la procédure
                  d’enregistrement et sont considérés comme actifs par le bureau
                  d’enregistrement de domaines sont définitifs et ne peuvent
                  être annulés ou remboursés. Certaines extensions de domaine
                  peuvent nécessiter des informations supplémentaires pour
                  compléter l’enregistrement et Hostino ne fournit aucune
                  garantie qu’un enregistrement de domaine commandé sera
                  confirmé par le bureau d’enregistrement. Il est de la seule
                  responsabilité du client de vérifier quelles informations sont
                  nécessaires pour enregistrer un domaine particulier avant de
                  passer une commande d’enregistrement de domaine.
                </p>
                <p>
                  Dans le cas où des informations supplémentaires sont requises
                  par le bureau d’enregistrement pour valider l’enregistrement
                  d’un nom de domaine, Hostino contactera le client pour les lui
                  demander. Si le client ne répond pas dans les délais ou si le
                  bureau d’enregistrement refuse de valider le domaine, les
                  frais sont remboursés selon la politique de remboursement
                  décrite ci-haut.
                </p>
                <p>
                  6.2 Transferts de domaines – Les transferts de domaines
                  prennent généralement de 5 à 7 jours une fois que
                  l’autorisation finale a été reçue par le bureau
                  d’enregistrement de domaine. Hostino n’a pas le pouvoir
                  d’accélérer un transfert de domaine et ne peut donner aucune
                  garantie quant au temps nécessaire pour effectuer un
                  transfert. Le client doit s’assurer que toutes les
                  informations de contact sont à jour avec le registraire de
                  domaine actuel et que les codes de transfert appropriés ont
                  été obtenus avant de passer une commande de transfert de
                  domaine à Hostino.
                </p>
                <p>
                  6.3 Renouvellement de domaine – Les domaines doivent être
                  renouvelés avant leur date d’expiration pour éviter leur
                  suspension. De multiples notifications sont envoyées au client
                  pour l’informer des prochains renouvellements de domaines à
                  partir de 60 jours avant la date d’expiration indiquée.
                  Hostino n’a aucun contrôle sur le maintien d’un nom de domaine
                  actif une fois qu’il a atteint sa date d’expiration et
                  n’assume pas la responsabilité de l’inaccessibilité d’un site
                  web parce que le client n’a pas renouvelé son nom de domaine.
                </p>
                <p>
                  6.4 Conditions particulières liées à la réservation des noms
                  de domaines .ma
                </p>
                <p>6.4.1 Obligations et droits du demandeur/titulaire</p>
                <p>
                  Le Demandeur ou le Titulaire reconnaît qu’il a lu les
                  dispositions de la décision de nommage, qu’il accepte d’être
                  lié par l’ensemble de ses modalités, dans sa version adoptée
                  et modifiée par l’ANRT. Ladite décision est disponible sur le
                  site web de l’ANRT. :
                  https://www.anrt.ma/sites/default/files/2015-12-14-gestion-nom-domaine-ma-fr_0.pdf
                </p>
                <p>
                  Le Titulaire bénéficie d’un usage exclusif et personnel du nom
                  de domaine enregistré pendant sa période de validité,
                  conformément aux dispositions réglementaires en vigueur.
                </p>
                <p>
                  Au moment de l’enregistrement ou du renouvellement d’un nom de
                  domaine, tout Demandeur ou Titulaire est censé avoir accepté
                  la collecte, le stockage et le traitement des données le
                  concernant par l’ANRT, ainsi que la publication des données «
                  WHOIS ». Les données mentionnées lors de l’enregistrement
                  seront visibles sur le site officiel de l’ANRT et sur les
                  bases de données WHOIS publiques. Le Titulaire ne peut pas
                  cacher ces informations.
                </p>
                <p>
                  Le Titulaire est censé avoir accepté que certaines données le
                  concernant soient transmises par l’ANRT aux autorités
                  compétentes, ou à une personne tierce conformément à la
                  législation en vigueur.
                </p>
                <p>
                  Le choix, l’utilisation et l’exploitation d’un nom de domaine,
                  ainsi que les sous domaines y afférents, relèvent de la
                  responsabilité du Titulaire. Ce dernier utilise le nom de
                  domaine enregistré et les sous domaines y afférents pour son
                  propre besoin, sans porter atteinte aux droits et aux intérêts
                  des tiers.
                </p>
                <p>
                  Le Titulaire est représenté par une personne physique, dite
                  contact administratif, dûment mandatée à cet effet et établie
                  au Maroc. Au cas où le Titulaire est une personne physique, il
                  peut être lui-même le contact administratif.
                </p>
                <p>
                  Le Titulaire reconnaît et convient que le contact
                  administratif est autorisé par ses soins à agir à titre de
                  mandataire du Titulaire dans le cadre de l’enregistrement et
                  de la gestion du nom de domaine. En cas de différence entre le
                  Titulaire et son contact administratif lors d’une opération de
                  gestion d’un nom de domaine, la position du Titulaire
                  prévaudra.
                </p>
                <p>
                  Le Titulaire doit fournir au Prestataire des adresses postale
                  et électronique effectives le concernant, ainsi que des
                  adresses postale et électronique effectives de son contact
                  administratif.
                </p>
                <p>
                  Le Titulaire doit s’assurer que tous les renseignements
                  relatifs à l’enregistrement d’un nom de domaine, communiqués à
                  son Prestataire, sont à jour, complets et exacts. Il est tenu
                  d’en assurer la mise à jour immédiate en cas de changement les
                  affectant. Le Titulaire est tenu de vérifier que les données
                  publiées sur le « WHOIS » sont complètes et exactes, et de
                  procéder sans délai aux mises à jour nécessaires auprès du
                  Prestataire.
                </p>
                <p>
                  Le Titulaire peut renouveler à tout moment son nom de domaine
                  conformément à la décision de nommage. A l’expiration du nom
                  de domaine, le Titulaire est tenu de renouveler son nom de
                  domaine durant la période de grâce de renouvellement s’il
                  souhaite le maintenir.
                </p>
                <p>
                  A l’expiration d’un nom de domaine, le Prestataire peut le
                  résilier au cas où le Titulaire ne procède pas au paiement des
                  frais de renouvellement y afférent. A la fin de la période de
                  grâce de renouvellement, le nom de domaine est supprimé par
                  l’ANRT.
                </p>
                <p>
                  Le Titulaire peut résilier son nom de domaine avant sa date
                  d’échéance. Le nom de domaine dispose d’une période de grâce
                  de résiliation durant laquelle le Titulaire peut procéder à
                  son réenregistrement.
                </p>
                <p>
                  Le Titulaire a le droit de demander le changement du
                  Prestataire à tout moment, sous réserve du respect des
                  dispositions de la décision de nommage et du présent contrat.
                </p>
                <p>
                  Le Titulaire a le droit de transférer son nom de domaine à une
                  autre personne, sous réserve du respect des termes de la
                  décision de nommage et du présent contrat.
                </p>
                <p>
                  Le Titulaire s’engage à se soumettre à la procédure
                  alternative de résolution de litiges, et à toute décision de
                  l’ANRT concernant le nom de domaine «.ma» enregistré.
                  http://www.wipo.int/amc/fr/domains/rules/cctld/ma/index.html
                </p>
                <p>6.4.2 Obligations et droits de Hostino</p>
                <p>
                  Hostino est tenu d’informer le Titulaire de l’expiration de
                  son nom de domaine trente (30) jours avant sa date d’échéance,
                  et lui permettre de renouveler son nom de domaine avant ou
                  durant les 29 jours de la période de grâce qui est de 30 jours
                  pour les noms de domaine .MA.
                </p>
                <p>
                  Hostino doit procéder aux modifications relatives aux noms de
                  domaine et aux Titulaires sur le Registre, à chaque fois que
                  lesdites modifications lui sont communiquées par le Titulaire.
                </p>
                <p>
                  A la résiliation du nom de domaine, Hostino est tenu d’en
                  informer le Titulaire, en lui précisant la période de grâce de
                  résiliation durant laquelle il peut récupérer le nom de
                  domaine résilié à tout moment.
                </p>
                <p>
                  Hostino est tenu de mettre à la disposition des Titulaires un
                  site web comprenant impérativement ses coordonnées complètes
                  et à jour. Il doit publier, également, sur ce site, toutes les
                  modifications apportées par l’ANRT aux dispositions
                  réglementaires et aux procédures d’enregistrement et de
                  gestion des noms de domaine.
                </p>
                <p>
                  Hostino est tenu de porter à la connaissance du Titulaire
                  toute information ou notification le concernant dès sa
                  réception de la part de l’ANRT.
                </p>
                <p>
                  Hostino doit informer sans délai le Titulaire concerné de tout
                  gel, blocage ou suppression d’un nom de domaine par l’ANRT, en
                  lui communiquant le motif tel que communiqué par cette
                  dernière.
                </p>
                <p>
                  A tout moment, et à la demande du Titulaire, Hostino est tenu
                  de lui fournir gratuitement le(s) code(s) d’autorisation,
                  aussi appelés codes d’autorisation de transfert (EPP) d’un ou
                  de plusieurs noms de domaine, dans un délai d’un (2) jours
                  ouvrables à la réception de ladite demande.
                </p>
                <p>
                  Hostino est tenu d’assister les Titulaires pour
                  l’enregistrement, le renouvellement, la résiliation et le
                  transfert des noms de domaine, ainsi que la mise à jour des
                  informations y afférentes. Il est tenu d’apporter tout support
                  nécessaire aux Demandeurs et Titulaires des noms de domaine en
                  vue de renseigner correctement les informations requises.
                </p>
                <p>
                  Hostino ne doit collecter, utiliser ou communiquer aucune
                  donnée, personnelle ou autre, relative à un Titulaire, à des
                  fins autres que celles prévues par l’enregistrement et la
                  gestion des noms de domaine du Titulaire et ce, conformément
                  aux dispositions réglementaires en vigueur. L’utilisation de
                  ces données doit se faire en conformité avec la réglementation
                  sur la protection des personnes physiques à l’égard du
                  traitement des données à caractère personnel.
                </p>
                <h3>7. Conditions générales et limites de support</h3>
                <p>
                  7.1 Limites d’assistance – Hostino fournit une assistance
                  technique à ses clients directs uniquement et le fait
                  conformément aux limites de support qu’elle a définies.
                  L’assistance de Hostino est conçue pour aider les clients à
                  utiliser et à se connecter au service d’hébergement et ne
                  s’étend pas au diagnostic ou à la résolution des problèmes
                  liés au codage d’un site web ou d’une application web hébergés
                  dans le service d’hébergement du client. L’assistance
                  technique se fait par les moyens de support affichés sur le
                  site, à savoir : par téléphone durant les horaires de travail
                  ou par ticket de support 24h/24 et 7j/7. Hostino ne peut
                  fournir aucun service de télé-assistance et l’équipe de
                  support ne peut en aucun cas se connecter à distance au poste
                  du client.
                </p>
                <p>
                  7.1.1 Assistance aux clients du client – Hostino ne fournit
                  pas d’assistance technique directe aux clients du client. Les
                  revendeurs, les affiliés, les clients des serveurs, et les
                  clients qui ont plusieurs comptes d’hébergement individuels
                  sous un seul compte client ne doivent pas conseiller à leurs
                  clients de contacter Hostino directement et doivent plutôt
                  contacter Hostino au nom de leur client. Hostino est heureux
                  de vous aider pour toutes les questions de support qui entrent
                  dans le cadre de nos limites de support lorsqu’il est demandé
                  par le client direct.
                </p>
                <p>
                  7.2 Assistance avancée – Lorsque Hostino peut et accepte de
                  fournir une assistance avancée au client, des frais de service
                  supplémentaires pourraient être requises pour cette
                  intervention. Les frais d’assistance avancée sont payables à
                  l’avance en fonction du temps estimé par Hostino pour la tâche
                  supplémentaire à effectuer. Hostino ne garantit pas qu’un
                  problème ou une tâche sera résolu dans le temps estimé, et si
                  un temps supplémentaire est nécessaire, le temps d’assistance
                  avancée supplémentaire devra être payé avant que tout travail
                  supplémentaire ne soit effectué.
                </p>
                <p>
                  7.3 Responsabilité du contenu et de l’activité du compte – Le
                  client est seul responsable du contenu stocké et servi par le
                  service d’hébergement acheté et de l’activité de tout script
                  ou service de courrier électronique créé dans le cadre du
                  service d’hébergement. Le client doit maintenir la sécurité de
                  tous les mots de passe des comptes et des applications ou des
                  scripts et s’assurer que tous les scripts dans le cadre du
                  service d’hébergement sont exempts de contenu malveillant qui
                  pourrait nuire à toute partie de l’infrastructure de Hostino,
                  d’autres comptes clients hébergés par Hostino, ou les systèmes
                  externes des visiteurs visualisant le contenu hébergé.
                </p>
                <p>
                  7.3.1 Utilisation acceptable – Le client doit s’assurer à tout
                  moment qu’il se conforme à la Politique d’utilisation
                  acceptable de Hostino et ne doit pas héberger de contenu ou
                  permettre toute activité de compte qui enfreint la PUA. Les
                  violations de la PUA sont régies par les conditions suivantes
                  :
                </p>
                <p>
                  7.3.1.1 Première violation – Lorsque Hostino détermine qu’un
                  service d’hébergement a violé un élément quelconque de la PUA,
                  le client reçoit un avertissement par courrier électronique
                  l’informant de la violation. Le service d’hébergement peut, à
                  la discrétion de Hostino, faire l’objet d’une suspension
                  temporaire en attendant que le client accepte par écrit de
                  s’abstenir de toute autre violation.
                </p>
                <p>
                  7.3.1.2 Deuxième violation – Lorsque Hostino détermine qu’un
                  service d’hébergement a commis une deuxième violation de tout
                  élément de la PUA, le service d’hébergement sera soumis à une
                  suspension immédiate ou à une résiliation sans aucun autre
                  avis.
                </p>
                <p>
                  7.3.1.3 Suspension du service ou annulation – Hostino se
                  réserve le droit de suspendre l’accès au service d’hébergement
                  du client si, selon le jugement de Hostino, le service du
                  client est la source ou la cible de la violation de l’une des
                  conditions de la PUA ou des présentes conditions de service.
                  Si une activité inappropriée est détectée, tous les comptes du
                  client en question seront désactivés jusqu’à la fin de
                  l’enquête. La notification préalable au client n’est pas
                  assurée et dans des cas extrêmes, les forces de l’ordre seront
                  contactées au sujet de l’activité. Le client ne sera pas
                  crédité pour la durée de la suspension du service
                  d’hébergement.
                </p>
                <p>
                  7.3.2 Applications web – Le client doit s’assurer que toutes
                  les applications web utilisées sur le service d’hébergement
                  sont sécurisées, patchées et mises à jour. Les applications
                  open source sont vulnérables aux attaques via des exploits
                  dans le logiciel, et les développeurs du logiciel fournissent
                  généralement des mises à jour lorsque des vulnérabilités ont
                  été détectées. Il est de la responsabilité du client
                  d’installer toutes les mises à jour/rappels pour maintenir la
                  sécurité de l’application. Si le client n’a pas les
                  compétences requises pour effectuer les mises à jour, il devra
                  faire appel aux services d’un développeur web capable de
                  l’aider.
                </p>
                <p>
                  7.3.3 Maintien de la compatibilité – La nature des
                  environnements d’hébergement partagé et des applications de
                  serveur telles que Apache, PHP et MySQL est qu’ils sont
                  constamment mis à jour pour maintenir la stabilité, la
                  performance et la sécurité. Le fait de maintenir les
                  applications web patchées et mises à jour garantit à la fois
                  la sécurité du site web et des données, et est également
                  essentiel pour maintenir la compatibilité avec les changements
                  des applications serveur. Hostino met régulièrement à jour
                  toutes les applications serveur et il est de la responsabilité
                  du client de maintenir les applications web installées pour
                  assurer la compatibilité avec les dernières versions stables
                  et supportées de toutes les applications serveur.
                </p>
                <p>
                  7.4 Utilisation des ressources – Tous les services
                  d’hébergement achetés ont une variété de limitations de
                  ressources appliquées conformément au plan applicable associé
                  au service. Il est de la responsabilité du client de s’assurer
                  que son service d’hébergement ne dépasse pas les ressources
                  allouées et de mettre à niveau son service s’il est déterminé
                  que plus de ressources sont nécessaires pour garantir le bon
                  fonctionnement d’un service d’hébergement.
                </p>
                <p>
                  7.4.1 Utilisation abusive des ressources (à l’exclusion des
                  clients de serveurs dédiés) – Hostino met en place des
                  restrictions de ressources par compte sur tous les services
                  d’hébergement partagés, revendeurs et VPS qui varient d’un
                  plan à l’autre. En plus de ces restrictions, les clients ne
                  doivent pas :
                </p>
                <p>
                  Utiliser 50 % ou plus des ressources CPU allouées pendant plus
                  de 60 secondes.
                  <br />
                  Exécuter des processus autonomes et non surveillés côté
                  serveur à tout moment sur le serveur. Cela inclut tous les
                  démons, tels que IRCD.
                  <br />
                  Exploiter un compte sur tout serveur partagé ou revendeur dans
                  le but de stocker des fichiers dont le contenu n’est pas lié à
                  l’exploitation et à la livraison de leurs applications web ou
                  qui pourrait violer la PUA de Hostino.
                  <br />
                  Exécuter tout type de logiciel d’indexation sur tout serveur
                  partagé ou revendeur.
                  <br />
                  Exécuter tout logiciel qui s’interface avec un réseau IRC
                  (Internet Relay Chat).
                  <br />
                  Exécuter tout type d’application de torrent binaire ou de
                  tracker ou participer à toute activité illégale de partage de
                  fichiers.
                  <br />
                  Exécuter des tâches cron sur un serveur partagé ou revendeur
                  avec des intervalles de moins de 5 minutes.
                  <br />
                  Exécuter des bases de données MySQL excessivement volumineuses
                  sur des serveurs partagés ou des comptes de revendeurs. Les
                  bases de données avec un nombre excessif de tables MySQL (plus
                  de 1000) ou d’une taille supérieure à 1 Go peuvent affecter
                  négativement les performances du serveur et sont strictement
                  interdites.
                  <br />
                  Exécuter toute requête MySQL de plus de 15 secondes sur des
                  serveurs partagés ou des serveurs de revendeurs. Les tables
                  MySQL doivent être indexées de manière appropriée et
                  régulièrement mises à jour afin de garantir que les tables
                  individuelles ne contiennent pas un nombre excessif de lignes.
                  <br />
                  Stocker plusieurs sauvegardes d’un compte d’hébergement sur un
                  serveur d’hébergement partagé. Les archives de sauvegarde
                  créées par les outils de sauvegarde d’un serveur sont conçues
                  pour être téléchargées hors du serveur afin de maintenir des
                  sauvegardes hors site. Faire des sauvegardes qui contiennent
                  d’autres archives de sauvegarde peut entraîner une forte
                  charge sur les matrices de stockage et est strictement
                  interdit. Tout service d’hébergement qui dispose de plusieurs
                  sauvegardes sur le serveur peut être suspendu par Hostino
                  jusqu’à ce que les sauvegardes soient supprimées.
                  <br />
                  Stocker des fichiers dont la taille dépasse 100 Mo et qui ne
                  sont pas utilisés pour le besoin du site web. L’espace
                  d’hébergement ne doit en aucun cas être utilisé comme un
                  système de stockage ou d’archivage des fichiers. Tout le
                  contenu qui y figure doit être utilisé sur le site web.
                  <br />
                  Générer des sauvegardes sur l’hébergement partagé ou chez un
                  revendeur pour les comptes consommant plus de 15 Go d’espace
                  disque. Vous devez d’abord contacter le support technique,
                  puis une sauvegarde sera générée pour vous.
                  <br />
                  Conserver les emails dans la corbeille pendant plus de 30
                  jours. Les emails qui ont été conservés dans la corbeille
                  pendant plus de 30 jours seront automatiquement supprimés.
                  <br />
                  Utiliser des ressources VPS excessives en raison d’une
                  mauvaise configuration. Lorsqu’un client dispose d’un VPS
                  autogéré ou géré, nous pouvons apporter des modifications
                  mineures à la configuration sans préavis si la configuration
                  de ce serveur affecte négativement les autres serveurs VPS sur
                  le même hôte.
                  <br />
                  Stocker les fichiers dans la corbeille du cPanel. Lorsque les
                  fichiers sont supprimés via le gestionnaire de fichiers du
                  cPanel, ils sont temporairement stockés dans le dossier
                  Corbeille. Ce dossier contenant les fichiers supprimés sera
                  automatiquement effacé tous les 30 jours.
                  <br />
                  7.4.2 Inodes – Chaque fichier et répertoire hébergé sur les
                  serveurs de Hostino utilise 1 inode et les comptes considérés
                  comme utilisant un nombre excessif d’inodes sur les serveurs
                  partagés ou revendeurs devront mettre à niveau leur service
                  d’hébergement ou supprimer des fichiers. Pour les services
                  d’hébergement mutualisé et revendeur, un nombre d’inodes de
                  250 000 ou plus est considéré comme excessif et cause de
                  problèmes de performances au niveau de l’environnement. Nous
                  recommandons de maintenir un nombre d’inodes inférieur à 100
                  000 par compte pour une performance optimale. Pour
                  l’hébergement en VPS, un nombre d’inodes de 4 000 000 ou plus
                  est considéré comme excessif.
                </p>
                <p>
                  7.4.3 Surveillance de la bande passante et du transfert de
                  données – La bande passante et le transfert de données sont
                  surveillés de différentes manières dans notre gamme de
                  services. Ci-dessous, les détails :
                </p>
                <p>
                  Les plans d’hébergement et de revendeurs partagés qui incluent
                  une bande passante « illimitée » ne sont surveillés que pour
                  une utilisation élevée. Ceci est fait pour s’assurer que les
                  services utilisant de grandes quantités de bande passante le
                  font conformément à nos conditions de service.
                </p>
                <p>
                  Toute la bande passante est surveillée sur un cycle de mois
                  calendaire et peut ne pas correspondre au cycle de facturation
                  exact du service.
                </p>
                <p>
                  Les alertes aux clients sont envoyées à l’adresse électronique
                  de contact enregistrée dans le dossier avant que tout quota de
                  bande passante fixe ne soit atteint. Il est de la
                  responsabilité du client de contacter Hostino pour appliquer
                  une mise à niveau ou un addon approprié pour le service
                  concerné afin de couvrir toute utilisation supplémentaire
                  au-delà du quota du plan fixe.
                </p>
                <p>
                  Pour les plans d’hébergement du revendeur avec des quotas de
                  bande passante fixes, le dépassement du quota attribué
                  entraînera la suspension du service du revendeur et de tous
                  les sous-comptes jusqu’à ce que le plan soit mis à niveau avec
                  une bande passante supplémentaire. Pour acheter une bande
                  passante supplémentaire, le service doit être mis à niveau
                  vers le plan suivant qui fournit une bande passante suffisante
                  pour répondre aux besoins du revendeur.
                </p>
                <p>
                  Pour les plans VPS avec des quotas de bande passante fixes, le
                  dépassement du quota attribué entraînera la suspension du
                  service jusqu’à ce que le plan soit mis à niveau avec une
                  bande passante supplémentaire. Pour acheter une bande passante
                  supplémentaire, le service doit être mis à niveau vers le plan
                  suivant qui fournit une bande passante suffisante pour
                  répondre aux besoins du revendeur.
                </p>
                <p>
                  7.4.4 Abus de bande passante – Hostino se réserve le droit de
                  façonner, suspendre ou mettre fin au service de tout client
                  qui cause des problèmes de stabilité ou des problèmes de
                  performance pour les autres clients sur le réseau Hostino.
                  Hostino se réserve le droit, dans une situation où le trafic
                  d’un client entraîne des coûts non viables pour son
                  entreprise, soit de facturer le client à un tarif viable
                  (changement de plan/taux), soit de suspendre/interrompre le
                  service.
                </p>
                <p>
                  7.5 Streaming média – Hostino n’autorise pas le streaming
                  média sur aucun de ses plans d’hébergement. Les clients qui
                  souhaitent fournir des services de diffusion en continu de
                  médias doivent utiliser nos plans de serveurs dédiés. Les
                  services qui ne respectent pas cette clause sont immédiatement
                  suspendus sans notification préalable.
                </p>
                <p>
                  7.6 Offres obsolètes – Hostino se réserve le droit de mettre à
                  niveau le compte d’un client si l’offre contractée est devenue
                  obsolète et n’est plus listée sur le site de Hostino. Le
                  client est avisé par email et la modification s’applique dès
                  la date d’échéance qui suit la mise à niveau du compte.
                </p>
                <h3>8. Outils, applications et licences de tiers</h3>
                <p>
                  8.1 Applications et licences de tiers – Hostino peut fournir
                  l’accès à des logiciels et/ou services supplémentaires de
                  tiers (« Produits de tiers ») par le biais de revendeurs ou
                  d’autres accords commerciaux que Hostino a établis avec
                  certains fournisseurs (« Fournisseurs de tiers »). Sauf
                  indication contraire, le client comprend que l’assistance
                  technique pour les produits tiers est fournie par Hostino et
                  non par le fournisseur tiers. Ni Hostino ni aucun fournisseur
                  tiers ne fait de déclaration ou de garantie, expresse ou
                  implicite, concernant les produits tiers. Le client reconnaît
                  et accepte expressément que l’utilisation de produits tiers
                  est à ses propres risques et que ces produits tiers sont
                  fournis « tels quels » et sans représentation ou garantie
                  d’aucune sorte de Hostino ou d’un fournisseur tiers, y
                  compris, sans limitation, toute garantie implicite de qualité
                  marchande, d’adéquation à un usage particulier, d’exactitude
                  ou d’exhaustivité des réponses ou des résultats, de
                  correspondance à la description ou de non-violation des droits
                  des tiers. Dans la mesure maximale permise par la loi
                  applicable, ni Hostino ni aucun fournisseur tiers ne sera
                  légalement responsable de tout dommage, qu’il soit direct,
                  indirect ou consécutif, découlant de l’utilisation ou de
                  l’incapacité d’utiliser un produit tiers. Le client s’engage à
                  respecter les termes de toute licence et/ou contrat
                  d’abonnement d’utilisateur final applicable pour les produits
                  tiers et le client sera entièrement responsable envers les
                  fournisseurs tiers et/ou Hostino en ce qui concerne toute
                  utilisation inappropriée de ces produits tiers ou la violation
                  des contrats de licence avec eux et/ou des contrats
                  d’abonnement d’utilisateur final applicables.
                </p>
                <p>
                  8.2 Licences Microsoft – Lorsque des licences pour les
                  logiciels Microsoft ont été achetées par Hostino, le client
                  s’engage à respecter les conditions de licence Microsoft, et
                  si des licences d’utilisation sont achetées, il est de la
                  responsabilité du client de s’assurer qu’il rapporte avec
                  précision et obtient le niveau approprié de licences
                  d’utilisation pour ses utilisations comme indiqué dans les
                  conditions de licence Microsoft.
                </p>
                <p>
                  8.3 Licences Google – Lorsque des licences pour les logiciels
                  Google ont été achetées par Hostino, le client s’engage à
                  respecter les conditions de licence Google, et si des licences
                  d’utilisation sont achetées, il est de la responsabilité du
                  client de s’assurer qu’il rapporte avec précision et obtient
                  le niveau approprié de licences d’utilisation pour ses
                  utilisations comme indiqué dans les conditions de licence
                  Google.
                </p>
                <p>
                  8.4 Disponibilité des fonctions – Hostino ne garantit pas que
                  toutes les fonctions disponibles dans un produit tiers seront
                  prises en charge ou mises à la disposition du client. Il est à
                  la seule discrétion de Hostino de déterminer quelles fonctions
                  sont activées et si Hostino fournira une assistance pour
                  l’utilisation des fonctions activées.
                </p>
                <h3>9. Informations juridiques complémentaires</h3>
                <p>
                  9.1 Divulgation aux forces de l’ordre – La PUA de Hostino
                  interdit spécifiquement l’utilisation de notre service pour
                  des activités illégales et le client accepte que Hostino
                  puisse divulguer toute information sur le client, y compris
                  les numéros IP attribués, l’historique du compte,
                  l’utilisation du compte, etc. à tout agent des forces de
                  l’ordre qui en fait la demande par écrit sans autre
                  consentement ou notification au client. Hostino se réserve le
                  droit de mettre immédiatement fin à tout service d’hébergement
                  dont il s’avère qu’il héberge du contenu et exerce des
                  activités de nature illégale.
                </p>
                <p>
                  9.2 Sécurité du système et du réseau – Il est interdit aux
                  utilisateurs de violer ou de tenter de violer la sécurité du
                  réseau Hostino. Les violations de la sécurité du système ou du
                  réseau peuvent entraîner une responsabilité civile ou pénale.
                  Hostino enquêtera sur les événements qui peuvent impliquer de
                  telles violations et peut impliquer, et coopérer avec les
                  autorités chargées de l’application des lois pour poursuivre
                  les utilisateurs qui sont impliqués dans ces violations. Ces
                  violations comprennent, sans limitation :
                </p>
                <p>
                  L’accès à des données non destinées à cet utilisateur ou la
                  connexion à un serveur ou un compte, auquel cet utilisateur
                  n’est pas autorisé à accéder.
                </p>
                <p>
                  Tenter de sonder, de scanner ou de tester la vulnérabilité
                  d’un système ou d’un réseau ou de violer les mesures de
                  sécurité ou d’authentification sans autorisation appropriée.
                </p>
                <p>
                  Tenter d’interférer avec le service à tout utilisateur, hôte
                  ou réseau, y compris, sans limitation, par des moyens de
                  surcharge, “d’inondation », de « mail bombing » ou de « crash
                  ».
                </p>
                <p>
                  Falsifier l’en-tête d’un paquet TCP/IP ou une partie des
                  informations de l’en-tête d’un courrier électronique ou d’un
                  message envoyé à un groupe de discussion.
                </p>
                <p>
                  Entreprendre toute action afin d’obtenir des services auxquels
                  cet utilisateur n’a pas droit.
                </p>
                <p>
                  9.3 Limitation de responsabilité – Hostino ne garantit pas que
                  tout hébergement ou service supplémentaire fourni sera exempt
                  d’erreurs ou d’interruptions. Hostino n’acceptera aucune
                  responsabilité pour les coûts ou les pertes encourus par le
                  client qui résultent de :
                </p>
                <p>
                  l’utilisation ou l’incapacité d’utiliser un service de
                  Hostino;
                </p>
                <p>
                  de toutes erreurs, fautes, omissions, interruptions, défauts
                  ou retards de fonctionnement ou de livraison;
                </p>
                <p>
                  l’accès non autorisé aux données ou aux services de Hostino;
                </p>
                <p>
                  la suspension ou la cessation des services en raison de
                  violations de la PUA;
                </p>
                <p>
                  la suspension ou la cessation de services en raison
                  d’obligations légales.
                </p>
                <p>
                  9.4 Indemnisation – Le client s’engage à indemniser Hostino de
                  toutes les demandes, responsabilités, pertes, coûts et
                  réclamations, y compris les frais juridiques raisonnables
                  revendiqués contre Hostino, qui peuvent survenir ou résulter
                  de l’utilisation de tout service d’hébergement fourni.
                </p>
                <p>
                  9.5 Modification des présentes conditions – Hostino se réserve
                  le droit de modifier, mettre à jour ou changer les présentes
                  conditions de service sans notification préalable. Lorsque des
                  modifications sont apportées qui peuvent avoir un impact sur
                  l’utilisation par le client d’un service de Hostino, le client
                  sera informé par e-mail en utilisant les principales
                  coordonnées de courriel au sein d’un compte et la poursuite de
                  l’exploitation par le client de tout hébergement ou de
                  services supplémentaires constitue une acceptation des
                  présentes conditions de service.
                </p>
                <p>Termes et conditions appliqués de l’ICANN :</p>
                <p>
                  https://www.icann.org/resources/pages/approved-with-specs-2013-09-17-en
                  <br />
                  https://www.icann.org/resources/pages/educational-2012-02-25-en
                  <br />
                  https://www.icann.org/resources/pages/benefits-2013-09-16-en
                  <br />
                  https://lookup.icann.org/
                  <br />
                  Certains domaines sont régis par le Registrar Soluciones
                  Coporativas IP SL.
                </p>

                <span className="text-[18px] text-[#808080] font-[400]">
                  Dernière mise à jour: 03 avril 2025.
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
