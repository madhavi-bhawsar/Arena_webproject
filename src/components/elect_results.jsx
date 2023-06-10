import React, { useState } from "react";
import candidates from "../candidates.jsx";

function BarGroup(props) {
  let barPadding = 2;
  let barColour = "#348AA7";
  let widthScale = d => d * 10;

  let width = widthScale(props.d.votes);
  let yMid = props.barHeight * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {props.d.name}
      </text>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={props.barHeight - barPadding}
        fill={barColour}
      />
      <text
        className="value-label"
        x={width - 8}
        y={yMid}
        alignmentBaseline="middle"
      >
        {props.d.votes}
      </text>
    </g>
  );
}

const Results = () => {
  let barHeight = 30;

  let positions = [...new Set(candidates.map((candidate) => candidate.position))];

  return (
    <div>
      {positions.map((position) => (
        <div key={position}>
          <h2>{position} Position</h2>
          <svg width="800" height="300">
            <g className="container">
              <g className="scale">
                {[...Array(11)].map((_, index) => (
                  <text
                    className="scale-label"
                    x="-10"
                    y={barHeight * index + barHeight / 2}
                    alignmentBaseline="middle"
                    key={index}
                  >
                    {index * 10}
                  </text>
                ))}
              </g>
              <g className="chart" transform="translate(100,60)">
                {candidates
                  .filter((candidate) => candidate.position === position)
                  .map((candidate, i) => (
                    <g
                      transform={`translate(0, ${i * barHeight})`}
                      key={candidate.id}
                    >
                      <BarGroup
                        d={candidate}
                        barHeight={barHeight}
                        maxValue={100}
                      />
                    </g>
                  ))}
              </g>
            </g>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Results;


// import React, { useState } from "react";
// import candidates from "../candidates.jsx";

// function BarGroup(props) {
//   let barPadding = 2;
//   let barColour = "#348AA7";
//   let widthScale = d => d * 10;

//   let width = widthScale(props.d.votes);
//   let yMid = props.barHeight * 0.5;

//   return (
//     <g className="bar-group">
//       <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
//         {props.d.name}
//       </text>
//       <rect
//         y={barPadding * 0.5}
//         width={width}
//         height={props.barHeight - barPadding}
//         fill={barColour}
//       />
//       <text
//         className="value-label"
//         x={width - 8}
//         y={yMid}
//         alignmentBaseline="middle"
//       >
//         {props.d.votes}
//       </text>
//     </g>
//   );
// }

// const Results = () => {
//   let barHeight = 30;

//   let maxValue = Math.max(...candidates.map((candidate) => candidate.votes));

//   let barGroups = candidates.map((candidate, i) => (
//     <g transform={`translate(0, ${i * barHeight})`} key={candidate.id}>
//       <BarGroup d={candidate} barHeight={barHeight} maxValue={maxValue} />
//     </g>
//   ));

//   return (
//     <svg width="800" height="300">
//       <g className="container">
//         <g className="scale">
//           {[...Array(maxValue + 1)].map((_, index) => (
//             <text
//               className="scale-label"
//               x="-10"
//               y={(barHeight * index) + (barHeight / 2)}
//               alignmentBaseline="middle"
//               key={index}
//             >
//               {index}
//             </text>
//           ))}
//         </g>
//         <g className="chart" transform="translate(100,60)">
//           {barGroups}
//         </g>
//       </g>
//     </svg>
//   );
// };

// export default Results;


// import React, { useState } from "react";

// function BarGroup(props) {
//   let barPadding = 2;
//   let barColour = "#348AA7";
//   let widthScale = d => d * 10;

//   let width = widthScale(props.d.votes);
//   let yMid = props.barHeight * 0.5;

//   return (
//     <g className="bar-group">
//       <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
//         {props.d.name}
//       </text>
//       <rect
//         y={barPadding * 0.5}
//         width={width}
//         height={props.barHeight - barPadding}
//         fill={barColour}
//       />
//       <text
//         className="value-label"
//         x={width - 8}
//         y={yMid}
//         alignmentBaseline="middle"
//       >
//         {props.d.votes}
//       </text>
//     </g>
//   );
// }

// const Results = () => {
//   const candidates = [
//     {
//       id: 0,
//       name: "Person1",
//       votes: 0,
//     },
//     {
//       id: 1,
//       name: "Person2",
//       votes: 10,
//     },
//     {
//       id: 2,
//       name: "Person3",
//       votes: 40,
//     },
//     {
//       id: 3,
//       name: "Person4",
//       votes: 5,
//     },
//     {
//       id: 4,
//       name: "Person5",
//       votes: 50,
//     },
//   ];

//   let barHeight = 30;

//   let maxValue = Math.max(...candidates.map((candidate) => candidate.votes));

//   let barGroups = candidates.map((candidate, i) => (
//     <g transform={`translate(0, ${i * barHeight})`} key={candidate.id}>
//       <BarGroup d={candidate} barHeight={barHeight} maxValue={maxValue} />
//     </g>
//   ));

//   return (
//     <svg width="800" height="300">
//       <g className="container">
//         <g className="scale">
//           {[...Array(maxValue + 1)].map((_, index) => (
//             <text
//               className="scale-label"
//               x="-10"
//               y={(barHeight * index) + (barHeight / 2)}
//               alignmentBaseline="middle"
//               key={index}
//             >
//               {index}
//             </text>
//           ))}
//         </g>
//         <g className="chart" transform="translate(100,60)">
//           {barGroups}
//         </g>
//       </g>
//     </svg>
//   );
// };

// export default Results;


// import React, { useState } from "react";

// function BarGroup(props) {
//     let barPadding = 2
//     let barColour = '#348AA7'
//     let widthScale = d => d * 10
  
//     let width = widthScale(props.d.value)
//     let yMid = props.barHeight * 0.5
    
//     return <g className="bar-group">
//       <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
//       <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
//       <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
//     </g>
//   }
  
//   class Results extends React.Component {
//     state = {
//       data: [
//         { name: 'Mon', value: 20 },
//         { name: 'Tue', value: 40 },
//         { name: 'Wed', value: 35 },
//         { name: 'Thu', value: 50 },
//         { name: 'Fri', value: 55 },
//         { name: 'Sat', value: 40 },
//         { name: 'Sun', value: 30 }
//       ]
//     }
  
//     render() {
//       let barHeight = 30
          
//       let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
//                                                       <BarGroup d={d} barHeight={barHeight} />
//                                                     </g>)                         
      
//       return <svg width="800" height="300" >
//         <g className="container">
//           <g className="chart" transform="translate(100,60)">
//             {barGroups}
//           </g>
//         </g>
//       </svg>
//     }
//   }
  
// export default Results;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Nav from "./nav.jsx";
// import Panel from "./panel.jsx";

// function Results() {
//   return (
//     <div className="event-bg">
        
//     </div>
//     );
//   }
  
//   export default Results;