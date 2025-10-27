import React from "react";

interface TableRow {
  criteria: string;
  leadGen: string;
  lowCost: string;
}

const ComparisonTable = ({ tableData }: { tableData: TableRow[] }) => {
  return (
    <section>
      <div className="container">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0a2540] text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                    Critères
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                    Site web qui génère des leads
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                    Site web low-cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row: TableRow, index: number) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                      {row.criteria}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      {row.leadGen}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      {row.lowCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </section>
  );
};

export default ComparisonTable;
