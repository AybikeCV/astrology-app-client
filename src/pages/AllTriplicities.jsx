import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TriplicityCard from "../components/TriplicityCard";

function AllTriplicities() {
  const [allTriplicities, setAllTriplicities] = useState(null);

  useEffect(() => {
    getTriplicityData();
  }, []);

  const getTriplicityData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/triplicities`,
      );
      console.log(response.data);
      setAllTriplicities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!allTriplicities) return <h3 className="loading">Loading...</h3>;

  return (
    <div className="pageContainer">
      {allTriplicities.map((eachTriplicity) => {
        return (
          <TriplicityCard
            className="triplicityCard"
            key={eachTriplicity.id}
            allTriplicities={allTriplicities}
            {...eachTriplicity}
          />
        );
      })}
    </div>
  );
}

export default AllTriplicities;
