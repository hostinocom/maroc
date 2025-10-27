export default function DomainPricingSection() {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container mx-auto px-4">
        {/* First Table - Domain Registration */}
        <div className="mb-16">
          <h2 className="big-title  font-[600] mb-8">
            Prix nom de domaine <br /> Maroc ?
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300">
              <tbody>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Durée de réservation
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    1 à 5 ans
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Durée de renouvellement
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    1 à 5 ans
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Délai d'obtention
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300 underline">
                    Immédiat
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Longueur du domaine
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    2 à 63 caractères
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Prix
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    118 Dhs HT/an soit 141,6 Dhs TTC/an
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Second Table - Domain Renewal */}
        <div>
          <h3 className="text-[27px] font-[600] text-title mb-8">
            Renouvellement de nom de domaine
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300">
              <tbody>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Alertes par email : 30, 15, 7 et 3 jours avant l'échéance.
                  </td>
                  <td className="px-6 py-4 text-center font-normal text-slate-700 border border-slate-300">
                    ✓
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Email après la Redemption Grace Period pour.
                  </td>
                  <td className="px-6 py-4 text-center font-normal text-slate-700 border border-slate-300">
                    ✓
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    À partir de votre Espace Client.
                  </td>
                  <td className="px-6 py-4 text-center font-normal text-slate-700 border border-slate-300">
                    ✓
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Prix
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    118 Dhs HT/an soit 141,6 Dhs TTC/an
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Third Table - Domain Transfer */}
        <div className="mt-16 mb-16">
          <h3 className="text-[27px] font-[600] text-title mb-8">
            Transfert de nom de domaine
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300">
              <tbody>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Période pour accomplir la procédure de transfert.
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    5 – 10 jours
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Prix
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Gratuit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fourth Table - Owner Change */}
        <div>
          <h3 className="text-[27px] font-[600] text-title mb-8">
            Changement de propriétaire
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300">
              <tbody>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    Prix
                  </td>
                  <td className="px-6 py-4 font-normal text-slate-700 border border-slate-300">
                    118 Dhs HT/an soit 141,6 Dhs TTC/an
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}