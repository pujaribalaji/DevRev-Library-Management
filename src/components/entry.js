import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./entry.css";
import { Link } from "react-router-dom";
import Card from "./card";
import { auth } from "./config";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Entry() {
  const [search, setsearch] = useState("");
  const [bookdata, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(" ");
  const navigate = useNavigate();

  const searchbook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          " https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCa0U2tWZ_PtI3m93HSETa7wuInRaYz-x0" +
            "&maxResults=40"
        )
        .then((res) => setdata(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail("");
      }
    });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="t1">
        <div>
          Books<span className="s1">now.</span>
        </div>
        <div className="lo-1">
          {auth.currentUser ? (
            <div className="logged">
              <h1>logged in {email}</h1>
              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <Link
                style={{ textDecoration: "none", marginRight: 100 }}
                to="/login"
              >
                Login
              </Link>
              <Link style={{ textDecoration: "none" }} to="/signup">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      <div>
        {isLoading ? (
          <div className="anime">
            <Helmet>
              <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
            </Helmet>
            <lottie-player
              src="https://lottie.host/540cac11-5ede-474f-b1a1-ee12d7fc2dc8/HQPGHQvL1p.json"
              background="#FFFFFF"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              autoplay
            />
          </div>
        ) : (
          <>
            <div className="wel">
              Welcome To our <span className="s1">Booking Platform!</span>
            </div>
            <div>
              <input
                className="inp2"
                type="text"
                placeholder="search by name, author and genre"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                onKeyDown={searchbook}
              />
            </div>
            <div className="qu">
              Unlock the world of knowledge at your fingertips.
            </div>

            <div className="card1">{<Card book={bookdata} />}</div>
          </>
        )}
      </div>
    </>
  );
}

export default Entry;
