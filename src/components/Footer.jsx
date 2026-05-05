import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-overlay">
          <div class="footer-container">
            <div class="footer-brand">
              <h2 class="footer-logo">WebAstro</h2>
              <p class="footer-tagline">
                Discover your cosmic story through astrology with the celestial
                wisdom.
              </p>
            </div>
            <div class="footer-bottom">
              <p>© 2026 WebAstro. All cosmic rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
