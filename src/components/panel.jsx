import React from "react";
import home from "./images/home-button-icon.png";
import event from "./images/marketing-automation-icon.png";
import blog from "./images/blog-icon.png";
import pay from "./images/payroll-salary-icon.png";
import grievance from "./images/email-envelop-open-icon.png";
import vote from "./images/ballot-box-voting-icon.png";
import { Link } from "react-router-dom";

function Panel() {
  return (
    <div className="left-panel">
      <div id="panel">
        <Link to="/home">
          <img src={home} alt="welcome-page" className="icons"></img>
        </Link>
      </div>
      <div id="panel">
        <Link to="/event">
          <img src={event} alt="events" className="panel-icons"></img>
        </Link>
      </div>
      <div id="panel">
        <Link to="/blog">
          <img src={blog} alt="blogs" className="panel-icons"></img>
        </Link>
      </div>
      <div id="panel">
        <Link to="/payments">
          <img src={pay} alt="payment" className="panel-icons"></img>
        </Link>
      </div>
      <div id="panel">
        <Link to="/Grievance">
          <img
            src={grievance}
            alt="grievance-request"
            className="panel-icons"
          ></img>
        </Link>
      </div>
      <div id="panel">
        <img src={vote} alt="vote-campaign" className="panel-icons"></img>
      </div>
    </div>
  );
}

export default Panel;
