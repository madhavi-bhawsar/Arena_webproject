// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const YourComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/data');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from Collection</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item._id}>
//             <p>Name: {item.name}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YourComponent;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const YourComponent = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3001/api/data');
// //         setData(response.data);
// //       } catch (error) {
// //         console.error('Error:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Data from Collection</h1>
// //       <ul>
// //         {data.map((item) => (
// //           <li key={item._id}>{item.name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default YourComponent;
