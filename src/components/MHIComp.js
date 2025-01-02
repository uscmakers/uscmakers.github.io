import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ImageComponent = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <StaticImage
        src="../images/mhi_new.png" // Adjust path if needed
        alt="USC Ming Hsieh Institute"
        style={{ maxWidth: '80%', height: 'auto' }}
        placeholder="blurred" // Optional: adds a blurred placeholder effect
      />
    </div>
  );
};

export default ImageComponent;
