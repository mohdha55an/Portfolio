import React from "react";
import portfolio from "../assets/Portfolio.png";
import Ecommerce from "../assets/ecommerce.png";
import food from "../assets/food.png";
import todo from "../assets/todo.png";
import university from "../assets/university.png";
import Cards from "./Cards";
import Education from "./Education";

const Projects = () => {
  const ProjectItems = [
    {
      // portfolio
      id: 1,
      img: portfolio,
      name: "Portfolio",
      desc: "A responsive personal portfolio website designed to showcase projects, skills, and contact information. Featuring a clean, modern design with detailed project descriptions, skill summaries, and an easy-to-navigate layout, it provides a polished and professional presentation of individual achievements on any device.",
      Github: "https://github.com/mohdha55an/Portfolio",
      Demo: "https://ha55an-portfolio.vercel.app/",
    },
    {
      id: 2,
      img: Ecommerce,
      name: "e-Shop",
      desc: "Developed a responsive e-commerce platform using React.js, Tailwind CSS, Redux, and React Router. Implemented dynamic product listings, shopping cart, and other functionality. Leveraged Redux for state management and React Router for seamless navigation, ensuring an optimized and scalable user experience.",
      Github: "https://github.com/mohdha55an/e-Shop",
      Demo: "https://e-shop55.vercel.app/",
    },
    {
      id: 3,
      img: food,
      name: "Zioggy",
      desc: "Engineered a multi-page food delivery web app using React, JavaScript, Redux, React Router, Tailwind CSS, HTML, and CSS. Ensured full responsiveness and implemented dynamic features like real-time cart updates, interactive menus, and seamless navigation to enhance user engagement and operational efficiency.",
      Github: "https://github.com/mohdha55an/Zioggy",
      Demo: "https://zioggyin.vercel.app/",
    },
    {
      id: 4,
      img: university,
      name: "University",
      desc: "Developed a modern university information portal with React and Tailwind CSS, offering dynamic routing, responsive design, and structured content presentation. Integrated academic program details, contact forms, and department listings to simulate a real-world university site experience.",
      Github: "https://github.com/mohdha55an/FCS-University",
      Demo: "https://fcs-university.vercel.app/",
    },

    {
      id: 5,
      img: todo,
      name: "Todo",
      desc: "Developed a responsive Todo Application using React.js, Tailwind CSS, Redux, and React Router. Enabled users to create, edit, delete, and filter tasks with a dynamic and intuitive UI. Integrated Redux for efficient state management, ensuring real-time task updates and seamless navigation. The application emphasizes performance, scalability, and user experience.",
      Github: "https://github.com/mohdha55an/chat-app",
      Demo: "https://todo-mu-ruby.vercel.app/",
    },
    
  ];

  return (
    <div>
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 ">
          {ProjectItems.map((items) => {
            return <Cards key={items.id} item={items} />;
          })}
        </div>
      </div>
      <Education />
    </div>
  );
};

export default Projects;
