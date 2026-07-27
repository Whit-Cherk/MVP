import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';
import HeaderText from '../HeaderText';
import Input from '../Input';
import ActionButton from '../ActionButton';
import Badge from '../Badge';
import BackButton from '../BackButton';
import ImageUploader from '../ImageUploader';
import ImageCarousel from '../ImageCarousel';
import Image from '../Image'; 
import Toast from '../Toast';
import CustomizationInputGroup from '../CustomizationInputGroup';

const ModifyListingPage = ({ 
  pageTitle, 
  buttonText, 
  initialData = {}, 
  onSubmitSuccess, 
  successMessage 
}) => {
  const navigate = useNavigate();

  // Normalize images to always be an array
  const [images, setImages] = useState(() => {
    if (Array.isArray(initialData.image)) return initialData.image;
    if (typeof initialData.image === 'string' && initialData.image.trim() !== '') return [initialData.image];
    return [];
  });

  const [productName, setProductName] = useState(initialData.name || '');
  const [productPrice, setProductPrice] = useState(initialData.price || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [amount, setAmount] = useState(initialData.amount || '');
  const [haveDelivery, setHaveDelivery] = useState(initialData.delivery || false);
  const [customizations, setCustomizations] = useState(initialData.customizations || []);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddCustomization = () => {
    setCustomizations([...customizations, { id: Date.now(), options: [{ id: Date.now() + 1, name: '', price: '' }]}]);
  };

  const handleCustomizationChange = (id, updatedFields) => {
    setCustomizations(customizations.map(cust => 
      cust.id === id ? { ...cust, ...updatedFields } : cust
    ));
  };

  const handleDeleteCustomization = (idToRemove) => {
    setCustomizations(customizations.filter((cust) => cust.id !== idToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: productName,
      description,
      amount,
      delivery: haveDelivery,
      customizations,
      image: images // Include images in the saved data
    };

    console.log("Saving product data:", formData);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => {
        if (onSubmitSuccess) {
          onSubmitSuccess();
        } else {
          navigate(-1); 
        }
      }, 300);
    }, 2000);
  };

  return (
    <div className="page-container flex-center" style={{ width: '100%', paddingBottom: '6rem' }}>
      <div className="create-listing-container">
        
        <BackButton showBackground={true} pushElementsDown={false} />
        <HeaderText text={pageTitle} className="header-text-center" />

        <form onSubmit={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
        }}>

          <div className="form-inputs">
            
            {/* Dynamic Image Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              {images.length === 0 ? (
                <div style={{ height: '250px', width: '100%' }}>
                  <ImageUploader />
                </div>
              ) : (
                <>
                  <div 
                    style={{ 
                      position: 'relative', 
                      width: '100%', 
                      height: '250px', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      cursor: 'pointer',
                      border: '1px solid var(--border-light)'
                    }}
                    title="Edit Images"
                  >
                    {/* Render Image Component for 1 image, Carousel for 2+ */}
                    {images.length === 1 ? (
                      <div style={{ width: '100%', height: '100%' }}>
                        <Image 
                          src={images[0]} 
                          alt="Product view" 
                          containerClass="carousel-image-wrapper" 
                          imgClass="carousel-image" 
                        />
                      </div>
                    ) : (
                      <ImageCarousel images={images} />
                    )}
                    
                  </div>

                  {/* Thumbnail and fixed uploader row using Grid */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '80px minmax(0, 1fr)', 
                    gap: '0.5rem', 
                    width: '100%',
                    alignItems: 'center'
                  }}>
                    
                    {/* Fixed uploader */}
                    <div style={{ height: '80px', width: '100%' }}>
                      <ImageUploader />
                    </div>
                    
                    {/* Scrollable thumbnails */}
                    <div style={{ 
                    display: 'flex', 
                    gap: '0.5rem', 
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                  }}>
                    {images.map((img, index) => (
                      <div 
                        key={index}
                        onClick={() => {
                          // Filter out the image at the specific index that was clicked
                          setImages(images.filter((_, i) => i !== index));
                        }}
                        style={{ 
                          position: 'relative', // Added to contain the absolute banner
                          width: '80px', 
                          height: '80px', 
                          flexShrink: 0, 
                          borderRadius: '8px', 
                          overflow: 'hidden', 
                          border: '1px solid var(--border-light)',
                          cursor: 'pointer' // Indicates to the user that it's clickable
                        }}
                      >
                        {/* Make sure the image fills the thumbnail square cleanly */}
                        <Image 
                          src={img} 
                          alt={`Thumbnail ${index + 1}`}
                          containerClass="carousel-image-wrapper" 
                          imgClass="carousel-image" 
                        />
                        
                        {/* Delete Banner overlay */}
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          width: '100%',
                          backgroundColor: 'rgba(0, 0, 0, 0.65)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.25rem',
                          padding: '0.15rem 0',
                          fontSize: '1rem', // Slightly smaller font to fit the 80px square
                          fontWeight: '600'
                        }}>
                          <Trash2 size={18} />
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </>
              )}
            </div>

            <Input 
              id="product-name" 
              label="Name" 
              required={true}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />

            <Input 
              id="product-price" 
              label="Base Price"
              type='number' 
              required={true}
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />

            <Input 
              id="amount-available" 
              label="Amount available" 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <Input 
              id="description" 
              label="Description" 
              type="textarea"
              required={false}
              rows={4} 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="input-group" style={{ padding: '0.5rem 0' }}>
              <span className="input-label">Delivery?</span>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                <Badge 
                  text="Yes" 
                  active={haveDelivery === true} 
                  onClick={() => setHaveDelivery(true)} 
                  type="filter"
                />
                <Badge 
                  text="No" 
                  active={haveDelivery === false} 
                  onClick={() => setHaveDelivery(false)} 
                  type="filter"
                />
              </div>
            </div>

            <div className="divider"></div>

            {customizations.map((cust) => (
              <CustomizationInputGroup 
                key={cust.id} 
                customization={cust}
                onChange={(updatedFields) => handleCustomizationChange(cust.id, updatedFields)}
                onDelete={() => handleDeleteCustomization(cust.id)} 
              />
            ))}

            <div className="customization-header-row flex-center" style={{ padding: '0.5rem 0', justifyContent: 'center' }}>
              <button 
                type="button" 
                className="text-action-link bold-link" 
                onClick={handleAddCustomization}
              >
                + Customization
              </button>
            </div>
            <div className="divider"></div>
          </div>

          <div className="footer-action">
            <ActionButton text={buttonText} type="submit"/>
          </div>
       </form>

       <Toast show={showToast} message={successMessage} />
      </div>
    </div>
  );
};

export default ModifyListingPage;