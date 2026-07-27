import React from 'react';

const ActionButton = ({ text, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="action-button"
      disabled={disabled}
      style={disabled ? { opacity: 0.6, cursor: 'not-allowed' } : undefined}
    >
      {text}
    </button>
  );
};

export default ActionButton;