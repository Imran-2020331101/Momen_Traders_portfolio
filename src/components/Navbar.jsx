import React from 'react';

function Navbar() {
  return (
    <nav className="py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">Momen Traders</h1>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <a 
              href="#about" 
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#works" 
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Works
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
