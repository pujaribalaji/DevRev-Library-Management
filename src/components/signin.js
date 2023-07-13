import React, { useState } from "react";
import "./signin.css";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  getAuth,
  AuthErrorCodes,
} from "firebase/auth";
import { auth } from "./config";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Check if the email is already registered
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        throw new Error("Email already in use");
      }

      // Proceed with user registration
      await createUserWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        alert(
          "The email address is already in use. Please use a different email."
        );
      } else {
        alert(error);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !email || !password) {
      alert("Please fill in all the fields");
      return;
    }

    handleSignUp();
  };

  return (
    <>
      <div className="c-con">
        <div className="head-0">
          Get Your <span className="span1"> Book</span>
        </div>
        <div className="inpu">
          <form onSubmit={handleFormSubmit}>
            <input
              className="in"
              type="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="in"
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="in"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              className="in"
              type="password"
              placeholder="Re-enter password"
            ></input>
            <button className="in1" type="submit">
              Sign in
            </button>
          </form>

          <div>
            Already have an account? <a href="/login/">Log In Here!</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
