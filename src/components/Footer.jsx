import React from "react";
import { FaGithub, FaLinkedin,  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      {/* Social Media Links */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/mohdha55an"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohdha55an"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a> 

          
        
        
        </div>

        {/* Copyright Section */}
        <div className="text-center md:mt-0 mt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Mohd Hassan. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
