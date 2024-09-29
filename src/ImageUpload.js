import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrl(url);
          alert("Image uploaded successfully!");
        });
      });
    }
  };

  return (
    <div className="image-upload">
      <h3>Upload Your Photos!</h3>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" width="200px" />}
    </div>
  );
}

export default ImageUpload;
