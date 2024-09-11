import React from 'react';
import 'bulma/css/bulma.min.css';
import logo from '../images/logo.png';
import '../App.css';
import '../manager_components/components_m.css';
import { Link } from 'react-router-dom';
import {  IoBed } from 'react-icons/io5';


const HomeFrontDesk= () => {
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
          Welcome! Front Desk Lira
          </h1>
          <h2 className="subtitle">
          Let’s Start.
          </h2>

          {/* Buttons */}
          <div className="buttons is-centered mt-4">
            <Link to="/frontdesk_dashboard" className="button is-blue"><IoBed style={{ textAlign: 'center', margin:'5px' }} /> Room and Events Management</Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeFrontDesk;
