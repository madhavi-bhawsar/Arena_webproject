import React from "react";
import profile from "./images/person-profile-icon.png";
function Nav() {
  return (
        <div className="navbar" id="home-nav">
          <h2 className="navheading">Arena</h2>
          <div className="right">
            <img src={profile} alt="profile" className="icons"></img>
          </div>
        </div>
  )
};

export default Nav;