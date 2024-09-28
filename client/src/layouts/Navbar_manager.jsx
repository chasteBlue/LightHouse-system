import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import 'bulma/css/bulma.min.css';
import logo from "../images/logo.png";
import './layouts.css';
import '../App.css';
import { IoLogOut } from 'react-icons/io5';

function Navbar_manager() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle the navbar menu in mobile view
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/staff_login'); 
  };

  const isLoginPage = location.pathname === '/staff_login';

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

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {!isLoginPage && (
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={handleLogout} className="button is-blue">
                    <strong><IoLogOut className='icon-button-space' /> Log out</strong>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar_manager;
