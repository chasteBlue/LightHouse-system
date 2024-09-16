import React from 'react';
import 'bulma/css/bulma.min.css';
import logo from '../images/logo.png';
import '../App.css';
import '../manager_components/components_m.css'
import { Link } from 'react-router-dom';
import { IoFastFoodOutline, IoTabletLandscapeOutline } from 'react-icons/io5';


const HomeRestaurant = () => {
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
          Welcome! Restaurant Desk Lira
          </h1>
          <h2 className="subtitle">
          Let’s Start.
          </h2>

          {/* Buttons */}
          <div className="buttons is-centered mt-4">
            <Link to="/restaurant_dashboard" className="button is-blue"><IoFastFoodOutline style={{ textAlign: 'center', margin:'5px' }} /> Food Orders</Link>
            <Link to="/restaurant_dashboard_table" className="button is-dark-blue"><IoTabletLandscapeOutline style={{ textAlign: 'center', margin:'5px' }} />Table Reservations</Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeRestaurant;
