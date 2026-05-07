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
          <p> Please visit my GitHub and LinkedIn:</p>
          <a href="https://github.com/AybikeCV">GitHub Profile</a>
          <br/>
          <a href="https://www.linkedin.com/in/aybike-celebi-visser-6b9003106/">LinkedIn Profile</a>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
