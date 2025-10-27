const StarIcon = ({ filled = true }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill={filled ? "#feff05" : "none"}
    stroke={filled ? "#FFD700" : "#D1D5DB"}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const StartsRatingYellowFooter = ({ 
  rating = 5, 
  maxRating = 5, 
  totalVotes = 34,
  starColor = "#FFD700"
}) => {
  return (
    <div className="flex justify-center mt-[2rem] items-center gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(maxRating)].map((_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
      </div>
      
      {/* Rating Text */}
      <div className="text-[20px] font-bold text-title">
        {rating}/{maxRating} - ({totalVotes} votes)
      </div>
    </div>
  );
};

export default StartsRatingYellowFooter;