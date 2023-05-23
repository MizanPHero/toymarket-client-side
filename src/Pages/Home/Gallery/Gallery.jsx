import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <h1 className="mx-auto mb-8 text-3xl font-semibold text-center text-red-600">
            Toy Gallery
          </h1>
          <div className="flex flex-wrap w-full mb-20">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font lg:w-1/3 lg:mb-0">
              Meet your favourite action hero figure
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">
              Step into a world where adventure and excitement come to life
              through action-packed toys. Behold the Action Toy Extravaganza, a
              thrilling gallery featuring an array of characters that will
              ignite your imagination and transport you to thrilling worlds of
              daring exploits.
            </p>
          </div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img data-aos="fade-down-right"
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://i.ibb.co/5vNKt9Z/500x300.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img data-aos="fade-down"
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://i.ibb.co/D7V0xZp/501x301.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img data-aos="fade-up-right"
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://i.ibb.co/zFpxkCx/600x360.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img data-aos="fade-down-left"
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://i.ibb.co/99kHq2W/601x361.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img data-aos="fade-up"
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://i.ibb.co/jVwSCMp/502x302.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img data-aos="fade-up-left"
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://i.ibb.co/84tX5km/503x303.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
