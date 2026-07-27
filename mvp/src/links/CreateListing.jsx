import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModifyListingPage from '../components/pages/ModifyListingPage';
import NavBar from '../components/NavBar';

const CreateListing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  return (
    <>
      <ModifyListingPage 
        pageTitle="Add a product"
        buttonText="Create Listing"
        successMessage="Listing created successfully!"
        onSubmitSuccess={() => navigate('/home')}
      />
      <NavBar />
    </>
  );
};

export default CreateListing;