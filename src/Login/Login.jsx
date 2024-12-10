import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Login.css';
import back from '../assets/back.jfif'; // Your back image

const Login = () => {
    const navigate = useNavigate(); // Initialize navigate function
    const [mobileNumber, setMobileNumber] = useState(''); // State for mobile number

    // Function to handle the back button click
    const handleBackClick = () => {
        navigate('/'); // Navigate to the Start page (assumed to be the home page)
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission

        // Check if the entered mobile number matches the required number
        if (mobileNumber === '9409251163') {
            alert('Your OTP is 524589');
            navigate('/home'); // Navigate to the Start page
        } else {
            alert('Please try again!');
        }
    };

    return (
        <div>
            <div className="login">
                {/* Back image with onClick handler */}
                <img
                    src={back}
                    alt="Back"
                    onClick={handleBackClick} // Handle click to navigate to Start page
                    style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate it's clickable
                />
            </div>

            <div className="form">
                <h3>Enter your mobile number</h3>
                <div className="div">
                    <p className="mobile">Mobile Number</p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <p>+91</p>
                                {/* Controlled input for mobile number */}
                                <input
                                    type="number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Next</button>
                            <p>
                                Cannot access? <span>Login via client id</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
