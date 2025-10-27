import React from "react";

const PromoBanner = ({
  icon = "⚠️",
  text = "Lancez votre site à petit prix avec nos offres d’hébergement web Starty. Quand votre activité grandit, passez aux packs Business pour des performances pro.",
  className = "",
}) => {
  return (
    <div className="container">
      <div
        className={`lg:w-[65%]  w-[100%] rounded-lg mx-auto border-2 border-dashed border-gray-300  px-[39px] py-[25px] ${className} `}
      >
        <div className="max-w-6xl w-full  bg-white">
          <div className="flex justify-center text-center">
            <span role="img" aria-label="warning">
              {icon}
            </span>
            <p
              className="paragraph"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
