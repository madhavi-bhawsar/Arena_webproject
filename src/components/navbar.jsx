import React from 'react';
import img from "./logo.png";
function Navbar() {
    return (
      <div>
        <div className='home' >
      <div className='navbar'>
        <h2 className='navheading'>Arena</h2>
        <a href=''  className='nav-links'>login</a>
      </div>
      <img src={img} alt='logo' className='center' ></img>
      </div>
      </div>
    )
}
export default Navbar;