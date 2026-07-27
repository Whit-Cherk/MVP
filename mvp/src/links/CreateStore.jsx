import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import ActionButton from '../components/ActionButton';

// Mocking the logged-in seller data until your backend is ready
const MOCK_SELLER_DATA = {
  phone: '+1234567890',
  email: 'seller@example.com'
};

const CreateStore = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    storeName: '',
    slug: '',
    sameAsSeller: false,
    phone: '',
    email: '',
    instagram: '',
    address: '',
    description: '',
    customMessage: ''
  });

  const handleCreateStore = (e) => {
    e.preventDefault();
    console.log('Store created:', formData);
    navigate('/home', { replace: true });
  };


   // Utility function to format the slug
  const formatSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .normalize("NFD")                   // 1. Splits accented characters into base letter + accent mark
      .replace(/[\u0300-\u036f]/g, "")    // 2. Strips the accent marks away
      .replace(/[\s_]+/g, '-')            // 3. Replaces spaces and underscores with hyphens
      .replace(/[^a-z0-9-]/g, '');        // 4. Removes any remaining unsupported characters
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    
    setFormData((prev) => {
      // Create a copy of the new state
      const updatedState = {
        ...prev,
        [id]: type === 'checkbox' ? checked : value
      };

      // 1. Handle auto-filling slug
      if (id === 'storeName') {
        updatedState.slug = formatSlug(value);
      }

      // 2. Handle checking/unchecking "Same as the seller"
      if (id === 'sameAsSeller') {
        if (checked) {
          // Auto-fill fields with mock seller data
          updatedState.phone = MOCK_SELLER_DATA.phone;
          updatedState.email = MOCK_SELLER_DATA.email;
        } else {
          // Clear fields if unchecked (or leave them to let user edit)
          updatedState.phone = '';
          updatedState.email = '';
        }
      }

      return updatedState;
    });
  };


  return (
    <main className="page-container flex-center" style={{ alignItems: 'flex-start', paddingTop: '4rem' }}>
      <form onSubmit={handleCreateStore} className="form-container">
        <HeaderText text="Create a store" />
        
        <div className="form-inputs">
          <Input label="Store name" id="storeName" value={formData.storeName} onChange={handleChange} required />
          <Input label="Slug" id="slug" value={formData.slug} onChange={handleChange} prefix="mvpname/" required />
          
          <Checkbox id="sameAsSeller" label="Same as the seller" checked={formData.sameAsSeller} onChange={handleChange} />
          
          <Input label="Business phone number" type="tel" id="phone" value={formData.phone} pattern="[\+]?\s?\(?[0-9]{3}\)?-?\s?.?[0-9]{3}\)?-?\s?.?[0-9]{4,6}" onChange={handleChange} required />
          <Input label="Business email" type="email" id="email" value={formData.email} onChange={handleChange} pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}" customErrorMessage="Please enter a valid lowercase email (e.g., name@domain.com)" required />
          
          <Input label="Instagram" id="instagram" value={formData.instagram} onChange={handleChange} prefix="@" pattern="[\w.]+" customErrorMessage="Only include letters and digits"/>
          <Input label="Store address" id="address" value={formData.address} onChange={handleChange} />
          <Input label="Store description" id="description" value={formData.description} onChange={handleChange} type='textarea' rows={5} />
        </div>

        <ActionButton text="Create Store" type="submit" />
      </form>
    </main>
  );
};

export default CreateStore;