import React from "react";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import clip from "./images/paperclip-icon.png";
import profile from "./images/person-profile-icon.png";
import done from "./images/done-icon.png";

function My_Blog() {
  return (
    <div>
      <div className="home" id="blog-bg">
        <div className="navbar" id="blog-nav">
          <div className="left">
            <img src={prev} alt="previous page" className="icons"></img>
          </div>
          <div className="right">
            <img src={home} alt="home" className="icons"></img>
          </div>

          <div>
            <input
              type="text"
              placeholder="Type The Title"
              className="blog-title"
            />
          </div>
          <div className="left">
            <img src={clip} alt="attachment" className="icons"></img>
          </div>
          <div className="right">
            <img src={profile} alt="profile" className="icons"></img>
          </div>
        </div>
        <div>
          <img src={done} alt="done" className="icons" id="done"></img>
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
