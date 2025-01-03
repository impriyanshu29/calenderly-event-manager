import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import mybg from "./logos/20285469_6187456.svg";
import "../App.css";
const {host} = require("../env.js");

const SigninComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const submit_btn = useRef(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send the data to the server
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const json = await response.json();
    //console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.setMessage1("Loggen In successfully");
      props.setType1("success");
      props.setShowAlert1(true);
      setTimeout(() => {
        props.setShowAlert1(false);
      }, 2000);
      navigate("/");
      window.location.reload();
    } else {
      handleSignUp();
      props.setMessage1("Invalid credentials");
      props.setType1("danger");
      props.setShowAlert1(true);
      
      setTimeout(() => {
        props.setShowAlert1(false);
      }, 3000);
    }
    // Clear form fields after submission
  };
  
  const handleSignUp = async () => {
    //e.preventDefault();
    // Perform signup logic here, e.g., send the data to the server
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        username: username,
        password: password,
      }),
    });
    const json = await response.json();
    //console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.setMessage1("Account created successfully");
      props.setType1("success");
      props.setShowAlert1(true);
      setTimeout(() => {
        props.setShowAlert1(false);
      }, 3000);

      navigate("/");
      window.location.reload();

    } else {
      props.setMessage1("Login Failed");
      props.setType1("danger")
      props.setShowAlert1(true);
      setTimeout(() => {
        props.setShowAlert1(false);
      }, 3000);

   
      setUsername("");
      setEmail("");
      setPassword("");
      setName("");
    }
    // Clear form fields after submission
  
  };
 
  

  return (
    <div className="signupgrid">
      <div className="signupillustrator">
        <div className="typed-out" id="demo">
          <p
            style={{
              fontSize: "50px",
              display: "inline-block",
              marginBottom: "-10px",
            }}
          >
            J
          </p>
          oin the Excitement! Create, manage, and discover unforgettable
          experiences. Let's make every moment count together!
        </div>

        <img
          src={mybg}
          alt="illustration"
          id="signupillustratorimg"
          className="signupillustratorimg"
        />
      </div>
      <div className="SU">
        <div className="signup-container">
          <h2>Welcome to Event Manager dashboard!</h2>
          <h5>
            <Link to="/signup">Create an account</Link> or
            log in
          </h5>
          <hr className="signupHR" />
          <form className="signup-form">
            <div className="input_row">
              <label className="my_label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="signup-input"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div className="input_row">
              <label className="my_label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="signup-input"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <button
              ref={submit_btn}
              onClick={handleSubmit}
              className="signup-button"
            >
              Login
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default SigninComponent;
