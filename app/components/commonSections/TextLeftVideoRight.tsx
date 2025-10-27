import Image from "next/image";
import ConsultButton from "../ui/ConsultButton";
import React from "react";

interface TextLeftImageRightProps {
  title?: string;
  paragraphs: string[];
  videoUrl?: string; // 👉 Add this prop
  consultButtonTextExiste?: boolean;
  textButton?: string;
  href?: string;
  className?: string;
}

export default function TextLeftVideoRight({
  title,
  paragraphs,
  videoUrl,
  consultButtonTextExiste = true,
  textButton,
  href = "https://www.hostino.ma/contact/",
  className
}: TextLeftImageRightProps) {
  return (
    <section className={`${className ? className : "lg:my-[150px] my-[80px]"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* 🧠 Text Section */}
          <div className="col-span-1">
            {title && (<h2
              className="title-section xl:pr-[10px] lg:pr-[50px] font-bold text-title mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />)}
            {paragraphs.map((paragraph, index) =>
              typeof paragraph === "object" ? (
                <>{paragraph as React.ReactNode}</>
              ) : (
                <p
                  key={index}
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              )
            )}
            {consultButtonTextExiste && (
              <ConsultButton href={href} text={textButton} />
            )}
          </div>

          {/* 🎥 Media Section (Image or Video) */}
          <div className="col-span-1 flex justify-end">
           
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
             
          </div>
        </div>
      </div>
    </section>
  );
}
