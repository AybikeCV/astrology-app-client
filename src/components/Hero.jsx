import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section class="hero">
        <div class="hero-overlay">
          <div class="hero-content">
            <p class="hero-subtitle">Welcome to WebAstro</p>

            <h1 class="hero-title">Discover Your Cosmic Story</h1>

            <p class="hero-text">
              Explore zodiac signs, and their meanings. Learn more about
              yourself through astrology in a calm and beautiful space.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
