import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo / About */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-600 mb-4">Swift Magnate Solicitors</h1>
          <p className="text-gray-400">
            Providing trusted legal solutions with professionalism and integrity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-yellow-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-600 transition">About</a></li>
            <li><a href="#services" className="hover:text-yellow-600 transition">Services</a></li>
            <li><a href="#team" className="hover:text-yellow-600 transition">Team</a></li>
            <li><a href="#faq" className="hover:text-yellow-600 transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-yellow-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-600" /> +234 800 123 4567</p>
          <p className="flex items-center gap-2"><FaWhatsapp className="text-green-500" /> WhatsApp: +234 800 123 4567</p>
          <p className="flex items-center gap-2"><FaEnvelope className="text-yellow-600" /> info@swiftmagnate.com</p>
          <p className="mt-2 text-gray-400">123 Law Street, Lagos, Nigeria</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-600 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Swift Magnate Solicitors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
