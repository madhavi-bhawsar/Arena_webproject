import React from "react";
import img from "./images/logo.png";
import lower from "./images/lower-container.png";
import Features_Guide_Orange_Card from "./props_cards/Features_Guide_Orange_Card.jsx";
import Features_Guide_Pink_Card from "./props_cards/Features_Guide_Pink_Card.jsx";
import features_guide from "../features_guide.jsx";
import { Link } from "react-router-dom";
import Slide_carousel from "./slide_carousel";

function Navibar() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div>
        <div id="flex-row">
          <div className="navheading">Arena</div>
          <Link to="/login" className="nav-links" style={{ marginLeft: "70%" }}>
            login
          </Link>
        </div>
        <div>
          <div
            className="videonav"
            style={{ height: "45em", top: "0", position: "absolute" }}
          >
            <video autoPlay loop muted className="video">
              {/* <source src="https://player.vimeo.com/external/527782046.sd.mp4?s=b6e04e7a7907204db604d18c7538e250eb457a9a&profile_id=165&oauth2_token_id=57447761" /> */}
              {/* <source src="https://player.vimeo.com/external/541239086.sd.mp4?s=1f22dbe379dd4b08739e346ec8426d157e05a458&profile_id=165&oauth2_token_id=57447761" /> */}
              <source src="https://player.vimeo.com/external/510463826.sd.mp4?s=38ff646fd853ba57e53d7036fa02bef1193b0344&profile_id=164&oauth2_token_id=57447761" />
            </video>
            <img
              src={img}
              alt="logo"
              className="center"
              style={{
                position: "absolute",
                top: "35%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></img>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "center", marginTop: "34em", width: "100%" }}>
        <div>
          <div
            id="flex-row"
            style={{
              padding: "5em 15%",
              background: "#EBEDEE",
              height: "45em",
            }}
          >
            <div
              style={{ height: "30em", width: "50%", background: "grey" }}
            ></div>
            <div style={{ width: "50%", marginLeft: "4%" }}>
              <h1>What's new:</h1>
              <br />
              <div className="content">
                Arena solves society challenges by simplifying communication
                through mass invitations, facilitating blog sharing for
                community engagement, enabling online payments and maintenance
                transactions, streamlining grievance submission, and providing
                information on candidates and society-related matters. It
                enhances society functioning and connectivity.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              background:
                "linear-gradient(164.34deg, #357486 30.52%, #FFB8B6 100%)",
              height: "auto",
              padding: "3em 15%",
              color: "white",
            }}
          >
            <div>
              <h1>Features to help:</h1>
              <br />
              <h6>
                Helping you to connect with the society and stay informative
              </h6>
            </div>
            <br />
            <br />
            <div className="blog" style={{ paddingTop: "10px" }}>
              {features_guide.map((item) => (
                <div
                  className="blog-post"
                  style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
                  key={item.id}
                >
                  <img src={item.img[0]} alt={item.heading} />
                  <h2 style={{ color: "white" }}>{item.heading}</h2>
                  <h7>{item.about.substring(0, 125)}</h7>
                </div>
              ))}
            </div>
            {/* <div id="flex-row" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
                <div style={{height:"auto", width:"auto", backgroundColor:"grey"}}>image carousel</div>
                <div>
                  <h1>heading</h1>
                  <h4><b>about</b></h4>
                  <p>content</p>
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navibar;

// import React from "react";
// import img from "./images/logo.png";
// import lower from "./images/lower-container.png";
// import Features_Guide_Orange_Card from "./props_cards/Features_Guide_Orange_Card.jsx";
// import Features_Guide_Pink_Card from "./props_cards/Features_Guide_Pink_Card.jsx";
// import features_guide from "../features_guide.jsx";
// import { Link } from "react-router-dom";
// import Slide_carousel from "./slide_carousel";

// function create_guide(guideterm) {
//   var k = guideterm.id;
//   if (k % 2 === 0) {
//     return (
//       <Features_Guide_Orange_Card
//         key={guideterm.id}
//         heading={guideterm.heading}
//         content={guideterm.content}
//       />
//     );
//   } else {
//     return (
//       <Features_Guide_Pink_Card
//         key={guideterm.id}
//         heading={guideterm.heading}
//         content={guideterm.content}
//       />
//     );
//   }
// }
// function Navibar() {
//   return (
//       <div className="home" >
//         <div className="navibar" id="home-nav">
//           <h2 className="navheading">Arena</h2>
//           <Link to="/login" className="nav-links">
//           login
//         </Link>
//         </div>
//         <div className="nav-scroll">
//         <div>
//           <div
//             className="videonav"
//             style={{ height: "40em", margin: "0", position: "relative" }}
//           >
//             <video autoPlay loop muted className="video">
//               {/* <source src="https://player.vimeo.com/external/527782046.sd.mp4?s=b6e04e7a7907204db604d18c7538e250eb457a9a&profile_id=165&oauth2_token_id=57447761" /> */}
//               {/* <source src="https://player.vimeo.com/external/541239086.sd.mp4?s=1f22dbe379dd4b08739e346ec8426d157e05a458&profile_id=165&oauth2_token_id=57447761" /> */}
//               <source src="https://player.vimeo.com/external/510463826.sd.mp4?s=38ff646fd853ba57e53d7036fa02bef1193b0344&profile_id=164&oauth2_token_id=57447761" />
//             </video>
//             <img
//               src={img}
//               alt="logo"
//               className="center"
//               style={{
//                 position: "absolute",
//                 top: "32%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             ></img>
//           </div>
//         </div><br></br>
//         <hr /><br></br>
//         <div classname="carousel_container_home">
//               <Slide_carousel/>
//         </div>
//         {/* <div className="society-pics" id="home-slide">
//           <div className="bottom">
//             <div className="right-rec"></div>
//           </div>
//           <div>
//             <div className="pics" id="card-color"></div>
//             <div className="flex-row" id="align">
//               <img
//                 src={left_triangle}
//                 alt="prev img"
//                 className="panel-icons"
//               ></img>
//               <img
//                 src={green_cicle}
//                 alt="current"
//                 className="panel-icons"
//               ></img>
//               <img
//                 src={right_triangle}
//                 alt="next img"
//                 className="panel-icons"
//               ></img>
//             </div>
//           </div>
//           <div className="bottom">
//             <div className="left-rec"></div>
//           </div>
//         </div> */}
//         <hr />
//         <div className="title" id="align_center">
//           <u> Features & Guide :</u>
//         </div>
//         <hr />

//         {features_guide.map(create_guide)}

//         <img src={lower} alt="information" className="lower"></img>
//       </div>
//     </div>
//   );
// }
// export default Navibar;
