import React from "react";
import image from "../assets/image.jpg";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import About from "./About";
import { Link } from "react-router";
import resume from '../assets/Hassan.pdf'

const Home = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col items-center  justify-around mt-16">
      <div>
        <img
          className="h-80  w-full rounded-full shadow-2xl transition-all ease-in-out transform hover:scale-110 "
          src={image}
          alt="my-proflie"
        />
      </div>
      <div className="items-center mt-7 md:relative right-60 ">
        <p className="font-semibold text-center">HI,I'm</p>
        <h1 className="font-bold text-center text-2xl">Mohd Hassan</h1>
        <h4 className="text-2xl text-center font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Frontend Developer
        </h4>
        <div className="flex justify-evenly my-2 ">
          <button className="border-2 border-orange-800 rounded-2xl px-4 py-2 hover:bg-orange-800 hover:text-white transition mr-2 ">
            <a href={resume} download='resume'> Download CV</a>
          </button>
          <button className="border-2 border-orange-800 rounded-2xl px-4 py-2 hover:bg-orange-800 hover:text-white transition">
            <Link to='/contact'>Contact</Link>
          </button>
        </div>
        <div className="flex flex-row justify-center gap-4 text-3xl items-center">
          <a href="https://github.com/mohdha55an">
            <IoLogoGithub />{" "}
          </a>
          <a href="https://www.linkedin.com/in/mohdha55an">
            {" "}
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    <About/>
    </>
  );
};

export default Home;
