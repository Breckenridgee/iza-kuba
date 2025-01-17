import React from "react";
import "./Image.css";

const Image = (image) => {
  console.log(image);
  return (
    <div className="image-container">
      <img src={image.src} alt={image.alt} className="image" loading="lazy"/>
    </div>
  );
};

export default Image;
