import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import send from "./images/paper-plane-icon.png";
import eventPosts from "../event_doc";

function EventView() {
  const { id } = useParams();
  const event = eventPosts.find((event) => event.id === parseInt(id));

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    if (count < event.comments.length) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <div >
        <img src={event.image} alt={event.title} className="event_view_image"/>
      </div>
      <div id="flex-row">
        <div style={{ width: "100%", padding: "2%" }}>
          <div id="flex-row">
            <img src={prev} alt="previous page" className="side_icons" />
            <Link to="/home">
              <img
                src={home}
                alt="home"
                className="side_icons"
                style={{
                  marginLeft: "1em",
                }}
              />
            </Link>
            <div className="title">{event.title}</div>
          </div>
          <div
            style={{
              backgroundColor: "#C3D8D9",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {event.category}
          </div>
          <hr />
          <h5>When and where:</h5>
          <div id="flex-row">
            <div className="whenhere">
              <b>{event.date}</b>
            </div>
            {event.passes && (
            <div className="whenhere">
              <b>{event.place}</b>
            </div>
            )}
          </div>
          <div className="content">{event.content}</div>
          {event.passes && (
            <div className="left-authority-card" style={{ padding: "1em" }}>
              <div id="flex-row">
                <div style={{ width: "22em" }}>
                  <div className="nav-links">
                    <b>{event.title}</b>
                  </div>
                  <hr />
                  <br></br>
                  Number of passes:
                  <br></br>
                  <button onClick={handleDecrease}>-</button>
                  <input
                    type="number"
                    style={{ height: "2em", width: "10em", background: "#f6d7ca" }}
                    value={count}
                    readOnly
                  />
                  <button onClick={handleIncrease}>+</button>
                </div>
                <div className="content" style={{ textAlign: "center" }}>
                  <br />
                  <b>{event.date}</b>
                  <br />
                  Please mark your presence at <b>{event.place}</b>
                  <br />
                  Organized by {event.organizer}
                  <br />
                  A {event.category} event
                  <br />
                </div>
              </div>
            </div>
          )}
        </div>
        <div style={{ width: "40%" , marginTop:"140px" }}>
          <h2>Comments</h2>
          <div id="flex-row" className="comment">
            <input type="text" placeholder="Comment" className="comment_box" />
            <img src={send} alt="send" id="small-icon" />
          </div>
          <div style={{ marginTop: "3em" }}>
            {event.comments.slice(0, 8).map((comment, index) => (
              <div
                key={index}
                style={{
                  background: "#d9d9d9",
                  padding: "5px",
                  margin: "10px",
                }}
              >
                <b>{comment.name}</b>
                <br />
                {comment.comment_content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventView;

// import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";
// import send from "./images/paper-plane-icon.png";
// import eventPosts from "../event_doc";

// function EventView() {
//   const { id } = useParams();
//   const event = eventPosts.find((event) => event.id === parseInt(id));

//   const [count, setCount] = useState(0);

//   const handleIncrease = () => {
//     if (count < event.comments.length) {
//       setCount(count + 1);
//     }
//   };

//   const handleDecrease = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   if (!event) {
//     return <div>Event not found</div>;
//   }

//   return (
//     <div>
//       <div className="event_view_image">
//         <img src={event.image} alt={event.title} />
//       </div>
//       <div id="flex-row">
//         <div style={{ width: "100%", padding: "2%" }}>
//           <div id="flex-row">
//             <img src={prev} alt="previous page" className="side_icons" />
//             <Link to="/home">
//               <img
//                 src={home}
//                 alt="home"
//                 className="side_icons"
//                 style={{
//                   marginLeft: "1em",
//                 }}
//               />
//             </Link>
//             <div className="title">{event.title}</div>
//           </div>
//           <div
//             style={{
//               backgroundColor: "#C3D8D9",
//               fontSize: "20px",
//               textAlign: "center",
//             }}
//           >
//             {event.category}
//           </div>
//           <hr />
//           <h5>When and where:</h5>
//           <div id="flex-row">
//             <div className="whenhere">
//               <b>{event.date}</b>
//             </div>
//             <div className="whenhere">
//               <b>{event.place}</b>
//             </div>
//           </div>
//           <div className="content">{event.content}</div>
//           <div className="left-authority-card" style={{ padding: "1em" }}>
//             <div id="flex-row">
//               <div>
//                 <b>{event.title}</b>
//                 <br />
//                 {event.date}
//                 <br />
//                 {event.organizer}
//                 <br />
//                 {event.category}
//                 <br />A committee event
//               </div>
//               <div>
//                 <button onClick={handleDecrease}>-</button>
//                 <input type="number" value={count} readOnly />
//                 <button onClick={handleIncrease}>+</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{ width: "40%" }}>
//           <h2>Comments</h2>
//           <div id="flex-row" className="comment">
//             <input type="text" placeholder="Comment" className="comment_box" />
//             <img src={send} alt="send" id="small-icon" />
//           </div>
//           <div style={{ marginLeft: "10%", marginTop: "5%" }}>
//             {event.comments.slice(0, count).map((comment, index) => (
//               <div key={index} className="left-authority-card" style={{ margin: "1em 0" }}>
//                 <b>{comment.name}</b>
//                 <br />
//                 {comment.comment_content}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventView;

// import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";
// import send from "./images/paper-plane-icon.png";
// import eventPosts from "../event_doc.jsx";

// function EventView() {
//   const { id } = useParams();
//   const event = eventPosts.find((event) => event.id === parseInt(id));

//   const [count, setCount] = useState(0);

//   const handleIncrease = () => {
//     if (count < 5) {
//       setCount(count + 1);
//     }
//   };

//   const handleDecrease = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   if (!event) {
//     return <div>Event not found</div>;
//   }

//   return (
//     <div>
//       <div className="event_view_image">image</div>
//       <div id="flex-row">
//         <div style={{ width: "100%", padding: "2%" }}>
//           <div id="flex-row">
//             <img src={prev} alt="previous page" className="side_icons" />
//             <Link to="/home">
//               <img
//                 src={home}
//                 alt="home"
//                 className="side_icons"
//                 style={{
//                   marginLeft: "1em",
//                 }}
//               />
//             </Link>
//             <div className="title">{event.title}</div>
//           </div>
//           <div
//             style={{
//               backgroundColor: "#C3D8D9",
//               fontSize: "20px",
//               textAlign: "center",
//             }}
//           >
//             {event.category}
//           </div>
//           <hr />
//           <h5>When and where:</h5>
//           <div id="flex-row">
//             <div className="whenhere">
//               <b>{event.date}</b>
//             </div>
//             <div className="whenhere">
//               <b>{event.place}</b>
//             </div>
//           </div>
//           <div className="content">{event.content}</div>
//           <div className="left-authority-card" style={{ padding: "1em" }}>
//             <div id="flex-row">
//               <div>
//                 <b>{event.title}</b>
//                 <br />
//                 {event.date}
//                 <br />
//                 {event.organizer}
//                 <br />
//                 {event.category}
//                 <br />A commity event
//               </div>
//               <div>
//                 <button onClick={handleDecrease}>-</button>
//                 <input type="number" value={count} readOnly />
//                 <button onClick={handleIncrease}>+</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{ width: "40%" }}>
//           <h2>comments</h2>
//           <div id="flex-row" className="comment">
//             <input type="text" placeholder="comment" className="comment_box" />
//             <img src={send} alt="send" id="small-icon" />
//           </div>
//           <div style={{ marginLeft: "10%", marginTop: "5%" }}>
//             {event.comments.slice(0, count).map((comment, index) => (
//               <div key={index} className="left-authority-card" style={{ margin: "1em 0" }}>
//                 <b>{comment.name}</b>
//                 <br />
//                 {comment.comment_content}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventView;

// // EventView.jsx
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import eventPosts from "../event_doc.jsx";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";

// const EventView = () => {
//   const { id } = useParams();
//   const event = eventPosts.find((event) => event.id === parseInt(id));

//   if (!event) {
//     return (
//       <div>
//         <Link to="/home">
//           <img
//             src={home}
//             alt="home"
//             style={{ height: "2.5em", width: "2.5em", marginTop: "0.75em" }}
//           />
//         </Link>
//         <h1>Event not found</h1>
//       </div>
//     );
//   }

//   return (
//     <h1>
//       {id}
//     </h1>
//   );
// };

// export default EventView;
