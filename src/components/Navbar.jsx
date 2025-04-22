import React, { useState, useRef, useEffect } from 'react';

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
      <div className="bg-blue-50 text-blue-800 text-sm px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Icons only on small screens */}
          <div className="flex md:hidden gap-4 text-xl text-blue-700">
            <a href="tel:+919925460006" className="hover:text-blue-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.14 3.42a1 1 0 01-.26 1.06l-1.77 1.77a16.1 16.1 0 006.07 6.07l1.77-1.77a1 1 0 011.06-.26l3.42 1.14a1 1 0 01.68.95V19a2 2 0 01-2 2h-.5C6.5 21 3 17.5 3 13.5V13a2 2 0 012-2h.5z" />
              </svg>
            </a>
            <a href="mailto:support@maxwelladditives.com" className="hover:text-blue-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm4 4l8 4-8 4V8z" />
              </svg>
            </a>
          </div>

          {/* Text Info for larger screens */}
          <div className="hidden md:flex w-full justify-end gap-8 text-base font-semibold">
            <a href="tel:+919925460006" className="flex items-center gap-2 hover:text-blue-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.14 3.42a1 1 0 01-.26 1.06l-1.77 1.77a16.1 16.1 0 006.07 6.07l1.77-1.77a1 1 0 011.06-.26l3.42 1.14a1 1 0 01.68.95V19a2 2 0 01-2 2h-.5C6.5 21 3 17.5 3 13.5V13a2 2 0 012-2h.5z" />
              </svg>
              (+91) 99254 60006
            </a>
            <a href="mailto:support@maxwelladditives.com" className="flex items-center gap-2 hover:text-blue-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm4 4l8 4-8 4V8z" />
              </svg>
              support@maxwelladditives.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center relative">
        {/* Logo */}
        <h1 className="w-full md:w-auto text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%] hover:before:content-['✨'] hover:before:absolute hover:before:-top-2 hover:before:-right-4 hover:before:text-yellow-300 hover:before:animate-sparkle">
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

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-xl px-6 py-4 space-y-4 md:hidden transition-all duration-300"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-500 transition">About Us</a>
            <a href="#works" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-500 transition">Works</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-500 transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
