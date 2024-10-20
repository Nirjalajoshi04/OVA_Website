import React, { useEffect, useState } from "react";
import img1 from "../../assets/img_2_1728553367493.jpg";
import img2 from "../../assets/img_4_1728553377713.jpg";
import img3 from "../../assets/img_5_1728553384532.jpg";
import img4 from "../../assets/img_6_1728553391536.jpg";
import img5 from "../../assets/img_7_1728553398698.jpg";
import img6 from "../../assets/galleryimg7.jpg";
import img7 from "../../assets/galleryimg8.jpg";
import { IconScroll } from "../../components";
import "./Hero.css";

const AboutUs = () => {
  // Use an array of specific images
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

 

  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="hero-content">
        <h1 className="display-2 ">Welcome to<br/>Bhartiya Open Volunteer Association</h1>
        <p className="lead text-white">Connecting Minds, Empowering lives!</p>
        <a href="#about" className="btn btn-secondary text-white">Learn More</a>
      </div>
    </div>
     
  );
};
<IconScroll />
      
     

export default AboutUs;
