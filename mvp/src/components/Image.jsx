import React from 'react';

const Image = ({ 
  src, 
  alt, 
  containerClass = "square-image-container", 
  imgClass = "square-image" 
}) => {
  return (
    <div className={containerClass}>
      {src ? (
        <img src={src} alt={alt} className={imgClass} />
      ) : (
        <div className="image-placeholder"></div>
      )}
    </div>
  );
};

export default Image;