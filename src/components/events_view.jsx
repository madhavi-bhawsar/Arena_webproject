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
      <div className="event_view_image">image</div>
      <div id="flex-row">
        <div style={{ width: "80%", padding: "2%" }}>
          <div id="flex-row">
            <img src={prev} alt="previous page" className="side_icons"></img>
            <Link to="/home">
              <img
                src={home}
                alt="home"
                className="side_icons"
                style={{
                  marginLeft: "1em",
                }}
              ></img>
            </Link>
            <div className="title">The Event title</div>
          </div>
          <div
            style={{
              backgroundColor: "#C3D8D9",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            A commity event
          </div>
          <hr></hr>
          <h5>When and where:</h5>
          <div id="flex-row">
            <div className="whenhere">
              <b>Event_date</b>
            </div>
            <div className="whenhere">
              <b>event_place</b>
            </div>
          </div>
          <div className="content">
            event_content "Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum."
            <hr></hr> <b>organizer:</b> organizer_name
          </div>
        </div>
        <div style={{ width: "20em", margin: "0 0.5em", padding: "1%" }}>
          <h2>comments</h2>
          <div id="flex-row" className="comment">
            <input type="text" placeholder="comment" className="comment_box" />
            <img src={send} alt="send" id="small-icon"></img>
          </div>
          <div style={{ marginTop: "3em" }}>
            commentsLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s
          </div>
        </div>
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
