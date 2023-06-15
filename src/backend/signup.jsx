import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/signup", {
        userId,
        firstName,
        lastName,
        address,
        contact,
        password,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error signing up user");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;


// import React, { useState } from "react";
// import axios from "axios";

// function Signup() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [contact, setContact] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/signup", {
//         firstName,
//         lastName,
//         address,
//         contact,
//         password,
//       });

//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage("Error signing up user");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Signup</h1>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Contact"
//           value={contact}
//           onChange={(e) => setContact(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
