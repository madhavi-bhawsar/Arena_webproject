import React from "react";
import left_pic from "./images/curved-arrow-left-green-icon.png";
import right_pic from "./images/curved-arrow-right-green-icon.png";

function Guide() {
  return (
    <div>
      <div className="home" id="guide-bg">
        <div className="navbar" id="home-nav">
          <h2 className="navheading">Arena</h2>
          <a href="" className="nav-links">
            login
          </a>
        </div>
        <div className="nav-scroll">
          <hr />
          <div className="title" id="align_center">
            How To Pay Maintainance:
          </div>
          <hr />
          <div className="card-fill" id="align_center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem I
          </div>
          <div className="society-pics" id="flex-row">
            <div className="left-rec" id="guide-card-bg">
              <img
                src={left_pic}
                alt="prev img"
                className="icons"
                id="left_pic"
              ></img>
            </div>
            <div className="pics" id="guide-card-bg"></div>
            <div className="right-rec" id="guide-card-bg">
              <img
                src={right_pic}
                alt="next img"
                className="icons"
                id="right_pic"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
