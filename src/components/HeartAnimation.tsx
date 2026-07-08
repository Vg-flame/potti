
import React from 'react';

const HeartAnimation = () => {
  return (
    <div className="heart-container mb-8">
      <div className="main-heart">
        <div className="heart-glow"></div>
        <div className="heart-pulse">💖</div>
      </div>
      <div className="heart-ripple"></div>
    </div>
  );
};

export default HeartAnimation;
