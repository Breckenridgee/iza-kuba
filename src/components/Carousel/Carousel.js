import React from 'react';
import './Carousel.css';

const Carousel = ({images}) => {

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Duplicate images for infinite scrolling */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="carousel-image">
            <img src={src} alt={`carousel ${index}`} className="carousel-img" />
          </div>
        ))}
          <div className='carousel-mask'/>
      </div>
      <div className="carousel-text">
          <h1>Będzie ślub!</h1>
          <p>18/06/2025</p>
        </div>
    </div>
  );
};

export default Carousel;
