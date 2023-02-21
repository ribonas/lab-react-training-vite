import React from 'react'

const Rating = ({children}) => {
    const fullStars = Math.round(children);
    // const hasHalfStar = (children % 1) >= 0.5;
    const emptyStars = 5 - fullStars;
  
    return (
      <div>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i}>☆</span>
        ))}
      </div>
    );
  };

export default Rating;