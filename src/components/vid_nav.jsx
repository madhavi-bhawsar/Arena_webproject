import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Navbar = () => {
  return (
    <nav className='videonav'>
      <ReactPlayer
        url="https://player.vimeo.com/external/428974406.sd.mp4?s=2949f077e0708537590b3e5fbbdfa4bfd7230a91&profile_id=164&oauth2_token_id=57447761"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="video"
      />
      <div className='heading_prime'>Blogs</div>
      <div className='vid_nav_flex'>
        <h2><Link to="/home">Home</Link></h2>
        <h2><Link to="/blogcreate">Create</Link></h2>
        <h2><Link to="/guide">Guide</Link></h2>
      </div>
    </nav>
  );
};

export default Navbar;