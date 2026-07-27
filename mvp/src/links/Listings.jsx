import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardListPage from '../components/pages/CardListPage';
import { MOCK_LISTINGS } from '../data/MockData'; 
import NavBar from '../components/NavBar';

const Listings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/listing/${id}`); // Navigates to the ListingDetail page
  };

  return (
    <div className='list-page-layout'> 
      <CardListPage
        title="Listings"
        data={MOCK_LISTINGS}
        onItemClick={handleItemClick}
        onBack="/home"
      />

      <NavBar />
    </div>
  );
};

export default Listings;