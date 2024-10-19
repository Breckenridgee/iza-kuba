import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase'; 
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const hardcodedEmail = 'izabela.gabriel@gmail.com'; 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, hardcodedEmail, password);
      setPassword('');
      navigate('/');
    } catch (err) {
      setError('Niepoprawne hasło. Spróbuj jeszcze raz.');
      console.error('Sign-in error:', err.message);
    }
  };

  return (
    <div style={styles.container}>
       <div style={styles.overlay}></div> {/* Overlay for reduced background opacity */}
      <div style={styles.formWrapper}>
        <h1 style={styles.header}>Poprosimy hasło</h1>
        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSignIn}>
          <input
            type="password"
            placeholder="Wpisz hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <div>
            <button type="submit" style={styles.button}>
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Styles for the login form
const styles = {
  container: {
    position: 'relative', // Make the container relative for absolute positioning of overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url('/pattern_2.png')`, // Use the image in the public folder
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'repeat', // Do not repeat the image
    padding: '20px', // For better layout on mobile
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // White with 50% opacity for a minimal look
    zIndex: 1, // Ensures overlay is behind the form
  },
  formWrapper: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
    zIndex: 2, // Ensure form is above the overlay
  },
  header: {
    color: '#940306',
    marginBottom: '20px',
    fontFamily: "'Playfair Display', serif", // Elegant font for the wedding theme
    fontSize: '24px',
  },
  error: {
    color: 'red',
    marginBottom: '20px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  },
  button: {
    backgroundColor: '#940306',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#760204',
  },
};



export default Login;
