import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SignCard from "../components/SignCard";

function AllSignsList({ toggleFav, favSigns }) {
  const [allSigns, setAllSigns] = useState(null);

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

  if (!allSigns) {
    return (
      <div className="loadingContainer">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="pageContainer">
      {allSigns.map((eachSign) => {
        return (
          <SignCard
            className="signCard"
            key={eachSign.id}
            allSigns={allSigns}
            {...eachSign}
            toggleFav={toggleFav}
            isFav={favSigns.some((sign) => sign.id === eachSign.id)}
          />
        );
      })}
    </div>
  );
}

export default AllSignsList;
