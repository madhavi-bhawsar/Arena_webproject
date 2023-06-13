import React, { useState } from "react";
import "./carousel_image.css";

const ImageViewer = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-viewer">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Product Image ${currentImageIndex}`} />
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => handleImageChange(index)}
          />
        ))}
      </div>
      <div className="arrow-container">
        <button className="arrow-button-one left" onClick={handlePreviousImage}>
          &larr;
        </button>
        <button className="arrow-button-one right" onClick={handleNextImage}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;