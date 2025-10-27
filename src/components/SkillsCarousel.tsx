"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

interface SkillsCarouselProps {
  activeTab: string;
}

const SkillsCarousel = ({ activeTab }: SkillsCarouselProps) => {
  const [filteredSkills, setFilteredSkills] = useState(skillsData);

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredSkills(skillsData);
    } else {
      const filtered = skillsData.filter(category =>
        category.category.toLowerCase().includes(activeTab.toLowerCase()) ||
        (activeTab === "tools" && category.category.toLowerCase().includes("tools"))
      );
      setFilteredSkills(filtered);
    }
  }, [activeTab]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="space-y-16"
      >
        {filteredSkills.map((category, categoryIndex) => (
          <motion.div
            key={`${category.category}-${activeTab}`}
            variants={categoryVariants}
            className="space-y-8"
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-orange-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {category.category}
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={categoryVariants}
            >
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = iconComponents[skill.icon];
                return (
                  <motion.div
                    key={`${skill.name}-${activeTab}`}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className="h-[120px] w-full flex flex-col justify-center items-center bg-white/5 dark:bg-black/5 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 backdrop-blur-sm">
                      {/* Skill Icon */}
                      <div className="flex items-center justify-center h-[60px] text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                        {IconComponent && <IconComponent size={40} />}
                      </div>

                      {/* Skill Name */}
                      <p className="mt-3 text-sm md:text-base font-medium text-foreground text-center leading-tight">
                        {skill.name}
                      </p>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillsCarousel;