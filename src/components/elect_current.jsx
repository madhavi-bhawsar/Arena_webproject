import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav.jsx";
import Panel from "./panel.jsx";

function Current() {
  return (
    <div>
      <div className="home" id="blog-bg">
        <Nav />
        <div id="flex-row">
          <Panel />
          <div className="centre">
            <div style={{ margin: "10% 30%", display: "flex"}}>
              {
                <Link to="/authorities" className="custom-link">
                <button id="voting-cards" style={{marginRight:"30%"}}>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style={{ fontSize: "10em" }}
                  ></i>
                  <div className="content">
                      <center>Authorities</center>
                      </div>
                  </button>
                  </Link>
              }
              {
                <Link to="/results" className="custom-link">
                <button id="voting-cards" style={{ marginLeft: "75%" }}>
                  <i class="fa fa-bar-chart" style={{ fontSize: "10em" }}></i>
                  <div className="content">
                      <center>Results</center>
                    
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

export default Current;
