import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ListingDetailPage from '../components/pages/ListingDetailPage';
import NavBar from '../components/NavBar';
import { MOCK_LISTINGS } from '../data/MockData'; 

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const listing = MOCK_LISTINGS.find(item => item.id === parseInt(id));

  const handleEdit = () => {
    // Navigate to the edit screen using the listing's ID
    navigate(`/edit-listing/${id}`);
  };

  return (
    <>
    <ListingDetailPage listing={listing} onEdit={handleEdit} onBack="/listings" />;
    <NavBar />
    </>
  );
};

export default ListingDetail;