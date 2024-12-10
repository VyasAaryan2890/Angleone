import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Lock.css';
import add3 from '../assets/add2.png';

const Lock = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { userName = "Guest User" } = location.state || {}; // Fallback for userName

    const [pin, setPin] = useState(["", "", "", ""]);
    const [savedPin, setSavedPin] = useState("");

    useEffect(() => {
        const storedPin = localStorage.getItem("userPin");
        if (storedPin) {
            setSavedPin(storedPin);
        }
    }, []);

    const handlePinInput = (value) => {
        const updatedPin = [...pin];
        const firstEmptyIndex = updatedPin.findIndex((digit) => digit === "");
        if (value === "X") {
            updatedPin[Math.max(firstEmptyIndex - 1, 0)] = ""; // Clear the last digit
        } else if (firstEmptyIndex !== -1) {
            updatedPin[firstEmptyIndex] = value; // Fill the next empty slot
        }
        setPin(updatedPin);
    };

    const handleSubmit = () => {
        const enteredPinString = pin.join("");
        if (!savedPin) {
            localStorage.setItem("userPin", enteredPinString);
            alert("PIN saved successfully!");
            setSavedPin(enteredPinString);
        } else if (enteredPinString === savedPin) {
            alert("Unlocked successfully!");
            navigate("/home1");
        } else {
            alert("Invalid PIN!");
        }
    };

    const getInitials = (name) => {
        if (!name) return ""; // Handle undefined or empty name
        const nameParts = name.split(" ");
        return nameParts.length > 1 
            ? nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase() 
            : nameParts[0][0].toUpperCase();
    };

    return (
        <div>
            <div className="lockNav">
                <div className="lockItems">
                    <img src={add3} alt="add" />
                    <h2>SWITCH ACCOUNT</h2>
                </div>
            </div>

            <div className="userData">
                <div className="user">
                    <div>
                        <p>{getInitials(userName)}</p>
                    </div>
                    <h3>{userName}</h3>
                </div>

                <div className="pin">
                    <p>Unlock using PIN</p>
                    <div className="circle">
                        <div className="dot">{pin[0]}</div>
                        <div className="dot">{pin[1]}</div>
                        <div className="dot">{pin[2]}</div>
                        <div className="dot">{pin[3]}</div>
                    </div>
                    <p className="forgot">Forgot PIN?</p>
                </div>

                <div className="number">
                    <div>
                        {[1, 2, 3].map((num) => (
                            <div className="box" key={num} onClick={() => handlePinInput(num.toString())}>
                                {num}
                            </div>
                        ))}
                    </div>
                    <div>
                        {[4, 5, 6].map((num) => (
                            <div className="box" key={num} onClick={() => handlePinInput(num.toString())}>
                                {num}
                            </div>
                        ))}
                    </div>
                    <div>
                        {[7, 8, 9].map((num) => (
                            <div className="box" key={num} onClick={() => handlePinInput(num.toString())}>
                                {num}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="box" onClick={() => handlePinInput("0")}>0</div>
                        <div className="box" onClick={() => handlePinInput("X")}>X</div>
                        <div className="box" onClick={handleSubmit}>Ok</div>
                    </div>
                </div>
            </div>

            {/* <button onClick={handleSubmit}>Submit PIN</button> */}
        </div>
    );
};

export default Lock;
