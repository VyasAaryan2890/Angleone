import React, { useState, useEffect } from 'react';
import './Start.css';
import logo from '../Assets/logo.svg';
import twoCrore from '../Assets/twoCrorelogo.svg';
import slide1 from '../Assets/slide1.svg';
import slide2 from '../Assets/slide2.svg';
import slide3 from '../Assets/slide3.svg';

const Start = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [slide1, slide2, slide3];
  const headings = [
    "100% Paperless KYC",
    "Explore Mutual Fund",
    "We Provide Best Services"
  ];

  // Automatic slide change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // Manual dot click to change slide
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="Navbar">
        <img src={logo} alt="Logo" width="240px" />
        <img src={twoCrore} alt="Two Crore Logo" width="90px" />
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="img">
          {/* Current Slide */}
          <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

          {/* Dots */}
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

          {/* Dynamic Headings */}
          <h1>{headings[currentIndex]}</h1>
          <div>
            <p>Invest & trade in Mutual Funds, Stocks, IPOs,</p>
            <p>ETFs, F&O, SGBs, Commodities & Currencies</p>
          </div>
        </div>

        <div className='btn'>
            <button className='btn1'>LOGIN</button>
            <button className='btn2'>SIGNUP</button>
        </div>
      </div>
    </div>
  );
};

export default Start;
