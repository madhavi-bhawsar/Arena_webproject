import React from "react";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import clip from "./images/paperclip-icon.png";
import profile from "./images/person-profile-icon.png";
import done from "./images/done-icon.png";
import { Link } from "react-router-dom";

function My_Blog() {
  return (
    <div>
      <div className="home" id="blog-bg">
        <div className="navibar" id="blog-nav">
          <div className="left">
            <img src={prev} alt="previous page" className="icons"></img>
          </div>
          <div className="right">
            <Link to="/home">
              <img src={home} alt="home" className="icons"></img>
            </Link>
          </div>

          <div>
            <input
              type="text"
              placeholder="Type The Title"
              className="blog-title"
            />
          </div>
          <img src={done} alt="done" id="done"></img>
          <div>
            <img src={clip} alt="attachment" className="icons"></img>
          </div>
          <div className="right">
            <img src={profile} alt="profile" className="icons"></img>
          </div>
        </div>

        <div className="blog-scroll">
          <textarea
            name="blog-content"
            placeholder="Type the blog here"
            className="blog-content"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default My_Blog;
