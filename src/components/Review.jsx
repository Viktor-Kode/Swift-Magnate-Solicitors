import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    quote:
      "Swift Magnate Solicitors handled my property transaction seamlessly. I felt protected every step of the way.",
    name: "– Mrs. Adebayo",
    case: "Real Estate"
  },
  {
    quote:
      "They drafted my business agreements with such clarity. I can now run operations confidently.",
    name: "– Chinedu O.",
    case: "Business Law"
  },
  {
    quote:
      "Professional, transparent, and always available. They made the will drafting process simple for my family.",
    name: "– Fatima K.",
    case: "Wills & Executorship"
  },
  {
    quote:
      "Our company trusts Swift Magnate for all compliance and legal documentation. They always deliver.",
    name: "– Adewale Group Ltd.",
    case: "Corporate Law"
  },
  {
    quote:
      "The team built a personalized legal strategy that won my case. Highly recommend them!",
    name: "– Ijeoma M.",
    case: "Litigation"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 px-6 md:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          💬 Client <span className="text-yellow-600">Testimonials</span>
        </h2>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Hear what our satisfied clients have to say about working with us.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 rounded-lg shadow p-8 text-center">
              <p className="text-lg italic text-gray-800 mb-6">“{t.quote}”</p>
              <h3 className="font-semibold text-yellow-600">{t.name}</h3>
              <p className="text-gray-600 text-sm">{t.case}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
