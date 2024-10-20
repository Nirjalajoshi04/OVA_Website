import React from 'react';
import { Headings, IconScroll } from '../../components';
import './CaseStudies.css';
import { FiArrowUpRight } from 'react-icons/fi';

const CaseStudies = () => {
  return (
    <div>
      <Headings title="Our Vision & Mission" text="" />
    
    <div className="container vision-mission-section">
      
      <div className="row">
        {/* Vision Section */}
        <div className="col-md-6 vision-section">
          <div className="icon">
            <i className="bi bi-eye"></i> {/* Bootstrap icon for 'eye' */}
          </div>
          <h2>Vision</h2>
          <p>
            
          To create a connected and empowered society where individuals thrive through collaboration, knowledge sharing, and sustainable practices, fostering resilience and well-being across diverse communities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="col-md-6 mission-section">
          <div className="icon">
            <i className="bi bi-flag"></i> {/* Bootstrap icon for 'flag' */}
          </div>
          <h2>Mission</h2>
          <p>
          The Bharatiya Open Volunteer Association is dedicated to enhancing lives through innovative programs in language exchange, social services, computer literacy, disaster preparedness, and psychosocial support. We strive to promote environmental sustainability and community resilience by providing essential skills and resources, empowering individuals to contribute positively to their communities and the world around them. Together, we aim to build a more inclusive and sustainable future for all.
          </p>
        </div>
      </div>
      </div>
      </div>
  
  );
};

export default CaseStudies;
