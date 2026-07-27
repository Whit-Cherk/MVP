import React, { useRef } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react'; 

const ImageUploader = ({ onImageSelected, image}) => {

  // 1. Create a reference to the hidden file input
  const fileInputRef = useRef(null);

  // 2. Trigger the hidden input when the container is clicked
  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  // 3. Handle the files when the user selects them from the gallery
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Pass the selected files up to the parent component
      if (onImageSelected) {
        onImageSelected(files);
      }
    }
  };

  return (
    <div 
      className="image-uploader-container" 
      onClick={handleContainerClick}
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden',
        // Optional: Replace the dashed border with a solid one when an image is present
        border: image ? '1px solid var(--border-light)' : undefined 
      }}
    >
      {/* Hidden file input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        accept="image/*" 
        multiple // Remove this if you only want to allow one image at a time
      />
      
      {image ? (
        <>
          <img 
            src={image} 
            alt="Uploaded product" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          {/* Dynamic Banner overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            padding: '0.25rem 0',
            fontSize: '1rem',
            fontWeight: '600'
          }}>
            <Pencil size={16} /> Edit
          </div>
        </>
      ) : (
        <>
          <Plus color="var(--text-secondary)" size={28} />
          <span className="image-uploader-text">Product image(s)</span>
        </>
      )}
    </div>
  );
};

export default ImageUploader;