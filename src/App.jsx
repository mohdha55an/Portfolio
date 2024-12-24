import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isIconOpen, setIsIconOpen] = useState(false);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
    setIsIconOpen((prevState) => !prevState);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen mt-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <span
        onClick={handleToggle}
        className="text-3xl cursor-pointer border-2 mt-2 ml-2 border-black rounded-full 
        p-1 hover:text-gray-400 hover:border-gray-400 transition duration-300"
        title="Toggle dark mode"
      >
        {isIconOpen ? <MdOutlineDarkMode /> : <CiLight />}
      </span>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
