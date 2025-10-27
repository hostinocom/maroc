// src/components/sections/TextLeftImageRight.tsx
import Image from "next/image";
import ConsultButton from "../ui/ConsultButton";
import React from "react";
interface TextLeftImageRightProps {
  title: string | React.ReactNode;
  paragraphs: (string | JSX.Element)[];
  imageSrc: string;
  imageAlt?: string;
  consultButtonTextExiste?: boolean;
  textButton?: string;
  href?: string;
  className?: string;
  arrowButton?: boolean
}

export default function TextLeftImageRight({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "Image",
  consultButtonTextExiste = true,
  textButton,
  href = "/email-professionnel/",
  className,
  arrowButton = false
}: TextLeftImageRightProps) {
  return (
    <section className={`${className ? className : "lg:my-[150px] my-[80px]"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="col-span-1">
            {typeof title === "string" ? (
              <h2
                className="big-title xl:pr-[10px] lg:pr-[50px] font-bold text-title mb-6"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            ) : (
              <h2
                className="big-title xl:pr-[10px] lg:pr-[50px] font-bold text-title mb-6"
              >{title }</h2>
            )}
            {paragraphs.map((paragraph, index) =>
              typeof paragraph === "object" ? (
                <>{paragraph}</>
              ) : (
                <p
                  key={index}
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              )
            )}{" "}
            {consultButtonTextExiste && (
              <ConsultButton arrowButton={arrowButton} href={href} text={textButton} />
            )}
          </div>

          {/* Image Section */}
          <div className="col-span-1 flex justify-end">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={3508}
              height={2481}
              className="xl:w-[95%] lg:w-[85%] md:w-[85%] h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
