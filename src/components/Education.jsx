import React from "react";
import Contact from "./Contact";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Computer Science Engineering [CSE]",
      Affiliated: 'Jawaharlal Nehru Technological University Hyderabad [JNTUH]',
      institution: "Shadan College of Engineering & Technology [SCET]",
      duration: "OCT 2019 - DEC 2023",
      description:
        "Focused on software engineering, algorithms, and web development.",
    },
    {
      id: 2,
      degree: "Intermediate",
      Affiliated: 'Telangana state board of intermediate education [TSBIE]',
      institution: "Mother Junior College",
      duration: "2017 - 2019",
      description: "Specialized in Science stream with Mathematics.",
    },
    {
      id: 3,
      degree: "School",
      Affiliated: 'Board of Secondary Education Telangana State [SSC]',
      institution: "Reyan High School",
      duration: "2005 - 2017",
      description: "Core subjects included Mathematics, Science, and English.",
    },
  ];
  return (
    <>
    <section id="education" className=" py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center  mb-8">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-700">
                {edu.degree}
              </h3>
              <p className="text-gray-600 font-semibold text-lg">{edu.Affiliated}</p>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.duration}</p>
              <p className="text-gray-600 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Contact/>
    </>
  );
};

export default Education;
