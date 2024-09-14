import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import Breadcrumbs from '../layouts/Breadcrumbs';

const RoomSearch = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Room Search' },
      ];
  
    const [mainImage, setMainImage] = useState('https://via.placeholder.com/600x400'); 

  
    const images = [
        'https://via.placeholder.com/600x400', 
        'https://via.placeholder.com/600x400',
        'https://via.placeholder.com/600x400',
        'https://via.placeholder.com/600x400',
    ];

  return (
    <section className='section-m1'>
        
        <div className="contact-hero-image">
          <div className="text-content-title">
            <h1 className='title'>Rooms</h1>
          </div>
        </div>
        <div>
            <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className="container box m-1">
            <div className="columns is-multiline is-centered">
            {/* Left Side: Image Gallery */}
            <div className="column is-full-mobile is-half-desktop">
                <div className="box image-gallery-container">
                {/* Main Image Display */}
                <div className="card-image main-image-container">
                    <figure className="image main-image">
                    <img src={mainImage} alt="Room" className="main-img" />
                    </figure>
                </div>
                
                {/* Thumbnail Images Below Main Image */}
                <div className="thumbnails-container">
                    {images.map((image, index) => (
                    <figure className="image is-64x64" key={index}>
                        <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setMainImage(image)}
                        className="thumbnail-img"
                        />
                    </figure>
                    ))}
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
                <div className="card-content section-p1">
                    <ul className="limited-bullet-list">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <Link to="/room_search/room_details"><button className="button is-inverted-blue is-small">See Full Details</button></Link>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="container box m-1">
            <div className="columns is-multiline is-centered">
            {/* Left Side: Image Gallery */}
            <div className="column is-full-mobile is-half-desktop">
                <div className="box image-gallery-container">
                {/* Main Image Display */}
                <div className="card-image main-image-container">
                    <figure className="image main-image">
                    <img src={mainImage} alt="Room" className="main-img" />
                    </figure>
                </div>
                
                {/* Thumbnail Images Below Main Image */}
                <div className="thumbnails-container">
                    {images.map((image, index) => (
                    <figure className="image is-64x64" key={index}>
                        <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setMainImage(image)}
                        className="thumbnail-img"
                        />
                    </figure>
                    ))}
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
                <div className="card-content section-p1">
                    <ul className="limited-bullet-list">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <Link to="/room_search/room_details"><button className="button is-inverted-blue is-small">See Full Details</button></Link>
                </div>
                </div>
            </div>
            </div>
        </div>

    </section>
  );
};

export default RoomSearch;
