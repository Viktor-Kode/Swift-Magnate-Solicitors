import React from 'react';
import { FaAward, FaDollarSign, FaUserTie, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { icon: <FaAward />, title: "20+ Years of Experience" },
    { icon: <FaDollarSign />, title: "Transparent Fees" },
    { icon: <FaUserTie />, title: "Personalized Legal Strategy" },
    { icon: <FaCheckCircle />, title: "Proven Track Record" },
  ];

  return (
    <section className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why <span className="text-yellow-400">Choose Us</span>
        </h2>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
          Experience, transparency, and personalized strategies set us apart.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-yellow-400 text-blue-900 w-20 h-20 flex items-center justify-center rounded-full mb-4 text-2xl">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-xl">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
