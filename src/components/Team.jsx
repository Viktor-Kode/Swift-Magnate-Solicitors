import React from 'react';
import attorney1 from '/attorney1.jpg';
import attorney2 from '/attorney2.jpg';
import attorney3 from '/attorney3.jpg';

const attorneys = [
  {
    name: "Olumide Johnson",
    title: "Senior Partner",
    bio: "Specializes in corporate law and real estate transactions with 25+ years of experience.",
    image: attorney1
  },
  {
    name: "Amaka Okoye",
    title: "Partner",
    bio: "Focuses on business agreements and trust administration, known for personalized client strategies.",
    image: attorney2
  },
  {
    name: "Tunde Adebayo",
    title: "Associate Lawyer",
    bio: "Handles drafting of wills and executorships with a keen eye for detail.",
    image: attorney3
  },
];

const MeetAttorneys = () => {
  return (
    <section id="team" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Your <span className="text-yellow-600">Attorneys</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          Our experienced team of lawyers is dedicated to providing exceptional legal services tailored to your needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {attorneys.map((attorney, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={attorney.image}
              alt={attorney.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-xl mb-1">{attorney.name}</h3>
            <p className="text-yellow-600 font-medium mb-2">{attorney.title}</p>
            <p className="text-gray-700 text-base">{attorney.bio}</p>
          </div>
        ))}
      </div>

    
    </section>
  );
};

export default MeetAttorneys;
