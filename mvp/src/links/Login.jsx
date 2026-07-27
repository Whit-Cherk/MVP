import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import ActionButton from '../components/ActionButton';
import '../App.css';

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Authentication logic would go here
    console.log('Logging in with:', email);

    // Navigate to Home and replace the history stack 
    // to prevent looping back to the login screen
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

        <ActionButton text="Login" type="submit" />
        
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