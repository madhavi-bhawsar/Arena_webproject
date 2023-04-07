import React from 'react';
import Vid_nav from './vid_nav.jsx';
import blogPosts from '../blog.jsx';
const Posts = () => {
  
  
  return (
    <div>
      <div>
        <Vid_nav />
      </div>
      <hr></hr>
      <div className="blog">
        {blogPosts.map((item) => (
          <div className="blog-post" key={item.id}>
            
            <img src={item.imgUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <h7>{item.body.substring(0, 125)+'...'}</h7>
          </div>
        ))}
      </div>
    </div>
    
  );
};
  
export default Posts;
