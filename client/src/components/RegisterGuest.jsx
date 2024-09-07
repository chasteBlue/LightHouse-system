import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

function RegisterGuest() {
    const [formData, setFormData] = useState({
        guest_id: '',
        fname: '',
        lname: '',
        gender: '',
        bdate: '',
        address: '',
        country: '',
        contactNumber: '',
        email: '',
        date_created: '',
        photo: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/registerGuest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert('Guest registered successfully!');
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred while registering.');
        }
    };

    return (
        <section>
            <div className="sign-up-page">
                <div className="background-image">
                    <div className="login-container">
                        <form onSubmit={handleSubmit}>
                            <div className="container-white">
                                <h1 className="login-title"><strong>Sign-up</strong></h1>

                                {/* Guest ID (optional) */}
                                <div className="field">
                                    <label className="label" htmlFor="guest_id">Guest ID (Optional):</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            id="guest_id"
                                            name="guest_id"
                                            value={formData.guest_id}
                                            onChange={handleInputChange}
                                            placeholder="Guest ID (optional)"
                                        />
                                    </div>
                                </div>

                                {/* First Name */}
                                <div className="field">
                                    <label className="label" htmlFor="fname">First name:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            id="fname"
                                            name="fname"
                                            value={formData.fname}
                                            onChange={handleInputChange}
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="field">
                                    <label className="label" htmlFor="lname">Last name:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            id="lname"
                                            name="lname"
                                            value={formData.lname}
                                            onChange={handleInputChange}
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                {/* Gender */}
                                <div className="field">
                                    <label className="label" htmlFor="gender">Gender:</label>
                                    <div className="control">
                                        <div className="select">
                                            <select
                                                id="gender"
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Non-Binary">Non-Binary</option>
                                                <option value="Other">Other</option>
                                                <option value="Prefer Not To Say">Prefer Not To Say</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Birthdate */}
                                <div className="field">
                                    <label className="label" htmlFor="bdate">Birthdate:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="date"
                                            id="bdate"
                                            name="bdate"
                                            value={formData.bdate}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="field">
                                    <label className="label" htmlFor="address">Address:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            placeholder="Enter your address"
                                        />
                                    </div>
                                </div>

                                {/* Country */}
                                <div className="field">
                                    <label className="label" htmlFor="country">Country:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            placeholder="Enter your country"
                                        />
                                    </div>
                                </div>

                                {/* Contact Number */}
                                <div className="field">
                                    <label className="label" htmlFor="contactNumber">Contact Number:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            id="contactNumber"
                                            name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleInputChange}
                                            placeholder="Enter your contact number"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="field">
                                    <label className="label" htmlFor="email">Email:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                {/* Date Created */}
                                <div className="field">
                                    <label className="label" htmlFor="date_created">Date Created:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="date"
                                            id="date_created"
                                            name="date_created"
                                            value={formData.date_created}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Photo */}
                                <div className="field">
                                    <label className="label" htmlFor="photo">Photo (URL):</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            id="photo"
                                            name="photo"
                                            value={formData.photo}
                                            onChange={handleInputChange}
                                            placeholder="Enter the URL of your photo"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="buttons is-centered">
                                    <button className="button is-blue search" type="submit">
                                        SIGN UP
                                    </button>
                                </div>

                                <div className="field">
                                    <label>
                                        Already have an account? <Link to="/login">Log in</Link>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterGuest;
