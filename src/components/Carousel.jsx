import React, { useState, useEffect } from 'react';
import './Carousel.css';
import {  useNavigate } from 'react-router-dom';

const images = [
  'https://i.ibb.co/qD2hCdv/428689853-798957418940865-5610077066328262445-n.jpg',
  'https://i.ibb.co/3YH8246/400680410-735457168624224-3030267287442665505-n.jpg',
  'https://i.ibb.co/vBZfLg0/464521366-961294372707168-4187208215173741491-n.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const handleScrollToAbout = () => {
    console.log("clicked")
    navigate('/#about');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel relative top-10 font-poppins">
      {images.map((image, index) => (
        <div
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
          <div className="carousel-overlay" />
          <div className="carousel-content space-y-5">
            <h1 className="font-bold text-4xl md:text-7xl">Young Entrepreneurs Society!</h1>
            <p className="mx-auto sm:w-1/2 lg:w-full">
              Legacy envisioned, and in motion. Are you ready for what awaits? <span className="font-semibold">Join. Experience... Achieve...</span>
            </p>
            <button onClick={handleScrollToAbout} className="carousel-button rounded text-sm hover:scale-110 duration-150">EXPLORE MORE</button>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
