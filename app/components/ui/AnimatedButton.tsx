import { useState } from "react";


type AnimatedButtonProps = {
    text?: string;
    hoverText?: string;
    bgColor?: string;
    hoverBgColor?: string;
    textColor?: string;
    onClick?: () => void;
    className?: string;
  };

export default function AnimatedButton({
  text = "Click Me",
  hoverText = "Let's Go",
  bgColor = "bg-primary",
  hoverBgColor = "bg-title",
  textColor = "text-white",
  onClick = () => {},
  className = "",
} : AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden   cursor-pointer transition-all duration-200 ${className}
       ${isHovered ? hoverBgColor : bgColor} ${isHovered && textColor} `}
    >
      {/* Current text that slides up */}
      <span
        className="block transition-transform duration-200 ease-out"
        style={{
          transform: isHovered ? "translateY(-150%)" : "translateY(0)",
        }}
      >
        {text}
      </span>

      {/* Hover text that slides in from bottom */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out"
        style={{
          transform: isHovered ? "translateY(0)" : "translateY(150%)",
        }}
      >
        {hoverText}
      </span>
    </button>
  );
}

