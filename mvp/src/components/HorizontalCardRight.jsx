import React from 'react';

const HorizontalCardRight = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="hc-right-container">
      <div className="hc-right-content">
        <span className="hc-title">{title}</span>
        {subtitle && <span className="card-text-secondary">{subtitle}</span>}
      </div>
      
      {imageSrc && (
        <div className="hc-right-image-wrapper">
          <img src={imageSrc} alt={title} className="hc-right-image" />
        </div>
      )}
    </div>
  );
};

export default HorizontalCardRight;