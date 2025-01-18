import React from 'react';
import './Carousel.css';
import img2 from '../../assets/photos/Us/032-I&K-4N6A6131.jpg';
import img1 from '../../assets/photos/Us/147-I&K-4N6A7463.jpg';
import img3 from '../../assets/photos/Us/091-I&K-4N6A6730.jpg';
import img4 from '../../assets/photos/Us/159-I&K-4N6A7640.jpg';
const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
            <img src={img1} alt={`carousel 1`} className="carousel-img" loading="lazy"/>
            <img src={img2} alt={`carousel 2`} className="carousel-img" loading="lazy"/>
            <img src={img3} alt={`carousel 3`} className="carousel-img" loading="lazy" style={{objectPosition: 'center'}}/>
            <img src={img4} alt={`carousel 4`} className="carousel-img" loading="lazy"/>
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
