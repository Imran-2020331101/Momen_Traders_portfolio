import React, { useState, useRef, useEffect } from "react";
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";
import Momen_logo from "../assets/icons/Momen_logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navbuttons = [
    { title: "About Us", href: "#about" },
    { title: "Products", href: "#works" },
    { title: "Events", href: "#nav" },
    { title: "Blogs", href: "#nav" },
    { title: "Career", href: "#nav" },
    { title: "Contact", href: "#contact" },
  ];

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

  const productCategories = [
    {
      title: "Computer Electronics",
      items: ["Laptop", "Monitor", "Keyboards", "Mices", "Headphones"],
    },
    {
      title: "Chemical Products",
      items: ["Solvents", "Resins", "Pigments", "Lubricants", "Cleaners"],
    },
    {
      title: "Garments Accessories",
      items: ["Buttons", "Zippers", "Labels", "Tapes", "Threads"],
    },
    {
      title: "Digital LED Screens",
      items: ["Indoor", "Outdoor", "Flexible", "Transparent", "Rental"],
    },
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-40 z-30 transition-opacity duration-300"></div>
      )}

      <nav className="bg-[#f8f6e1] z-50">
        <div className="bg-gradient-to-r from-[#FDFBEE] to-blue-50 text-sm text-blue-800 px-4 py-3">
          <div className="container mx-auto flex flex-col sm:flex-row justify-around sm:justify-end items-center gap-4 text-base font-medium">
            <div className="hidden sm:flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
              <ClockIcon className="w-5 h-5 text-blue-600 hover:scale-110 transform transition" />
              Working Hours: 9am - 6pm
            </div>
            <div className="hidden sm:flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
              <PhoneIcon className="w-5 h-5 text-blue-600 hover:scale-110 transform transition" />
              (+880) 1906019777
            </div>
            <div className="hidden sm:flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
              <EnvelopeIcon className="w-5 h-5 text-blue-600 hover:scale-110 transform transition" />
              <a href="mailto:support@momentraders.com">
                support@momentraders.com
              </a>
            </div>
            <div className="sm:hidden flex items-center space-x-6 justify-center py-2">
              <a href="tel:+8801906019777">
                <PhoneIcon className="w-6 h-6 text-blue-600 hover:text-blue-500 hover:scale-110 transform transition" />
              </a>
              <a href="mailto:support@momentraders.com">
                <EnvelopeIcon className="w-6 h-6 text-blue-600 hover:text-blue-500 hover:scale-110 transform transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center relative">
          <Link to="/">
            <img className="w-65 ml-6" src={Momen_logo} alt="Main logo" />
          </Link>

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
            {navbuttons.map((item, index) => {
              if (item.title === "Products") {
                return (
                  <li key={index} className="relative group">
                    <button className="relative inline-block px-2 py-1 hover:text-blue-500 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform">
                      {item.title}
                    </button>
                    {/* Submenu (Category Level) */}
                    <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {productCategories.map((cat, i) => (
                        <li key={i} className="relative group/item">
                          <div className="px-4 py-2 text-gray-800 hover:text-blue-500 cursor-pointer whitespace-nowrap">
                            {cat.title}
                          </div>
                          {/* Sub-submenu (Items Level) */}
                          <ul className="absolute top-0 left-full mt-0 ml-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50">
                            {cat.items.map((sub, idx) => (
                              <li
                                key={idx}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className="relative inline-block px-2 py-1 hover:text-blue-500 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Dropdown */}
          <div
            ref={menuRef}
            className={`fixed top-[100px] right-0 w-2/3 bg-[#0f1a20] shadow-xl rounded-l-xl p-6 space-y-4 transition-transform duration-300 ease-in-out z-40 md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {navbuttons.map((item, index) => {
              if (item.title === "Products") {
                return (
                  <div key={index}>
                    <div
                      className="text-white px-2 py-2 cursor-pointer hover:text-blue-400"
                      onClick={() => setProductOpen(!productOpen)}
                    >
                      {item.title}
                    </div>
                    {productOpen && (
                      <div className="ml-4 space-y-2">
                        {productCategories.map((cat, i) => (
                          <div key={i}>
                            <div className="text-blue-300 font-medium">
                              {cat.title}
                            </div>
                            <ul className="ml-4 text-blue-100">
                              {cat.items.map((sub, idx) => (
                                <li key={idx}>{sub}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block relative text-white px-2 py-2 hover:text-blue-400 transition after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                >
                  {item.title}
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
