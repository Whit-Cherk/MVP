import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const CartButton = () => {
  const navigate = useNavigate();

  return (
    <nav className="cart-container">
      <button 
        className="cart-btn" 
        onClick={() => navigate('/cart')} 
        aria-label="View Cart"
      >
        <ShoppingCart size={24} />
      </button>
    </nav>
  );
};

export default CartButton;