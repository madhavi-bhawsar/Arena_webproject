// Payments.js
import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import home from "./images/home-icon.png";
import prev from "./images/previous-button-icon.png";

function Payments() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const navigate = useNavigate(); 

  const [paymentList] = useState([
    // Add monthly entries for upcoming months in the current year
    ...Array(12 - currentMonth).fill().map((_, index) => ({
      pay_for: `society monthly maintenance (Month ${currentMonth + index + 1})`,
      due_date: `1/${currentMonth + index + 1}/${currentYear}`,
      amount: 50000,
      payed: false
    })),
    {
      pay_for: "water yearly expenses",
      due_date: `31/12/${currentYear}`,
      amount: 5000,
      payed: false
    },
    {
      pay_for: "garbage yearly maintenance",
      due_date: `31/12/${currentYear}`,
      amount: 1000,
      payed: false
    },
    {
      pay_for: "cultural events yearly expenses",
      due_date: `31/12/${currentYear}`,
      amount: 1000,
      payed: false
    },
  ]);

  const totalRemainingAmount = paymentList.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const handlePay = (payFor, amount) => {
    // Redirect to the paying page with pay_for and amount as query parameters
    navigate(`/paying?pay_for=${encodeURIComponent(payFor)}&amount=${amount}`);
  };

  const renderPaymentRows = () => {
    return paymentList.map((payment, index) => (
      <tr key={index}>
        <td>{payment.pay_for}</td>
        <td>{payment.due_date}</td>
        <td>{payment.amount}</td>
        <td>
          <center>
            <button
              style={{
                backgroundColor: "#98BABB",
                fontFamily: "Cormorant Upright",
                fontSize: "1em",
                color: "white",
              }}
              onClick={() => handlePay(payment.pay_for, payment.amount)}
            >
              Pay
            </button>
          </center>
        </td>
      </tr>
    ));
  };

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
        <h3
          style={{
            marginLeft: "33%",
            marginTop: "1.5em",
            fontFamily: "monospace",
          }}
        >
          Payments remaining
        </h3>
      </div>
      <div className="event_view_image" style={{ height: "auto" }}>
        <table id="payment">
          <thead>
            <tr>
              <th>Pay for</th>
              <th>Last date</th>
              <th>Amount (Rs.)</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>{renderPaymentRows()}</tbody>
        </table>
      </div>
      <div style={{ textAlign: "center" }}>
        <h4>Total Remaining Amount for {currentYear}:</h4>
        <p>{totalRemainingAmount} Rs.</p>
        <button
          className="log_button"
          style={{ marginLeft: "0%", marginTop: "0%" }}
          onClick={() => handlePay("Total Remaining Amount", totalRemainingAmount)}
        >
          PAY
        </button>
      </div>
    </div>
  );
}

export default Payments;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";

// function Payments() {
//   const currentYear = new Date().getFullYear();
//   const currentMonth = new Date().getMonth() + 1;

//   const [paymentList, setPaymentList] = useState([
//     // Add monthly entries for upcoming months in the current year
//     ...Array(12 - currentMonth).fill().map((_, index) => ({
//       pay_for: `society monthly maintenance (Month ${currentMonth + index + 1})`,
//       due_date: `1/${currentMonth + index + 1}/${currentYear}`,
//       amount: 50000,
//     })),
//     {
//       pay_for: "water yearly expenses",
//       due_date: "31/12/23",
//       amount: 5000,
//     },
//     {
//       pay_for: "garbage yearly maintenance",
//       due_date: "31/12/23",
//       amount: 1000,
//     },
//     {
//       pay_for: "cultural events yearly expenses",
//       due_date: "31/12/23",
//       amount: 1000,
//     },
//   ]);

//   const totalRemainingAmount = paymentList.reduce(
//     (total, payment) => total + payment.amount,
//     0
//   );

//   const renderPaymentRows = () => {
//     return paymentList.map((payment, index) => (
//       <tr key={index}>
//         <td>{payment.pay_for}</td>
//         <td>{payment.due_date}</td>
//         <td>{payment.amount}</td>
//         <td>
//           <center>
//             <button
//               style={{
//                 backgroundColor: "#98BABB",
//                 fontFamily: "Cormorant Upright",
//                 fontSize: "1em",
//                 color: "white",
//               }}
//             >
//               Pay
//             </button>
//           </center>
//         </td>
//       </tr>
//     ));
//   };

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
//         <h3
//           style={{
//             marginLeft: "33%",
//             marginTop: "1.5em",
//             fontFamily: "monospace",
//           }}
//         >
//           Payments remaining
//         </h3>
//       </div>
//       <div className="event_view_image" style={{ height: "auto" }}>
//         <table id="payment">
//           <thead>
//             <tr>
//               <th>Pay for</th>
//               <th>Last date</th>
//               <th>Amount (Rs.)</th>
//               <th>Pay</th>
//             </tr>
//           </thead>
//           <tbody>{renderPaymentRows()}</tbody>
//         </table>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <h4>Total Remaining Amount for {currentYear}:</h4>
//         <p>{totalRemainingAmount} Rs.</p>
//         <button className="log_button" style={{ marginLeft: "0%", marginTop: "0%" }}>
//           PAY
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Payments;


// import React from "react";
// import { Link } from "react-router-dom";
// import home from "./images/home-icon.png";
// import prev from "./images/previous-button-icon.png";

// const payment_list = [
//   {
//     pay_for: "society monthly maintainance",
//     due_date: "10/6/23",
//     amount: 50000,
//   },
//   {
//     pay_for: "water yearly expenses",
//     due_date: "31/12/23",
//     amount: 5000,
//   },
//   {
//     pay_for: "garbage yearly maintainance",
//     due_date: "31/12/23",
//     amount: 1000,
//   },
//   {
//     pay_for: "cultural events yearly expenses",
//     due_date: "31/12/23",
//     amount: 1000,
//   },
// ];

// function Payments() {
//   return (
//     <div>
//       <div id="flex-row">
//         <img src={prev} alt="previous page" className="side_icons"></img>
//         <Link to="/home">
//           <img
//             src={home}
//             alt="home"
//             className="side_icons"
//             style={{
//               marginLeft: "1em",
//             }}
//           ></img>
//         </Link>
//         <h3
//           style={{
//             marginLeft: "35%",
//             marginTop: "1.5em",
//             fontFamily: "monospace",
//           }}
//         >
//           Payments remaining
//         </h3>
//       </div>
//       <div className="event_view_image" style={{ height: "auto" }}>
//         <table id="payment">
//           <tr>
//             <th>Pay for</th>
//             <th>Last date</th>
//             <th>Amount (Rs.)</th>
//             <th>Pay</th>
//           </tr>
//           <tr>
//             <td>{payment_list.pay_for}</td>
//             <td>{payment_list.due_date}</td>
//             <td>{payment_list.amount}</td>
//             <td>
//               <center>
//                 <button
//                   style={{
//                     backgroundColor: "#98BABB",
//                     fontFamily: "Cormorant Upright",
//                     fontSize: "1em",
//                     color: "white",
//                   }}
//                 >
//                   Pay
//                 </button>
//               </center>
//             </td>
//           </tr>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Payments;
