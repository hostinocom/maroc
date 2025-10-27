import ConsultButton from "../ui/ConsultButton";

interface MaintenanceContractSectionProps {
  title: string;
  paragraphs: (string | JSX.Element)[];
  buttonText: string;
  buttonHref: string;
  subtitle?: string
  arrowButton?: boolean
}


const TitleParagraphButton: React.FC<MaintenanceContractSectionProps> = ({
  title,
  paragraphs,
  buttonText,
  buttonHref,
  subtitle,
  arrowButton
}) => {
  return (
    <section className="lg:my-[150px] my-[80px]">
      <div className="container">
       {
        subtitle && (
          <h3
            className="text-[27px] font-[600] tracking-[-.8px] text-title"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )
       }
        <h2
          className="max-big-title mb-[20px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />

       

        {paragraphs.map((paragraph, index) => 
            typeof paragraph === 'string' ? (
              <p
                  key={index}
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ) : (
              <>{paragraph as any}</>
            )
        )}

        <ConsultButton arrowButton={arrowButton} href={buttonHref} text={buttonText} />
      </div>
    </section>
  );
};

export default TitleParagraphButton;