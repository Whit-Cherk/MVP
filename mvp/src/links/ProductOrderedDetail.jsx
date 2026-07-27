import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_ORDERS } from '../data/MockData';
import ProductOrderedDetailPage from '../components/pages/ProductOrderedDetailPage';
import NavBar from '../components/NavBar';

const ProductOrderedDetail = () => {
  const { orderId, productId } = useParams();
  
  // 1. Process the URL strings into base-10 integers
  const numericOrderId = parseInt(orderId, 10);
  const numericProductId = parseInt(productId, 10);
  
  let foundProduct = null;
  
  // 2. Compare the parsed integer to the mock data integer
  const order = MOCK_ORDERS.find(o => o.id === numericOrderId);
  
  if (order) {
    // 3. Remove the .toString() and compare the integer to the integer
    foundProduct = order.products.find(p => p.id === numericProductId);
  }

  return (
    <>
      <ProductOrderedDetailPage product={foundProduct} />
      <NavBar />
    </>
  );
};

export default ProductOrderedDetail;