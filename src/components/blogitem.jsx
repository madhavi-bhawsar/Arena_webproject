import React, { useState } from "react";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import CarouselComponent from "./carousels_vertical.jsx";
import blog from "../blog.jsx";
import { Link } from "react-router-dom";
import flower from "./images/flower-4148707_1280.webp";

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
        <div className="navibar" id="blog_nav_bg">
          <div className="left">
            <img src={prev} alt="previous page" className="icons"></img>
          </div>
          <div className="right">
            <Link to="/home">
              <img src={home} alt="home" className="icons"></img>
            </Link>
          </div>
          <div className="blog_head">
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
          <div className="quote-container">
            <img
              src={flower}
              className="imgnav"
              alt="title"
            />
            <div className="blog_quote">
              "the qoute to written is given over here....sdzvhgcb webjdsyuh bew
              vybdcbq gvuyax sc swbcvduvxzg as cbdvxd vscbdv"
            </div>
          </div>

          <div className="carousel_blog">
            <CarouselComponent />
          </div>
          <hr></hr>

          <hr></hr>
          <div className="blog_text">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). 
            t is a long established fact that a reader will be d
            istracted
            by the readable con
            tent of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like)
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default BlogView;
