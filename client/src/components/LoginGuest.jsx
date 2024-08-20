import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

function LoginGuest() {
    return (
        <section>
            <div className="login-page">
                <div className="background-image">                    
                        <div className="login-container">
                            <form>
                            <div className="container-white">
                                <h1 className='login-title'><strong>Login</strong></h1>
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

                                <div className="field">
                                    <label >Don’t have an account? <Link to="/register">Sign Up</Link></label>
                                </div>

                            </div>
                            
                            <div className="buttons is-centered ">
                                <button className="button is-blue search" type="submit">LOGIN
                                </button>
                            </div>
                            </form>
                        </div>   
                </div>
            </div>
        </section>
    );
  }
  
  export default LoginGuest;