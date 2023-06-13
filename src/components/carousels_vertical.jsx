// import React, { useState } from 'react';

// import img1 from './images/pexels-irina-iriser-1408221.jpg';
// import img2 from './images/pexels-pixabay-36478.jpg';
// import img3 from './images/pexels-pixabay-46164.jpg';
// import img4 from './images/pexels-sl-wong-1023953.jpg';
// import img5 from './images/pexels-tom-fisk-14096891.jpg';
// import img6 from './images/pexels-valeria-boltneva-101472.jpg';

// export default function CarouselComponent() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [img1, img2, img3, img4, img5, img6];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="carousel_blog">
//       <div className="carousel-wrapper">
//         <div className="blog_img_div">
//           <img src={images[currentIndex]} className="blog_img" alt="carousel" />
//         </div>
//         <button className="prev-button" onClick={handlePrevious}>
//           Previous
//         </button>
//         <button className="next-button" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./images/pexels-irina-iriser-1408221.jpg";
import img2 from "./images/pexels-pixabay-36478.jpg";
import img3 from "./images/pexels-pixabay-46164.jpg";
import img4 from "./images/pexels-sl-wong-1023953.jpg";
import img5 from "./images/pexels-tom-fisk-14096891.jpg";
import img6 from "./images/pexels-valeria-boltneva-101472.jpg";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div className="carousel_blog">
            <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true}>
                <div className="blog_img_div">
                <img src={img1}  className="blog_img"></img>
                </div>
                <div className="blog_img_div">
                <img src={img2} className="blog_img"></img>
                </div>
                <div className="blog_img_div">
                <img src={img3} className="blog_img"></img>
                </div>
                <div className="blog_img_div">
                <img src={img4} className="blog_img"></img>
                </div>
                <div className="blog_img_div">
                <img src={img5} className="blog_img"></img>
                </div>
                <div className="blog_img_div">
                <img src={img6} className="blog_img"></img>
                </div>
            </Carousel>
            </div>
        </div>
        
    );
}