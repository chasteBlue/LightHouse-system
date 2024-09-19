import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import your global styles

const LoginGuest = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/loginGuest', {
                guest_email: email,
                guest_password: password
            });

            if (response.status === 200) {
                setMessage('Login successful!');
                // You can save the token to localStorage or state management library
                localStorage.setItem('token', response.data.token);
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage('Failed to login. Please check your email and password.');
        }
    };

    return (
        <div className="login-container">
            <h1>Login as a Guest</h1>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-btn">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginGuest;
