import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditButton from '../components/EditButton';
import BackButton from '../components/BackButton';
import HeaderText from '../components/HeaderText';
import CategoryDetail from '../components/CategoryDetail';
import NavBar from '../components/NavBar';
import ActionButton from '../components/ActionButton';
import { MOCK_SELLER, MOCK_STORE } from '../data/MockData';
import { useAuth } from '../context/AuthContext';

const AccountSettings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const navigate = useNavigate();
    const { signOut } = useAuth();

    const handleLogout = async () => {
      await signOut();
      navigate('/login', { replace: true });
    };

return (
  <>
    <div className="page-container" style={{ paddingBottom: '6rem' }}>
      
      {/* Header Area */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <BackButton goTo="/home"/>
          <HeaderText text="Account Settings" />
        </div>
        
        {/* Navigation to the new edit screen */}
        <EditButton onClick={() => navigate('/profile/edit')} />
      </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Section 1: Seller Information */}
            <div className="form-container" style={{ gap: '1rem', padding: '1.5rem', width: '100%', maxWidth: '100%' }}>
            <h3 className="section-subtitle" style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Seller Information
            </h3>
            <CategoryDetail category="Name" option={MOCK_SELLER.name} />
            <CategoryDetail category="Email" option={MOCK_SELLER.email} />
            <CategoryDetail category="Phone" option={MOCK_SELLER.phone} />
            <CategoryDetail category="Password" option="*******" />
            </div>

            {/* Section 2: Store Information */}
            <div className="form-container" style={{ gap: '1rem', padding: '1.5rem', width: '100%', maxWidth: '100%', marginBottom: '2rem' }}>
                <h3 className="section-subtitle" style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Store Information
                </h3>
                <CategoryDetail category="Store Name" option={MOCK_STORE.name} />
                <CategoryDetail category="Store Slug" option={MOCK_STORE.slug} />
                <CategoryDetail category="Phone" option={MOCK_STORE.phone} />
                <CategoryDetail category="Email" option={MOCK_STORE.email} />
                <CategoryDetail category="Instagram" option={MOCK_STORE.instagram} />
                <CategoryDetail category="Address" option={MOCK_STORE.address} />
                
                {/* Multi-line read-only fields utilizing listing-detail typography */}
                <div style={{ marginTop: '0.5rem' }}>
                    <span className="meta-label">Store Description</span>
                    <p className="listing-description">{MOCK_STORE.description}</p>
                </div>
            </div>

        </div>

        {/* Cerrar sesión */}
        <div style={{ marginTop: '1rem' }}>
          <ActionButton text="Cerrar sesión" onClick={handleLogout} />
        </div>

        </div>

        <NavBar />
    </>
  );
};

export default AccountSettings;