import React from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import '../App.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col">
        <Link to = "/" ><img src={logo} alt="LightHouse Point Hotel"  /></Link>
          <h4>Contact Us</h4>
          <p><strong>Address:</strong>Airport Highway, Brgy. 40a Hibbard Ave, Dumaguete City, 6200 Negros Oriental</p>
          <p><strong>Phone:</strong> +63 912 2345 342 / +63 955 1850 136</p>
          <p><strong>Email:</strong> lighthousepoint@gmail.com</p>
          <p><strong>Check-in:</strong> 2 p.m.</p>
          <p><strong>Check-out:</strong> 12 p.m.</p>
        </div>

        <div className="footer-col">
          <h4>Know Us More</h4>
          <Link to = "/about_us" className="footer-link">About Us</Link>
          <Link to="/contact_us" className="footer-link">Contact Us</Link>
          <Link to="/faq" className="footer-link">Frequently Asked Questions</Link>
          <Link to="/terms_and_conditions" className="footer-link">Terms & Conditions</Link>
          <Link to="/cancel_policy" className="footer-link">Cancellation Policy</Link>
          <Link to="/website_data_policy" className="footer-link">Website Data Policy</Link>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com" className="footer-link"><FaFacebook /> Facebook</a>
          <a href="https://www.instagram.com" className="footer-link"><FaInstagram /> Instagram</a>
          <a href="https://www.youtube.com" className="footer-link"><FaYoutube /> YouTube</a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>©2024,LightHouse Point Hotel - Dumaguete City Negros Oriental</p>
      </div>
    </footer>
  );
};

export default Footer;
