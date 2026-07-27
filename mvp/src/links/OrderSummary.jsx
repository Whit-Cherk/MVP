import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import ActionButton from '../components/ActionButton';
import Toast from '../components/Toast';
import BackButton from '../components/BackButton';
import { MOCK_ORDERS, MOCK_SELLER, MOCK_STORE } from '../data/MockData';

// Helper to format the date into "DD de Month, YYYY"
const formatReceiptDate = (dateString) => {
  if (!dateString) return '[FechaOrden]';
  const [year, month, day] = dateString.split('-');
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  return `${day} de ${months[parseInt(month, 10) - 1]}, ${year}`;
};

// Helper to calculate a single product's total price including customizations
const calculateProductPrice = (product) => {
  if (!product || !product.price) return 0;
  const basePrice = parseFloat(product.price.replace('$', '')) || 0;
  const customizationsPrice = product.customizations?.reduce((sum, cust) => {
    return sum + (parseFloat(cust.price.replace('$', '')) || 0);
  }, 0) || 0;
  
  return basePrice + customizationsPrice;
};

// Helper to calculate the grand total for an entire order
const calculateOrderPrice = (order) => {
  if (!order || !order.products) return '$0.00';
  const total = order.products?.reduce((sum, product) => {
    return sum + calculateProductPrice(product);
  }, 0) || 0;
  
  return `$${total.toFixed(2)}`;
};

// Helper to format the list of products and customizations
const formatProductsList = (products) => {
  if (!products || products.length === 0) return '[Sin artículos]';
  
  return products.map(product => {
    // Calculate the product price dynamically
    const calculatedProductPrice = `$${calculateProductPrice(product).toFixed(2)}`;
    let itemText = `– ${product.name}: ${calculatedProductPrice}`; 
    
    if (product.customizations && product.customizations.length > 0) {
      const customizationsText = product.customizations.map(cust => 
        `  • ${cust.category}: ${cust.option} (+${cust.price || '$0.00'})` 
      ).join('\n');
      itemText += `\n${customizationsText}`;
    }
    
    return itemText;
  }).join('\n');
};

const OrderSummary = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  
  // Explicitly parse the string ID from the URL into a base-10 integer
  const numericOrderId = parseInt(orderId, 10);
  
  // Data extraction using the numeric ID
  const order = MOCK_ORDERS.find(o => o.id === numericOrderId); 
  const storeName = MOCK_STORE?.name || '[NombreTienda]'; 
  const orderDate = formatReceiptDate(order?.dateOrdered);
  const orderNumber = order?.id || '[ID]';
  
  // Calculate dynamic subtotal instead of using the static order.price
  const subtotalString = order ? calculateOrderPrice(order) : '$0.00'; 
  const buyerAddress = order?.buyer?.address || '[Dirección no disponible]'; 
  const productDetails = formatProductsList(order?.products);

  // States
  const [showDeliveryModal, setShowDeliveryModal] = useState(true);
  const [deliveryInput, setDeliveryInput] = useState('');
  const [deliveryError, setDeliveryError] = useState(''); 
  const [showToast, setShowToast] = useState(false); 
  const [message, setMessage] = useState(''); 

  // Handle setting the final message after delivery input
  const handleDeliverySubmit = () => {
    // Validate that the input is not empty and is a valid number
    if (!deliveryInput.trim()) {
      setDeliveryError('Please enter a delivery amount.');
      return;
    }

    // Strip everything except digits and decimals
    const cleanInput = deliveryInput.replace(/[^\d.]/g, '');
    const deliveryNum = parseFloat(cleanInput);

    if (isNaN(deliveryNum)) {
      setDeliveryError('Please enter a valid number.');
      return;
    }

    setDeliveryError(''); // Clear error if validation passes

    const subtotalNum = parseFloat(subtotalString.replace(/[^\d.]/g, '')) || 0;
    const totalNum = subtotalNum + deliveryNum;

    const formattedDelivery = `$${deliveryNum.toFixed(2)}`;
    const formattedTotal = `$${totalNum.toFixed(2)}`;

    const finalMessage = `Hola! Somos ${storeName}.

Número de Orden: #${orderNumber}
Fecha de orden: ${orderDate}

Detalle de tu orden:
${productDetails}

Subtotal: ${subtotalString}
Costo de Delivery: ${formattedDelivery}
Total a pagar: ${formattedTotal}

Confirma para enviarte método de pago.`;

    setMessage(finalMessage);
    setShowDeliveryModal(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message); 
      
      // Trigger the toast notification
      setShowToast(true);
      
      // Hide the toast after 2 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 2000);

    } catch (err) {
      console.error('Failed to copy text: ', err); 
    }
  };

  return (
    <div className="order-summary-layout" style={{ position: 'relative' }}>
      <BackButton />
      
      <div className="summary-content">
        <HeaderText text="Message" />
        
        <Input 
            id="order-message"
            type="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={20}
            required
          />
      </div>
      
      <div className="footer-action">
         <ActionButton text="Copy" onClick={handleCopy} /> 
      </div>

      {/* Initial Delivery Amount Modal */}
      {showDeliveryModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }}>
          <div style={{
            backgroundColor: 'var(--bg-main, #ffffff)',
            padding: '2rem',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '400px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main, #333)', margin: 0 }}>
              Delivery Details
            </h3>
            
            <div style={{ textAlign: 'left', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: 'var(--text-secondary, #666)' }}>
                Delivery Address:
              </p>
              <p style={{ margin: 0, fontWeight: '500', color: 'var(--text-main, #333)' }}>
                {buyerAddress}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <Input 
                id="delivery-amount"
                label="Enter Delivery Amount ($)"
                value={deliveryInput}
                onChange={(e) => {
                  setDeliveryInput(e.target.value);
                  setDeliveryError(''); // Clear error on typing
                }}
                required
              />
              {deliveryError && (
                <p style={{ color: '#ef4444', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                  {deliveryError}
                </p>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
              <button
                className="tertiary-action-btn"
                style={{ width: '100%' }}
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                className="secondary-action-btn"
                style={{ width: '100%' }}
                onClick={handleDeliverySubmit}
              >
                Generate Message
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Toast 
        show={showToast} 
        message="Message copied to clipboard!" 
      />
    </div>
  );
};

export default OrderSummary;