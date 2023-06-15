import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        userId,
        password,
      });

      setMessage(response.data.message);
      // Redirect to /home if login is successful
      if (response.data.success) {
        window.location.href = "/home";
      }
    } catch (error) {
      setMessage("Error logging in");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;


// import React, { useState } from "react";
// import login_bg from "./images/login_bg.png";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform API request to check user existence
//     setLoading(true);
//     fetch(`/users?firstName=${username}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("User not found");
//         }
//       })
//       .then((data) => {
//         // User exists, redirect to /home after 2 seconds
//         setTimeout(() => {
//           setLoading(false);
//           window.location.href = "/home";
//         }, 2000);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//         // Handle error and show appropriate message to the user
//       });
//   };

//   return (
//     <div>
//       <img src={login_bg} alt="prev img" className="home"></img>
//       <div className="login-card">
//         <div className="log_head">Login</div>
//         <form className="card-fill" id="space" onSubmit={handleSubmit}>
//           <label>
//             User Name:
//             <br />
//             <input
//               type="text"
//               name="name"
//               className="input"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <br />
//           <br />
//           <label>
//             Password:
//             <br />
//             <input
//               type="password"
//               name="name"
//               className="input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <input
//             type="submit"
//             value={loading ? "Logging in..." : "Go"}
//             className="log_button"
//             disabled={loading}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from "react";
// import login_bg from "./images/login_bg.png";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform API request to check user existence
//     setLoading(true);
//     fetch(`/users?firstName=${username}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("User not found");
//         }
//       })
//       .then((data) => {
//         // User exists, redirect to /home after 2 seconds
//         setTimeout(() => {
//           setLoading(false);
//           window.location.href = "/home";
//         }, 2000);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//         // Handle error and show appropriate message to the user
//       });
//   };

//   return (
//     <div>
//       <img src={login_bg} alt="prev img" className="home"></img>
//       <div className="login-card">
//         <div className="log_head">Login</div>
//         <form className="card-fill" id="space" onSubmit={handleSubmit}>
//           <label>
//             User Name:
//             <br />
//             <input
//               type="text"
//               name="name"
//               className="input"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <br />
//           <br />
//           <label>
//             Password:
//             <br />
//             <input
//               type="password"
//               name="name"
//               className="input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <input
//             type="submit"
//             value={loading ? "Logging in..." : "Go"}
//             className="log_button"
//             disabled={loading}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React from "react";
// import login_bg from "./images/login_bg.png";

// function Login() {
//   return (
//     <div>
//       <img src={login_bg} alt="prev img" className="home"></img>
//       <div className="login-card">
//         <div className="log_head">Login</div>
//         <form className="card-fill" id="space">
//           <label>
//             User Name:
//             <br />
//             <input type="text" name="name" className="input" />
//           </label>
//           <br />
//           <br />
//           <label>
//             Password:
//             <br />
//             <input type="text" name="name" className="input" />
//           </label>
//           <input type="submit" value="Go" className="log_button" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
