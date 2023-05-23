import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Subscribe = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="fade-up" className="mb-24 my-container" >
      <section className="text-gray-600 body-font">
        <div className="mx-auto ">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-8 text-3xl font-semibold text-center text-red-600 text-centermx-auto sm:text-3xl title-font">
            Never miss any new action toy.
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Stay ahead of the game and never miss a thrilling release! Get the latest updates on captivating action toys that will ignite your imagination and elevate your playtime adventures.
            </p>
          </div>
          <div className="flex flex-col items-end w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="full-name"
                className="text-sm leading-7 text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200"
              />
            </div>
            <button className="px-8 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
