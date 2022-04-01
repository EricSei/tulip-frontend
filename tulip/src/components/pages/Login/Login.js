import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AirlineApi from "../../../apis/AirlineApis";
import token from "../../../apis/AirlineApis";
//import "./App.css";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  //const [passwordError, setpasswordError] = useState("");
  //const [emailError, setemailError] = useState("");

  const loginSubmit = (e) => {

    const user = {
      "username": username,
      "password": password
    };

    AirlineApi.createAuthenticate(user)

    //token = .json;
    //const { jwt_token } = await response.json();

    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  name="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
