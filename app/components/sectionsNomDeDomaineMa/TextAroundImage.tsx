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
  arrowButton?: boolean;
}

export default function TextAroundImage({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "Image",
  consultButtonTextExiste = true,
  textButton,
  href = "/email-professionnel/",
  className,
  arrowButton = false,
}: TextLeftImageRightProps) {
  return (
    <section className={`${className ? className : "lg:my-[150px] my-[80px]"}`}>
      <div className="container mx-auto px-4">
        {/* Mobile Layout: Image First, then Title and Text */}
        <div className="lg:hidden block">
         
          <div>
            {typeof title === "string" ? (
              <h2
                className="big-title font-bold text-title mb-6"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            ) : (
              <h2 className="big-title font-bold text-title mb-6">{title}</h2>
            )}
            <p>
            {paragraphs.map((paragraph, index) =>
              typeof paragraph === "object" ? (
                <React.Fragment key={index}>{paragraph as React.ReactNode}</React.Fragment>
              ) : (
                <p
                  key={index}
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              )
            )}
             <div className="flex justify-center mb-8">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={3508}
              height={2481}
              className="w-full md:w-[85%] h-auto rounded-lg"
            />
          </div>
            </p>
            {consultButtonTextExiste && (
              <ConsultButton
                arrowButton={arrowButton}
                href={href}
                text={textButton}
              />
            )}
          </div>
        </div>

        {/* Desktop Layout: Text Wraps Around Image */}
        <div className="hidden lg:block">
          <div className="flex gap-8">
            {/* Text Section with Float */}
            <div className="flex-1">
              {typeof title === "string" ? (
                <h2
                  className="big-title xl:pr-[10px] lg:pr-[50px] font-bold text-title mb-6"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              ) : (
                <h2 className="big-title xl:pr-[10px] lg:pr-[50px] font-bold text-title mb-6">
                  {title}
                </h2>
              )}

              {/* Image Floated Right Within Text */}
              <div className="float-right ml-8 mb-6 xl:w-[45%] lg:w-[50%]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={3508}
                  height={2481}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Text Flowing Around Image */}
              <div className="text-wrap">
                {paragraphs.map((paragraph, index) =>
                  typeof paragraph === "object" ? (
                    <React.Fragment key={index}>{paragraph as React.ReactNode}</React.Fragment>
                  ) : (
                    <p
                      key={index}
                      className="paragraph"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  )
                )}
              </div>

              {/* Clear Float for Button */}
              <div className="clear-both mt-8">
                {consultButtonTextExiste && (
                  <ConsultButton
                    arrowButton={arrowButton}
                    href={href}
                    text={textButton}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}