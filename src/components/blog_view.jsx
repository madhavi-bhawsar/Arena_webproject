import React, { useState } from "react";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";

import blog from "../blog.jsx";

function Blog_View() {
  const [mark, setmark]=useState(0),
  [ismark,setismark]=useState(false),
  onBookmarkClick = () =>{
    setmark(mark+(ismark ? -1: 1));
    setismark(!ismark);
  }
  const [like, setlike]=useState(0),
  [islike,setislike]=useState(false),
  onlikeClick = () =>{
    setlike(like+(islike ? -1: 1));
    setislike(!islike);
  }

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
          <div className="blog-title">{blog.heading}</div>
          <div className="left">
            <p className={"" + (islike ? "like" : "")}>
              <i style={{fontSize:"45px"}} class="fa fa-heart" onClick={onlikeClick}></i>
            </p>
          </div>
          <div className="right">
            <p className={"" + (ismark ? "book" : "")}>
              <i style={{fontSize:"45px"}} class="fa fa-bookmark" onClick={onBookmarkClick}></i>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blog_View;
