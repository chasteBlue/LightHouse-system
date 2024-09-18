import React from 'react';
import 'bulma/css/bulma.min.css';

const AddTableReservation = ({ isOpen, toggleModal }) => {
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={toggleModal}></div>
            <div className="modal-card custom-modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Restaurant Table Booking Review</p>
                    <button className="delete" aria-label="close" onClick={toggleModal}></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        {/* Left Column */}
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
                        </div>

                        {/* Right Column */}
                        <div className="column is-half">
                        <div className="field">
                                <label className="subtitle">Table Reservation Information</label>
                            </div>
                            <div className="field">
                                <label className="label">Reservation Date:</label>
                            </div>
                            <div className="field">
                                <label className="label">Reservation Time:</label>
                            </div>
                            <div className="field">
                                <label className="label">Reserved Table:</label>
                            </div>
                            <div className="field">
                                <label className="label">Number of Guests:</label>
                            </div>
                            <div className="field">
                                <label className="label">Notes</label>
                                <textarea className="textarea" placeholder="Enter notes"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
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
                </section>

                <footer className="modal-card-foot is-flex is-justify-content-flex-end is-align-items-center">
                    <button className="button is-blue mr-2">Save</button>
                    <button className="button is-red" onClick={toggleModal}>Cancel</button>
                </footer>
            </div>
        </div>
    );
};

export default AddTableReservation;
