import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5'; // Import the back icon
import '../App.css';

const ReservationsRoomDetails = () => {
  return (
    <section className='section-m1'>
      <div className='box section-p1 m-2'>
        <div className="field mb-4">
          <Link to="/reservations" className="button is-blue">
            <IoArrowBackOutline className='mr-2' />
            Back
          </Link>
        </div>
        <div className="columns is-multiline">
          <div className="column is-half">
            <div className="field">
              <label className="subtitle">Guest Information</label>
            </div>
            <div className='m-2'>
                <div className="field">
                <label className="label">Name:</label>
                </div>
                <div className="field">
                <label className="label">Address:</label>
                </div>
                <div className="field">
                <label className="label">Country:</label>
                </div>
                <div className="field">
                <label className="label">Contact Number:</label>
                </div>
                <div className="field">
                <label className="label">Gender:</label>
                </div>
            </div>

            <div className="field">
              <label className="subtitle">Guest Company Details</label>
            </div>
            <div></div>
            <div className="field">
              <label className="label">Company Name:</label>
            </div>

            <div className="field">
              <label className="label">Accompanying Guest/s if any:</label>
            </div>
          </div>

          <div className="column is-half">
            <div className="field">
              <label className="subtitle">Booking Summary</label>
            </div>
            <div className="field">
              <label className="label">Check-In Date:</label>
            </div>
            <div className="field">
              <label className="label">Check-Out Date:</label>
            </div>
            <div className="field">
              <label className="label">Rooms</label>
            </div>
            <div className="field">
              <label className="label">Number of Guests:</label>
            </div>

            <div className="field">
              <label className="subtitle">Added Amenities</label>
            </div>

            <div className="field">
              <label className="label">Breakfast Option</label>
            </div>

            <div className="field">
              <label className="label">Which bed setup would you prefer?</label>
            </div>

            <div className="field">
              <label className="label">Notes:</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationsRoomDetails;
