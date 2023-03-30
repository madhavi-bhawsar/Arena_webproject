import React from "react";
import { Link } from 'react-router-dom';
import home from "./images/home-button-icon.png";
import event from "./images/marketing-automation-icon.png";
import blog from "./images/blog-icon.png";
import pay from "./images/payroll-salary-icon.png";
import grievance from "./images/email-envelop-open-icon.png";
import vote from "./images/ballot-box-voting-icon.png";
import profile from "./images/person-profile-icon.png";
function Nav_Panel() {
  return (
    <div className="home" id="blog-bg">
      <div className="navibar" id="home-nav">
        <h2 className="navheading">Arena</h2>
        <div className="right">
          <img src={profile} alt="profile" className="panel-icons"></img>
        </div>
      </div>
      <div className="left-panel">
        <div id="panel">
        <Link to="/home">
          <img src={home} alt="welcome-page" className="icons"></img></Link>
        </div>
        <div id="panel">
          <img src={event} alt="events" className="panel-icons"></img>
        </div>
        <div id="panel">
          <img src={blog} alt="blogs" className="panel-icons"></img>
        </div>
        <div id="panel">
          <img src={pay} alt="payment" className="panel-icons"></img>
        </div>
        <div id="panel">
          <img
            src={grievance}
            alt="grievance-request"
            className="panel-icons"
          ></img>
        </div>
        <div id="panel">
          <img src={vote} alt="vote-campaign" className="panel-icons"></img>
        </div>
      </div>
    </div>
  );
}
export default Nav_Panel;
