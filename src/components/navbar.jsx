import React from "react";
import img from "./images/logo.png";
import green_cicle from "./images/green-circle-icon.png";
import right_triangle from "./images/caret-right-icon.png";
import left_triangle from "./images/caret-left-icon.png";
import lower from "./images/lower-container.png";
import Features_Guide_Orange_Card from "./props_cards/Features_Guide_Orange_Card.jsx";
import Features_Guide_Pink_Card from "./props_cards/Features_Guide_Pink_Card.jsx";
import features_guide from "../features_guide.js";

function create_guide(guideterm) {
  var k =guideterm.id
  if(k%2===0){
    return (
      <Features_Guide_Orange_Card
        key={guideterm.id}
        heading={guideterm.heading}
        content={guideterm.content}
      />
    );
  }else{
    return (
      <Features_Guide_Pink_Card
        key={guideterm.id}
        heading={guideterm.heading}
        content={guideterm.content}
      />
    );
  }
}
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
          
          {features_guide.map(create_guide)}

          
          <img src={lower} alt="information" className="lower"></img>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
