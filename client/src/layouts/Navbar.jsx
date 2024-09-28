import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'bulma/css/bulma.min.css';
import logo from "../images/logo.png";
import profilePic from '../images/guest_home/garden.jpg'; // Add your profile image here
import './layouts.css';
import '../App.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate(); 

  // Toggle navbar in mobile view
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  }, []);

 
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
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
            {!isLoggedIn ? (
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/register" className="button is-blue"><strong>Sign-up</strong></Link>
                  <Link to="/login" className="button is-light"><strong>Log in</strong></Link>
                </div>
              </div>
            ) : (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <figure className="image is-32x32">
                    <img className="is-rounded" src={profilePic} alt="Profile" />
                  </figure>
                </a>
                <div className="navbar-dropdown is-right">
                  <Link to="/profile_guest" className="navbar-item">Profile</Link>
                  <Link to="/reservations" className="navbar-item">Reservations</Link>
                  <button className="navbar-item button is-blue is-fullwidth" onClick={handleLogout}>
                    Log Out
                  </button>
                </div>
              </div>
            )}
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
            {!isLoggedIn ? (
              <div className="sidebar-item">
                <div className="buttons">
                  <Link to="/register" className="button is-blue"><strong>Sign-up</strong></Link>
                  <Link to="/login" className="button is-light"><strong>Log in</strong></Link>
                </div>
              </div>
            ) : (
              <div >
                <figure className="image is-64x64 m-0">
                  <img className="is-rounded" src={profilePic} alt="Profile" />
                </figure>
                <div className='sidebar-item'>
                  <Link to="/profile_guest" className="sidebar-item">Profile</Link>
                  <Link to="/reservations" className="sidebar-item">Reservations</Link>
                  <button className="sidebar-item button is-inverted-blue m-1" onClick={handleLogout}>
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
