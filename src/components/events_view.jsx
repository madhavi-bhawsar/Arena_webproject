import React from "react";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import emoji from "./images/smiling-line-icon.png";
import event_arrow_left from "./images/thunderbolt-icon-left.png";
import event_arrow_right from "./images/thunderbolt-icon-right.png";
import send from "./images/paper-plane-icon.png";
import { Link } from "react-router-dom";
function Events_View() {
  return (
    <div>
      <div className="event_view_image"></div>
      <div id="flex-row">
        <div style={{ width: "70%" }}>
          <div id="flex-row">
            <img
              src={prev}
              alt="previous page"
              style={{
                width: "2em",
                height: "2em",
                marginLeft: "3em",
                marginTop: "2.5em",
              }}
            ></img>
            <Link to="/home">
              <img
                src={home}
                alt="home"
                style={{
                  width: "2em",
                  height: "2em",
                  marginLeft: "1em",
                  marginTop: "2.5em",
                }}
              ></img>
            </Link>
            <div className="title">The Event title</div>
          </div>
          <div
            style={{
              backgroundColor: "#C3D8D9",
              marginLeft: "2em",
              fontSize: "20px",
              textAlign:"center"
            }}
          >
            A commity event
          </div>
          <hr></hr>
          <h5>When and where:</h5>
          <div id="flex-row">
            <div className="whenhere">Event_date</div>
            <div className="whenhere">event_place</div>
          </div>
        </div>
        <h2>comments</h2>
      </div>
    </div>
  );
}

export default Events_View;

// import React from "react";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";
// import emoji from "./images/smiling-line-icon.png";
// import event_arrow_left from "./images/thunderbolt-icon-left.png";
// import event_arrow_right from "./images/thunderbolt-icon-right.png";
// import send from "./images/paper-plane-icon.png";
// import { Link } from 'react-router-dom';
// function Events_View() {
//   return (
//     <div>
//       <img
//         src={event_arrow_left}
//         alt="previous"
//         className="icons"
//         id="event_left_arrow"
//       ></img>
//       <div className="event_viewer">
//         <div id="flex-row">
//           <img
//             src={prev}
//             alt="previous page"
//             className="icons"
//             id="event_left_pic"
//           ></img>
//           <div className="title">The group name</div>
//           <Link to="/home">
//           <img
//             src={home}
//             alt="home"
//             className="icons"
//             id="event_right_pic"
//           ></img>
//           </Link>
//         </div>
//         <div id="flex-row" className="comment">
//           <img src={emoji} alt="react" id="small-icon" ></img>
//           <input type="text" placeholder="comment" className="comment_box"/>
//           <img src={send} alt="send" id="small-icon" ></img>
//         </div>
//       </div>
//       <img
//         src={event_arrow_right}
//         alt="next"
//         className="icons"
//         id="event_right_arrow"
//       ></img>
//     </div>
//   );
// }

// export default Events_View;
