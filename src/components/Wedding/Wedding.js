import React from "react";
import "./Wedding.css";

const Wedding = () => {
  return (
    <div className="wedding-container">
      <h2>Kolejny krok zaplanowaliśmy w wyjątkowym miejscu..</h2>
      <div className="wedding-card-conteiner">
        <div className="wedding-card">
          <img alt="Ogród"></img>
          <h2>Ślub</h2>
          <p>Na ceremonię zapraszamy was do ogrodu Hotelu Dębowy</p>
          <span>Środa 18 czerwca 2025 16:30</span>
        </div>
        <div className="wedding-card">
          <img alt="Wesele"></img>
          <h2>Wesele</h2>
          <p></p>
          <span>Środa 18 czerwca 2025</span>
        </div>
        <div className="wedding-card">
         <img alt="Poprawiny"></img>
          <h2>Poprawiny</h2>
          <p></p>
          <span>Środa 19 czerwca 2025</span>
        </div>
      </div>
      <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x470e481174554395:0x74fdb8d2371e60f6?sa=X&ved=1t:8290&ictx=111" 
   target="_blank" 
   rel="noopener noreferrer"
   className="button">
  <p>Janusza Korczaka 1, 58-260 Bielawa</p>
  <p>Znajdź na mapie</p>
</a>
    </div>
  );
};

export default Wedding;
