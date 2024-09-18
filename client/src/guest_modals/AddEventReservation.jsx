import React from 'react';
import 'bulma/css/bulma.min.css';

const AddEventReservation = ({ isOpen, toggleModal }) => {
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={toggleModal}></div>
            <div className="modal-card custom-modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Event Booking Review</p>
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

                            <div className="field">
                                <label className="subtitle">Event Reservation Information</label>
                            </div>
                            <div className="field">
                                <label className="label">Reservation Date:</label>                            </div>
                            <div className="field">
                                <label className="label">Reservation Time:</label>
                                <div className="columns">
                                    <div className="column is-half">
                                        <label className="label">Start Time</label>
                                        <input className="input" type="time" />
                                    </div>
                                    <div className="column is-half">
                                        <label className="label">End Time</label>
                                        <input className="input" type="time" />
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Event Type:</label>
                                <div className="control">
                                    <div className="select">
                                        <select>
                                            <option>Select event type</option>
                                            <option>Wedding</option>
                                            <option>Conference</option>
                                            <option>Birthday</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Event Name:</label>
                                <input className='input' type='text' placeholder='Enter the name of the event' />
                            </div>
                            <div className="field">
                                <label className="label">Number of Guests:</label>
                                <input className="input" type="number" placeholder="Enter number of guests" />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="column is-half">
                            <div className="field">
                                <label className="subtitle">Event Food and Venue Reservation</label>
                            </div>
                            <div className="field">
                                <label className="label">I. Venue:</label>
                                <div className='m-3'>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="venue" value="Venue A" className='mr-2'/>
                                            Venue A
                                        </label>
                                        <p className="is-size-7">A spacious hall for up to 500 guests.</p>
                                    </div>

                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="venue" value="Venue B" className='mr-2'/>
                                            Venue B
                                        </label>
                                        <p className="is-size-7">An intimate setting for smaller gatherings of up to 100 guests.</p>
                                    </div>

                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="venue" value="Venue C" className='mr-2'/>
                                            Venue C
                                        </label>
                                        <p className="is-size-7">An outdoor garden space, perfect for open-air events.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">II. Food Package:</label>
                                <div className='m-3'>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="foodPackage" value="Option 1" className='mr-2'/>
                                            Option 1
                                        </label>
                                        <p className="is-size-7">Includes a three-course meal with beverages.</p>
                                    </div>

                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="foodPackage" value="Option 2" className='mr-2'/>
                                            Option 2
                                        </label>
                                        <p className="is-size-7">Includes a buffet-style meal with dessert and beverages.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">III. Food Choices:</label>
                                <div className='m-3'>
                                    <div className="field">
                                        <label className="label">Main Food</label>
                                            <div className="control">
                                                {/* Main Food 1 */}
                                                <div className="select m-1 is-fullwidth">
                                                    <select name="mainFood1">
                                                        <option value="">Select Main Food 1</option>
                                                        <option value="Grilled Chicken">Grilled Chicken</option>
                                                        <option value="Beef Steak">Beef Steak</option>
                                                        <option value="Vegetarian Pasta">Vegetarian Pasta</option>
                                                    </select>
                                                </div> 
                                            </div>

                                            <div className='control'>
                                            {/* Main Food 2 */}
                                            <div className="select m-1 is-fullwidth">
                                                <select name="mainFood2">
                                                    <option value="">Select Main Food 2</option>
                                                    <option value="Salmon Fillet">Salmon Fillet</option>
                                                    <option value="Lamb Chops">Lamb Chops</option>
                                                    <option value="Tofu Stir-Fry">Tofu Stir-Fry</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">1 Pasta or Noodle</label>
                                            <div className="control">
                                                {/* Main Food 1 */}
                                                <div className="select m-1 is-fullwidth">
                                                    <select name="mainFood1">
                                                        <option value="">Select Main Food 1</option>
                                                        <option value="Grilled Chicken">Grilled Chicken</option>
                                                        <option value="Beef Steak">Beef Steak</option>
                                                        <option value="Vegetarian Pasta">Vegetarian Pasta</option>
                                                    </select>
                                                </div> 
                                            </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">1 Dessert</label>
                                            <div className="control">
                                                {/* Main Food 1 */}
                                                <div className="select m-1 is-fullwidth">
                                                    <select name="mainFood1">
                                                        <option value="">Select Main Food 1</option>
                                                        <option value="Grilled Chicken">Grilled Chicken</option>
                                                        <option value="Beef Steak">Beef Steak</option>
                                                        <option value="Vegetarian Pasta">Vegetarian Pasta</option>
                                                    </select>
                                                </div> 
                                            </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">1 Drink</label>
                                            <div className="control">
                                                {/* Main Food 1 */}
                                                <div className="select m-1 is-fullwidth">
                                                    <select name="mainFood1">
                                                        <option value="">Select Main Food 1</option>
                                                        <option value="Grilled Chicken">Grilled Chicken</option>
                                                        <option value="Beef Steak">Beef Steak</option>
                                                        <option value="Vegetarian Pasta">Vegetarian Pasta</option>
                                                    </select>
                                                </div> 
                                            </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Rice - available in all food options</label>
                                    </div>


                                </div>
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

export default AddEventReservation;
