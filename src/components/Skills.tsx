"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillsWrapper from "./SkillsWrapper";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="bg-background text-foreground w-full mx-auto py-24 lg:py-28 text-center" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 lg:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-blue-900 underline decoration-blue-900 decoration-4 dark:text-blue-200 dark:decoration-blue-200">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10 lg:mb-12"
        >
          {["all", "frontend", "backend", "tools", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                  ? "bg-slate-900 text-white shadow-lg dark:bg-blue-700"
                  : "border border-gray-200 bg-white/5 text-foreground hover:bg-slate-100 dark:border-gray-700 dark:bg-black/5 dark:hover:bg-slate-900/45"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <SkillsWrapper activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Skills;
