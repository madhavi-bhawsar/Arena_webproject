import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import blogPosts from "../blog.jsx";
import ImageViewer from "../carousel_image.jsx";

function BlogView() {

  const { id } = useParams();
  const blog = blogPosts.find((blog) => blog.id === parseInt(id));

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
          <div className="blog_head"><b>{blog.title}
            </b>
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
          <div>
            <p>by {blog.author}</p>
            <div
              style={{
                margin: "10px",
                float: "left",
              }}
            >
              <ImageViewer images={blog.imgUrl} />
            </div>
          </div>
          <div className="blog_text">
          {blog.body}
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default BlogView;
