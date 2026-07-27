import React from 'react';

const DetailsLine = ({ items = [] }) => {
  const validItems = items.filter(Boolean);
  
  // If there's no data to show, don't render an empty span
  if (validItems.length === 0) return null;

  return (
    <span>
      {validItems.join(' • ')}
    </span>
  );
};

export default DetailsLine;