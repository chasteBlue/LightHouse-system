import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './components_f.css';
import '../App.css';
import { Link } from 'react-router-dom';

const RoomBooking = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
    const [selectedBed, setSelectedBed] = useState('');

    const handleBedChange = (event) => {
      setSelectedBed(event.target.value);
    };
    const room = {
        imageUrl: 'https://via.placeholder.com/128', 
        roomNumber: '101',
        roomType: 'Deluxe Room',
        description: 'A spacious deluxe room with a beautiful sea view.',
        maxPeople: 3,
        rate: 150,
        finalRate: 120,
        discount: 20,
      };

return (
        <section className='section-p1'> 

        
        <div></div>
        <div className="container-white">
            <h1 className='subtitle'><strong>Room Booking</strong></h1>
            <div className="columns is-multiline">
                {/* First Column */}
                <div className="column is-one-half">
                    <div className='auth_space'>
                    <div className="field">
                        <label className="label" htmlFor="text">First name:</label>
                        <div className="control">
                        <input className="input" type="text" id="fname" name="fname" placeholder="Enter your first name" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="text">Last name:</label>
                        <div className="control">
                        <input className="input" type="text" id="lname" name="lname" placeholder="Enter your last name" />
                        </div>
                    </div>
                    </div>
                    <div className='auth_space'>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                        <div className="select">
                            <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-Binary</option>
                            <option>Other</option>
                            <option>Prefer Not To Say</option>
                            </select>
                        </div>
                        </div>
                    </div> 

                    <div className="field">
                        <label className="label" htmlFor="text">Birthdate:</label>
                        <div className="control">
                        <input className="input" type="date" id="bdate" name="bdate" placeholder="Enter your birth date" />
                        </div>
                    </div>
                    </div>

                    <div className='auth_space'>
                    <div className="field">
                        <label className="label" htmlFor="text">Address:</label>
                        <div className="control">
                        <input className="input" type="text" id="address" name="address" placeholder="Enter your address" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="text">Country:</label>
                        <div className="control">
                        <input className="input" type="text" id="country" name="country" placeholder="Enter your country" />
                        </div>
                    </div>
                    </div>

                    <div className='auth_space'>
                    <div className="field">
                        <label className="label" htmlFor="text">Email:</label>
                        <div className="control">
                        <input className="input" type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="text">Contact Number:</label>
                        <div className="control">
                        <input className="input" type="text" id="contact" name="contact" placeholder="Enter your contact number" />
                        </div>
                    </div>

                    </div>
                    <div className='auth_space'>
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

                </div>

                {/* Second Column */}
                <div className="column is-one-half">
                    <div className="card is-fullwidth" style={{ width: '100%', backgroundColor:'#036da7' }}>
                        <div className="card-content" style={{ padding: '0', width: '100%' }}>
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
                            
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='subititle'>Added Amenities</p>
                        <div className="field">
                            <label className="label" htmlFor="withBreakfast">With Breakfast</label>
                            <div className="control">
                                <div className="switch">
                                <input
                                    id="withBreakfast"
                                    type="checkbox"
                                    checked={checked}
                                    onChange={handleChange}
                                />
                                <span className="slider">Free breakfast provided</span>
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
                                checked={selectedBed === 'twin'}
                                onChange={handleBedChange}
                                />
                                <span>Twin Bed</span>
                            </label>
                            <label className="radio">
                                <input
                                type="radio"
                                name="bedSetup"
                                value="large"
                                checked={selectedBed === 'large'}
                                onChange={handleBedChange}
                                />
                                <span>Large Bed</span>
                            </label>
                            </div>
                        </div>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="textarea">Notes:</label>
                            <div className="control">
                            <textarea className="textarea" type="textarea" id="room_notes" name="room_notes" placeholder="Notes" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="modal-card-foot is-flex is-justify-content-flex-end is-align-items-center">
            <button className="button is-blue mr-2">Save</button>
            <Link to="/frontdesk_room_walk_in"><button className="button is-red">Cancel</button></Link>
            </footer>
        </div>
        </section>


    );
};

export default RoomBooking;
