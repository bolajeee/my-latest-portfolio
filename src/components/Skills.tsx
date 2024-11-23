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
  { icon: <FaHtml5 size={100} />, label: "HTML" },
  { icon: <FaCss3Alt size={100} />, label: "CSS" },
  { icon: <FaReact size={100} />, label: "React" },
  { icon: <FaJsSquare size={100} />, label: "JavaScript" },
  { icon: <FaGoogle size={100} />, label: "Google Docs" },
  { icon: <FaGoogleDrive size={100} />, label: "Google Drive" },
  { icon: <SiGooglesheets size={100} />, label: "Google Sheets" },
  { icon: <SiGoogleslides size={100} />, label: "Google Slides" },
  { icon: <SiAdobe size={100} />, label: "Adobe Suite" },
  { icon: <SiAdobephotoshop size={100} />, label: "Photoshop" },
  { icon: <SiCoreldraw size={100} />, label: "CorelDRAW" },
  { icon: <SiCanva size={100} />, label: "Canva" },
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] w-full mx-auto text-center items-center">
      <div className="text-white max-w-[1100px] mx-auto p-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-32">My Skill Set</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 hover:bg-white/20"
            >
              {skill.icon}
              <p className="mt-2 text-sm sm:text-base">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
