import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import back from '../assets/back.jfif';

const Login = () => {
    const navigate = useNavigate();
    const [mobileNumber, setMobileNumber] = useState('');
    const [userName, setUserName] = useState('');

    // Function to generate a 6-digit OTP
    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    };

    // Navigate back to the home page
    const handleBackClick = () => {
        navigate('/');
    };

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the mobile number
        if (/^\d{10}$/.test(mobileNumber)) {
            const otp = generateOtp(); // Generate OTP
            alert(`Your OTP is: ${otp}`); // For testing, show OTP in an alert (replace with SMS/email in production)

            // Pass userName to Lock.jsx
            navigate('/home', { state: { userName,mobileNumber,otp} });
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
                <h3>Enter your mobile number</h3>
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
                            <p style={{ marginTop: "20px" }}>Enter Name: </p>
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
