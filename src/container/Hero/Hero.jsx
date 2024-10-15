import React, { useEffect, useState } from 'react';
import img1 from '../../assets/img_2_1728553367493.jpg';
import img2 from '../../assets/img_4_1728553377713.jpg';
import img3 from '../../assets/img_5_1728553384532.jpg';
import img4 from '../../assets/img_6_1728553391536.jpg';
import img5 from '../../assets/img_7_1728553398698.jpg';
import { IconScroll } from '../../components';
import './Hero.css';

const AboutUs = () => {
  // Use an array of specific images
  const images = [img1, img2, img3, img4, img5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <div className='aboutus-container'>
        <div className='image-slider'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`slider-image ${index === currentImageIndex ? 'active-image' : ''}`}
              alt={`Image ${index + 1}`} // Adjusted alt text
            />
          ))}
        </div>
        <div className="indicator-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${index === currentImageIndex ? 'active-dot' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <IconScroll />
      </div>
    </div>
  );
};

export default AboutUs;
