import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "./Logout";
import { getLogged } from "../../utils/localStorage";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();
  const curr_path = location.pathname;

  const logged = getLogged();
  const links = logged
    ? [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Activity", path: "/activity" },
        { name: "Package", path: "/packages" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Login", path: "/login" },
      ];

  return (
    <nav className="bg-white border-b shadow-md mb-2 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-indigo-600 text-4xl font-bold">
          <Link to="/">TourTix</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => {
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  curr_path === link.path
                    ? "text-indigo-600 font-semibold"
                    : "text-black"
                } mt-2 hover:text-indigo-600  transition duration-300 ${link.path === '/login' ? 'bg-green-700 hover:text-white hover:font-semibold text-white p-1 px-4 rounded' :''}`}
              >
                {link.name}
              </Link>
            );
          })}

          {logged && <Logout />}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 right-0 w-full bg-white shadow-lg`}
      >
        <div className="flex flex-col items-center p-4">
          {links.map((link) => {
            return (
              <Link
                key={link.path}
                to={link.path}
                className="text-black py-2 px-4 w-full text-center hover:bg-indigo-100 transition duration-300"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            );
          })}

          {logged && <Logout />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
