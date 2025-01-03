import React, { useRef, useState } from "react";

import classNames from "classnames";
import "../App.css"; // Import the CSS file
import { Link } from "react-router-dom";
import mybg from "./logos/20285469_6187456.svg";
import { useNavigate } from "react-router-dom";
const {host} = require("../env.js");

const SignupComponent = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [c_password, setC_Password] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);
  let navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleC_PasswordChange = (e) => {
    setC_Password(e.target.value);
  };
  const handleAgreementChange = (e) => {
    setAgreementChecked(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== c_password) {
      alert("Passwords do not match");
      return;
    }
    if (!agreementChecked) {
      alert("Please agree to the terms and conditions");
      return;
    }
    
    // Perform signup logic here, e.g., send the data to the server
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
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
      navigate("/");
      window.location.reload();
    } else {
      handleSignIn();
      props.setMessage1("Invalid credentials");
      props.setType1("danger")
      props.setShowAlert1(true);
      setTimeout(() => {
        props.setShowAlert1(false);
      }, 3000);

     
      setUsername("");
      setEmail("");
      setPassword("");
      setC_Password("");
      setName("");
    }
    // Clear form fields after submission
  
  };

  // CSS classes using classNames package
  const containerClasses = classNames("signup-container");
  const formClasses = classNames("signup-form");
  const inputClasses = classNames("signup-input");
  const buttonClasses = classNames("signup-button");
  
  const submit_btn = useRef(null);
 

  const handleSignIn = async () => {
    
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
      props.setType1("success")
      props.setShowAlert1(true);
      setTimeout(() => {
        props.setShowAlert1(false);
      }, 2000);
      navigate("/");
      window.location.reload();
    } else {
      props.setMessage1("Invalid credentials");
      props.setType1("danger")
      props.setShowAlert1(true);
      setTimeout(() => {
        props.setShowAlert1(false);
      }, 3000);
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
        ></img>
      </div>
      <div className="SU">
        <div className={containerClasses}>
          <h2>Welcome to Event Manager dashboard!</h2>
          <h5>
            Create an account or <Link to="/signin">log in</Link>
          </h5>
          <hr className="signupHR"></hr>
          <form className={formClasses}>
            <div className="input_row">
              <label className="my_label" htmlFor="Name">
                Name{" "}
              </label>
              <input
                type="text"
                id="Name"
                className={inputClasses}
                value={Name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="input_row">
              <label className="my_label" htmlFor="username">
                Username{" "}
              </label>
              <input
                type="text"
                id="username"
                className={inputClasses}
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="input_row">
              <label className="my_label" htmlFor="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className={inputClasses}
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input_row">
              <label className="my_label" htmlFor="password">
                Password{" "}
              </label>
              <input
                type="password"
                id="password"
                className={inputClasses}
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="input_row">
              <label className="my_label" htmlFor="c_password">
                Confirm Password{" "}
              </label>
              <input
                type="password"
                id="c_password"
                className={inputClasses}
                value={c_password}
                onChange={handleC_PasswordChange}
                required
              />
            </div>
            <div className="input_row">
              <label className="my_label">
                <input
                  type="checkbox"
                  checked={agreementChecked}
                  className="checkBox"
                  onChange={handleAgreementChange}
                  required
                />
                I agree to the terms and conditions
              </label>
            </div>

            <button ref={submit_btn} onClick={handleSubmit} className={buttonClasses}>
              Sign Up
            </button>
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default SignupComponent;

