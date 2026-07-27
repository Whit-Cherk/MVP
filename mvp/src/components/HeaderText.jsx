import React from 'react';

const HeaderText = ({ text, alignment = 'center' }) => {

  if (alignment === 'left') {
    return <h1 className="header-text-left">{text}</h1>;
  } else
    return <h1 className="header-text-center">{text}</h1>;
  
};

export default HeaderText;