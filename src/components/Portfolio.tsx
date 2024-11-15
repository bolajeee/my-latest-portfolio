import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Portfolio = () => {
 type Project = {
   title: string;
   desc: string;
   devStack: string;
   link: string;
   git: string;
   src: string;
 };

 const projects: Project[] = [
   {
     title: "Project One",
     desc: "A description of project one.",
     devStack: "React, TailwindCSS, Framer Motion",
     link: "https://projectone.com",
     git: "https://github.com/user/projectone",
     src: "/images/project1.jpg",
   },
   {
     title: "Project Two",
     desc: "A description of project two.",
     devStack: "Next.js, Framer Motion",
     link: "https://projecttwo.com",
     git: "https://github.com/user/projecttwo",
     src: "/images/project2.jpg",
   },
 ];


  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-16"
      id="portfolio"
    >
      <div className="max-w-[1200px] mx-auto space-y-24 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-lg font-semibold">{`0${index + 1}`}</h2>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.desc}</p>
              <p className="text-sm text-gray-400">{project.devStack}</p>
              <div className="mt-4 flex space-x-6">
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
                <a href={project.git} className="text-blue-400 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;


