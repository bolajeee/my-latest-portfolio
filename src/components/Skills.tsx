import React from "react";
import SkillsWrapper from "./SkillsWrapper";

const Skills = () => {
  return (
    <div className="bg-background text-foreground w-full mx-auto py-32 text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          My <span className="text-primary">Skill Set</span>
        </h2>
        <SkillsWrapper />
      </div>
    </div>
  );
};

export default Skills;