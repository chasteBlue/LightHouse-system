import React from 'react';
import 'bulma/css/bulma.min.css';
import home_hero from '../images/hero.png';
import one from '../images/guest_home/1.png';
import two from '../images/guest_home/2.png';
import three from '../images/guest_home/3.png';
import './pages.css';
import '../App.css';

function Home() {
  return (
    <section>
      <div className="hero is-color">
        <div className="hero-body" style={{ backgroundImage: `url(${home_hero})` }}>
        </div>
        <div className="floating-container">
          <div className='about-white'>
            <h3 className="has-text-centered header"><strong>LightHouse Hotel: Check-in Time: 2:00 p.m. and Check-out Time 12:00 p.m.</strong></h3>

            <div class="checkdate">
              <div class="input-container">
                <p><strong>Check-In Date</strong></p>
                <input type="date" id="checkin-date" name="checkin-date" />
              </div>
              <div class="input-container">
                <p><strong>Check-Out Date</strong></p>
                <input type="date" id="checkout-date" name="checkout-date" />
              </div>
            </div>

            <div class="room_choice">
              <div class="input-container">
                <p><strong>Number of Rooms</strong></p>
                <input type="number" id="number-of-rooms" name="number-of-rooms" min="1" />
              </div>
              <div class="input-container">
                <p><strong>Number of Adults</strong></p>
                <input type="number" id="number-of-adults" name="number-of-adults" min="1" />
              </div>
              <div class="input-container">
                  <p><strong>Number of Children</strong></p>
                  <input type="number" id="number-of-children" name="number-of-children" min="0" />
                </div>
            </div>
          </div>
          <div className="buttons is-centered ">
            <a className="button is-blue search" href='#search'>SEARCH
            </a>
          </div>
        </div>
      </div>

      <div className="property-views-container">
        <h4><strong>Rooms</strong></h4>
        <h3>LightHouse Point Hotel offers variety of rooms.</h3>
        <div className="property-images">
          <div className="property-card">
            <img className="property-image" src="https://via.placeholder.com/357x170" alt="Hotel Front View" />
              <div className="property-description">
                <h3><strong>LightHouse Point Hotel Front View</strong></h3>
                <p>Front Reception Desk</p>
              </div>
          </div>
          <div className="property-card">
            <img className="property-image" src="https://via.placeholder.com/357x170" alt="Reception Desk" />
            <div className="property-description">
              <h3><strong>Front Reception Desk</strong></h3>
              <p>Front Reception Desk</p>
            </div>
          </div>
          <div className="property-card">
            <img className="property-image" src="https://via.placeholder.com/357x170" alt="Swimming Pool" />
            <div className="property-description">
              <h3><strong>Outdoor Swimming Pool</strong></h3>
              <p>Front Reception Desk</p>
            </div>
          </div>
        </div>
      </div>

      <div className="property-views-container">
        <h4><strong>Property Views and Facilities</strong></h4>
        <div className="property-images">
          <div className="property-card">
            <img className="property-image" src="https://via.placeholder.com/357x170" alt="Hotel Front View" />
              <div className="property-description">
                <h3><strong>LightHouse Point Hotel Front View</strong></h3>
              </div>
          </div>
          <div className="property-card">
            <img className="property-image" src="https://via.placeholder.com/357x170" alt="Reception Desk" />
            <div className="property-description">
              <h3><strong>Front Reception Desk</strong></h3>
            </div>
          </div>
          <div className="property-card">
            <img className="property-image" src="https://via.placeholder.com/357x170" alt="Swimming Pool" />
            <div className="property-description">
              <h3><strong>Outdoor Swimming Pool</strong></h3>
            </div>
          </div>
        </div>
        <div>
            <a className="button  is-fullwidth is-blue" href='#search'>View Virtual Tour
            </a>
          </div>
      </div>

      <div className="property-views-container">
        <h4><strong>Nearby Attractions</strong></h4>
        <h3>LightHouse Point Hotel offers variety of rooms.</h3>
        <div className="property-images">
          <div className="property-card">
            <img className="property-image" src={one} alt="Hotel Front View" />
              <div className="property-description">
                <h3><strong>Rizal Boulevard </strong></h3>
                <p>2.32 km from property.</p>
              </div>
          </div>
          <div className="property-card">
            <img className="property-image" src={two} alt="Reception Desk" />
            <div className="property-description">
              <h3><strong>St Catherine of Alexandria Cathedral</strong></h3>
              <p>2.43 km from property.</p>
            </div>
          </div>
          <div className="property-card">
            <img className="property-image" src={three} alt="Swimming Pool" />
            <div className="property-description">
              <h3><strong>Gabby's Bistro </strong></h3>
              <p>300 m from property.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
