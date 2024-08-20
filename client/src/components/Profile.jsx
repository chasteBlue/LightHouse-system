import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

const Profile = () => {  

const [guestPhoto, setGuestPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGuestPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
    return (
        <section className='section-m1'>
            <div className="contact-hero-image">
                <div className="text-content-title">
                    <h1 className='title'>Profile</h1>
                </div>
            </div>
            
            <div className="section">
            <div className="container">
                <div className="columns">
                {/* Left Column - Guest Information */}
                <div className="column is-7">
                    <h2 className='title'>Guest Information</h2>
                    <div className="auth_space">
                        <div className="field">
                            <label className="label">First Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Enter first name" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Last Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Enter last name" />
                            </div>
                        </div>    
                    </div>
                    
                    <div className="auth_space">
                        <div className="field">
                            <label className="label">Birthdate</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Address</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Enter address" />
                            </div>
                        </div>
                    </div>

                    <div className="auth_space">
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Country</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Enter country" />
                            </div>
                        </div>    
                    </div>

                    <div className="auth_space">
                    <div className="field">
                        <label className="label">Phone Number</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter phone number" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                            <div className="select select-gender">
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

                {/* Right Column - Guest Photo and Preview */}
                <div className="column is-4 is-offset-1">
                    <h2 className="title">Guest Photo</h2> 
                    {guestPhoto && (
                    <div className="field">
                        <figure className="image is-128x128">
                        <img src={guestPhoto} alt="Guest Preview" />
                        </figure>
                    </div>
                    )}
                    <div className="field">
                    <div className="control">
                        <input className="input" type="file" accept="image/*" onChange={handlePhotoChange} />
                    </div>
                    </div>
                   
                </div>
                </div>
                {/* Save Changes Button */}
                <div className="columns">
                    <div className="column is-12 is-left">
                        <button className="button is-blue">Save Changes</button>
                    </div>
                </div>
                {/* Separator Line */}
                <hr />
            </div>
            </div>

        </section>
    );
  }
  
  export default Profile;