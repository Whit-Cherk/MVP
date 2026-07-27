import React from 'react';

const Toggle = ({ id, checked, onChange }) => {
  return (
    <label className="toggle-switch" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="toggle-checkbox"
        aria-checked={checked}
        role="switch"
      />
      <span className="toggle-slider"></span>
    </label>
  );
};

export default Toggle;