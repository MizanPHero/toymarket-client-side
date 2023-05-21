import React from "react";
import { Link } from "react-router-dom";

const ToyList = ({toy}) => {
    const {_id, sellerName, toyName, subCategory, price, quantity} = toy;
  return (
    <tr className="border-b ">
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        {sellerName}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        {toyName}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        {subCategory}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        {price}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        {quantity}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
       <Link to={`../toy/${_id}`}><button className="btn-primary">Details</button></Link>
      </td>
    </tr>
  );
};

export default ToyList;
