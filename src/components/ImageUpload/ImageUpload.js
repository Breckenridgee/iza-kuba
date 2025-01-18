import React, { useState, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import Swal from 'sweetalert2';
import "./ImageUpload.css";

function ImageUpload() {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const messages = [
    "Świetny wybór!",
    "To wygląda super!",
    "Co za wspaniałe zdjęcie!",
    "Znakomity wybór!",
    "To zdjęcie jest idealne!"
  ];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const handleUpload = () => {
    if (images.length > 0) {
      const uploadPromises = images.map((image) => {
        const imageRef = ref(storage, `images/${image.name}`);
        return uploadBytes(imageRef, image).then((snapshot) =>
          getDownloadURL(snapshot.ref)
        );
      });

      Promise.all(uploadPromises).then(() => {
        setImages([]); // Clear the images array after upload
        Swal.fire({
          title: 'Mamy to!',
          text: getRandomMessage(),
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: {
            title: 'swal-title',
            text: 'swal-text',
            confirmButton: 'swal-confirm-button',
            icon: 'swal-icon',
          },
          iconHtml: '<span style="color: #940306; font-size: 50px;">✓</span>',
          buttonsStyling: false,
          confirmButtonClass: 'swal-confirm-button',
        });

        const style = document.createElement('style');
        style.innerHTML = `
          .swal-confirm-button {
            background-color: #940306;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 16px;
          }
          .swal-icon {
            color: #940306 !important;
          }
        `;
        document.head.appendChild(style);
      });
    }
  };

  const handleCustomFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={styles.uploadContainer}>
      <h3 style={styles.title}>Wrzuć swoje zdjęcia!</h3>
      
      <input 
        type="file" 
        onChange={handleImageChange} 
        ref={fileInputRef} 
        style={styles.fileInput} 
        accept="image/*" 
        hidden 
        multiple 
      />

      <button 
        onClick={handleCustomFileInputClick} 
        style={styles.customFileButton}
      >
        Wybierz zdjęcia
      </button>

      {images.length > 0 && (
        <p style={styles.infoText}>
          Dodano {images.length} zdjęć.
        </p>
      )}

      <div style={styles.buttonContainer}>
        <button 
          onClick={handleUpload} 
          style={styles.uploadButton} 
          disabled={images.length === 0} 
        >
          Prześlij zdjęcia
        </button>
      </div>
    </div>
  );
}

// Styles remain unchanged
const styles = {
  uploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
  },
  title: {
    color: '#940306',
    marginBottom: '15px',
    fontSize: '24px',
    textAlign: 'center',
  },
  fileInput: {
    display: 'none',
  },
  customFileButton: {
    backgroundColor: '#940306',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  uploadButton: {
    backgroundColor: '#940306',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
    maxWidth: '200px',
  },
  infoText: {
    color: '#940306',
    margin: '10px 0',
    fontSize: '16px',
    textAlign: 'center',
  },
};

export default ImageUpload;
