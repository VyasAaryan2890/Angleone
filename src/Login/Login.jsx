import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import back from '../assets/back.jfif';

const Login = () => {
    const navigate = useNavigate();
    const [mobileNumber, setMobileNumber] = useState('');
    const [userName, setUserName] = useState(''); // State for storing the user's name

    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    };

    const handleBackClick = () => {
        navigate('/'); // Navigate back to the home page
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the mobile number
        if (/^\d{10}$/.test(mobileNumber)) {
            const otp = generateOtp(); // Generate OTP
            alert(`Your OTP is: ${otp}`); // Show OTP to the user
            // Navigate to Home.jsx with the mobile number, name, and OTP
            navigate('/home', { state: { mobileNumber, userName, initialOtp: otp } });
        } else {
            alert('Please enter a valid 10-digit mobile number!');
        }
    };

    return (
        <div>
            <div className="login">
                <img
                    src={back}
                    alt="Back"
                    onClick={handleBackClick}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <div className="form">
                <h3>Enter your details</h3>
                <div className="div">
                    <p className="mobile">Mobile Number</p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <p>+91</p>
                                <input
                                    type="number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <p style={{ marginTop: "40px" }}>Enter Name</p>
                            <div style={{ marginTop: "0px" }}>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Next</button>
                            <p>
                                Cannot access? <span>Login via client ID</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
