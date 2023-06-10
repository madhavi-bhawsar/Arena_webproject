import React from "react";
import { Link } from "react-router-dom";
import Nav from ".//nav.jsx";
import Panel from ".//panel.jsx";
import vote from "./images/ballot-box-voting-icon.png";

function Election() {
  return (
    <div>
      <div className="home" id="blog-bg">
        <Nav />
        <div id="flex-row">
          <Panel />
          <div className="centre">
            <div style={{ marginTop: "10%", display: "flex" }}>
              {
                <div id="voting-cards" style={{ marginLeft: "20%" }}>
                  <i  class="fa fa-address-card-o" aria-hidden="true" style={{fontSize:"10em"}}></i>
                  <button
                    className="content" id="green-button"
                  ><Link to="/campaign" className="custom-link"><center>Campagin</center></Link></button>
                </div>
              }
              {
                <div id="voting-cards" style={{ marginLeft: "10%" }}>
                  <img src={vote} alt="vote-campaign" style={{height:"9em", width:"9em"}}></img>
                  <button
                    className="content" id="green-button"
                  ><Link to="/vote"  className="custom-link"><center>Vote</center></Link></button>
                </div>
              }
              {
                <div id="voting-cards" style={{ marginLeft: "10%" }}>
                  <i class="fa fa-id-badge" style={{fontSize:"9em"}}></i>
                  <button
                    className="content" id="green-button" 
                  ><Link to="/current"  className="custom-link"><center>Current</center></Link></button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Election;
