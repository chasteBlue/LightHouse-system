import React from 'react';
import '../App.css';

const ReservationsEvent= () => {
    return (
        <div>
            <h2 className="title is-4 has-text-white">Event Reservation</h2>

            <div className="columns">
                {/* Ongoing Reservations */}
                <div className="column">
                    <div className="box">
                        <h3 className="title is-5">Ongoing Reservations</h3>
                        <p>Details of ongoing table reservations go here...</p>
                        {/* Add ongoing reservation data here */}
                    </div>
                </div>

                {/* Reservation History */}
                <div className="column">
                    <div className="box">
                        <h3 className="title is-5">Reservation History</h3>
                        <p>Details of past table reservations go here...</p>
                        {/* Add reservation history data here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationsEvent;
