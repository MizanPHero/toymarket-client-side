import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative pt-4 pb-6 my-container bg-blueGray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl text-orange-600 fonat-semibold">
              Let's give a review!
            </h4>
            <h5 className="mt-0 mb-2 text-lg text-blueGray-600">
              Tell us your opinion about our recipes
            </h5>
            <div className="mt-6 mb-6 lg:mb-0">
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faDribbble} />
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-orange-600 uppercase">
                  Information
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="#"
                    >
                      Free Recipes
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Join as Chef
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Free Food
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-orange-600 uppercase">
                  Address
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm italic font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Kitchen Chronicles
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm italic font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      1234 Main Street
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm italic font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Anytown, USA
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm italic font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Phone: 1234-56789
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-blueGray-500">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href=""
                className="text-blueGray-500 hover:text-gray-800"
                target="blank"
              >
                {" "}
                Kitchen Chronicles by
              </a>
              <br />
              <a href="" className="text-blueGray-500 hover:text-blueGray-800">
                Mizanur Rahman
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
