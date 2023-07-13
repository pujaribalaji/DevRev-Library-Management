import React, { useState } from "react";
import "./login.css";
import { auth } from "./config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log("success", user);
        setEmail(user.email);
        navigate("/");
      })
      .catch((error) => {
        alert("An error occurred. Please try again later.");
        console.error(error);
      });
  };

  const handleSignIn = () => {
    // Perform email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        alert("Logged in as " + user.email);
        navigate("/");
      })
      .catch((error) => {
        alert("An error occurred. Please try again later.");
        console.error(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="head">
          Get Your <span className="span1"> Book</span>
        </div>
        <div className="input1">
          <input
            className="inp"
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="inp"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button onClick={handleSignIn} className="inp1">
            Login
          </button>
          <div className="use">
            New User? <a href="/signup">Sign In Here!</a>
          </div>
          <button className="inp1" onClick={handleGoogle}>
            Sign in with google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
