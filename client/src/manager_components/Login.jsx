import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Correct named import
import 'bulma/css/bulma.min.css';
import SuccessMsg from '../messages/successMsg';
import ErrorMsg from '../messages/errorMsg';
import axios from 'axios';
import '../App.css';

function LoginStaff() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); 
    const [isRedirecting, setIsRedirecting] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3001/api/loginStaff', {
                staff_username: username,
                staff_password: password
            });
    
            if (response.status === 200) {
                setMessage('Login successful!');
                setIsSuccess(true);
                const token = response.data.token;
                localStorage.setItem('token', token);

                // Decode the token to get the staff_acc_role
                const decodedToken = jwtDecode(token); // Correct usage
                const staffRole = decodedToken.staff_acc_role;

                setTimeout(() => {
                    setIsRedirecting(true);
                }, 1000);

                // Redirect to different pages based on the staff role
                setTimeout(() => {
                    setMessage('');

                    switch (staffRole) {
                        case 'manager':
                            navigate('/manager_home');
                            break;
                        case 'frontDesk':
                            navigate('/frontdesk_home');
                            break;
                        case 'restaurantDesk':
                            navigate('/restaurant_home');
                            break;
                        case 'barDesk':
                            navigate('/bar_home');
                            break;
                        default:
                            navigate('/'); // Default redirection for any other role
                            break;
                    }
                }, 3000);
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage('Failed to login. Please check your username and password.');
            setIsSuccess(false);
        }
    };
    
    return (
        <section>
            <div className="login-page">
                <div className="background-image">
                    <div className="login-container">
                        <form onSubmit={handleLogin}>
                            <div className="container-white">
                                <h1 className='login-title'><strong>Login Staff</strong></h1>
                                <div className="field">
                                    <label className="label" htmlFor="username">Username:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Enter your username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label" htmlFor="password">Password:</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="buttons is-centered">
                                <button className="button is-blue search" type="submit" disabled={isRedirecting}>
                                    {isRedirecting ? 'Redirecting...' : 'LOGIN'}
                                </button>
                            </div>

                            {message && isSuccess && <SuccessMsg message={message} />}
                            {message && !isSuccess && <ErrorMsg message={message} />}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginStaff;
