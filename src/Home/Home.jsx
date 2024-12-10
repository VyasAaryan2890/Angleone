import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import back from '../assets/back.jfif';

const Home = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30); // Initialize countdown timer
  const [currentOtp, setCurrentOtp] = useState("524589"); // Initialize OTP
  const [expiredOtp, setExpiredOtp] = useState(""); // Store the expired OTP
  const navigate = useNavigate();

  // Navigate back to login
  const navi = useNavigate();

  const handleBackClick = () => {
    navi('/login');
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move focus to the next box if the current box is filled
    if (element.value !== "" && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === currentOtp || enteredOtp === expiredOtp) {
      alert("Login Successfully");
      navigate("/home1"); // Navigate to Home1 page
    } else {
      alert("Invalid OTP");
    }
  };

  // Countdown Timer Logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup interval on unmount
    } else {
      // Timer expired
      const incrementedOtp = (parseInt(currentOtp) + 1).toString().padStart(6, '0'); // Increment OTP
      setExpiredOtp(currentOtp); // Save the expired OTP for validation
      setCurrentOtp(incrementedOtp); // Update to the new OTP
      alert(`OTP has expired. Your new OTP is: ${incrementedOtp}`); // Show the new OTP
      
      // Reset the timer and input boxes
      setOtp(new Array(6).fill(""));
      setTimer(30); // Restart the timer
    }
  }, [timer, currentOtp]);

  return (
    <div>
      <div className="otp">
        <img src={back} alt="" onClick={handleBackClick} />
      </div>

      <div className="form">
        <div className="h3p">
          <h2>Verify Mobile Number</h2>
          <p>We have sent OTP to your mobile number and registered email address</p>
        </div>
        <div className="mobile">
          <p>Mobile Number</p>
          <p>+91 9409251163</p>
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
