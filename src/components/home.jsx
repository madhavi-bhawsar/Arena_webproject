import React from "react";
import welcome from "./images/welcome.png";
import Nav from ".//nav.jsx";
import Panel from ".//panel.jsx";
import Home_Cards from "./home_cards";
import Shop_Cards from "./shop_cards.jsx";
import Slide_carousel from "./slide_carousel";
function Home() {
  return (
    <div>
      <div className="home" id="blog-bg">
        <Nav />
        <div id="flex-row">
          <Panel />
          <div className="centre">
            <div>
              <img src={welcome} alt="welcome" className="welcome"></img>
            </div>
            {/* <div className="society-pics" id="flex-row">
              <div className="left-rec">
                <img
                  src={left_pic}
                  alt="prev img"
                  className="icons"
                  id="left_pic"
                ></img>
              </div>
              <div className="pics"></div>
              <div className="right-rec">
                <img
                  src={right_pic}
                  alt="next img"
                  className="icons"
                  id="right_pic"
                ></img>
              </div>
            </div> */}
            <div classname="carousel_container_home">
              <Slide_carousel/>
            </div>
            
            <hr />
            <div className="title" id="align_center">
              <u> Facilities we have :</u>
            </div>
            <hr />
            <Home_Cards />
            <Shop_Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
