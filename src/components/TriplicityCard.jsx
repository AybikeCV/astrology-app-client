import React from "react";
import { Link } from "react-router-dom";

function TriplicityCard(props) {
  return (
    <div className="triplicityCardContainer">
      <Link to={`/triplicities/${props.id}`}>
        <div className="triplicityCardImage">
          <img src={props.imgUrl} style={{ height: "200px" }} />
        </div>
        <div className="triplicityCardInfo"></div>
      </Link>
    </div>
  );
}
export default TriplicityCard;
