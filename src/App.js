import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Our Wedding</h1>
      </header>
      
      <section id="about">
        <h2>About Us</h2>
        <p>Here you can write a small story about you and your partner.</p>
      </section>

      <section id="details">
        <h2>Wedding Details</h2>
        <p>Provide information like date, time, venue, and dress code.</p>
      </section>

      <section id="rsvp">
        <h2>RSVP</h2>
        <p>Link to an RSVP form or provide details on how guests can RSVP.</p>
      </section>

      <section id="gallery">
        <h2>Wedding Gallery</h2>
        <ImageUpload />
      </section>

      <footer>
        <p>&copy; 2024 Your Names</p>
      </footer>
    </div>
  );
}

export default App;
