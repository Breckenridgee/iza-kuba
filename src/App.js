import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';
import cava from './assets/photos/cava.jpg'; 

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nasza Historia... kolejny wspólny krok</h1>
      </header>
      
      <section id="wedding" className="section">
        <div className="content">
          <img src={cava} alt="Ślub" className="image" />
          <div className="text">
            <h2>Ślub</h2>
            <p>Wszystko co musisz wiedzieć o ślubie.</p>
          </div>
        </div>
      </section>

      <section id="party" className="section">
        <div className="content reverse">
          <div className="text">
            <h2>Wesele</h2>
            <p>Wszystko co musisz wiedzieć o weselu.</p>
          </div>
          <img src={cava} alt="Wesele" className="image" />
        </div>
      </section>

      <section id="afterparty" className="section">
        <div className="content">
          <img src={cava} alt="Poprawiny" className="image" />
          <div className="text">
            <h2>Poprawiny</h2>
            <p>Wszystko co musisz wiedzieć o poprawinach.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="content reverse">
          <div className="text">
            <h2>Nasza wspólna galeria</h2>
            <p>Dodaj zdjęcia abyśmy od razu mogli wspominać nasz wyjątkowy dzień.</p>
          </div>
          <ImageUpload />
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Iza & Kuba</p>
      </footer>
    </div>
  );
}

export default App;
