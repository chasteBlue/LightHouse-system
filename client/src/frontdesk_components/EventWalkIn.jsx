import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './components_f.css';
import '../App.css';
import { Link } from 'react-router-dom';


function EventWalkIn() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleToggleForm = () => {
      setIsFormVisible(!isFormVisible);
    };
    const [eventTime, setEventTime] = useState('');

    const handleChange = (event) => {
      setEventTime(event.target.value);
    };
    const [eventType, setEventType] = useState('');

    const handleSelect = (event) => {
      setEventType(event.target.value);
    };
    const [checked, setChecked] = useState(false);

    const handleCheck= () => {
      setChecked(!checked);
    };
    const [venue, setVenue] = useState(false);

    const handleVenue= () => {
      setVenue(!venue);
    };
    return (
      <section className=' section-p1'>
        <header>
            <div style={{backgroundColor:'white', borderRadius:'10px 10px'}}>
                <div className='column'>
                    <h1 className='subtitle'>
                        <strong>Event Walk-In Reservation</strong>
                    </h1>
                </div>
                <div class="checkdate">              
                    <div class="input-container">
                        <p><strong>Check Available Event Date</strong></p>
                        <input type="date" id="event-date" name="event-date" />
                    </div>
                </div>
                <div className="buttons is-centered ">
                    <a className="button is-blue search" href='#search'>SEARCH</a>
                </div>
          </div>
          <hr/>
        </header>

        <div className="columns is-vcentered " >
        <div className="container">
            <div className="columns is-vcentered">
                {/* Button to toggle form visibility */}
                <div className="column">
                <button
                    className="button is-blue"
                    onClick={handleToggleForm}
                >
                    {isFormVisible ? 'Hide Form' : 'Add Event'}
                </button>
                </div>
            </div>

            {/* Conditionally render the form based on isFormVisible state */}
            {isFormVisible && (
                <div className="columns is-vcentered">
                    <div className="column">
                        <form className="box">
                        <h2 className="subtitle"><strong>Event Book</strong></h2>
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
                                        <div className="select is-fullwidth">
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

                                </div>

                                {/* Second Column */}
                                <div className="column is-one-half">
                                    <div>
                                        <div className="card is-fullwidth" style={{ width: '100%', backgroundColor:'#036da7' }}>
                                            <div className="card-content" style={{ padding: '0', width: '100%' }}>
                                                <div className="media" style={{ backgroundColor: 'white', margin: '0' }}>
                                                <div className="media-content" style={{ padding: '1rem' }}>
                                                    <p className="title is-4">Event Details</p>
                                                    <p className="subtitle is-6">Date: </p>
                                                    <div className='auth_space'>
                                                        <div className="field">
                                                            <label className="label" htmlFor="text">Event Name</label>
                                                            <div className="control">
                                                            <input className="input" type="text" id="address" name="address" placeholder="Enter your address" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="auth_space">
                                                        <div className="field">
                                                            <label className="label" htmlFor="event-time">Event Time:</label>
                                                            <div className="control">
                                                            <input  className="input" type="text"   id="event-time" name="event-time" placeholder="Enter time as 'Start Time - End Time' (e.g., '09:00 - 17:00')" value={eventTime}  onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='auth_space'>
                                                        <div className="field">
                                                            <label className="label" htmlFor="number">Number of Guest</label>
                                                            <div className="control">
                                                            <input className="input" type="number" id="noGuest" name="noGuest" placeholder="Enter the number of guest" min="10" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='auth_space'>
                                                        <div className="field ">
                                                            <label className="label" htmlFor="event-type">Event Type</label>
                                                            <div className="control">
                                                            <div className="select is-fullwidth">
                                                                <select
                                                                id="event-type"
                                                                name="event-type"
                                                                value={eventType}
                                                                onChange={handleSelect}
                                                                >
                                                                <option value="" disabled>Select event type</option>
                                                                <option value="wedding">Wedding</option>
                                                                <option value="birthday">Birthday</option>
                                                                <option value="gala">Gala</option>
                                                                <option value="seminar">Seminar</option>
                                                                <option value="fiesta">Fiesta</option>
                                                                <option value="anniversary">Anniversary</option>
                                                                <option value="valentines">Valentines</option>
                                                                <option value="christmas">Christmas</option>
                                                                </select>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    
                                                
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="column">
                                <div className="card is-fullwidth" style={{ width: '100%', backgroundColor:'#036da7' }}>
                                        <div className="card-content" style={{ padding: '0', width: '100%' }}>
                                            <div className="media" style={{ backgroundColor: 'white', margin: '0' }}>
                                            <div className="media-content" style={{ padding: '1rem' }}>
                                                <p className="title is-4">Event Package Details</p>
                                                <div className='columns is-multiline'>
                                                    <div className="column is-one-half">

                                                        <div className="field">
                                                            <label className="label" htmlFor="withBreakfast">I. Venue Only</label>
                                                            <div className="control">
                                                                <div className="switch">
                                                                <input
                                                                    id="withBreakfast"
                                                                    type="checkbox"
                                                                    checked={venue}
                                                                    onChange={handleVenue}
                                                                />
                                                                <span className="slider">Free breakfast provided</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="field">
                                                            <label className="label" htmlFor="package">II. Food Package</label>
                                                            <div className="control">
                                                                <div className="switch">
                                                                <input
                                                                    id="pakage"
                                                                    type="checkbox"
                                                                    checked={checked}
                                                                    onChange={handleCheck}
                                                                />
                                                                <span className="slider">Free breakfast provided</span>
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
                                                    <div className="column is-one-half">
                                                    <label className="label">III. Food Choices</label>
                                                        <div className="field"> 
                                                            <label className="sublabel">Main</label>                  
                                                            <div className="control" style={{margin:'5px'}}>
                                                                <div className="select is-fullwidth">
                                                                    <select>
                                                                    <option>Male</option>
                                                                    <option>Female</option>
                                                                    <option>Non-Binary</option>
                                                                    <option>Other</option>
                                                                    <option>Prefer Not To Say</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="control" style={{margin:'5px'}}>
                                                                <div className="select is-fullwidth">
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
                                                            <label className="sublabel">Pasta</label>                  
                                                            <div className="control" style={{margin:'5px'}}>
                                                                <div className="select is-fullwidth">
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
                                                            <label className="sublabel">Dessert</label>                  
                                                            <div className="control" style={{margin:'5px'}}>
                                                                <div className="select is-fullwidth">
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
                                                            <label className="sublabel">Drink</label>                  
                                                            <div className="control" style={{margin:'5px'}}>
                                                                <div className="select is-fullwidth">
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
                                                            <label className="sublabel">Rice</label>                  
                                                            <div className="control" style={{margin:'5px'}}>
                                                                <div className="select is-fullwidth">
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
                                                    
                                                    </div>
                                                </div>
                                                
    

                                                
                                            
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>


                        <footer className="modal-card-foot is-flex is-justify-content-flex-end is-align-items-center">
                        <button className="button is-blue mr-2">Save</button>
                        <Link to="/frontdesk_room_walk_in"><button className="button is-red">Cancel</button></Link>
                        </footer>
                        </form>
                    </div>
                    
                </div>
            )}
            </div>
        </div>
          
      </section>
    );
  }
  
  export default EventWalkIn;
