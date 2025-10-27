"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";

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

import projectsData from "../../data/projects.json"; // Import projects data

const projects: Project[] = projectsData.map(project => ({
  ...project,
  src: project.image // Map 'image' from JSON to 'src' for consistency
}));

const Portfolio = () => {
  return (
    <div
      className="bg-background text-foreground py-32 relative overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Featured
            <span className="text-orange-500 px-4 underline decoration-orange-500 decoration-4">
              Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto px-6">
            A showcase of my recent work, featuring full-stack applications, APIs, and modern web solutions
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="px-6 md:px-0 max-w-[1400px] mx-auto space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// New ProjectCard component to handle animations
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-between gap-12 lg:gap-20`}
    >
      {/* Text Content */}
      <motion.div
        variants={contentVariants}
        className="flex-1 space-y-6 text-center lg:text-left max-w-2xl"
      >
        {/* Project Number */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block"
        >
          <span className="text-7xl md:text-8xl font-bold text-orange-500/20 leading-none">
            {`0${index + 1}`}
          </span>
        </motion.div>

        {/* Project Title */}
        <motion.h3
          variants={contentVariants}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          {project.title}
        </motion.h3>

        {/* Project Description */}
        <motion.p
          variants={contentVariants}
          className="text-base md:text-lg text-secondary leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div variants={contentVariants} className="space-y-3">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <FaCode className="text-orange-500" />
            <h4 className="text-lg font-semibold text-foreground">Tech Stack</h4>
          </div>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {project.techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-500 text-sm font-medium rounded-full border border-orange-500/30 hover:border-orange-500/50 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <motion.div variants={contentVariants} className="space-y-3">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <FaRocket className="text-orange-500" />
              <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {project.keyFeatures.map((feature, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                  className="px-4 py-2 bg-white/5 dark:bg-black/5 text-foreground text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-colors"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          variants={contentVariants}
          className="flex justify-center lg:justify-start gap-4 pt-4"
        >
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Button className="flex items-center gap-2">
              <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
              Live Demo
            </Button>
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Button variant="outline" className="flex items-center gap-2">
              <FaGithub className="group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Project Image */}
      <motion.div
        variants={imageVariants}
        className="flex-1 max-w-2xl"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative group overflow-hidden rounded-2xl shadow-2xl"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/10">
            <Image
              src={project.src}
              alt={project.title}
              width={project.width}
              height={project.height}
              className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <h4 className="text-white font-semibold text-lg mb-2">{project.title}</h4>
                <p className="text-white/80 text-sm line-clamp-2">
                  {project.description.substring(0, 100)}...
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/30 transition-colors duration-300" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
