
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.js'; // Add .js extension
import Register from './components/Register/Register.js'; // Add .js extension
import Main from './components/Main/Main.js';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Other routes can go here */}
      </Routes>
    </Router>
  );
};

export default App;
