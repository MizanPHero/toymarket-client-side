import React from "react";
import { useLoaderData } from "react-router-dom";
import StarRating from "./StarRating";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {toyName, sellerName, sellerEmail, toyPicture, subCategory, description, quantity, price, rating} = toy;
  console.log(toy);
  return (
    <div>
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <div className="w-5/6 mb-10 overflow-hidden h-1/6 lg:max-w-md lg:w-full md:w-1/2 md:mb-0">
            <img
              alt="ecommerce"
              className="object-scale-down w-full h-48 rounded  lg:h-[500px]"
              src={toyPicture}
            />
            </div>
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                {subCategory.toUpperCase()+' TOY'}
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {toyName}
              </h1>
              <div className="mb-4">
              <StarRating rating={rating} />
              </div>
              <div className="">
                <p><strong>Seller:</strong> {sellerName}</p>
                <p><strong>Seller Email:</strong> {sellerEmail}</p>
                <p><strong>Available Quantity:</strong> {quantity}</p>
              </div>
              <p className="mt-8 leading-relaxed">
                {description}
              </p>
              
              <div className="flex mt-8">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  ${price}
                </span>
                <button className="flex ml-auto btn-primary">
                 Add to Cart
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToyDetails;
