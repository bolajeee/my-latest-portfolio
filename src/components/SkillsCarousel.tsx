"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGoogle,
  FaGoogleDrive,
  FaSass,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiGooglesheets,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiVuedotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiBootstrap,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFastapi,
  SiVercel,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";
import skillsData from "../../data/skills.json";

const iconComponents: { [key: string]: React.ComponentType<any> } = {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGoogle,
  FaGoogleDrive,
  FaSass,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  SiGooglesheets,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiVuedotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiBootstrap,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFastapi,
  SiVercel,
  SiCanva,
  SiAdobephotoshop,
};

const SkillsCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {skillsData.map((category, index) => (
          <div key={index} className="embla__slide">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-orange-500">
              {category.category}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {category.skills.map((skill, index) => {
                const IconComponent = iconComponents[skill.icon];
                return (
                  <div
                    key={index}
                    className="h-[100px] w-[100px] flex flex-col justify-center items-center bg-white/5 dark:bg-black/5 p-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-center h-[60px] text-orange-500">
                      {IconComponent && <IconComponent size={40} />}
                    </div>
                    <p className="mt-3 text-sm md:text-base font-medium text-foreground">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;