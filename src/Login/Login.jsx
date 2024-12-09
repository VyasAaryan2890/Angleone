import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Login.css';
import back from '../assets/back.jfif'; // Your back image

const Login = () => {
    const navigate = useNavigate(); // Initialize navigate function

    // Function to handle the back button click
    const handleBackClick = () => {
        navigate('/'); // Navigate to the Start page (assumed to be the home page)
    };

    return (
        <div>
            <div className="login">
                {/* Back image with onClick handler */}
                <img src={back} alt="Back" onClick={handleBackClick}  // Handle click to navigate to Start page
                    style={{ cursor: 'pointer' }}  // Change cursor to pointer to indicate it's clickable
                />
            </div>

            <div className='form'>
                <h3>Enter your mobile number</h3>
                <div className='div'>
                    <p className='mobile'>Mobile Number</p>
                    <div>
                        <form>
                            <div>
                                <p>+91</p>
                                <input type="number" required />
                            </div>
                            <button type='submit'>Next</button>
                            <p>Cannot access? <span>Login via client id</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
