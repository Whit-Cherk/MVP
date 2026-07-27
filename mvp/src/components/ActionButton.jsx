import React from 'react';

const ActionButton = ({ text, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className="action-button">
      {text}
    </button>
  );
};

export default ActionButton;