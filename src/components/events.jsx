import React from "react";
import { Link } from "react-router-dom";
import eventPosts from "../event_doc.jsx";
import home from "./images/home-icon.png";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Events = () => {
  const importantEvents = eventPosts.filter((event) => event.important);
  const categories = [...new Set(eventPosts.map((event) => event.category))];

  return (
    <div className="event-bg">
      <div id="flex-row">
        <Link to="/home">
          <img
            src={home}
            alt="home"
            id="event_left_pic"
            style={{ height: "2.5em", width: "2.5em", marginTop: "0.75em" }}
          ></img>
        </Link>
        <div
          style={{
            marginLeft: "2em",
            fontFamily: "Lovers Quarrel",
            fontSize: "5.5em",
          }}
        >
          Events
        </div>
      </div>
      <div id="right-panel">
        {categories.map((category) => (
          <div id="event-filters" key={category}>
            <a
              href={`#${category.toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{ fontSize: "1.5em", fontFamily: "monospace" }}>
                {category}
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="left-event-component">
        <Carousel breakPoints={breakPoints}>
          {importantEvents.map((item) => (
            <div className="blog" key={item.id}>
              <div className="blog-post event-link" id="event-post">
                <Link to={`/events/${item.id}`} className="no-underline">
                  <img src={item.image} alt={item.title} style={{ height: "8em" }} />
                  <b>{item.title}</b><br></br>
                  {item.date}
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
        <div>
          {categories.map((category) => {
            const categoryId = category.toLowerCase();
            const eventsInCategory = eventPosts
              .filter((event) => event.category === category)
              .sort((a, b) => new Date(b.date) - new Date(a.date));

            return (
              <div key={category}>
                <div className="content" id={categoryId}>
                  {category}
                </div>
                <div className="blog" style={{ paddingTop: "10px" }}>
                  {eventsInCategory.map((event) => (
                    <div className="blog-post event-link" style={{ background: "#F8E4DB" }} key={event.id}>
                      <Link to={`/events/${event.id}`} className="no-underline">
                        <img
                          src={event.image}
                          alt={event.title}
                          style={{ height: "8em" }}
                        />
                        <b>{event.title}</b><br></br>
                        {event.date}
                      </Link>
                    </div>
                  ))}
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;



// // Events.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import eventPosts from "../event_doc.jsx";
// import home from "./images/home-icon.png";

// const Events = () => {
//   return (
//     <div>
//       <Link to="/home">
//         <img
//           src={home}
//           alt="home"
//           style={{ height: "2.5em", width: "2.5em", marginTop: "0.75em" }}
//         />
//       </Link>
//       <h1>Events</h1>
//       {eventPosts.map((event) => (
//         <Link to={`/events/${event.id}`}>
//         <div key={event.id}>
          
//             <h2>{event.title}</h2>
          
//           <p>{event.date}</p>
//         </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Events;
