import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="web-logo">
            <img className="logo" src="src/assets/webastro-logo.png" />
          </div>

          <ul className="nav-links">
            <Link to="http://localhost:5005/signs"><li>Horoscope Signs</li></Link>
            <Link to="http://localhost:5005/triplicities"><li>Triplicities</li></Link>
            <Link to="http://localhost:5005/users/:userId"><li>My Page</li></Link>
            <Link to="/about"><li>About</li></Link>
          </ul>

          <div className="nav-searchbar">
            <input type="text" placeholder="search"></input>
            <button className="search-btn" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
