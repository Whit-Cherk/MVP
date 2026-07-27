import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import ActionButton from '../components/ActionButton';

const CreateSeller = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    createEmail: '',
    phone: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    
    // Account creation logic goes here
    console.log('Account created for:', formData.name);

    // Follow the flow: Create Seller -> Create Store
    navigate('/create-store');
  };

  return (
    <main className="page-container flex-center">
      <form onSubmit={handleCreateAccount} className="form-container">
        <HeaderText text="Create Seller Account" />
        
        <div className="form-inputs">
          <Input 
            label="Full Name" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <Input 
            label="Email Address" 
            type="email" 
            id="createEmail" 
            value={formData.email} 
            onChange={handleChange}
            pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}"
            customErrorMessage="Please enter a valid lowercase email (e.g., name@domain.com)"
            required 
          />
          <Input 
            label="Phone Number" 
            type="tel" 
            id="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            pattern="[\+]?\s?\(?[0-9]{3}\)?-?\s?.?[0-9]{3}\)?-?\s?.?[0-9]{4,6}"
            required 
          />
          <Input 
            label="Password" 
            type="password" 
            id="password" 
            value={formData.password} 
            onChange={handleChange} 
            required
          />
        </div>

        <ActionButton text="Continue to Store Setup" type="submit" />
      </form>
    </main>
  );
};

export default CreateSeller;