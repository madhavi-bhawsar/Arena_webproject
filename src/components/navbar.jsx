import React from "react";
import img from "./images/logo.png";
import green_cicle from "./images/green-circle-icon.png";
import right_triangle from "./images/caret-right-icon.png";
import left_triangle from "./images/caret-left-icon.png";
import lower from "./images/lower-container.png";
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
        <div className="nav-scroll">
          <div>
            <img src={img} alt="logo" className="center"></img>
          </div>
          <hr />
          <div className="society-pics" id="home-slide">
            <div className="bottom">
              <div className="right-rec"></div>
            </div>
            <div>
              <div className="pics" id="card-color"></div>
              <div className="flex-row" id="align">
                <img
                  src={left_triangle}
                  alt="prev img"
                  className="panel-icons"
                ></img>
                <img
                  src={green_cicle}
                  alt="current"
                  className="panel-icons"
                ></img>
                <img
                  src={right_triangle}
                  alt="next img"
                  className="panel-icons"
                ></img>
              </div>
            </div>
            <div className="bottom">
              <div className="left-rec"></div>
            </div>
          </div>
          <hr />
          <div className="title" id="align_center">
            <u> Features & Guide :</u>
          </div>
          <hr />
          <div className="orange-card" id="card">
            <div className="card-orange-title" id="card-title">
              :What we have in guide
            </div>
            <div className="card-fill">
              Managing the society can be a tricky task. The management requires
              the communication between all the members of the group efficiently
            </div>
            <a href="">Read more...</a>
          </div>
          <div className="pink-card" id="card">
            <div className="card-pink-title" id="card-title">
              What we have in guide:
            </div>
            <div className="card-fill">
              Managing the society can be a tricky task. The management requires
              the communication between all the members of the group efficiently
            </div>
            <a href="">Read more...</a>
          </div>
          <img src={lower} alt="information" className="lower"></img>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
