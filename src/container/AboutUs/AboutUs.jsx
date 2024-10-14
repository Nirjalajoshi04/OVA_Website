import React from 'react';
import './AboutUs.css';
import { Headings } from '../../components';
import { data } from '../../constants';


const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="row align-items-center">
        <div className="col-12">
          <h1 className="title">Bharatiya Open Volunteer Association</h1>
          <h2 className="subtitle">Connecting Minds, Empowering Lives!</h2>
          <p>A section 8 company registered with MCA, government of India.</p>
          <p>NGO Darpan ID: <strong>MH/2024/0427714</strong></p>
          <p>For more information: visit <a href="http://www.ova.ngo">www.ova.ngo</a> or email <a href="mailto:contact@ova.ngo">contact@ova.ngo</a></p>
        </div>
      </div>

      <div className="focus-areas">
        <h3>Our Focus Areas</h3>
        <ul>
          <li>Language Exchanges</li>
          <li>Social Services</li>
          <li>Computer Literacy and Cyber Security Awareness</li>
          <li>Natural Calamities Rescue and Survival Training</li>
          <li>Psychosocial Support and Essential Life-Saving Skills</li>
          <li>Sustainability Awareness and Mitigation Strategies</li>
        </ul>
      </div>

      <div className="section">
        <h3>Sustainability Awareness and Mitigation Strategies</h3>
        <p>Raising awareness about environmental sustainability and promoting eco-friendly practices.</p>
        <h4>Objectives:</h4>
        <ul>
          <li>Workshops on sustainable living</li>
          <li>Tree planting drives</li>
          <li>Waste management and recycling programs</li>
          <li>Renewable energy promotion</li>
        </ul>
        <h4>How can you contribute:</h4>
        <ul>
          <li>Participate in our green events</li>
          <li>Volunteer for tree planting drives</li>
          <li>Advocate for sustainability</li>
        </ul>
      </div>

      {/* Repeat similar sections for Language Exchanges, Social Services, etc. */}
      
      <div className="section">
        <h3>Join Us in Making a Difference!</h3>
        <h4>How to Help:</h4>
        <ul>
          <li>Volunteer your time and skills</li>
          <li>Donate to support our programs</li>
          <li>Spread the word about our initiatives</li>
        </ul>
        <p>Thank you for reading through this!</p>
        <p>For more information: visit <a href="http://www.ova.ngo">www.ova.ngo</a> or email <a href="mailto:contact@ova.ngo">contact@ova.ngo</a></p>
        <p>Phone: +91-8484001324</p>
      </div>
    </div>
  );
};

export default AboutUs;
