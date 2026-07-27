import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import SectionWithCards from '../components/SectionWithCards';
import NavBar from '../components/NavBar';
import { MOCK_SELLER, MOCK_ORDERS, MOCK_LISTINGS } from '../data/MockData';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  // Helper to calculate a single product's total price including customizations
  const calculateProductPrice = (product) => {
    const basePrice = parseFloat(product.price.replace('$', '')) || 0;
    const customizationsPrice = product.customizations?.reduce((sum, cust) => {
      return sum + (parseFloat(cust.price.replace('$', '')) || 0);
    }, 0) || 0;
    
    return basePrice + customizationsPrice;
  };

  // Helper to calculate the grand total for an entire order
  const calculateOrderPrice = (order) => {
    const total = order.products?.reduce((sum, product) => {
      return sum + calculateProductPrice(product);
    }, 0) || 0;
    
    return `$${total.toFixed(2)}`;
  };

  const newData = MOCK_ORDERS
    .filter(order => order.status === 'New')
    .map(order => ({
      id: order.id,
      imageSrc: order.products[0]?.image,
      text1: order.products[0]?.name,
      text2: order.buyer.name,
      text3: calculateOrderPrice(order),
      onClick: () => navigate(`/order/${order.id}`)
    }));

  const ordersData = MOCK_ORDERS.map(order => ({
    id: order.id,
    imageSrc: order.products[0]?.image,
    text1: order.products[0]?.name,
    text2: order.buyer.name,
    text3: calculateOrderPrice(order),
    onClick: () => navigate(`/order/${order.id}`)
  }));

  const listingsData = MOCK_LISTINGS.map(listing => ({
    id: listing.id,
    // If the image is an array, grab the first one for the thumbnail. Otherwise, use the string.
    imageSrc: Array.isArray(listing.image) ? listing.image[0] : listing.image,
    text1: listing.name,
    text2: `$${listing.price.toFixed(2)}`,
    text3: listing.amountAvailable !== null ? `${listing.amountAvailable} in stock` : 'Made to order',
    onClick: () => navigate(`/listing/${listing.id}`)
  }));


  return (
    <div className="home-layout">
      <nav className="topbar">
      <p>Hello {MOCK_SELLER.name}!</p>
      </nav>

      <main className="home-content">
        <div style={{backgroundColor: '#efe9f7', padding: '0.5rem 0 0 0'}}>
        <SectionWithCards 
          title="New" 
          viewAllRoute="/new-orders" 
          cards={newData} 
        />
        </div>
        <SectionWithCards 
          title="Orders" 
          viewAllRoute="/all-orders" 
          cards={ordersData} 
        />
        <SectionWithCards 
          title="Listings" 
          viewAllRoute="/listings" 
          cards={listingsData} 
        />
      </main>

      <NavBar />
    </div>
  );
};

export default Home;