import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeaderText from '../HeaderText';
import CartProduct from '../CartProduct';
import CartBuyerInfo from '../CartBuyerInfo'; 
import ActionButton from '../ActionButton';
import BackButton from '../BackButton';
import { MOCK_CART } from '../../data/MockData'; 

const CartPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState(
    MOCK_CART.map(item => ({
      id: item.id,
      name: item.name,
      price: typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price,
      image: item.image || 'https://via.placeholder.com/150', 
      quantity: 1, 
      customizations: item.customizations?.map(cust => ({
        label: cust.category,
        value: cust.option,
        modifierPrice: cust.price ? parseFloat(cust.price) : 0
      })) || []
    }))
  );

  const handleQuantityChange = (id, newQuantity) => {
    const validQuantity = Math.max(1, parseInt(newQuantity) || 1);
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: validQuantity } : item)); 
  };

  const handleDelete = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id)); 
  };

  const handleOrderConfirm = (buyerData) => {
    setIsModalOpen(false); 
    navigate('/order-success'); 
  };

  // Calculate the subtotal by summing base prices and customization modifier prices, multiplied by quantity
  const subtotal = cartItems.reduce((total, item) => {
    const customizationsTotal = item.customizations.reduce((sum, cust) => sum + cust.modifierPrice, 0);
    return total + ((item.price + customizationsTotal) * item.quantity);
  }, 0);

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '1.5rem', paddingBottom: '3rem' }}>
      <BackButton/>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <HeaderText text="Cart" />
        <ShoppingCart color="var(--text-main)" size={28} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, marginBottom: '1.5rem' }}>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartProduct 
              key={item.id} 
              product={item} 
              onQuantityChange={handleQuantityChange}
              onEdit={() => console.log('Navigate to edit item')}
              onDelete={() => handleDelete(item.id)}
            />
          ))
        ) : (
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '2rem' }}>
            Your cart is empty.
          </p>
        )}
      </div>

      {/* Order Summary Section */}
      {cartItems.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', padding: '1.5rem 0 0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: 'var(--text-main)', fontSize: '1.125rem' }}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div style={{ height: '1px', backgroundColor: 'var(--border-light)', margin: '0.5rem 0' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
            <span>Delivery</span>
            <span>Pending for calculation</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
            <span>Total</span>
            <span>Calculated by seller</span>
          </div>
        </div>
      )}

      <div style={{ paddingBottom: '1rem' }}>
        <ActionButton 
          text="Make an order" 
          onClick={() => setIsModalOpen(true)} 
        />
      </div>

      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          zIndex: 2000, padding: '1.5rem'
        }}>
          <CartBuyerInfo onSubmit={handleOrderConfirm} onCancel={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default CartPage;