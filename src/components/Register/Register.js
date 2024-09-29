// src/components/Register.js
import React, { useState } from 'react';
import { auth } from '../../../src/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(null); // Reset error

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', email);
      // Optionally, redirect to login or another page
    } catch (err) {
      setError(err.message);
      console.error('Error during registration:', err);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
