import React from "react";
import clip from "./images/paperclip-icon.png";
import down from "./images/double-arrow-bottom-icon.png";
import done from "./images/done-icon.png";
import Nav from ".//nav.jsx";
import Panel from ".//panel.jsx";
function Grievance_Page() {
  return (
    <div>
      <div id="blog-bg">
        <Nav />
        <div id="centre">
          <Panel />
          <div className="grie-container">
            <div id="flex-row" style={{ padding: "2%" }}>
              <h4>To:</h4>
              <div>
                <select
                  id="flex-row"
                  className="comment"
                  style={{ width: "80%", marginLeft: "3em" }}
                >
                  <option value="">Select a recipient</option>
                  <option value="person1">Person 1</option>
                  <option value="person2">Person 2</option>
                  <option value="person3">Person 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
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
