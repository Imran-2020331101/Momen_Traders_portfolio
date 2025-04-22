import React, { useEffect, useState } from 'react';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-[#0f1a20] to-gray-800 py-6 text-center text-gray-200 font-medium tracking-wide">
        <p className="text-lg md:text-xl text-gray-100">
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white">Momen Traders</span>. All rights reserved.
        </p>
      </footer>

      {/* Floating Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7-7-7 7M12 3v18" />
          </svg>
        </button>
      )}
    </>
  );
}

export default Footer;
