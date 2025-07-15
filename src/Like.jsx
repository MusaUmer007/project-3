import React, { useState } from 'react';
import './InstaLike.css';

function InstaLike() {
  const [showHeart, setShowHeart] = useState(false);

  const handleDoubleClick = () => {
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 800);
  };

  return (
    <div>
   
      <div className="insta-container" onDoubleClick={handleDoubleClick}>
        <img
          src="https://picsum.photos/400/300"
          alt="sample"
          className="insta-image"
        />
        {showHeart && <div className="heart-icon">❤️</div>}
      </div>
    </div>
  );
}

export default InstaLike;
