"use client"
import Image from "next/image"
import {motion } from 'framer-motion'
// import project from "../assets/project.jpg"
import proj1 from "../assets/proj1.jpg"
import proj2 from "../assets/proj2.jpg"
import proj3 from "../assets/proj3.png"
import proj4 from "../assets/proj4.jpg";

const projects = [
  {
    title: " E-commerce",
    desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    devstack: "MongoDb, Express, React",
    git: "#",
    Link: "#",
    src: proj1,
  },
  {
    title: " E-commerce",
    desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    devstack: "MongoDb, Express, React",
    git: "#",
    Link: "#",
    src: proj2,
  },
  {
    title: " E-commerce",
    desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    devstack: "MongoDb, Express, React",
    git: "#",
    Link: "#",
    src: proj3,
  },
  {
    title: " E-commerce",
    desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    devstack: "MongoDb, Express, React",
    git: "#",
    Link: "#",
    src: proj4,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      id="porfolio"
    >
      <h1 className="text-white text-6xl max-w-[360px] mx-auto font-semibold p-4 mb-4 text-center my-12">
        My
        <span className="text-orange-400 px-4">Projects</span>
      </h1>

      <div className="max-w-[1100px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={` mt-12 flex ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse gap-16"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devstack}
              </p>

              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href="project.link" className="mr-6">
                  Link
                </a>
                <a href="project.git">Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                        className="h-[400px] w-[500px] object-cover border
                rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio