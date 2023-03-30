import React, { useState } from "react";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import CarouselComponent from "./carousels_vertical.jsx";
import blog from "../blog.jsx";
import { Link } from 'react-router-dom';

function BlogView() {
  const [mark, setmark] = useState(0),
    [ismark, setismark] = useState(false),
    onBookmarkClick = () => {
      setmark(mark + (ismark ? -1 : 1));
      setismark(!ismark);
    };
  const [like, setlike] = useState(0),
    [islike, setislike] = useState(false),
    onlikeClick = () => {
      setlike(like + (islike ? -1 : 1));
      setislike(!islike);
    };

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
          <div className="blog-title">
            Idjkfyuehscyusdfvcn svds{blog.heading}
          </div>
          <div className="left">
            <p className={"" + (islike ? "like" : "")}>
              <i
                style={{ fontSize: "45px" }}
                class="fa fa-heart"
                onClick={onlikeClick}
              ></i>
            </p>
          </div>
          <div className="right">
            <p className={"" + (ismark ? "book" : "")}>
              <i
                style={{ fontSize: "45px" }}
                class="fa fa-bookmark"
                onClick={onBookmarkClick}
              ></i>
            </p>
          </div>
        </div>
        <div className="blog-scroll">
          <div className="carousel_blog">
            <CarouselComponent />
          </div>
          <hr></hr>
          <div className="blog_quote">
            "the qoute to written is given over here....sdzvhgcb webjdsyuh bew
            vybdcbq gvuyax sc swbcvduvxzg as cbdvxd vscbdv"
          </div>
          <hr></hr>
          <div >
          scdtyhjnbfydsuhgyukfbdshgyufbhdscxbhyufdvsgyubfhvugybuvfhc
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default BlogView;