import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import { Link } from 'react-router-dom';
import banner from '../images/guest_home/1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


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
    const images = [
        {
          src: 'https://via.placeholder.com/1280x720.png?text=Image+1',
          title: 'Image 1 Title',
        },
        {
          src: 'https://via.placeholder.com/1280x720.png?text=Image+2',
          title: 'Image 2 Title',
        },
        {
          src: 'https://via.placeholder.com/1280x720.png?text=Image+3',
          title: 'Image 3 Title',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    return (
        <section className='section-m1'> 
            <div>
                <div className="hero-body" style={{ backgroundImage: `url(${banner})`, margin: '2%' }}>
                    <div className="container has-text-centered" style={{ padding:'5%'}}>
                        <h1 className="title has-text-white">Resturant Table Reservation </h1>
                    </div>
                </div>

                <div className="container event-bg-style" style={{margin:'2% 0'}}>
                  <div className="columns">
                    <div className="column is-half">
                      <div className="carousel">
                        <div className="carousel-item">
                          <img src={images[currentIndex].src} alt={images[currentIndex].title} />
                          <div className="carousel-title has-text-centered has-text-white">
                            <h2 className="title is-4">{images[currentIndex].title}</h2>
                          </div>
                        </div>
                        <button className="button is-light carousel-button carousel-button-prev" onClick={prevSlide}>
                          &#10094;
                        </button>
                        <button className="button is-light carousel-button carousel-button-next" onClick={nextSlide}>
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
                                  onClick={() => {
                                    console.log('Selected time:', time);
                                    setSelectedTime(time);
                                  }}
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
                        <Link to="/resturant_tables"><button className="button is-blue search-reservation" type="submit">
                          SELECT FOR BOOKING DATE
                        </button></Link>
                      </div>
                    </div>

                    
                  </div>
                </div>


            </div>
        </section>
    );
  }
  
  export default Resturant_First;