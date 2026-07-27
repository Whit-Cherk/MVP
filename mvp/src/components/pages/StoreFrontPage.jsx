import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StoreWelcomeBanner from '../StoreWelcomeBanner';
import CartButton from '../CartButton';
import SearchBar from '../SearchBar';
import VerticalCard from '../VerticalCard';
import { MOCK_STORE, MOCK_LISTINGS } from '../../data/MockData'; 

const StoreFrontPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Filters the listings based on the search bar input
  const filteredData = MOCK_LISTINGS.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <CartButton />
    <div className="storefront-container">
      
      <StoreWelcomeBanner storeName={MOCK_STORE.name} storeLogo={MOCK_STORE.logo} style={{height: '100px'}}/>
      
      {/* We reuse the spacing classes from list-page-layout, adjusting top padding to fit below the banner */}
      <div style={{ paddingTop: '1.5rem' }}>
        <SearchBar 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="search" 
        />

        <div className="cards-grid-container">
          {filteredData.map((item) => (
            <VerticalCard
              key={item.id}
              imageSrc={item.image}
              text1={item.name}
              text2={`$${item.price.toFixed(2)}`}
              onClick={() => handleProductClick(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default StoreFrontPage;