import React from "react";
import StarRating from "../../ToyDetails/StarRating";
import { Link } from "react-router-dom";

const Card = ({ toy }) => {
  const {
    _id,
    toyName,
    price,
    rating,
    toyPicture,
    description,
  } = toy;
  return (
    <div>
      <div className="w-full px-3 py-6">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          <div
            className="p-4 bg-top bg-no-repeat bg-cover h-80"
            style={{ backgroundImage: `url(${toyPicture})` }}
          ></div>
          <div className="p-4">
            <p className="text-sm font-bold tracking-wide text-gray-700 uppercase">
              {toyName}
            </p>
            <p className="text-3xl text-gray-900">${price}</p>
            <p className="text-gray-700">{description.substring(0,120)}</p>

            <StarRating rating={rating} />


          </div>
          <div className="flex p-4 text-gray-700 ">
            <Link to={`../toy/${_id}`}><button className="btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
