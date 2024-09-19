import React from 'react';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import '../App.css';

const ReservationsRoom = () => {
  return (
    <div>
      <h2 className="title is-4 has-text-white">Room Reservation</h2>

      {/* Ongoing Reservations */}
      <div className="box">
        <h3 className="title is-5">Ongoing Reservations</h3>
        {/* Ongoing box */}
        <div className='box' style={{ border: "2px solid #0077B7" }}>
            <div className="columns is-mobile is-multiline">
                {/* Left Column: Reservation ID, Check-in, and Check-out */}
                <div className="column is-12-mobile is-6-tablet is-4-desktop">
                    <p><strong>Reservation ID:</strong> #12345</p>
                    <div className='m-2'>
                        <p><strong>Check-in:</strong> 2024-10-01</p>
                        <p><strong>Check-out:</strong> 2024-10-05</p>
                    </div>
                </div>

                {/* Middle Column: Total Cost */}
                <div className="column is-12-mobile is-6-tablet is-4-desktop">
                    <p className='subtitle is-5'><strong>Total Cost:</strong> $450.00</p>
                </div>

                {/* Right Column: Buttons */}
                <div className="column is-12-mobile is-12-tablet is-4-desktop">
                    <div className="buttons are-small is-flex is-flex-direction-column is-align-items-center">
                        <div className="is-flex is-left is-justify-content-space-between mb-2">
                            <label className='label'>Status: </label>
                            <button className="button is-success ml-1">Confirmed</button>
                        </div>
                        <Link to="/reservations/room_reservation_details" className="button is-blue is-fullwidth">
                            <IoEyeOutline className='mr-1' />
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>


      </div>

      {/* Reservation History */}
      <div className="box">
        <h3 className="title is-5">Reservation History</h3>
         {/* History box */}
         <div className='box' style={{ border: "2px solid #0077B7" }}>
            <div className="columns is-mobile is-multiline">
                {/* Left Column: Reservation ID, Check-in, and Check-out */}
                <div className="column is-12-mobile is-6-tablet is-4-desktop">
                    <p><strong>Reservation ID:</strong> #12345</p>
                    <div className='m-2'>
                        <p><strong>Check-in:</strong> 2024-10-01</p>
                        <p><strong>Check-out:</strong> 2024-10-05</p>
                    </div>
                </div>

                {/* Middle Column: Total Cost */}
                <div className="column is-12-mobile is-6-tablet is-4-desktop">
                    <p className='subtitle is-5'><strong>Total Cost:</strong> $450.00</p>
                </div>

                {/* Right Column: Buttons */}
                <div className="column is-12-mobile is-12-tablet is-4-desktop">
                    <div className="buttons are-small is-flex is-flex-direction-column is-align-items-center">
                        <div className="is-flex is-left is-justify-content-space-between mb-2">
                            <label className='label'>Status: </label>
                            <button className="button is-success ml-1">Confirmed</button>
                        </div>
                        <Link to="/reservations/room_reservation_details" className="button is-blue is-fullwidth">
                            <IoEyeOutline className='mr-1' />
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ReservationsRoom;
