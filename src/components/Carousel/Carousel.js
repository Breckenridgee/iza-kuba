import React from 'react';
import './Carousel.css';
import img3 from '../../assets/photos/Us/IMG_5276.png';
import img1 from '../../assets/photos/Us/IMG_2249.png';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
            <img src={img1} alt={`carousel 1`} className="carousel-img" />
            <img src={img3} alt={`carousel 3`} className="carousel-img" />
          <div className='carousel-mask'/>
      </div>
      <div className='text-container'>
      <div className="carousel-text">
          <h1>Izabela & Jakub</h1>
          <p>SAVE THE DATE</p>
          <div className='carousel-line'/>
          <h2>Środa, 18 czerwca 2025</h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
