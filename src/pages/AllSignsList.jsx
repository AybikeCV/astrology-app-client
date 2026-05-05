import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SignCard from "../components/SignCard";

function AllSignsList() {
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

  if (!allSigns) return <h3 className="loading">Loading...</h3>;

  return (
    <div className="pageContainer">
      {allSigns.map((eachSign) => {
        return (
          <SignCard
            className="signCard"
            key={eachSign.id}
            allSigns={allSigns}
            {...eachSign}
          />
        );
      })}
    </div>
  );
}

export default AllSignsList;
