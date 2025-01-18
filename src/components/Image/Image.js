import React from "react";
import "./Image.css";

const Image = ({ src, alt, objectPosition, maxHeight }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} loading="lazy" style={{ objectPosition, maxHeight }} className='image'/>
    </div>
  );
};

export default Image;
