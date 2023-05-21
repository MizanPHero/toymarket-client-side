/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function StarRating(props) {
  const rating = props.rating;
  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else if (i === Math.ceil(rating) - 1 && rating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} opacity={0.5} />);
    }
  }

  return (
    <div>
      <strong>Ratings <span className="text-red-600">{stars}</span></strong>
      
    </div>
  );
}

export default StarRating;
