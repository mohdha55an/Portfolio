import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <nav
          className="fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between 
        bg-blue-400 backdrop-blur-md text-white px-6 py-2 rounded-full z-10 w-11/12 md:w-auto"
        >
          <div className="font-semibold text-nowrap mr-4  text-lg transition-all ease-in-out transform hover:scale-105">
            <Link to="/">Mohd Hassan</Link>
          </div>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row gap-4 md:gap-8 absolute md:static top-14 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent rounded-md md:rounded-none p-4 md:p-0 z-20`}
          >
            <li>
              <Link to="/" className="hover:text-blue-600 pl-2 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/Projects" className="hover:text-blue-600 ">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Education" className="hover:text-blue-600 ">
                Education
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-blue-600  ">
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden md:block">
            <a
              href="https://github.com/mohdha55an"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-700 to-purple-700 text-white text-nowrap 
            font-semibold py-1 px-4 rounded-full ml-3 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Visit GitHub
            </a>
          </div>

          <span
            className="md:hidden cursor-pointer  text-3xl ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoCloseSharp/>: <CiMenuFries /> }
          </span>
        </nav>
      </div>
  
    </div>
  );
};

export default Navbar;


