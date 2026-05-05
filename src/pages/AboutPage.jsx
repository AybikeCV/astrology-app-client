import React from "react";
import { Routes, Route } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <div className="aboutPage">
        <div className="aboutme">
          <h3>About Me</h3>

          <h4>Aybike Celebi Visser</h4>

          <p>Hi, I am Aybike.</p>
          <p>
            Astrology is one of my interests, as well as languages, building
            legos and many others.
          </p>
          <p>This website project is dedicated to my interest in Astrology.</p>
          <a href="https://github.com/AybikeCV">
            Please visit my GitHub Profile
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
