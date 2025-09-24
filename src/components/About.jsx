import React from 'react';
import aboutImage from '/about.jpg'; // Optional: replace with your image

const About = () => {
  return (
    <section id="about" className="bg-light-gray py-16 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">Swift Magnate Solicitors</span>
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            At Swift Magnate Solicitors, we provide comprehensive legal services with professionalism and integrity. 
            Our team of experienced lawyers is dedicated to delivering tailored solutions for individuals and businesses alike.
          </p>
          <p className="text-gray-700 text-lg">
            We value trust, transparency, and efficiency in every case we handle, ensuring our clients receive the guidance they need to achieve successful outcomes.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img 
            src={aboutImage} 
            alt="About Swift Magnate Solicitors" 
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
