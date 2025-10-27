"use client";
import React from "react";
import dynamic from "next/dynamic";

const SkillsCarousel = dynamic(() => import("./SkillsCarousel"), { ssr: false });

interface SkillsWrapperProps {
  activeTab: string;
}

const SkillsWrapper = ({ activeTab }: SkillsWrapperProps) => {
  return <SkillsCarousel activeTab={activeTab} />;
};

export default SkillsWrapper;
