import React from 'react';
import 'bulma/css/bulma.min.css';
import { IoBedSharp, IoFastFood, IoGlassesSharp, IoPeople, IoWalk, IoWine } from "react-icons/io5";
import home_hero from '../images/hero.png';
import './pages.css';
import '../App.css';

function AboutUs() {
    return (
      <section>
            <div className="hero is-color">
                <div className="hero-body" style={{ backgroundImage: `url(${home_hero})` }}>
                </div>
                <div className="floating-container">
                     <div className='about-white'>
                        <div className="container is-centered">
                            <h2 className='title has-text-centered'>About LightHouse Point Hotel</h2>
                        </div>
                        <h3 className="about-space"><strong>Beacon of Luxury, Stay Enlightened Here.</strong></h3>
                        <div className='about-space'>
                            <p>Experience the charm of Dumaguete City at Lighthouse Point Hotel, where the laid-back atmosphere and friendly locals create a welcoming retreat. 
                                Immerse yourself in the vibrant street art and explore historical sites like Silliman University, or dive into the breathtaking Apo Island Marine Reserve. Our hotel offers spacious, 
                                nautical-themed rooms perfect for solo travelers seeking comfort and style. Begin your day with a delightful breakfast, unwind by our refreshing pool, and savor panoramic views from 
                                our rooftop lounge. Take advantage of our convenient shuttle service to explore the city with ease.</p>

                            <p>Stay connected with complimentary Wi-Fi, rejuvenate in our invigorating showers, and indulge in luxurious toiletries. 
                                Lighthouse Point Hotel ensures a seamless blend of relaxation and adventure. Nearby attractions like the Silliman 
                            University Anthropology Museum, Freedom Park, and Hayahay Treehouse Bar and Viewdeck offer a glimpse into the local culture and vibrant nightlife. 
                                Discover a delightful stay at Lighthouse Point Hotel, where every detail is designed to enhance your experience in Dumaguete City.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                   
            <div className="property-views-container">
                <h4><strong>Services</strong></h4>
                <h3>Unwind, Dine, and Explore – Luxury Services at Lighthouse Point Hotel</h3>
                <div className="cards">
                    <div className="card">
                        <div className="info">
                            <IoBedSharp style={{ fontSize: '2rem' }} />
                        </div>
                        <div className="body">
                            <div className="text">
                                <h3><strong>Room Reservation</strong></h3>
                                <div className="body-text">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="info">
                            <IoWalk style={{ fontSize: '2rem' }} />
                        </div>
                        <div className="body">
                            <div className="text">
                                <h3><strong>Concierge and Laundry</strong></h3>
                                <div className="body-text">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="info">
                            <IoFastFood style={{ fontSize: '2rem' }} />
                        </div>
                        <div className="body">
                            <div className="text">
                                <h3><strong>Resturant Services</strong></h3>
                                <div className="body-text">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="info">
                            <IoGlassesSharp style={{ fontSize: '2rem' }} />
                        </div>
                        <div className="body">
                            <div className="text">
                                <h3><strong>Virtual Tour</strong></h3>
                                <div className="body-text">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="info">
                            <IoPeople style={{ fontSize: '2rem' }} />
                        </div>
                        <div className="body">
                            <div className="text">
                                <h3><strong>Event Services</strong></h3>
                                <div className="body-text">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="info">
                            <IoWine style={{ fontSize: '2rem' }} />
                        </div>
                        <div className="body">
                            <div className="text">
                                <h3><strong>Bar Services</strong></h3>
                                <div className="body-text">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="panel-image-double">
                <div className="image-placeholder"></div>
                    <img className="image" src="https://via.placeholder.com/357x170" alt="Placeholder" />
                    <img className="image flipped" src="https://via.placeholder.com/357x170" alt="Placeholder" />
                <div className="image-placeholder"></div>
            </div>

            <div className="about-us-container">
                <div className="flex-boxes-container">
                    <div className="flex-box-head">
                    <h2 className="flex-box-title">A bit more about us...</h2>
                        <div className='flex-column'>
                            <div className="flex-box">
                                <h3>A bit more about us...</h3>
                                    <img className="flex-image" src="https://via.placeholder.com/357x170" alt="Reception Desk" />
                            </div>
                            <div className="flex-box">
                                <h3 >A bit more about us...</h3>
                                    <img className="flex-image" src="https://via.placeholder.com/357x170" alt="Reception Desk" />
                            </div>
                        </div>

                        <div className='flex-column'>
                            <div className="flex-box">
                                <h3>A bit more about us...</h3>
                                    <img className="flex-image" src="https://via.placeholder.com/357x170" alt="Reception Desk" />
                            </div>
                            <div className="flex-box">
                                <h3>A bit more about us...</h3>
                                    <img className="flex-image" src="https://via.placeholder.com/357x170" alt="Reception Desk" />
                            </div>
                        </div>
                        <div className="flex-box">
                                <h3>A bit more about us...</h3>
                                <img className="flex-image" src="https://via.placeholder.com/357x170" alt="Reception Desk" />
                        </div>

                    </div>
                </div>
            </div>
 
      </section>
    );
  }
  
  export default AboutUs;
