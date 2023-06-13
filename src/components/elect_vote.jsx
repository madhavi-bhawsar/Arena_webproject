import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav.jsx";
import Panel from "./panel.jsx";

function Vote() {
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
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voted, setVoted] = useState(false);
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  // Get unique positions from candidates array
  const uniquePositions = Array.from(
    new Set(candidates.map((candidate) => candidate.position))
  );

  const handlePositionClick = (position) => {
    setSelectedPosition(position);
    setFilteredCandidates(
      candidates.filter((candidate) => candidate.position === position)
    );
    setSelectedCandidate(null);
  };

  const handleOptionClick = (option) => {
    if (option === "vote") {
      setShowUniquePositions(option === "vote");
      setSelectedPosition(null);
      setFilteredCandidates(candidates);
      setSelectedCandidate(null);
    }
  };

  const handleVote2Click = (candidate) => {
    setSelectedCandidate(candidate);
    setVoted(true);
    const updatedCandidates = candidates.map((c) => {
      if (c.id === candidate.id) {
        c.votes += 1; // Increment the vote count for the selected candidate
      }
      return c;
    });
    setFilteredCandidates(updatedCandidates);
  };

  const handleVote1Click = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const renderCandidateDetails = (candidate) => {
    return (
      <div
        className="pics"
        style={{ margin: "2em auto" }}
        key={candidate.id}
      >
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
              <img src={candidate.pic} alt="candidate_picture" />
            </div>
            {voted ? (
              <div className="thanks-message">Thanks for voting!</div>
            ) : (
              <button
                className="blue-button"
                style={{ marginTop: "7%" }}
                onClick={() => handleVote2Click(candidate)}
              >
                <h3>VOTE</h3>
              </button>
            )}
          </div>
        </div>
      </div>
    );
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
                        <div
                          className="content"
                          style={{ textAlign: "center" }}
                        >
                          {position}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="menu-container">
                    <Link to="/campaign" className="custom-link">
                      <button
                        className={`elect-panel-button`}
                        style={{ height: "7em" }}
                      >
                        <div
                          className="content"
                          style={{ textAlign: "center" }}
                        >
                          Campaign
                        </div>
                      </button>
                    </Link>

                    <button
                      className={`elect-panel-button`}
                      style={{ height: "7em" }}
                      onClick={() => handleOptionClick("vote")}
                    >
                      <div
                        className="content"
                        style={{ textAlign: "center" }}
                      >
                        Vote
                      </div>
                    </button>

                    <Link to="/current" className="custom-link">
                      <button
                        className={`elect-panel-button`}
                        style={{ height: "7em" }}
                      >
                        <div
                          className="content"
                          style={{ textAlign: "center" }}
                        >
                          Current
                        </div>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <div style={{ marginLeft: "18%" }} className="blog">
                {selectedCandidate ? (
                  renderCandidateDetails(selectedCandidate)
                ) : (
                  filteredCandidates.map((candidate, index) => {
                    return (
                      <div
                        className="blog-post"
                        id="voting-cards"
                        style={{
                          margin: "1em 2em 0em",
                          height: "270px",
                          width: "300px",
                        }}
                        key={candidate.id}
                      >
                        <img src={candidate.pic} alt="candidate_picture" />
                        <div className="content">{candidate.name}</div>
                        <b>{candidate.position}</b>
                        <button
                          className="blue-button"
                          onClick={() => handleVote1Click(candidate)}
                        >
                          VOTE
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Nav from "./nav.jsx";
// import Panel from "./panel.jsx";
// import candidates from "../candidates.jsx";

// function Vote() {
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [showUniquePositions, setShowUniquePositions] = useState(true);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);
//   const [voted, setVoted] = useState(false);
//   const [filteredCandidates, setFilteredCandidates] = useState(candidates);

//   // Get unique positions from candidates array
//   const uniquePositions = Array.from(
//     new Set(candidates.map((candidate) => candidate.position))
//   );

//   const handlePositionClick = (position) => {
//     setSelectedPosition(position);
//   };

//   const handleOptionClick = (option) => {
//     if (option === "vote") {
//       setShowUniquePositions(option === "vote");
//     }
//   };

//   const handleVote2Click = (candidate) => {
//     setSelectedCandidate(candidate);
//   setVoted(true);
//   const updatedCandidates = candidates.map((c) => {
//     if (c.id === candidate.id) {
//       c.votes += 1; // Increment the vote count for the selected candidate
//     }
//     return c;
//   });
//   setFilteredCandidates(updatedCandidates);
//   };

//   const handleVote1Click = (candidate) => {
//     setSelectedCandidate(candidate);
//   };

//   const renderCandidateDetails = (candidate) => {
//     return (
//       <div
//         className="pics"
//         style={{ margin: "2em auto" }}
//         key={candidate.id}
//       >
//         <div className="title">{candidate.name}</div>
//         <div className="side-content">
//           <div>
//             <h4>{candidate.position}</h4>
//             <br />
//             {candidate.moto}
//             <br />
//             <hr />
//             <b>about:</b> {candidate.about}
//           </div>
//           <div>
//             <div id="side_box">
//               {/* Render the image */}
//               <img src={candidate.pic} alt="candidate picture" />
//             </div>
//             {voted ? (
//               <div className="thanks-message">Thanks for voting!</div>
//             ) : (
//               <button
//                 className="blue-button"
//                 style={{ marginTop: "7%" }}
//                 onClick={() => handleVote2Click(candidate)}
//               >
//                 <h3>VOTE</h3>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     );
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
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                         >
//                           {position}
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="menu-container">
//                     <Link to="/campaign" className="custom-link">
//                       <button
//                         className={`elect-panel-button`}
//                         style={{ height: "7em" }}
//                       >
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                         >
//                           Campaign
//                         </div>
//                       </button>
//                     </Link>

//                     <button
//                       className={`elect-panel-button`}
//                       style={{ height: "7em" }}
//                       onClick={() => handleOptionClick("vote")}
//                     >
//                       <div
//                         className="content"
//                         style={{ textAlign: "center" }}
//                       >
//                         Vote
//                       </div>
//                     </button>

//                     <Link to="/current" className="custom-link">
//                       <button
//                         className={`elect-panel-button`}
//                         style={{ height: "7em" }}
//                       >
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                         >
//                           Current
//                         </div>
//                       </button>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div style={{ marginLeft: "18%" }} className="blog">
//                 {selectedCandidate ? (
//                   renderCandidateDetails(selectedCandidate)
//                 ) : (
//                   filteredCandidates.map((candidate, index) => {
//                     return (
//                       <div
//                         className="blog-post"
//                         id="voting-cards"
//                         style={{
//                           margin: "1em 2em 0em",
//                           height: "270px",
//                           width: "300px",
//                         }}
//                         key={candidate.id}
//                       >
//                         <img src={candidate.pic} alt="candidate picture" />
//                         <div className="content">{candidate.name}</div>
//                         <b>{candidate.position}</b>
//                         <button
//                           className="blue-button"
//                           onClick={() => handleVote1Click(candidate)}
//                         >
//                           VOTE
//                         </button>
//                       </div>
//                     );
//                   })
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Vote;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Nav from "./nav.jsx";
// import Panel from "./panel.jsx";
// import candidates from "../candidates.jsx";

// function Campaign() {
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [showUniquePositions, setShowUniquePositions] = useState(true);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);

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

//   const handleOptionClick = (option) => {
//     if (option === "vote") {
//       setShowUniquePositions(option === "vote");
//     }
//   };

//   const handleVote2Click = (candidate) => {

//   };
  
//   const handleVote1Click = (candidate) => {
//     setSelectedCandidate(candidate);
//   };

//   const renderCandidateDetails = (candidate) => {
//     return (
//         <div className="pics" style={{margin:"2em auto"}} key={candidate.id}>
//         <div className="title">{candidate.name}</div>
//         <div className="side-content">
//           <div>
//             <h4>{candidate.position}</h4>
//             <br />
//             {candidate.moto}
//             <br />
//             <hr />
//             <b>about:</b> {candidate.about}
//           </div>
//           <div>
//             <div id="side_box">
//               {/* Render the image */}
//               <img
//                 src={candidate.pic}
//                 alt="candidate picture"
//               />
//             </div>
//             <button className="blue-button" style={{marginTop:"7%"}} onClick={() => handleVote2Click(candidate)}><h3>VOTE</h3></button>
//           </div>
//         </div>
//       </div>
//     );
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
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                         >
//                           {position}
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="menu-container">
//                     <Link to="/campaign" className="custom-link">
//                       <button
//                         className={`elect-panel-button`}
//                         style={{ height: "7em" }}
//                       >
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                         >
//                           Campaign
//                         </div>
//                       </button>
//                     </Link>

//                     <button
//                       className={`elect-panel-button`}
//                       style={{ height: "7em" }}
//                       onClick={() => handleOptionClick("vote")}
//                     >
//                       <div
//                         className="content"
//                         style={{ textAlign: "center" }}
//                       >
//                         Vote
//                       </div>
//                     </button>

//                     <Link to="/current" className="custom-link">
//                       <button
//                         className={`elect-panel-button`}
//                         style={{ height: "7em" }}
//                       >
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                         >
//                           Current
//                         </div>
//                       </button>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div style={{ marginLeft: "18%" }} className="blog">
//                 {selectedCandidate ? (
//                   renderCandidateDetails(selectedCandidate)
//                 ) : (
//                   filteredCandidates.map((candidate, index) => {
//                     return (
//                       <div
//                         className="blog-post"
//                         id="voting-cards"
//                         style={{
//                           margin: "1em 2em 0em",
//                           height: "270px",
//                           width: "300px",
//                         }}
//                         key={candidate.id}
//                       >
//                         <img src={candidate.pic} alt="candidate picture" />
//                         <div className="content">{candidate.name}</div>
//                         <b>{candidate.position}</b>
//                         <button
//                           className="blue-button"
//                           onClick={() => handleVote1Click(candidate)}
//                         >
//                           VOTE
//                         </button>
//                       </div>
//                     );
//                   })
//                 )}
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

//   const handleOptionClick = (option) => {
//     if (option === "vote") {
//       setShowUniquePositions(option === "vote");
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
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                         >
//                           {position}
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="menu-container">
//                     <Link to="/campaign" className="custom-link">
//                     <button
//                       className={`elect-panel-button`}
//                       style={{ height: "7em" }}
//                     >
//                       <div className="content" style={{ textAlign: "center" }}>
//                         Campaign
//                       </div>
//                     </button>
//                     </Link>
                    
//                       <button
//                         className={`elect-panel-button`}
//                         style={{ height: "7em" }}
//                       >
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                           onClick={() => handleOptionClick("vote")}
//                         >
//                           Vote
//                         </div>
//                       </button>
                    
//                     <Link to="/current" className="custom-link">
//                       <button
//                         className={`elect-panel-button`}
//                         style={{ height: "7em" }}
//                       >
//                         <div
//                           className="content"
//                           style={{ textAlign: "center" }}
//                         >
//                           Current
//                         </div>
//                       </button>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <div style={{ marginLeft: "18%" }} className="blog">
//                 {filteredCandidates.map((candidate, index) => {
//                   return (
//                     <div
//                       className="blog-post"
//                       id="voting-cards"
//                       style={{
//                         margin: "1em 2em 0em",
//                         height: "270px",
//                         width: "300px",
//                       }}
//                       key={candidate.id}
//                     >
//                       <img src={candidate.pic} alt="candidate picture" />
//                       <div className="content">{candidate.name}</div>
//                       <b>{candidate.position}</b>
//                       <button className="blue-button">VOTE</button>
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
