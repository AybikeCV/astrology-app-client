import React from "react";
import { Link } from "react-router-dom";

function SignCard(props) {
  return (
    <div className="signCardContainer">
      <Link to={`/signs/${props.id}`}>
        <div className="signCardImage">
          <img src={props.imgUrl} style={{ width: "200px" }} />
        </div>
        <div className="signCardInfo">
          <h4>{props.name}</h4>
        </div>
      </Link>
    </div>
  );
}
export default SignCard;
