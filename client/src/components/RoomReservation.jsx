import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import Breadcrumbs from '../layouts/Breadcrumbs';

const RoomReservation = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Room Search', link: '/' },
        { label: 'Room Reservation' },
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


  

    </section>
  );
};

export default RoomReservation;
