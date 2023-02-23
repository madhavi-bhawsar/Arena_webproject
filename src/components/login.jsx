import React from "react";
import login_bg from "./images/login_bg.png";

function Login() {
  return (
    <div>
      <img src={login_bg} alt="prev img" className="home"></img>
      <div className="login-card">
        <div className="log_head">Login</div>
        <form className="card-fill" id="space">
          <label>
            username/email:
            <br />
            <input type="text" name="name" className="input" />
          </label>
          <br />
          <br />
          <label>
            password:
            <br />
            <input type="text" name="name" className="input" />
          </label>
          <input type="submit" value="Go" className="log_button" />
        </form>
      </div>
    </div>
  );
}

export default Login;
