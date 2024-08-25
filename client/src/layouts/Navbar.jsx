import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import logo from "../images/logo.png";
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
        <Link to = "/"  className="navbar-item"><img src={logo} alt="LightHouse Point Hotel" className='navbar-logo' /></Link>
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
            <Link to = "/"  className="navbar-item">Home</Link>
            <Link to = "/about_us" className="navbar-item">About Us</Link>
            <Link to="/contact_us" className="navbar-item">Contact Us</Link>
            <Link to="/resturant_filtering" className="navbar-item" href="#contact">Resturant</Link>
            <Link to="/event_filtering" className="navbar-item">Events</Link>
            <a className="navbar-item" href="#contact">Virtual Tour</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to = "/register"  className="button is-blue"><strong>Sign-up</strong></Link>
                <Link to = "/login"  className="button is-light"><strong>Log in</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div id="sidebar" className={`sidebar ${isActive ? 'is-active' : ''}`}>
        <div className="sidebar-content">
          <button className="close-button" onClick={toggleNavbar} aria-label="Close sidebar">&times;</button>
            <Link to = "/"  className="sidebar-item">Home</Link>
            <Link to = "/about_us" className="sidebar-item">About Us</Link>
            <Link to="/contact_us" className="sidebar-item">Contact Us</Link>
            <Link to="/resturant_filtering" className="sidebar-item">Resturant</Link>
            <Link to="/event_filtering" className="sidebar-item" >Events</Link>
            <a className="sidebar-item" href="#contact">Virtual Tour</a>
          <div className="navbar-end">
            <div className="sidebar-item">
              <div className="buttons">
                <Link to = "/register"  className="button is-blue"><strong>Sign-up</strong></Link>
                <Link to = "/login"  className="button is-light"><strong>Log in</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
