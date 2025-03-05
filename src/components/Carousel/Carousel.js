import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src="https://iza-kuba-wedding.com/static/media/147-I&K-4N6A7463_mobile.7c4c1a6913686c189711.jpg?w=600&auto=format" alt={`carousel 1`} className="carousel-img" loading="lazy" />
        <img src="https://iza-kuba-wedding.com/static/media/032-I&K-4N6A6131_mobile.97890beaa1cd4a9f5434.jpg?w=600&auto=format" alt={`carousel 2`} className="carousel-img" loading="lazy" />
        <img src="https://iza-kuba-wedding.com/static/media/091-I&K-4N6A6730_mobile.3617fa5dad5da33ea308.jpg?w=600&auto=format" alt={`carousel 3`} className="carousel-img" loading="lazy" style={{ objectPosition: 'center' }} />
        <img src="https://iza-kuba-wedding.com/static/media/159-I&K-4N6A7640_mobile.0eaeb4e7685e1665e3c2.jpg?w=600&auto=format" alt={`carousel 4`} className="carousel-img" loading="lazy" />
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
