import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductPage from '../components/pages/ProductPage';
import { MOCK_LISTINGS } from '../data/MockData';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the product based on the URL parameter
  const product = MOCK_LISTINGS.find(item => item.id === parseInt(id));

  const handleAddToCart = (orderData) => {
    // In a real app, you would dispatch to a Cart Context or Redux here.
    console.log("Added to cart:", orderData);
    navigate('/cart');
  };

  if (!product) {
    return <div className="page-container">Product not found.</div>;
  }

  return (
    <ProductPage 
      product={product} 
      onAddToCart={handleAddToCart} 
      onBack="/storefront" 
    />
  );
};

export default Product;