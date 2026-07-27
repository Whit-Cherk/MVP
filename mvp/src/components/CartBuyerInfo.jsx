import React, { useState } from 'react';
import Input from './Input';
import ActionButton from './ActionButton';
import HeaderText from './HeaderText';

const CartBuyerInfo = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <HeaderText text="Checkout Details" />
      <div className="form-inputs">
        <Input id="name" label="Full Name" value={formData.name} onChange={handleChange} required />
        <Input id="whatsapp" label="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} pattern="[\+]?\s?\(?[0-9]{3}\)?-?\s?.?[0-9]{3}\)?-?\s?.?[0-9]{4,6}" required />
        <Input id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}" required />
        <Input id="address" label="Delivery Address" rows={3} value={formData.address} onChange={handleChange} required />
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button type="button" className="tertiary-action-btn" onClick={onCancel}>
          Cancel
        </button>
        <button className='secondary-action-btn' style={{width: '100%'}} type="submit" >
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default CartBuyerInfo;