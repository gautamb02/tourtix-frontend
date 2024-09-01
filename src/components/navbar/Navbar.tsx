import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white border-b shadow-md  text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-indigo-600 text-2xl font-bold">
          <Link to="/">TourTix</Link>
        </div>
        <div className="hidden  md:flex space-x-6">
          <Link to="/" className="text-black mt-2 hover:text-indigo-600 transition duration-300">Home</Link>
          <Link to="/about" className="text-black mt-2 hover:text-indigo-600 transition duration-300">About</Link>
          <Link to="/dashboard" className="text-black mt-2 hover:text-indigo-600 transition duration-300">Dashboard</Link>
          <Link to="/activity" className="text-black mt-2 hover:text-indigo-600 transition duration-300">Activity</Link>
          <Logout />
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
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-0 w-full bg-white shadow-lg`}>
        <div className="flex flex-col items-center p-4">
          <Link
            to="/"
            className="text-black py-2 px-4 w-full text-center hover:bg-indigo-100 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black py-2 px-4 w-full text-center hover:bg-indigo-100 transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="text-black py-2 px-4 w-full text-center hover:bg-indigo-100 transition duration-300"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
          <Link
            to="/activity"
            className="text-black py-2 px-4 w-full text-center hover:bg-indigo-100 transition duration-300"
            onClick={toggleMenu}
          >
            Activity
          </Link>
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
