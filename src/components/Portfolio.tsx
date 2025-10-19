"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";

// Define the Project interface
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  keyFeatures?: string[];
  githubLink: string;
  liveLink: string;
  src: string;
  width: number;
  height: number;
}

// Define the ProjectCardProps interface
interface ProjectCardProps {
  project: Project;
  index: number;
}

// Removed direct image imports (proj1, proj2, etc.)

import projectsData from "../../data/projects.json"; // Import projects data

const projects: Project[] = projectsData.map(project => ({
  ...project,
  src: project.image // Map 'image' from JSON to 'src' for consistency
}));

const Portfolio = () => {
  return (
    <div
      className="bg-background text-foreground py-32" // Use theme variables
      id="projects"
    >
      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-32">
        My
        <span className="text-orange-500 px-4 underline decoration-orange-500 decoration-4">
          Projects
        </span>
      </h1>

      {/* Project Cards */}
      <div className="px-6 md:px-0 max-w-[1200px] mx-auto space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

// New ProjectCard component to handle animations
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`flex flex-col ${
        index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-8 md:gap-16`}
    >
      {/* Text Content */}
      <div className="space-y-4 max-w-lg text-center md:text-left">
        <h2 className="text-6xl font-bold text-orange-500">
          {`0${index + 1}`}
        </h2>
        <h3 className="text-3xl font-semibold text-foreground">{project.title}</h3>
        <p className="text-base md:text-lg text-secondary">{project.description}</p>

        <div> {/* Wrapper for Tech Stack */}
          <h4 className="text-xl font-semibold text-foreground block mt-4">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-orange-500/20 text-orange-500 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div> {/* Wrapper for Key Features */}
            <h4 className="text-xl font-semibold text-foreground block mt-4">Key Features:</h4>
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              {project.keyFeatures.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-orange-500/20 text-orange-500 text-sm rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <a href={project.liveLink}>
            <Button>Live Demo</Button>
          </a>
          <a href={project.githubLink}>
            <Button variant="outline">GitHub</Button>
          </a>
        </div>
      </div>

      {/* Image */}
      <div
        className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
      >
        <Image
          src={project.src}
          alt={project.title}
          width={project.width}
          height={project.height}
          className="h-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[550px] object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Portfolio;
