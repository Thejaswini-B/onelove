import Button from "../Components/Button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      const body = {
        email: email,
        password: password,
      };

      try {
        const response = await axios.post(
          "https://onelove-80825b023778.herokuapp.com/onelove/registration/login",
          // "http://localhost:3007/signin",
          body
        );

        // Successfully logged in
        // console.log(body);
        console.log(response);
        if (response.data.message === "Data fetched sucessfully") {
          alert("Login successful");
          navigate("/home");
        } else if (
          response.data.message === "No data found for the provided id."
        ) {
          alert("Wrong credentials , check mail and password");
        } else {
          alert("Unexpected error occurred. Please try again later.");
        }
      } catch (error) {
        console.log(error);
        alert("Unable to login");
      }
    } else {
      alert("Please enter email and password.");
    }
  };
  return (
    <div>
      {/* <Button text="From Login" /> */}
      {/* <input /> */}

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div style={{ padding: 110 }}>
              <div>
                <h4 className="login-text">Login Here</h4>
                <form onSubmit={handleSubmit}>
                  {/* <p>Email </p> */}
                  <input
                    style={{ marginBottom: 15, paddingLeft: 5 }}
                    type="email"
                    className="input-text"
                    value={email}
                    onChange={(e) => {
                      handleEmailChange(e);
                    }}
                    placeholder="Enter Your Email"
                    required
                  />
                  <br />
                  {/* <p>Password : </p> */}
                  <input
                    style={{ marginBottom: 2, paddingLeft: 5 }}
                    type="password"
                    value={password}
                    className="input-text"
                    onChange={(e) => {
                      handlePasswordChange(e);
                    }}
                    placeholder="Password"
                    required
                  />
                  <br />
                  <Link to="/forgotpassword">
                    <span>Forgot Password?</span>
                  </Link>
                  <Button text="Login" />
                </form>
                <Link to="/pageotp">
                  <Button text="Sign in with otp" />
                </Link>
                <p>
                  Don't Have An Account?
                  <Link to="/petowner">
                    <span>SignUp</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
