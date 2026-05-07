import React from "react";
import { Link } from "react-router-dom";

function SignCard(props) {
  return (
    <div className="card">
      <Link to={`/signs/${props.id}`}>
        <div className="signcardImage">
          <img src={props.imgUrl} />
        </div>
        <div className="signCardInfo">
          <h4>{props.name}</h4>
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          props.toggleFav(props);
        }}
      >
        {props.isFav ? "⭐ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
    </div>
  );
}
export default SignCard;
