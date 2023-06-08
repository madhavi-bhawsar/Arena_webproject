import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";
import done from "./images/done-icon.png";

function Paying() {
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackButton(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
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
      </div>
      <div>
        {showBackButton ? (
          <div
            style={{
              color: "#00CB75",
              marginTop: "12%",
              textAlign: "center",
            }}
          >
            <img src={done} alt="done" className="icons"></img><br></br><br></br>
              <center>
                <h4>Transaction successfull...</h4><br></br>
              </center>
            <Link to="/payments">
              <button style={{backgroundColor:"#1B425F", color:"white"}}>Back to payment</button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="loading-animation">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <center>
              <h4>rendering the Payment...</h4>
            </center>
          </div>
        )}
      </div>
    </div>
  );
}

export default Paying;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";

// function Paying() {
//   const [showBackButton, setShowBackButton] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowBackButton(true);
//     }, 5000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div>
//       <div id="flex-row">
//         <img src={prev} alt="previous page" className="side_icons" />
//         <Link to="/home">
//           <img
//             src={home}
//             alt="home"
//             className="side_icons"
//             style={{
//               marginLeft: "1em",
//             }}
//           />
//         </Link>
//       </div>
//       <div>
//         {showBackButton ? (
//           <div>
//             <div>
//               <p>Payment rendered. Click the button to go back.</p>
//             </div>
//             <Link to="/payments">
//               <button>Back</button>
//             </Link>
//           </div>
//         ) : (
//           <div>
//             <p>Rendering payment details...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Paying;

// import React from "react";
// import { Link } from "react-router-dom";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";

// function Paying() {
//   return (
//     <div>
//       <div id="flex-row">
//         <img src={prev} alt="previous page" className="side_icons" />
//         <Link to="/home">
//           <img
//             src={home}
//             alt="home"
//             className="side_icons"
//             style={{
//               marginLeft: "1em",
//             }}
//           />
//         </Link>
//       </div>
//       <div>
//       paying...
//       </div>

//       <button>back</button>
//     </div>
//   );
// }

// export default Paying;
