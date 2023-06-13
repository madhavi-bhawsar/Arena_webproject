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
            <div style={{ margin: "10% 30%", display: "flex"}}>
              {
                <Link to="/campaign" className="custom-link">
                <button id="voting-cards" style={{marginRight:"30%"}}>
                  <i
                    class="fa fa-address-card-o"
                    aria-hidden="true"
                    style={{ fontSize: "10em" }}
                  ></i>
                  <div className="content">
                      <center>Campaign</center>
                      </div>
                  </button>
                  </Link>
              }
              {
                <Link to="/vote" className="custom-link">
                <button id="voting-cards" style={{ marginLeft: "75%" }}>
                <img src={vote} alt="vote-campaign" style={{height:"9em", width:"9em"}}></img>
                  <div className="content">
                      <center>Vote</center>
                    
                </div>
                  </button>
                  </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Election;
