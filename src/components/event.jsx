import React from "react";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
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
  // Get unique event categories from the eventPosts
  const categories = [...new Set(eventPosts.map((event) => event.category))];
  return (
    <div className="event-bg">
      {/* <ReactPlayer
        url="https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=164&oauth2_token_id=57447761"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      /> */}
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
              <div style={{ fontSize: "1.5em", fontFamily: "monospace"}}>
                {category}
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="left-event-component">
        <Carousel breakPoints={breakPoints}>
          {importantEvents.map((item) => (
            <div className="event">
              <div className="blog-post" id="event-post" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ height: "8em" }}
                />
                {item.title}
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
                <div className="event">
                  {eventsInCategory.map((event) => (
                    <div className="blog-post" id="event-post" key={event.id}>
                      <img
                        src={event.image}
                        alt={event.title}
                        style={{ height: "8em" }}
                      />
                      {event.title}
                    </div>
                  ))}
                </div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="element-with-video-bg">
        <div className="event">
          {eventPosts.map((item) => (
            <div className="blog-post" id="event-post" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Events;

// import React from "react";
// import "./Posts.css";
// import Post from "./Post.jsx";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const Posts = () => {
//   const blogPosts = [
//     {
//       title: "JAVASCRIPT",
//       body: `JavaScript is the world most popular
//       lightweight, interpreted compiled programming
//       language. It is also known as scripting
//       language for web pages. It is well-known for
//       the development of web pages, many non-browser
//       environments also use it. JavaScript can be
//       used for Client-side developments as well as
//       Server-side developments`,
//       author: "Nishant Singh ",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
//     },
//     {
//       title: "Data Structure ",
//       body: `There are many real-life examples of
//       a stack. Consider an example of plates stacked
//       over one another in the canteen. The plate
//       which is at the top is the first one to be
//       removed, i.e. the plate which has been placed
//       at the bottommost position remains in the
//       stack for the longest period of time. So, it
//       can be simply seen to follow LIFO(Last In
//       First Out)/FILO(First In Last Out) order.`,
//       author: "Suresh Kr",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
//     },
//     {
//       title: "Algorithm",
//       body: `The word Algorithm means “a process
//       or set of rules to be followed in calculations
//       or other problem-solving operations”. Therefore
//       Algorithm refers to a set of rules/instructions
//       that step-by-step define how a work is to be
//       executed upon in order to get the expected
//       results. `,
//       author: "Monu Kr",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
//     },
//     {
//       title: "Computer Network",
//       body: `An interconnection of multiple devices,
//       also known as hosts, that are connected using
//       multiple paths for the purpose of sending/
//       receiving data media. Computer networks can
//       also include multiple devices/mediums which
//       help in the communication between two different
//       devices; these are known as Network devices
//       and include things such as routers, switches,
//       hubs, and bridges. `,
//       author: "Sonu Kr",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
//     },
//     {
//       title: "Computer Network",
//       body: `An interconnection of multiple devices,
//       also known as hosts, that are connected using
//       multiple paths for the purpose of sending/
//       receiving data media. Computer networks can
//       also include multiple devices/mediums which
//       help in the communication between two different
//       devices; these are known as Network devices
//       and include things such as routers, switches,
//       hubs, and bridges. `,
//       author: "Sonu Kr",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
//     },
//     {
//       title: "Computer Network",
//       body: `An interconnection of multiple devices,
//       also known as hosts, that are connected using
//       multiple paths for the purpose of sending/
//       receiving data media. Computer networks can
//       also include multiple devices/mediums which
//       help in the communication between two different
//       devices; these are known as Network devices
//       and include things such as routers, switches,
//       hubs, and bridges. `,
//       author: "Sonu Kr",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
//     },
//   ];

//   return (

//     <div className="posts-container">
//     {blogPosts.map((post, index) => (
//      <Post key={index} index={index} post={post} />
//     ))}
//   </div>
//   );
// };

// export default Posts;

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function ResponsiveAutoExample() {
//   return (
//     <Container>
//       <Row>
//         <Col sm={8}>sm=8</Col>
//         <Col sm={4}>sm=4</Col>
//       </Row>
//       <Row>
//         <Col sm>sm=true</Col>
//         <Col sm>sm=true</Col>
//         <Col sm>sm=true</Col>
//       </Row>
//     </Container>
//   );
// }

// export default ResponsiveAutoExample;

// import Card from "react-bootstrap/Card";
// import React from "react";
// import Nav from ".//nav.jsx";
// import Panel from ".//panel.jsx";
// import event_doc from "../event_doc.jsx";

// function event_card() {
//   const { card } = this.props;
//   return (
//     <Card
//       className="cards"
//       id={card.id}
//       title={card.title}
//       image={card.image}
//       date={card.date}
//     />
//   );
// }

// // function Home() {
// //   return (
// //     <div>
// //       <div className="home" id="blog-bg">
// //         <Nav />
// //         <div id="flex-row">
// //           <Panel />
// //           <div className="centre" id="event_container">
// //             <Grid container spacing={4}>
// //               {CardSeed.cards.map((card, i) => (
// //                 <Grid key={"card-" + card.id} item xs={1}>
// //                   <CardComponent card={card} />
// //                 </Grid>
// //               ))}
// //             </Grid>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// function Home() {
//   return (
//     <div>
//       <div className="home" id="blog-bg">
//         <Nav />
//         <div id="flex-row">
//           <Panel />
//           <div className="centre" id="event_container">
//               <Row xs={1} md={5} className="g-4">
//                 {{event_doc}.map((id, idx) => (
//                   <Col>
//                     <Card>
//                       <Card.Img variant="top" src={event_doc.image}/>
//                       <Card.Body>
//                         <Card.Title>{event_doc.title}</Card.Title>
//                         <Card.Text>
//                         {event_doc.date}
//                         </Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
