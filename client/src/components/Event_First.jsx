import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import banner from '../images/guest_home/1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AddEventReservation from '../guest_modals/AddEventReservation';


function Event_first() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
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
                        <h1 className="title has-text-white">Event Reservation </h1>
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

                    <div className="column is-half event-style" >
                      <div className='column '>
                        <p className="subtitle has-text-centered">Event and Venue Booking Date</p>
                        <div className="field field-style">
                          <label className="label">Event Reservation Date:</label>
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

                      </div> 
                      <div className="buttons is-centered" >
                        <button className="button is-blue search-reservation" type="submit" onClick={toggleModal} >SELECT FOR BOOKING DATE</button>
                      </div>
                    </div>
                    
                  </div>
                </div>


            </div>
            <AddEventReservation isOpen={isModalOpen} toggleModal={toggleModal} />
        </section>
    );
  }
  
  export default Event_first;