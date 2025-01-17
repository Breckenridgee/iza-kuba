import React from "react";
import "./Wedding.css";
import slub from '../../assets/photos/Us/slub.png';
import wesele from '../../assets/photos/Us/wesele.png';
import poprawiny from '../../assets/photos/Us/poprawiny.png';
import google from '../../assets/photos/Us/google.png';

const Wedding = () => {
  return (
    <div className="wedding-container">
      <h2>Kolejny krok zaplanowaliśmy w wyjątkowym miejscu..</h2>
      <div className="wedding-card-conteiner">
        <div className="wedding-card">
          <img alt="Ślub plenerowy" src={slub} loading="lazy"/>
          <div className="wedding-card-text">
            <h2>Ślub</h2>
            <p>Na ceremonię zapraszamy was do ogrodu Hotelu Dębowy</p>
            <p>16:30</p>
            <span>Środa, 18 czerwca 2025</span>
          </div>
        </div>
        <div className="wedding-card">
          <img alt="Wesele" src={wesele} loading="lazy"/>
          <div className="wedding-card-text">
            <h2>Wesele</h2>
            <p>Cały wieczór bawimy się na sali dębowej dostłownie 50 kroków od miejsca ceremonii</p>
            <span>Środa, 18 czerwca 2025</span>
          </div>
        </div>
        <div className="wedding-card">
          <img alt="Poprawiny" src={poprawiny} loading="lazy"/>
          <div className="wedding-card-text">
            <h2>Poprawiny</h2>
            <p>Następnego dnia zapraszamy na poprawinowego grilla w tym samym ogrodzie.</p>
            <span>Czwartek, 19 czerwca 2025</span>
          </div>
        </div>
      </div>
      <div className="wedding-button">
        <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x470e481174554395:0x74fdb8d2371e60f6?sa=X&ved=1t:8290&ictx=111"
          target="_blank"
          rel="noopener noreferrer"
          className="button">
          <div className="wedding-button-container">
            <img src={google} alt="Google Maps" loading="lazy"/>
            <div className="wedding-button-text-container">
              <h4>Zabierz mnie tam</h4>
              <p>Janusza Korczaka 1, 58-260 Bielawa</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Wedding;
