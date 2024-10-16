import React from 'react';
import { Headings } from '../../components';
import './Services.css';

const Services = () => {
  return (
    <div id="services" className="d-block pt-md-4">
      <Headings title="About Us" text="" />

      <div className="focus-areas-container">
        <h3>Our Focus Areas:</h3>
        <div className="tile-container">
          <div className="tile">
            <h4>Language Exchanges</h4>
            <p>Promoting cultural understanding through language learning and exchanges.</p>
          </div>
          <div className="tile">
            <h4>Social Services</h4>
            <p>Supporting community well-being with food drives and health camps.</p>
          </div>
          <div className="tile">
            <h4>Computer Literacy</h4>
            <p>Empowering individuals with essential computer skills and online safety knowledge.</p>
          </div>
          <div className="tile">
            <h4>Natural Calamities Training</h4>
            <p>Equipping individuals with survival skills through first aid training.</p>
          </div>
          <div className="tile">
            <h4>Psychosocial Support</h4>
            <p>Providing psychological support and counseling services.</p>
          </div>
          <div className="tile">
            <h4>Sustainability Awareness</h4>
            <p>Raising awareness about environmental sustainability and eco-friendly practices.</p>
          </div>
        </div>

        <h3>How You Can Contribute:</h3>
        <div className="contribution-container">
          <ul>
            <li><strong>Volunteer</strong> your time and skills at our events.</li>
            <li><strong>Donate</strong> to support our programs and initiatives.</li>
            <li><strong>Participate</strong> in workshops and training sessions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
