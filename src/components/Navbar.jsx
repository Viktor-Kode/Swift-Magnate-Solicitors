import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center m-4">
      {/* Logo */}
      <div id="logo">
        <h1 className="text-3xl font-bold">
          Swift <span className="text-orange-600">Magnate Solicitors</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-xl font-semibold">
        <li>
          <a href="#" className="hover:text-orange-500">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-orange-500">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-orange-500">Services</a>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="hidden md:block">
        <button className="cursor-pointer p-2 w-30 h-12 rounded-xl bg-orange-600 text-white">
          <a href="#contact">Contact</a>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-8 h-8 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-4 md:hidden">
          <li>
            <a href="#" className="text-xl font-semibold hover:text-orange-500" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#about" className="text-xl font-semibold hover:text-orange-500" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#services" className="text-xl font-semibold hover:text-orange-500" onClick={toggleMenu}>Services</a>
          </li>
          <li>
            <a href="#contact" className="text-xl font-semibold">
              <button className="cursor-pointer p-2 w-28 h-12 rounded-xl bg-orange-600 text-white">Contact</button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
