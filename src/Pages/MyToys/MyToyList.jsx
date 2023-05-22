import React from 'react';
import { Link } from 'react-router-dom';

const MyToyList = ({toy, handleDelete}) => {

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
       <Link to={`../updateToy/${_id}`}><button className="px-4 py-2 font-bold text-white transition-colors duration-300 bg-blue-500 rounded shadow-md hover:bg-blue-600">Edit</button></Link>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
       <button onClick={()=> handleDelete(_id)} className="px-4 py-2 font-bold text-white transition-colors duration-300 bg-red-800 rounded shadow-md hover:bg-red-900">Delete</button>
      </td>
    </tr>
  );
};

export default MyToyList;