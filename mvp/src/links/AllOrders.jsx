import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ORDERS } from '../data/MockData';
import HorizontalListPage from '../components/pages/HorizontalListPage';
import NavBar from '../components/NavBar';


const AllOrders = () => {
  const navigate = useNavigate();

  const handleCardClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div>
      <HorizontalListPage 
        title="Orders" 
        filters={['All', 'New', 'Pending', 'In Progress', 'Completed']} 
        data={MOCK_ORDERS}
        onClick={handleCardClick} 
      />

      <NavBar />
    </div>
  );
};

export default AllOrders;