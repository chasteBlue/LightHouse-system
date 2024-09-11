import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './components_f.css';
import '../App.css';
import { Link } from 'react-router-dom';

import RoomReservationCalendar from './Room_Reservation_Calendar.jsx';

const RoomReservation = () => {

return (
    <section className='section-p1'> 
        <header>
            <div style={{backgroundColor:'white', borderRadius:'10px 10px'}}>
                <div className='column'>
                    <h1 className='subtitle'>
                        <strong>Room Reservations</strong>
                    </h1>
                </div>
                <div class="checkdate">              
                    <div class="input-container">
                        <p><strong>Date</strong></p>
                        <input type="date" id="event-date" name="event-date" />
                    </div>
                    <div class="input-container">
                        <p><strong>Guest</strong></p>
                        <input type="text" id="name" name="name" />
                    </div>
                </div>
                <div className="buttons is-centered ">
                    <a className="button is-blue search" href='#search'>SEARCH</a>
                </div>
          </div>
          <hr/>
        </header>
        <div>
            <RoomReservationCalendar/>
        </div>   

    </section>


    );
};

export default RoomReservation;
