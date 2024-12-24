import React from "react";
import image from "../assets/image.jpg";
import Projects from "./Projects";

const About = () => {
  return (
    <>
    <div className="py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold mb-12">About Me</h2>
        <div className="flex md:flex-row flex-col items-center md:space-x-12 ">
          <img
            className=" w-64 h-80 rounded object-cover mb-6 md:mb-0"
            src={image}
            alt="profile"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate Frontend developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in frontend technologies, I strive to create seamless and
              efficient user experiences.
            </p>
            <div className="space-y-4  w-80%">
              <div className="flex  items-center">
                <label htmlFor="Html" className="w-2/12">
                  HTML
                </label>
                <div className="grow bg-gray-800 ml-6 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-11/12 "
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="Html" className="w-2/12">
                  CSS
                </label>
                <div className="grow bg-gray-800 ml-6 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-9/12 "
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="Html" className="w-2/12 text-nowrap ">
                  Tailwind
                </label>
                <div className="grow bg-gray-800 ml-6 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12 "
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="Html" className="w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 ml-6 rounded-full w-8 h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-11/12 "
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="Html" className="w-2/12">
                  React
                </label>
                <div className="grow bg-gray-800 ml-6 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12 "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[370px]">
        <h1 className="text-start uppercase font-bold  my-2">
          Technical Skills
        </h1>
        <div className="grid grid-cols-3 gap-4 ml-2 ">
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-red-500 to-orange-400 hover:scale-95 cursor-pointer ">
            HTML
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-blue-500 to-sky-400 hover:scale-95 cursor-pointer">
            CSS
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 hover:scale-95 cursor-pointer">
            JavaScript
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-blue-400 to-blue-500 hover:scale-95 cursor-pointer">
            React
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-green-500 to-teal-400 hover:scale-95 cursor-pointer">
            NodeJS
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-sky-400 to-blue-300 hover:scale-95 cursor-pointer">
            TailwindCSS
          </div>

          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-95 cursor-pointer">
            Redux
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-95 cursor-pointer">
            Git
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-indigo-500 to-purple-400 hover:scale-95 cursor-pointer">
            GitHub
          </div>
        </div>
      </div>

      <div className="w-[370px]">
        <h1 className="text-start uppercase font-bold my-2">Soft Skills</h1>
        <div className="grid grid-cols-2 gap-4 ml-2 ">
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-indigo-500 to-purple-400 hover:scale-95 cursor-pointer">
            Communication
          </div>

          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-95 cursor-pointer">
            Problem-Solving
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-red-500 to-orange-400 hover:scale-95 cursor-pointer">
            Time Management
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 hover:scale-95 cursor-pointer">
            Attention to Detail
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-95 cursor-pointer">
            Adaptability
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-sky-400 to-blue-300 hover:scale-95 cursor-pointer">
            Teamwork
          </div>

          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-green-500 to-teal-400 hover:scale-95 cursor-pointer">
            Collaboration
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-95 cursor-pointer">
            Creativity
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 hover:scale-95 cursor-pointer">
            AI Solving
          </div>
          <div className="text-white text-center text-lg font-semibold rounded-md bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-95 cursor-pointer">
            OwnerShip
          </div>
        </div>
      </div>
    </div>
    <Projects/>
    </>
  );
};

export default About;
