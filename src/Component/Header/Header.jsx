import React, { useState } from "react";
import NameLogo from "./NameLogo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="shadow sticky z-50 top-0 mt-8">
        <nav className="bg-gradient-to-r from-gray-900 via-gray-800 t0-black border-gray-700  border-b flex justify-between items-center px-4 lg:px-6 py-2.5 shadow-xl">
          {/* <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black border-gray-700 border-b flex justify-between items-center px-4 lg:px-6 py-2.5 shadow-xl"> */}

          {/* <Link> */}

          <div className="w-[25%] h-full  p-2 border-gray-500">
            <NameLogo />
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
          <div
            id="mobile-menu-2"
            // className="hidden justify-between items-center  w-full lg:flex lg:w-auto lg:order-1"
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:space-x-8 lg:mt-0 justify-between items-center w-full lg:w-auto lg:order-1 absolute lg:static top-16 left-0 bg-green lg:bg-transparent p-4 lg:p-0 mr-30`}
          >
            <ul className="text-amber-50 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0  ">
              <li>
                {/* <a href="#">Home</a> */}
                <a
                  href="#"
                  class="relative text-gray-300 text-lg font-medium transition duration-300 group hover:text-blue-400"
                >
                  Home
                  {/* <!-- Underline animation --> */}
                  <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>



              {/* <li>
                <a
                  href="#"
                  class="relative text-gray-300 text-lg font-medium transition duration-300 group hover:text-blue-400"
                >
                  Contact
                  <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li> */}


              <li>
                {/* <a href="#">About</a> */}
                <a
                  href="#"
                  class="relative text-gray-300 text-lg font-medium transition duration-300 group hover:text-blue-400"
                >
                  About
                  <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                {/* <a href="#">Github</a> */}

                <a
                  href="#"
                  class="relative text-gray-300 text-lg font-medium transition duration-300 group hover:text-blue-400"
                >
                  GitHub
                  <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                {/* <a href="#">Linkden</a> */}

                <a
                  href="#"
                  class="relative text-gray-300 text-lg font-medium transition duration-300 group hover:text-blue-400"
                >
                  Linkden
                  <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          {/* </Link> */}
        </nav>
      </header>
    </>
  );
}
