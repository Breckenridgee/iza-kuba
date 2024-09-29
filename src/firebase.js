// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import the Storage service
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAhYlr9eLncaceVP3r_5CTNCxpKlhgxcc",
  authDomain: "izabela-kuba.firebaseapp.com",
  projectId: "izabela-kuba",
  storageBucket: "izabela-kuba.appspot.com",
  messagingSenderId: "638778049956",
  appId: "1:638778049956:web:6e9a8991edb5ade2806d31",
  measurementId: "G-L8T3N0P1N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Storage
const auth = getAuth(app); // Make sure to get the auth instance
// auth.useDeviceLanguage(); // Set the device language for the auth instance
const storage = getStorage(app);

export {auth, storage}; // Export auth and storage