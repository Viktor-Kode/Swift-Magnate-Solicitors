import React from "react";
import { FaShieldAlt, FaAward, FaBalanceScale } from "react-icons/fa";

const TrustSignals = () => {
  return (
    <section id="trust" className="bg-white py-16 px-6 md:px-20">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
           Trusted by Clients & Recognized by Institutions
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Swift Magnate Solicitors is proud to be recognized by leading legal associations
          and committed to the highest standards of professional excellence.
        </p>

        {/* Logos / Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-center">
          {/* Bar Association */}
          <div className="flex flex-col items-center">
            <FaBalanceScale className="text-orange-600 text-6xl mb-4" />
            <p className="text-gray-800 font-semibold">Nigerian Bar Association</p>
          </div>

          {/* Awards */}
          <div className="flex flex-col items-center">
            <FaAward className="text-yellow-600 text-6xl mb-4" />
            <p className="text-gray-800 font-semibold">Excellence in Legal Service Award 2024</p>
          </div>

          {/* Secure Site */}
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-green-600 text-6xl mb-4" />
            <p className="text-gray-800 font-semibold">Secure & Confidential Site</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
