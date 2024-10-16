import React from 'react';
import './Footer.css';
import { images, data } from '../../constants';

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img src={images.logofooter} alt="logo" className="img-fluid" />
        </div>
        <div className="col-md-8 col-12">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li key={index}><a href="#">{item.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="social-mediaa">
  <a href="https://www.facebook.com/OpenVolunteerAssociation/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
    <i className="fab fa-facebook-f" aria-hidden="true"></i>
  </a>
  <a href="https://www.instagram.com/ovango2024/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
    <i className="fab fa-instagram" aria-hidden="true"></i>
  </a>
  <a href="https://www.linkedin.com/company/open-volunteer-association" target="_blank" rel="noopener noreferrer" className="social-media-icon">
    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
  </a>
  <a href="https://chat.whatsapp.com/DaFHohNyvYHJ4KLWVvTn5f" target="_blank" rel="noopener noreferrer" className="social-media-icon">
    <i className="fab fa-whatsapp" aria-hidden="true"></i>
  </a>
  <a href="https://www.youtube.com/@BOVA2024" target="_blank" rel="noopener noreferrer" className="social-media-icon">
    <i className="fab fa-youtube" aria-hidden="true"></i>
  </a>
</div>

      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <ul className="info-contact">
            <li><span>Contact us:</span></li>
            <li>Email: info@positivus.com</li>
            <li>Phone: 555-567-8901</li>
            <li>Address: 1234 Main St, Moonstone City, Stardust State 12345</li>
          </ul>
        </div>
        <div className="col-md-8 col-12">
          <form className="row form-news">
            <div className="col-lg-6 col-12">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button type="submit" className="btn-positivus w-100">Subscribe to news</button>
            </div>
          </form>
        </div>
      </div>
      <div className="rights">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p><a href="#" alt="Privacy Policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
