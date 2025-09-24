import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaUser, FaClipboardList } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",   // Replace with your EmailJS service ID
        "your_template_id",  // Replace with your EmailJS template ID
        form.current,
        "your_public_key"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaEnvelope className="text-orange-600" /> Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            Have questions or need legal assistance? Fill out the form or reach
            us directly.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-lg text-gray-800">
              <FaPhoneAlt className="text-orange-600" /> +234 800 123 4567
            </p>
            <p className="flex items-center gap-3 text-lg text-gray-800">
              <FaWhatsapp className="text-green-600" /> WhatsApp: +234 800 123 4567
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold flex items-center gap-2">
                <FaUser /> Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold flex items-center gap-2">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold flex items-center gap-2">
                <FaPhoneAlt /> Phone
              </label>
              <input
                type="tel"
                name="user_phone"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold flex items-center gap-2">
                <FaClipboardList /> Type of Legal Issue
              </label>
              <select
                name="issue_type"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              >
                <option>Real Estate</option>
                <option>Business Law</option>
                <option>Wills & Trusts</option>
                <option>Corporate</option>
                <option>Litigation</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
