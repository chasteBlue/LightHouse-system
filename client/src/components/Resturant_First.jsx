import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Breadcrumbs from '../layouts/Breadcrumbs';

import bar from '../images/guest_home/restaurant.jpg';
import al from '../images/guest_home/garden.jpg';
import alen from '../images/guest_home/lobby.jpg';

function Resturant_First() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [guestCount, setGuestCount] = useState(1);

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      return date.getDay() === 0 || date.getDay() === 6;
    }
    return false;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: bar,
      title: 'Restaurant Image',
    },
    {
      src: al,
      title: 'Garden Image',
    },
    {
      src: alen,
      title: 'Garden Image',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Restaurant Date Reservation' },
  ];

  return (
    <section className='section-m1'>
      <div>
        <div className="hero-body" style={{ backgroundImage: `url(${bar})`, margin: '2%' }}>
          <div className="container has-text-centered" style={{ padding: '5%' }}>
            <h1 className="title has-text-white">Restaurant Table Reservation </h1>
          </div>
        </div>

        <div>
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="container event-bg-style" style={{ marginBottom: '2%' }}>
          <div className="columns">
            <div className="column is-half">
              <div className="carousel">
                {images.map((image, index) => (
                  <div key={index} className="carousel-item">
                    <img
                      src={image.src}
                      alt={image.title}
                      className={index === currentIndex ? 'active' : ''}
                    />
                    {index === currentIndex && (
                      <div className="carousel-title">
                        <h2 className="title is-4">{image.title}</h2>
                      </div>
                    )}
                  </div>
                ))}
                <button
                  className="button is-light carousel-button carousel-button-prev"
                  onClick={() => setCurrentIndex(prevIndex =>
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                  )}
                >
                  &#10094;
                </button>
                <button
                  className="button is-light carousel-button carousel-button-next"
                  onClick={() => setCurrentIndex(prevIndex =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                  )}
                >
                  &#10095;
                </button>
              </div>
            </div>

            <div className="column is-half event-style">
              <div className='column'>
                <p className="subtitle has-text-centered">Restaurant Table Booking Date</p>
                <div className="field field-style">
                  <label className="label">Table Reservation Details:</label>
                  <div className="control">
                    <Calendar
                      onChange={setSelectedDate}
                      tileDisabled={tileDisabled}
                      minDate={new Date()}
                      value={selectedDate}
                      className="calendar"
                    />
                  </div>
                  <p className="has-text-grey">Selected Date: {selectedDate.toDateString()}</p>
                </div>

                <div className="field">
                  <label className="label">Select Time:</label>
                  <div className="control">
                    <div className="buttons">
                      {['9:00', '10:00', '11:00', '2:00', '3:00', '4:00', '5:00'].map(time => (
                        <button
                          key={time}
                          className={`button is-blue time-slot-button ${selectedTime === time ? 'is-selected' : ''}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Number of Guests:</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      min="1"
                      max="10"
                      placeholder="Enter number of guests"
                      onChange={(e) => setGuestCount(e.target.value)}
                      value={guestCount}
                    />
                  </div>
                </div>
              </div>

              <div className="buttons is-centered">
                <Link to="/resturant_tables">
                  <button className="button is-blue search-reservation" type="submit">
                    SELECT FOR BOOKING DATE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resturant_First;
