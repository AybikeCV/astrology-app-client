import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

import logo from "../assets/webastro-logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="web-logo">
            <Link to="/">
              <img className="logo" src={logo} />
            </Link>
          </div>

          <ul className="nav-links">
            <Link to="/signs">
              <li>All 12 Zodiac Signs</li>
            </Link>
            <Link to="/triplicities">
              <li>Triplicities</li>
            </Link>
           {/* <Link to="/comments">
              <li>Comments</li>
            </Link> */}
            <Link to="/about">
              <li>About</li>
            </Link>
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
