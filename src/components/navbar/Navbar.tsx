import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white border shadow-md mb-2 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
          <Link to="/">TourTix</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-black hover:text-gray-300">About</Link>
          <Logout /> 
          {/* Add more links as needed */}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-0 w-full bg-white`}>
        <div className="flex flex-col items-center p-4">
          <Link
            to="/"
            className="text-black py-2 px-4  w-full text-center"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black py-2 px-4  w-full text-center"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Logout /> 
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
