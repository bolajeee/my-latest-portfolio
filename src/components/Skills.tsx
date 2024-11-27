import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGoogle,
  FaGoogleDrive,
} from "react-icons/fa";
import {
  SiGooglesheets,
  SiGoogleslides,
  SiAdobe,
  SiAdobephotoshop,
  SiCoreldraw,
  SiCanva,
} from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 size={80} />, label: "HTML" },
  { icon: <FaCss3Alt size={80} />, label: "CSS" },
  { icon: <FaReact size={80} />, label: "React" },
  { icon: <FaJsSquare size={80} />, label: "JavaScript" },
  { icon: <FaGoogle size={80} />, label: "Google Docs" },
  { icon: <FaGoogleDrive size={80} />, label: "Google Drive" },
  { icon: <SiGooglesheets size={80} />, label: "Google Sheets" },
  { icon: <SiGoogleslides size={80} />, label: "Google Slides" },
  { icon: <SiAdobe size={80} />, label: "Adobe Suite" },
  { icon: <SiAdobephotoshop size={80} />, label: "Photoshop" },
  { icon: <SiCoreldraw size={80} />, label: "CorelDRAW" },
  { icon: <SiCanva size={80} />, label: "Canva" },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-t from-black to-[#381a5f] w-full mx-auto py-16 text-center">
      <div className="text-white max-w-[1100px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          My Skill Set
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-4 md:gap-8">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[130px] w-[130px] flex flex-col justify-center items-center bg-white/10 p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 hover:bg-white/20"
            >
              <div className="flex items-center justify-center h-[80px]">
                {skill.icon}
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
