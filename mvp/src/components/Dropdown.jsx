import React from 'react';

const Dropdown = ({ value, options, onChange }) => {
  return (
    <select className="dropdown-select" value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;