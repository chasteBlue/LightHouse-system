import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';
import axios from 'axios'; // Make sure axios is imported for making API calls

function RegisterGuest() {
    // State to manage guest data
    const [guest, setGuest] = useState({
        guest_fname: '',
        guest_lname: '',
        guest_birthdate: '',
        guest_address: '',
        guest_email: '',
        guest_country: '',
        guest_phone_no: '',
        guest_gender: '',
        guest_photo: '',
        guest_password: '' 
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGuest({ ...guest, [name]: value });
    };

    // Check if email is a valid Gmail address
    const isValidGmail = (email) => {
        return email.endsWith('@gmail.com');
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Guest data being sent:', guest); // Log the guest data
    
        try {
            const response = await axios.post('http://localhost:3001/api/registerGuest', guest);
    
            if (response.status === 201) {
                alert('Guest registered successfully!');
            }
        } catch (error) {
            console.error('Error registering guest:', error);
            alert('Failed to register guest');
        }
    };
    

    return (
        <section>
            <div className="sign-up-page">
                <div className="background-image">                   
                    <div className="login-container">
                        <form onSubmit={handleSubmit}>
                            <div className="container-white">
                                <h1 className='login-title'><strong>Sign-up</strong></h1>
                                <div className='auth_space'>
                                    <div className="field">
                                        <label className="label" htmlFor="guest_fname">First name:</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                id="guest_fname"
                                                name="guest_fname"
                                                placeholder="Enter your first name"
                                                value={guest.guest_fname}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label" htmlFor="guest_lname">Last name:</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                id="guest_lname"
                                                name="guest_lname"
                                                placeholder="Enter your last name"
                                                value={guest.guest_lname}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='auth_space'>
                                    <div className="field">
                                        <label className="label">Gender:</label>
                                        <div className="control">
                                            <div className="select is-fullwidth">
                                                <select name="guest_gender" value={guest.guest_gender} onChange={handleChange} required>
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Non-Binary">Non-Binary</option>
                                                    <option value="Other">Other</option>
                                                    <option value="Prefer Not To Say">Prefer Not To Say</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label" htmlFor="guest_birthdate">Birthdate:</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="date"
                                                id="guest_birthdate"
                                                name="guest_birthdate"
                                                placeholder="Enter your birth date"
                                                value={guest.guest_birthdate}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='auth_space'>
                                    <div className="field">
                                        <label className="label" htmlFor="guest_address">Address:</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                id="guest_address"
                                                name="guest_address"
                                                placeholder="Enter your address"
                                                value={guest.guest_address}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label" htmlFor="guest_country">Country:</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                id="guest_country"
                                                name="guest_country"
                                                placeholder="Enter your country"
                                                value={guest.guest_country}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='auth_space'>
                                    <div className="field">
                                        <label className="label" htmlFor="guest_phone_no">Contact Number:</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                id="guest_phone_no"
                                                name="guest_phone_no"
                                                placeholder="Enter your contact number"
                                                value={guest.guest_phone_no}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label" htmlFor="guest_email">Email:</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="email"
                                                id="guest_email"
                                                name="guest_email"
                                                placeholder="Enter your email"
                                                value={guest.guest_email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="auth_space">
                                    <div className="field">
                                        <label className="label" htmlFor="guest_password">Password:</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="password"
                                                id="guest_password"
                                                name="guest_password"
                                                placeholder="Enter your password"
                                                value={guest.guest_password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <label>Already have an account? <Link to="/login">Log in</Link></label>
                                </div>
                            </div>

                            <div className="buttons is-centered">
                                <button className="button is-blue search" type="submit">SIGN UP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterGuest;
