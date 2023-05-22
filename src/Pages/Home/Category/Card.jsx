import React from "react";

const Card = ({toy}) => {
    // const {_id, sellerName, toyName, subCategory, price, quantity, description} = toy;
  return (
    <div>
      <div className="px-2">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl md:flex">
          <div
            className="h-56 bg-bottom bg-cover md:h-auto md:w-56"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)",
            }}
          ></div>
          <div>
            <div className="p-4 md:p-5">
              <p className="text-xl font-bold md:text-2xl">
                {toyName}
              </p>
              <p className="text-gray-700 md:text-lg">
                {/* {description} */}
              </p>
            </div>
            <div className="p-4 bg-gray-100 md:p-5">
              <div className="sm:flex sm:justify-between sm:items-center">
                <div>
                  <div className="text-lg text-gray-700">
                    <span className="font-bold text-gray-900">17</span> per
                    person*
                  </div>
                  <div className="flex items-center">
                    <div className="flex inline-flex -mx-px"></div>
                    <div className="mt-1 ml-2 text-sm text-gray-600 md:text-base">
                      28 reviews
                    </div>
                  </div>
                </div>
                <button className="px-5 py-2 mt-3 font-bold text-white bg-indigo-700 rounded-lg shadow-md sm:mt-0 md:py-3 md:px-6 hover:bg-indigo-600 md:text-lg">
                  Book now
                </button>
              </div>
              <div className="mt-3 text-sm text-gray-600 md:text-base">
                *Prices may vary depending on selected date.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
