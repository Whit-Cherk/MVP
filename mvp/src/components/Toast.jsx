import React from 'react';

const Toast = ({ message, show }) => {
  return (
    <div className={`toast-container ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Toast;