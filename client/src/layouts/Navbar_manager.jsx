import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import logo from "../images/logo.png";
import './layouts.css';
import '../App.css';
import { IoLogOut } from 'react-icons/io5';

function Navbar_manager() {
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
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to = '/staff_login'  className="button is-blue"><strong><IoLogOut className='icon-button-space'/> Log out</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar_manager;
