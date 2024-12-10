import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Home.css';
import back from '../assets/back.jfif';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { mobileNumber, initialOtp } = location.state || { mobileNumber: "", initialOtp: "000000" };

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timer, setTimer] = useState(30);
    const [currentOtp, setCurrentOtp] = useState(initialOtp);
    const [expiredOtp, setExpiredOtp] = useState("");

    const handleBackClick = () => {
        navigate('/login');
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value !== "" && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp === currentOtp || enteredOtp === expiredOtp) {
            alert("Login Successfully");
            navigate("/home1");
        } else {
            alert("Invalid OTP");
        }
    };

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            const incrementedOtp = (parseInt(currentOtp) + 1).toString().padStart(6, '0');
            setExpiredOtp(currentOtp);
            setCurrentOtp(incrementedOtp);
            alert(`OTP has expired. Your new OTP is: ${incrementedOtp}`);
            setOtp(new Array(6).fill(""));
            setTimer(30);
        }
    }, [timer, currentOtp]);

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
