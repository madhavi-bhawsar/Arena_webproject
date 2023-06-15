import React from 'react';
import { Link } from 'react-router-dom';

const Frontpage_nav = () => {
  return (
    <div className='videonav'>
      <video autoPlay loop muted className="video">
        <source src="https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=164&oauth2_token_id=57447761" />
      </video>
      <div className='heading_prime'>Blogs</div>
      <div className='vid_nav_flex'>
        <h2><Link to="/home" className='no-underline'>Home</Link></h2>
        <h2><Link to="/blogcreate" className='no-underline'>Create</Link></h2>
      </div>
    </div>
  );
};

export default Frontpage_nav;
