// Icon Components
const CheckIcon = () => (
  <span className="flex items-center gap-2">
    <span className="text-green-600">✓</span>{" "}
  </span>
);

const WarningIcon = () => (
  <span className="flex items-center gap-2">
    <span className="text-yellow-600">⚠</span>{" "}
  </span>
);

const ErrorIcon = () => (
  <span className="flex items-center gap-2">
    <span className="text-red-600">✕</span>{" "}
  </span>
);

// Status Icon Component
const StatusIcon: React.FC<{ status: "success" | "warning" | "error" }> = ({
  status,
}) => {
  const iconClass =
    status === "success"
      ? "text-green-600"
      : status === "warning"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <span className={iconClass}>
      {status === "success" && <CheckIcon />}
      {status === "warning" && <WarningIcon />}
      {status === "error" && <ErrorIcon />}
    </span>
  );
};

interface PerformanceMetric {
  indicator: string;
  idealValue: string;
  hostinoValue: string;
  hostinoStatus: "success" | "warning";
  classicHosting: string;
  classicStatus: "success" | "warning" | "error";
}

interface SEOImpactSection {
  title: string;
  paragraphs: string[];
  performanceTable: {
    headers: string[];
    metrics: PerformanceMetric[];
    legend: {
      success: string;
      warning: string;
      error: string;
    };
  };
  closingParagraph: string;
}

const seoImpactContent: SEOImpactSection = {
  title: "Impact de l'hébergement et du domaine sur le SEO au Maroc",
  paragraphs: [
    "Dans le digital marocain, la base d'une bonne stratégie SEO commence par un <a href='https://www.hostino.ma/' style={{ textDecoration: 'underline' }}><b>hébergement web</b></a> solide.",
    "Nos packs d'hébergement sont spécialement conçus pour le référencement : serveurs optimisés pour la rapidité, protection renforcée selon les normes de sécurité internationales et conformité aux attentes de Google.",
    'Enfin, le choix du <strong><span style="text-decoration: underline;"><a href="/nom-de-domaine-ma">nom de domaine en .ma</a></span></strong> est un atout stratégique incontournable. Il renforce la crédibilité de votre projet, affirme votre ancrage au marché marocain et envoie un signal fort à Google pour le référencement local. Un domaine en .ma inspire confiance aux internautes et favorise un meilleur positionnement sur les recherches ciblées au Maroc.',
  ],
  performanceTable: {
    headers: [
      "Indicateur",
      "Valeur idéale",
      "Hostino™",
      "Hébergement classique",
    ],
    metrics: [
      {
        indicator: "Performance globale",
        idealValue: "> 90",
        hostinoValue: "95",
        hostinoStatus: "success",
        classicHosting: "72",
        classicStatus: "warning",
      },
      {
        indicator: "LCP (Largest Contentful Paint)",
        idealValue: "< 2.5s",
        hostinoValue: "1.8s",
        hostinoStatus: "success",
        classicHosting: "3.9s",
        classicStatus: "error",
      },
      {
        indicator: "FID (First Input Delay)",
        idealValue: "< 100ms",
        hostinoValue: "50ms",
        hostinoStatus: "success",
        classicHosting: "120ms",
        classicStatus: "warning",
      },
      {
        indicator: "CLS (Cumulative Layout Shift)",
        idealValue: "< 0.1",
        hostinoValue: "0.03",
        hostinoStatus: "success",
        classicHosting: "0.15",
        classicStatus: "warning",
      },
      {
        indicator: "TTFB (Time to First Byte)",
        idealValue: "< 0.8s",
        hostinoValue: "0.4s",
        hostinoStatus: "success",
        classicHosting: "1.2s",
        classicStatus: "error",
      },
    ],
    legend: {
      success: "conforme",
      warning: "à améliorer",
      error: "non conforme",
    },
  },
  closingParagraph:
    "Enfin, le choix du <strong>nom de domaine en .ma</strong> est un atout stratégique incontournable. Il renforce la crédibilité de votre projet, affirme votre ancrage au marché marocain et envoie un signal fort à Google pour le référencement local. Un domaine en .ma inspire confiance aux internautes et favorise un meilleur positionnement sur les recherches ciblées au Maroc.",
};

const SeoImpactSection = () => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container">
        <h2 className="big-title pr-[100px] mb-[20px]">{seoImpactContent.title}</h2>

        {seoImpactContent.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}

        {/* Performance Comparison Table */}
        <div className="my-[20px] overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {seoImpactContent.performanceTable.headers.map(
                  (header, index) => (
                    <th
                      key={index}
                      className={`p-4 text-left font-semibold ${
                        index === 2
                          ? "text-[#0A2540] bg-[#E8F5E9]"
                          : index === 3
                          ? "bg-[#FFF3E0]"
                          : ""
                      }`}
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {seoImpactContent.performanceTable.metrics.map(
                (metric, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 font-medium">{metric.indicator}</td>
                    <td className="p-4 text-gray-600">{metric.idealValue}</td>
                    <td className={`p-4 bg-green-50`}>
                      <div className="flex items-center gap-2">
                        <StatusIcon status={metric.hostinoStatus} />
                        <span className="font-bold text-green-600">
                          {metric.hostinoValue}
                        </span>
                      </div>
                    </td>
                    <td
                      className={`p-4 ${
                        metric.classicStatus === "success"
                          ? "bg-green-50"
                          : metric.classicStatus === "warning"
                          ? "bg-yellow-50"
                          : "bg-red-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <StatusIcon status={metric.classicStatus} />
                        <span
                          className={`font-bold ${
                            metric.classicStatus === "success"
                              ? "text-green-600"
                              : metric.classicStatus === "warning"
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {metric.classicHosting}
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {/* Legend */}
          <div className="flex gap-6 mt-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <StatusIcon status="success" />
              {seoImpactContent.performanceTable.legend.success}
            </span>
            <span className="flex items-center gap-2">
              <StatusIcon status="warning" />
              {seoImpactContent.performanceTable.legend.warning}
            </span>
            <span className="flex items-center gap-2">
              <StatusIcon status="error" />
              {seoImpactContent.performanceTable.legend.error}
            </span>
          </div>
        </div>

        <p
          className="paragraph"
          dangerouslySetInnerHTML={{
            __html: seoImpactContent.closingParagraph,
          }}
        />
      </div>
    </section>
  );
};

export default SeoImpactSection;
