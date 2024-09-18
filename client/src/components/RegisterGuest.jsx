import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

function RegisterGuest() {
    return (
        <section>
            <div className="sign-up-page">
                <div className="background-image">                   
                        <div className="login-container">
                            <form>
                            <div className="container-white">
                                <h1 className='login-title'><strong>Sign-up</strong></h1>
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
                                            <input className="input" type="text" id="lname" name="lname" placeholder="Enter your last name" />
                                        </div>
                                    </div>

                                    <div className="field">
                                    <label className="label" htmlFor="text">Country:</label>
                                        <div className="control">
                                            <input className="input" type="text" id="bdate" name="bdate" placeholder="Enter your birth date" />
                                        </div>
                                    </div>
                                </div>

                                <div className='auth_space'>
                                    <div className="field">
                                    <label className="label" htmlFor="text">Username:</label>
                                        <div className="control">
                                            <input className="input" type="text" id="lname" name="lname" placeholder="Enter your last name" />
                                        </div>
                                    </div>

                                    <div className="field">
                                    <label className="label" htmlFor="text">Contact Number:</label>
                                        <div className="control">
                                            <input className="input" type="text" id="bdate" name="bdate" placeholder="Enter your birth date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="auth_space">
                                    <div className="field">
                                    <label className="label" htmlFor="email">Email:</label>
                                        <div className="control">
                                            <input className="input" type="email" id="email" name="email" placeholder="Enter your email" />
                                        </div>
                                </div>

                                <div className="field">
                                    <label className="label" htmlFor="password">Password:</label>
                                        <div className="control">
                                            <input className="input" type="password" id="password" name="password" placeholder="Enter your password" />
                                        </div>
                                </div>
                                </div>

                                

                                

                                

                                

                                <div className="field">
                                    <label >Already have an account? <Link to="/login">Log in</Link></label>
                                </div>

                            </div>
                            
                            <div className="buttons is-centered ">
                                <button className="button is-blue search" type="submit">SIGN UP
                                </button>
                            </div>
                            </form>
                        </div>   
                </div>
            </div>
        </section>
    );
  }
  
  export default RegisterGuest;