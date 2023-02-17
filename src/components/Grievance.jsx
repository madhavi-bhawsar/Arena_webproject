import React from "react";
import home from "./images/home-button-icon.png";
import event from "./images/marketing-automation-icon.png";
import blog from "./images/blog-icon.png";
import pay from "./images/payroll-salary-icon.png";
import grievance from "./images/manual-information-files-icon.png";
import vote from "./images/ballot-box-voting-icon.png";
import clip from "./images/paperclip-icon.png";
import down from "./images/double-arrow-bottom-icon.png";
import profile from "./images/person-profile-icon.png";
import done from "./images/done-icon.png";
function Grievance_Page() {
  return (
    <div>
      <div className="home" id="blog-bg">
        <div className="navbar" id="home-nav">
          <h2 className="navheading">Arena</h2>
          <div className="right">
            <img src={profile} alt="profile" className="icons"></img>
          </div>
        </div>
        <div className="left-panel">
          <div id="panel">
            <img src={home} alt="welcome-page" className="icons"></img>
          </div>
          <div id="panel">
            <img src={event} alt="events" className="icons"></img>
          </div>
          <div id="panel">
            <img src={blog} alt="blogs" className="icons"></img>
          </div>
          <div id="panel">
            <img src={pay} alt="payment" className="icons"></img>
          </div>
          <div id="panel">
            <img
              src={grievance}
              alt="grievance-request"
              className="icons"
            ></img>
          </div>
          <div id="panel">
            <img src={vote} alt="vote-campaign" className="icons"></img>
          </div>
        </div>
        <div className="grie-container">
          <div className="flex-row">
            <div className="title">To: </div>
            <div className="select-down">
              <img src={down} alt="show" className="icons"></img>
            </div>
            <img src={clip} alt="add" className="icons" id="clip-orient"></img>
          </div>
        <div>
            <textarea
              name="grie-content"
              placeholder="Type the Problem Here"
              className="grie-content"
            ></textarea>
            <img src={done} alt="done" className="icons" ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grievance_Page;
