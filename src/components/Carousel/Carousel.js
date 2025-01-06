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
          <h1>Izabela & Jakub</h1>
          <h2>POBIERAMY SIĘ!</h2>
          <p>______________________________</p>
          <h2>Środa, 18 czerwca 2025</h2>
        </div>
    </div>
  );
};

export default Carousel;
