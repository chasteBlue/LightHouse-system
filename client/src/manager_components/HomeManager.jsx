import React from 'react';
import 'bulma/css/bulma.min.css';
import logo from '../images/logo.png';
import '../App.css';
import './components_m.css';
import { Link } from 'react-router-dom';
import { IoGridSharp, IoSettings } from 'react-icons/io5';


const HomeManager = () => {
  return (
    <section>
        <div className="home-page hero is-color home-page">
      <div className="hero-body">
        <div className="container has-text-centered">
          {/* Logo */}
          <figure className="is-192x192 is-inline-block">
            <img src={logo} alt="Logo"/>
          </figure>

          {/* Phrase */}
          <h1 className="title">
          Welcome! Manager Lira
          </h1>
          <h2 className="subtitle">
          Let’s Start.
          </h2>

          {/* Buttons */}
          <div className="buttons is-centered mt-4">
            <Link to="/manager_dashboard" className="button is-blue"><IoSettings style={{ textAlign: 'center', margin:'5px' }} /> Service Maintenance</Link>
            <Link to="/manager_dashboard_reports" className="button is-dark-blue"><IoGridSharp style={{ textAlign: 'center', margin:'5px' }} />Service Reports</Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeManager;
