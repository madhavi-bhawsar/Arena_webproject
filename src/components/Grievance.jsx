import React from "react";
import clip from "./images/paperclip-icon.png";
import down from "./images/double-arrow-bottom-icon.png";
import done from "./images/done-icon.png";
import Nav from ".//nav.jsx";
import Panel from ".//panel.jsx";
import { Link } from 'react-router-dom';
function Grievance_Page() {
  return (
    <div>
      <div className="home" id="blog-bg">
        <Nav />
        <div id="centre">
          <Panel />
          <div className="grie-container">
            <div id="flex-row">
              <div className="title">To: </div>
              <div className="select-down">
                <img src={down} alt="show" className="icons"></img>
              </div>
              <img
                src={clip}
                alt="add"
                className="icons"
                id="clip-orient"
              ></img>
            </div>
            <div id="align">
              <textarea
                name="grie-content"
                placeholder="Type the Problem Here"
                className="grie-content"
              ></textarea>
              <img src={done} alt="done" className="icons"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grievance_Page;
