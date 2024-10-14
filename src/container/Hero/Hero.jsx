import React from 'react';
import { images } from '../../constants';
import { IconScroll } from '../../components';
import './Hero.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1 className="title">Bharatiya Open Volunteer Association</h1>
        <h2 className="subtitle">Connecting Minds, Empowering Lives!</h2>
        <p className="description">
          A Section 8 company registered with the MCA, Government of India.
        </p>
        <p>
          NGO Darpan ID: <strong>MH/2024/0427714</strong>
        </p>
        <p>
          For more information: visit <a href="http://www.ova.ngo">www.ova.ngo</a> or email <a href="mailto:contact@ova.ngo">contact@ova.ngo</a>
        </p>
      </header>

      

      

      

      <IconScroll />
    </div>
  );
};

export default AboutUs;
