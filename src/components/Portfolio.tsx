"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.jpg";

const projects = [
  {
    title: "Commerce Website",
    desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    devstack: "React, Firebase",
    git: "https://github.com/bolajeee/MernFullstackApp ",
    // link: "#",
    src: proj4,
  },
  {
    title: "Movie Comparison Site",
    desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    devstack: "MongoDb, Express, React",
    git: "https://github.com/bolajeee/movie-compare-site",
    // link: "https://bolajeee.github.io/movie-compare-site/",
    src: proj1,
  },
  {
    title: "Portfolio Website",
    desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    devstack: "Next.js, Tailwind CSS",
    git: "https://github.com/bolajeee/Brainwave-AI-",
    // link: "https://bolajeee.github.io/Brainwave-AI-/",
    src: proj2,
  },
  {
    title: "Blog Platform",
    desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    devstack: "Node.js, React, MongoDB",
    git: "https://github.com/bolajeee/AI-summarizer",
    // link: "https://bolajeee.github.io/AI-summarizer/",
    src: proj3,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-32"
      id="portfolio"
    >
      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-32">
        My
        <span className="text-orange-400 px-4 underline decoration-orange-400 decoration-4">
          Projects
        </span>
      </h1>

      {/* Project Cards */}
      <div className="px-6 md:px-0 max-w-[1200px] mx-auto space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 md:gap-16`}
          >
            {/* Text Content */}
            <div className="space-y-4 max-w-lg text-center md:text-left">
              <h2 className="text-6xl font-bold text-white/70">{`0${
                index + 1
              }`}</h2>
              <h3 className="text-3xl font-semibold">{project.title}</h3>
              <p className="text-base md:text-lg text-white/70">
                {project.desc}
              </p>
              <p className="text-lg font-semibold text-orange-400">
                {project.devstack}
              </p>

              {/* Links */}
              <div className="flex justify-center md:justify-start gap-6 mt-4">
                {/* <a
                  href={project.link}
                  className="px-4 py-2 bg-orange-400 text-black rounded-md hover:bg-orange-500 transition"
                >
                  Live Demo
                </a> */}
                <a
                  href={project.git}
                  className="px-4 py-2 border border-orange-400 text-orange-400 rounded-md hover:bg-orange-400 hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: index % 2 === 1 ? 1 : -1,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={project.src}
                alt={project.title}
                className="h-[300px] md:h-[350px] lg:h-[400px] w-full object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
