type AnimatedButtonProps = {
  text?: string;
  hoverText?: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  className?: string;
  arrowButton?: boolean;
  colorArrow?: string;
};

export default function AnimatedButton({
  text = "Click Me",
  hoverText = "Let's Go",
  bgColor = "bg-primary",
  hoverBgColor,
  textColor = "text-white",
  className = "",
  arrowButton = false,
  colorArrow = "white",
}: AnimatedButtonProps) {
  const hoverBgButtonColor = `hover:${hoverBgColor}`;
  return (
    <button
      className={`relative overflow-hidden cursor-pointer transition-all duration-200 group ${className} ${
        hoverBgColor && hoverBgColor !=="bg-transparent" && "hover:bg-title"
      } ${bgColor} `}
    >
      {/* Current text that slides up */}
      <span
        className={`block transition-transform duration-200 ease-out group-hover:-translate-y-[150%]`}
      >
        {text}
      </span>

      {/* Hover text that slides in from bottom */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out translate-y-[150%] group-hover:translate-y-0 ${textColor}`}
      >
        {hoverText}
      </span>

      {arrowButton && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke={colorArrow}
          className="w-4 h-4 absolute right-[8%] top-1/2 transform translate-y-[-50%]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}
