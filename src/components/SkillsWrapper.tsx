"use client";
import React from "react";
import dynamic from "next/dynamic";

const SkillsCarousel = dynamic(() => import("./SkillsCarousel"), { ssr: false });

const SkillsWrapper = () => {
  return <SkillsCarousel />;
};

export default SkillsWrapper;
