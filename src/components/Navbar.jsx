import React, { useState, useRef, useEffect } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Momen_logo from '../assets/icons/Momen_logo.png'
import { Link } from "react-router-dom";

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Fade background overlay when mobile menu is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-40 z-30 transition-opacity duration-300"></div>
      )}

      <nav className="shadow-md bg-white sticky top-0 z-50">
        {/* Top Info Bar */}
        <div className="bg-blue-50 text-sm text-blue-800 px-4 py-3">
          <div className="container mx-auto flex flex-col sm:flex-row justify-around sm:justify-end items-center gap-4 text-base font-medium">
            {/* Desktop View - Full Info */}
            <div className="hidden sm:flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
              <PhoneIcon className="w-5 h-5 text-blue-600" />
              <a href="tel:+919925460006">(+880) 1906019777</a>
            </div>
            <div className="hidden sm:flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
              <EnvelopeIcon className="w-5 h-5 text-blue-600" />
              <a href="mailto:support@maxwelladditives.com">
                support@momentraders.com
              </a>
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
          <Link to='/'>
            <h1 className="w-full md:w-auto text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%] relative">
              <img className="w-2xs pl-6"
                src={Momen_logo} alt="Main logo" />
            </h1>
          </Link>

          {/* Hamburger */}
          <button
            ref={buttonRef}
            className="absolute top-4 right-4 md:hidden text-gray-700 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium ml-auto pr-18">
            {["About Us", "Works", "Contact"].map((item, index) => {
              const href = ["#about", "#works", "#contact"][index];
              return (
                <li key={item}>
                  <a
                    href={href}
                    className="relative inline-block px-2 py-1 hover:text-blue-500 transition
                     after:content-[''] after:absolute after:bottom-0 after:left-0
                     after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100
                     after:origin-left after:transition-transform"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Dropdown */}
          <div
            ref={menuRef}
            className={`fixed top-[100px] right-0 w-1/3 bg-[#0f1a20] shadow-xl rounded-l-xl p-6 space-y-4 
              transition-transform duration-300 ease-in-out z-40 md:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {["About Us", "Works", "Contact"].map((item, index) => {
              const href = ["#about", "#works", "#contact"][index];
              return (
                <a
                  key={item}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block relative text-white px-2 py-2 hover:text-blue-400 transition
                   after:content-[''] after:absolute after:bottom-1 after:left-0
                   after:w-full after:h-0.5 after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100
                   after:origin-left after:transition-transform"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
