import React from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import Breadcrumbs from '../layouts/Breadcrumbs';

const RoomReservation = () => {
  const breadcrumbItems = [
      { label: 'Home', link: '/' },
      { label: 'Room Search', link: '/room_search' },
      { label: 'Room Reservation' },
  ];
  
  return (
    <section className='section-m1'>
      <div className="contact-hero-image">
          <div className="text-content-title">
            <h1 className='title'>Room Booking Review</h1>
          </div>
      </div>

      <div>
          <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className='box section-p1 m-2'>
        <div className="columns">
          <div className="column is-half">
              <div className="field">
                  <label className="subtitle">Guest Information</label>
              </div>
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

            <div className="field">
              <label className="subtitle">Guest Company Details</label>
            </div>
            <div className="field">
                <label className="label" htmlFor="text">Company Name:</label>
                <div className="control">
                  <input className="input" type="text" id="company" name="company" placeholder="Enter your company name" />
                </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="text">Accompanying Guest/s if any:</label>
              <div className="control">
                <input className="input" type="text" id="guest1" name="guest1" placeholder="Guest 1" />
              </div>
              <div className="control">
                <input className="input" type="text" id="guest2" name="guest2" placeholder="Guest 2" />
              </div>
              <div className="control">
                <input className="input" type="text" id="guest3" name="guest3" placeholder="Guest 3" />
              </div>
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
                  <p className='ml-2'>hi</p>
              </div>
              <div className="field">
                  <label className="label">Number of Guests:</label>
                  <p className='ml-2'>hi</p>
              </div>

              <div className="field">
                  <label className="subtitle">Added Amenities</label>
              </div>

              <div className="field">
                  <label className="label" htmlFor="breakfastOption">Breakfast Option</label>
                  <div className="control">
                      <div className="radio-group is-flex is-justify-content-space-around">
                          <label className="radio">
                              <input
                                  type="radio"
                                  id="breakfastYes"
                                  name="breakfastOption"
                                  value="yes"
                              />
                              <span>With Breakfast</span>
                          </label>
                          <label className="radio">
                              <input
                                  type="radio"
                                  id="breakfastNo"
                                  name="breakfastOption"
                                  value="no"
                              />
                              <span>Without Breakfast</span>
                          </label>
                      </div>
                  </div>
              </div>

              <div className="field">
                  <label className="label">Which bed setup would you prefer?</label>
                  <div className="control is-full">
                      <div className="radio-group is-flex is-justify-content-space-around">
                          <label className="radio">
                              <input
                                  type="radio"
                                  name="bedSetup"
                                  value="twin"
                              />
                              <span>Twin Bed</span>
                          </label>
                          <label className="radio">
                              <input
                                  type="radio"
                                  name="bedSetup"
                                  value="large"
                              />
                              <span>Large Bed</span>
                          </label>
                      </div>
                  </div>
              </div>

              <div className="field">
                  <label className="label" htmlFor="room_notes">Notes:</label>
                  <div className="control">
                      <textarea
                          className="textarea"
                          id="room_notes"
                          name="room_notes"
                          placeholder="Notes"
                      />
                  </div>
              </div>
          </div>
        </div>

        <div className="field mt-5">
            <label className="label">
              Please review and agree to our Terms and Conditions, Data Policy, and Cancellation Policy before proceeding with your reservation. Your agreement is required to confirm your booking.
            </label>
            <div className="control">
                <label className="checkbox">
                    <input type="checkbox" /> I agree to the terms and conditions
                </label>
            </div>
        </div>

        <div className="field is-flex is-justify-content-flex-end">
            <button className="button is-blue">Book Now!</button>
        </div>
      </div>
    </section>
  );
};

export default RoomReservation;
