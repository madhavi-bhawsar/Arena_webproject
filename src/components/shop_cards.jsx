import React from "react";
import prev from "./images/previous-button-icon.png";
import next from "./images/next-button-icon.png";
import world_map from "./images/world-map-pin-icon.png";
function Shop_Cards() {
  return (
    <div className="society-pics" id="bg-linear-blue">
        <div id="box" className="title" >
        Shops and trading Centers:
        </div>
      <div>
        <div className="pics" id="flex-row">
          <div className="title">
            The Club:
          </div>
          <div className="side-content">
            <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v.... Read More
            </div> 
            <div>
              <div id="side_box">
                <img src={prev} alt="prev img" id="small-icon"></img>
                <img src={next} alt="next img" id="small-icon"></img>
              </div>
              <img src={world_map} alt="locate office" className="map-icons" ></img>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default Shop_Cards;