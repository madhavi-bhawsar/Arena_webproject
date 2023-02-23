import React from "react";
import home from "./images/home-button-icon.png";
import event from "./images/marketing-automation-icon.png";
import blog from "./images/blog-icon.png";
import pay from "./images/payroll-salary-icon.png";
import grievance from "./images/email-envelop-open-icon.png";
import vote from "./images/ballot-box-voting-icon.png";

function Panel() {
  return (
    <div className="left-panel">
      <div id="panel">
        <img src={home} alt="welcome-page" className="icons"></img>
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
  );
}

export default Panel;
