import React from 'react';
import Badge from './Badge';
import Image from './Image'; 

const HorizontalCardLeft = ({ imageSrc, imageNotifCount, title, subtitle, status, onClick, type}) => {
  return (
    <div className="horizontal-card-left" onClick={onClick}>
      <div className="hc-image-wrapper">
        <Image src={imageSrc} alt={title} />
        
        {imageNotifCount > 1 && (
          <div className="hc-notification">{imageNotifCount}</div>
        )}
      </div>
      <div className="hc-content">
        <div>
          <h3 className="hc-title">{title}</h3>
          <p className="hc-subtitle">{subtitle}</p>
        </div>
        {status && (
          <div>
            <Badge text={status} type="status" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalCardLeft;