import React, { useState } from 'react';
import Vid_nav from './blog_nav.jsx';
import blogPosts from '../blog.jsx';
import { Link } from "react-router-dom";

const Posts = () => {
  const [displayedPosts, setDisplayedPosts] = useState(blogPosts);
  const [activeButton, setActiveButton] = useState('all');

  // Sort blogPosts based on likes in descending order
  const sortedPosts = blogPosts.sort((a, b) => b.likes - a.likes);
  // Get the top 7 most liked blogs
  const trendingPosts = sortedPosts.slice(0, 6);

  const handleAllClick = () => {
    setDisplayedPosts(blogPosts);
    setActiveButton('all');
  };

  const handleTrendingClick = () => {
    setDisplayedPosts(trendingPosts);
    setActiveButton('trending');
  };

  const handleBookmarkedClick = () => {
    const bookmarkedPosts = blogPosts.filter((item) => item.bookmarked);
    setDisplayedPosts(bookmarkedPosts);
    setActiveButton('bookmarked');
  };

  return (
    <div>
      <Vid_nav />
      <div>
      <div className="blog-nav2">
        <div style={{margin:"0px auto", display:"flex"}}>
        <div id="blog-nav2-button"
          className={activeButton === 'all' ? 'active' : ''}
          onClick={handleAllClick}
        >
          All
        </div>
        <div id="blog-nav2-button"
          className={activeButton === 'trending' ? 'active' : ''}
          onClick={handleTrendingClick}
        >
          Trending
        </div>
        <div id="blog-nav2-button"
          className={activeButton === 'bookmarked' ? 'active' : ''}
          onClick={handleBookmarkedClick}
        >
          Bookmarked
        </div>
        </div>
      </div>
      </div>
      <div className="blog">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((item) => (
            <div className="blog-post event-link" key={item.id}>
              <Link to={`/blog/${item.id}`} className="no-underline">
              <img src={item.imgUrl[0]} alt={item.title} />
              <h2>{item.title}</h2>
              <h7>{item.body.substring(0, 125) + '...'}</h7>
              </Link>
            </div>
          ))
        ) : (
          <b style={{margin:"7% auto"}}>No items found!!!</b>
        )}
      </div>
    </div>
  );
};

export default Posts;


// import React, { useState } from 'react';
// import Vid_nav from './blog_nav.jsx';
// import blogPosts from '../blog.jsx';

// const Posts = () => {
//   const [displayedPosts, setDisplayedPosts] = useState(blogPosts);

//   // Sort blogPosts based on likes in descending order
//   const sortedPosts = blogPosts.sort((a, b) => b.likes - a.likes);
//   // Get the top 7 most liked blogs
//   const trendingPosts = sortedPosts.slice(0, 7);

//   const handleAllClick = () => {
//     setDisplayedPosts(blogPosts);
//   };

//   const handleTrendingClick = () => {
//     setDisplayedPosts(trendingPosts);
//   };

//   return (
//     <div>
//       <div>
//         <Vid_nav />
//       </div>
//       <div style={{ paddingTop: '10px' }}>
//         <div className="buttons">
//           <button onClick={handleAllClick}>All</button>
//           <button onClick={handleTrendingClick}>Trending</button>
//           <button>Bookmarked</button>
//         </div>

//         <div className="blog" style={{ paddingTop: '10px' }}>
//           {displayedPosts.map((item) => (
//             <div className="blog-post" key={item.id}>
//               <img src={item.imgUrl} alt={item.title} />
//               <h2>{item.title}</h2>
//               <h7>{item.body.substring(0, 125) + '...'}</h7>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Posts;




// import React from 'react';
// import Vid_nav from './blog_nav.jsx';
// import blogPosts from '../blog.jsx';
// import Carousel from "react-elastic-carousel";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// const Posts = () => {
//    // Sort blogPosts based on likes in descending order
//    const sortedPosts = blogPosts.sort((a, b) => b.likes - a.likes);
//    // Get the top 10 most liked blogs
//    const mostLiked = sortedPosts.slice(0, 5);
//   return (
//     <div>
//       <div>
//         <Vid_nav />
//       </div>
//       <div style={{ paddingTop:"10px"}}>

//       <Carousel breakPoints={breakPoints}>
//           {mostLiked.map((item) => (
//             <div className="blog-post" key={item.id}>
//             <img src={item.imgUrl} alt={item.title} />
//             <h2>{item.title}</h2>
//             <h7>{item.body.substring(0, 125)+'...'}</h7>
//           </div>
//           ))}
//         </Carousel>
//       <div className="blog" style={{paddingTop:"10px"}}>
//         {blogPosts.map((item) => (
//           <div className="blog-post" key={item.id}>
//             <img src={item.imgUrl} alt={item.title} />
//             <h2>{item.title}</h2>
//             <h7>{item.body.substring(0, 125)+'...'}</h7>
//           </div>
//         ))}
//       </div>
      
//       </div>
//     </div>
    
//   );
// };
  
// export default Posts;
