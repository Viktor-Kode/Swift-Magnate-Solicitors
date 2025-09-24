import React from 'react';
import { FaBuilding, FaFileContract, FaPenFancy, FaFileSignature, FaBalanceScale } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBuilding className="w-10 h-10 text-orange-600" />,
      title: "Real Estate Transaction",
      description: "Assistance with property buying, selling, and leasing agreements."
    },
    {
      icon: <FaFileContract className="w-10 h-10 text-orange-600" />,
      title: "Management of Company Information",
      description: "Legal support for corporate documentation and regulatory compliance."
    },
    {
      icon: <FaPenFancy className="w-10 h-10 text-orange-600" />,
      title: "Business Agreement Drafting",
      description: "Drafting clear and enforceable contracts tailored to your business needs."
    },
    {
      icon: <FaFileSignature className="w-10 h-10 text-orange-600" />,
      title: "Drafting of Wills and Executorship",
      description: "Expert guidance in creating wills and managing executorships efficiently."
    },
    {
      icon: <FaBalanceScale className="w-10 h-10 text-orange-600" />,
      title: "Creation & Administration of Trust",
      description: "Establishing and administering trusts for individuals and organizations."
    },
  ];

  return (
    <section id="services" className="bg-light-gray py-16 px-6 md:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-orange-600">Services</span>
        </h2>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Swift Magnate Solicitors provides a wide range of legal services tailored to meet the needs of both individuals and businesses.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <div className="mb-4">{service.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-700 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
