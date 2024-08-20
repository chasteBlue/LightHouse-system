import React from 'react';
import 'bulma/css/bulma.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { IoBedSharp, IoFastFood, IoGlassesSharp, IoPeople, IoWalk, IoWine,IoHome, IoMap, IoMail, IoPhonePortrait, IoTime } from 'react-icons/io5';
import 'leaflet/dist/leaflet.css';
import one from '../images/icons/icon1.png'
import './pages.css';
import '../App.css';

const center = [9.326439105046058, 123.30676578031755]; 
const zoom = 25;
const customIcon = new L.Icon({
    iconUrl: one, 
    iconSize: [64, 64], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
  });

function ContactUs() {
    return (
        <section className='section-m1'>
            <div className="contact-hero-image">
                <div className="text-content-title">
                    <h1 className='title'>Contact Us</h1>
                    <h3 className='subtitle'>Get in touch with us for any inquiries or support.</h3>
                </div>
            </div>

            <div className="contact-details">
                <div id="map" className="map-container">
                        <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={center} icon={customIcon}>
                            <Popup>LightHouse Point Hotel</Popup>
                        </Marker>
                        </MapContainer>
                </div>
                <div className="details">
                    <h3 className='subtitle'>Come visit our hotel and discover all the amazing services!</h3>
                    <ul>
                    <li>
                        <IoHome style={{ fontSize: '1.5rem' }} />
                        <h4>LightHouse Point Hotel</h4>
                    </li>
                    <li>
                        <IoMap style={{ fontSize: '1.5rem' }} />
                        <p>Airport Highway, Brgy. 40a Hibbard Ave, Dumaguete City, 6200 Negros Oriental</p>
                    </li>
                    <li>
                        <IoMail style={{ fontSize: '1.5rem' }} />
                        <p>lighthousepoint@gmail.com</p>
                    </li>
                    <li>
                        <IoPhonePortrait style={{ fontSize: '1.5rem' }} />
                        <p>+6392 234 3454</p>
                    </li>
                    <li>
                        <IoTime style={{ fontSize: '1.5rem' }} />
                        <p>Check-in: 2 p.m.</p>
                    </li>
                    <li>
                        <IoTime style={{ fontSize: '1.5rem' }} />
                        <p>Check-out: 12 p.m.</p>
                    </li>
                    </ul>
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
        </section>
    );
  }
  
  export default ContactUs;