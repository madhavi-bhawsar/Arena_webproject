import React from "react";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import emoji from "./images/smiling-line-icon.png";
import event_arrow_left from "./images/thunderbolt-icon-left.png";
import event_arrow_right from "./images/thunderbolt-icon-right.png";
import send from "./images/paper-plane-icon.png";
function Events_View() {
  return (
    <div>
      <img
        src={event_arrow_left}
        alt="previous"
        className="icons"
        id="event_left_arrow"
      ></img>
      <div className="event_viewer">
        <div id="flex-row">
          <img
            src={prev}
            alt="previous page"
            className="icons"
            id="event_left_pic"
          ></img>
          <div className="title">The group name</div>
          <img
            src={home}
            alt="home"
            className="icons"
            id="event_right_pic"
          ></img>
        </div>
        <img src={emoji} alt="react" className="icons" id="event_left_pic"></img>
        <input type="text" placeholder="comment" className="comment" />
        <img src={send} alt="send" className="icons" id="event_right_pic"></img>
      </div>
      <img
        src={event_arrow_right}
        alt="next"
        className="icons"
        id="event_right_arrow"
      ></img>
    </div>
  );
}

export default Events_View;
