import React from 'react';
import Vid_nav from './blog_nav.jsx';
import blogPosts from '../blog.jsx';
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Posts = () => {
   // Sort blogPosts based on likes in descending order
   const sortedPosts = blogPosts.sort((a, b) => b.likes - a.likes);
   // Get the top 10 most liked blogs
   const mostLiked = sortedPosts.slice(0, 10);
  return (
    <div>
      <div>
        <Vid_nav />
      </div>
      <div style={{background:"#7DA7B3", paddingTop:"10px"}}>

      <Carousel breakPoints={breakPoints}>
          {mostLiked.map((item) => (
            <div className="blog-post" key={item.id}>
            <img src={item.imgUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <h7>{item.body.substring(0, 125)+'...'}</h7>
          </div>
          ))}
        </Carousel>
      <div className="blog" style={{paddingTop:"10px"}}>
        {blogPosts.map((item) => (
          <div className="blog-post" key={item.id}>
            <img src={item.imgUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <h7>{item.body.substring(0, 125)+'...'}</h7>
          </div>
        ))}
      </div>
      
      </div>
    </div>
    
  );
};
  
export default Posts;
