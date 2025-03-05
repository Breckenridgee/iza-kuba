import React from "react";
import "./AboutUs.css";
import Kuba from '../../assets/photos/Us/063-I&K-4N6A6433.jpg';

const AboutUs = () => {
  return (
    <div class="about-us-wrapper">
      <div class="about-us-container">
        <div class="square image-square square1">
          <img src={Kuba} alt="Kuba" className="image" loading="lazy" />
        </div>

        <div class="square text-square">
          <h1>Kuba</h1>
          <a class="phone-link" href="tel:+48661939745">
            <svg
              class="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M6.62 10.79a15.534 15.534 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.27c1.12.45 2.33.69 3.58.69.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.29 21 3 13.71 3 5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.24 2.46.69 3.58.14.35.06.76-.27 1.1l-2.2 2.21z"></path>
            </svg>
            <p>+48 661 939 745</p></a>
        </div>

        <div class="square text-square">
          <h1>Izabela</h1>
          <a class="phone-link" href="tel:+48602107091">
            <svg
              class="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M6.62 10.79a15.534 15.534 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.27c1.12.45 2.33.69 3.58.69.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.29 21 3 13.71 3 5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.24 2.46.69 3.58.14.35.06.76-.27 1.1l-2.2 2.21z"></path>
            </svg>
            <p>+48 602 107 091</p>
          </a>
        </div>

        <div class="square image-square square2">
          <img src="https://iza-kuba-wedding.com/static/media/101-I&K-4N6A6838.ff78c1ebda5f775ffec5.jpg" alt="Iza" className="image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
