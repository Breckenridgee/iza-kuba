import React from "react";
import "./Wedding.css";

const Wedding = () => {
  return (
    <div className="wedding-container">
      <h1>Kolejny krok zaplanowaliśmy w wyjątkowym miejscu..</h1>
      <div className="wedding-card-conteiner">
        <div className="wedding-card">
          <img alt="Ogród"></img>
          <h1>Ślub</h1>
          <p>Na ceremonię zapraszamy was do ogrodu Hotelu Dębowy</p>
          <span>Środa 18 czerwca 2025 16:30</span>
        </div>
        <div className="wedding-card">
          <img alt="Wesele"></img>
          <h1>Wesele</h1>
          <p></p>
          <span>Środa 18 czerwca 2025</span>
        </div>
        <div className="wedding-card">
         <img alt="Poprawiny"></img>
          <h1>Poprawiny</h1>
          <p></p>
          <span>Środa 19 czerwca 2025</span>
        </div>
      </div>
      <button href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x470e481174554395:0x74fdb8d2371e60f6?sa=X&ved=1t:8290&ictx=111">
        <p>Janusza Korczaka 1, 58-260 Bielawa</p>
        <p>Znajdź na mapie</p>
      </button>
    </div>
  );
};

export default Wedding;
