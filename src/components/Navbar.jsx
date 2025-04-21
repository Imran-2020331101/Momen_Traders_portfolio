import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About Us", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-800 bg-clip-text text-transparent animate-text-glow tracking-tight">
          Momen Traders
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-gray-800 hover:text-blue-600 transition duration-300
                  before:content-[''] before:absolute before:-bottom-1 before:left-0
                  before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all
                  before:duration-300 hover:before:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg transition-all duration-300 ease-in-out origin-top-right ${
              isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="py-2 text-gray-700 font-medium">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
