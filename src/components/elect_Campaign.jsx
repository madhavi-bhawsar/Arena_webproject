import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav.jsx";
import Panel from "./panel.jsx";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Campaign() {
  const [candidates, setNotes] = useState([]);

  useEffect(() => {
    fetch('/candidates')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes))
      .catch((error) => console.error(error));
  }, []);

  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showUniquePositions, setShowUniquePositions] = useState(true);

  // Get unique positions from candidates array
  const uniquePositions = Array.from(
    new Set(candidates.map((candidate) => candidate.position))
  );

  const filteredCandidates = selectedPosition
    ? candidates.filter((candidate) => candidate.position === selectedPosition)
    : candidates;

  const handlePositionClick = (position) => {
    setSelectedPosition(position);
  };

  const handleOptionClick = (option) => {
    if (option === "campaign") {
      setShowUniquePositions(option === "campaign");
    }
  };


  return (
    <div>
      <div className="home" id="blog-bg">
        <Nav />
        <div id="flex-row">
          <Panel />
          <div className="centre">
            <div className="flex-row">
              <div className="elect-panel">
                <i
                  className="fa fa-sliders"
                  aria-hidden="true"
                  style={{ fontSize: "30px", marginTop: "10px" }}
                  onClick={() => setShowUniquePositions(!showUniquePositions)}
                ></i>
                {showUniquePositions ? (
                  <div className="uniqueposition-container">
                    {uniquePositions.map((position) => (
                      <button
                        className={`elect-panel-button ${
                          position === selectedPosition ? "selected" : ""
                        }`}
                        key={position}
                        onClick={() => handlePositionClick(position)}
                      >
                        <div className="content" style={{ textAlign: "center" }}>
                          {position}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="menu-container">
                    <button
                      className={`elect-panel-button`}
                      style={{ height: "7em" }}
                      onClick={() => handleOptionClick("campaign")}
                    >
                      <div className="content" style={{ textAlign: "center" }}>
                        Campaign
                      </div>
                    </button>
                    <Link to="/vote" className="custom-link">
                      <button
                        className={`elect-panel-button`}
                        style={{ height: "7em" }}
                      >
                        <div className="content" style={{ textAlign: "center" }}>
                          Vote
                        </div>
                      </button>
                    </Link>
                    <Link to="/current" className="custom-link">
                      <button
                        className={`elect-panel-button`}
                        style={{ height: "7em" }}
                      >
                        <div className="content" style={{ textAlign: "center" }}>
                          Current
                        </div>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <div style={{ marginLeft: "18%" }}>
                <Carousel breakPoints={breakPoints}>
                  {filteredCandidates.map((candidate) => (
                    <div className="event" key={candidate.id}>
                      <div
                        className="blog-post"
                        id="event-post"
                        style={{
                          backgroundColor: "#98babb",
                          marginTop: "1em",
                          marginBottom: "50px",
                        }}
                      >
                        <img
                          src={candidate.pic}
                          alt={candidate.name}
                          style={{ height: "8em" }}
                        />
                        <b>{candidate.name}</b>
                        {candidate.position}
                      </div>
                    </div>
                  ))}
                </Carousel>
                <br />
                {filteredCandidates.map((candidate, index) => {
                  const isEven = index % 2 === 0;
                  const cardId = isEven ? "campaign-green" : "campaign-blue";

                  return (
                    <div>
                      <div className="pics" id={cardId} key={candidate.id}>
                        <div className="title">{candidate.name}</div>
                        <div className="side-content">
                          <div>
                            <h4>{candidate.position}</h4>
                            <br />
                            {candidate.moto}
                            <br />
                            <hr />
                            <b>about:</b> {candidate.about}
                          </div>
                          <div>
                            <div id="side_box">
                              {/* Render the image */}
                              <img
                                src={candidate.pic}
                                alt="candidate"
                                style={{width:"300px", height:"300px"}}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;


// import React, { useState } from "react";
// import Nav from "./nav.jsx";
// import Panel from "./panel.jsx";
// import candidates from "../candidates.jsx";
// import Carousel from "react-elastic-carousel";
// import { Link } from "react-router-dom";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function Campaign() {
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [showUniquePositions, setShowUniquePositions] = useState(true);

//   // Get unique positions from candidates array
//   const uniquePositions = Array.from(
//     new Set(candidates.map((candidate) => candidate.position))
//   );

//   const filteredCandidates = selectedPosition
//     ? candidates.filter((candidate) => candidate.position === selectedPosition)
//     : candidates;

//   const handlePositionClick = (position) => {
//     setSelectedPosition(position);
//   };
//   const menu=["campaign", "vote", "current"];
//   const handleOptionClick = (option) => {
//     if(option==="campaign"){
//       setShowUniquePositions(option === "campaign");
//     }else if(option==="vote"){
//       <Link to="/vote"  className="custom-link"></Link>
//     }else if(option==="current"){
//       <Link to="/current"  className="custom-link"></Link>
//     }
    
//   };

//   return (
//     <div>
//       <div className="home" id="blog-bg">
//         <Nav />
//         <div id="flex-row">
//           <Panel />
//           <div className="centre">
//             <div className="flex-row">
//               <div className="elect-panel">
//                 <i
//                   className="fa fa-sliders"
//                   aria-hidden="true"
//                   style={{ fontSize: "30px", marginTop: "10px" }}
//                   onClick={() => setShowUniquePositions(!showUniquePositions)}
//                 ></i>
//                 {showUniquePositions ? (
//                   <div className="uniqueposition-container">
//                     {uniquePositions.map((position) => (
//                       <button
//                         className={`elect-panel-button ${
//                           position === selectedPosition ? "selected" : ""
//                         }`}
//                         key={position}
//                         onClick={() => handlePositionClick(position)}
//                       >
//                         <div className="content" style={{ textAlign: "center" }}>
//                           {position}
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="menu-container">
//                     <button
//                       className={`elect-panel-button`}
//                       style={{ height: "7em" }}
//                       onClick={() => handleOptionClick("campaign")}
//                     >
//                       <div className="content" style={{ textAlign: "center" }}>
//                         campaign
//                       </div>
//                     </button>
//                     <Link to="/vote" className="custom-link">
//                       <button
//                         className={`elect-panel-button`}
//                         style={{ height: "7em" }}
//                       >
//                         <div className="content" style={{ textAlign: "center" }}>
//                           vote
//                         </div>
//                       </button>
//                     </Link>
//                     <Link to="/current" className="custom-link">
//                       <button
//                         className={`elect-panel-button`}
//                         style={{ height: "7em" }}
//                       >
//                         <div className="content" style={{ textAlign: "center" }}>
//                           current
//                         </div>
//                       </button>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div style={{ marginLeft: "18%" }}>
//                  <Carousel breakPoints={breakPoints}>
//                   {filteredCandidates.map((candidate) => (
//                     <div className="event" key={candidate.id}>
//                       <div
//                         className="blog-post"
//                         id="event-post"
//                         style={{
//                           backgroundColor: "#98babb",
//                           marginTop: "1em",
//                           marginBottom: "50px",
//                         }}
//                       >
//                         <img
//                           src={candidate.image}
//                           alt={candidate.name}
//                           style={{ height: "8em" }}
//                         />
//                         <b>{candidate.name}</b>
//                         {candidate.position}
//                       </div>
//                     </div>
//                   ))}
//                 </Carousel>
//                 <br></br>
//                 {filteredCandidates.map((candidate, index) => {
//                   const isEven = index % 2 === 0;
//                   const cardId = isEven ? "campaign-green" : "campaign-blue";

//                   return (
//                     <div>
//                       <div className="pics" id={cardId} key={candidate.id}>
//                         {/* <div className="flex-row">
//                         <div className="content">
//                           <b>{candidate.name}</b>
//                         </div>
//                         <img
//                           src={candidate.image}
//                           alt={candidate.name}
//                           style={{ height: "8em" }}
//                         />
//                       </div> */}
//                         <div className="title">{candidate.name}</div>
//                         <div className="side-content">
//                         <div>
//                           <h4>{candidate.position}</h4>
//                           <br></br>
//                             {candidate.moto}
//                             <br></br>
//                             <hr></hr>
//                             <b>about:</b> {candidate.about}
//                           </div>
//                           <div>
//                             <div id="side_box">
//                               {/* Render the image */}
//                               <img
//                                 src={candidate.pic}
//                                 alt="candidate picture"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <hr></hr>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Campaign;


// import React, { useState } from "react";
// import Nav from "./nav.jsx";
// import Panel from "./panel.jsx";
// import candidates from "../candidates.jsx";
// import Carousel from "react-elastic-carousel";
// import { Link } from "react-router-dom";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function Campaign() {
//   const [selectedPosition, setSelectedPosition] = useState(null);

//   // Get unique positions from candidates array
//   const uniquePositions = Array.from(
//     new Set(candidates.map((candidate) => candidate.position))
//   );

//   const filteredCandidates = selectedPosition
//     ? candidates.filter((candidate) => candidate.position === selectedPosition)
//     : candidates;

//   const handlePositionClick = (position) => {
//     setSelectedPosition(position);
//   };

//   const menu=["campaign", "vote", "current"];
//   const handleOptionClick = (option) => {
//   };

//   return (
    
//     <div>
//       <div className="home" id="blog-bg">
//         <Nav />
//         <div id="flex-row">
//           <Panel />
//           <div className="centre">
//             <div className="flex-row">
//               <div className="elect-panel">
//                 <i
//                   className="fa fa-sliders"
//                   aria-hidden="true"
//                   style={{ fontSize: "30px", marginTop: "10px" }}
//                 ></i>
//                 {/* <div className="uniqueposition-container">
//                 {uniquePositions.map((position) => (
//                   <button
//                     className={`elect-panel-button ${
//                       position === selectedPosition ? "selected" : ""
//                     }`}
//                     key={position}
//                     onClick={() => handlePositionClick(position)}
//                   >
//                     <div className="content" style={{ textAlign: "center" }}>
//                       {position}
//                     </div>
//                   </button>
//                 ))}
//                 </div> */}
//                 <div className="menu-container">
//                 {menu.map((option) => (
//                   <button
//                     className={`elect-panel-button ${
//                       option === selectedPosition ? "selected" : ""
//                     }`}
//                     key={option}
//                     onClick={() => handleOptionClick(option)}
//                   >
//                     <div className="content" style={{ textAlign: "center" }}>
//                       {option}
//                     </div>
//                   </button>
//                 ))} 
//                 </div>
//               </div>
//               <div
//                 style={{ marginLeft: "18%" }}
//               >
//                 <Carousel breakPoints={breakPoints}>
//                   {filteredCandidates.map((candidate) => (
//                     <div className="event" key={candidate.id}>
//                       <div
//                         className="blog-post"
//                         id="event-post"
//                         style={{
//                           backgroundColor: "#98babb",
//                           marginTop: "1em",
//                           marginBottom: "50px",
//                         }}
//                       >
//                         <img
//                           src={candidate.image}
//                           alt={candidate.name}
//                           style={{ height: "8em" }}
//                         />
//                         <b>{candidate.name}</b>
//                         {candidate.position}
//                       </div>
//                     </div>
//                   ))}
//                 </Carousel>
//                 <br></br>
//                 {filteredCandidates.map((candidate, index) => {
//                   const isEven = index % 2 === 0;
//                   const cardId = isEven ? "campaign-green" : "campaign-blue";

//                   return (
//                     <div>
//                       <div className="pics" id={cardId} key={candidate.id}>
//                         {/* <div className="flex-row">
//                         <div className="content">
//                           <b>{candidate.name}</b>
//                         </div>
//                         <img
//                           src={candidate.image}
//                           alt={candidate.name}
//                           style={{ height: "8em" }}
//                         />
//                       </div> */}
//                         <div className="title">{candidate.name}</div>
//                         <div className="side-content">
//                         <div>
//                           <h4>{candidate.position}</h4>
//                           <br></br>
//                             {candidate.moto}
//                             <br></br>
//                             <hr></hr>
//                             <b>about:</b> {candidate.about}
//                           </div>
//                           <div>
//                             <div id="side_box">
//                               {/* Render the image */}
//                               <img
//                                 src={candidate.pic}
//                                 alt="candidate picture"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <hr></hr>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Campaign;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Nav from "./nav.jsx";
// import Panel from "./panel.jsx";
// import candidates from "../candidates.jsx";
// import Carousel from "react-elastic-carousel";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function Campaign() {
//   const [selectedPosition, setSelectedPosition] = useState(null);

//   // Get unique positions from candidates array
//   const uniquePositions = Array.from(
//     new Set(candidates.map((candidate) => candidate.position))
//   );

//   const filteredCandidates = selectedPosition
//     ? candidates.filter((candidate) => candidate.position === selectedPosition)
//     : candidates;

//   const handlePositionClick = (position) => {
//     setSelectedPosition(position);
//   };

//   return (
//     <div>
//       <div className="home" id="blog-bg">
//         <Nav />
//         <div id="flex-row">
//           <Panel />
//           <div className="centre">
//             <div className="flex-row">
//               <div className="elect-panel">
//               <i class="fa fa-long-arrow-left" aria-hidden="true" style={{ fontSize: "30px", marginTop: "10px", left:"0%", position:"absolute" }}></i>
//                 <i
//                   className="fa fa-sliders"
//                   aria-hidden="true"
//                   style={{ fontSize: "30px", marginTop: "10px" }}
//                 ></i>
//                 {uniquePositions.map((position) => (
//                   <button
//                     className={`elect-panel-button ${
//                       position === selectedPosition ? "selected" : ""
//                     }`}
//                     key={position}
//                     onClick={() => handlePositionClick(position)}
//                   >
//                     <div className="content" style={{ textAlign: "center" }}>
//                       {position}
//                     </div>
//                   </button>
//                 ))}
//               </div>
//               <div
//                 style={{ marginLeft: "18%" }}
//                 className="elect-right-container"
//               >
//                 <Carousel breakPoints={breakPoints}>
//                   {filteredCandidates.map((candidate) => (
//                     <div className="event" key={candidate.id}>
//                       <div
//                         className="blog-post"
//                         id="event-post"
//                         style={{
//                           backgroundColor: "#98babb",
//                           marginTop: "1em",
//                         }}
//                       >
//                         <img
//                           src={candidate.image}
//                           alt={candidate.name}
//                           style={{ height: "8em" }}
//                         />
//                         <b>{candidate.name}</b>
//                         {candidate.position}
//                       </div>
//                     </div>
//                   ))}
//                 </Carousel>
//                       <br></br>
//                 {filteredCandidates.map((candidate, index) => {
//                   const isEven = index % 2 === 0;
//                   const cardClass = isEven
//                     ? "campaign-card-left"
//                     : "campaign-card-right";

//                   return (
//                     <div className={cardClass} key={candidate.id}>
//                       <div className="flex-row">
//                         <div className="content">
//                           <b>{candidate.name}</b>
//                         </div>
//                         <img
//                           src={candidate.image}
//                           alt={candidate.name}
//                           style={{ height: "8em" }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Campaign;

// import React from "react";
// import { Link } from "react-router-dom";
// import Nav from "./nav.jsx";
// import Panel from "./panel.jsx";
// import candidates from "../candidates.jsx";
// import Carousel from "react-elastic-carousel";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function Campagin() {
//   return (
//     <div>
//       <div className="home" id="blog-bg">
//         <Nav />
//         <div id="flex-row">
//           <Panel />
//           <div className="centre">
//             <div className="flex-row">
//               <div className="elect-panel">
//               <i class="fa fa-sliders" aria-hidden="true"  style={{fontSize:"32px", marginTop:"10px"}}></i>
//                 <button className="elect-panel-button">
//                   <div className="content" style={{ textAlign: "center" }}>
//                     Position
//                   </div>
//                 </button>
//               </div>
//               <div style={{ marginLeft: "18%"}}>
//                 <Carousel breakPoints={breakPoints}>
//                   {candidates.map((candidate) => (
//                     <div className="event">
//                       <div
//                         className="blog-post"
//                         id="event-post"
//                         style={{ backgroundColor: "#98babb", marginTop: "1em" }}
//                         key={candidate.id}
//                       >
//                         <img
//                           src={candidate.image}
//                           alt={candidate.name}
//                           style={{ height: "8em" }}
//                         />
//                         <b>{candidate.name}</b>
//                       </div>
//                     </div>
//                   ))}
//                 </Carousel>

//                 {candidates.map((candidate) => (
//                   <div className="campaign-card-left">
//                     <div className="flex-row">
//                       <div className="content">
//                         <b>{candidate.name}</b>
//                       </div>
//                       <img
//                           src={candidate.image}
//                           alt={candidate.name}
//                           style={{ height: "8em" }}
//                         />
//                     </div>
//                 </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Campagin;
