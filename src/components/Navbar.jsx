import React, { useState, useRef, useEffect } from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="shadow-md bg-white sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-blue-50 text-sm text-blue-800 px-4 py-3">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 text-base font-medium">
          {/* Desktop View - Full Info */}
          <div className="hidden sm:flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
            <PhoneIcon className="w-5 h-5 text-blue-600" />
            <a href="tel:+919925460006">(+91) 99254 60006</a>
          </div>
          <div className="hidden sm:flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
            <EnvelopeIcon className="w-5 h-5 text-blue-600" />
            <a href="mailto:support@maxwelladditives.com">support@maxwelladditives.com</a>
          </div>

          {/* Mobile/Tablet View - Icons Only */}
          <div className="sm:hidden flex items-center space-x-6 justify-center">
            <a href="tel:+919925460006">
              <PhoneIcon className="w-6 h-6 text-blue-600 hover:text-blue-500 transition" />
            </a>
            <a href="mailto:support@maxwelladditives.com">
              <EnvelopeIcon className="w-6 h-6 text-blue-600 hover:text-blue-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center relative">
        {/* Logo */}
        <h1 className="w-full md:w-auto text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%] relative">
          Momen Traders
        </h1>

        {/* Hamburger */}
        <button
          ref={buttonRef}
          className="absolute top-4 right-4 md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium ml-auto">
          <li><a href="#about" className="hover:text-blue-500 transition-colors duration-200">About Us</a></li>
          <li><a href="#works" className="hover:text-blue-500 transition-colors duration-200">Works</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-200">Contact</a></li>
        </ul>

        {/* Mobile Dropdown (Slide In from Right - 1/3 screen) */}
        <div
          ref={menuRef}
          className={`fixed top-[100px] right-0 w-1/3 sm:w-1/3 bg-white shadow-xl rounded-l-xl p-6 space-y-4 transition-transform duration-300 ease-in-out z-40 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-500 transition">About Us</a>
          <a href="#works" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-500 transition">Works</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
