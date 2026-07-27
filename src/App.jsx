import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './links/Login';
import Home from './links/Home';
import CreateSeller from './links/CreateSeller';
import CreateStore from './links/CreateStore';
import AllOrders from './links/AllOrders';
import NewOrders from './links/NewOrders';
import OrderDetail from './links/OrderDetail'; 
import ProductOrderedDetail from './links/ProductOrderedDetail';
import OrderSummary from './links/OrderSummary';
import CreateListing from './links/CreateListing';
import Listings from './links/Listings';
import ListingDetail from './links/ListingDetail';
import AccountSettings from './links/AccountSettings';
import EditAccountSettings from './links/EditAccountSettings';
import EditListing from './links/EditListing';
import StoreFront from './links/StoreFront';
import Product from './links/Product';
import Cart from './links/Cart';
import OrderSuccess from './links/OrderSuccess';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Core Auth & Flow Routes (públicas) */}
          <Route path="/login" element={<Login />} />
          <Route path="/create-seller" element={<CreateSeller />} />
          <Route
            path="/create-store"
            element={
              <ProtectedRoute>
                <CreateStore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* NavBar links (requieren sesión de vendedor) */}
          <Route
            path="/create-listing"
            element={
              <ProtectedRoute>
                <CreateListing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <AccountSettings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <ProtectedRoute>
                <EditAccountSettings />
              </ProtectedRoute>
            }
          />

          {/* Order Flows (requieren sesión de vendedor) */}
          <Route
            path="/new-orders"
            element={
              <ProtectedRoute>
                <NewOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/all-orders"
            element={
              <ProtectedRoute>
                <AllOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order/:orderId/summary"
            element={
              <ProtectedRoute>
                <OrderSummary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order/:orderId/product/:productId"
            element={
              <ProtectedRoute>
                <ProductOrderedDetail />
              </ProtectedRoute>
            }
          />

          {/* Listing Flows (requieren sesión de vendedor) */}
          <Route
            path="/listings"
            element={
              <ProtectedRoute>
                <Listings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/listing/:id"
            element={
              <ProtectedRoute>
                <ListingDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-listing/:id"
            element={
              <ProtectedRoute>
                <EditListing />
              </ProtectedRoute>
            }
          />

          {/* Buyer Flows (públicas — guest checkout, sin cuenta) */}
          <Route path="/storefront" element={<StoreFront />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;