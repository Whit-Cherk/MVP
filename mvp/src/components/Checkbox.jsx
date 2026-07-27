import React from 'react';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--primary-purple)', cursor: 'pointer' }}
      />
      <label htmlFor={id} style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-main)', cursor: 'pointer' }}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;