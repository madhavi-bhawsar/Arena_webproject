import React from "react";
import img from "./images/logo.png";
function Navbar() {
  return (
    <div>
      <div className="home" id="home-bg">
        <div className="navbar" id="home-nav">
          <h2 className="navheading">Arena</h2>
          <a href="" className="nav-links">
            login
          </a>
        </div>
        <div classNme="top-container">
          <img src={img} alt="logo" className="center"></img>
        </div>
        <hr />
        <div className="middle-container" id="box">

        </div>
        <div className="middle-container">
            <div className="orange-card">
              <div className="card-orange-title">
              :What we have in guide
              </div>
              <div className="card-orange-fill">
              Managing the society can be a tricky task.  The management requires the communication between all the members of the group efficiently 
              </div>
            </div>
            <div className="pink-card">
              <div className="card-pink-title">
              :What we have in guide
              </div>
              <div className="card-pink-fill">
              Managing the society can be a tricky task.  The management requires the communication between all the members of the group efficiently 
              </div>
            </div>
            
        </div>




      </div>
    </div>
  );
}
export default Navbar;
