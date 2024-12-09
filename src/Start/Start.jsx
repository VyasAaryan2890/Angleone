import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Start.css';
import logo from '../assets/logo.svg';
import twoCrore from '../assets/twoCrorelogo.svg';
import slide1 from '../assets/slide1.svg';
import slide2 from '../assets/slide2.svg';
import slide3 from '../assets/slide3.svg';

function Start() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // Initialize navigate function

    const slides = [slide1, slide2, slide3];
    const headings = [
        "100% Paperless KYC",
        "Explore Mutual Fund",
        "We Provide Best Services"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div>
            <div className="Navbar">
                <img src={logo} alt="Logo" width="240px" />
                <img src={twoCrore} alt="Two Crore Logo" width="90px" />
            </div>
            <div className="hero">
                <div className="img">
                    <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                    <div className="dot">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => handleDotClick(index)}
                                style={{
                                    cursor: 'pointer',
                                    height: '12px',
                                    width: '12px',
                                    margin: '0 5px',
                                    backgroundColor: currentIndex === index ? 'blue' : 'gray',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                }}
                            ></div>
                        ))}
                    </div>
                    <h1>{headings[currentIndex]}</h1>
                    <div>
                        <p>Invest & trade in Mutual Funds, Stocks, IPOs,</p>
                        <p>ETFs, F&O, SGBs, Commodities & Currencies</p>
                    </div>
                </div>
                <div className="btn">
                    <button
                        className="btn1"
                        onClick={() => navigate('/login')} // Use navigate here
                    >
                        LOGIN
                    </button>
                    <button className="btn2">SIGNUP</button>
                </div>
            </div>
        </div>
    );
}

export default Start;
