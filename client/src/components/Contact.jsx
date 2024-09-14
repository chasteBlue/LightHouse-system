import React from 'react';
import 'bulma/css/bulma.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { IoHome, IoMap, IoMail, IoPhonePortrait, IoTime, IoBusOutline, IoBagOutline, IoLocateOutline, IoFastFoodOutline } from 'react-icons/io5';
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
            <h4><strong>Nearby Locations</strong></h4>
            <h3>Enjoy and Explore the Attractions near Lighthouse Point Hotel</h3>
                <div class="columns">
                    <div class="column">
                    <div class="box">
                        <h5 class="title is-5"><IoBusOutline style={{ fontSize: '2rem', marginRight:"1rem" }}/>Transportation</h5>
                        <ul class="has-text-left">
                        <li>Airport: Sibulan Airport - 2.4 km</li>
                        </ul>
                    </div>

                    <div class="box">
                        <h5 class="title is-5"><IoBagOutline style={{ fontSize: '2rem', marginRight:"1rem" }}/>Shopping</h5>
                        <ul class="has-text-left">
                        <li>Ruiz Recording and Rehearsal Studios - 670 m</li>
                        <li>CityMall Dumaguete - 900 m</li>
                        <li>Cang's Inc Shopping Complex - 1.3 km</li>
                        <li>Negros CD Department Store - 1.8 km</li>
                        <li>Thousand Island Store - 1.8 km</li>
                        <li>Ever Mall Shopping Center - 2.0 km</li>
                        <li>Lee Super Plaza - 2.0 km</li>
                        <li>Unitop - 2.2 km</li>
                        <li>Tops & Bottoms - 2.2 km</li>
                        <li>Dumaguete Public Market - 2.3 km</li>
                        <li>Mercado de Negrense - 2.3 km</li>
                        <li>Hyped District Dumaguete - 2.4 km</li>
                        <li>Ramona Store - 2.7 km</li>
                        <li>The Marketplace - 3.0 km</li>
                        <li>Market Square - 3.0 km</li>
                        <li>Colours Cameras and Gadgets - 3.1 km</li>
                        <li>Rusana's RTW Store - 4.5 km</li>
                        <li>GoldPrints - Printing Shop - 4.7 km</li>
                        <li>AIM Rescue Equipment - 4.8 km</li>
                        <li>MARIBON Gen. Mdse. - 8.3 km</li>
                        </ul>
                    </div>
                    </div>


                    <div class="column">
                    <div class="box">
                        <h5 class="title is-5"><IoLocateOutline style={{ fontSize: '2rem', marginRight:"1rem" }}/>Landmarks</h5>
                        <ul class="has-text-left">
                        <li>Silliman Park - 320 m</li>
                        <li>Silliman University Marine Mammal Museum - 600 m</li>
                        <li>First Baptist Church of Dumaguete - 620 m</li>
                        <li>Christmas House - 680 m</li>
                        <li>Hassaram Courtyard - 730 m</li>
                        <li>Ang Tay Golf Course - 800 m</li>
                        <li>Silliman University Zoo - 850 m</li>
                        <li>Silliman University Gymnasium - 1.3 km</li>
                        <li>Ninoy Aquino Freedom Park - 1.5 km</li>
                        <li>Negros Oriental Convention Center - 1.7 km</li>
                        <li>Silliman University Church - 1.7 km</li>
                        <li>Silliman Hall - 1.7 km</li>
                        <li>Our Mother of Perpetual Help Redemptorist Church - 1.7 km</li>
                        <li>#DumaGeTmE Signage - 1.8 km</li>
                        <li>Mary Immaculate Parish - 2.0 km</li>
                        <li>Sisters of St. Paul Monument - 2.1 km</li>
                        <li>Rizal Boulevard - 2.2 km</li>
                        <li>St. Catherine of Alexandria Cathedral - 2.3 km</li>
                        <li>Tempurahan Sa Rizal Boulevard, Dumaguete City - 2.3 km</li>
                        <li>Campanario de Dumaguete - 2.4 km</li>
                        </ul>
                    </div>
                    </div>


                    <div class="column">
                    <div class="box">
                        <h5 class="title is-5"><IoFastFoodOutline style={{ fontSize: '2rem', marginRight:"1rem" }}/>Dining</h5>
                        <ul class="has-text-left">
                        <li>ARBOUR by Jan from your cooking class - &lt;100 m</li>
                        <li>Tempat Raya Malaysian Kitchen - &lt;100 m</li>
                        <li>Himawari Izakaya (JAPANESE RESTAURANT) - &lt;100 m</li>
                        <li>Gabby's Bistro - 300 m</li>
                        <li>Tiki Bar - 630 m</li>
                        <li>Rice N Box 24/7 Delivery - 740 m</li>
                        <li>Chia Eatery - 760 m</li>
                        <li>Lab-as Restaurant - 830 m</li>
                        <li>Esturya sa KRI Restaurant - 880 m</li>
                        <li>RJ's Chicken House (Qualfon) - 930 m</li>
                        <li>Señorita's Mexican Grill, Dumaguete Airport - 1.4 km</li>
                        </ul>
                    </div>
                    </div>

                </div>
            </div>


        </section>
    );
  }
  
  export default ContactUs;