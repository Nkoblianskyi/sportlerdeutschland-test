import React from "react"

interface StarRatingProps {
  rating: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function StarRating({ rating, size = "md", className = "" }: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const starSize = sizeClasses[size]

  // Generate unique ID for gradients to avoid conflicts when multiple star ratings are on the page
  const uniqueId = React.useId()

  const renderStar = (index: number) => {
    const starNumber = index + 1
    const fillPercentage = Math.max(0, Math.min(100, (rating - index) * 100))

    return (
      <svg key={index} className={starSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`star-gradient-${uniqueId}-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset={`${fillPercentage}%`} stopColor="#facc15" />
            <stop offset={`${fillPercentage}%`} stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill={`url(#star-gradient-${uniqueId}-${index})`}
          stroke={fillPercentage > 0 ? "#facc15" : "#d1d5db"}
          strokeWidth="1"
        />
      </svg>
    )
  }

  return <div className={`flex gap-0.5 ${className}`}>{[...Array(5)].map((_, i) => renderStar(i))}</div>
}
