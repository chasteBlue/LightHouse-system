import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import logo from "../images/logo.png";
import profilePic from '../images/guest_home/garden.jpg'; // Add your profile image here
import './layouts.css';
import '../App.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar is-white is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="LightHouse Point Hotel" className='navbar-logo' />
          </Link>
          <button
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isActive ? 'true' : 'false'}
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/about_us" className="navbar-item">About Us</Link>
            <Link to="/contact_us" className="navbar-item">Contact Us</Link>
            <Link to="/resturant_filtering" className="navbar-item">Restaurant</Link>
            <Link to="/event_filtering" className="navbar-item">Events</Link>
            <Link to="/virtual_tour" className="navbar-item">Virtual Tour</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/register" className="button is-blue"><strong>Sign-up</strong></Link>
                <Link to="/login" className="button is-light"><strong>Log in</strong></Link>
              </div>
            </div>
            {/* Profile Picture and Dropdown */}
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <figure className="image is-32x32">
                  <img className="is-rounded" src={profilePic} alt="Profile" />
                </figure>
              </a>
              <div className="navbar-dropdown is-right">
                <Link to="/profile_guest" className="navbar-item">Profile</Link>
                <Link to="/reservations" className="navbar-item">Reservations</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div id="sidebar" className={`sidebar ${isActive ? 'is-active' : ''}`}>
        <div className="sidebar-content">
          <button className="close-button" onClick={toggleNavbar} aria-label="Close sidebar">&times;</button>
          <Link to="/" className="sidebar-item">Home</Link>
          <Link to="/about_us" className="sidebar-item">About Us</Link>
          <Link to="/contact_us" className="sidebar-item">Contact Us</Link>
          <Link to="/resturant_filtering" className="sidebar-item">Restaurant</Link>
          <Link to="/event_filtering" className="sidebar-item">Events</Link>
          <Link to="/virtual_tour" className="sidebar-item">Virtual Tour</Link>

          <div className="navbar-end">
            <div className="sidebar-item">
              {/* Profile Picture (without dropdown) */}
              <figure className="image is-64x64">
                <img className="is-rounded" src={profilePic} alt="Profile" />
              </figure>
              <div>
                <Link to="/profile_guest" className="sidebar-item">Profile</Link>
                <Link to="/reservations" className="sidebar-item">Reservations</Link>
              </div>
              <div className="buttons">
                <Link to="/register" className="button is-blue"><strong>Sign-up</strong></Link>
                <Link to="/login" className="button is-light"><strong>Log in</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
