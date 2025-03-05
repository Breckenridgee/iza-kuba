import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src="images/car_1.jpg" alt={`carousel 1`} className="carousel-img" loading="lazy" />
        <img src="images/car_2.jpg" alt={`carousel 2`} className="carousel-img" loading="lazy" />
        <img src="images/car_3.jpg" alt={`carousel 3`} className="carousel-img" loading="lazy" style={{ objectPosition: 'center' }} />
        <img src="images/car_4.jpg" alt={`carousel 4`} className="carousel-img" loading="lazy" />
        <div className='carousel-mask' />
      </div>
      <div className='text-container'>
        <div className="carousel-text">
          <h1>Izabela & Jakub</h1>
          <p>SAVE THE DATE</p>
          <div className='carousel-line' />
          <h2>Środa, 18 czerwca 2025</h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
