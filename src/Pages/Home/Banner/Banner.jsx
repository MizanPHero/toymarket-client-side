import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="py-20 text-gray-800 bg-white">
        <div className="container flex flex-col items-center mx-auto my-12 md:flex-row md:my-24">
          <div className="flex flex-col items-start justify-center w-full p-8 space-y-6 lg:w-1/3">
            <h1 className="p-2 pl-0 text-3xl text-red-500 md:text-5xl tracking-loose">
              Toy Fusion
            </h1>
            <h2 className="mb-2 text-3xl leading-relaxed md:text-5xl md:leading-snug">
              Where Imagination Meets Action
            </h2>
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              Unleash the power of imagination and embark on thrilling
              adventures with Toy Fusion!
            </p>
            <a
              href="#"
              className="px-4 py-2 text-red-500 bg-transparent border border-red-500 rounded shadow hover:bg-red-500 hover:text-white hover:shadow-lg hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="justify-center p-8 mt-12 mb-6 ml-0 md:mb-0 md:mt-0 md:ml-12 lg:w-2/3">
            <div className="flex flex-wrap content-center justify-end h-48">
              <div>
                <img
                  className="hidden inline-block mt-28 xl:block"
                  src="https://i.ibb.co/R05SbzN/a912541a-84b0-4590-9323-f5269a96f4a4.png"
                />
              </div>
              <div>
                <img
                  className="inline-block p-8 mt-24 md:mt-0 md:p-0"
                  src="https://i.ibb.co/7QsKKYX/banner-img-2.png"
                />
              </div>
              <div>
                <img
                  className="hidden inline-block mt-28 lg:block"
                  src="https://i.ibb.co/9ybqJvZ/banner-img-3-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
