import React from 'react';
import { Headings } from '../../components';
import { data } from '../../constants';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import './Services.css';


const Services = () => {
  return (
    <div id="services" className="d-block pt-md-4">
      <Headings title="About us" text="" />
      

      <div className="about-us-container">
            <h1>Bharatiya Open Volunteer Association (BOVA)</h1>
            <h2>Connecting Minds, Empowering Lives!</h2>
            <p>
                We are a Section 8 company registered with the Ministry of Corporate Affairs, Government of India. 
                Our NGO Darpan ID is MH/2024/0427714. At OVA, we are dedicated to making a positive impact 
                in our communities through various initiatives focused on empowerment, education, and sustainability.
            </p>
            <h3>Our Focus Areas:</h3>
            <ol>
                <li>
                    <strong>Language Exchanges</strong><br />
                    Promoting cultural understanding through language learning and exchanges, including free language classes and cultural events.
                </li>
                <li>
                    <strong>Social Services</strong><br />
                    Supporting community well-being with food drives, health camps, and educational support for underprivileged children.
                </li>
                <li>
                    <strong>Computer Literacy and Cyber Security Awareness</strong><br />
                    Empowering individuals with essential computer skills and knowledge about online safety.
                </li>
                <li>
                    <strong>Natural Calamities Rescue and Survival Training</strong><br />
                    Equipping individuals with skills to survive natural disasters through first aid training and emergency workshops.
                </li>
                <li>
                    <strong>Psychosocial Support & Essential Life-Saving Skills</strong><br />
                    Providing psychological support and counseling services, alongside mental health awareness initiatives.
                </li>
                <li>
                    <strong>Sustainability Awareness and Mitigation Strategies</strong><br />
                    Raising awareness about environmental sustainability through workshops, tree planting drives, and eco-friendly practices.
                </li>
            </ol>
            <h3>How You Can Contribute:</h3>
            <ul>
                <li><strong>Volunteer</strong> your time and skills at our events.</li>
                <li><strong>Donate</strong> to support our programs and initiatives.</li>
                <li><strong>Participate</strong> in workshops, training sessions, and green events.</li>
            </ul>
           <br></br>
            <p>Together, we can empower lives and build a brighter future!</p>
        </div>
    </div>
  )
}

export default Services