import { useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Hero() {
  {
    /* Prop-drill for the bonus func /next time need to use context for all signs db */
  }

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
    const day = String(date.getDate()).padStart(2, "0");
    {
      /*needed it to convert number to match my db dateStart/dateEnd info*/
    }
    {
      /*also padStart to add 0 if number has only one digit "05-04"*/
    }
    const month = String(date.getMonth() + 1).padStart(2, "0");
    {
      /* month index starts from zero*/
    }
    const formatted = `${day}-${month}`;

    const found = allSigns.find((sign) => {
      const current = Number(formatted.split("-").reverse().join(""));
      {
        /*convert to numbers for the accurate comparison 0504*/
      }
      const start = Number(sign.dateStart.split("-").reverse().join(""));

      const end = Number(sign.dateEnd.split("-").reverse().join(""));

      if (start <= end) {
        return current >= start && current <= end;
      } else {
        {
          /* else is for capricorn since year wraps*/
        }
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
              type="text"
              placeholder="MM-DD"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <button onClick={findSign}>
              Enter Your Birth Date to Find Your Zodiac Sign
            </button>
            {result && (
              <div>
                <h2>{result.name}</h2>
                <Link to={`/signs/${result.id}`}>
                  <img src={result.imgUrl} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
