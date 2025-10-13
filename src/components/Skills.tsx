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
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaGoogle />, label: "Google Docs" },
  { icon: <FaGoogleDrive />, label: "Google Drive" },
  { icon: <SiGooglesheets />, label: "Sheets" },
  { icon: <SiGoogleslides />, label: "Slides" },
  { icon: <SiAdobe />, label: "Adobe Suite" },
  { icon: <SiAdobephotoshop />, label: "Photoshop" },
  { icon: <SiCoreldraw />, label: "CorelDRAW" },
  { icon: <SiCanva />, label: "Canva" },
];

const Skills = () => {
  return (
    <div className="bg-background text-foreground w-full mx-auto py-32 text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          My <span className="text-primary">Skill Set</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-4 md:gap-8">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[130px] w-[130px] flex flex-col justify-center items-center bg-white/5 dark:bg-black/5 p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200 dark:border-gray-700" // Use theme-aware background and border
            >
              <div className="flex items-center justify-center h-[80px] text-primary"> {/* Apply text-primary to icons */}
                {React.cloneElement(skill.icon, { size: 60 })} {/* Clone element to pass size prop */}
              </div>
              <p className="mt-3 text-sm md:text-base font-medium text-foreground">
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
