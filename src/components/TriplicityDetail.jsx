import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function TriplicityDetail() {
  const { triplicityId } = useParams();

  const [triplicity, setTriplicity] = useState(null);

  useEffect(() => {
    getTriplicityData();
  }, []);

  const getTriplicityData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/triplicities/${triplicityId}?_embed=signs`,
      );
      console.log(response.data);
      setTriplicity(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!triplicity) return <h3 className="loading">Loading ...</h3>;

  return (
    <div className="triplicityDetailPage">
      <h4>{triplicity.name}</h4>
      <img src={triplicity.imgUrl} style={{ height: "200px" }} />
      <p>{triplicity.description}</p>

      <h5>Zodiac Signs That Belongs To This Triplicity: </h5>
      {triplicity.signs.map((eachSign) => {
        return (
          <div>
            {" "}
            <Link to={`/signs/${eachSign.id}`}>
              <img src={eachSign.imgUrl} style={{ width: "200px" }} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default TriplicityDetail;
