import { useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Hero() {
  const [allSigns, setAllSigns] = useState([]);

  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    getSignData();
  }, []);

  const getSignData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/signs`,
      );
      console.log(response.data);
      setAllSigns(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const findSign = () => {
    const date = new Date(birthDate);
    const day = String(date.getDate()).padStart(2, "0");   //needed it to convert number to match my db dateStart/dateEnd info//also add a zero if number has only one digit "05-04"
    const month = String(date.getMonth() + 1).padStart(2, "0"); //month index starts from zero
    const formatted = `${day}-${month}`; 

 const found = allSigns.find((sign) => {
  const current = Number(formatted.split("-").reverse().join("")); // then convert to numbers for comparison // string comparison did not work accurately gave same sign// 0504

  const start = Number(
    sign.dateStart.split("-").reverse().join("")
  );

  const end = Number(
    sign.dateEnd.split("-").reverse().join("")
  );

  if (start <= end) {
    return current >= start && current <= end;
  } else {
    return current >= start || current <= end;
  }
  });

  setResult(found);
};


  

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
            <input
              type="date"
              value={birthDate}
              min="1940-01-01"
              max="2026-12-31"
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <button onClick={findSign}>Select Your Birthday to Find Your Zodiac Sign</button>
            {result && (
              <div>
                <h2>{result.name}</h2>
                 <Link to={`/signs/${result.id}`}><img src={result.imgUrl} /></Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
