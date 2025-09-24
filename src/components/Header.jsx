import React from 'react';
import banner from '/banner.png';

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-32 gap-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to <span className="text-orange-600">Swift Magnate Solicitors</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Always Swift, Always Just
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="bg-white border border-orange-600 text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={banner}
            alt="banner"
            className="w- max-w-md md:max-w-lg rounded-lg "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
