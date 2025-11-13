import React, { useState } from "react";
import NameLogo from "./NameLogo";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black border-b border-gray-700">
      <nav className="flex justify-between items-center px-4 lg:px-10 py-3">
        {/* Logo Section */}
        <div className="w-[40%] sm:w-[25%]">
          <NameLogo />
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:space-x-8 items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent p-6 lg:p-0 transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 font-medium text-gray-300 text-lg">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="relative group text-gray-300 text-lg font-medium 
             transition duration-300 hover:text-blue-400
             active:text-blue-500 lg:hover:text-blue-400"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full lg:group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="relative group"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="relative group"
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <a
                href="https://github.com/Mangeshuwagh"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="relative group"
              >
                GitHub
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/mangesh-wagh-12b333269/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="relative group"
              >
                LinkedIn
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
