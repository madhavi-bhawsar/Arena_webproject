// import "./App.css";
// import React, { useState } from 'react';

// const Carousel = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const images = [
//     'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80',
//     'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1570435229357-79dd1692b110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
//     'https://images.unsplash.com/photo-1616049338062-a8e75eeb9808?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
//   ];

//   const handlePrevious = () => {
//     setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
//   };

//   const handleNext = () => {
//     setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
//   };

//   return (
//     <div className="carousel">
//       <button onClick={handlePrevious}>&lt;</button>
//       <div className="carousel-images">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index + 1}`}
//             className={`carousel-image ${
//               index === currentImage ? 'enlarged' : ''
//             }`}
//           />
//         ))}
//       </div>
//       <button onClick={handleNext}>&gt;</button>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import society_images from "../society_pics.jsx";
import "./App.css";

  const App = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const handlePrevious = () => {
      setCurrentImage((currentImage - 1 +society_images.length) %society_images.length);
    };
  
    const handleNext = () => {
      setCurrentImage((currentImage + 1) %society_images.length);
    };
  
    return (
      <div className="App">
        <div className="carousel">
          <div className="slide">
            <img
              src={society_images[(currentImage - 1 +society_images.length) %society_images.length]}
              style={{marginLeft:"0%"}}
              alt="Previous"
            />
          </div>
          <div className="slide activeSlide">
            <img src={society_images[currentImage]} alt="Current" style={{marginLeft:"9em"}}  />
          </div>
          <div className="slide">
            <img src={society_images[(currentImage + 1) %society_images.length]} alt="Next" style={{marginLeft:"20em"}} />
          </div>
        </div>
        <div className="arrow prev" onClick={handlePrevious}>
          &lt;
        </div>
        <div className="arrow next" onClick={handleNext}>
          &gt;
        </div>
      </div>
    );
  };
  
  export default App;
