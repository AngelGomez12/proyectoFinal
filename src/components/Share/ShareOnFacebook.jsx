import React from 'react';

const ShareOnFacebook = ({ productName, productDescription, productImage }) => {
  const handleShareOnFacebook = () => {
    const productURL = window.location.href;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productURL)}&quote=${encodeURIComponent(`¡Mira este increíble producto: ${productName}, ${productDescription}!`)}`;
    window.open(facebookShareUrl, '_blank');
  };

  return (
    <button className="btn btn-primary" onClick={handleShareOnFacebook}>
      Compartir en Facebook
    </button>
  );
};

export default ShareOnFacebook;
