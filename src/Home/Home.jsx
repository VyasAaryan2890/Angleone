import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Home.css';
import back from '../assets/back.jfif';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get the userName and OTP data passed from Login.jsx
    const { userName, mobileNumber, otp: initialOtp } = location.state || { userName: "", mobileNumber: "", otp: "000000" };

    const [otp, setOtp] = useState(new Array(6).fill("")); // State for OTP input fields
    const [timer, setTimer] = useState(30); // Timer for OTP expiration
    const [currentOtp, setCurrentOtp] = useState(initialOtp); // OTP to compare with

    console.log("Received OTP in Home.jsx:", currentOtp); // Log the received OTP
    console.log("User Name:", userName); // Log the userName for debugging

    const handleBackClick = () => {
        navigate('/login'); // Navigate back to login page
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move focus to the next input when user enters a digit
        if (element.value !== "" && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = () => {
        const enteredOtp = otp.join(""); // Join the OTP input into a string
        console.log("Entered OTP:", enteredOtp); // Log the OTP entered by the user

        if (enteredOtp === currentOtp) {
            alert("Login Successfully");
            navigate("/lock", { state: { userName } }); // If OTP is correct, navigate to Lock screen
        } else {
            alert("Invalid OTP"); // If OTP is incorrect, show an error
        }
    };

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(interval); // Cleanup interval when component unmounts
        } else {
            alert("OTP has expired!");
            // Reset OTP fields when the timer expires
            setOtp(new Array(6).fill("")); 
            setTimer(30); // Reset the timer
        }
    }, [timer]);

    return (
        <div>
            <div className="otp">
                <img src={back} alt="Back" onClick={handleBackClick} />
            </div>

            <div className="form">
                <div className="h3p">
                    <h2>Verify Mobile Number</h2>
                    <p>We have sent OTP to your mobile number and registered email address</p>
                </div>
                <div className="mobile">
                    <p>Mobile Number</p>
                    <p>+91 {mobileNumber}</p>
                </div>

                <div>
                    <div className="details-flex">
                        <p>Enter OTP</p>
                        <p>Resend In: <span>{`00:${timer.toString().padStart(2, '0')}`}</span></p>
                    </div>
                    <div className="password" style={{ display: "flex", gap: "10px" }}>
                        {otp.map((digit, index) => (
                            <input
                                className="input"
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => {
                                    if (e.key === "Backspace" && otp[index] === "") {
                                        if (e.target.previousSibling) e.target.previousSibling.focus();
                                    }
                                }}
                                style={{
                                    width: "53px",
                                    height: "50px",
                                    textAlign: "center",
                                    fontSize: "18px",
                                }}
                            />
                        ))}
                    </div>
                </div>
                <button onClick={handleSubmit} style={{ marginTop: "285px" }}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Home;
