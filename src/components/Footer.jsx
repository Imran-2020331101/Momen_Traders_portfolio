import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 py-4 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} Momen Traders. All rights reserved.</p>
    </footer>
  );
}

export default Footer;