import React from 'react';
import Image from './Image';

const VerticalCard = ({ imageSrc, text1, text2, text3, onClick }) => {
  return (
    <div className="vertical-card" onClick={onClick}>
      <Image src={imageSrc} alt={text1} />
      <div className="vertical-card-info">
        <h3 className="card-text-primary">{text1}</h3>
        {text2 && <p className="card-text-secondary">{text2}</p>}
        {text3 && <p className="card-text-tertiary">{text3}</p>}
      </div>
    </div>
  );
};

export default VerticalCard;