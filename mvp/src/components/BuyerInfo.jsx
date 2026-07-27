import React from 'react';

const BuyerInfo = ({ name, phone, address }) => {
  return (
    <div className="buyer-info-container">
      <h3 className="buyer-name">{name}</h3>
      <p className="buyer-detail">{phone}</p>
      <p className="buyer-detail">{address}</p>
    </div>
  );
};

export default BuyerInfo;