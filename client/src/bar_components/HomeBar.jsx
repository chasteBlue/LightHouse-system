import React from 'react';
import 'bulma/css/bulma.min.css';
import logo from '../images/logo.png';
import '../App.css';
import '../manager_components/components_m.css'
import { Link } from 'react-router-dom';
import { IoWineOutline} from 'react-icons/io5';


const HomeBar = () => {
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
                    Welcome! Bar Desk Lira
                    </h1>
                    <h2 className="subtitle">
                    Let’s Start.
                    </h2>

                    {/* Buttons */}
                    <div className="buttons is-centered mt-4">
                        <Link to="/bar_dashboard" className="button is-blue"><IoWineOutline style={{ textAlign: 'center', margin:'5px' }} />Drink Orders</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HomeBar;
