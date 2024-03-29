import React, { useState } from "react";
import green_cicle from "./images/green-circle-icon.png";
import right_triangle from "./images/caret-right-icon.png";
import left_triangle from "./images/caret-left-icon.png";
import prev from "./images/previous-button-icon.png";
import next from "./images/next-button-icon.png";
import world_map from "./images/world-map-pin-icon.png";
import facilities from "../facilities.jsx";

function Home_Cards() {
  const [currentFacility, setCurrentFacility] = useState(0);

  const changeFacility = (direction) => {
    if (direction === "prev") {
      setCurrentFacility((prev) =>
        prev === 0 ? facilities.length - 1 : prev - 1
      );
    } else if (direction === "next") {
      setCurrentFacility((prev) =>
        prev === facilities.length - 1 ? 0 : prev + 1
      );
    }
  };

  const { heading, content, image, location } = facilities[currentFacility];

  return (
    <div className="society-pics">
      <div className="bottom">
        <div className="right-rec"></div>
      </div>
      <div className="pics" id="card-color">
        <div className="title">{heading}</div>
        <div className="side-content">
          <div className="content">{content}</div>
          <div>
            <div id="side_box">
              <img
                src={image}
                alt={heading}
                style={{width:"100%", height:"100%"}}
                onClick={() => changeFacility("prev")}
              />
            </div>
            <img src={world_map} alt="locate office" className="map-icons" />
          </div>
        </div>
        <div className="flex-row" id="align">
          {/* Map Component */}
          <img
                src={left_triangle}
                alt="prev img"
                id="small-icon"
                className="panel-icons"
                onClick={() => changeFacility("prev")}
              />
          <img src={green_cicle} alt="current" className="panel-icons" />
          <img
                src={right_triangle}
                alt="next img"
                id="small-icon"
                className="panel-icons"
                onClick={() => changeFacility("next")}
              />
          </div>
      </div>
      <div className="bottom">
        <div className="left-rec"></div>
      </div>
    </div>
  );

  // return (
  //   <div className="society-pics">
  //     <div className="bottom">
  //       <div className="right-rec"></div>
  //     </div>
  //     <div>
  //       <div className="pics" id="card-color">
  //         <div className="title">The Club:</div>
  //         <div className="side-content">
  //           <div className="content">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  //             reprehenderit in voluptate v.... Read More
  //           </div>
  //           <div>
  //             <div id="side_box">
  //               <img src={prev} alt="prev img" id="small-icon"></img>
  //               <img src={next} alt="next img" id="small-icon"></img>
  //             </div>
  //             <img
  //               src={world_map}
  //               alt="locate office"
  //               className="map-icons"
  //             ></img>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex-row" id="align">
  //         <img src={left_triangle} alt="prev img" className="panel-icons"></img>
  //         <img src={green_cicle} alt="current" className="panel-icons"></img>
  //         <img
  //           src={right_triangle}
  //           alt="next img"
  //           className="panel-icons"
  //         ></img>
  //       </div>
  //     </div>
  //     <div className="bottom">
  //       <div className="left-rec"></div>
  //     </div>
  //   </div>
  // );
}

export default Home_Cards;
