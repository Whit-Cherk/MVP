import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import ActionButton from '../components/ActionButton';
import { useAuth } from '../context/AuthContext';
import '../App.css';

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const { error } = await signIn({ email, password });

    setSubmitting(false);

    if (error) {
      setError(error.message);
      return;
    }

    // Navigate to Home and replace la historia
    // para evitar volver al login con el botón "atrás"
    navigate('/home', { replace: true });
  };

  return (
    <main className="page-container flex-center">
      <form onSubmit={handleLogin} className="form-container">
        <HeaderText text="Login to account" />
        
        <div className="form-inputs">
          <Input 
            label="Email" 
            type="email"
            id="loginEmail"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}"
            customErrorMessage="Please enter a valid lowercase email (e.g., name@domain.com)"
            required 
          />
          <Input 
            label="Password" 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        {error && (
          <p style={{ color: '#e53e3e', fontSize: '0.875rem', textAlign: 'center' }}>
            {error}
          </p>
        )}

        <ActionButton text={submitting ? 'Ingresando...' : 'Login'} type="submit" disabled={submitting} />
        
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            New to the platform?{' '}
          </span>
          <button 
            type="button" 
            onClick={() => navigate('/create-seller')}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--primary-purple)', 
              fontWeight: '600', 
              cursor: 'pointer',
              fontSize: '0.875rem'
            }}
          >
            Create an account
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;