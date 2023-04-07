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
