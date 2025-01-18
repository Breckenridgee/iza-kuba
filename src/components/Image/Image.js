import React from "react";
import "./Image.css";

const Image = ({ src, alt, objectPosition, maxHeight }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="image" loading="lazy" style={{ objectPosition, maxHeight }}/>
    </div>
  );
};

export default Image;
