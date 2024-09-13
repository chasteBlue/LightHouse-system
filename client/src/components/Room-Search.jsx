import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

const RoomSearch = () => {
  // State to manage the main image display
  const [mainImage, setMainImage] = useState('https://via.placeholder.com/600x400'); // Default main image

  // List of images for the room
  const images = [
    'https://via.placeholder.com/600x400', // Example image URLs
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  return (
    <section className='section-m1'>
      <div className="box m-1">
        <div className="columns is-multiline">
          {/* Left Side: Image Gallery */}
          <div className="column is-full-mobile is-half-desktop">
            <div className="box">
              <div className="card-image">
                {/* Main Image Display */}
                <figure className="image main-image">
                  <img src={mainImage} alt="Room" className="main-img" />
                </figure>
              </div>
              <div className="card-content">
                {/* Thumbnail Images */}
                <div className="columns is-mobile is-multiline">
                  {images.map((image, index) => (
                    <div className="column is-one-quarter-mobile is-one-quarter-tablet" key={index}>
                      <figure className="image is-64x64">
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          onClick={() => setMainImage(image)} // Change main image on click
                          className="thumbnail-img"
                        />
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Room Details */}
          <div className="column is-full-mobile is-half-desktop">
            <div className="box">
              <div className="card-content">
                <h2 className="title">Room Number: 101</h2>
                <p className="subtitle">Price: $100 per night</p>
                <button className="button is-blue is-fullwidth">Book Now</button>
                </div>
                <div className="card-content">
                    <ul className="limited-bullet-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <button className="button is-inverted-blue is-small is-fullwidth">See Full Details</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSearch;
