import React from 'react';
import 'bulma/css/bulma.min.css';
import './components_f.css';
import '../App.css';
import { Link } from 'react-router-dom';


function RoomWalkIn() {
    const rooms = [
  {
    imageUrl: 'https://via.placeholder.com/128', // Placeholder image, replace with actual URL
    roomNumber: '101',
    roomType: 'Deluxe Room',
    description: 'A spacious deluxe room with a beautiful sea view.',
    maxPeople: 3,
    rate: 150,
    finalRate: 120,
    discount: 20,
  },
  {
    imageUrl: 'https://via.placeholder.com/128', // Placeholder image, replace with actual URL
    roomNumber: '102',
    roomType: 'Standard Room',
    description: 'A cozy room perfect for couples, with a queen-sized bed.',
    maxPeople: 2,
    rate: 100,
    finalRate: 80,
    discount: 20,
  },

];
    return (
      <section className=' section-p1'>
        <header>
            <div style={{backgroundColor:'white', borderRadius:'10px 10px'}}>
                <div className='column'>
                    <h1 className='subtitle'>
                        <strong>Room Walk-In Reservation</strong>
                    </h1>
                </div>
                <div class="checkdate">              
                    <div class="input-container">
                        <p><strong>Check-In Date</strong></p>
                        <input type="date" id="checkin-date" name="checkin-date" />
                    </div>
                    <div class="input-container">
                        <p><strong>Check-Out Date</strong></p>
                        <input type="date" id="checkout-date" name="checkout-date" />
                    </div>
                </div>

                <div class="room_choice">
                <div class="input-container">
                    <p><strong>Number of Rooms</strong></p>
                    <input type="number" id="number-of-rooms" name="number-of-rooms" min="1" />
                </div>
                <div class="input-container">
                    <p><strong>Number of Adults</strong></p>
                    <input type="number" id="number-of-adults" name="number-of-adults" min="1" />
                </div>
                <div class="input-container">
                    <p><strong>Number of Children</strong></p>
                    <input type="number" id="number-of-children" name="number-of-children" min="0" />
                    </div>
                </div>
                <div className="buttons is-centered ">
                    <a className="button is-blue search" href='#search'>SEARCH</a>
                </div>
          </div>
          <hr/>
        </header>
        <div className="columns is-vcentered " >
        {rooms.map((room, index) => (
            <div key={index} className="column ">
              <div className="card is-fullwidth" style={{ width:'100%' }}>
                <div className="card-content" style={{ padding: '0', width:'100%' }}>
                  <div className="media" style={{ backgroundColor: 'white', margin: '0' }}>
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <img src={room.imageUrl} alt={`Room ${room.roomNumber}`} />
                      </figure>
                    </div>
                    <div className="media-content" style={{ padding: '1rem' }}>
                      <p className="title is-4">Room {room.roomNumber}</p>
                      <p className="subtitle is-6">{room.roomType}</p>
                      <p>Description: {room.description}</p>
                      <p>Max People: {room.maxPeople}</p>
                      <p>Rate: ${room.rate}/night</p>
                      <p>
                        Final Rate: ${room.finalRate}/night{' '}
                        <span className="has-text-danger">{room.discount}% off</span>
                      </p>
                      <Link to="/frontdesk_room_walk_in/room_booking"className="button is-blue is-fullwidth">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        ))}
        </div>
          
      </section>
    );
  }
  
  export default RoomWalkIn;
