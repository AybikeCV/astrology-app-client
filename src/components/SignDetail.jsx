import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";

function SignDetail({ toggleFav, favSigns }) {
  const { signId } = useParams();

  const [sign, setSign] = useState(null);

  useEffect(() => {
    getSignData();
  }, []);

  const getSignData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/signs/${signId}`,
      );
      console.log(response.data);
      setSign(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!sign) return <h3 className="loading">Loading ...</h3>;
  const isFav = favSigns.some((s) => s.id === sign.id);
  return (
    <div className="signDetailPage">
      <div>
        <h2>{sign.name}</h2>
        <br />
        <img src={sign.imgUrl} />
        <p>
          <b>Date Start:</b> {sign.dateStart}
        </p>
        <br />
        <p>
          <b>Date End:</b> {sign.dateEnd}
        </p>
        <br />
        <p>
          <b>Duality:</b> {sign.duality}
        </p>
        <br />
        <p>
          <b>Triplicity:</b> {sign.triplicityId}
        </p>
        <br />
        <p>
          <b>Ruling Planet:</b> {sign.rulingPlanet}
        </p>
        <br />
        <p>
          <b>Motto:</b> {sign.motto}
        </p>
        <br />
        <p>
          <b>Polarity:</b> {sign.polarity}
        </p>
        <br />
        <p>
          <b>Description:</b> {sign.description}
        </p>
        <br />

        <button onClick={() => toggleFav(sign)}>
          {isFav ? "⭐ Remove from Favorites" : "☆ Add to Favorites"}
        </button>
      </div>

      {sign.comments &&
        sign.comments.map((comment) => {
          return <CommentCard key={comment.id} comment={comment} />;
        })}

      <AddComment signId={sign.id} getData={getSignData} />

      <div>
        <h4>
          <Link to="/signs">Go to All 12 Zodiac Signs</Link>
          <br />
          <Link to="/">Go to HomePage</Link>
        </h4>
      </div>
    </div>
  );
}

export default SignDetail;
