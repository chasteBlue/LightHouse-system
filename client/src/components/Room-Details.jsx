import React from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import Breadcrumbs from '../layouts/Breadcrumbs';

const RoomDetails = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Room Search', link: '/room_search' },
        { label: 'Room Details' }, 
      ];

  return (
    <section className='section-m1'>
         <div>
            <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className='is-flex is-justify-content-center is-align-items-center'>
            <div className="container box m-1 room-details-container">
                {/* Image at the Top */}
                <div className="room-image-container">
                <figure className="image image-room-details">
                    <img src="https://via.placeholder.com/1024x533" alt="Room" className="room-image" />
                </figure>
                </div>

                {/* Room Information */}
                <div className="room-info">
                <h2 className="title is-4">Room Number: 101</h2>
                <h3 className="subtitle is-5">Room Type: Deluxe Suite</h3>
                <p className="price is-5">Price per night: $150</p>
                </div>

                {/* Room Details Columns */}
                <div className="columns is-multiline room-features">
                <div className="column is-half-tablet is-one-quarter-desktop">
                    <ul className="room-details-list">
                    <li>Free Wi-Fi</li>
                    <li>Flat-screen TV</li>
                    <li>Air Conditioning</li>
                    <li>Mini Bar</li>
                    </ul>
                </div>
                <div className="column is-half-tablet is-one-quarter-desktop">
                    <ul className="room-details-list">
                    <li>24/7 Security</li>
                    <li>Smoke Detector</li>
                    <li>Electronic Safe</li>
                    <li>Room Service</li>
                    </ul>
                </div>
                <div className="column is-half-tablet is-one-quarter-desktop">
                    <ul className="room-details-list">
                    <li>Swimming Pool Access</li>
                    <li>Fitness Center Access</li>
                    <li>Complimentary Breakfast</li>
                    <li>Laundry Service</li>
                    </ul>
                </div>
                <div className="column is-half-tablet is-one-quarter-desktop">
                    <ul className="room-details-list">
                    <li>Free Parking</li>
                    <li>Concierge Service</li>
                    <li>Daily Housekeeping</li>
                    <li>Airport Shuttle</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default RoomDetails;
