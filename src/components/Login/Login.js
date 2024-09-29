// src/components/Login/Login.js
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase.js'; // Make sure this path is correct and includes .js
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed:', currentUser); // Debugging log
      if (currentUser) {
        console.log('User is signed in:', currentUser);
        setUser(currentUser);
        navigate('/'); // Navigate to main page here if user is signed in
      } else {
        console.log('No user is signed in.');
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]); // Add navigate to the dependency array

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setError(''); // Reset error message

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Sign-in successful'); // Debugging log
      setEmail(''); // Clear email input
      setPassword(''); // Clear password input
      // Removed navigate here, as it should be handled in the useEffect
    } catch (err) {
      console.error('Error during sign-in:', err);
      setError(err.message); // Display error message
    }
  };

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.displayName || user.email}</h1>
      ) : (
        <div>
          <h1>Please sign in</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if exists */}
          <form onSubmit={handleSignIn}>
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
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
