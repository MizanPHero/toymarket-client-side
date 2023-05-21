import React from "react";

const ToyList = ({toy}) => {
    const {sellerName, toyName, subCategory, price, quantity} = toy;
    console.log(toy);
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
        Details
      </td>
    </tr>
  );
};

export default ToyList;
