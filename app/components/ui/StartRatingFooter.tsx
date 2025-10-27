type StarRatingProps = {
  totalStars?: number;
  text?: string;
  starSize?: number;
  starColor?: string;
  textColor?: string;
  className?: string;
};

export default function StarRating({
  totalStars = 5,
  text = "Rate this page",
  starSize = 30,
  starColor = "#9ca3af",
  textColor = "#6b7280",
  className = "",
}: StarRatingProps) {
  return (
    <div className={`flex items-center gap-4  mt-[2rem] justify-center ${className}`}>
      {/* Stars container */}
      <div className="flex items-center gap-1">
        {Array.from({ length: totalStars }).map((_, index) => (
          <svg
            key={index}
            width={starSize}
            height={starSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke={starColor}
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <span 
        className="text-[20px] opacity-50 font-bold"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  );
}