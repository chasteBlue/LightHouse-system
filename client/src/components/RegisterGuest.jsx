import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import your global styles

const RegisterGuest = () => {
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
        guest_password: '' // Added password field
    });

    // Handle input change
    const handleChange = (e) => {
        setGuest({ ...guest, [e.target.name]: e.target.value });
    };

    // Check if email is a valid Gmail address
    const isValidGmail = (email) => {
        return email.endsWith('@gmail.com');
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidGmail(guest.guest_email)) {
            alert("Please use a valid Gmail address.");
            return;
        }

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
        <div className="register-container">
            <h1>Register as a Guest</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        name="guest_fname"
                        placeholder="First Name"
                        value={guest.guest_fname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        name="guest_lname"
                        placeholder="Last Name"
                        value={guest.guest_lname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Birthdate:</label>
                    <input
                        name="guest_birthdate"
                        type="date"
                        placeholder="Birthdate"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        name="guest_address"
                        placeholder="Address"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        name="guest_email"
                        type="email"
                        value={guest.guest_email}
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Country:</label>
                    <input
                        name="guest_country"
                        placeholder="Country"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        name="guest_phone_no"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input
                        name="guest_gender"
                        placeholder="Gender"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Photo URL:</label>
                    <input
                        name="guest_photo"
                        value={guest.guest_photo}
                        placeholder="Photo URL"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label> {/* Added password field */}
                    <input
                        name="guest_password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    );
};

export default RegisterGuest;
