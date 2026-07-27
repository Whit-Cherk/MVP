import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import ActionButton from '../components/ActionButton';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabaseClient';

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
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const { data, error } = await signUp({
      email: formData.createEmail,
      password: formData.password,
      nombre: formData.name,
    });

    if (error) {
      setSubmitting(false);
      setError(error.message);
      return;
    }

    // El trigger de Supabase ya insertó la fila en "seller" con
    // el nombre y el email. El teléfono no viaja en el signUp,
    // así que lo actualizamos aparte.
    // Nota: si tu proyecto tiene confirmación de email activada,
    // no habrá sesión todavía en este punto y este update fallará
    // por RLS — en ese caso, guarda el phone después de que el
    // usuario confirme su correo e inicie sesión por primera vez.
    if (data.user) {
      await supabase
        .from('seller')
        .update({ phone: formData.phone })
        .eq('id', data.user.id);
    }

    setSubmitting(false);

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
            value={formData.createEmail} 
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

        {error && (
          <p style={{ color: '#e53e3e', fontSize: '0.875rem', textAlign: 'center' }}>
            {error}
          </p>
        )}

        <ActionButton
          text={submitting ? 'Creando cuenta...' : 'Continue to Store Setup'}
          type="submit"
          disabled={submitting}
        />
      </form>
    </main>
  );
};

export default CreateSeller;