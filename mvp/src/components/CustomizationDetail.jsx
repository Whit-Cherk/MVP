import React from 'react';
import HorizontalCardRight from './HorizontalCardRight';

const CustomizationDetail = ({ title, isRequired, options }) => {
  return (
    <div className="customization-detail-card">
      <div className="customization-header-row">
        <h3 className="customization-title">{title}</h3>
        {/* Reutilizing the badge status styling from App.css */}
        {isRequired && (
          <span className="badge badge-status badge-status-in-progress" style={{ borderRadius: '9999px' }}>
            Required
          </span>
        )}
      </div>
      
      {/* Reutilizing the divider from App.css */}
      <div className="divider"></div>
      
      <div className="customization-options-list">
        {options.map((opt, index) => (
          <HorizontalCardRight
            key={index}
            title={opt.name}
            subtitle={opt.price === '0.00' ? '' : `+$${opt.price}`}
            imageSrc={opt.image || ''} 
          />
        ))}
      </div>
    </div>
  );
};

export default CustomizationDetail;